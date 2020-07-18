import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../components/message-dialog/error-dialog.component';
import { ErrorMessage } from '../model/error-message.model';

@Injectable({
  providedIn: 'root'
})
export class ModalFacadeService {

  constructor(private dialog: MatDialog) {
  }

  openErrorDialog(errorMessage: ErrorMessage): MatDialogRef<ErrorDialogComponent> {
    return this.dialog.open(ErrorDialogComponent, {
      data: {
        errorMessage
      }
    });
  }
}
