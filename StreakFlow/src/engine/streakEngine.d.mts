import type { Priority, Task } from '../types/streakflow'
export const XP_BY_PRIORITY: Record<Priority, number>
export function awardForTask(priority: Priority, completedCount: number, goal: number): { xp: number; goalBonus: number }
export function countCompletedOn(tasks: Task[], date: string): number
export function calculateStreak(tasks: Task[], today?: Date): number
export function levelForXP(xp: number): number
export function progressToNextLevel(xp: number): number
export function getAchievements(tasks: Task[], xp: number, streak: number): string[]
