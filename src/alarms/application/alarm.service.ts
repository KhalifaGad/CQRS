import { Injectable } from '@nestjs/common';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmRepository } from './ports/alarm.repository';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { AlarmFactory } from '../domain/factories/alarm.factory';

@Injectable()
export class AlarmService {
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly alarmFactory: AlarmFactory,
  ) {}

  async create(payload: CreateAlarmCommand): Promise<Alarm> {
    const alarm = this.alarmFactory.create(payload.name, payload.severity);
    return this.alarmRepository.save(alarm);
  }

  async findAll(): Promise<Alarm[]> {
    return this.alarmRepository.findAll();
  }
}
