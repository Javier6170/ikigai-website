import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/components/home/home.component';
import { ProductsComponent } from './module/components/products/products.component';
import { ContactComponent } from './module/components/contact/contact.component';
import { BlogComponent } from './module/components/blog/blog.component';
import { FrequencyQuestionsComponent } from './module/components/frequency-questions/frequency-questions.component';
import { TermsConditionsComponent } from './module/components/terms-conditions/terms-conditions.component';
import { PoliticDataInformationComponent } from './module/components/politic-data-information/politic-data-information.component';
import { PaymentMethodComponent } from './module/components/payment-method/payment-method.component';
import { ProcessBuyComponent } from './module/components/process-buy/process-buy.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },

  {
    path: 'frequency-questions',
    component: FrequencyQuestionsComponent,
  },

  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
  },

  {
    path: 'politic-data',
    component: PoliticDataInformationComponent,
  },

  {
    path: 'payment-method',
    component: PaymentMethodComponent,
  },

  {
    path: 'process-buy',
    component: ProcessBuyComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
