/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/* import-globals-from preferences.js */

var gMoreFromMozillaPane = {
  initialized: false,

  _option: "default",
  set option(value) {
    this._option = "default";
  },

  get option() {
    return this._option;
  },

  getTemplateName() {
    return "simple";
  },

  getURL(url) {
    let pageUrl = new URL(url);
    return pageUrl.toString();
  },

  renderProducts() {
    let products = [
      {
        id: "comper-pro-lite",
        title_string_id: "Comper Browser Pro Lite",
        description_string_id: "Version: 3.0 - Open Source Advanced Browser From Firefox Open Source Project",
        region: "global",
        button: {
          id: "comperProLink",
          type: "button",
          label_string_id: "Check out the GitHub project and contribute! for support and updates",
          actionURL: "https://github.com/tda45/Comper-Browser-Pro-Lite",
        }
      }
    ];

    this._productsContainer = document.getElementById(
      "moreFromMozillaCategory"
    );
    let frag = document.createDocumentFragment();
    this._template = document.getElementById(this.getTemplateName());

    if (!this._template) {
      return;
    }

    for (let product of products) {
      let template = this._template.content.cloneNode(true);
      let title = template.querySelector(".product-title");
      let desc = template.querySelector(".description");

      // Dil dosyalarına bağımlılığı kaldırmak için doğrudan metin ataması yapıldı
      if (title) {
        title.textContent = product.title_string_id;
        title.id = product.id;
      }
      
      if (desc) {
        desc.textContent = product.description_string_id;
      }

      let actionElement = template.querySelector(".small-button") || template.querySelector(".text-link");

      if (actionElement) {
        actionElement.hidden = false;
        actionElement.id = `comper-${product.button.id}`;
        actionElement.setAttribute("label", product.button.label_string_id);
        actionElement.textContent = product.button.label_string_id;

        actionElement.addEventListener("click", function () {
          let mainWindow = window.windowRoot.ownerGlobal;
          mainWindow.openTrustedLinkIn(
            gMoreFromMozillaPane.getURL(product.button.actionURL),
            "tab"
          );
        });
      }

      // QR Kod kutusu tamamen pasif hale getirildi ve gizlendi
      let qrcode = template.querySelector(".qr-code-box");
      if (qrcode) {
        qrcode.remove();
      }

      frag.appendChild(template);
    }
    this._productsContainer.appendChild(frag);
  },

  async init() {
    if (this.initialized) {
      // Yenilenen ismiyle Comper kategorisini arama motoruna aç
      return;
    }
    this.initialized = true;
    
    let catHeader = document.getElementById("moreFromMozillaCategory-header");
    if (catHeader) {
      catHeader.removeAttribute("data-hidden-from-search");
      catHeader.textContent = "More from Comper"; // Başlık Comper olarak güncellendi
    }

    let catBox = document.getElementById("moreFromMozillaCategory");
    if (catBox) {
      catBox.removeAttribute("data-hidden-from-search");
    }

    this.renderProducts();
  },
};