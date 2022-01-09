export class Path {
    private _element: SVGPathElement;
    constructor() {
        this._element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this._element.setAttribute('d', 'M 10,10 h 10 v 10 h -10 v -10 z');
    }
    get element() {
        return this._element;
    }
}
export namespace Path {

}