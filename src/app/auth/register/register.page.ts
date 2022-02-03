import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { GenresDto } from '../../../models/genres-dto';
import { PlatformDto } from '../../../models/platform-dto';
import { UserDto } from '../../../models/user-dto';

interface PlateformWrapper {
    platform: PlatformDto;
    selected: boolean;
}
interface GenresWrapper {
    platform: GenresDto;
    selected: boolean;
}
@Component({
    selector: 'register-page',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RegisterPage extends BaseComponent {
    selectedPlateform: PlateformWrapper[] = [];
    user: UserDto = {} as UserDto;
    selectedGenres: GenresWrapper[] = [];
    activeStepper: number = 1;
    constructor() {
        super();
        this.initData();
    }

    switchStep(step: number) {
        if (step === 1)
            this.activeStepper = 1;
        if (step === 2)
            this.activeStepper = 2;
        if (step === 3)
            this.activeStepper = 3;
    }
    nextStep() {
        if (this.activeStepper === 3)
            return;
        this.activeStepper = this.activeStepper + 1;
    }

    selectPlatform(wrapper: PlateformWrapper) {
        wrapper.selected = !wrapper.selected;
    }

    initData() {
        this.selectedPlateform = [
            {
                platform: {
                    name: 'Prime-Video',
                    imgUrl: '/assets/img/prime.png',
                    code: 'prime',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'Netflix',
                    imgUrl: '/assets/img/netflix.png',
                    code: 'netflix',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'OCS',
                    imgUrl: '/assets/img/ocs.png',
                    code: 'ocs',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'Disney+',
                    imgUrl: '/assets/img/disney.png',
                    code: 'disney+',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'MyCanal',
                    imgUrl: '/assets/img/canal.png',
                    code: 'canal',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'Crunchyroll',
                    imgUrl: '/assets/img/crunchyroll.png',
                    code: 'crunchyroll',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'Wakanim',
                    imgUrl: '/assets/img/wakanim.png',
                    code: 'wakanim',
                },
                selected: false,
            },
            {
                platform: {
                    name: 'ADN',
                    imgUrl: '/assets/img/adn.png',
                    code: 'adn',
                },
                selected: false,
            },
        ];
    }
}