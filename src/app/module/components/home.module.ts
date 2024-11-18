import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from "../../layout/layout.module";
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { PoliticDataInformationComponent } from './politic-data-information/politic-data-information.component';
import { ProcessBuyComponent } from './process-buy/process-buy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
    declarations: [
        HomeComponent,
        ProductsComponent,
        ContactComponent,
        PaymentMethodComponent,
        PoliticDataInformationComponent,
        ProcessBuyComponent,
        TermsConditionsComponent,
        BlogComponent
    ],
    exports: [
        HomeComponent,
        ProductsComponent,
        ContactComponent,
        PaymentMethodComponent,
        PoliticDataInformationComponent,
        ProcessBuyComponent,
        TermsConditionsComponent
    ],
    imports: [
        LayoutModule,
        BrowserAnimationsModule
    ]
})
export class HomeModule { }
