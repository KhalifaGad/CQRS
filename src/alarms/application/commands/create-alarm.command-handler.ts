import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";
import { AlarmCreatedEvent } from "src/alarms/domain/events/alarm-created.event";
import { AlarmWriteRepository } from "src/alarms/application/ports/alarm-write.repository";
import { CreateAlarmCommand } from "./create-alarm.command";
import { AlarmFactory } from "src/alarms/domain/factories/alarm.factory";

@CommandHandler(CreateAlarmCommand)
export class CreateAlarmCommandHandler
  implements ICommandHandler<CreateAlarmCommand>
{
  constructor(
    private readonly alarmRepository: AlarmWriteRepository,
    private readonly alarmFactory: AlarmFactory,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateAlarmCommand) {
    const alarm = this.alarmFactory.create(
      command.name,
      command.severity,
      command.triggeredAt,
      command.items,
    );
    const newAlarm = await this.alarmRepository.save(alarm);

    // TODO: enhance alarm publishing to follow best practices!.
    //  (e.g. transactional outbox pattern, publish from aggregate root, the publish method itself)
    this.eventBus.publish(new AlarmCreatedEvent(newAlarm));
    return newAlarm;
  }
}
