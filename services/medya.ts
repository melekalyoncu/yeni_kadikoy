// Media/Gallery API Service
const API_BASE_URL = 'https://api.yenikadikoyspor.com/api';

// Media Response Types
export interface MediaUploadResponse {
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

export interface MediaDeleteResponse {
  message: string;
  data: {
    fileName: string;
    deletedAt: string;
    deletedBy: string;
  };
}

export interface MediaItem {
  fileName: string;
  fileUrl: string;
}

export interface MediaListResponse {
  message: string;
  count: number;
  data: MediaItem[];
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
 * Media/Gallery API
 */
export const medyaApi = {
  /**
   * Upload a media file
   * @param file - The file to upload
   * @returns Upload response with file details
   */
  upload: async (file: File): Promise<MediaUploadResponse> => {
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
          message: errorData.message || 'Dosya yüklenemedi',
          status: response.status,
        } as ApiError;
      }

      const data: MediaUploadResponse = await response.json();
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
   * Delete a media file
   * @param fileName - The name of the file to delete (e.g., "64046054-79a0-4bc1-ab3a-2720a5014bf8.jpeg")
   * @returns Delete response with deletion details
   */
  delete: async (fileName: string): Promise<MediaDeleteResponse> => {
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
          message: errorData.message || 'Dosya silinemedi',
          status: response.status,
        } as ApiError;
      }

      const data: MediaDeleteResponse = await response.json();
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
   * Get list of all media files
   * @returns List response with all media items
   */
  list: async (): Promise<MediaListResponse> => {
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
          message: errorData.message || 'Medya listesi alınamadı',
          status: response.status,
        } as ApiError;
      }

      const data: MediaListResponse = await response.json();
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

