import {ColorSpace, ColorSpaceList} from "@/Core/core.const";
import ColorModel from "./ColorModels/ColorModel";
import ColorModel_RGB from "./ColorModels/ColorModel.RGB";
import ColorModel_HSL from "@/Core/ColorModels/ColorModel.HSL";
import ColorModel_Lab from "@/Core/ColorModels/ColorModel.Lab";
import ColorSpace_sRGB from "@/Core/ColorSpace/ColorSpace.sRGB";
import RGB_to_HSL from "@/Core/Converters/RGB_to_HSL";
import ColorModel_HSV from "@/Core/ColorModels/ColorModel.HSV";
import ColorModel_HWB from "@/Core/ColorModels/ColorModel.HWB";


let ColorModeles = {
    HSV: ColorModel_HSV,
    HSL: ColorModel_HSL,
    RGB: ColorModel_RGB,
    Lab: ColorModel_Lab,
    HWB: ColorModel_HWB,
}


/**
 * 色彩表示与存储类
 */
class EssenceColor
{
    public colorModel?: ColorModel;
    public colorSpace?: ColorModel;

    // 静态色彩转换方法
    static DirectConverters = {RGB_to_HSL}

    // 支持的色彩模型列表
    static ColorModeleList = [ColorModel_RGB, ColorModel_HSL, ColorModel_HSV, ColorModel_Lab, ColorModel_HWB]


    public r?: number;
    public g?: number;
    public b?: number;
    public L?: number;
    public l?: number;
    public a?: number;
    public s?: number;
    public h?: number;
    public v?: number;
    public w?: number;
    public alpha?: number;

    constructor(input: any)
    {

        if (typeof input === "object" && input != undefined)
        {
            this.colorSpace = input.colorSpace;
            this.colorModel = input.colorModel;

            // 如果输入对象有色彩模型，则使用其处理色彩
            if (this.colorModel && typeof  this.colorModel.inputColor === "function")
            {
                this.colorModel.inputColor(this, input)
            }
            else
            {
                // 在支持的色彩模型列表里，找到合适的并输入颜色
                let len = EssenceColor.ColorModeleList.length
                for (let i = 0; i < len; i++)
                {
                    let modele = EssenceColor.ColorModeleList[i]
                    if (modele.isMatchedColor(input))
                    {
                        modele.inputColor(this, input)
                        this.colorModel = modele;
                        break
                    }
                }

            }
        }
        else if (Array.isArray(input))
        {

        }
        else
        {

        }
    }


    /**
     * 根据输入设置当前 color
     */
    public set(this: any, args: IArguments)
    {

        this.r = args[0].r;
        this.b = args[0].b;
        this.g = args[0].g
        // console.log("set", args)
        //
        // if (args.length == 1) {
        //     if (Array.isArray(args[0])) {
        //         this._inputArray(args[0])
        //         return
        //     }
        //     else if (args[0] == undefined) {
        //         this.colorModel = ColorModel_RGB
        //         return
        //     }
        //     else if (typeof args[0] == "object") {
        //         this._inputObject(args[0])
        //         return
        //     }
        // }
        // else if (args.length == 2) {
        // } else {
        //     this.r = 0
        //     this.g = 0
        //     this.b = 0
        //     this.colorModel = ColorModel_RGB
        //     return
        // }
    }


    /**
     * 根据输入设置当前 color 色彩空间
     * @param input
     * @private
     */
    private _setColorSpace(this: any, input: any)
    {

        if (input.colorSpace)
        {
            // 输入的 ColorSpace 是一个合法 ColorSpace：
            if (input.colorSpace.RGB2XYZ_MATRIX && input.colorSpace.XYZ2RGB_MATRIX)
            {
                this.colorSpace = input.colorSpace
            }
            else
            {

                let len = ColorSpaceList.length;
                for (let i = 0; i < len; i++)
                {
                    if (input.colorSpace == ColorSpaceList[i].toString())
                    {
                        this.colorSpace = ColorSpaceList[i];
                        break
                    }
                }
            }
        }
    }

    /**
     * 返回当前 color 色彩空间
     * @returns {ColorSpace}
     * @private
     */
    private _getColorSpace(this: any)
    {
        if (this.colorSpace)
        {
            let len = ColorSpaceList.length;
            for (let i = 0; i < len; i++)
            {
                if (this.colorSpace == ColorSpaceList[i].toString())
                {
                    return ColorSpaceList[i]
                }
            }
        }
        else
        {
            return ColorSpace_sRGB
        }
    }


    /**
     * 从当前 color 中创建新 color，并转换到指定色彩模型
     * @param {ColorModel} targetColorModel
     * @returns {EssenceColor}
     * @private
     */
    private _getColorByModel(targetColorModel: ColorModel)
    {
        if (this.colorModel)
        {
            let nowColorModel = this.colorModel;
            if (nowColorModel === targetColorModel)
            {
                // 同色彩模型
                let color = new EssenceColor(null);
                Object.assign(color, this.colorModel.outputColor(this));
                color.colorModel = this.colorModel;
                color.colorSpace = this.colorSpace;

                return color
            }
            else
            {

                // 创建一个新的空 Color
                let color = new EssenceColor(null);

                // 从当前 Color 获取 RGB 对象，并通过 RGB 转换到目标 ColorModel
                let rgb = this.colorModel.toRGB(this);

                // console.log(" 当前 rgb",rgb)
                targetColorModel.fromRGB(color, rgb);

                // 为新 Color 配置 ColorModel，ColorSpace
                color.colorModel = targetColorModel;
                color.colorSpace = this.colorSpace;

                return color
            }

        }
        else
        {
            throw new Error("[EssenceColor] colorModel not found.")
        }
    }


    public getHSL(): EssenceColor
    {
        let color = this._getColorByModel(ColorModel_HSL);
        return color
    }

    public getRGB(): EssenceColor
    {
        let color = this._getColorByModel(ColorModel_RGB);
        return color
    }

    public getLab(): EssenceColor
    {
        let color = this._getColorByModel(ColorModel_Lab);
        return color
    }

    public getHSV(): EssenceColor
    {
        let color = this._getColorByModel(ColorModel_HSV);
        return color
    }

    public getHWB(): EssenceColor
    {
        let color = this._getColorByModel(ColorModel_HWB);
        return color
    }


    static ESSENCE_COLOR = 1
}


export default EssenceColor
