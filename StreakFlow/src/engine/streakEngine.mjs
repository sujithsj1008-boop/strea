export const XP_BY_PRIORITY = { Low: 10, Medium: 20, High: 30 }
const localDateKey = value => {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value
  const d = new Date(value)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}
export function awardForTask(priority, completedCount, goal) { return { xp: XP_BY_PRIORITY[priority] ?? 20, goalBonus: completedCount === goal ? 50 : 0 } }
export function countCompletedOn(tasks, date) { return tasks.filter(task => task.completed && task.completedAt && localDateKey(task.completedAt) === date).length }
export function calculateStreak(tasks, today = new Date()) { const days = new Set(tasks.filter(t => t.completed && t.completedAt).map(t => localDateKey(t.completedAt))); const cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate()); const iso = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; if (!days.has(iso(cursor))) cursor.setDate(cursor.getDate()-1); let streak=0; while(days.has(iso(cursor))){streak++;cursor.setDate(cursor.getDate()-1)} return streak }
export function levelForXP(xp) { return Math.floor(Math.max(0,xp)/250)+1 }
export function progressToNextLevel(xp) { return Math.max(0,xp)%250 }
export function getAchievements(tasks,xp,streak) { const done=tasks.filter(t=>t.completed).length; return [done>=1&&'first-step',streak>=3&&'three-day-streak',streak>=7&&'week-warrior',xp>=500&&'xp-collector',done>=25&&'quarter-century'].filter(Boolean) }
