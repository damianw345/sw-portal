import { LoginData } from './login-data';
import { CurrentUser } from './current-user';

export interface Registration extends LoginData, CurrentUser {
}
