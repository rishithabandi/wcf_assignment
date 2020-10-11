import {Component, OnInit} from '@angular/core';
import {Feature} from '../model/feature';
import {FeatureService} from '../service/feature.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.css']
})
export class FeatureListComponent implements OnInit {
  public data: { features: Feature[] };

  constructor(private service: FeatureService) {
    this.data = this.service.getFeatures();

  }

  ngOnInit(): void {
  }


}
