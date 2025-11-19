const films = [
  {
    title: "Zielona mila",
    originalTitle: "The Green Mile",
    year: 1999,
    genre: "Dramat",
    rating: 8.6,
    image: "https://fwcdn.pl/fpo/08/62/862/7517878_1.10.webp",
  },
  {
    title: "Incepcja",
    originalTitle: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.2,
    image: "https://fwcdn.pl/fpo/08/91/500891/7354571_1.10.webp",
}
];

function createFilmCard(film) {
  const card = document.createElement("div");
  card.classList.add("card");

  const content = document.createElement("div");
  content.classList.add("content");


  const img = document.createElement("img");
  img.src = film.image;
  img.alt = film.title;


  const desc = document.createElement("div");
  desc.classList.add("desc");


  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title");

  const h2 = document.createElement("h2");
  h2.textContent = film.title;

  const h3 = document.createElement("h3");
  h3.textContent = film.originalTitle;

  titleDiv.appendChild(h2);
  titleDiv.appendChild(h3);


  const userData = document.createElement("div");
  userData.classList.add("user-data");

  const userInner = document.createElement("div");

  const label = document.createElement("label");
  label.classList.add("no");
  label.textContent = "Oznacz jako obejrzany";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "watched";

  
  label.insertBefore(checkbox, label.firstChild);

  const spanStar = document.createElement("span");
  spanStar.textContent = `⭐ ${film.rating}`;

  userInner.appendChild(label);
  userInner.appendChild(spanStar);
  userData.appendChild(userInner);


  const footer = document.createElement("div");
  footer.classList.add("footer-desc");

  const spanGenre = document.createElement("span");
  spanGenre.textContent = film.genre;

  const spanYear = document.createElement("span");
  spanYear.textContent = film.year;

  const spanRating = document.createElement("span");
  spanRating.textContent = `⭐ ${film.rating}`;

  footer.appendChild(spanGenre);
  footer.appendChild(spanYear);
  footer.appendChild(spanRating);


  desc.appendChild(titleDiv);
  desc.appendChild(userData);
  desc.appendChild(footer);

  content.appendChild(img);
  content.appendChild(desc);
  card.appendChild(content);


  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      card.classList.remove("no");
      card.classList.add("yes");
    } else {
      card.classList.remove("yes");
      card.classList.add("no");
    }
  });

  return card;
}


function renderFilms(filmsArray) {
  const container = document.querySelector(".cards-container");
  container.innerHTML = "";

  filmsArray.forEach((film) => {
    const card = createFilmCard(film);
    container.appendChild(card);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderFilms(films);
});
