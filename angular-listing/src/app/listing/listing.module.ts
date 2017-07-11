import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CreateComponent } from './form/create/create.component';
import { ModifyComponent } from './form/modify/modify.component';
import { DetailComponent } from './detail/detail.component';

import { ListingService } from './services/listing.service';
import { ListComponent } from './list/list.component';

import { routing } from './listing.routing';

@NgModule({
  declarations: [
    CreateComponent,
    ModifyComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    ListingService
  ]
})
export class ListingModule { }
