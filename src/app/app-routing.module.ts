import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/admin/list/list.component';
import { AddComponent } from './pages/admin/add/add.component';
import { EditComponent } from './pages/admin/edit/edit.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomePageComponent } from './pages/clients/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },

  {
    path: 'admin',
    canActivate:[AuthGuard],
    children: [
      {path: "",redirectTo:"products",pathMatch:'full'},
      {path:"products",component: ListComponent},
      { path: 'products/add', component: AddComponent },
      { path: 'products/:id/edit', component: EditComponent },
    ],
  },

  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

  {path:"**",component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
