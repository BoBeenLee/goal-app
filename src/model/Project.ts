import moment from "moment";
import { action, date, readonly, field } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';

export type TemplateType = "TODO" | "OX" | "Diary" | "Time" | "Photo" | "Table";

export type ProjectStatus = "DONE" | "DELETE" | "DOING";

export interface ITemplateProps {
    type: TemplateType;
}

export default class Project extends Model {
    static table = 'project';

    @field('project_name') projectName;
    @field('templates_json') templates;
    @field('motivate_text') motivateText;
    @field('status') status;
    @field('closed_at') closedAt;
    @readonly @date('created_at') createdAt;
    @readonly @date('updated_at') updatedAt;

    @action async deleteProject() {
        await (this as any).update(project => {
            project.status = "DELETE";
            project.closedAt = moment().valueOf();
        })
    }
}
