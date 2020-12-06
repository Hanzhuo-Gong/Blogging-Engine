//const homeButton = document.getElementById("previous");
const title = document.getElementById("title");
const content = document.getElementById("content");
const comment = document.getElementById("test1");
const comments = document.getElementById("comment-div");

//Load the data from localStorage
const blogID = localStorage.getItem('id');
console.log(blogID);

/*
//Home button redirect to home page
homeButton.addEventListener("click", function() {
  window.location.href = "../home.html";
})
*/

//function to create element for comments
function createComments(userName, comment) {
  //Create elements
  const newDiv = document.createElement('div');
  const newH6 = document.createElement('h6');
  const h6Content = document.createTextNode(userName);

  const newParagraph = document.createElement("p");
  const paragraphContent = document.createTextNode(comment);

  //add class
  newDiv.classList.add("one-comment");
  newH6.classList.add("user-name");
  newParagraph.classList.add("comment-content");

  //append elements
  newH6.appendChild(h6Content);
  newParagraph.appendChild(paragraphContent);
  newDiv.appendChild(newH6);
  newDiv.appendChild(newParagraph);
  comments.append(newDiv);
}

window.onload = () => {
  const url = "/api/single?id=" + blogID;

  fetch(url)
    .then((response) => (response.ok ? response.json() : Promise.reject()))
    .then((data) => {
      //console.log(data);

      //After get the title, content and comments, display the data on the page
      title.innerHTML = data.title;
      content.innerHTML = data.content;
      console.log(data.comments);

      //check if the blog has Comments
      if (data.comments.length === 0) {
        /*
        <div class="one-comment">
          <h6 class="user-name">Username1</h6>
          <p id="test1" class="comment-content">Sample comment</p>
        */
        createComments("System Notification:", "Be the first one to leave comment!");
      }
      else {
        for (let i=0; i< data.comments.length; i++) {
          createComments("Anonymous:", data.comments[i]);
        }
      }
    })
}
