import { Injectable } from '@angular/core';

export interface Funcionario {
  name: string;
  email:string;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  funcionarios: Funcionario[] = [];

  constructor() { }

  AddFuncionario(funcionario: Funcionario){
    funcionario.bonus = funcionario.email.length <= 10 ? 0 : funcionario.bonus;
    this.funcionarios.push(funcionario);
  }
}
