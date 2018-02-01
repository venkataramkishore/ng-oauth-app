import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AuthResponse } from './auth.response';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public disableField: boolean;
  public authResponse: Observable<AuthResponse>;

  public notification: any;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
    this.disableField = false;
    this.notification = {
      title: '',
      show: false,
      message: '',
      type: ''
    };
  }

  public login(): void {
    console.log('authenticating user ...');
    this.disableField = true;
    this.loginService.authenticateUser(this.username, this.password)
      .subscribe(authRes => {
        this.notification.title = 'Authentication';
        this.notification.show = true;
        this.notification.message = authRes.message;
        this.notification.type = authRes.type;
        if (authRes.type !== 'success') {
          this.disableField = false;
        }
      },
      err => console.log(err));
  }
}
