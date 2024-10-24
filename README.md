# 02-json-server

01) Na raiz do projeto, criar `db/db.json` com o conteúdo abaixo:
 ```json
  {
    "cidades": [
      {"id": 1, "cidade": "Belo Horizonte", "estado": "MG", "população": 3800000},
      {"id": 2, "cidade": "São Paulo", "estado": "SP", "população": 11800000},
      {"id": 3, "cidade": "Rio de Janeiro", "estado": "RJ", "população": 5300000},
      {"id": 4, "cidade": "Curitiba", "estado": "PR", "população": 1200000},
      {"id": 5, "cidade": "Fortaleza", "estado": "CE", "população": 2100000}
    ]
  }
 ```

02) Criar o arquivo `server.js`:
   ```js
      const jsonServer = require('json-server');
      const cors = require('cors');

      const server = jsonServer.create();
      const router = jsonServer.router('db/db.json'); // Seu arquivo "db/db.json".
      const middlewares = jsonServer.defaults();

      server.use(cors()); // Habilita CORS (Cross-Origin Resource Sharing).
      server.use(middlewares);
      server.use(router);

      server.listen(3333, () => {
        console.log('JSON-Server is running!');
      });
   ```

03) Instalar o `Node.js`:  
   `
  https://nodejs.org/
   `

04) Verificar a versão instalada do `Node.js`:
   ```
   node -v
   ```

05) Atualizar a instalação do `npm`:
   ```
   npm install -g npm
   ```

06) Verificar a versão instalada do `npm`:
   ```
   npm -v
   ```

07) Instalar o `JSON-Server`:
   ```
   npm install -g json-server --save
   ```

08) Verificar a versão instalada do `JSON-Server`:
   ```
   json-server --version
   ```

9)  Instalar o middleware `CORS` (`Cross-Origin Resource Sharing`):
   ```
   npm install cors
   ```

10) A versão do `JSON-Server` no arquivo `package.json` deve ser <mark>"^0.17.0"</mark>. 
   Exemplo:
   ```json
   {
     "dependencies": {
       "cors": "^2.8.5",
       "json-server": "^0.17.0"
     }
   }
   ```
   
11) Caso não seja essa versão, atualizar arquivo `package.json` como ilustrado acima e executar o comando:
   ```
   npm install
   ```
 
12) Executar o arquivo `server.js`:
   ```
   node server.js
   ```
