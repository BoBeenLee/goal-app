import moment from "moment";
import { action, children, lazy, date, readonly, field } from '@nozbe/watermelondb/decorators';
import { Model, Q } from '@nozbe/watermelondb';

export type TemplateType = "TODO" | "OX" | "Diary" | "Time" | "Photo" | "Table";

export type ProjectStatus = "DONE" | "DELETE" | "DOING";

export interface ITemplateProps {
    type: TemplateType;
}

export default class Project extends Model {
    static table = 'project';
    static associations = {
        project_day: { type: 'has_many', foreignKey: 'project_id' }
    }

    @field('project_name') projectName;
    @field('templates_json') templates;
    @field('motivate_text') motivateText;
    @field('status') status;
    @date('closed_at') closedAt;
    @children('project_day') projectDays;

    @date('created_at') createdAt;
    @readonly @date('updated_at') updatedAt;

    async deleteProject() {
        await (this as any).update(project => {
            project.status = "DELETE";
            project.closedAt = moment().valueOf();
        })
    }
}
