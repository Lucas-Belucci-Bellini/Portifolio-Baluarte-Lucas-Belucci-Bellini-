# Prompt Mestre — Implementação do Portfólio V2

> Este arquivo foi escrito para ser entregue diretamente ao Claude Code.

## Contexto

Você está trabalhando no repositório `Portifolio-Baluarte-Lucas-Belucci-Bellini-`.

Existe uma branch de planejamento chamada `docs/portfolio-v2-master-plan` contendo:

- `docs/PORTFOLIO_V2_MASTER_PLAN.md`
- `docs/DESIGN_SYSTEM_V2.md`
- `docs/PROJECT_CATALOG_V2.md`
- este arquivo

Leia toda essa documentação antes de modificar o código.

## Objetivo

Transformar o portfólio atual em uma versão V2 moderna, bonita, organizada e altamente responsiva, mantendo a personalidade tecnológica do site atual e melhorando drasticamente sua hierarquia visual.

O antigo Google Sites de Lucas serve somente como referência de conteúdo/organização. Não copie HTML, CSS, layout ou aparência dele.

## Regra mais importante

Não destrua o que já funciona sem entender primeiro.

Primeiro faça uma auditoria do código atual. Depois implemente em etapas pequenas e verificáveis.

## Etapa 1 — Auditoria obrigatória

Antes de codificar:

1. Leia `README.md`.
2. Inspecione `index.html`, `src/`, `public/`, `package.json`, `vite.config.js` e `vercel.json`.
3. Identifique todas as seções existentes.
4. Identifique efeitos atuais que podem ser preservados.
5. Identifique código duplicado, acoplado ou desnecessário.
6. Liste assets existentes e seus usos.
7. Verifique como o site atual funciona no desktop e quais regras de responsividade já existem.
8. Verifique scripts e APIs existentes, incluindo o clima, e preserve apenas o que continuar fazendo sentido.

Não faça redesign baseado em suposições.

## Etapa 2 — Arquitetura

Organize o projeto de modo coerente para sua stack atual.

Estrutura de referência:

```text
src/
├── components/
├── data/
├── pages/
├── styles/
└── main.js
public/
└── img/
    ├── projects/
    ├── profile/
    └── sections/
docs/
```

Adapte a estrutura se o código atual justificar outra organização mais simples.

Não introduza React, Vue ou outro framework somente para cumprir esta estrutura. O projeto atual é Vite + HTML/CSS/JavaScript e deve continuar assim, salvo necessidade técnica real.

## Etapa 3 — Nova experiência

Criar uma navegação clara com:

- Início
- Me conheça
- Projetos
- Tecnologias
- Formação/Estudos
- Laboratório/Futuro
- Contato

Pode usar páginas ou navegação por seções dependendo da arquitetura final, mas a experiência precisa parecer um site completo e não uma parede de conteúdo.

## Página inicial

A Home deve ter:

1. Hero forte.
2. Apresentação curta.
3. CTA para projetos e apresentação pessoal.
4. Projetos em destaque.
5. Resumo de tecnologias.
6. Pequena área sobre o perfil.
7. CTA final para contato.

Não colocar todos os projetos na Home.

## Página Me Conheça

Organizar o conteúdo pessoal em blocos de leitura fácil:

- quem sou;
- trajetória;
- formação/estudos;
- interesses técnicos;
- objetivos.

Usar timeline, estatísticas ou elementos visuais apenas quando houver dados reais que sustentem isso.

## Página de Projetos

Criar catálogo visual.

Requisitos:

- filtro por categoria;
- status visível;
- cards consistentes;
- imagem opcional;
- link GitHub;
- demo quando houver;
- destaque visual para projetos principais.

Projetos em planejamento devem ser claramente separados.

## Página de Tecnologias

Agrupar por categorias, por exemplo:

- Linguagens
- Frontend/Web
- Backend/Infra
- IA/Automação
- Ferramentas
- Outras

Não inventar nível de domínio baseado apenas no nome da tecnologia.

## Laboratório/Futuro

Usar como vitrine de ideias e planejamento.

Apresentar explicitamente estados como:

- Conceito
- Planejamento
- Pesquisa
- Protótipo

Relacionar projetos futuros a suas descrições reais.

## Identidade visual

Siga `docs/DESIGN_SYSTEM_V2.md`.

A ideia é manter ecos da estética HUD tecnológica existente, porém com uma interface mais limpa.

Reduza:
- excesso de neon;
- elementos competindo pela atenção;
- animações contínuas;
- texto pequeno;
- efeitos 3D exagerados.

Aumente:
- espaço em branco;
- legibilidade;
- consistência;
- qualidade dos cards;
- hierarquia.

## Mobile first

Teste e ajuste especialmente:

- 320px
- 375px
- 390px
- 414px

Depois valide tablet e desktop.

A navegação mobile precisa ser pensada como experiência própria.

Não basta fazer `display: none` em elementos até caber.

## Conteúdo e veracidade

Use somente informações verificadas nos repositórios/documentos.

Não invente:
- clientes;
- números de usuários;
- prêmios;
- métricas;
- cargos;
- experiência profissional;
- funcionalidades que o projeto não possui.

Quando um projeto estiver em planejamento, escreva como planejamento.

## Imagens

Não usar imagens de placeholder como solução final.

Criar uma convenção de assets e fazer os cards funcionarem mesmo quando a imagem ainda não estiver disponível.

Evitar imagens enormes.

## Código

Prioridades:

1. clareza;
2. manutenção;
3. responsividade;
4. acessibilidade;
5. performance;
6. estética.

Não usar código excessivamente complexo para efeitos simples.

## Acessibilidade

Implementar:

- semântica HTML;
- `alt` apropriado;
- foco visível;
- teclado;
- botões reais em vez de divs clicáveis;
- `aria-label` somente quando necessário;
- suporte a `prefers-reduced-motion`.

## SEO

Revisar:
- title;
- description;
- Open Graph;
- favicon;
- headings;
- links.

## Validação por fase

Depois de cada grande etapa:

```bash
npm run build
```

Se houver testes/lint:

```bash
npm test
npm run lint
```

Use somente os scripts existentes no `package.json`.

Também faça inspeção visual no navegador quando possível.

## Commits

Use commits pequenos e descritivos.

Exemplos:

```text
docs: add Portfolio V2 planning
refactor: separate portfolio project data
feat: redesign portfolio navigation
feat: add responsive project catalog
feat: add portfolio about page
fix: improve mobile navigation
perf: optimize portfolio images
fix: improve accessibility and reduced motion
```

## Não fazer

- não trocar a stack sem motivo;
- não remover conteúdo sem registrar a decisão;
- não transformar todo o site em uma dashboard;
- não utilizar excesso de animações;
- não criar uma UI que fique bonita somente em desktop;
- não esconder informações importantes atrás de hover;
- não apresentar conceito como produto final.

## Entrega final

Ao terminar, informe:

1. o que foi implementado;
2. quais arquivos principais foram modificados/criados;
3. o que foi preservado do site anterior;
4. quais decisões visuais foram tomadas;
5. resultado do build/testes;
6. problemas restantes;
7. próximos passos recomendados.

Antes de concluir, verifique se o site continua publicável pela Vercel.
