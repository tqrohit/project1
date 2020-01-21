import { Component, OnInit } from '@angular/core';
import { UseParticalsService } from 'src/app/shared/services/use-particals.service';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { CallApisService } from 'src/app/shared/services/call-apis.service';
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  loginData: any = {};
  constructor(private par: UseParticalsService, private callApi: CallApisService, private router: Router) { }
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit() {
    this.par.callParticals({});
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.loginData = this.loginForm.value;
    if (!this.loginData.userName) {
      Swal.fire({
        title: 'Error',
        text: 'Please Enter Username',
        type: 'error',
        showCancelButton: false,
        timer: 3000
      });
      return false;
    } else if (!this.loginData.password) {
      Swal.fire({
        title: 'Error',
        text: 'Please Enter Password',
        type: 'error',
        showCancelButton: false,
        timer: 3000
      });
      return false;
    } else {
      this.loginData.ACT = "AL01";
      this.loginData.OPT = "OL01";
      console.log(this.loginData);
      this.router.navigate(['/dashboard']);
    //  this.callApi.loginApi(this.loginData).subscribe((data: any) => { 
    //    console.log(data);
    //  });
    }

  }
}