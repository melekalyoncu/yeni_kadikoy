import useSWR from 'swr';
import { apiClient } from '@/lib/api-client';

// ============================================
// TYPES & INTERFACES
// ============================================

export enum SportType {
  Hepsi = 0,
  Okculuk = 1,
  Basketbol = 2,
  Voleybol = 3,
}

export enum MediaType {
  Photo = 0,
  Video = 1,
}

export interface NewsMediaFile {
  id: number;
  mediaType: MediaType;
  mediaTypeName: string;
  s3Url: string;
  fileName: string;
  fileSize: number;
  order: number;
  uploadedAt: string;
}

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  sportType: SportType;
  sportTypeName: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string | null;
  isActive: boolean;
  mediaFiles: NewsMediaFile[];
}

export interface NewsListResponse {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  data: NewsItem[];
}

export interface CreateNewsRequest {
  title: string;
  content: string;
  sportType: SportType;
  publishedAt?: string;
  isActive?: boolean;
}

export interface UpdateNewsRequest {
  title?: string;
  content?: string;
  sportType?: SportType;
  publishedAt?: string;
  isActive?: boolean;
}

export interface UploadMediaRequest {
  file: File;
  mediaType: MediaType;
  order?: number;
}

export interface ApiResponse<T = any> {
  message?: string;
  success?: boolean;
  data?: T;
  media?: NewsMediaFile;
}

// ============================================
// API FUNCTIONS
// ============================================

/**
 * Haber listesini getirir
 */
export async function fetchNewsList(
  sportType?: SportType,
  isActive?: boolean,
  pageNumber: number = 1,
  pageSize: number = 10
): Promise<NewsListResponse> {
  const params = new URLSearchParams();
  
  if (sportType !== undefined) params.append('sportType', sportType.toString());
  if (isActive !== undefined) params.append('isActive', isActive.toString());
  params.append('pageNumber', pageNumber.toString());
  params.append('pageSize', pageSize.toString());

  const response = await apiClient.get<NewsListResponse>(`/News?${params.toString()}`);
  return response.data;
}

/**
 * Tek bir haberin detayını getirir
 */
export async function fetchNewsById(id: number): Promise<NewsItem> {
  const response = await apiClient.get<NewsItem>(`/News/${id}`);
  return response.data;
}

/**
 * Yeni haber oluşturur
 */
export async function createNews(data: CreateNewsRequest): Promise<NewsItem> {
  const response = await apiClient.post<NewsItem>('/News', data);
  return response.data;
}

/**
 * Haberi günceller
 */
export async function updateNews(id: number, data: UpdateNewsRequest): Promise<NewsItem> {
  const response = await apiClient.put<NewsItem>(`/News/${id}`, data);
  return response.data;
}

/**
 * Haberi siler (medya dosyaları da silinir)
 */
export async function deleteNews(id: number): Promise<ApiResponse> {
  const response = await apiClient.delete<ApiResponse>(`/News/${id}`);
  return response.data;
}

/**
 * Habere medya dosyası ekler
 */
export async function uploadNewsMedia(
  newsId: number,
  file: File,
  mediaType: MediaType,
  order: number = 0
): Promise<ApiResponse<NewsMediaFile>> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('mediaType', mediaType.toString());
  formData.append('order', order.toString());

  const response = await apiClient.post<ApiResponse<NewsMediaFile>>(
    `/News/${newsId}/media`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data;
}

/**
 * Medya dosyasını siler
 */
export async function deleteNewsMedia(mediaId: number): Promise<ApiResponse> {
  const response = await apiClient.delete<ApiResponse>(`/News/media/${mediaId}`);
  return response.data;
}

// ============================================
// SWR HOOKS
// ============================================

/**
 * Haber listesi için SWR hook
 */
export function useNewsList(
  sportType?: SportType,
  isActive?: boolean,
  pageNumber: number = 1,
  pageSize: number = 10
) {
  const params = new URLSearchParams();
  
  if (sportType !== undefined) params.append('sportType', sportType.toString());
  if (isActive !== undefined) params.append('isActive', isActive.toString());
  params.append('pageNumber', pageNumber.toString());
  params.append('pageSize', pageSize.toString());

  const key = `/News?${params.toString()}`;

  const { data, error, isLoading, mutate } = useSWR<NewsListResponse>(
    key,
    () => fetchNewsList(sportType, isActive, pageNumber, pageSize),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    news: data?.data || [],
    totalCount: data?.totalCount || 0,
    pageNumber: data?.pageNumber || 1,
    pageSize: data?.pageSize || 10,
    totalPages: data?.totalPages || 0,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Tek haber detayı için SWR hook
 */
export function useNewsDetail(id: number | null) {
  const { data, error, isLoading, mutate } = useSWR<NewsItem>(
    id ? `/News/${id}` : null,
    () => (id ? fetchNewsById(id) : Promise.reject('No ID')),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    news: data || null,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * SportType enum'ını Türkçe metne çevirir
 */
export function getSportTypeName(sportType: SportType): string {
  switch (sportType) {
    case SportType.Hepsi:
      return 'Hepsi';
    case SportType.Okculuk:
      return 'Okçuluk';
    case SportType.Basketbol:
      return 'Basketbol';
    case SportType.Voleybol:
      return 'Voleybol';
    default:
      return 'Bilinmeyen';
  }
}

/**
 * MediaType enum'ını Türkçe metne çevirir
 */
export function getMediaTypeName(mediaType: MediaType): string {
  switch (mediaType) {
    case MediaType.Photo:
      return 'Fotoğraf';
    case MediaType.Video:
      return 'Video';
    default:
      return 'Bilinmeyen';
  }
}

/**
 * Dosya boyutunu okunabilir formata çevirir
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

/**
 * Tarihi Türkçe formata çevirir
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

