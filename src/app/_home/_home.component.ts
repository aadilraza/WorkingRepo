import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { XTestService } from '../xtest.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'home-app',
  templateUrl: './_home.html',
})
export class _homeComponent {
  constructor(private router: Router,private xservice: XTestService ) { }
  error = 'asdasd';



 
 
 
}
