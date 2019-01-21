import { date, readonly, field, immutableRelation } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';

export default class ProjectDay extends Model {
    static table = 'project_day';

    @immutableRelation('project', 'project_id') project;
    @field('day') day;
    @field('templates_json') templates;
    @readonly @date('created_at') createdAt;
}
