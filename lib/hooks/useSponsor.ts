import useSWR from 'swr';
import { apiClient, ApiResponse, ApiError } from '../api-client';

/**
 * Sponsor item type (same as Gallery API)
 */
export interface SponsorItem {
  id: number;
  name: string;
  fileName: string;
  fileUrl: string;
  order: number;
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
 * Sponsor list response
 */
interface SponsorListResponse {
  message: string;
  count: number;
  data: SponsorItem[];
}

/**
 * SWR fetcher for sponsor list
 */
const sponsorFetcher = async (url: string): Promise<SponsorItem[]> => {
  const response = await apiClient.get<SponsorListResponse>(url);
  return response.data.data;
};

/**
 * Hook to fetch sponsor list with SWR
 */
export function useSponsor() {
  const { data, error, isLoading, mutate } = useSWR<SponsorItem[], ApiError>(
    '/Gallery/list',
    sponsorFetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      dedupingInterval: 5000,
    }
  );

  return {
    sponsors: data || [],
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Upload sponsor logo
 * @param file - File to upload
 * @param name - Name/title for the sponsor
 */
export async function uploadSponsor(file: File, name: string): Promise<ApiResponse<UploadResponse>> {
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
 * Delete sponsor logo by ID
 * @param id - Gallery item ID
 */
export async function deleteSponsor(id: number): Promise<ApiResponse> {
  const response = await apiClient.delete<ApiResponse>(`/Gallery/item/${id}`);
  return response.data;
}

