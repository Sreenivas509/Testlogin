import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
this.loginForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
});
}
onSubmit() {
  this.submitted = true;

  if (this.loginForm.invalid) {
      return;
  }

  alert('SUCCESS!!');
}

}
