'use strict';

let introDark = "https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg"
let introLight = "https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg"
let animatedDark = chrome.runtime.getURL("images/animated-doodle.png")
let animatedLight = "https://web.whatsapp.com/img/animated-doodle_600127bdb5f7627ede5cd4ef320f55b0.png"
let chatTileDark = "https://web.whatsapp.com/img/bg-chat-tile-dark_1551bf70d71a2e66cd28424270c268da.png"
let chatTileLight = "https://web.whatsapp.com/img/bg-chat-tile_9e8a2898faedb7db9bf5638405cf81ae.png"
let styleTextContent = document.querySelector("style").textContent

const setStyle = (intro, chat, doodle) => `
    ${styleTextContent}
    [data-asset-intro-image], [data-asset-intro-image-dark], [data-asset-intro-image-light] {
        background-image: url("${intro}") !important
    }
    [data-asset-chat-background], [data-asset-chat-background-dark], [data-asset-chat-background-light] {
        background-image: url("${chat}") !important;
    }
    ._3XqhJ, ._1gzBr, ._2mKzQ {
        background-image: url("${doodle}") !important;
    }
    `

chrome.storage.sync.get(['checked'], function (data) {
    if (data.checked) {
        document.querySelector("body").className = "dark"
        document.querySelector("style").textContent = setStyle(introDark, chatTileDark, animatedDark);
    }
});

chrome.storage.onChanged.addListener(function () {
    const bodyClass = document.querySelector("body").className;
    if (bodyClass == "dark") {
        document.querySelector("body").className = "web"
        document.querySelector("style").textContent = setStyle(introLight, chatTileLight, animatedLight);
    }
    else {
        document.querySelector("body").className = "dark";
        document.querySelector("style").textContent = setStyle(introDark, chatTileDark, animatedDark);
    }
});