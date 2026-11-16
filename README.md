# Portfólio - João Vitor Oliveira da Silva

Site pessoal desenvolvido para a disciplina de Desenvolvimento Front-end para Web (ADS - Braz Cubas).

Site publicado: https://jo5491673-create.github.io/meu-portfolio/

## Páginas
`index`, `curriculo`, `formulario`, `multimidia` e `graficos`, todas interligadas pelo menu.

## Evolução do projeto
| Checkpoint | O que entrou |
|------------|--------------|
| CP1 | Estrutura em HTML semântico das páginas |
| CP2 | Estilos em CSS (Flexbox, Grid e media queries) |
| CP3 | JavaScript: tema claro/escuro, validação e rascunho do formulário (`localStorage`), gráfico em Canvas |
| CP4 | Bootstrap 5.3.3 integrado, ajustes de acessibilidade e publicação final com HTTPS |

## Feature JavaScript: tema claro/escuro (localStorage)
- Um botão no cabeçalho de **todas as páginas** alterna entre tema claro e escuro.
- A escolha é salva e continua valendo depois de recarregar a página ou navegar entre as páginas.
- O gráfico em Canvas também é repintado com as cores do tema, e os componentes do Bootstrap acompanham o tema pelo atributo `data-bs-theme`.

### Como testar
1. Clique em "Tema escuro" no cabeçalho.
2. Recarregue a página (F5) ou vá para outra página: o tema continua escuro.
3. Abra o DevTools (F12) → Application → Local Storage e veja a chave `tema`.

### Dados persistidos
| Chave | Valores | Descrição |
|-------|---------|-----------|
| `tema` | `claro` ou `escuro` | Tema escolhido pelo visitante |
| `rascunhoForm` | objeto JSON | Nome, e-mail, telefone e nascimento digitados no formulário (a senha não é salva) |

## Formulário
Validação em JavaScript (nome, e-mail, senha e telefone) com mensagem de erro ou sucesso exibida na tela.

## Bootstrap (5.3.3, via CDN)
| Classes | Onde | Para que |
|---------|------|----------|
| `navbar`, `navbar-expand-md`, `navbar-toggler`, `nav-link` | Cabeçalho de todas as páginas | Menu que vira "hambúrguer" no celular |
| `row`, `col-md-*`, `g-4` | Páginas com cards | Grade responsiva: 1 coluna no celular, 2 a partir do tablet |
| `btn`, `btn-dark`, `btn-outline-light` | Botões | Estilo e estados (hover, foco) padronizados |
| `form-control`, `form-label`, `form-range` | Formulário | Campos consistentes e com bom alvo de toque |
| `visually-hidden-focusable` | Link "Pular para o conteúdo" | Aparece só quando recebe foco do teclado |

O CSS próprio (`css/estilos.css`) é carregado depois do Bootstrap e cuida da identidade visual, do tema escuro e da acessibilidade.

## Acessibilidade
- **Foco visível:** anel duplo (azul + halo branco) em `:focus-visible`, legível sobre o fundo preto, o cinza e o tema escuro.
- **Teclado:** todo o site é navegável com Tab/Enter; o menu hambúrguer abre com teclado; há link "Pular para o conteúdo".
- **Texto alternativo:** a foto da página inicial tem `alt` descrevendo a imagem; os gráficos têm `aria-label` / `<title>`.
- **Contraste:** links do conteúdo com cor própria (antes ficavam azul Bootstrap sobre cinza); bordas de campos e tabelas mais fortes; gráfico SVG corrigido no tema escuro.
- **Semântica:** `lang="pt-br"`, `<label>` em todos os campos, `autocomplete`, `<thead>` + `scope` na tabela, `role="alert"` na mensagem do formulário, respeito a `prefers-reduced-motion`.

## Estrutura
```
index.html, curriculo.html, formulario.html, multimidia.html, graficos.html
css/estilos.css
js/scripts.js
img/Eu.jpeg
midia/video.mp4, midia/musica.mp3
```

## Publicação
Publicado com GitHub Pages (HTTPS). Versão final marcada com a tag `cp4-entrega`.
