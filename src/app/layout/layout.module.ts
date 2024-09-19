// Import necessary modules from Angular and third-party libraries
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { StickyfooterComponent } from './components/stickyfooter/stickyfooter.component';



//modules that are implement at the app
@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    StickyfooterComponent
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    StickyfooterComponent
  ]
})
export class LayoutModule { }
