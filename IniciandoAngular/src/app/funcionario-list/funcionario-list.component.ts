import { Component, OnInit } from '@angular/core';
import funcionarios from '../funcionarios';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  //_funcionarios = funcionarios;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getEmailColor(funcionarios){
    return funcionarios.email  != '' ? 'green':'red';
  }
}
