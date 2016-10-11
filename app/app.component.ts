import { Component } from '@angular/core';
import { Villain } from './villain';
import { VillainService } from "./villain.service";

@Component({
    selector: 'my-app',
    providers: [VillainService],
    template: `
      <h1>{{title}}</h1>
      <h2>My Villains</h2>
        <ul class="villain">
          <li *ngFor="let villain of villains"
          (click)="onSelect(villain)"
          [class.selected]="villain === selectedVillain"
          >
            <span class="badge">{{villain.id}}</span> {{villain.name}}
          </li>
        </ul>
        <my-villain-detail [villain]="selectedVillain"></my-villain-detail>
    `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .villain {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .villain li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .villain li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .villain li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .villain .text {
      position: relative;
      top: -3px;
    }
    .villain .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = "Flander's Company";
  villains: Villain[];
  selectedVillain: Villain;

  constructor(private  villainService: VillainService) { }

  ngOnInit():void {
    this.getVillain();
  }

  getVillain(): void {
    this.villainService.getVillain().then(villains => this.villains = villains);
  }

  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
  }

}
