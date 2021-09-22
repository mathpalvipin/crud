import interact from "interactjs";

export default {
  methods: {
    drag() {
      interact(".draggable").draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: ".base",
            endOnly: true,
          }),
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
          // call this function on every dragmove event
          move: dragMoveListener,

          // call this function on every dragend event
          end() {

          },
        },
      });

      function dragMoveListener(event) {
        var target = event.target;
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
        var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform = target.style.transform =
          "translate(" + x + "px, " + y + "px)";

        // update the posiion attributes
        target.setAttribute("data-x", x);
        target.setAttribute("data-y", y);
      }

      // this function is used later in the resizing and gesture demos
      window.dragMoveListener = dragMoveListener;

      interact('.dropzone').dropzone({
        // only accept elements matching this CSS selector
        accept: '.real',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.01,
      
        // listen for drop related events:

        ondropactivate: function (event) {
          // add active dropzone feedback
          event.target.classList.add('drop-active')
        },
        ondragenter: function (event) {
          event.target.classList.add('drop-target')
        },
        ondragleave: function (event) {
          event.target.classList.remove('drop-target')
        },
        ondrop: function (event) {
          event.relatedTarget.remove()
          event.target.classList.remove('drop-target')
        },
        ondropdeactivate: function (event) {
          event.target.classList.remove('drop-active')
        }
      })
      
      interact('.draggable')
      .resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },

        listeners: {
          move (event) {
            var target = event.target
            var x = (parseFloat(target.getAttribute('data-x')) || 0)
            var y = (parseFloat(target.getAttribute('data-y')) || 0)

            // update the element's style
            target.style.width = event.rect.width + 'px'
            target.style.height = event.rect.height + 'px'

            // translate when resizing from top or left edges
            x += event.deltaRect.left
            y += event.deltaRect.top

            target.style.webkitTransform = target.style.transform =
              'translate(' + x + 'px,' + y + 'px)'

            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
            target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
          }
        },
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
            outer: '.base'
          }),

          interact.modifiers.restrictSize({
             max: '.base' 
          }),
          interact.modifiers.aspectRatio({
            ratio: 'preserve'
         }),

        ],

        inertia: false
      })







    },
  },
};
