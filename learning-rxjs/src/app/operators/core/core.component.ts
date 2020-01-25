import { Component, OnInit } from '@angular/core';

interface Operators {
  section: String;
  link: String;
}

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class OperatorsComponent implements OnInit {

  operators: Operators[] = [
    { section: 'Combination', link: 'combination' },
    { section: 'Conditional', link: 'conditional' },
    { section: 'Creation', link: 'creation' },
    { section: 'Error Handling', link: 'error-handling' },
    { section: 'Multicasting', link: 'multicasting' },
    { section: 'Filtering', link: 'filtering' },
    { section: 'Transformation', link: 'transformation' },
    { section: 'Utility', link: 'utility' }
  ];

  constructor() { }

  ngOnInit() {
  }
}
