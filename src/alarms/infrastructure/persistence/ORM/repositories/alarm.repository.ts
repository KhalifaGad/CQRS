import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Alarm } from "src/alarms/domain/alarm";
import { AlarmMapper } from "../mappers/alarm.mapper";
import { Repository } from "typeorm";
import { AlarmRepository } from "src/alarms/application/ports/alarm.repository";
import { AlarmEntity } from "../entities/alarm.entity";

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async save(alarm: Alarm) {
    const persistentModel = AlarmMapper.toPersistence(alarm);
    const alarmEntity = await this.alarmRepository.save({
      ...persistentModel,
      id: alarm.id ?? undefined,
    });
    return AlarmMapper.toDomain(alarmEntity);
  }

  async findAll() {
    const alarmEntities = await this.alarmRepository.find();
    return alarmEntities.map(AlarmMapper.toDomain);
  }
}
