// Created by nullice on 2018/06/20 - 18:25 

import {objectRGB, objectHWB} from "@/Core/core.const";
import util from "@/Core/util"
import HSL_to_RGB from "@/Core/Converters/HSL_to_RGB";


/**
 * HWB 对象转换到 RGB 对象
 * @param hwb
 * @param out
 * @constructor
 */
function HWB_to_RGB(hwb: objectHWB, out?: any): objectRGB
{
    if (out === undefined) out = {};

    let w = hwb.w / 100
    let b = hwb.b / 100

    let hsl = {h: hwb.h, s: 100, l: 50}

    let rgb = HSL_to_RGB(hsl)

    let dwb = (1 - w - b)
    let dw = w * 255
    rgb.r *= dwb
    rgb.r += dw

    rgb.g *= dwb
    rgb.g += dw

    rgb.b *= dwb
    rgb.b += dw

    out.r = util.normalInt256(rgb.r)
    out.g = util.normalInt256(rgb.g)
    out.b = util.normalInt256(rgb.b)
    return out;
}

export default HWB_to_RGB
