import { auditDetails } from './auditDetails';

export class auditRequest 
{
    //ProjectId: number = 0;
    projectName!: string ;
    managerName!: string|null ;
    auditDetail: auditDetails = new auditDetails();
}