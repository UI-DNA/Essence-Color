(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.EssenceColor = factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorName = {
	  "aliceblue": [240, 248, 255],
	  "antiquewhite": [250, 235, 215],
	  "aqua": [0, 255, 255],
	  "aquamarine": [127, 255, 212],
	  "azure": [240, 255, 255],
	  "beige": [245, 245, 220],
	  "bisque": [255, 228, 196],
	  "black": [0, 0, 0],
	  "blanchedalmond": [255, 235, 205],
	  "blue": [0, 0, 255],
	  "blueviolet": [138, 43, 226],
	  "brown": [165, 42, 42],
	  "burlywood": [222, 184, 135],
	  "cadetblue": [95, 158, 160],
	  "chartreuse": [127, 255, 0],
	  "chocolate": [210, 105, 30],
	  "coral": [255, 127, 80],
	  "cornflowerblue": [100, 149, 237],
	  "cornsilk": [255, 248, 220],
	  "crimson": [220, 20, 60],
	  "cyan": [0, 255, 255],
	  "darkblue": [0, 0, 139],
	  "darkcyan": [0, 139, 139],
	  "darkgoldenrod": [184, 134, 11],
	  "darkgray": [169, 169, 169],
	  "darkgreen": [0, 100, 0],
	  "darkgrey": [169, 169, 169],
	  "darkkhaki": [189, 183, 107],
	  "darkmagenta": [139, 0, 139],
	  "darkolivegreen": [85, 107, 47],
	  "darkorange": [255, 140, 0],
	  "darkorchid": [153, 50, 204],
	  "darkred": [139, 0, 0],
	  "darksalmon": [233, 150, 122],
	  "darkseagreen": [143, 188, 143],
	  "darkslateblue": [72, 61, 139],
	  "darkslategray": [47, 79, 79],
	  "darkslategrey": [47, 79, 79],
	  "darkturquoise": [0, 206, 209],
	  "darkviolet": [148, 0, 211],
	  "deeppink": [255, 20, 147],
	  "deepskyblue": [0, 191, 255],
	  "dimgray": [105, 105, 105],
	  "dimgrey": [105, 105, 105],
	  "dodgerblue": [30, 144, 255],
	  "firebrick": [178, 34, 34],
	  "floralwhite": [255, 250, 240],
	  "forestgreen": [34, 139, 34],
	  "fuchsia": [255, 0, 255],
	  "gainsboro": [220, 220, 220],
	  "ghostwhite": [248, 248, 255],
	  "gold": [255, 215, 0],
	  "goldenrod": [218, 165, 32],
	  "gray": [128, 128, 128],
	  "green": [0, 128, 0],
	  "greenyellow": [173, 255, 47],
	  "grey": [128, 128, 128],
	  "honeydew": [240, 255, 240],
	  "hotpink": [255, 105, 180],
	  "indianred": [205, 92, 92],
	  "indigo": [75, 0, 130],
	  "ivory": [255, 255, 240],
	  "khaki": [240, 230, 140],
	  "lavender": [230, 230, 250],
	  "lavenderblush": [255, 240, 245],
	  "lawngreen": [124, 252, 0],
	  "lemonchiffon": [255, 250, 205],
	  "lightblue": [173, 216, 230],
	  "lightcoral": [240, 128, 128],
	  "lightcyan": [224, 255, 255],
	  "lightgoldenrodyellow": [250, 250, 210],
	  "lightgray": [211, 211, 211],
	  "lightgreen": [144, 238, 144],
	  "lightgrey": [211, 211, 211],
	  "lightpink": [255, 182, 193],
	  "lightsalmon": [255, 160, 122],
	  "lightseagreen": [32, 178, 170],
	  "lightskyblue": [135, 206, 250],
	  "lightslategray": [119, 136, 153],
	  "lightslategrey": [119, 136, 153],
	  "lightsteelblue": [176, 196, 222],
	  "lightyellow": [255, 255, 224],
	  "lime": [0, 255, 0],
	  "limegreen": [50, 205, 50],
	  "linen": [250, 240, 230],
	  "magenta": [255, 0, 255],
	  "maroon": [128, 0, 0],
	  "mediumaquamarine": [102, 205, 170],
	  "mediumblue": [0, 0, 205],
	  "mediumorchid": [186, 85, 211],
	  "mediumpurple": [147, 112, 219],
	  "mediumseagreen": [60, 179, 113],
	  "mediumslateblue": [123, 104, 238],
	  "mediumspringgreen": [0, 250, 154],
	  "mediumturquoise": [72, 209, 204],
	  "mediumvioletred": [199, 21, 133],
	  "midnightblue": [25, 25, 112],
	  "mintcream": [245, 255, 250],
	  "mistyrose": [255, 228, 225],
	  "moccasin": [255, 228, 181],
	  "navajowhite": [255, 222, 173],
	  "navy": [0, 0, 128],
	  "oldlace": [253, 245, 230],
	  "olive": [128, 128, 0],
	  "olivedrab": [107, 142, 35],
	  "orange": [255, 165, 0],
	  "orangered": [255, 69, 0],
	  "orchid": [218, 112, 214],
	  "palegoldenrod": [238, 232, 170],
	  "palegreen": [152, 251, 152],
	  "paleturquoise": [175, 238, 238],
	  "palevioletred": [219, 112, 147],
	  "papayawhip": [255, 239, 213],
	  "peachpuff": [255, 218, 185],
	  "peru": [205, 133, 63],
	  "pink": [255, 192, 203],
	  "plum": [221, 160, 221],
	  "powderblue": [176, 224, 230],
	  "purple": [128, 0, 128],
	  "rebeccapurple": [102, 51, 153],
	  "red": [255, 0, 0],
	  "rosybrown": [188, 143, 143],
	  "royalblue": [65, 105, 225],
	  "saddlebrown": [139, 69, 19],
	  "salmon": [250, 128, 114],
	  "sandybrown": [244, 164, 96],
	  "seagreen": [46, 139, 87],
	  "seashell": [255, 245, 238],
	  "sienna": [160, 82, 45],
	  "silver": [192, 192, 192],
	  "skyblue": [135, 206, 235],
	  "slateblue": [106, 90, 205],
	  "slategray": [112, 128, 144],
	  "slategrey": [112, 128, 144],
	  "snow": [255, 250, 250],
	  "springgreen": [0, 255, 127],
	  "steelblue": [70, 130, 180],
	  "tan": [210, 180, 140],
	  "teal": [0, 128, 128],
	  "thistle": [216, 191, 216],
	  "tomato": [255, 99, 71],
	  "turquoise": [64, 224, 208],
	  "violet": [238, 130, 238],
	  "wheat": [245, 222, 179],
	  "white": [255, 255, 255],
	  "whitesmoke": [245, 245, 245],
	  "yellow": [255, 255, 0],
	  "yellowgreen": [154, 205, 50]
	};

	var C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_isArrayish = function isArrayish(obj) {
	  if (!obj || typeof obj === 'string') {
	    return false;
	  }

	  return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String');
	};

	var C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_simpleSwizzle = createCommonjsModule(function (module) {



	var concat = Array.prototype.concat;
	var slice = Array.prototype.slice;

	var swizzle = module.exports = function swizzle(args) {
	  var results = [];

	  for (var i = 0, len = args.length; i < len; i++) {
	    var arg = args[i];

	    if (C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_isArrayish(arg)) {
	      // http://jsperf.com/javascript-array-concat-vs-push/98
	      results = concat.call(results, slice.call(arg));
	    } else {
	      results.push(arg);
	    }
	  }

	  return results;
	};

	swizzle.wrap = function (fn) {
	  return function () {
	    return fn(swizzle(arguments));
	  };
	};
	});

	var C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString = createCommonjsModule(function (module) {
	/* MIT license */




	var reverseNames = {}; // create a list of reverse color names

	for (var name in C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorName) {
	  if (C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorName.hasOwnProperty(name)) {
	    reverseNames[C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorName[name]] = name;
	  }
	}

	var cs = module.exports = {
	  to: {}
	};

	cs.get = function (string) {
	  var prefix = string.substring(0, 3).toLowerCase();
	  var val;
	  var model;

	  switch (prefix) {
	    case 'hsl':
	      val = cs.get.hsl(string);
	      model = 'hsl';
	      break;

	    case 'hwb':
	      val = cs.get.hwb(string);
	      model = 'hwb';
	      break;

	    default:
	      val = cs.get.rgb(string);
	      model = 'rgb';
	      break;
	  }

	  if (!val) {
	    return null;
	  }

	  return {
	    model: model,
	    value: val
	  };
	};

	cs.get.rgb = function (string) {
	  if (!string) {
	    return null;
	  }

	  var abbr = /^#([a-f0-9]{3,4})$/i;
	  var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	  var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	  var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	  var keyword = /(\D+)/;
	  var rgb = [0, 0, 0, 1];
	  var match;
	  var i;
	  var hexAlpha;

	  if (match = string.match(hex)) {
	    hexAlpha = match[2];
	    match = match[1];

	    for (i = 0; i < 3; i++) {
	      // https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
	      var i2 = i * 2;
	      rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
	    }

	    if (hexAlpha) {
	      rgb[3] = Math.round(parseInt(hexAlpha, 16) / 255 * 100) / 100;
	    }
	  } else if (match = string.match(abbr)) {
	    match = match[1];
	    hexAlpha = match[3];

	    for (i = 0; i < 3; i++) {
	      rgb[i] = parseInt(match[i] + match[i], 16);
	    }

	    if (hexAlpha) {
	      rgb[3] = Math.round(parseInt(hexAlpha + hexAlpha, 16) / 255 * 100) / 100;
	    }
	  } else if (match = string.match(rgba)) {
	    for (i = 0; i < 3; i++) {
	      rgb[i] = parseInt(match[i + 1], 0);
	    }

	    if (match[4]) {
	      rgb[3] = parseFloat(match[4]);
	    }
	  } else if (match = string.match(per)) {
	    for (i = 0; i < 3; i++) {
	      rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
	    }

	    if (match[4]) {
	      rgb[3] = parseFloat(match[4]);
	    }
	  } else if (match = string.match(keyword)) {
	    if (match[1] === 'transparent') {
	      return [0, 0, 0, 0];
	    }

	    rgb = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorName[match[1]];

	    if (!rgb) {
	      return null;
	    }

	    rgb[3] = 1;
	    return rgb;
	  } else {
	    return null;
	  }

	  for (i = 0; i < 3; i++) {
	    rgb[i] = clamp(rgb[i], 0, 255);
	  }

	  rgb[3] = clamp(rgb[3], 0, 1);
	  return rgb;
	};

	cs.get.hsl = function (string) {
	  if (!string) {
	    return null;
	  }

	  var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	  var match = string.match(hsl);

	  if (match) {
	    var alpha = parseFloat(match[4]);
	    var h = (parseFloat(match[1]) % 360 + 360) % 360;
	    var s = clamp(parseFloat(match[2]), 0, 100);
	    var l = clamp(parseFloat(match[3]), 0, 100);
	    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
	    return [h, s, l, a];
	  }

	  return null;
	};

	cs.get.hwb = function (string) {
	  if (!string) {
	    return null;
	  }

	  var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	  var match = string.match(hwb);

	  if (match) {
	    var alpha = parseFloat(match[4]);
	    var h = (parseFloat(match[1]) % 360 + 360) % 360;
	    var w = clamp(parseFloat(match[2]), 0, 100);
	    var b = clamp(parseFloat(match[3]), 0, 100);
	    var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
	    return [h, w, b, a];
	  }

	  return null;
	};

	cs.to.hex = function () {
	  var rgba = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_simpleSwizzle(arguments);
	  return '#' + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : '');
	};

	cs.to.rgb = function () {
	  var rgba = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_simpleSwizzle(arguments);
	  return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')' : 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
	};

	cs.to.rgb.percent = function () {
	  var rgba = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_simpleSwizzle(arguments);
	  var r = Math.round(rgba[0] / 255 * 100);
	  var g = Math.round(rgba[1] / 255 * 100);
	  var b = Math.round(rgba[2] / 255 * 100);
	  return rgba.length < 4 || rgba[3] === 1 ? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)' : 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
	};

	cs.to.hsl = function () {
	  var hsla = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_simpleSwizzle(arguments);
	  return hsla.length < 4 || hsla[3] === 1 ? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)' : 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
	}; // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
	// (hwb have alpha optional & 1 is default value)


	cs.to.hwb = function () {
	  var hwba = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_simpleSwizzle(arguments);
	  var a = '';

	  if (hwba.length >= 4 && hwba[3] !== 1) {
	    a = ', ' + hwba[3];
	  }

	  return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
	};

	cs.to.keyword = function (rgb) {
	  return reverseNames[rgb.slice(0, 3)];
	}; // helpers


	function clamp(num, min, max) {
	  return Math.min(Math.max(min, num), max);
	}

	function hexDouble(num) {
	  var str = num.toString(16).toUpperCase();
	  return str.length < 2 ? '0' + str : str;
	}
	});
	var C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString_1 = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString.to;

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	var conversions = require('./conversions');

	var route = require('./route');

	var convert = {};
	var models = Object.keys(conversions);

	function wrapRaw(fn) {
	  var wrappedFn = function wrappedFn(args) {
	    if (args === undefined || args === null) {
	      return args;
	    }

	    if (arguments.length > 1) {
	      args = Array.prototype.slice.call(arguments);
	    }

	    return fn(args);
	  }; // preserve .conversion property if there is one


	  if ('conversion' in fn) {
	    wrappedFn.conversion = fn.conversion;
	  }

	  return wrappedFn;
	}

	function wrapRounded(fn) {
	  var wrappedFn = function wrappedFn(args) {
	    if (args === undefined || args === null) {
	      return args;
	    }

	    if (arguments.length > 1) {
	      args = Array.prototype.slice.call(arguments);
	    }

	    var result = fn(args); // we're assuming the result is an array here.
	    // see notice in conversions.js; don't use box types
	    // in conversion functions.

	    if (_typeof(result) === 'object') {
	      for (var len = result.length, i = 0; i < len; i++) {
	        result[i] = Math.round(result[i]);
	      }
	    }

	    return result;
	  }; // preserve .conversion property if there is one


	  if ('conversion' in fn) {
	    wrappedFn.conversion = fn.conversion;
	  }

	  return wrappedFn;
	}

	models.forEach(function (fromModel) {
	  convert[fromModel] = {};
	  Object.defineProperty(convert[fromModel], 'channels', {
	    value: conversions[fromModel].channels
	  });
	  Object.defineProperty(convert[fromModel], 'labels', {
	    value: conversions[fromModel].labels
	  });
	  var routes = route(fromModel);
	  var routeModels = Object.keys(routes);
	  routeModels.forEach(function (toModel) {
	    var fn = routes[toModel];
	    convert[fromModel][toModel] = wrapRounded(fn);
	    convert[fromModel][toModel].raw = wrapRaw(fn);
	  });
	});
	module.exports = convert;

	var C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert = /*#__PURE__*/Object.freeze({

	});

	var _slice = [].slice;
	var skippedModels = [// to be honest, I don't really feel like keyword belongs in color convert, but eh.
	'keyword', // gray conflicts with some method names, and has its own method defined.
	'gray', // shouldn't really be in color-convert either...
	'hex'];
	var hashedModelKeys = {};
	Object.keys(C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert).forEach(function (model) {
	  hashedModelKeys[_slice.call(C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[model].labels).sort().join('')] = model;
	});
	var limiters = {};

	function Color(obj, model) {
	  if (!(this instanceof Color)) {
	    return new Color(obj, model);
	  }

	  if (model && model in skippedModels) {
	    model = null;
	  }

	  if (model && !(model in C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert)) {
	    throw new Error('Unknown model: ' + model);
	  }

	  var i;
	  var channels;

	  if (!obj) {
	    this.model = 'rgb';
	    this.color = [0, 0, 0];
	    this.valpha = 1;
	  } else if (obj instanceof Color) {
	    this.model = obj.model;
	    this.color = obj.color.slice();
	    this.valpha = obj.valpha;
	  } else if (typeof obj === 'string') {
	    var result = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString.get(obj);

	    if (result === null) {
	      throw new Error('Unable to parse color from string: ' + obj);
	    }

	    this.model = result.model;
	    channels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].channels;
	    this.color = result.value.slice(0, channels);
	    this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	  } else if (obj.length) {
	    this.model = model || 'rgb';
	    channels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].channels;

	    var newArr = _slice.call(obj, 0, channels);

	    this.color = zeroArray(newArr, channels);
	    this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	  } else if (typeof obj === 'number') {
	    // this is always RGB - can be converted later on.
	    obj &= 0xFFFFFF;
	    this.model = 'rgb';
	    this.color = [obj >> 16 & 0xFF, obj >> 8 & 0xFF, obj & 0xFF];
	    this.valpha = 1;
	  } else {
	    this.valpha = 1;
	    var keys = Object.keys(obj);

	    if ('alpha' in obj) {
	      keys.splice(keys.indexOf('alpha'), 1);
	      this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
	    }

	    var hashedKeys = keys.sort().join('');

	    if (!(hashedKeys in hashedModelKeys)) {
	      throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
	    }

	    this.model = hashedModelKeys[hashedKeys];
	    var labels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].labels;
	    var color = [];

	    for (i = 0; i < labels.length; i++) {
	      color.push(obj[labels[i]]);
	    }

	    this.color = zeroArray(color);
	  } // perform limitations (clamping, etc.)


	  if (limiters[this.model]) {
	    channels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].channels;

	    for (i = 0; i < channels; i++) {
	      var limit = limiters[this.model][i];

	      if (limit) {
	        this.color[i] = limit(this.color[i]);
	      }
	    }
	  }

	  this.valpha = Math.max(0, Math.min(1, this.valpha));

	  if (Object.freeze) {
	    Object.freeze(this);
	  }
	}

	Color.prototype = {
	  toString: function toString() {
	    return this.string();
	  },
	  toJSON: function toJSON() {
	    return this[this.model]();
	  },
	  string: function string(places) {
	    var self = this.model in C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString.to ? this : this.rgb();
	    self = self.round(typeof places === 'number' ? places : 1);
	    var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
	    return C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString.to[self.model](args);
	  },
	  percentString: function percentString(places) {
	    var self = this.rgb().round(typeof places === 'number' ? places : 1);
	    var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
	    return C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString.to.rgb.percent(args);
	  },
	  array: function array() {
	    return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	  },
	  object: function object() {
	    var result = {};
	    var channels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].channels;
	    var labels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].labels;

	    for (var i = 0; i < channels; i++) {
	      result[labels[i]] = this.color[i];
	    }

	    if (this.valpha !== 1) {
	      result.alpha = this.valpha;
	    }

	    return result;
	  },
	  unitArray: function unitArray() {
	    var rgb = this.rgb().color;
	    rgb[0] /= 255;
	    rgb[1] /= 255;
	    rgb[2] /= 255;

	    if (this.valpha !== 1) {
	      rgb.push(this.valpha);
	    }

	    return rgb;
	  },
	  unitObject: function unitObject() {
	    var rgb = this.rgb().object();
	    rgb.r /= 255;
	    rgb.g /= 255;
	    rgb.b /= 255;

	    if (this.valpha !== 1) {
	      rgb.alpha = this.valpha;
	    }

	    return rgb;
	  },
	  round: function round(places) {
	    places = Math.max(places || 0, 0);
	    return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	  },
	  alpha: function alpha(val) {
	    if (arguments.length) {
	      return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
	    }

	    return this.valpha;
	  },
	  // rgb
	  red: getset('rgb', 0, maxfn(255)),
	  green: getset('rgb', 1, maxfn(255)),
	  blue: getset('rgb', 2, maxfn(255)),
	  hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) {
	    return (val % 360 + 360) % 360;
	  }),
	  // eslint-disable-line brace-style
	  saturationl: getset('hsl', 1, maxfn(100)),
	  lightness: getset('hsl', 2, maxfn(100)),
	  saturationv: getset('hsv', 1, maxfn(100)),
	  value: getset('hsv', 2, maxfn(100)),
	  chroma: getset('hcg', 1, maxfn(100)),
	  gray: getset('hcg', 2, maxfn(100)),
	  white: getset('hwb', 1, maxfn(100)),
	  wblack: getset('hwb', 2, maxfn(100)),
	  cyan: getset('cmyk', 0, maxfn(100)),
	  magenta: getset('cmyk', 1, maxfn(100)),
	  yellow: getset('cmyk', 2, maxfn(100)),
	  black: getset('cmyk', 3, maxfn(100)),
	  x: getset('xyz', 0, maxfn(100)),
	  y: getset('xyz', 1, maxfn(100)),
	  z: getset('xyz', 2, maxfn(100)),
	  l: getset('lab', 0, maxfn(100)),
	  a: getset('lab', 1),
	  b: getset('lab', 2),
	  keyword: function keyword(val) {
	    if (arguments.length) {
	      return new Color(val);
	    }

	    return C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model].keyword(this.color);
	  },
	  hex: function hex(val) {
	    if (arguments.length) {
	      return new Color(val);
	    }

	    return C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorString.to.hex(this.rgb().round().color);
	  },
	  rgbNumber: function rgbNumber() {
	    var rgb = this.rgb().color;
	    return (rgb[0] & 0xFF) << 16 | (rgb[1] & 0xFF) << 8 | rgb[2] & 0xFF;
	  },
	  luminosity: function luminosity() {
	    // http://www.w3.org/TR/WCAG20/#relativeluminancedef
	    var rgb = this.rgb().color;
	    var lum = [];

	    for (var i = 0; i < rgb.length; i++) {
	      var chan = rgb[i] / 255;
	      lum[i] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
	    }

	    return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	  },
	  contrast: function contrast(color2) {
	    // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
	    var lum1 = this.luminosity();
	    var lum2 = color2.luminosity();

	    if (lum1 > lum2) {
	      return (lum1 + 0.05) / (lum2 + 0.05);
	    }

	    return (lum2 + 0.05) / (lum1 + 0.05);
	  },
	  level: function level(color2) {
	    var contrastRatio = this.contrast(color2);

	    if (contrastRatio >= 7.1) {
	      return 'AAA';
	    }

	    return contrastRatio >= 4.5 ? 'AA' : '';
	  },
	  isDark: function isDark() {
	    // YIQ equation from http://24ways.org/2010/calculating-color-contrast
	    var rgb = this.rgb().color;
	    var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	    return yiq < 128;
	  },
	  isLight: function isLight() {
	    return !this.isDark();
	  },
	  negate: function negate() {
	    var rgb = this.rgb();

	    for (var i = 0; i < 3; i++) {
	      rgb.color[i] = 255 - rgb.color[i];
	    }

	    return rgb;
	  },
	  lighten: function lighten(ratio) {
	    var hsl = this.hsl();
	    hsl.color[2] += hsl.color[2] * ratio;
	    return hsl;
	  },
	  darken: function darken(ratio) {
	    var hsl = this.hsl();
	    hsl.color[2] -= hsl.color[2] * ratio;
	    return hsl;
	  },
	  saturate: function saturate(ratio) {
	    var hsl = this.hsl();
	    hsl.color[1] += hsl.color[1] * ratio;
	    return hsl;
	  },
	  desaturate: function desaturate(ratio) {
	    var hsl = this.hsl();
	    hsl.color[1] -= hsl.color[1] * ratio;
	    return hsl;
	  },
	  whiten: function whiten(ratio) {
	    var hwb = this.hwb();
	    hwb.color[1] += hwb.color[1] * ratio;
	    return hwb;
	  },
	  blacken: function blacken(ratio) {
	    var hwb = this.hwb();
	    hwb.color[2] += hwb.color[2] * ratio;
	    return hwb;
	  },
	  grayscale: function grayscale() {
	    // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
	    var rgb = this.rgb().color;
	    var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
	    return Color.rgb(val, val, val);
	  },
	  fade: function fade(ratio) {
	    return this.alpha(this.valpha - this.valpha * ratio);
	  },
	  opaquer: function opaquer(ratio) {
	    return this.alpha(this.valpha + this.valpha * ratio);
	  },
	  rotate: function rotate(degrees) {
	    var hsl = this.hsl();
	    var hue = hsl.color[0];
	    hue = (hue + degrees) % 360;
	    hue = hue < 0 ? 360 + hue : hue;
	    hsl.color[0] = hue;
	    return hsl;
	  },
	  mix: function mix(mixinColor, weight) {
	    // ported from sass implementation in C
	    // https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	    var color1 = mixinColor.rgb();
	    var color2 = this.rgb();
	    var p = weight === undefined ? 0.5 : weight;
	    var w = 2 * p - 1;
	    var a = color1.alpha() - color2.alpha();
	    var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
	    var w2 = 1 - w1;
	    return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
	  }
	}; // model conversion methods and static constructors

	Object.keys(C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert).forEach(function (model) {
	  if (skippedModels.indexOf(model) !== -1) {
	    return;
	  }

	  var channels = C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[model].channels; // conversion methods

	  Color.prototype[model] = function () {
	    if (this.model === model) {
	      return new Color(this);
	    }

	    if (arguments.length) {
	      return new Color(arguments, model);
	    }

	    var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
	    return new Color(assertArray(C__Users_nullice_MyProject_GITHUB_UIDNAProject_Essence_packages_essenceColor_benchmark_vs_node_modules_colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	  }; // 'static' construction methods


	  Color[model] = function (color) {
	    if (typeof color === 'number') {
	      color = zeroArray(_slice.call(arguments), channels);
	    }

	    return new Color(color, model);
	  };
	});

	function roundTo(num, places) {
	  return Number(num.toFixed(places));
	}

	function roundToPlace(places) {
	  return function (num) {
	    return roundTo(num, places);
	  };
	}

	function getset(model, channel, modifier) {
	  model = Array.isArray(model) ? model : [model];
	  model.forEach(function (m) {
	    (limiters[m] || (limiters[m] = []))[channel] = modifier;
	  });
	  model = model[0];
	  return function (val) {
	    var result;

	    if (arguments.length) {
	      if (modifier) {
	        val = modifier(val);
	      }

	      result = this[model]();
	      result.color[channel] = val;
	      return result;
	    }

	    result = this[model]().color[channel];

	    if (modifier) {
	      result = modifier(result);
	    }

	    return result;
	  };
	}

	function maxfn(max) {
	  return function (v) {
	    return Math.max(0, Math.min(max, v));
	  };
	}

	function assertArray(val) {
	  return Array.isArray(val) ? val : [val];
	}

	function zeroArray(arr, length) {
	  for (var i = 0; i < length; i++) {
	    if (typeof arr[i] !== 'number') {
	      arr[i] = 0;
	    }
	  }

	  return arr;
	}

	var color = Color;

	return color;

})));
