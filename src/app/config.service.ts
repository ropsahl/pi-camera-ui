import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

import {ParameterName} from './parameterNames';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configServerUrl = 'http://192.168.86.175:8100/camera_config/config';

  private image = 'http://192.168.86.175:8100/camera_config/camera/';

  constructor(private http: HttpClient) {
  }

  parameterName: ParameterName = {
    name: 'meter',
  };
  parameterNames: ParameterName[] = [{name: 'meter'}, {name: 'flash'}];

  newPicture(): void {
    this.http.post(this.image, '  "config": {\n' +
      '    "contrast": 50,\n' +
      '    "brightness": 50,\n' +
      '    "effects": "none",\n' +
      '    "exposuremode": ""\n' +
      '  },\n' +
      '  "image": {\n' +
      '    "size": {\n' +
      '      "height": 1024,\n' +
      '      "width": 768\n' +
      '    }\n' +
      '  }');
  }

  getParameterNames(): Observable<ParameterName[]> {
    const names = this.http.get<string[]>(this.configServerUrl + '/names');
    return names.pipe(
      map(r =>
        r.map(v =>
          ({name: v}
          )
        )
      )
    );
  }

  getParameterValues(parameter: string): Observable<ParameterName[]> {
    const names = this.http.get<string[]>(this.configServerUrl + '/' + parameter);

    return names.pipe(
      map(r =>
        r.map(v =>
          ({name: v}
          )
        )
      )
    );
  }
}
