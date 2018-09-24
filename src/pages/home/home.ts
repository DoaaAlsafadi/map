import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map;
  mapTypes = [{
    key: "roadmap",
    name: "Default Map"
  }, {
    key: "satellite",
    name: "Photographic Map"
  }, {
    key: "hybrid",
    name: "Hybrid Map"
  }];

  mapProviders = [{
    key: "google",
    name: "Google Dynamic Map"
  }, {
    key: "googleStatic",
    name: "Google Static Map"
  }, {
    key: "bing",
    name: "Bing Map"
  }];
  constructor(public navCtrl: NavController) { }

}
