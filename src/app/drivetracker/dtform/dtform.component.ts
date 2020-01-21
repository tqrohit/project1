import { Component, OnInit, Renderer2, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CallApisService } from 'src/app/shared/services/call-apis.service';

import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-dtform',
  templateUrl: './dtform.component.html',
  styles: [`
  
/*  multiselect dropdown plugin style*/
:host ::ng-deep>>> .multiselect-dropdown .dropdown-btn{
  margin: 20px auto !important;
  padding: 10px 0 !important;
  border: none !important;
  border-bottom: solid 1px #e21567 !important;
  outline: none !important;
  color: #757070 !important;
border-radius:0px !important;}

:host ::ng-deep>>> .multiselect-dropdown .dropdown-btn .dropdown-down {
  border-top: 5px solid #adadad !important;
  border-left: 5px solid transparent !important;
  border-right: 5px solid transparent !important;
}

:host ::ng-deep>>> .multiselect-dropdown .dropdown-btn .dropdown-up{
  border-bottom: 5px solid #adadad !important;
  border-left: 5px solid transparent !important;
  border-right: 5px solid transparent !important;
}
  :host ::ng-deep>>> .multiselect-item-checkbox input[type=checkbox] + div:before{
    border: 2px solid #e21567 !important;
}
:host ::ng-deep>>> .multiselect-item-checkbox input[type=checkbox]:checked + div:before{
  background: #e21567 !important;
}

:host ::ng-deep>>> .multiselect-dropdown .dropdown-btn .selected-item{
  border: 1px solid #e21567  !important;
  background: #e21567  !important;
}`  ],

providers:[DatePipe]

})
export class DtformComponent implements OnInit {

  showOtherFlied_: string;
  tempOtherArr: any = ["Other Company", "Other Position", "Other Tech", "Other Experience", "Other CTC", "Other Location"];
 
 
  constructor(private datePipe:DatePipe,private renderer: Renderer2, private elRef: ElementRef, private callApisService: CallApisService, private formBuilder: FormBuilder) {
    this.getDTFormDataFromDB();
  }

  @ViewChild('divtToCloseDropDown') divtToCloseDropDown: ElementRef;// this is custom logic close the drpdwn clicked on other
  
   //multiselect techno
   multiDropdownSettings: any = {};
   singleDropdownSettings: any = {};
   dtForm:FormGroup;

  ngOnInit() {

    this.multiDropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    this.singleDropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };

