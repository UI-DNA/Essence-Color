import ColorModel from "@/Core/ColorModels/ColorModel";
import {ALIAS, objectRGB} from "@/Core/core.const";
import util from "@/Core/util";
import {default as xxx} from "@/Core/util";

let ColorModel_RGB: ColorModel = {

    inputColor(color: any, input: any) {
        color.r = input.r;
        color.g = input.g;
        color.b = input.b
    },

    outputColor(color: any) {
        return {
            r: color.r,
            g: color.g,
            b: color.b
        }
    },

    toRGB(color: any): objectRGB {
        return {
            r: color.r,
            g: color.g,
            b: color.b,
        }
    },

    fromRGB(color: any, rgb: any) {
        color.r = rgb.r;
        color.g = rgb.g;
        color.b = rgb.g
    },

    toJSON() {
        return "RGB"
    },
    toString() {
        return "RGB"
    }
};

export default ColorModel_RGB
