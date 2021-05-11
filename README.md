# Nextjs

## Pré-renderer

O Pré-renderer é o conceito principal do nextjs. A dois tipos principais:

- Static generator -> É a geração de pagina na hora do build do projeto,
  ele também é colocada em cache para ser reutilizada, por padrão utiliza-las
  em sua páginas.

  A dois tipos de static generator:

  - SG com sem dados que é a default do nextjs
  - SG com dados, com a desse tipo podemos fazer requisição assíncronas utilizando a função getStatic props para api rest, database, ...

- Sever side render -> renderização por parte do servidor, o html já vém processado do servidor
