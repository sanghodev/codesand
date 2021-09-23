// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>
const hellos = document.querySelector("h2");

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseover: function handleMouseEnter() {
    hellos.innerText = "Mouse is here!";
    hellos.style.color = colors[0];
  },
  mousegone: function handleMouseLeave() {
    hellos.innerText = "Mouse is gone!";
    hellos.style.color = colors[1];
  },
  mouseresize: function handleWindowResize() {
    hellos.innerText = "You just resized!";
    hellos.style.color = colors[2];
  },
  mouserclick: function handleWindowRight() {
    hellos.innerText = "Right Click!";
    hellos.style.color = colors[3];
  }
};
hellos.onmouseenter = superEventHandler.mouseover;
hellos.onmouseleave = superEventHandler.mousegone;
window.addEventListener("resize", superEventHandler.mouseresize);
window.addEventListener("oncontextmenu", superEventHandler.mouserclick);
