export const calculateAverage = grades => grades.length ? grades.reduce((sum, grade) => sum + grade, 0) / grades.length : 0;
export const hasPassed = grades => calculateAverage(grades) >= 50;
