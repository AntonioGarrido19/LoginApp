const postList = document.querySelector(".posts");

// export const setupPosts = (data) => {
//   if (data.length) {
//     let html = "";

//     data.forEach((doc) => {
//       const post = doc.data();
//       console.log(post);
//       const li = `<li class="list-group-item list-group-item-action list-group-item-dark" >
//         <h5>${post.title}</h5>
//         <p>${post.content}</p>
//         </li>`;

//       html += li;
//     });
//     postList.innerHTML = html;
//     console.log(postList);
//   } else {
//     postList.innerHTML = "<h1> There is no movies posted </h1>";
//   }
// };

export const setupPosts = (data) => {
  if (data.length) {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=d6695246ed8b602e5bf1d2d12995fd00",
      data
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((movie) => {
          const movieElement = document.createElement("div");
          movieElement.classList.add("movie");
          movieElement.innerHTML = `
         

            <div class="card" style="width: 14rem;">
  <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" class="card-img-top img-fluid h-50" alt="${movie.title}">
  <div class="card-body text-center">
    <h5 class="card-title">${movie.title}</h5>
  </div>
</div>
          
        `;
          postList.appendChild(movieElement);
        });
      })
      .catch((error) =>
        console.error("Error al obtener las películas:", error)
      );
  } else {
    postList.innerHTML = "<h1> There is no movies posted </h1>";
  }
};
