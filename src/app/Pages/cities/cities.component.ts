import { Component  } from '@angular/core';
import { Firestore,collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  standalone: true,
  imports: [CommonModule, MatListModule, MatCardModule]
})
export class CitiesComponent {
  cityData!: Observable<any>;
  constructor(private firestore: Firestore) {
    this.getCities();
  }
  getCities() {
    const cityReference = collection(this.firestore, 'cities');

    collectionData(cityReference).subscribe(val => {
      console.log(val);
    })

    this.cityData = collectionData(cityReference);
  }
}
