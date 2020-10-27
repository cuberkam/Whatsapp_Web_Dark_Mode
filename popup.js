'use strict';
chrome.storage.sync.get(['systemThemeMode'], function (e) {
  if (e.systemThemeMode === false) {
    const body = document.querySelector('#body');
    const icon = document.querySelector('#icon');
    const text1 = document.querySelector('#text-1');
    const text2 = document.querySelector('#text-2');
    const text3 = document.querySelector('#text-3');
    const infoText = document.querySelector('#info-text');

    //#region Butona basılınca gerçekleşecek olaylar
    document.getElementById('check').onclick = function () {
      const theChecked = this.checked;
      chrome.storage.sync.set({ checked: theChecked });
      if (!theChecked) {
        body.classList.add("bg-color-2");
        body.classList.remove("bg-color-1");
        icon.classList.add("icon-fill");
        text1.classList.add("color-2");
        text1.classList.remove("color-1");
        text2.classList.add("color-2");
        text2.classList.remove("color-1");
        text3.classList.add("color-2");
        text3.classList.remove("color-1");
        text3.innerHTML = "ENABLE";
        infoText.classList.add("color-2");
        infoText.classList.remove("color-1");
        chrome.browserAction.setIcon({
          path: {
            "19": "icon/lunate_light_19.png",
            "38": "icon/lunate_light_38.png"
          }
        });
      }
      else {
        body.classList.remove("bg-color-2");
        body.classList.add("bg-color-1");
        icon.classList.remove("icon-fill");
        text1.classList.remove("color-2");
        text1.classList.add("color-1");
        text2.classList.remove("color-2");
        text2.classList.add("color-1");
        text3.classList.remove("color-2");
        text3.classList.add("color-1");
        text3.innerHTML = "DISABLE";
        infoText.classList.remove("color-2");
        infoText.classList.add("color-1");
        chrome.browserAction.setIcon({
          path: {
            "19": "icon/lunate_dark_19.png",
            "38": "icon/lunate_dark_38.png"
          }
        });
      }
    }
    //#endregion Butona basılınca gerçekleşecek olaylar

    //#region Site terk edildikten sonra hafızadaki değerin uygulanması
    chrome.storage.sync.get(['checked'], function (data) {
      document.getElementById('check').checked = data.checked;
      if (!data.checked) {
        body.classList.add("bg-color-2");
        body.classList.remove("bg-color-1");
        icon.classList.add("icon-fill");
        text1.classList.add("color-2");
        text1.classList.remove("color-1");
        text2.classList.add("color-2");
        text2.classList.remove("color-1");
        text3.classList.add("color-2");
        text3.classList.remove("color-1");
        text3.innerHTML = "ENABLE";
        infoText.classList.add("color-2");
        infoText.classList.remove("color-1");
        chrome.browserAction.setIcon({
          path: {
            "19": "icon/lunate_light_19.png",
            "38": "icon/lunate_light_38.png"
          }
        });
      }
      else {
        body.classList.remove("bg-color-2");
        body.classList.add("bg-color-1");
        icon.classList.remove("icon-fill");
        text1.classList.remove("color-2");
        text1.classList.add("color-1");
        text2.classList.remove("color-2");
        text2.classList.add("color-1");
        text3.classList.remove("color-2");
        text3.classList.add("color-1");
        text3.innerHTML = "DISABLE";
        infoText.classList.remove("color-2");
        infoText.classList.add("color-1");
        chrome.browserAction.setIcon({
          path: {
            "19": "icon/lunate_dark_19.png",
            "38": "icon/lunate_dark_38.png"
          }
        });
      }
    });
    //#endregion Site terk edildikten sonra hafızadaki değerin uygulanması
  }
});