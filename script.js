document.addEventListener('DOMContentLoaded', () => {
    // Inserir data atual no formato de plantão de notícias
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const today = new Date().toLocaleDateString('pt-BR', options);
        dateElement.textContent = today.toUpperCase();
    }

    // Sistema de Busca Dinâmica por Título, Descrição ou Categoria
    const searchInput = document.getElementById('search-input');
    const newsCards = document.querySelectorAll('.news-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            newsCards.forEach(card => {
                const title = card.getAttribute('data-title').toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const category = card.querySelector('.category-tag').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm) || category.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});