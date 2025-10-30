// Sponsor API Service
const API_BASE_URL = 'https://api.yenikadikoyspor.com/api';

// Sponsor Response Types
export interface SponsorUploadResponse {
  message: string;
  data: {
    fileName: string;
    fileUrl: string;
    fileSizeBytes: number;
    contentType: string;
    uploadedAt: string;
    uploadedBy: string;
  };
}

export interface SponsorDeleteResponse {
  message: string;
  data: {
    fileName: string;
    deletedAt: string;
    deletedBy: string;
  };
}

export interface SponsorItem {
  fileName: string;
  fileUrl: string;
}

export interface SponsorListResponse {
  message: string;
  count: number;
  data: SponsorItem[];
}

export interface ApiError {
  message: string;
  status?: number;
}

/**
 * Get authentication token from localStorage
 * Supports both old (admin_token) and new (auth state) formats
 */
const getAuthToken = (): string | null => {
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
 * Sponsor API
 */
export const sponsorApi = {
  /**
   * Upload a sponsor logo/image
   * @param file - The file to upload
   * @returns Upload response with file details
   */
  upload: async (file: File): Promise<SponsorUploadResponse> => {
    try {
      const token = getAuthToken();
      const formData = new FormData();
      formData.append('file', file);

      const headers: HeadersInit = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/Gallery/upload-post`, {
        method: 'POST',
        headers,
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || 'Sponsor görseli yüklenemedi',
          status: response.status,
        } as ApiError;
      }

      const data: SponsorUploadResponse = await response.json();
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

  /**
   * Delete a sponsor image
   * @param fileName - The name of the file to delete
   * @returns Delete response with deletion details
   */
  delete: async (fileName: string): Promise<SponsorDeleteResponse> => {
    try {
      const token = getAuthToken();
      const headers: HeadersInit = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/Gallery/${fileName}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || 'Sponsor görseli silinemedi',
          status: response.status,
        } as ApiError;
      }

      const data: SponsorDeleteResponse = await response.json();
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

  /**
   * Get list of all sponsor images
   * @returns List response with all sponsor items
   */
  list: async (): Promise<SponsorListResponse> => {
    try {
      const token = getAuthToken();
      const headers: HeadersInit = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`${API_BASE_URL}/Gallery/list`, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw {
          message: errorData.message || 'Sponsor listesi alınamadı',
          status: response.status,
        } as ApiError;
      }

      const data: SponsorListResponse = await response.json();
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

