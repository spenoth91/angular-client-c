import { Component, OnInit } from '@angular/core';
import {Employee} from '../../models/employee.model';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: any;
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    }, error => console.log(error));
  }

  /**
   * When the submit button is pressed, the new is sent to the employee service, and it should send it to the server
   */
  onSubmit(){
    this.employeeService.updateEmployee(this.id, {
      "nationality": this.employee.person.nationality,
      "fullName": this.employee.person.fullName,
      "address": this.employee.person.address,
      "email": this.employee.person.email,
      "phone": this.employee.person.phone,
      "department": this.employee.department,
      "salary": this.employee.salary,
      "teamLeader": this.employee.teamLeader
    }).subscribe( data =>{
        this.goToEmployeeList();
      }
      , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

}
