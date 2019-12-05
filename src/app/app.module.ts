import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObrerosComponent } from './componentes/obreros/obreros.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { FormobreroComponent } from './componentes/formobrero/formobrero.component';

@NgModule({
  declarations: [
    AppComponent,
    ObrerosComponent,
    AcercadeComponent,
    Pagina404Component,
    AreasComponent,
    FormobreroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
