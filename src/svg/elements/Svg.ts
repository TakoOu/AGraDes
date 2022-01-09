export class Svg {
    private _element: SVGSVGElement;
    private _width: number;
    private _height: number;
    constructor(source: Svg.Source) {
        this._element = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        source.parentContainer.append(this._element);
    }
    get width() {
        return this._width;
    }
    set width(newWidth: number) {
        this._width = newWidth;
    }
    get height() {
        return this._width;
    }
    set height(newHeight: number) {
        this._height = newHeight;
    }
    get element() {
        return this._element;
    }
}

export namespace Svg {
    export interface Source {
        parentContainer: HTMLElement;
    }
}