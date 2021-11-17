const btn = document.querySelector('.j-btn');
const icon = document.querySelector('.btn_icon');

function changeIcon() {
  if (icon.classList.contains('icon_1') === true) {
    icon.classList.toggle('icon_2');
  } else {
    icon.classList.toggle('icon_1');
  }
}

btn.addEventListener('click', changeIcon);
