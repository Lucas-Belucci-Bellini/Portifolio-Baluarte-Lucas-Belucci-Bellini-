# Catálogo de Projetos — Portfólio V2

Este documento define como projetos devem ser apresentados no portfólio. Os dados finais devem ser verificados nos respectivos repositórios antes da implementação.

## 1. Categorias

### Sistemas e plataformas
Projetos de software, plataformas e ecossistemas.

### Web
Sites, aplicações web e experiências frontend.

### IA e automação
Projetos de inteligência artificial, análise, agentes, automação e coleta.

### Games
Jogos e tecnologia relacionada a desenvolvimento de jogos.

### Ferramentas e simuladores
Ferramentas acadêmicas, simuladores, utilitários e experimentos.

### Conceitos / futuro
Ideias ainda em planejamento, protótipos não finalizados e projetos futuros.

## 2. Projetos que devem ser investigados antes da implementação

A lista abaixo é uma base de trabalho, não uma declaração de status final. Claude Code deve conferir cada repositório e atualizar o catálogo conforme evidências reais.

### Projeto Baluarte / ecossistema Baluarte
Categoria: Sistemas e plataformas
Status: verificar no repositório atual antes de publicar
Objetivo: apresentar o projeto como parte importante da trajetória técnica, sem afirmar funcionalidades que não estejam comprovadas.

### NEXORA
Categoria: Games
Status: verificar
Repositório conhecido: `Lucas-Belucci-Bellini/NEXORA`
Objetivo de apresentação: jogo autoral e ecossistema relacionado ao desenvolvimento de games.

### Veritas
Categoria: Ferramentas e simuladores
Status: verificar
Objetivo de apresentação: projeto relacionado a lógica booleana/sistemas digitais, destacando a proposta e o estado comprovado.

### Project Vanguard
Categoria: Sistemas / ferramentas
Status: verificar
Objetivo de apresentação: projeto voltado a mapas/GPS e uso offline, somente com funcionalidades comprovadas pelo repositório.

### TaxForge / projeto de reforma tributária
Categoria: IA e automação / sistemas
Status: verificar
Objetivo de apresentação: solução em desenvolvimento, sem tratar conceito ou hackathon como produto final.

### LLBR Innovations & Constructions
Categoria: Web / projetos profissionais
Status: verificar
Repositório conhecido: `Lucas-Belucci-Bellini/LLBR-Innovations-Constructions`
Objetivo de apresentação: mostrar capacidade de construção de sites/aplicações e organização de projetos.

### Base Móvel
Categoria: Conceitos / futuro
Status: Em planejamento
Fonte de planejamento relacionada: repositório `Projetos-Futuros`
Não apresentar como hardware já construído.

### Sistema operacional Linux
Categoria: Conceitos / futuro
Status: Em planejamento
Fonte: área de planejamento de sistema operacional em `Projetos-Futuros`.
Não apresentar como sistema operacional concluído.

## 3. Formato de cada projeto

```js
{
  id: "example",
  title: "Nome do projeto",
  category: "games",
  status: "Em desenvolvimento",
  featured: false,
  year: "2026",
  description: "Resumo curto e objetivo.",
  technologies: ["JavaScript", "Vite"],
  image: "/img/projects/example.webp",
  github: "https://github.com/...",
  demo: null,
  caseStudy: null
}
```

## 4. Projeto em destaque

Projeto destacado deve ter:
- imagem maior;
- resumo de problema/proposta;
- tecnologias;
- estado atual;
- links;
- CTA.

Não usar mais de 3 ou 4 projetos em destaque na página inicial.

## 5. Projetos arquivados

Podem aparecer no catálogo geral, mas devem receber indicação clara de arquivamento quando isso for relevante.

## 6. Validação obrigatória

Antes de adicionar qualquer projeto ao site:

1. conferir nome real do repositório;
2. conferir URL do GitHub;
3. conferir se existe demo;
4. conferir tecnologias reais;
5. conferir status real;
6. não inventar métricas;
7. não inventar prêmios, clientes ou usuários;
8. não declarar produção quando o projeto ainda for protótipo.

## 7. Fonte de verdade

O portfólio é uma apresentação editorial. O repositório do projeto é a fonte técnica principal.

`Projetos-Futuros` serve para planejamento e visão de longo prazo.

Isso evita que uma ideia futura seja apresentada como software já entregue.
