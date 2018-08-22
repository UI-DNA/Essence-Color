import { objectRGB, objectLab } from "@/Core/core.const";
import ColorSpace from "@/Core/ColorSpace/ColorSpace";
/**
 * RGB 对象转换为 Lab 对象
 * @param rgb
 * @param colorSpace
 * @constructor
 */
declare function RGB_to_Lab(rgb: objectRGB, colorSpace?: ColorSpace): objectLab;
export default RGB_to_Lab;
