declare const util: {
    getValueByKeys(ob: any, keys: string[]): any;
    /**
     * 归一化
     * @param {number} inNumber
     * @param {number} inMin
     * @param {number} inMax
     * @param {number} newMin
     * @param {number} newMax
     * @returns {number}
     */
    normaliz(inNumber: number, inMin?: number | undefined, inMax?: number | undefined, newMax?: number | undefined): number;
    matrixMultiply_33x33(matA: number[], matB: number[]): number[];
    matrixMultiply_33x30(matA: number[], matB: number[]): number[];
    matrixInverse_33(mat: number[]): number[];
};
export default util;
