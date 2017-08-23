import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class MockDataProvider implements InMemoryDbService {


  public createDb() {

    // api/me
    let me = {
      name: "John Doe",
      private: true
    };

    // api/runs
    let runs = [{
      id: 1,
      distance: 12,
      unit: "km"
    }, {
      id: 2,
      distance: 16,
      unit: "km"
    }];

    // expose the "endpoints"
    return { me, runs };

  }

}