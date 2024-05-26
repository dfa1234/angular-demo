import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export const apiBaseUrl = 'https://my-json-server.typicode.com/dfa1234/angular-demo';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {}
    //TODO

}
