export class ContactForm {

  constructor(
    public name: string,
    public lastname: string,
    public date: Date,
    public email: string,
    public address: string,
    public zipcode: number
  ) { }
}
