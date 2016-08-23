import { RouterConfig } from '@angular/router';
import { nsProvideRouter } from 'nativescript-angular/router';

import { Page1Component, Page2Component } from './components';

/**
 * Route setup for which the ngAfterViewInit has incorrect behaviour.
 */
const ROUTES: RouterConfig = [
    {path: '', component: Page1Component},
    {path: 'page2', component: Page2Component},
];

export const APP_ROUTER_PROVIDER = nsProvideRouter(ROUTES, {enableTracing: false})