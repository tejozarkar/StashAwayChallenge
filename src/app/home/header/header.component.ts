import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;

  @Output() search = new EventEmitter();

  public searchQuery: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch(query: string): void{
    this.search.emit(query);
  }

}
