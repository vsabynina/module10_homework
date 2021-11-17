const btn = document.querySelector('.j-btn');

function showSize() {
  alert(
    `Ширина экрана без полосы прокрутки: ${document.documentElement.clientWidth}px, высота экрана без полосы прокрутки: ${document.documentElement.clientHeight}px`
  );
}

btn.addEventListener('click', showSize);
