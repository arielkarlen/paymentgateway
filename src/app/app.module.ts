import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PaymentDetailComponent } from './components/payment-detail/payment-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { ContentPaymentComponent } from './components/content-payment/content-payment.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentSuccesfullComponent } from './components/payment-succesfull/payment-succesfull.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


const routes: Route[] = [

  { path: ":id", component: ContentPaymentComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaymentDetailComponent,
    ContentPaymentComponent,
    PaymentFormComponent,
    PaymentSuccesfullComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 

}
