import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Listing } from '../../listing';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {
  public listing: Listing;
  public editForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];
  public errorMessages: string;

  constructor(private formBuilder: FormBuilder, private listingService: ListingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.listingService.getListing(+params.get('id')))
      .subscribe(listing => {
        this.listing = listing;

        this.editForm = new FormGroup({
          title: new FormControl('', [<any>Validators.required]),
          description: new FormControl('', []),
          author: new FormControl('', []),
          text: new FormControl('', [<any>Validators.required]),
        });

        this.editForm.controls['title'].setValue(this.listing.title, { onlySelf: true });
        this.editForm.controls['description'].setValue(this.listing.description, { onlySelf: true });
        this.editForm.controls['author'].setValue(this.listing.author, { onlySelf: true });
        this.editForm.controls['text'].setValue(this.listing.text, { onlySelf: true });
      });
  }

  save(listing: Listing, isValid: Boolean): void {
    if(isValid) {
      this.listingService.updateListing(listing, this.listing.id).subscribe(
        res => this.router.navigate(['/details', this.listing.id], { relativeTo: this.route }),
        error => this.errorMessages = error
      );
    }
  }

}
