import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cards';
  posts = [
    {
      title: 'Tree',
      username: 'tree',
      content: 'Tree for everyone, nature and love',
      imageUrl: 'assets/images/tree.jpeg',
    },
    {
      title: 'Biking',
      username: 'biking',
      content: 'huhuuu bycicle time',
      imageUrl: 'assets/images/biking.jpeg',
    },
    {
      title: 'Mountain',
      username: 'mountain',
      content: 'huhuuu mountain hiking time',
      imageUrl: 'assets/images/mountain.jpeg',
    },
  ];
}
