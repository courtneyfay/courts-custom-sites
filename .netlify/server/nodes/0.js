

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0d8957a3.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.d9688f13.js"];
export const stylesheets = [];
export const fonts = [];
