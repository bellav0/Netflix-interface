import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { EmphasisComponent } from './components/content/emphasis/emphasis.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselCardsComponent } from './components/content/carousel-cards/carousel-cards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MovieDetailsComponent } from './components/content/movie-details/movie-details.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ContentComponent,
    EmphasisComponent,
    CarouselCardsComponent,
    MovieDetailsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    CarouselModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [MovieDetailsComponent],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
