import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ListingService } from '../services/listing.service';

import { Listing } from '../listing';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public listings: Listing[];
  public errorMessage: string;

  constructor(private listingService: ListingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.listingService.getListings().subscribe(
      listings => this.listings = listings,
      error => this.errorMessage = <any>error
    );
  }

  showDetails(id: number): void {
    this.router.navigate(['/details', id], { relativeTo: this.route });
  }
}
