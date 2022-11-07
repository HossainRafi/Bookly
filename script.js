const title = document.querySelector("#title");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn = document.querySelector(".btn");
const bookList = document.querySelector("#book-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  // Basic Validation
  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Please input your information.");
  }
  }
});