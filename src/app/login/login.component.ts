import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  login() {
    // Aquí puedes realizar la lógica de autenticación
    // Por ahora, simplemente establece la variable de autenticación en true
    this.isLoggedIn = true;

    // Redirige a otra página después de iniciar sesión
    if (this.isLoggedIn) {
      this.router.navigate(['/inicio']);
    }

  }
}
