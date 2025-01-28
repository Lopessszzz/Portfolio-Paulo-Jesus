const contactForm = document.querySelector('.interface form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Collect form data
  const formData = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    cellphone: contactForm.elements.cellphone.value,
    message: contactForm.elements.message.value,
  };

  // Send data to server
  fetch('http://localhost:3000/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => response.json()) // Parse the JSON response from the server
  .then(data => {
    if (data.message === 'Mensagem enviada com sucesso!') {
      alert(data.message);
      contactForm.reset();
    } else {
      alert(data.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.');
  });  
});