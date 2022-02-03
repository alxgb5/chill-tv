import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogComponent } from '../components/dialog/dialog.component';

interface Data {
    header: string;
    text: string;
    okLabel: string;
    cancelLabel: string;
}
@Injectable()
export class DialogService {
    constructor(
        private snackBar: MatSnackBar,
        private dialog: MatDialog,
    ) {

    }


    public showSnackBar(text: string) {
        this.snackBar.open(text, undefined, { direction: 'ltr', duration: 4000, horizontalPosition: 'center', verticalPosition: 'bottom' });
    }

    public async showDialog(data: Data) {
        const dialog = await this.dialog.open(DialogComponent, { data: data }).afterClosed().toPromise();
        return dialog;
    }
}