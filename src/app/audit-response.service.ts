import { Injectable } from '@angular/core';
import { auditResponse } from './Models/auditResponse';

@Injectable({
  providedIn: 'root'
})
export class AuditResponseService {
  
  auditresponse : auditResponse;
  constructor() {
    this.auditresponse = new auditResponse();
   }
   setResponse(response:auditResponse)
   {
     this.auditresponse=response;
   }
   getResponse():auditResponse
   {
     return this.auditresponse;
   }

}
