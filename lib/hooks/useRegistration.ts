import useSWR from 'swr';
import { apiClient, ApiError } from '../api-client';

// ============================================
// TYPES & INTERFACES
// ============================================

export enum Branch {
  Okculuk = 1,
  Basketbol = 2,
  Voleybol = 3,
}

export enum AgeGroup {
  U12 = 1,
  U14 = 2,
  U16 = 3,
  U18 = 4,
}

export enum ProgramType {
  Takim = 1,
  Yaz = 2,
  Haftasonu = 3,
}

export interface RegistrationItem {
  id: number;
  athleteFullName: string;
  birthDate: string;
  parentFullName: string;
  parentPhone: string;
  parentEmail: string;
  parentAddress: string;
  branch: Branch;
  ageGroup: AgeGroup;
  programType: ProgramType;
  healthNotes: string;
  createdAt: string;
  updatedAt: string | null;
  isActive: boolean;
  isApproved: boolean;
  approvedAt: string | null;
  approvedByUserId: number | null;
}

export interface RegistrationListResponse {
  message: string;
  data: RegistrationItem[];
  pagination: {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
}

export interface RegistrationStatsResponse {
  message: string;
  data: {
    totalCount: number;
    approvedCount: number;
    pendingCount: number;
    activeCount: number;
    branchStats: Array<{
      branch: number;
      count: number;
    }>;
    ageGroupStats: Array<{
      ageGroup: number;
      count: number;
    }>;
  };
}

export interface CreateRegistrationRequest {
  athleteFullName: string;
  birthDate: string;
  parentFullName: string;
  parentPhone: string;
  parentEmail: string;
  parentAddress: string;
  branch: number;
  ageGroup: number;
  programType: number;
  healthNotes: string;
}

export interface CreateRegistrationResponse {
  message: string;
  data: RegistrationItem;
}

export interface ApproveRegistrationResponse {
  message: string;
  data: RegistrationItem;
}

export interface ApiResponse {
  message: string;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getBranchName(branch: Branch): string {
  switch (branch) {
    case Branch.Okculuk:
      return '🎯 Okçuluk';
    case Branch.Basketbol:
      return '🏀 Basketbol';
    case Branch.Voleybol:
      return '🏐 Voleybol';
    default:
      return 'Bilinmiyor';
  }
}

export function getAgeGroupName(ageGroup: AgeGroup): string {
  switch (ageGroup) {
    case AgeGroup.U12:
      return 'U12 (10-12)';
    case AgeGroup.U14:
      return 'U14 (12-14)';
    case AgeGroup.U16:
      return 'U16 (14-16)';
    case AgeGroup.U18:
      return 'U18 (16-18)';
    default:
      return 'Bilinmiyor';
  }
}

export function getProgramTypeName(programType: ProgramType): string {
  switch (programType) {
    case ProgramType.Takim:
      return 'Takım Antrenmanı';
    case ProgramType.Yaz:
      return 'Yaz Spor Okulu';
    case ProgramType.Haftasonu:
      return 'Hafta Sonu Okulu';
    default:
      return 'Bilinmiyor';
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ============================================
// API FUNCTIONS
// ============================================

/**
 * Kayıt listesini getirir (Admin)
 */
export async function fetchRegistrationList(
  page: number = 1,
  pageSize: number = 10
): Promise<RegistrationListResponse> {
  const response = await apiClient.get<RegistrationListResponse>(
    `/Registration/admin/all?page=${page}&pageSize=${pageSize}`
  );
  return response.data;
}

/**
 * Tek bir kaydın detayını getirir
 */
export async function fetchRegistrationById(id: number): Promise<{ data: RegistrationItem }> {
  const response = await apiClient.get<{ data: RegistrationItem }>(`/Registration/${id}`);
  return response.data;
}

/**
 * Kayıt istatistiklerini getirir
 */
export async function fetchRegistrationStats(): Promise<RegistrationStatsResponse> {
  const response = await apiClient.get<RegistrationStatsResponse>('/Registration/admin/stats');
  return response.data;
}

/**
 * Yeni kayıt oluşturur
 */
export async function createRegistration(data: CreateRegistrationRequest): Promise<CreateRegistrationResponse> {
  const response = await apiClient.post<CreateRegistrationResponse>('/Registration/register', data);
  return response.data;
}

/**
 * Kaydı onaylar (Admin)
 */
export async function approveRegistration(id: number): Promise<ApproveRegistrationResponse> {
  const response = await apiClient.put<ApproveRegistrationResponse>(`/Registration/admin/${id}/approve`, {});
  return response.data;
}

/**
 * Kaydı siler (Admin)
 */
export async function deleteRegistration(id: number): Promise<ApiResponse> {
  const response = await apiClient.delete<ApiResponse>(`/Registration/admin/${id}`);
  return response.data;
}

// ============================================
// SWR HOOKS
// ============================================

/**
 * Hook to fetch registration list with SWR
 */
export function useRegistrationList(page: number = 1, pageSize: number = 10) {
  const key = `/Registration/admin/all?page=${page}&pageSize=${pageSize}`;

  const { data, error, isLoading, mutate } = useSWR<RegistrationListResponse>(
    key,
    () => fetchRegistrationList(page, pageSize),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    registrations: data?.data || [],
    totalCount: data?.pagination.totalCount || 0,
    page: data?.pagination.page || 1,
    pageSize: data?.pagination.pageSize || 10,
    totalPages: data?.pagination.totalPages || 0,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

/**
 * Hook to fetch registration stats with SWR
 */
export function useRegistrationStats() {
  const { data, error, isLoading, mutate } = useSWR<RegistrationStatsResponse>(
    '/Registration/admin/stats',
    fetchRegistrationStats,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: true,
      shouldRetryOnError: false,
    }
  );

  return {
    stats: data?.data || null,
    isLoading,
    isError: !!error,
    error,
    mutate,
  };
}

