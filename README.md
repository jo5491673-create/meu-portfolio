# Portfólio - João Vitor Oliveira da Silva

Site pessoal desenvolvido para a disciplina de Desenvolvimento Front-end para Web (ADS - Braz Cubas).

## Páginas
`index`, `curriculo`, `formulario`, `multimidia` e `graficos`, todas interligadas pelo menu.

## Feature JavaScript: tema claro/escuro (localStorage)
- Um botão no cabeçalho de **todas as páginas** alterna entre tema claro e escuro.
- A escolha é salva e continua valendo depois de recarregar a página ou navegar entre as páginas.
- O gráfico em Canvas também é repintado com as cores do tema.

### Como testar
1. Clique em "Tema escuro" no cabeçalho.
2. Recarregue a página (F5) ou vá para outra página: o tema continua escuro.
3. Abra o DevTools (F12) → Application → Local Storage e veja a chave `tema`.

### Dados persistidos
| Chave | Valores | Descrição |
|-------|---------|-----------|
| `tema` | `claro` ou `escuro` | Tema escolhido pelo visitante |

## Formulário
Validação em JavaScript (nome, e-mail, senha e telefone) com mensagem de erro ou sucesso exibida na tela.

## Estrutura
```
css/estilos.css
js/scripts.js
img/Eu.jpeg
midia/video.mp4, midia/musica.mp3
```

## Publicação
Publicado com GitHub Pages (HTTPS).
