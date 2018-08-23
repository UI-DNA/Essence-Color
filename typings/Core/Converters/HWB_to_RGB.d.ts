import { objectRGB, objectHWB } from "@/Core/core.const";
/**
 * HWB 对象转换到 RGB 对象
 * @param hwb
 * @param out
 * @constructor
 */
declare function HWB_to_RGB(hwb: objectHWB, out?: any): objectRGB;
export default HWB_to_RGB;
