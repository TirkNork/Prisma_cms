# About Prisma CMS

This repository is a mini project to implement a Content Management System (CMS) using Next.js with Prisma ORM. The project demonstrates how to build a simple CMS with modern web technologies.

![Alt text](img/prisma_cms.png?raw=true "Title")

## Features
- CRUD Operations: Create, read, update, and delete blog content.
- Filtering: Filter content based on various criteria.
- Search

## Technologies Used
- Next.js: A React framework for building server-rendered applications.
- Prisma ORM: A type-safe ORM for interacting with your database.
- React: A JavaScript library for building user interfaces.
- PostgreSQL: The database management system used in this project.
- Docker: For containerizing the PostgreSQL database.

## Getting Started
1. Init project next.js
```
  npx create-next-app@latest
```
2. Start docker for PostgreSQL
```
  docker-compose up -d
```
3. Install prisma
```
  npm install prisma --save-dev
  npm install @prisma/client
```
4. Generate prisma client
```
   npx prisma generate
```
5. migrate DB
```
   npx prisma migrate dev --name <migrate name>
```
6. Start Next
```
  npm i
  npm start
  npm run dev
```

