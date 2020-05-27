import { SearchService } from './search.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor(private fb: FormBuilder, private search: SearchService) { }

  searchForm: FormGroup;
  searchInput = '';
  terms;
  result;

  @Output() response = new EventEmitter();

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: [null, [Validators.required]]
    });
  }

  submitSearch() {
    this.terms = this.searchForm.controls.searchInput.value;
    if (this.terms === null || this.terms === '') {
      this.response.emit('Preencha a busca para prosseguir!');
    } else {
      this.search.doSearch(this.terms).subscribe(
        (res) => {
          console.log(res);
          this.result = res;
          // this.response.emit(res);
        },
        (err) => {
          console.log(err);
          this.response.emit('Sem resultados!');
        }
      );
    }
  }

  list(){

  }

}
