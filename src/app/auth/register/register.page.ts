import { Component, ViewEncapsulation } from '@angular/core';
import { BaseComponent } from '../../../base/base.component';
import { DialogService } from '../../../base/dialog.service';
import { GenresDto } from '../../../models/genres-dto';
import { PlatformDto } from '../../../models/platform-dto';
import { UserDto } from '../../../models/user-dto';

interface PlateformWrapper {
    platform: PlatformDto;
    selected: boolean;
}
interface GenresWrapper {
    genre: GenresDto;
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
    confirmPassword: string = '';
    constructor(
        private dialog: DialogService,
    ) {
        super();
        this.initData();
    }

    switchStep(step: number) {
        if (step === 1) {
            this.activeStepper = 1;
        }
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
    selectGenre(wrapper: GenresWrapper) {
        wrapper.selected = !wrapper.selected;
    }

    register() {
        if (!this.user.email || !this.user.password || !this.confirmPassword || !this.user.username) {
            // this.dialog.showDialog({ text: "Vous devez compléter toutes les informations requises", header: 'de', cancelLabel: "Confirmer", okLabel: 'ok' });
            return;
        }
        const platformsSelected = this.selectedPlateform.filter(x => x.selected === true);
        if (!platformsSelected.length) {
            //  dialog need to fill in
            return;
        }
        const genresSelected = this.selectedGenres.filter(x => x.selected === true);
        if (!genresSelected.length) {
            //  dialog need to fill in
            return;
        }
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
        this.selectedGenres = [
            {
                genre: {
                    code: 'action',
                    name: 'Action',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'anime',
                    name: 'Anime',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'horreur',
                    name: 'Horreur',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'fantastique',
                    name: 'Fantastique',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'sciencefiction',
                    name: 'Science-fiction',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'humour',
                    name: 'Humour',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'comédie',
                    name: 'Comédie',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'magie',
                    name: 'Magie',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'aventure',
                    name: 'Aventure',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'futuriste',
                    name: 'Futuriste',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'espace',
                    name: 'Espace',
                },
                selected: false,
            },
            {
                genre: {
                    code: 'drame',
                    name: 'Drame',
                },
                selected: false,
            },
        ];
    }
}