import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { HeroDetailComponent } from './_components/hero-detail/hero-detail.component';
import { HeroesComponent } from './_components/heroes/heroes.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id', component: HeroDetailComponent},
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
