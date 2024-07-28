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

  static toPersistence(alarm: Alarm) {
    const entity = new AlarmEntity();
    entity.id = alarm.id;
    entity.name = alarm.name;
    entity.severity = alarm.severity.value;
    return entity;
  }
}
