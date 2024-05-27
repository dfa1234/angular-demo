import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {combineLatest, concatMap, map} from 'rxjs';
import {Post} from '../models/post.model';
import {User} from '../models/user.model';

export const apiBaseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient) {}
    //TODO
}
