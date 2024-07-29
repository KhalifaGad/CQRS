import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { MaterializedAlarmWriteRepository } from "../ports/materialized-alarm-write.repository";
import { AlarmCreatedEvent } from "src/alarms/domain/events/alarm-created.event";

@EventsHandler(AlarmCreatedEvent)
export class AlarmCreatedEventHandler
  implements IEventHandler<AlarmCreatedEvent>
{
  constructor(
    private readonly materializedAlarmWriteRepository: MaterializedAlarmWriteRepository,
  ) {}

  async handle(event: AlarmCreatedEvent) {
    const alarm = event.alarm;
    // TODO: Implement the transactional inbox/outbox pattern
    await this.materializedAlarmWriteRepository.upsert({
      id: alarm.id,
      name: alarm.name,
      severity: alarm.severity.value,
      isAcknowledged: alarm.isAcknowledged,
      triggeredAt: alarm.triggeredAt,
      items: alarm.items,
    });
  }
}
