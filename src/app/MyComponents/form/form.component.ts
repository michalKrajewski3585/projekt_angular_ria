import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule],
})
export class FormComponent {
  constructor(private firestore: Firestore) {}
  onSubmit(f: NgForm) {
    const cityReference = collection(this.firestore, 'cities');
    addDoc(cityReference, f.value).then(() => {
      console.log("Record added successfully")
    })
    .catch((err) => console.log("Error", err))
  }
}
