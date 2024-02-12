import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {
@Input()
public placeholder: string = '';
}
