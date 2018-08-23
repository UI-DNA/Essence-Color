import ColorModel from "@/Core/ColorModels/ColorModel";
import {objectRGB} from "@/Core/core.const";
import HSV_to_RGB from "@/Core/Converters/HSV_to_RGB";
import RGB_to_HSV from "@/Core/Converters/RGB_to_HSV";

let ColorModel_HSV: ColorModel = {
    inputColor(color: any, input: any)
    {
        // hsv 别名 hsb
        color.h = input.h;
        color.s = input.s;
        color.v = input.v != undefined ? input.v : input.b
    },

    outputColor(color: any)
    {
        return {
            h: color.h,
            s: color.s,
            v: color.v
        }
    },

    isMatchedColor(input: any)
    {
        if (input.h == undefined) return false
        if (input.s == undefined) return false
        if (input.v == undefined && input.b == undefined) return false
        return true
    },

    toRGB(color: any): objectRGB
    {
        return HSV_to_RGB(color)
    },

    fromRGB(color: any, rgb: any)
    {
        RGB_to_HSV(rgb, color)
    },

    toJSON()
    {
        return "HSV"
    },
    toString()
    {
        return "HSV"
    }
};

export default ColorModel_HSV
