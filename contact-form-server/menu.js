let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu')
})

menu.addEventListener('click', () =>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', () =>{
    menu.classList.remove('open-menu')
})


// Form Submission Function
function handleSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const form = document.querySelector('.interface form'); 
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const cellphone = form.elements.cellphone.value;
  const message = form.elements.message.value;

  // Basic input validation (you can add more robust checks)
  

  const formData = {
    name,
    email,
    cellphone,
    message,
  };

  fetch('http://localhost:3000/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    alert('Mensagem enviada com sucesso!');
    form.reset(); // Optionally reset the form after successful submission
  })
  .catch(error => {
    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    console.error('Error:', error);
  });
}

// Attach event listener to the form
const form = document.querySelector('.interface form');
form.addEventListener('submit', handleSubmit);