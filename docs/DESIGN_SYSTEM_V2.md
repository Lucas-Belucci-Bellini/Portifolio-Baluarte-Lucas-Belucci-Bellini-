# Design System — Portfólio V2

## 1. Direção

Criar uma estética tecnológica/futurista com aparência profissional e muito mais limpa que a versão HUD atual.

A inspiração vem de interfaces de tecnologia, engenharia e laboratório, mas o resultado precisa ser autoral.

## 2. Sensação desejada

O visitante deve perceber:

- organização;
- tecnologia;
- personalidade;
- projetos reais;
- cuidado técnico.

Evitar sensação de:

- site escolar genérico;
- template pronto;
- painel cheio de informação;
- excesso de neon;
- excesso de animações.

## 3. Layout

Desktop:
- conteúdo centralizado;
- largura máxima definida por tokens;
- seções com bastante espaço vertical;
- grids consistentes;
- navegação persistente quando fizer sentido.

Mobile:
- prioridade total ao conteúdo;
- uma coluna por padrão;
- cards sem largura fixa excessiva;
- menu compacto;
- elementos decorativos reduzidos.

## 4. Tipografia

Usar uma fonte para títulos e uma fonte extremamente legível para textos.

A versão atual usa Orbitron, JetBrains Mono e Inter. A V2 pode preservar essa identidade ou substituir por uma combinação equivalente, mas a decisão deve priorizar legibilidade.

Regra:
- títulos podem ser mais expressivos;
- corpo deve ser simples e confortável;
- nunca utilizar fonte futurista para parágrafos longos.

## 5. Cores

Criar tokens CSS em vez de espalhar valores pelo código.

Exemplo conceitual:

```css
:root {
  --color-bg: ...;
  --color-surface: ...;
  --color-surface-raised: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-primary: ...;
  --color-secondary: ...;
  --color-border: ...;
  --color-success: ...;
  --color-warning: ...;
}
```

A paleta pode manter referências sutis ao cyan/verde/laranja do portfólio atual, mas sem transformar toda a interface em RGB/neon.

## 6. Cards

Cards devem possuir:
- título claro;
- descrição curta;
- status;
- tecnologias relevantes;
- imagem quando disponível;
- CTA claro.

Evitar 3D tilt obrigatório. Efeitos de hover devem ser leves.

## 7. Imagens

Criar convenção:

```text
public/img/projects/<project-id>.<ext>
public/img/profile/<name>.<ext>
public/img/sections/<name>.<ext>
```

Toda imagem deve ter fallback adequado ou não impedir a renderização do card.

## 8. Espaçamento

Usar escala de espaçamento consistente através de CSS variables/tokens.

Evitar margens arbitrárias diferentes em cada componente.

## 9. Botões

Ter no mínimo:
- primário;
- secundário;
- texto/link.

Todos devem apresentar estados de hover, foco e desabilitado quando aplicável.

## 10. Navegação

Desktop:
- navegação curta;
- indicar claramente a página/seção atual.

Mobile:
- menu acessível;
- sem depender de hover;
- fechar após navegação quando aplicável.

## 11. Animações

Usar como complemento.

Permitido:
- entrada suave de seções;
- hover discreto;
- transições de navegação;
- efeitos decorativos leves.

Evitar:
- movimento constante no fundo que prejudica leitura;
- animações longas;
- elementos pulando ou piscando;
- efeitos que consomem muito CPU/GPU.

Implementar `prefers-reduced-motion`.

## 12. Responsividade como regra de design

Todo componente precisa ser pensado com pelo menos duas versões:

1. desktop;
2. touch/mobile.

Não aceitar simplesmente diminuir tudo via CSS.

## 13. Hierarquia de conteúdo

Cada tela deve ter:

```text
Título
↓
Contexto curto
↓
Conteúdo principal
↓
Ação
```

O usuário deve entender rapidamente onde está e o que pode fazer.

## 14. Princípio visual principal

Menos elementos, mais hierarquia.

O portfólio deve mostrar trabalho e personalidade, e não competir com os próprios projetos por atenção.
