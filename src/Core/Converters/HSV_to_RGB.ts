// Created by nullice on 2018/06/20 - 18:25 

import {objectRGB, objectHSV} from "@/Core/core.const";
import util from "@/Core/util"

/**
 * HSV 对象转换到 RGB 对象
 * @param hsv
 * @param out
 * @constructor
 */
function HSV_to_RGB(hsv: objectHSV, out?: any): objectRGB
{
    if (out === undefined) out = {};

    let h = hsv.h === 360 ? 0 : hsv.h / 60;
    let s = util.normaliz(hsv.s, 0, 100, 1);
    let v = util.normaliz(hsv.v, 0, 100, 1);


    let i = Math.floor(h);
    let f = h - i;
    let p = v * (1 - s);
    let q = v * (1 - (s * f));
    let t = v * (1 - (s * (1 - f)));

    let r, g, b
    switch (i)
    {
        case 0 :
        {
            r = v;
            g = t;
            b = p;
            break;
        }
        case 1 :
        {
            r = q;
            g = v;
            b = p;
            break;
        }
        case 2:
        {
            r = p;
            g = v;
            b = t;
            break;
        }
        case 3:
        {
            r = p;
            g = q;
            b = v;
            break;
        }
        case 4:
        {
            r = t;
            g = p;
            b = v;
            break;
        }
        case 5:
        {
            r = v;
            g = p;
            b = q;
            break;
        }
    }

    out.r = util.normalInt256(<number>r * 255)
    out.g = util.normalInt256(<number>g * 255)
    out.b = util.normalInt256(<number>b * 255)
    return out
}


export default HSV_to_RGB
