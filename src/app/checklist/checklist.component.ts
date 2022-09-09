import { HttpClient, HttpHeaders } from '@angular/common/http';
import { auditDetails } from './../Models/auditDetails';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuditService } from '../audit.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

  auditType: string;
  auditDate: Date;
  questions: string[];
  responses: Array<string>;
  responseObject: auditDetails;
  auditTypeStatus = false;
  //auditServiceObject : AuditService;
  
  auditDetailsFlag = true;
  auditSeverityPortalFlag = false;

  //auditdate:any={year:2021,month:3,day:18};
  //var headers_object = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("jwt"));
  constructor(private httpClient:HttpClient,private router:Router,private _service:AuditService) 
  {
    this.auditType = ' ';
    this.questions = [];
    this.auditDate = new Date();
    this.responses = new Array<string>(5);
    this.responseObject = new auditDetails();
    localStorage.setItem("session","true");
    
  }

  ngOnInit(): void {
    
    this.responses=this.responses.fill("No");
    console.log(this.responses);
    
  }
  getQuestions() {
   
  //   this.httpClient.post("https://localhost:44347/api/Authorization", this.loginDetailsObject, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Method': '*'
  //     })
  //   }).subscribe(response => {
  //     const token = (<any>response).token;
 
  //     //console.log(token);
  //     localStorage.setItem("jwt", token);
  //     localStorage.setItem("session","true");
  //     this.router.navigate(["/home"]);
  //   }
  // }

  //   this.httpClient.get<any>("http://localhost:9300/checklist/AuditCheckListQuestions",this.auditType,{
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Method': '*'
  //   }).set("Authorization", "Bearer " + localStorage.getItem("jwt")) }).subscribe((data: any) => {
  //     this.questions = data;
  //   },(err: any) =>
  //   {
  //     console.log(err);
  //     this.router.navigate(["/error"]);
  //   });
  //   this.auditTypeStatus = true;
  // }
  this.httpClient.get<any>("http://localhost:9300/checklist/AuditCheckListQuestions/" + this.auditType,
    {headers: new HttpHeaders({
    }).set("Authorization", "Bearer " + localStorage.getItem("jwt"))}).subscribe(data => {
      this.questions = data;
    },err =>
    {
      //console.log(err);
      this.router.navigate(["/error"]);
    });
    this.auditTypeStatus = true;
  }

  onSelectRadio(index: number, event: Event) {
    this.responses[index] = (event.target as HTMLInputElement).value;
  }
  

  sendResponse() {
    console.log(this.responses);
    this.responseObject.auditType = this.auditType;
    this.responseObject.auditDate = this.auditDate;
    this.responseObject.ListOfQuestions = this.responses;
    console.log(this.responseObject);
    this.auditSeverityPortalFlag=true;
    this.auditDetailsFlag=false;
    this._service.setAuditDetails(this.responseObject);
    this.router.navigateByUrl("/AuditResponse");
    //this.responseDisableStatus=true;
    //this.httpClient.post<auditResponse>("https://localhost:4200/api/checklistResponse", this.responseObject);
  }
}
