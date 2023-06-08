const navLinks = document.querySelectorAll("#navClick a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // Remove a classe "active" de todos os links
    navLinks.forEach(function (link) {
      link.classList.remove("active");
    });

    // Adiciona a classe "active" ao link clicado
    link.classList.add("active");
  });
});
