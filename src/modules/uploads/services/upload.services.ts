import { Injectable } from '@nestjs/common';
import {
  mkdirSync,
  createWriteStream,
  // createReadStream,
} from 'node:fs';
import { join } from 'node:path';

@Injectable()
export class UploadsService {
  constructor() {}

  receiveFile(file: File) {
    const ext = file.originalname.split('.').reverse()[0],
      name = file.originalname.replace(/\W/gi, '_');

    const path = join('./', 'uploaded', `${name}.${ext}`);
    const _file = createWriteStream(path);
    // const _data = createReadStream(_file.path);

    _file.write(file.buffer);
    _file.end(() => console.log(']>', file.originalname));
    return file;
  }

  public async uploadFile(file: File) {
    mkdirSync('./uploaded', { recursive: true });

    return this.receiveFile(file);
  }

  public async uploadFiles(files: File[]) {
    return files.map(this.uploadFile);
  }
}
