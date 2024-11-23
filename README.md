# Repositório de Exercícios de Lógica [![GitHub](https://img.shields.io/badge/GitHub-pedro--m--lima-blue?style=for-the-badge&logo=github)](https://github.com/pedro-m-lima)

Bem-vindo ao meu repositório de exercícios de lógica! Aqui você encontrará soluções para diversos problemas de lógica que estou resolvendo no Beecrowd. Este repositório tem como objetivo treinar minhas habilidades de lógica utilizando as linguagens que estou estudando no momento. Atualmente, estou focado em JavaScript.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:


## Linguagens Utilizadas

- JavaScript

## Como Executar os Exercícios

Para executar os exercícios em JavaScript, siga os passos abaixo:

### Executando pelo Terminal
1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.
2. Navegue até o diretório do exercício que deseja executar.
3. Abra o terminal e execute o seguinte comando:

obs: A entrada já esta fixa, para novos testes necessário alterar a variável "input" para a entrada desejada, utilize o \n para simular o enter do usuário.

```bash
node BEE1018.js
```

### Executando pelo Visual Studio Code
1. Abra o Visual Studio Code e abra o arquivo do exercício que deseja executar.
2. Para testes locais no VS Code, comente a linha 1 e descomente a linha 2:
```javascript
//var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var input = '1257'; //Informe aqui a entrada, caso mais de uma separe as entradas com \n
```

3. Para submeter no [Beecrowd](https://judge.beecrowd.com) , descomente a linha 1 e comente a linha 2:
```javascript
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var input = '1257'; //Informe aqui a entrada, caso mais de uma separe as entradas com \n
```

5. Execute o arquivo no VS Code das seguintes formas
- Usando o Run code:
  - Clique no botão de Run Code na topo da tela lado diereito
  - ou através do atalho (Ctrl+alt+n)

- Usando o terminal integrado:
  - Abra o terminal e execute o seguinte comando
  ```bash
  node BEE1018.js
  ```



