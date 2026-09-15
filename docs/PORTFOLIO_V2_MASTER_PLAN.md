# Portfólio Lucas Belucci Bellini — V2 Master Plan

## 1. Objetivo

Reformular o portfólio atual do repositório sem descartar a base existente, transformando-o em um site pessoal moderno, organizado, responsivo e fácil de manter.

A referência de organização é o conteúdo do antigo portfólio em Google Sites, mas a implementação visual deve ser própria e mais profissional. O resultado deve parecer um site autoral de desenvolvedor, não uma cópia do Google Sites.

## 2. Regras fundamentais

1. O repositório atual continua sendo a base da aplicação.
2. A branch `main` não deve ser alterada durante a fase de planejamento.
3. Esta branch contém planejamento e documentação para implementação posterior.
4. O planejamento de `Projetos-Futuros` deve servir como fonte de ideias e status, mas projeto planejado não pode aparecer como projeto concluído.
5. A aplicação deve funcionar muito bem em celular, tablet e desktop.
6. Conteúdo, dados dos projetos e links devem ficar separados da apresentação visual sempre que possível.
7. Não adicionar dependências sem necessidade real.
8. Não substituir Vite por outro framework apenas por estética.
9. O site deve ser rápido e acessível.
10. Animações devem ser discretas e desligáveis/reduzíveis quando o usuário preferir movimento reduzido.

## 3. Estado atual conhecido

O projeto atual usa Vite, HTML, CSS e JavaScript sem framework. O README atual descreve um visual HUD futurista, relógio/data/clima, efeitos de cursor, partículas, cards estilizados e seções como Início, Sobre, Projetos, Stack, imprensa/momentos, interesses e contato.

A V2 deve preservar o que funciona, mas reduzir a sensação de excesso visual e melhorar hierarquia, leitura, navegação e responsividade.

## 4. Estrutura de navegação desejada

### Início
Apresentação forte, chamada principal, resumo rápido, projetos em destaque e atalhos.

### Me conheça
Página ou seção dedicada à apresentação pessoal, trajetória, estudos, interesses profissionais e objetivos.

### Projetos
Catálogo filtrável de projetos reais e projetos em desenvolvimento.

### Tecnologias
Tecnologias organizadas por categorias e nível de uso/aplicação, evitando uma lista visualmente confusa.

### Destaques
Projetos selecionados que merecem maior destaque e apresentam cards maiores ou cases.

### Formação / Estudos
Área para formação acadêmica, estudos, atividades e experiências relevantes.

### Laboratório / Futuro
Projetos conceituais, pesquisas, ideias e planejamento. Deve ficar visualmente separado dos projetos concluídos.

### Contato
GitHub, redes sociais e outros canais definidos pelo usuário.

## 5. Organização visual

O site deve utilizar uma identidade visual consistente entre todas as páginas.

Direção estética:
- tecnologia;
- engenharia;
- laboratório digital;
- futurista, porém limpo;
- profissional sem parecer um template corporativo genérico;
- identidade própria derivada da estética atual, mas com menos ruído.

Prioridades:
1. tipografia e espaçamento;
2. hierarquia visual;
3. imagens dos projetos;
4. navegação clara;
5. responsividade;
6. microinterações.

## 6. Componentização sugerida

Criar componentes reutilizáveis conforme a necessidade real do projeto:

- Header / Navbar
- MobileMenu
- Footer
- Hero
- SectionTitle
- ProjectCard
- FeaturedProjectCard
- ProjectGrid
- TechnologyCard
- Timeline
- SocialLink
- StatusBadge
- FilterBar
- BackToTop

Não criar componentes artificiais apenas para aumentar a quantidade de arquivos.

## 7. Dados

Projetos e tecnologias devem ficar em arquivos de dados, por exemplo:

```text
src/data/projects.js
src/data/technologies.js
src/data/socialLinks.js
```

Projeto deve possuir, quando disponível:
- id
- nome
- categoria
- status
- descrição curta
- descrição longa/case
- tecnologias
- imagem
- GitHub
- demo
- destaque
- ordem

## 8. Status dos projetos

Usar estados explícitos, por exemplo:

- Concluído
- Em desenvolvimento
- Protótipo
- Em planejamento
- Arquivado

Nunca apresentar um projeto planejado como se já estivesse pronto.

## 9. Responsividade

A versão mobile é requisito central, não adaptação posterior.

Testar pelo menos:
- 320 px
- 375 px
- 390 px
- 414 px
- 768 px
- 1024 px
- 1280 px
- 1440 px

No celular:
- menu vira navegação compacta;
- grids passam para uma coluna ou duas quando couber;
- textos não podem vazar horizontalmente;
- botões devem ser confortáveis ao toque;
- imagens devem manter proporção;
- efeitos de fundo não podem prejudicar leitura ou desempenho.

## 10. Acessibilidade

Implementar:
- HTML semântico;
- labels e nomes acessíveis;
- foco visível;
- navegação por teclado;
- contraste suficiente;
- `alt` nas imagens relevantes;
- respeito a `prefers-reduced-motion`;
- nenhum conteúdo importante depender exclusivamente de hover.

## 11. Performance

Evitar:
- imagens gigantes sem otimização;
- scripts desnecessários;
- animação contínua pesada;
- dependências redundantes;
- renderizações desnecessárias.

Dar preferência a WebP/AVIF quando adequado.

## 12. SEO básico

Configurar:
- title;
- description;
- Open Graph;
- favicon;
- headings em ordem correta;
- URLs e textos coerentes;
- sitemap/robots somente se fizer sentido para o deploy.

## 13. Deploy

Manter compatibilidade com Vercel e o fluxo atual do Vite.

Antes de concluir qualquer fase:
```bash
npm install
npm run build
```

Se existirem lint/testes, executá-los também.

## 14. Fases de implementação

### Fase 0 — Auditoria
Ler o código atual e registrar o que pode ser preservado, removido ou refatorado.

### Fase 1 — Fundação
Criar arquitetura visual, tokens de design, navegação e estrutura de páginas.

### Fase 2 — Conteúdo
Migrar e organizar as informações do portfólio, sem copiar a aparência do Google Sites.

### Fase 3 — Projetos
Criar catálogo, filtros, cards, destaques e páginas/cases quando justificável.

### Fase 4 — Responsividade
Refinar todos os breakpoints e testar especialmente celulares pequenos.

### Fase 5 — Polimento
Performance, acessibilidade, SEO, microinterações, imagens e detalhes visuais.

### Fase 6 — Validação
Build, navegação, links, console, mobile e deploy de preview.

## 15. Critério de pronto

A V2 só deve ser considerada pronta quando:

- todas as páginas principais estiverem navegáveis;
- nenhum link interno importante estiver quebrado;
- layout estiver bom em celular e desktop;
- projetos apresentarem status corretos;
- imagens carregarem sem quebrar o layout;
- build passar;
- console não apresentar erros conhecidos;
- acessibilidade básica estiver atendida;
- visual tiver identidade consistente.

## 16. Princípio de manutenção

A futura implementação deve permitir adicionar um projeto editando principalmente os dados, e não espalhando mudanças por dezenas de componentes.

A aplicação deve ser pensada como uma vitrine viva do trabalho de Lucas, enquanto o planejamento detalhado permanece nos repositórios e documentos de planejamento.
