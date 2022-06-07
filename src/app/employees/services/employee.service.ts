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

  deleteEmployee(id:number):Observable<Object>{
    return this.http.delete(`${APIEndpointURLs.deleteEmp}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${APIEndpointURLs.updateEmp}/${id}`, employee);
  }

  createEmployee(employee: { address: string; nationality: string; phone: string; fullName: string; teamLeader: boolean; department: string; salary: string; email: string }): Observable<Object>{
    return this.http.post(`${APIEndpointURLs.createEmp}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${APIEndpointURLs.employee}/${id}`);
  }

  // get(id: any): Observable<Employee> {
  //   return this.http.get<Employee>(`${APIEndpointURLs.employeeUrl}/${id}`);
  // }
  // deleteEmployee(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/delete-student/${id}`, { responseType: 'text' });
  // }
  // public addFood(food: Food): Observable<Food> {
  //   return this.http.post<Food>(APIEndpointURLs.foodUrl, food);
  // }
  //
  // public update(food: Food): Observable<Food> {
  //   return this.http.put<Food>(APIEndpointURLs.foodUrl, food);
  // }

}
