import { Component } from '@angular/core';
import { VillainService } from "./villain.service";

@Component({
    selector: 'my-app',
    providers: [VillainService],
    moduleId: module.id,
    template: `
      <h1>{{title}}</h1>
      <nav>
       <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
       <a routerLink="/villains" routerLinkActive="active">Villains</a>
     </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ["app.componnent.css"]
})
export class AppComponent {
  title = "Flander's Company";
}
