import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee.model';
import {APIEndpointURLs} from '../../api-endpoint-urls';
import {AccountService} from '../../account/component/services/account.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient,
              private auth: AccountService) {}

  public getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(APIEndpointURLs.allEmployee);
  }

}
