import { objectRGB, objectHWB } from "@/Core/core.const";
/**
 * RGB 对象转换到 HWB 对象
 * @param rgb
 * @param out
 * @constructor
 */
declare function RGB_to_HWB(rgb: objectRGB, out?: any): objectHWB;
export default RGB_to_HWB;
