var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/routes/component/home.jsx
var require_home = __commonJS({
  "app/routes/component/home.jsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.jsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

// app/routes/component/our-service.jsx
var our_service_exports = {};
__export(our_service_exports, {
  default: () => OurService
});

// app/css/our-service.css
var our_service_default = "/build/_assets/our-service-6ZER2EME.css";

// app/images/imagerect.png
var imagerect_default = "/build/_assets/imagerect-YTSRJC4J.png";

// app/routes/component/our-service.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OurService() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: our_service_default
          }, void 0, !1, {
            fileName: "app/routes/component/our-service.jsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/component/our-service.jsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/component/our-service.jsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/component/our-service.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Our Service"
          }, void 0, !1, {
            fileName: "app/routes/component/our-service.jsx",
            lineNumber: 12,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/component/our-service.jsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "our-service",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "ourservicename",
              children: "Our Service"
            }, void 0, !1, {
              fileName: "app/routes/component/our-service.jsx",
              lineNumber: 16,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-sm col-xs-12 col-centered content-para",
              children: [
                "At Eco-builders, we place the client\u2019s needs first and build structures that will have a positive impact on their lives. Below are a few types of structures that we specialize in:",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: "Office buildings"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 23,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: "Mansions"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 24,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      children: "Eco houses"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 25,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 22,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/our-service.jsx",
              lineNumber: 18,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row office",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-6 col-xs-12 ",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: imagerect_default,
                    alt: "",
                    className: "imageRect"
                  }, void 0, !1, {
                    fileName: "app/routes/component/our-service.jsx",
                    lineNumber: 31,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 30,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-6 col-xs-12",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "office-name",
                      children: "Office buildings"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 35,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "office-text",
                      children: "We build elegant office buildings that can be custom-made to suit your office needs at an affordable price."
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 36,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "learn-more",
                      children: "Learn more"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 41,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 34,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/our-service.jsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row office",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-6 col-xs-12 building-office",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "office-name",
                      children: "Office buildings"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 47,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "office-text",
                      children: "We build elegant office buildings that can be custom-made to suit your office needs at an affordable price."
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 48,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "learn-more",
                      children: "Learn more"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 53,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 46,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-6 col-xs-12 order-first order-md-last",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: imagerect_default,
                    alt: "",
                    className: "imageRect"
                  }, void 0, !1, {
                    fileName: "app/routes/component/our-service.jsx",
                    lineNumber: 57,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/our-service.jsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row office",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-6 col-xs-12",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: imagerect_default,
                    alt: "",
                    className: "imageRect"
                  }, void 0, !1, {
                    fileName: "app/routes/component/our-service.jsx",
                    lineNumber: 63,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-6 col-xs-12",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "office-name",
                      children: "Office buildings"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 67,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "office-text",
                      children: "We build elegant office buildings that can be custom-made to suit your office needs at an affordable price."
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 68,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      className: "learn-more",
                      children: "Learn more"
                    }, void 0, !1, {
                      fileName: "app/routes/component/our-service.jsx",
                      lineNumber: 73,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/component/our-service.jsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/our-service.jsx",
              lineNumber: 61,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/component/our-service.jsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/component/our-service.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/component/our-service.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/component/lets-talk.jsx
var lets_talk_exports = {};
__export(lets_talk_exports, {
  default: () => LetsTalk
});

// app/css/lets-talk.css
var lets_talk_default = "/build/_assets/lets-talk-XRFPAXPT.css";

// app/routes/component/lets-talk.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function LetsTalk() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: lets_talk_default
          }, void 0, !1, {
            fileName: "app/routes/component/lets-talk.jsx",
            lineNumber: 7,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/component/lets-talk.jsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/component/lets-talk.jsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/component/lets-talk.jsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Let\u2019s talk"
          }, void 0, !1, {
            fileName: "app/routes/component/lets-talk.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/component/lets-talk.jsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "main-lets-talk",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "lets-talk",
              children: "Let\u2019s talk"
            }, void 0, !1, {
              fileName: "app/routes/component/lets-talk.jsx",
              lineNumber: 15,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-box",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm col-xs",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    placeholder: "Enter your email",
                    className: "email"
                  }, void 0, !1, {
                    fileName: "app/routes/component/lets-talk.jsx",
                    lineNumber: 19,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/lets-talk.jsx",
                  lineNumber: 18,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm col-xs",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    placeholder: "Enter your full name",
                    className: "name"
                  }, void 0, !1, {
                    fileName: "app/routes/component/lets-talk.jsx",
                    lineNumber: 28,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/lets-talk.jsx",
                  lineNumber: 27,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm col-xs",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    placeholder: "Enter message..",
                    className: "message"
                  }, void 0, !1, {
                    fileName: "app/routes/component/lets-talk.jsx",
                    lineNumber: 36,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/lets-talk.jsx",
                  lineNumber: 35,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm col-xs",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: "send-message",
                    children: "Send Message"
                  }, void 0, !1, {
                    fileName: "app/routes/component/lets-talk.jsx",
                    lineNumber: 44,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/lets-talk.jsx",
                  lineNumber: 43,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/lets-talk.jsx",
              lineNumber: 17,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/component/lets-talk.jsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/component/lets-talk.jsx",
        lineNumber: 13,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/component/lets-talk.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/component/about-us.jsx
var about_us_exports = {};
__export(about_us_exports, {
  default: () => AboutUs
});

// app/css/about-us.css
var about_us_default = "/build/_assets/about-us-H4F36M46.css";

// app/images/vision.png
var vision_default = "/build/_assets/vision-QQNFM5CZ.png";

// app/images/mission.png
var mission_default = "/build/_assets/mission-3L2AIOZS.png";

// app/images/polygon1.png
var polygon1_default = "/build/_assets/polygon1-LUOVW3VJ.png";

// app/images/polygon2.png
var polygon2_default = "/build/_assets/polygon2-PASLTGBB.png";

// app/images/polygon3.png
var polygon3_default = "/build/_assets/polygon3-VMFELCOF.png";

// app/images/insta.png
var insta_default = "/build/_assets/insta-2TRAYK3Q.png";

// app/routes/component/about-us.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function AboutUs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: about_us_default
          }, void 0, !1, {
            fileName: "app/routes/component/about-us.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/component/about-us.jsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/component/about-us.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/component/about-us.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "About us"
          }, void 0, !1, {
            fileName: "app/routes/component/about-us.jsx",
            lineNumber: 17,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/component/about-us.jsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "about-us-body",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "about-us-name",
              children: "About Us"
            }, void 0, !1, {
              fileName: "app/routes/component/about-us.jsx",
              lineNumber: 21,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row row-centered justify-content-around about",
              align: "center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-4 col-xs-12 col-centered",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "ourmission",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "row our-mission",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: vision_default,
                          alt: "",
                          className: "mission-img"
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 30,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "our-mission-text",
                          children: "Our vision"
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 31,
                          columnNumber: 19
                        }, this),
                        "Being a world class organization that transforms lifes one building at a time."
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/component/about-us.jsx",
                      lineNumber: 29,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/component/about-us.jsx",
                    lineNumber: 28,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/about-us.jsx",
                  lineNumber: 27,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-4 col-xs-12 col-centered",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "ourmission",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "row our-mission",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: mission_default,
                          alt: "",
                          className: "mission-img"
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 41,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "our-mission-text",
                          children: "Our mission"
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 42,
                          columnNumber: 19
                        }, this),
                        "Build durable and eco-friendly buildings that will serve many generations to come."
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/component/about-us.jsx",
                      lineNumber: 40,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/component/about-us.jsx",
                    lineNumber: 39,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/about-us.jsx",
                  lineNumber: 38,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/about-us.jsx",
              lineNumber: 23,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "meet",
              children: "Meet our leaders:"
            }, void 0, !1, {
              fileName: "app/routes/component/about-us.jsx",
              lineNumber: 51,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "row polygon",
              align: "center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-4 col-xs-12 col-centered",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "col-sm col-xs-12 col-centered",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: polygon1_default,
                        alt: "",
                        className: "poly1"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 56,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-name",
                        children: "Hillary Doe"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 57,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-des",
                        children: "Chief Architect"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 58,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-des",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: insta_default,
                          alt: ""
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 60,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 59,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/component/about-us.jsx",
                    lineNumber: 55,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/about-us.jsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-4 col-xs-12 col-centered",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "col-sm col-xs-12 col-centered",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: polygon2_default,
                        alt: "",
                        className: "poly2"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 67,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-name",
                        children: "Janet Juma"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 68,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-des",
                        children: "CEO & Co-founder"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 69,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-des",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: insta_default,
                          alt: ""
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 71,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 70,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/component/about-us.jsx",
                    lineNumber: 66,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/about-us.jsx",
                  lineNumber: 65,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "col-sm-4 col-xs-12 col-centered",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "col-sm col-xs-12 col-centered",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: polygon3_default,
                        alt: "",
                        className: "poly3"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 78,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-name",
                        children: "John James"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 79,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-des",
                        children: "Head of Marketting"
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 80,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "team-des",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: insta_default,
                          alt: ""
                        }, void 0, !1, {
                          fileName: "app/routes/component/about-us.jsx",
                          lineNumber: 82,
                          columnNumber: 19
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/about-us.jsx",
                        lineNumber: 81,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/component/about-us.jsx",
                    lineNumber: 77,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/component/about-us.jsx",
                  lineNumber: 76,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/component/about-us.jsx",
              lineNumber: 53,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/component/about-us.jsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/component/about-us.jsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/component/about-us.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/component/content.jsx
var content_exports = {};
__export(content_exports, {
  default: () => Content
});

// app/css/content.css
var content_default = "/build/_assets/content-25RTZBU7.css";

// app/images/construction.png
var construction_default = "/build/_assets/construction-TWTD2LZ5.png";

// app/routes/component/content.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Content() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: content_default
          }, void 0, !1, {
            fileName: "app/routes/component/content.jsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/component/content.jsx",
            lineNumber: 9,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/component/content.jsx",
            lineNumber: 10,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/component/content.jsx",
            lineNumber: 11,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Content"
          }, void 0, !1, {
            fileName: "app/routes/component/content.jsx",
            lineNumber: 12,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/component/content.jsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container1",
          align: "center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "row align-items-center content",
            align: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-sm-6 col-xs-6 aa",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "heading-content",
                    children: "Building something?"
                  }, void 0, !1, {
                    fileName: "app/routes/component/content.jsx",
                    lineNumber: 18,
                    columnNumber: 15
                  }, this),
                  "Eco-builders is a team of professional construction workers whose sole mission is to build durable and eco-friendly buildings."
                ]
              }, void 0, !0, {
                fileName: "app/routes/component/content.jsx",
                lineNumber: 17,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-sm-6 col-xs-6 order-first order-md-last ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: construction_default,
                  alt: "",
                  className: "construct-img"
                }, void 0, !1, {
                  fileName: "app/routes/component/content.jsx",
                  lineNumber: 24,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/component/content.jsx",
                lineNumber: 23,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/component/content.jsx",
            lineNumber: 16,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/component/content.jsx",
          lineNumber: 15,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/component/content.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/component/content.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/component/footer.jsx
var footer_exports = {};
__export(footer_exports, {
  default: () => Footer
});

// app/css/footer.css
var footer_default = "/build/_assets/footer-P7IN7MYT.css";

// app/routes/component/footer.jsx
var import_react3 = require("react"), import_mdb_react_ui_kit = require("mdb-react-ui-kit"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: footer_default
          }, void 0, !1, {
            fileName: "app/routes/component/footer.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/component/footer.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/component/footer.jsx",
            lineNumber: 17,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/component/footer.jsx",
            lineNumber: 18,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Footer"
          }, void 0, !1, {
            fileName: "app/routes/component/footer.jsx",
            lineNumber: 19,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/component/footer.jsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBFooter, {
          bgColor: "light",
          className: "text-center footer text-lg-start text-muted",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            className: "footer",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBContainer, {
              className: "text-center text-md-start mt-5",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBRow, {
                className: "mt-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBCol, {
                    md: "3",
                    lg: "2",
                    xl: "2",
                    className: "mx-auto mb-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", {
                        className: "text-uppercase fw-bold mb-4",
                        children: "Quick links:"
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 30,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          href: "#!",
                          className: "text-reset",
                          children: "Home"
                        }, void 0, !1, {
                          fileName: "app/routes/component/footer.jsx",
                          lineNumber: 32,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 31,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          href: "#!",
                          className: "text-reset",
                          children: "Service"
                        }, void 0, !1, {
                          fileName: "app/routes/component/footer.jsx",
                          lineNumber: 37,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 36,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          href: "#!",
                          className: "text-reset",
                          children: "About Us"
                        }, void 0, !1, {
                          fileName: "app/routes/component/footer.jsx",
                          lineNumber: 42,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 41,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                          href: "#!",
                          className: "text-reset",
                          children: "Contact Us"
                        }, void 0, !1, {
                          fileName: "app/routes/component/footer.jsx",
                          lineNumber: 47,
                          columnNumber: 21
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 46,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/component/footer.jsx",
                    lineNumber: 29,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "col",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "our-vision",
                        children: "Our vision:"
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 54,
                        columnNumber: 14
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "div",
                        children: "Being a world class organization that transforms lifes one building at a time."
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 55,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/component/footer.jsx",
                    lineNumber: 53,
                    columnNumber: 14
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBCol, {
                    md: "4",
                    lg: "3",
                    xl: "3",
                    className: "mx-auto mb-md-0 mb-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", {
                        className: "text-uppercase fw-bold mb-4",
                        children: "Contact"
                      }, void 0, !1, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 64,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBIcon, {
                            icon: "home",
                            className: "me-2"
                          }, void 0, !1, {
                            fileName: "app/routes/component/footer.jsx",
                            lineNumber: 66,
                            columnNumber: 21
                          }, this),
                          "New York, NY 10012, US"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 65,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBIcon, {
                            icon: "envelope",
                            className: "me-3"
                          }, void 0, !1, {
                            fileName: "app/routes/component/footer.jsx",
                            lineNumber: 70,
                            columnNumber: 21
                          }, this),
                          "info@example.com"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 69,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBIcon, {
                            icon: "phone",
                            className: "me-3"
                          }, void 0, !1, {
                            fileName: "app/routes/component/footer.jsx",
                            lineNumber: 74,
                            columnNumber: 21
                          }, this),
                          " + 01 234 567 88"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 73,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_mdb_react_ui_kit.MDBIcon, {
                            icon: "print",
                            className: "me-3"
                          }, void 0, !1, {
                            fileName: "app/routes/component/footer.jsx",
                            lineNumber: 77,
                            columnNumber: 21
                          }, this),
                          " + 01 234 567 89"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/component/footer.jsx",
                        lineNumber: 76,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/component/footer.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/component/footer.jsx",
                lineNumber: 28,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/component/footer.jsx",
              lineNumber: 27,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/component/footer.jsx",
            lineNumber: 26,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/component/footer.jsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/component/footer.jsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/component/footer.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/component/header.jsx
var header_exports = {};
__export(header_exports, {
  default: () => Header
});

// app/css/header.css
var header_default = "/build/_assets/header-3MUVHTNV.css";

// app/routes/component/header.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css",
            integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO",
            crossorigin: "anonymous"
          }, void 0, !1, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 6,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: header_default
          }, void 0, !1, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 15,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Header"
          }, void 0, !1, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 16,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/component/header.jsx",
        lineNumber: 5,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "container-fluid",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "row",
            align: "center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-sm-2 col-xs-6 web-name",
                children: "Eco-builder"
              }, void 0, !1, {
                fileName: "app/routes/component/header.jsx",
                lineNumber: 21,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-sm-8 col-xs-6 header-home",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "row justify-content-center main",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "#",
                      className: "home",
                      children: "Home"
                    }, void 0, !1, {
                      fileName: "app/routes/component/header.jsx",
                      lineNumber: 24,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "#",
                      className: "home",
                      children: "Services"
                    }, void 0, !1, {
                      fileName: "app/routes/component/header.jsx",
                      lineNumber: 27,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "#",
                      className: "home",
                      children: "About us"
                    }, void 0, !1, {
                      fileName: "app/routes/component/header.jsx",
                      lineNumber: 30,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                      href: "#",
                      className: "home",
                      children: "Contact us"
                    }, void 0, !1, {
                      fileName: "app/routes/component/header.jsx",
                      lineNumber: 33,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/component/header.jsx",
                  lineNumber: 23,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/component/header.jsx",
                lineNumber: 22,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-sm-2 col-xs-6 login",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "login-button",
                  children: "Login"
                }, void 0, !1, {
                  fileName: "app/routes/component/header.jsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/component/header.jsx",
                lineNumber: 39,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/component/header.jsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/component/header.jsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/component/header.jsx",
        lineNumber: 18,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/component/header.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route7 = __toESM(require_home());

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/css/global.css
var global_default = "/build/_assets/global-T4Z2BPX4.css";

// app/routes/index.jsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: global_default
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 13,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charset: "UTF-8"
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 14,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            "http-equiv": "X-UA-Compatible",
            content: "IE=edge"
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 15,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0"
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 16,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
            children: "Main Page"
          }, void 0, !1, {
            fileName: "app/routes/index.jsx",
            lineNumber: 17,
            columnNumber: 7
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.jsx",
        lineNumber: 12,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "header",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 21,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {}, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 22,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OurService, {}, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 23,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AboutUs, {}, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 24,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LetsTalk, {}, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 25,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, !1, {
              fileName: "app/routes/index.jsx",
              lineNumber: 26,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.jsx",
          lineNumber: 20,
          columnNumber: 7
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.jsx",
        lineNumber: 19,
        columnNumber: 5
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "ad028c3c", entry: { module: "/build/entry.client-S4PCK4AN.js", imports: ["/build/_shared/chunk-7KDHOSXL.js", "/build/_shared/chunk-OXFCRATX.js", "/build/_shared/chunk-3CPB4T5C.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6MYRAHLW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/about-us": { id: "routes/component/about-us", parentId: "root", path: "component/about-us", index: void 0, caseSensitive: void 0, module: "/build/routes/component/about-us-7FI6A4UE.js", imports: ["/build/_shared/chunk-C5QZOCCK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/content": { id: "routes/component/content", parentId: "root", path: "component/content", index: void 0, caseSensitive: void 0, module: "/build/routes/component/content-VVZNDY7N.js", imports: ["/build/_shared/chunk-JAOK2KJQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/footer": { id: "routes/component/footer", parentId: "root", path: "component/footer", index: void 0, caseSensitive: void 0, module: "/build/routes/component/footer-QQMMA4YJ.js", imports: ["/build/_shared/chunk-U4DKHLLY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/header": { id: "routes/component/header", parentId: "root", path: "component/header", index: void 0, caseSensitive: void 0, module: "/build/routes/component/header-W3DJVVAJ.js", imports: ["/build/_shared/chunk-TVPHCOIK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/home": { id: "routes/component/home", parentId: "root", path: "component/home", index: void 0, caseSensitive: void 0, module: "/build/routes/component/home-3CAA76HO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/lets-talk": { id: "routes/component/lets-talk", parentId: "root", path: "component/lets-talk", index: void 0, caseSensitive: void 0, module: "/build/routes/component/lets-talk-EUTOWDLC.js", imports: ["/build/_shared/chunk-UNDQUYEE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/component/our-service": { id: "routes/component/our-service", parentId: "root", path: "component/our-service", index: void 0, caseSensitive: void 0, module: "/build/routes/component/our-service-N63PUDP4.js", imports: ["/build/_shared/chunk-7AKSQ25X.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-35CEAQT6.js", imports: ["/build/_shared/chunk-7AKSQ25X.js", "/build/_shared/chunk-UNDQUYEE.js", "/build/_shared/chunk-C5QZOCCK.js", "/build/_shared/chunk-JAOK2KJQ.js", "/build/_shared/chunk-U4DKHLLY.js", "/build/_shared/chunk-TVPHCOIK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AD028C3C.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/component/our-service": {
    id: "routes/component/our-service",
    parentId: "root",
    path: "component/our-service",
    index: void 0,
    caseSensitive: void 0,
    module: our_service_exports
  },
  "routes/component/lets-talk": {
    id: "routes/component/lets-talk",
    parentId: "root",
    path: "component/lets-talk",
    index: void 0,
    caseSensitive: void 0,
    module: lets_talk_exports
  },
  "routes/component/about-us": {
    id: "routes/component/about-us",
    parentId: "root",
    path: "component/about-us",
    index: void 0,
    caseSensitive: void 0,
    module: about_us_exports
  },
  "routes/component/content": {
    id: "routes/component/content",
    parentId: "root",
    path: "component/content",
    index: void 0,
    caseSensitive: void 0,
    module: content_exports
  },
  "routes/component/footer": {
    id: "routes/component/footer",
    parentId: "root",
    path: "component/footer",
    index: void 0,
    caseSensitive: void 0,
    module: footer_exports
  },
  "routes/component/header": {
    id: "routes/component/header",
    parentId: "root",
    path: "component/header",
    index: void 0,
    caseSensitive: void 0,
    module: header_exports
  },
  "routes/component/home": {
    id: "routes/component/home",
    parentId: "root",
    path: "component/home",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
