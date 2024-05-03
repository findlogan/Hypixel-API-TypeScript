import CurveData from "../level-curves/catacombs-level-curve.json";

export function getCatacombsLevel(experience: number): number {
    const levelCurve: { [key: string]: number } = CurveData.levelsXPToReach;
    let level = 0;

    for (const key in levelCurve) {
        console.log(key, levelCurve[key]);
        if (experience >= levelCurve[key]) {
            level++;
            experience -= levelCurve[key];
        }
    }

    return level;
}

export function getExpToNextLevel(experience: number): number {
    const levelCurve: { [key: string]: number } = CurveData.levelsXPToReach;

    let level = getCatacombsLevel(experience);
    return levelCurve[(level + 1).toString()] - experience;
}
