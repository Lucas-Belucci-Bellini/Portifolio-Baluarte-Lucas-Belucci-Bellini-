# 🛡️ Portfólio — Lucas Belucci Bellini

Site de portfólio pessoal de **Lucas Belucci Bellini**, construído com **Vite**
(HTML, CSS e JavaScript), migrado a partir do antigo portfólio no Google Sites.

> _"Sempre termino o que começo, não importa quanto tempo leve."_

## ✨ Seções

- **Início** — apresentação com efeito de digitação
- **Sobre** — quem sou, formação, foto de perfil e foco atual
- **Projetos** — Projeto Baluarte, CHIPS, games, projetos com IA e mais
- **Habilidades** — programação, robótica, lógica digital, 3D, jogos e IA
- **Na imprensa & momentos** — aparição na Folha de Londrina e galeria de fotos
- **Interesses** — filmes, jogos e música
- **Contato** — Instagram oficial, GitHub, YouTube, Twitch, Spotify e e-mail

## 🚀 Tecnologias

- [Vite](https://vitejs.dev/) (build e dev server)
- HTML5 semântico
- CSS3 (grid, flexbox, animações, design responsivo)
- JavaScript (sem frameworks)
- Google Fonts (Orbitron + Inter)

## 📂 Estrutura

```
.
├── index.html              # Página principal (entry point do Vite)
├── src/
│   ├── main.js             # Interações + importa o CSS
│   └── style.css           # Estilos e responsividade
├── public/
│   ├── .nojekyll
│   └── img/                # Imagens do site (ver public/img/README.md)
├── .github/workflows/
│   └── deploy.yml          # Deploy automático no GitHub Pages
├── vite.config.js
└── package.json
```

## 💻 Rodar localmente

```bash
npm install      # instala as dependências (1ª vez)
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # gera a versão de produção em dist/
npm run preview  # pré-visualiza o build de produção
```

## 🌐 Publicação (GitHub Pages automático)

O deploy é **automático** via GitHub Actions a cada push na branch `main`.
Para ativar (uma única vez):

1. Vá em **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.

A partir daí, todo push no `main` publica o site em:

```
https://lucas-belucci-bellini.github.io/Portifolio-Baluarte-Lucas-Belucci-Bellini-/
```

## 🖼️ Adicionar imagens

Veja [`public/img/README.md`](public/img/README.md) — basta enviar os arquivos
com os nomes indicados e eles aparecem automaticamente no site.

## 🔗 Links

- **Projeto Baluarte:** https://projeto-baluarte.vercel.app/#/home
- **Instagram (oficial):** https://www.instagram.com/lucas_belucci_bellini/
- **GitHub:** https://github.com/Lucas-Belucci-Bellini

---

© Lucas Belucci Bellini
