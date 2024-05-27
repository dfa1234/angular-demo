import { Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-users-table',
    templateUrl: './users-table.component.html',
    styleUrls: ['./users-table.component.scss'],
    standalone: true,
    imports: []
})
export class UsersTableComponent implements OnInit {
    private usersService = inject(UsersService);

    ngOnInit(): void {

    }

