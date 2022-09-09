import { Injectable } from '@angular/core';
import { auditDetails } from './Models/auditDetails';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  auditdetails : auditDetails;
  constructor() {
      this.auditdetails = new auditDetails();
   }
   setAuditDetails(auditDetail : auditDetails)
   {
      this.auditdetails=auditDetail;
      console.log(this.auditdetails);
   }
  getAuditDetails()
  {
    return this.auditdetails;
  }
}
