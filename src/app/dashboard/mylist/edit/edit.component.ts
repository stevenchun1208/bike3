import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Bike } from '../../../bike';

import { BikeService } from '../../../services/bike.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  bikes: Array<Bike> = [];
  sub: Subscription;

  constructor(
    private bikeService: BikeService
  ) {}

  ngOnInit(): void {
    this.sub = this.bikeService.getBikes()
      .subscribe(bikes => {
        this.bikes = bikes;
      },
      (response) => {
        console.log('there was an error!');
      }
    );
  }
}
