import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  Roles: any = ['Male', 'Female', 'Third Gender'];
  selectedFile = null;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: ['', Validators.required],
    reentepasswod: ['', Validators.required],
    address: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
});
}
onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
      return;
  }


  alert('SUCCESS!!');
}
fileUpload(event){
  this.selectedFile = event.target.files[0];
}
}
