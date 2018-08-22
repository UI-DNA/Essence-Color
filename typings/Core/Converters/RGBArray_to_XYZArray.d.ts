import { arrayXYZ } from "@/Core/core.const";
/**
 * 转换 RGB 数组到 XYZ 数组
 * @param {number[]} rgb
 * @param {number[]} transformMatrix ColorSpace 提供的 RGB2XYZ 矩阵
 * @returns {number[]}
 * @constructor
 */
declare function RGBArray_to_XYZArray(rgb: number[], transformMatrix: number[]): arrayXYZ;
export default RGBArray_to_XYZArray;
