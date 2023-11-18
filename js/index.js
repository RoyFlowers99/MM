document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById("scrollButton");
  const sectionMenu = document.getElementById("sectionMenu");

  scrollButton.addEventListener("click", function () {
      sectionMenu.style.display = (sectionMenu.style.display === "block") ? "none" : "block";
  });

  sectionMenu.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
          const selectedSection = document.getElementById(e.target.dataset.section);
          window.scrollTo({
              top: selectedSection.offsetTop + selectedSection.offsetHeight,
              behavior: "smooth"
          });
          sectionMenu.style.display = "none"; // Hide the menu after selecting a section
      }
  });
});
