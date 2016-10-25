"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mock_heros_1 = require('./mock-heros');
// It is a best practice to apply the `Injectable() decorator from the start both for consistency and for future-proofing.
var HeroService = (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeros = function () {
        return Promise.resolve(mock_heros_1.HEROS);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeros()
            .then(function (heros) { return heros.find(function (hero) { return hero.id === id; }); });
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
/*
    The consumer of our service doesnt know how the service gets the data.
    our HeroService could get Hero data from anywhere.
    It could get the data from a web service or local storage or froma mock data source

    That's the beauty of removing data access from the component.
    We can change our minds about the implementation as often as we like,
    without touching nay of the compoennets that need hero data
*/ 
//# sourceMappingURL=hero.service.js.map