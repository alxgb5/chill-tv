import { Directive, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { RoutesList } from '../routes';

@Directive({})
export abstract class BaseComponent implements OnDestroy {
    public RoutesList = RoutesList;
    public hasPendingModifications = false;
    public environment = environment;
    public loading = false;
    constructor() {
    }

    ngOnDestroy() { }
}