import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlertModule } from "ngx-bootstrap";
import { IconsProviderModule } from "./icons-provider.module";
import { NgZorroAntdModule, NZ_I18N, fr_FR } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import fr from "@angular/common/locales/fr";
import { HeaderComponent } from "./shared/header/header.component";
import { AboutComponent } from "./pages/about/about.component";
import { FooterComponent } from './shared/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HomeComponent } from './pages/home/home.component';
import { StagetheaComponent } from './pages/stagethea/stagethea.component';
import { VeillesComponent } from './pages/veilles/veilles.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutComponent, FooterComponent, ProjectsComponent, HomeComponent, StagetheaComponent, VeillesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule {}
