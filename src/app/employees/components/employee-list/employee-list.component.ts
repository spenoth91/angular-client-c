import {Component, OnDestroy, OnInit} from '@angular/core';
import { Employee} from '../../models/employee.model';
import {Observable, Subscription} from 'rxjs';
import {EmployeeService} from '../../services/employee.service';
import {Router} from '@angular/router';
import { CommonModule } from "@angular/common";
import {ConfirmationService, Message, MessageService, PrimeNGConfig} from 'primeng/api';


@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.css'],
  providers:[ConfirmationService]
})
export class EmployeeListComponent implements OnInit,OnDestroy {
  employees: Employee[];
  employee:Employee;
  private subscription: Subscription;
  deleteMessage=false;
  msgs: Message[] = [];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private primengConfig: PrimeNGConfig,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.subscription = this.employeeService.getAllEmployee().subscribe(data => {this.employees = data;
    console.log(data);})
  }
  geeks: boolean;
  selectedEmplyoee?:Employee;

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  /**
   * Navigates to the update employee page, using the employee id
   * @param id represents the id of the user
   */
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(emp_id:number) {
    this.employeeService.deleteEmployee(emp_id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          //this.messageService.add({severity:'success', summary: 'Deleted', detail: 'Your Employee was successfully deleted!'});
          this.employees = this.employees.filter(e=>e.employeeID!==emp_id)

        },
        error => console.log(error));
  }
  confirm2(emp_id) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this Employee?',
      header: 'Delete Confirmation',
      icon: 'pi pi-trash',
      accept: () => {
        this.msgs = [{severity:'warn', summary:'Deleted!', detail:'Your Employee was successfully deleted!'}];
        this.deleteEmployee(emp_id);
      },
      reject: () => {
        this.msgs = [{severity:'error', summary:'Rejected', detail:'You have rejected'}];
      }
    });
  }
  onSelect(employee: Employee): void {
    this.selectedEmplyoee = employee;
    this.geeks = true;

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
