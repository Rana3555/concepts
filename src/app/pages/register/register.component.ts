import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { 
    this.signupForm =this.fb.group({
      'displayName':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  // registerSubmit(data:any){
  //   console.log(data);
  // }
  signup(){
    alert("Account Created")
  }
}
