import { Injectable } from '@angular/core';
import { Animal } from '../animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tempo } from '../tempo';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiWeather = "https://api.openweathermap.org/data/2.5/weather?lat=-19.912998&lon=-43.940933&appid=2d0f6292800d0990444fdd7fe982b99e"
  private apiUrl = "http://localhost:3000/animals"

  constructor(private http:HttpClient) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }

  getAll(): Observable<Animal[]>{
    return this.http.get<Animal[]>(this.apiUrl);
    
  }

  getwet(): Observable<Tempo> {
    //console.log(this.http.get(this.apiWeather));
    return this.http.get<Tempo>(this.apiWeather);
    
  }
}
