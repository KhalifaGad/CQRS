import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlarmService } from 'src/alarms/application/alarm.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';

@Controller('alarms')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  async create(@Body() payload: CreateAlarmDto) {
    return this.alarmService.create(payload);
  }

  @Get()
  async findAll() {
    return this.alarmService.findAll();
  }
}
