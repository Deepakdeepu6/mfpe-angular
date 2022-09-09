import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AMSHeaderComponent } from './amsheader/amsheader.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SeverityComponent } from './severity/severity.component';
import { AuthguardServiceService } from './authguard-service.service';
import { AuthenticationGuard } from './authentication.guard';
import { LoginguardService } from './loginguard.service';
import { LoginguardGuard } from './loginguard.guard';
import { HomeComponent } from './home/home.component';
import { AuditStatusComponent } from './audit-status/audit-status.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate:[AuthenticationGuard]
  },
  {    
    path: 'login',
    component: LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'error',
    component: ErrorComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'AuditRequest',
    component: ChecklistComponent,
    canActivate:[AuthenticationGuard]//,LoginguardGuard]
  },
  {
    path: 'AuditResponse',
    component : SeverityComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'AuditDetails',
    component : AuditStatusComponent,
    canActivate:[AuthenticationGuard]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AMSHeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    ErrorComponent,
    ChecklistComponent,
    SeverityComponent,
    HomeComponent,
    AuditStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    [RouterModule.forRoot(routes)],
    HttpClientModule,

  ],
  exports:[RouterModule],
  providers: [
    AuthguardServiceService,
    LoginguardService,
    { provide: LoginguardGuard, useClass: LoginguardGuard }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
