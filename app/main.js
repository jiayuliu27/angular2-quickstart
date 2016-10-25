"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
// initializes the platform that your application runs in, 
// then uses the platform to bootstrap your AppModule
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
/*
    App bootstrapping is a separate concern from creating a module or presenting a view
    Testing the component is much easier if it doesnot also try to run entire app
*/ 
//# sourceMappingURL=main.js.map