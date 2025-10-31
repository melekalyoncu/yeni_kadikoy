import useSWR from 'swr';
import { apiClient, ApiResponse, ApiError } from '../api-client';

/**
 * Media/Gallery item type
 */
export interface MediaItem {
  id: number;
  name: string;
  fileName: string;
  fileUrl: string;
  order: number;
  uploadedAt?: string;
  category?: string;
}

/**
 * Upload response type
 */
export interface UploadResponse {
  id: number;
  name: string;
  fileName: string;
  fileUrl: string;
  order: number;
  fileSizeBytes: number;
  contentType: string;
  uploadedAt: string;
  uploadedBy: string;
}

/**
 * Gallery list response
 */
interface GalleryListResponse {
  message: string;
  count: number;
  data: MediaItem[];
}

/**
 * SWR fetcher for gallery list
 */
const galleryFetcher = async (url: string): Promise<MediaItem[]> => {
  const response = await apiClient.get<GalleryListResponse>(url);
  return response.data.data;
};

/**
 * Hook to fetch gallery/media list with SWR
 */
export function useGallery() {
  const { data, error, isLoading, mutate } = useSWR<MediaItem[], ApiError>(
    '/Gallery/list',
    galleryFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 5000, // Prevent duplicate requests within 5 seconds
    }
  );

  return {
    media: data || [],
    isLoading,
    isError: !!error,
    error,
    mutate, // Use this to manually refresh data
  };
}

/**
 * Upload media file
 * @param file - File to upload
 * @param name - Name/title for the gallery item
 */
export async function uploadMedia(file: File, name: string): Promise<ApiResponse<UploadResponse>> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('name', name);

  const response = await apiClient.post<ApiResponse<UploadResponse>>('/Gallery/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

/**
 * Delete media file by ID
 * @param id - Gallery item ID
 */
export async function deleteMedia(id: number): Promise<ApiResponse> {
  const response = await apiClient.delete<ApiResponse>(`/Gallery/item/${id}`);
  return response.data;
}

