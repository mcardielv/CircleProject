//import web variable from placeholderJSON (url is to limit 3 posts only)
const web = "https://jsonplaceholder.typicode.com/posts?_limit=3";

//function with promises to fetch and then do things like:
//Fill the infoPosts for each iteration of limit of 3 posts
//Add slice to cut from (0, to 20 ) the words of information and get the divs correctly filled with 0 text overflow.
//if wanted to implement, button Learn More could have info id as well to point to specific webpage, ex: projects-id-1.html
function link() {
  fetch(web)
    .then((item) => item.json())
    .then((item2) => {
      let fillPosts = "";
      item2.forEach((post) => {
        fillPosts += `
          <div class="project-card">
                <div class="project-image">
                <img src="./assets/projects-section/${
                  post.id
                }.jpg" alt="" class="prj-img">
                </div>
            <div class="card-text">
              <div class="project-title">${post.title.slice(0, 20)}</div>
              <div class="project-description">${post.body.slice(0, 20)}</div>
              <div><a href="#" class="project-link">Learn More</a></div>
            </div>
          </div>
            `;
      });
      console.log(fillPosts);
      document.querySelector("#cards").innerHTML = fillPosts;
    })
    .catch((error) => console.log(error));
}

link();
