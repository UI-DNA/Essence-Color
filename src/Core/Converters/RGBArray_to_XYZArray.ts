import util from "@/Core/util";
import {objectRGB, objectLab, arrayXYZ} from "@/Core/core.const";


/**
 * 转换 RGB 数组到 XYZ 数组
 * @param {number[]} rgb
 * @param {number[]} transformMatrix ColorSpace 提供的 RGB2XYZ 矩阵
 * @returns {number[]}
 * @constructor
 */
function RGBArray_to_XYZArray(rgb: number[], transformMatrix: number[]): arrayXYZ
{
    let XYZArray = <arrayXYZ>util.matrixMultiply_33x30(transformMatrix, rgb);
    return XYZArray
}

export default RGBArray_to_XYZArray
