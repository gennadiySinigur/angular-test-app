import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { RandomUserData } from '../../models/randomUserData';
import { RandomUser } from '../../models/randomUser';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<RandomUser> {
    return this.http.get<RandomUserData>('https://randomuser.me/api/').pipe(
      map((data: RandomUserData): RandomUser => data.results[0])
    );
  }
}
