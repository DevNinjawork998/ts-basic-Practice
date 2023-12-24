"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _fetchData = exports.printFormat = exports.format = exports.addStrings = void 0;
export { _fetchData as fetchData };
function addNumbers(a, b) {
    return a + b;
}
const _default = addNumbers;
export { _default as default };
var addStrings = function (str1, str2) { return "".concat(str1, " ").concat(str2); };
const _addStrings = addStrings;
export { _addStrings as addStrings };
var format = function (title, param) { return "".concat(title, " ").concat(param); };
const _format = format;
export { _format as format };
var printFormat = function (title, param) {
    console.log((0, _format)(title, param));
};

const _printFormat = printFormat;
export { _printFormat as printFormat };
var fetchData = function (url) { return Promise.resolve("Data from ".concat(url)); };
const _fetchData = fetchData;
export { _fetchData as fetchData };
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(names.join(" "));
}
