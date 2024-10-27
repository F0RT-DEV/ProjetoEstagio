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