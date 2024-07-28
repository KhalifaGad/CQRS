import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmSeverityValue } from 'src/alarms/domain/types';
import { AlarmSeverity } from 'src/alarms/domain/value-objects';
import { AlarmEntity } from '../entities/alarm.entity';

export class AlarmMapper {
  static toDomain(alarmEntity: AlarmEntity) {
    const severity = new AlarmSeverity(
      alarmEntity.severity as AlarmSeverityValue,
    );
    return new Alarm(alarmEntity.id, alarmEntity.name, severity);
  }

  static toPersistence(id: string, alarm: Alarm) {
    return new AlarmEntity(id, alarm.name, alarm.severity.value);
  }
}
