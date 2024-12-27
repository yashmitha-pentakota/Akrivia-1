import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./loginn.component.css'],
  imports : [NgIf,ReactiveFormsModule,HttpClientModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
 constructor(private fb: FormBuilder,
     private http: HttpClient,
     private router: Router,
    ) {
this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
 
  onSubmit() {
    console.log(this.loginForm)
    if (this.loginForm.valid) {
this.http.post('http://localhost:3000/api/login', this.loginForm.value)
        .subscribe({
          next: (response: any) => {
            console.log('Login successful', response);
            this.errorMessage= " ";
            localStorage.setItem('user',response.data)
            this.router.navigate(['']);
            // Handle successful login (e.g., store token, navigate to another page)
          },
          error: (error) => {
            this.errorMessage = 'Invalid username or password';
        
    }
        });
    }
  }
}