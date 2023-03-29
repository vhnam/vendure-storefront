import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { IconMenu, IconTruckDelivery } from 'angular-tabler-icons/icons';

import { HeaderComponent, FooterComponent } from './layout';

const icons = {
  IconMenu,
  IconTruckDelivery,
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    TablerIconsModule.pick(icons),
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
