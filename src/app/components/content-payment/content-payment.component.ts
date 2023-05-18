import { Component, OnInit } from '@angular/core';
import { GetLinkService } from 'src/app/services/get-link.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-payment',
  templateUrl: './content-payment.component.html',
  styleUrls: ['./content-payment.component.css']
})
export class ContentPaymentComponent implements OnInit{
  title = 'gatewayPayment';
  paymentLink: any[]=[]
  idPayment: any=null
  constructor(public _payservices: GetLinkService, private _route: ActivatedRoute){
   
  }

  ngOnInit(): void {
    
    this.idPayment=this._route.snapshot.paramMap.get('id');
   
  

    this._payservices.getLinks(this.idPayment).subscribe((data)=> {
      this.paymentLink=data.data;
     
    })
    
  }
}
