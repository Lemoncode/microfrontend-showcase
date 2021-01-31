export type MicrofrontendRenderFunction = (container: Element) => void;
export type MicrofrontendUnmountFunction = (container: Element) => boolean;

export interface MicrofrontendInterface {
  render: MicrofrontendRenderFunction;
  unmount: MicrofrontendUnmountFunction;
}

export declare const MicrofrontendInterface: MicrofrontendInterface;
