import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { FinaceiroComponent } from './modules/finaceiro/finaceiro.component';
import { FiscalComponent } from './modules/fiscal/fiscal.component';
import { PessoasComponent } from './modules/pessoas/pessoas.component';

const appRoutes: Routes = [{ path: '', component: HomeComponent},

{ path: 'financeiro', component: FinaceiroComponent },
{ path: 'fiscal', component: FiscalComponent },
{ path: 'pessoas', component: PessoasComponent },

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

export const routing = RouterModule.forRoot(appRoutes);
