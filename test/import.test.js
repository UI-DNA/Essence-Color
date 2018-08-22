// Created by nullice on 2018/04/11 - 19:44

const LIB_NAME = require("./../package.json").fullName

const CJS_PATH = "./../dist/" + LIB_NAME + ".cjs.js"
const UMD_PATH = "./../dist/" + LIB_NAME + ".umd.js"

import lib_es from "./../dist/EssenceColor.es.js"

let lib_cjs = require(CJS_PATH)
let lib_umd = require(UMD_PATH)



test("import es.js", () =>
{
    expect(typeof lib_es.ESSENCE_COLOR).toBe("number")
})
test("import cjs.js", () =>
{
    expect(typeof lib_cjs.ESSENCE_COLOR).toBe("number")
    expect(typeof lib_cjs.ESSENCE_COLOR).toBe("number")
})

test("import umd.js", () =>
{
    expect(typeof lib_umd.ESSENCE_COLOR).toBe("number")
})

