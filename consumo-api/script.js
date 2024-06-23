document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
    const cardContainer = document.getElementById('card-container');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cards = data.data;
            cards.forEach((card, index) => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');

                cardElement.innerHTML = `
                    <img src="${card.card_images[0].image_url}" alt="${card.name}">
                    <h2>${card.name}</h2>
                    <p><strong>ID:</strong> ${card.id}</p>
                    <p><strong>Tipo:</strong> ${card.type}</p>
                    <p><strong>Frame Type:</strong> ${card.frameType}</p>
                    <p><strong>Descripción:</strong> ${card.desc}</p>
                    <p><a href="${card.ygoprodeck_url}" target="_blank">Ver en YGOPRODeck</a></p>
                    ${card.atk ? `<p><strong>ATK:</strong> ${card.atk}</p>` : ''}
                    ${card.def ? `<p><strong>DEF:</strong> ${card.def}</p>` : ''}
                    ${card.level ? `<p><strong>Nivel/Rango:</strong> ${card.level}</p>` : ''}
                    <p><strong>Carrera:</strong> ${card.race}</p>
                    ${card.attribute ? `<p><strong>Atributo:</strong> ${card.attribute}</p>` : ''}
                    ${card.scale ? `<p><strong>Escala:</strong> ${card.scale}</p>` : ''}
                    ${card.linkval ? `<p><strong>Link Value:</strong> ${card.linkval}</p>` : ''}
                    ${card.linkmarkers ? `<p><strong>Link Markers:</strong> ${card.linkmarkers.join(', ')}</p>` : ''}
                    ${card.archetype ? `<p><strong>Arquetipo:</strong> ${card.archetype}</p>` : ''}
                `;

                cardContainer.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error fetching the API:', error));
});
