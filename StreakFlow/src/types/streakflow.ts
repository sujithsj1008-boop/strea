export type Category = 'Work' | 'Personal' | 'Projects' | 'College' | 'Health'
export type Priority = 'Low' | 'Medium' | 'High'
export interface Task { id: string; title: string; category: Category; priority: Priority; dueDate: string; notes?: string; completed: boolean; completedAt?: string; createdAt: string }
export interface AppState { tasks: Task[]; xp: number; dailyGoal: number; goalType: 'tasks' | 'xp'; theme: 'light' | 'dark' | 'system'; achievements: string[] }
