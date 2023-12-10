import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { VirtualizacionComponent } from './virtualizacion/virtualizacion.component';
import { MatrizRiesgosComponent } from './matriz-riesgos/matriz-riesgos.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { SegmentacionComponent } from './segmentacion/segmentacion.component';
import { InformesComponent } from './informes/informes.component';


const routes: Routes = [
  { path: 'informes', component: InformesComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', component: LoginComponent },
  {
    path: 'virtualizacion',
    component: VirtualizacionComponent,
    children: [
      { path: 'diagnostico', component: DiagnosticoComponent },
      { path: 'segmentacion', component: SegmentacionComponent }
    ]
  },
  { path: 'matriz-riesgos', component: MatrizRiesgosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
