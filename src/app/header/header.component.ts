import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  activeFeature: string;

  constructor() {
    this.activeFeature = 'recipes';
  }

  onSelected(feature: string) {
    this.activeFeature = feature;
    this.featureSelected.emit(feature);
  }
}
