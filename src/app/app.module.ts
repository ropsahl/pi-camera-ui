import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ConfigEditorComponent} from './config-editor/config-editor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LY_THEME, LY_THEME_NAME, LyHammerGestureConfig, LyTheme2, StyleRenderer} from '@alyle/ui';
import {MinimaLight} from '@alyle/ui/themes/minima';
import {LyButtonModule} from '@alyle/ui/button';
import {LySliderModule} from '@alyle/ui/slider';

@NgModule({
  declarations: [
    AppComponent,
    ConfigEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HammerModule,
    LyButtonModule,
    LySliderModule,
  ],
  providers: [StyleRenderer, LyTheme2, {provide: LY_THEME_NAME, useValue: 'minima-light'},
    {provide: LY_THEME, useClass: MinimaLight, multi: true},
    {provide: HAMMER_GESTURE_CONFIG, useClass: LyHammerGestureConfig}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
