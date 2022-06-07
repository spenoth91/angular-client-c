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

  /**
   * updates the employee personal and work related data.
   * Some strange bug: person object inside Employee (out of nowhere)
   * @param id id of the user to be updated
   * @param employee the employee object 
   * @returns An Observable of the response as a JSON object
   */
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${APIEndpointURLs.updateEmp}/${id}`, employee);
  }

  createEmployee(employee: Employee): Observable<Object>{
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
