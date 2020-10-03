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
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(config, response, code, request) {
        var _this = _super.call(this, 'An HTTP error occured.') || this;
        _this.config = config;
        _this.response = response;
        _this.code = code;
        _this.request = request;
        Object.setPrototypeOf(_this, HttpError.prototype);
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
