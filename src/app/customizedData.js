const postListC = document.querySelector(".custom");

export const setupCustomized = (dataC) => {
  if (dataC.length) {
    let html = "";

    dataC.forEach((doc) => {
      const post = doc.data();
      console.log(post);
      const li = `<li class="list-group-item list-group-item-action list-group-item-dark" >
        <h5>${post.name}</h5>
        <p>${post.data}</p>
        </li>`;

      html += li;
    });
    postListC.innerHTML = html;
    console.log(postListC);
  } else {
    postListC.innerHTML = "<h1> You dont have rated any movies yet </h1>";
  }
};
