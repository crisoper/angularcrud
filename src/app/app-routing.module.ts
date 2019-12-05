import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos las componentes
import { ObrerosComponent } from './componentes/obreros/obreros.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { AreasComponent } from './componentes/areas/areas.component';
import { FormobreroComponent } from './componentes/formobrero/formobrero.component';

const routes: Routes = [

  { 
    path:'acercade',
    component: AcercadeComponent 
  },
  {
    path:'obreros',
    component:ObrerosComponent
  },
  {
    path: 'obreros/crear',
    component: FormobreroComponent
  },
  {
    path:'areas',
    component:AreasComponent
  },
  { path: '',
    redirectTo: '/obreros',
    pathMatch: 'full'
  },

  { 
    path: '**', 
    component: Pagina404Component 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
