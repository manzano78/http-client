"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var NotImplementedError_1 = require("./error/NotImplementedError");
var CancelError_1 = require("./error/CancelError");
var HttpError_1 = require("./error/HttpError");
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.isHttpError = function (error) {
        return error instanceof HttpError_1.HttpError;
    };
    HttpClient.isCancelError = function (error) {
        return error instanceof CancelError_1.CancelError;
    };
    HttpClient.prototype.request = function () {
        throw new NotImplementedError_1.NotImplementedError();
    };
    HttpClient.prototype.get = function (url, config) {
        return this._request(url, 'get', config);
    };
    HttpClient.prototype.options = function (url, config) {
        return this._request(url, 'options', config);
    };
    HttpClient.prototype.head = function (url, config) {
        return this._request(url, 'head', config);
    };
    HttpClient.prototype.delete = function (url, config) {
        return this._request(url, 'delete', config);
    };
    HttpClient.prototype.post = function (url, data, config) {
        return this._request(url, 'post', config, data);
    };
    HttpClient.prototype.put = function (url, data, config) {
        return this._request(url, 'put', config, data);
    };
    HttpClient.prototype.patch = function (url, data, config) {
        return this._request(url, 'patch', config, data);
    };
    HttpClient.prototype.addRequestInterceptor = function () {
        throw new NotImplementedError_1.NotImplementedError();
    };
    HttpClient.prototype.addResponseInterceptor = function () {
        throw new NotImplementedError_1.NotImplementedError();
    };
    HttpClient.prototype.createCancelToken = function () {
        throw new NotImplementedError_1.NotImplementedError();
    };
    HttpClient.prototype._request = function (url, method, baseRequestConfig, data) {
        if (baseRequestConfig === void 0) { baseRequestConfig = {}; }
        return this.request(__assign(__assign({}, baseRequestConfig), { url: url,
            method: method,
            data: data }));
    };
    return HttpClient;
}());
exports.HttpClient = HttpClient;
