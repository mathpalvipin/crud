<template>
    <input type="checkbox" id="menuToggler" class="input-toggler" />
    <label for="menuToggler" class="menu-toggler">
      <span class="menu-toggler__line"></span>
      <span class="menu-toggler__line"></span>
      <span class="menu-toggler__line"></span>
    </label>
     <aside class="sidebar">
        <slot></slot>
    </aside>
</template>

<script>
export default {
  beforemounted() {
    var content = document.getElementsByTagName("main")[0];
    content.style.visibility = "hidden";

    var sidebar = document.getElementsByClassName("sidebar")[0];

    var lowerLayerBurger = document.getElementsByClassName(
      "menu-toggler__line"
    )[2];
    lowerLayerBurger.addEventListener("animationend", function() {
      content.style.visibility = "visible";
    });

    // Add click listeners to the menu on the sidebar
    document
      .getElementsByTagName("ul")[0]
      .addEventListener("click", function(evt) {
        // when a menu item is clicked hide the sidebar by unchecking the input
        document.getElementById("menuToggler").checked = false;

        function handleTransitionEnd() {
          // show the correct content based on the target of the menu item
          // first hide everything
          var contentDivs = document.querySelectorAll("main div");
          for (var i = 0; i < contentDivs.length; i++) {
            contentDivs[i].style.display = "none";
          }

          // show the correct div
          var contentId = evt.srcElement.hash;
          var contentDiv = document.getElementById(contentId.substr(1));
          contentDiv.style.display = "inherit";

          // remove listener
          sidebar.removeEventListener("transitionend", handleTransitionEnd);
        }

        sidebar.addEventListener("transitionend", handleTransitionEnd);
      });
  },
};
</script>

<style>
:root {
  --sidebar-width: 350px;
  --toggler-size: 30px;
}

.sidebar {
  height: 100vh;
  width: var(--sidebar-width);
  transform:  translateX(calc(var(--sidebar-width) *  1));
  background: linear-gradient(to bottom right,  rgb(0, 0, 0),  rgb(224, 224, 224));
  background-size: 400% 400%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0; 
  bottom: 0;
  opacity: 0.5;
  transition: transform 0.6s, background-position 1s 0.6s;
  z-index: 100;
  
}

.sidebar:hover{
   overflow-y: auto;
}

.input-toggler:checked ~ .sidebar {
  opacity: 0.9;
  transform: translateX(0);
  background-position: 0 0;
}

.menu-toggler {
  display: block;
  width: var(--toggler-size);
  height: var(--toggler-size);
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 200;
 }

.menu-toggler__line {
  height: calc(var(--toggler-size) / 5);
  background: rgb(194, 194, 194, 0.75);;
  position: absolute;
  left: 0;
  right: 0;
  transition-property: transform, opacity;
  transition-duration: 0.5s, 0.25s;
  transition-delay: 0s, 0.5s;
  animation-name: slidein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line {
  transition-delay: 0.25s, 0s;
}

.menu-toggler__line:nth-child(2) {
  top: calc(var(--toggler-size) / 5 * 2);
  animation-duration: 0.6s;
}

.menu-toggler__line:nth-child(3) {
  top: calc(var(--toggler-size) / 5 * 4);
  animation-duration: 0.7s;
}

.input-toggler {
  display: none;
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line {
  background: rgb(194, 194, 194);
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line:nth-child(1) {
  transform: translateY(calc(var(--toggler-size) / 5 * 2)) rotate(45deg);
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line:nth-child(2) {
  opacity: 0;
}

.input-toggler:checked ~ .menu-toggler .menu-toggler__line:nth-child(3) {
  transform: translateY(calc(var(--toggler-size) / 5 * -2)) rotate(-45deg);
}

@keyframes slidein {
  from {
    left: -200%;
    right: 200%;
  }
  to {
    left: 0;
    right: 0;
  }
}





</style>
