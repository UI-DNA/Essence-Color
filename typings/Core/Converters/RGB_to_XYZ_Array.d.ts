/**
 * 转换 RGB 数组到 XYZ 数组
 * @param {number[]} rgb
 * @param {number[]} transformMatrix ColorSpace 提供的 RGB2XYZ 矩阵
 * @returns {number[]}
 * @constructor
 */
declare function RGB_to_XYZ_Array(rgb: number[], transformMatrix: number[]): number[];
export default RGB_to_XYZ_Array;
