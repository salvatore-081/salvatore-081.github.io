import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderComponentModule } from '../components/header/header.module'
import { TerminalModule } from '../components/terminal/terminal.module'
import { ProjectModule } from '../components/project/project.module'

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderComponentModule,
    TerminalModule,
    ProjectModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
