/* ============================================================
   Portfólio — Lucas Belucci Bellini
   Interações: navbar, menu mobile, efeito de digitação,
   reveal ao rolar e ano do rodapé.
   ============================================================ */
(function () {
  "use strict";

  /* ---- Navbar muda de estilo ao rolar ---- */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  function closeMenu() {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    toggle.classList.toggle("open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  /* ---- Efeito de digitação no subtítulo do hero ---- */
  var typed = document.getElementById("typed");
  var phrases = [
    "Desenvolvedor & criador",
    "Programação · Robótica · Lógica digital",
    "Criador do Projeto Baluarte",
    "Sempre termino o que começo.",
  ];
  if (typed && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var pIndex = 0, cIndex = 0, deleting = false;
    typed.innerHTML = '<span class="txt"></span><span class="cursor">|</span>';
    var txt = typed.querySelector(".txt");

    function tick() {
      var full = phrases[pIndex];
      if (!deleting) {
        txt.textContent = full.slice(0, ++cIndex);
        if (cIndex === full.length) {
          deleting = true;
          return setTimeout(tick, 1900);
        }
      } else {
        txt.textContent = full.slice(0, --cIndex);
        if (cIndex === 0) {
          deleting = false;
          pIndex = (pIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 40 : 75);
    }
    tick();
  } else if (typed) {
    typed.textContent = phrases[0];
  }

  /* ---- Reveal ao rolar (Intersection Observer) ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Ano atual no rodapé ---- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
