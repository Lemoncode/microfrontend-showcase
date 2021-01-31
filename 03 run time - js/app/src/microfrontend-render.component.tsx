import React from "react";

// Tipado común de la interfaz de Microfrontends.
type MicrofrontendRenderFunction = (container: Element) => void;
type MicrofrontendUnmountFunction = (container: Element) => boolean;

interface MicrofrontendInterface {
  render: MicrofrontendRenderFunction;
  unmount: MicrofrontendUnmountFunction;
}

type RegisteredMicrofrontends = "MicrofrontendClock" | "MicrofrontendQuote";

// Componente Microfrontend Render
export interface MicrofrontendRenderProps {
  microfrontend: RegisteredMicrofrontends;
}

export const MicrofrontendRender: React.FC<MicrofrontendRenderProps> = ({ microfrontend }) => {
  const containerRef = React.useRef();

  React.useEffect(() => {
    // Línea clave, ¿dónde puedo encontrar el interfaz de mi microfrontend cargada por <script>?
    const microfrontendInterface: MicrofrontendInterface =
      window[microfrontend]?.MicrofrontendInterface;
    microfrontendInterface?.render(containerRef.current);

    return () => microfrontendInterface?.unmount(containerRef.current);
  }, [microfrontend]);

  return <div ref={containerRef} />;
};
