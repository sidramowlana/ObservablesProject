import { Subject } from "rxjs";

export class UsersService{
    activate = new Subject();
    hello = new Subject();
}