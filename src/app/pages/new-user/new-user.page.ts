import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "../../services/login.service";
import { User } from "../../models/user";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {

  form: FormGroup
  showpassword: boolean = true;
  constructor(public login: LoginService,private router: Router, private formaBuilder: FormBuilder) {  this.createForm();}

  ngOnInit() {
  }

  togglePasswordText() {
    this.showpassword = !this.showpassword;
  }

  emailInvalid(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  nameInvalid(){
    return this.form.get('displayName').invalid && this.form.get('displayName').touched;
  }

   passwordInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  tyeInvalid(){
    return this.form.get('types').invalid && this.form.get('types').touched;
  }

  createForm(){
    this.form = this.formaBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      displayName : ['',[Validators.required]],
      password : ['',[Validators.required]],
      types: ['',[]]
    })
  }

  signUp() {
    console.log(this.form.value);
    if(this.form.valid){
     
      this.login.registerUser(this.form.value).subscribe(data =>{
        if(data){
          this.login.saveUserStorage();
          this.router.navigateByUrl("/tabs/tab1");
          this.login.user = true;
          
          this.login.tipo = this.form.value["types"];
        }else{
          Swal.fire({
            icon: 'error',
            text: 'Register Failed, try later'
          })
        }
      })
    }else{
      console.log("invalid form");
    }
  }
}
