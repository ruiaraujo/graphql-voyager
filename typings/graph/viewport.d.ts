export declare class Viewport {
    container: HTMLElement;
    onSelectNode: (id: string) => void;
    onSelectEdge: (id: string) => void;
    $svg: SVGElement;
    zoomer: SvgPanZoom.Instance;
    offsetLeft: number;
    offsetTop: number;
    maxZoom: number;
    constructor(svgString: any, container: HTMLElement, onSelectNode: any, onSelectEdge: any);
    resize(): void;
    enableZoom(): void;
    bindClick(): void;
    bindHover(): void;
    selectNodeById(id: string): void;
    selectNode(node: Element): void;
    selectEdgeById(id: string): void;
    deselectNode(): void;
    focusElement(id: string): void;
    animatePanAndZoom(x: any, y: any, zoomEnd: any): void;
    destroy(): void;
}