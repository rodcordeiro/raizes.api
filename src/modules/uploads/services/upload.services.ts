import { Injectable } from '@nestjs/common';
import { FtpService } from 'nestjs-ftp';
import { mkdirSync, createWriteStream, createReadStream } from 'node:fs';
import { join } from 'node:path';

@Injectable()
export class UploadsService {
  constructor(private readonly _ftpService: FtpService) {}

  async uploadToFtp(path: string, name: string) {
    try {
      const _data = createReadStream(path);
      await this._ftpService.upload(_data, '/pontos/' + name);
    } catch (error) {
      throw new Error(error);
    }
  }

  async receiveFile(file: File) {
    const ext = file.originalname.split('.').reverse()[0];
    const name = `${new Date().getTime()}_${Math.floor(Math.random() * 666)}`;
    const parsedName = `${name}.${ext}`;

    const path = join('./', 'uploaded', parsedName);
    const _file = createWriteStream(path);

    _file.write(file.buffer);
    _file.end(async () => await this.uploadToFtp(path, parsedName));
    return {
      name: parsedName,
      originalName: file.originalname,
      mime: file.mimetype,
      size: file.size,
      url: 'http://raizes.rodrigocordeiro.com.br/pontos/' + parsedName,
    };
  }

  public async uploadFile(file: File) {
    mkdirSync('./uploaded', { recursive: true });

    return this.receiveFile(file);
  }

  public async uploadFiles(files: File[]) {
    return files.map(this.uploadFile);
  }
}
