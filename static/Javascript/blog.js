const homeButton = document.getElementById("previous");

//Load the data from localStorage
const blogID = localStorage.getItem('id');
console.log(blogID);

//Home button redirect to home page
homeButton.addEventListener("click", function() {
  window.location.href = "../home.html";
})
