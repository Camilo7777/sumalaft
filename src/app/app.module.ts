import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { VirtualizacionComponent } from './virtualizacion/virtualizacion.component';
import { MatrizRiesgosComponent } from './matriz-riesgos/matriz-riesgos.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { SegmentacionComponent } from './segmentacion/segmentacion.component';
import { InformesComponent } from './informes/informes.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    InicioComponent,
    VirtualizacionComponent,
    MatrizRiesgosComponent,
    DiagnosticoComponent,
    SegmentacionComponent,
    InformesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
