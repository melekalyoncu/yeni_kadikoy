import useSWR from 'swr';
import { apiClient, ApiError } from '../api-client';

// ============================================
// TYPES & INTERFACES
// ============================================

export enum SportType {
  Hepsi = 0,
  Okculuk = 1,
  Basketbol = 2,
  Voleybol = 3,
}

export enum Placement {
  Banner = 0,  // Sayfa üstü/altı banner alanları
  Sidebar = 1, // Kenar çubuğu (sidebar) alanları
}

export interface SponsorItem {
  id: number;
  name: string;
  description: string;
  sportType: SportType;
  placement: Placement;
  photoUrl: string | null;
  logoUrl: string | null;
  websiteUrl: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface SponsorListResponse {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  data: SponsorItem[];
}

export interface CreateSponsorRequest {
  name: string;
  description: string;
  sportType: SportType;
  placement: Placement;
  photoUrl?: string;
  logoUrl?: string;
  websiteUrl?: string;
  isActive: boolean;
}

export interface UpdateSponsorRequest {
  name: string;
  description: string;
  sportType: SportType;
  placement: Placement;
  photoUrl?: string;
  logoUrl?: string;
  websiteUrl?: string;
  isActive: boolean;
}

export interface SponsorStats {
  total: number;
  okculuk: number;
  basketbol: number;
  voleybol: number;
}

export interface DeleteSponsorResponse {
  message: string;
}

// ============================================
// API FUNCTIONS
// ============================================

/**
 * Sponsor listesini getirir
 */
export async function fetchSponsorList(
  sportType?: SportType,
  placement?: Placement,
  isActive?: boolean,
  pageNumber: number = 1,
  pageSize: number = 10
): Promise<SponsorListResponse> {
  const params = new URLSearchParams();

  if (sportType !== undefined) params.append('sportType', sportType.toString());
  if (placement !== undefined) params.append('placement', placement.toString());
  if (isActive !== undefined) params.append('isActive', isActive.toString());
  params.append('pageNumber', pageNumber.toString());
  params.append('pageSize', pageSize.toString());

  const response = await apiClient.get<SponsorListResponse>(`/Sponsors?${params.toString()}`);
  return response.data;
}

/**
 * Tek bir sponsorun detayını getirir
 */
export async function fetchSponsorById(id: number): Promise<SponsorItem> {
  const response = await apiClient.get<SponsorItem>(`/Sponsors/${id}`);
  return response.data;
}

/**
 * Yeni sponsor oluşturur
 */
export async function createSponsor(data: CreateSponsorRequest): Promise<SponsorItem> {
  const response = await apiClient.post<SponsorItem>('/Sponsors', data);
  return response.data;
}

/**
 * Sponsoru günceller
 */
export async function updateSponsor(id: number, data: UpdateSponsorRequest): Promise<SponsorItem> {
  const response = await apiClient.put<SponsorItem>(`/Sponsors/${id}`, data);
  return response.data;
}

/**
 * Sponsoru siler
 */
export async function deleteSponsor(id: number): Promise<DeleteSponsorResponse> {
  const response = await apiClient.delete<DeleteSponsorResponse>(`/Sponsors/${id}`);
  return response.data;
}

/**
 * Sponsora fotoğraf yükler
 */
export async function uploadSponsorPhoto(id: number, file: File): Promise<SponsorItem> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient.post<SponsorItem>(`/Sponsors/${id}/photo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

/**
 * Sponsora logo yükler
 */
export async function uploadSponsorLogo(id: number, file: File): Promise<SponsorItem> {
  const formData = new FormData();
  formData.append('file', file);

  const response = await apiClient.post<SponsorItem>(`/Sponsors/${id}/logo`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
}

/**
 * Sponsor istatistiklerini getirir
 */
export async function fetchSponsorStats(): Promise<SponsorStats> {
  const response = await apiClient.get<SponsorStats>('/Sponsors/stats');
  return response.data;
}

// ============================================
// SWR HOOKS
// ============================================

/**
 * Sponsor listesi için SWR hook
 */
export function useSponsorList(
  sportType?: SportType,
  placement?: Placement,
  isActive?: boolean,
  pageNumber: number = 1,
  pageSize: number = 10
) {
  const params = new URLSearchParams();

  if (sportType !== undefined) params.append('sportType', sportType.toString());
  if (placement !== undefined) params.append('placement', placement.toString());
  if (isActive !== undefined) params.append('isActive', isActive.toString());
  params.append('pageNumber', pageNumber.toString());
  params.append('pageSize', pageSize.toString());

  const key = `/Sponsors?${params.toString()}`;

  const { data, error, isLoading, mutate } = useSWR<SponsorListResponse>(
    key,
    () => fetchSponsorList(sportType, placement, isActive, pageNumber, pageSize),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    sponsors: data?.data || [],
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
 * Tek sponsor detayı için SWR hook
 */
export function useSponsorDetail(id: number | null) {
  const { data, error, isLoading, mutate } = useSWR<SponsorItem>(
    id ? `/Sponsors/${id}` : null,
    () => (id ? fetchSponsorById(id) : Promise.reject('No ID')),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    sponsor: data || null,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Sponsor istatistikleri için SWR hook
 */
export function useSponsorStats() {
  const { data, error, isLoading, mutate } = useSWR<SponsorStats>(
    '/Sponsors/stats',
    fetchSponsorStats,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    stats: data || null,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

