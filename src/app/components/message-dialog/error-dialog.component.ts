import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorMessage } from '../../core/model/error-message.model';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {

  errorMessage: ErrorMessage;

  constructor(@Inject(MAT_DIALOG_DATA) data: { errorMessage: ErrorMessage }) {
    this.errorMessage = data.errorMessage;
  }
}
