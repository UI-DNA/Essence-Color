// Created by nullice on 2018/06/20 - 18:25 

import {objectRGB, objectHSL} from "@/Core/core.const";
import util from "@/Core/util"

/**
 * HSL 对象转换到 RGB 对象
 * @param hsl
 * @param out
 * @constructor
 */
function HSL_to_RGB(hsl: objectHSL, out?: any): objectRGB {
    if (out === undefined) out = {};

    let h = hsl.h;
    let s = util.normaliz(hsl.s, 0, 100, 1);
    let l = util.normaliz(hsl.l, 0, 100, 1);

    if (h == 360) h = 0;

    let C = (1 - Math.abs((2 * l) - 1)) * s;
    let hh = h / 60;
    let temp = C * (1 - Math.abs((hh % 2) - 1));
    hh = Math.floor(hh);

    let r = 0, g = 0, b = 0;
    if (hh === 0) {
        r = C;
        g = temp;
        b = 0
    }
    else if (hh === 1) {
        r = temp;
        g = C;
        b = 0
    }
    else if (hh === 2) {
        r = 0;
        g = C;
        b = temp
    }
    else if (hh === 3) {
        r = 0;
        g = temp;
        b = C
    }
    else if (hh === 4) {
        r = temp;
        g = 0;
        b = C
    }
    else (hh === 5);
    {
        r = C;
        g = 0;
        b = temp
    }

    let CC = l - (C / 2);
    r += CC;
    g += CC;
    b += CC;

    out.r = util.normaliz(r, 0, 1, 255);
    out.g = util.normaliz(g, 0, 1, 255);
    out.b = util.normaliz(b, 0, 1, 255);

    return out;
}


export default HSL_to_RGB
