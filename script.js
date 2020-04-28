'use strict';

let introDark = chrome.runtime.getURL("images/intro-connection.png")
let introLight = "https://web.whatsapp.com/img/intro-connection_c98cc75f2aa905314d74375a975d2cf2.jpg"
let rightDark = chrome.runtime.getURL("images/right.png")
let rightLight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADAUExURUxpcXmHa4maet/4yA0aDRMTE8fhsgAAAAAAAMDXrCsxJeX/z1xzXIiYetPsvGBsVUdPPuH8zOH8zNDrvMvmtrrOpwAAAAAAABUVFRoaGtnyxLTMozQ+MMfftFBeSR8nH5aoh6q/mW9+ZN/4yMjhtRwlHAAAAIOWd+r/06C1kkNLOwsLC9z4xur/0+n/0t76x9v4xeL9y+b/z+j/0d/7yeH8yuX/zeD8ytz5xt76yOP/zeH+y+b/zuD8yd35xuf/0MY9jkkAAAAsdFJOUwBvd/ATDZIBAsMp/At/11c9yPbizHoICQwT4bY1ykkgjahl6s8bBYT6nUAWOLbtFAAAAIhJREFUKM/tzbUWwlAURNFBE9zdg0NecLf//yvKUJyUdDnl7HXXletXqmXl9wPbQ9JCcC+VJsOj2mDwovzj3osjHGNFEVxNRAj7UR1hlx+I4FbuC8HkZBE8OwnRxamdFsEmUxCCGdoI51RLBK9xVwTvjyMEbzlDMJMp7lqseNc8YNc6CGyF/a0vcmwhZbCG+kEAAAAASUVORK5CYII="
let leftDark = chrome.runtime.getURL("images/left.png")
let leftLight = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC"
let animatedDark = chrome.runtime.getURL("images/animated-doodle.png")
let animatedLight = "https://web.whatsapp.com/img/animated-doodle_600127bdb5f7627ede5cd4ef320f55b0.png"
let chatTileDark = chrome.runtime.getURL("images/bg-chat-tile.png")
let chatTileLight = "https://web.whatsapp.com/img/bg-chat-tile_9e8a2898faedb7db9bf5638405cf81ae.png"
let styleTextContent = document.querySelector("style").textContent

const setStyle = (intro, msgout, msgin, chat, doodle) => `
    ${styleTextContent}
    [data-asset-intro-image] {
        background-image: url("${intro}") !important
    }
    html[dir=ltr] .dark .message-out .tail-container .tail-out {
        background-image: url("${msgout}") !important
    }
    html[dir=ltr] .dark .message-in .tail-container, html[dir=ltr] .dark .message-out .tail-override-left .tail-container {
        background-image: url("${msgin}") !important
    }
    [data-asset-chat-background] {
        background-image: url("${chat}") !important;
    }
    ._3XqhJ, ._1gzBr {
        background-image: url("${doodle}") !important;
    }
    `

chrome.storage.sync.get(['checked'], function (data) {
    if (data.checked) {
        document.querySelector("body").className = "dark"
        document.querySelector("style").textContent = setStyle(introDark, rightDark, leftDark, chatTileDark, animatedDark);
    }
});

chrome.storage.onChanged.addListener(function () {
    const bodyClass = document.querySelector("body").className;
    if (bodyClass == "dark") {
        document.querySelector("body").className = "web"
        document.querySelector("style").textContent = setStyle(introLight, rightLight, leftLight, chatTileLight, animatedLight);
    }
    else {
        document.querySelector("body").className = "dark";
        document.querySelector("style").textContent = setStyle(introDark, rightDark, leftDark, chatTileDark, animatedDark);
    }
});