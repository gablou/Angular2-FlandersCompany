import { Injectable } from '@angular/core';
import { Villain } from "./villain";
import { VILLAIN } from "./mock-villain";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VillainService {
  private heroesUrl = 'app/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  getVillain():  Promise<Villain[]>{
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Villain[])
      .catch(this.handleError);
  }

  update(villain: Villain): Promise<Villain> {
    const url = `${this.heroesUrl}/${villain.id}`;
    return this.http
      .put(url, JSON.stringify(villain), {headers: this.headers})
      .toPromise()
      .then(() => villain)
      .catch(this.handleError);
  }

  create(name: string): Promise<Villain> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getVillainById(id: number): Promise<Villain> {
    return this.getVillain()
               .then(villains => villains.find(villain => villain.id === id));
  }
}
