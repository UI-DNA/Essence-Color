import ColorSpace from "@/Core/ColorSpace/ColorSpace";
import {ALIAS, objectRGB} from "@/Core/core.const";
import util from "@/Core/util";
import {default as xxx} from "@/Core/util";
import {ReferencePrimaryColor, ReferenceWhite} from "@/Core/Reference/ReferencePoints";


const GAMMA = 2.4;
const GAMMA_RECI = 0.41666667; //  1/GAMMA

// const WHITE_POINT = [0.95045, 1.00000, 1.08905]
// const RED_POINT = [0.43607, 0.22249, 0.01392]
// const GREEN_POINT = [0.38515, 0.71687, 0.09708]
// const BLUE_POINT = [0.14307, 0.06061, 0.71410]
//
//
// const RGB_MAT = [...RED_POINT, ...GREEN_POINT, ...BLUE_POINT]
// const INV_RGB_MAT = <number[]> []
// util.matrixInverse_33([], RGB_MAT)
// const RGB2XYZ_MAT = <number[]> []
// util.matrixMultiply_33x30(RGB2XYZ_MAT, INV_RGB_MAT, WHITE_POINT)


let ColorSpace_sRGB: ColorSpace = {

    enGamma(value: number): number {
        if (value > 0.0031308 /*0.0031306684425005883*/) {
            return 1.055 * Math.pow(value, GAMMA_RECI) - 0.055;
        }
        return 12.92 * value;
    },
    deGamma(value: number): number {
        if (value < 0.04045) {
            return value / 12.92;
        }
        return Math.pow((value + 0.055) / 1.055, GAMMA);
    },

    WHITE_POINT: ReferenceWhite.D65,
    R_POINT: ReferencePrimaryColor.BT709.r,
    G_POINT: ReferencePrimaryColor.BT709.g,
    B_POINT: ReferencePrimaryColor.BT709.b,

    RGB2XYZ_MATRIX: [
        0.4124564, 0.3575761, 0.1804375,
        0.2126729, 0.7151522, 0.072175,
        0.0193339, 0.119192, 0.9503041
    ],
    XYZ2RGB_MATRIX: [
        3.2404542, -1.5371385, -0.4985314,
        -0.969266, 1.8760108, 0.041556,
        0.0556434, -0.2040259, 1.0572252
    ],

    toString(): string {
        return "sRGB"
    },

    toJSON():string{
        return "sRGB"
    }
};

export default ColorSpace_sRGB
