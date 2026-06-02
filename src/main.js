/* ============================================================
   Portfólio — Lucas Belucci Bellini
   Interações: cursor, partículas, relógio, clima, digitação,
   tilt 3D, navbar, menu mobile e reveal ao rolar.
   ============================================================ */
import "./style.css";

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  var $ = function (id) { return document.getElementById(id); };

  /* ---- Cursor customizado ---- */
  if (finePointer) {
    var cur = $("cur"), curR = $("curR");
    var mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
    });
    (function follow() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      curR.style.left = rx + "px"; curR.style.top = ry + "px";
      requestAnimationFrame(follow);
    })();
    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () { curR.classList.add("hover"); });
      el.addEventListener("mouseleave", function () { curR.classList.remove("hover"); });
    });
  }

  /* ---- Navbar muda ao rolar ---- */
  var navbar = $("navbar");
  function onScroll() {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var toggle = $("navToggle"), links = $("navLinks");
  function closeMenu() {
    links.classList.remove("open");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });

  /* ---- Relógio + data ao vivo ---- */
  var DIAS = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
  var MESES = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  function pad(n) { return String(n).padStart(2, "0"); }
  function tickClock() {
    var now = new Date();
    var c = $("clock"); if (c) c.textContent = pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds());
    var d = $("dateline"); if (d) d.textContent = pad(now.getDate()) + " de " + MESES[now.getMonth()] + " de " + now.getFullYear();
    var dn = $("dayname"); if (dn) dn.textContent = DIAS[now.getDay()];
  }
  setInterval(tickClock, 1000); tickClock();

  /* ---- Uptime de sessão ---- */
  var start = Date.now();
  setInterval(function () {
    var s = Math.floor((Date.now() - start) / 1000);
    var m = Math.floor(s / 60), sec = s % 60;
    var u = $("uptime"); if (u) u.textContent = "◈ sessão " + (m > 0 ? m + "m " : "") + sec + "s";
  }, 1000);

  /* ---- Clima (Open-Meteo, sem chave) — Londrina/PR ---- */
  var LAT = -23.3045, LON = -51.1696;
  function wmo(code) {
    if (code === 0) return { icon: "☀️", desc: "Céu limpo" };
    if (code <= 2) return { icon: "🌤️", desc: "Parcialmente nublado" };
    if (code === 3) return { icon: "☁️", desc: "Nublado" };
    if (code <= 49) return { icon: "🌫️", desc: "Névoa" };
    if (code <= 59) return { icon: "🌦️", desc: "Garoa" };
    if (code <= 69) return { icon: "🌧️", desc: "Chuva" };
    if (code <= 79) return { icon: "🌨️", desc: "Neve / granizo" };
    if (code <= 82) return { icon: "🌧️", desc: "Chuva forte" };
    if (code <= 84) return { icon: "🌨️", desc: "Granizo" };
    if (code <= 99) return { icon: "⛈️", desc: "Tempestade" };
    return { icon: "🌡️", desc: "—" };
  }
  function fetchWeather() {
    var url = "https://api.open-meteo.com/v1/forecast?latitude=" + LAT + "&longitude=" + LON +
      "&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m" +
      "&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
      "&timezone=America%2FSao_Paulo&forecast_days=1";
    fetch(url).then(function (r) {
      if (!r.ok) throw new Error("weather");
      return r.json();
    }).then(function (d) {
      var cur = d.current, daily = d.daily, info = wmo(cur.weathercode);
      $("wIcon").textContent = info.icon;
      $("wTemp").textContent = Math.round(cur.temperature_2m) + "°C";
      $("wDesc").textContent = info.desc;
      $("wExtras").textContent =
        "Máx " + Math.round(daily.temperature_2m_max[0]) + "° · Mín " + Math.round(daily.temperature_2m_min[0]) +
        "° · Chuva " + daily.precipitation_probability_max[0] + "% · Vento " + Math.round(cur.windspeed_10m) +
        "km/h · Umid. " + cur.relative_humidity_2m + "%";
    }).catch(function () {
      $("wIcon").textContent = "🌡️";
      $("wDesc").textContent = "Dado indisponível";
      $("wExtras").textContent = "Londrina, PR";
    });
  }
  fetchWeather();
  setInterval(fetchWeather, 10 * 60 * 1000);

  /* ---- Digitação no subtítulo do hero ---- */
  var typed = $("typed");
  var phrases = [
    "Ciência da Computação @ UNIFIL",
    "Programação · Robótica · Lógica digital",
    "Criador do Projeto Baluarte",
    "Sempre termino o que começo.",
  ];
  if (typed && !reduceMotion) {
    typed.innerHTML = '<span class="txt"></span><span class="cursor">_</span>';
    var txt = typed.querySelector(".txt");
    var pi = 0, ci = 0, del = false;
    (function type() {
      var full = phrases[pi];
      if (!del) {
        txt.textContent = full.slice(0, ++ci);
        if (ci === full.length) { del = true; return setTimeout(type, 1900); }
      } else {
        txt.textContent = full.slice(0, --ci);
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(type, del ? 38 : 70);
    })();
  } else if (typed) {
    typed.textContent = phrases[0];
  }

  /* ---- Tilt 3D no card do hero ---- */
  var heroCard = $("heroCard");
  if (heroCard && finePointer && !reduceMotion) {
    heroCard.addEventListener("mousemove", function (e) {
      var r = heroCard.getBoundingClientRect();
      var x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      var y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      heroCard.style.transform = "perspective(900px) rotateX(" + (-y * 3) + "deg) rotateY(" + (x * 3) + "deg)";
    });
    heroCard.addEventListener("mouseleave", function () { heroCard.style.transform = ""; });
  }

  /* ---- Reveal ao rolar ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Ano no rodapé ---- */
  var year = $("year"); if (year) year.textContent = new Date().getFullYear();

  /* ---- Partículas no fundo (constelação) ---- */
  var canvas = $("bgCanvas");
  if (canvas && !reduceMotion) {
    var ctx = canvas.getContext("2d");
    var W, H, parts = [];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    resize();
    window.addEventListener("resize", resize);

    var COUNT = window.innerWidth < 680 ? 45 : 110;
    var LINK = window.innerWidth < 680 ? 90 : 110;
    function mk() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.2 + 0.2,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        life: Math.random(), max: 0.4 + Math.random() * 0.6,
        cyan: Math.random() > 0.65,
      };
    }
    for (var i = 0; i < COUNT; i++) parts.push(mk());

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var k = 0; k < parts.length; k++) {
        var p = parts[k];
        p.x += p.vx; p.y += p.vy; p.life += 0.0015;
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H || p.life > p.max) parts[k] = mk();
        var a = Math.sin(p.life / p.max * Math.PI) * 0.5;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.cyan ? "rgba(34,211,238," + a + ")" : "rgba(249,115,22," + (a * 0.5) + ")";
        ctx.fill();
      }
      for (var a1 = 0; a1 < parts.length; a1++) {
        for (var b = a1 + 1; b < parts.length; b++) {
          var dx = parts[a1].x - parts[b].x, dy = parts[a1].y - parts[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK) {
            ctx.beginPath();
            ctx.moveTo(parts[a1].x, parts[a1].y); ctx.lineTo(parts[b].x, parts[b].y);
            ctx.strokeStyle = "rgba(34,211,238," + ((1 - dist / LINK) * 0.04) + ")";
            ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
})();
