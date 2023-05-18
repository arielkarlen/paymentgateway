import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentProcessor } from 'src/app/models/paymentLink';
import { GetLinkService } from 'src/app/services/get-link.service';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  @Input() dataLink: any;
  forms: FormGroup;
  idPayment: any=null
  firstStepOk:boolean=true //Cambiar a true
  SecondStepOk:boolean=true 
  showModal:boolean=false

  constructor(private fb: FormBuilder, private _route: ActivatedRoute, public _payservices: GetLinkService) {

    this.forms=this.fb.group({

      name: ['', Validators.required],
      dni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email: ['', Validators.required],

      cardNumber:['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      cardName: ['', Validators.required],
      cardDni: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      cardDate: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cardCvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }
  validateFirstStep(){
    
    if(this.forms.get('name')?.valid && this.forms.get('dni')?.valid && this.forms.get('email')?.valid ) {
      this.firstStepOk=false
    } else {
      this.firstStepOk=true
    }
  }

  validateSecondStep(){
    if(this.forms.get('cardNumber')?.valid && this.forms.get('cardName')?.valid && this.forms.get('cardDni')?.valid && this.forms.get('cardDate')?.valid && this.forms.get('cardCvv')?.valid)  {
      this.SecondStepOk=false
    } else {
      this.SecondStepOk=true
    }
  }

  onSubmit() {
    const payment: PaymentProcessor = {
      data: {
        
          descripcion: this.dataLink.attributes.descripcion,
          items: this.dataLink.attributes.items,
          total: this.dataLink.attributes.total,
          name: this.forms.get('name')?.value,
          dni: this.forms.get('dni')?.value,
          email: this.forms.get('email')?.value,
          cardNumber: this.forms.get('cardNumber')?.value,
          cardName: this.forms.get('cardName')?.value,
          cardDni: this.forms.get('cardDni')?.value,
          cardDate: this.forms.get('cardDate')?.value,
          cardCvv: this.forms.get('cardCvv')?.value,
          pay: true
      
      }
    }

    

    this._payservices.editLinks(this.idPayment, payment).subscribe({
      next: () => {},
      error: (e) => {},
      complete: () => {this.showModal=true},
    })
  }
  

  ngOnInit(): void {
    this.idPayment=this._route.snapshot.paramMap.get('id');
  
  }

}
