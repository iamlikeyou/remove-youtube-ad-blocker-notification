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
        overlay: "yt-playability-error-supported-renderers",
        player: "div#player-full-bleed-container",
        autoplay: 0,

        find(selector, callback, delay = 0) {
            const intervalId = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(intervalId);
                    setTimeout(() => callback(element), delay);
                }
            }, 100);
        },

        getVideoID() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('v');
        },

        layout() {
            this.find(this.player, (element) => {
                element.innerHTML = `
                    <iframe
                        style="width: 100%; height: 56.25vw; max-height: calc(100vh - 169px); left: 257px; top: 0px;"
                        src="https://www.youtube.com/embed/${this.getVideoID()}?autoplay=${this.autoplay}"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                `;
            });
        },
    };

    rytabn.layout();
})();
