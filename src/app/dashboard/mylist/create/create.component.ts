import { Component, OnInit, Output, EventEmitter, OnDestroy  } from '@angular/core';
import { Bike } from '../../../bike';
import { BikeService } from '../../../services/bike.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnDestroy, OnInit {
  createErrors: string[] = [];
  bike = new Bike();
  bikes: Array<Bike> = [];
  sub: Subscription;

  @Output()
  newBike = new EventEmitter<Bike>();

  constructor(
    private bikeService: BikeService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  ngOnInit(): void{
    this.sub = this.bikeService.getBikes()
      .subscribe(bikes => {
        this.bikes = bikes;
      },
      (response) => {
        console.log('there was an error!');
      }
    );
  }


  onSubmit(event: Event, form: NgForm){
    event.preventDefault();
    console.log('navigate pls')

    this.sub = this.bikeService.addBike(this.bike)
    .subscribe(bike => {
      this.newBike.emit(bike);
      this.bike = new Bike();
      form.reset();
    }, (response) => {
    });


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
