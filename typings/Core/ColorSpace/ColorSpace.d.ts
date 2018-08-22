/**
 * 一个 ColorSpace（色彩空间）决定 3 件事：
 *      1. 如何进行 Gamma 变换（正向+逆向）
 *      2. 如何进行转换到 XYZ （根据白点）
 */
interface ColorSpace {
    enGamma: (value: number) => number;
    deGamma: (value: number) => number;
    WHITE_POINT: number[];
    R_POINT: number[];
    G_POINT: number[];
    B_POINT: number[];
    RGB2XYZ_MATRIX: number[];
    XYZ2RGB_MATRIX: number[];
    toString(): string;
    toJSON(): string;
}
export default ColorSpace;
