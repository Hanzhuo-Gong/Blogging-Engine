//get data for the post request, will use later
const newTitle = document.getElementById("new-blog-title").value;
const newContent = document.getElementById("new-blog-content").value;
const submitButton = document.getElementById("new-blog-submit");
console.log(submitButton);

//add event listener to the submit button
submitButton.addEventListener("click", function() {
  console.log("clicked");
});
