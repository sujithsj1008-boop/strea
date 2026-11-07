import test from 'node:test'
import assert from 'node:assert/strict'
import { awardForTask, calculateStreak, countCompletedOn, getAchievements, levelForXP, progressToNextLevel } from '../src/engine/streakEngine.mjs'
const task = (date, completed = true) => ({ completed, completedAt: completed ? `${date}T12:00:00.000Z` : undefined })
test('priority XP and daily goal bonus', () => { assert.deepEqual(awardForTask('High', 3, 3), { xp: 30, goalBonus: 50 }); assert.equal(awardForTask('Low', 1, 3).xp, 10) })
test('counts completions by local date key', () => { assert.equal(countCompletedOn([task('2026-02-10'), task('2026-02-10'), task('2026-02-09')], '2026-02-10'), 2) })
test('streak includes today, or continues through yesterday', () => { assert.equal(calculateStreak([task('2026-02-10'), task('2026-02-09')], new Date(2026, 1, 10)), 2); assert.equal(calculateStreak([task('2026-02-09'), task('2026-02-08')], new Date(2026, 1, 10)), 2) })
test('streak does not skip a missed day', () => { assert.equal(calculateStreak([task('2026-02-10'), task('2026-02-08')], new Date(2026, 1, 10)), 1) })
test('level and next-level progress advance every 250 XP', () => { assert.equal(levelForXP(499), 2); assert.equal(levelForXP(500), 3); assert.equal(progressToNextLevel(505), 5) })
test('achievements unlock at milestones', () => { assert.deepEqual(getAchievements([{ completed: true }], 500, 7), ['first-step', 'three-day-streak', 'week-warrior', 'xp-collector']) })
