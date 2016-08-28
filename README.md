CoolPodCastPlayer
==============
Descrição sobre o aplicativo

# Começo
A única dependência para o desenvolvimento deste projeto é o [Node.js](https://nodejs.org). Portanto, apenas certifique-se de tê-lo instalado e tenha a versão >= 4. Em seguida...

```
git clone https://github.com/CoolPodCast/playerDesktop.git
cd playerDesktop
npm install
npm start
```
... Peei! O aplicativo está executando.

# Estrutura do projeto

## Declarando dependências

Existem **dois** `package.json`:

#### 1. `package.json` é para o ambiente de desenvolvimento (development)
Caminho: `playerDesktop/package.json`. Aqui é declarado toda dependencia para o desenvolvimento do projeto e seus scripts. **Este arquivo não é distribuido juntamente com sua aplicação empacotada!**

#### 2. `package.json` da aplicação
Caminho: `playerDesktop/app/package.json`. Este é o arquivo **real** das dependências do seu projeto que serão distribuidas.

## Pastas

O aplicativo é dividido em duas pastas principais...

`src` - esta pasta é destinado para os arquivos que necessitam de ser convertidos ou compilados (arquivos que não podem ser utilizadas directamente por Electron).

`app` - contém todos os arquivos estáticos (imagens, CSS, HTML, etc.) que não precisão de pré-processamento.

O build analisa todos os arquivos da pasta `src` e converte ou compula para a pasta `app`.

# Desenvolvimento

### Instalação

```
npm install
```
Aqui irá instalar o Electron runtime e toda dependência do projeto do `package.json` da raiz, em seguida será instalado as dependências do `package.json` da pasta app.

### Rodando app

```
npm start
```

### Para adicionar módulos para a aplicação

Lembre-se que as dependências do projeto ficam em `app/package.json`, então esteja na pasta app para realizar as instalações:
```
cd app
npm install name_of_npm_module --save
```

### Trabalhando com módulos

Thanks to [rollup](https://github.com/rollup/rollup) you can (and should) use ES6 modules for all code in `src` folder. But because ES6 modules still aren't natively supported you can't use it in `app` folder.

Graças a rollup](https://github.com/rollup/rollup), podemos (e devemos) usar módulos ES6 para todo o código em `src`. Mas como os módulos ES6 ainda não são suportados nativamente você não pode usá-lo direto em `app`.

Sendo assim para os arquivos em `src` fazemos assim:
```js
import myStuff from './my_lib/my_stuff';
```

Para os arquivos em `app` fazemos assim:
```js
var myStuff = require('./my_lib/my_stuff');
```

# Testando

### Teste unitário

Usando [electron-mocha](https://github.com/jprichardson/electron-mocha) com [chai](http://chaijs.com/api/assert/):
```
npm test
```
Executa os testes para todos os arquivos da pasta `src` que respeita o padrão de nomenclatura `*.spec.js`.

Estes testes vão ser conectados com [Sistema de integração contínua](https://github.com/atom/electron/blob/master/docs/tutorial/testing-on-headless-ci.md).

### Teste de interface

Usando [mocha](https://mochajs.org/) e [spectron](http://electron.atom.io/spectron/):
```
npm run e2e
```
Roda todos os testes contidos no diretório `e2e` que respeitão o padrão `*.e2e.js`.

# Empacotando a aplicação

Para liberar um aplicativo digite o comando:
```
npm run release
```
Este processo faz o empacotamento para o sistema operacional que você estiver executando este comando. O arquivo final para distribuição ficará no diretório `dist`.


Todo o processo é empacotado pelo  [electron-builder](https://github.com/electron-userland/electron-builder). Veja a documentação para mais detalhes.

# License

MIT license.

# Contribuição

...
