import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export const apiUrl = 'https://reqres.in/api';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {}
    //TODO
}
