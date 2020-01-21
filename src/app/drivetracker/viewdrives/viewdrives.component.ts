import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { DriveserveiceService } from '../services/driveserveice.service';
import { DatePipe } from '@angular/common';
import { CallApisService } from 'src/app/shared/services/call-apis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewdrives',
  templateUrl: './viewdrives.component.html',
  styleUrls: ['./viewdrives.component.css'],
  providers: [DatePipe],
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
  }` ]
  
})

export class ViewdrivesComponent implements OnInit {

  i:number=0;
  pipe: DatePipe;
  navbarOpen = false;
  public searchText: any = '';

    constructor(private dtservice: DriveserveiceService, private callApiServ: CallApisService, private datePipe: DatePipe) { }
  singleDropdownSettings: any = {};
  //dropdownList:any[];

  @ViewChild('divtToCloseDropDown') divtToCloseDropDown: ElementRef;// this is custom logic close the drpdwn clicked on other
  ngOnInit() {
      this.singleDropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      allowSearchFilter: true,
      closeDropDownOnSelection: true
    };
        //this.dtservice.getAllDrive().subscribe(res=>this.driveslist=res);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

driveslist: any=[];
filterData:any={};
selectedFlag:number=0;
  
//hide date div
isShownOnDateRange=false;
isShownOnDate=false;
jsonresp:any=[];
getDriveListByFilterFlag(event:any) {
 
  this.startDate='';
  this.endDate='';
  this.selectedDate='';

  if((this.selectedFlag == 4)){
    this.isShownOnDateRange=false;
    this.isShownOnDate=true;
  }
  if((this.selectedFlag ==5) ){
    this.isShownOnDateRange=true;
    this.isShownOnDate=false;
  }
  if(this.selectedFlag == 1 || this.selectedFlag ==2 || this.selectedFlag == 3 || this.selectedFlag==6){
    this.driveslist=[];
    this.isShownOnDateRange=false;
    this.isShownOnDate=false;
    this.filterData.ACT = "ACTFILTERD";
    this.filterData.OPT = "OPTFILTERD";
    this.filterData.TPO = "TPO";
    this.filterData.FILTERFLAG=this.selectedFlag;
    this.callApiServ.getAllDriveByFlagApiService(this.filterData).subscribe((data) => {
    this.jsonresp=data;
    this.driveslist = this.jsonresp.DRIFILLIST;
    if (!this.driveslist) {
      Swal.fire({
        title: 'Error',
        text: 'Their is no any drive found',
        type: 'error',
        showCancelButton: false,
        timer: 3000
      });
      return false;
    }
    })
    }
 
}

selectedDate:string='';
getDriveListBySingleDate(event:any) {
  this.driveslist=[];
    this.filterData.ACT = "ACTFILTERD";
    this.filterData.OPT = "OPTFILTERD";
    this.filterData.TPO = "TPO";
    this.filterData.SELEDATE = this.datePipe.transform(this.selectedDate,"yyyy-MM-dd");
    this.filterData.FILTERFLAG = this.selectedFlag;
    console.log(this.filterData)
    this.callApiServ.getAllDriveByFlagApiService(this.filterData).subscribe((data: any[]) => {
      this.jsonresp=data;
      this.driveslist = this.jsonresp.DRIFILLIST;
      if (!this.driveslist) {
        Swal.fire({
          title: 'Error',
          text: 'Their is no any drive found',
          type: 'error',
          showCancelButton: false,
          timer: 3000
        });
        return false;
      }
     })
  }

  startDate:string='';
  endDate:string='';

  getDriveListByDateRange(event:any) {
    this.driveslist=[]; 
    this.filterData.ACT = "ACTFILTERD";
    this.filterData.OPT = "OPTFILTERD";
    this.filterData.TPO = "TPO";
    this.filterData.STARTDATE =this.datePipe.transform( this.startDate,"yyyy-MM-dd");
    this.filterData.ENDDATE = this.datePipe.transform( this.endDate,"yyyy-MM-dd");
    this.filterData.FILTERFLAG=this.selectedFlag;
     this.callApiServ.getAllDriveByFlagApiService(this.filterData).subscribe((data: any[]) => {
      this.jsonresp=data;
      this.driveslist = this.jsonresp.DRIFILLIST;
      if (!this.driveslist) {
        Swal.fire({
          title: 'Error',
          text: 'Their is no any drive found',
          type: 'error',
          showCancelButton: false,
          timer: 3000
        });
        return false;
      }
    })
     
  }

}




