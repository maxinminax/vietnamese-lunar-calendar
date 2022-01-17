"use strict";
/**
 * This library using the source from [https://www.informatik.uni-leipzig.de/~duc/amlich/](https://www.informatik.uni-leipzig.de/~duc/amlich/)
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./utils"), exports);
__exportStar(require("./julian"), exports);
__exportStar(require("./sun-longitude"), exports);
__exportStar(require("./convert-lunar"), exports);
__exportStar(require("./convert-solar"), exports);