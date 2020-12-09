//assign element to variables for later use
const title = document.getElementById("title");
const content = document.getElementById("content");
//const comment = document.getElementById("test1");
const comments = document.getElementById("comment-div");
const submitComment = document.getElementById("comment-submit");
const submitButton = document.getElementById("new-blog-submit");
let noComments = false;

//Load the data from localStorage, so the database know which data to pass
const blogID = localStorage.getItem('id');
//console.log(blogID);

//Function allow user to post comments
submitComment.addEventListener("click", function() {
  //When the submitted button clicked, load the comment that user inputed.
  const commentContent = document.getElementById("comment").value;
  //console.log(commentContent);

  //After getting the value, post to the database
  const headers = new Headers();
  headers.set("content-type", "application/json");
  fetch('/api/comment', {
    headers,
    method: "POST",
    body: JSON.stringify({
      comment: commentContent,
      id: blogID    //ID is for database to find by id and update comment
    }),
  })
    .then((response) => (response.ok && response.status === 201 ? response.json() : Promise.reject(response.status)))
    .then((data) => {
      const dataLength = data.comments.length;

      //After received the data from database, display it to user
      //Check if the blog have any comments
      if (noComments) {
        const h6Content = document.getElementsByClassName("user-name");
        const paragraphContent = document.getElementsByClassName("comment-content");

        console.log(paragraphContent);
        //replace the system message to user's comment
        h6Content[0].innerHTML =  "Anonymous:";
        paragraphContent[0].innerHTML = data.comments[dataLength-1];
        noComments = false;
      }
      else {
        createComments("Anonymous:", data.comments[dataLength-1]);
      }

    })
})



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


//post new blog to databse, and display on it on home page
submitButton.addEventListener("click", function() {
  const newTitle = document.getElementById("new-blog-title").value;
  const newContent = document.getElementById("new-blog-content").value;

  //console.log(newTitle);
  //console.log(newContent);
  const headers = new Headers();
  headers.set("content-type", "application/json");
  fetch('/api/post', {
    headers,
    method: "POST",
    body: JSON.stringify({
      title: newTitle,
      content: newContent
    }),
  })
    .then((response) => (response.ok && response.status === 201 ? response.json() : Promise.reject(response.status)))
    .then((data) => {
      console.log(data);

      //and reload the page for user
      window.location.replace("http://localhost:3000/home.html"); //may need to change later, not working if I deploy the website
      //location.reload();
    })
    .catch((err) => console.log(err));
});


window.onload = () => {
  const url = "/api/single?id=" + blogID;

  fetch(url)
    .then((response) => (response.ok ? response.json() : Promise.reject()))
    .then((data) => {
      //console.log(data);

      //After get the title, content and comments, display the data on the page
      title.innerHTML = data.title;
      content.innerHTML = data.content;
      //console.log(data.comments);

      //check if the blog has Comments
      if (data.comments.length === 0) {
        createComments("System Notification:", "Be the first one to leave comment!");
        noComments = true;
      }
      else {
        for (let i=0; i< data.comments.length; i++) {
          createComments("Anonymous:", data.comments[i]);
        }
      }
    })
}
