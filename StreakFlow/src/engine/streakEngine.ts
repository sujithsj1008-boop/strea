import type { Priority } from '../types/streakflow'
export const XP_BY_PRIORITY: Record<Priority, number> = { Low: 10, Medium: 20, High: 30 }
export const awardForTask = (priority: Priority, completedCount: number, goal: number) => ({ xp: XP_BY_PRIORITY[priority], goalBonus: completedCount === goal ? 50 : 0 })
export const levelForXP = (xp: number) => Math.floor(Math.max(0, xp) / 250) + 1
export const progressToNextLevel = (xp: number) => Math.max(0, xp) % 250
