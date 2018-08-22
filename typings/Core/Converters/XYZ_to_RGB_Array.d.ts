/**
 * 转换 XYZ 数组到 RGB 数组
 * @param {number[]} xyz
 * @param {number[]} invTransformMatrix ColorSpace 提供的 XYZ2RGB 矩阵
 * @returns {number[]}
 * @constructor
 */
declare function XYZ_to_RGB_Array(xyz: number[], invTransformMatrix: number[]): number[];
export default XYZ_to_RGB_Array;
