import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './stores.component';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    StoresRoutingModule,
    LazyLoadImageModule
  ],
  declarations: [StoresComponent]
})
export class StoresModule { }
