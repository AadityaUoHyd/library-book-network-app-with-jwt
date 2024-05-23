import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../../../services/token/token.service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    firstname='admin';
    constructor(private service : TokenService){}

    ngOnInit(): void {

      this.firstname=this.service.tokenFirstName();

      const linkColor = document.querySelectorAll('.nav-link');
      linkColor.forEach(link => {
        if (window.location.href.endsWith(link.getAttribute('href') || '')) {
          link.classList.add('active');
        }
        link.addEventListener('click', () => {
          linkColor.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        });
      });

    }

    logout() {
      localStorage.removeItem('token');
      window.location.reload();
    }
}
