import ColorModel from "@/Core/ColorModels/ColorModel";
import {objectRGB} from "@/Core/core.const";
import HWB_to_RGB from "@/Core/Converters/HWB_to_RGB";
import RGB_to_HWB from "@/Core/Converters/RGB_to_HWB";


let ColorModel_HWB: ColorModel = {
    inputColor(color: any, input: any)
    {
        color.h = input.h;
        color.w = input.w;
        color.b = input.b
    },

    outputColor(color: any)
    {
        return {
            h: color.h,
            w: color.w,
            b: color.b
        }
    },

    isMatchedColor(input: any)
    {
        if (input.h == undefined) return false
        if (input.w == undefined) return false
        if (input.b == undefined) return false
        return true
    },


    toRGB(color: any): objectRGB
    {
        return HWB_to_RGB(color)
    },

    fromRGB(color: any, rgb: any)
    {
        RGB_to_HWB(rgb, color)
    },

    toJSON()
    {
        return "HWB"
    },
    toString()
    {
        return "HWB"
    }
};

export default ColorModel_HWB
