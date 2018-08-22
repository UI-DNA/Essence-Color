import { arrayXYZ, objectLab } from "@/Core/core.const";
/**
 * 转换 XYZ 数组到 Lab 对象
 * @param XYZ
 * @param whitePoint
 * @constructor
 */
declare function XYZArray_to_LAB(XYZ: arrayXYZ, whitePoint?: number[]): objectLab;
export default XYZArray_to_LAB;
