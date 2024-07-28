import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmMapper } from '../mappers/alarm.mapper';
import { Repository } from 'typeorm';
import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmEntity } from '../entities/alarm.entity';

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  constructor() {} // private readonly alarmRepository: Repository<AlarmEntity>, // @InjectRepository(AlarmEntity)

  async save(alarm: Alarm) {
    // const persistentModel = AlarmMapper.toPersistence(alarm);
    // const alarmEntity = await this.alarmRepository.save(persistentModel);
    // return AlarmMapper.toDomain(alarmEntity);
    return {} as Alarm;
  }

  async findAll() {
    // const alarmEntities = await this.alarmRepository.find();
    // return alarmEntities.map(AlarmMapper.toDomain);
    return [] as Alarm[];
  }
}
