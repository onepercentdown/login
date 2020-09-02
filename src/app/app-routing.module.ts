import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component'
import { PostCreateComponent } from './post/post-create.component';
import { LoginCreateComponent } from './login/login.component';

const routes: Routes = [
  {path: 'login',component:LoginCreateComponent},
  {path:'home',component:PostCreateComponent},
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)

          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const AppRoutingModule = RouterModule.forRoot(routes);
