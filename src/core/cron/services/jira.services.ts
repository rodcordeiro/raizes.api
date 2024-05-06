
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class JiraServices {
  private readonly logger = new Logger(JiraServices.name);

  @Cron('0 0 9 * * *')
  handleCron() {
    // this.logger.debug('Called when the current second is 45');
  }
}