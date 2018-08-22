import EssenceColor from "./../src/index"


describe("color", () => {


    test("new EssenceColor", () => {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        expect(color.r).toBe(110)
        expect(color.g).toBe(212)
        expect(color.b).toBe(33)
    })

    test("RGB => HSL ", () => {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        let colorHSL = color.getHSL()
        expect(colorHSL.h).toBe(94)
        expect(colorHSL.s).toBe(73)
        expect(colorHSL.l).toBe(48)
    })

    test("HSL => RGB ", () => {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        let colorHSL = color.getHSL()
        let colorRGB = color.getRGB()
        expect(colorRGB.r).toBe(110)
        expect(colorRGB.g).toBe(212)
        expect(colorRGB.b).toBe(33)
    })



    test("sRGB => Lab ", () => {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        let colorHSL = color.getHSL()
        let colorRGB = color.getRGB()
        expect(colorRGB.r).toBe(110)
        expect(colorRGB.g).toBe(212)
        expect(colorRGB.b).toBe(33)
    })
})
