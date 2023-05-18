import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent {
  @Input() paylink: any;

  ngOnInit(): void {
   
  console.log(this.paylink)
  }
}
