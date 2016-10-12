import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Villain } from "./villain";
import { VillainService } from "./villain.service";

@Component({
  selector: 'my-villain-detail',
  moduleId: module.id,
  templateUrl: "villain-detail.component.html",
  styleUrls: ["villain-detail.component.css"]
})
export class VillainDetailComponent implements OnInit {
  constructor(
    private villainService: VillainService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.villainService.getVillainById(id)
        .then(villain => this.villain = villain);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.villainService.update(this.villain)
      .then(() => this.goBack());
  }

  @Input()
  villain: Villain;
}
