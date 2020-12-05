//get data for the post request, will use later
const allBlogs = document.getElementById("blogs");
const newTitle = document.getElementById("new-blog-title").value;
const newContent = document.getElementById("new-blog-content").value;
const submitButton = document.getElementById("new-blog-submit");
console.log(submitButton);

//add event listener to the submit button, and post the request to databse
submitButton.addEventListener("click", function() {
  console.log("clicked");
});

//when window load up, need to load all blog contents
window.onload = () => {
  fetch('/api/get')
    .then((response) => (response.ok ? response.json() : Promise.reject()))
    .then((data) => {
      console.log(data);
      console.log(data[0].title);

      //check if the database is empty, if is empty, display no content
      if (data.length === 0) {
        //<h3 class="no-content">No Blog Content</h3>
        const newH3 = document.createElement("h3");
        const h3Content = document.createTextNode("No Blog Content");
        newH3.classList.add("no-content");

        newH3.appendChild(h3Content);
        allBlogs.appendChild(newH3);     //Need to come back and test later~~~~~~~
      }
      else {
        //After getting the data from database, need to create new element to display the content
        const titleDiv = document.createElement("div");
        const contentDiv = document.createElement("div");

        const newATag = document.createElement("a");
        const newH3 = document.createElement("h3");
        const h3Content = document.createTextNode(data[0].title);
        const newParagraph = document.createElement("p");
        const paragraphContent = document.createTextNode(data[0].content);


        newATag.href = "#";
        newATag.classList.add("title-content");
        
        //append the blog title
        allBlogs.appendChild(titleDiv);
        newH3.appendChild(h3Content);
        newATag.appendChild(newH3);
        titleDiv.appendChild(newATag);

        //append the blog content
        allBlogs.appendChild(contentDiv);
        newParagraph.appendChild(paragraphContent);
        contentDiv.appendChild(newParagraph);


        //add the href to all the
      }


    })
}
