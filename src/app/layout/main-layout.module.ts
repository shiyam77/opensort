import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainlayoutComponent } from './mainlayout/mainlayout.component'; 
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainlayoutComponent
   ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    RouterModule,

  ],
})
export class MainLayoutModule { }
