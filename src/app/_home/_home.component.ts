import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../app.service';
import { XTestService } from '../xtest.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'home-app',
  templateUrl: './_home.html',
})
export class _homeComponent {
  constructor(public userService: AppState,private router: Router,private xservice: XTestService ) { }
  error = 'asdasd';



 
 
 
}
