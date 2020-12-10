//get data for the post request, will use later
const allBlogs = document.getElementById("blogs");
const submitButton = document.getElementById("new-blog-submit");
//console.log(submitButton);

//let numberOfPostComment = require("../API/blogSchema.js")
//Function to add the blog title and content to HTML element
function addContentToHTML(title, content, id) {
  const titleDiv = document.createElement("div");
  //const contentDiv = document.createElement("div");

  //Title element
  const newATag = document.createElement("a");
  const newH3 = document.createElement("h3");
  const h3Content = document.createTextNode(title);

  //Content element
  const newParagraph = document.createElement("p");
  const paragraphContent = document.createTextNode(content);

  newATag.href = "./blogV2.html";
  newATag.classList.add("a-content");
  newATag.setAttribute("id", id);
  newATag.classList.add("title-and-content");
  newParagraph.classList.add("title-and-content");
  newParagraph.classList.add("float-left");


  //allBlogs.insertBefore(contentDiv, allBlogs.firstChild);
  allBlogs.insertBefore(titleDiv, allBlogs.firstChild);

  //append the blog title
  newH3.appendChild(h3Content);
  newATag.appendChild(newH3);
  titleDiv.appendChild(newATag);
  titleDiv.classList.add("title-content");

  //append the blog content
  newParagraph.appendChild(paragraphContent);
  //contentDiv.appendChild(newParagraph);
  titleDiv.appendChild(newParagraph);

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

      //After the data post to the database, append to the HTML
      addContentToHTML(data.title, data.content);
      //Reload the page for user
      location.reload();
    })
    .catch((err) => console.log(err));
});

//when window load up, need to load all blog contents
window.onload = () => {
  fetch('/api/get')
    .then((response) => (response.ok ? response.json() : Promise.reject()))
    .then((data) => {
      //console.log(data);
      //console.log(data[0].title);
      //console.log(data[0]._id);

      //check if the database is empty, if is empty, display no content
      if (data.length === 0) {
        const newH3 = document.createElement("h3");
        const h3Content = document.createTextNode("No Blog Content");
        newH3.classList.add("no-content");

        newH3.appendChild(h3Content);
        allBlogs.appendChild(newH3);
      }
      else {
        //After getting the data from database, need to create new element to display the content
        for (let i = 0; i < data.length; i++) {
          addContentToHTML(data[i].title, data[i].content, data[i]._id);
        }

        //add click function to blog title
        const allBlogsTitle = document.getElementsByClassName("title-content");
        //console.log(allBlogsTitle);


        //add click function to the a tag
        for(let i = 0; i< allBlogsTitle.length; i++) {
          allBlogsTitle[i].childNodes[0].addEventListener("click", function() {
            //store the id to the local storage for single blog to access data
            localStorage.setItem('id', allBlogsTitle[i].childNodes[0].id);

            //store the data to local storage for single blog to accesss data.
            //(Not working if the title and content are the same)
            //localStorage.setItem('title',allBlogsTitle[i].childNodes[0].lastChild.innerHTML);
            //localStorage.setItem('content', allBlogsTitle[i].childNodes[1].childNodes[0].data);
          });
        }
      }
    })
    .catch((err) => console.log(err));
}
