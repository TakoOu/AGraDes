import { Drawer } from "../Drawer.js";

export class SvgDrawer implements Drawer.BaseDrawer {
    public async draw() {
        return this;
    }
}