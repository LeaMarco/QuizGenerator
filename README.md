# Quiz Generator

App to create quizzes and exams

## Installation

First generate the db, with the following commands (locate in /api to do it)

```bash
npx prisma db push
```

```bash
npx prisma generate
```

And then install the dependencies in both servers (/api and /client) using:

```bash
npx prisma generate
```

## Usage
In order to start the project, run this command in both servers:
```bash
npmstart
```