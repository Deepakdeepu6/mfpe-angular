import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  username:string = '';
  password:string = '';
  constructor(private router:Router)
  {
    //this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {
  }

}
