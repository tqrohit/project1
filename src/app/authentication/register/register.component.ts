import { Component, OnInit } from '@angular/core';
import { UseParticalsService } from 'src/app/shared/services/use-particals.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CallApisService } from 'src/app/shared/services/call-apis.service';
import { MustMatch } from 'src/app/shared/validation/must-match.validator';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  myParams: object = {};
  width: number = 100;
  height: number = 100;
  regiData: any = {};

  genders = [
    { name: 'Male', abbrev: 'Male' },
    { name: 'Female', abbrev: 'Female' },
    { name: 'Other', abbrev: 'Other' },
  ];
  
  roles = [
    { name: 'Employee' },
    { name: 'Student' },
  ];

  submitted = false;

  constructor(private formBuilder: FormBuilder, private par: UseParticalsService, private callApi: CallApisService) { }

  registerForm: FormGroup;
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      Email: ['', [Validators.required,Validators.pattern(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,63})$/)]],
      phoneNo: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role:['', Validators.required],
    }, {
        validator: MustMatch('password', 'confirmPassword')
     });
  
    
  }


  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.regiData = this.registerForm.value;
    this.regiData.ACT = "AR01";
    this.regiData.OPT = "OR01";
    console.log(this.regiData);
    //  this.callApi.loginApi(this.regiData).subscribe((data: any) => { 
    //    console.log(data);
    //  });
  }
}