    this.dtForm = this.formBuilder.group({
      compName: ['', Validators.required],
      ocomp:  ['', Validators.required],
      posDrive: new FormControl(''), opos: new FormControl(''),
      driveTech: new FormControl(''), optech: new FormControl(''),
      expReq: new FormControl(''), oexp: new FormControl(''),
      ctcOff: new FormControl(''), octc: new FormControl(''),
      bond: new FormControl(''),
      noOfResources:  ['', Validators.required],
      jobLocation: new FormControl(''), ojloc: new FormControl(''),
      driveJoiningCri: new FormControl(''),
      driveDate: [''],
      nxtFollwpDate:[''],
      driveTime: new FormControl(''),
      ddComment: new FormControl(''),
      eGapYears: new FormControl(''),
      eGapMonths: new FormControl(''),
      oGapYears: new FormControl(''),
      oGapMonths: new FormControl(''),
      driveEduCri: new FormControl(''),
      driveEduBranchCri: new FormControl(''),
      tenMinMark: new FormControl(''),
      twelveMinMark: new FormControl(''),
      diplomaMinMark: new FormControl(''),
      degreeMinMark: new FormControl(''),
      pgMinMark: new FormControl(''),
      passYear: new FormControl(''),
      studList: new FormControl('')
    });
  }

  /* dtForm = this.formBuilder.group({
    compName: ['', Validators.required],
    ocomp: new FormControl(''),
    posDrive: new FormControl(''), opos: new FormControl(''),
    driveTech: new FormControl(''), optech: new FormControl(''),
    expReq: new FormControl(''), oexp: new FormControl(''),
    ctcOff: new FormControl(''), octc: new FormControl(''),
    bond: new FormControl(''),
    noOfResources: new FormControl(''),
    jobLocation: new FormControl(''), ojloc: new FormControl(''),
    driveJoiningCri: new FormControl(''),
    driveDate: [''],
    nxtFollwpDate:[''],
    driveTime: new FormControl(''),
    ddComment: new FormControl(''),
    eGapYears: new FormControl(''),
    eGapMonths: new FormControl(''),
    oGapYears: new FormControl(''),
    oGapMonths: new FormControl(''),
    driveEduCri: new FormControl(''),
    driveEduBranchCri: new FormControl(''),
    tenMinMark: new FormControl(''),
    twelveMinMark: new FormControl(''),
    diplomaMinMark: new FormControl(''),
    degreeMinMark: new FormControl(''),
    pgMinMark: new FormControl(''),
    passYear: new FormControl(''),
    studList: new FormControl('')
  }); */
  
  companyNames = [];
  reqPosi = [];
  reqExp = [];
  ctcOffered = [];
  reqTechnos = [];
  jobLocations = [];
  educationCri = []; 
  branchCri = [ ];
  years = []; 
  
  joiningCri = [
    { id: 1, name: 'Direct Joining ' },
    { id: 2, name: 'Tarining & Joining ' },
    { id: 3, name: '3 Months Inte & Joining' },
    { id: 4, name: '6 Months Inte & Joining' }
  ];
  tensMarks = [
    { id: 0, name: 'No Criteria' },
    { id: 1, name: '50% and Above' },
    { id: 2, name: '55% and Above' },
    { id: 3, name: '60% and Above' },
    { id: 4, name: '65% and Above' },
    { id: 5, name: '70% and Above' },
    { id: 6, name: '75% and Above' },
    { id: 7, name: '80% and Above' }
  ];

  twelveMarks = this.tensMarks;
  diplomaMarks = this.tensMarks;
  degreeMarks = this.tensMarks;
  pgMarks = this.tensMarks;

  //batch
  batches = [
    //{id: 0, name: '0'},
    { id: 1, name: 'Dec 2018' },
    { id: 2, name: 'Jan 2018' },
    { id: 3, name: 'Feb 2018' },
    { id: 4, name: 'Mar 2018' },
    { id: 5, name: 'Apr 2018' },
    { id: 6, name: 'May 2018' },
    { id: 7, name: 'Jun 2019' },
    { id: 8, name: 'Jul 2019' },
    { id: 9, name: 'Aug 2019' },
    { id: 10, name: 'Sep 2019' },
    { id: 11, name: 'Oct 2019' },
    { id: 12, name: 'Nov 2019' }
  ];
  students = [
    //{id: 0, name: '0'},
    { id: 1, fname: 'Shikhar', lname: 'Dhawan' },
    { id: 2, fname: 'Virat', lname: 'Kohli' },
    { id: 3, fname: 'Rohit', lname: 'Sharma' },
    { id: 4, fname: 'Mahendra Singh', lname: 'Dhoni' },
    { id: 5, fname: 'Hardik', lname: 'Pandya' }
  ];
  //
  //otherFiledsArr = ['showOtherField_1','showOtherField_2','showOtherField_3','showOtherField_4','showOtherField_5','showOtherField_6'];

  showOtherField_1 = false;//company
  showOtherField_2 = false;//posi
  showOtherField_3 = false;//tech
  showOtherField_4 = false;//expr
  showOtherField_5 = false;//ctc
  showOtherField_6 = false;//job loca
  showOtherField_7 = false;//edu cri
  showOtherField_8 = false;//branch cri
  showOtherField_9 = false;//joining cri

  onItemSelect(whichDropDown, item: any) {
    let id = item.id;
    console.log(item);
    if (whichDropDown == 1) {//compName
      if (id == 0) {
        this.showOtherField_1 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_1 = false;
      }
    }
    if (whichDropDown == 2) {
      if (id == 0) {
        this.showOtherField_2 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_2 = false;
      }
    }
    if (whichDropDown == 3) {
      if (id == 0) {
        this.showOtherField_3 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_3 = false;
      }
    }
    if (whichDropDown == 4) {//exp
      if (id == 0) {
        this.showOtherField_4 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_4 = false;
      }
    }
    if (whichDropDown == 5) {
      if (id == 0) {
        this.showOtherField_5 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_5 = false;
      }
    }
    if (whichDropDown == 6) {
      if (id == 0) {
        this.showOtherField_6 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_6 = false;
      }
    }
    if (whichDropDown == 7) {
      if (id == 0) {
        this.showOtherField_7 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_7 = false;
      }
    }
    if (whichDropDown == 8) {
      if (id == 0) {
        this.showOtherField_8 = true;
        this.closeDDShowOther();
      } else {
        this.showOtherField_8 = false;
      }
    }
    this.addClick(whichDropDown);
  }

  onDeItemSelect(whichDropDown, item: any) {
    console.log(item);
    if (whichDropDown == 1) {
      this.showOtherField_1 = false;
    }
    if (whichDropDown == 2) {

      this.showOtherField_2 = false;

    }
    if (whichDropDown == 3) {

      this.showOtherField_3 = false;

    }
    if (whichDropDown == 4) {//exp

      this.showOtherField_4 = false;

    }
    if (whichDropDown == 5) {

      this.showOtherField_5 = false;

    }
    if (whichDropDown == 6) {

      this.showOtherField_6 = false;

    }
    if (whichDropDown == 7) {

      this.showOtherField_7 = false;

    }
    if (whichDropDown == 8) {

      this.showOtherField_8 = false;

    }
    if (whichDropDown == 9) {

      this.showOtherField_9 = false;

    }
  }
  onSelectAll(whichDropDown, items: any) {
    console.log(items);
  }

  closeDDShowOther() {//close other selected dorpdown and show other text box
    this.divtToCloseDropDown.nativeElement.click();
  }

  get f() { return this.dtForm.controls; }

  othcmp: any = { id: 0, name: 'Other Company' };
  othReqPosi: any = { id: 0, name: 'Other Position' };
  othreqExp = { id: 0, name: 'Other Experience' };
  othCtc: any = { id: 0, name: 'Other CTC' };

  othReqTech: any = { id: 0, name: 'Other' };
  othJobLoc: any = { id: 0, name: 'Other Location' };
  othEduCri: any = { id: 0, name: 'Other Cri' };
  othBCri: any = { id: 0, name: 'Other Branch' };
  othYear: any = { id: 0, name: 'Other Year' };
 
  dtDDListReq: any = {};
  dtFormdata: any = {};

  getDTFormDataFromDB() {
    this.dtDDListReq.ACT = "ACTDTFORMDATA";
    this.dtDDListReq.OPT = "OPTDTFORMDATA";
    this.dtDDListReq.ACCTYPE = "TPO";
    this.callApisService.featchDTFormData(this.dtDDListReq).subscribe((data: any) => {
      this.dtFormdata = data.DTFORMDATA;

      this.companyNames = this.dtFormdata.compName;
      this.companyNames.push(this.othcmp);

      this.reqPosi = this.dtFormdata.posDrive;
      this.reqPosi.push(this.othReqPosi);

      this.ctcOffered = this.dtFormdata.ctcOff;
      this.ctcOffered.push(this.othCtc);

      this.reqExp = this.dtFormdata.expReq;
      this.reqExp.push(this.othreqExp);

      this.reqTechnos = this.dtFormdata.driveTech;
      this.jobLocations = this.dtFormdata.jobLocation;
      this.educationCri = this.dtFormdata.eduCri;
      this.branchCri = this.dtFormdata.driveEduBranchCri;
      this.years = this.dtFormdata.passYear;

    });

  }

  dtData: any = {};
  submitted:boolean=false;

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.dtForm.invalid) {
        return;
    }

    this.dtData = this.dtForm.value;
    this.dtData.ACT = "ACTCRDRIVE";
    this.dtData.OPT = "OPTCRDRIVE";
    let a=this.dtData.driveDate;
    this.dtData.driveDate=this.datePipe.transform( this.dtData.driveDate,"dd-MM-yyyy");
    this.dtData.nxtFollwpDate=this.datePipe.transform( this.dtData.nxtFollwpDate,"dd-MM-yyyy");
    console.log(JSON.stringify(this.dtData));
    this.callApisService.createNewDriveApiService(this.dtData).subscribe((data: any) => {
      console.log(data);
    });
  }

  addClick(whichDropDown: number) {
    setTimeout(() => {
      //if()
      let tempOthers = this.elRef.nativeElement.querySelectorAll('.multiselect-dropdown .dropdown-btn .selected-item');
      let selectedItems = this.elRef.nativeElement.querySelectorAll('span a');
      for (let i = 0; i < selectedItems.length; i++) {
        let otherText = (selectedItems[i].parentElement.innerText.slice(0, -1) + '').trim();
        if (otherText == this.tempOtherArr[whichDropDown - 1]) {
          selectedItems[i].addEventListener('click', this.onClickCloseSelDD.bind(this));
        }
      }
    }, 10);
  }

  onClickCloseSelDD(event) {
    console.log('cust close fired');
    let clickedItem = (event.currentTarget.parentElement.innerText.slice(0, -1) + '').trim();
    if (clickedItem == this.tempOtherArr[0]) {
      this.showOtherField_1 = false;
    }
    if (clickedItem == this.tempOtherArr[1]) {
      this.showOtherField_2 = false;
    }
    if (clickedItem == this.tempOtherArr[3]) {
      this.showOtherField_4 = false;
    }
    if (clickedItem == this.tempOtherArr[4]) {
      this.showOtherField_5 = false;
    }
    if (clickedItem == this.tempOtherArr[5]) {
      this.showOtherField_6 = false;
    }

  }
  addedStudCount: number = 0;

  addStudToDrive(curr) {
    this.addedStudCount++;
    // event.currentTarget.style = "display:none";
    // event.currentTarget.nextSibling.style = "display:block !important";
  }
  removeStudFromDrive() {
    if (this.addedStudCount > 0) {
      this.addedStudCount--;
    }
  }
}

export const DateTimeValidator = (fc: FormControl) => {
  const date = new Date(fc.value);
  const isValid = !isNaN(date.valueOf());
  return isValid ? null : {
    isValid: {
      valid: false
    }
  };
};