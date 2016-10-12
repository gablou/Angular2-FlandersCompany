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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.villainService.create(name)
      .then(hero => {
        this.villains.push(hero);
        this.selectedVillain = null;
      });
  }

  delete(villain: Villain): void {
    this.villainService
      .delete(villain.id)
      .then(() => {
        this.villains = this.villains.filter(h => h !== villain);
        if (this.selectedVillain === villain) { this.selectedVillain = null; }
      });
  }

}
