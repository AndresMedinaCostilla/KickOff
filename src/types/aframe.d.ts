interface Window {
  AFRAME: any;
}

// Declaración para elementos A-Frame
declare namespace JSX {
  interface IntrinsicElements {
    'a-scene': any;
    'a-camera': any;
    'a-entity': any;
    'a-light': any;
    'a-box': any;
    'a-sphere': any;
    'a-cylinder': any;
    'a-plane': any;
    'a-sky': any;
    'a-text': any;
  }
}

// Para elementos creados con document.createElement
interface HTMLElement {
  setAttribute(attr: string, value: any): void;
}