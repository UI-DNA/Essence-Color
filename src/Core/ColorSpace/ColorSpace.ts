/**
 * 一个 ColorSpace（色彩空间）决定 3 件事：
 *      1. 如何进行 Gamma 变换（正向+逆向）
 *      2. 如何进行转换到 XYZ （根据白点）
 */

interface ColorSpace {
    // 将线性值进行 Gamma 变换
    enGamma: (value: number) => number

    // 还原经过 Gamma 变换的值
    deGamma: (value: number) => number

    // 白点坐标 [X,Y,Z]
    WHITE_POINT: number[]
    // 主红点坐标  [X,Y,Z]
    R_POINT: number[]
    // 主绿点坐标  [X,Y,Z]
    G_POINT: number[]
    // 主蓝点坐标  [X,Y,Z]
    B_POINT: number[]
    // RGB 到 XYZ 的转换矩阵
    RGB2XYZ_MATRIX: number[],
    // XYZ 到RGB 的转换矩阵
    XYZ2RGB_MATRIX: number[],


    toString(): string
    toJSON(): string
}


export default ColorSpace
