import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[CommonModule,FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  constructor(
    private auth:AuthService,
    private router:Router
  ){}

  login(){

    this.auth.login();

    this.router.navigate(['/dashboard']);

  }

}