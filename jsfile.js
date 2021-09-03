const gameListContainer = document.querySelector('.game-list-container');

let myGameList = [
    {
        title: 'World of Warcraft',
        developer: 'Blizzard',
        genre: 'MMO',
        rating: '10'
    },
    {
        title: 'League of Legends',
        developer: 'Riot Games',
        genre: 'MOBA',
        rating: '10'
    }
];

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
  const gameInfo = document.querySelectorAll('.gameinfo')


}

function clearForm() {
  document.querySelector('.title').value = '';
  document.querySelector('.developer').value = '';
  document.querySelector('.genre').value = '';
  document.querySelector('.rating').value = '';
}

document.querySelector('.game-form').addEventListener('submit', (e) => {

  e.preventDefault();
  const title = document.querySelector('.title').value;
  const developer = document.querySelector('.developer').value;
  const genre = document.querySelector('.genre').value;
  const rating = document.querySelector('.rating').value;

  const game = new Game(title, developer, genre, rating);

  addGameToList(game);
  clearForm();




})






