//DOM
/*let links = document.querySelectorAll("a");
links.forEach(function(link) {
  console.log(link);
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link) {
  link.addEventListener("click", function(ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");
    //quitar clase  animated
    content.classList.remove("bounceInRight");
    content.classList.remove("animated");

    //agregar clase animated
    content.classList.add("bounceOutLeft");
    content.classList.add("animated");

    setTimeout(function() {
      location.href = "/index.html";
    }, 600);

    return false;
  });
});

let vistas = document.querySelectorAll(".ver");

vistas.forEach(function(vista) {
  vista.addEventListener("click", function(ev) {
    ev.preventDefault();
    let content = document.querySelector(".content");
    //quitar clase  animated
    content.classList.remove("bounceInRight");
    content.classList.remove("animated");

    //agregar clase animated
    content.classList.add("bounceOutLeft");
    content.classList.add("animated");

    setTimeout(function() {
      location.href = "./animes/fma.html";
    }, 600);

    return false;
  });
});
