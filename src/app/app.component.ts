import {Component} from '@angular/core';
import {lyl, StyleRenderer, ThemeRef, ThemeVariables} from '@alyle/ui';
import {CameraConfig} from './cameraConfig';

const STYLES = (theme: ThemeVariables, ref: ThemeRef) => {
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: lyl`{
      body {
        background-color: ${theme.background.default}
        color: ${theme.text.default}
        font-family: ${theme.typography.fontFamily}
        margin: 0
        direction: ${theme.direction}
      }
    }`,
    root: lyl`{
      display: block
    }`
  };
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StyleRenderer],
})
export class AppComponent {
  static cameraConfig: CameraConfig = {image: {date: 'missing'}};
  readonly classes = this.sRenderer.renderSheet(STYLES, true);


  title = 'PI Camera';

  constructor(readonly sRenderer: StyleRenderer) {
  }
}
