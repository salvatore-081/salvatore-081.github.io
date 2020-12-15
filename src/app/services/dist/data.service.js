"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var data = require("../../assets/data.json");
var DataService = /** @class */ (function () {
    function DataService() {
        this.dataJson = data["default"];
        this.data = this.dataJson;
    }
    DataService.prototype.getFullName = function () {
        return this.data.fullName;
    };
    DataService.prototype.getBio = function () {
        return this.data.bio;
    };
    DataService.prototype.getTerminalCV = function () {
        return this.data.terminal.cv;
    };
    DataService.prototype.getTerminalLinks = function () {
        return this.data.terminal.links;
    };
    DataService.prototype.getTerminalStatic = function () {
        return this.data.terminal.static;
    };
    DataService.prototype.getProjects = function () {
        return this.data.projects;
    };
    DataService.prototype.getContacts = function () {
        return this.data.contacts;
    };
    DataService.prototype.getCopyright = function () {
        return this.data.copyright;
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
