import { date, readonly, field } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';

export default class Project extends Model {
    static table = 'project';

    @field('project_name') projectName;
    @field('templates_json') templates;
    @field('motivate_text') motivateText;
    @readonly @date('created_at') createdAt;
    @readonly @date('updated_at') updateAt;
}
