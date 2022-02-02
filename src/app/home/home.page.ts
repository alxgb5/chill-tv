import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../base/base.component';

@Component({
    selector: 'home-page',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage extends BaseComponent {
    backgroundBanner: string = '/assets/img/breaking-bad.png';
    constructor() {
        super();
    }

    setBanner(banner: number) {
        if (banner === 1)
            this.backgroundBanner = '/assets/img/breaking-bad.png';
        if (banner === 2)
            this.backgroundBanner = '/assets/img/spiderman.png';
        if (banner === 3)
            this.backgroundBanner = '/assets/img/naruto.png';
    }
}