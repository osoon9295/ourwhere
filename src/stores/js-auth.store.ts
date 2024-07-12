import { Tables } from '@/types/supabase';
import { createStore } from 'zustand';
import { persist } from 'zustand/middleware';

type UserType = Tables<'users'>;

export type AuthState = {
  user: UserType | null | undefined;
};

export type AuthActions = {
  setUser: (user: UserType | null | undefined) => void;
};

export type AuthStore = AuthState & AuthActions;

export const initAuthStore = (): AuthState => {
  return {
    user: null
  };
};

export const defaultInitState: AuthState = {
  user: null
};
export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()(
    persist(
      (set) => ({
        ...initState,
        setUser: (user: UserType | null | undefined) => set((state) => ({ user }))
      }),
      {
        name: 'auth-storage',
        getStorage: () => localStorage
      }
    )
  );
};
