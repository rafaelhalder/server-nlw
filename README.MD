````markdown
# Setup Instructions

Execute the following commands to set up the project:

```sh
npm init -y
```
````

Initializes a new Node.js project with default settings.

```sh
npm i fastify
```

Installs Fastify, a web framework for Node.js.

```sh
npm i tsx typescript @types/node -D
```

Installs TypeScript and related development dependencies.

```sh
npx tsc --init
```

Initializes a TypeScript configuration file.

```sh
npm i @fastify/cors
```

Installs CORS support for Fastify.

```sh
npm i zod
```

Installs Zod, a TypeScript-first schema declaration and validation library.

```sh
npm i fastify-type-provider-zod
```

Installs Zod type provider for Fastify.

```sh
npm i @fastify/swagger @fastify/swagger-ui
```

Installs Swagger and Swagger UI for API documentation in Fastify.

```sh
npm i @biomejs/biome -D
```

Installs Biome, a tool for code formatting and linting.

```sh
npm i ioredis
```

Installs ioredis, a robust Redis client for Node.js.

```sh
npm i postgres drizzle-orm
```

Installs Postgres and Drizzle ORM for database management.

```sh
npm i drizzle-kit -D
```

Installs Drizzle Kit, a tool for database migrations.

```sh
npx drizzle-kit generate
```

Generates migration files using Drizzle Kit.

```sh
npx drizzle-kit migrate
```

Applies database migrations using Drizzle Kit.

```sh
npm i tsup -D
```

Installs tsup, a TypeScript bundler.

## Running the Server

```sh
node --env-file .env dist/server.mjs
```

Runs the server with environment variables from the `.env` file.

## Services

- [neon.tech](https://neon.tech) - PostgreSQL hosting
- [upstash](https://upstash.com) - Redis hosting
- [render](https://render.com) - Node.js hosting

```

```

npx drizzle-kit introspect
Testa a conexão com o banco de dados

npx drizzle-kit migrate
Migrar as configs para criar as tabelas passadas

npm i ai @ai-sdk/openai
