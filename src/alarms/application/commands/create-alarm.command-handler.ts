import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { AlarmRepository } from "../ports/alarm.repository";
import { CreateAlarmCommand } from "./create-alarm.command";
import { AlarmFactory } from "src/alarms/domain/factories/alarm.factory";

@CommandHandler(CreateAlarmCommand)
export class CreateAlarmCommandHandler implements ICommandHandler<CreateAlarmCommand> {
	constructor(
		private readonly alarmRepository: AlarmRepository,
		private readonly alarmFactory: AlarmFactory,
	) {}

	async execute(command: CreateAlarmCommand) {
		const alarm = this.alarmFactory.create(command.name, command.severity);
		return this.alarmRepository.save(alarm);
	}
}
