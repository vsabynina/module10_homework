const input = document.querySelector('.j-input');
const button1 = document.querySelector('.j-btn-1');
const button2 = document.querySelector('.j-btn-2');
const output = document.querySelector('.j-output');

function showOnScreenWebsocket(message) {
  const divForMess = document.createElement('div');
  divForMess.classList.add('replace_left');
  divForMess.innerHTML = `<div class = 'msg'>${message}</div>`;
  output.appendChild(divForMess);
}
function showOnScreenUser(message) {
  const divForMess = document.createElement('div');
  divForMess.classList.add('replace_right');
  divForMess.innerHTML = `<div class = 'msg'>${message}</div>`;
  output.appendChild(divForMess);
}

const websocket = new WebSocket('wss://echo-ws-service.herokuapp.com');

button1.addEventListener('click', () => {
  const messageInput = document.querySelector('.j-input').value;
  showOnScreenUser(messageInput);
  websocket.send(
    JSON.stringify({
      message: messageInput,
    })
  );
  document.querySelector('.j-input').value = '';
});

websocket.onmessage = function (event) {
  const data = JSON.parse(event.data);
  showOnScreenWebsocket(data.message);
};

const error = () => {
  showOnScreenUser('Невозможно получить ваше местоположение');
};
const success = (position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  showOnScreenUser(
    `<a href = 'https://www.openstreetmap.org/#map=18/${latitude}/${longitude} target = '_blank'>Гео-локация</a>`
  );
};

button2.addEventListener('click', () => {
  if (!'geolocation' in navigator) {
    showOnScreenUser('Geolocation не поддерживается вашим браузером');
  }

  navigator.geolocation.getCurrentPosition(success, error);
});
