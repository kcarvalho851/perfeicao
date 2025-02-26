// Monitorar o scroll para adicionar ou remover a classe 'inactive' na navbar
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  const navbarLinks = document.querySelectorAll(".navbar-links a");

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      navbarLinks[index + 1].classList.add("inactive");
    } else {
      navbarLinks[index + 1].classList.remove("inactive");
    }
  });
});
