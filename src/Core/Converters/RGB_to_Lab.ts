import {objectRGB, objectLab, arrayXYZ} from "@/Core/core.const";
import util from "@/Core/util"
import ColorSpace from "@/Core/ColorSpace/ColorSpace";
import ColorSpace_sRGB from "@/Core/ColorSpace/ColorSpace.sRGB";
import RGBArray_to_XYZArray from "@/Core/Converters/RGBArray_to_XYZArray";
import {ReferenceWhite} from "@/Core/Reference/ReferencePoints";
import {ReferenceAdaptatioMatrixn} from "@/Core/Reference/ReferenceMatrix";
import {get_Bradford_AdaptatioMatrixn} from "@/Core/Converters/TransformMatrix";
import XYZArray_to_LAB from "@/Core/Converters/XYZArray_to_LAB";


/**
 * RGB 对象转换为 Lab 对象
 * @param rgb
 * @param colorSpace
 * @constructor
 */
function RGB_to_Lab(  rgb: objectRGB, colorSpace: ColorSpace = ColorSpace_sRGB): objectLab {
    let _r = util.normaliz(rgb.r, 0, 255, 1);
    let _g = util.normaliz(rgb.g, 0, 255, 1);
    let _b = util.normaliz(rgb.b, 0, 255, 1);

    // 逆 Gamma 变换，把色彩值还原为线性的
    let lin_r = colorSpace.deGamma(_r);
    let lin_g = colorSpace.deGamma(_g);
    let lin_b = colorSpace.deGamma(_b);

    // linRGB to XYZ
    let XYZ = RGBArray_to_XYZArray([lin_r, lin_g, lin_b], colorSpace.RGB2XYZ_MATRIX);

    //White to D50
    if (colorSpace.WHITE_POINT !== ReferenceWhite.D50) {
        if (colorSpace.WHITE_POINT === ReferenceWhite.D65) {
            XYZ = <arrayXYZ>util.matrixMultiply_33x30(ReferenceAdaptatioMatrixn.D65_to_D50, XYZ)
        } else {
            // 非 D65 白点实时计算转换矩阵
            let adaptatioMat = get_Bradford_AdaptatioMatrixn(ReferenceWhite.D50, colorSpace.WHITE_POINT);
            XYZ = <arrayXYZ>util.matrixMultiply_33x30(adaptatioMat, XYZ)
        }
    }

    // XYZ TO Lab
    let Lab = XYZArray_to_LAB(XYZ, ReferenceWhite.D50);
    return Lab
}


export default RGB_to_Lab
