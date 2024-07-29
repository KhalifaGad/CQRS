import { AlarmItem } from "./alarm-item";
import { AlarmSeverity } from "./value-objects";

export class Alarm {
  public id: string | null;
  public name: string;
  public severity: AlarmSeverity;
  public isAcknowledged = false;
  public triggeredAt: Date;
  public items = new Array<AlarmItem>();

  acknowledge() {
    this.isAcknowledged = true;
  }

  addAlarmItem(item: AlarmItem) {
    this.items.push(item);
  }
}
