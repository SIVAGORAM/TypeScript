/* ✅ 1. Install Axios

npm install axios
npm install --save-dev @types/axios

Note: @types/axios is often optional now as Axios comes with built-in types.

 */

//📦 2. Basic GET Request with Type

import axios from 'axios';

type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchUser(userId: number): Promise<User> {
  const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
}

fetchUser(1).then(user => console.log(user.name));


// ✅ 3. POST Request with Typing

type NewUser = {
  name: string;
  email: string;
};

type CreatedUser = {
  id: number;
  name: string;
  email: string;
};

async function createUser(user: NewUser): Promise<CreatedUser> {
  const response = await axios.post<CreatedUser>('https://jsonplaceholder.typicode.com/users', user);
  return response.data;
}


// 🧩 4. Handling Errors in TypeScript

import axios, { AxiosError } from 'axios';

async function fetchSomething() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}


// 🛠️ 5. Axios Instance with TypeScript

import axios, { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

type Product = {
  id: number;
  title: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await apiClient.get<Product[]>('/products');
  return res.data;
}


// 🔄 6. Using Axios Interceptors (Optional Advanced)

apiClient.interceptors.request.use(config => {
  console.log('Request sent at:', new Date());
  return config;
});

apiClient.interceptors.response.use(
  res => res,
  err => {
    console.error('Error occurred:', err.message);
    return Promise.reject(err);
  }
);

