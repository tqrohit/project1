import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDrives } from 'src/app/drivetracker/models/drives';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApisService {

  constructor(private http: HttpClient) { }

headers:Headers;

API_CALL_URL:string='http://localhost:9090/DRIVETRACKER/ServletAjax';
 

createNewDriveApiService(data):Observable<IDrives[]> {
        return this.http.post<IDrives[]>(this.API_CALL_URL, data);
  }

  featchDTFormData(data){
   
      return this.http.post(this.API_CALL_URL, data);
  }

  
  getAllDriveByFlagApiService(filterData: any) {
    
    return this.http.post(this.API_CALL_URL, filterData);
  }

}
