const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const evolutionsList = document.getElementById('modal-evolutions');

function showPokemonDetails(pokemonName) {
    fetch(`http://localhost:8081/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(pokemon => {
            modalName.textContent = pokemon.name;
            modalImage.src = pokemon.image;
            modalDescription.textContent = pokemon.description;

            evolutionsList.innerHTML = '';
            // pokemon.evolutions.forEach(evolution => {
            //     const listItem = document.createElement('li');
            //     const pokemonName = document.createElement('p');
            //     pokemonName.textContent = evolution.name_evolutions;
            //     listItem.appendChild(pokemonName);
            //     const pokemonImage = document.createElement('img');
            //     pokemonImage.src = evolution.img_evolutions;
            //     listItem.appendChild(pokemonImage);

            //     evolutionsList.appendChild(listItem);
            // });

            if (pokemon.evolutions.length > 0) {
                // Có tiến hóa
                pokemon.evolutions.forEach(evolution => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('evolutions-list-item');

                    const pokemonImage = document.createElement('img');
                    pokemonImage.src = evolution.img_evolutions;
                    listItem.appendChild(pokemonImage);

                    const pokemonName = document.createElement('p');
                    pokemonName.textContent = evolution.name_evolutions;
                    listItem.appendChild(pokemonName);

                    evolutionsList.appendChild(listItem);
                });
            } else {
                // Không có tiến hóa
                const noEvolutionsMessage = document.createElement('p');
                noEvolutionsMessage.textContent = 'Không có dạng tiến hóa nào.';
                evolutionsList.appendChild(noEvolutionsMessage);
            }


            openModal();
        })
        .catch(error => {
            console.error('Lỗi:', error);
        });
}

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}