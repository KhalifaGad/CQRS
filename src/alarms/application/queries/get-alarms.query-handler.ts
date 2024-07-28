import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { Alarm } from "src/alarms/domain/alarm";
import { AlarmRepository } from "../ports/alarm.repository";
import { GetAlarmsQuery } from "./get-alarms.query";

@QueryHandler(GetAlarmsQuery)
export class GetAlarmsQueryHandler
  implements IQueryHandler<GetAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmRepository: AlarmRepository) {
    this.alarmRepository = alarmRepository;
  }
  async execute() {
    return this.alarmRepository.findAll();
  }
}
