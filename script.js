document.addEventListener('DOMContentLoaded', () => {
    // Defina aqui a civilização e o ano de surgimento dela
    const civilizacaoNome = "Mesopotâmia (Suméria)";
    const anoSurgimento = "c. 4000 a.C."; // Exemplo de data de criação

    // Insere a informação no elemento HTML
    const creationSpan = document.getElementById('civilization-creation');
    if (creationSpan) {
        creationSpan.textContent = `Origem / Surgimento: ${civilizacaoNome} (${anoSurgimento})`;
    }

    // (O restante do seu código de pesquisa continua aqui...)
    const searchInput = document.getElementById('search-input');
    const newsCards = document.querySelectorAll('.news-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            newsCards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
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