import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { componentFactoryName } from "@angular/compiler";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { HomeComponent } from "./pages/home/home.component";
import { StagetheaComponent } from "./pages/stagethea/stagethea.component";
import { VeillesComponent } from "./pages/veilles/veilles.component";

const routes: Routes = [
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "projects",
    component: ProjectsComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "stage/Thea",
    component: StagetheaComponent
  },
  {
    path: "veille",
    component: VeillesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
