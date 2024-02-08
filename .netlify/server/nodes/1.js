

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.541eacbd.js","_app/immutable/chunks/scheduler.0f962ddd.js","_app/immutable/chunks/index.d9688f13.js","_app/immutable/chunks/singletons.11281b61.js"];
export const stylesheets = [];
export const fonts = [];
