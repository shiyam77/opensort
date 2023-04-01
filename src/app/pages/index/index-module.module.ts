import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexModuleRoutingModule } from './index-module-routing.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexModuleRoutingModule
  ]
})
export class IndexModuleModule { }
