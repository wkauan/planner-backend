# plann.er - Backend

plann.er é um projeto desenvolvido durante a NLW Journey, oferecido pela Rocketseat.

## Documentação da API

Para mais detalhes sobre as rotas e uso da API, consulte a [documentação oficial](https://nlw-journey.apidocumentation.com/reference).

## Tecnologias Utilizadas

- **Node.js**
- **Fastify**
- **SQLite**
- **Prisma**
- **TypeScript**

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/wkauan/planner-backend.git
   ```

2. Navegue até o diretório do backend:

   ```bash
   cd planner-backend #(Caso não tenha trocado o nome da pasta)
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure o banco de dados e outras variáveis de ambiente, se necessário.

## Executando o Projeto

1. Rode as migrações do banco de dados:

   ```bash
   npx prisma migrate dev
   ```

2. Inicie o servidor:

   ```bash
   npm run dev
   ```
