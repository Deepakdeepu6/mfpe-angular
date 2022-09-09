import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  imgPath: string = "assets/images/error-404.png";

  constructor() { }

  ngOnInit(): void {
  }

}
