import { auditDetails } from './auditDetails';

export class auditRequest 
{
    //ProjectId: number = 0;
    ProjectName: string = '';
    ProjectManagerName: string|null = '' ;
    ApplicationOwnerName: string = '';
    auditDetail: auditDetails = new auditDetails();
}