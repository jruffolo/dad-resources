(() => {
  // every-layout/components/Box.js
  var Box = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Box-${[this.padding, this.borderWidth, this.invert].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            padding: ${this.padding};
            border: ${this.borderWidth} solid;
            ${this.invert ? `background-color: var(--color-light);
              filter: invert(100%);` : ""}
          }
      
          [data-i="${this.i}"] {
            background-color: inherit;
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get padding() {
      return this.getAttribute("padding") || "var(--s1)";
    }
    set padding(val) {
      return this.setAttribute("padding", val);
    }
    get borderWidth() {
      return this.getAttribute("borderWidth") || "var(--border-thin)";
    }
    set borderWidth(val) {
      return this.setAttribute("borderWidth", val);
    }
    static get observedAttributes() {
      return ["borderWidth", "padding", "invert"];
    }
    get invert() {
      return this.hasAttribute("invert");
    }
    set invert(val) {
      if (val) {
        return this.setAttribute("invert", "");
      } else {
        return this.removeAttribute("invert");
      }
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("box-l", Box);
  }

  // every-layout/components/Center.js
  var Center = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Center-${[this.max, this.andText, this.gutters, this.intrinsic].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            max-width: ${this.max};
            ${this.gutters ? `
            padding-inline-start: ${this.gutters};
            padding-inline-end: ${this.gutters};` : ""}
            ${this.andText ? `text-align: center;` : ""}
            ${this.intrinsic ? `
            display: flex;
            flex-direction: column;
            align-items: center;` : ""}
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get max() {
      return this.getAttribute("max") || "var(--measure)";
    }
    set max(val) {
      return this.setAttribute("max", val);
    }
    get andText() {
      return this.hasAttribute("andText");
    }
    set andText(val) {
      if (val) {
        return this.setAttribute("andText", "");
      } else {
        return this.removeAttribute("andText");
      }
    }
    get gutters() {
      return this.getAttribute("gutters") || null;
    }
    set gutters(val) {
      return this.setAttribute("gutters", val);
    }
    get intrinsic() {
      return this.hasAttribute("intrinsic");
    }
    set intrinsic(val) {
      if (val) {
        return this.setAttribute("intrinsic", "");
      } else {
        return this.removeAttribute("intrinsic");
      }
    }
    static get observedAttributes() {
      return ["max", "andText", "gutters", "intrinsic"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("center-l", Center);
  }

  // every-layout/components/Cluster.js
  var Cluster = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Cluster-${[this.justify, this.align, this.space].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            justify-content: ${this.justify};
            align-items: ${this.align};
            gap: ${this.space};
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get justify() {
      return this.getAttribute("justify") || "flex-start";
    }
    set justify(val) {
      return this.setAttribute("justify", val);
    }
    get align() {
      return this.getAttribute("align") || "flex-start";
    }
    set align(val) {
      return this.setAttribute("align", val);
    }
    get space() {
      return this.getAttribute("space") || "var(--s1)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    static get observedAttributes() {
      return ["justify", "align", "space"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("cluster-l", Cluster);
  }

  // every-layout/components/Container.js
  var Container = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Container-${[this.name]}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
            [data-i="${this.i}"] {
              display: block;
              container-type: inline-size;
              ${this.name ? `container-name: ${this.name};` : ""}
            }
          `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get name() {
      return this.getAttribute("name") || null;
    }
    set name(val) {
      return this.setAttribute("name", val);
    }
    static get observedAttributes() {
      return ["name"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("container-l", Container);
  }

  // every-layout/components/Cover.js
  var Cover = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Cover-${[this.centered, this.space, this.minHeight, this.noPad].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            min-height: ${this.minHeight};
            padding: ${!this.noPad ? this.space : "0"};
          }
      
          [data-i="${this.i}"] > * {
            margin-block: ${this.space};
          }
      
          [data-i="${this.i}"] > :first-child:not(${this.centered}) {
            margin-block-start: 0;
          }
      
          [data-i="${this.i}"] > :last-child:not(${this.centered}) {
            margin-block-end: 0;
          }
      
          [data-i="${this.i}"] > ${this.centered} {
            margin-block: auto;
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get centered() {
      return this.getAttribute("centered") || "h1";
    }
    set centered(val) {
      return this.setAttribute("centered", val);
    }
    get space() {
      return this.getAttribute("space") || "var(--s1)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    get minHeight() {
      return this.getAttribute("minHeight") || "100vh";
    }
    set minHeight(val) {
      return this.setAttribute("minHeight", val);
    }
    get noPad() {
      return this.hasAttribute("noPad");
    }
    set noPad(val) {
      if (val) {
        return this.setAttribute("noPad", "");
      } else {
        return this.removeAttribute("noPad");
      }
    }
    static get observedAttributes() {
      return ["centered", "space", "minHeight", "noPad"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("cover-l", Cover);
  }

  // every-layout/components/Frame.js
  var Frame = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        if (this.children.length !== 1) {
          console.warn("<frame-l> elements should have just one child element");
        }
        this.i = `Frame-${[this.ratio].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let ratio = this.ratio.split(":");
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            aspect-ratio: ${ratio[0]} / ${ratio[1]};
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get ratio() {
      return this.getAttribute("ratio") || "16:9";
    }
    set ratio(val) {
      return this.setAttribute("ratio", val);
    }
    static get observedAttributes() {
      return ["ratio"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("frame-l", Frame);
  }

  // every-layout/components/Grid.js
  var Grid = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Grid-${[this.min, this.space].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            grid-gap: ${this.space};
          }

          @supports (width: min(${this.min}, 100%)) {
            [data-i="${this.i}"] {
              grid-template-columns: repeat(auto-fill, minmax(min(${this.min}, 100%), 1fr));
            }
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get min() {
      return this.getAttribute("min") || "250px";
    }
    set min(val) {
      return this.setAttribute("min", val);
    }
    get space() {
      return this.getAttribute("space") || "var(--s1)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    static get observedAttributes() {
      return ["min", "space"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("grid-l", Grid);
  }

  // every-layout/components/Icon.js
  var Icon = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        if (this.label) {
          this.setAttribute("role", "img");
          this.setAttribute("aria-label", this.label);
        }
        if (this.space) {
          this.i = `Icon-${this.space}`;
          this.dataset.i = this.i;
          if (!document.getElementById(this.i)) {
            let styleEl = document.createElement("style");
            styleEl.id = this.i;
            styleEl.innerHTML = `
            [data-i="${this.i}"] {
              display: inline-flex;
              align-items: baseline;
            }

            [data-i="${this.i}"] > svg {
              margin-inline-end: ${this.space};
            }
          `.replace(/\s\s+/g, " ").trim();
            document.head.appendChild(styleEl);
          }
        }
      };
    }
    get space() {
      return this.getAttribute("space") || null;
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    get label() {
      return this.getAttribute("label") || null;
    }
    set label(val) {
      return this.setAttribute("label", val);
    }
    static get observedAttributes() {
      return ["space", "label"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("icon-l", Icon);
  }

  // every-layout/components/Imposter.js
  var Imposter = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Imposter-${[this.breakout, this.fixed, this.margin].join("")}`;
        this.dataset.i = this.i;
        let margin = this.margin === "0" ? "0px" : this.margin;
        if (!document.getElementById(this.i) && (!this.breakout || this.fixed)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            ${!this.breakout ? `
              max-inline-size: calc(100% - (${margin} * 2));
              max-block-size: calc(100% - (${margin} * 2));
              overflow: auto;` : ""}
            ${this.fixed ? `
              position: fixed;` : ""}
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get breakout() {
      return this.hasAttribute("breakout");
    }
    set breakout(val) {
      if (val) {
        return this.setAttribute("breakout", "");
      } else {
        return this.removeAttribute("breakout");
      }
    }
    get fixed() {
      return this.hasAttribute("fixed");
    }
    set fixed(val) {
      if (val) {
        return this.setAttribute("fixed", "");
      } else {
        return this.removeAttribute("fixed");
      }
    }
    get margin() {
      return this.getAttribute("margin") || "0px";
    }
    set margin(val) {
      return this.setAttribute("margin", val);
    }
    static get observedAttributes() {
      return ["breakout", "margin", "fixed"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("imposter-l", Imposter);
  }

  // every-layout/components/Reel.js
  var Reel = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Reel-${[this.itemWidth, this.height, this.space, this.noBar].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            height: ${this.height};
          }
      
          [data-i="${this.i}"] > * {
            flex: 0 0 ${this.itemWidth};
          }
      
          [data-i="${this.i}"] > img {
            height: 100%;
            flex-basis: auto;
            width: auto;
          }
      
          [data-i="${this.i}"] > * + * {
            margin-inline-start: ${this.space};
          }
      
          [data-i="${this.i}"].overflowing {
            ${!this.noBar ? `padding-bottom: ${this.space}` : ""}
          }
      
          ${this.noBar ? `
          [data-i="${this.i}"] {
            scrollbar-width: none;
          }
          
          [data-i="${this.i}"]::-webkit-scrollbar {
            display: none;
          }
          ` : ""}
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    toggleOverflowClass(elem) {
      elem.classList.toggle("overflowing", this.scrollWidth > this.clientWidth);
    }
    get itemWidth() {
      return this.getAttribute("itemWidth") || "auto";
    }
    set itemWidth(val) {
      return this.setAttribute("itemWidth", val);
    }
    get height() {
      return this.getAttribute("height") || "auto";
    }
    set height(val) {
      return this.setAttribute("height", val);
    }
    get space() {
      return this.getAttribute("space") || "var(--s0)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    get noBar() {
      return this.hasAttribute("noBar");
    }
    set noBar(val) {
      if (val) {
        this.setAttribute("noBar", "");
      } else {
        this.removeAttribute("noBar");
      }
    }
    static get observedAttributes() {
      return ["itemWidth", "height", "space", "noBar"];
    }
    connectedCallback() {
      this.render();
      if ("ResizeObserver" in window) {
        new ResizeObserver((entries) => {
          this.toggleOverflowClass(entries[0].target);
        }).observe(this);
      }
      if ("MutationObserver" in window) {
        new MutationObserver((entries) => {
          this.toggleOverflowClass(entries[0].target);
        }).observe(this, { childList: true });
      }
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("reel-l", Reel);
  }

  // every-layout/components/Sidebar.js
  var Sidebar = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        if (!this.contentMin.includes("%")) {
          console.warn("The value for each <sidebar-l> `contentMin` property should be a percentage. Otherwise overflow is likely to occur");
        }
        this.i = `Sidebar-${[this.side, this.sideWidth, this.contentMin, this.space].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            gap: ${this.space};
            ${this.noStretch ? "align-items: flex-start;" : ""}
          }
      
          [data-i="${this.i}"] > * {
            ${this.sideWidth ? `flex-basis: ${this.sideWidth};` : ""}
          }
      
          [data-i="${this.i}"] > ${this.side !== "left" ? `:first-child` : `:last-child`} {
            flex-basis: 0;
            flex-grow: 999;
            min-inline-size: ${this.contentMin};
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get side() {
      return this.getAttribute("side") || "left";
    }
    set side(val) {
      return this.setAttribute("side", val);
    }
    get sideWidth() {
      return this.getAttribute("sideWidth") || null;
    }
    set sideWidth(val) {
      return this.setAttribute("sideWidth", val);
    }
    get contentMin() {
      return this.getAttribute("contentMin") || "50%";
    }
    set contentMin(val) {
      return this.setAttribute("contentMin", val);
    }
    get space() {
      return this.getAttribute("space") || "var(--s1)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    get noStretch() {
      return this.hasAttribute("noStretch");
    }
    set noStretch(val) {
      if (val) {
        this.setAttribute("noStretch", "");
      } else {
        this.removeAttribute("noStretch");
      }
    }
    static get observedAttributes() {
      return ["side", "sideWidth", "contentMin", "space", "noStretch"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback(name) {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("sidebar-l", Sidebar);
  }

  // every-layout/components/Stack.js
  var Stack = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Stack-${[this.space, this.recursive, this.splitAfter].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"]${this.recursive ? "" : " >"} * + * {
            margin-block-start: ${this.space};
          }
      
          ${this.splitAfter ? `
            [data-i="${this.i}"]:only-child {
              block-size: 100%;
            }
      
            [data-i="${this.i}"] > :nth-child(${this.splitAfter}) {
              margin-block-end: auto;
            }` : ""}
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get space() {
      return this.getAttribute("space") || "var(--s1)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    get recursive() {
      return this.hasAttribute("recursive");
    }
    set recursive(val) {
      return this.setAttribute(val ? "recursive" : "");
    }
    get splitAfter() {
      return this.getAttribute("splitAfter") || null;
    }
    set splitAfter(val) {
      return this.setAttribute("splitAfter", val);
    }
    static get observedAttributes() {
      return ["space", "recursive", "splitAfter"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("stack-l", Stack);
  }

  // every-layout/components/Switcher.js
  var Switcher = class extends HTMLElement {
    constructor() {
      super();
      this.render = () => {
        this.i = `Switcher-${[this.threshold, this.space, this.limit].join("")}`;
        this.dataset.i = this.i;
        if (!document.getElementById(this.i)) {
          let styleEl = document.createElement("style");
          styleEl.id = this.i;
          styleEl.innerHTML = `
          [data-i="${this.i}"] {
            gap: ${this.space};
          }

          [data-i="${this.i}"] > * {
            flex-basis: calc((${this.threshold} - 100%) * 999);
          }

          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit) + 1}),
          [data-i="${this.i}"] > :nth-last-child(n+${parseInt(this.limit) + 1}) ~ * {
            flex-basis: 100%;
          }
        `.replace(/\s\s+/g, " ").trim();
          document.head.appendChild(styleEl);
        }
      };
    }
    get threshold() {
      return this.getAttribute("threshold") || "var(--measure)";
    }
    set threshold(val) {
      return this.setAttribute("threshold", val);
    }
    get space() {
      return this.getAttribute("space") || "var(--s1)";
    }
    set space(val) {
      return this.setAttribute("space", val);
    }
    get limit() {
      return this.getAttribute("limit") || "5";
    }
    set limit(val) {
      return this.setAttribute("limit", val);
    }
    static get observedAttributes() {
      return ["threshold", "space", "limit"];
    }
    connectedCallback() {
      this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
  };
  if ("customElements" in window) {
    customElements.define("switcher-l", Switcher);
  }

  // every-layout.js
  var every_layout_default = { Box, Center, Cluster, Container, Cover, Frame, Grid, Icon, Imposter, Reel, Sidebar, Stack, Switcher };
})();
