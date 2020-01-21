import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { CallApisService } from './shared/services/call-apis.service';
import { HttpClientModule } from '@angular/common/http';
import { DriveTrackerModule } from './drivetracker/drivetracker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriveserveiceService } from './drivetracker/services/driveserveice.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    HttpClientModule,
    DriveTrackerModule,
    BrowserAnimationsModule,
    
  ],
  providers: [CallApisService,DriveserveiceService],
  bootstrap: [AppComponent],
  
  exports: [  ]
})
export class AppModule { }
