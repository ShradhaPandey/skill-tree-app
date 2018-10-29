import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MazeComponent } from './maze/maze.component';
import { FireballComponent } from './maze/fireball/fireball.component';
import { ElectroshockComponent } from './maze/fireball/electroshock/electroshock.component';
import { FreezeComponent } from './maze/fireball/freeze/freeze.component';
import { ThunderboltComponent } from './maze/fireball/electroshock/thunderbolt/thunderbolt.component';
import { SnowstormComponent } from './maze/fireball/freeze/snowstorm/snowstorm.component';
import { WarriorComponent } from './warrior/warrior.component';
import { StrikeComponent } from './warrior/strike/strike.component';
import { HitComponent } from './warrior/hit/hit.component';
import { DoublestrikeComponent } from './warrior/strike/doublestrike/doublestrike.component';
import { SlashComponent } from './warrior/strike/slash/slash.component';
//import { RoundhousekickComponent } from './warrior/strike/slash/roundhousekick/roundhousekick.component';
import { KnockoutComponent } from './warrior/hit/knockout/knockout.component';
import { RoundhousekickComponent } from './warrior/roundhousekick/roundhousekick.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MazeComponent,
    FireballComponent,
    ElectroshockComponent,
    FreezeComponent,
    ThunderboltComponent,
    SnowstormComponent,
    WarriorComponent,
    StrikeComponent,
    HitComponent,
    DoublestrikeComponent,
    SlashComponent,
    KnockoutComponent,
    RoundhousekickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
