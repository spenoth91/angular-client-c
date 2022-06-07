import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(
        {
          "nationality": this.employee.nationality,
          "fullName": this.employee.fullName,
          "address": this.employee.address,
          "email": this.employee.email,
          "phone": this.employee.phone,
        "department": this.employee.department,
        "salary": this.employee.salary,
        "teamLeader": this.employee.teamLeader
      }

      ).subscribe( data =>{
        console.log(data);
        this.goToEmployeeList();
      },
      error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
