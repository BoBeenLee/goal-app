import _ from "lodash";
import moment from "moment";

const makeProject = (db) => db.collections.get('project').prepareCreate(project => {
    project.projectName = "어플 완성하고\n런칭하기";
    project.templates = JSON.stringify([{ type: "Diary" }, { type: "OX" }]);
    project.motivateText = "런칭이 코앞! 꼭 올려보아요";
    project.status = "DOING";
    project.createdAt = moment().subtract(15, "day").valueOf();
});

const makeProjectDays = (db, project) => _.times(15, (index) => {
    return db.collections.get('project_day').prepareCreate(projectDay => {
        projectDay.day = `${index + 1}`;
        projectDay.templates = project.templates;
        projectDay.status = _.random(0, 1) === 0 ? "DOING" : "DONE";
        projectDay.project.set(project);
    })
});

export const generate = async (db) => {
    await db.unsafeResetDatabase();
    const project = makeProject(db);
    const projectDays = makeProjectDays(db, project);
    await db.batch(...[project, ...projectDays]);
}
