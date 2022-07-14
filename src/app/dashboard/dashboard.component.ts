import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: ModalService
  ) {}

  isUserLogged: boolean = false;
  accessToken: string = '';

  ngOnInit(): void {
    //estraggo il valore del token
    this.accessToken = this.route.snapshot.params['token'];

    if (
      localStorage.getItem('accessToken') &&
      localStorage.getItem('accessToken')?.slice(0, -8) == this.accessToken
    ) {
      this.isUserLogged = true;
    } else {
      console.log('non sono loggato');
      // this.router.navigate(['/home']); redirect alla pagina home
      localStorage.removeItem('accessToken');
    }
    console.log('sono loggato?', this.isUserLogged);
  }

  objAccessToken: any = { accessToken: localStorage.getItem('accessToken') };

  objUser: any = {};
  isProfileVisible: boolean = false;

  viewUser() {
    console.log(this.accessToken);

    this.loginService
      .getUserInformation(this.objAccessToken)
      .subscribe((data) => {
        this.objUser = data.data;
        this.isProfileVisible = true;
        console.log(this.objUser);
      });
  }

  viewFilms() {}

  logout() {
    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
    }
    this.router.navigate(['/home']);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
