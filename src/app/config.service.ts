import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ParameterName} from './parameterNames';
import {CameraConfig} from './cameraConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configServerUrl = 'http://192.168.86.175:8100/camera_config/config';

  private image = 'http://192.168.86.175:8100/camera_config/camera';

  constructor(private http: HttpClient) {
  }

  parameterName: ParameterName = {
    name: 'meter',
  };

  parameterNames: ParameterName[] = [{name: 'meter'}, {name: 'flash'}];
  cameraConfig: CameraConfig = {config: {brightness: 50}};
  tmp: CameraConfig = {config: {brightness: 50}};

  newPicture(): Observable<CameraConfig> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const config = this.http.post<CameraConfig>(this.image, this.cameraConfig, httpOptions);
    return config.pipe(
      catchError(this.handleError('newPicture'))
    );
  }

  getConfiguration(): Observable<CameraConfig> {
    const names = this.http.get<string[]>(this.configServerUrl + '/current', {responseType: 'json'});
    return names.pipe(
      catchError(this.handleError('getConfiguration'))
    );
  }

  getParameterNames(): Observable<ParameterName[]> {
    const names = this.http.get<string[]>(this.configServerUrl + '/names', {responseType: 'json'});
    return names.pipe(
      map(r =>
        r.map(v =>
          ({name: v}
          )
        )
      ),
      catchError(this.handleError('getParameterNames'))
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
      ),
      catchError(this.handleError('getParameterNames'))
    );
  }

  private handleError(methodName: string): any {
    return function (p1: any, p2: Observable<string[]>): any {
      console.log('Error' + methodName + p1.error);
      return undefined;
    };
  }
}
