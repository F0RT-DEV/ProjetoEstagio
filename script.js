document.getElementById("addParticipantForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Obter valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Validar os campos (simples)
    if (!name || !email) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Criar novo elemento de lista
    const participantList = document.getElementById("participantList");
    const newParticipant = document.createElement("li");
    newParticipant.textContent = `${name} - ${email}`;
    
    // Adicionar participante à lista
    participantList.appendChild(newParticipant);
  
    // Limpar formulário
    document.getElementById("addParticipantForm").reset();
  });
  