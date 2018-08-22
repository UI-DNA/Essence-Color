/**
 * 根据色彩空间的 RGB 主色 XYZ 值和白点 RGB 值，生成此色彩空间 RGB 到 XYZ 的转换矩阵
 * @param {number[]} rXYZ
 * @param {number[]} gXYZ
 * @param {number[]} bXYZ
 * @param {number[]} wXYZ
 * @returns {number[]}
 */
declare function get_RGB2XYZ_TransformMatrix(rXYZ: number[], gXYZ: number[], bXYZ: number[], wXYZ: number[]): number[];
/**
 * 获取用于转换白点的 Bradford 算法矩阵
 * @param newWhite 转换目标的白点
 * @param oldWhite 需要转换的白点
 */
declare function get_Bradford_AdaptatioMatrixn(newWhite: number[], oldWhite: number[]): number[];
export { get_RGB2XYZ_TransformMatrix, get_Bradford_AdaptatioMatrixn };
