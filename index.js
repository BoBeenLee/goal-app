import 'es6-symbol/implement';
import { isStorybook } from "./src/configs/environment";

if (isStorybook()) {
    require("./storybook");
} else {
    require("./src/App");
}
