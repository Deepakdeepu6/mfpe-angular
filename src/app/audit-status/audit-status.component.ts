import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditResponseService } from '../audit-response.service';
import { auditResponse } from '../Models/auditResponse';

@Component({
  selector: 'app-audit-status',
  templateUrl: './audit-status.component.html',
  styleUrls: ['./audit-status.component.css']
})
export class AuditStatusComponent implements OnInit {

  response:auditResponse;

  constructor(private _response:AuditResponseService,private router:Router)
  { 
     this.response = _response.getResponse();
  }

  ngOnInit(): void {
  }

}
