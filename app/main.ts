import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// initializes the platform that your application runs in, 
// then uses the platform to bootstrap your AppModule
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

/*
	App bootstrapping is a separate concern from creating a module or presenting a view
	Testing the component is much easier if it doesnot also try to run entire app
*/