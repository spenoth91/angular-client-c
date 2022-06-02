import {Component, OnDestroy, OnInit} from '@angular/core';
import { Employee} from '../../models/employee.model';
import {Subscription} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,OnDestroy {
  employees: Employee[];
  private subscription: Subscription;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.subscription = this.employeeService.getAllEmployee().subscribe(data => this.employees = data);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
