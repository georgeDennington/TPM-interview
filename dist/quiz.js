let question = 0;
let answers = [];


const submit = () => {
  window.sessionStorage.setItem('answers', answers);
  window.location.href = './answers.html';
}

const next = (e) => {
  e.preventDefault();
  var data = new FormData(form);
  for (const [name,value] of data) {
    answers.push(value);
  }
  question++;
  form.reset();

  if (question === 4) {
    document.getElementById('submit').innerHTML = 'Submit';
  }

  if (question === 5) {
    submit();
  }
}


window.addEventListener('load', (event) => {
  const form = document.getElementById('form');
  form.addEventListener('submit', next);
});