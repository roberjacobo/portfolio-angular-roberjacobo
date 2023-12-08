import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/pages/home/home.component";
import { ExperiencePageComponent } from "./experience/pages/experience-page/experience-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "experience",
    component: ExperiencePageComponent,
  },
  {
    path: "**",
    redirectTo: "/home",
    pathMatch: "full",
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
