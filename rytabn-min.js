// ==UserScript==
// @name         Remove YouTube Ad Blocker Notification
// @namespace    https://github.com/iamlikeyou/remove-youtube-ad-blocker-notification/
// @version      0.1
// @description  Removes the youtube ad blockers are not allowed notification and replaces it with the youtube embeded player.
// @author       iamlikeyou
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

     const rytabn = {
        ol: "yt-playability-error-supported-renderers",
        p: "div#player-full-bleed-container",
        ap: 0,
        f(s, c, d = 0) {
            const h = setInterval(() => { const e = document.querySelector(s); if (e) { clearInterval(h); setTimeout(() => c(e), d); } }, 50);
        },
        g() {
            const u = new URLSearchParams(window.location.search);
            return u.get('v');
        },
        l() {
            this.f(this.p, (e) => { e.innerHTML = `<iframe style="width: 100%; height: 56.25vw; max-height: calc(100vh - 169px); left: 257px; top: 0px;" src="https://www.youtube.com/embed/${this.g()}?autoplay=${this.ap}" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;});
        },
    };
    rytabn.l();
})();
