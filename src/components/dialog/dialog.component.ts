import { Component, Inject, Input, ViewEncapsulation } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

interface Data {
    header: string;
    text: string;
    okLabel: string;
    cancelLabel: string;
}

@Component({
    selector: 'dialog-component',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
})


export class DialogComponent {
    @Input() dialogData: Data;
    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Data,
    ) {
        this.init();
    }

    init() {
        this.dialogData = this.data;
    }

    closeDialog(returnValue: boolean) {
        this.dialogRef.close(returnValue);
    }
}