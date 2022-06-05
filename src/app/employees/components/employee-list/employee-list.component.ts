import {Component, OnDestroy, OnInit} from '@angular/core';
import { Employee} from '../../models/employee.model';
import {Observable, Subscription} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy {
  employees: Employee[];
  employee:Employee;
  private subscription: Subscription;
  deleteMessage=false;


  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.employeeService.getAllEmployee().subscribe(data => this.employees = data);

  }
  // getEmployee(id: string): void {
  //   this.employeeService.get(id)
  //     .subscribe(
  //       data => {
  //         this.employee = data;
  //         console.log(data);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  deleteEmployee(emp_id:number) {
    this.employeeService.deleteEmployee(emp_id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.employeeService.getAllEmployee().subscribe(data =>{
            this.employees =data
          })

        },
        error => console.log(error));
  }


  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
