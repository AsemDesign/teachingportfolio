/* HOVER IMAGE */
const hoverWrap = document.getElementById('hoverImgWrap');

function showHover(e) {
  hoverWrap.classList.add('visible');
  moveHover(e);
}
function moveHover(e) {
  hoverWrap.style.left = e.clientX + 'px';
  hoverWrap.style.top  = e.clientY + 'px';
}
function hideHover() {
  hoverWrap.classList.remove('visible');
}
