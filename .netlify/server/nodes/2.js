

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.37c604c7.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.d9688f13.js"];
export const stylesheets = ["_app/immutable/assets/2.807f2c18.css"];
export const fonts = [];
