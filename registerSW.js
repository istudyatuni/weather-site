if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/weather-site/sw.js', { scope: '/weather-site/' })})}