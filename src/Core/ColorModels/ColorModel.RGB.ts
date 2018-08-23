import ColorModel from "@/Core/ColorModels/ColorModel";
import {objectRGB} from "@/Core/core.const";


let ColorModel_RGB: ColorModel = {

    inputColor(color: any, input: any)
    {
        color.r = input.r;
        color.g = input.g;
        color.b = input.b
    },

    outputColor(color: any)
    {
        return {
            r: color.r,
            g: color.g,
            b: color.b
        }
    },

    isMatchedColor(input: any)
    {
        if (input.r == undefined) return false
        if (input.g == undefined) return false
        if (input.b == undefined) return false
        return true
    },


    toRGB(color: any): objectRGB
    {
        return {
            r: color.r,
            g: color.g,
            b: color.b,
        }
    },

    fromRGB(color: any, rgb: any)
    {
        color.r = rgb.r
        color.g = rgb.g
        color.b = rgb.b
    },

    toJSON()
    {
        return "RGB"
    },
    toString()
    {
        return "RGB"
    }
};

export default ColorModel_RGB
