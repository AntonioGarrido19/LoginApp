// Obtener el ID de la película desde la URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

fetch(
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=d6695246ed8b602e5bf1d2d12995fd00`
)
  .then((response) => response.json())
  .then((movie) => {
    document.getElementById("movie-details").innerHTML = `
      <div class="d-flex flex-row col-4"> 
         <div class="col-6">
            <img class="w-100" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
         </div>
         <div class="text-white ps-3 rounded" >
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
                <p><strong>Rating:</strong> ${movie.vote_average}/10</p>
                <a href="index.html" type="button" class="btn btn-secondary btn-lg">Back to List</a>
            </div>
        </div>
                `;
  })
  .catch((error) => console.error("Error loading movie details:", error));
