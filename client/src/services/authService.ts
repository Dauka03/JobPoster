// src/services/authService.ts
import axios from "axios";

export async function login(
  username: string,
  password: string
): Promise<string> {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to login");
    }

    return response.data.token; // Предполагается, что сервер возвращает токен
  } catch (error) {
    throw new Error(`Login error: ${error.message}`);
  }
}

export async function register(
  username: string,
  password: string
): Promise<void> {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/register",
      {
        username,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to register");
    }
  } catch (error) {
    throw new Error(`Registration error: ${error.message}`);
  }
}
