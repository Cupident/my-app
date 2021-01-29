import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { FormsComponent } from './forms/forms.component';
import { SearchComponent } from './search/search.component'; // <-- NgModel lives here
const routes: Routes = [
  {path:'forms',component:FormsComponent    },
  { path: 'search', component: SearchComponent },
  { path:'**',redirectTo:'forms'}//默认选中的路由


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
