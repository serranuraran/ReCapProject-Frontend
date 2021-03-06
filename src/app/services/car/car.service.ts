import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../../models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {


    apiUrl= "https://localhost:44352/api/cars/getcardetails";
    constructor(private httpClient:HttpClient) { }
  
    getCar():Observable<CarResponseModel>{
      return this.httpClient.get<CarResponseModel>(this.apiUrl);
    }
    
}