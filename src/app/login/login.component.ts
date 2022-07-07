import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ValidateService } from '../services/validate.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private validateService: ValidateService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}

  accessToken: string = '';

  ngOnInit(): void {
    console.log('onInit called');

    if (localStorage.getItem('accessToken') !== null) {
      console.log(localStorage.getItem('accessToken'));
      this.router.navigate([
        '/dashboard',
        localStorage.getItem('accessToken')?.slice(0, -8),
      ]);
    }
  }

  username: string = '';
  password: string = '';
  myMessage = '';
  my_profile: any = {};

  auth_code: any = {};
  access_token: any = {};
  paramToken: string = '';

  onSubmitForm(e: any) {
    console.log(this.username, this.password);

    const user = {
      username: this.username,
      password: this.password,
    };

    //utilizzo un nuovo service validate

    if (this.validateService.validateForm(user)) {
      //vuol dire che i dati inseriti sono "VALIDI"
      this.myMessage = "Dati validi... effettuo l'autenticazione";

      //processo di autenticazione

      this.loginService.authorize(user).subscribe(
        (data) => {
          console.log(data.data.authorization_code);

          this.auth_code = {
            authorization_code: data.data.authorization_code,
          };

          this.loginService.getAccessToken(this.auth_code).subscribe((data) => {
            console.log(data.data.access_token); //dobbiamo depurare la stringa degli ultimi 8 caratteri
            this.access_token = { 'X-Access-Token': data.data.access_token }; //la stringa da passare nell'header

            //debbo andare a conservare il mio access Token nella localStorage, così ogni volta che cambio rotta confronterò se il mio access Token è uguale a quello immagazzinato nel localStorage
            localStorage.setItem('accessToken', data.data.access_token);
            this.paramToken = data.data.access_token.slice(0, -8);

            this.loginService
              .getUserInformation(this.access_token)
              .subscribe((data) => {
                console.log(this.paramToken);
                this.my_profile = data.data;
                //navigo automaticamente verso un'altra rotta (redirect)
                this.router.navigate(['/dashboard', this.paramToken]);
                this.modalService.close();
              });
          });
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.myMessage = 'Dati non validi. Provare di nuovo';
    }
  }
}
