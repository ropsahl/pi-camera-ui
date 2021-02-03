import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LyTheme2} from '@alyle/ui';
import {ConfigService} from '../config.service';
import {ParameterName} from '../parameterNames';
import {CameraConfig} from '../cameraConfig';
import {AppComponent} from "../app.component";

const STYLES = ({
  slider: {
    display: 'block',
    padding: '16px'
  }
});

@Component({
  selector: 'app-config-editor',
  templateUrl: './config-editor.component.html',
  styleUrls: ['./config-editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ConfigEditorComponent implements OnInit {
  readonly classes = this.theme.addStyleSheet(STYLES);

  pNames: ParameterName[] = [{name: 'en'}, {name: 'to'}];

  constructor(private theme: LyTheme2,
              private configService: ConfigService) {
    this.getParameters();
  }


  ngOnInit(): void {
    this.getParameters();
  }

  getParameters(): void {
    this.configService.getParameterNames()
      .subscribe(names =>
        this.pNames = names);
  }

  getParameter(parameter: string): void {
    this.configService.getParameterValues(parameter)
      .subscribe(values =>
        this.pNames = values);
  }

  getNewPicture(): void {
    this.configService.newPicture().subscribe(config => AppComponent.cameraConfig = config);
  }

}
