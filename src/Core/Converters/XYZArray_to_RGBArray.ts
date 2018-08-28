import util from "@/Core/util";
import { arrayRGB, arrayXYZ} from "@/Core/core.const";


/**
 * 转换 XYZ 数组到 RGB 数组
 * @param xyz
 * @param {number[]} transformMatrix ColorSpace 提供的 XYZ2RGB 矩阵
 * @returns {arrayRGB} rgb 归一化（0~1）的 rgb 数组
 * @constructor

 */
function XYZArray_to_RGBArray(xyz: arrayXYZ, transformMatrix: number[]): arrayRGB
{
    let RGBArray = <arrayRGB>util.matrixMultiply_33x30(transformMatrix, xyz);
    return RGBArray
}

export default XYZArray_to_RGBArray
