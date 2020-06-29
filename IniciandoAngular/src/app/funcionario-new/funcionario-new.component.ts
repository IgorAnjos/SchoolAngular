import { Component, OnInit } from '@angular/core';
import funcionarios from '../funcionarios';
import {EmployeeService, Funcionario} from '../employee.service';

@Component({
  selector: 'funcionario-new',
  templateUrl: './funcionario-new.component.html',
  styleUrls: ['./funcionario-new.component.css']
})
export class FuncionarioNewComponent implements OnInit {

    funcionario: Funcionario = {
      name: '',
      email: '',
      bonus: 0,
    };


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  AddFuncionario(event){
    const list = Object.assign({}, this.funcionario);
    this.employeeService.AddFuncionario(list);
  }
}
