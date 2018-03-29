import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  isPasswordRecovery:string="none";
  constructor() { }

  ngOnInit() {
  }
  passwordRecovery(){
    console.log("clicked")
    if(this.isPasswordRecovery=="none"){
      this.isPasswordRecovery="block";
    }
    else{
      this.isPasswordRecovery="none";
    }
  }

}
