✅ 1. Install Required Packages

npm init -y
npm install express
npm install --save-dev typescript @types/express ts-node-dev


🛠️ 2. Setup tsconfig.json

{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true
  }
}


📁 3. Project Structure

your-app/
├── src/
│   └── index.ts
├── tsconfig.json
├── package.json


🚀 4. Create Express Server in TypeScript
src/index.ts

import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

// GET route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript + Express!');
});

// POST route
app.post('/user', (req: Request, res: Response) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name}, Age ${age} created.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



🚦 5. Add Scripts in package.json

"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc"
}


Run development server:

npm run dev


🧩 6. Type Definitions for Request Body (Optional)


interface UserRequest extends Request {
  body: {
    name: string;
    age: number;
  };
}

app.post('/user', (req: UserRequest, res: Response) => {
  const { name, age } = req.body;
  res.json({ message: `User ${name}, Age ${age} created.` });
});


🧪 7. Testing with Postman/Thunder Client
GET / → Returns Hello message

POST /user with JSON body:

{
  "name": "Siva",
  "age": 23
}


