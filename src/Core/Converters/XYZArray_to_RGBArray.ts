import util from "@/Core/util";
import { arrayRGB, arrayXYZ} from "@/Core/core.const";


/**
 * 转换 XYZ 数组到 RGB 数组
 * @param xyz
 * @param {number[]} transformMatrix ColorSpace 提供的 XYZ2RGB 矩阵
 * @returns {arrayRGB}
 * @constructor

 */
function RGBArray_to_XYZArray(xyz: arrayXYZ, transformMatrix: number[]): arrayRGB
{
    let RGBArray = <arrayRGB>util.matrixMultiply_33x30(transformMatrix, xyz);
    return RGBArray
}

export default RGBArray_to_XYZArray
