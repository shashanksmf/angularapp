import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  isPasswordRecovery: string = "none";
  constructor() { }
  firstClass: string = 'login-form__inner auth-in login-form__inner--is-active';
  secondClass: string = 'login-form__inner auth-out'
  thirdClass: string = 'login-form__inner auth-rec'
  passwordRecoveryCss: string = 'login-form__inner auth-rec-data'
  confirmCss:string='login-form__inner auth-done'
  ngOnInit() {
  }
  passwordRecovery() {
    this.firstClass = 'login-form__inner auth-in';
    this.secondClass = 'login-form__inner auth-out';
    this.thirdClass = 'login-form__inner auth-rec login-form__inner--is-active';
  }
  signOutOpen() {
    this.firstClass = 'login-form__inner auth-in';
    this.thirdClass = 'login-form__inner auth-rec';
    this.secondClass = 'login-form__inner auth-out login-form__inner--is-active';
  }
  passwordRecoveryBlock(val) {
    if(val==''){
      return;
    }
    this.firstClass = 'login-form__inner auth-in';
    this.thirdClass = 'login-form__inner auth-rec';
    this.secondClass = 'login-form__inner auth-out';
    this.passwordRecoveryCss = 'login-form__inner auth-rec-data login-form__inner--is-active';
  }
  passwordConfirm(pass, cpass){
    if(pass==''){
      return;
    }
    if(cpass==''){
      return;
    }
    this.firstClass = 'login-form__inner auth-in';
    this.thirdClass = 'login-form__inner auth-rec';
    this.secondClass = 'login-form__inner auth-out';
    this.passwordRecoveryCss = 'login-form__inner auth-rec-data';
    this.confirmCss='login-form__inner auth-done login-form__inner--is-active';
  }
  moveToLogin(){
    this.firstClass = 'login-form__inner auth-in login-form__inner--is-active';
    this.thirdClass = 'login-form__inner auth-rec';
    this.secondClass = 'login-form__inner auth-out';
    this.passwordRecoveryCss = 'login-form__inner auth-rec-data';
    this.confirmCss='login-form__inner auth-done';
  }
  checkreg(email,pass,cpass){
    if(pass==''){
      return;
    }
    if(cpass==''){
      return;
    }
    if(email==''){
      return;
    }
    else{
      console.log("inside")
      this.moveToLogin();
    }
  }
}
