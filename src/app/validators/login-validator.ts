import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidatorFn, ValidatorFn} from "@angular/forms";
import {UserService} from "../services/user-service/user-service";
import {Observable, of} from "rxjs";
import {debounceTime, map, switchMap, take} from "rxjs/operators";

function isEmptyInputValue(value: any): boolean {
    return value === null || value.length === 0;
}

@Injectable({
    providedIn: 'root'
})
export class LoginValidator {
    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    // existingLoginValidator(initialLogin: string = ''): AsyncValidatorFn {
    //     return (
    //         control: AbstractControl):
    //         | Promise<{ [key: string]: any } | null>
    //         | Observable<{ [key: string]: any } | null> => {
    //         if(isEmptyInputValue(control.value)){
    //             return null;
    //         } else if(control.value === initialLogin){
    //             return of(null);
    //         } else {
    //             return control.valueChanges.pipe(
    //                 debounceTime(500),
    //                 take(1),
    //                 switchMap(_ => this.userService.getByLogin(control.value)
    //                     .pipe(
    //                         map(user =>
    //                         user ? {existingLogin: {value: control.value}} : null
    //                         )
    //                     )
    //                 )
    //             )
    //         }
    //     }
    // }

}