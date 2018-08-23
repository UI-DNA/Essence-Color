import {objectRGB, objectLab, arrayXYZ} from "@/Core/core.const";
import util from "@/Core/util"
import ColorSpace from "@/Core/ColorSpace/ColorSpace";
import ColorSpace_sRGB from "@/Core/ColorSpace/ColorSpace.sRGB";
import {ReferenceWhite} from "@/Core/Reference/ReferencePoints";
import {ReferenceAdaptatioMatrixn} from "@/Core/Reference/ReferenceMatrix";
import {get_Bradford_AdaptatioMatrixn} from "@/Core/Converters/TransformMatrix";
import XYZArray_to_LAB from "@/Core/Converters/XYZArray_to_LAB";
import Lab_to_XYZArray from "@/Core/Converters/Lab_to_XYZArray";
import XYZArray_to_RGBArray from "@/Core/Converters/XYZArray_to_RGBArray";


/**
 * Lab 对象转换为 RGB 对象
 * @param lab
 * @param colorSpace
 * @param out
 * @constructor
 */
function Lab_to_RGB(lab: objectLab, colorSpace: ColorSpace = ColorSpace_sRGB, out?: any): objectRGB
{
    if (out === undefined) out = {};
    // Lab to XYZ
    let XYZ = Lab_to_XYZArray(lab);

    //White to Target from Lab D50
    if (colorSpace.WHITE_POINT !== ReferenceWhite.D50)
    {
        if (colorSpace.WHITE_POINT === ReferenceWhite.D65)
        {
            XYZ = <arrayXYZ>util.matrixMultiply_33x30(ReferenceAdaptatioMatrixn.D50_to_D65, XYZ)
        }
        else
        {
            let adaptatioMat = get_Bradford_AdaptatioMatrixn(colorSpace.WHITE_POINT, ReferenceWhite.D50);
            XYZ = <arrayXYZ>util.matrixMultiply_33x30(adaptatioMat, XYZ)
        }
    }

    // XYZ to RGB
    let RGBArray = XYZArray_to_RGBArray(XYZ, colorSpace.XYZ2RGB_MATRIX);

    // Gamma 变换，把色彩值的转化为适应人眼的

    out.r = util.normalInt256(colorSpace.enGamma(RGBArray[0]) * 255)
    out.g = util.normalInt256(colorSpace.enGamma(RGBArray[1]) * 255)
    out.b = util.normalInt256(colorSpace.enGamma(RGBArray[2]) * 255)

    return out
}


export default Lab_to_RGB
