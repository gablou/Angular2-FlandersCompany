import { Injectable } from '@angular/core';
import { Villain } from "./villain";
import { VILLAIN } from "./mock-villain";

@Injectable()
export class VillainService {
  getVillain():  Promise<Villain[]>{
    return Promise.resolve(VILLAIN);
  }
}
