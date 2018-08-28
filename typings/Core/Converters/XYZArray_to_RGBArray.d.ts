import { arrayRGB, arrayXYZ } from "@/Core/core.const";
/**
 * 转换 XYZ 数组到 RGB 数组
 * @param xyz
 * @param {number[]} transformMatrix ColorSpace 提供的 XYZ2RGB 矩阵
 * @returns {arrayRGB} rgb 归一化（0~1）的 rgb 数组
 * @constructor

 */
declare function XYZArray_to_RGBArray(xyz: arrayXYZ, transformMatrix: number[]): arrayRGB;
export default XYZArray_to_RGBArray;
