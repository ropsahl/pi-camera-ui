import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LyTheme2} from '@alyle/ui';

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

  constructor(private theme: LyTheme2) {
  }

  hero = 'Windstorm';

  ngOnInit(): void {
  }

}
