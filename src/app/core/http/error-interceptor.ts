import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ModalFacadeService } from '../service/modal.service';
import { UserService } from '../service/user.service';
import { ErrorMessage } from '../model/error-message.model';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private userService: UserService,
              private modalFacadeService: ModalFacadeService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        this.handleError(err);
        return throwError('error');
      })
    );
  }

  private handleError(httpErrorResponse: HttpErrorResponse): void {
    this.showErrorDialog(httpErrorResponse.error);
  }

  private showErrorDialog(message: ErrorMessage): void {
    this.modalFacadeService.openErrorDialog(message)
      .afterClosed()
      .subscribe(_ => this.userService.logout());
  }
}
