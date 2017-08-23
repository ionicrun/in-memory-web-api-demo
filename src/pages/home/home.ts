import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';

import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public values:string;


  constructor(

    public http: Http

  ) { }


  // get the list of runs
  public getMe() {

    this
      .http
      .get("api/me")
      .map((res: Response) => res.json())
      .subscribe((values) => {

        this.values = values;

      }, (error) => {
        console.error(error);
      });

  }


  // get the list of runs
  public getRuns() {

    this
      .http
      .get("api/runs")
      .map((res: Response) => res.json())
      .subscribe((values) => {

        this.values = values;

      }, (error) => {
        console.error(error);
      });

  }


  // add a new run
  public addRun() {

    this
      .http
      .post("api/runs", JSON.stringify({
        // ommit the id, since it will
        // be added by the API for you
        distance: 12,
        unit: "km"
      }))
      .map((res: Response) => res.json())
      .subscribe((value) => {

        this.values = value;

      }, (error) => {
        console.error(error);
      });

  }


}
