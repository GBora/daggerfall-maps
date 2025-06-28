import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

import regions from "./data/regions.json";
import {CommonModule} from "@angular/common";
import locations from "./data/locations.json";
import {NgSelectModule} from "@ng-select/ng-select";
import {ICity} from "./interfaces/ICity";
import {findCitiesMatch} from "./services/findCitiesMatch";
import {transformServiceCodesToServiceLabels, transformServiceLabelsToServiceCode} from "./services/serviceCodeService";
import availableServices from "./data/locations.json";
import availableRegions from "./data/regions.json";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, NgSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedRegion?: string;
  availableRegions: string[] = regions;
  desiredServices: string[] = [];
  availableServices: string[] = locations;
  matchingCities: ICity[] = [];

  findMatches = (event: any) => {
    console.log(event);
    if (this.selectedRegion && this.desiredServices.length > 0) {
      let serviceCodes = transformServiceLabelsToServiceCode(this.desiredServices);
      this.matchingCities = findCitiesMatch(this.selectedRegion, serviceCodes);
    }
  }

  beautifyServiceCodes = (codes: string[]): string => {
    let labels = transformServiceCodesToServiceLabels(codes);
    let unitedLabel = ""
    labels.forEach((label: string, index) => {
      if (label !== "undefined" && label != undefined) {
        index === 0 ? unitedLabel += label : unitedLabel += `, ${label}`;
      }
    })
    return unitedLabel;
  }
}
