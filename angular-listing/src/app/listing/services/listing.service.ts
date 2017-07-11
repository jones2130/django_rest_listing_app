import { Injectable } from '@angular/core';

import { Headers, Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Listing } from '../listing';

@Injectable()
export class ListingService {
  private listingURL: string = "/api/listings";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public createListing(listing: Listing):Observable<Response> {
    return this.http.post(`${this.listingURL}/`, listing, this.options)
      .map(res => res.json());
  }

  public deleteListing(id: number):Observable<Response> {
    return this.http.delete(`${this.listingURL}/details/${id}/`, this.options)
      .map(res => res.json());
  }

  public getListing(id: number): Observable<Listing> {
    return this.http.get(`${this.listingURL}/details/${id}/`, this.options)
      .map(res => res.json() as Listing);
  }

  public getListings(): Observable<Listing[]> {
    return this.http.get(`${this.listingURL}/`, this.options)
      .map(res => res.json() as Listing[]);
  }

  public updateListing(data: Listing, id: number):Observable<Response> {
    return this.http.put(`${this.listingURL}/details/${id}/`, data, this.options)
      .map(res => res.json());
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if(error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
