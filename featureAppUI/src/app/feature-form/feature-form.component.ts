import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Client, Feature, Product} from '../model/feature';
import {FeatureService} from '../service/feature.service';


@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.css']
})
export class FeatureFormComponent implements OnInit {

  public clients = Object.keys(Client);
  public products = Object.keys(Product);
  public status = '';

  constructor(private service: FeatureService) {
  }

  ngOnInit(): void {
  }

  resetStatus(): void {
    this.status = '';
  }

  onSubmit(featureForm: NgForm): void {
    const f: Feature = featureForm.value;

    // console.log('Your form data : ', f);
    // this.addFeature(f);

    if (f.title && f.client && f.priority) {
      this.service.addFeature(f);
      this.status = 'Success';

    } else {
      this.status = 'Fill required fields';
    }

  }

  // private addFeature(f: Feature): void{
  //
  //   this.service.addFeature(f)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.status = 'Added   '  ;
  //       },
  //       error => {
  //         this.status = 'Failed';
  //       });
  // }
}

