import { Injectable } from "@nestjs/common";
import { AlarmSeverityValue } from "../types";
import { Alarm } from "../alarm";
import { AlarmSeverity } from "../value-objects";
import { AlarmItem } from "../alarm-item";

@Injectable()
export class AlarmFactory {
  create(
    name: string,
    severity: AlarmSeverityValue,
    triggeredAt: Date,
    items: Array<Omit<AlarmItem, "id">>,
    id?: string,
  ) {
    const alarmSeverity = new AlarmSeverity(severity);
    const alarm = new Alarm();
    alarm.id = id ?? null;
    alarm.name = name;
    alarm.severity = alarmSeverity;
    alarm.triggeredAt = triggeredAt;
    items.forEach((item) =>
      alarm.addAlarmItem(new AlarmItem(null, item.name, item.type)),
    );
    return alarm;
  }
}
