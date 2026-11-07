import type { AppState } from '../types/streakflow'
const KEY='streakflow-v1'
const initial: AppState={tasks:[],xp:0,dailyGoal:5,goalType:'tasks',theme:'system',achievements:[]}
export function loadState(): AppState { try { const raw=localStorage.getItem(KEY); if(!raw)return initial; const p=JSON.parse(raw) as Partial<AppState>; return {...initial,...p,tasks:Array.isArray(p.tasks)?p.tasks.filter(t=>t&&typeof t.id==='string'&&typeof t.title==='string'):[],xp:Number.isFinite(p.xp)?Math.max(0,p.xp!):0,dailyGoal:Number.isFinite(p.dailyGoal)?Math.max(1,p.dailyGoal!):5,achievements:Array.isArray(p.achievements)?p.achievements:[]} } catch { return initial } }
export function saveState(state:AppState) { try { localStorage.setItem(KEY,JSON.stringify(state)) } catch { /* local storage can be unavailable */ } }
