export class PaymentProcessor {


        data: {
          descripcion: string,
          items: [
            {
              id: number,
              descripcion: string,
              monto: number,
              cantidad: number
            }
          ],
          total: number,
          name: string,
          dni: string,
          email: string,
          cardNumber: string,
          cardName: string,
          cardDni: string,
          cardDate: string,
          cardCvv: string,
          pay: boolean
        }
      
    constructor( data: any, descripcion: string, items: any, total: number, name: string, dni: string, email:string, 
        cardNumber:string, cardName:string, cardDni:string, cardDate:string, cardCvv:string, pay:boolean, id:number, monto:number, cantidad:number)
    {
     this.data= {
        descripcion,
        items,
        total,
        name,
        dni,
        email,
        cardNumber,
        cardName,
        cardDni,
        cardDate,
        cardCvv,
        pay
      }

      this.data.items= [{
        id,
        descripcion,
        monto,
        cantidad
      }]
    this.data.descripcion = descripcion 
    this.data.total = total
    this.data.name=name
    this.data.dni=dni
    this.data.email=email
    this.data.cardNumber=cardNumber
    this.data.cardName=cardName
    this.data.cardDni=cardDni
    this.data.cardDate=cardDate
    this.data.cardCvv=cardCvv
    this.data.pay=pay
    }
}