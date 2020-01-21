import { Injectable } from '@angular/core';
import { IDrives, Drives } from '../models/drives';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriveserveiceService {

  compName: any = [{ id: 1, name: 'zensar' }];

  dData: Array<IDrives> = [
    {
      driveid: 111, compName: [{ id: 1, name: 'zensar' }],
      bond: 1, driveTech: [{ id: 1, name: 'Java' }, { id: 2, name: 'Adv Java' }, { id: 3, name: 'HTML' }],
      ctcOff: [{ id: 1, name: '2 to 2.5lacs' }, { id: 2, name: '3 to 3.5lacs' }], ddComment: 'Zensar drive',
      degreeMinMark: '60 To 65', tenMinMark: '60 To 65', twelveMinMark: '60 To 65', diplomaMinMark: '60 To 65',
      pgMinMark: '60 To 65', driveDate: Date.now(), driveEduBranchCri: [{ id: 1, name: 'IT' }],
      driveEduCri: [{ id: 1, name: 'BCS' }, { id: 2, name: 'BCA' }],
      eGapYears: 1, eGapMonths: 2, oGapYears: 1, oGapMonths: 3, driveJoiningCri: [{ id: 1, name: 'Direct Join' }],
      expReq: [{ id: 1, name: '1 to 2 Years' }], jobLocation: [{ id: 1, name: 'Pune' }], noOfResources: 15,
      passYear: [{ id: 1, name: '2012' }], posDrive: [{ id: 1, name: 'Java Developer' }]
    },
    {
      driveid: 112, compName: [{ id: 1, name: 'TCS' }],
      bond: 1, driveTech: [{ id: 1, name: 'Java' }, { id: 2, name: 'Adv Java' }, { id: 3, name: 'HTML' }],
      ctcOff: [{ id: 1, name: '2 to 2.5lacs' }, { id: 2, name: '3 to 3.5lacs' }], ddComment: 'TCS drive',
      degreeMinMark: '60 To 65', tenMinMark: '60 To 65', twelveMinMark: '60 To 65', diplomaMinMark: '60 To 65',
      pgMinMark: '60 To 65', driveDate: Date.now(), driveEduBranchCri: [{ id: 1, name: 'IT' }],
      driveEduCri: [{ id: 1, name: 'BCS' }, { id: 2, name: 'BCA' }],
      eGapYears: 1, eGapMonths: 2, oGapYears: 1, oGapMonths: 3, driveJoiningCri: [{ id: 1, name: 'asdasd' }],
      expReq: [{ id: 1, name: '1 to 2 Years' }], jobLocation: [{ id: 1, name: 'Pune' }], noOfResources: 95,
      passYear: [{ id: 1, name: '2012' }], posDrive: [{ id: 1, name: 'Java Developer' }]
    },
    {
      driveid: 141, compName: [{ id: 1, name: 'Capgemini' }],
      bond: 4, driveTech: [{ id: 1, name: 'Java' }, { id: 2, name: 'Adv Java' }, { id: 3, name: 'HTML' }],
      ctcOff: [{ id: 1, name: '2 to 2.5lacs' }, { id: 2, name: '3 to 3.5lacs' }], ddComment: 'Capg drive',
      degreeMinMark: '60 To 65', tenMinMark: '60 To 65', twelveMinMark: '60 To 65', diplomaMinMark: '60 To 65',
      pgMinMark: '60 To 65', driveDate: Date.now(), driveEduBranchCri: [{ id: 1, name: 'IT' }],
      driveEduCri: [{ id: 1, name: 'BCS' }, { id: 2, name: 'BCA' }],
      eGapYears: 1, eGapMonths: 2, oGapYears: 1, oGapMonths: 3, driveJoiningCri: [{ id: 1, name: 'asdasd' }],
      expReq: [{ id: 1, name: '1 to 2 Years' }], jobLocation: [{ id: 1, name: 'Pune' }], noOfResources: 35,
      passYear: [{ id: 1, name: '2012' }], posDrive: [{ id: 1, name: 'Java Developer' }]
    },
    {
      driveid: 151, compName: [{ id: 1, name: 'Thinkquotient' }],
      bond: 1, driveTech: [{ id: 1, name: 'Java' }, { id: 2, name: 'Adv Java' }, { id: 3, name: 'HTML' }],
      ctcOff: [{ id: 1, name: '2 to 2.5lacs' }], ddComment: 'think drive',
      degreeMinMark: '60 To 65', tenMinMark: '60 To 65', twelveMinMark: '60 To 65', diplomaMinMark: '60 To 65',
      pgMinMark: '60 To 65', driveDate: Date.now(), driveEduBranchCri: [{ id: 1, name: 'IT' }],
      driveEduCri: [{ id: 1, name: 'BCS' }, { id: 2, name: 'BCA' }],
      eGapYears: 1, eGapMonths: 2, oGapYears: 1, oGapMonths: 3, driveJoiningCri: [{ id: 1, name: 'Think Training' }],
      expReq: [{ id: 1, name: '1 to 2 Years' }], jobLocation: [{ id: 1, name: 'Pune' }], noOfResources: 5,
      passYear: [{ id: 1, name: '2012' }], posDrive: [{ id: 1, name: 'Java Developer' }]
    }
  ];

  constructor(private httpPostReq: HttpClient) {
  }

  getAllDriveByFlagApiService(filtFlag: number) {

    return this.httpPostReq.post("url", filtFlag);

  }

  getAllDrive(): Observable<IDrives[]> {
    this.dData.push = this.compName;

    return of(this.dData);
  }

  getDriveById(id: number) {
    var drive = this.dData.find(item => item.driveid === id)
    return of(drive);
  }

  deleteDrive(driveData: IDrives): IDrives[] {
    const index = this.dData.findIndex(item => item.driveid === driveData.driveid)
    const deletedItem = this.dData.splice(index, 1);
    return deletedItem;
  }

}
