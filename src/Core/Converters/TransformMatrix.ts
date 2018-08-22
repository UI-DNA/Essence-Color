import util from "@/Core/util";


/**
 * 根据色彩空间的 RGB 主色 XYZ 值和白点 RGB 值，生成此色彩空间 RGB 到 XYZ 的转换矩阵
 * @param {number[]} rXYZ
 * @param {number[]} gXYZ
 * @param {number[]} bXYZ
 * @param {number[]} wXYZ
 * @returns {number[]}
 */
function get_RGB2XYZ_TransformMatrix(rXYZ: number[], gXYZ: number[], bXYZ: number[], wXYZ: number[]) {
    // const wXYZ = [0.95045, 1.00000, 1.08905]
    // const rXYZ = [0.64, 0.33, 0.03]
    // const gXYZ = [0.30, 0.60, 0.10]
    // const bXYZ = [0.15, 0.06, 0.79]

    const RGB_MAT = [
        rXYZ[0], gXYZ[0], bXYZ[0],
        rXYZ[1], gXYZ[1], bXYZ[1],
        rXYZ[2], gXYZ[2], bXYZ[2],
    ];

    const INV_RGB_MAT = util.matrixInverse_33(RGB_MAT);


    const S_MAT = util.matrixMultiply_33x30(INV_RGB_MAT, wXYZ);

    const RGB2XYZ_MAT = [
        S_MAT[0] * rXYZ[0], S_MAT[1] * gXYZ[0], S_MAT[2] * bXYZ[0],
        S_MAT[0] * rXYZ[1], S_MAT[1] * gXYZ[1], S_MAT[2] * bXYZ[1],
        S_MAT[0] * rXYZ[2], S_MAT[1] * gXYZ[2], S_MAT[2] * bXYZ[2],
    ];
    return RGB2XYZ_MAT
}




/**
 * 获取用于转换白点的 Bradford 算法矩阵
 * @param newWhite 转换目标的白点
 * @param oldWhite 需要转换的白点
 */
function get_Bradford_AdaptatioMatrixn(newWhite: number[], oldWhite: number[]): number[] {
    // http://www.brucelindbloom.com/index.html?Eqn_ChromAdapt.html
    const BRADFORD_MAT = [
        0.8951000, 0.2664000, -0.1614000,
        -0.7502000, 1.7135000, 0.0367000,
        0.0389000, -0.0685000, 1.0296000];

    // const INV_BRADFORD_MAT = util.matrixInverse_33(BRADFORD_MAT)
    const INV_BRADFORD_MAT = [
        0.9869929, -0.1470543, 0.1599627,
        0.4323053, 0.5183603, 0.0492912,
        -0.0085287, 0.0400428, 0.968486];

    let PYBs = util.matrixMultiply_33x30(BRADFORD_MAT, oldWhite);
    let PYBd = util.matrixMultiply_33x30(BRADFORD_MAT, newWhite);

    let MAT_H = [
        PYBd[0] / PYBs[0], 0, 0,
        0, PYBd[1] / PYBs[1], 0,
        0, 0, PYBd[2] / PYBs[2]
    ];

    let MAT1 = util.matrixMultiply_33x33(INV_BRADFORD_MAT, MAT_H);
    let MAT2 = util.matrixMultiply_33x33(MAT1, BRADFORD_MAT);

    return MAT2
}


export {get_RGB2XYZ_TransformMatrix, get_Bradford_AdaptatioMatrixn}
