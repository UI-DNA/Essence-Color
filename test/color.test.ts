import EssenceColor from "./../src/index"



test("new EssenceColor", () =>
{

    let color = new EssenceColor({r: 110, g: 212, b: 33})
    expect(color.r).toBe(110)
    expect(color.g).toBe(212)
    expect(color.b).toBe(33)
})


describe("HSL", () =>
{

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

        expect(colorRGB.r).toBe(110)
        expect(colorRGB.g).toBe(212)
        expect(colorRGB.b).toBe(33)

        // s 为 0
        color.s = 0
        colorRGB = color.getRGB()
        expect(colorRGB.r).toBe(122)
        expect(colorRGB.g).toBe(122)
        expect(colorRGB.b).toBe(122)

    })

})


describe("Lab", () =>
{

    test("sRGB => Lab ", () =>
    {
        let color = new EssenceColor({r: 110, g: 212, b: 33})
        let colorLab = color.getLab()
        expect(Math.round(<number>colorLab.L)).toBe(77)
        expect(Math.round(<number>colorLab.a)).toBe(-51)
        expect(Math.round(<number>colorLab.b)).toBe(69)
    })

    test("Lab => sRGB ", () =>
    {
        let color = new EssenceColor({L: 57, a: 53, b: -45})
        let colorLab = color.getRGB()
        expect(colorLab.r).toBe(195)
        expect(colorLab.g).toBe(97)
        expect(colorLab.b).toBe(217)
        // 之所以，Lab 到 sRGB 转换的值和 Photoshop 转换的不一样，因为用的不是同一个白点转换算法
    })
})


describe("HSV", () =>
{
    test("sRGB => HSV ", () =>
    {
        let color = new EssenceColor({r: 216, g: 123, b: 110})
        let colorHSV = color.getHSV()
        expect(colorHSV.h).toBe(7)
        expect(colorHSV.s).toBe(49)
        expect(colorHSV.v).toBe(85)
    })

    test("HSV => sRGB", () =>
    {
        let color = new EssenceColor({h: 289, s: 55, v: 84})
        let colorRGB = color.getRGB()
        expect(colorRGB.r).toBe(193)
        expect(colorRGB.g).toBe(96)
        expect(colorRGB.b).toBe(214)
    })
})



describe("HWB", () =>
{
    test("HWB => sRGB", () =>
    {
        let color = new EssenceColor({h: 33, w: 44, b: 52})
        let colorRGB = color.getRGB()
        expect(colorRGB.r).toBe(122)
        expect(colorRGB.g).toBe(118)
        expect(colorRGB.b).toBe(112)
    })

    test("sRGB => HWB", () =>
    {
        let color = new EssenceColor({r: 124, g: 191, b: 255})
        let colorHWB = color.getHWB() //	hwb(209, 49%, 0%)
        expect(colorHWB.h).toBe(209)
        expect(colorHWB.w).toBe(49)
        expect(colorHWB.b).toBe(0)
    })
})




