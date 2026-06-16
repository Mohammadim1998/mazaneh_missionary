// CSS modules and side-effect imports
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Package CSS imports (swiper, react-multi-date-picker, etc.)
declare module 'swiper/css';
declare module 'swiper/css/*';
declare module 'react-multi-date-picker/styles/*';
declare module 'leaflet/dist/leaflet.css';

// Image assets
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.gif' {
  const content: string;
  export default content;
}
declare module '*.webp' {
  const content: string;
  export default content;
}
