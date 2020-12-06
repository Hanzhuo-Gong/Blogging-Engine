const homeButton = document.getElementById("previous");

//Load the data from localStorage
const blogID = localStorage.getItem('id');
console.log(blogID);

//Home button redirect to home page
homeButton.addEventListener("click", function() {
  window.location.href = "../home.html";
})


window.onload = () => {
  //load the title, content and comments for a blog
  //const getURL = "/api/single?" + blogID;
  //'/api/single?_id=5fcb18e0bef141ad7a98412f'
  fetch('/api/single/:id')   //I don't know which one have problem, so I am not able to make get request on post man
    .then((response) => (response.ok ? response.json() : Promise.reject()))
    .then((data) => {
      console.log(data);
    })
}
