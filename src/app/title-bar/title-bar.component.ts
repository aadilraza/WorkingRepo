import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    header: any = "This is demo header";
    headerDescription: any = "This is demo header description";
    parentNav: any = "Parent";
    childNav: any = "child";

}
