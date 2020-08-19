import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SobreNosComponent,
    NotfoundComponent,
    TelemetriaSensorizadaComponent,
    TelemetriaObdComponent,
    TelemetriaCanComponent,
    JornadaTrabalhoComponent,
    RoteirizadorEntregasComponent,
    GestaoFrotaTerceirizadaComponent,
    AppCheckListOsComponent,
    VideosDemonstracaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
