// Created by nullice on 2018/06/20 - 18:25 

import {objectRGB, objectHSV} from "@/Core/core.const";
import util from "@/Core/util"

/**
 * RGB 对象转换到 HSV 对象
 * @param rgb
 * @param out
 * @return {any}
 */
function RGB_to_HSV (rgb: objectRGB, out?: any): objectHSV
{
    if (out === undefined) out = {};

    let r = util.normaliz(rgb.r);
    let g = util.normaliz(rgb.g);
    let b = util.normaliz(rgb.b);

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let v = max;

    let d = max - min;
    let s = max === 0 ? 0 : d / max;
    let h

    if (max === min)
    {
        h = 0;
    }
    else
    {
        switch (max)
        {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h = <number>h / 6;
    }

    out.h = Math.round(h * 360)
    out.s = Math.round(s * 100)
    out.v = Math.round(v * 100)

    return out
}


export default RGB_to_HSV
