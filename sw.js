if(!self.define){let e,s={};const r=(r,o)=>(r=new URL(r+".js",o).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const a=e=>r(e,i),d={module:{uri:i},exports:c,require:a};s[i]=Promise.all(o.map((e=>d[e]||a(e)))).then((e=>(n(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/Debug-2dc84e11.css",revision:null},{url:"assets/Debug-8d29e0ff.js",revision:null},{url:"assets/index-3b8db0ff.css",revision:null},{url:"assets/index-798a041a.js",revision:null},{url:"assets/vendor-4228fa34.js",revision:null},{url:"index.html",revision:"3153fea3427bb687d7e5e27c1fb1dfa8"},{url:"registerSW.js",revision:"8de5305f3df0b4d60b30ae80ed848f1c"},{url:"locales/en.json",revision:"1930845d841de85c23bf7bb542873a69"},{url:"locales/ru.json",revision:"eda3eb1a7714ff92250c800813ccafef"},{url:"icons/weather-icons/32/clouds_sun_sunny_weather.svg",revision:"2ddc5aae940ffa24505e50cc88513629"},{url:"icons/weather-icons/32/cloudy_weather_clouds_cloud.svg",revision:"875f92ea79e024ef036c94b25c6cb773"},{url:"icons/weather-icons/32/cloudy_weather_forecast_rain_clouds.svg",revision:"42bbe42c1006fa70129acc66d12a2779"},{url:"icons/weather-icons/32/foggy_weather_fog_clouds_cloudy.svg",revision:"57e516b31bbdd853f033d6e007d56cd1"},{url:"icons/weather-icons/32/hail_weather_hailstone_clouds_snow.svg",revision:"bc703a517d5a44d12d4c2e9b2d9d585f"},{url:"icons/weather-icons/32/hurricane_weather_tornado_storm.svg",revision:"393fd5c7389ac3ed7d6ade67ad4ac35e"},{url:"icons/weather-icons/32/moon_night_weather_foggy_fog.svg",revision:"17c107ba4c1e83a26efa94376c1efc24"},{url:"icons/weather-icons/32/moon_weather_clouds_cloudy.svg",revision:"e916a76877fe0ae893b4e96eb761cd74"},{url:"icons/weather-icons/32/moon_weather_snow_night.svg",revision:"f79b5855b9baafcd1972149868327b2a"},{url:"icons/weather-icons/32/morning_sunrise_sun_weather.svg",revision:"35e388c40fd3233d30df0c5cb442950d"},{url:"icons/weather-icons/32/night_weather_clouds_storm_rain_moon.svg",revision:"aaf036450bc5374cac52639db149f245"},{url:"icons/weather-icons/32/rain_cloud_drizzel_weather.svg",revision:"3ab0729dec1f1c4c6f45f67d3d265abe"},{url:"icons/weather-icons/32/rain_storm_shower_weather.svg",revision:"f278c2a5b4c35956ce7c302825761182"},{url:"icons/weather-icons/32/sand_weather_sandstorm_sun_day.svg",revision:"f3e30ffcb47a32a30112821cf601c877"},{url:"icons/weather-icons/32/sand_weather_storm_sandstorm.svg",revision:"ff8e5b4f32a28587eded333d861d680f"},{url:"icons/weather-icons/32/storm_weather_night_clouds.svg",revision:"737a3c125cf78fbc8df7759442633072"},{url:"icons/weather-icons/32/storm_weather_sandstorm_sand_cloud.svg",revision:"505abe4499640062edd5ba2eeba92c07"},{url:"icons/weather-icons/32/storm_weather_thunder_clouds_rain.svg",revision:"e4bcc1bd8fd3a43a3fa7f957e1bf79f7"},{url:"icons/weather-icons/32/sunny_rain_cloudy_weather_clouds.svg",revision:"283824f2019857572897523567e92d75"},{url:"icons/weather-icons/32/sunny_weather_clouds_storm.svg",revision:"07fa59d696e1309ffdffabcd372bf94c"},{url:"icons/weather-icons/32/weather_clouds_fog_foggy.svg",revision:"a848a6aad17ac560883d383c00c9312f"},{url:"icons/weather-icons/32/weather_forecast_temperature_thermometer.svg",revision:"6ab42bcd44b49a93ed95056f2f18c61c"},{url:"icons/weather-icons/32/weather_moon_moonrise_night.svg",revision:"b15fcfe916c3047328fa1065eab3aa7a"},{url:"icons/weather-icons/32/weather_moonset_moon_morning.svg",revision:"9b1ce303b032527b52a6fc35726afd11"},{url:"icons/weather-icons/32/weather_night_moon_moonlight.svg",revision:"d9e03ad2839ae37006206791ff5af3a8"},{url:"icons/weather-icons/32/weather_rain_storm_night.svg",revision:"e5ebd6610f8d2818183ecb7a3d5dee22"},{url:"icons/weather-icons/32/weather_sun_sunny_temperature.svg",revision:"dd25d0ab9f8596c07c124758b96853dd"},{url:"icons/weather-icons/32/weather_sunset_sun_evening.svg",revision:"6de2b964f3824e23eb340654a5806508"},{url:"icons/weather-icons/32/wind_weather_cloudy_storm.svg",revision:"04385f2f6574cd4c8a4d7d3f9c0569a7"},{url:"icons/weather-icons/32/windy_cloudy_storm_wind_weather.svg",revision:"b29e4425ec4758e3d5d1eb8eaf6815bd"},{url:"icons/weather-icons/32/winter_snow_clouds_weather.svg",revision:"22e641c49a39318ca190200924dbd69a"},{url:"icons/weather-icons/32/winter_snowflake_christmas_xmas_weather_snow.svg",revision:"dbd73cf95d044d53db491ab38231ab58"},{url:"icons/pwa.svg",revision:"1d41c90c6df0de77a7c976a83f66284b"},{url:"manifest.json",revision:"c099a22108934fcee40ce3217ec2a281"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map