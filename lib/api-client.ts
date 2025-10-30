import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

/**
 * Base API URL
 */
export const API_BASE_URL = 'https://api.yenikadikoyspor.com/api';

/**
 * Get authentication token from localStorage
 */
export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  // Try new format first (from Redux auth state)
  const token = localStorage.getItem('admin_token');
  if (token) return token;
  
  // Fallback to old format
  const authState = localStorage.getItem('auth');
  if (!authState) return null;
  try {
    const parsed = JSON.parse(authState);
    return parsed.token || null;
  } catch {
    return null;
  }
};

/**
 * Create axios instance with default config
 */
const createApiClient = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor - add auth token
  instance.interceptors.request.use(
    (config) => {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - handle errors
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        // Server responded with error status
        const status = error.response.status;
        const data = error.response.data as any;
        
        if (status === 401) {
          // Unauthorized - clear auth and redirect to login
          if (typeof window !== 'undefined') {
            localStorage.removeItem('admin_token');
            localStorage.removeItem('admin_username');
            localStorage.removeItem('admin_email');
            localStorage.removeItem('admin_roles');
            window.location.href = '/admin';
          }
        }
        
        // Return formatted error
        return Promise.reject({
          message: data?.message || error.message || 'Bir hata oluştu',
          status,
          data,
        });
      } else if (error.request) {
        // Request made but no response
        return Promise.reject({
          message: 'Sunucuya bağlanılamadı',
          status: 0,
        });
      } else {
        // Something else happened
        return Promise.reject({
          message: error.message || 'Bir hata oluştu',
          status: 0,
        });
      }
    }
  );

  return instance;
};

/**
 * Global API client instance
 */
export const apiClient = createApiClient();

/**
 * API Error type
 */
export interface ApiError {
  message: string;
  status: number;
  data?: any;
}

/**
 * Generic API response type
 */
export interface ApiResponse<T = any> {
  message: string;
  data: T;
  count?: number;
}

/**
 * Upload file helper
 */
export const uploadFile = async (
  endpoint: string,
  file: File,
  additionalData?: Record<string, any>
): Promise<ApiResponse> => {
  const formData = new FormData();
  formData.append('file', file);
  
  if (additionalData) {
    Object.entries(additionalData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  }

  const token = getAuthToken();
  const response = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return response.data;
};

/**
 * Delete file helper
 */
export const deleteFile = async (
  endpoint: string,
  fileName: string
): Promise<ApiResponse> => {
  const token = getAuthToken();
  const response = await axios.delete(`${API_BASE_URL}${endpoint}/${fileName}`, {
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return response.data;
};

