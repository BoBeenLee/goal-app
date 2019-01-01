import _ from "lodash";
import { flow, getRoot, Instance, types } from "mobx-state-tree";

export interface IFilmItem {
  id: string;
  title: string;
  episodeID: number;
  created: string;
  openingCrawl: string;
}

const SwapiStore = types.model("SwapiStore", {}).actions(__ => {
  const fetchFilms = flow<IFilmItem[]>(function* () {
    return _.get({}, ["data", "allFilms", "films"], []);
  });
  return {
    fetchFilms
  };
});

export const getSwapiStore = stores => stores.store.swapiStore;
export type ISwapiStore = typeof SwapiStore.Type;
export default SwapiStore;
