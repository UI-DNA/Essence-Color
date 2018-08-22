const util = {
    getValueByKeys(ob: any, keys: string[])
    {
        let len = keys.length;
        for (let i = 0; i < len; i++)
        {
            let key = keys[i];
            if (ob[key])
            {
                return ob[key]
            }
        }
    },

    /**
     * 归一化
     * @param {number} inNumber
     * @param {number} inMin
     * @param {number} inMax
     * @param {number} newMin
     * @param {number} newMax
     * @returns {number}
     */
    normaliz(inNumber: number, inMin?: number, inMax?: number, newMax?: number)
    {


        let newNumber;
        if (!!inMin && !!inMax && !! newMax)
        {
            newNumber = (inNumber - inMin) / (inMax - inMin);
            newNumber = newNumber * newMax;
        }
        else
        {
            newNumber = inNumber / 255;
        }
        return newNumber
    },


    /**
     * 把一个数按 [0,255] 整数，规则化
     * @param value
     * @return {number}
     */
    normalInt256(value: number)
    {
        let re = Math.round(value)
        if (re > 255) return 255
        if (re < 0) return 0
        return re
    },


    matrixMultiply_33x33(matA: number[], matB: number[]): number[]
    {

        let out = [];

        out[0] = matA[0] * matB[0] + matA[1] * matB[3] + matA[2] * matB[6];
        out[1] = matA[0] * matB[1] + matA[1] * matB[4] + matA[2] * matB[7];
        out[2] = matA[0] * matB[2] + matA[1] * matB[5] + matA[2] * matB[8];

        out[3] = matA[3] * matB[0] + matA[4] * matB[3] + matA[5] * matB[6];
        out[4] = matA[3] * matB[1] + matA[4] * matB[4] + matA[5] * matB[7];
        out[5] = matA[3] * matB[2] + matA[4] * matB[5] + matA[5] * matB[8];

        out[6] = matA[6] * matB[0] + matA[7] * matB[3] + matA[8] * matB[6];
        out[7] = matA[6] * matB[1] + matA[7] * matB[4] + matA[8] * matB[7];
        out[8] = matA[6] * matB[2] + matA[7] * matB[5] + matA[8] * matB[8];
        return out
    },

    matrixMultiply_33x30(matA: number[], matB: number[]): number[]
    {

        /*
        *  0 1 2     0
        *  3 4 5  x  1
        *  6 7 8     2
        * */
        let out = [];

        out[0] = matB[0] * matA[0] + matB[1] * matA[1] + matB[2] * matA[2];
        out[1] = matB[0] * matA[3] + matB[1] * matA[4] + matB[2] * matA[5];
        out[2] = matB[0] * matA[6] + matB[1] * matA[7] + matB[2] * matA[8];
        return out
    },


    matrixInverse_33(mat: number[]): number[]
    {

        let out = [];
        let n11 = mat[0], n21 = mat[1], n31 = mat[2],
            n12 = mat[3], n22 = mat[4], n32 = mat[5],
            n13 = mat[6], n23 = mat[7], n33 = mat[8],

            t11 = n33 * n22 - n32 * n23,
            t12 = n32 * n13 - n33 * n12,
            t13 = n23 * n12 - n22 * n13,

            det = n11 * t11 + n21 * t12 + n31 * t13;

        if (det === 0)
        {
            throw new Error("[EssenceColor]  util.matrixInverse() can't invert matrix.");
        }

        let detInv = 1 / det;

        out[0] = t11 * detInv;
        out[1] = (n31 * n23 - n33 * n21) * detInv;
        out[2] = (n32 * n21 - n31 * n22) * detInv;

        out[3] = t12 * detInv;
        out[4] = (n33 * n11 - n31 * n13) * detInv;
        out[5] = (n31 * n12 - n32 * n11) * detInv;

        out[6] = t13 * detInv;
        out[7] = (n21 * n13 - n23 * n11) * detInv;
        out[8] = (n22 * n11 - n21 * n12) * detInv;

        return out
    },

};

export default util
