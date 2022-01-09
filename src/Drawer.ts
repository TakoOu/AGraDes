export class Drawer {
    
}

export namespace Drawer {
    export interface BaseDrawer {
        draw: () => Promise<BaseDrawer>;
    }
}