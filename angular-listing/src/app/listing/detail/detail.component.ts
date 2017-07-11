import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Listing } from '../listing';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public listing: Listing;
  public errorMessage: string;
  
  constructor(private listingService: ListingService, private route: ActivatedRoute, private location: Location, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.listingService.getListing(+params.get('id')))
      .subscribe(listing => this.listing = listing);
  }

  deleteListing(id: number): void {
    this.listingService.deleteListing(id).subscribe(
      response => this.router.navigate(['/'], { relativeTo: this.route }),
      error => this.errorMessage = error
    );
  }
}
