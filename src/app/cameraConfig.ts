export interface CameraConfig {
  config?: Config;
  image?: Image;
}

export interface Config {
  contrast?: number;
  brightness?: number;
  meter?: string;
  exposure?: string;
  imageEffects?: string;
}

export interface Image {
  height?: string;
  width?: string;
  date?: string;
  rotation?: string;
}
