export class auditDetails  
{
    auditType:string;
    auditDate:Date;
    auditQuestions:string[];

    constructor()
    {
        this.auditType="";
        this.auditDate = new Date(); 
        this.auditQuestions=[];
    }

}