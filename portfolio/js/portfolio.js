function toggleDescription(event, setId) {
  event.preventDefault();
  var description = document.getElementById("description-" + setId);
  var seeBtn = document.getElementById("seeBtn-" + setId);

  if (description.style.display === "none") {
    description.style.display = "block";
    seeBtn.style.display = "block";
    seeBtn.style.opacity = "0.7"; // Set opacity to 0.7 for medium transparency
    seeBtn.style.margin = "0 auto"; // Center the button horizontally
  } else {
    description.style.display = "none";
    seeBtn.style.display = "none";
  }
}

function redirectToGitHub(url) {
  window.open(url, "_blank");
}