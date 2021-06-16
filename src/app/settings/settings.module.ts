import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SettingsComponent } from "./components/settings/settings.component";

const routes = [
  {
    path: 'settings',
    component: SettingsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsComponent],

})

export class SettingsModule {}
