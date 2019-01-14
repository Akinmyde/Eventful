const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
const url = 'https://rocky-meadow-55707.herokuapp.com/api/v2/users/';

let data = {
  name,
  email,
  password,
}

let request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
});

fetch(request)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
})
