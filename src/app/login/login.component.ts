import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-create',
  templateUrl: './login.component.html',
  // styleUrls: ['./post-create.component.css']

})
export class LoginCreateComponent {
  constructor(private router: Router){}

  goToPage(pagename:string):void
  {
    this.router.navigate([`${pagename}`]);
  }

  }



