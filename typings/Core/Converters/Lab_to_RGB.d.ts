import { objectRGB, objectLab } from "@/Core/core.const";
import ColorSpace from "@/Core/ColorSpace/ColorSpace";
/**
 * Lab 对象转换为 RGB 对象
 * @param lab
 * @param colorSpace
 * @param out
 * @constructor
 */
declare function Lab_to_RGB(lab: objectLab, colorSpace?: ColorSpace, out?: any): objectRGB;
export default Lab_to_RGB;
