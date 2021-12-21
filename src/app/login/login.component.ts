import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  constructor() { }

  ngOnInit(): void {
  }

}
