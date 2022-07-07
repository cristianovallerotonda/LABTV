import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  constructor() {}

  strongRegExp: any =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  validateForm(user: any): boolean {
    if (
      user.username == '' ||
      user.username == undefined ||
      user.password == '' ||
      !this.strongRegExp.test(user.password)
    ) {
      return false;
    } else {
      return true;
    }
  }
}
