// images
declare module '*.png' {
  const value: string;
  export default value;
}

// pdf
declare module '*.pdf' {
  const src: string;
  export default src;
}
