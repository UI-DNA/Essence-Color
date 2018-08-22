import ColorModel from "@/Core/ColorModels/ColorModel";
import util from "@/Core/util";

import {objectRGB, objectHSL} from "@/Core/core.const";
import HSL_to_RGB from "@/Core/Converters/HSL_to_RGB";
import RGB_to_HSL from "@/Core/Converters/RGB_to_HSL";


let ColorModel_HSL: ColorModel = {
    inputColor(color: any, input: any) {
        color.h = input.h;
        color.s = input.s;
        color.l = input.l
    },

    outputColor(color: any) {
        return {
            h: color.h,
            s: color.s,
            l: color.l
        }
    },

    toRGB(color: any): objectRGB {
        return HSL_to_RGB(color)
    },

    fromRGB(color: any, rgb: any) {
        RGB_to_HSL(rgb, color)
    },

    toJSON() {
        return "HSL"
    },
    toString() {
        return "HSL"
    }
};

export default ColorModel_HSL
