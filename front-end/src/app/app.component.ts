import { Component, OnInit } from '@angular/core';
import Cookies from 'js-cookie'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  authed =  false;

  async ngOnInit() {
    // Cookies.set('token', 'initial');
    if(Cookies.get('token')) {
      this.authed = true;
    }
  }
}
