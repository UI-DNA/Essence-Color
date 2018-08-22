// Created by nullice on 2018/06/20 - 18:25 

import {objectRGB, objectHSL} from "@/Core/core.const";
import util from "@/Core/util";

function RGB_to_HSL(rgb: objectRGB, out?: any): objectHSL {
    if (out === undefined) out = {};

    let r = util.normaliz(rgb.r);
    let g = util.normaliz(rgb.g);
    let b = util.normaliz(rgb.b);

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);

    let l = (max + min) / 2;
    let h;
    let s;

    if (min === max) {
        h = 0;
        s = 0;
    }
    else {
        let delta = max - min;
        s = l <= 0.5 ? delta / (max + min) : delta / (2 - max - min);
        h = 0;
        switch (max) {
            case r:
                h = (g - b) / delta + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / delta + 2;
                break;
            case b:
                h = (r - g) / delta + 4;
                break;
        }
        h = h / 6
    }

    out.h = Math.round(h * 360);
    out.s = Math.round(s * 100);
    out.l = Math.round(l * 100);
    return out
}


export default RGB_to_HSL
