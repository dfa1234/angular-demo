import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss'],
    standalone: true
})
export class UsersTableComponent implements OnInit {
    constructor(private usersService: UsersService) {}

    ngOnInit(): void {}
}
