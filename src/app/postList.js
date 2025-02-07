const postList = document.querySelector(".posts");

export const setupPosts = (data) => {
  if (data.length) {
    let html = "";

    data.forEach((doc) => {
      const post = doc.data();
      console.log(post);
      const li = `<li class="list-group-item list-group-item-action list-group-item-dark" >
        <h5>${post.title}</h5>
        <p>${post.content}</p>
        </li>`;

      html += li;
    });
    postList.innerHTML = html;
    console.log(postList);
  } else {
    postList.innerHTML = "<h1> You dont have rated any movies yet </h1>";
  }
};
