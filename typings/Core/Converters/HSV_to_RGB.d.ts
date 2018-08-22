import { objectRGB, objectHSV } from "@/Core/core.const";
/**
 * HSV 对象转换到 RGB 对象
 * @param hsv
 * @param out
 * @constructor
 */
declare function HSV_to_RGB(hsv: objectHSV, out?: any): objectRGB;
export default HSV_to_RGB;
