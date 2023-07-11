import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full',},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'projetos', component: PortifolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
