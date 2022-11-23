import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myVarotra';
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }
}
