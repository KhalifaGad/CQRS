import { Injectable } from '@nestjs/common';
import { AlarmSeverityValue } from '../types';
import { Alarm } from '../alarm';
import { AlarmSeverity } from '../value-objects';

@Injectable()
export class AlarmFactory {
  create(name: string, severity: AlarmSeverityValue, id?: string) {
    const alarmSeverity = new AlarmSeverity(severity);
    return new Alarm(id ?? null, name, alarmSeverity);
  }
}
