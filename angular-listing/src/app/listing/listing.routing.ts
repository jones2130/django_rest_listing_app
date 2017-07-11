import { CanActivate, Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './form/create/create.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ModifyComponent } from './form/modify/modify.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'create', component: CreateComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: 'edit/:id', component: ModifyComponent }
];

export const routing = RouterModule.forRoot(routes);
