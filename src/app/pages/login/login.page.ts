import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "../../services/login.service";
import { User } from "../../models/user";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  forma: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder, private loginService: LoginService) { 
    this.createForm();
  }

  ngOnInit() {
    this.loginService.getAllUsers().subscribe((data: User[])=>{
      this.loginService.users = data;
    });
  }

  createForm(){
    this.forma = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required]]
    });
  }

  getEmailInvalid(){
    return this.forma.get('username').invalid && this.forma.get('username').touched;
  }

  getPwdInvalid(){
    this.forma.get('pwd').invalid  && this.forma.get('pwd').touched;
  }

  login(){
    if(this.forma.valid){
      if(this.loginService.login(this.forma.value["username"], this.forma.value["pwd"])){
        this.router.navigateByUrl('/tabs');
      }else{
        Swal.fire({
          icon: 'error',
          text: 'incorrect data'
        });
      }
    }

    this.forma.reset();
  }

  register(){
    this.router.navigateByUrl('/new-user');
  }

}
