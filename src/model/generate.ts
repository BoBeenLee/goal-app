
const makeProject = (db) => db.collections.get('project').prepareCreate(project => {
    project.projectName = "Hello2";
    project.templates = "Hello3";
    project.motivateText = "Hello4";
});

export const generate = async (db) => {
    await db.unsafeResetDatabase();
    await db.batch(...[makeProject(db)]);
}
