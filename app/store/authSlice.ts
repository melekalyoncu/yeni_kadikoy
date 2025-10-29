import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  username: string | null;
  email: string | null;
  roles: string[];
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  username: null,
  email: null,
  roles: [],
  loading: false,
  error: null,
};

// Load auth state from localStorage if available
const loadAuthFromStorage = (): Partial<AuthState> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const token = localStorage.getItem('admin_token');
    const username = localStorage.getItem('admin_username');
    const email = localStorage.getItem('admin_email');
    const roles = localStorage.getItem('admin_roles');
    
    if (token && username) {
      return {
        isAuthenticated: true,
        token,
        username,
        email: email || null,
        roles: roles ? JSON.parse(roles) : [],
      };
    }
  } catch (error) {
    console.error('Error loading auth from storage:', error);
  }
  
  return {};
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    ...initialState,
    ...loadAuthFromStorage(),
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<{
      token: string;
      username: string;
      email: string;
      roles: string[];
    }>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
      state.error = null;
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_token', action.payload.token);
        localStorage.setItem('admin_username', action.payload.username);
        localStorage.setItem('admin_email', action.payload.email);
        localStorage.setItem('admin_roles', JSON.stringify(action.payload.roles));
      }
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.username = null;
      state.email = null;
      state.roles = [];
      state.error = null;
      
      // Clear localStorage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_username');
        localStorage.removeItem('admin_email');
        localStorage.removeItem('admin_roles');
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, clearError } = authSlice.actions;
export default authSlice.reducer;

