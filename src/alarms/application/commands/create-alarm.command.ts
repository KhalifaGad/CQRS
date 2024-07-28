import { AlarmSeverityValue } from 'src/alarms/domain/types';

export class CreateAlarmCommand {
  constructor(
    public readonly name: string,
    public readonly severity: AlarmSeverityValue,
  ) {}
}
