/**
 * 一个 ColorModel （色彩模型）决定 2 件事：
 *      1. 有哪些属性
 *      2. 如何与 RGB 色彩模型互相转换
 */
interface ColorModel {
    outputColor: (color: any) => any;
    inputColor: (color: any, input: any) => any;
    /**
     * 从 RGB 转换到此色彩模型，把此色彩模型的属性写入指定对象
     * @param color 用来保存色彩属性的对象
     * @param input 输入的 RGB 色彩对象
     * @returns {any}
     */
    fromRGB: (color: any, input: any) => any;
    /**
     * 把此色彩模型的对象转换得到 RGB 对象
     * @param color 输入的此色彩模型的对象
     * @returns {any}
     */
    toRGB: (color: any) => any;
    toJSON?: () => string;
    toString?: () => string;
}
export default ColorModel;
