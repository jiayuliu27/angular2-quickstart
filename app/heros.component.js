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
/*
    Every Angular application has at least one component:
    the root component, in this case 'AppComponent'

    Essential structure of a component
    * import statement to access angular's core @Component
    * A @Component decorator that associates metadata with the `AppComponent` component class
        * a selector that specifies a simple CSS selector fro an HTML elt that represents the component
        * a template that tells Angular how to render the component's view
    * A component class that controls the appearance and behavior of a view through its template.

*/
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var HerosComponent = (function () {
    function HerosComponent(heroService) {
        this.heroService = heroService;
        // simultaneously defines a private heroService property and identifies it as a HeroService injection site
    }
    HerosComponent.prototype.getHeros = function () {
        var _this = this;
        this.heroService.getHeros()
            .then(function (heros) { return _this.heros = heros; });
    };
    HerosComponent.prototype.ngOnInit = function () {
        this.getHeros();
    };
    HerosComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HerosComponent = __decorate([
        core_1.Component({
            selector: 'my-heros',
            template: "\n    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n    <h2>My Heroes</h2>\n    <ul class=\"heros\">\n      <li *ngFor=\"let hero of heros\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n  ",
            providers: [
                hero_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HerosComponent);
    return HerosComponent;
}());
exports.HerosComponent = HerosComponent;
//# sourceMappingURL=heros.component.js.map