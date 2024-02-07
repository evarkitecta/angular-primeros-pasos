import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPAgeComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainPAgeComponent
  ],
  exports: [
    MainPAgeComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
