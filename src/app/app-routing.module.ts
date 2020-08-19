import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TelemetriaSensorizadaComponent } from './telemetria-sensorizada/telemetria-sensorizada.component';
import { TelemetriaObdComponent } from './telemetria-obd/telemetria-obd.component';
import { TelemetriaCanComponent } from './telemetria-can/telemetria-can.component';
import { JornadaTrabalhoComponent } from './jornada-trabalho/jornada-trabalho.component';
import { RoteirizadorEntregasComponent } from './roteirizador-entregas/roteirizador-entregas.component';
import { GestaoFrotaTerceirizadaComponent } from './gestao-frota-terceirizada/gestao-frota-terceirizada.component';
import { AppCheckListOsComponent } from './app-check-list-os/app-check-list-os.component';
import { VideosDemonstracaoComponent } from './videos-demonstracao/videos-demonstracao.component';


const routes: Routes = [  
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'home', pathMatch: 'full', component: HomeComponent},
  {path: 'sobre-nos', pathMatch: 'full', component: SobreNosComponent},
  {path: 'telemetria-sensorizada', pathMatch: 'full', component: TelemetriaSensorizadaComponent},
  {path: 'telemetria-obd', pathMatch: 'full', component: TelemetriaObdComponent},
  {path: 'telemetria-can', pathMatch: 'full', component: TelemetriaCanComponent},
  {path: 'jornada-trabalho', pathMatch: 'full', component: JornadaTrabalhoComponent},
  {path: 'roteirizador-entregas', pathMatch: 'full', component: RoteirizadorEntregasComponent},
  {path: 'gestao-frota-terceirizada', pathMatch: 'full', component: GestaoFrotaTerceirizadaComponent},
  {path: 'app-check-list-os', pathMatch: 'full', component: AppCheckListOsComponent},
  {path: 'videos-demonstracao', pathMatch: 'full', component: VideosDemonstracaoComponent},
  {path: '404', component: NotfoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
