// API Base Configuration
const API_BASE_URL = 'https://api.yenikadikoyspor.com/api';

// API Response Types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  data: {
    token: string;
    username: string;
    email: string;
    roles: string[];
  };
}

export interface ApiError {
  message: string;
  status?: number;
}

// Admin Panel API
export const adminApi = {
  /**
   * Admin login
   * @param credentials - Username and password
   * @returns Login response with token and user data
   */
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/AdminPanel/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || 'Giriş başarısız',
          status: response.status,
        } as ApiError;
      }

      const data: LoginResponse = await response.json();
      return data;
    } catch (error) {
      if ((error as ApiError).message) {
        throw error;
      }
      throw {
        message: 'Bağlantı hatası. Lütfen tekrar deneyin.',
        status: 0,
      } as ApiError;
    }
  },
};

