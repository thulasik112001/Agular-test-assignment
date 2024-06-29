import { NgIf } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf,RouterModule,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class LoginComponent implements OnInit{

  loginform!: FormGroup;
    constructor(private router: Router) {}
    ngOnInit(): void {
      this.loginform=new FormGroup({
        email:new FormControl('',[Validators.required,Validators.minLength(4)]),
        password:new FormControl('',[Validators.required,Validators.minLength(4)]),
      })
    }
    onSubmit(){
      if (this.loginform.valid) {
        console.log(this.loginform.value);
        this.router.navigate(['/home']);
      } else {
        console.log('Form is not valid');
      }
      }
  }


