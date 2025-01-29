document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://website-meu-portfolio.onrender.com/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert('Formulário enviado com sucesso!');
      event.target.reset(); // Limpa o formulário após o envio
    } else {
      const errorData = await response.json(); // Obtém os dados de erro do servidor
      console.error('Erro ao enviar o formulário:', errorData);
      alert(`Erro ao enviar o formulário: ${errorData.error || 'Erro desconhecido'}`);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    alert('Erro ao enviar o formulário. Verifique sua conexão com a internet.');
  }
});