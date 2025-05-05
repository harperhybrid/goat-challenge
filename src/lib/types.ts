export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Role = "student" | "teacher" | "parent" | "admin"

export type Tier = "lil_goat" | "grinder_goat" | "boss_goat"

export type ContestStatus = "upcoming" | "active" | "complete"

export interface User {
  id: string
  role: Role
  name: string
  email: string
  clever_id?: string
  clever_school_id?: string
}

export interface Student extends User {
  username: string
  avatar: string
  herd_size: number
  hill_history: Record<string, number>
}

export interface Contest {
  id: string
  name: string
  start_date: string
  end_date: string
  status: ContestStatus
}

export interface Enrollment {
  id: string
  student_id: string
  contest_id: string
  tier: Tier
  total_goats: number
  goats_earned: number
  goats_lost: number
}

export interface Streak {
  id: string
  student_id: string
  date: string
  practiced: boolean
  minutes: number
}

export interface Badge {
  id: string
  name: string
  student_id: string
  contest_id?: string
  issued_at: string
}

export interface PracticeSession {
  id: string
  student_id: string
  app_name: string
  date: string
  minutes: number
  skill_gained?: string[]
}