import {Injectable} from '@angular/core';
import {Feature} from '../model/feature';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  private backendService = 'http://localhost:8090/features';
  private data: {
    features: Feature[];
  } = {features: []};

  constructor(private http: HttpClient) {
  }

  // // tslint:disable-next-line:ban-types
  addFeature(f: Feature): void {
    this.http.post(this.backendService, f).subscribe(
      response => {
        console.log(response);
        const featureMap = response as Feature[];
        this.data.features = featureMap;
      },
      error => {
        console.log(error);

      });
  }


  // addFeatureTemp(f: Feature): void {
  //
  //   this.features.push(f);
  //
  // }

  getFeatures(): { features: Feature[] } {

    this.http.get(this.backendService).subscribe(
      response => {
        console.log(response);
        const featureMap = response as Feature[];
        this.data.features = featureMap;
      },
      error => {
        console.log(error);

      });

    return this.data;
  }

}
