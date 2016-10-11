import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Villain } from './villain';
import { VillainService } from "./villain.service";

@Component({
  selector: 'my-dashboard',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  villains: Villain[] = [];

  constructor(
    private router: Router,
    private  villainService: VillainService
  ) { }

  ngOnInit():void {
    this.getVillain();
  }

  getVillain(): void {
    this.villainService.getVillain().then(villains => this.villains = villains.slice(1,5));
  }

  gotoDetail(villain: Villain): void {
    let link = ["/detail", villain.id];
    this.router.navigate(link);
  }
}
