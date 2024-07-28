import { AlarmSeverity } from './value-objects';

export class Alarm {
  constructor(
    public id: string | null,
    public name: string,
    public severity: AlarmSeverity,
  ) {}
}
