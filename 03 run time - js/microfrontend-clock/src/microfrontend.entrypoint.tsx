import "./microfrontend.styles";
import React from "react";
import ReactDOM from "react-dom";
import { Clock } from "./components";

/**
 * Microfrontend component
 */
const Microfrontend: React.FC = () => <Clock />;

/**
 * Microfrontend public interface
 */
export type MicrofrontendRenderFunction = (container: Element) => void;
export type MicrofrontendUnmountFunction = (container: Element) => boolean;

export interface MicrofrontendInterface {
  render: MicrofrontendRenderFunction;
  unmount: MicrofrontendUnmountFunction;
}

export const MicrofrontendInterface: MicrofrontendInterface = {
  render: (container) => ReactDOM.render(<Microfrontend />, container),
  unmount: (container) => ReactDOM.unmountComponentAtNode(container),
};
