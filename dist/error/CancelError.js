"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CancelError = /** @class */ (function (_super) {
    __extends(CancelError, _super);
    function CancelError(reason) {
        var _this = _super.call(this, 'The request could not proceed because it has been cancelled.') || this;
        _this.reason = reason;
        Object.setPrototypeOf(_this, CancelError.prototype);
        return _this;
    }
    return CancelError;
}(Error));
exports.CancelError = CancelError;
