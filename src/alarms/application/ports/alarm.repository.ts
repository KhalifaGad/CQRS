import { Alarm } from '../../domain/alarm';

// Using abstract classes instead of interfaces because of typescript interfaces doesn't exist in runtime.
export abstract class AlarmRepository {
  abstract save(alarm: Alarm): Promise<Alarm>;
  abstract findAll(): Promise<Alarm[]>;
}
