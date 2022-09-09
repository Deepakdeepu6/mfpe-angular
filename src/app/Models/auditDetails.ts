export class auditDetails  
{
    auditType:string;
    auditDate:Date;
    ListOfQuestions:string[];

    constructor()
    {
        this.auditType="";
        this.auditDate = new Date(); 
        this.ListOfQuestions=[];
    }

}