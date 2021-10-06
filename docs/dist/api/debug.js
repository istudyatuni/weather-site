import{noCacheHeaders as t}from"../utils/constants.js";export async function loadVersion(){return await(await fetch("version.txt",{headers:t})).text()}
