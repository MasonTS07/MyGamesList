const gameListContainer = document.querySelector('.game-list-container');

let myGameList = [];

class Game {
    constructor(title, developer, genre, rating) {
        this.title = title;
        this.developer = developer;
        this.genre = genre;
        this.rating = rating
    }
}


function addGameToList(game) {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const developer = document.createElement('p');
  const genre = document.createElement('p');
  const rating = document.createElement('p');
  const removeBtn = document.createElement('button');

  div.classList.add('gameinfo');
  removeBtn.classList.add('removeBtn');

  title.textContent = game.title;
  developer.textContent = `Dev: ${game.developer}`;
  genre.textContent = `Genre: ${game.genre}`;
  rating.textContent = `Rating: ${game.rating}`;
  removeBtn.textContent = 'Delete';

  gameListContainer.appendChild(div);
  div.appendChild(title);
  div.appendChild(developer);
  div.appendChild(genre);
  div.appendChild(rating);
  div.appendChild(removeBtn);

}


function clearForm() {
  document.querySelector('.title').value = '';
  document.querySelector('.developer').value = '';
  document.querySelector('.genre').value = '';
  document.querySelector('.rating').value = '';
}


function deleteGame(el) {
  if(el.classList.contains('removeBtn')) {
    el.parentElement.remove();
  }
}


document.querySelector('.game-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('.title').value;
  const developer = document.querySelector('.developer').value;
  const genre = document.querySelector('.genre').value;
  const rating = document.querySelector('.rating').value;

  if(title === '' || developer === '' || genre === '' || rating === '') {
    alert('Please Fill in the Fields Below.');
  }
  else {
    const game = new Game(title, developer, genre, rating);
    addGameToList(game);
    clearForm();
  }
})

document.querySelector('.game-list-container').addEventListener('click', (e) => {
  deleteGame(e.target)
})






