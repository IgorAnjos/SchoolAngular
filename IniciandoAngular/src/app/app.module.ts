import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioNewComponent } from './funcionario-new/funcionario-new.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioListComponent,
    FuncionarioNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // para utilizar [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
