import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Villain } from './villain';
import { VillainService } from "./villain.service";

@Component({
    selector: 'my-villain',
    moduleId: module.id,
    templateUrl: "villain.component.html",
    styleUrls: ['villain.component.css']
})
export class VillainComponent implements OnInit {
  villains: Villain[];
  selectedVillain: Villain;

  constructor(
    private router: Router,
    private  villainService: VillainService
  ) { }

  ngOnInit():void {
    this.getVillain();
  }

  getVillain(): void {
    this.villainService.getVillain().then(villains => this.villains = villains);
  }

  gotoDetail(): void {
    let link = ["/detail", this.selectedVillain.id];
    this.router.navigate(link);
  }

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }

}
