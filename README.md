# 🛡️ Portfólio — Lucas Belucci Bellini

Site de portfólio pessoal de **Lucas Belucci Bellini**, estudante de
**Ciência da Computação na UNIFIL** (Londrina, Brasil). Construído com **Vite**
(HTML, CSS e JavaScript) e publicado na **Vercel**.

> _"Sempre termino o que começo, não importa quanto tempo leve."_

## ✨ Visual

Tema HUD futurista (cyan / laranja / verde) com:

- Cursor customizado, scanlines e partículas em constelação no fundo
- Barra com **relógio**, **data** e **previsão do tempo ao vivo** (Open-Meteo, Londrina)
- Cards com cantos "pixel" (corner brackets), efeito de digitação e tilt 3D
- Fontes Orbitron, JetBrains Mono e Inter

## 🧭 Seções

Início · Sobre · Projetos · Stack · Na imprensa & momentos · Interesses · Contato

## 🚀 Tecnologias

- [Vite](https://vitejs.dev/) — build e dev server
- HTML5, CSS3 (grid, flexbox, animações) e JavaScript sem frameworks
- API Open-Meteo (clima, sem chave)

## 📂 Estrutura

```
.
├── index.html          # Página principal (entry point do Vite)
├── src/
│   ├── main.js         # Interações + importa o CSS
│   └── style.css       # Estilos e responsividade
├── public/
│   └── img/            # Imagens do site (ver public/img/README.md)
├── vite.config.js
├── vercel.json         # Configuração de deploy na Vercel
└── package.json
```

## 💻 Rodar localmente

```bash
npm install      # 1ª vez
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # pré-visualiza o build
```

## 🌐 Deploy (Vercel)

O site é publicado na **Vercel**, que detecta o projeto Vite, roda
`npm run build` e serve a pasta `dist/`. Cada push no `main` gera um novo deploy
automaticamente.

## 🖼️ Adicionar imagens

Veja [`public/img/README.md`](public/img/README.md) — envie os arquivos com os
nomes indicados e eles aparecem sozinhos no site.

## 🌿 Fluxo de branches

A cada atualização é criada uma branch `backup/<data>-<descrição>` com o estado
anterior (ponto de retorno), e a mudança é feita numa branch `update/<descrição>`
que depois vai para o `main`.

## 🔗 Links

- **Projeto Baluarte:** https://projeto-baluarte.vercel.app/#/home
- **Instagram (oficial):** https://www.instagram.com/lucas_belucci_bellini/
- **GitHub:** https://github.com/Lucas-Belucci-Bellini

---

© Lucas Belucci Bellini
