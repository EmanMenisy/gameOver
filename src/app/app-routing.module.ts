import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { RegisterComponent } from './register/register.component';
import { SortbyComponent } from './sortby/sortby.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DataGuard } from './guards/data.guard';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch: 'full'},
  {path:'home',canActivate:[DataGuard], component:HomeComponent},
  {path:'platforms/:plats' ,canActivate:[DataGuard], component:PlatformsComponent},
  {path:'SortedBy/:sorted' ,canActivate:[DataGuard], component:SortbyComponent},
  {path:'category/:category' ,canActivate:[DataGuard], component:CategoryComponent},
  {path:'about' ,canActivate:[DataGuard], component:AboutComponent},
  {path:'details/:id',canActivate:[DataGuard], component:GameDetailsComponent},
  {path:'login', component:LogInComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
