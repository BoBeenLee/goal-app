import { date, readonly, field, lazy, relation } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';

export type DayStatus = "DONE" | "DOING";

export default class ProjectDay extends Model {
    static table = 'project_day';
    static associations = {
        project: { type: 'belongs_to', key: 'project_id' },
    }

    @field('day') day;
    @field('templates_json') templates;
    @field('status') status;
    @relation('project', 'project_id') project;
    @readonly @date('created_at') createdAt;
}
