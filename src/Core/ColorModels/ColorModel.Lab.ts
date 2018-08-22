import ColorModel from "@/Core/ColorModels/ColorModel";
import util from "@/Core/util";

import {objectRGB, objectHSL, objectLab} from "@/Core/core.const";
import HSL_to_RGB from "@/Core/Converters/HSL_to_RGB";
import RGB_to_HSL from "@/Core/Converters/RGB_to_HSL";
import RGB_to_Lab from "@/Core/Converters/RGB_to_Lab";
import Lab_to_RGB from "@/Core/Converters/Lab_to_RGB";

let ColorModel_Lab: ColorModel = {
    inputColor(color: any, input: any) {
        color.L = input.L;
        color.a = input.a;
        color.b = input.b
    },

    outputColor(color: any) {
        return {
            L: color.L,
            a: color.a,
            b: color.b
        }
    },

    toRGB(color: any): objectRGB {
        return Lab_to_RGB(color)
    },

    fromRGB(color: any, rgb: any) {

        // console.log("ColorModel_Lab fromRGB",rgb )
        let Lab = RGB_to_Lab(rgb);
        color.L = Lab.L;
        color.a = Lab.a;
        color.b = Lab.b
    },

    toJSON() {
        return "Lab"
    },
    toString() {
        return "Lab"
    }
};


export default ColorModel_Lab
