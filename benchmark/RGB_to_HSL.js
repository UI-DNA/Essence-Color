// Created by nullice on 2018/07/02 - 11:59 


var Benchmark = require("benchmark")
var suite = new Benchmark.Suite
let EssenceColor = require("./../dist/EssenceColor.cjs.js")
var QixColor = require("./vs/node_modules/color")
var three = require("./vs/three")
var tinycolor = require("./vs/tinycolor")
var d3Color = require("./vs/node_modules/d3-color")
var assert = require("assert")
var memoize = require('lodash.memoize')
var RGB_to_HSL = memoize(EssenceColor.RGB_to_HSL,(x)=>{return x.r+"-"+ x.g+"-"+ x.b})


function isOk(done, name = "")
{
    if (Math.floor(+done.h) != 152 || Math.floor(+done.s) != 90 || Math.floor(+done.l) != 46)
    {
        console.error(name, done)
        console.error("re:", [Math.floor(+done.h), Math.floor(+done.s), Math.floor(+done.l)])
        process.exit()
    }
}

// add tests
suite.add("[EssenceColor]", function ()
{
    let a = new EssenceColor({r: 12, g: 222, b: 125})
    let done = a.getHSL()
    done.h +1
    // isOk(done)

})
    .add("[(Qix-)color@v3.0.0]", function ()
    {
        let a = QixColor({r: 12, g: 222, b: 125})
        let b = a.hsl().color
        let done = {h: Math.round(b[0]), s: Math.round(b[1]), l: Math.round(b[2])}
        done.h +1
        // isOk(done, "Qix")

    })    .add("[EssenceColor.RGB_to_HSL]", function ()
    {

        let done ={}
        EssenceColor.RGB_to_HSL({r: 12, g: 222, b: 125},done)
        done.h +1

    })
    .add("[EssenceColor.m]", function ()
    {

        let done =RGB_to_HSL({r: 12, g: 222, b: 125})
        done.h +1

    })
    .add("[three.js@v0.94.0]", function ()
    {
        let threeColor = new three.Color()
        threeColor.setRGB(12 / 255, 222 / 255, 125 / 255)
        let _hsl = {}
        threeColor.getHSL(_hsl)
        var done = {h: Math.round(_hsl.h * 360), s: Math.round(_hsl.s * 100), l: Math.round(_hsl.l * 100)}
        done.h +1
        // isOk(done,"three")
    })
    .add("[tinycolor@v0.94.0]", function ()
    {
        let a = tinycolor({r: 12, g: 222, b: 125})
        let _hsl = a.toHsl()
        let done =  {h:_hsl.h, s: Math.round(_hsl.s * 100), l: Math.round(_hsl.l * 100)}
        done.h +1
        // isOk(done,"tinycolor")
    })
    .add("[d3-color@v1.2.0]", function ()
    {
        let a = d3Color.rgb(12, 222, 125)
        let b = d3Color.hsl(a)
        let done = {h: b.h, s: Math.floor(b.s * 100), l: Math.floor(b.l * 100)}
        done.h +1
        // isOk(done,"d3")
    })
    // add listeners
    .on("cycle", function (event)
    {
        console.log(String(event.target))
    })
    .on("complete", function ()
    {
        let report = []
        for (var i = 0; i < this.length; i++)
        {
            let re = {
                name: this[i].name,
                hz: this[i].hz,
                hz0001: this[i].hz * 0.0001
            }
            report.push(re)
        }
        console.info(report)


        console.log("Fastest is " + this.filter("fastest").map("name"))
    })
    // run async
    .run({"async": true})
