// Created by nullice on 2018/07/02 - 11:59 
var Benchmark = require("benchmark")
var suite = new Benchmark.Suite


// add tests
suite.add("[function]", function ()
{
    function color(ob)
    {
        this.r = ob.r
        this.b = ob.b
        this.g = ob.g
    }

    let a = new color({r: 12, g: 222, b: 125})

})
    .add("[class]", function ()
    {
        class color
        {

            constructor(ob)
            {
                this.r = ob.r
                this.b = ob.b
                this.g = ob.g
            }
        }

        let a = new color({r: 12, g: 222, b: 125})
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
