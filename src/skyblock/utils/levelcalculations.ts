import CurveData from "../level-curves/catacombs-level-curve.json";

export function getCatacombsLevel(experience: number): number {
    const levelCurve: { [key: string]: number } = CurveData.levels;
    let level = 1;

    while (level < Object.keys(levelCurve).length && experience >= levelCurve[level.toString()]) {
        level++;
    }

    return level;
}

export function getExpToNextLevel(experience: number): number {
    const levelCurve: { [key: string]: number } = CurveData.levels;
    let level = 1;

    while (level < Object.keys(levelCurve).length && experience >= levelCurve[level.toString()]) {
        level++;
    }

    return levelCurve[level.toString()] - experience;
}
