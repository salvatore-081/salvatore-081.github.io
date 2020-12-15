import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';



@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule
  ],
  exports: [ProjectComponent]
})
export class ProjectModule { }
