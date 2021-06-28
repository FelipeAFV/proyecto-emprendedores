import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckRoleDirective } from 'src/app/directives/check-role/check-role.directive';
import { CheckAuthDirective } from 'src/app/directives/check-auth/check-auth.directive';



@NgModule({
  declarations: [
    CheckRoleDirective,
    CheckAuthDirective
  ],
  imports: [
    
  ],
  exports: [
    CheckRoleDirective,
    CheckAuthDirective
  ]
})
export class DirectivesModule { }
