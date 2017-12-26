import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MylistComponent } from './dashboard/mylist/mylist.component'
import { BrowseComponent } from './dashboard/browse/browse.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'dashboard',
    children:[
      {
        path: '',
        redirectTo:'browse',
        pathMatch: 'full'
      },
      // {
      //   path:'',
      //   component:BrowseComponent
      // },
      {
        path:'browse',
        component:BrowseComponent
      },
      {
        path:'mylisting',
        component:MylistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
