import { arrayRGB, arrayXYZ } from "@/Core/core.const";
/**
 * 转换 XYZ 数组到 RGB 数组
 * @param xyz
 * @param {number[]} transformMatrix ColorSpace 提供的 XYZ2RGB 矩阵
 * @returns {arrayRGB}
 * @constructor

 */
declare function RGBArray_to_XYZArray(xyz: arrayXYZ, transformMatrix: number[]): arrayRGB;
export default RGBArray_to_XYZArray;
