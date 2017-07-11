import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Listing } from '../../listing';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public creationForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public errorMessages: string;

  constructor(private formBuilder: FormBuilder, private listingService: ListingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.creationForm = new FormGroup({
      title: new FormControl('', [<any>Validators.required]),
      description: new FormControl('', []),
      author: new FormControl('', []),
      text: new FormControl('', [<any>Validators.required]),
    })
  }

  save(listing: Listing, isValid: Boolean): void {
    if(isValid) {
      this.listingService.createListing(listing).subscribe(
        res => this.router.navigate(['/list'], { relativeTo: this.route }),
        error => this.errorMessages = error
      );
    }
  }
}
