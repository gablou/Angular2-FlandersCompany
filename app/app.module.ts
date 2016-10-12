import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { VillainDetailComponent } from "./villain-detail.component";
import { VillainService } from "./villain.service";
import { VillainComponent } from "./villain.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: "villains",
        component: VillainComponent
      },{
        path: "dashboard",
        component: DashboardComponent
      },{
        path: "detail/:id",
        component: VillainDetailComponent
      },{
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      }
    ])
  ],
  declarations: [
    AppComponent,
    VillainDetailComponent,
    VillainComponent,
    DashboardComponent
  ],
  providers: [
    VillainService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
