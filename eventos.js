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

document.addEventListener('DOMContentLoaded', () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    if (isAuthenticated === 'true') {
        const loginLink = document.getElementById('login-link');
        const perfilLink = document.createElement('a');
        perfilLink.href = 'perfil.html';
        perfilLink.innerHTML = '<i class="bi bi-person"></i>';
        perfilLink.id = 'perfil-link'; // Adicionando um ID para referência futura
        loginLink.parentNode.replaceChild(perfilLink, loginLink);
    }
});