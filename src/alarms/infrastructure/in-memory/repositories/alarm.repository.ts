import { Injectable } from '@nestjs/common';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmEntity } from '../entities/alarm.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class InMemoryAlarmRepository implements AlarmRepository {
  private alarms: AlarmEntity[] = [];

  async save(alarm: Alarm) {
    const id = randomUUID();
    const alarmEntity = AlarmMapper.toPersistence(id, alarm);
    this.alarms.push(alarmEntity);
    return AlarmMapper.toDomain(alarmEntity);
  }

  async findAll() {
    return this.alarms.map(AlarmMapper.toDomain);
  }
}
