import { ILookup } from './lookup';



export interface IDrives {
    driveid:number;
    compName: Array<ILookup>;
    posDrive: Array<ILookup>; 
	driveTech: Array<ILookup>;  //multi
    expReq:Array<ILookup>; 
    ctcOff:Array<ILookup>;
    bond: number;
    noOfResources: number;
    jobLocation: Array<ILookup>; //multi
    driveJoiningCri: Array<ILookup>;
    driveDate: number;
    ddComment: String;
    eGapYears: number;
    eGapMonths: number;
    oGapYears: number;
    oGapMonths: number;
    driveEduCri: Array<ILookup>;	//multi
    driveEduBranchCri: Array<ILookup>;//multi
    tenMinMark: string;
    twelveMinMark: string;
    diplomaMinMark: string;
    degreeMinMark: string;
    pgMinMark: string;
	passYear: Array<ILookup>;  //multi
    
}

export class Drives{

    driveid:number;
    compName:ILookup[];
    posDrive: ILookup[];
    driveTech: ILookup[];
    expReq: ILookup[];
    ctcOff: ILookup[];
    bond: number;
    noOfResources: number;
    jobLocation: ILookup[];
    driveJoiningCri: ILookup[];
    driveDate: string;
    ddComment: String;
    eGapYears: number;
    eGapMonths: number;
    oGapYears: number;
    oGapMonths: number;
    driveEduCri: ILookup[];
    driveEduBranchCri: ILookup[];
    tenMinMark: string;
    twelveMinMark: string;
    diplomaMinMark: string;
    degreeMinMark: string;
    pgMinMark: string;
    passYear: ILookup[]; 

    constructor(
        compName: Array<ILookup>,   
        posDrive?: Array<ILookup>,
        driveTech?: Array<ILookup>,
        expReq?:Array<ILookup>,
        ctcOff?:Array<ILookup>,
        bond?:number,
        noOfResources?:number,
        jobLocation?: Array<ILookup>,
        driveJoiningCri?:Array<ILookup>,
        driveDate?:Date,
        driveTime?:String,
        ddComment?:string,
        eGapYears?:string,
        eGapMonths?:string,
        oGapYears?:string,
        oGapMonths?:string,
        driveEduCri?: Array<ILookup>,
        driveEduBranchCri?: Array<ILookup>,
        tenMinMark?:string,
        twelveMinMark?:string,
        diplomaMinMark?:string,
        degreeMinMark?:string,
        pgMinMark?:string,
        passYear?: Array<ILookup>){  
            
    }
      
}
