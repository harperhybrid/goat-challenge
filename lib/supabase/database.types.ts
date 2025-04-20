// lib/supabase/database.types.ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          role: 'student' | 'teacher' | 'parent' | 'admin'
          name: string
          created_at: string
          updated_at: string
          clever_id?: string
          clever_school_id?: string
        }
        Insert: {
          id?: string
          email: string
          role: 'student' | 'teacher' | 'parent' | 'admin'
          name: string
          created_at?: string
          updated_at?: string
          clever_id?: string
          clever_school_id?: string
        }
        Update: {
          id?: string
          email?: string
          role?: 'student' | 'teacher' | 'parent' | 'admin'
          name?: string
          created_at?: string
          updated_at?: string
          clever_id?: string
          clever_school_id?: string
        }
      }
      students: {
        Row: {
          id: string
          user_id: string
          username: string
          avatar: string
          herd_size: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          username: string
          avatar?: string
          herd_size?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          username?: string
          avatar?: string
          herd_size?: number
          created_at?: string
          updated_at?: string
        }
      }
      contests: {
        Row: {
          id: string
          name: string
          start_date: string
          end_date: string
          status: 'upcoming' | 'active' | 'complete'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          start_date: string
          end_date: string
          status: 'upcoming' | 'active' | 'complete'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          start_date?: string
          end_date?: string
          status?: 'upcoming' | 'active' | 'complete'
          created_at?: string
          updated_at?: string
        }
      }
      enrollments: {
        Row: {
          id: string
          student_id: string
          contest_id: string
          tier: 'lil_goat' | 'grinder_goat' | 'boss_goat'
          total_goats: number
          goats_earned: number
          goats_lost: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          contest_id: string
          tier: 'lil_goat' | 'grinder_goat' | 'boss_goat'
          total_goats?: number
          goats_earned?: number
          goats_lost?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          contest_id?: string
          tier?: 'lil_goat' | 'grinder_goat' | 'boss_goat'
          total_goats?: number
          goats_earned?: number
          goats_lost?: number
          created_at?: string
          updated_at?: string
        }
      }
      streaks: {
        Row: {
          id: string
          student_id: string
          date: string
          practiced: boolean
          minutes: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          date: string
          practiced: boolean
          minutes: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          date?: string
          practiced?: boolean
          minutes?: number
          created_at?: string
          updated_at?: string
        }
      }
      practice_sessions: {
        Row: {
          id: string
          student_id: string
          app_name: string
          date: string
          minutes: number
          skill_gained?: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          student_id: string
          app_name: string
          date: string
          minutes: number
          skill_gained?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          student_id?: string
          app_name?: string
          date?: string
          minutes?: number
          skill_gained?: string[]
          created_at?: string
          updated_at?: string
        }
      }
      badges: {
        Row: {
          id: string
          name: string
          student_id: string
          contest_id?: string
          issued_at: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          student_id: string
          contest_id?: string
          issued_at: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          student_id?: string
          contest_id?: string
          issued_at?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}