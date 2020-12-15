"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var HomePage = /** @class */ (function () {
    function HomePage(dataService) {
        this.dataService = dataService;
        this.nameToDisplay = "> ";
        this.typeWriterIndex = 0;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.typeWriter(); }, 2000);
        this.fullNameCharacters = __spreadArrays(this.dataService.getFullName());
        this.bio = this.dataService.getBio();
        this.projects = this.dataService.getProjects();
        this.contactsLinks = this.dataService.getContacts();
        this.copyright = this.dataService.getCopyright();
    };
    HomePage.prototype.typeWriter = function () {
        var _this = this;
        if (this.typeWriterIndex < this.dataService.getFullName().length) {
            this.nameToDisplay += this.dataService.getFullName().charAt(this.typeWriterIndex);
            this.typeWriterIndex++;
            setTimeout(function () { return _this.typeWriter(); }, 50);
        }
    };
    HomePage = __decorate([
        core_1.Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss']
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
