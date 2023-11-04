import { Component } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { ContactMessage } from 'src/app/models/contact-message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  isSendingMessage : boolean = false;
  messageToSend : ContactMessage;

  constructor(){
    this.messageToSend = {sender : '', subject : '', email : '', message : ''}
  }
  onSubmit(form: NgForm){
    this.isSendingMessage = true
    console.log(this.messageToSend);
    this.isSendingMessage = false;

    form.resetForm();
  }
}
