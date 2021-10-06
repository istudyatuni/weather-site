import{get as t}from"../../snowpack/pkg/svelte/store.js";import{debug as r,log as g}from"../stores/debug.js";export function logger(o){t(r)&&g.update(e=>[...e,o])}
