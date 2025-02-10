function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

    document.getElementById("scrollBtn").addEventListener("click", function() {
        window.scrollTo({ top: 800, behavior: "smooth" });
    });

/* python */

function pythn() {
  document.querySelector("#container").style.display = "block";
  document.querySelector("#overlay").style.display = "block";
  document.body.classList.add("no-scroll"); // Disable scrolling
}

function hideContainer() {
  document.querySelector("#container").style.display = "none";
  document.querySelector("#overlay").style.display = "none";
  document.body.classList.remove("no-scroll"); // Enable scrolling again
}





