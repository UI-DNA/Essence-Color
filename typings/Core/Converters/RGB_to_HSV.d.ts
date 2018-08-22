import { objectRGB, objectHSV } from "@/Core/core.const";
/**
 * RGB 对象转换到 HSV 对象
 * @param rgb
 * @param out
 * @return {any}
 */
declare function RGB_to_HSV(rgb: objectRGB, out?: any): objectHSV;
export default RGB_to_HSV;
