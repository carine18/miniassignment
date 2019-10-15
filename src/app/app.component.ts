import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  shareable = false;
   
  ngOnInit() {
    this.shareable = !!navigator['share'];
  };

  sharethejoy() {
    navigator['share']({
      title: 'Vinyl Record',
      text: 'Vinyl Record Collection',
      url: 'carine18.github.io/miniassignment/',
    })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
  };

}