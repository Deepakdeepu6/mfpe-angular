import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditResponseService } from '../audit-response.service';
import { AuditService } from '../audit.service';
import { auditDetails } from '../Models/auditDetails';
import { auditRequest } from '../Models/auditRequest';
import { auditResponse } from '../Models/auditResponse';

@Component({
  selector: 'app-severity',
  templateUrl: './severity.component.html',
  styleUrls: ['./severity.component.css']
})
export class SeverityComponent implements OnInit {

  status : string='';
  requestdata: auditRequest = {
    //ProjectId: 0,
    ProjectManagerName: '',
    ApplicationOwnerName: '',
    ProjectName: '',
    auditDetail: new auditDetails()//this.details
  };
  response : auditResponse = new auditResponse();

  responseCheckFlag : boolean = false;
  statustype:string="table-success";
  
  constructor(private httpClient:HttpClient,private router:Router,private _service:AuditService,private _responseservice:AuditResponseService) {

   }

  ngOnInit(): void {
  }
  saveProjectdetails(projdetails: auditRequest): void
  {
    //console.log(this.details);
    //console.log(projdetails);
    projdetails.auditDetail=this._service.getAuditDetails();
    projdetails.ProjectManagerName=localStorage.getItem("username");
    //projdetails.auditDetail.ListOfQuestions=this.details.ListOfQuestions;
    //["yes","yes","yes","yes","no"];
    //console.log(projdetails);
    this.httpClient.post<auditResponse>("https://localhost:44379/api/ProjectExecutionStatus", projdetails,{
      headers:new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("jwt"))
    }).subscribe(data => {
      this._responseservice.setResponse(data);
      //console.warn(data);
      this.responseCheckFlag = true;
      this.response = data;
      this.router.navigateByUrl("/AuditDetails");
      //console.log(this.response.projectExecutionStatus.length);
    },err =>
    {
      //console.log(err);
      this.router.navigate(["/error"]);
    }); 
  }
}
