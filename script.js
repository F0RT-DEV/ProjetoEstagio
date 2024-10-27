document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("participante-form");
  const participantesUl = document.getElementById("participantes-ul");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Evita o envio do formulário

      // Obtendo os valores dos campos
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();

      // Validação simples
      if (nome === "" || email === "") {
          alert("Por favor, preencha todos os campos.");
          return;
      }

      // Criando um novo elemento de lista para o participante
      const li = document.createElement("li");
      li.innerHTML = `
          <p>Nome: ${nome}</p>
          <p>Email: ${email}</p>
          <button class="remove-btn">Remover</button>
      `;
      participantesUl.appendChild(li);

      // Adicionando o evento de clique no botão de remoção
      const removeBtn = li.querySelector(".remove-btn");
      removeBtn.addEventListener("click", () => {
          participantesUl.removeChild(li);
      });

      // Limpar o formulário
      form.reset();
  });
});

// Função para filtrar eventos com base na pesquisa
function searchEvents() {
    // Obter o valor da busca
    const searchTerm = document.querySelector('.search-bar input').value.toLowerCase();
    // Obter todos os eventos
    const events = document.querySelectorAll('.event');
    
    // Iterar sobre os eventos e mostrar/ocultar com base na busca
    events.forEach(event => {
        const eventName = event.querySelector('h2').innerText.toLowerCase();
        if (eventName.includes(searchTerm)) {
            event.style.display = ''; // Mostrar evento
        } else {
            event.style.display = 'none'; // Ocultar evento
        }
    });
}

// Adicionar um evento ao botão de busca
document.querySelector('.search-bar button').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar o envio do formulário
    searchEvents(); // Chamar a função de busca
});