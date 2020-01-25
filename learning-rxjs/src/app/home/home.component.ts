import { Component, OnInit } from '@angular/core';

interface Row {
  category: String;
  link: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  headers: String[] = ['#', 'Category', 'Link'];
  rows: Row[] = [
    { category: 'Operators', link: 'operators' },
    { category: 'Subjects', link: 'subjects' },
    { category: 'Recipes', link: 'recipes' },
    { category: 'Concepts', link: 'concepts' },
  ];

}
