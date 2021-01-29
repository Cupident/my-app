import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keyWords: String="";
  public keyList: any[] = [];
  public key?:any;
  constructor() { }

  ngOnInit(): void {
  }
  doSearch() {

    if (this.keyList.indexOf(this.keyWords) == -1) {
          this.keyList.push(this.keyWords);
    }
    this.keyWords = '';
  }
  deletHistory(key:any) {
    this.keyList.splice(key, 1);
  }

}
