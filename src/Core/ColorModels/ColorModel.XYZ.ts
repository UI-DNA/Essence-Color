import ColorModel from "@/Core/ColorModels/ColorModel";
import {objectRGB} from "@/Core/core.const";
import XYZArray_to_RGBArray from "@/Core/Converters/XYZArray_to_RGBArray";
import ColorSpace_sRGB from "@/Core/ColorSpace/ColorSpace.sRGB";
import RGBArray_to_XYZArray from "@/Core/Converters/RGBArray_to_XYZArray";
import util from "@/Core/util";


let ColorModel_XYZ: ColorModel = {

    inputColor(color: any, input: any)
    {
        color.x = input.x;
        color.y = input.y;
        color.z = input.z
    },

    outputColor(color: any)
    {
        return {
            x: color.x,
            y: color.y,
            z: color.z
        }
    },

    isMatchedColor(input: any)
    {
        if (input.x == undefined) return false
        if (input.y == undefined) return false
        if (input.z == undefined) return false
        return true
    },


    toRGB(color: any): objectRGB
    {
        let colorSpace = color.colorSpace || ColorSpace_sRGB
        let rgbArray = XYZArray_to_RGBArray([color.x, color.y, color.z], colorSpace.XYZ2RGB_MATRIX)

        // Gamma 变换，把色彩值的转化为适应人眼的
        return {
            r: util.normalInt256(colorSpace.enGamma(rgbArray[0]) * 255),
            g: util.normalInt256(colorSpace.enGamma(rgbArray[1]) * 255),
            b: util.normalInt256(colorSpace.enGamma(rgbArray[2]) * 255),
        }
    },

    fromRGB(color: any, rgb: any)
    {
        let colorSpace = color.colorSpace || ColorSpace_sRGB

        let _r = util.normaliz(rgb.r, 0, 255, 1);
        let _g = util.normaliz(rgb.g, 0, 255, 1);
        let _b = util.normaliz(rgb.b, 0, 255, 1);

        // 逆 Gamma 变换，把色彩值还原为线性的
        let lin_r = colorSpace.deGamma(_r);
        let lin_g = colorSpace.deGamma(_g);
        let lin_b = colorSpace.deGamma(_b);

        let xyzArray = RGBArray_to_XYZArray([lin_r, lin_g, lin_b], colorSpace.RGB2XYZ_MATRIX)

        color.x = xyzArray[0]
        color.y = xyzArray[1]
        color.z = xyzArray[2]
    },

    toJSON()
    {
        return "XYZ"
    },
    toString()
    {
        return "XYZ"
    }
};

export default ColorModel_XYZ
