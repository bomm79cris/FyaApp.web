import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName = '';
  password = '';
  loading = false;

  constructor(private auth: AuthService,private router: Router) {}

  onLogin() {
    this.loading = true;
    this.auth.login(this.userName, this.password).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
      this.router.navigate(['/credits']);
      },
      error: (err) => {
      }
    }).add(() => this.loading = false);
  }
}
