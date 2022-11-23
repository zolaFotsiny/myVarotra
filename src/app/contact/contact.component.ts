import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  myusername: string = "";

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value.email);

    this.myusername=form.value.email;
  }
}
