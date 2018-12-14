import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { FinaceiroComponent } from './modules/finaceiro/finaceiro.component';
import { FiscalComponent } from './modules/fiscal/fiscal.component';
import { PessoasComponent } from './modules/pessoas/pessoas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

    import { from } from 'rxjs';

const appRoutes: Routes = [{ path: '', component: HomeComponent},

{ path: 'financeiro', component: FinaceiroComponent },
{ path: 'fiscal', component: FiscalComponent },
{ path: 'pessoas', component: PessoasComponent },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'privado', component: PrivadoComponent },
{ path: '**', component: NotFoundComponent },

];

export const routing = RouterModule.forRoot(appRoutes);
