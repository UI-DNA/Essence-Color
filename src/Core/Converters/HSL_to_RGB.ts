// Created by nullice on 2018/06/20 - 18:25 

import {objectRGB, objectHSL} from "@/Core/core.const";
import util from "@/Core/util"

/**
 * HSL 对象转换到 RGB 对象
 * @param hsl
 * @param out
 * @constructor
 */
function HSL_to_RGB(hsl: objectHSL, out?: any): objectRGB
{
    if (out === undefined) out = {};


    let h = hsl.h == 360 ? 0 : hsl.h / 60;
    let s = util.normaliz(hsl.s, 0, 100, 1);
    let l = util.normaliz(hsl.l, 0, 100, 1);

    let t2
    if( l <= .5 ) {
        t2 = l * (s + 1);
    } else {
        t2 = l + s - (l * s);
    }
    let t1 = l * 2 - t2;

    out.r = util.normalInt256(hueToRgb(t1, t2, h + 2) * 255)
    out.g = util.normalInt256(hueToRgb(t1, t2, h) * 255)
    out.b = util.normalInt256(hueToRgb(t1, t2, h - 2) * 255)

    return out;

    function hueToRgb(t1: number, t2: number, hue: number)
    {

        if (hue < 0) hue += 6;
        if (hue >= 6) hue -= 6;
        if (hue < 1) return (t2 - t1) * hue + t1;
        if (hue < 3) return t2;
        if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
        return t1;
    }
}


export default HSL_to_RGB
