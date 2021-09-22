export default {
 methods: {
    
    renderImage(idVal) {
    let imgElement = document.createElement('img');
    if (idVal === "preview"){
      imgElement.className = "draggable prev";
    } else {
      imgElement.className = "draggable real"
    }
    imgElement.id = idVal;
    document.getElementById("container").appendChild(imgElement);
    
    let cv = window.cv;

    var fontName = "Comic Sans MS";
    let fontSize = parseInt(this.fontsize);
    let gapWidth = (fontSize * parseInt(this.bubblegap)) / 100;
    let outlineThickness = (fontSize * parseInt(this.bubblethickness)) / 100;
    let padding = gapWidth + outlineThickness;
    let removeText = this.blank;
    let darkMode = this.dark;
    let text = this.text;
    var tCtx = document.getElementById("textCanvas").getContext("2d"); //Hidden canvas
    let blurRadius = 3;

    let borderColorRgb = this.outlinecolor;
    let color = null;
    var r = parseInt(borderColorRgb[0]);
    var g = parseInt(borderColorRgb[1]);
    var b = parseInt(borderColorRgb[2]);

    if (darkMode) {
      color = new cv.Scalar(255 - r, 255 - g, 255 - b);
    } else {
      color = new cv.Scalar(r, g, b);
    }

    tCtx.font = fontSize + "px " + fontName;
    var spaceWidth = tCtx.measureText(" ").width;
    var lineHeight = 1.25 * fontSize + padding;

    var lines = text.split("\n");
    var lineCount = 0;
    var maxLineWidth = 0;
    var images = [];
    for (var i = 0; i < lines.length; i++) {
      images[lineCount] = [];
      var words = lines[i].split(" ");
      var x = -spaceWidth;
      var wordCount = 0;
      for (var j = 0; j < words.length; j++) {
        x = x + spaceWidth;
        var word = words[j];
        if (word === "") {
          continue;
        }
        tCtx.font = fontSize + "px " + fontName;

        var wordWidth = tCtx.measureText(word).width;

        tCtx.canvas.height = lineHeight + padding * 2;
        tCtx.canvas.width = wordWidth + padding * 2;

        tCtx.fillStyle = "white";
        tCtx.fillRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);
        tCtx.font = fontSize + "px " + fontName;
        tCtx.fillStyle = "black";
        tCtx.fillText(word, padding, fontSize + padding);

        let img = cv.imread("textCanvas");
        let borderImage = this.bubbleWord(
          img,
          color,
          removeText,
          darkMode,
          gapWidth,
          outlineThickness,
          blurRadius
        );



        images[lineCount][wordCount] = [
          borderImage,
          new cv.Rect(
            x,
            lineHeight * lineCount,
            tCtx.canvas.width,
            tCtx.canvas.height
          ),
        ];

        x = x + wordWidth;
        wordCount++;
      }
      var lineWidth = x + padding;
      if (lineWidth > maxLineWidth) {
        maxLineWidth = lineWidth;
      }
      lineCount++;
    }
    // Reset
    tCtx.canvas.height = lineCount * lineHeight + padding * 2; // extra padding for top/bottom (no overlap)
    tCtx.canvas.width = maxLineWidth + padding;
    // Clear
    let finalImage = cv.Mat.zeros(
      tCtx.canvas.height,
      tCtx.canvas.width,
      cv.CV_8UC3
    );
    if (!darkMode) {
      cv.bitwise_not(finalImage, finalImage);
    }

    for (var k = 0; k < images.length; k++) {
      for (var l = 0; l < images[k].length; l++) {
        var image = images[k][l][0];
        cv.imshow("textCanvas", image);

        let outputImage = document.getElementById(idVal);
        outputImage.src = document.getElementById("textCanvas").toDataURL();

        let previewImage = document.getElementById("preview");
        previewImage.src = document.getElementById("textCanvas").toDataURL();

        var rect = images[k][l][1];
        let dest = finalImage.roi(rect);
        if (darkMode) {
          cv.bitwise_or(dest, image, dest);
        } else {
          cv.bitwise_and(dest, image, dest);
        }
        image.delete();
      }
    }

    cv.imshow("textCanvas", finalImage);
    
    let outputImage = document.getElementById(idVal);
    outputImage.src = document.getElementById("textCanvas").toDataURL();

    let previewImage = document.getElementById("preview");
    previewImage.src = document.getElementById("textCanvas").toDataURL();

    finalImage.delete();

    
  },

   bubbleWord(
    img,
    color,
    removeText,
    darkMode,
    gapWidth,
    outlineThickness,
    blurRadius
    ) {
    let cv = window.cv;
    let shape = cv.Mat.zeros(img.cols, img.rows, cv.CV_8UC1);
    cv.cvtColor(img, shape, cv.COLOR_RGBA2GRAY, 0);
    cv.bitwise_not(shape, shape);

    // Make white image for border
    let borderImage = cv.Mat.zeros(img.rows, img.cols, cv.CV_8UC3);
    cv.bitwise_not(borderImage, borderImage);

    // Make non-transparent image for text
    let textImage = cv.Mat.zeros(img.rows, img.cols, cv.CV_8UC3);
    cv.cvtColor(img, textImage, cv.COLOR_RGBA2RGB, 0);

    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    let contourImage = cv.Mat.zeros(img.rows, img.cols, cv.CV_8UC3);

    cv.findContours(
      shape,
      contours,
      hierarchy,
      cv.RETR_EXTERNAL,
      cv.CHAIN_APPROX_SIMPLE
    );
    cv.drawContours(
      contourImage,
      contours,
      -1,
      color,
      gapWidth + outlineThickness
    );

    // Flatten contour image into a grayscale image and make it white-on-black also
    cv.cvtColor(contourImage, shape, cv.COLOR_BGR2GRAY);
    cv.threshold(shape, shape, 0, 255, cv.THRESH_BINARY);

    // Find the outside edge of the countour we just drew
    // This will be the center of the outline
    cv.findContours(
      shape,
      contours,
      hierarchy,
      cv.RETR_EXTERNAL,
      cv.CHAIN_APPROX_SIMPLE
    );

    // Add outline to original image
    cv.drawContours(borderImage, contours, -1, color, outlineThickness);

    // Blur the border image to make it look less pixelated
    cv.GaussianBlur(
      borderImage,
      borderImage,
      new cv.Size(blurRadius, blurRadius),
      0,
      0,
      cv.BORDER_DEFAULT
    );

    if (!removeText) {
      // Combine the text and the border
      cv.bitwise_and(borderImage, textImage, borderImage);
    }
    if (darkMode) {
      cv.bitwise_not(borderImage, borderImage);
    }

    img.delete();
    shape.delete();
    contours.delete();
    hierarchy.delete();
    contourImage.delete();
    textImage.delete();

    return borderImage;
  },

}
}
