import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';

import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule }from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PessoasComponent } from './modules/pessoas/pessoas.component';
import { FinaceiroComponent } from './modules/finaceiro/finaceiro.component';
import { FiscalComponent } from './modules/fiscal/fiscal.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PrivadoComponent } from './components/privado/privado.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PessoasComponent,
    FinaceiroComponent,
    FiscalComponent,
    RegisterComponent,
    LoginComponent,
    PrivadoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
