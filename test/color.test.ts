import EssenceColor from "./../src/index"


describe("color", () =>
{


    test("new EssenceColor", () =>
    {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        expect(color.r).toBe(110)
        expect(color.g).toBe(212)
        expect(color.b).toBe(33)
    })

    test("RGB => HSL ", () =>
    {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        let colorHSL = color.getHSL()
        expect(colorHSL.h).toBe(94)
        expect(colorHSL.s).toBe(73)
        expect(colorHSL.l).toBe(48)

    })


    test("HSL => RGB", () =>
    {
        let color = new EssenceColor({h: 94, s: 73, l: 48})
        let colorRGB = color.getRGB()
        console.log("colorRGB",colorRGB)
        expect(colorRGB.r).toBe(110)
        expect(colorRGB.g).toBe(212)
        expect(colorRGB.b).toBe(33)
    })


    test("sRGB => Lab ", () =>
    {

        let color = new EssenceColor({r: 110, g: 212, b: 33})
        let colorLab = color.getLab()
        expect(Math.round(<number>colorLab.L)).toBe(77)
        expect(Math.round(<number>colorLab.a)).toBe(-51)
        expect(Math.round(<number>colorLab.b)).toBe(69)
    })


    test("sRGB => HSV ", () =>
    {
        let color = new EssenceColor({r: 216, g: 123, b: 110})
        let colorHSV = color.getHSV()
        expect(colorHSV.h).toBe(7)
        expect(colorHSV.s).toBe(49)
        expect(colorHSV.v).toBe(85)
    })

})
