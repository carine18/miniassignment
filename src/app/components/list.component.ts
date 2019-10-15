import { Component, OnInit, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
   
  list = [];
  albumName: string = '';
  artist1: string = '';
  rating: number; //=5
  image: string 

  constructor() { }

  ngOnInit() {
  }
 
  addItem(value: any) {
    if (value != null) {
      if(typeof value.rating == "undefined"){
        value.rating = 5
      };
      if(typeof value.image == "undefined"){
        value.image = "https://upload.wikimedia.org/wikipedia/commons/b/b6/12in-Vinyl-LP-Record-Angle.jpg"
      };
      this.list.push(value);
      console.log(value.image);
      localStorage.setItem('list', JSON.stringify(this.list));
    }
  }

  editItem(item) {
    this.list = this.list.filter(obj => {
      return this.albumName !== obj.albumName;
    })
    this.albumName = item.albumName;  
    this.artist1 = item.artist;  //item: Tied to name="", [(ngModel)]="artist1"
    this.rating = item.rating;
    this.image = item.image;
  }

  deleteItem(item) {
    this.list = this.list.filter(obj => {
      return this.albumName !== obj.albumName;
    });
    localStorage.setItem('list', JSON.stringify(this.list));
  }  

}
