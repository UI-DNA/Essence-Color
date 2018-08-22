import util from "./../src/Core/util"
import {get_RGB2XYZ_TransformMatrix, get_Bradford_AdaptatioMatrixn} from "../src/Core/Converters/TransformMatrix"
import {ReferenceWhite} from "../src/Core/Reference/ReferencePoints";


describe("util.matrixMultiply_3rd", () => {
    let matA = [0.9555766, -0.0230393, 0.0631636,
        -0.0282895, 1.0099416, 0.0210077,
        0.0122982, -0.0204830, 1.3299098]

    let matB = [0.9555766, -0.0230393, 0.0631636,
        -0.0282895, 1.0099416, 0.0210077,
        0.0122982, -0.0204830, 1.3299098]


    test("util.matrixMultiply_33x33", () => {
        let re: number[] = []
        re = util.matrixMultiply_33x33(matA, matB)
        expect(re).toEqual([0.91455520733043, -0.04657794348406, 0.14387554607243,
            -0.055345170222760004, 1.0202035049688103, 0.047368029593580004,
            0.02868682267298, -0.048210518145460006, 1.76900657400246])


    })

    test("util.matrixMultiply_33x30", () => {
        let re: number[] = []
        let rgb = [0.9555766, -0.0230393, 0.0631636]
        re = util.matrixMultiply_33x30(matA, rgb)
        expect(re).toEqual([0.91764708817701, -0.04897420977086, 0.09622567676730001])
    })


    test("util.matrixInverse_33", () => {
        let re: number[] = []
        re = util.matrixInverse_33(matA)
        expect(re.map(x => x.toFixed(10))).toEqual([1.0478112592799003, 0.0228865585696698, -0.0501269523791132,
            0.0295423543395792, 0.9904844180077462, -0.0170491269112723,
            -0.0092345182996159, 0.0150435983398657, 0.7521316513490052].map(x => x.toFixed(10)))
    })


    test("calc sRGB to XYZ Matrix ", () => {
        const WHITE_POINT = [0.95047, 1.00000, 1.08883]
        const RED_POINT = [0.64, 0.33, 0.03]
        const GREEN_POINT = [0.30, 0.60, 0.10]
        const BLUE_POINT = [0.15, 0.06, 0.79]

        let re = get_RGB2XYZ_TransformMatrix(RED_POINT, GREEN_POINT, BLUE_POINT, WHITE_POINT)


        expect(re.map(x => +x.toFixed(4))).toEqual(
            [0.4124564, 0.3575761, 0.1804375,
                0.2126729, 0.7151522, 0.072175,
                0.0193339, 0.119192, 0.9503041].map(x => +x.toFixed(4)))

    })


    test("ReferenceAdaptatioMatrixn ", () => {
        let re = get_Bradford_AdaptatioMatrixn(ReferenceWhite.D50, ReferenceWhite.D65)

        expect(re.map(x => +x.toFixed(5))).toEqual(
            [1.0478112, 0.0228866, -0.0501270,
                0.0295424, 0.9904844, -0.0170491,
                -0.0092345, 0.0150436, 0.7521316].map(x => +x.toFixed(5)))


    })


})
