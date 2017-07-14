import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {ActivatedRoute, PreloadAllModules, RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  template: `
    <div style="background-color: green">
      <div>Angular B!</div>
      <div><a routerLink="/angular_a">Go to Angular A</a></div>
      <div>Go to Angular B</div>
      <div><a routerLink="/angularjs_a">Go to AngularJS A</a></div>
      <div><a routerLink="/angularjs_b">Go to AngularJS B</a></div>
    </div>
  `
})
export class AngularBComponent {
}

@NgModule({
  declarations: [
    AngularBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '**', component: AngularBComponent},
    ])
  ],
  providers: [],
})
export class ComponentBModule { }
