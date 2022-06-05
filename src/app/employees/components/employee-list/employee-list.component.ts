import {Component, OnDestroy, OnInit} from '@angular/core';
import { Employee} from '../../models/employee.model';
import {Observable, Subscription} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
import { CommonModule } from "@angular/common";


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
    this.subscription = this.employeeService.getAllEmployee().subscribe(data => {this.employees = data;
    console.log(data);})
  }


  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(emp_id:number) {
    this.employeeService.deleteEmployee(emp_id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.employees = this.employees.filter(e=>e.employeeID!==emp_id)

        },
        error => console.log(error));
  }

  // getIconByItemState(item, color: boolean = false): string {
  //   switch(item?.State) {
  //     case 'Successful': {
  //       return !color ? 'check circle icon' : 'pi pi-check';
  //     }
  //     case 'Faulted': {
  //       return !color ? 'error icon' : 'pi pi-times';
  //     }
  //     default: {
  //       return 'pi pi-times';
  //     }
  //   }
  // }



  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
