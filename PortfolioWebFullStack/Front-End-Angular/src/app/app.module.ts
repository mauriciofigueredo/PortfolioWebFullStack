import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogosComponent } from './components/logos/logos.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgChartsModule } from 'ng2-charts';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    FormacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
