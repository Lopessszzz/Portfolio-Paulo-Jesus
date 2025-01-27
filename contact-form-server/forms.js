const contactForm = document.querySelector('.interface form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('e-mail');
const messageInput = document.querySelector('textarea');
const submitButton = document.querySelector('.btn-enviar input[type="submit"]');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();



  // Collect form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Send data to server (replace with your actual server-side endpoint)
  fetch('/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (response.ok) {
      alert('Mensagem enviada com sucesso!');
      // Optionally, reset the form
      contactForm.reset();
    } else {
      alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
  });
});