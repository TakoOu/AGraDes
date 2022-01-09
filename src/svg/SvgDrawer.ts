import { Drawer } from "../Drawer.js";
import { Path } from "./elements/Path.js";
import { Svg } from "./elements/Svg.js";

export class SvgDrawer implements Drawer.BaseDrawer {
    private _parent: HTMLElement;
    private _drawspace: Svg;
    constructor(source: SvgDrawer.Source) {
        this._parent = source.parentContainer;
    }
    init() {
        this._drawspace = new Svg({
            parentContainer: this._parent
        });
    }
    newPath() {
        let np = new Path();
        this._drawspace.element.append(np.element);
    }
    public async draw() {
        return this;
    }
}
export namespace SvgDrawer {
    export interface Source {
        parentContainer: HTMLElement;
    }
}