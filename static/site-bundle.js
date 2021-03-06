/*! For license information please see site-bundle.js.LICENSE.txt */
!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(window, (function () {
    return function (e) {
        function t(t) {
            for (var r, a, s = t[0], c = t[1], u = t[2], d = 0, f = []; d < s.length; d++) a = s[d], Object.prototype.hasOwnProperty.call(o, a) && o[a] && f.push(o[a][0]), o[a] = 0;
            for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
            for (l && l(t); f.length;) f.shift()();
            return i.push.apply(i, u || []), n()
        }

        function n() {
            for (var e, t = 0; t < i.length; t++) {
                for (var n = i[t], r = !0, s = 1; s < n.length; s++) {
                    var c = n[s];
                    0 !== o[c] && (r = !1)
                }
                r && (i.splice(t--, 1), e = a(a.s = n[0]))
            }
            return e
        }

        var r = {}, o = {10: 0}, i = [];

        function a(t) {
            if (r[t]) return r[t].exports;
            var n = r[t] = {i: t, l: !1, exports: {}};
            return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
        }

        a.m = e, a.c = r, a.d = function (e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, a.t = function (e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var r in e) a.d(n, r, function (t) {
                return e[t]
            }.bind(null, r));
            return n
        }, a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "";
        var s = window.wpJsonpTemplateSections = window.wpJsonpTemplateSections || [], c = s.push.bind(s);
        s.push = t, s = s.slice();
        for (var u = 0; u < s.length; u++) t(s[u]);
        var l = c;
        return i.push([395, 0]), n()
    }(Array(48).concat([function (e, t, n) {
        "use strict";
        var r = n(27), o = n(259), i = n(59);
        r({target: "String", proto: !0, forced: !n(260)("includes")}, {
            includes: function (e) {
                return !!~String(i(this)).indexOf(o(e), arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
        var n = e.exports = {version: "2.6.11"};
        "number" == typeof __e && (__e = n)
    }, function (e, t, n) {
        var r = n(210)("wks"), o = n(211), i = n(100).Symbol, a = "function" == typeof i;
        (e.exports = function (e) {
            return r[e] || (r[e] = a && i[e] || (a ? i : o)("Symbol." + e))
        }).store = r
    }, , function (e, t, n) {
        "use strict";
        var r = i(n(269)), o = i(n(270));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = n(276), s = n(277), c = s.getValidNodes, u = s.validateCallbacks, l = s.validateBoolean, d = n(300),
            f = d.VIEWPORT_INFO, p = d.callRangeEvents, h = d.callViewportEvents, m = d.getRatioVisible,
            y = d.getRangeValues, g = d.getNodePosition, v = d.getScrollDirection, b = d.getScrollingElementScrollTop,
            w = d.isInRange, S = d.passiveEventListener, A = d.updateNodePosition, O = d.updateRangeValues,
            x = function () {
                function e() {
                    (0, r.default)(this, e), this.watchInfo = [], this.scrollingElement = document.scrollingElement || document.body, this.viewportInfo = this.updateViewportInfo(), this.supportsPassive = S(), this.supportsIntersectionObserver = window.IntersectionObserver, this.attachListeners(), this.updateInfo()
                }

                return (0, o.default)(e, [{
                    key: "destroy", value: function () {
                        this.watchInfo = [], this.detachListeners()
                    }
                }, {
                    key: "attachListeners", value: function () {
                        this.boundUpdateInfo = this.updateInfo.bind(this), window.addEventListener("scroll", this.boundUpdateInfo, this.supportsPassive), this.crossBrowserUpdateInfo = a.addListener(this.boundUpdateInfo), this.intersectionObserver && this.intersectionObserver.disconnect()
                    }
                }, {
                    key: "detachListeners", value: function () {
                        window.removeEventListener("scroll", this.boundUpdateInfo, this.supportsPassive), a.removeListener(this.crossBrowserUpdateInfo)
                    }
                }, {
                    key: "updateInfo", value: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments[1], r = function () {
                            };
                        r = "scroll" === t.type ? function () {
                            e.viewportInfo = e.updateViewportInfo(n), e.updateWatchInfo()
                        } : function () {
                            O(e.watchInfo), e.viewportInfo = e.updateViewportInfo(n), e.refreshPositionData()
                        }, requestAnimationFrame(r)
                    }
                }, {
                    key: "updateWatchInfo", value: function () {
                        var e = this;
                        this.watchInfo.forEach((function (t) {
                            var n = t.suspendWatch, r = t.range, o = t.inRange;
                            if (!0 !== n) {
                                var i = A(t);
                                t.position = i;
                                var a = w(e.supportsIntersectionObserver, t, i, t.useElementHeight);
                                t.prevRatioVisible = t.ratioVisible || 0, t.ratioVisible = m(r, i), t.prevRatioVisible < t.ratioVisible ? t.presence = "entering" : t.prevRatioVisible > t.ratioVisible ? t.presence = "leaving" : t.presence = null, a && h(t), o !== a && (a || (t.presence = null), t.inRange = a, p(t, a))
                            }
                        }))
                    }
                }, {
                    key: "updateViewportInfo", value: function (e) {
                        var t = e || b(this.scrollingElement);
                        return f.direction = v(this.scrollingElement, t), f.scrollTop = t, f
                    }
                }, {
                    key: "addNodes", value: function (e) {
                        var t = this, n = c(e.nodes);
                        if (!n) return !1;
                        var r = u(e.callbacks), o = y(e.range), i = l(e.useElementHeight, !0);
                        this.supportsIntersectionObserver && (this.intersectionObserver = new window.IntersectionObserver((function (e) {
                            e.forEach((function (e) {
                                var n = t.getNodeInfo(e.target)[0];
                                n && (n.observedInRange = e.isIntersecting)
                            })), t.updateWatchInfo()
                        }), {
                            rootNode: null,
                            threshold: 0,
                            rootMargin: 0 - o.top + "px 0px " + (o.bottom - window.innerHeight) + "px 0px"
                        })), n.forEach((function (n) {
                            t.intersectionObserver && t.intersectionObserver.observe(n);
                            var a = g(n);
                            t.watchInfo.push({
                                node: n,
                                callbacks: r,
                                range: o,
                                useElementHeight: i,
                                initialPosition: a,
                                position: a,
                                rangeArray: e.range,
                                suspendWatch: !1
                            })
                        })), this.updateWatchInfo()
                    }
                }, {
                    key: "removeNodes", value: function (e) {
                        var t = this, n = c(e, this.watchInfo);
                        if (!n) return !1;
                        var r = [];
                        return n.forEach((function (e) {
                            t.watchInfo = t.watchInfo.reduce((function (t, n) {
                                return n.node !== e ? t.push(n) : r.push({
                                    nodes: n.node,
                                    range: n.rangeArray,
                                    callbacks: n.callbacks
                                }), t
                            }), [])
                        })), r
                    }
                }, {
                    key: "suspendWatchingNodes", value: function (e) {
                        var t = this, n = c(e, this.watchInfo);
                        if (!n) return !1;
                        n.forEach((function (e) {
                            t.getNodeInfo(e).forEach((function (e) {
                                e.suspendWatch = !0
                            }))
                        }))
                    }
                }, {
                    key: "resumeWatchingNodes", value: function (e) {
                        var t = this, n = c(e, this.watchInfo);
                        if (!n) return !1;
                        n.forEach((function (e) {
                            t.getNodeInfo(e).forEach((function (e) {
                                e.suspendWatch = !1
                            }))
                        })), this.updateWatchInfo()
                    }
                }, {
                    key: "refreshPositionData", value: function (e) {
                        var t = this, n = c(e, this.watchInfo);
                        if (!n) return !1;
                        n.forEach((function (e) {
                            t.getNodeInfo(e).forEach((function (t) {
                                t.initialPosition = g(e)
                            }))
                        })), this.updateWatchInfo()
                    }
                }, {
                    key: "getNodeInfo", value: function (e) {
                        var t = this, n = c(e, this.watchInfo);
                        if (!n) return !1;
                        var r = [];
                        return n.forEach((function (e) {
                            t.watchInfo.reduce((function (t, n) {
                                return n.node === e && t.push(n), t
                            }), r)
                        })), r
                    }
                }]), e
            }();
        e.exports = x
    }, , , , , , , , , , , , , , , , , , , , function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (e, t, n) {
        var r = n(119), o = n(274), i = n(275), a = Object.defineProperty;
        t.f = n(102) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return a(e, t, n)
            } catch (e) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function (e, t, n) {
        e.exports = !n(154)((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (e, t, n) {
        var r = n(27), o = n(306).values;
        r({target: "Object", stat: !0}, {
            values: function (e) {
                return o(e)
            }
        })
    }, , , , , , , , , , , , , , function (e, t, n) {
        var r = n(100), o = n(77), i = n(203), a = n(118), s = n(120), c = function (e, t, n) {
            var u, l, d, f = e & c.F, p = e & c.G, h = e & c.S, m = e & c.P, y = e & c.B, g = e & c.W,
                v = p ? o : o[t] || (o[t] = {}), b = v.prototype, w = p ? r : h ? r[t] : (r[t] || {}).prototype;
            for (u in p && (n = t), n) (l = !f && w && void 0 !== w[u]) && s(v, u) || (d = l ? w[u] : n[u], v[u] = p && "function" != typeof w[u] ? n[u] : y && l ? i(d, r) : g && w[u] == d ? function (e) {
                var t = function (t, n, r) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n)
                        }
                        return new e(t, n, r)
                    }
                    return e.apply(this, arguments)
                };
                return t.prototype = e.prototype, t
            }(d) : m && "function" == typeof d ? i(Function.call, d) : d, m && ((v.virtual || (v.virtual = {}))[u] = d, e & c.R && b && !b[u] && a(b, u, d)))
        };
        c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
    }, function (e, t, n) {
        var r = n(101), o = n(155);
        e.exports = n(102) ? function (e, t, n) {
            return r.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, function (e, t, n) {
        var r = n(153);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    }, function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, function (e, t) {
        e.exports = function (e) {
            return e && e.__esModule ? e : {default: e}
        }
    }, function (e, t, n) {
        var r = n(218)(Object, "create");
        e.exports = r
    }, function (e, t, n) {
        var r = n(341);
        e.exports = function (e, t) {
            for (var n = e.length; n--;) if (r(e[n][0], t)) return n;
            return -1
        }
    }, function (e, t, n) {
        var r = n(347);
        e.exports = function (e, t) {
            var n = e.__data__;
            return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(167).DOCUMENT, o = n(215);
        e.exports = function (e) {
            return e ? e.nodeType === r ? o(e) : "HTML" === e.nodeName ? o(e.ownerDocument) : e : null
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, function (e, t) {
        var n = Math.ceil, r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    }, function (e, t) {
        e.exports = {}
    }, function (e, t, n) {
        var r = n(210)("keys"), o = n(211);
        e.exports = function (e) {
            return r[e] || (r[e] = o(e))
        }
    }, function (e, t, n) {
        var r = n(157);
        e.exports = function (e) {
            return Object(r(e))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(162), o = n(355), i = n(125), a = function (e, t) {
            return "auto" === e || "scroll" === e || "visible" === e && "HTML" === t.nodeName
        };
        e.exports = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!r(e, "ownerDocument.defaultView")) return !1;
            var n = o(e), s = n.overflowX, c = n.overflowY;
            if (!0 === t) return a(c, e) || a(s, e);
            var u = i(e), l = u.scrollHeight, d = u.scrollWidth, f = u.clientHeight, p = u.clientWidth;
            return "HTML" === e.nodeName && (f = Math.min(f, e.ownerDocument.defaultView.innerHeight), p = Math.min(p, e.ownerDocument.defaultView.innerWidth)), a(c, e) && l > f || a(s, e) && d > p
        }
    }, function (e, t, n) {
        var r = n(314);
        e.exports = function (e, t, n) {
            var o = null == e ? void 0 : r(e, t);
            return void 0 === o ? n : o
        }
    }, function (e, t) {
        var n = Array.isArray;
        e.exports = n
    }, function (e, t, n) {
        var r = n(217), o = n(320);
        e.exports = function (e) {
            return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
        }
    }, function (e, t, n) {
        var r = n(166).Symbol;
        e.exports = r
    }, function (e, t, n) {
        var r = n(317), o = "object" == typeof self && self && self.Object === Object && self,
            i = r || o || Function("return this")();
        e.exports = i
    }, function (e, t, n) {
        "use strict";
        e.exports = {ELEMENT: 1, TEXT: 3, COMMENT: 8, DOCUMENT: 9, DOCTYPE: 10, FRAGMENT: 11}
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.validatedImage = t.getVideoSource = t.getVideoID = t.getStartTime = t.getPlayerElement = t.findPlayerAspectRatio = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o = n(170), i = s(n(388)), a = s(n(391));

        function s(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var c = {
            youtube: {
                parsePath: "query.t",
                timeRegex: /[hms]/,
                idRegex: o.YOUTUBE_REGEX,
                getDimensions: function (e) {
                    var t = void 0, n = void 0;
                    for (var o in e) {
                        var i = e[o];
                        if ("object" === (void 0 === i ? "undefined" : r(i)) && i.width && i.height) {
                            t = i.width, n = i.height;
                            break
                        }
                    }
                    return {w: t, h: n}
                }
            }, vimeo: {
                parsePath: null, timeRegex: /[#t=s]/, idRegex: o.VIMEO_REGEX, getDimensions: function (e) {
                    var t = void 0, n = void 0;
                    return e.dimensions ? (t = e.dimensions.width, n = e.dimensions.height) : e.iframe && (t = e.iframe.clientWidth, n = e.iframe.clientHeight), {
                        w: t,
                        h: n
                    }
                }
            }
        };
        t.findPlayerAspectRatio = function (e, t, n) {
            var r = void 0, o = void 0;
            if (t) {
                var i = c[n].getDimensions(t);
                r = i.w, o = i.h
            }
            return r && o || (r = e.clientWidth, o = e.clientHeight, console.warn("No width and height found in " + n + " player " + t + ". Using container dimensions.")), parseInt(r, 10) / parseInt(o, 10)
        }, t.getPlayerElement = function (e) {
            var t = e.querySelector("#player");
            return t || ((t = e.ownerDocument.createElement("div")).id = "player", e.appendChild(t)), t.setAttribute("style", "position: absolute; top: 0; bottom: 0; left: 0; right: 0;"), t
        }, t.getStartTime = function (e, t) {
            var n = function (e, t) {
                return c[t].parsePath ? (0, a.default)(e, c[t].parsePath) : null
            }(new i.default(e, !0), t);
            if (n) {
                var r = n.split(c[t].timeRegex).filter(Boolean), o = parseInt(r.pop(), 10) || 0,
                    s = 60 * parseInt(r.pop(), 10) || 0;
                return (3600 * parseInt(r.pop(), 10) || 0) + s + o
            }
        }, t.getVideoID = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.DEFAULT_PROPERTY_VALUES.url,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = c[t],
                r = n && e.match(n.idRegex), i = "vimeo" === t ? r[3] : r[2];
            if (r && i.length) return i;
            console.error("Video id at " + e + " is not valid")
        }, t.getVideoSource = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.DEFAULT_PROPERTY_VALUES.url,
                t = e.match(o.YOUTUBE_REGEX);
            return t && t[2].length ? "youtube" : (t = e.match(o.VIMEO_REGEX)) && t[3].length ? "vimeo" : void console.error("Video source " + e + " does not match supported types")
        }, t.validatedImage = function (e) {
            if (!e) return !1;
            var t = "IMG" === e.nodeName && e;
            return t || console.warn("Element is not a valid image element."), t
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = {enabled: !0, verbose: !1}, o = {
            container: "body",
            url: "https://youtu.be/xkEmYQvJ_68",
            source: "youtube",
            fitMode: "fill",
            scaleFactor: 1,
            playbackSpeed: 1,
            filter: 1,
            filterStrength: 50,
            timeCode: {start: 0, end: null},
            DEBUG: r
        };
        t.DEBUG = r, t.DEFAULT_PROPERTY_VALUES = o, t.TIMEOUT = 2500, t.YOUTUBE_REGEX = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/, t.VIMEO_REGEX = /^.*(vimeo\.com\/)(channels\/[a-zA-Z0-9]*\/)?([0-9]{7,}(#t\=.*s)?)/
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (e, t, n) {
        "use strict";
        var r = n(112), o = n(42), i = n(49), a = n(59), s = n(146), c = n(113);
        r("match", 1, (function (e, t, n) {
            return [function (t) {
                var n = a(this), r = null == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            }, function (e) {
                var r = n(t, e, this);
                if (r.done) return r.value;
                var a = o(e), u = String(this);
                if (!a.global) return c(a, u);
                var l = a.unicode;
                a.lastIndex = 0;
                for (var d, f = [], p = 0; null !== (d = c(a, u));) {
                    var h = String(d[0]);
                    f[p] = h, "" === h && (a.lastIndex = s(u, i(a.lastIndex), l)), p++
                }
                return 0 === p ? null : f
            }]
        }))
    }, function (e, t, n) {
        var r = n(29), o = n(31), i = n(82), a = o("iterator");
        e.exports = !r((function () {
            var e = new URL("b?a=1&b=2&c=3", "http://a"), t = e.searchParams, n = "";
            return e.pathname = "c%20d", t.forEach((function (e, r) {
                t.delete("b"), n += r + e
            })), i && !e.toJSON || !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://????????").host || "#%D0%B1" !== new URL("http://a#??").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        }))
    }, , function (e, t, n) {
        e.exports = {default: n(271), __esModule: !0}
    }, function (e, t, n) {
        var r = n(273);
        e.exports = function (e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    }, function (e, t, n) {
        var r = n(153), o = n(100).document, i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {}
        }
    }, function (e, t) {
        e.exports = !0
    }, function (e, t, n) {
        var r = n(287), o = n(212);
        e.exports = Object.keys || function (e) {
            return r(e, o)
        }
    }, function (e, t, n) {
        var r = n(288), o = n(157);
        e.exports = function (e) {
            return r(o(e))
        }
    }, function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, function (e, t, n) {
        var r = n(156), o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    }, function (e, t, n) {
        var r = n(77), o = n(100), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return i[e] || (i[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(205) ? "pure" : "global",
            copyright: "?? 2019 Denis Pushkarev (zloirock.ru)"
        })
    }, function (e, t) {
        var n = 0, r = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    }, function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (e, t, n) {
        var r = n(101).f, o = n(120), i = n(78)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {configurable: !0, value: t})
        }
    }, function (e, t) {
        var n, r, o = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }

        !function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                r = a
            }
        }();
        var c, u = [], l = !1, d = -1;

        function f() {
            l && c && (l = !1, c.length ? u = c.concat(u) : d = -1, u.length && p())
        }

        function p() {
            if (!l) {
                var e = s(f);
                l = !0;
                for (var t = u.length; t;) {
                    for (c = u, u = []; ++d < t;) c && c[d].run();
                    d = -1, t = u.length
                }
                c = null, l = !1, function (e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
            }
        }

        function h(e, t) {
            this.fun = e, this.array = t
        }

        function m() {
        }

        o.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            u.push(new h(e, t)), 1 !== u.length || l || s(p)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function (e) {
            return []
        }, o.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, o.cwd = function () {
            return "/"
        }, o.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, o.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return e.scrollingElement || e.documentElement || e.body
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(161), o = n(356), i = n(167).DOCUMENT;
        e.exports = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return t && r(e, n) ? e : o(e, (function (e) {
                return r(e, n)
            }), (function (e) {
                return e.nodeType === i
            }))
        }
    }, function (e, t, n) {
        var r = n(165), o = n(318), i = n(319), a = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
        }
    }, function (e, t, n) {
        var r = n(328), o = n(333);
        e.exports = function (e, t) {
            var n = o(e, t);
            return r(n) ? n : void 0
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(358);
        e.exports = function (e) {
            return e instanceof Node ? function (t) {
                return t === e
            } : "string" == typeof e ? function (t) {
                return r(t, e)
            } : e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(125), o = n(222), i = n(168), a = n(223), s = n(366), c = function () {
        }, u = function (e, t, n) {
            i(t) && (e.scrollLeft = t), i(n) && (e.scrollTop = n)
        };
        e.exports = function (e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            e = r(e);
            var l = "function" == typeof n.onEnd ? n.onEnd : c, d = a(n.minDuration, 50), f = a(n.maxDuration, 50),
                p = n.easing;
            if (i(t) && (t = {top: t}), !1 === p) return u(e, t.left, t.top), l(), null;
            var h = {left: e.scrollLeft, top: e.scrollTop}, m = [t.left - h.left, t.top - h.top],
                y = Math.max.apply(null, m.map((function (e) {
                    return Math.abs(e)
                })).filter(i));
            if (y < 1) return l(), null;
            var g = new s((function (t) {
                var n = h.left + t * m[0], r = h.top + t * m[1];
                u(e, n, r)
            }), {onEnd: l, duration: o(y, d, f), easing: "string" == typeof p && p ? p : "easeOutSine"});
            return g.start(), g
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n) {
            return Math.max(t, Math.min(e, n))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(168);
        e.exports = function (e, t) {
            return r(e) ? e : t
        }
    }, , , , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(386), o = r.OggVideo, i = r.Mp4Video;
        t.default = function () {
            return new Promise((function (e, t) {
                var n = document.createElement("video");
                n.autoplay = !0, n.setAttribute("autoplay", !0), n.muted = !0, n.setAttribute("muted", !0), n.playsinline = !0, n.setAttribute("playsinline", !0), n.volume = 0, n.setAttribute("data-is-playing", "false"), n.setAttribute("style", "width: 1px; height: 1px; position: fixed; top: 0; left: 0; z-index: 100;"), document.body.appendChild(n);
                var r = null, a = function () {
                    r && (clearTimeout(r), r = null);
                    try {
                        document.body.removeChild(n)
                    } catch (e) {
                        return
                    }
                };
                try {
                    if (n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/)) n.src = o; else {
                        if (!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/)) return a(), void t("no autoplay: element does not support mp4 or ogg format");
                        n.src = i
                    }
                } catch (e) {
                    return a(), void t("no autoplay: " + e)
                }
                n.addEventListener("play", (function () {
                    n.setAttribute("data-is-playing", "true"), r = setTimeout((function () {
                        a(), t("no autoplay: unsure")
                    }), 3e3)
                })), n.addEventListener("canplay", (function () {
                    return "true" === n.getAttribute("data-is-playing") ? (a(), e("autoplay supported"), !0) : (a(), t("no autoplay: browser does not support autoplay"), !1)
                })), n.load(), n.play()
            }))
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.filterOptions = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"], t.filterProperties = {
            blur: {
                modifier: function (e) {
                    return .3 * e
                }, unit: "px"
            }, brightness: {
                modifier: function (e) {
                    return .009 * e + .1
                }, unit: ""
            }, contrast: {
                modifier: function (e) {
                    return .4 * e + 80
                }, unit: "%"
            }, grayscale: {
                modifier: function (e) {
                    return e
                }, unit: "%"
            }, "hue-rotate": {
                modifier: function (e) {
                    return 3.6 * e
                }, unit: "deg"
            }, invert: {
                modifier: function (e) {
                    return 1
                }, unit: ""
            }, opacity: {
                modifier: function (e) {
                    return e
                }, unit: "%"
            }, saturate: {
                modifier: function (e) {
                    return 2 * e
                }, unit: "%"
            }, sepia: {
                modifier: function (e) {
                    return e
                }, unit: "%"
            }
        }
    }, , , function (e, t, n) {
        "use strict";
        var r = n(121);
        Object.defineProperty(t, "__esModule", {value: !0}), Object.defineProperty(t, "containFocus", {
            enumerable: !0,
            get: function () {
                return o.default
            }
        });
        var o = r(n(307))
    }, function (e, t, n) {
        "use strict";
        (function (e, n) {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            var i = void 0 !== e && "[object global]" === {}.toString.call(e);

            function a(e, t) {
                return 0 === e.indexOf(t.toLowerCase()) ? e : "".concat(t.toLowerCase()).concat(e.substr(0, 1).toUpperCase()).concat(e.substr(1))
            }

            function s(e) {
                return Boolean(e && 1 === e.nodeType && "nodeName" in e && e.ownerDocument && e.ownerDocument.defaultView)
            }

            function c(e) {
                return !isNaN(parseFloat(e)) && isFinite(e) && Math.floor(e) == e
            }

            function u(e) {
                return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)
            }

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.id, n = e.url,
                    r = t || n;
                if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                if (c(r)) return "https://vimeo.com/".concat(r);
                if (u(r)) return r.replace("http:", "https:");
                if (t) throw new TypeError("???".concat(t, "??? is not a valid video id."));
                throw new TypeError("???".concat(r, "??? is not a vimeo.com url."))
            }

            var d = void 0 !== Array.prototype.indexOf,
                f = "undefined" != typeof window && void 0 !== window.postMessage;
            if (!(i || d && f)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
            var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            !function (e) {
                if (!e.WeakMap) {
                    var t = Object.prototype.hasOwnProperty, n = function (e, t, n) {
                        Object.defineProperty ? Object.defineProperty(e, t, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        }) : e[t] = n
                    };
                    e.WeakMap = function () {
                        function e() {
                            if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
                            if (n(this, "_id", i("_WeakMap")), arguments.length > 0) throw new TypeError("WeakMap iterable is not supported")
                        }

                        function o(e, n) {
                            if (!r(e) || !t.call(e, "_id")) throw new TypeError(n + " method called on incompatible receiver " + typeof e)
                        }

                        function i(e) {
                            return e + "_" + a() + "." + a()
                        }

                        function a() {
                            return Math.random().toString().substring(2)
                        }

                        return n(e.prototype, "delete", (function (e) {
                            if (o(this, "delete"), !r(e)) return !1;
                            var t = e[this._id];
                            return !(!t || t[0] !== e) && (delete e[this._id], !0)
                        })), n(e.prototype, "get", (function (e) {
                            if (o(this, "get"), r(e)) {
                                var t = e[this._id];
                                return t && t[0] === e ? t[1] : void 0
                            }
                        })), n(e.prototype, "has", (function (e) {
                            if (o(this, "has"), !r(e)) return !1;
                            var t = e[this._id];
                            return !(!t || t[0] !== e)
                        })), n(e.prototype, "set", (function (e, t) {
                            if (o(this, "set"), !r(e)) throw new TypeError("Invalid value used as weak map key");
                            var i = e[this._id];
                            return i && i[0] === e ? (i[1] = t, this) : (n(e, this._id, [e, t]), this)
                        })), n(e, "_polyfill", !0), e
                    }()
                }

                function r(e) {
                    return Object(e) === e
                }
            }("undefined" != typeof self ? self : "undefined" != typeof window ? window : p);
            var h = function (e, t) {
                return e(t = {exports: {}}, t.exports), t.exports
            }((function (e) {
                var t, r, o;
                o = function () {
                    var e, t, r, o = Object.prototype.toString, i = void 0 !== n ? function (e) {
                        return n(e)
                    } : setTimeout;
                    try {
                        Object.defineProperty({}, "x", {}), e = function (e, t, n, r) {
                            return Object.defineProperty(e, t, {value: n, writable: !0, configurable: !1 !== r})
                        }
                    } catch (t) {
                        e = function (e, t, n) {
                            return e[t] = n, e
                        }
                    }

                    function a(e, n) {
                        r.add(e, n), t || (t = i(r.drain))
                    }

                    function s(e) {
                        var t, n = typeof e;
                        return null == e || "object" != n && "function" != n || (t = e.then), "function" == typeof t && t
                    }

                    function c() {
                        for (var e = 0; e < this.chain.length; e++) u(this, 1 === this.state ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                        this.chain.length = 0
                    }

                    function u(e, t, n) {
                        var r, o;
                        try {
                            !1 === t ? n.reject(e.msg) : (r = !0 === t ? e.msg : t.call(void 0, e.msg)) === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (o = s(r)) ? o.call(r, n.resolve, n.reject) : n.resolve(r)
                        } catch (e) {
                            n.reject(e)
                        }
                    }

                    function l(e) {
                        var t, n = this;
                        if (!n.triggered) {
                            n.triggered = !0, n.def && (n = n.def);
                            try {
                                (t = s(e)) ? a((function () {
                                    var r = new p(n);
                                    try {
                                        t.call(e, (function () {
                                            l.apply(r, arguments)
                                        }), (function () {
                                            d.apply(r, arguments)
                                        }))
                                    } catch (e) {
                                        d.call(r, e)
                                    }
                                })) : (n.msg = e, n.state = 1, n.chain.length > 0 && a(c, n))
                            } catch (e) {
                                d.call(new p(n), e)
                            }
                        }
                    }

                    function d(e) {
                        var t = this;
                        t.triggered || (t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && a(c, t))
                    }

                    function f(e, t, n, r) {
                        for (var o = 0; o < t.length; o++) !function (o) {
                            e.resolve(t[o]).then((function (e) {
                                n(o, e)
                            }), r)
                        }(o)
                    }

                    function p(e) {
                        this.def = e, this.triggered = !1
                    }

                    function h(e) {
                        this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                    }

                    function m(e) {
                        if ("function" != typeof e) throw TypeError("Not a function");
                        if (0 !== this.__NPO__) throw TypeError("Not a promise");
                        this.__NPO__ = 1;
                        var t = new h(this);
                        this.then = function (e, n) {
                            var r = {success: "function" != typeof e || e, failure: "function" == typeof n && n};
                            return r.promise = new this.constructor((function (e, t) {
                                if ("function" != typeof e || "function" != typeof t) throw TypeError("Not a function");
                                r.resolve = e, r.reject = t
                            })), t.chain.push(r), 0 !== t.state && a(c, t), r.promise
                        }, this.catch = function (e) {
                            return this.then(void 0, e)
                        };
                        try {
                            e.call(void 0, (function (e) {
                                l.call(t, e)
                            }), (function (e) {
                                d.call(t, e)
                            }))
                        } catch (e) {
                            d.call(t, e)
                        }
                    }

                    r = function () {
                        var e, n, r;

                        function o(e, t) {
                            this.fn = e, this.self = t, this.next = void 0
                        }

                        return {
                            add: function (t, i) {
                                r = new o(t, i), n ? n.next = r : e = r, n = r, r = void 0
                            }, drain: function () {
                                var r = e;
                                for (e = n = t = void 0; r;) r.fn.call(r.self), r = r.next
                            }
                        }
                    }();
                    var y = e({}, "constructor", m, !1);
                    return m.prototype = y, e(y, "__NPO__", 0, !1), e(m, "resolve", (function (e) {
                        return e && "object" == typeof e && 1 === e.__NPO__ ? e : new this((function (t, n) {
                            if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                            t(e)
                        }))
                    })), e(m, "reject", (function (e) {
                        return new this((function (t, n) {
                            if ("function" != typeof t || "function" != typeof n) throw TypeError("Not a function");
                            n(e)
                        }))
                    })), e(m, "all", (function (e) {
                        var t = this;
                        return "[object Array]" != o.call(e) ? t.reject(TypeError("Not an array")) : 0 === e.length ? t.resolve([]) : new t((function (n, r) {
                            if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                            var o = e.length, i = Array(o), a = 0;
                            f(t, e, (function (e, t) {
                                i[e] = t, ++a === o && n(i)
                            }), r)
                        }))
                    })), e(m, "race", (function (e) {
                        var t = this;
                        return "[object Array]" != o.call(e) ? t.reject(TypeError("Not an array")) : new t((function (n, r) {
                            if ("function" != typeof n || "function" != typeof r) throw TypeError("Not a function");
                            f(t, e, (function (e, t) {
                                n(t)
                            }), r)
                        }))
                    })), m
                }, (r = p)[t = "Promise"] = r[t] || o(), e.exports && (e.exports = r[t])
            })), m = new WeakMap;

            function y(e, t, n) {
                var r = m.get(e.element) || {};
                t in r || (r[t] = []), r[t].push(n), m.set(e.element, r)
            }

            function g(e, t) {
                return (m.get(e.element) || {})[t] || []
            }

            function v(e, t, n) {
                var r = m.get(e.element) || {};
                if (!r[t]) return !0;
                if (!n) return r[t] = [], m.set(e.element, r), !0;
                var o = r[t].indexOf(n);
                return -1 !== o && r[t].splice(o, 1), m.set(e.element, r), r[t] && 0 === r[t].length
            }

            function b(e, t) {
                var n = m.get(e);
                m.set(t, n), m.delete(e)
            }

            var w = ["autopause", "autoplay", "background", "byline", "color", "controls", "dnt", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "texttrack", "title", "transparent", "url", "width"];

            function S(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return w.reduce((function (t, n) {
                    var r = e.getAttribute("data-vimeo-".concat(n));
                    return (r || "" === r) && (t[n] = "" === r ? 1 : r), t
                }), t)
            }

            function A(e, t) {
                var n = e.html;
                if (!t) throw new TypeError("An element must be provided");
                if (null !== t.getAttribute("data-vimeo-initialized")) return t.querySelector("iframe");
                var r = document.createElement("div");
                return r.innerHTML = n, t.appendChild(r.firstChild), t.setAttribute("data-vimeo-initialized", "true"), t.querySelector("iframe")
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return new Promise((function (r, o) {
                    if (!u(e)) throw new TypeError("???".concat(e, "??? is not a vimeo.com url."));
                    var i = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));
                    for (var a in t) t.hasOwnProperty(a) && (i += "&".concat(a, "=").concat(encodeURIComponent(t[a])));
                    var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                    s.open("GET", i, !0), s.onload = function () {
                        if (404 !== s.status) if (403 !== s.status) try {
                            var t = JSON.parse(s.responseText);
                            if (403 === t.domain_status_code) return A(t, n), void o(new Error("???".concat(e, "??? is not embeddable.")));
                            r(t)
                        } catch (e) {
                            o(e)
                        } else o(new Error("???".concat(e, "??? is not embeddable."))); else o(new Error("???".concat(e, "??? was not found.")))
                    }, s.onerror = function () {
                        var e = s.status ? " (".concat(s.status, ")") : "";
                        o(new Error("There was an error fetching the embed code from Vimeo".concat(e, ".")))
                    }, s.send()
                }))
            }

            function x(e) {
                if ("string" == typeof e) try {
                    e = JSON.parse(e)
                } catch (e) {
                    return console.warn(e), {}
                }
                return e
            }

            function k(e, t, n) {
                if (e.element.contentWindow && e.element.contentWindow.postMessage) {
                    var r = {method: t};
                    void 0 !== n && (r.value = n);
                    var o = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                    o >= 8 && o < 10 && (r = JSON.stringify(r)), e.element.contentWindow.postMessage(r, e.origin)
                }
            }

            function P(e, t) {
                var n, r = [];
                if ((t = x(t)).event) {
                    if ("error" === t.event) g(e, t.data.method).forEach((function (n) {
                        var r = new Error(t.data.message);
                        r.name = t.data.name, n.reject(r), v(e, t.data.method, n)
                    }));
                    r = g(e, "event:".concat(t.event)), n = t.data
                } else if (t.method) {
                    var o = function (e, t) {
                        var n = g(e, t);
                        if (n.length < 1) return !1;
                        var r = n.shift();
                        return v(e, t, r), r
                    }(e, t.method);
                    o && (r.push(o), n = t.value)
                }
                r.forEach((function (t) {
                    try {
                        if ("function" == typeof t) return void t.call(e, n);
                        t.resolve(n)
                    } catch (e) {
                    }
                }))
            }

            var E = new WeakMap, T = new WeakMap, j = {}, I = function () {
                function e(t) {
                    var n = this, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r(this, e), window.jQuery && t instanceof jQuery && (t.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), t = t[0]), "undefined" != typeof document && "string" == typeof t && (t = document.getElementById(t)), !s(t)) throw new TypeError("You must pass either a valid element or a valid id.");
                    if ("IFRAME" !== t.nodeName) {
                        var i = t.querySelector("iframe");
                        i && (t = i)
                    }
                    if ("IFRAME" === t.nodeName && !u(t.getAttribute("src") || "")) throw new Error("The player element passed isn???t a Vimeo embed.");
                    if (E.has(t)) return E.get(t);
                    this._window = t.ownerDocument.defaultView, this.element = t, this.origin = "*";
                    var a = new h((function (e, r) {
                        if (n._onMessage = function (t) {
                            if (u(t.origin) && n.element.contentWindow === t.source) {
                                "*" === n.origin && (n.origin = t.origin);
                                var o = x(t.data);
                                if (o && "error" === o.event && o.data && "ready" === o.data.method) {
                                    var i = new Error(o.data.message);
                                    return i.name = o.data.name, void r(i)
                                }
                                var a = o && "ready" === o.event, s = o && "ping" === o.method;
                                if (a || s) return n.element.setAttribute("data-ready", "true"), void e();
                                P(n, o)
                            }
                        }, n._window.addEventListener("message", n._onMessage), "IFRAME" !== n.element.nodeName) {
                            var i = S(t, o);
                            O(l(i), i, t).then((function (e) {
                                var r = A(e, t);
                                return n.element = r, n._originalElement = t, b(t, r), E.set(n.element, n), e
                            })).catch(r)
                        }
                    }));
                    if (T.set(this, a), E.set(this.element, this), "IFRAME" === this.element.nodeName && k(this, "ping"), j.isEnabled) {
                        var c = function () {
                            return j.exit()
                        };
                        j.on("fullscreenchange", (function () {
                            j.isFullscreen ? y(n, "event:exitFullscreen", c) : v(n, "event:exitFullscreen", c), n.ready().then((function () {
                                k(n, "fullscreenchange", j.isFullscreen)
                            }))
                        }))
                    }
                    return this
                }

                var t, n, i;
                return t = e, (n = [{
                    key: "callMethod", value: function (e) {
                        var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return new h((function (r, o) {
                            return t.ready().then((function () {
                                y(t, e, {resolve: r, reject: o}), k(t, e, n)
                            })).catch(o)
                        }))
                    }
                }, {
                    key: "get", value: function (e) {
                        var t = this;
                        return new h((function (n, r) {
                            return e = a(e, "get"), t.ready().then((function () {
                                y(t, e, {resolve: n, reject: r}), k(t, e)
                            })).catch(r)
                        }))
                    }
                }, {
                    key: "set", value: function (e, t) {
                        var n = this;
                        return new h((function (r, o) {
                            if (e = a(e, "set"), null == t) throw new TypeError("There must be a value to set.");
                            return n.ready().then((function () {
                                y(n, e, {resolve: r, reject: o}), k(n, e, t)
                            })).catch(o)
                        }))
                    }
                }, {
                    key: "on", value: function (e, t) {
                        if (!e) throw new TypeError("You must pass an event name.");
                        if (!t) throw new TypeError("You must pass a callback function.");
                        if ("function" != typeof t) throw new TypeError("The callback must be a function.");
                        0 === g(this, "event:".concat(e)).length && this.callMethod("addEventListener", e).catch((function () {
                        })), y(this, "event:".concat(e), t)
                    }
                }, {
                    key: "off", value: function (e, t) {
                        if (!e) throw new TypeError("You must pass an event name.");
                        if (t && "function" != typeof t) throw new TypeError("The callback must be a function.");
                        v(this, "event:".concat(e), t) && this.callMethod("removeEventListener", e).catch((function (e) {
                        }))
                    }
                }, {
                    key: "loadVideo", value: function (e) {
                        return this.callMethod("loadVideo", e)
                    }
                }, {
                    key: "ready", value: function () {
                        var e = T.get(this) || new h((function (e, t) {
                            t(new Error("Unknown player. Probably unloaded."))
                        }));
                        return h.resolve(e)
                    }
                }, {
                    key: "addCuePoint", value: function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return this.callMethod("addCuePoint", {time: e, data: t})
                    }
                }, {
                    key: "removeCuePoint", value: function (e) {
                        return this.callMethod("removeCuePoint", e)
                    }
                }, {
                    key: "enableTextTrack", value: function (e, t) {
                        if (!e) throw new TypeError("You must pass a language.");
                        return this.callMethod("enableTextTrack", {language: e, kind: t})
                    }
                }, {
                    key: "disableTextTrack", value: function () {
                        return this.callMethod("disableTextTrack")
                    }
                }, {
                    key: "pause", value: function () {
                        return this.callMethod("pause")
                    }
                }, {
                    key: "play", value: function () {
                        return this.callMethod("play")
                    }
                }, {
                    key: "requestFullscreen", value: function () {
                        return j.isEnabled ? j.request(this.element) : this.callMethod("requestFullscreen")
                    }
                }, {
                    key: "exitFullscreen", value: function () {
                        return j.isEnabled ? j.exit() : this.callMethod("exitFullscreen")
                    }
                }, {
                    key: "getFullscreen", value: function () {
                        return j.isEnabled ? h.resolve(j.isFullscreen) : this.get("fullscreen")
                    }
                }, {
                    key: "unload", value: function () {
                        return this.callMethod("unload")
                    }
                }, {
                    key: "destroy", value: function () {
                        var e = this;
                        return new h((function (t) {
                            if (T.delete(e), E.delete(e.element), e._originalElement && (E.delete(e._originalElement), e._originalElement.removeAttribute("data-vimeo-initialized")), e.element && "IFRAME" === e.element.nodeName && e.element.parentNode && e.element.parentNode.removeChild(e.element), e.element && "DIV" === e.element.nodeName && e.element.parentNode) {
                                e.element.removeAttribute("data-vimeo-initialized");
                                var n = e.element.querySelector("iframe");
                                n && n.parentNode && n.parentNode.removeChild(n)
                            }
                            e._window.removeEventListener("message", e._onMessage), t()
                        }))
                    }
                }, {
                    key: "getAutopause", value: function () {
                        return this.get("autopause")
                    }
                }, {
                    key: "setAutopause", value: function (e) {
                        return this.set("autopause", e)
                    }
                }, {
                    key: "getBuffered", value: function () {
                        return this.get("buffered")
                    }
                }, {
                    key: "getCameraProps", value: function () {
                        return this.get("cameraProps")
                    }
                }, {
                    key: "setCameraProps", value: function (e) {
                        return this.set("cameraProps", e)
                    }
                }, {
                    key: "getChapters", value: function () {
                        return this.get("chapters")
                    }
                }, {
                    key: "getCurrentChapter", value: function () {
                        return this.get("currentChapter")
                    }
                }, {
                    key: "getColor", value: function () {
                        return this.get("color")
                    }
                }, {
                    key: "setColor", value: function (e) {
                        return this.set("color", e)
                    }
                }, {
                    key: "getCuePoints", value: function () {
                        return this.get("cuePoints")
                    }
                }, {
                    key: "getCurrentTime", value: function () {
                        return this.get("currentTime")
                    }
                }, {
                    key: "setCurrentTime", value: function (e) {
                        return this.set("currentTime", e)
                    }
                }, {
                    key: "getDuration", value: function () {
                        return this.get("duration")
                    }
                }, {
                    key: "getEnded", value: function () {
                        return this.get("ended")
                    }
                }, {
                    key: "getLoop", value: function () {
                        return this.get("loop")
                    }
                }, {
                    key: "setLoop", value: function (e) {
                        return this.set("loop", e)
                    }
                }, {
                    key: "setMuted", value: function (e) {
                        return this.set("muted", e)
                    }
                }, {
                    key: "getMuted", value: function () {
                        return this.get("muted")
                    }
                }, {
                    key: "getPaused", value: function () {
                        return this.get("paused")
                    }
                }, {
                    key: "getPlaybackRate", value: function () {
                        return this.get("playbackRate")
                    }
                }, {
                    key: "setPlaybackRate", value: function (e) {
                        return this.set("playbackRate", e)
                    }
                }, {
                    key: "getPlayed", value: function () {
                        return this.get("played")
                    }
                }, {
                    key: "getQualities", value: function () {
                        return this.get("qualities")
                    }
                }, {
                    key: "getQuality", value: function () {
                        return this.get("quality")
                    }
                }, {
                    key: "setQuality", value: function (e) {
                        return this.set("quality", e)
                    }
                }, {
                    key: "getSeekable", value: function () {
                        return this.get("seekable")
                    }
                }, {
                    key: "getSeeking", value: function () {
                        return this.get("seeking")
                    }
                }, {
                    key: "getTextTracks", value: function () {
                        return this.get("textTracks")
                    }
                }, {
                    key: "getVideoEmbedCode", value: function () {
                        return this.get("videoEmbedCode")
                    }
                }, {
                    key: "getVideoId", value: function () {
                        return this.get("videoId")
                    }
                }, {
                    key: "getVideoTitle", value: function () {
                        return this.get("videoTitle")
                    }
                }, {
                    key: "getVideoWidth", value: function () {
                        return this.get("videoWidth")
                    }
                }, {
                    key: "getVideoHeight", value: function () {
                        return this.get("videoHeight")
                    }
                }, {
                    key: "getVideoUrl", value: function () {
                        return this.get("videoUrl")
                    }
                }, {
                    key: "getVolume", value: function () {
                        return this.get("volume")
                    }
                }, {
                    key: "setVolume", value: function (e) {
                        return this.set("volume", e)
                    }
                }]) && o(t.prototype, n), i && o(t, i), e
            }();
            i || (j = function () {
                var e = function () {
                    for (var e, t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], n = 0, r = t.length, o = {}; n < r; n++) if ((e = t[n]) && e[1] in document) {
                        for (n = 0; n < e.length; n++) o[t[0][n]] = e[n];
                        return o
                    }
                    return !1
                }(), t = {fullscreenchange: e.fullscreenchange, fullscreenerror: e.fullscreenerror}, n = {
                    request: function (t) {
                        return new Promise((function (r, o) {
                            var i = function e() {
                                n.off("fullscreenchange", e), r()
                            };
                            n.on("fullscreenchange", i);
                            var a = (t = t || document.documentElement)[e.requestFullscreen]();
                            a instanceof Promise && a.then(i).catch(o)
                        }))
                    }, exit: function () {
                        return new Promise((function (t, r) {
                            if (n.isFullscreen) {
                                var o = function e() {
                                    n.off("fullscreenchange", e), t()
                                };
                                n.on("fullscreenchange", o);
                                var i = document[e.exitFullscreen]();
                                i instanceof Promise && i.then(o).catch(r)
                            } else t()
                        }))
                    }, on: function (e, n) {
                        var r = t[e];
                        r && document.addEventListener(r, n)
                    }, off: function (e, n) {
                        var r = t[e];
                        r && document.removeEventListener(r, n)
                    }
                };
                return Object.defineProperties(n, {
                    isFullscreen: {
                        get: function () {
                            return Boolean(document[e.fullscreenElement])
                        }
                    }, element: {
                        enumerable: !0, get: function () {
                            return document[e.fullscreenElement]
                        }
                    }, isEnabled: {
                        enumerable: !0, get: function () {
                            return Boolean(document[e.fullscreenEnabled])
                        }
                    }
                }), n
            }(), function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                    t = [].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")), n = function (e) {
                        "console" in window && console.error && console.error("There was an error creating an embed: ".concat(e))
                    };
                t.forEach((function (e) {
                    try {
                        if (null !== e.getAttribute("data-vimeo-defer")) return;
                        var t = S(e);
                        O(l(t), t, e).then((function (t) {
                            return A(t, e)
                        })).catch(n)
                    } catch (e) {
                        n(e)
                    }
                }))
            }(), function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                if (!window.VimeoPlayerResizeEmbeds_) {
                    window.VimeoPlayerResizeEmbeds_ = !0;
                    var t = function (t) {
                        if (u(t.origin) && t.data && "spacechange" === t.data.event) for (var n = e.querySelectorAll("iframe"), r = 0; r < n.length; r++) if (n[r].contentWindow === t.source) {
                            n[r].parentElement.style.paddingBottom = "".concat(t.data.data[0].bottom, "px");
                            break
                        }
                    };
                    window.addEventListener("message", t)
                }
            }()), t.a = I
        }).call(this, n(58), n(312).setImmediate)
    }, function (e, t, n) {
        "use strict";
        e.exports = {
            getDocScrollNode: n(215),
            getScrollParent: n(216),
            getScrollParents: n(359),
            isScrollableNode: n(161),
            normalizeScrollEmitter: n(361),
            normalizeScrollSetter: n(125),
            scrollIntoView: n(362),
            scrollTo: n(221)
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r, o = n(380), i = n(393), a = (r = i) && r.__esModule ? r : {default: r};
        t.default = function (e, t) {
            var n = e.querySelector(".sqs-video-background"), r = (0, a.default)(n), i = new o.VideoBackground(r);
            return "function" == typeof t && t({
                handleResize: function () {
                    i.scaleVideo()
                }, handleTweak: function () {
                    i.destroy(), i = new o.VideoBackground(r)
                }
            }), {
                destroy: function () {
                    i.destroy()
                }
            }
        }, e.exports = t.default
    }, , , , function (e, t, n) {
        !function () {
            "use strict";

            function e(e) {
                var t = !0, n = !1, r = null, o = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };

                function i(e) {
                    return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
                }

                function a(e) {
                    e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
                }

                function s(e) {
                    t = !1
                }

                function c() {
                    document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
                }

                function u(e) {
                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u))
                }

                document.addEventListener("keydown", (function (n) {
                    n.metaKey || n.altKey || n.ctrlKey || (i(e.activeElement) && a(e.activeElement), t = !0)
                }), !0), document.addEventListener("mousedown", s, !0), document.addEventListener("pointerdown", s, !0), document.addEventListener("touchstart", s, !0), document.addEventListener("visibilitychange", (function (e) {
                    "hidden" === document.visibilityState && (n && (t = !0), c())
                }), !0), c(), e.addEventListener("focus", (function (e) {
                    var n, r, s;
                    i(e.target) && (t || (n = e.target, r = n.type, "INPUT" === (s = n.tagName) && o[r] && !n.readOnly || "TEXTAREA" === s && !n.readOnly || n.isContentEditable)) && a(e.target)
                }), !0), e.addEventListener("blur", (function (e) {
                    var t;
                    i(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(r), r = window.setTimeout((function () {
                        n = !1
                    }), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
                }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
            }

            if ("undefined" != typeof window && "undefined" != typeof document) {
                var t;
                window.applyFocusVisiblePolyfill = e;
                try {
                    t = new CustomEvent("focus-visible-polyfill-ready")
                } catch (e) {
                    (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                }
                window.dispatchEvent(t)
            }
            "undefined" != typeof document && e(document)
        }()
    }, function (e, t, n) {
        "use strict";
        !function () {
            function e(e) {
                for (var t = []; e = e.parentNode || e.host || e.defaultView;) t.push(e);
                return t
            }

            function t(e) {
                return function (t) {
                    var n = void 0 !== t.getAttribute ? t.getAttribute("class") || "" : void 0;
                    void 0 !== n && -1 === n.indexOf(e) && t.setAttribute("class", n.concat(" ", e).trim())
                }
            }

            var n = ["\n", "\t", " ", "\r"];
            try {
                document.querySelector(":focus-within")
            } catch (r) {
                return function () {
                    function r(r) {
                        if (!o) {
                            window.requestAnimationFrame((function () {
                                o = !1, "blur" === r.type && Array.prototype.slice.call(e(r.target)).forEach(function (e) {
                                    return function (t) {
                                        var r = void 0 !== t.getAttribute ? t.getAttribute("class") || "" : void 0;
                                        if (r) {
                                            var o = r.indexOf(e);
                                            0 <= o && (0 === o || 0 <= n.indexOf(r.charAt(o - 1))) && ("" === (r = r.replace(e, "").trim()) ? t.removeAttribute("class") : t.setAttribute("class", r))
                                        }
                                    }
                                }("focus-within")), "focus" === r.type && Array.prototype.slice.call(e(r.target)).forEach(t("focus-within"))
                            }));
                            var o = !0
                        }
                    }

                    return document.addEventListener("focus", r, !0), document.addEventListener("blur", r, !0), t("js-focus-within")(document.body), !0
                }()
            }
        }()
    }, , , , , , , , , , , , , , , , , , function (e, t, n) {
        var r = n(27), o = n(258), i = n(84);
        r({target: "Array", proto: !0}, {fill: o}), i("fill")
    }, function (e, t, n) {
        "use strict";
        var r = n(51), o = n(108), i = n(49);
        e.exports = function (e) {
            for (var t = r(this), n = i(t.length), a = arguments.length, s = o(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? n : o(c, n); u > s;) t[s++] = e;
            return t
        }
    }, function (e, t, n) {
        var r = n(145);
        e.exports = function (e) {
            if (r(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        }
    }, function (e, t, n) {
        var r = n(31)("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (n) {
                try {
                    return t[r] = !1, "/./"[e](t)
                } catch (e) {
                }
            }
            return !1
        }
    }, function (e, t, n) {
        var r = n(43), o = n(33), i = n(92), a = n(152), s = n(47).f, c = n(91).f, u = n(145), l = n(143), d = n(191),
            f = n(50), p = n(29), h = n(64).set, m = n(148), y = n(31)("match"), g = o.RegExp, v = g.prototype,
            b = /a/g, w = /a/g, S = new g(b) !== b, A = d.UNSUPPORTED_Y;
        if (r && i("RegExp", !S || A || p((function () {
            return w[y] = !1, g(b) != b || g(w) == w || "/a/i" != g(b, "i")
        })))) {
            for (var O = function (e, t) {
                var n, r = this instanceof O, o = u(e), i = void 0 === t;
                if (!r && o && e.constructor === O && i) return e;
                S ? o && !i && (e = e.source) : e instanceof O && (i && (t = l.call(e)), e = e.source), A && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var s = a(S ? new g(e, t) : g(e, t), r ? this : v, O);
                return A && n && h(s, {sticky: n}), s
            }, x = function (e) {
                e in O || s(O, e, {
                    configurable: !0, get: function () {
                        return g[e]
                    }, set: function (t) {
                        g[e] = t
                    }
                })
            }, k = c(g), P = 0; k.length > P;) x(k[P++]);
            v.constructor = O, O.prototype = v, f(o, "RegExp", O)
        }
        m("RegExp")
    }, function (e, t, n) {
        "use strict";
        var r = n(27), o = n(74).findIndex, i = n(84), a = n(57), s = !0, c = a("findIndex");
        "findIndex" in [] && Array(1).findIndex((function () {
            s = !1
        })), r({target: "Array", proto: !0, forced: s || !c}, {
            findIndex: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), i("findIndex")
    }, function (e, t, n) {
        "use strict";
        var r = n(112), o = n(42), i = n(59), a = n(264), s = n(113);
        r("search", 1, (function (e, t, n) {
            return [function (t) {
                var n = i(this), r = null == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            }, function (e) {
                var r = n(t, e, this);
                if (r.done) return r.value;
                var i = o(e), c = String(this), u = i.lastIndex;
                a(u, 0) || (i.lastIndex = 0);
                var l = s(i, c);
                return a(i.lastIndex, u) || (i.lastIndex = u), null === l ? -1 : l.index
            }]
        }))
    }, function (e, t) {
        e.exports = Object.is || function (e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
    }, function (e, t, n) {
        "use strict";
        n(7);
        var r, o = n(27), i = n(43), a = n(200), s = n(33), c = n(178), u = n(50), l = n(99), d = n(44), f = n(201),
            p = n(184), h = n(144).codeAt, m = n(266), y = n(73), g = n(267), v = n(64), b = s.URL,
            w = g.URLSearchParams, S = g.getState, A = v.set, O = v.getterFor("URL"), x = Math.floor, k = Math.pow,
            P = /[A-Za-z]/, E = /[\d+-.A-Za-z]/, T = /\d/, j = /^(0x|0X)/, I = /^[0-7]+$/, L = /^\d+$/,
            C = /^[\dA-Fa-f]+$/, R = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
            _ = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/, D = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
            M = /[\u0009\u000A\u000D]/g, F = function (e, t) {
                var n, r, o;
                if ("[" == t.charAt(0)) {
                    if ("]" != t.charAt(t.length - 1)) return "Invalid host";
                    if (!(n = z(t.slice(1, -1)))) return "Invalid host";
                    e.host = n
                } else if (Y(e)) {
                    if (t = m(t), R.test(t)) return "Invalid host";
                    if (null === (n = B(t))) return "Invalid host";
                    e.host = n
                } else {
                    if (_.test(t)) return "Invalid host";
                    for (n = "", r = p(t), o = 0; o < r.length; o++) n += V(r[o], W);
                    e.host = n
                }
            }, B = function (e) {
                var t, n, r, o, i, a, s, c = e.split(".");
                if (c.length && "" == c[c.length - 1] && c.pop(), (t = c.length) > 4) return e;
                for (n = [], r = 0; r < t; r++) {
                    if ("" == (o = c[r])) return e;
                    if (i = 10, o.length > 1 && "0" == o.charAt(0) && (i = j.test(o) ? 16 : 8, o = o.slice(8 == i ? 1 : 2)), "" === o) a = 0; else {
                        if (!(10 == i ? L : 8 == i ? I : C).test(o)) return e;
                        a = parseInt(o, i)
                    }
                    n.push(a)
                }
                for (r = 0; r < t; r++) if (a = n[r], r == t - 1) {
                    if (a >= k(256, 5 - t)) return null
                } else if (a > 255) return null;
                for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * k(256, 3 - r);
                return s
            }, z = function (e) {
                var t, n, r, o, i, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0], u = 0, l = null, d = 0, f = function () {
                    return e.charAt(d)
                };
                if (":" == f()) {
                    if (":" != e.charAt(1)) return;
                    d += 2, l = ++u
                }
                for (; f();) {
                    if (8 == u) return;
                    if (":" != f()) {
                        for (t = n = 0; n < 4 && C.test(f());) t = 16 * t + parseInt(f(), 16), d++, n++;
                        if ("." == f()) {
                            if (0 == n) return;
                            if (d -= n, u > 6) return;
                            for (r = 0; f();) {
                                if (o = null, r > 0) {
                                    if (!("." == f() && r < 4)) return;
                                    d++
                                }
                                if (!T.test(f())) return;
                                for (; T.test(f());) {
                                    if (i = parseInt(f(), 10), null === o) o = i; else {
                                        if (0 == o) return;
                                        o = 10 * o + i
                                    }
                                    if (o > 255) return;
                                    d++
                                }
                                c[u] = 256 * c[u] + o, 2 != ++r && 4 != r || u++
                            }
                            if (4 != r) return;
                            break
                        }
                        if (":" == f()) {
                            if (d++, !f()) return
                        } else if (f()) return;
                        c[u++] = t
                    } else {
                        if (null !== l) return;
                        d++, l = ++u
                    }
                }
                if (null !== l) for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s; else if (8 != u) return;
                return c
            }, N = function (e) {
                var t, n, r, o;
                if ("number" == typeof e) {
                    for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = x(e / 256);
                    return t.join(".")
                }
                if ("object" == typeof e) {
                    for (t = "", r = function (e) {
                        for (var t = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== e[i] ? (o > n && (t = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o);
                        return o > n && (t = r, n = o), t
                    }(e), n = 0; n < 8; n++) o && 0 === e[n] || (o && (o = !1), r === n ? (t += n ? ":" : "::", o = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                    return "[" + t + "]"
                }
                return e
            }, W = {}, q = f({}, W, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}),
            U = f({}, q, {"#": 1, "?": 1, "{": 1, "}": 1}),
            H = f({}, U, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
            V = function (e, t) {
                var n = h(e, 0);
                return n > 32 && n < 127 && !d(t, e) ? e : encodeURIComponent(e)
            }, G = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, Y = function (e) {
                return d(G, e.scheme)
            }, Q = function (e) {
                return "" != e.username || "" != e.password
            }, X = function (e) {
                return !e.host || e.cannotBeABaseURL || "file" == e.scheme
            }, Z = function (e, t) {
                var n;
                return 2 == e.length && P.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
            }, J = function (e) {
                var t;
                return e.length > 1 && Z(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
            }, K = function (e) {
                var t = e.path, n = t.length;
                !n || "file" == e.scheme && 1 == n && Z(t[0], !0) || t.pop()
            }, $ = function (e) {
                return "." === e || "%2e" === e.toLowerCase()
            }, ee = {}, te = {}, ne = {}, re = {}, oe = {}, ie = {}, ae = {}, se = {}, ce = {}, ue = {}, le = {}, de = {},
            fe = {}, pe = {}, he = {}, me = {}, ye = {}, ge = {}, ve = {}, be = {}, we = {},
            Se = function (e, t, n, o) {
                var i, a, s, c, u, l = n || ee, f = 0, h = "", m = !1, y = !1, g = !1;
                for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(D, "")), t = t.replace(M, ""), i = p(t); f <= i.length;) {
                    switch (a = i[f], l) {
                        case ee:
                            if (!a || !P.test(a)) {
                                if (n) return "Invalid scheme";
                                l = ne;
                                continue
                            }
                            h += a.toLowerCase(), l = te;
                            break;
                        case te:
                            if (a && (E.test(a) || "+" == a || "-" == a || "." == a)) h += a.toLowerCase(); else {
                                if (":" != a) {
                                    if (n) return "Invalid scheme";
                                    h = "", l = ne, f = 0;
                                    continue
                                }
                                if (n && (Y(e) != d(G, h) || "file" == h && (Q(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                                if (e.scheme = h, n) return void (Y(e) && G[e.scheme] == e.port && (e.port = null));
                                h = "", "file" == e.scheme ? l = pe : Y(e) && o && o.scheme == e.scheme ? l = re : Y(e) ? l = se : "/" == i[f + 1] ? (l = oe, f++) : (e.cannotBeABaseURL = !0, e.path.push(""), l = ve)
                            }
                            break;
                        case ne:
                            if (!o || o.cannotBeABaseURL && "#" != a) return "Invalid scheme";
                            if (o.cannotBeABaseURL && "#" == a) {
                                e.scheme = o.scheme, e.path = o.path.slice(), e.query = o.query, e.fragment = "", e.cannotBeABaseURL = !0, l = we;
                                break
                            }
                            l = "file" == o.scheme ? pe : ie;
                            continue;
                        case re:
                            if ("/" != a || "/" != i[f + 1]) {
                                l = ie;
                                continue
                            }
                            l = ce, f++;
                            break;
                        case oe:
                            if ("/" == a) {
                                l = ue;
                                break
                            }
                            l = ge;
                            continue;
                        case ie:
                            if (e.scheme = o.scheme, a == r) e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query; else if ("/" == a || "\\" == a && Y(e)) l = ae; else if ("?" == a) e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = "", l = be; else {
                                if ("#" != a) {
                                    e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.path.pop(), l = ge;
                                    continue
                                }
                                e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, e.path = o.path.slice(), e.query = o.query, e.fragment = "", l = we
                            }
                            break;
                        case ae:
                            if (!Y(e) || "/" != a && "\\" != a) {
                                if ("/" != a) {
                                    e.username = o.username, e.password = o.password, e.host = o.host, e.port = o.port, l = ge;
                                    continue
                                }
                                l = ue
                            } else l = ce;
                            break;
                        case se:
                            if (l = ce, "/" != a || "/" != h.charAt(f + 1)) continue;
                            f++;
                            break;
                        case ce:
                            if ("/" != a && "\\" != a) {
                                l = ue;
                                continue
                            }
                            break;
                        case ue:
                            if ("@" == a) {
                                m && (h = "%40" + h), m = !0, s = p(h);
                                for (var v = 0; v < s.length; v++) {
                                    var b = s[v];
                                    if (":" != b || g) {
                                        var w = V(b, H);
                                        g ? e.password += w : e.username += w
                                    } else g = !0
                                }
                                h = ""
                            } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && Y(e)) {
                                if (m && "" == h) return "Invalid authority";
                                f -= p(h).length + 1, h = "", l = le
                            } else h += a;
                            break;
                        case le:
                        case de:
                            if (n && "file" == e.scheme) {
                                l = me;
                                continue
                            }
                            if (":" != a || y) {
                                if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && Y(e)) {
                                    if (Y(e) && "" == h) return "Invalid host";
                                    if (n && "" == h && (Q(e) || null !== e.port)) return;
                                    if (c = F(e, h)) return c;
                                    if (h = "", l = ye, n) return;
                                    continue
                                }
                                "[" == a ? y = !0 : "]" == a && (y = !1), h += a
                            } else {
                                if ("" == h) return "Invalid host";
                                if (c = F(e, h)) return c;
                                if (h = "", l = fe, n == de) return
                            }
                            break;
                        case fe:
                            if (!T.test(a)) {
                                if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && Y(e) || n) {
                                    if ("" != h) {
                                        var S = parseInt(h, 10);
                                        if (S > 65535) return "Invalid port";
                                        e.port = Y(e) && S === G[e.scheme] ? null : S, h = ""
                                    }
                                    if (n) return;
                                    l = ye;
                                    continue
                                }
                                return "Invalid port"
                            }
                            h += a;
                            break;
                        case pe:
                            if (e.scheme = "file", "/" == a || "\\" == a) l = he; else {
                                if (!o || "file" != o.scheme) {
                                    l = ge;
                                    continue
                                }
                                if (a == r) e.host = o.host, e.path = o.path.slice(), e.query = o.query; else if ("?" == a) e.host = o.host, e.path = o.path.slice(), e.query = "", l = be; else {
                                    if ("#" != a) {
                                        J(i.slice(f).join("")) || (e.host = o.host, e.path = o.path.slice(), K(e)), l = ge;
                                        continue
                                    }
                                    e.host = o.host, e.path = o.path.slice(), e.query = o.query, e.fragment = "", l = we
                                }
                            }
                            break;
                        case he:
                            if ("/" == a || "\\" == a) {
                                l = me;
                                break
                            }
                            o && "file" == o.scheme && !J(i.slice(f).join("")) && (Z(o.path[0], !0) ? e.path.push(o.path[0]) : e.host = o.host), l = ge;
                            continue;
                        case me:
                            if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                                if (!n && Z(h)) l = ge; else if ("" == h) {
                                    if (e.host = "", n) return;
                                    l = ye
                                } else {
                                    if (c = F(e, h)) return c;
                                    if ("localhost" == e.host && (e.host = ""), n) return;
                                    h = "", l = ye
                                }
                                continue
                            }
                            h += a;
                            break;
                        case ye:
                            if (Y(e)) {
                                if (l = ge, "/" != a && "\\" != a) continue
                            } else if (n || "?" != a) if (n || "#" != a) {
                                if (a != r && (l = ge, "/" != a)) continue
                            } else e.fragment = "", l = we; else e.query = "", l = be;
                            break;
                        case ge:
                            if (a == r || "/" == a || "\\" == a && Y(e) || !n && ("?" == a || "#" == a)) {
                                if (".." === (u = (u = h).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (K(e), "/" == a || "\\" == a && Y(e) || e.path.push("")) : $(h) ? "/" == a || "\\" == a && Y(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && Z(h) && (e.host && (e.host = ""), h = h.charAt(0) + ":"), e.path.push(h)), h = "", "file" == e.scheme && (a == r || "?" == a || "#" == a)) for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                                "?" == a ? (e.query = "", l = be) : "#" == a && (e.fragment = "", l = we)
                            } else h += V(a, U);
                            break;
                        case ve:
                            "?" == a ? (e.query = "", l = be) : "#" == a ? (e.fragment = "", l = we) : a != r && (e.path[0] += V(a, W));
                            break;
                        case be:
                            n || "#" != a ? a != r && ("'" == a && Y(e) ? e.query += "%27" : e.query += "#" == a ? "%23" : V(a, W)) : (e.fragment = "", l = we);
                            break;
                        case we:
                            a != r && (e.fragment += V(a, q))
                    }
                    f++
                }
            }, Ae = function (e) {
                var t, n, r = l(this, Ae, "URL"), o = arguments.length > 1 ? arguments[1] : void 0, a = String(e),
                    s = A(r, {type: "URL"});
                if (void 0 !== o) if (o instanceof Ae) t = O(o); else if (n = Se(t = {}, String(o))) throw TypeError(n);
                if (n = Se(s, a, null, t)) throw TypeError(n);
                var c = s.searchParams = new w, u = S(c);
                u.updateSearchParams(s.query), u.updateURL = function () {
                    s.query = String(c) || null
                }, i || (r.href = xe.call(r), r.origin = ke.call(r), r.protocol = Pe.call(r), r.username = Ee.call(r), r.password = Te.call(r), r.host = je.call(r), r.hostname = Ie.call(r), r.port = Le.call(r), r.pathname = Ce.call(r), r.search = Re.call(r), r.searchParams = _e.call(r), r.hash = De.call(r))
            }, Oe = Ae.prototype, xe = function () {
                var e = O(this), t = e.scheme, n = e.username, r = e.password, o = e.host, i = e.port, a = e.path,
                    s = e.query, c = e.fragment, u = t + ":";
                return null !== o ? (u += "//", Q(e) && (u += n + (r ? ":" + r : "") + "@"), u += N(o), null !== i && (u += ":" + i)) : "file" == t && (u += "//"), u += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
            }, ke = function () {
                var e = O(this), t = e.scheme, n = e.port;
                if ("blob" == t) try {
                    return new URL(t.path[0]).origin
                } catch (e) {
                    return "null"
                }
                return "file" != t && Y(e) ? t + "://" + N(e.host) + (null !== n ? ":" + n : "") : "null"
            }, Pe = function () {
                return O(this).scheme + ":"
            }, Ee = function () {
                return O(this).username
            }, Te = function () {
                return O(this).password
            }, je = function () {
                var e = O(this), t = e.host, n = e.port;
                return null === t ? "" : null === n ? N(t) : N(t) + ":" + n
            }, Ie = function () {
                var e = O(this).host;
                return null === e ? "" : N(e)
            }, Le = function () {
                var e = O(this).port;
                return null === e ? "" : String(e)
            }, Ce = function () {
                var e = O(this), t = e.path;
                return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
            }, Re = function () {
                var e = O(this).query;
                return e ? "?" + e : ""
            }, _e = function () {
                return O(this).searchParams
            }, De = function () {
                var e = O(this).fragment;
                return e ? "#" + e : ""
            }, Me = function (e, t) {
                return {get: e, set: t, configurable: !0, enumerable: !0}
            };
        if (i && c(Oe, {
            href: Me(xe, (function (e) {
                var t = O(this), n = String(e), r = Se(t, n);
                if (r) throw TypeError(r);
                S(t.searchParams).updateSearchParams(t.query)
            })), origin: Me(ke), protocol: Me(Pe, (function (e) {
                var t = O(this);
                Se(t, String(e) + ":", ee)
            })), username: Me(Ee, (function (e) {
                var t = O(this), n = p(String(e));
                if (!X(t)) {
                    t.username = "";
                    for (var r = 0; r < n.length; r++) t.username += V(n[r], H)
                }
            })), password: Me(Te, (function (e) {
                var t = O(this), n = p(String(e));
                if (!X(t)) {
                    t.password = "";
                    for (var r = 0; r < n.length; r++) t.password += V(n[r], H)
                }
            })), host: Me(je, (function (e) {
                var t = O(this);
                t.cannotBeABaseURL || Se(t, String(e), le)
            })), hostname: Me(Ie, (function (e) {
                var t = O(this);
                t.cannotBeABaseURL || Se(t, String(e), de)
            })), port: Me(Le, (function (e) {
                var t = O(this);
                X(t) || ("" == (e = String(e)) ? t.port = null : Se(t, e, fe))
            })), pathname: Me(Ce, (function (e) {
                var t = O(this);
                t.cannotBeABaseURL || (t.path = [], Se(t, e + "", ye))
            })), search: Me(Re, (function (e) {
                var t = O(this);
                "" == (e = String(e)) ? t.query = null : ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", Se(t, e, be)), S(t.searchParams).updateSearchParams(t.query)
            })), searchParams: Me(_e), hash: Me(De, (function (e) {
                var t = O(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", Se(t, e, we)) : t.fragment = null
            }))
        }), u(Oe, "toJSON", (function () {
            return xe.call(this)
        }), {enumerable: !0}), u(Oe, "toString", (function () {
            return xe.call(this)
        }), {enumerable: !0}), b) {
            var Fe = b.createObjectURL, Be = b.revokeObjectURL;
            Fe && u(Ae, "createObjectURL", (function (e) {
                return Fe.apply(b, arguments)
            })), Be && u(Ae, "revokeObjectURL", (function (e) {
                return Be.apply(b, arguments)
            }))
        }
        y(Ae, "URL"), o({global: !0, forced: !a, sham: !i}, {URL: Ae})
    }, function (e, t, n) {
        "use strict";
        var r = /[^\0-\u007E]/, o = /[.\u3002\uFF0E\uFF61]/g, i = "Overflow: input needs wider integers to process",
            a = Math.floor, s = String.fromCharCode, c = function (e) {
                return e + 22 + 75 * (e < 26)
            }, u = function (e, t, n) {
                var r = 0;
                for (e = n ? a(e / 700) : e >> 1, e += a(e / t); e > 455; r += 36) e = a(e / 35);
                return a(r + 36 * e / (e + 38))
            }, l = function (e) {
                var t, n, r = [], o = (e = function (e) {
                    for (var t = [], n = 0, r = e.length; n < r;) {
                        var o = e.charCodeAt(n++);
                        if (o >= 55296 && o <= 56319 && n < r) {
                            var i = e.charCodeAt(n++);
                            56320 == (64512 & i) ? t.push(((1023 & o) << 10) + (1023 & i) + 65536) : (t.push(o), n--)
                        } else t.push(o)
                    }
                    return t
                }(e)).length, l = 128, d = 0, f = 72;
                for (t = 0; t < e.length; t++) (n = e[t]) < 128 && r.push(s(n));
                var p = r.length, h = p;
                for (p && r.push("-"); h < o;) {
                    var m = 2147483647;
                    for (t = 0; t < e.length; t++) (n = e[t]) >= l && n < m && (m = n);
                    var y = h + 1;
                    if (m - l > a((2147483647 - d) / y)) throw RangeError(i);
                    for (d += (m - l) * y, l = m, t = 0; t < e.length; t++) {
                        if ((n = e[t]) < l && ++d > 2147483647) throw RangeError(i);
                        if (n == l) {
                            for (var g = d, v = 36; ; v += 36) {
                                var b = v <= f ? 1 : v >= f + 26 ? 26 : v - f;
                                if (g < b) break;
                                var w = g - b, S = 36 - b;
                                r.push(s(c(b + w % S))), g = a(w / S)
                            }
                            r.push(s(c(g))), f = u(d, y, h == p), d = 0, ++h
                        }
                    }
                    ++d, ++l
                }
                return r.join("")
            };
        e.exports = function (e) {
            var t, n, i = [], a = e.toLowerCase().replace(o, ".").split(".");
            for (t = 0; t < a.length; t++) n = a[t], i.push(r.test(n) ? "xn--" + l(n) : n);
            return i.join(".")
        }
    }, function (e, t, n) {
        "use strict";
        n(8);
        var r = n(27), o = n(68), i = n(200), a = n(50), s = n(147), c = n(73), u = n(187), l = n(64), d = n(99),
            f = n(44), p = n(75), h = n(137), m = n(42), y = n(41), g = n(72), v = n(81), b = n(268), w = n(110),
            S = n(31), A = o("fetch"), O = o("Headers"), x = S("iterator"), k = l.set,
            P = l.getterFor("URLSearchParams"), E = l.getterFor("URLSearchParamsIterator"), T = /\+/g, j = Array(4),
            I = function (e) {
                return j[e - 1] || (j[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
            }, L = function (e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return e
                }
            }, C = function (e) {
                var t = e.replace(T, " "), n = 4;
                try {
                    return decodeURIComponent(t)
                } catch (e) {
                    for (; n;) t = t.replace(I(n--), L);
                    return t
                }
            }, R = /[!'()~]|%20/g, _ = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
            D = function (e) {
                return _[e]
            }, M = function (e) {
                return encodeURIComponent(e).replace(R, D)
            }, F = function (e, t) {
                if (t) for (var n, r, o = t.split("&"), i = 0; i < o.length;) (n = o[i++]).length && (r = n.split("="), e.push({
                    key: C(r.shift()),
                    value: C(r.join("="))
                }))
            }, B = function (e) {
                this.entries.length = 0, F(this.entries, e)
            }, z = function (e, t) {
                if (e < t) throw TypeError("Not enough arguments")
            }, N = u((function (e, t) {
                k(this, {type: "URLSearchParamsIterator", iterator: b(P(e).entries), kind: t})
            }), "Iterator", (function () {
                var e = E(this), t = e.kind, n = e.iterator.next(), r = n.value;
                return n.done || (n.value = "keys" === t ? r.key : "values" === t ? r.value : [r.key, r.value]), n
            })), W = function () {
                d(this, W, "URLSearchParams");
                var e, t, n, r, o, i, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0, l = this, p = [];
                if (k(l, {
                    type: "URLSearchParams", entries: p, updateURL: function () {
                    }, updateSearchParams: B
                }), void 0 !== u) if (y(u)) if ("function" == typeof (e = w(u))) for (n = (t = e.call(u)).next; !(r = n.call(t)).done;) {
                    if ((a = (i = (o = b(m(r.value))).next).call(o)).done || (s = i.call(o)).done || !i.call(o).done) throw TypeError("Expected sequence with length 2");
                    p.push({key: a.value + "", value: s.value + ""})
                } else for (c in u) f(u, c) && p.push({
                    key: c,
                    value: u[c] + ""
                }); else F(p, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
            }, q = W.prototype;
        s(q, {
            append: function (e, t) {
                z(arguments.length, 2);
                var n = P(this);
                n.entries.push({key: e + "", value: t + ""}), n.updateURL()
            }, delete: function (e) {
                z(arguments.length, 1);
                for (var t = P(this), n = t.entries, r = e + "", o = 0; o < n.length;) n[o].key === r ? n.splice(o, 1) : o++;
                t.updateURL()
            }, get: function (e) {
                z(arguments.length, 1);
                for (var t = P(this).entries, n = e + "", r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null
            }, getAll: function (e) {
                z(arguments.length, 1);
                for (var t = P(this).entries, n = e + "", r = [], o = 0; o < t.length; o++) t[o].key === n && r.push(t[o].value);
                return r
            }, has: function (e) {
                z(arguments.length, 1);
                for (var t = P(this).entries, n = e + "", r = 0; r < t.length;) if (t[r++].key === n) return !0;
                return !1
            }, set: function (e, t) {
                z(arguments.length, 1);
                for (var n, r = P(this), o = r.entries, i = !1, a = e + "", s = t + "", c = 0; c < o.length; c++) (n = o[c]).key === a && (i ? o.splice(c--, 1) : (i = !0, n.value = s));
                i || o.push({key: a, value: s}), r.updateURL()
            }, sort: function () {
                var e, t, n, r = P(this), o = r.entries, i = o.slice();
                for (o.length = 0, n = 0; n < i.length; n++) {
                    for (e = i[n], t = 0; t < n; t++) if (o[t].key > e.key) {
                        o.splice(t, 0, e);
                        break
                    }
                    t === n && o.push(e)
                }
                r.updateURL()
            }, forEach: function (e) {
                for (var t, n = P(this).entries, r = p(e, arguments.length > 1 ? arguments[1] : void 0, 3), o = 0; o < n.length;) r((t = n[o++]).value, t.key, this)
            }, keys: function () {
                return new N(this, "keys")
            }, values: function () {
                return new N(this, "values")
            }, entries: function () {
                return new N(this, "entries")
            }
        }, {enumerable: !0}), a(q, x, q.entries), a(q, "toString", (function () {
            for (var e, t = P(this).entries, n = [], r = 0; r < t.length;) e = t[r++], n.push(M(e.key) + "=" + M(e.value));
            return n.join("&")
        }), {enumerable: !0}), c(W, "URLSearchParams"), r({
            global: !0,
            forced: !i
        }, {URLSearchParams: W}), i || "function" != typeof A || "function" != typeof O || r({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function (e) {
                var t, n, r, o = [e];
                return arguments.length > 1 && (y(t = arguments[1]) && (n = t.body, "URLSearchParams" === h(n) && ((r = t.headers ? new O(t.headers) : new O).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = g(t, {
                    body: v(0, String(n)),
                    headers: v(0, r)
                }))), o.push(t)), A.apply(this, o)
            }
        }), e.exports = {URLSearchParams: W, getState: P}
    }, function (e, t, n) {
        var r = n(42), o = n(110);
        e.exports = function (e) {
            var t = o(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return r(t.call(e))
        }
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(202), i = (r = o) && r.__esModule ? r : {default: r};
        t.default = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
    }, function (e, t, n) {
        n(272);
        var r = n(77).Object;
        e.exports = function (e, t, n) {
            return r.defineProperty(e, t, n)
        }
    }, function (e, t, n) {
        var r = n(117);
        r(r.S + r.F * !n(102), "Object", {defineProperty: n(101).f})
    }, function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    }, function (e, t, n) {
        e.exports = !n(102) && !n(154)((function () {
            return 7 != Object.defineProperty(n(204)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, function (e, t, n) {
        var r = n(153);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (e, t) {
        var n, r, o, i;

        function a() {
            n = i.innerWidth, r = i.screen.availHeight, o = i.outerHeight
        }

        e.exports = {
            addListener: function (e, t) {
                var s;
                t || (t = window), !i && ((s = t) && s.window === s) && (i = t);
                var c = function (e) {
                    return function (t) {
                        i.innerWidth === n && i.screen.availHeight === r && i.outerHeight === o || e(t)
                    }
                }(e);
                return i.addEventListener("resize", c), i.removeEventListener("resize", a), i.addEventListener("resize", a), c
            }, removeListener: function (e) {
                i.removeEventListener("resize", e)
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r, o = n(278), i = (r = o) && r.__esModule ? r : {default: r};
        var a = function (e) {
            return e instanceof HTMLElement || e && "children" in e
        }, s = function (e) {
            return Array.isArray(e) && !e.some((function (e) {
                return !a(e)
            })) ? e : function (e) {
                return e instanceof NodeList && e.length > 0
            }(e) ? (0, i.default)(e) : a(e) ? [e] : (console.error("`nodes` must be HTMLElement or NodeList"), null)
        };
        e.exports = {
            getValidNodes: function (e, t) {
                if (e) return s(e);
                var n = [];
                return t.forEach((function (e) {
                    n.push(e.node)
                })), n
            }, validateNodes: s, validateCallbacks: function (e) {
                return ["onEnter", "onExit", "whileInRange"].reduce((function (t, n) {
                    var r = e[n], o = r && "function" == typeof r;
                    return t[n] = o ? r : function () {
                    }, t
                }), {})
            }, validateBoolean: function (e, t) {
                return "true" === e || !0 === e || "false" !== e && !1 !== e && (t || !1)
            }
        }
    }, function (e, t, n) {
        e.exports = {default: n(279), __esModule: !0}
    }, function (e, t, n) {
        n(280), n(293), e.exports = n(77).Array.from
    }, function (e, t, n) {
        "use strict";
        var r = n(281)(!0);
        n(282)(String, "String", (function (e) {
            this._t = String(e), this._i = 0
        }), (function () {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {value: void 0, done: !0} : (e = r(t, n), this._i += e.length, {value: e, done: !1})
        }))
    }, function (e, t, n) {
        var r = n(156), o = n(157);
        e.exports = function (e) {
            return function (t, n) {
                var i, a, s = String(o(t)), c = r(n), u = s.length;
                return c < 0 || c >= u ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(205), o = n(117), i = n(283), a = n(118), s = n(158), c = n(284), u = n(213), l = n(292),
            d = n(78)("iterator"), f = !([].keys && "next" in [].keys()), p = function () {
                return this
            };
        e.exports = function (e, t, n, h, m, y, g) {
            c(n, t, h);
            var v, b, w, S = function (e) {
                    if (!f && e in k) return k[e];
                    switch (e) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                }, A = t + " Iterator", O = "values" == m, x = !1, k = e.prototype,
                P = k[d] || k["@@iterator"] || m && k[m], E = P || S(m), T = m ? O ? S("entries") : E : void 0,
                j = "Array" == t && k.entries || P;
            if (j && (w = l(j.call(new e))) !== Object.prototype && w.next && (u(w, A, !0), r || "function" == typeof w[d] || a(w, d, p)), O && P && "values" !== P.name && (x = !0, E = function () {
                return P.call(this)
            }), r && !g || !f && !x && k[d] || a(k, d, E), s[t] = E, s[A] = p, m) if (v = {
                values: O ? E : S("values"),
                keys: y ? E : S("keys"),
                entries: T
            }, g) for (b in v) b in k || i(k, b, v[b]); else o(o.P + o.F * (f || x), t, v);
            return v
        }
    }, function (e, t, n) {
        e.exports = n(118)
    }, function (e, t, n) {
        "use strict";
        var r = n(285), o = n(155), i = n(213), a = {};
        n(118)(a, n(78)("iterator"), (function () {
            return this
        })), e.exports = function (e, t, n) {
            e.prototype = r(a, {next: o(1, n)}), i(e, t + " Iterator")
        }
    }, function (e, t, n) {
        var r = n(119), o = n(286), i = n(212), a = n(159)("IE_PROTO"), s = function () {
        }, c = function () {
            var e, t = n(204)("iframe"), r = i.length;
            for (t.style.display = "none", n(291).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; r--;) delete c.prototype[i[r]];
            return c()
        };
        e.exports = Object.create || function (e, t) {
            var n;
            return null !== e ? (s.prototype = r(e), n = new s, s.prototype = null, n[a] = e) : n = c(), void 0 === t ? n : o(n, t)
        }
    }, function (e, t, n) {
        var r = n(101), o = n(119), i = n(206);
        e.exports = n(102) ? Object.defineProperties : function (e, t) {
            o(e);
            for (var n, a = i(t), s = a.length, c = 0; s > c;) r.f(e, n = a[c++], t[n]);
            return e
        }
    }, function (e, t, n) {
        var r = n(120), o = n(207), i = n(289)(!1), a = n(159)("IE_PROTO");
        e.exports = function (e, t) {
            var n, s = o(e), c = 0, u = [];
            for (n in s) n != a && r(s, n) && u.push(n);
            for (; t.length > c;) r(s, n = t[c++]) && (~i(u, n) || u.push(n));
            return u
        }
    }, function (e, t, n) {
        var r = n(208);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    }, function (e, t, n) {
        var r = n(207), o = n(209), i = n(290);
        e.exports = function (e) {
            return function (t, n, a) {
                var s, c = r(t), u = o(c.length), l = i(a, u);
                if (e && n != n) {
                    for (; u > l;) if ((s = c[l++]) != s) return !0
                } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
                return !e && -1
            }
        }
    }, function (e, t, n) {
        var r = n(156), o = Math.max, i = Math.min;
        e.exports = function (e, t) {
            return (e = r(e)) < 0 ? o(e + t, 0) : i(e, t)
        }
    }, function (e, t, n) {
        var r = n(100).document;
        e.exports = r && r.documentElement
    }, function (e, t, n) {
        var r = n(120), o = n(160), i = n(159)("IE_PROTO"), a = Object.prototype;
        e.exports = Object.getPrototypeOf || function (e) {
            return e = o(e), r(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(203), o = n(117), i = n(160), a = n(294), s = n(295), c = n(209), u = n(296), l = n(297);
        o(o.S + o.F * !n(299)((function (e) {
            Array.from(e)
        })), "Array", {
            from: function (e) {
                var t, n, o, d, f = i(e), p = "function" == typeof this ? this : Array, h = arguments.length,
                    m = h > 1 ? arguments[1] : void 0, y = void 0 !== m, g = 0, v = l(f);
                if (y && (m = r(m, h > 2 ? arguments[2] : void 0, 2)), null == v || p == Array && s(v)) for (n = new p(t = c(f.length)); t > g; g++) u(n, g, y ? m(f[g], g) : f[g]); else for (d = v.call(f), n = new p; !(o = d.next()).done; g++) u(n, g, y ? a(d, m, [o.value, g], !0) : o.value);
                return n.length = g, n
            }
        })
    }, function (e, t, n) {
        var r = n(119);
        e.exports = function (e, t, n, o) {
            try {
                return o ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && r(i.call(e)), t
            }
        }
    }, function (e, t, n) {
        var r = n(158), o = n(78)("iterator"), i = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (r.Array === e || i[o] === e)
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(101), o = n(155);
        e.exports = function (e, t, n) {
            t in e ? r.f(e, t, o(0, n)) : e[t] = n
        }
    }, function (e, t, n) {
        var r = n(298), o = n(78)("iterator"), i = n(158);
        e.exports = n(77).getIteratorMethod = function (e) {
            if (null != e) return e[o] || e["@@iterator"] || i[r(e)]
        }
    }, function (e, t, n) {
        var r = n(208), o = n(78)("toStringTag"), i = "Arguments" == r(function () {
            return arguments
        }());
        e.exports = function (e) {
            var t, n, a;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = Object(e), o)) ? n : i ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a
        }
    }, function (e, t, n) {
        var r = n(78)("iterator"), o = !1;
        try {
            var i = [7][r]();
            i.return = function () {
                o = !0
            }, Array.from(i, (function () {
                throw 2
            }))
        } catch (e) {
        }
        e.exports = function (e, t) {
            if (!t && !o) return !1;
            var n = !1;
            try {
                var i = [7], a = i[r]();
                a.next = function () {
                    return {done: n = !0}
                }, i[r] = function () {
                    return a
                }, e(i)
            } catch (e) {
            }
            return n
        }
    }, function (e, t, n) {
        "use strict";
        var r = i(n(301)), o = i(n(305));

        function i(e) {
            return e && e.__esModule ? e : {default: e}
        }

        var a = {}, s = "toTop", c = "toBottom", u = "top", l = "bottom",
            d = ["node", "position", "presence", "ratioOfRange", "ratioVisible"], f = function (e) {
                return window.innerHeight * e / 100
            }, p = function (e) {
                var t;
                if (!Array.isArray(e) || 2 !== e.length || "number" == typeof e[0] && isNaN(e[0]) || "number" == typeof e[1] && isNaN(e[1])) throw new Error("Must be an array of two numbers");
                return t = {}, (0, o.default)(t, l, f(Math.max(e[0], e[1]))), (0, o.default)(t, u, f(Math.min(e[0], e[1]))), t
            }, h = function (e) {
                var t = {};
                return (0, r.default)(e).forEach((function (n) {
                    d.includes(n) && (t[n] = e[n])
                })), t
            };
        e.exports = {
            VIEWPORT_INFO: a, callRangeEvents: function (e, t) {
                var n = a, r = void 0;
                t ? r = e.callbacks.onEnter : (e.ratioOfRange = n.direction === c ? 1 : 0, r = e.callbacks.onExit), r(h(e), n.direction || null)
            }, callViewportEvents: function (e) {
                var t = a, n = e.position, r = e.range, o = e.useElementHeight ? n.height : 0,
                    i = (r.bottom - n.top) / (r.bottom - r.top + o);
                e.ratioOfRange = Math.min(Math.max(i, 0), 1);
                var s = h(e);
                e.callbacks.whileInRange(s, t.direction)
            }, convertToPixelValue: f, getNodePosition: function (e) {
                var t = e.getBoundingClientRect();
                return {top: t.top + a.scrollTop, bottom: t.bottom + a.scrollTop, width: t.width, height: t.height}
            }, getRangeValues: p, getRatioVisible: function (e, t) {
                var n = t.top, r = t.height, o = Math.min((e.bottom - n) / r, 1) + Math.min((n - e.top) / r, 0);
                return Math.min(Math.max(o, 0), 100)
            }, getScrollDirection: function (e, t) {
                var n = a.scrollTop;
                return t && t !== n ? n > t ? s : c : a.direction
            }, getScrollingElementScrollTop: function (e) {
                if (0 === e.scrollTop && e === document.body) {
                    if (void 0 !== window.pageYOffset) return window.pageYOffset;
                    if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop
                }
                return e.scrollTop
            }, isInRange: function (e, t, n, r) {
                return e && t.useElementHeight ? t.observedInRange : !(n.top > t.range.bottom - 1) && !(n[r ? "bottom" : "top"] < t.range.top)
            }, passiveEventListener: function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (e) {
                    console.log(e)
                }
                return !!e && {passive: !0}
            }, updateNodePosition: function (e) {
                return {
                    top: e.initialPosition.top - a.scrollTop,
                    bottom: e.initialPosition.bottom - a.scrollTop,
                    width: e.initialPosition.width,
                    height: e.initialPosition.height
                }
            }, updateRangeValues: function (e) {
                e.forEach((function (e) {
                    e.range = p(e.rangeArray)
                }))
            }
        }
    }, function (e, t, n) {
        e.exports = {default: n(302), __esModule: !0}
    }, function (e, t, n) {
        n(303), e.exports = n(77).Object.keys
    }, function (e, t, n) {
        var r = n(160), o = n(206);
        n(304)("keys", (function () {
            return function (e) {
                return o(r(e))
            }
        }))
    }, function (e, t, n) {
        var r = n(117), o = n(77), i = n(154);
        e.exports = function (e, t) {
            var n = (o.Object || {})[e] || Object[e], a = {};
            a[e] = t(n), r(r.S + r.F * i((function () {
                n(1)
            })), "Object", a)
        }
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r, o = n(202), i = (r = o) && r.__esModule ? r : {default: r};
        t.default = function (e, t, n) {
            return t in e ? (0, i.default)(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, function (e, t, n) {
        var r = n(43), o = n(94), i = n(56), a = n(105).f, s = function (e) {
            return function (t) {
                for (var n, s = i(t), c = o(s), u = c.length, l = 0, d = []; u > l;) n = c[l++], r && !a.call(s, n) || d.push(e ? [n, s[n]] : s[n]);
                return d
            }
        };
        e.exports = {entries: s(!0), values: s(!1)}
    }, function (e, t, n) {
        "use strict";
        var r = n(121);
        Object.defineProperty(t, "__esModule", {value: !0}), t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.container,
                n = void 0 === t ? null : t, r = e.predicate, o = void 0 === r ? null : r, a = e.root,
                u = void 0 === a ? document.body : a, l = e.setFocusOnContain, d = void 0 === l || l,
                f = e.restoreFocusOnRevert, p = void 0 === f || f;
            if (!n && !o || n && o) throw new Error("One (and only one) of container and predicate must be set");
            n && (o = function (e) {
                return n.contains(e)
            });
            var h = document.activeElement, m = [], y = !1;
            return setTimeout((function () {
                if (!y) {
                    var e, t = i(u.querySelectorAll(s));
                    try {
                        for (t.s(); !(e = t.n()).done;) {
                            var n = e.value;
                            o(n) || (m.push({element: n, originalTabIndex: n.tabIndex}), n.tabIndex = -1)
                        }
                    } catch (e) {
                        t.e(e)
                    } finally {
                        t.f()
                    }
                    var r = c(d, o);
                    r && "function" == typeof r.focus && r.focus()
                }
            }), 0), function () {
                y = !0;
                var e, t = i(m);
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value;
                        n.element.tabIndex = n.originalTabIndex
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
                p && h && "function" == typeof h.focus && h.focus()
            }
        };
        var o = r(n(308));

        function i(e) {
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (e = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return a(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
                }(e))) {
                    var t = 0, n = function () {
                    };
                    return {
                        s: n, n: function () {
                            return t >= e.length ? {done: !0} : {done: !1, value: e[t++]}
                        }, e: function (e) {
                            throw e
                        }, f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, o, i = !0, s = !1;
            return {
                s: function () {
                    r = e[Symbol.iterator]()
                }, n: function () {
                    var e = r.next();
                    return i = e.done, e
                }, e: function (e) {
                    s = !0, o = e
                }, f: function () {
                    try {
                        i || null == r.return || r.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function a(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var s = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "iframe"].join(",");

        function c(e, t) {
            return e instanceof HTMLElement ? e : "string" == typeof e ? document.body.querySelector(e) : e ? (0, o.default)(document.body.querySelectorAll(s)).find((function (e) {
                return t(e)
            })) : null
        }

        e.exports = t.default
    }, function (e, t, n) {
        var r = n(309), o = n(310), i = n(311);
        e.exports = function (e) {
            return r(e) || o(e) || i()
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }
    }, function (e, t) {
        e.exports = function (e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }
    }, function (e, t) {
        e.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function (e, t, n) {
        (function (e) {
            var r = void 0 !== e && e || "undefined" != typeof self && self || window, o = Function.prototype.apply;

            function i(e, t) {
                this._id = e, this._clearFn = t
            }

            t.setTimeout = function () {
                return new i(o.call(setTimeout, r, arguments), clearTimeout)
            }, t.setInterval = function () {
                return new i(o.call(setInterval, r, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function (e) {
                e && e.close()
            }, i.prototype.unref = i.prototype.ref = function () {
            }, i.prototype.close = function () {
                this._clearFn.call(r, this._id)
            }, t.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout((function () {
                    e._onTimeout && e._onTimeout()
                }), t))
            }, n(313), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
        }).call(this, n(58))
    }, function (e, t, n) {
        (function (e, t) {
            !function (e, n) {
                "use strict";
                if (!e.setImmediate) {
                    var r, o, i, a, s, c = 1, u = {}, l = !1, d = e.document,
                        f = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    f = f && f.setTimeout ? f : e, "[object process]" === {}.toString.call(e.process) ? r = function (e) {
                        t.nextTick((function () {
                            h(e)
                        }))
                    } : !function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0, n = e.onmessage;
                            return e.onmessage = function () {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = n, t
                        }
                    }() ? e.MessageChannel ? ((i = new MessageChannel).port1.onmessage = function (e) {
                        h(e.data)
                    }, r = function (e) {
                        i.port2.postMessage(e)
                    }) : d && "onreadystatechange" in d.createElement("script") ? (o = d.documentElement, r = function (e) {
                        var t = d.createElement("script");
                        t.onreadystatechange = function () {
                            h(e), t.onreadystatechange = null, o.removeChild(t), t = null
                        }, o.appendChild(t)
                    }) : r = function (e) {
                        setTimeout(h, 0, e)
                    } : (a = "setImmediate$" + Math.random() + "$", s = function (t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(a) && h(+t.data.slice(a.length))
                    }, e.addEventListener ? e.addEventListener("message", s, !1) : e.attachEvent("onmessage", s), r = function (t) {
                        e.postMessage(a + t, "*")
                    }), f.setImmediate = function (e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                        var o = {callback: e, args: t};
                        return u[c] = o, r(c), c++
                    }, f.clearImmediate = p
                }

                function p(e) {
                    delete u[e]
                }

                function h(e) {
                    if (l) setTimeout(h, 0, e); else {
                        var t = u[e];
                        if (t) {
                            l = !0;
                            try {
                                !function (e) {
                                    var t = e.callback, n = e.args;
                                    switch (n.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(n[0]);
                                            break;
                                        case 2:
                                            t(n[0], n[1]);
                                            break;
                                        case 3:
                                            t(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            t.apply(void 0, n)
                                    }
                                }(t)
                            } finally {
                                p(e), l = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, n(58), n(214))
    }, function (e, t, n) {
        var r = n(315), o = n(354);
        e.exports = function (e, t) {
            for (var n = 0, i = (t = r(t, e)).length; null != e && n < i;) e = e[o(t[n++])];
            return n && n == i ? e : void 0
        }
    }, function (e, t, n) {
        var r = n(163), o = n(316), i = n(321), a = n(351);
        e.exports = function (e, t) {
            return r(e) ? e : o(e, t) ? [e] : i(a(e))
        }
    }, function (e, t, n) {
        var r = n(163), o = n(164), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, a = /^\w*$/;
        e.exports = function (e, t) {
            if (r(e)) return !1;
            var n = typeof e;
            return !("number" != n && "symbol" != n && "boolean" != n && null != e && !o(e)) || (a.test(e) || !i.test(e) || null != t && e in Object(t))
        }
    }, function (e, t, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }).call(this, n(58))
    }, function (e, t, n) {
        var r = n(165), o = Object.prototype, i = o.hasOwnProperty, a = o.toString, s = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            var t = i.call(e, s), n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (e) {
            }
            var o = a.call(e);
            return r && (t ? e[s] = n : delete e[s]), o
        }
    }, function (e, t) {
        var n = Object.prototype.toString;
        e.exports = function (e) {
            return n.call(e)
        }
    }, function (e, t) {
        e.exports = function (e) {
            return null != e && "object" == typeof e
        }
    }, function (e, t, n) {
        var r = n(322),
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            i = /\\(\\)?/g, a = r((function (e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, (function (e, n, r, o) {
                    t.push(r ? o.replace(i, "$1") : n || e)
                })), t
            }));
        e.exports = a
    }, function (e, t, n) {
        var r = n(323);
        e.exports = function (e) {
            var t = r(e, (function (e) {
                return 500 === n.size && n.clear(), e
            })), n = t.cache;
            return t
        }
    }, function (e, t, n) {
        var r = n(324);

        function o(e, t) {
            if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
            var n = function () {
                var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
                if (i.has(o)) return i.get(o);
                var a = e.apply(this, r);
                return n.cache = i.set(o, a) || i, a
            };
            return n.cache = new (o.Cache || r), n
        }

        o.Cache = r, e.exports = o
    }, function (e, t, n) {
        var r = n(325), o = n(346), i = n(348), a = n(349), s = n(350);

        function c(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, e.exports = c
    }, function (e, t, n) {
        var r = n(326), o = n(338), i = n(345);
        e.exports = function () {
            this.size = 0, this.__data__ = {hash: new r, map: new (i || o), string: new r}
        }
    }, function (e, t, n) {
        var r = n(327), o = n(334), i = n(335), a = n(336), s = n(337);

        function c(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, e.exports = c
    }, function (e, t, n) {
        var r = n(122);
        e.exports = function () {
            this.__data__ = r ? r(null) : {}, this.size = 0
        }
    }, function (e, t, n) {
        var r = n(329), o = n(330), i = n(219), a = n(332), s = /^\[object .+?Constructor\]$/, c = Function.prototype,
            u = Object.prototype, l = c.toString, d = u.hasOwnProperty,
            f = RegExp("^" + l.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = function (e) {
            return !(!i(e) || o(e)) && (r(e) ? f : s).test(a(e))
        }
    }, function (e, t, n) {
        var r = n(217), o = n(219);
        e.exports = function (e) {
            if (!o(e)) return !1;
            var t = r(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        }
    }, function (e, t, n) {
        var r, o = n(331), i = (r = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
        e.exports = function (e) {
            return !!i && i in e
        }
    }, function (e, t, n) {
        var r = n(166)["__core-js_shared__"];
        e.exports = r
    }, function (e, t) {
        var n = Function.prototype.toString;
        e.exports = function (e) {
            if (null != e) {
                try {
                    return n.call(e)
                } catch (e) {
                }
                try {
                    return e + ""
                } catch (e) {
                }
            }
            return ""
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return null == e ? void 0 : e[t]
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
    }, function (e, t, n) {
        var r = n(122), o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var t = this.__data__;
            if (r) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return o.call(t, e) ? t[e] : void 0
        }
    }, function (e, t, n) {
        var r = n(122), o = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
            var t = this.__data__;
            return r ? void 0 !== t[e] : o.call(t, e)
        }
    }, function (e, t, n) {
        var r = n(122);
        e.exports = function (e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t, this
        }
    }, function (e, t, n) {
        var r = n(339), o = n(340), i = n(342), a = n(343), s = n(344);

        function c(e) {
            var t = -1, n = null == e ? 0 : e.length;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        c.prototype.clear = r, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, e.exports = c
    }, function (e, t) {
        e.exports = function () {
            this.__data__ = [], this.size = 0
        }
    }, function (e, t, n) {
        var r = n(123), o = Array.prototype.splice;
        e.exports = function (e) {
            var t = this.__data__, n = r(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0)
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            return e === t || e != e && t != t
        }
    }, function (e, t, n) {
        var r = n(123);
        e.exports = function (e) {
            var t = this.__data__, n = r(t, e);
            return n < 0 ? void 0 : t[n][1]
        }
    }, function (e, t, n) {
        var r = n(123);
        e.exports = function (e) {
            return r(this.__data__, e) > -1
        }
    }, function (e, t, n) {
        var r = n(123);
        e.exports = function (e, t) {
            var n = this.__data__, o = r(n, e);
            return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
        }
    }, function (e, t, n) {
        var r = n(218)(n(166), "Map");
        e.exports = r
    }, function (e, t, n) {
        var r = n(124);
        e.exports = function (e) {
            var t = r(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
    }, function (e, t) {
        e.exports = function (e) {
            var t = typeof e;
            return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
        }
    }, function (e, t, n) {
        var r = n(124);
        e.exports = function (e) {
            return r(this, e).get(e)
        }
    }, function (e, t, n) {
        var r = n(124);
        e.exports = function (e) {
            return r(this, e).has(e)
        }
    }, function (e, t, n) {
        var r = n(124);
        e.exports = function (e, t) {
            var n = r(this, e), o = n.size;
            return n.set(e, t), this.size += n.size == o ? 0 : 1, this
        }
    }, function (e, t, n) {
        var r = n(352);
        e.exports = function (e) {
            return null == e ? "" : r(e)
        }
    }, function (e, t, n) {
        var r = n(165), o = n(353), i = n(163), a = n(164), s = r ? r.prototype : void 0, c = s ? s.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t) return t;
            if (i(t)) return o(t, e) + "";
            if (a(t)) return c ? c.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;) o[n] = t(e[n], n, e);
            return o
        }
    }, function (e, t, n) {
        var r = n(164);
        e.exports = function (e) {
            if ("string" == typeof e || r(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -1 / 0 ? "-0" : t
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(162);
        e.exports = function (e) {
            var t = r(e, "ownerDocument.defaultView");
            return t ? t.getComputedStyle(e) : {}
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(357);
        e.exports = function (e, t, n) {
            return e ? r(e.parentElement, t, n) : null
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(220);
        e.exports = function (e, t, n) {
            for (t = r(t), n = r(n); e && (!n || !n(e));) {
                if (t(e)) return e;
                e = e.parentElement
            }
            return null
        }
    }, function (e, t, n) {
        "use strict";
        var r = "undefined" != typeof Element ? Element.prototype : {},
            o = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
        e.exports = function (e, t) {
            if (!e || 1 !== e.nodeType) return !1;
            if (o) return o.call(e, t);
            for (var n = e.parentNode.querySelectorAll(t), r = 0; r < n.length; r++) if (n[r] == e) return !0;
            return !1
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(161), o = n(360), i = n(167).DOCUMENT;
        e.exports = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], a = [];
            return t && r(e, n) && a.push(e), a.concat(o(e, (function (e) {
                return r(e, n)
            }), (function (e) {
                return e.nodeType === i
            })))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(220);
        e.exports = function (e, t, n) {
            t = r(t), n = r(n), e = e.parentElement;
            for (var o = []; e && (!n || !n(e));) t && !t(e) || o.push(e), e = e.parentElement;
            return o
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e) {
            return e && "HTML" === e.nodeName ? e.ownerDocument : e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(121), o = r(n(363)), i = r(n(365));

        function a(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        var s = n(162), c = n(125), u = n(216), l = n(221), d = n(222), f = n(223), p = /(body|html)/i,
            h = function (e, t, n, r) {
                return e[0] - n < t[0] || r && e[1] + n > t[1] ? Math.round(e[0] - t[0] - n) : e[1] + n > t[1] ? Math.round(e[1] - t[1] + n) : 0
            }, m = function (e) {
                var t = e.getClientRects()[0], n = e.ownerDocument.defaultView.innerWidth,
                    r = e.ownerDocument.defaultView.innerHeight;
                p.test(e.nodeName) || (n = Math.min(e.clientWidth || e.scrollWidth, n), r = Math.min(e.clientHeight || e.scrollHeight, r));
                var o = t.left + e.scrollLeft, i = t.top + e.scrollTop;
                return {width: n, height: r, left: o, top: i, right: o + n, bottom: i + r}
            }, y = function (e, t) {
                "boolean" == typeof e && (e = {anchorToTopLeft: e});
                var n = e, r = n.scrollNode, o = n.offset;
                return r || (r = u(t)), function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? a(Object(n), !0).forEach((function (t) {
                            (0, i.default)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, e, {scrollNode: r = c(r), offset: o = f(o, 30)})
            };
        e.exports = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = y(t, e), r = n.scrollNode,
                i = n.anchorToTopLeft, a = n.offset, c = (0, o.default)(n, ["scrollNode", "anchorToTopLeft", "offset"]);
            if (!r || !s(r, "ownerDocument.defaultView")) return null;
            var u = e.getClientRects()[0], f = m(r), p = h([u.left, u.right], [f.left, f.right], a, i),
                g = h([u.top, u.bottom], [f.top, f.bottom], a, i);
            if (Math.abs(p) < 1 && Math.abs(g) < 1) return null;
            var v = r.scrollWidth - f.width, b = r.scrollHeight - f.height;
            return l(r, {left: d(r.scrollLeft + p, 0, v), top: d(r.scrollTop + g, 0, b)}, c)
        }
    }, function (e, t, n) {
        var r = n(364);
        e.exports = function (e, t) {
            if (null == e) return {};
            var n, o, i = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }
    }, function (e, t) {
        e.exports = function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(121), o = r(n(367)), i = r(n(368)), a = n(369), s = n(371), c = n(168), u = function () {
            function e(t, n) {
                if ((0, o.default)(this, e), "function" != typeof t) throw new Error("[Tween] First parameter needs to be a function.");
                var r = n.duration, i = n.easing, a = n.onEnd;
                if (void 0 !== r && !c(r)) throw new Error("[Tween] Duration is not a finite number.");
                this.fn = t, this.duration = void 0 === r ? 300 : r, this.easingFn = s[i || "linear"], this.onEnd = a
            }

            return (0, i.default)(e, [{
                key: "start", value: function () {
                    var e = this;
                    this.next = a((function () {
                        e.startTime = (new Date).getTime(), e.tween()
                    }))
                }
            }, {
                key: "end", value: function () {
                    this.cancelNext(), this.fn(1), "function" == typeof this.onEnd && this.onEnd()
                }
            }, {
                key: "cancelNext", value: function () {
                    this.next && (a.cancel(this.next), this.next = null)
                }
            }, {
                key: "pause", value: function () {
                    this.next && (this.cancelNext(), this.pausedTime = (new Date).getTime())
                }
            }, {
                key: "resume", value: function () {
                    var e = this;
                    this.pausedTime && (this.next = a((function () {
                        var t = (new Date).getTime() - e.pausedTime;
                        e.startTime += t, e.tween(), delete e.pausedTime
                    })))
                }
            }, {
                key: "isPaused", value: function () {
                    return !!this.pausedTime
                }
            }, {
                key: "isRunning", value: function () {
                    return !!this.next
                }
            }, {
                key: "getMultiplier", value: function (e) {
                    return this.easingFn(e, 0, 1, 1)
                }
            }, {
                key: "tween", value: function () {
                    this.next = null;
                    var e = (new Date).getTime(), t = this.duration, n = e - this.startTime;
                    n >= t ? this.end() : (this.fn(this.getMultiplier(n / t)), this.next = a(this.tween.bind(this)))
                }
            }]), e
        }(), l = ["start", "end", "resume", "pause", "isRunning", "isPaused"];
        e.exports = function e(t, n) {
            var r = this;
            (0, o.default)(this, e);
            var i = new u(t, n);
            l.forEach((function (e) {
                r[e] = function () {
                    return i[e]()
                }
            }))
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        e.exports = function (e, t, r) {
            return t && n(e.prototype, t), r && n(e, r), e
        }
    }, function (e, t, n) {
        (function (t) {
            for (var r = n(370), o = "undefined" == typeof window ? t : window, i = ["moz", "webkit"], a = "AnimationFrame", s = o["request" + a], c = o["cancel" + a] || o["cancelRequest" + a], u = 0; !s && u < i.length; u++) s = o[i[u] + "Request" + a], c = o[i[u] + "Cancel" + a] || o[i[u] + "CancelRequest" + a];
            if (!s || !c) {
                var l = 0, d = 0, f = [];
                s = function (e) {
                    if (0 === f.length) {
                        var t = r(), n = Math.max(0, 1e3 / 60 - (t - l));
                        l = n + t, setTimeout((function () {
                            var e = f.slice(0);
                            f.length = 0;
                            for (var t = 0; t < e.length; t++) if (!e[t].cancelled) try {
                                e[t].callback(l)
                            } catch (e) {
                                setTimeout((function () {
                                    throw e
                                }), 0)
                            }
                        }), Math.round(n))
                    }
                    return f.push({handle: ++d, callback: e, cancelled: !1}), d
                }, c = function (e) {
                    for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
                }
            }
            e.exports = function (e) {
                return s.call(o, e)
            }, e.exports.cancel = function () {
                c.apply(o, arguments)
            }, e.exports.polyfill = function (e) {
                e || (e = o), e.requestAnimationFrame = s, e.cancelAnimationFrame = c
            }
        }).call(this, n(58))
    }, function (e, t, n) {
        (function (t) {
            (function () {
                var n, r, o, i, a, s;
                "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function () {
                    return performance.now()
                } : null != t && t.hrtime ? (e.exports = function () {
                    return (n() - a) / 1e6
                }, r = t.hrtime, i = (n = function () {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })(), s = 1e9 * t.uptime(), a = i - s) : Date.now ? (e.exports = function () {
                    return Date.now() - o
                }, o = Date.now()) : (e.exports = function () {
                    return (new Date).getTime() - o
                }, o = (new Date).getTime())
            }).call(this)
        }).call(this, n(214))
    }, function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = {
            linear: function (e, t, n, r) {
                return n * e / r + t
            }, easeInQuad: function (e, t, n, r) {
                return n * (e /= r) * e + t
            }, easeOutQuad: function (e, t, n, r) {
                return -n * (e /= r) * (e - 2) + t
            }, easeInOutQuad: function (e, t, n, r) {
                return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
            }, easeInCubic: function (e, t, n, r) {
                return n * (e /= r) * e * e + t
            }, easeOutCubic: function (e, t, n, r) {
                return n * ((e = e / r - 1) * e * e + 1) + t
            }, easeInOutCubic: function (e, t, n, r) {
                return (e /= r / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
            }, easeInQuart: function (e, t, n, r) {
                return n * (e /= r) * e * e * e + t
            }, easeOutQuart: function (e, t, n, r) {
                return -n * ((e = e / r - 1) * e * e * e - 1) + t
            }, easeInOutQuart: function (e, t, n, r) {
                return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
            }, easeInQuint: function (e, t, n, r) {
                return n * (e /= r) * e * e * e * e + t
            }, easeOutQuint: function (e, t, n, r) {
                return n * ((e = e / r - 1) * e * e * e * e + 1) + t
            }, easeInOutQuint: function (e, t, n, r) {
                return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
            }, easeInSine: function (e, t, n, r) {
                return -n * Math.cos(e / r * (Math.PI / 2)) + n + t
            }, easeOutSine: function (e, t, n, r) {
                return n * Math.sin(e / r * (Math.PI / 2)) + t
            }, easeInOutSine: function (e, t, n, r) {
                return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + t
            }, easeInExpo: function (e, t, n, r) {
                var o;
                return null !== (o = 0 === e) ? o : {b: n * Math.pow(2, 10 * (e / r - 1)) + t}
            }, easeOutExpo: function (e, t, n, r) {
                var o;
                return null !== (o = e === r) ? o : t + {c: n * (1 - Math.pow(2, -10 * e / r)) + t}
            }, easeInOutExpo: function (e, t, n, r) {
                return (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (2 - Math.pow(2, -10 * --e)) + t
            }, easeInCirc: function (e, t, n, r) {
                return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + t
            }, easeOutCirc: function (e, t, n, r) {
                return n * Math.sqrt(1 - (e = e / r - 1) * e) + t
            }, easeInOutCirc: function (e, t, n, r) {
                return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
            }, easeInElastic: function (e, t, n, r) {
                var o, i, a;
                return a = 1.70158, 0 === e || (e /= r), (i = 0) || (i = .3 * r), (o = n) < Math.abs(n) ? (o = n, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(n / o), -o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / i) + t
            }, easeOutElastic: function (e, t, n, r) {
                var o, i, a;
                return a = 1.70158, 0 === e || (e /= r), (i = 0) || (i = .3 * r), (o = n) < Math.abs(n) ? (o = n, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(n / o), o * Math.pow(2, -10 * e) * Math.sin((e * r - a) * (2 * Math.PI) / i) + n + t
            }, easeInOutElastic: function (e, t, n, r) {
                var o, i, a;
                return a = 1.70158, 0 === e || (e /= r / 2), (i = 0) || (i = r * (.3 * 1.5)), (o = n) < Math.abs(n) ? (o = n, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(n / o), e < 1 ? o * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / i) * -.5 + t : o * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - a) * (2 * Math.PI) / i) * .5 + n + t
            }, easeInBack: function (e, t, n, r, o) {
                return void 0 === o && (o = 1.70158), n * (e /= r) * e * ((o + 1) * e - o) + t
            }, easeOutBack: function (e, t, n, r, o) {
                return void 0 === o && (o = 1.70158), n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + t
            }, easeInOutBack: function (e, t, n, r, o) {
                return void 0 === o && (o = 1.70158), (e /= r / 2) < 1 ? n / 2 * (e * e * ((1 + (o *= 1.525)) * e - o)) + t : n / 2 * ((e -= 2) * e * ((1 + (o *= 1.525)) * e + o) + 2) + t
            }, easeInBounce: function (e, t, n, o) {
                return n - r.easeOutBounce(o - e, 0, n, o) + t
            }, easeOutBounce: function (e, t, n, r) {
                return (e /= r) < 1 / 2.75 ? n * (7.5625 * e * e) + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
            }, easeInOutBounce: function (e, t, n, o) {
                return e < o / 2 ? .5 * r.easeInBounce(2 * e, 0, n, o) + t : .5 * r.easeOutBounce(2 * e - o, 0, n, o) + .5 * n + t
            }
        };
        t.default = r, e.exports = t.default
    }, function (e, t, n) {
        "use strict";
        var r = n(27), o = n(373);
        r({target: "String", proto: !0, forced: n(374)("link")}, {
            link: function (e) {
                return o(this, "a", "href", e)
            }
        })
    }, function (e, t, n) {
        var r = n(59), o = /"/g;
        e.exports = function (e, t, n, i) {
            var a = String(r(e)), s = "<" + t;
            return "" !== n && (s += " " + n + '="' + String(i).replace(o, "&quot;") + '"'), s + ">" + a + "</" + t + ">"
        }
    }, function (e, t, n) {
        var r = n(29);
        e.exports = function (e) {
            return r((function () {
                var t = ""[e]('"');
                return t !== t.toLowerCase() || t.split('"').length > 3
            }))
        }
    }, function (e, t, n) {
        "use strict";
        var r = n(27), o = n(376), i = n(51), a = n(49), s = n(83), c = n(109);
        r({target: "Array", proto: !0}, {
            flat: function () {
                var e = arguments.length ? arguments[0] : void 0, t = i(this), n = a(t.length), r = c(t, 0);
                return r.length = o(r, t, t, n, 0, void 0 === e ? 1 : s(e)), r
            }
        })
    }, function (e, t, n) {
        "use strict";
        var r = n(93), o = n(49), i = n(75), a = function (e, t, n, s, c, u, l, d) {
            for (var f, p = c, h = 0, m = !!l && i(l, d, 3); h < s;) {
                if (h in n) {
                    if (f = m ? m(n[h], h, t) : n[h], u > 0 && r(f)) p = a(e, t, f, o(f.length), p, u - 1) - 1; else {
                        if (p >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                        e[p] = f
                    }
                    p++
                }
                h++
            }
            return p
        };
        e.exports = a
    }, function (e, t, n) {
        n(84)("flat")
    }, function (e, t, n) {
        "use strict";
        var r = n(224), o = n(226);
        e.exports = r("Set", (function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }), o)
    }, , function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0, n(381);
        var r = n(382);
        t.VideoBackground = r.VideoBackground, t.VideoFilterPropertyValues = r.VideoFilterPropertyValues, t.videoAutoplayTest = r.videoAutoplayTest
    }, function (e, t) {
        !function () {
            if ("function" == typeof window.CustomEvent) return !1;

            function e(e, t) {
                t = t || {bubbles: !1, cancelable: !1, detail: void 0};
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }

            e.prototype = window.Event.prototype, window.CustomEvent = e
        }()
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0;
        var r = a(n(383)), o = n(228), i = a(n(227));

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.VideoBackground = r.default, t.VideoFilterPropertyValues = o.filterProperties, t.videoAutoplayTest = i.default
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), o = d(n(384)), i = d(n(227)), a = n(387), s = n(392), c = n(170), u = n(228), l = n(169);

        function d(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        var p = {
            vimeo: {api: a.initializeVimeoAPI, player: a.initializeVimeoPlayer},
            youtube: {api: s.initializeYouTubeAPI, player: s.initializeYouTubePlayer}
        }, h = function () {
            function e(t) {
                var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                f(this, e), this.windowContext = r, this.events = [], this.browserCanAutoPlay = !1, this.videoCanAutoPlay = !1, this.setInstanceProperties(t), this.renderFallbackBehavior(), (0, i.default)().then((function (e) {
                    n.logger(e), n.browserCanAutoPlay = !0, n.initializeVideoAPI()
                }), (function (e) {
                    n.logger(e), n.browserCanAutoPlay = !1
                })).then((function () {
                    n.setDisplayEffects(), n.bindUI(), !0 === n.DEBUG.enabled && (window.vdbg = n)
                }))
            }

            return r(e, [{
                key: "destroy", value: function () {
                    this.events && this.events.forEach((function (e) {
                        return e.target.removeEventListener(e.type, e.handler, !0)
                    })), this.events = null, this.player && "function" == typeof this.player.destroy && (this.player.iframe && this.player.iframe.classList.remove("ready"), this.player.destroy(), this.player = {}), "number" == typeof this.timer && (clearTimeout(this.timer), this.timer = null)
                }
            }, {
                key: "bindUI", value: function () {
                    var e = this, t = function () {
                        e.windowContext.requestAnimationFrame((function () {
                            e.scaleVideo()
                        }))
                    };
                    this.events.push({
                        target: this.windowContext,
                        type: "resize",
                        handler: t
                    }), this.windowContext.addEventListener("resize", t, !0)
                }
            }, {
                key: "setInstanceProperties", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (1 === (e = (0, o.default)({}, c.DEFAULT_PROPERTY_VALUES, e)).container.nodeType ? this.container = e.container : "string" == typeof e.container && (this.container = document.querySelector(e.container)), !this.container) return console.error("Container " + e.container + " not found"), !1;
                    this.videoSource = (0, l.getVideoSource)(e.url), this.videoId = (0, l.getVideoID)(e.url, this.videoSource), this.customFallbackImage = (0, l.validatedImage)(e.customFallbackImage || e.container.querySelector("img")), this.filter = e.filter, this.filterStrength = e.filterStrength, this.fitMode = e.fitMode, this.scaleFactor = e.scaleFactor, this.playbackSpeed = parseFloat(e.playbackSpeed) < .5 ? 1 : parseFloat(e.playbackSpeed), this.timeCode = {
                        start: (0, l.getStartTime)(e.url, this.videoSource) || e.timeCode.start,
                        end: e.timeCode.end
                    }, this.player = {}, this.DEBUG = e.DEBUG
                }
            }, {
                key: "onFallbackImageLoaded", value: function () {
                    this.customFallbackImage.classList.add("loaded")
                }
            }, {
                key: "setFallbackImage", value: function () {
                    var e = this, t = this.customFallbackImage;
                    t && (t.hasAttribute("src") && t.complete ? this.onFallbackImageLoaded() : (t.addEventListener("load", (function () {
                        e.onFallbackImageLoaded()
                    }), {once: !0}), this.windowContext.ImageLoader ? this.windowContext.ImageLoader.load(t, {load: !0}) : t.src = t.src))
                }
            }, {
                key: "initializeVideoAPI", value: function () {
                    var e = this;
                    this.browserCanAutoPlay && this.videoSource && this.videoId ? (this.player.ready = !1, (0, p[this.videoSource].api)(this.windowContext).then((function (t) {
                        e.logger(t), e.player.ready = !1, e.initializeVideoPlayer()
                    })).catch((function (t) {
                        document.body.classList.add("ready"), e.logger(t)
                    }))) : document.body.classList.add("ready")
                }
            }, {
                key: "initializeVideoPlayer", value: function () {
                    var e = this;
                    if (this.player.ready) {
                        try {
                            this.player.destroy()
                        } catch (e) {
                        }
                        this.player.ready = !1
                    }
                    (0, p[this.videoSource].player)({
                        instance: this,
                        container: this.container,
                        win: this.windowContext,
                        videoId: this.videoId,
                        startTime: this.timeCode.start,
                        speed: this.playbackSpeed,
                        readyCallback: function () {
                            e.player.iframe.classList.add("background-video"), e.videoAspectRatio = (0, l.findPlayerAspectRatio)(e.container, e.player, e.videoSource), e.syncPlayer();
                            var t = new CustomEvent("ready");
                            e.container.dispatchEvent(t)
                        },
                        stateChangeCallback: function (t, n) {
                            switch (t) {
                                case"playing":
                                    e.videoCanAutoPlay || (e.logger("video started playing"), e.videoCanAutoPlay = !0, e.player.ready = !0, e.player.iframe.classList.add("ready"), e.container.classList.remove("mobile"))
                            }
                            t && e.logger(t), n && e.logger(n)
                        }
                    }).then((function (t) {
                        e.player = t
                    }), (function (t) {
                        e.logger(t)
                    }))
                }
            }, {
                key: "renderFallbackBehavior", value: function () {
                    this.setFallbackImage(), this.container.classList.add("mobile"), this.logger("added mobile")
                }
            }, {
                key: "syncPlayer", value: function () {
                    this.setDisplayEffects(), this.setSpeed(), this.scaleVideo()
                }
            }, {
                key: "scaleVideo", value: function (e) {
                    this.setFallbackImage();
                    var t = this.player.iframe;
                    if (t) {
                        var n = e || this.scaleFactor;
                        if ("fill" !== this.fitMode) return t.style.width = "", void (t.style.height = "");
                        var r = t.parentNode.clientWidth, o = t.parentNode.clientHeight, i = r / o, a = 0, s = 0;
                        i > this.videoAspectRatio ? (a = r * n, s = r * n / this.videoAspectRatio) : this.videoAspectRatio > i ? (a = o * n * this.videoAspectRatio, s = o * n) : (a = r * n, s = o * n), t.style.width = a + "px", t.style.height = s + "px", t.style.left = 0 - (a - r) / 2 + "px", t.style.top = 0 - (s - o) / 2 + "px"
                    }
                }
            }, {
                key: "setSpeed", value: function (e) {
                    this.playbackSpeed = parseFloat(this.playbackSpeed), this.player.setPlaybackRate && this.player.setPlaybackRate(this.playbackSpeed)
                }
            }, {
                key: "setDisplayEffects", value: function () {
                    this.setFilter()
                }
            }, {
                key: "setFilter", value: function () {
                    var e = this.container.style, t = u.filterOptions[this.filter - 1], n = "";
                    "none" !== t && (n = this.getFilterStyle(t, this.filterStrength));
                    var r = "blur" === t;
                    e.webkitFilter = r ? "" : n, e.filter = r ? "" : n, this.container.classList.toggle("filter-blur", r), Array.prototype.slice.call(this.container.children).forEach((function (e) {
                        e.style.webkitFilter = r ? n : "", e.style.filter = r ? n : ""
                    }))
                }
            }, {
                key: "getFilterStyle", value: function (e, t) {
                    return e + "(" + (u.filterProperties[e].modifier(t) + u.filterProperties[e].unit) + ")"
                }
            }, {
                key: "logger", value: function (e) {
                    this.DEBUG.enabled && this.DEBUG.verbose && this.windowContext.console.log(e)
                }
            }]), e
        }();
        t.default = h
    }, function (e, t, n) {
        (function (e, n) {
            var r = /^\[object .+?Constructor\]$/, o = /^(?:0|[1-9]\d*)$/, i = {};
            i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1;
            var a = "object" == typeof e && e && e.Object === Object && e,
                s = "object" == typeof self && self && self.Object === Object && self,
                c = a || s || Function("return this")(), u = t && !t.nodeType && t,
                l = u && "object" == typeof n && n && !n.nodeType && n, d = l && l.exports === u, f = d && a.process,
                p = function () {
                    try {
                        var e = l && l.require && l.require("util").types;
                        return e || f && f.binding && f.binding("util")
                    } catch (e) {
                    }
                }(), h = p && p.isTypedArray;

            function m(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            var y, g, v, b = Array.prototype, w = Function.prototype, S = Object.prototype, A = c["__core-js_shared__"],
                O = w.toString, x = S.hasOwnProperty,
                k = (y = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + y : "",
                P = S.toString, E = O.call(Object),
                T = RegExp("^" + O.call(x).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                j = d ? c.Buffer : void 0, I = c.Symbol, L = c.Uint8Array, C = j ? j.allocUnsafe : void 0,
                R = (g = Object.getPrototypeOf, v = Object, function (e) {
                    return g(v(e))
                }), _ = Object.create, D = S.propertyIsEnumerable, M = b.splice, F = I ? I.toStringTag : void 0,
                B = function () {
                    try {
                        var e = ue(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (e) {
                    }
                }(), z = j ? j.isBuffer : void 0, N = Math.max, W = Date.now, q = ue(c, "Map"),
                U = ue(Object, "create"), H = function () {
                    function e() {
                    }

                    return function (t) {
                        if (!Se(t)) return {};
                        if (_) return _(t);
                        e.prototype = t;
                        var n = new e;
                        return e.prototype = void 0, n
                    }
                }();

            function V(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function G(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function Y(e) {
                var t = -1, n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function Q(e) {
                var t = this.__data__ = new G(e);
                this.size = t.size
            }

            function X(e, t) {
                var n = ye(e), r = !n && me(e), o = !n && !r && ve(e), i = !n && !r && !o && Oe(e),
                    a = n || r || o || i, s = a ? function (e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }(e.length, String) : [], c = s.length;
                for (var u in e) !t && !x.call(e, u) || a && ("length" == u || o && ("offset" == u || "parent" == u) || i && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || le(u, c)) || s.push(u);
                return s
            }

            function Z(e, t, n) {
                (void 0 !== n && !he(e[t], n) || void 0 === n && !(t in e)) && $(e, t, n)
            }

            function J(e, t, n) {
                var r = e[t];
                x.call(e, t) && he(r, n) && (void 0 !== n || t in e) || $(e, t, n)
            }

            function K(e, t) {
                for (var n = e.length; n--;) if (he(e[n][0], t)) return n;
                return -1
            }

            function $(e, t, n) {
                "__proto__" == t && B ? B(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
            }

            V.prototype.clear = function () {
                this.__data__ = U ? U(null) : {}, this.size = 0
            }, V.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, V.prototype.get = function (e) {
                var t = this.__data__;
                if (U) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return x.call(t, e) ? t[e] : void 0
            }, V.prototype.has = function (e) {
                var t = this.__data__;
                return U ? void 0 !== t[e] : x.call(t, e)
            }, V.prototype.set = function (e, t) {
                var n = this.__data__;
                return this.size += this.has(e) ? 0 : 1, n[e] = U && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }, G.prototype.clear = function () {
                this.__data__ = [], this.size = 0
            }, G.prototype.delete = function (e) {
                var t = this.__data__, n = K(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : M.call(t, n, 1), --this.size, !0)
            }, G.prototype.get = function (e) {
                var t = this.__data__, n = K(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, G.prototype.has = function (e) {
                return K(this.__data__, e) > -1
            }, G.prototype.set = function (e, t) {
                var n = this.__data__, r = K(n, e);
                return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
            }, Y.prototype.clear = function () {
                this.size = 0, this.__data__ = {hash: new V, map: new (q || G), string: new V}
            }, Y.prototype.delete = function (e) {
                var t = ce(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, Y.prototype.get = function (e) {
                return ce(this, e).get(e)
            }, Y.prototype.has = function (e) {
                return ce(this, e).has(e)
            }, Y.prototype.set = function (e, t) {
                var n = ce(this, e), r = n.size;
                return n.set(e, t), this.size += n.size == r ? 0 : 1, this
            }, Q.prototype.clear = function () {
                this.__data__ = new G, this.size = 0
            }, Q.prototype.delete = function (e) {
                var t = this.__data__, n = t.delete(e);
                return this.size = t.size, n
            }, Q.prototype.get = function (e) {
                return this.__data__.get(e)
            }, Q.prototype.has = function (e) {
                return this.__data__.has(e)
            }, Q.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof G) {
                    var r = n.__data__;
                    if (!q || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
                    n = this.__data__ = new Y(r)
                }
                return n.set(e, t), this.size = n.size, this
            };
            var ee, te = function (e, t, n) {
                for (var r = -1, o = Object(e), i = n(e), a = i.length; a--;) {
                    var s = i[ee ? a : ++r];
                    if (!1 === t(o[s], s, o)) break
                }
                return e
            };

            function ne(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : F && F in Object(e) ? function (e) {
                    var t = x.call(e, F), n = e[F];
                    try {
                        e[F] = void 0;
                        var r = !0
                    } catch (e) {
                    }
                    var o = P.call(e);
                    r && (t ? e[F] = n : delete e[F]);
                    return o
                }(e) : function (e) {
                    return P.call(e)
                }(e)
            }

            function re(e) {
                return Ae(e) && "[object Arguments]" == ne(e)
            }

            function oe(e) {
                return !(!Se(e) || function (e) {
                    return !!k && k in e
                }(e)) && (be(e) ? T : r).test(function (e) {
                    if (null != e) {
                        try {
                            return O.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }(e))
            }

            function ie(e) {
                if (!Se(e)) return function (e) {
                    var t = [];
                    if (null != e) for (var n in Object(e)) t.push(n);
                    return t
                }(e);
                var t = de(e), n = [];
                for (var r in e) ("constructor" != r || !t && x.call(e, r)) && n.push(r);
                return n
            }

            function ae(e, t, n, r, o) {
                e !== t && te(t, (function (i, a) {
                    if (o || (o = new Q), Se(i)) !function (e, t, n, r, o, i, a) {
                        var s = fe(e, n), c = fe(t, n), u = a.get(c);
                        if (u) return void Z(e, n, u);
                        var l = i ? i(s, c, n + "", e, t, a) : void 0, d = void 0 === l;
                        if (d) {
                            var f = ye(c), p = !f && ve(c), h = !f && !p && Oe(c);
                            l = c, f || p || h ? ye(s) ? l = s : Ae(b = s) && ge(b) ? l = function (e, t) {
                                var n = -1, r = e.length;
                                t || (t = Array(r));
                                for (; ++n < r;) t[n] = e[n];
                                return t
                            }(s) : p ? (d = !1, l = function (e, t) {
                                if (t) return e.slice();
                                var n = e.length, r = C ? C(n) : new e.constructor(n);
                                return e.copy(r), r
                            }(c, !0)) : h ? (d = !1, m = c, y = !0 ? (g = m.buffer, v = new g.constructor(g.byteLength), new L(v).set(new L(g)), v) : m.buffer, l = new m.constructor(y, m.byteOffset, m.length)) : l = [] : function (e) {
                                if (!Ae(e) || "[object Object]" != ne(e)) return !1;
                                var t = R(e);
                                if (null === t) return !0;
                                var n = x.call(t, "constructor") && t.constructor;
                                return "function" == typeof n && n instanceof n && O.call(n) == E
                            }(c) || me(c) ? (l = s, me(s) ? l = function (e) {
                                return function (e, t, n, r) {
                                    var o = !n;
                                    n || (n = {});
                                    var i = -1, a = t.length;
                                    for (; ++i < a;) {
                                        var s = t[i], c = r ? r(n[s], e[s], s, n, e) : void 0;
                                        void 0 === c && (c = e[s]), o ? $(n, s, c) : J(n, s, c)
                                    }
                                    return n
                                }(e, xe(e))
                            }(s) : Se(s) && !be(s) || (l = function (e) {
                                return "function" != typeof e.constructor || de(e) ? {} : H(R(e))
                            }(c))) : d = !1
                        }
                        var m, y, g, v;
                        var b;
                        d && (a.set(c, l), o(l, c, r, i, a), a.delete(c));
                        Z(e, n, l)
                    }(e, t, a, n, ae, r, o); else {
                        var s = r ? r(fe(e, a), i, a + "", e, t, o) : void 0;
                        void 0 === s && (s = i), Z(e, a, s)
                    }
                }), xe)
            }

            function se(e, t) {
                return pe(function (e, t, n) {
                    return t = N(void 0 === t ? e.length - 1 : t, 0), function () {
                        for (var r = arguments, o = -1, i = N(r.length - t, 0), a = Array(i); ++o < i;) a[o] = r[t + o];
                        o = -1;
                        for (var s = Array(t + 1); ++o < t;) s[o] = r[o];
                        return s[t] = n(a), m(e, this, s)
                    }
                }(e, t, Ee), e + "")
            }

            function ce(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function ue(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return oe(n) ? n : void 0
            }

            function le(e, t) {
                var n = typeof e;
                return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && o.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function de(e) {
                var t = e && e.constructor;
                return e === ("function" == typeof t && t.prototype || S)
            }

            function fe(e, t) {
                if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
            }

            var pe = function (e) {
                var t = 0, n = 0;
                return function () {
                    var r = W(), o = 16 - (r - n);
                    if (n = r, o > 0) {
                        if (++t >= 800) return arguments[0]
                    } else t = 0;
                    return e.apply(void 0, arguments)
                }
            }(B ? function (e, t) {
                return B(e, "toString", {
                    configurable: !0, enumerable: !1, value: (n = t, function () {
                        return n
                    }), writable: !0
                });
                var n
            } : Ee);

            function he(e, t) {
                return e === t || e != e && t != t
            }

            var me = re(function () {
                return arguments
            }()) ? re : function (e) {
                return Ae(e) && x.call(e, "callee") && !D.call(e, "callee")
            }, ye = Array.isArray;

            function ge(e) {
                return null != e && we(e.length) && !be(e)
            }

            var ve = z || function () {
                return !1
            };

            function be(e) {
                if (!Se(e)) return !1;
                var t = ne(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function we(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function Se(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function Ae(e) {
                return null != e && "object" == typeof e
            }

            var Oe = h ? function (e) {
                return function (t) {
                    return e(t)
                }
            }(h) : function (e) {
                return Ae(e) && we(e.length) && !!i[ne(e)]
            };

            function xe(e) {
                return ge(e) ? X(e, !0) : ie(e)
            }

            var ke, Pe = (ke = function (e, t, n) {
                ae(e, t, n)
            }, se((function (e, t) {
                var n = -1, r = t.length, o = r > 1 ? t[r - 1] : void 0, i = r > 2 ? t[2] : void 0;
                for (o = ke.length > 3 && "function" == typeof o ? (r--, o) : void 0, i && function (e, t, n) {
                    if (!Se(n)) return !1;
                    var r = typeof t;
                    return !!("number" == r ? ge(n) && le(t, n.length) : "string" == r && t in n) && he(n[t], e)
                }(t[0], t[1], i) && (o = r < 3 ? void 0 : o, r = 1), e = Object(e); ++n < r;) {
                    var a = t[n];
                    a && ke(e, a, n, o)
                }
                return e
            })));

            function Ee(e) {
                return e
            }

            n.exports = Pe
        }).call(this, n(58), n(385)(e))
    }, function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {
            }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function () {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0, get: function () {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.OggVideo = "data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A", t.Mp4Video = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ=="
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.initializeVimeoPlayer = t.initializeVimeoAPI = void 0;
        var r = n(169), o = n(170), i = void 0, a = "*", s = null, c = function (e, t) {
            var n = {method: e};
            t && (n.value = t);
            var r = JSON.stringify(n);
            i.ownerDocument.defaultView.eval("(function(playerIframe){ playerIframe.contentWindow.postMessage(" + r + ", " + JSON.stringify(a) + ") })")(i)
        };
        t.initializeVimeoAPI = function () {
            return new Promise((function (e, t) {
                e("no api needed")
            }))
        }, t.initializeVimeoPlayer = function (e) {
            var t = e.win, n = e.instance, u = e.container, l = e.videoId, d = e.startTime, f = e.readyCallback,
                p = e.stateChangeCallback;
            return new Promise((function (e, h) {
                var m = n.logger || function () {
                };
                (i = t.document.createElement("iframe")).id = "vimeoplayer";
                i.src = "//player.vimeo.com/video/" + l + "?api=1&background=1", (0, r.getPlayerElement)(u).appendChild(i);
                var y = {
                    iframe: i, setPlaybackRate: function () {
                    }
                };
                e(y);
                var g = function () {
                    c("getDuration"), c("getVideoHeight"), c("getVideoWidth")
                }, v = null, b = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    (e || y.dimensions.width && y.dimensions.height && y.duration) && (e && g(), y.dimensions.width = y.dimensions.width || y.iframe.parentNode.offsetWidth, y.dimensions.height = y.dimensions.height || y.iframe.parentNode.offsetHeight, y.duration = y.duration || 10, c("setVolume", "0"), c("setLoop", "true"), c("seekTo", d), c("addEventListener", "playProgress"), f(y))
                }, w = function (e) {
                    if (!/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
                    a = e.origin;
                    var t = e.data;
                    switch ("string" == typeof t && (t = JSON.parse(t)), t.event) {
                        case"ready":
                            s && (clearTimeout(s), s = null), y.dimensions || (y.dimensions = {}, g(), p("buffering"), v = setTimeout((function () {
                                m.call(n, "retrying"), b(!0)
                            }), .75 * o.TIMEOUT));
                            break;
                        case"playProgress":
                        case"timeupdate":
                            v && (clearTimeout(v), v = null), p("playing", t), c("setVolume", "0"), t.data.percent >= .98 && d > 0 && c("seekTo", d)
                    }
                    switch (t.method) {
                        case"getVideoHeight":
                            m.call(n, t.method), y.dimensions.height = t.value, b();
                            break;
                        case"getVideoWidth":
                            m.call(n, t.method), y.dimensions.width = t.value, b();
                            break;
                        case"getDuration":
                            m.call(n, t.method), y.duration = t.value, d >= y.duration && (d = 0), b()
                    }
                }, S = function (e) {
                    w(e)
                };
                t.addEventListener("message", S, !1), y.destroy = function () {
                    t.removeEventListener("message", S), y.iframe.parentElement && y.iframe.parentElement.removeChild(y.iframe)
                }, s = setTimeout((function () {
                    h("Ran out of time")
                }), o.TIMEOUT)
            }))
        }
    }, function (e, t, n) {
        "use strict";
        (function (t) {
            var r = n(389), o = n(390), i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                a = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
                s = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

            function c(e) {
                return (e || "").toString().replace(s, "")
            }

            var u = [["#", "hash"], ["?", "query"], function (e) {
                    return e.replace("\\", "/")
                }, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", void 0, 1, 1], [/:(\d+)$/, "port", void 0, 1], [NaN, "hostname", void 0, 1, 1]],
                l = {hash: 1, query: 1};

            function d(e) {
                var n,
                    r = ("undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}).location || {},
                    o = {}, a = typeof (e = e || r);
                if ("blob:" === e.protocol) o = new p(unescape(e.pathname), {}); else if ("string" === a) for (n in o = new p(e, {}), l) delete o[n]; else if ("object" === a) {
                    for (n in e) n in l || (o[n] = e[n]);
                    void 0 === o.slashes && (o.slashes = i.test(e.href))
                }
                return o
            }

            function f(e) {
                e = c(e);
                var t = a.exec(e);
                return {protocol: t[1] ? t[1].toLowerCase() : "", slashes: !!t[2], rest: t[3]}
            }

            function p(e, t, n) {
                if (e = c(e), !(this instanceof p)) return new p(e, t, n);
                var i, a, s, l, h, m, y = u.slice(), g = typeof t, v = this, b = 0;
                for ("object" !== g && "string" !== g && (n = t, t = null), n && "function" != typeof n && (n = o.parse), t = d(t), i = !(a = f(e || "")).protocol && !a.slashes, v.slashes = a.slashes || i && t.slashes, v.protocol = a.protocol || t.protocol || "", e = a.rest, a.slashes || (y[3] = [/(.*)/, "pathname"]); b < y.length; b++) "function" != typeof (l = y[b]) ? (s = l[0], m = l[1], s != s ? v[m] = e : "string" == typeof s ? ~(h = e.indexOf(s)) && ("number" == typeof l[2] ? (v[m] = e.slice(0, h), e = e.slice(h + l[2])) : (v[m] = e.slice(h), e = e.slice(0, h))) : (h = s.exec(e)) && (v[m] = h[1], e = e.slice(0, h.index)), v[m] = v[m] || i && l[3] && t[m] || "", l[4] && (v[m] = v[m].toLowerCase())) : e = l(e);
                n && (v.query = n(v.query)), i && t.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== t.pathname) && (v.pathname = function (e, t) {
                    if ("" === e) return t;
                    for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, a = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), a++) : a && (0 === r && (i = !0), n.splice(r, 1), a--);
                    return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
                }(v.pathname, t.pathname)), r(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (l = v.auth.split(":"), v.username = l[0] || "", v.password = l[1] || ""), v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null", v.href = v.toString()
            }

            p.prototype = {
                set: function (e, t, n) {
                    var i = this;
                    switch (e) {
                        case"query":
                            "string" == typeof t && t.length && (t = (n || o.parse)(t)), i[e] = t;
                            break;
                        case"port":
                            i[e] = t, r(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
                            break;
                        case"hostname":
                            i[e] = t, i.port && (t += ":" + i.port), i.host = t;
                            break;
                        case"host":
                            i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
                            break;
                        case"protocol":
                            i.protocol = t.toLowerCase(), i.slashes = !n;
                            break;
                        case"pathname":
                        case"hash":
                            if (t) {
                                var a = "pathname" === e ? "/" : "#";
                                i[e] = t.charAt(0) !== a ? a + t : t
                            } else i[e] = t;
                            break;
                        default:
                            i[e] = t
                    }
                    for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        c[4] && (i[c[1]] = i[c[1]].toLowerCase())
                    }
                    return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i
                }, toString: function (e) {
                    e && "function" == typeof e || (e = o.stringify);
                    var t, n = this, r = n.protocol;
                    r && ":" !== r.charAt(r.length - 1) && (r += ":");
                    var i = r + (n.slashes ? "//" : "");
                    return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), i += n.host + n.pathname, (t = "object" == typeof n.query ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (i += n.hash), i
                }
            }, p.extractProtocol = f, p.location = d, p.trimLeft = c, p.qs = o, e.exports = p
        }).call(this, n(58))
    }, function (e, t, n) {
        "use strict";
        e.exports = function (e, t) {
            if (t = t.split(":")[0], !(e = +e)) return !1;
            switch (t) {
                case"http":
                case"ws":
                    return 80 !== e;
                case"https":
                case"wss":
                    return 443 !== e;
                case"ftp":
                    return 21 !== e;
                case"gopher":
                    return 70 !== e;
                case"file":
                    return !1
            }
            return 0 !== e
        }
    }, function (e, t, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;

        function o(e) {
            try {
                return decodeURIComponent(e.replace(/\+/g, " "))
            } catch (e) {
                return null
            }
        }

        t.stringify = function (e, t) {
            t = t || "";
            var n, o, i = [];
            for (o in "string" != typeof t && (t = "?"), e) if (r.call(e, o)) {
                if ((n = e[o]) || null != n && !isNaN(n) || (n = ""), o = encodeURIComponent(o), n = encodeURIComponent(n), null === o || null === n) continue;
                i.push(o + "=" + n)
            }
            return i.length ? t + i.join("&") : ""
        }, t.parse = function (e) {
            for (var t, n = /([^=?&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
                var i = o(t[1]), a = o(t[2]);
                null === i || null === a || i in r || (r[i] = a)
            }
            return r
        }
    }, function (e, t, n) {
        (function (t) {
            var n = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r = /^\w*$/, o = /^\./,
                i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                a = /\\(\\)?/g, s = /^\[object .+?Constructor\]$/,
                c = "object" == typeof t && t && t.Object === Object && t,
                u = "object" == typeof self && self && self.Object === Object && self,
                l = c || u || Function("return this")();
            var d, f = Array.prototype, p = Function.prototype, h = Object.prototype, m = l["__core-js_shared__"],
                y = (d = /[^.]+$/.exec(m && m.keys && m.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "",
                g = p.toString, v = h.hasOwnProperty, b = h.toString,
                w = RegExp("^" + g.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                S = l.Symbol, A = f.splice, O = _(l, "Map"), x = _(Object, "create"), k = S ? S.prototype : void 0,
                P = k ? k.toString : void 0;

            function E(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function T(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function j(e) {
                var t = -1, n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function I(e, t) {
                for (var n, r, o = e.length; o--;) if ((n = e[o][0]) === (r = t) || n != n && r != r) return o;
                return -1
            }

            function L(e, t) {
                for (var o, i = 0, a = (t = function (e, t) {
                    if (B(e)) return !1;
                    var o = typeof e;
                    if ("number" == o || "symbol" == o || "boolean" == o || null == e || N(e)) return !0;
                    return r.test(e) || !n.test(e) || null != t && e in Object(t)
                }(t, e) ? [t] : B(o = t) ? o : D(o)).length; null != e && i < a;) e = e[M(t[i++])];
                return i && i == a ? e : void 0
            }

            function C(e) {
                return !(!z(e) || (t = e, y && y in t)) && (function (e) {
                    var t = z(e) ? b.call(e) : "";
                    return "[object Function]" == t || "[object GeneratorFunction]" == t
                }(e) || function (e) {
                    var t = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        t = !!(e + "")
                    } catch (e) {
                    }
                    return t
                }(e) ? w : s).test(function (e) {
                    if (null != e) {
                        try {
                            return g.call(e)
                        } catch (e) {
                        }
                        try {
                            return e + ""
                        } catch (e) {
                        }
                    }
                    return ""
                }(e));
                var t
            }

            function R(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }

            function _(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return C(n) ? n : void 0
            }

            E.prototype.clear = function () {
                this.__data__ = x ? x(null) : {}
            }, E.prototype.delete = function (e) {
                return this.has(e) && delete this.__data__[e]
            }, E.prototype.get = function (e) {
                var t = this.__data__;
                if (x) {
                    var n = t[e];
                    return "__lodash_hash_undefined__" === n ? void 0 : n
                }
                return v.call(t, e) ? t[e] : void 0
            }, E.prototype.has = function (e) {
                var t = this.__data__;
                return x ? void 0 !== t[e] : v.call(t, e)
            }, E.prototype.set = function (e, t) {
                return this.__data__[e] = x && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }, T.prototype.clear = function () {
                this.__data__ = []
            }, T.prototype.delete = function (e) {
                var t = this.__data__, n = I(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : A.call(t, n, 1), !0)
            }, T.prototype.get = function (e) {
                var t = this.__data__, n = I(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, T.prototype.has = function (e) {
                return I(this.__data__, e) > -1
            }, T.prototype.set = function (e, t) {
                var n = this.__data__, r = I(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, j.prototype.clear = function () {
                this.__data__ = {hash: new E, map: new (O || T), string: new E}
            }, j.prototype.delete = function (e) {
                return R(this, e).delete(e)
            }, j.prototype.get = function (e) {
                return R(this, e).get(e)
            }, j.prototype.has = function (e) {
                return R(this, e).has(e)
            }, j.prototype.set = function (e, t) {
                return R(this, e).set(e, t), this
            };
            var D = F((function (e) {
                var t;
                e = null == (t = e) ? "" : function (e) {
                    if ("string" == typeof e) return e;
                    if (N(e)) return P ? P.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var n = [];
                return o.test(e) && n.push(""), e.replace(i, (function (e, t, r, o) {
                    n.push(r ? o.replace(a, "$1") : t || e)
                })), n
            }));

            function M(e) {
                if ("string" == typeof e || N(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function F(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function () {
                    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, r);
                    return n.cache = i.set(o, a), a
                };
                return n.cache = new (F.Cache || j), n
            }

            F.Cache = j;
            var B = Array.isArray;

            function z(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function N(e) {
                return "symbol" == typeof e || function (e) {
                    return !!e && "object" == typeof e
                }(e) && "[object Symbol]" == b.call(e)
            }

            e.exports = function (e, t, n) {
                var r = null == e ? void 0 : L(e, t);
                return void 0 === r ? n : r
            }
        }).call(this, n(58))
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t.initializeYouTubePlayer = t.initializeYouTubeAPI = void 0;
        var r = n(169);
        t.initializeYouTubeAPI = function (e) {
            return new Promise((function (t, n) {
                if (e.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded')) t("already loaded"); else {
                    var r = e.document.createElement("script");
                    r.src = "https://www.youtube.com/iframe_api";
                    var o = e.document.getElementsByTagName("script")[0];
                    o.parentNode.insertBefore(r, o), r.addEventListener("load", (function (e) {
                        e.currentTarget.classList.add("loaded"), t("api script tag created and loaded")
                    }), !0), r.addEventListener("error", (function (e) {
                        n("Failed to load YouTube script: ", e)
                    }))
                }
            }))
        }, t.initializeYouTubePlayer = function (e) {
            var t = e.container, n = e.win, o = e.videoId, i = e.startTime, a = e.speed, s = e.readyCallback,
                c = e.stateChangeCallback, u = (0, r.getPlayerElement)(t), l = function () {
                    return new n.YT.Player(u, {
                        videoId: o,
                        playerVars: {
                            autohide: 1,
                            autoplay: 0,
                            controls: 0,
                            enablejsapi: 1,
                            iv_load_policy: 3,
                            loop: 0,
                            modestbranding: 1,
                            playsinline: 1,
                            rel: 0,
                            showinfo: 0,
                            wmode: "opaque"
                        },
                        events: {
                            onReady: function (e) {
                                !function (e, t) {
                                    var n = e.target;
                                    n.iframe = n.getIframe(), n.mute(), n.ready = !0, n.seekTo(t < n.getDuration() ? t : 0), n.playVideo()
                                }(e, i), s(e.target)
                            }, onStateChange: function (e) {
                                var t = function (e, t, n) {
                                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                                        o = e.target, i = (o.getDuration() - t) / r, a = function e() {
                                            o.getCurrentTime() + .1 >= o.getDuration() && (o.pauseVideo(), o.seekTo(t), o.playVideo()), requestAnimationFrame(e)
                                        };
                                    return e.data === n.YT.PlayerState.BUFFERING && 1 !== o.getVideoLoadedFraction() && (0 === o.getCurrentTime() || o.getCurrentTime() > i - -.1) ? "buffering" : e.data === n.YT.PlayerState.PLAYING ? (requestAnimationFrame(a), "playing") : void (e.data === n.YT.PlayerState.ENDED && o.playVideo())
                                }(e, i, n, a);
                                c(t, t)
                            }
                        }
                    })
                };
            return new Promise((function (e, t) {
                !function t() {
                    1 === n.YT.loaded ? e(l()) : setTimeout(t, 100)
                }()
            }))
        }
    }, function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        t.default = function (e) {
            var t = {container: e};
            return e.getAttribute("data-config-url") && (t.url = e.getAttribute("data-config-url")), e.getAttribute("data-config-playback-speed") && (t.playbackSpeed = e.getAttribute("data-config-playback-speed")), e.getAttribute("data-config-filter") && (t.filter = e.getAttribute("data-config-filter")), e.getAttribute("data-config-filter-strength") && (t.filterStrength = e.getAttribute("data-config-filter-strength")), t
        }, e.exports = t.default
    }, , function (e, t, n) {
        "use strict";
        n.r(t);
        n(238), n(239), function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
                t = t || {bubbles: !1, cancelable: !1, detail: null};
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
            }
        }();
        var r = n(14), o = n(21), i = n(19), a = function (e) {
                var t = function () {
                    "true" === o.a.getValue("tweak-blog-item-show-author-profile") && i.a.loadLazy(e, {
                        load: !0,
                        mode: "cover"
                    })
                };
                o.a.watch(["tweak-blog-item-show-author-profile"], t), t()
            }, s = (n(15), n(16), n(3)), c = n(6), u = function (e) {
                var t = function () {
                    i.a.loadAllLazy({load: !0, mode: "cover"}, e)
                }, n = function (e) {
                    e.closest(".blog-item").classList.add("is-loaded")
                };
                return o.a.watch(["basicBlogGutter", "basicBlogColumns", "tweak-blog-basic-grid-image-aspect-ratio", "tweak-blog-basic-grid-columns", "tweak-blog-single-column-image-aspect-ratio", "tweak-blog-side-by-side-image-aspect-ratio", "tweak-blog-side-by-side-image-size", "tweak-blog-alternating-side-by-side-image-aspect-ratio", "tweak-blog-alternating-side-by-side-image-size", "tweak-blog-grid-basic-gutter", "tweak-blog-single-column-width"], (function (e) {
                    t()
                })), e.querySelectorAll("img").forEach((function (e) {
                    var t = n.bind(void 0, e);
                    e.addEventListener("load", t)
                })), t(), s.a.on(t, c.e), {
                    destroy: function () {
                        s.a.off(t)
                    }
                }
            },
            l = (n(24), n(7), n(5), n(11), n(12), n(35), n(23), n(8), n(28), n(25), n(26), n(17), n(22), n(9), n(18), n(13), n(10), n(2)),
            d = function (e, t) {
                return Object.keys(t).forEach((function (n) {
                    e.style[n] = t[n]
                })), e
            }, f = n(38);
        n(257), n(53), n(32), n(36);

        function p(e) {
            return function (e) {
                if (Array.isArray(e)) return h(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return h(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function h(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function m(e) {
            return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function g(e, t) {
            return (g = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function v(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = w(e);
                if (t) {
                    var o = w(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return b(this, n)
            }
        }

        function b(e, t) {
            return !t || "object" !== m(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function w(e) {
            return (w = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function S(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function A(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function O(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function x(e, t, n) {
            return t && O(e.prototype, t), n && O(e, n), e
        }

        var k = function () {
            function e(t) {
                var n = t.node, r = t.imgWrapper, o = t.img, i = t.autoFitImage;
                A(this, e), this.node = n, this.imageWrapper = r, this.image = o, this.node.style.position = "absolute", this.autoFitImage = i, i && this.image && (this.imageAspectRatio = Object(f.a)(this.image))
            }

            return x(e, [{
                key: "applyAspectRatio", value: function (e) {
                    var t = e.aspectRatio, n = (e.x, e.y, e.width), r = e.height;
                    if (t <= 0) return d(this.image, {
                        width: "100%",
                        top: "0%",
                        left: "0%",
                        transform: "none"
                    }), void (this.imageWrapper.style.height = "auto");
                    var o = Math.ceil(n * (1 / t));
                    if (r / o < 1) {
                        var i = o / r, a = Math.round(n * i);
                        d(this.image, {width: "".concat(a, "px"), height: "".concat(o, "px")})
                    }
                    this.imageWrapper.style.height = "".concat(o, "px")
                }
            }, {
                key: "setPosition", value: function (e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    if (r = this.imageAspectRatio ? this.imageAspectRatio : r, d(this.node, {
                        width: "".concat(Math.round(n), "px"),
                        transform: "translate3d(".concat(Math.round(e), "px, ").concat(Math.round(t), "px, 0)")
                    }), !this.autoFitImage || !this.image) return this.node.clientHeight;
                    var o = Math.round(1 / this.imageAspectRatio * n);
                    return this.image.style.width = "100%", this.image.style.height = "".concat(o, "px"), this.imageWrapper && this.applyAspectRatio({
                        aspectRatio: r,
                        x: e,
                        y: t,
                        width: n,
                        height: o
                    }), this.node.clientHeight
                }
            }, {
                key: "clearPosition", value: function () {
                    this.node.style.width = "", this.node.style.transform = "", this.autoFitImage && this.image && this.imageWrapper && (this.image.style.width = "", this.image.style.height = "", this.imageWrapper.style.top = "", this.imageWrapper.style.left = "", this.imageWrapper.style.transform = "")
                }
            }]), e
        }(), P = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && g(e, t)
            }(n, e);
            var t = v(n);

            function n(e) {
                var r;
                A(this, n);
                var o = (r = t.call(this, e)).props, i = o.container, a = o.nodes, s = o.gutter, c = o.columns,
                    u = o.isReadyClass, l = o.aspectRatio, d = o.horizontalGutter, f = o.verticalGutter;
                return r.state = {
                    columns: c,
                    aspectRatio: l,
                    horizontalGutter: isNaN(d) ? s : d,
                    verticalGutter: isNaN(f) ? s : f,
                    shouldApplyGutterToContainerEdge: !1
                }, r.nodes = r.getNodes(a), r.len = r.nodes.length, r.layout(), setTimeout((function () {
                    i.classList.add(u)
                }), 0), r
            }

            return x(n, [{
                key: "getNodes", value: function (e) {
                    var t = this.props, n = t.imageWrapperSelector, r = t.imageSelector, o = t.autoFitImage,
                        i = t.aspectRatio;
                    return e.map((function (e) {
                        var t = e.querySelector(n), a = e.querySelectorAll(r)[0];
                        return new k({node: e, imgWrapper: t, img: a, autoFitImage: o, aspectRatio: i})
                    }))
                }
            }, {
                key: "setStyles", value: function () {
                    var e, t, n, r = this.props.container, o = this.state, i = o.columns, a = o.horizontalGutter,
                        s = o.verticalGutter, c = o.aspectRatio, u = o.shouldApplyGutterToContainerEdge,
                        l = (e = i, "function" == typeof (t = 0) ? new Array(e).fill("").map(t) : new Array(e).fill(t)),
                        d = r.clientWidth, f = d / 100, h = a / 20 * f, m = s / 20 * f, y = 0, g = (d + h) / i,
                        v = g - h;
                    u && (y = h, v = (g = (d - h) / i) - h);
                    for (var b = 0; b < this.len; b += 1) {
                        var w = (n = l).indexOf(Math.min.apply(Math, p(n))), S = y + g * w,
                            A = this.nodes[b].setPosition(S, l[w], v, c);
                        l[w] += A + m
                    }
                    r.style.height = "".concat(l[function (e) {
                        return e.indexOf(Math.max.apply(Math, p(e)))
                    }(l)] - m, "px")
                }
            }, {
                key: "clearStyles", value: function () {
                    this.props.container.style.height = "";
                    for (var e = 0; e < this.len; e += 1) this.nodes[e].clearPosition()
                }
            }, {
                key: "layout", value: function (e) {
                    e && this.setState(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? y(Object(n), !0).forEach((function (t) {
                                S(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e)), this.setStyles()
                }
            }, {
                key: "destroy", value: function () {
                    this.clearStyles()
                }
            }]), n
        }(l.a);

        function E() {
            var e = window.matchMedia("(max-width: ".concat(c.g.md - 1, "px)"));
            return e && e.matches
        }

        S(P, "defaultProps", {
            container: document.createElement("div"),
            nodes: [],
            autoFitImage: !0,
            imageWrapperSelector: null,
            imageSelector: "img",
            aspectRatio: -1,
            gutter: 0,
            columns: 2,
            isReadyClass: "masonry-ready",
            horizontalGutter: void 0,
            verticalGutter: void 0
        });
        var T = function (e) {
            var t, n = function (e) {
                e.closest(".blog-item").classList.add("is-loaded")
            }, r = function () {
                !function () {
                    t && (t.destroy(), t = null);
                    var e = document.getElementById("BlogMasonryContainer");
                    if (e) {
                        var n = Array.from(e.querySelectorAll(".blog-item")),
                            r = E() ? 1 : parseInt(o.a.getValue("tweak-blog-masonry-columns"), 10);
                        (t = new P({
                            container: e,
                            nodes: n,
                            columns: r,
                            horizontalGutter: parseInt(o.a.getValue("tweak-blog-masonry-horizontal-spacing"), 10),
                            verticalGutter: parseInt(o.a.getValue("tweak-blog-masonry-vertical-spacing"), 10),
                            imageWrapperSelector: ".image-wrapper",
                            shouldApplyGutterToContainerEdge: !1
                        })).layout()
                    }
                }(), i.a.loadAllLazy({load: !0, mode: "cover", useAdvancedPositioning: !0}, e)
            };
            return o.a.watch(["tweak-blog-masonry-horizontal-spacing", "tweak-blog-masonry-vertical-spacing", "tweak-blog-masonry-columns", "tweak-blog-masonry-list-read-more-style", "tweak-blog-masonry-image-spacing", "tweak-blog-masonry-read-more-spacing", "tweak-blog-masonry-width", "tweak-blog-masonry-meta-spacing"], (function (e) {
                r()
            })), e.querySelectorAll("img").forEach((function (e) {
                e.addEventListener("load", n.bind(void 0, e))
            })), r(), s.a.on(r, c.e), {
                destroy: function () {
                    s.a.off(r)
                }
            }
        }, j = function (e) {
            var t = function () {
                "true" === o.a.getValue("tweak-events-stacked-show-thumbnails") && i.a.loadAllLazy({
                    load: !0,
                    mode: "content-fill"
                }, e)
            };
            return o.a.watch(["tweak-events-stacked-show-thumbnails", "tweak-events-stacked-thumbnail-size"], (function (e) {
                t()
            })), t(), s.a.on(t, c.e), {
                destroy: function () {
                    s.a.off(t)
                }
            }
        }, I = (n(45), n(48), n(69), n(34), n(46), function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return t.split(".").reduce((function (e, t) {
                return e && e[t] || n
            }), e)
        });

        function L(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var C = function e(t) {
            var n = this;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), L(this, "addBlogMobileStyles", (function (e) {
                n.isBlogMobileStylingEnabled && (e.dataset.blogMobileStyles = !0)
            })), L(this, "addGalleryMobileStyles", (function (e) {
                n.isGalleryMobileStylingEnabled && (e.dataset.galleryMobileStyles = !0)
            })), L(this, "addSummaryBlockMobileStyles", (function (e) {
                n.isSummaryBlockMobileStylingEnabled && (e.dataset.summaryBlockMobileStyles = !0)
            })), L(this, "addMobileLogo", (function (e) {
                n.isMobileHeaderEditingEnabled && (e.dataset.mobileHeaderEditing = !0)
            })), L(this, "addMenuOverlayThemeSwitcher", (function (e) {
                n.isMenuOverlayThemeSwitcherEnabled && (e.dataset.menuOverlayThemeSwitcher = !0)
            })), L(this, "addMobileHeaderFontTweaks", (function (e) {
                n.isMobileHeaderFontTweaksEnabled && (e.dataset.mobileHeaderFontTweaks = !0)
            })), L(this, "addQuickViewLightboxColors", (function (e) {
                n.isQuickViewLightboxColorsEnabled && (e.dataset.quickViewLightboxColors = !0)
            })), this.node = t, this.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), this.isBlogMobileStylingEnabled = this.betaFeatureFlags.includes("seven-one-blog-mobile-styles"), this.isGalleryMobileStylingEnabled = this.betaFeatureFlags.includes("seven-one-gallery-mobile-styles"), this.isSummaryBlockMobileStylingEnabled = this.betaFeatureFlags.includes("seven-one-summary-block-mobile-styles"), this.isMobileHeaderEditingEnabled = this.betaFeatureFlags.includes("seven_one_header_editor_update"), this.isMenuOverlayThemeSwitcherEnabled = this.betaFeatureFlags.includes("seven-one-menu-overlay-theme-switcher"), this.isMobileHeaderFontTweaksEnabled = this.betaFeatureFlags.includes("seven-one-mobile-header-font-tweaks"), this.isQuickViewLightboxColorsEnabled = this.betaFeatureFlags.includes("seven-one-quick-view-lightbox-colors"), this.addBlogMobileStyles(this.node), this.addGalleryMobileStyles(this.node), this.addSummaryBlockMobileStyles(this.node), this.addMobileLogo(this.node), this.addMenuOverlayThemeSwitcher(this.node), this.addMobileHeaderFontTweaks(this.node), this.addQuickViewLightboxColors(this.node)
        }, R = n(66), _ = function (e) {
            Object(R.a)().then((function () {
                var t = I(window, "Y.Squarespace.Singletons.ShoppingCart", null);
                t && (t.on("item-added", (function (t) {
                    e.classList.remove("hidden")
                })), t.after("load", (function (t) {
                    t.target.get("totalQuantity") > 0 && e.classList.remove("hidden")
                })))
            }))
        };

        function D(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var M = new (function () {
            function e() {
                var t, n, r, o = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), r = function () {
                    window.SQSSectionTweak && !o.isConnected && (o.isConnected = !0, o.sectionTweak = window.SQSSectionTweak, o.applyTempTweaks())
                }, (n = "connect") in (t = this) ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, this.isAuthenticated = !!window.Static.SQUARESPACE_CONTEXT.authenticatedAccount, this.isConnected = !1, this.tempTweakStore = {}, this.sectionTweak = null, this.isAuthenticated && this.addYTweakListener()
            }

            var t, n, r;
            return t = e, (n = [{
                key: "addYTweakListener", value: function () {
                    var e = this;
                    Object(R.a)().then((function () {
                        window.Y.Global.on("section:tweaks:ready", e.connect), e.connect()
                    }))
                }
            }, {
                key: "watch", value: function (e, t) {
                    e && t && (this.isConnected ? this.sectionTweak.watch(e, t) : this.tempTweakStore[e] = t)
                }
            }, {
                key: "disconnect", value: function (e, t) {
                    e && t && (this.isConnected ? this.sectionTweak.disconnect(e, t) : delete this.tempTweakStore[e])
                }
            }, {
                key: "applyTempTweaks", value: function () {
                    var e = this;
                    Object.keys(this.tempTweakStore).forEach((function (t) {
                        var n = e.tempTweakStore[t];
                        e.sectionTweak.watch(t, n)
                    })), this.tempTweakStore = {}
                }
            }]) && D(t.prototype, n), r && D(t, r), e
        }());

        function F(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return B(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return B(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function B(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var z = {
            square: [1, 1],
            standard: [3, 2],
            "standard-vertical": [2, 3],
            "four-three": [4, 3],
            "three-four-vertical": [3, 4],
            widescreen: [16, 9],
            "anamorphic-widescreen": [2.4, 1],
            "ultra-widescreen": [2.4, 1]
        }, N = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = e.toLowerCase();
            if ("natural" === t) return -1;
            var n = t || "standard", r = z[n] || z.standard, o = F(r, 2), i = o[0], a = o[1];
            return a / i
        }, W = (n(116), n(261), n(199), Array.prototype.slice), q = function () {
            var e = W.call(arguments);
            return function () {
                for (var t = W.call(arguments), n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, U = [], H = {
            executeCallbacks: function () {
                U.forEach((function (e) {
                    return e()
                }))
            }, trigger: function () {
                this.executeCallbacks()
            }, registerCallback: function (e) {
                e && U.push(e)
            }, removeCallback: function (e) {
                if (e) {
                    var t = U.indexOf(e);
                    t > -1 && U.splice(t, 1)
                }
            }, on: function (e) {
                this.registerCallback(e)
            }, off: function (e) {
                this.removeCallback(e)
            }
        };
        window.history && window.history.pushState && (history.change = H, history.pushState = q((function () {
            return history.change.trigger()
        }), history.pushState), history.replaceState = q((function () {
            return history.change.trigger()
        }), history.replaceState), window.addEventListener("popstate", (function () {
            history.change.trigger()
        })));
        var V = function () {
            return window.history && window.history.pushState ? history : null
        };
        n(262), n(263), n(265);

        function G(e) {
            return (G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Y(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Y(Object(n), !0).forEach((function (t) {
                    te(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function X(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Z(e, t) {
            return (Z = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function J(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = ee(e);
                if (t) {
                    var o = ee(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return K(this, n)
            }
        }

        function K(e, t) {
            return !t || "object" !== G(t) && "function" != typeof t ? $(e) : t
        }

        function $(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ee(e) {
            return (ee = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function te(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var ne = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Z(e, t)
            }(a, e);
            var t, n, r, o = J(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), te($(t = o.call(this, e)), "onResize", (function () {
                    var e = t.ref.image;
                    i.a.loadLazy(e, Q({
                        load: !0,
                        forceImageUpdate: !0
                    }, t.props.imageLoadMode)), t.calculateCaptionVerticalPositionFromTopOnMobile()
                }));
                var n = t.props, r = n.node, s = n.regionSelector, c = n.imageSelector, u = n.imageWrapperSelector,
                    l = n.videoWrapperSelector, d = n.captionSelector;
                return t.state = {}, t.node = r, t.ref = {
                    region: r.querySelector(s),
                    image: r.querySelector(c),
                    caption: r.querySelector(d)
                }, t.isVideo = null !== t.ref.image.closest(l), t.ref.wrapper = u ? t.ref.image.closest(u) : t.ref.image.parentNode, t.slideUrl = t.node.dataset.slideUrl, t.slideId = t.node.dataset.itemId, t.state = Q(Q({
                    isActive: !1,
                    isVideo: !1
                }, Object(f.c)(t.ref.image)), {}, {focalPoint: Object(f.b)(t.ref.image)}), t.activeTimeout = null, t.transitionTimeout = null, t.ref.image.onload = function () {
                    t.ref.wrapper.dataset.loaded = !0, t.calculateCaptionVerticalPositionFromTopOnMobile()
                }, t
            }

            return t = a, (n = [{
                key: "calculateCaptionVerticalPositionFromTopOnMobile", value: function () {
                    var e = this.ref, t = e.image, n = e.caption, r = e.region;
                    if (n && E()) {
                        var o = r.clientHeight, i = o / 2 + t.clientHeight / 2, a = Math.round(i / o * 100);
                        n.style.top = "".concat(a, "%")
                    }
                }
            }, {
                key: "loadImage", value: function () {
                    var e = this.ref.image;
                    i.a.loadLazy(e, Q({load: !0}, this.props.imageLoadMode))
                }
            }, {
                key: "add", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this.props.switchDelay;
                    if (this.loadImage(), this.node.dataset.active = !1, this.node.dataset.next = e, this.node.dataset.static = n, this.node.parentNode && this.node.parentNode.appendChild(this.node), this.setState({
                        isActive: !0,
                        isVideo: this.isVideo
                    }), this.calculateCaptionVerticalPositionFromTopOnMobile(), clearTimeout(this.activeTimeout), clearTimeout(this.transitionTimeout), n) return this.node.dataset.active = !0, void (this.node.dataset.in = !0);
                    this.activeTimeout = setTimeout((function () {
                        t.node.dataset.active = !0
                    }), 0), this.transitionTimeout = setTimeout((function () {
                        t.node.dataset.in = !0
                    }), r)
                }
            }, {
                key: "remove", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this.props.transitionDuration;
                    if (this.node.dataset.next = !e, this.node.dataset.in = !1, this.node.dataset.static = n, clearTimeout(this.activeTimeout), clearTimeout(this.transitionTimeout), n) return this.setState({isActive: !1}), void (this.node.dataset.active = !1);
                    this.transitionTimeout = setTimeout((function () {
                        t.setState({isActive: !1}), t.node.dataset.active = !1
                    }), n ? 0 : r)
                }
            }, {
                key: "destroy", value: function () {
                    clearTimeout(this.activeTimeout), clearTimeout(this.transitionTimeout)
                }
            }]) && X(t.prototype, n), r && X(t, r), a
        }(l.a);
        te(ne, "defaultProps", {
            node: null,
            regionSelector: ".gallery-slideshow-item-wrapper",
            imageSelector: "img",
            videoWrapperSelector: ".sqs-video-wrapper",
            captionSelector: ".gallery-caption-slideshow",
            isLightbox: !1,
            switchDelay: 0,
            transitionDuration: 500,
            imageLoadMode: {},
            isVideo: !1
        });
        var re = n(1), oe = n(20);

        function ie(e) {
            return (ie = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ae(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function ce(e, t) {
            return (ce = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ue(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = fe(e);
                if (t) {
                    var o = fe(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return le(this, n)
            }
        }

        function le(e, t) {
            return !t || "object" !== ie(t) && "function" != typeof t ? de(e) : t
        }

        function de(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function fe(e) {
            return (fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function pe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var he = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ce(e, t)
            }(i, e);
            var t, n, r, o = ue(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), pe(de(t = o.call(this, e)), "onPress", (function (e) {
                    e.stopPropagation(), "number" == typeof e.button && 0 !== e.button || t.startSwipe(e, t.normalizeMouseEvent(e))
                })), pe(de(t), "onMove", (function (e) {
                    var n = t.props, r = n.axis, o = n.minSwipeLength, i = n.preventScroll;
                    if (i && (e.preventDefault(), e.stopPropagation()), !e.targetTouches || e.targetTouches[0].identifier === t.state.touchIdentifier) {
                        var a = t.getSwipeDirection(t.normalizeMouseEvent(e));
                        i && ("xy" === r ? e.preventDefault() : "x" === r ? a.swipeLengthX >= o && e.preventDefault() : a.swipeLengthY >= o && e.preventDefault()), t.isSwipeDirectionUnchanged(a) ? t.updateSwipe(a, t.normalizeMouseEvent(e)) : t.resetSwipe()
                    }
                })), pe(de(t), "onRelease", (function () {
                    var e = t.getSwipeLength(t.state.pos), n = (new Date).getTime() - t.state.swipeStart.getTime();
                    if (e > t.props.minSwipeLength && n <= t.props.maxTimeThreshold) {
                        var r = (t.state.direction.y || "") + (t.state.direction.x || ""), o = "onSwipe".concat(r),
                            i = {
                                type: "swipe".concat(r),
                                timestampStart: t.state.swipeStart,
                                timestampEnd: new Date,
                                start: t.state.start,
                                end: t.state.pos,
                                direction: t.state.direction
                            };
                        t.props.onSwipe && t.props.onSwipe(i), t.props[o] && t.props[o](i)
                    }
                    t.endSwipe()
                })), pe(de(t), "getSwipeLength", (function (e) {
                    return t.getSwipeLengthX(e) + t.getSwipeLengthY(e)
                })), pe(de(t), "getSwipeLengthX", (function (e) {
                    return Math.abs(e.x - t.state.start.x)
                })), pe(de(t), "getSwipeLengthY", (function (e) {
                    return Math.abs(e.y - t.state.start.y)
                })), pe(de(t), "isSwipeDirectionUnchanged", (function (e) {
                    return !(t.state.direction.x && t.state.direction.x !== e.x || t.state.direction.y && t.state.direction.y !== e.y)
                })), pe(de(t), "normalizeMouseEvent", (function (e) {
                    var t = Object(re.f)(e);
                    return {x: t.clientX, y: t.clientY}
                }));
                var n = t.props.node;
                return t.state = {
                    touchIdentifier: null,
                    direction: {x: null, y: null},
                    pos: {x: null, y: null},
                    start: {x: null, y: null},
                    swipeStart: new Date
                }, t.node = n, t.bindListeners(), t
            }

            return t = i, (n = [{
                key: "bindListeners", value: function () {
                    this.node.addEventListener(re.a.press, this.onPress)
                }
            }, {
                key: "unbindListeners", value: function () {
                    this.node.removeEventListener(re.a.press, this.onPress)
                }
            }, {
                key: "getSwipeDirection", value: function (e) {
                    var t = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ae(Object(n), !0).forEach((function (t) {
                                pe(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, this.state.direction);
                    return t.swipeLengthY = this.getSwipeLengthY(e), t.swipeLengthX = this.getSwipeLengthX(e), t.swipeLengthY > this.props.moveThreshold && (t.y = e.y < this.state.start.y ? "Up" : "Down"), t.swipeLengthX > this.props.moveThreshold && (t.x = e.x < this.state.start.x ? "Left" : "Right"), t
                }
            }, {
                key: "startSwipe", value: function (e, t) {
                    var n = this;
                    this.setState({
                        touchIdentifier: e.targetTouches ? e.targetTouches[0].identifier : null,
                        direction: {x: null, y: null},
                        start: t,
                        pos: {x: null, y: null},
                        swipeStart: new Date
                    }), document.addEventListener(re.a.move, this.onMove), re.a.release.forEach((function (e) {
                        document.addEventListener(e, n.onRelease)
                    }))
                }
            }, {
                key: "endSwipe", value: function () {
                    var e = this;
                    document.removeEventListener(re.a.move, this.onMove), re.a.release.forEach((function (t) {
                        document.removeEventListener(t, e.onRelease)
                    }))
                }
            }, {
                key: "updateSwipe", value: function (e, t) {
                    this.setState({direction: e, pos: t})
                }
            }, {
                key: "resetSwipe", value: function () {
                    this.setState({
                        touchIdentifier: null,
                        direction: {x: null, y: null},
                        pos: {x: null, y: null},
                        start: {x: null, y: null},
                        swipeStart: new Date
                    })
                }
            }, {
                key: "destroy", value: function () {
                    this.unbindListeners(), this.endSwipe()
                }
            }]) && se(t.prototype, n), r && se(t, r), i
        }(l.a);
        pe(he, "defaultProps", {
            node: document.createElement("div"),
            axis: "xy",
            maxTimeThreshold: 600,
            minSwipeLength: 40,
            moveThreshold: 100,
            preventScroll: !0,
            onSwipe: oe.a,
            onSwipeLeft: oe.a,
            onSwipeUpLeft: oe.a,
            onSwipeUp: oe.a,
            onSwipeUpRight: oe.a,
            onSwipeRight: oe.a,
            onSwipeDownRight: oe.a,
            onSwipeDown: oe.a,
            onSwipeDownLeft: oe.a
        });
        var me = function (e, t) {
            var n, r = function () {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                var a = function () {
                    return e.apply(void 0, o)
                };
                clearTimeout(n), n = setTimeout(a, t)
            };
            return r.cancel = function () {
                window.clearTimeout(n)
            }, r
        };

        function ye(e) {
            return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ge(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ve(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ge(Object(n), !0).forEach((function (t) {
                    ke(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function be(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function we(e, t) {
            return (we = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Se(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = xe(e);
                if (t) {
                    var o = xe(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ae(this, n)
            }
        }

        function Ae(e, t) {
            return !t || "object" !== ye(t) && "function" != typeof t ? Oe(e) : t
        }

        function Oe(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function xe(e) {
            return (xe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ke(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Pe = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && we(e, t)
            }(i, e);
            var t, n, r, o = Se(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), ke(Oe(t = o.call(this, e)), "onSwipe", (function (e) {
                    console.log(e)
                })), ke(Oe(t), "getSlideIndexByUrlOrId", (function (e) {
                    return t.slides.findIndex((function (t) {
                        return t.slideId === e || t.slideUrl === e
                    }))
                })), ke(Oe(t), "getSlides", (function (e, t) {
                    var n = t.regionSelector, r = t.imageSelector, o = t.switchDelay, i = t.transitionDuration,
                        a = t.imageLoadMode, s = t.isInstant, c = t.imageWrapperSelector;
                    return e.map((function (e) {
                        return new ne({
                            node: e,
                            regionSelector: n,
                            imageSelector: r,
                            switchDelay: o,
                            transitionDuration: i,
                            imageLoadMode: a,
                            isInstant: s,
                            imageWrapperSelector: c
                        })
                    }))
                })), ke(Oe(t), "onDisableMove", (function (e) {
                    e.preventDefault()
                })), ke(Oe(t), "onPreviousSlide", (function (e) {
                    t.setTargetSlide(t.state.index - 1, !1, !1, t.state.isInstant), e && e.preventDefault && e.preventDefault()
                })), ke(Oe(t), "onNextSlide", (function (e) {
                    t.setTargetSlide(t.state.index + 1, !0, !1, t.state.isInstant), e && e.preventDefault && e.preventDefault()
                })), ke(Oe(t), "onCloseLightbox", (function (e) {
                    t.closeLightbox()
                })), ke(Oe(t), "keyCodeListener", (function (e) {
                    if (27 === e.keyCode && (t.closeLightbox(), e.stopPropagation()), 39 === e.keyCode) {
                        var n = t.state.index + 1;
                        t.setSlide(n, !1, t.state.isInstant)
                    }
                    if (37 === e.keyCode) {
                        var r = t.state.index - 1;
                        t.setSlide(r, !1, t.state.isInstant)
                    }
                })), ke(Oe(t), "initAutoplay", (function (e) {
                    t.autoplayInterval = setInterval((function () {
                        var e = t.state.index + 1;
                        t.setSlide(e, !1, t.state.isInstant)
                    }), e)
                })), ke(Oe(t), "onHistoryStateChange", (function () {
                    var e = t.matchUrlToSlideIndex(), n = t.state.isLightboxOpen;
                    -1 === e && n ? t.closeLightbox({adjustHistory: !1}) : e > -1 && !n && t.openLightbox(e)
                })), ke(Oe(t), "onResize", (function () {
                    var e = Oe(t).sizedWrapper, n = t.state.aspectRatio;
                    n && (e.style.height = "".concat(e.clientWidth * n, "px")), t.loadSlides()
                })), ke(Oe(t), "loadSlides", (function () {
                    var e = t.state, n = e.index, r = e.thumbnailsEnabled, o = e.controls;
                    if (-1 !== n) {
                        var i;
                        if (r || "bullets" === o) i = t.slides.map((function (e, t) {
                            return t
                        })); else {
                            var a = t.slides.length;
                            i = [n, (a + n - 1) % a, (a + n + 1) % a]
                        }
                        i.forEach((function (e) {
                            return t.slides[e].loadImage()
                        }))
                    }
                }));
                var n = t.props, r = n.node, a = n.display, s = n.isHistoryEnabled, u = n.isLightbox,
                    l = n.autoplayEnabled, d = n.slideDurationMs, f = n.slides, p = n.aspectRatio, h = n.isInstant,
                    m = n.galleryHeight, y = n.galleryWidth, g = n.controls, v = n.thumbnailsEnabled,
                    b = n.sizedWrapper, w = I(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null);
                return t.node = r, t.display = a || r, t.sizedWrapper = b || t.display, t.history = V(), t.state = {
                    collectionFullUrl: w,
                    isHistoryEnabled: w && s && t.history,
                    aspectRatio: p,
                    autoplayEnabled: l,
                    slideDurationMs: d,
                    galleryHeight: m,
                    galleryWidth: y,
                    isInstant: h,
                    controls: g,
                    thumbnailsEnabled: v,
                    index: 0,
                    previous: -1,
                    isLightboxOpen: !1
                }, t.onResize = me(t.onResize, c.e), t.slides = t.getSlides(f, t.props), t.lightbox = t.node.querySelector(".gallery-lightbox"), t.state.index = t.matchUrlToSlideIndex(), t.autoplayInterval = null, t.len = t.slides.length, t.len ? (t.swipe = new he({
                    axis: "xy",
                    node: t.display,
                    onSwipeRight: t.onPreviousSlide,
                    onSwipeLeft: t.onNextSlide,
                    onSwipeUp: u && t.onCloseLightbox
                }), t.bindListeners(), t.checkLightboxReady(), t.state.autoplayEnabled && t.initAutoplay(t.state.slideDurationMs), t) : Ae(t)
            }

            return t = i, (n = [{
                key: "checkLightboxReady", value: function () {
                    if (!this.props.isLightbox) return -1 === this.state.index && (this.state.index = 0), void this.setTargetSlide(this.state.index);
                    this.state.index > -1 && this.openLightbox(this.state.index)
                }
            }, {
                key: "matchUrlToSlideIndex", value: function () {
                    var e = this.state.collectionFullUrl;
                    if (-1 === !window.location.pathname.indexOf(e)) return -1;
                    var t = new URLSearchParams(window.location.search).get("itemId");
                    return this.getSlideIndexByUrlOrId(t)
                }
            }, {
                key: "bindListeners", value: function () {
                    var e = this.props, t = e.isLightbox, n = e.buttonPrevious, r = e.buttonNext,
                        o = e.buttonLightboxClose;
                    n && n.addEventListener("click", this.onPreviousSlide), r && r.addEventListener("click", this.onNextSlide), t && (this.lightbox.addEventListener("touchmove", this.onDisableMove), o && o.addEventListener("click", this.onCloseLightbox), this.history && this.history.change.on(this.onHistoryStateChange)), s.a.on(this.onResize)
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this.props, t = e.isLightbox, n = e.buttonPrevious, r = e.buttonNext;
                    n && n.removeEventListener("click", this.onPreviousSlide), r && r.removeEventListener("click", this.onNextSlide), t && this.lightbox.removeEventListener("touchmove", this.onDisableMove), t && this.history && this.history.change.off(this.onHistoryStateChange), s.a.off(this.onResize)
                }
            }, {
                key: "setSlide", value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    e !== this.state.index && this.setTargetSlide(e, e > this.state.index, t, n)
                }
            }, {
                key: "setTargetSlide", value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        o = (e % this.len + this.len) % this.len, i = this.slides[this.state.previous],
                        a = this.slides[o];
                    i && i.remove(t, r), this.setState({
                        index: o,
                        previous: o
                    }), a.add(t, r), a.state.isVideo && this.lightbox ? this.lightbox.classList.add("video-slide") : this.lightbox && this.lightbox.classList.remove("video-slide"), this.setUrl(a.slideUrl), n || this.props.onSetSlide(o, t, r), this.onResize()
                }
            }, {
                key: "setUrl", value: function (e) {
                    var t = this.props.isLightbox, n = this.state.isHistoryEnabled;
                    t && n && history.replaceState({}, "", "?itemId=".concat(e))
                }
            }, {
                key: "openLightbox", value: function (e) {
                    if (!this.state.isLightboxOpen) {
                        var t = this.props.onLightboxOpen;
                        this.setState({isLightboxOpen: !0}), this.lightbox.dataset.open = !0, document.addEventListener("keyup", this.keyCodeListener), t(), this.setTargetSlide(e, !0, !1, this.state.isInstant)
                    }
                }
            }, {
                key: "closeLightbox", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.adjustHistory,
                        n = void 0 === t || t, r = this.props.onLightboxClose;
                    this.setState({
                        index: -1,
                        isLightboxOpen: !1
                    }), n && history.back(), this.lightbox.dataset.open = !1, document.removeEventListener("keyup", this.keyCodeListener), r()
                }
            }, {
                key: "refresh", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.state.autoplayEnabled !== e.autoplayEnabled && (!0 === e.autoplayEnabled ? this.initAutoplay(e.slideDurationMs) : this.autoplayInterval && clearInterval(this.autoplayInterval)), this.state.slideDurationMs !== e.slideDurationMs && (clearInterval(this.autoplayInterval), this.initAutoplay(e.slideDurationMs)), this.setState(ve({}, e)), this.onResize()
                }
            }, {
                key: "destroy", value: function () {
                    this.unbindListeners(), this.autoplayInterval && clearInterval(this.autoplayInterval), this.slides.forEach((function (e) {
                        return e.destroy()
                    })), this.swipe && this.swipe.destroy(), this.slides = [], this.len = 0
                }
            }]) && be(t.prototype, n), r && be(t, r), i
        }(l.a);

        function Ee(e) {
            return (Ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Te(e) {
            return function (e) {
                if (Array.isArray(e)) return je(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return je(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return je(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function je(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Ie(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ie(Object(n), !0).forEach((function (t) {
                    Be(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ie(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ce(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Re(e, t) {
            return (Re = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _e(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Fe(e);
                if (t) {
                    var o = Fe(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return De(this, n)
            }
        }

        function De(e, t) {
            return !t || "object" !== Ee(t) && "function" != typeof t ? Me(e) : t
        }

        function Me(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Fe(e) {
            return (Fe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Be(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        ke(Pe, "defaultProps", {
            isLightbox: !1,
            node: document.createElement("div"),
            display: null,
            sizedWrapper: null,
            buttonNext: document.createElement("button"),
            buttonPrevious: document.createElement("button"),
            buttonLightboxClose: document.createElement("button"),
            aspectRatio: null,
            slides: [],
            isHistoryEnabled: !0,
            autoplayEnabled: !1,
            slideDurationMs: 5e3,
            galleryHeight: 75,
            galleryWidth: 80,
            regionSelector: ".gallery-slideshow-item-wrapper",
            imageSelector: "img",
            switchDelay: 0,
            transitionDuration: 1e3,
            isInstant: !1,
            onSetSlide: oe.a,
            onLightboxOpen: oe.a,
            onLightboxClose: oe.a
        });
        var ze = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Re(e, t)
            }(i, e);
            var t, n, r, o = _e(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Be(Me(t = o.call(this)), "bindBulletNav", (function () {
                    "bullets" === t.state.controls && t.bullets.length > 0 && t.bullets.forEach((function (e) {
                        e.node.addEventListener("click", (function (n) {
                            t.slideshow.setSlide(e.target - 1, !1, !1)
                        }))
                    }))
                })), Be(Me(t), "unbindBulletNav", (function () {
                    t.bullets.length > 0 && t.bullets.forEach((function (e) {
                        e.node.removeEventListener("click", (function (n) {
                            t.slideshow.setSlide(e.target - 1, !1, !1)
                        }))
                    }))
                })), Be(Me(t), "onSetSlide", (function (e) {
                    "bullets" === t.state.controls && t.bullets.length > 0 && t.bullets.forEach((function (t) {
                        var n = parseInt(t.target, 10) === e + 1;
                        n ? t.node.classList.add("active") : t.node.classList.remove("active"), t.node.setAttribute("aria-label", n ? t.activeAltText : t.inactiveAltText)
                    })), t.clickLinks.forEach((function (t) {
                        parseInt(t.getAttribute("data-target"), 10) === e + 1 ? t.classList.add("active") : t.classList.remove("active")
                    }))
                })), Be(Me(t), "onSectionTweak", (function (e) {
                    var n = e.galleryOptions, r = n.fullscreenSlideshowOptions, o = n.design,
                        i = Le(Le(Le({}, t.state), r), {}, {design: o});
                    return i.design === t.state.design && ((i.viewportHeight !== t.state.viewportHeight || i.transition !== t.state.transition || i.controls !== t.state.controls || i.autoplayEnabled !== t.state.autoplayEnabled || i.slideDurationMs !== t.state.slideDurationMs) && (t.setState(Le({}, i)), t.node.dataset.transition = i.transition, t.node.dataset.controls = i.controls, t.node.dataset.autoplayEnabled = i.autoplayEnabled, t.node.style.height = "".concat(i.viewportHeight, "vh"), t.node.dataset.height = "".concat(i.viewportHeight > 75 ? "L" : i.viewportHeight > 50 ? "M" : "S"), t.slideshow.refresh(i), !0))
                })), Be(Me(t), "onLightboxOpen", (function (e) {
                    t.state.isHistoryEnabled && (e.preventDefault(), history.pushState({}, "", e.currentTarget.href))
                })), Be(Me(t), "destroy", (function () {
                    M.disconnect(t.sectionId, t.onSectionTweak), t.unbindBulletNav(), t.unbindListeners(), t.slideshow.destroy()
                })), t.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), t.isGalleryCaptionsBetaFlagOn = t.betaFeatureFlags.includes("gallery_captions_71");
                var n = I(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null);
                t.history = V();
                var r = t.props, a = r.listSelector, s = r.slideSelector, c = r.previousSelector, u = r.nextSelector,
                    l = {};
                e.dataset.props && (l = JSON.parse(e.dataset.props)), t.state = Le({
                    design: "fullscreenSlideshow",
                    viewportHeight: 75,
                    transition: "fade",
                    controls: "arrows",
                    autoplayEnabled: !1,
                    slideDurationMs: 5e3,
                    isHistoryEnabled: n && t.history
                }, l), t.node = e;
                var d = t.node.querySelectorAll(".gallery-fullscreen-slideshow-bullet");
                return t.bullets = Te(d).map((function (e) {
                    var t = e.querySelector(".js-slideshow-inactive-slide"), n = I(t, "innerText"),
                        r = e.querySelector(".js-slideshow-active-slide"), o = I(r, "innerText");
                    return {node: e, target: e.dataset.target, inactiveAltText: n || "", activeAltText: o || ""}
                })), t.clickLinks = t.node.querySelectorAll(".gallery-click-through-link"), t.sectionId = t.node.dataset.sectionId, t.slideshow = new Pe({
                    node: t.node,
                    display: t.node.querySelector(a),
                    slides: Array.from(t.node.querySelectorAll(s)),
                    buttonPrevious: t.node.querySelector(c),
                    buttonNext: t.node.querySelector(u),
                    aspectRatio: N(t.state.aspectRatio),
                    regionSelector: ".gallery-fullscreen-slideshow-item-wrapper",
                    onSetSlide: t.onSetSlide.bind(Me(t)),
                    autoplayEnabled: t.state.autoplayEnabled,
                    slideDurationMs: t.state.slideDurationMs,
                    controls: t.state.controls,
                    imageLoadMode: {mode: "fill", useAdvancedPositioning: !0, forceImageUpdate: !0},
                    imageWrapperSelector: ".gallery-fullscreen-slideshow-item-img"
                }), t.node.dataset.galleryCaptionBetaFlag = t.isGalleryCaptionsBetaFlagOn, t.bindBulletNav(), M.watch(t.sectionId, t.onSectionTweak), t.bindListeners(), t
            }

            return t = i, (n = [{
                key: "bindListeners", value: function () {
                    var e = this;
                    this.node.querySelectorAll(this.props.lightboxLinkSelector).forEach((function (t) {
                        t.addEventListener("click", e.onLightboxOpen)
                    }))
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this;
                    this.node.querySelectorAll(this.props.lightboxLinkSelector).forEach((function (t) {
                        t.removeEventListener("click", e.onLightboxOpen)
                    }))
                }
            }]) && Ce(t.prototype, n), r && Ce(t, r), i
        }(l.a);
        Be(ze, "defaultProps", {
            listSelector: ".gallery-fullscreen-slideshow-list",
            slideSelector: ".gallery-fullscreen-slideshow-item",
            previousSelector: "[data-previous]",
            nextSelector: "[data-next]",
            lightboxLinkSelector: '.gallery-fullscreen-slideshow-item[data-video="true"] .gallery-fullscreen-slideshow-lightbox-link'
        });
        var Ne = n(80), We = n.n(Ne);

        function qe(e) {
            return (qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ue(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function He(e, t) {
            return (He = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ve(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Qe(e);
                if (t) {
                    var o = Qe(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ge(this, n)
            }
        }

        function Ge(e, t) {
            return !t || "object" !== qe(t) && "function" != typeof t ? Ye(e) : t
        }

        function Ye(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Qe(e) {
            return (Qe = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Xe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Ze = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && He(e, t)
            }(i, e);
            var t, n, r, o = Ve(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Xe(Ye(t = o.call(this, e)), "onNodeEnter", (function (e) {
                    var n = e.node, r = t.props, o = r.delay, i = r.stagger;
                    n.__staggerEntered || (n.__staggerEntered = !0, n.__staggerTimeout = setTimeout((function () {
                        t.props.onEnter(e)
                    }), o + t.count * i), t.instant || (t.count += 1, t.count = Math.min(t.props.maxCount, t.count), t.countTimeout()))
                })), t.state = {isActive: !1}, t.count = 0, t.baseTimeout = null, t.instant = !1, t.viewportWatcher = new We.a, t
            }

            return t = i, (n = [{
                key: "start", value: function () {
                    this.state.isActive || (this.setState({isActive: !0}), this.viewportWatcher.addNodes({
                        nodes: this.props.nodes,
                        range: [100, 0],
                        callbacks: {onEnter: this.onNodeEnter}
                    }))
                }
            }, {
                key: "countTimeout", value: function () {
                    var e = this;
                    clearTimeout(this.baseTimeout), this.baseTimeout = setTimeout((function () {
                        e.count = 0
                    }), 10)
                }
            }, {
                key: "destroy", value: function () {
                    this.viewportWatcher.destroy(), clearTimeout(this.baseTimeout), this.props.nodes.forEach((function (e) {
                        clearTimeout(e.__staggerTimeout)
                    }))
                }
            }]) && Ue(t.prototype, n), r && Ue(t, r), i
        }(l.a);

        function Je(e) {
            return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ke(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function $e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function et(e, t) {
            return (et = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function tt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = rt(e);
                if (t) {
                    var o = rt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return nt(this, n)
            }
        }

        function nt(e, t) {
            return !t || "object" !== Je(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function rt(e) {
            return (rt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ot(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Xe(Ze, "defaultProps", {delay: 50, stagger: 50, maxCount: 20, nodes: [], onEnter: oe.a});
        var it = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && et(e, t)
            }(i, e);
            var t, n, r, o = tt(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i);
                var n = (t = o.call(this, e)).props, r = n.gutter, a = n.columns, s = n.width;
                return t.state = {gutter: r, columns: a, width: s}, t.layout(), t
            }

            return t = i, (n = [{
                key: "setStyles", value: function () {
                    var e = this.props.container, t = this.state, n = t.columns, r = t.gutter, o = t.width, i = r / 20;
                    "full" !== o && "inset" !== o ? e.setAttribute("style", "grid-template-columns: repeat(".concat(n, ", 1fr); grid-column-gap: ").concat(i, "vw; \n      grid-row-gap: ").concat(i, "vw; padding: 0vw ").concat(i, "vw; width: auto")) : e.setAttribute("style", "grid-template-columns: repeat(".concat(n, ", 1fr); grid-column-gap: \n        ").concat(i, "vw; grid-row-gap: ").concat(i, "vw;\n        width: auto"))
                }
            }, {
                key: "layout", value: function (e) {
                    e && this.setState(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Ke(Object(n), !0).forEach((function (t) {
                                ot(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ke(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e)), this.setStyles()
                }
            }, {
                key: "destroy", value: function () {
                }
            }]) && $e(t.prototype, n), r && $e(t, r), i
        }(l.a);

        function at(e) {
            return (at = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function st(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ct(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? st(Object(n), !0).forEach((function (t) {
                    mt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ut(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function lt(e, t) {
            return (lt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function dt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = ht(e);
                if (t) {
                    var o = ht(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return ft(this, n)
            }
        }

        function ft(e, t) {
            return !t || "object" !== at(t) && "function" != typeof t ? pt(e) : t
        }

        function pt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ht(e) {
            return (ht = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function mt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        ot(it, "defaultProps", {container: document.createElement("div"), gutter: 0, columns: 2, width: "full-bleed"});
        var yt = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && lt(e, t)
            }(a, e);
            var t, n, r, o = dt(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), mt(pt(t = o.call(this)), "loadImage", (function (e) {
                    var n = t.props.imageSelector, r = e.querySelector(n);
                    r.onload = function () {
                        e.dataset.loaded = !0
                    }, i.a.loadLazy(r, {load: !0, mode: "cover", useAdvancedPositioning: !0})
                })), mt(pt(t), "onLightboxOpen", (function (e) {
                    t.state.isHistoryEnabled && (e.preventDefault(), history.pushState({}, "", e.currentTarget.href))
                })), mt(pt(t), "onResize", (function () {
                    var e = t.getColumnData(t.state.numColumns, t.state.gutter);
                    t.packer.layout(ct(ct({}, e), {}, {width: t.node.dataset.width})), t.loadImages(t.ref.items)
                })), mt(pt(t), "onItemShow", (function (e) {
                    var t = e.node;
                    t.dataset.show || (t.dataset.show = !0)
                })), mt(pt(t), "onSectionTweak", (function (e) {
                    var n = e.galleryOptions, r = n.gridOptions, o = n.design,
                        i = ct(ct(ct({}, t.state), r), {}, {design: o});
                    return i.design === t.state.design && ((i.gutter !== t.state.gutter || i.width !== t.state.width || i.numColumns !== t.state.numColumns) && (t.setState(ct({}, i)), t.node.dataset.tweaking = !0, t.node.dataset.width = i.width, clearTimeout(t.tweakTimeout), t.tweakTimeout = setTimeout((function () {
                        t.node.dataset.tweaking = !1
                    }), 100), t.onResize(), !0))
                })), mt(pt(t), "destroy", (function () {
                    clearTimeout(t.tweakTimeout), t.unbindListeners(), t.stagger.destroy(), t.packer.destroy()
                })), t.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), t.isGalleryCaptionsBetaFlagOn = t.betaFeatureFlags.includes("gallery_captions_71");
                var n = t.props, r = n.listSelector, s = n.itemSelector, u = n.imageSelector,
                    l = n.lightboxLinkSelector, d = I(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null),
                    f = {};
                return e.dataset.props && (f = JSON.parse(e.dataset.props)), t.history = V(), t.node = e, t.sectionId = t.node.dataset.sectionId, t.state = ct({
                    design: "grid",
                    collectionFullUrl: d,
                    isHistoryEnabled: d && t.history,
                    numColumns: 3,
                    gutter: 20,
                    width: "full",
                    lightboxEnabled: !1
                }, f), t.ref = {
                    list: t.node.querySelector(r),
                    items: Array.from(t.node.querySelectorAll(s)),
                    lightboxLinks: Array.from(t.node.querySelectorAll(l)),
                    images: Array.from(t.node.querySelectorAll("".concat(s, " ").concat(u)))
                }, t.onResize = me(t.onResize, c.e), t.node.dataset.galleryCaptionBetaFlag = t.isGalleryCaptionsBetaFlagOn, t.stagger = new Ze({
                    nodes: t.ref.items,
                    onEnter: t.onItemShow
                }), t.packer = new it(ct(ct({container: t.ref.list}, t.getColumnData(t.state.numColumns, t.state.gutter)), {}, {width: t.node.dataset.width})), t.node.dataset.lightbox = t.state.lightboxEnabled, t.tweakTimeout = null, t.bindListeners(), t
            }

            return t = a, (n = [{
                key: "getColumnData", value: function (e, t) {
                    return {columns: Object(f.d)(e), gutter: t}
                }
            }, {
                key: "loadImages", value: function (e) {
                    e.forEach(this.loadImage)
                }
            }, {
                key: "bindListeners", value: function () {
                    var e = this;
                    this.ref.lightboxLinks.forEach((function (t) {
                        t.addEventListener("click", e.onLightboxOpen)
                    })), M.watch(this.sectionId, this.onSectionTweak), s.a.on(this.onResize), this.stagger.start(), this.onResize()
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this;
                    this.ref.lightboxLinks.forEach((function (t) {
                        t.removeEventListener("click", e.onLightboxOpen)
                    })), M.disconnect(this.sectionId, this.onSectionTweak), s.a.off(this.onResize)
                }
            }]) && ut(t.prototype, n), r && ut(t, r), a
        }(l.a);
        mt(yt, "defaultProps", {
            listSelector: ".gallery-grid-wrapper",
            itemSelector: ".gallery-grid-item",
            lightboxLinkSelector: ".gallery-grid-lightbox-link",
            imageSelector: "img",
            loadedItemClass: ""
        });

        function gt(e) {
            return (gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function vt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? vt(Object(n), !0).forEach((function (t) {
                    Pt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : vt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function wt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function St(e, t) {
            return (St = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function At(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = kt(e);
                if (t) {
                    var o = kt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ot(this, n)
            }
        }

        function Ot(e, t) {
            return !t || "object" !== gt(t) && "function" != typeof t ? xt(e) : t
        }

        function xt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function kt(e) {
            return (kt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Pt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Et = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && St(e, t)
            }(a, e);
            var t, n, r, o = At(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), Pt(xt(t = o.call(this)), "loadImage", (function (e) {
                    var n = t.props.imageSelector, r = e.querySelector(n);
                    r.onload = function () {
                        e.dataset.loaded = !0
                    }, i.a.loadLazy(r, {load: !0, mode: "cover", useAdvancedPositioning: !0})
                })), Pt(xt(t), "onLightboxOpen", (function (e) {
                    t.state.isHistoryEnabled && (e.preventDefault(), history.pushState({}, "", e.currentTarget.href))
                })), Pt(xt(t), "onResize", (function () {
                    var e = t.getColumnData(t.state.numColumns, t.state.gutter),
                        n = "full-bleed" === t.node.dataset.width;
                    t.packer.layout(bt(bt({}, e), {}, {shouldApplyGutterToContainerEdge: n})), t.loadImages(t.ref.items)
                })), Pt(xt(t), "onItemShow", (function (e) {
                    var t = e.node;
                    t.dataset.show || (t.dataset.show = !0)
                })), Pt(xt(t), "onSectionTweak", (function (e) {
                    var n = e.galleryOptions, r = n.masonryOptions, o = n.design,
                        i = bt(bt(bt({}, t.state), r), {}, {design: o});
                    return i.design === t.state.design && ((i.gutter !== t.state.gutter || i.width !== t.state.width || i.numColumns !== t.state.numColumns) && (t.setState(i), t.node.dataset.tweaking = !0, t.node.dataset.width = i.width, clearTimeout(t.tweakTimeout), t.tweakTimeout = setTimeout((function () {
                        t.node.dataset.tweaking = !1
                    }), 100), t.onResize(), !0))
                })), Pt(xt(t), "destroy", (function () {
                    clearTimeout(t.tweakTimeout), t.unbindListeners(), t.stagger.destroy(), t.packer.destroy()
                })), t.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), t.isGalleryCaptionsBetaFlagOn = t.betaFeatureFlags.includes("gallery_captions_71");
                var n = t.props, r = n.listSelector, s = n.itemSelector, u = n.lightboxLinkSelector,
                    l = I(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null), d = {};
                return e.dataset.props && (d = JSON.parse(e.dataset.props)), t.history = V(), t.node = e, t.sectionId = t.node.dataset.sectionId, t.node.dataset.galleryCaptionBetaFlag = t.isGalleryCaptionsBetaFlagOn, t.state = bt({
                    design: "masonry",
                    collectionFullUrl: l,
                    isHistoryEnabled: l && t.history,
                    numColumns: 3,
                    gutter: 10,
                    lightboxEnabled: !1,
                    width: "full"
                }, d), t.ref = {
                    list: t.node.querySelector(r),
                    items: Array.from(t.node.querySelectorAll(s)),
                    lightboxLinks: Array.from(t.node.querySelectorAll(u))
                }, t.onResize = me(t.onResize, c.e), t.stagger = new Ze({
                    nodes: t.ref.items,
                    onEnter: t.onItemShow
                }), t.packer = new P(bt({
                    container: t.ref.list,
                    nodes: t.ref.items,
                    imageWrapperSelector: ".gallery-masonry-item-wrapper",
                    isReadyClass: "gallery-masonry-list--ready",
                    shouldApplyGutterToContainerEdge: "full-bleed" === t.node.dataset.width
                }, t.getColumnData(t.state.numColumns, t.state.gutter))), t.node.dataset.lightbox = t.state.lightboxEnabled, t.tweakTimeout = null, t.bindListeners(), t
            }

            return t = a, (n = [{
                key: "loadImages", value: function (e) {
                    e.forEach(this.loadImage)
                }
            }, {
                key: "bindListeners", value: function () {
                    var e = this;
                    this.ref.lightboxLinks.forEach((function (t) {
                        t.addEventListener("click", e.onLightboxOpen)
                    })), M.watch(this.sectionId, this.onSectionTweak), s.a.on(this.onResize), this.stagger.start(), this.onResize()
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this;
                    this.ref.lightboxLinks.forEach((function (t) {
                        t.removeEventListener("click", e.onLightboxOpen)
                    })), M.disconnect(this.sectionId, this.onSectionTweak), s.a.off(this.onResize)
                }
            }, {
                key: "getColumnData", value: function (e, t) {
                    var n = Object(f.d)(e), r = Object(f.e)(t);
                    return {columns: n, horizontalGutter: r, verticalGutter: r}
                }
            }]) && wt(t.prototype, n), r && wt(t, r), a
        }(l.a);
        Pt(Et, "defaultProps", {
            listSelector: ".gallery-masonry-wrapper",
            itemSelector: ".gallery-masonry-item",
            lightboxLinkSelector: ".gallery-masonry-lightbox-link",
            imageSelector: "img",
            loadedItemClass: "loaded"
        });

        function Tt(e) {
            return (Tt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function jt(e) {
            return function (e) {
                if (Array.isArray(e)) return Lt(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || It(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function It(e, t) {
            if (e) {
                if ("string" == typeof e) return Lt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Lt(e, t) : void 0
            }
        }

        function Lt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Ct(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Rt(e, t) {
            return (Rt = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _t(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Ft(e);
                if (t) {
                    var o = Ft(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Dt(this, n)
            }
        }

        function Dt(e, t) {
            return !t || "object" !== Tt(t) && "function" != typeof t ? Mt(e) : t
        }

        function Mt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Ft(e) {
            return (Ft = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Bt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var zt = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Rt(e, t)
            }(a, e);
            var t, n, r, o = _t(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), Bt(Mt(t = o.call(this, e)), "loadImages", (function () {
                    t.state.isImagesLoad || (t.setState({isImagesLoad: !0}), t.node.querySelectorAll("img").forEach((function (e) {
                        t.loadImage(e)
                    })))
                })), Bt(Mt(t), "loadImage", (function (e) {
                    e.onload = function () {
                        e.dataset.loaded = !0
                    }, i.a.loadLazy(e, {load: !0, mode: "content-fill", useAdvancedPositioning: !0})
                })), Bt(Mt(t), "getThumbnails", (function (e) {
                    return e.map((function (e) {
                        var t = e.querySelector(".js-slideshow-inactive-slide"), n = I(t, "innerText"),
                            r = e.querySelector(".js-slideshow-active-slide"), o = I(r, "innerText");
                        return {
                            node: e,
                            image: e.querySelector("img"),
                            x: 0,
                            width: 0,
                            inactiveAltText: n || "",
                            activeAltText: o || ""
                        }
                    }))
                })), Bt(Mt(t), "onPress", (function (e) {
                    if (!(t.state.isInteracting || "number" == typeof e.button && 0 !== e.button)) {
                        var n = Object(re.f)(e).clientX;
                        t.target.x = t.pos.x, t.drag.start.x = n, t.drag.active.x = n, t.drag.moved.x = 0, t.velocity.x = 0, clearTimeout(t.clickDisabledTimeout), t.setState({isInteracting: !0}), document.addEventListener(re.a.move, t.onMove), re.a.release.forEach((function (e) {
                            document.addEventListener(e, t.onRelease)
                        }))
                    }
                })), Bt(Mt(t), "onMove", (function (e) {
                    var n = t.props, r = n.dragThreshold, o = n.onDragStart, i = Object(re.f)(e).clientX;
                    t.state.isDragging || (o(), t.setState({isDragging: !0}), t.node.dataset.dragging = !0, t.update()), e.preventDefault(), e.stopPropagation(), t.drag.moved.x = i - t.drag.active.x, t.drag.active.x = i, t.target.x += t.drag.moved.x, t.velocity.x += .2 * t.drag.moved.x, t.velocity.then = Date.now(), !t.state.isClickDisabled && Math.abs(i - t.drag.start.x) > r && t.setState({isClickDisabled: !0})
                })), Bt(Mt(t), "onRelease", (function (e) {
                    var n = t.props.onDragEnd, r = Date.now();
                    n(), t.node.dataset.dragging = !1, r - t.velocity.then > 50 && (t.velocity.x = 0), t.setState({
                        isInteracting: !1,
                        isDragging: !1
                    }), document.removeEventListener(re.a.move, t.onMove), re.a.release.forEach((function (e) {
                        document.removeEventListener(e, t.onRelease)
                    })), clearTimeout(t.clickDisabledTimeout), t.clickDisabledTimeout = setTimeout((function () {
                        t.setState({isClickDisabled: !1})
                    }), 200)
                })), Bt(Mt(t), "onSelectThumbnail", (function (e) {
                    if (!t.state.isClickDisabled) {
                        var n = t.props.thumbnails.indexOf(e.target);
                        -1 !== n && (t.velocity.x = 0, t.setTargetThumbnail(n), t.update())
                    }
                })), Bt(Mt(t), "onResize", (function () {
                    for (var e = t.props, n = e.node, r = e.scroller, o = e.loadImages, i = n.clientWidth, a = r.clientWidth, s = Math.min(i, a), c = 0; c < t.len; c += 1) {
                        var u = t.thumbnails[c];
                        u.x = u.node.offsetLeft, u.width = u.node.clientWidth
                    }
                    t.setState({
                        regionWidth: s,
                        maxX: .5 * s - .5 * t.thumbnails[0].width,
                        minX: .5 * s - a + .5 * t.thumbnails[t.thumbnails.length - 1].width
                    }), t.update(), o && t.loadImages()
                })), Bt(Mt(t), "update", (function () {
                    var e = t.state, n = e.maxX, r = e.minX;
                    cancelAnimationFrame(t.frame), t.state.isDragging ? (t.pos.x = t.target.x, t.pos.x > n && (t.pos.x = n + .2 * (t.target.x - n)), t.pos.x < r && (t.pos.x = r - .2 * (r - t.target.x)), t.updateTargetItem(), t.frame = requestAnimationFrame(t.update)) : (t.target.x > n && (t.target.x = n), t.target.x < r && (t.target.x = r), t.target.x += t.velocity.x, t.pos.x += .2 * (t.target.x - t.pos.x), Math.abs(t.pos.x - t.target.x) > .01 && (t.frame = requestAnimationFrame(t.update))), t.velocity.x *= .9, Math.abs(t.velocity.x) > .1 && t.updateTargetItem(), t.props.scroller.style.transform = "matrix(1, 0, 0, 1, ".concat(t.pos.x, ", 0)");
                    var o, i = t.props.node.getBoundingClientRect(), a = function (e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = It(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0, o = function () {
                                };
                                return {
                                    s: o, n: function () {
                                        return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                                    }, e: function (e) {
                                        throw e
                                    }, f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var i, a = !0, s = !1;
                        return {
                            s: function () {
                                n = e[Symbol.iterator]()
                            }, n: function () {
                                var e = n.next();
                                return a = e.done, e
                            }, e: function (e) {
                                s = !0, i = e
                            }, f: function () {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (s) throw i
                                }
                            }
                        }
                    }(t.thumbnails);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value, c = s.node.getBoundingClientRect();
                            c.left + c.width <= i.left || c.left >= i.left + i.width ? s.node.tabIndex = -1 : s.node.tabIndex = 0
                        }
                    } catch (e) {
                        a.e(e)
                    } finally {
                        a.f()
                    }
                }));
                var n = t.props, r = n.node, s = n.thumbnails, c = r.clientWidth;
                return t.state = {
                    regionWidth: 0,
                    maxX: 0,
                    minX: 0,
                    index: -1,
                    isImagesLoad: !1,
                    isInteracting: !1,
                    isDragging: !1,
                    isClickDisabled: !1
                }, t.node = r, t.target = {x: .5 * c}, t.drag = {
                    start: {x: 0},
                    active: {x: 0},
                    moved: {x: 0}
                }, t.pos = {x: .5 * c}, t.velocity = {
                    then: Date.now(),
                    x: 0
                }, t.thumbnails = t.getThumbnails(s), t.len = t.thumbnails.length, t.frame = null, t.clickDisabledTimeout = null, t.len ? (t.onResize = me(t.onResize, 200), t.onResize(), t.bindListeners(), t) : Dt(t)
            }

            return t = a, (n = [{
                key: "bindListeners", value: function () {
                    this.node.addEventListener(re.a.press, this.onPress), this.node.addEventListener("click", this.onSelectThumbnail), s.a.on(this.onResize)
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this;
                    this.node.removeEventListener(re.a.press, this.onPress), document.removeEventListener(re.a.move, this.onMove), re.a.release.forEach((function (t) {
                        document.removeEventListener(t, e.onRelease)
                    })), this.node.removeEventListener("click", this.onSelectThumbnail), s.a.off(this.onResize)
                }
            }, {
                key: "setThumbnail", value: function (e) {
                    this.setTargetThumbnail(e, !0), this.update()
                }
            }, {
                key: "setTargetThumbnail", value: function (e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = this.thumbnails[e], o = 0; o < this.len; o += 1) {
                        var i = this.thumbnails[o], a = o === e;
                        i.node.dataset.active = a, i.image.alt = a ? i.activeAltText : i.inactiveAltText
                    }
                    this.setState({index: e}), t || this.props.onSetThumbnail(e, n), r && !this.state.isDragging && (this.target.x = -r.x - .5 * r.width + .5 * this.state.regionWidth)
                }
            }, {
                key: "refresh", value: function () {
                    this.len && this.onResize()
                }
            }, {
                key: "updateTargetItem", value: function () {
                    var e = this.pos.x - .5 * this.state.regionWidth, t = this.thumbnails.map((function (t) {
                        var n = t.x, r = t.width;
                        return Math.sqrt(Math.pow(-n - .5 * r - e, 2))
                    })), n = t.indexOf(Math.min.apply(Math, jt(t)));
                    n !== this.state.index && this.setTargetThumbnail(n, !1, !0)
                }
            }, {
                key: "destroy", value: function () {
                    this.unbindListeners(), clearTimeout(this.clickDisabledTimeout), cancelAnimationFrame(this.frame)
                }
            }]) && Ct(t.prototype, n), r && Ct(t, r), a
        }(l.a);

        function Nt(e) {
            return (Nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Wt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function qt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Wt(Object(n), !0).forEach((function (t) {
                    Xt(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ut(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Ht(e, t) {
            return (Ht = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Vt(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Qt(e);
                if (t) {
                    var o = Qt(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Gt(this, n)
            }
        }

        function Gt(e, t) {
            return !t || "object" !== Nt(t) && "function" != typeof t ? Yt(e) : t
        }

        function Yt(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Qt(e) {
            return (Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Xt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Bt(zt, "defaultProps", {
            node: document.createElement("div"),
            scroller: document.createElement("div"),
            thumbnails: [],
            dragThreshold: 10,
            loadImages: !0,
            onSetThumbnail: oe.a,
            onDragStart: oe.a,
            onDragEnd: oe.a
        });
        var Zt = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ht(e, t)
            }(a, e);
            var t, n, r, i = Vt(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), Xt(Yt(t = i.call(this)), "onSetSlide", (function (e) {
                    t.thumbnailScroller.setThumbnail(e), t.clickLinks.forEach((function (t) {
                        parseInt(t.getAttribute("data-target"), 10) === e + 1 ? t.classList.add("active") : t.classList.remove("active")
                    }))
                })), Xt(Yt(t), "onSetThumbnail", (function (e, n) {
                    return t.slideshow.setSlide(e, n)
                })), Xt(Yt(t), "onSectionTweak", (function (e) {
                    var n = e.galleryOptions, r = n.slideshowOptions, o = n.design,
                        i = qt(qt(qt({}, t.state), r), {}, {design: o});
                    return i.design === t.state.design && ((i.transition !== t.state.transition || i.controlsLocation !== t.state.controlsLocation || i.thumbnailsEnabled !== t.state.thumbnailsEnabled || i.autoplayEnabled !== t.state.autoplayEnabled || i.slideDurationMs !== t.state.slideDurationMs || i.galleryHeight !== t.state.galleryHeight || i.galleryWidth !== t.state.galleryWidth) && (t.setState(qt({}, i)), "none" === i.transition || "none" === t.state.transition ? (i.isInstant = !0, t.setState({isInstant: !0})) : (i.isInstant = !1, t.setState({isInstant: !1})), t.refreshSlideshowDOM(i), !0))
                })), Xt(Yt(t), "resizeSlideshowContainer", (function (e) {
                    var n = e.galleryHeight, r = e.galleryWidth, i = o.a.getValue("pagePadding"),
                        a = o.a.getValue("maxPageWidth");
                    t.node.style.height = "calc(".concat(n, "vh + (").concat(i, " * 2))"), t.node.style.maxWidth = "calc(".concat(a, " * (").concat(r / 100, "))")
                })), Xt(Yt(t), "destroy", (function () {
                    M.disconnect(t.sectionId, t.onSectionTweak), t.slideshow.destroy(), t.thumbnailScroller.destroy()
                })), t.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), t.isGalleryCaptionsBetaFlagOn = t.betaFeatureFlags.includes("gallery_captions_71");
                var n = t.props, r = n.listSelector, s = n.wrapperSelector, c = n.slideSelector, u = n.previousSelector,
                    l = n.nextSelector, d = n.thumbnailsContainerSelector, f = n.thumbnailsScrollerSelector,
                    p = n.thumbnailSelector, h = {};
                return e.dataset.props && (h = JSON.parse(e.dataset.props)), t.state = qt({
                    design: "slideshow",
                    transition: "fade",
                    controlsLocation: "side",
                    thumbnailsEnabled: !0,
                    autoplayEnabled: !1,
                    slideDurationMs: 5e3,
                    galleryHeight: 75,
                    galleryWidth: 80,
                    isInstant: !1
                }, h), t.node = e, t.clickLinks = t.node.querySelectorAll(".gallery-click-through-link"), t.sectionId = t.node.dataset.sectionId, t.thumbnailNodes = Array.from(t.node.querySelectorAll(p)), t.thumbnailScroller = new zt({
                    node: t.node.querySelector(d),
                    scroller: t.node.querySelector(f),
                    thumbnails: t.thumbnailNodes,
                    loadImages: !0,
                    onSetThumbnail: t.onSetThumbnail
                }), "none" === t.state.transition ? t.state.isInstant = !0 : t.state.isInstant = !1, t.node.dataset.galleryCaptionBetaFlag = t.isGalleryCaptionsBetaFlagOn, t.resizeSlideshowContainer(t.state), t.slideshow = new Pe({
                    node: t.node,
                    display: t.node.querySelector(r),
                    sizedWrapper: t.node.querySelector(s),
                    slides: Array.from(t.node.querySelectorAll(c)),
                    buttonPrevious: t.node.querySelector(u),
                    buttonNext: t.node.querySelector(l),
                    aspectRatio: N("standard"),
                    onSetSlide: t.onSetSlide,
                    autoplayEnabled: t.state.autoplayEnabled,
                    slideDurationMs: t.state.slideDurationMs,
                    galleryHeight: t.state.galleryHeight,
                    galleryWidth: t.state.galleryWidth,
                    isInstant: t.state.isInstant,
                    thumbnailsEnabled: t.state.thumbnailsEnabled,
                    imageLoadMode: {mode: "content-fit"},
                    imageWrapperSelector: ".gallery-slideshow-item-img"
                }), M.watch(t.sectionId, t.onSectionTweak), o.a.watch(["pagePadding", "maxPageWidth"], (function () {
                    return t.refreshSlideshowDOM(t.state)
                })), t
            }

            return t = a, (n = [{
                key: "refreshSlideshowDOM", value: function (e) {
                    this.node.dataset.transition = e.transition, this.node.dataset.controlsLocation = e.controlsLocation, this.node.dataset.thumbnails = e.thumbnailsEnabled, this.resizeSlideshowContainer(e), this.thumbnailScroller.refresh(e), this.slideshow.refresh(e)
                }
            }]) && Ut(t.prototype, n), r && Ut(t, r), a
        }(l.a);
        Xt(Zt, "defaultProps", {
            listSelector: ".gallery-slideshow-list",
            wrapperSelector: ".gallery-slideshow-wrapper",
            slideSelector: ".gallery-slideshow-item",
            previousSelector: "[data-previous]",
            nextSelector: "[data-next]",
            thumbnailSelector: ".gallery-slideshow-thumbnails-thumb",
            thumbnailsContainerSelector: ".gallery-slideshow-thumbnails",
            thumbnailsScrollerSelector: ".gallery-slideshow-thumbnails-scroll"
        });

        function Jt(e) {
            return (Jt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Kt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function $t(e, t) {
            return ($t = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function en(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = nn(e);
                if (t) {
                    var o = nn(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return tn(this, n)
            }
        }

        function tn(e, t) {
            return !t || "object" !== Jt(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function nn(e) {
            return (nn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function rn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function on(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function an(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function sn(e, t, n) {
            return t && an(e.prototype, t), n && an(e, n), e
        }

        var cn = function () {
            function e(t) {
                var n = t.node, r = t.img;
                on(this, e), this.node = n, this.image = r, this.aspectRatio = Object(f.a)(this.image), this.node.style.position = "absolute"
            }

            return sn(e, [{
                key: "getWidth", value: function (e) {
                    return Math.round(this.aspectRatio * e)
                }
            }, {
                key: "setPosition", value: function (e, t, n) {
                    var r = this.aspectRatio * n;
                    return this.node.style.transform = "matrix(1, 0, 0, 1, ".concat(e, ", ").concat(t, ")"), this.node.style.width = "".concat(Math.round(r), "px"), this.image.style.height = "".concat(n, "px"), {
                        width: r,
                        height: this.node.clientHeight
                    }
                }
            }]), e
        }(), un = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && $t(e, t)
            }(n, e);
            var t = en(n);

            function n(e) {
                var r;
                on(this, n);
                var o = (r = t.call(this, e)).props, i = o.container, a = o.nodes, s = o.gutter, c = o.rowTargetHeight,
                    u = o.isReadyClass;
                return r.state = {
                    gutter: s,
                    rowTargetHeight: c
                }, r.nodes = r.getNodes(a), r.len = r.nodes.length, r.layout(), setTimeout((function () {
                    i.classList.add(u)
                }), 0), r
            }

            return sn(n, [{
                key: "getNodes", value: function (e) {
                    var t = this.props.imageSelector;
                    return e.map((function (e) {
                        var n = e.querySelectorAll(t)[0];
                        return new cn({node: e, img: n})
                    }))
                }
            }, {
                key: "positionRow", value: function (e, t, n) {
                    for (var r = this.state.gutter, o = 0, i = 0, a = 0, s = e.length; a < s; a += 1) {
                        var c = e[a].setPosition(o, t, n);
                        o += c.width + r, i = Math.max(i, c.height)
                    }
                    return i
                }
            }, {
                key: "setStyles", value: function () {
                    var e, t, n = this.props.container, r = this.state, o = r.gutter, i = r.rowTargetHeight,
                        a = n.clientWidth, s = a + o + .25 * i, c = [{items: [], rowWidth: 0}], u = 0;
                    for (e = 0; e < this.len; e += 1) {
                        var l = c[u], d = this.nodes[e], f = d.getWidth(i);
                        l.rowWidth + f > s && (c.push({
                            items: [],
                            rowWidth: 0
                        }), l = c[u += 1]), l.items.push(d), l.rowWidth += f
                    }
                    var p = 0;
                    if (a > 500 && c.length > 1 && 1 === c[c.length - 1].items.length && c[c.length - 2].items.length > 1) {
                        var h = c[c.length - 1], m = c[c.length - 2];
                        m.items.push(h.items[0]), m.rowWidth += h.items[0].getWidth(i), c.pop()
                    }
                    for (e = 0, t = c.length; e < t; e += 1) {
                        var y = c[e], g = Math.round((a - o * (y.items.length - 1)) / y.rowWidth * i);
                        p += this.positionRow(y.items, p, g) + o
                    }
                    n.style.height = "".concat(p - o, "px")
                }
            }, {
                key: "layout", value: function (e) {
                    e && this.setState(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? Kt(Object(n), !0).forEach((function (t) {
                                rn(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e)), this.setStyles()
                }
            }, {
                key: "destroy", value: function () {
                }
            }]), n
        }(l.a);

        function ln(e) {
            return (ln = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function dn(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function fn(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? dn(Object(n), !0).forEach((function (t) {
                    bn(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : dn(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function pn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function hn(e, t) {
            return (hn = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function mn(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = vn(e);
                if (t) {
                    var o = vn(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return yn(this, n)
            }
        }

        function yn(e, t) {
            return !t || "object" !== ln(t) && "function" != typeof t ? gn(e) : t
        }

        function gn(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function vn(e) {
            return (vn = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function bn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        rn(un, "defaultProps", {
            container: document.createElement("div"),
            nodes: [],
            imageSelector: "img",
            gutter: 0,
            rowTargetHeight: 300,
            isReadyClass: "masonry-ready"
        });
        var wn = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && hn(e, t)
            }(a, e);
            var t, n, r, o = mn(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), bn(gn(t = o.call(this)), "loadImage", (function (e) {
                    var n = t.props.imageSelector, r = e.querySelector(n);
                    r.onload = function () {
                        e.dataset.loaded = !0
                    }, i.a.loadLazy(r, {load: !0, mode: "cover", useAdvancedPositioning: !0})
                })), bn(gn(t), "onLightboxOpen", (function (e) {
                    t.state.isHistoryEnabled && (e.preventDefault(), history.pushState({}, "", e.currentTarget.href))
                })), bn(gn(t), "onResize", (function () {
                    return t.packer.layout({gutter: Object(f.e)(t.state.gutter)})
                })), bn(gn(t), "onItemShow", (function (e) {
                    var t = e.node;
                    t.dataset.show || (t.dataset.show = !0)
                })), bn(gn(t), "onSectionTweak", (function (e) {
                    var n = e.galleryOptions, r = n.stripOptions, o = n.design,
                        i = fn(fn(fn({}, t.state), r), {}, {design: o});
                    if (i.design !== t.state.design) return !1;
                    if (i.gutter !== t.state.gutter || i.width !== t.state.width || i.rowHeight !== t.state.rowHeight) {
                        t.setState(fn({}, i));
                        var a = {gutter: Object(f.e)(i.gutter), rowTargetHeight: i.rowHeight};
                        return t.node.dataset.tweaking = !0, t.node.dataset.width = i.width, t.node.dataset.lightbox = i.lightboxEnabled, clearTimeout(t.tweakTimeout), t.tweakTimeout = setTimeout((function () {
                            t.node.dataset.tweaking = !1
                        }), 100), t.packer.layout(a), !0
                    }
                    return !1
                })), bn(gn(t), "destroy", (function () {
                    clearTimeout(t.tweakTimeout), t.unbindListeners(), t.stagger.destroy(), t.packer.destroy()
                })), t.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), t.isGalleryCaptionsBetaFlagOn = t.betaFeatureFlags.includes("gallery_captions_71");
                var n = t.props, r = n.listSelector, s = n.itemSelector, u = n.lightboxLinkSelector,
                    l = I(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null), d = {};
                return e.dataset.props && (d = JSON.parse(e.dataset.props)), t.history = V(), t.node = e, t.sectionId = t.node.dataset.sectionId, t.state = fn({
                    design: "strips",
                    collectionFullUrl: l,
                    isHistoryEnabled: l && t.history,
                    gutter: Object(f.e)(20),
                    rowHeight: 300,
                    lightboxEnabled: !1,
                    width: "full"
                }, d), t.ref = {
                    list: t.node.querySelector(r),
                    items: Array.from(t.node.querySelectorAll(s)),
                    lightboxLinks: Array.from(t.node.querySelectorAll(u))
                }, t.node.dataset.galleryCaptionBetaFlag = t.isGalleryCaptionsBetaFlagOn, t.onResize = me(t.onResize, c.e), t.stagger = new Ze({
                    nodes: t.ref.items,
                    onEnter: t.onItemShow
                }), t.packer = new un({
                    container: t.ref.list,
                    nodes: t.ref.items,
                    isReadyClass: "gallery-strips-list--ready",
                    gutter: t.state.gutter,
                    rowTargetHeight: t.state.rowHeight
                }), t.node.dataset.lightbox = t.state.lightboxEnabled, t.tweakTimeout = null, t.loadImages(t.ref.items), t.bindListeners(), t
            }

            return t = a, (n = [{
                key: "loadImages", value: function (e) {
                    e.forEach(this.loadImage)
                }
            }, {
                key: "bindListeners", value: function () {
                    var e = this;
                    this.ref.lightboxLinks.forEach((function (t) {
                        t.addEventListener("click", e.onLightboxOpen)
                    })), M.watch(this.sectionId, this.onSectionTweak), s.a.on(this.onResize), this.stagger.start(), this.onResize()
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this;
                    this.ref.lightboxLinks.forEach((function (t) {
                        t.removeEventListener("click", e.onLightboxOpen)
                    })), M.disconnect(this.sectionId, this.onSectionTweak), s.a.off(this.onResize)
                }
            }]) && pn(t.prototype, n), r && pn(t, r), a
        }(l.a);
        bn(wn, "defaultProps", {
            listSelector: ".gallery-strips-wrapper",
            itemSelector: ".gallery-strips-item",
            lightboxLinkSelector: ".gallery-strips-lightbox-link",
            imageSelector: "img",
            loadedItemClass: ""
        });
        n(65), n(142), n(61), n(103), n(85), n(114), n(115);

        function Sn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var An, On, xn, kn = function e(t) {
            var n = this;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Sn(this, "prepare", (function () {
                n.node.classList.add("animation-segment-parent-hidden")
            })), Sn(this, "bind", (function () {
                if (!n.viewportWatcher) return console.warn("No viewport watcher available for", n.node), void n.node.classList.remove("animation-segment-parent-hidden");
                n.viewportWatcher.addNodes({
                    nodes: [n.node],
                    range: n.viewportRange,
                    callbacks: {onEnter: n.enteredViewport}
                })
            })), Sn(this, "unbind", (function () {
                n.viewportWatcher.removeNodes([n.node])
            })), Sn(this, "enteredViewport", (function () {
                n.hasRevealed || (n.hasRevealed = !0, n.install(), n.node.offsetTop, n.play())
            })), Sn(this, "install", (function () {
                n.originalHTML = n.node.innerHTML, n.node.innerHTML = n.node.innerHTML.replace("&nbsp;", " ").split(" ").map((function (e, t) {
                    return '<div\n        class="animation-segment-wrapper animation-segmented-flex-primed"><div\n          class="animation-segment-interior"\n          style="\n            transition-duration: '.concat(n.duration, ";\n            transition-timing-function: ").concat(n.easingFunction, ";\n            transition-delay: ").concat(20 * t, 'ms;\n          ">').concat(e, "</div></div>")
                })).join(" "), n.node.classList.remove("animation-segment-parent-hidden")
            })), Sn(this, "onSegmentTransitionEnd", (function (e) {
                "transform" === e.propertyName && (e.target.removeEventListener("transitionend", n.onSegmentTransitionEnd), e.target.removeEventListener("transitioncancel", n.onSegmentTransitionEnd), n.completedTransitionCount++, n.completedTransitionCount >= n.expectedTransitions && n.uninstall())
            })), Sn(this, "play", (function () {
                n.expectedTransitions = n.node.children.length, n.completedTransitionCount = 0, n.node.children.forEach((function (e) {
                    e.addEventListener("transitionend", n.onSegmentTransitionEnd), e.addEventListener("transitioncancel", n.onSegmentTransitionEnd), e.classList.add("animation-segmented-flex-fired")
                }))
            })), Sn(this, "uninstall", (function () {
                n.unbind(), n.hasRevealed && (n.node.innerHTML = n.originalHTML, n.hasRevealed = !1)
            })), this.node = t.node, this.hasRevealed = !1, this.viewportWatcher = t.viewportWatcher, this.viewportRange = t.viewportRange || [100, 0], this.easingFunction = t.easingFunction, this.duration = t.duration
        };

        function Pn(e) {
            return function (e) {
                if (Array.isArray(e)) return Tn(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || En(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function En(e, t) {
            if (e) {
                if ("string" == typeof e) return Tn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Tn(e, t) : void 0
            }
        }

        function Tn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function jn(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Sn(kn, "isSegmentable", (function (e) {
            return 0 === e.children.length && !!e.innerText.trim()
        }));
        var In, Ln, Cn, Rn, _n, Dn, Mn, Fn, Bn = new (n(80)), zn = [100, 0], Nn = "fade", Wn = "scale", qn = "slide",
            Un = "clip", Hn = "flex", Vn = "none",
            Gn = (jn(An = {}, Nn, "preFade"), jn(An, Wn, "preScale"), jn(An, qn, "preSlide"), jn(An, Un, "preClip"), jn(An, Hn, "preFlex"), An),
            Yn = (jn(On = {}, Nn, "fadeIn"), jn(On, Wn, "scaleIn"), jn(On, qn, "slideIn"), jn(On, Un, "clipIn"), jn(On, Hn, "flexIn"), On),
            Qn = '[data-animation-role="image"]:not([data-animation-override])', Xn = '[data-animation-role="button"]',
            Zn = '[data-animation-role="header-element"]', Jn = '[data-animation-role="content"]',
            Kn = '[data-animation-role="section"]', $n = '[data-animation-role="quote"]:not([data-animation-override])',
            er = '[data-animation-role="video"]', tr = ".image-button-wrapper", nr = "footer .sqs-block-content",
            rr = ".grid-item", or = ".form-wrapper", ir = ".menu-wrapper", ar = ".acuity-block-wrapper",
            sr = ".sqs-block-soundcloud iframe", cr = ".sqs-video-wrapper",
            ur = ".sqs-block-calendar .sqs-block-content", lr = ".chart-block-container", dr = ".tweet-list .tweet",
            fr = (jn(xn = {}, Nn, ["h1:not([data-animation-override])", "h2:not([data-animation-override])", "h3:not([data-animation-override])", "h4:not([data-animation-override])", "h5:not([data-animation-override])", "p:not([data-animation-override])", nr, Qn, Xn, Zn, Jn, '[data-animation-role="date"]', Kn, $n, er]), jn(xn, Wn, ["h1:not([data-animation-override])", "h2:not([data-animation-override])", "h3:not([data-animation-override])", nr, Qn, $n, er, Kn, Zn]), jn(xn, qn, ["h1:not([data-animation-override])", "h2:not([data-animation-override])", "h3:not([data-animation-override])", nr, Qn, $n, er, Kn, Zn, Xn]), jn(xn, Un, [nr, Qn, er]), jn(xn, Hn, ["h1:not([data-animation-override])", "h2:not([data-animation-override])", "h3:not([data-animation-override])", "h4:not([data-animation-override])", "p:not([data-animation-override])", rr, or, ir, ar, sr, cr, ur, lr, dr, Qn, Zn, Jn, Xn, tr]), xn),
            pr = ["h1", "h2", "h3"], hr = [Zn, rr, dr], mr = function (e) {
                return Fn.some((function (t) {
                    return e.matches(t)
                }))
            }, yr = function (e, t) {
                mr(e.node) ? e.node.classList.add(Yn[Nn]) : e.node.classList.add(Yn[Mn])
            }, gr = {}, vr = {}, br = function (e, t) {
                return new Promise((function (n, r) {
                    var o = window.requestAnimationFrame((function () {
                        if (delete gr[o], 0 === e) n(t); else {
                            var r = window.setTimeout((function () {
                                delete vr[r], n(t)
                            }), e);
                            vr[r] = r
                        }
                    }));
                    gr[o] = o
                }))
            };
        window.addEventListener("beforeunload", (function () {
            Object.keys(gr).forEach((function (e) {
                return window.cancelAnimationFrame(e)
            })), Object.keys(vr).forEach((function (e) {
                return window.clearTimeout(e)
            }))
        }));
        var wr = function () {
            if (0 === In.length) return Promise.resolve();
            for (var e = 0; e < In.length; e++) {
                var t, n = In[e];
                n.style.transitionTimingFunction = "", n.style.transitionDuration = "", n.style.transitionDelay = "", (t = n.classList).remove.apply(t, Pn(Object.values(Yn)).concat(Pn(Object.values(Gn))))
            }
            return Bn.removeNodes(In), In = [], Ln.forEach((function (e) {
                e.uninstall()
            })), Ln = [], Fn = [], br(0)
        }, Sr = function () {
            var e = fr[Mn];
            if (Mn !== Nn) {
                var t = e.map((function (e) {
                    return e.trim()
                }));
                Fn = fr[Nn].filter((function (e) {
                    return "string" == typeof e && !t.includes(e.trim())
                }))
            }
            var n = document.body.querySelectorAll([].concat(e, Fn).join(",")), r = Array.from(n).filter((function (e) {
                return !function (e) {
                    var t = e.closest(".image-block-outer-wrapper");
                    return t && t.querySelector("[data-animation-override]")
                }(e)
            })), o = [], i = [], a = pr.join(",");
            return r.forEach((function (e) {
                if (Mn === Hn && e.matches(a) && kn.isSegmentable(e)) {
                    var t = new kn({node: e, viewportWatcher: Bn, viewportRange: zn, duration: _n, easingFunction: Cn});
                    t.prepare(), i.push(t)
                } else o.push(e)
            })), !o.length && !i.length || Mn === Vn ? Promise.reject() : (In = o, Ln = i, Promise.resolve({
                directTargets: o,
                segmentables: i
            }))
        }, Ar = function (e, t) {
            return t.directTargets.forEach((function (e) {
                var t = mr(e) ? Gn[Nn] : Gn[Mn];
                e.classList.add(t)
            })), br(e ? 350 : 0, t)
        }, Or = function (e) {
            var t, n = (t = e.directTargets.length, Number(Dn.substring(0, Dn.length - 1)) / t), r = hr.join(", ");
            return e.directTargets.forEach((function (e, t) {
                Mn === Hn ? (e.style.transitionTimingFunction = Rn, e.style.transitionDuration = _n, r && e.matches(r) && (e.style.transitionDelay = t * n + "s")) : (e.style.transitionTimingFunction = Cn, e.style.transitionDuration = _n, e.style.transitionDelay = t * n + "s", Mn === Un ? e.style.animationDuration = _n : e.style.removeProperty("animation-duration"))
            })), br(0, e)
        }, xr = function (e) {
            Bn.addNodes({
                nodes: Pn(e.directTargets),
                range: zn,
                callbacks: {onEnter: yr}
            }), e.segmentables.forEach((function (e) {
                e.bind()
            }))
        }, kr = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.animationsPanelOpen,
                n = void 0 !== t && t;
            wr().then(Sr).then((function (e) {
                return Ar(n, e)
            })).then(Or).then(xr).catch((function () {
            }))
        }, Pr = function (e) {
            Mn = e
        }, Er = function (e) {
            Cn = e
        }, Tr = {
            "tweak-global-animations-animation-type": {
                exec: function (e) {
                    re.d && Mn !== Vn ? Pr(Nn) : Pr(e)
                }
            }, "tweak-global-animations-complexity-level": {
                exec: function (e) {
                    return function () {
                        console.warn("Complexity Level unimplemented")
                    }
                }
            }, "tweak-global-animations-animation-curve": {
                exec: function (e) {
                    Er("custom-cubic-bezier" !== e ? e : "cubic-bezier(0.19, 1, 0.22, 1)")
                }
            }, "tweak-global-animations-animation-duration": {
                exec: function (e) {
                    _n = e
                }
            }, "tweak-global-animations-animation-delay": {
                exec: function (e) {
                    Dn = e
                }
            }
        }, jr = Object.keys(Tr), Ir = me((function () {
            kr({animationsPanelOpen: !0})
        }), 10);
        o.a.watch(jr, (function (e) {
            Tr[e.name].exec(e.value), Ir()
        })), document.addEventListener("DOMContentLoaded", (function () {
            if ("true" === o.a.getValue("tweak-global-animations-enabled")) {
                var e, t = function (e, t) {
                    var n;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = En(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0, o = function () {
                            };
                            return {
                                s: o, n: function () {
                                    return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                                }, e: function (e) {
                                    throw e
                                }, f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0, s = !1;
                    return {
                        s: function () {
                            n = e[Symbol.iterator]()
                        }, n: function () {
                            var e = n.next();
                            return a = e.done, e
                        }, e: function (e) {
                            s = !0, i = e
                        }, f: function () {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    }
                }(jr);
                try {
                    for (t.s(); !(e = t.n()).done;) {
                        var n = e.value, r = o.a.getValue(n);
                        void 0 !== r ? Tr[n].exec(r) : console.log("Tweak value is undefined!", r)
                    }
                } catch (e) {
                    t.e(e)
                } finally {
                    t.f()
                }
                kr()
            }
        })), Mn = Nn, In = [], Ln = [], Fn = [], Cn = "ease", Rn = "cubic-bezier(0.19, 1, 0.22, 1)", _n = "0.6s", Dn = "0.1s";
        var Lr = function (e) {
            var t = function () {
                i.a.loadAllLazy({load: !0, mode: "cover", useAdvancedPositioning: !0}, e)
            };
            return o.a.watch(["gridGutter", "gridColumns", "tweak-portfolio-grid-image-aspect-ratio"], t), t(), s.a.on(t, c.e), {
                destroy: function () {
                    s.a.off(t)
                }
            }
        };

        function Cr(e) {
            return (Cr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Rr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _r(e, t) {
            return (_r = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Dr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Br(e);
                if (t) {
                    var o = Br(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Mr(this, n)
            }
        }

        function Mr(e, t) {
            return !t || "object" !== Cr(t) && "function" != typeof t ? Fr(e) : t
        }

        function Fr(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Br(e) {
            return (Br = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function zr(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Nr = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _r(e, t)
            }(u, e);
            var t, n, r, a = Dr(u);

            function u(e) {
                var t;
                if (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, u), zr(Fr(t = a.call(this)), "init", (function () {
                    t.zoomOut(), t.unbindListeners(), t.hasImageZoom() && (t.zoomedNode = null, t.isZoomed = !1, t.nodeRect = null, t.addImageZoom(), t.hasHoverToZoom() ? t.addListenersForHover() : t.hasClickToZoom() && t.addListenersForClick(), t.addCommonEventListeners())
                })), zr(Fr(t), "addListenersForHover", (function () {
                    t.node.addEventListener("mouseenter", t.zoomIn)
                })), zr(Fr(t), "addListenersForClick", (function () {
                    t.node.addEventListener("click", t.onClick)
                })), zr(Fr(t), "addImageZoom", (function () {
                    t.hasImageZoom() && (t.zoomedNode = t.node.querySelector(".product-image-zoom-duplicate"), t.zoomedNode.style.transform = "scale(" + t.getZoom() + ")", i.a.loadLazy(t.zoomedNode.querySelector("img"), {
                        load: !0,
                        mode: "fill",
                        useAdvancedPositioning: !0
                    }))
                })), zr(Fr(t), "onClick", (function (e) {
                    t.isZoomed ? t.zoomOut() : t.zoomIn(e)
                })), zr(Fr(t), "zoomIn", (function (e) {
                    t.node.parentNode.classList.add("is-zoomed"), t.isZoomed = !0, t.trackMovement(e)
                })), zr(Fr(t), "zoomOut", (function () {
                    t.node.parentNode.classList.remove("is-zoomed"), t.isZoomed = !1, t.nodeRect = null
                })), zr(Fr(t), "onScroll", (function () {
                    t.isZoomed && t.setNodeRect()
                })), zr(Fr(t), "trackMovement", (function (e) {
                    if (t.isZoomed && t.zoomedNode) {
                        t.nodeRect || t.setNodeRect();
                        var n = Math.max((e.pageX - t.nodeRect.x) / t.node.clientWidth * 100, 0),
                            r = Math.max((e.pageY - t.nodeRect.y - pageYOffset) / t.node.clientHeight * 100, 0);
                        t.zoomedNode.style.transformOrigin = "".concat(n, "% ").concat(r, "%")
                    }
                })), zr(Fr(t), "destroy", (function () {
                    t.unbindListeners()
                })), t.node = e, re.e) return Mr(t);
                return o.a.watch(["tweak-product-basic-item-hover-action", "tweak-product-basic-item-click-action", "tweak-product-basic-item-gallery-design"], t.init), o.a.watch("tweak-product-basic-item-image-zoom-factor", t.addImageZoom), t.init(), s.a.on(t.addImageZoom, c.e), t
            }

            return t = u, (n = [{
                key: "hasImageZoom", value: function () {
                    return this.hasClickToZoom() || this.hasHoverToZoom()
                }
            }, {
                key: "hasHoverToZoom", value: function () {
                    return "Zoom" === o.a.getValue("tweak-product-basic-item-hover-action") && "Carousel" !== o.a.getValue("tweak-product-basic-item-gallery-design")
                }
            }, {
                key: "hasClickToZoom", value: function () {
                    return "Zoom" === o.a.getValue("tweak-product-basic-item-click-action")
                }
            }, {
                key: "addCommonEventListeners", value: function () {
                    this.node.addEventListener("mouseleave", this.zoomOut), document.addEventListener("scroll", this.onScroll), this.node.addEventListener("mousemove", this.trackMovement)
                }
            }, {
                key: "unbindListeners", value: function () {
                    s.a.off(this.addImageZoom), this.node.removeEventListener("mouseenter", this.zoomIn), this.node.removeEventListener("mouseleave", this.zoomOut), this.node.removeEventListener("mousemove", this.trackMovement), this.node.removeEventListener("click", this.onClick), document.removeEventListener("scroll", this.onScroll)
                }
            }, {
                key: "getZoom", value: function () {
                    return o.a.getValue("tweak-product-basic-item-image-zoom-factor")
                }
            }, {
                key: "setNodeRect", value: function () {
                    this.nodeRect = this.node.getBoundingClientRect()
                }
            }]) && Rr(t.prototype, n), r && Rr(t, r), u
        }(l.a), Wr = function (e) {
            if (window.Static && window.Static.SQUARESPACE_CONTEXT && window.Static.SQUARESPACE_CONTEXT.betaFeatureFlags) return -1 !== window.Static.SQUARESPACE_CONTEXT.betaFeatureFlags.indexOf("global_animations")
        };

        function qr(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ur(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ur(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, s = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, i = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
            }
        }

        function Ur(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var Hr = function (e) {
            var t = document.querySelectorAll("main .page-section");
            if (0 !== t.length) {
                var n, r = t[t.length - 1], o = qr(c.j);
                try {
                    for (o.s(); !(n = o.n()).done;) {
                        var i = n.value;
                        r.classList.contains(i) && e.classList.add(i)
                    }
                } catch (e) {
                    o.e(e)
                } finally {
                    o.f()
                }
            }
        }, Vr = n(231);

        function Gr(e) {
            return (Gr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Yr(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Qr(e, t) {
            return (Qr = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Xr(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Kr(e);
                if (t) {
                    var o = Kr(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Zr(this, n)
            }
        }

        function Zr(e, t) {
            return !t || "object" !== Gr(t) && "function" != typeof t ? Jr(e) : t
        }

        function Jr(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Kr(e) {
            return (Kr = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function $r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var eo = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Qr(e, t)
            }(i, e);
            var t, n, r, o = Xr(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), $r(Jr(t = o.call(this)), "onSetThumbnail", (function (e, n) {
                    return t.slideshow.setSlide(e, n)
                })), $r(Jr(t), "onLightboxOpen", (function () {
                    t.revertFocusContainment = Object(Vr.containFocus)({container: t.node});
                    var e = t.props.bodyOverflowHiddenClass;
                    document.documentElement.classList.add(e), document.body.classList.add(e)
                })), $r(Jr(t), "onLightboxClose", (function () {
                    var e = t.props.bodyOverflowHiddenClass;
                    document.documentElement.classList.remove(e), document.body.classList.remove(e), t.revertFocusContainment && t.revertFocusContainment()
                }));
                var n = t.props, r = n.listSelector, a = n.slideSelector, s = n.previousSelector, c = n.nextSelector,
                    u = n.closeSelector;
                return t.node = e, t.closeButton = t.node.querySelector(u), t.slideshow = new Pe({
                    isLightbox: !0,
                    node: t.node,
                    display: t.node.querySelector(r),
                    slides: Array.from(t.node.querySelectorAll(a)),
                    buttonPrevious: t.node.querySelector(s),
                    buttonNext: t.node.querySelector(c),
                    buttonLightboxClose: t.closeButton,
                    slideRegionSelector: ".gallery-lightbox-item-wrapper",
                    imageWrapperSelector: ".gallery-lightbox-item-img",
                    onLightboxOpen: t.onLightboxOpen,
                    onLightboxClose: t.onLightboxClose,
                    imageLoadMode: {mode: "contain", useAdvancedPositioning: !0, forceImageUpdate: !0}
                }), document.body.appendChild(t.node), t
            }

            return t = i, (n = [{
                key: "destroy", value: function () {
                    this.slideshow.destroy()
                }
            }]) && Yr(t.prototype, n), r && Yr(t, r), i
        }(l.a);
        $r(eo, "defaultProps", {
            listSelector: ".gallery-lightbox-list",
            slideSelector: ".gallery-lightbox-item",
            previousSelector: "[data-previous]",
            nextSelector: "[data-next]",
            closeSelector: "[data-close]",
            thumbnailSelector: ".gallery-lightbox-thumbnails-thumb",
            thumbnailsContainerSelector: ".gallery-lightbox-thumbnails",
            thumbnailsScrollerSelector: ".gallery-lightbox-thumbnails-scroll",
            bodyOverflowHiddenClass: "gallery-lightbox-body-hide-overflow"
        });
        var to = n(30), no = n(52);

        function ro(e) {
            return (ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function oo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function io(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? oo(Object(n), !0).forEach((function (t) {
                    po(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oo(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function ao(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function so(e, t) {
            return (so = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function co(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = fo(e);
                if (t) {
                    var o = fo(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return uo(this, n)
            }
        }

        function uo(e, t) {
            return !t || "object" !== ro(t) && "function" != typeof t ? lo(e) : t
        }

        function lo(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function fo(e) {
            return (fo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function po(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var ho = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && so(e, t)
            }(i, e);
            var t, n, r, o = co(i);

            function i(e, t) {
                var n;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), po(lo(n = o.call(this, t)), "destroy", (function () {
                    n.tween && n.tween.destroy()
                })), n.node = e, n.background = {
                    front: io({}, n.addCanvas("menu-index-background-front")),
                    back: io({}, n.addCanvas("menu-index-background-back")),
                    backOpacity: 0,
                    opacity: 0
                }, n.tween = null, n
            }

            return t = i, (n = [{
                key: "addCanvas", value: function (e) {
                    var t = document.createElement("canvas"), n = t.getContext("2d");
                    return t.width = 1, t.height = 1, e && t.classList.add(e), this.node.appendChild(t), {
                        canvas: t,
                        context: n
                    }
                }
            }, {
                key: "show", value: function (e, t) {
                    var n = this, r = this.props, o = r.duration, i = r.delayShow;
                    this.tween && this.tween.destroy(), this.background.opacity = 0, this.background.color = e, this.background.backOpacity = t, this.tween = new no.a({
                        from: 0,
                        to: 1,
                        duration: o,
                        delay: i,
                        onUpdate: function (e) {
                            n.background.opacity = e, n.update()
                        }
                    }), this.update()
                }
            }, {
                key: "hide", value: function () {
                    var e = this, t = this.props, n = t.duration;
                    t.delay, this.tween && this.tween.destroy(), this.tween = new no.a({
                        from: this.background.opacity,
                        to: 0,
                        duration: n,
                        onUpdate: function (t) {
                            e.background.opacity = t, e.update()
                        }
                    })
                }
            }, {
                key: "update", value: function (e) {
                    var t = this.background, n = t.front, r = t.back, o = t.backOpacity, i = t.opacity, a = t.color;
                    n.context.clearRect(0, 0, 1, 1), n.context.globalAlpha = i, n.context.fillStyle = a, n.context.fillRect(0, 0, 1, 1), r.context.clearRect(0, 0, 1, 1), r.context.globalAlpha = o, r.context.drawImage(n.canvas, 0, 0)
                }
            }]) && ao(t.prototype, n), r && ao(t, r), i
        }(l.a);
        po(ho, "defaultProps", {duration: .3, delayShow: .1});
        var mo = n(232), yo = n(62), go = n(39), vo = n(37);

        function bo(e) {
            return (bo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function wo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function So(e, t) {
            return (So = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ao(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = ko(e);
                if (t) {
                    var o = ko(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Oo(this, n)
            }
        }

        function Oo(e, t) {
            return !t || "object" !== bo(t) && "function" != typeof t ? xo(e) : t
        }

        function xo(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ko(e) {
            return (ko = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Po(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Eo = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && So(e, t)
            }(i, e);
            var t, n, r, o = Ao(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Po(xo(t = o.call(this, e)), "onResize", (function (e, n) {
                    var r = t.props, o = r.width, i = r.height;
                    t.dimensions.windowHeight = window.innerHeight, t.dimensions.regionWidth = e, t.dimensions.regionHeight = n;
                    var a = re.e ? Math.min(t.dimensions.regionWidth / o, t.dimensions.regionHeight / i) : Math.min(1, t.dimensions.regionWidth / o);
                    t.dimensions.width = o * a, t.dimensions.height = i * a, t.dimensions.bleed = Math.max(0, t.dimensions.height - t.dimensions.regionHeight), t.pos.x = .5 * t.dimensions.regionWidth - .5 * t.dimensions.width, t.pos.y = .5 * t.dimensions.regionHeight - .5 * t.dimensions.height, t.update()
                })), Po(xo(t), "show", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.isInitial,
                        r = void 0 !== n && n, o = e.isNext, i = void 0 === o || o;
                    if (!t.isShown) {
                        var a = t.props, s = a.pageNode, c = a.duration, u = a.delayShow, l = a.video;
                        t.isShown = !0, t.isActive = !0, t.node.dataset.active = !0, t.pos.pageProgress = 1, t.pos.hideProgress = 0, t.pos.axisProgress = r ? 0 : i ? 1 : -1, t.pageProgressTween && t.pageProgressTween.destroy(), t.tween && t.tween.destroy(), clearTimeout(t.pageNodeHideTimeout), r && (t.pos.pageProgress = 0, t.pageProgressTween = new no.a({
                            from: 0,
                            to: 1,
                            delay: u,
                            duration: c,
                            ease: yo.a,
                            onUpdate: function (e) {
                                t.pos.pageProgress = e
                            }
                        })), t.tween = new no.a({
                            from: t.pos.axisProgress,
                            to: 0,
                            duration: c,
                            delay: u,
                            ease: yo.a,
                            onUpdate: function (e) {
                                t.pos.axisProgress = e, t.update()
                            }
                        }), l ? (t.addVideo(), t.node.dataset.loaded = !0, t.node.dataset.video = !0) : t.loadImage(), t.bindActiveListeners(), t.update(), t.pageNodeHideTimeout = setTimeout((function () {
                            s.style.visibility = "hidden"
                        }), 100)
                    }
                })), Po(xo(t), "hide", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.isClose,
                        r = void 0 !== n && n, o = e.isCloseUp, i = void 0 !== o && o, a = e.isNext,
                        s = void 0 === a || a;
                    if (t.isShown) {
                        var c = t.props, u = c.pageNode, l = c.duration;
                        clearTimeout(t.pageNodeHideTimeout), u.style.visibility = "visible", t.pageProgressTween && t.pageProgressTween.destroy(), t.tween && t.tween.destroy(), t.tween = new no.a({
                            from: r ? 0 : t.pos.axisProgress,
                            to: r ? i ? 1 : -1 : s ? -1 : 1,
                            duration: l,
                            ease: yo.a,
                            onUpdate: function (e) {
                                r ? t.pos.hideProgress = e : t.pos.axisProgress = e, t.update()
                            },
                            onComplete: function () {
                                t.isActive = !1, t.ref.video && t.removeVideo(), t.node.dataset.active = !1
                            }
                        }), t.unbindActiveListeners(), t.pos.offset = t.pos.targetOffset = 0, t.isShown = !1
                    }
                })), Po(xo(t), "onMove", (function (e) {
                    var n = Object(re.f)(e).clientY;
                    t.pos.targetOffset = Object(go.a)(4 * -(n / t.dimensions.windowHeight - .5), -1, 1), t.updatePosition()
                })), Po(xo(t), "onVideoClick", (function (e) {
                    t.player && (t.player.play(), t.ref.video.removeEventListener("click", t.onVideoClick), t.ref.video.removeEventListener("mouseenter", t.onVideoOver), t.ref.video.removeEventListener("mouseleave", t.onVideoOut), t.onVideoOut(), e.preventDefault(), e.stopPropagation())
                })), Po(xo(t), "onVideoOver", (function () {
                    return t.props.onVideoOver()
                })), Po(xo(t), "onVideoOut", (function () {
                    return t.props.onVideoOut()
                })), Po(xo(t), "onVideoPlay", (function () {
                    t.node.dataset.playing = !0, t.node.dataset.buffering = !1
                })), Po(xo(t), "onVideoBuffer", (function () {
                    t.node.dataset.buffering = !0
                })), Po(xo(t), "update", (function () {
                    if (t.isActive) {
                        var e = Object(vo.b)(t.pageRect.width, t.dimensions.width, t.pos.pageProgress),
                            n = Object(vo.b)(t.pageRect.height, t.dimensions.height, t.pos.pageProgress),
                            r = Math.max(0, 1 - Math.abs(t.pos.axisProgress) - Math.abs(t.pos.hideProgress));
                        t.updatePosition(), t.node.style.width = e + "px", t.node.style.height = n + "px", t.node.style.opacity = r
                    }
                })), Po(xo(t), "tick", (function () {
                    t.pos.offset += .1 * (t.pos.targetOffset - t.pos.offset), t.updatePosition(), t.rAFID = requestAnimationFrame(t.tick)
                })), Po(xo(t), "destroy", (function () {
                    t.pageProgressTween && t.pageProgressTween.destroy(), t.tween && t.tween.destroy(), clearTimeout(t.pageNodeHideTimeout), t.unbindActiveListeners()
                }));
                var n = t.props, r = n.container, a = n.isInitial, s = n.pageNode, c = n.regionWidth,
                    u = n.regionHeight;
                t.pageRect = s.getBoundingClientRect();
                var l = t.render(), d = l.node, f = l.blur, p = l.clone, h = l.img, m = l.video;
                return t.node = d, t.ref = {
                    blur: f,
                    clone: p,
                    img: h,
                    video: m
                }, t.dimensions = {
                    windowHeight: window.innerHeight,
                    regionWidth: 0,
                    regionHeight: 0,
                    width: 0,
                    height: 0,
                    bleed: 0
                }, t.pos = {
                    x: 0,
                    y: 0,
                    targetOffset: 0,
                    offset: 0,
                    pageProgress: 1,
                    axisProgress: 0,
                    hideProgress: 0
                }, t.onResize(c, u), r.appendChild(t.node), t.isShown = !1, t.isActive = !1, t.pageProgressTween = null, t.tween = null, t.pageProgress = 1, t.isLoadStarted = !1, t.rAFID = null, a ? t : Oo(t)
            }

            return t = i, (n = [{
                key: "render", value: function () {
                    var e = this.props, t = e.src, n = e.video, r = e.isInitial, o = e.pageNode, i = e.focalPoint,
                        a = document.createElement("div");
                    a.className = "GunnarLightbox-item", a.style.setProperty("--focal-x", i.x), a.style.setProperty("--focal-y", i.y);
                    var s = '\n      <div class="GunnarLightbox-item-blur" style="background-image: url('.concat(t, '?format=50w);"></div>\n      <div class="GunnarLightbox-item-clone"></div>\n    ');
                    s += n ? '<div class="GunnarLightbox-item-video"></div><div class="GunnarLightbox-item-video-state"></div>' : '<img class="GunnarLightbox-item-img" />', a.innerHTML = s;
                    var c = a.querySelector(".GunnarLightbox-item-blur"),
                        u = a.querySelector(".GunnarLightbox-item-clone"),
                        l = a.querySelector(".GunnarLightbox-item-img"),
                        d = a.querySelector(".GunnarLightbox-item-video");
                    if (r) {
                        var f = o.querySelector("img");
                        if (f.dataset.loaded) {
                            var p = f.cloneNode();
                            p.className = "GunnarLightbox-item-clone-img", u.appendChild(p)
                        }
                    }
                    return {node: a, blur: c, clone: u, img: l, video: d}
                }
            }, {
                key: "bindActiveListeners", value: function () {
                    re.e || (window.addEventListener(re.a.move, this.onMove), this.rAFID = requestAnimationFrame(this.tick))
                }
            }, {
                key: "unbindActiveListeners", value: function () {
                    re.e || (window.removeEventListener(re.a.move, this.onMove), cancelAnimationFrame(this.rAFID))
                }
            }, {
                key: "loadImage", value: function () {
                    var e = this;
                    if (!this.isLoadStarted) {
                        var t = this.props.src, n = this.ref.img;
                        this.isLoadStarted = !0, n.onload = function () {
                            e.node.dataset.loaded = !0
                        }, n.src = "".concat(t, "?format=").concat(window.innerWidth < 1200 ? 1e3 : 2500, "w")
                    }
                }
            }, {
                key: "addVideo", value: function () {
                    var e = this.props, t = e.video, n = e.videoAutoplay, r = /vimeo.*\/(\d+)/i.exec(t)[1],
                        o = "https://player.vimeo.com/video/".concat(r);
                    console.log(o), this.node.dataset.playing = !1, this.node.dataset.buffering = !1, this.ref.video.innerHTML = '<iframe src="'.concat(o, "?controls=0&playsinline=1&loop=1").concat(re.e && n ? "&background=1" : "", '" allow="autoplay"></iframe>');
                    var i = this.ref.video.querySelector("iframe");
                    if (this.player = new mo.a(i, {
                        controls: !1,
                        playsinline: !0
                    }), this.player.on("bufferstart", this.onVideoBuffer), this.player.on("playing", this.onVideoPlay), !re.e || n) return this.node.dataset.buffering = !0, void this.player.play();
                    this.ref.video.addEventListener("click", this.onVideoClick), this.ref.video.addEventListener("mouseenter", this.onVideoOver), this.ref.video.addEventListener("mouseleave", this.onVideoOut)
                }
            }, {
                key: "removeVideo", value: function () {
                    this.player && (this.player.off("bufferstart", this.onVideoBuffer), this.player.off("playing", this.onVideoPlay)), this.ref.video.removeEventListener("click", this.onVideoClick), this.ref.video.innerHTML = "", this.ref.video.removeEventListener("mouseenter", this.onVideoOver), this.ref.video.removeEventListener("mouseleave", this.onVideoOut), this.onVideoOut()
                }
            }, {
                key: "updatePosition", value: function () {
                    var e = Object(vo.b)(this.pageRect.left, this.pos.x, this.pos.pageProgress) + this.pos.axisProgress * (.1 * this.dimensions.regionWidth),
                        t = Object(vo.b)(this.pageRect.top, this.pos.y, this.pos.pageProgress) + this.pos.hideProgress * (.25 * this.dimensions.regionHeight),
                        n = this.pos.offset * (.5 * this.dimensions.bleed) * this.pos.pageProgress;
                    this.node.style.transform = "translate3d(" + e + "px, " + (t + n) + "px, 0)"
                }
            }]) && wo(t.prototype, n), r && wo(t, r), i
        }(l.a);

        function To(e) {
            return (To = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function jo(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Io(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Io(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Io(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Lo(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Co(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Lo(Object(n), !0).forEach((function (t) {
                    zo(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lo(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ro(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function _o(e, t) {
            return (_o = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Do(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Bo(e);
                if (t) {
                    var o = Bo(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Mo(this, n)
            }
        }

        function Mo(e, t) {
            return !t || "object" !== To(t) && "function" != typeof t ? Fo(e) : t
        }

        function Fo(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Bo(e) {
            return (Bo = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function zo(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Po(Eo, "defaultProps", {
            video: null,
            src: "",
            focalPoint: {x: .5, y: .5},
            width: 800,
            height: 600,
            container: null,
            isInitial: !1,
            pageNode: null,
            regionWidth: 800,
            regionHeight: 600,
            duration: .3,
            delayShow: .1,
            onVideoOver: oe.a,
            onVideoOut: oe.a
        });
        var No = 39, Wo = 37, qo = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _o(e, t)
            }(i, e);
            var t, n, r, o = Do(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), zo(Fo(t = o.call(this)), "onResize", (function () {
                    var e = t.ref.imageContainer.clientWidth, n = t.ref.imageContainer.clientHeight;
                    t.innerWidth = window.innerWidth, t.innerHeight = window.innerHeight, t.items.forEach((function (t) {
                        t.onResize(e, n)
                    }))
                })), zo(Fo(t), "onKeyDown", (function (e) {
                    if (e.keyCode === No) return t.setIndexOffset(1), void e.preventDefault();
                    e.keyCode === Wo && (t.setIndexOffset(-1), e.preventDefault())
                })), zo(Fo(t), "onCursorMove", (function (e) {
                    var n = Object(re.f)(e), r = n.clientX, o = n.clientY;
                    t.cursor.x = r, t.cursor.y = o, clearTimeout(t.cursor.hideTimeout), t.cursor.isActive || (t.cursor.isActive = !0, t.node.dataset.cursorActive = !0), t.cursor.x < .35 * t.innerWidth ? "previous" !== t.cursor.mode && (t.cursor.mode = "previous", t.node.dataset.cursor = "previous") : t.cursor.x > .65 * t.innerWidth ? "next" !== t.cursor.mode && (t.cursor.mode = "next", t.node.dataset.cursor = "next") : "close" !== t.cursor.mode && (t.cursor.mode = "close", t.node.dataset.cursor = "close"), t.cursor.hideTimeout = setTimeout((function () {
                        t.cursor.isActive = !1, t.node.dataset.cursorActive = !1
                    }), 1e3)
                })), zo(Fo(t), "onDocumentClick", (function (e) {
                    if (!t.isKeyModified(e)) {
                        for (var n = e.target; n && n !== document.body && void 0 === n.dataset.lightbox;) n = n.parentElement;
                        if (n && n !== document.body && void 0 !== n.dataset.lightbox) {
                            e.preventDefault();
                            var r = JSON.parse(n.dataset.lightbox);
                            t.openLightbox(n, r)
                        }
                    }
                })), zo(Fo(t), "onLightboxClick", (function (e) {
                    var n = Object(re.f)(e).clientX, r = window.innerWidth;
                    n < .35 * r || n > .65 * r ? t.setIndexOffset(n < .5 * r ? -1 : 1) : t.closeLightbox()
                })), zo(Fo(t), "setIndexOffset", (function (e) {
                    var n = t.index + e, r = n > t.index, o = t.items.length, i = (n % o + o) % o || 0;
                    t.index = i, t.items.forEach((function (e, n) {
                        n !== t.index ? e.hide({isNext: r}) : e.show({isNext: r})
                    }))
                })), zo(Fo(t), "closeLightbox", (function (e) {
                    t.isShown && (t.isShown = !1, clearTimeout(t.hideTimeout), t.background.hide(), t.unbindActiveListeners(), to.a.trigger("lightbox:closed"), t.items.forEach((function (t) {
                        t.hide(Co(Co({}, e), {}, {isClose: !0}))
                    })), t.node.dataset.active = !1, t.hideTimeout = setTimeout((function () {
                        t.node.dataset.open = !1
                    }), 300))
                })), zo(Fo(t), "onVideoOver", (function () {
                    t.node.dataset.videoCursor = !0
                })), zo(Fo(t), "onVideoOut", (function () {
                    t.node.dataset.videoCursor = !1
                })), zo(Fo(t), "tick", (function () {
                    if (t.cursor.isActive) {
                        var e = "translate3d(" + t.cursor.x + "px, " + t.cursor.y + "px, 0)";
                        t.ref.cursorFront.style.transform = e, t.ref.cursorBack.style.transform = e
                    }
                    t.cursor.rAFID = requestAnimationFrame(t.tick)
                })), zo(Fo(t), "destroy", (function () {
                    t.unbindListeners(), t.unbindActiveListeners(), clearTimeout(t.hideTimeout), clearTimeout(t.cursor.hideTimeout)
                }));
                var n = t.props, r = n.cursorFrontSelector, a = n.cursorBackSelector, s = n.backgroundSelector,
                    c = n.imageContainerSelector;
                return t.node = e, re.isInIFrame || t.node.closest(".sqs-catalog") ? Mo(t) : (t.ref = {
                    cursorFront: t.node.querySelector(r),
                    cursorBack: t.node.querySelector(a),
                    background: t.node.querySelector(s),
                    imageContainer: t.node.querySelector(c)
                }, t.innerWidth = window.innerWidth, t.innerHeight = window.innerHeight, t.cursor = {
                    x: 0,
                    y: 0,
                    isActive: !1,
                    isPrevious: !1,
                    mode: "next",
                    hideTimeout: null,
                    rAFID: null
                }, t.items = [], t.isShown = !1, t.hideTimeout = null, t.index = 0, t.background = new ho(t.ref.background), t.swipe = null, t.bindListeners(), t)
            }

            return t = i, (n = [{
                key: "bindListeners", value: function () {
                    document.body.addEventListener("click", this.onDocumentClick), to.a.on("lightbox:close", this.closeLightbox), this.onResize()
                }
            }, {
                key: "unbindListeners", value: function () {
                    document.body.removeEventListener("click", this.onDocumentClick), to.a.off("lightbox:close", this.closeLightbox)
                }
            }, {
                key: "bindActiveListeners", value: function () {
                    var e = this;
                    this.innerWidth = window.innerWidth, this.innerHeight = window.innerHeight, s.a.on(this.onResize), document.addEventListener("keydown", this.onKeyDown), re.e ? this.swipe = new he({
                        axis: "x",
                        node: this.node,
                        onSwipeRight: function () {
                            e.setIndexOffset(-1)
                        },
                        onSwipeLeft: function () {
                            e.setIndexOffset(1)
                        },
                        onSwipeDown: function () {
                            e.closeLightbox({isCloseUp: !0})
                        },
                        onSwipeUp: function () {
                            e.closeLightbox()
                        }
                    }) : (this.node.addEventListener("click", this.onLightboxClick), document.body.addEventListener("mousemove", this.onCursorMove), this.startCursorTicker())
                }
            }, {
                key: "unbindActiveListeners", value: function () {
                    s.a.off(this.onResize), document.removeEventListener("keydown", this.onKeyDown), re.e ? this.swipe && (this.swipe.destroy(), this.swipe = null) : (this.node.removeEventListener("click", this.onLightboxClick), document.body.removeEventListener("mousemove", this.onCursorMove), this.stopCursorTicker(), clearTimeout(this.cursor.hideTimeout), this.node.dataset.cursorActive = !1, this.node.dataset.cursor = "next", this.cursor.isActive = !1, this.cursor.mode = "next")
                }
            }, {
                key: "isKeyModified", value: function (e) {
                    return e.metaKey || e.ctrlKey || e.altKey || e.shiftKey
                }
            }, {
                key: "openLightbox", value: function (e, t) {
                    if (!this.isShown) {
                        this.isShown = !0;
                        var n = "#ededed", r = !0;
                        this.background.show(n, r ? 1 : 0), to.a.trigger("lightbox:opened"), this.index = 0, clearTimeout(this.hideTimeout), this.node.dataset.open = !0, this.node.dataset.active = !0, this.bindActiveListeners(), this.items = this.populate(e), this.items[this.index].show({isInitial: !0})
                    }
                }
            }, {
                key: "populate", value: function (e) {
                    var t = this, n = this.ref.imageContainer.clientWidth, r = this.ref.imageContainer.clientHeight;
                    return this.items.forEach((function (e) {
                        return e.destroy()
                    })), Array.from(document.body.querySelectorAll("[data-lightbox]")).map((function (o, i) {
                        var a = JSON.parse(o.dataset.lightbox), s = e === o,
                            c = jo(a.originalSize.split("x").map((function (e) {
                                return Number(e)
                            })), 2), u = c[0], l = c[1];
                        return e === o && (t.index = i), new Eo(Co(Co({}, a), {}, {
                            regionWidth: n,
                            regionHeight: r,
                            width: u,
                            height: l,
                            container: t.ref.imageContainer,
                            isInitial: s,
                            pageNode: e,
                            onVideoOver: t.onVideoOver,
                            onVideoOut: t.onVideoOut
                        }))
                    }))
                }
            }, {
                key: "startCursorTicker", value: function () {
                    this.cursor.rAFID = requestAnimationFrame(this.tick)
                }
            }, {
                key: "stopCursorTicker", value: function () {
                    cancelAnimationFrame(this.cursor.rAFID)
                }
            }]) && Ro(t.prototype, n), r && Ro(t, r), i
        }(l.a);
        zo(qo, "defaultProps", {
            cursorFrontSelector: ".GunnarLightbox-cursor--front",
            cursorBackSelector: ".GunnarLightbox-cursor--back",
            backgroundSelector: ".GunnarLightbox-background",
            imageContainerSelector: ".GunnarLightbox-display"
        });

        function Uo(e, t) {
            var n;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (n = function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ho(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ho(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var r = 0, o = function () {
                    };
                    return {
                        s: o, n: function () {
                            return r >= e.length ? {done: !0} : {done: !1, value: e[r++]}
                        }, e: function (e) {
                            throw e
                        }, f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var i, a = !0, s = !1;
            return {
                s: function () {
                    n = e[Symbol.iterator]()
                }, n: function () {
                    var e = n.next();
                    return a = e.done, e
                }, e: function (e) {
                    s = !0, i = e
                }, f: function () {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw i
                    }
                }
            }
        }

        function Ho(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Vo(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Go(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Yo = "section-match-padding-top", Qo = function () {
            function e(t) {
                var n = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), Go(this, "onSectionTweak", (function (e) {
                    var t = e.styles, r = Object.keys(t).filter((function (e) {
                        return n.currentStyles[e] !== t[e]
                    }));
                    if (0 === r.length) return !1;
                    r.includes("sectionTheme") && (t.sectionTheme ? n.checkNeighborsMagicPadding(t.sectionTheme) : n.checkNeighborsMagicPadding("default-global-theme"))
                })), Go(this, "destroy", (function () {
                    M.disconnect(n.sectionId, n.boundSectionTweak)
                })), this.betaFeatureFlags = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []), this.isSectionAdmin = this.betaFeatureFlags.includes("section_admin"), this.isSectionAdmin && (this.node = t, this.sectionId = this.node.getAttribute("data-section-id"), this.currentStyles = JSON.parse(this.node.getAttribute("data-current-styles")), this.prevSection = this.node.previousElementSibling, this.nextSection = this.node.nextElementSibling, this.isFirstSection = null === this.node.previousElementSibling, this.boundSectionTweak = this.onSectionTweak.bind(this), M.watch(this.sectionId, this.boundSectionTweak), this.viewportWatcher = new We.a, this.viewportWatcher.addNodes({
                    nodes: this.node,
                    range: [100, 0],
                    callbacks: {
                        onEnter: function () {
                            n.node.dataset.active = !0
                        }
                    }
                }), this.onFirstLoadSetMagicPadding())
            }

            var t, n, r;
            return t = e, (n = [{
                key: "toggleMagicPadding", value: function (e, t, n) {
                    e ? t.classList.add(n) : t.classList.remove(n)
                }
            }, {
                key: "doesSectionBackgroundMatch", value: function (e, t) {
                    return this.getSectionTheme(e) === t
                }
            }, {
                key: "onFirstLoadSetMagicPadding", value: function () {
                    if (!this.node.classList.contains("has-background")) {
                        var e = this.getSectionTheme(this.node);
                        this.isFirstSection || this.prevSection.classList.contains("has-background") || this.doesSectionBackgroundMatch(this.prevSection, e) && this.toggleMagicPadding(!0, this.node, Yo), this.nextSection && "section" === this.nextSection.nodeName.toLowerCase() && !this.nextSection.classList.contains("has-background") && this.doesSectionBackgroundMatch(this.nextSection, e) && this.toggleMagicPadding(!0, this.node, "section-match-padding-bottom")
                    }
                }
            }, {
                key: "checkNeighborsMagicPadding", value: function (e) {
                    this.isFirstSection || this.prevSection.classList.contains("has-background") || (this.doesSectionBackgroundMatch(this.prevSection, e) ? (this.toggleMagicPadding(!0, this.node, Yo), this.toggleMagicPadding(!0, this.prevSection, "section-match-padding-bottom")) : (this.toggleMagicPadding(!1, this.node, Yo), this.toggleMagicPadding(!1, this.prevSection, "section-match-padding-bottom"))), this.nextSection && "section" === this.nextSection.nodeName.toLowerCase() && !this.nextSection.classList.contains("has-background") && (this.doesSectionBackgroundMatch(this.nextSection, e) ? (this.toggleMagicPadding(!0, this.node, "section-match-padding-bottom"), this.toggleMagicPadding(!0, this.nextSection, Yo)) : (this.toggleMagicPadding(!1, this.node, "section-match-padding-bottom"), this.toggleMagicPadding(!1, this.nextSection, Yo)))
                }
            }, {
                key: "getSectionTheme", value: function (e) {
                    var t, n = e.classList, r = Uo(c.j);
                    try {
                        for (r.s(); !(t = r.n()).done;) {
                            var o = t.value;
                            if (n.contains(o)) return o
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return "default-global-theme"
                }
            }, {
                key: "getSectionHeightClass", value: function (e) {
                    var t, n = e.classList;
                    for (t in n) if ("string" == typeof n[t] && n[t].includes("section-height")) return n[t];
                    return "custom-section-theme"
                }
            }]) && Vo(t.prototype, n), r && Vo(t, r), e
        }(), Xo = n(40), Zo = n.n(Xo), Jo = Math.ceil, Ko = Math.floor, $o = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Ko : Jo)(e)
        }, ei = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        };

        function ti(e, t) {
            return e(t = {exports: {}}, t.exports), t.exports
        }

        var ni = ti((function (e) {
            var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
            "number" == typeof __g && (__g = t)
        })), ri = ti((function (e) {
            var t = e.exports = {version: "2.6.9"};
            "number" == typeof __e && (__e = t)
        })), oi = (ri.version, function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }), ii = function (e) {
            if (!oi(e)) throw TypeError(e + " is not an object!");
            return e
        }, ai = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }, si = !ai((function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })), ci = ni.document, ui = oi(ci) && oi(ci.createElement), li = function (e) {
            return ui ? ci.createElement(e) : {}
        }, di = !si && !ai((function () {
            return 7 != Object.defineProperty(li("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })), fi = Object.defineProperty, pi = {
            f: si ? Object.defineProperty : function (e, t, n) {
                if (ii(e), t = function (e, t) {
                    if (!oi(e)) return e;
                    var n, r;
                    if (t && "function" == typeof (n = e.toString) && !oi(r = n.call(e))) return r;
                    if ("function" == typeof (n = e.valueOf) && !oi(r = n.call(e))) return r;
                    if (!t && "function" == typeof (n = e.toString) && !oi(r = n.call(e))) return r;
                    throw TypeError("Can't convert object to primitive value")
                }(t, !0), ii(n), di) try {
                    return fi(e, t, n)
                } catch (e) {
                }
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        }, hi = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }, mi = si ? function (e, t, n) {
            return pi.f(e, t, hi(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }, yi = {}.hasOwnProperty, gi = function (e, t) {
            return yi.call(e, t)
        }, vi = 0, bi = Math.random(), wi = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++vi + bi).toString(36))
        }, Si = ti((function (e) {
            var t = ni["__core-js_shared__"] || (ni["__core-js_shared__"] = {});
            (e.exports = function (e, n) {
                return t[e] || (t[e] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: ri.version,
                mode: "global",
                copyright: "?? 2019 Denis Pushkarev (zloirock.ru)"
            })
        })), Ai = Si("native-function-to-string", Function.toString), Oi = ti((function (e) {
            var t = wi("src"), n = ("" + Ai).split("toString");
            ri.inspectSource = function (e) {
                return Ai.call(e)
            }, (e.exports = function (e, r, o, i) {
                var a = "function" == typeof o;
                a && (gi(o, "name") || mi(o, "name", r)), e[r] !== o && (a && (gi(o, t) || mi(o, t, e[r] ? "" + e[r] : n.join(String(r)))), e === ni ? e[r] = o : i ? e[r] ? e[r] = o : mi(e, r, o) : (delete e[r], mi(e, r, o)))
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && this[t] || Ai.call(this)
            }))
        })), xi = function (e, t, n) {
            if (function (e) {
                if ("function" != typeof e) throw TypeError(e + " is not a function!")
            }(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }, ki = function (e, t, n) {
            var r, o, i, a, s = e & ki.F, c = e & ki.G, u = e & ki.S, l = e & ki.P, d = e & ki.B,
                f = c ? ni : u ? ni[t] || (ni[t] = {}) : (ni[t] || {}).prototype, p = c ? ri : ri[t] || (ri[t] = {}),
                h = p.prototype || (p.prototype = {});
            for (r in c && (n = t), n) i = ((o = !s && f && void 0 !== f[r]) ? f : n)[r], a = d && o ? xi(i, ni) : l && "function" == typeof i ? xi(Function.call, i) : i, f && Oi(f, r, i, e & ki.U), p[r] != i && mi(p, r, a), l && h[r] != i && (h[r] = i)
        };
        ni.core = ri, ki.F = 1, ki.G = 2, ki.S = 4, ki.P = 8, ki.B = 16, ki.W = 32, ki.U = 64, ki.R = 128;
        var Pi, Ei = ki, Ti = {}, ji = {}.toString, Ii = function (e) {
                return ji.call(e).slice(8, -1)
            }, Li = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
                return "String" == Ii(e) ? e.split("") : Object(e)
            }, Ci = function (e) {
                return Li(ei(e))
            }, Ri = Math.min, _i = function (e) {
                return e > 0 ? Ri($o(e), 9007199254740991) : 0
            }, Di = Math.max, Mi = Math.min, Fi = Si("keys"), Bi = function (e) {
                return Fi[e] || (Fi[e] = wi(e))
            }, zi = (Pi = !1, function (e, t, n) {
                var r, o = Ci(e), i = _i(o.length), a = function (e, t) {
                    return (e = $o(e)) < 0 ? Di(e + t, 0) : Mi(e, t)
                }(n, i);
                if (Pi && t != t) {
                    for (; i > a;) if ((r = o[a++]) != r) return !0
                } else for (; i > a; a++) if ((Pi || a in o) && o[a] === t) return Pi || a || 0;
                return !Pi && -1
            }), Ni = Bi("IE_PROTO"),
            Wi = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
            qi = Object.keys || function (e) {
                return function (e, t) {
                    var n, r = Ci(e), o = 0, i = [];
                    for (n in r) n != Ni && gi(r, n) && i.push(n);
                    for (; t.length > o;) gi(r, n = t[o++]) && (~zi(i, n) || i.push(n));
                    return i
                }(e, Wi)
            }, Ui = si ? Object.defineProperties : function (e, t) {
                ii(e);
                for (var n, r = qi(t), o = r.length, i = 0; o > i;) pi.f(e, n = r[i++], t[n]);
                return e
            }, Hi = ni.document, Vi = Hi && Hi.documentElement, Gi = Bi("IE_PROTO"), Yi = function () {
            }, Qi = function () {
                var e, t = li("iframe"), n = Wi.length;
                for (t.style.display = "none", Vi.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), Qi = e.F; n--;) delete Qi.prototype[Wi[n]];
                return Qi()
            }, Xi = Object.create || function (e, t) {
                var n;
                return null !== e ? (Yi.prototype = ii(e), n = new Yi, Yi.prototype = null, n[Gi] = e) : n = Qi(), void 0 === t ? n : Ui(n, t)
            }, Zi = ti((function (e) {
                var t = Si("wks"), n = ni.Symbol, r = "function" == typeof n;
                (e.exports = function (e) {
                    return t[e] || (t[e] = r && n[e] || (r ? n : wi)("Symbol." + e))
                }).store = t
            })), Ji = pi.f, Ki = Zi("toStringTag"), $i = function (e, t, n) {
                e && !gi(e = n ? e : e.prototype, Ki) && Ji(e, Ki, {configurable: !0, value: t})
            }, ea = {};
        mi(ea, Zi("iterator"), (function () {
            return this
        }));
        var ta, na = function (e, t, n) {
            e.prototype = Xi(ea, {next: hi(1, n)}), $i(e, t + " Iterator")
        }, ra = function (e) {
            return Object(ei(e))
        }, oa = Bi("IE_PROTO"), ia = Object.prototype, aa = Object.getPrototypeOf || function (e) {
            return e = ra(e), gi(e, oa) ? e[oa] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ia : null
        }, sa = Zi("iterator"), ca = !([].keys && "next" in [].keys()), ua = function () {
            return this
        }, la = (ta = !0, function (e, t) {
            var n, r, o = String(ei(e)), i = $o(t), a = o.length;
            return i < 0 || i >= a ? ta ? "" : void 0 : (n = o.charCodeAt(i)) < 55296 || n > 56319 || i + 1 === a || (r = o.charCodeAt(i + 1)) < 56320 || r > 57343 ? ta ? o.charAt(i) : n : ta ? o.slice(i, i + 2) : r - 56320 + (n - 55296 << 10) + 65536
        });
        !function (e, t, n, r, o, i, a) {
            na(n, t, r);
            var s, c, u, l = function (e) {
                    if (!ca && e in h) return h[e];
                    switch (e) {
                        case"keys":
                        case"values":
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this, e)
                    }
                }, d = t + " Iterator", f = "values" == o, p = !1, h = e.prototype,
                m = h[sa] || h["@@iterator"] || o && h[o], y = m || l(o), g = o ? f ? l("entries") : y : void 0,
                v = "Array" == t && h.entries || m;
            if (v && (u = aa(v.call(new e))) !== Object.prototype && u.next && ($i(u, d, !0), "function" != typeof u[sa] && mi(u, sa, ua)), f && m && "values" !== m.name && (p = !0, y = function () {
                return m.call(this)
            }), (ca || p || !h[sa]) && mi(h, sa, y), Ti[t] = y, Ti[d] = ua, o) if (s = {
                values: f ? y : l("values"),
                keys: i ? y : l("keys"),
                entries: g
            }, a) for (c in s) c in h || Oi(h, c, s[c]); else Ei(Ei.P + Ei.F * (ca || p), t, s)
        }(String, "String", (function (e) {
            this._t = String(e), this._i = 0
        }), (function () {
            var e, t = this._t, n = this._i;
            return n >= t.length ? {value: void 0, done: !0} : (e = la(t, n), this._i += e.length, {value: e, done: !1})
        }));
        var da = function (e, t, n, r) {
            try {
                return r ? t(ii(n)[0], n[1]) : t(n)
            } catch (t) {
                var o = e.return;
                throw void 0 !== o && ii(o.call(e)), t
            }
        }, fa = Zi("iterator"), pa = Array.prototype, ha = function (e) {
            return void 0 !== e && (Ti.Array === e || pa[fa] === e)
        }, ma = function (e, t, n) {
            t in e ? pi.f(e, t, hi(0, n)) : e[t] = n
        }, ya = Zi("toStringTag"), ga = "Arguments" == Ii(function () {
            return arguments
        }()), va = Zi("iterator"), ba = ri.getIteratorMethod = function (e) {
            if (null != e) return e[va] || e["@@iterator"] || Ti[function (e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                    try {
                        return e[t]
                    } catch (e) {
                    }
                }(t = Object(e), ya)) ? n : ga ? Ii(t) : "Object" == (r = Ii(t)) && "function" == typeof t.callee ? "Arguments" : r
            }(e)]
        }, wa = Zi("iterator"), Sa = !1;
        try {
            [7][wa]().return = function () {
                Sa = !0
            }
        } catch (e) {
        }

        function Aa(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function Oa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function xa(e, t, n) {
            return t && Oa(e.prototype, t), n && Oa(e, n), e
        }

        function ka(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Pa(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                })))), r.forEach((function (t) {
                    ka(e, t, n[t])
                }))
            }
            return e
        }

        Ei(Ei.S + Ei.F * !function (e, t) {
            if (!t && !Sa) return !1;
            var n = !1;
            try {
                var r = [7], o = r[wa]();
                o.next = function () {
                    return {done: n = !0}
                }, r[wa] = function () {
                    return o
                }, e(r)
            } catch (e) {
            }
            return n
        }((function (e) {
        })), "Array", {
            from: function (e) {
                var t, n, r, o, i = ra(e), a = "function" == typeof this ? this : Array, s = arguments.length,
                    c = s > 1 ? arguments[1] : void 0, u = void 0 !== c, l = 0, d = ba(i);
                if (u && (c = xi(c, s > 2 ? arguments[2] : void 0, 2)), null == d || a == Array && ha(d)) for (n = new a(t = _i(i.length)); t > l; l++) ma(n, l, u ? c(i[l], l) : i[l]); else for (o = d.call(i), n = new a; !(r = o.next()).done; l++) ma(n, l, u ? da(o, c, [r.value, l], !0) : r.value);
                return n.length = l, n
            }
        });
        var Ea = ["", "-o-", "-webkit-", "-moz-", "-ms-"], Ta = function () {
            for (var e = document.head.style, t = 0, n = Ea.length; t < n; t += 1) e.position = "".concat(Ea[t], "sticky");
            var r = e.position ? e.position : "fixed";
            return e.position = "", r
        }(), ja = function () {
            function e(t, n) {
                var r = this;
                Aa(this, e), ka(this, "onResize", (function () {
                    r.node.style.maxWidth = "".concat(r.parentNode.clientWidth, "px"), r.computeScrollOffsets(), r.onScroll()
                })), ka(this, "onScroll", (function () {
                    var e = r.pos, t = e.state, n = e.start, o = e.stop, i = window.pageYOffset;
                    return i > n && i < o && ("default" === t || "stuck" === t) ? (r.pos.state = "sticky", r.node.style.position = "fixed", r.node.style.bottom = "", r.node.style.top = 0, void (r.node.dataset.stickyState = "sticky")) : i <= n && ("sticky" === t || "stuck" === t) ? (r.pos.state = "default", r.node.style.position = "", void (r.node.dataset.stickyState = "none")) : void (i >= o && ("default" === t || "sticky" === t) && (r.pos.state = "stuck", r.node.style.top = "", r.node.style.bottom = 0, r.node.style.position = "absolute", r.node.dataset.stickyState = "stuck"))
                })), ka(this, "refresh", (function () {
                    r.onResize()
                })), ka(this, "destroy", (function () {
                    r.unbindListeners()
                })), this.props = Pa({}, this.constructor.defaultProps, n), this.pos = {state: "default"}, this.node = t, this.parentNode = t.parentNode, this.resizeObserver = null, this.bindListeners(), this.computeScrollOffsets()
            }

            return xa(e, [{
                key: "bindListeners", value: function () {
                    if (window.ResizeObserver) return this.resizeObserver = new ResizeObserver(this.onResize), void this.resizeObserver.observe(this.parentNode);
                    s.a.on(this.onResize), this.onResize()
                }
            }, {
                key: "unbindListeners", value: function () {
                    if (window.ResizeObserver) return this.resizeObserver.disconnect(this.node), void (this.resizeObserver = null);
                    s.a.off(this.onResize)
                }
            }, {
                key: "computeScrollOffsets", value: function () {
                    var e = function (e) {
                        var t = e, n = 0;
                        do {
                            n = t.offsetTop + n
                        } while (t = t.offsetParent);
                        return n
                    }(this.parentNode);
                    this.pos.start = e, this.pos.stop = e + this.parentNode.offsetHeight - this.node.offsetHeight
                }
            }]), e
        }();
        ka(ja, "defaultProps", {});
        var Ia = function () {
            function e(t, n) {
                var r = this;
                Aa(this, e), ka(this, "onScroll", (function () {
                    for (var e = 0; e < r.fixedNodesLen; e += 1) r.fixedNodes[e].onScroll()
                })), ka(this, "refresh", (function () {
                    for (var e = 0; e < r.fixedNodesLen; e += 1) r.fixedNodes[e].refresh()
                })), ka(this, "destroy", (function () {
                    r.unbindListeners(), r.fixedNodes.forEach((function (e) {
                        return e.destroy()
                    })), r.fixedNodes = []
                })), this.props = Pa({}, this.constructor.defaultProps, n);
                var o = this.props.forceFixed;
                this.position = o ? "fixed" : Ta, this.nodes = "string" == typeof t ? Array.from(document.querySelectorAll(t)) : [t], this.fixedNodes = [];
                for (var i = "fixed" !== this.position ? this.position : "", a = 0, s = this.nodes.length; a < s; a += 1) {
                    var c = this.nodes[a];
                    c.style.top = 0, c.style.position = i, "fixed" === this.position && this.fixedNodes.push(new ja(c, this.props))
                }
                this.fixedNodesLen = this.fixedNodes.length, this.bindListeners()
            }

            return xa(e, [{
                key: "bindListeners", value: function () {
                    "fixed" === this.position && Zo.a.on(this.onScroll)
                }
            }, {
                key: "unbindListeners", value: function () {
                    "fixed" === this.position && Zo.a.off(this.onScroll)
                }
            }]), e
        }();
        ka(Ia, "defaultProps", {forceFixed: !1});
        var La = Ia;

        function Ca(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Ra(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var _a = !!("ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || window.DocumentTouch && document instanceof DocumentTouch),
            Da = function () {
                function e(t) {
                    var n = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), Ra(this, "onResize", (function () {
                        n.ruler && n.refresh()
                    })), Ra(this, "onScroll", (function () {
                        n.ruler && n.refresh()
                    })), Ra(this, "refreshRuler", (function () {
                        if (n.ruler) {
                            var e = n.ruler.node.clientHeight;
                            n.ruler.height !== e && n.props.onResize(e), n.ruler.height = e
                        }
                    })), Ra(this, "destroy", (function () {
                        n.ruler && (document.documentElement.removeChild(n.ruler), n.ruler = null, s.a.off(n.onResize), n.props.useManualScrollListener || Zo.a.off(n.onScroll))
                    })), this.props = function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            })))), r.forEach((function (t) {
                                Ra(e, t, n[t])
                            }))
                        }
                        return e
                    }({}, this.constructor.defaultProps, t);
                    var r = this.props.useManualScrollListener;
                    if (this.ruler = this.createRuler(), this.refresh = this.props.throttle ? function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, n = null,
                            r = function () {
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                n || (n = setTimeout((function () {
                                    e.apply(void 0, o), n = null
                                }), t))
                            };
                        return r.cancel = function () {
                            clearTimeout(n), n = null
                        }, r
                    }(this.refreshRuler, this.props.throttle) : this.refreshRuler, !this.ruler) return this;
                    s.a.on(this.onResize), r || Zo.a.on(this.onScroll), this.props.onResize(this.ruler.height)
                }

                var t, n, r;
                return t = e, (n = [{
                    key: "createRuler", value: function () {
                        if (!_a) return null;
                        var e = document.createElement("div");
                        e.style.position = "fixed", e.style.top = 0, e.style.bottom = 0, e.style.left = -1, e.style.visibility = "hidden", document.documentElement.appendChild(e);
                        var t = e.clientHeight;
                        return this.props.sticky && (this.props.sticky.nodes[0].style.maxHeight = t + "px"), {
                            node: e,
                            height: t
                        }
                    }
                }, {
                    key: "height", get: function () {
                        return this.ruler.height
                    }
                }]) && Ca(t.prototype, n), r && Ca(t, r), e
            }();
        Ra(Da, "defaultProps", {
            onResize: function () {
            }, throttle: 250, useManualScrollListener: !1
        });
        var Ma = Da, Fa = function (e) {
            return e.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g).filter(Boolean).map((function (e) {
                return e.toLowerCase()
            })).join("-")
        };

        function Ba(e) {
            return (Ba = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function za(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Na(e, t) {
            return (Na = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Wa(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Ha(e);
                if (t) {
                    var o = Ha(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return qa(this, n)
            }
        }

        function qa(e, t) {
            return !t || "object" !== Ba(t) && "function" != typeof t ? Ua(e) : t
        }

        function Ua(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Ha(e) {
            return (Ha = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Va(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Ga = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Na(e, t)
            }(i, e);
            var t, n, r, o = Wa(i);

            function i(e, t) {
                var n;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Va(Ua(n = o.call(this, t)), "onResize", (function () {
                })), Va(Ua(n), "setImage", (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = Date.now() - n.last,
                        o = r >= n.animationDuration,
                        i = t || !n.animationDuration ? 0 : o ? 100 : Math.max(0, n.animationDuration - r);
                    clearTimeout(n.showImageTimeout), clearTimeout(n.hideImageTimeout), clearTimeout(n.imageAnimatingTimeout), n.onSetImage(e, t), e !== n.currentIndex && (n.showImageTimeout = setTimeout((function () {
                        n.isPersistImages || n.hideImages(), n.showImage(e, t), n.last = Date.now()
                    }), i))
                })), Va(Ua(n), "unset", (function () {
                    clearTimeout(n.showImageTimeout), clearTimeout(n.hideImageTimeout), n.onUnset(), n.hideImageTimeout = setTimeout((function () {
                        n.hideImages()
                    }), n.isHideDelayed ? n.animationDuration : 0)
                })), Va(Ua(n), "onSetImage", (function () {
                })), Va(Ua(n), "onUnset", (function () {
                })), Va(Ua(n), "onShowImage", (function () {
                })), Va(Ua(n), "onImageShown", (function () {
                })), Va(Ua(n), "onHide", (function () {
                })), Va(Ua(n), "onDestroy", (function () {
                })), Va(Ua(n), "destroy", (function () {
                    n.onDestroy(), clearTimeout(n.activeTimeout), clearTimeout(n.imageAnimatingTimeout), clearTimeout(n.showImageTimeout), clearTimeout(n.hideImageTimeout)
                }));
                var r = n.props, a = r.items, s = r.imageSelector;
                n.itemLen = a.length, n.itemDimensions = n.getItemDimensions(a), n.last = null, n.currentIndex = -1, n.lastIndex = -1, n.animationDuration = 600, n.isHideDelayed = !1, n.isPersistImages = !0, n.node = e, n.node.dataset.active = !1;
                for (var c = 0, u = a.length; c < u; c += 1) a[c].dataset.active = null, a[c].dataset.animated = null, a[c].querySelector(s).style.transitionDuration = null;
                return n.showImageTimeout = null, n.activeTimeout = null, n.hideImageTimeout = null, n
            }

            return t = i, (n = [{
                key: "getItemDimensions", value: function (e) {
                    return e.map((function (e) {
                        var t = e.querySelector("img");
                        return Object(f.c)(t)
                    }))
                }
            }, {
                key: "showImage", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = this.props.items;
                    r[e].dataset.active = !1, r[e].dataset.animated = !n, r[e].parentNode.appendChild(r[e]), this.currentIndex = e, this.onShowImage(e, n), clearTimeout(this.activeTimeout), this.activeTimeout = setTimeout((function () {
                        r[e].dataset.active = !0, t.onImageShown()
                    }), n || !this.animationDuration ? 0 : 25), this.lastIndex = e
                }
            }, {
                key: "hideImages", value: function () {
                    var e = this.props.items;
                    clearTimeout(this.activeTimeout), this.onHide();
                    for (var t = 0, n = e.length; t < n; t += 1) e[t].dataset.active = !1, t !== this.currentIndex && (e[t].dataset.animated = !1);
                    this.currentIndex = -1
                }
            }]) && za(t.prototype, n), r && za(t, r), i
        }(l.a);

        function Ya(e) {
            return (Ya = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Qa(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Xa(e, t) {
            return (Xa = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Za(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = $a(e);
                if (t) {
                    var o = $a(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ja(this, n)
            }
        }

        function Ja(e, t) {
            return !t || "object" !== Ya(t) && "function" != typeof t ? Ka(e) : t
        }

        function Ka(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function $a(e) {
            return ($a = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function es(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Va(Ga, "defaultProps", {items: []});
        var ts = {medium: 600, fast: 300, slow: 900}, ns = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Xa(e, t)
            }(i, e);
            var t, n, r, o = Za(i);

            function i(e, t) {
                var n;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), es(Ka(n = o.call(this, e, t)), "onDestroy", (function () {
                }));
                var r = n.props.animationDuration;
                return n.animationDuration = ts[r], n.isHideDelayed = !1, n.reset(), n
            }

            return t = i, (n = [{
                key: "reset", value: function () {
                    for (var e = this.props, t = e.items, n = e.imageSelector, r = 0, o = t.length; r < o; r += 1) t[r].querySelector(n).style.transitionDuration = this.animationDuration + "ms"
                }
            }]) && Qa(t.prototype, n), r && Qa(t, r), i
        }(Ga);
        es(ns, "defaultProps", {items: [], imageSelector: ".portfolio-hover-bg-img", animationDuration: "medium"});
        var rs = function (e, t, n, r) {
            var o = Math.min(e / n, t / r);
            return {width: n * o, height: r * o}
        };

        function os(e) {
            return (os = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function is(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function as(e, t) {
            return (as = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ss(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = ls(e);
                if (t) {
                    var o = ls(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return cs(this, n)
            }
        }

        function cs(e, t) {
            return !t || "object" !== os(t) && "function" != typeof t ? us(e) : t
        }

        function us(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ls(e) {
            return (ls = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ds(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var fs = {fast: 300, medium: 600, slow: 900}, ps = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && as(e, t)
            }(i, e);
            var t, n, r, o = ss(i);

            function i(e, t) {
                var n;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), ds(us(n = o.call(this, e, t)), "onSetImage", (function (e) {
                    n.node.dataset.active = !0, n.startFollowing(e)
                })), ds(us(n), "onShowImage", (function (e) {
                    var t = n.state, r = t.width, o = t.height;
                    n.resizeAnim.last = n.itemDimensions[n.lastIndex] || {
                        width: r,
                        height: o
                    }, n.resizeAnim.current = n.itemDimensions[e];
                    var i = -1 !== n.lastIndex;
                    n.resizeImages(r, o), n.updateRatio(r, o, n.resizeAnim.current), n.resizeWrapper(i, n.resizeAnim.current.worldWidth, n.resizeAnim.current.worldHeight)
                })), ds(us(n), "onUnset", (function () {
                    n.stopFollowing(), n.node.dataset.active = !1
                })), ds(us(n), "onScroll", (function () {
                    var e = n.props.container.getBoundingClientRect();
                    n.pos.target.offsetY = e.top
                })), ds(us(n), "onResize", (function (e, t) {
                    var r = n.node.clientWidth, o = n.node.clientHeight;
                    n.setState({
                        width: r,
                        height: o,
                        halfWidth: .5 * r,
                        halfHeight: .5 * o,
                        regionWidth: e,
                        regionHeight: t
                    }), n.resizeImages(r, o), n.updatePosition()
                })), ds(us(n), "onEnter", (function (e) {
                    if (!n.state.isCursorActive) {
                        var t = n.props.rootNode, r = Object(re.f)(e), o = r.clientX, i = r.clientY;
                        n.setTargetPosition(o, i), n.setState({isCursorActive: !0}), t.addEventListener(re.a.move, n.onMove)
                    }
                })), ds(us(n), "onMove", (function (e) {
                    var t = Object(re.f)(e), r = t.clientX, o = t.clientY;
                    n.setTargetPosition(r, o)
                })), ds(us(n), "onLeave", (function () {
                    var e = n.props.rootNode;
                    n.state.isCursorActive && (n.setState({isCursorActive: !1}), e.removeEventListener(re.a.move, n.onMove))
                })), ds(us(n), "tick", (function () {
                    n.updatePosition(), n.frame = requestAnimationFrame(n.tick)
                })), ds(us(n), "onDestroy", (function () {
                    n.tween && n.tween.destroy(), n.tween = null, n.unbindListeners(), cancelAnimationFrame(n.frame), clearTimeout(n.stopFollowingTimeout)
                }));
                var r = n.props, a = r.containerSelector, s = r.animationDuration, c = r.modeFollowSize,
                    u = r.modeFollowAcceleration;
                return n.state = {
                    acceleration: .01 * u,
                    width: 0,
                    height: 0,
                    halfWidth: 0,
                    halfHeight: 0,
                    regionWidth: 800,
                    regionHeight: 600,
                    isCursorActive: !1,
                    last: Date.now()
                }, n.node.style.width = "".concat(c, "vmin"), n.node.style.height = "".concat(c, "vmin"), n.animationDuration = fs[s], n.isPersistImages = !1, n.stopFollowingTimeout = null, n.reset(), n.pos = {
                    x: 0,
                    y: 0,
                    target: {x: 0, y: 0, offsetY: 0}
                }, n.tween = null, n.resizeAnim = {
                    value: 0,
                    last: {width: 100, height: 100, worldWidth: 100, worldHeight: 100},
                    current: {width: 100, height: 100, worldWidth: 100, worldHeight: 100}
                }, n.ref = {container: n.node.querySelector(a)}, n.frame = null, n.onDebounceScroll = me(n.onScroll, 250), n.bindListeners(), n
            }

            return t = i, (n = [{
                key: "reset", value: function () {
                    var e = this.props, t = e.items, n = e.imageSelector;
                    this.node.style.transitionDuration = this.animationDuration + "ms";
                    for (var r = 0, o = t.length; r < o; r += 1) t[r].querySelector(n).style.transitionDuration = this.animationDuration + "ms"
                }
            }, {
                key: "startFollowing", value: function (e) {
                    -1 === this.currentIndex && (this.pos.x = this.pos.target.x, this.pos.y = this.pos.target.y), clearTimeout(this.stopFollowingTimeout), cancelAnimationFrame(this.frame), this.frame = requestAnimationFrame(this.tick), this.updatePosition()
                }
            }, {
                key: "stopFollowing", value: function () {
                    var e = this;
                    clearTimeout(this.stopFollowingTimeout), this.stopFollowingTimeout = setTimeout((function () {
                        cancelAnimationFrame(e.frame)
                    }), this.animationDuration)
                }
            }, {
                key: "bindListeners", value: function () {
                    var e = this, t = this.props.rootNode;
                    Zo.a.on(this.onDebounceScroll), t.addEventListener(re.a.enter, this.onEnter), re.a.leave.forEach((function (n) {
                        return t.addEventListener(n, e.onLeave)
                    })), this.onScroll()
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this, t = this.props.rootNode;
                    Zo.a.off(this.onDebounceScroll), t.removeEventListener(re.a.enter, this.onEnter), t.removeEventListener(re.a.move, this.onMove), re.a.leave.forEach((function (n) {
                        return t.removeEventListener(n, e.onLeave)
                    }))
                }
            }, {
                key: "resizeImages", value: function (e, t) {
                    for (var n = this.props.items, r = 0; r < this.itemLen; r += 1) {
                        var o = n[r], i = this.itemDimensions[r], a = rs(e, t, i.width, i.height);
                        o.style.width = "".concat(a.width, "px"), o.style.height = "".concat(a.height, "px")
                    }
                    this.updateRatio(e, t, this.resizeAnim.last), this.updateRatio(e, t, this.resizeAnim.current), this.updateWrapper(e, t)
                }
            }, {
                key: "updateRatio", value: function (e, t, n) {
                    var r = Math.min(e / n.width, t / n.height);
                    n.worldWidth = n.width * r, n.worldHeight = n.height * r
                }
            }, {
                key: "resizeWrapper", value: function (e, t, n) {
                    var r = this;
                    this.tween && (this.tween.destroy(), this.tween = null), e ? this.tween = new no.a({
                        duration: .001 * this.animationDuration,
                        from: 0,
                        to: 1,
                        onUpdate: function (e) {
                            r.resizeAnim.value = e, r.updateWrapper()
                        },
                        onComplete: function () {
                            r.resizeAnim.value = 1, r.updateWrapper()
                        }
                    }) : this.updateWrapper(t, n)
                }
            }, {
                key: "updateWrapper", value: function (e, t) {
                    var n = this.props.wrapper;
                    if (e && t) return n.style.width = "".concat(e, "px"), void (n.style.height = "".concat(t, "px"));
                    var r = this.resizeAnim.value,
                        o = Object(vo.b)(this.resizeAnim.last.worldWidth, this.resizeAnim.current.worldWidth, r),
                        i = Object(vo.b)(this.resizeAnim.last.worldHeight, this.resizeAnim.current.worldHeight, r);
                    n.style.width = "".concat(o, "px"), n.style.height = "".concat(i, "px")
                }
            }, {
                key: "setTargetPosition", value: function (e, t) {
                    this.pos.target.x = e, this.pos.target.y = t
                }
            }, {
                key: "updatePosition", value: function () {
                    var e = this.state, t = e.acceleration, n = e.regionHeight, r = e.height, o = e.halfWidth,
                        i = e.halfHeight, a = this.pos.target.x, s = this.pos.target.y + -this.pos.target.offsetY;
                    this.pos.x += (a - this.pos.x) * t, this.pos.y += (s - this.pos.y) * t;
                    var c = this.pos.x - o, u = Object(go.a)(this.pos.y - i, 0, n - r);
                    this.node.style.transform = "translate3d(" + c + "px, " + u + "px, 0)"
                }
            }]) && is(t.prototype, n), r && is(t, r), i
        }(Ga);

        function hs(e) {
            return (hs = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ms(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function ys(e, t) {
            return (ys = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function gs(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = ws(e);
                if (t) {
                    var o = ws(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return vs(this, n)
            }
        }

        function vs(e, t) {
            return !t || "object" !== hs(t) && "function" != typeof t ? bs(e) : t
        }

        function bs(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ws(e) {
            return (ws = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Ss(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        ds(ps, "defaultProps", {
            rootNode: document.createElement("div"),
            container: document.createElement("div"),
            wrapper: document.createElement("div"),
            items: [],
            animationDuration: "medium",
            containerSelector: ".portfolio-hover-backgrounds-wrapper",
            imageSelector: ".portfolio-hover-bg-img",
            modeFollowSize: 75,
            modeFollowAcceleration: 10
        });
        var As = {fast: 300, medium: 600, slow: 900}, Os = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ys(e, t)
            }(i, e);
            var t, n, r, o = gs(i);

            function i(e, t) {
                var n;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Ss(bs(n = o.call(this, e, t)), "onSetImage", (function (e) {
                    n.node.dataset.active = !0
                })), Ss(bs(n), "onShowImage", (function (e) {
                    var t = n.state, r = t.width, o = t.height;
                    n.resizeAnim.last = n.itemDimensions[n.lastIndex] || {
                        width: r,
                        height: o
                    }, n.resizeAnim.current = n.itemDimensions[e];
                    var i = -1 !== n.lastIndex;
                    n.resizeImages(r, o), n.updateRatio(r, o, n.resizeAnim.current), n.resizeWrapper(i, n.resizeAnim.current.worldWidth, n.resizeAnim.current.worldHeight)
                })), Ss(bs(n), "onUnset", (function () {
                    n.node.dataset.active = !1
                })), Ss(bs(n), "onResize", (function (e, t) {
                    var r = n.node.clientWidth, o = n.node.clientHeight;
                    n.setState({
                        width: r,
                        height: o,
                        halfWidth: .5 * r,
                        halfHeight: .5 * o,
                        regionWidth: e,
                        regionHeight: t
                    }), n.resizeImages(r, o)
                })), Ss(bs(n), "onDestroy", (function () {
                    n.tween && n.tween.destroy(), n.tween = null
                }));
                var r = n.props, a = r.containerSelector, s = r.animationDuration, c = r.modeOriginalSize;
                return n.state = {
                    width: 0,
                    height: 0,
                    halfWidth: 0,
                    halfHeight: 0,
                    regionWidth: 800,
                    regionHeight: 600
                }, n.node.style.width = c + "vmin", n.node.style.height = c + "vmin", n.animationDuration = As[s], n.isPersistImages = !1, n.reset(), n.tween = null, n.resizeAnim = {
                    value: 0,
                    last: {width: 100, height: 100, worldWidth: 100, worldHeight: 100},
                    current: {width: 100, height: 100, worldWidth: 100, worldHeight: 100}
                }, n.ref = {container: n.node.querySelector(a)}, n
            }

            return t = i, (n = [{
                key: "reset", value: function () {
                    var e = this.props, t = e.items, n = e.imageSelector;
                    this.node.style.transitionDuration = this.animationDuration + "ms";
                    for (var r = 0, o = t.length; r < o; r += 1) t[r].querySelector(n).style.transitionDuration = this.animationDuration + "ms"
                }
            }, {
                key: "resizeImages", value: function (e, t) {
                    for (var n = this.props.items, r = 0; r < this.itemLen; r += 1) {
                        var o = rs(e, t, this.itemDimensions[r].width, this.itemDimensions[r].height);
                        n[r].style.width = "".concat(o.width, "px"), n[r].style.height = "".concat(o.height, "px")
                    }
                    this.updateRatio(e, t, this.resizeAnim.last), this.updateRatio(e, t, this.resizeAnim.current), this.updateWrapper(e, t)
                }
            }, {
                key: "updateRatio", value: function (e, t, n) {
                    var r = Math.min(e / n.width, t / n.height);
                    n.worldWidth = n.width * r, n.worldHeight = n.height * r
                }
            }, {
                key: "resizeWrapper", value: function (e, t, n) {
                    var r = this;
                    this.tween && (this.tween.destroy(), this.tween = null), e ? this.tween = new no.a({
                        duration: .001 * this.animationDuration,
                        from: 0,
                        to: 1,
                        onUpdate: function (e) {
                            r.resizeAnim.value = e, r.updateWrapper()
                        },
                        onComplete: function () {
                            r.resizeAnim.value = 1, r.updateWrapper()
                        }
                    }) : this.updateWrapper(t, n)
                }
            }, {
                key: "updateWrapper", value: function (e, t) {
                    var n = this.props.wrapper;
                    if (e && t) return n.style.width = "".concat(e, "px"), void (n.style.height = "".concat(t, "px"));
                    var r = this.resizeAnim.value,
                        o = Object(vo.b)(this.resizeAnim.last.worldWidth, this.resizeAnim.current.worldWidth, r),
                        i = Object(vo.b)(this.resizeAnim.last.worldHeight, this.resizeAnim.current.worldHeight, r);
                    n.style.width = "".concat(o, "px"), n.style.height = "".concat(i, "px")
                }
            }]) && ms(t.prototype, n), r && ms(t, r), i
        }(Ga);
        Ss(Os, "defaultProps", {
            wrapper: document.createElement("div"),
            items: [],
            animationDuration: "medium",
            imageSelector: ".portfolio-hover-bg-img",
            containerSelector: ".portfolio-hover-backgrounds-wrapper",
            modeOriginalSize: 75
        });
        var xs = {
            "hover-cover": {Class: ns, canPersist: !0},
            "hover-follow": {Class: ps, canPersist: !1},
            "hover-static": {Class: Os, canPersist: !0}
        };

        function ks(e) {
            return (ks = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ps(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Es(e, t) {
            return (Es = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ts(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Ls(e);
                if (t) {
                    var o = Ls(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return js(this, n)
            }
        }

        function js(e, t) {
            return !t || "object" !== ks(t) && "function" != typeof t ? Is(e) : t
        }

        function Is(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Ls(e) {
            return (Ls = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Cs(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Rs = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Es(e, t)
            }(i, e);
            var t, n, r, o = Ts(i);

            function i(e, t) {
                var n;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Cs(Is(n = o.call(this, t)), "onItemOver", (function () {
                    var e = n.props, t = e.index, r = e.onItemOver, o = e.onItemTouchStart;
                    re.e ? o(event, t) : r(t)
                })), Cs(Is(n), "onItemOut", (function () {
                    var e = n.props, t = e.index;
                    (0, e.onItemOut)(t)
                })), Cs(Is(n), "activate", (function (e) {
                    n.state.isActive || (n.setState({isActive: !0}), n.node.dataset.active = !0)
                })), Cs(Is(n), "deactivate", (function (e) {
                    n.state.isActive && (n.setState({isActive: !1}), n.node.dataset.active = !1)
                })), Cs(Is(n), "destroy", (function () {
                    n.unbindListeners()
                }));
                var r = n.props.imageMaskSelector;
                return n.state = {isActive: !1}, n.node = e, n.ref = {imageMask: n.node.querySelector(r)}, n.bindListeners(), n
            }

            return t = i, (n = [{
                key: "bindListeners", value: function () {
                    var e = this;
                    this.node.addEventListener(re.a.enter, this.onItemOver), this.node.addEventListener("touchstart", (function (t, n) {
                        e.onItemTouchStart(t, n)
                    })), re.a.leave.forEach((function (t) {
                        e.node.addEventListener(t, e.onItemOut)
                    }))
                }
            }, {
                key: "unbindListeners", value: function () {
                    var e = this;
                    this.node.removeEventListener(re.a.enter, this.onItemOver), this.node.removeEventListener("touchstart", this.onItemTouchEnd), re.a.leave.forEach((function (t) {
                        e.node.removeEventListener(t, e.onItemOut)
                    }))
                }
            }]) && Ps(t.prototype, n), r && Ps(t, r), i
        }(l.a);

        function _s(e) {
            return (_s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ds(e, t) {
            if (null == e) return {};
            var n, r, o = function (e, t) {
                if (null == e) return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }

        function Ms(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Fs(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ms(Object(n), !0).forEach((function (t) {
                    Hs(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ms(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Bs(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function zs(e, t) {
            return (zs = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ns(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Us(e);
                if (t) {
                    var o = Us(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ws(this, n)
            }
        }

        function Ws(e, t) {
            return !t || "object" !== _s(t) && "function" != typeof t ? qs(e) : t
        }

        function qs(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Us(e) {
            return (Us = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Hs(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        Cs(Rs, "defaultProps", {
            index: 0,
            titleSelector: ".portfolio-hover-item-title",
            contentSelector: ".portfolio-hover-item-content",
            imageMaskSelector: ".portfolio-hover-item-background-mask",
            onItemOver: oe.a,
            onItemOut: oe.a,
            onItemTouchStart: oe.a
        });
        var Vs = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && zs(e, t)
            }(u, e);
            var t, n, r, a = Ns(u);

            function u(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, u), Hs(qs(t = a.call(this)), "sectionTweaksToWatch", ["layout", "persistSelection", "width", "height", "customHeight", "selectionInFront", "verticalAlign", "horizontalAlign", "delimiter", "spacingVertical", "spacingHorizontal", "mode", "animation", "animationDuration", "modeBackgroundLayout", "modeOriginalSize", "modeFollowSize", "modeFollowAcceleration"]), Hs(qs(t), "parseTweak", {
                    layout: function (e) {
                        return Fa(e)
                    }, selectionInFront: function (e) {
                        return "true" === e
                    }, persistSelection: function (e) {
                        return "true" === e
                    }, width: function (e) {
                        return Fa(e)
                    }, height: function (e) {
                        return Fa(e)
                    }, verticalAlign: function (e) {
                        return Fa(e)
                    }, horizontalAlign: function (e) {
                        return Fa(e)
                    }, spacingHorizontal: function (e) {
                        return parseFloat(e, 10)
                    }, spacingVertical: function (e) {
                        return parseFloat(e, 10)
                    }, delimiter: function (e) {
                        return Fa(e)
                    }, animation: function (e) {
                        return Fa(e)
                    }, animationDuration: function (e) {
                        return Fa(e)
                    }, modeFollowSize: function (e) {
                        return Number(e)
                    }, modeFollowAcceleration: function (e) {
                        return parseFloat(e, 10)
                    }, modeOriginalSize: function (e) {
                        return Number(e)
                    }
                }), Hs(qs(t), "onItemOver", (function (e) {
                    return t.setItem(e)
                })), Hs(qs(t), "onItemTouchStart", (function (e, n) {
                    t.setItem(n)
                })), Hs(qs(t), "onItemOut", (function (e) {
                    return t.unsetItem(e)
                })), Hs(qs(t), "setItem", (function (e) {
                    for (var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0; r < t.itemLen; r += 1) e !== r ? t.items[r].deactivate() : (t.items[r].activate(), t.imageMode.setImage(r, n));
                    t.setState({lastIndex: e, isHover: !0})
                })), Hs(qs(t), "unsetItem", (function (e) {
                    for (var n = t.state, r = n.persistSelection, o = n.mode, i = n.lastIndex, a = r && t.checkIsPersistCapable(o), s = 0; s < t.itemLen; s += 1) a && i === s ? t.items[s].activate() : t.items[s].deactivate();
                    t.setState({isHover: !1});
                    var c = i;
                    a ? t.imageMode.setImage(c, !1, !0) : t.imageMode.unset()
                })), Hs(qs(t), "checkIsPersistCapable", (function (e) {
                    return xs[e].canPersist
                })), Hs(qs(t), "loadImages", (function () {
                    i.a.loadAllLazy({load: !0, mode: "cover", useAdvancedPositioning: !0}, t.node)
                })), Hs(qs(t), "onResize", (function (e) {
                    var n = null;
                    e && (n = e.detail.headerHeight);
                    var r = window.innerHeight, o = t.ref.items.clientHeight,
                        i = Fs(Fs({}, t.state), {windowHeight: r, itemsHeight: o});
                    t.setState(Fs({}, i)), t.refreshDataset(i), t.refreshMode(i), t.refreshPersist();
                    var a = t.node.clientWidth, s = Math.min(window.innerHeight, t.node.clientHeight);
                    t.baseSticky && t.baseSticky.refresh(), t.imageMode && t.imageMode.onResize(a, s), t.updateFirstSectionPadding(n), t.loadImages()
                })), Hs(qs(t), "onRulerResize", (function (e) {
                    t.node.style.minHeight = e + "px", t.baseSticky && t.baseSticky.refresh()
                })), Hs(qs(t), "parseTweaks", (function () {
                    return Object.keys(t.tweaks.map).reduce((function (e, n) {
                        var r = t.tweaks.map[n], i = o.a.getValue(n);
                        return void 0 !== i && (e[r] = t.parseTweak[r] ? t.parseTweak[r](i) : i), e
                    }), {})
                })), Hs(qs(t), "updateFirstSectionPadding", (function (e) {
                    if (null === t.node.closest(".page-section").previousElementSibling) {
                        var n = e || document.querySelector(".header").getBoundingClientRect().height,
                            r = t.node.closest(".page-section").querySelector(".section-background"),
                            o = "full" === t.node.dataset.width || "inset" === t.node.dataset.width,
                            i = t.node.closest(".page-section"), a = t.node.querySelector(".portfolio-hover-items");
                        o ? (i.style.paddingTop = "calc(".concat(n, "px"), a.style.paddingTop = "", r && (r.style.top = "".concat(n, "px")), t.toggleHeaderTransparentOverride(!0)) : (i.style.paddingTop = "", a.style.paddingTop = "".concat(n, "px"), r && (r.style.top = ""), t.toggleHeaderTransparentOverride(!1))
                    }
                })), Hs(qs(t), "toggleHeaderTransparentOverride", (function (e) {
                    var t = document.querySelector(".header-announcement-bar-wrapper");
                    e ? t.classList.add(c.f) : t.classList.remove(c.f)
                })), Hs(qs(t), "onTweak", (function () {
                    var e = Fs(Fs({}, t.state), t.parseTweaks());
                    t.tweaks.watch.some((function (n) {
                        return e[t.tweaks.map[n]] !== t.state[t.tweaks.map[n]]
                    })) && t.updateState(e)
                })), Hs(qs(t), "onSectionTweak", (function (e) {
                    var n = Fs(Fs({}, t.state), e);
                    return !!t.sectionTweaksToWatch.some((function (e) {
                        return n[e] !== t.state[e]
                    })) && (t.updateState(n), !0)
                })), Hs(qs(t), "updateState", (function (e) {
                    t.isDestroyed || (t.refreshDataset(e), t.refreshMode(e), t.setState(Fs({}, e)), t.refreshPersist(), t.onResize())
                })), Hs(qs(t), "destroy", (function () {
                    t.isDestroyed = !0, t.unbindListeners(), t.ruler.destroy(), t.baseSticky.destroy(), t.ruler = null, t.baseSticky = null, t.imageMode && (t.imageMode.destroy(), t.imageMode = null);
                    for (var e = 0; e < t.itemLen; e += 1) t.items[e].destroy();
                    t.items = [], t.itemLen = 0
                }));
                var n = t.props, r = n.baseStickySelector, s = n.itemsSelector, l = n.listSelector, d = n.itemSelector,
                    f = n.backgroundsSelector, p = n.itemBackgroundSelector, h = n.backgroundsWrapperSelector,
                    m = n.backgroundSelector;
                e.dataset.init = !0;
                var y = Fs({tweaks: {}}, e.dataset.props ? JSON.parse(e.dataset.props) : {});
                return t.tweaks = Object.keys(y.tweaks).reduce((function (e, t) {
                    var n = y.tweaks[t];
                    return e.watch.push(n), e.map[n] = t, e
                }), {watch: [], map: {}}), t.state = Fs(Fs(Fs({
                    layout: "inline",
                    persistSelection: !1,
                    width: "full-bleed",
                    height: "large",
                    customHeight: 100,
                    selectionInFront: !1,
                    verticalAlign: "center",
                    horizontalAlign: "center",
                    delimiter: "comma",
                    spacingHorizontal: .3,
                    spacingVertical: .6,
                    animation: "scale-up",
                    animationDuration: "medium",
                    mode: "background",
                    modeBackgroundLayout: "cover",
                    modeOriginalSize: 75,
                    modeFollowSize: 60,
                    modeFollowAcceleration: 10
                }, y), t.parseTweaks()), {}, {
                    windowHeight: 0,
                    itemsHeight: 0,
                    lastIndex: 0,
                    isHover: !1
                }), e.dataset.stackedLayout = t.state.stackedLayout, t.node = e, t.ref = {
                    items: t.node.querySelector(s),
                    list: t.node.querySelector(l),
                    backgrounds: t.node.querySelector(f),
                    itemBackground: Array.from(t.node.querySelectorAll(p)),
                    backgroundsWrapper: t.node.querySelector(h),
                    background: Array.from(t.node.querySelectorAll(m))
                }, t.baseStickyNode = t.node.querySelector(r), t.items = Array.from(t.node.querySelectorAll(d)).map((function (e, n) {
                    return new Rs(e, {
                        index: n,
                        spacingHorizontal: t.state.spacingHorizontal,
                        spacingVertical: t.state.spacingVertical,
                        onItemOver: t.onItemOver,
                        onItemOut: t.onItemOut,
                        onItemTouchStart: t.onItemTouchStart
                    })
                })), t.itemLen = t.items.length, t.imageMode = null, t.progress = 0, t.onDebouncedResize = me(t.onResize, 100), t.refreshDataset(t.state), t.refreshMode(t.state, !0), t.baseSticky = new La(t.baseStickyNode, {forceFixed: !1}), t.ruler = new Ma({onResize: t.onRulerResize}), t.bindListeners(), t.state.persistSelection && t.checkIsPersistCapable(t.state.mode) && t.setItem(t.state.lastIndex, !0), t.tweaks.watch.length && o.a.watch(t.tweaks.watch, t.onTweak), t
            }

            return t = u, (n = [{
                key: "bindListeners", value: function () {
                    window.addEventListener(c.a, this.onResize), s.a.on(this.onDebouncedResize), this.onResize()
                }
            }, {
                key: "unbindListeners", value: function () {
                    window.removeEventListener(c.a, this.onResize), s.a.off(this.onDebouncedResize)
                }
            }, {
                key: "refreshPersist", value: function () {
                    this.unsetItem(-1)
                }
            }, {
                key: "refreshDataset", value: function (e) {
                    this.node.dataset.layout = e.layout, this.node.dataset.delimiter = e.delimiter, this.node.dataset.activeItemFront = e.selectionInFront, this.node.dataset.mode = e.mode, this.node.dataset.width = e.width, this.node.dataset.height = e.height, this.node.dataset.customHeight = e.customHeight, this.node.dataset.verticalAlign = e.verticalAlign, this.node.dataset.horizontalAlign = e.horizontalAlign, this.node.dataset.modeBackgroundLayout = e.modeBackgroundLayout, this.node.dataset.animation = e.animation, this.node.dataset.animationDuration = e.animationDuration
                }
            }, {
                key: "refreshMode", value: function (e) {
                    var t = e.mode, n = Ds(e, ["mode"]);
                    if (!xs[t]) throw new Error('Mode of mode "'.concat(t, '" does not exist'));
                    this.imageMode && (this.imageMode.destroy(), this.imageMode = null), this.imageMode = new xs[t].Class(this.ref.backgrounds, Fs(Fs({}, n), {}, {
                        rootNode: this.node,
                        container: this.baseStickyNode,
                        wrapper: this.ref.backgroundsWrapper,
                        items: this.ref.background,
                        secondaryItems: this.ref.itemBackground
                    }))
                }
            }]) && Bs(t.prototype, n), r && Bs(t, r), u
        }(l.a);
        Hs(Vs, "defaultProps", {
            baseStickySelector: ".portfolio-hover-base-sticky",
            itemsSelector: ".portfolio-hover-items",
            listSelector: ".portfolio-hover-items-list",
            itemSelector: ".portfolio-hover-item",
            itemBackgroundSelector: ".portfolio-hover-item-background-wrapper",
            backgroundsSelector: ".portfolio-hover-backgrounds",
            backgroundsWrapperSelector: ".portfolio-hover-backgrounds-wrapper",
            backgroundSelector: ".portfolio-hover-bg"
        });

        function Gs(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var Ys = ["tweak-portfolio-index-background-animation-type", "tweak-portfolio-index-background-animation-duration", "tweak-portfolio-index-background-width"],
            Qs = {Default: 400, Fast: 200, Slow: 800}, Xs = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.refs = {}, this.refs.container = t, this.refs.mask = t.querySelector(".portfolio-index-background-image-mask"), this.refs.content = t.querySelector(".portfolio-index-background-image-content"), this.refs.image = t.querySelector("img[data-src]"), this.boundOnLoad = this.onLoad.bind(this), this.isVisible = !1, this.refs.container.style.visibility = "hidden"
                }

                var t, n, r;
                return t = e, (n = [{
                    key: "show", value: function (e, t) {
                        this.isVisible || (this.isVisible = !0, this.refs.container.classList.add("is-active"), this.refs.container.style.visibility = "visible", this.refs.mask && (this.refs.mask.style.animation = "portfolio-index-background-image-mask--".concat(e, "-in ").concat(t, "ms both"), this.refs.content.style.animation = "portfolio-index-background-image-content--".concat(e, "-in ").concat(t, "ms both")))
                    }
                }, {
                    key: "hide", value: function (e, t) {
                        this.isVisible && (this.isVisible = !1, this.refs.container.classList.remove("is-active"), this.refs.mask && (this.refs.mask.style.animation = "portfolio-index-background-image-mask--".concat(e, "-out ").concat(t / 2, "ms both"), this.refs.content.style.animation = "portfolio-index-background-image-content--".concat(e, "-out ").concat(t / 2, "ms both")))
                    }
                }, {
                    key: "load", value: function () {
                        this.refs.image && (this.isLoaded || this.refs.image.addEventListener("load", this.boundOnLoad), i.a.loadLazy(this.refs.image, {load: !0}))
                    }
                }, {
                    key: "onLoad", value: function () {
                        this.refs.content.classList.add("is-loaded"), this.refs.image.style.display = "none", this.refs.image.removeAttribute("src"), this.refs.image.removeEventListener("load", this.boundOnLoad)
                    }
                }, {
                    key: "isLoaded", get: function () {
                        return this.refs.content.classList.contains("is-loaded")
                    }
                }]) && Gs(t.prototype, n), r && Gs(t, r), e
            }(), Zs = function (e) {
                var t = e.closest(".content-wrapper"), n = e.querySelector(".portfolio-index-background-images"),
                    r = e.querySelector(".portfolio-index-background-images");
                t.style.alignSelf = "stretch", r.dataset.transition = "scale-down";
                var i = {};
                i.images = Array.from(e.querySelectorAll(".portfolio-index-background-image-container")), i.links = Array.from(e.querySelectorAll(".portfolio-index-background-link"));
                var a, u, l = i.images.map((function (e) {
                    return new Xs(e)
                })), d = {activeIndex: null, windowSize: [0, 0]}, f = function () {
                    return d.windowSize[0] > c.g.sm
                }, p = function () {
                    if (null === e.closest(".page-section").previousElementSibling) {
                        var t = "Full Bleed" === o.a.getValue("tweak-portfolio-index-background-width"),
                            r = document.querySelector(".header").getBoundingClientRect().height,
                            i = e.closest(".page-section").querySelector(".section-background"),
                            a = e.closest(".collection-type-portfolio-index-background");
                        t ? (n.style.top = "0", n.style.height = "100%", a.style.paddingTop = "0", a.style.height = "100%", i && (i.style.top = "")) : (n.style.top = "", n.style.height = "100%", i && (i.style.top = "".concat(r, "px")))
                    }
                }, h = (a = function () {
                    if (!f()) {
                        var t = e.getBoundingClientRect(), n = -t.top / (t.height - d.windowSize[1]),
                            r = Math.floor(n * l.length);
                        d.activeIndex = r
                    }
                    var a = o.a.getValue("tweak-portfolio-index-background-animation-type").toLowerCase().split(" ").join("-"),
                        s = Qs[o.a.getValue("tweak-portfolio-index-background-animation-duration")];
                    null !== d.activeIndex ? e.classList.add("is-active") : e.classList.remove("is-active"), l.forEach((function (e, t) {
                        t === d.activeIndex ? e.show(a, s) : e.hide(a, s)
                    })), i.links.forEach((function (e, t) {
                        t === d.activeIndex ? e.classList.add("is-active") : e.classList.remove("is-active")
                    }))
                }, u = !1, function () {
                    var e = arguments;
                    u || (u = !0, window.requestAnimationFrame((function () {
                        u = !1, a(e)
                    })))
                });
                o.a.watch(Ys, (function (e) {
                    "tweak-portfolio-index-background-width" === e.name && p(), l.forEach((function (e) {
                        e.load()
                    })), h()
                })), i.links.forEach((function (e, t) {
                    e.addEventListener("mouseenter", (function () {
                        d.activeIndex = t, h()
                    })), e.addEventListener("mouseleave", (function () {
                        d.activeIndex = null, h()
                    }))
                })), window.addEventListener("scroll", (function () {
                    h()
                }));
                var m = function () {
                    p(), d.windowSize = [window.innerWidth, window.innerHeight], l.forEach((function (e) {
                        e.load()
                    })), f() && (d.activeIndex = null), h()
                };
                return m(), {
                    destroy: function () {
                        n.style.top = "", t.style.alignSelf = "", s.a.off(m, c.e)
                    }
                }
            }, Js = function (e) {
                var t, n = function () {
                    i.a.loadAllLazy({load: !0, mode: "cover", useAdvancedPositioning: !0}, e)
                }, r = function t() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.classList.add("is-loaded");
                    var r = n.target;
                    r && r.removeEventListener("load", t)
                };
                return o.a.watch(["tweak-products-width", "tweak-products-gutter-column", "tweak-products-gutter-row", "tweak-products-columns", "tweak-products-image-aspect-ratio"], (function (e) {
                    n()
                })), (t = e.querySelectorAll("img")).length <= 0 && r(), t.forEach((function (e) {
                    e.addEventListener("load", r)
                })), n(), s.a.on(n, c.e), {
                    destroy: function () {
                        s.a.off(n)
                    }
                }
            }, Ks = (n(104), n(233)), $s = function (e, t) {
                var n = e.querySelector(".product-variants");
                n && n.addEventListener("variant:change", (function (e) {
                    var n = e.detail.selectedVariant.mainImageId, r = t.state.currentSlideIndex;
                    if (n) {
                        var i = o.a.getValue("tweak-product-basic-item-gallery-design"),
                            a = Array.from(t.state.slides).find((function (e) {
                                return e.dataset.imageId === n
                            })), s = parseInt(a.dataset.slideIndex, 10) - 1;
                        if ("Stacked" !== i || E()) r !== s && (t.galleryNode.classList.add("enable-slide-animations"), t.setCurrentSlideIndex(s, t.state.currentSlideIndex > s)); else {
                            var c = document.body.scrollTop + document.documentElement.scrollTop + a.getBoundingClientRect().top;
                            Object(Ks.scrollTo)(document.documentElement, c, {minDuration: 350, maxDuration: 550})
                        }
                        if ("full-width-carousel" === t.layout && t.prevButton) {
                            var u = a.dataset.slideTransition;
                            t.state.transition = -50 * u, t.slideshow.style.transform = "translateX(".concat(t.state.transition, "%)"), t.prevButton.disabled = !1, t.nextButton.disabled = !1, t.state.clickCount = u, 0 === parseInt(u, 10) && (t.prevButton.disabled = !0, t.state.clickCount = 0), parseInt(u, 10) >= t.state.totalTransition && (t.nextButton.disabled = !0, t.state.clickCount = t.state.totalSlideClicks)
                        }
                    }
                }))
            }, ec = function (e) {
                var t = window.matchMedia("(max-width: ".concat(c.g[e] - 1, "px)"));
                return t && t.matches
            };

        function tc(e) {
            return (tc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function nc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function rc(e, t) {
            return (rc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function oc(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = sc(e);
                if (t) {
                    var o = sc(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return ic(this, n)
            }
        }

        function ic(e, t) {
            return !t || "object" !== tc(t) && "function" != typeof t ? ac(e) : t
        }

        function ac(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function sc(e) {
            return (sc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function cc(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var uc = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && rc(e, t)
            }(c, e);
            var t, n, r, a = oc(c);

            function c(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, c), cc(ac(t = a.call(this)), "onTweakSync", (function (e) {
                    "tweak-product-basic-item-click-action" !== e.name || "Lightbox" !== e.value ? "tweak-product-basic-item-click-action" !== e.name ? t.loadImages() : t.unbindLightboxListeners() : t.bindLightboxListeners()
                })), cc(ac(t), "openLightbox", (function (e) {
                    if (t.isLightboxEnabled()) {
                        var n = e.target.closest('[data-product-gallery="slides-item"]'),
                            r = Array.from(t.state.slides).indexOf(n);
                        if (-1 !== r) {
                            var o = t.state.slides[r].dataset.slideUrl, i = t.state, a = i.isHistoryEnabled,
                                s = i.collectionFullUrl;
                            if (a && o) {
                                var c = s.replace(/^\/+(?! )/, "");
                                e.preventDefault(), history.pushState({}, "", "".concat(c, "/?itemId=").concat(o))
                            }
                        }
                    }
                })), cc(ac(t), "bindLightboxListeners", (function () {
                    t.state.slides.forEach((function (e) {
                        e.addEventListener("click", t.openLightbox)
                    }))
                })), cc(ac(t), "unbindLightboxListeners", (function () {
                    t.state.slides.forEach((function (e) {
                        e.removeEventListener("click", t.openLightbox)
                    }))
                })), cc(ac(t), "bindListeners", (function () {
                    document.addEventListener("keydown", t.onKeypress), t.prevButton && t.prevButton.addEventListener("click", t.onPreviousSlide), t.nextButton && t.nextButton.addEventListener("click", t.onNextSlide), t.thumbnails.forEach((function (e) {
                        return e.addEventListener("click", t.onClickThumbnail)
                    }))
                })), cc(ac(t), "unbindListeners", (function () {
                    document.removeEventListener("keypress", t.onKeypress), t.prevButton && t.prevButton.removeEventListener("click", t.onPreviousSlide), t.nextButton && t.nextButton.removeEventListener("click", t.onNextSlide), t.thumbnails.forEach((function (e) {
                        return e.removeEventListener("click", t.onClickThumbnail)
                    }))
                })), cc(ac(t), "onKeypress", (function (e) {
                    37 === e.keyCode ? t.onPreviousSlide() : 39 === e.keyCode && t.onNextSlide()
                })), cc(ac(t), "onImageLoaded", (function (e) {
                    var n = e.currentTarget.parentNode;
                    n.classList.add("loaded"), "1" === n.dataset.slideIndex && t.onFirstImageLoaded()
                })), cc(ac(t), "onFirstImageLoaded", (function () {
                    Array.from(t.node.querySelectorAll("[data-first-img-load]")).forEach((function (e) {
                        e.classList.add("enabled")
                    }))
                })), cc(ac(t), "getImageMode", (function () {
                    if (E()) return "fill";
                    switch (o.a.getValue("tweak-product-basic-item-gallery-design")) {
                        case"Carousel":
                            return "contain";
                        case"Slideshow":
                            return "fill";
                        default:
                            return "none"
                    }
                })), cc(ac(t), "loadImages", (function () {
                    var e = t.getImageMode(), n = 0;
                    Array.from(t.galleryNode.querySelectorAll("img")).forEach((function (r) {
                        r.onload = t.onImageLoaded, i.a.loadLazy(r, {load: !0, mode: e});
                        var o, a, s, c = r.dataset.imageDimensions, u = r.parentNode;
                        u.dataset.slideTransition = n, t.state.totalTransition = n, n += 1, c && (s = c.split("x"), o = parseInt(s[0], 10), a = parseInt(s[1], 10), o > a) && (u.dataset.landscape = !0, n += 1)
                    }));
                    var r = t.galleryNode.querySelector(".selected");
                    if ("full-width-carousel" === t.layout && t.prevButton) if (ec("sm")) t.prevButton.disabled = !1, t.nextButton.disabled = !1; else if (r) {
                        var o = parseInt(r.dataset.slideTransition, 10);
                        0 === o && (t.prevButton.disabled = !0, t.nextButton.disabled = !1), o >= t.state.totalTransition && (t.prevButton.disabled = !1, t.nextButton.disabled = !0)
                    }
                })), cc(ac(t), "refreshSlideStyles", (function (e) {
                    var n = t.state, r = n.currentSlideIndex, o = n.totalSlides, i = n.prevSlideIndex, a = o - 1;
                    Array.from(t.node.querySelectorAll('[data-product-gallery="slides-item"]')).forEach((function (n, s) {
                        if (i === s || r === s) {
                            var c = s <= r - 1 || 0 === r && s === a, u = s >= r + 1 || r === a && 0 === s;
                            n.classList.toggle("prev-slide", o > 1 && c), n.classList.toggle("next-slide", o > 1 && u), n.classList.toggle("selected", s === r), n.classList.toggle("going-prev", e), n.classList.toggle("going-next", !e), t.setHiddenAttribute(s)
                        }
                    }))
                })), cc(ac(t), "onClickThumbnail", (function (e) {
                    var n = e.currentTarget, r = Array.from(n.parentNode.children), o = r.indexOf(n);
                    t.setCurrentSlideIndex(o), t.setCurrentAttribute(o, r)
                })), cc(ac(t), "onPreviousSlide", (function () {
                    t.galleryNode.classList.add("enable-slide-animations");
                    var e = t.state, n = e.currentSlideIndex, r = e.lastSlideChangeTime, o = e.totalSlides,
                        i = Date.now();
                    if (r + 400 <= i) {
                        var a = 0 === n ? o - 1 : n - 1;
                        t.setState({lastSlideChangeTime: i}), t.setCurrentSlideIndex(a, !0)
                    }
                    "full-width-carousel" !== t.layout || ec("sm") || !t.prevButton || t.prevButton.disabled || (t.prevButton.disabled = !1, t.nextButton.disabled = !1, t.state.transition = t.state.transition + 50, t.slideshow.style.transform = "translateX(".concat(t.state.transition, "%)"), 0 === t.state.transition && (t.prevButton.disabled = !0))
                })), cc(ac(t), "onNextSlide", (function () {
                    t.galleryNode.classList.add("enable-slide-animations");
                    var e = t.state, n = e.currentSlideIndex, r = e.lastSlideChangeTime, o = e.totalSlides,
                        i = Date.now(), a = t.galleryNode.querySelector(".selected");
                    r + 400 <= i && (t.setState({lastSlideChangeTime: i}), t.setCurrentSlideIndex(n === o - 1 ? 0 : n + 1)), "full-width-carousel" !== t.layout || ec("sm") || !t.nextButton || t.nextButton.disabled || (t.prevButton.disabled = !1, t.nextButton.disabled = !1, t.state.transition = t.state.transition - 50, t.slideshow.style.transform = "translateX(".concat(t.state.transition, "%)"), parseInt(a.dataset.slideTransition, 10) >= t.state.totalTransition - 1 && (t.nextButton.disabled = !0))
                })), cc(ac(t), "refreshSlideIndicator", (function () {
                    var e = t.state, n = e.totalSlides, r = e.currentSlideIndex,
                        o = t.node.querySelector('[data-product-gallery="indicator"]');
                    n > 1 && o && (o.textContent = "".concat(r + 1, " / ").concat(n))
                })), cc(ac(t), "setCurrentSlideIndex", (function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    t.setState({
                        currentSlideIndex: e,
                        prevSlideIndex: t.state.currentSlideIndex
                    }), t.refreshSlideIndicator(), t.refreshSlideStyles(n)
                })), cc(ac(t), "setCurrentAttribute", (function (e, t) {
                    t.forEach((function (t, n) {
                        t.setAttribute("aria-current", e === n ? "true" : "false")
                    }))
                })), cc(ac(t), "setHiddenAttribute", (function () {
                    var e = t.state, n = e.slides, r = e.currentSlideIndex;
                    n.forEach((function (e, t) {
                        t === r ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", "true")
                    }))
                })), cc(ac(t), "destroy", (function () {
                    t.swipe && (t.swipe.destroy(), s.a.off(t.loadImages)), t.unbindListeners()
                })), t.node = e, t.galleryNode = e.querySelector('[data-product-gallery="container"]'), t.layout = e.dataset.layout, t.slideshow = e.querySelector('[data-product-gallery="slideshow"]'), t.thumbnails = Array.from(t.node.querySelectorAll('[data-product-gallery="thumbnails-item"]')), t.prevButton = e.querySelector('[data-product-gallery="prev"]'), t.nextButton = e.querySelector('[data-product-gallery="next"]');
                var n = I(window, "Static.SQUARESPACE_CONTEXT.collection.fullUrl", null),
                    r = "enabled_for_blogs_and_pages" === I(window, "Static.SQUARESPACE_CONTEXT.websiteSettings.pinterestOverlayOptions.mode", null);
                t.history = V();
                var u = t.node.querySelectorAll('[data-product-gallery="slides-item"]');
                t.state = {
                    lastSlideChangeTime: 0,
                    slides: u,
                    totalSlides: u.length,
                    collectionFullUrl: n,
                    isHistoryEnabled: n && t.history,
                    transition: 0,
                    totalTransition: 0
                };
                if (o.a.watch(["tweak-product-basic-item-gallery-aspect-ratio", "tweak-product-basic-item-gallery-design", "tweak-product-basic-item-gallery-width", "tweak-product-basic-item-width", "tweak-product-basic-item-thumbnail-placement", "tweak-product-basic-item-click-action"], t.onTweakSync), u.length > 0) {
                    s.a.on(t.loadImages), t.loadImages();
                    var l = t.node.querySelector('[data-product-gallery="slides"]');
                    t.swipe = new he({
                        axis: "x",
                        node: l,
                        onSwipeRight: t.onPreviousSlide,
                        onSwipeLeft: t.onNextSlide,
                        preventScroll: !1
                    }), t.setCurrentSlideIndex(0), $s(t.node, ac(t)), t.thumbnails && t.setCurrentAttribute(0, t.thumbnails), t.setHiddenAttribute(0), r && u.forEach((function (e) {
                        return e.classList.add("sqs-pinterest-products-wrapper")
                    }))
                }
                return t.bindListeners(), t.isLightboxEnabled() && t.bindLightboxListeners(), t
            }

            return t = c, (n = [{
                key: "isLightboxEnabled", value: function () {
                    return "Lightbox" === o.a.getValue("tweak-product-basic-item-click-action")
                }
            }]) && nc(t.prototype, n), r && nc(t, r), c
        }(l.a);

        function lc(e) {
            return (lc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function dc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function fc(e, t) {
            return (fc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function pc(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = yc(e);
                if (t) {
                    var o = yc(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return hc(this, n)
            }
        }

        function hc(e, t) {
            return !t || "object" !== lc(t) && "function" != typeof t ? mc(e) : t
        }

        function mc(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function yc(e) {
            return (yc = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        var gc = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && fc(e, t)
            }(i, e);
            var t, n, r, o = pc(i);

            function i(e) {
                var t, n, r, a;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), t = o.call(this), n = mc(t), a = function () {
                    t.variants.forEach((function (e, n) {
                        e.removeEventListener("change", t.changeEvents[n])
                    }))
                }, (r = "destroy") in n ? Object.defineProperty(n, r, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[r] = a, t.changeEvents = [], t.node = e, t.variants = t.node.querySelectorAll(".variant-option"), t.variants.forEach((function (e) {
                    var n = e.querySelector(".variant-select-wrapper"), r = e.querySelector("select"),
                        o = r.querySelector("option").innerText;
                    n.setAttribute("data-text", o);
                    var i = t.createChangeCallback(n, r, o);
                    t.changeEvents.push(i), e.addEventListener("change", i)
                })), t
            }

            return t = i, (n = [{
                key: "createChangeCallback", value: function (e, t, n) {
                    return function () {
                        e.setAttribute("data-text", t.value || n)
                    }
                }
            }]) && dc(t.prototype, n), r && dc(t, r), i
        }(l.a);

        function vc(e) {
            return (vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function bc(e, t) {
            return (bc = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function wc(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Ac(e);
                if (t) {
                    var o = Ac(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Sc(this, n)
            }
        }

        function Sc(e, t) {
            return !t || "object" !== vc(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function Ac(e) {
            return (Ac = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        var Oc = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && bc(e, t)
            }(n, e);
            var t = wc(n);

            function n(e) {
                var r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), r = t.call(this), e.querySelector(".sqs-add-to-cart-button").classList.remove("sqs-editable-button"), r
            }

            return n
        }(l.a);

        function xc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var kc = I(window, "Static.SQUARESPACE_CONTEXT.betaFeatureFlags", []).includes("seven_one_image_overlay_opacity"),
            Pc = function () {
                function e(t) {
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.node = t, this.imageOverlayOpacityValue = this.node.getAttribute("data-image-overlay-opacity"), this.applyOverlay()
                }

                var t, n, r;
                return t = e, (n = [{
                    key: "applyOverlay", value: function () {
                        !kc && window.isNaN(this.imageOverlayOpacityValue) || (this.node.style.opacity = this.imageOverlayOpacityValue)
                    }
                }]) && xc(t.prototype, n), r && xc(t, r), e
            }();

        function Ec(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var Tc = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.workFn = t, this.pending = !1, this.samples = [], this.lastCompleteExecution = null, this.sampledAverageExecution = null, this.pendingDowntime = null
            }

            var t, n, r;
            return t = e, (n = [{
                key: "invoke", value: function () {
                    var e = this, t = this.lastCompleteExecution, n = this.sampledAverageExecution;
                    if (!this.pending) {
                        if (null !== t && null !== n) {
                            var r = Date.now() - t, o = 2 * n;
                            if (r < o) {
                                var i = o - r;
                                return this.pendingDowntime ? void 0 : void (this.pendingDowntime = setTimeout((function () {
                                    e.invoke(), e.pendingDowntime = null
                                }), i))
                            }
                        }
                        this.doWork()
                    }
                }
            }, {
                key: "doWork", value: function () {
                    var e = Date.now();
                    this.pending = !0;
                    try {
                        this.workFn()
                    } catch (e) {
                        console.error(e)
                    }
                    this.lastCompleteExecution = Date.now();
                    var t = this.lastCompleteExecution - e;
                    this.pending = !1;
                    var n = this.samples;
                    n.unshift(t), n.length > 22 && (this.samples = n = n.slice(0, 22)), this.sampledAverageExecution = n.reduce((function (e, t) {
                        return e + t
                    }), 0) / n.length
                }
            }]) && Ec(t.prototype, n), r && Ec(t, r), e
        }();
        var jc = function (e) {
            var t = new Tc(e);
            return function () {
                return t.invoke()
            }
        };

        function Ic(e) {
            return function (e) {
                if (Array.isArray(e)) return Lc(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Lc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Lc(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Lc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        var Cc = function (e) {
            return "collection-type-".concat(e)
        }, Rc = Object.values(c.d).map(Cc);

        function _c(e, t, n) {
            !function (e, t) {
                t.forEach((function (t) {
                    "string" == typeof t && e.classList.remove(t)
                }))
            }(e, t), n && e.classList.add(n)
        }

        function Dc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Mc(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Fc = {
                backgroundWidth: ["background-width--full-bleed", "background-width--inset"],
                contentWidth: ["content-width--narrow", "content-width--medium", "content-width--wide"],
                sectionHeight: ["section-height--small", "section-height--medium", "section-height--large"],
                horizontalAlignment: ["horizontal-alignment--left", "horizontal-alignment--center", "horizontal-alignment--right"],
                verticalAlignment: ["vertical-alignment--top", "vertical-alignment--middle", "vertical-alignment--bottom"]
            },
            Bc = ["contentWidth", "customContentWidth", "customSectionHeight", "imageOverlayOpacity"].concat(Object.keys(Fc)),
            zc = !1, Nc = !1, Wc = !1, qc = function () {
                function e(t) {
                    var n = this;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), Mc(this, "loadBackgroundImage", (function () {
                        null !== n.ref.backgroundImage && i.a.loadLazy(n.ref.backgroundImage, {
                            load: !0,
                            mode: "cover",
                            useAdvancedPositioning: !0
                        })
                    })), Mc(this, "onSectionTweak", (function (e) {
                        n.isMainContentSection && e.typeName && e.typeName.indexOf("blog-") > -1 && function (e) {
                            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
                            (t = n.classList).remove.apply(t, Ic(Rc)), e && n.classList.add(Cc(e))
                        }(e.typeName);
                        var t = e.styles, r = Object.keys(t).filter((function (e) {
                            return n.currentStyles[e] !== t[e]
                        }));
                        if (0 === r.length) return !1;
                        if (t.contentWidth === n.currentStyles.contentWidth && t.customContentWidth === n.currentStyles.customContentWidth || (Wc = !0), t.imageOverlayOpacity !== n.currentStyles.imageOverlayOpacity) {
                            var i = n.node.querySelector(".section-background-overlay");
                            i && (i.style.opacity = t.imageOverlayOpacity)
                        }
                        "section-height--custom" === t.sectionHeight && (zc = !0), t.verticalAlignment !== n.currentStyles.verticalAlignment && (Nc = !0), n.currentStyles = t;
                        var a = "true" === o.a.getValue("tweak-transparent-header");
                        if (n.isFirstSection && a) {
                            var s = document.querySelector(".header");
                            if (!n.node.classList.contains(c.c) && r.includes("sectionTheme")) {
                                var u = t.sectionTheme;
                                _c(s, c.j, u)
                            }
                            if (r.includes("backgroundWidth")) {
                                if (t.backgroundWidth === c.b) {
                                    var l = n.currentStyles.sectionTheme;
                                    _c(s, c.j, l)
                                }
                                t.backgroundWidth === c.c && _c(s, c.j)
                            }
                        }
                        return !!r.find((function (e) {
                            return Bc.includes(e)
                        })) && (n.throttledRenderStyles(), !0)
                    })), Mc(this, "destroy", (function () {
                        M.disconnect(n.sectionId, n.boundSectionTweak), s.a.off(n.loadBackgroundImage)
                    })), this.node = t, this.sectionId = this.node.getAttribute("data-section-id"), this.isMainContentSection = this.node.classList.contains("content-collection"), this.currentStyles = JSON.parse(this.node.getAttribute("data-current-styles")), this.isFirstSection = null === this.node.previousElementSibling, this.boundSectionTweak = this.onSectionTweak.bind(this), this.throttledRenderStyles = jc((function () {
                        return n.renderStyles()
                    })), M.watch(this.sectionId, this.boundSectionTweak), this.viewportWatcher = new We.a, this.viewportWatcher.addNodes({
                        nodes: this.node,
                        range: [100, 0],
                        callbacks: {
                            onEnter: function () {
                                n.node.dataset.active = !0
                            }
                        }
                    }), this.ref = {backgroundImage: this.node.querySelector(".section-background img")}, s.a.on(this.loadBackgroundImage, c.e), this.loadBackgroundImage()
                }

                var t, n, r;
                return t = e, (n = [{
                    key: "removeClassesAndApplyNewValue", value: function (e, t, n, r) {
                        var o = this;
                        e.forEach((function (e) {
                            return o.node.classList.remove(e)
                        })), e.includes(t) ? (this.node.classList.add(t), r && r(t)) : n && n(t)
                    }
                }, {
                    key: "applySectionHeight", value: function (e, t) {
                        if ("string" != typeof t) {
                            var n = this.node.querySelector(".content-wrapper");
                            this.node.style.minHeight = "".concat(t, "vh"), "vertical-alignment--top" === e ? (n.style.paddingTop = "", n.style.paddingBottom = "calc(".concat(t, "vmax / 5)")) : "vertical-alignment--bottom" === e ? (n.style.paddingTop = "calc(".concat(t, "vmax / 5)"), n.style.paddingBottom = "") : (n.style.paddingTop = "calc(".concat(t, "vmax / 10)"), n.style.paddingBottom = "calc(".concat(t, "vmax / 10)"))
                        }
                    }
                }, {
                    key: "renderStyles", value: function () {
                        var e = this, t = this.currentStyles;
                        this.removeClassesAndApplyNewValue(Fc.backgroundWidth, t.backgroundWidth), this.removeClassesAndApplyNewValue(Fc.horizontalAlignment, t.horizontalAlignment), this.removeClassesAndApplyNewValue(Fc.verticalAlignment, t.verticalAlignment);
                        var n = this.node.querySelector(".content-wrapper"), r = n.querySelector(".content");
                        zc || Nc ? this.applySectionHeight(t.verticalAlignment, t.customSectionHeight) : (n.style.paddingTop = "", n.style.paddingBottom = "", this.node.style.minHeight = ""), this.removeClassesAndApplyNewValue(Fc.sectionHeight, t.sectionHeight, (function (n) {
                            e.applySectionHeight(t.verticalAlignment, n)
                        }), (function () {
                            n.style.paddingTop = "", n.style.paddingBottom = "", e.node.style.minHeight = ""
                        })), Wc && !this.isMainContentSection && this.removeClassesAndApplyNewValue(Fc.contentWidth, t.contentWidth, (function () {
                            r.style.width = "".concat(t.customContentWidth, "%")
                        }), (function () {
                            r.style.width = ""
                        })), window.Y.one(window.Y.config.win).simulate("resize")
                    }
                }]) && Dc(t.prototype, n), r && Dc(t, r), e
            }();
        n(79), n(372), n(375), n(377), n(378);

        function Uc(e) {
            return (Uc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        var Hc = function e(t, n) {
            if (t === n) return !0;
            if (Uc(t) !== Uc(n) || "object" !== Uc(t) || null === t || null === n) return !1;
            var r = Object.keys(t), o = Object.keys(n);
            if (r.length !== o.length || r.find((function (e) {
                return o.indexOf(e) < 0
            }))) return !1;
            for (var i in t) if (!e(t[i], n[i])) return !1;
            return !0
        };

        function Vc(e) {
            return (Vc = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Gc(e) {
            return e && e.constructor && "Object" === e.constructor.name
        }

        function Yc(e, t) {
            return !e && !t || Array.isArray(e) && Array.isArray(t) || Gc(e) && Gc(t) || "string" == typeof e && "string" == typeof t || !isNaN(e) && !isNaN(t)
        }

        function Qc(e) {
            var t = e.newPointer, n = e.oldPointer, r = new Set;
            return t.forEach((function (e) {
                n.includes(e) || r.add(e)
            })), Array.isArray(n) && n.forEach((function (e) {
                t.includes(e) || r.add(e)
            })), Array.from(r)
        }

        var Xc = function e(t, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            if ("object" !== Vc(t) || "object" !== Vc(n)) throw new Error("".concat(e.name, " parameters must be Arrays or Objects, received: ").concat(t, " and ").concat(n));
            if (!Hc(t, n)) {
                if (Array.isArray(t) && Array.isArray(n)) return Qc({newPointer: t, oldPointer: n});
                var o = Object.keys(t), i = o.map((function (o) {
                    var i = t[o], a = n[o];
                    if (!Yc(i, a)) return "".concat(r).concat(o);
                    if (Gc(i) && Gc(a)) return e(i, a, "".concat(r).concat(o, "."));
                    if (Array.isArray(i)) {
                        if (Hc(i, a)) return null;
                        var s = Qc({newPointer: i, oldPointer: a});
                        return "".concat(r).concat(o, "[").concat(s, "]")
                    }
                    return Hc(i, a) ? null : "".concat(r).concat(o)
                })).filter((function (e) {
                    return !!e
                })), a = Qc({newPointer: Object.keys(t), oldPointer: Object.keys(n)});
                return a.forEach((function (e) {
                    i.includes("".concat(r).concat(e)) || i.push("".concat(r).concat(e))
                })), i.flat()
            }
            return []
        };

        function Zc(e, t) {
            return function (e) {
                if (Array.isArray(e)) return e
            }(e) || function (e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                var n = [], r = !0, o = !1, i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0) ;
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }(e, t) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return Jc(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Jc(e, t)
            }(e, t) || function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function Jc(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function Kc(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function $c(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var eu = function () {
            function e(t) {
                var n = this;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), $c(this, "updateRef", (function () {
                    return {
                        imageOuterWrapper: n.node.querySelector(".ImageAndText__image-outer-wrapper"),
                        imageInnerWrapper: n.node.querySelector(".ImageAndText__image-inner-wrapper"),
                        image: n.node.querySelector(".ImageAndText__image"),
                        textOuterWrapper: n.node.querySelector(".ImageAndText__text-outer-wrapper"),
                        headline: n.node.querySelector(".ImageAndText__headline"),
                        subheadline: n.node.querySelector(".ImageAndText__subheadline"),
                        buttonOuterWrapper: n.node.querySelector(".ImageAndText__button-link-outer-wrapper"),
                        button: n.node.querySelector(".ImageAndText__button-link")
                    }
                })), $c(this, "getStateFromDOM", (function () {
                    var e = JSON.parse(n.node.dataset.currentContext);
                    try {
                        e.imageId = e.image.id, delete e.image
                    } catch (e) {
                        console.warn("No image present, ".concat(e))
                    }
                    return e.styles && e.styles.backgroundImage && e.styles.backgroundImage.id && (e.backgroundImageId = e.styles.backgroundImage.id, delete e.styles.backgroundImage), e
                })), $c(this, "updateStateFromContext", (function (e) {
                    var t = Object.assign({}, n.state);
                    return t.headline = e.headline, t.subheadline = e.subheadline, t.imageId = e.imageId, t.linkType = e.link.linkType, t.linkUrl = e.link.linkUrl, t.linkText = e.link.linkText, t.linkNewWindow = e.link.linkNewWindow, t.imageAndTextOptions = e.imageAndTextOptions, t.styles = e.styles, t
                })), $c(this, "bindListeners", (function () {
                    n.ref.image && n.ref.image.addEventListener("load", n.addImageLoadClassOnce, {once: !0}), s.a.on(n.loadImage, c.e), M.watch(n.state.id, n.onSectionTweak)
                })), $c(this, "addImageLoadClassOnce", (function (e) {
                    e.target.classList.add("ImageAndText__image--loaded"), e.target.removeEventListener(e.type, n.addImageLoadClassOnce)
                })), $c(this, "loadImage", (function () {
                    null !== n.ref.image && i.a.loadLazy(n.ref.image, {load: !0, useAdvancedPositioning: !0})
                })), $c(this, "onSectionTweak", (function (e) {
                    var t = {
                        headline: n.state.headline,
                        subheadline: n.state.subheadline,
                        imageId: n.state.imageId,
                        mediaFocalPoint: n.state.mediaFocalPoint,
                        link: {
                            linkType: n.state.linkType,
                            linkUrl: n.state.linkUrl,
                            linkText: n.state.linkText,
                            linkNewWindow: n.state.linkNewWindow
                        },
                        backgroundImageId: n.state.backgroundImageId
                    }, r = {
                        headline: e.headline,
                        subheadline: e.subheadline,
                        imageId: e.imageId,
                        mediaFocalPoint: e.mediaFocalPoint,
                        link: e.link,
                        backgroundImageId: e.backgroundImageId
                    }, o = Xc(r, t);
                    if (n.shouldContentChangeUpdateDOM(o, t, r)) return !1;
                    var i = Object.assign({}, n.state.imageAndTextOptions),
                        a = Object.assign({}, e.imageAndTextOptions), s = Xc(a, i);
                    if (n.shouldOptionChangeUpdateDOM(s)) return !1;
                    var c = Object.assign({}, n.state.styles), u = Object.assign({}, e.styles);
                    return delete c.video, delete u.video, !(Xc(c, u).length > 0) && (n.handleContentUpdate(o, r), n.handleOptionsUpdate(s, e.imageAndTextOptions), n.ref = n.updateRef(), n.state = n.updateStateFromContext(e), !0)
                })), $c(this, "handleContentUpdate", (function (e, t) {
                    if (e.includes("headline") && n.ref.headline && (n.ref.headline.innerText = t.headline), e.includes("subheadline") && n.ref.subheadline && (n.ref.subheadline.querySelector(".ImageAndText__subheadline_text").innerText = t.subheadline), e.includes("link.linkText") && n.ref.button && (n.ref.button.innerText = t.link.linkText), e.includes("link.linkUrl") && n.ref.button && (n.ref.button.href = t.link.linkUrl), e.includes("link.linkNewWindow") && n.ref.button && n.ref.button.setAttribute("target", t.link.linkNewWindow ? "_blank" : "_self"), e.includes("mediaFocalPoint.x") || e.includes("mediaFocalPoint.y")) {
                        var r = t.mediaFocalPoint, o = r.x, a = r.y;
                        i.a.load(n.ref.image, {
                            load: !0,
                            forceImageUpdate: !0,
                            useAdvancedPositioning: !0,
                            focalPoint: {x: o, y: a}
                        }), n.ref.image.dataset.imageFocalPoint = "".concat(o, ",").concat(a)
                    }
                })), $c(this, "handleOptionsUpdate", (function (e, t) {
                    if (e.includes("textWidth") && n.setTextWidths(t), e.includes("textPositionVertical") && (n.ref.textOuterWrapper.dataset.positionVertical = t.textPositionVertical), n.ref.headline && ((e.includes("headlineWidth.value") || e.includes("headlineWidth.unit")) && (n.ref.headline.style.width = "".concat(t.headlineWidth.value).concat(t.headlineWidth.unit)), e.includes("headlineTextAlignment") && (n.ref.headline.style.textAlign = t.headlineTextAlignment), e.includes("headlinePositionHorizontal") && (n.ref.headline.dataset.positionHorizontal = t.headlinePositionHorizontal), (e.includes("headlineBottomSpacing.value") || e.includes("headlineBottomSpacing.unit")) && (n.ref.headline.style.marginBottom = "".concat(t.headlineBottomSpacing.value).concat(t.headlineBottomSpacing.unit))), n.ref.subheadline && ((e.includes("subheadlineWidth.value") || e.includes("subheadlineWidth.unit")) && (n.ref.subheadline.style.width = "".concat(t.subheadlineWidth.value).concat(t.subheadlineWidth.unit)), e.includes("subheadlineTextAlignment") && (n.ref.subheadline.style.textAlign = t.subheadlineTextAlignment), e.includes("subheadlinePositionHorizontal") && (n.ref.subheadline.dataset.positionHorizontal = t.subheadlinePositionHorizontal)), (e.includes("subheadlineBottomSpacing.value") || e.includes("subheadlineBottomSpacing.unit")) && n.ref.buttonOuterWrapper && (n.ref.buttonOuterWrapper.style.marginTop = "".concat(t.subheadlineBottomSpacing.value).concat(t.subheadlineBottomSpacing.unit)), e.includes("imageAspectRatio") && n.ref.imageInnerWrapper && n.ref.image) {
                        if (n.ref.imageInnerWrapper.dataset.aspectRatio = t.imageAspectRatio, n.ref.image.dataset.mode = "original" === t.imageAspectRatio ? "none" : "cover", "original" === t.imageAspectRatio) {
                            n.ref.image.style.objectFit = "", n.ref.image.style.objectPosition = "";
                            var r = Zc(n.ref.image.dataset.imageDimensions.split("x"), 2), o = r[0], i = r[1];
                            n.ref.imageInnerWrapper.style.paddingBottom = "calc(".concat(i, " * 100% / ").concat(o, ")")
                        } else n.ref.imageInnerWrapper.style.paddingBottom = "";
                        n.loadImage()
                    }
                    n.ref.imageOuterWrapper && (e.includes("imageWidth") && (n.ref.imageOuterWrapper.style.width = "".concat(t.imageWidth, "%"), n.loadImage(), n.setTextWidths(t)), e.includes("imagePositionVertical") && (n.ref.imageOuterWrapper.dataset.positionVertical = t.imagePositionVertical)), e.includes("textCardEnabled") && (n.ref.textOuterWrapper.dataset.textCardEnabled = t.textCardEnabled, n.setCardLayout(t)), (e.includes("textCardPadding.value") || e.includes("textCardPadding.unit")) && n.setCardLayout(t), (e.includes("textCardOffsetVertical.value") || e.includes("textCardOffsetVertical.unit")) && (n.ref.textOuterWrapper.style.top = "".concat(t.textCardOffsetVertical.value).concat(t.textCardOffsetVertical.unit)), e.includes("equalContentHeightsEnabled") && (n.node.dataset.equalContentHeightsEnabled = t.equalContentHeightsEnabled), (e.includes("imageTextSpacing.value") || e.includes("imageTextSpacing.unit")) && n.setTextWidths(t)
                })), $c(this, "shouldContentChangeUpdateDOM", (function (e, t, n) {
                    return !(!e.includes("headline") || "" !== t.headline && "" !== n.headline) || (!(!e.includes("subheadline") || "" !== t.subheadline && "" !== n.subheadline) || !!(e.includes("imageId") || e.includes("link.linkType") || e.includes("backgroundImageId")))
                })), $c(this, "shouldOptionChangeUpdateDOM", (function (e) {
                    return !!(e.includes("layout") || e.includes("textPositionHorizontal") || e.includes("imagePositionHorizontal"))
                })), $c(this, "setTextWidths", (function (e) {
                    var t = "".concat(e.imageWidth, "%"), r = e.imageTextSpacing,
                        o = "".concat(e.textCardPadding.value, "%"), i = "".concat(e.textWidth, "%"),
                        a = e.headlineWidth, s = e.subheadlineWidth;
                    switch (e.layout) {
                        case"card":
                            i = "calc(100% - ".concat(t, " - ").concat(r.value).concat(r.unit, ")");
                            break;
                        case"collage":
                            i = "calc(100% - ".concat(t, " + (").concat(t, " * ").concat(r.value, " / 100))");
                            break;
                        case"overlap":
                            a = "calc(100% - ".concat(t, " + (").concat(t, " * ").concat(r.value, " / 100))"), s = "calc(100% - ".concat(t, " - ").concat(o, ")")
                    }
                    n.ref.textOuterWrapper.style.width = i, n.ref.headline && (n.ref.headline.style.width = a), n.ref.subheadline && (n.ref.subheadline.style.width = s)
                })), $c(this, "setCardLayout", (function (e) {
                    if ("overlap" === e.layout) n.setTextWidths(e); else {
                        var t = e.textCardEnabled ? "".concat(e.textCardPadding.value).concat(e.textCardPadding.unit) : "0";
                        n.ref.textOuterWrapper.style.padding = t
                    }
                })), $c(this, "destroy", (function () {
                    M.disconnect(n.sectionId, n.boundSectionTweak), s.a.off(n.loadImage)
                })), this.node = t, this.ref = this.updateRef(), this.state = this.getStateFromDOM(), this.bindListeners(), this.loadImage()
            }

            var t, n, r;
            return t = e, (n = [{
                key: "getRteConfigs", value: function () {
                    var e = [], t = this.node.querySelector(".ImageAndText__headline");
                    t && e.push({node: t, jsonPointer: "#/headline", type: "plaintext"});
                    var n = this.node.querySelector(".ImageAndText__subheadline_text");
                    n && e.push({node: n, jsonPointer: "#/subheadline", type: "richtext"});
                    var r = this.node.querySelector(".ImageAndText__button-link");
                    return r && e.push({node: r, jsonPointer: "#/link/linkText", type: "plaintext"}), e
                }
            }]) && Kc(t.prototype, n), r && Kc(t, r), e
        }(), tu = function () {
            console.warn("UserAccounts API not available")
        }, nu = {
            isUserAuthenticatedLoader: Object(R.a)().then((function () {
                var e = window.UserAccountApi;
                return e ? e.isUserAuthenticated : tu
            })), openAccountScreenLoader: Object(R.a)().then((function () {
                var e = window.UserAccountApi;
                return e ? e.openAccountScreen : tu
            }))
        }, ru = function (e) {
            var t = function (e) {
                e.preventDefault(), nu.openAccountScreenLoader.then((function (e) {
                    return e()
                }))
            };
            nu.isUserAuthenticatedLoader.then((function (n) {
                var r = n() ? ".unauth" : ".auth", o = e.querySelector(".user-accounts-text-link"),
                    i = o.querySelector(r);
                i && o.removeChild(i), e.classList.add("loaded"), e.querySelector(".user-accounts-text-link").addEventListener("click", t)
            }))
        }, ou = n(70);

        function iu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function au(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? iu(Object(n), !0).forEach((function (t) {
                    su(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : iu(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function su(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var cu = function e(t, n) {
            var r = this;
            !function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), su(this, "bindListeners", (function () {
                r.dragContainerNode.addEventListener("mousedown", r.onDragStart), r.dragContainerNode.addEventListener("mouseup", r.onDragEnd), r.dragContainerNode.addEventListener("mouseleave", r.onDragEnd), re.e && r.addTouchListeners()
            })), su(this, "unbindListeners", (function () {
                r.dragContainerNode.removeEventListener("mousedown", r.onDragStart), r.dragContainerNode.removeEventListener("mouseup", r.onDragEnd), r.dragContainerNode.removeEventListener("mouseleave", r.onDragEnd), re.e && r.removeTouchListeners()
            })), su(this, "addTouchListeners", (function () {
                r.dragContainerNode.addEventListener("touchstart", r.onDragStart, {passive: !0}), r.dragContainerNode.addEventListener("touchend", r.onDragEnd), r.dragContainerNode.addEventListener("touchcancel", r.onDragEnd), r.dragContainerNode.addEventListener("touchmove", r.onDragMove)
            })), su(this, "removeTouchListeners", (function () {
                r.dragContainerNode.removeEventListener("touchstart", r.onDragStart, {passive: !0}), r.dragContainerNode.removeEventListener("touchend", r.onDragEnd), r.dragContainerNode.removeEventListener("touchcancel", r.onDragEnd), r.dragContainerNode.removeEventListener("touchmove", r.onDragMove)
            })), su(this, "onDragStart", (function (e) {
                var t = !!e.target.closest("button, a"), n = "number" == typeof e.button && 0 !== e.button;
                if (!(t || n)) {
                    !!e.targetTouches || r.dragContainerNode.addEventListener("mousemove", r.onDragMove);
                    var o = Object(re.f)(e), i = o.clientX, a = o.clientY;
                    r.isDragging = !0, r.dragStartX = i, r.dragStartY = a, r.slideProgressAtDragStart = r.props.behaviors.pos.current, r.dragDirectionX = 0, r.dragAxis = null, r.hasUserCommittedToDirection = !1, r.dragContainerNode.style.cursor = "grabbing"
                }
            })), su(this, "onDragMove", (function (e) {
                if (r.isDragging) {
                    var t = Object(re.f)(e), n = t.clientX, o = t.clientY, i = !!e.targetTouches, a = n - r.dragStartX,
                        s = o - r.dragStartY;
                    if (!(n === r.previousDragPositionX && o === r.previousDragPositionY)) if (r.previousDragPositionX = n, r.previousDragPositionY = o, i && (r.dragAxis = r.determineDragAxis({
                        currentDragAxis: r.dragAxis,
                        absoluteDragDistanceX: Math.abs(a),
                        absoluteDragDistanceY: Math.abs(s)
                    }), "horizontal" !== r.dragAxis)) r.dragDirectionX = 0; else {
                        e.preventDefault();
                        var c = r.props.slideshowProps.slideDimensions.width, u = r.slideProgressAtDragStart - a / c;
                        r.dragDirectionX = r.getHorizontalDragDirection({
                            nextProgress: u,
                            currentProgress: r.props.slideshowProps.progress,
                            dragDistanceX: a,
                            currentDragDirection: r.dragDirectionX
                        }), r.props.slideshowProps.progress = u, r.props.behaviors.setIndex(r.props.slideshowProps.progress, {
                            isInstant: !0,
                            skipModulus: !0
                        }), r.props.slideshowProps.progressIndex = Math.floor(.5 + r.props.slideshowProps.progress + .49 * r.dragDirectionX)
                    }
                }
            })), su(this, "onDragEnd", (function (e) {
                if (r.isDragging) {
                    r.isDragging = !1, r.dragContainerNode.style.removeProperty("cursor"), !!e.targetTouches || r.dragContainerNode.removeEventListener("mousemove", r.onDragMove);
                    var t = r.props.slideshowProps.progress !== ~~r.props.slideshowProps.progress,
                        n = "horizontal" !== r.dragAxis && t;
                    ("horizontal" === r.dragAxis || n) && r.props.behaviors.setIndex(r.props.slideshowProps.progressIndex, {skipModulus: !0}), r.props.slideshowProps.progress = r.props.slideshowProps.progressIndex, r.props.slideshowProps.targetSlideIndex = r.props.slideshowProps.progressIndex, r.props.callback()
                }
            })), su(this, "determineDragAxis", (function (e) {
                var t = e.currentDragAxis, n = e.absoluteDragDistanceX, o = e.absoluteDragDistanceY;
                return r.hasUserCommittedToDirection ? t : (r.hasUserCommittedToDirection = n > r.minDragDistance || o > r.minDragDistance, n > 2 * o ? "horizontal" : "vertical")
            })), su(this, "getHorizontalDragDirection", (function (e) {
                var t = e.nextProgress, n = e.currentProgress, o = e.dragDistanceX, i = e.currentDragDirection,
                    a = t - n, s = a ? a / Math.abs(a) : i;
                return Math.abs(o) <= r.minDragDistance && (s = 0), s
            })), su(this, "destroy", (function () {
                r.unbindListeners()
            })), this.dragContainerNode = t, this.defaultProps = {
                slideshowProps: {
                    slideDimensions: {
                        width: 100,
                        height: 100
                    }, totalSlideCount: 0, progress: 0, progressIndex: 0, targetSlideIndex: 0
                }, behaviors: {}, callback: oe.a
            }, this.props = au(au({}, this.defaultProps), n), this.isDragging = !1, this.dragStartX = 0, this.slideProgressAtDragStart = 0, this.dragAxis = null, this.hasUserCommittedToDirection = !1, this.minDragDistance = 15, this.bindListeners()
        };

        function uu(e) {
            return function (e) {
                if (Array.isArray(e)) return lu(e)
            }(e) || function (e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function (e, t) {
                if (!e) return;
                if ("string" == typeof e) return lu(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return lu(e, t)
            }(e) || function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function lu(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
            return r
        }

        function du(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function fu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? du(Object(n), !0).forEach((function (t) {
                    pu(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : du(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function pu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function hu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        var mu = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.defaultProps = {
                    regionWidth: 800,
                    regionHeight: 600,
                    maxWidth: 800,
                    maxHeight: 600,
                    spacing: {value: 100, unit: "%"},
                    items: [],
                    isInfinite: !1,
                    onCloneItem: oe.a,
                    slideshowGutterWidth: 0
                }, this.props = fu(fu({}, this.defaultProps), t);
                var n = this.props, r = n.regionWidth, o = n.regionHeight, i = n.maxWidth, a = n.maxHeight;
                this.progress = 0, this.dimensions = {
                    regionWidth: r,
                    regionHeight: o,
                    maxWidth: Object(go.a)(i, 100, r),
                    maxHeight: Object(go.a)(a, 100, o)
                }, this.items = [], this.totalWidth = 0, this.setSize = this.setSize.bind(this), this.redraw(), this.refresh()
            }

            var t, n, r;
            return t = e, (n = [{
                key: "setSize", value: function (e) {
                    this.dimensions = fu(fu({}, this.dimensions), e);
                    var t = this.dimensions, n = t.regionWidth, r = t.regionHeight, o = t.maxWidth, i = t.maxHeight;
                    this.dimensions.maxWidth = Object(go.a)(o, 100, n), this.dimensions.maxHeight = Object(go.a)(i, 100, r), this.redraw(), this.refresh()
                }
            }, {
                key: "setProgress", value: function (e) {
                    this.progress = e, this.refresh()
                }
            }, {
                key: "update", value: function (e) {
                    this.props = fu(fu({}, this.props), e), this.redraw(), this.refresh()
                }
            }, {
                key: "redraw", value: function () {
                    var e = this.props, t = e.items, n = e.isInfinite, r = this.dimensions.regionWidth, o = t.length;
                    if (this.items = [], o) {
                        var i = this.getItems(t), a = i.totalWidth;
                        if (this.items = i.items, n) for (var s = i.minSpacing * o; a + s < 1.5 * r && a > 0 && r > 0;) {
                            var c;
                            i = this.getItems(t, {
                                startOffset: a,
                                isClone: !0
                            }), (c = this.items).push.apply(c, uu(i.items)), a = i.totalWidth
                        }
                        this.totalWidth = a, this.lerps = this.createLerps(this.items, a)
                    }
                }
            }, {
                key: "getItems", value: function (e) {
                    var t = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = n.startOffset, o = void 0 === r ? 0 : r, i = n.isClone, a = this.props.onCloneItem,
                        s = Number.MAX_VALUE, c = o, u = e.map((function (e, n) {
                            var r = t.getItemData(e, c);
                            return c += r.width, s = Math.min(s, r.spacing), i && a(n), r
                        }));
                    return {items: u, totalWidth: c, minSpacing: s}
                }
            }, {
                key: "getItemData", value: function (e, t) {
                    var n = this.dimensions.regionHeight, r = this.getContentSize(e), o = r.width, i = r.height;
                    return {
                        localX: t,
                        x: t,
                        y: .5 * n - .5 * i,
                        proximity: 0,
                        inViewport: !1,
                        width: o,
                        height: i,
                        spacing: this.getContentSpacing(o)
                    }
                }
            }, {
                key: "getContentSize", value: function (e) {
                    return {width: e.width, height: this.dimensions.maxHeight}
                }
            }, {
                key: "getContentSpacing", value: function (e) {
                    var t = this.props.spacing, n = this.dimensions.regionWidth;
                    return "%" === t.unit ? Math.round(t.value / 100 * n) : "vw" === t.unit ? Math.round(t.value / 100 * window.innerWidth) : "vh" === t.unit ? Math.round(t.value / 100 * window.innerHeight) : "vmin" === t.unit ? Math.round(t.value / 100 * Math.min(window.innerWidth, window.innerHeight)) : "vmax" === t.unit ? Math.round(t.value / 100 * Math.max(window.innerWidth, window.innerHeight)) : Math.round(t.value)
                }
            }, {
                key: "createLerps", value: function (e, t) {
                    var n = this.props.isInfinite, r = {
                        index: e.map((function (e, t) {
                            return t
                        })), position: e.map((function (e) {
                            return e.localX + .5 * e.width
                        })), spacing: e.map((function (e) {
                            return e.spacing
                        }))
                    };
                    return n && (r.index.push(r.index.length), r.position.push(t + .5 * e[0].width), r.spacing.push(e[0].spacing)), r
                }
            }, {
                key: "refresh", value: function () {
                    var e = this.props.isInfinite, t = this.dimensions.regionWidth, n = this.items.length;
                    if (n) for (var r = Object(vo.a)(this.progress, this.lerps.index), o = Object(vo.c)(r, this.lerps.index, this.lerps.position, this.progress), i = Object(vo.c)(r, this.lerps.index, this.lerps.spacing, this.progress), a = this.items[0].width / 2, s = 0, c = n; s < c; s += 1) {
                        var u = this.items[s], l = a + u.localX - (o + this.progress * i),
                            d = l + u.width < -this.props.slideshowGutterWidth, f = l >= t, p = s - this.progress;
                        e && d ? (p += n, l += this.totalWidth + i * n) : e && f && (p -= n, l -= this.totalWidth + i * n);
                        var h = l + u.width >= -this.props.slideshowGutterWidth && l < t;
                        u.x = h ? l : -9999, u.inViewport = h, u.proximity = p, a += i
                    }
                }
            }, {
                key: "destroy", value: function () {
                    delete this.dimensions, delete this.items
                }
            }]) && hu(t.prototype, n), r && hu(t, r), e
        }();

        function yu(e) {
            return (yu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function gu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function vu(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? gu(Object(n), !0).forEach((function (t) {
                    ku(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gu(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function bu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function wu(e, t) {
            return (wu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Su(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = xu(e);
                if (t) {
                    var o = xu(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Au(this, n)
            }
        }

        function Au(e, t) {
            return !t || "object" !== yu(t) && "function" != typeof t ? Ou(e) : t
        }

        function Ou(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function xu(e) {
            return (xu = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function ku(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Pu = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && wu(e, t)
            }(i, e);
            var t, n, r, o = Su(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), ku(Ou(t = o.call(this)), "getStateFromDOM", (function () {
                    var e = JSON.parse(t.node.dataset.currentContext), n = Object.assign({}, e);
                    return n.userItems.forEach((function (e, t) {
                        e.image && (e.imageId = e.image.id, delete e.image)
                    })), n
                })), ku(Ou(t), "updateRef", (function () {
                    var e = t.props, n = e.layoutContainerSelector, r = e.unorderedListSelector, o = e.imageSelector,
                        i = e.itemSelector, a = e.itemTitleSelector, s = e.itemDescriptionSelector,
                        c = e.itemButtonSelector, u = e.contentSelector, l = e.arrowLeftWrapperSelector,
                        d = e.arrowRightWrapperSelector, f = e.parentSectionSelector;
                    return {
                        layoutContainer: t.node.querySelector(n),
                        unorderedList: t.node.querySelector(r),
                        images: Array.from(t.node.querySelectorAll(o)),
                        userItems: Array.from(t.node.querySelectorAll(i)),
                        userItemsContent: Array.from(t.node.querySelectorAll(u)),
                        itemTitles: Array.from(t.node.querySelectorAll(a)),
                        itemDescriptions: Array.from(t.node.querySelectorAll(s)),
                        itemButtons: Array.from(t.node.querySelectorAll(c)),
                        arrowLeftWrapper: t.node.querySelector(l),
                        arrowRightWrapper: t.node.querySelector(d),
                        parentNode: t.node.closest(f)
                    }
                })), ku(Ou(t), "onSectionTweak", (function (e) {
                    var n = {
                        layout: e.userItemsListOptions.layout,
                        userItems: e.userItems,
                        styles: e.styles,
                        options: e.userItemsListOptions.bannerSlideshowOptions
                    };
                    n.userItems.forEach((function (e) {
                        e.button && (e.button.buttonLink && (e.buttonLink = e.button.buttonLink), e.button.buttonText && (e.buttonText = e.button.buttonText))
                    }));
                    var r = t.state.userItems.length !== n.userItems.length || t.state.layout !== n.layout;
                    if (r) return !1;
                    var o = t.state.userItems.map((function (e, t) {
                        return Xc(n.userItems[t], e)
                    }));
                    if (r = t.shouldContentChangeUpdateDOM(o, t.state.userItems, n.userItems)) return !1;
                    var i = Xc(n.options, t.state.options);
                    if (r = t.shouldOptionsChangeUpdateDOM(i, t.state.options, n.options)) return !1;
                    var a = Xc(n.styles, t.state.styles);
                    return !(r = t.shouldStylesChangeUpdateDOM(a, t.state.styles, n.styles)) && (t.handleContentUpdate(o, n.userItems), t.handleOptionsUpdate(i, n.options), t.handleStylesUpdate(a, n.styles), t.ref = t.updateRef(), t.setState(vu({}, n)), !0)
                })), ku(Ou(t), "shouldContentChangeUpdateDOM", (function (e, t, n) {
                    for (var r = !1, o = 0; o < e.length; o++) {
                        if (e[o].includes("imageId")) {
                            r = !0;
                            break
                        }
                        r = !1
                    }
                    return r
                })), ku(Ou(t), "shouldStylesChangeUpdateDOM", (function (e, t, n) {
                    return !!(e.includes("backgroundMode") || e.includes("backgroundWidth") || e.includes("imageOverlayOpacity") || e.includes("video") || e.includes("sectionAnimation") || e.includes("sectionHeight") || e.includes("customSectionHeight"))
                })), ku(Ou(t), "shouldOptionsChangeUpdateDOM", (function (e, t, n) {
                    return !!(e.includes("layoutWidth") || e.includes("mediaAspectRatio") || e.includes("contentOrder") || e.includes("titleFontSize") || e.includes("navigationControls") || e.includes("isInfiniteEnabled"))
                })), ku(Ou(t), "handleContentUpdate", (function (e, n) {
                    e.forEach((function (e, r) {
                        if (e.includes("title")) {
                            var o = t.ref.userItems[r].querySelector(t.props.itemTitleSelector);
                            o && (o.innerHTML = n[r].title)
                        }
                        if (e.includes("description")) {
                            var i = t.ref.userItems[r].querySelector(t.props.itemDescriptionSelector);
                            i && (i.innerHTML = n[r].description)
                        }
                        if (e.includes("buttonText")) {
                            var a = t.ref.userItems[r].querySelector(t.props.itemButtonSelector);
                            a && (a.innerHTML = n[r].buttonText)
                        }
                        if (e.includes("buttonLink")) {
                            var s = t.ref.userItems[r].querySelector(t.props.itemButtonSelector);
                            s && (s.href = n[r].buttonLink)
                        }
                    }))
                })), ku(Ou(t), "handleOptionsUpdate", (function (e, n) {
                    var r = t.state.options, o = !1;
                    if ((e.includes("titleAlignment") || e.includes("bodyAlignment") || e.includes("buttonAlignment")) && (t.node.dataset.titleAlignment = n.titleAlignment, t.node.dataset.bodyAlignment = n.bodyAlignment, t.node.dataset.buttonAlignment = n.buttonAlignment), e.includes("bodyFontSize") && t.ref.itemDescriptions.forEach((function (e) {
                        _c(e, Object.values(c.h), c.h[n.bodyFontSize])
                    })), e.includes("buttonFontSize") && t.ref.itemButtons.forEach((function (e) {
                        _c(e, Object.values(c.i), c.i[n.buttonFontSize])
                    })), e.includes("isAutoplayEnabled") && (t.node.dataset.isAutoplayEnabled = n.isAutoplayEnabled), e.includes("slideContentWidth") && t.ref.userItemsContent.forEach((function (e) {
                        var t = "".concat(n.slideContentWidth.value).concat(n.slideContentWidth.unit);
                        e.style.maxWidth = t
                    })), e.includes("bodyFontSize") && t.ref.itemDescriptions.forEach((function (e) {
                        _c(e, Object.values(c.h), c.h[n.bodyFontSize])
                    })), e.includes("buttonFontSize") && t.ref.itemButtons.forEach((function (e) {
                        _c(e, Object.values(c.i), c.i[n.buttonFontSize])
                    })), e.includes("isCardEnabled")) if (t.node.dataset.isCardEnabled = n.isCardEnabled, n.isCardEnabled) {
                        var i = "".concat(r.cardPaddingTop.value).concat(r.cardPaddingTop.unit),
                            a = "".concat(r.cardPaddingRight.value).concat(r.cardPaddingRight.unit),
                            s = "".concat(r.cardPaddingBottom.value).concat(r.cardPaddingBottom.unit),
                            u = "".concat(r.cardPaddingLeft.value).concat(r.cardPaddingLeft.unit);
                        t.ref.userItemsContent.forEach((function (e) {
                            e.style.paddingTop = i, e.style.paddingRight = a, e.style.paddingBottom = s, e.style.paddingLeft = u
                        }))
                    } else t.ref.userItemsContent.forEach((function (e) {
                        e.style.paddingTop = "", e.style.paddingRight = "", e.style.paddingBottom = "", e.style.paddingLeft = ""
                    }));
                    if (e.includes("cardPaddingTop.value") || e.includes("cardPaddingTop.unit") || e.includes("cardPaddingRight.value") || e.includes("cardPaddingRight.unit") || e.includes("cardPaddingBottom.value") || e.includes("cardPaddingBottom.unit") || e.includes("cardPaddingLeft.value") || e.includes("cardPaddingLeft.unit")) {
                        var l = "".concat(n.cardPaddingTop.value).concat(n.cardPaddingTop.unit),
                            d = "".concat(n.cardPaddingRight.value).concat(n.cardPaddingRight.unit),
                            f = "".concat(n.cardPaddingBottom.value).concat(n.cardPaddingBottom.unit),
                            p = "".concat(n.cardPaddingLeft.value).concat(n.cardPaddingLeft.unit);
                        t.ref.userItemsContent.forEach((function (e) {
                            e.style.paddingTop = l, e.style.paddingRight = d, e.style.paddingBottom = f, e.style.paddingLeft = p
                        }))
                    }
                    if (e.includes("navigationControls") && (t.node.dataset.navigationControls = n.navigationControls, "arrows" === n.navigationControls)) {
                        var h = "".concat(r.navigationOffset.value).concat(r.navigationOffset.unit);
                        t.ref.arrowLeftWrapper.style.left = h, t.ref.arrowRightWrapper.style.right = h
                    }
                    if (e.includes("navigationOffset.value") || e.includes("navigationOffset.unit")) {
                        var m = "".concat(n.navigationOffset.value).concat(n.navigationOffset.unit);
                        t.ref.arrowLeftWrapper.style.marginLeft = m, t.ref.arrowRightWrapper.style.marginRight = m
                    }
                    if (e.includes("isShowAdjacentSlides") && (t.node.dataset.showAdjacentSlides = n.isShowAdjacentSlides, o = !0), e.includes("verticalPaddingTop.value") || e.includes("verticalPaddingTop.unit") || e.includes("verticalPaddingBottom.value") || e.includes("verticalPaddingBottom.unit")) {
                        var y = "".concat(n.verticalPaddingTop.value).concat(n.verticalPaddingTop.unit),
                            g = "".concat(n.verticalPaddingBottom.value).concat(n.verticalPaddingBottom.unit);
                        t.ref.layoutContainer.style.paddingTop = y, t.ref.layoutContainer.style.paddingBottom = g
                    }
                    if (e.includes("slideContentPaddingTop.value") || e.includes("slideContentPaddingTop.unit") || e.includes("slideContentPaddingRight.value") || e.includes("slideContentPaddingRight.unit") || e.includes("slideContentPaddingBottom.value") || e.includes("slideContentPaddingBottom.unit") || e.includes("slideContentPaddingLeft.value") || e.includes("slideContentPaddingLeft.unit")) {
                        var v = "".concat(n.slideContentPaddingTop.value).concat(n.slideContentPaddingTop.unit),
                            b = "".concat(n.slideContentPaddingRight.value).concat(n.slideContentPaddingRight.unit),
                            w = "".concat(n.slideContentPaddingBottom.value).concat(n.slideContentPaddingBottom.unit),
                            S = "".concat(n.slideContentPaddingLeft.value).concat(n.slideContentPaddingLeft.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.style.paddingTop = v, e.style.paddingRight = b, e.style.paddingBottom = w, e.style.paddingLeft = S
                        }))
                    }
                    if (e.includes("minSlideHeight.value") || e.includes("minSlideHeight.unit")) {
                        var A = "".concat(n.minSlideHeight.value).concat(n.minSlideHeight.unit);
                        t.ref.unorderedList.style.minHeight = A
                    }
                    if (e.includes("spaceBelowTitle.value") || e.includes("spaceBelowTitle.unit")) {
                        var O = "".concat(n.spaceBelowTitle.value).concat(n.spaceBelowTitle.unit);
                        t.ref.userItemsContent.forEach((function (e) {
                            e.querySelector(t.props.itemTitleSelector).style.marginBottom = O
                        }))
                    }
                    if (e.includes("spaceBelowBody.value") || e.includes("spaceBelowBody.unit")) {
                        var x = "".concat(n.spaceBelowBody.value).concat(n.spaceBelowBody.unit);
                        t.ref.userItemsContent.forEach((function (e) {
                            e.querySelector(t.props.itemDescriptionSelector).style.marginBottom = x
                        }))
                    }
                    (e.includes("spaceBetweenSlides.value") || e.includes("spaceBetweenSlides.unit")) && (t.node.dataset.spaceBetweenSlidesValue = n.spaceBetweenSlides.value, t.node.dataset.spaceBetweenSlidesUnit = n.spaceBetweenSlides.unit), e.includes("cardVerticalPosition") && (t.node.dataset.cardVerticalPosition = n.cardVerticalPosition), e.includes("cardHorizontalPosition") && (t.node.dataset.cardHorizontalPosition = n.cardHorizontalPosition), o && t.onResize()
                })), ku(Ou(t), "handleStylesUpdate", (function (e, n) {
                    var r = !1;
                    if (e.includes("sectionTheme") && _c(t.ref.parentNode, c.j, n.sectionTheme), e.includes("horizontalAlignment")) {
                        ["horizontal-alignment--left", "horizontal-alignment--center", "horizontal-alignment--right"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), t.ref.parentNode.classList.add(n.horizontalAlignment)
                    }
                    if (e.includes("verticalAlignment")) {
                        ["vertical-alignment--top", "vertical-alignment--middle", "vertical-alignment--bottom"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), t.ref.parentNode.classList.add(n.verticalAlignment)
                    }
                    if (e.includes("contentWidth")) {
                        t.node.dataset.widthConstraint = n.contentWidth, ["content-width--narrow", "content-width--medium", "content-width--wide"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), "content-width--custom" !== n.contentWidth ? (t.ref.parentNode.classList.add(n.contentWidth), t.ref.parentNode.querySelector(".content").style.width = "") : t.ref.parentNode.querySelector(".content").style.width = "".concat(t.state.styles.customContentWidth, "%"), r = !0
                    }
                    e.includes("customContentWidth") && "content-width--custom" === t.state.styles.contentWidth && (t.ref.parentNode.querySelector(".content").style.width = "".concat(n.customContentWidth, "%")), r && t.onResize()
                })), ku(Ou(t), "handleArrowVisibility", (function () {
                    if (!t.isInfiniteEnabled && "arrows" === t.navigationControls) {
                        if (t.slideshowProps.totalSlideCount <= t.getSlideColumnCount()) return t.hideArrow(t.previousBtn), void t.hideArrow(t.nextBtn);
                        t.slideshowProps.targetSlideIndex <= 0 ? t.hideArrow(t.previousBtn) : t.showArrow(t.previousBtn), t.slideshowProps.targetSlideIndex >= t.behaviors.getLastScrollableSlideIndex() ? t.hideArrow(t.nextBtn) : t.showArrow(t.nextBtn)
                    }
                })), ku(Ou(t), "onResize", (function () {
                    var e = t.getSlideColumnCount();
                    t.removeClones(), t.slideshowNodes = t.buildItems(t.slides), t.list.props.items = t.slideshowNodes, t.list.props.slideshowGutterWidth = t.getSlideshowGutterWidth(), t.list.props.slideColumnCount = e, t.behaviors.props.slideColumnCount = e, t.list.setSize(t.getSlideshowDimensions()), t.updatePositions(), t.slideshowProps.targetSlideIndex = t.slideshowProps.progressIndex, t.handleArrowVisibility()
                })), ku(Ou(t), "removeClones", (function () {
                    t.slidesContainer.innerHTML = "";
                    var e = new DocumentFragment;
                    t.slides.forEach((function (t) {
                        e.appendChild(t)
                    })), t.slidesContainer.appendChild(e)
                })), ku(Ou(t), "onClickNavPrevious", (function () {
                    t.behaviors.previousIndex()
                })), ku(Ou(t), "onClickNavNext", (function () {
                    t.behaviors.nextIndex()
                })), ku(Ou(t), "onProgress", (function (e) {
                    t.slideshowProps.progressIndex = (.5 + e << 0) % t.slideshowProps.totalSlideCount, t.list.setProgress(e), t.updatePositions()
                })), ku(Ou(t), "onStartProgress", (function (e) {
                    if (t.slideshowProps.targetSlideIndex = e, t.handleArrowVisibility(), !t.dragBehaviors.isDragging) {
                        var n = t.slideshowNodes.length, r = Math.round((e + n) % n);
                        t.updateAriaContainer({currentSlideIndex: r})
                    }
                })), ku(Ou(t), "onCloneItem", (function (e) {
                    var n = t.slideshowNodes[e], r = n.node.parentNode, o = n.node.cloneNode(!0),
                        i = o.querySelector(t.nodeSelectors.slideshowItemImage);
                    r.appendChild(o), t.slideshowNodes.push(vu(vu({}, n), {}, {
                        node: o,
                        imageNode: i,
                        isImageLoadAdded: !1,
                        inViewport: null
                    }))
                })), ku(Ou(t), "destroy", (function () {
                    t.behaviors.destroy(), delete t.behaviors, t.dragBehaviors.destroy(), delete t.dragBehaviors, t.unbindListeners()
                })), t.node = e;
                var n = t.props, r = n.layoutContainerSelector, a = n.itemSelector, s = n.contentSelector,
                    u = n.unorderedListSelector, l = n.imageSelector, d = n.itemTitleSelector,
                    f = n.itemDescriptionSelector, p = n.itemButtonSelector, h = n.arrowLeftWrapperSelector,
                    m = n.arrowRightWrapperSelector, y = n.parentSectionSelector;
                return t.ref = {
                    layoutContainer: t.node.querySelector(r),
                    unorderedList: t.node.querySelector(u),
                    images: Array.from(t.node.querySelectorAll(l)),
                    userItems: Array.from(t.node.querySelectorAll(a)),
                    userItemsContent: Array.from(t.node.querySelectorAll(s)),
                    itemTitles: Array.from(t.node.querySelectorAll(d)),
                    itemDescriptions: Array.from(t.node.querySelectorAll(f)),
                    itemButtons: Array.from(t.node.querySelectorAll(p)),
                    arrowLeftWrapper: t.node.querySelector(h),
                    arrowRightWrapper: t.node.querySelector(m),
                    parentNode: t.node.closest(y)
                }, t.shouldShowAdjacentSlides = "true" === e.getAttribute("data-show-adjacent-slides"), t.isInfiniteEnabled = "true" === e.getAttribute("data-is-infinite-enabled"), t.spaceBetweenSlidesValue = Number(e.getAttribute("data-space-between-slides-value")), t.spaceBetweenSlidesUnit = e.getAttribute("data-space-between-slides-unit"), t.maxColumns = 1, t.navigationControls = e.getAttribute("data-navigation-controls"), t.nodeSelectors = {
                    slideshowWidthConstrainer: ".slideshow-gutter",
                    slidesContainer: ".slides",
                    slide: ".slide",
                    slideshowItemImage: ".list-slideshow-image",
                    previousBtn: ".arrow-container--left .arrow-button",
                    nextBtn: ".arrow-container--right .arrow-button"
                }, t.classNames = {
                    isSlideshowInitialized: "slides--initialized",
                    isArrowHidden: "arrow-button--hidden"
                }, t.sectionId = t.node.dataset.sectionId, t.state = t.getStateFromDOM(), t.initializeSlideshowDom(), t.initializeSlideshowBehaviors(), t.initializeSlideshowProperties(), t.initializeDragBehaviors(), t.initializeSlideshow(), t
            }

            return t = i, (n = [{
                key: "addAriaContainer", value: function (e) {
                    var t = e.targetElement, n = document.createElement("div");
                    n.setAttribute("aria-live", "polite"), n.setAttribute("aria-atomic", "true"), n.style = "position: absolute; pointer-events: none; opacity: 0;", t.appendChild(n), this.ariaContainer = n
                }
            }, {
                key: "updateAriaContainer", value: function (e) {
                    var t = e.currentSlideIndex, n = this.slideshowNodes.length;
                    this.ariaContainer.innerHTML = "Item ".concat(t + 1, " of ").concat(n)
                }
            }, {
                key: "initializeSlideshowDom", value: function () {
                    this.slideshowWidthConstrainer = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer), this.slidesContainer = this.node.querySelector(this.nodeSelectors.slidesContainer), this.previousBtn = this.node.querySelector(this.nodeSelectors.previousBtn), this.nextBtn = this.node.querySelector(this.nodeSelectors.nextBtn), this.slides = Array.from(this.node.querySelectorAll(this.nodeSelectors.slide)), this.slideshowNodes = this.buildItems(this.slides), this.addAriaContainer({targetElement: this.slideshowWidthConstrainer})
                }
            }, {
                key: "initializeSlideshowBehaviors", value: function () {
                    this.behaviors = new ou.a({
                        nodes: {focus: this.slideshowWidthConstrainer},
                        numSlides: this.slideshowNodes.length,
                        slideColumnCount: this.getSlideColumnCount(),
                        isAutoplay: !1,
                        autoplayInterval: 3e3,
                        isInfinite: this.isInfiniteEnabled,
                        transitionDuration: 250,
                        onProgress: this.onProgress,
                        onStartProgress: this.onStartProgress,
                        shouldStopNavAtEnds: !0
                    }), this.list = new mu(vu(vu({items: this.slideshowNodes}, this.getSlideshowDimensions()), {}, {
                        spacing: {
                            value: this.spaceBetweenSlidesValue,
                            unit: this.spaceBetweenSlidesUnit
                        },
                        isInfinite: this.isInfiniteEnabled,
                        onCloneItem: this.onCloneItem,
                        slideshowGutterWidth: this.getSlideshowGutterWidth()
                    }))
                }
            }, {
                key: "initializeSlideshowProperties", value: function () {
                    this.slideshowProps = {
                        slideDimensions: this.list.props.items[0],
                        totalSlideCount: this.slideshowNodes.length,
                        progress: 0,
                        progressIndex: 0,
                        targetSlideIndex: 0
                    }
                }
            }, {
                key: "initializeDragBehaviors", value: function () {
                    var e = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer);
                    this.dragBehaviors = new cu(e, {
                        slideshowProps: this.slideshowProps,
                        behaviors: this.behaviors,
                        callback: this.handleArrowVisibility
                    })
                }
            }, {
                key: "initializeSlideshow", value: function () {
                    this.updatePositions(), this.slidesContainer.classList.add(this.classNames.isSlideshowInitialized), this.bindListeners(), this.handleArrowVisibility(), this.updateAriaContainer({currentSlideIndex: 0})
                }
            }, {
                key: "hideArrow", value: function (e) {
                    e.classList.add(this.classNames.isArrowHidden), e.setAttribute("tabindex", "-1")
                }
            }, {
                key: "showArrow", value: function (e) {
                    e.classList.remove(this.classNames.isArrowHidden), e.setAttribute("tabindex", "0")
                }
            }, {
                key: "getSlideColumnCount", value: function () {
                    var e = this, t = window.innerWidth, n = 1;
                    return Object.values({
                        "breakpoint-up-sm": {minScreenWidth: 576, columnsWeHaveRoomFor: 2},
                        "breakpoint-up-lg": {minScreenWidth: 992, columnsWeHaveRoomFor: 3},
                        "breakpoint-up-xxl": {minScreenWidth: 1200, columnsWeHaveRoomFor: 4}
                    }).forEach((function (r) {
                        t >= r.minScreenWidth && (n = Math.min(r.columnsWeHaveRoomFor, e.maxColumns))
                    })), n
                }
            }, {
                key: "getSlideshowGutterWidth", value: function () {
                    return this.slidesContainer.getBoundingClientRect().x - this.slideshowWidthConstrainer.getBoundingClientRect().x
                }
            }, {
                key: "bindListeners", value: function () {
                    M.watch(this.sectionId, this.onSectionTweak), "none" !== this.state.options.navigationControls && (this.previousBtn.addEventListener("click", this.onClickNavPrevious), this.nextBtn.addEventListener("click", this.onClickNavNext)), this.onResize = me(this.onResize, c.e), s.a.on(this.onResize)
                }
            }, {
                key: "unbindListeners", value: function () {
                    M.disconnect(this.sectionId, this.onSectionTweak), "none" !== this.state.options.navigationControls && (this.previousBtn.removeEventListener("click", this.onClickNavPrevious), this.nextBtn.removeEventListener("click", this.onClickNavNext)), s.a.off(this.onResize)
                }
            }, {
                key: "getSlideshowDimensions", value: function () {
                    var e = this.slideshowWidthConstrainer.getBoundingClientRect(), t = e.width, n = e.height;
                    return {regionWidth: t, regionHeight: n, maxWidth: t, maxHeight: n}
                }
            }, {
                key: "buildItems", value: function (e) {
                    var t = this;
                    return e.map((function (e, n) {
                        var r = e.getBoundingClientRect();
                        return {
                            width: r.width,
                            height: r.height,
                            index: n,
                            node: e,
                            imageNode: e.querySelector(t.nodeSelectors.slideshowItemImage),
                            isImageLoadAdded: !1,
                            inViewport: null
                        }
                    }))
                }
            }, {
                key: "updatePositions", value: function () {
                    for (var e = 0, t = this.slideshowNodes.length; e < t; e += 1) {
                        var n = this.slideshowNodes[e], r = this.list.items[e],
                            o = !!(.5 + Math.min(1, Math.abs(r.proximity)) << 0), i = n.inViewport !== r.inViewport;
                        (n.inViewport || i) && (o !== n.isAriaHidden && (n.node.setAttribute("aria-hidden", o), n.isAriaHidden = o), n.node.style.transform = "translate3d(" + r.x + "px, 0, 0)", n.inViewport = r.inViewport)
                    }
                }
            }]) && bu(t.prototype, n), r && bu(t, r), i
        }(l.a);
        ku(Pu, "defaultProps", {
            layoutContainerSelector: ".user-items-list-banner-slideshow",
            unorderedListSelector: ".slides",
            itemSelector: ".slide",
            imageSelector: "img",
            contentSelector: ".slide-content",
            mediaSelector: ".slide-media-container",
            itemTitleSelector: ".list-item-content__title",
            itemDescriptionSelector: ".list-item-content__description",
            itemButtonSelector: ".list-item-content__button",
            arrowLeftWrapperSelector: ".arrow-container--left",
            arrowRightWrapperSelector: ".arrow-container--right",
            parentSectionSelector: ".user-items-list-section"
        });

        function Eu(e) {
            return (Eu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Tu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ju(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Tu(Object(n), !0).forEach((function (t) {
                    Mu(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tu(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Iu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Lu(e, t) {
            return (Lu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Cu(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Du(e);
                if (t) {
                    var o = Du(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ru(this, n)
            }
        }

        function Ru(e, t) {
            return !t || "object" !== Eu(t) && "function" != typeof t ? _u(e) : t
        }

        function _u(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Du(e) {
            return (Du = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Mu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Fu = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Lu(e, t)
            }(i, e);
            var t, n, r, o = Cu(i);

            function i(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Mu(_u(t = o.call(this)), "getStateFromDOM", (function () {
                    var e = JSON.parse(t.node.dataset.currentContext), n = Object.assign({}, e);
                    return n.userItems.forEach((function (e, t) {
                        e.image && (e.imageId = e.image.id, delete e.image)
                    })), n
                })), Mu(_u(t), "onSectionTweak", (function (e) {
                    var n = {
                        layout: e.userItemsListOptions.layout,
                        userItems: e.userItems,
                        styles: e.styles,
                        options: e.userItemsListOptions.carouselOptions
                    };
                    n.userItems.forEach((function (e) {
                        e.button && (e.button.buttonLink && (e.buttonLink = e.button.buttonLink), e.button.buttonText && (e.buttonText = e.button.buttonText))
                    }));
                    var r = t.state.userItems.length !== n.userItems.length || t.state.layout !== n.layout;
                    if (r) return !1;
                    var o = t.state.userItems.map((function (e, t) {
                        return Xc(n.userItems[t], e)
                    }));
                    if (r = t.shouldContentChangeUpdateDOM(o, t.state.userItems, n.userItems)) return !1;
                    var i = Xc(n.options, t.state.options);
                    if (r = t.shouldOptionsChangeUpdateDOM(i, t.state.options, n.options)) return !1;
                    var a = Xc(n.styles, t.state.styles);
                    return !(r = t.shouldStylesChangeUpdateDOM(a, t.state.styles, n.styles)) && (t.handleContentUpdate(o, n.userItems), t.handleOptionsUpdate(i, n.options), t.handleStylesUpdate(a, n.styles), t.ref = t.updateRef(), t.setState(ju({}, n)), !0)
                })), Mu(_u(t), "handleOptionsUpdate", (function (e, n) {
                    var r = t.state.options, o = !1;
                    if (e.includes("verticalPaddingTop.value") || e.includes("verticalPaddingTop.unit") || e.includes("verticalPaddingBottom.value") || e.includes("verticalPaddingBottom.unit")) {
                        var i = "".concat(n.verticalPaddingTop.value).concat(n.verticalPaddingTop.unit),
                            a = "".concat(n.verticalPaddingBottom.value).concat(n.verticalPaddingBottom.unit);
                        t.ref.layoutContainer.style.paddingTop = i, t.ref.layoutContainer.style.paddingBottom = a
                    }
                    if (e.includes("maxColumns") && (t.node.dataset.maxColumns = n.maxColumns, o = !0), e.includes("isShowAdjacentSlides") && (t.node.dataset.showAdjacentSlides = n.isShowAdjacentSlides, o = !0), e.includes("navigationControls") && (t.node.dataset.navigationControls = n.navigationControls, "arrows" === n.navigationControls)) {
                        var s = "".concat(r.spaceBetweenSlides.value).concat(r.spaceBetweenSlides.unit),
                            u = "".concat(r.navigationOffset.value).concat(r.navigationOffset.unit);
                        if (t.ref.arrowLeftWrapper.style.gridGap = s, t.ref.arrowLeftWrapper.style.marginLeft = u, t.ref.arrowLeftWrapper.querySelector(t.props.arrowPositionerSelector).dataset.mediaAspectRatio = n.mediaAspectRatio, t.ref.arrowLeftWrapper.style.gridGap = s, t.ref.arrowLeftWrapper.style.marginRight = u, t.ref.arrowLeftWrapper.querySelector(t.props.arrowPositionerSelector).dataset.mediaAspectRatio = n.mediaAspectRatio, r.isCardEnabled) {
                            var l = "".concat(r.cardPaddingTop.value).concat(r.cardPaddingTop.unit),
                                d = "".concat(r.cardPaddingRight.value).concat(r.cardPaddingRight.unit),
                                f = "".concat(r.cardPaddingBottom.value).concat(r.cardPaddingBottom.unit),
                                p = "".concat(r.cardPaddinLeft.value).concat(r.cardPaddinLeft.unit);
                            t.ref.arrowLeftWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "".concat(l, " calc(").concat(d, " + ").concat(p, ") ").concat(f, " 0"), t.ref.arrowRightWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "".concat(l, " 0 ").concat(f, " calc(").concat(d, " + ").concat(p, ")")
                        } else t.ref.arrowLeftWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "", t.ref.arrowRightWrapper.querySelector(t.props.arrowContainerSelector).style.padding = ""
                    }
                    if (e.includes("navigationOffset.value") || e.includes("navigationOffset.unit")) {
                        var h = "".concat(n.navigationOffset.value).concat(n.navigationOffset.unit);
                        t.ref.arrowLeftWrapper.style.marginLeft = h, t.ref.arrowRightWrapper.style.marginRight = h
                    }
                    if (e.includes("spaceBetweenSlides.value") || e.includes("spaceBetweenSlides.unit")) {
                        var m = "".concat(n.spaceBetweenSlides.value).concat(n.spaceBetweenSlides.unit);
                        t.node.dataset.spaceBetweenSlidesValue = n.spaceBetweenSlides.value, t.node.dataset.spaceBetweenSlidesUnit = n.spaceBetweenSlides.unit, t.ref.arrowLeftWrapper.style.gridGap = m, t.ref.arrowRightWrapper.style.gridGap = m, t.ref.slidesContainer.style.gridGap = m
                    }
                    if (e.includes("spaceBetweenContentAndMedia.value") || e.includes("spaceBetweenContentAndMedia.unit")) {
                        var y = "".concat(n.spaceBetweenContentAndMedia.value).concat(n.spaceBetweenContentAndMedia.unit);
                        "media-first" === t.state.options.contentOrder ? t.ref.mediaContainers.forEach((function (e) {
                            e.style.marginBottom = y, e.style.marginTop = ""
                        })) : t.ref.mediaContainers.forEach((function (e) {
                            e.style.marginBottom = "", e.style.marginTop = y
                        }))
                    }
                    if (e.includes("cardVerticalAlignment") && (t.node.dataset.alignmentVertical = n.cardVerticalAlignment), e.includes("isCardEnabled")) if (n.isCardEnabled) {
                        var g = "".concat(r.cardPaddingTop.value).concat(r.cardPaddingTop.unit),
                            v = "".concat(r.cardPaddingRight.value).concat(r.cardPaddingRight.unit),
                            b = "".concat(r.cardPaddingBottom.value).concat(r.cardPaddingBottom.unit),
                            w = "".concat(r.cardPaddingLeft.value).concat(r.cardPaddingLeft.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.style.paddingTop = g, e.style.paddingRight = v, e.style.paddingBottom = b, e.style.paddingLeft = w, e.dataset.isCardEnabled = "true"
                        })), t.ref.arrowLeftWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "".concat(g, " calc(").concat(v, " + ").concat(w, ") ").concat(b, " 0"), t.ref.arrowRightWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "".concat(g, " 0 ").concat(b, " calc(").concat(v, " + ").concat(w, ")")
                    } else t.ref.userItems.forEach((function (e) {
                        e.style.paddingTop = "", e.style.paddingRight = "", e.style.paddingBottom = "", e.style.paddingLeft = "", e.dataset.isCardEnabled = "false", t.ref.arrowLeftWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "", t.ref.arrowRightWrapper.querySelector(t.props.arrowContainerSelector).style.padding = ""
                    }));
                    if (e.includes("cardPaddingTop.value") || e.includes("cardPaddingTop.unit") || e.includes("cardPaddingRight.value") || e.includes("cardPaddingRight.unit") || e.includes("cardPaddingBottom.value") || e.includes("cardPaddingBottom.unit") || e.includes("cardPaddingLeft.value") || e.includes("cardPaddingLeft.unit")) {
                        var S = "".concat(n.cardPaddingTop.value).concat(n.cardPaddingTop.unit),
                            A = "".concat(n.cardPaddingRight.value).concat(n.cardPaddingRight.unit),
                            O = "".concat(n.cardPaddingBottom.value).concat(n.cardPaddingBottom.unit),
                            x = "".concat(n.cardPaddingLeft.value).concat(n.cardPaddingLeft.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.style.paddingTop = S, e.style.paddingRight = A, e.style.paddingBottom = O, e.style.paddingLeft = x
                        })), t.ref.arrowLeftWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "".concat(S, " calc(").concat(A, " + ").concat(x, ") ").concat(O, " 0"), t.ref.arrowRightWrapper.querySelector(t.props.arrowContainerSelector).style.padding = "".concat(S, " 0 ").concat(O, " calc(").concat(A, " + ").concat(x, ")")
                    }
                    if (e.includes("spaceBelowTitle.value") || e.includes("spaceBelowTitle.unit")) {
                        var k = "".concat(n.spaceBelowTitle.value).concat(n.spaceBelowTitle.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.querySelector(t.props.itemTitleSelector).style.marginBottom = k
                        }))
                    }
                    if (e.includes("spaceBelowBody.value") || e.includes("spaceBelowBody.unit")) {
                        var P = "".concat(n.spaceBelowBody.value).concat(n.spaceBelowBody.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.querySelector(t.props.itemDescriptionSelector).style.marginBottom = P
                        }))
                    }
                    (e.includes("titleAlignment") || e.includes("bodyAlignment") || e.includes("buttonAlignment")) && (t.node.dataset.titleAlignment = n.titleAlignment, t.node.dataset.bodyAlignment = n.bodyAlignment, t.node.dataset.buttonAlignment = n.buttonAlignment), e.includes("bodyFontSize") && t.ref.itemDescriptions.forEach((function (e) {
                        _c(e, Object.values(c.h), c.h[n.bodyFontSize])
                    })), e.includes("buttonFontSize") && t.ref.itemButtons.forEach((function (e) {
                        _c(e, Object.values(c.i), c.i[n.buttonFontSize])
                    })), o && t.onResize()
                })), Mu(_u(t), "handleContentUpdate", (function (e, n) {
                    e.forEach((function (e, r) {
                        if (e.includes("title")) {
                            var o = t.ref.userItems[r].querySelector(t.props.itemTitleSelector);
                            o && (o.innerHTML = n[r].title)
                        }
                        if (e.includes("description")) {
                            var i = t.ref.userItems[r].querySelector(t.props.itemDescriptionSelector);
                            i && (i.innerHTML = n[r].description)
                        }
                        if (e.includes("buttonText")) {
                            var a = t.ref.userItems[r].querySelector(t.props.itemButtonSelector);
                            a && (a.innerHTML = n[r].buttonText)
                        }
                        if (e.includes("buttonLink")) {
                            var s = t.ref.userItems[r].querySelector(t.props.itemButtonSelector);
                            s && (s.href = n[r].buttonLink)
                        }
                    }))
                })), Mu(_u(t), "handleStylesUpdate", (function (e, n) {
                    var r = !1;
                    if (e.includes("sectionTheme") && _c(t.ref.parentNode, c.j, n.sectionTheme), e.includes("horizontalAlignment")) {
                        ["horizontal-alignment--left", "horizontal-alignment--center", "horizontal-alignment--right"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), t.ref.parentNode.classList.add(n.horizontalAlignment)
                    }
                    if (e.includes("verticalAlignment")) {
                        ["vertical-alignment--top", "vertical-alignment--middle", "vertical-alignment--bottom"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), t.ref.parentNode.classList.add(n.verticalAlignment)
                    }
                    if (e.includes("contentWidth")) {
                        t.node.dataset.widthConstraint = n.contentWidth, ["content-width--narrow", "content-width--medium", "content-width--wide"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), "content-width--custom" !== n.contentWidth ? (t.ref.parentNode.classList.add(n.contentWidth), t.ref.parentNode.querySelector(".content").style.width = "") : t.ref.parentNode.querySelector(".content").style.width = "".concat(t.state.styles.customContentWidth, "%"), r = !0
                    }
                    e.includes("customContentWidth") && "content-width--custom" === t.state.styles.contentWidth && (t.ref.parentNode.querySelector(".content").style.width = "".concat(n.customContentWidth, "%")), r && t.onResize()
                })), Mu(_u(t), "shouldContentChangeUpdateDOM", (function (e, t, n) {
                    for (var r = !1, o = 0; o < e.length; o++) {
                        if (e[o].includes("imageId")) {
                            r = !0;
                            break
                        }
                        r = !1
                    }
                    return r
                })), Mu(_u(t), "shouldOptionsChangeUpdateDOM", (function (e, t, n) {
                    return !!(e.includes("layoutWidth") || e.includes("mediaAspectRatio") || e.includes("contentOrder") || e.includes("titleFontSize") || e.includes("navigationControls") || e.includes("isInfiniteEnabled"))
                })), Mu(_u(t), "shouldStylesChangeUpdateDOM", (function (e, t, n) {
                    return !!(e.includes("backgroundMode") || e.includes("backgroundWidth") || e.includes("imageOverlayOpacity") || e.includes("video") || e.includes("sectionAnimation") || e.includes("sectionHeight") || e.includes("customSectionHeight"))
                })), Mu(_u(t), "updateRef", (function () {
                    return {
                        layoutContainer: t.node.querySelector(t.props.layoutContainerSelector),
                        userItems: Array.from(t.node.querySelectorAll(t.props.itemSelector)),
                        images: Array.from(t.node.querySelectorAll(t.props.imageSelector)),
                        contentContainers: Array.from(t.node.querySelectorAll(t.props.contentSelector)),
                        mediaContainers: Array.from(t.node.querySelectorAll(t.props.mediaSelector)),
                        slidesContainer: t.node.querySelector(t.props.slidesContainerSelector),
                        arrowLeftWrapper: t.node.querySelector(t.props.arrowLeftWrapperSelector),
                        arrowRightWrapper: t.node.querySelector(t.props.arrowRightWrapperSelector),
                        parentNode: t.node.closest(t.props.parentSectionSelector),
                        itemTitles: Array.from(t.node.querySelectorAll(t.props.itemTitleSelector)),
                        itemDescriptions: Array.from(t.node.querySelectorAll(t.props.itemDescriptionSelector)),
                        itemButtons: Array.from(t.node.querySelectorAll(t.props.itemButtonSelector))
                    }
                })), Mu(_u(t), "handleArrowVisibility", (function () {
                    if (!t.isInfiniteEnabled && "arrows" === t.navigationControls) {
                        if (t.slideshowProps.totalSlideCount <= t.getSlideColumnCount()) return t.hideArrow(t.previousBtn), void t.hideArrow(t.nextBtn);
                        t.slideshowProps.targetSlideIndex <= 0 ? t.hideArrow(t.previousBtn) : t.showArrow(t.previousBtn), t.slideshowProps.targetSlideIndex >= t.behaviors.getLastScrollableSlideIndex() ? t.hideArrow(t.nextBtn) : t.showArrow(t.nextBtn)
                    }
                })), Mu(_u(t), "onResize", (function () {
                    var e = t.getSlideColumnCount();
                    t.removeClones(), t.slideshowNodes = t.buildItems(t.slides), t.list.props.items = t.slideshowNodes, t.list.props.slideshowGutterWidth = t.getSlideshowGutterWidth(), t.list.props.slideColumnCount = e, t.behaviors.props.slideColumnCount = e, t.list.setSize(t.getSlideshowDimensions()), t.updatePositions(), t.slideshowProps.targetSlideIndex = t.slideshowProps.progressIndex, t.handleArrowVisibility()
                })), Mu(_u(t), "removeClones", (function () {
                    t.slidesContainer.innerHTML = "";
                    var e = new DocumentFragment;
                    t.slides.forEach((function (t) {
                        e.appendChild(t)
                    })), t.slidesContainer.appendChild(e)
                })), Mu(_u(t), "onClickNavPrevious", (function () {
                    t.behaviors.previousIndex()
                })), Mu(_u(t), "onClickNavNext", (function () {
                    t.behaviors.nextIndex()
                })), Mu(_u(t), "onProgress", (function (e) {
                    t.slideshowProps.progressIndex = (.5 + e << 0) % t.slideshowProps.totalSlideCount, t.list.setProgress(e), t.updatePositions()
                })), Mu(_u(t), "onStartProgress", (function (e) {
                    if (t.slideshowProps.targetSlideIndex = e, t.handleArrowVisibility(), !t.dragBehaviors.isDragging) {
                        var n = t.slideshowNodes.length, r = Math.round((e + n) % n);
                        t.updateAriaContainer({currentSlideIndex: r})
                    }
                })), Mu(_u(t), "onCloneItem", (function (e) {
                    var n = t.slideshowNodes[e], r = n.node.parentNode, o = n.node.cloneNode(!0),
                        i = o.querySelector(t.nodeSelectors.slideshowItemImage);
                    r.appendChild(o), t.slideshowNodes.push(ju(ju({}, n), {}, {
                        node: o,
                        imageNode: i,
                        isImageLoadAdded: !1,
                        inViewport: null
                    }))
                })), Mu(_u(t), "destroy", (function () {
                    t.behaviors.destroy(), delete t.behaviors, t.dragBehaviors.destroy(), delete t.dragBehaviors, t.unbindListeners()
                })), t.node = e, t.shouldShowAdjacentSlides = "true" === e.getAttribute("data-show-adjacent-slides"), t.isInfiniteEnabled = "true" === e.getAttribute("data-is-infinite-enabled"), t.spaceBetweenSlidesValue = Number(e.getAttribute("data-space-between-slides-value")), t.spaceBetweenSlidesUnit = e.getAttribute("data-space-between-slides-unit"), t.maxColumns = e.getAttribute("data-max-columns"), t.navigationControls = e.getAttribute("data-navigation-controls"), t.nodeSelectors = {
                    slideshowWidthConstrainer: ".user-items-list-carousel__gutter",
                    slidesContainer: ".user-items-list-carousel__slides",
                    slide: ".user-items-list-carousel__slide",
                    slideshowItemImage: ".user-items-list-carousel__media",
                    previousBtn: ".user-items-list-carousel__arrow-button--left",
                    nextBtn: ".user-items-list-carousel__arrow-button--right"
                }, t.classNames = {
                    isSlideshowInitialized: "user-items-list-carousel__slides--initialized",
                    isArrowHidden: "user-items-list-carousel__arrow-button--hidden"
                };
                var n = t.props, r = n.layoutContainerSelector, a = n.itemSelector, s = n.imageSelector,
                    u = n.contentSelector, l = n.mediaSelector, d = n.slidesContainerSelector,
                    f = n.arrowLeftWrapperSelector, p = n.arrowRightWrapperSelector, h = n.parentSectionSelector,
                    m = n.itemTitleSelector, y = n.itemDescriptionSelector, g = n.itemButtonSelector;
                return t.ref = {
                    layoutContainer: t.node.querySelector(r),
                    userItems: Array.from(t.node.querySelectorAll(a)),
                    images: Array.from(t.node.querySelectorAll(s)),
                    contentContainers: Array.from(t.node.querySelector(u)),
                    mediaContainers: Array.from(t.node.querySelectorAll(l)),
                    slidesContainer: t.node.querySelector(d),
                    arrowLeftWrapper: t.node.querySelector(f),
                    arrowRightWrapper: t.node.querySelector(p),
                    itemTitles: Array.from(t.node.querySelectorAll(m)),
                    itemDescriptions: Array.from(t.node.querySelectorAll(y)),
                    itemButtons: Array.from(t.node.querySelectorAll(g)),
                    parentNode: t.node.closest(h)
                }, t.sectionId = t.node.dataset.sectionId, t.state = t.getStateFromDOM(), t.initializeSlideshowDom(), t.initializeSlideshowBehaviors(), t.initializeSlideshowProperties(), t.initializeDragBehaviors(), t.initializeSlideshow(), t
            }

            return t = i, (n = [{
                key: "addAriaContainer", value: function (e) {
                    var t = e.targetElement, n = document.createElement("div");
                    n.setAttribute("aria-live", "polite"), n.setAttribute("aria-atomic", "true"), n.style = "position: absolute; pointer-events: none; opacity: 0;", t.appendChild(n), this.ariaContainer = n
                }
            }, {
                key: "updateAriaContainer", value: function (e) {
                    var t = e.currentSlideIndex, n = this.slideshowNodes.length;
                    this.ariaContainer.innerHTML = "Item ".concat(t + 1, " of ").concat(n)
                }
            }, {
                key: "initializeSlideshowDom", value: function () {
                    this.slideshowWidthConstrainer = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer), this.slidesContainer = this.node.querySelector(this.nodeSelectors.slidesContainer), this.previousBtn = this.node.querySelector(this.nodeSelectors.previousBtn), this.nextBtn = this.node.querySelector(this.nodeSelectors.nextBtn), this.slides = Array.from(this.node.querySelectorAll(this.nodeSelectors.slide)), this.slideshowNodes = this.buildItems(this.slides), this.addAriaContainer({targetElement: this.slideshowWidthConstrainer})
                }
            }, {
                key: "initializeSlideshowBehaviors", value: function () {
                    this.behaviors = new ou.a({
                        nodes: {focus: this.slideshowWidthConstrainer},
                        numSlides: this.slideshowNodes.length,
                        slideColumnCount: this.getSlideColumnCount(),
                        isAutoplay: !1,
                        autoplayInterval: 3e3,
                        isInfinite: this.isInfiniteEnabled,
                        transitionDuration: 250,
                        onProgress: this.onProgress,
                        onStartProgress: this.onStartProgress,
                        shouldStopNavAtEnds: !0
                    }), this.list = new mu(ju(ju({items: this.slideshowNodes}, this.getSlideshowDimensions()), {}, {
                        spacing: {
                            value: this.spaceBetweenSlidesValue,
                            unit: this.spaceBetweenSlidesUnit
                        },
                        isInfinite: this.isInfiniteEnabled,
                        onCloneItem: this.onCloneItem,
                        slideshowGutterWidth: this.getSlideshowGutterWidth()
                    }))
                }
            }, {
                key: "destroySlideshow", value: function () {
                    this.behaviors && this.behaviors.destroy(), this.list && this.list.destroy()
                }
            }, {
                key: "initializeSlideshowProperties", value: function () {
                    this.slideshowProps = {
                        slideDimensions: this.list.props.items[0],
                        totalSlideCount: this.slideshowNodes.length,
                        progress: 0,
                        progressIndex: 0,
                        targetSlideIndex: 0
                    }
                }
            }, {
                key: "initializeDragBehaviors", value: function () {
                    var e = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer);
                    this.dragBehaviors = new cu(e, {
                        slideshowProps: this.slideshowProps,
                        behaviors: this.behaviors,
                        callback: this.handleArrowVisibility
                    })
                }
            }, {
                key: "initializeSlideshow", value: function () {
                    this.updatePositions(), this.slidesContainer.classList.add(this.classNames.isSlideshowInitialized), this.bindListeners(), this.handleArrowVisibility(), this.updateAriaContainer({currentSlideIndex: 0})
                }
            }, {
                key: "hideArrow", value: function (e) {
                    e.classList.add(this.classNames.isArrowHidden), e.setAttribute("tabindex", "-1")
                }
            }, {
                key: "showArrow", value: function (e) {
                    e.classList.remove(this.classNames.isArrowHidden), e.setAttribute("tabindex", "0")
                }
            }, {
                key: "getSlideColumnCount", value: function () {
                    var e = this, t = window.innerWidth, n = 1;
                    return Object.values({
                        "breakpoint-up-sm": {minScreenWidth: 576, columnsWeHaveRoomFor: 2},
                        "breakpoint-up-lg": {minScreenWidth: 992, columnsWeHaveRoomFor: 3},
                        "breakpoint-up-xxl": {minScreenWidth: 1200, columnsWeHaveRoomFor: 4}
                    }).forEach((function (r) {
                        t >= r.minScreenWidth && (n = Math.min(r.columnsWeHaveRoomFor, e.maxColumns))
                    })), n
                }
            }, {
                key: "getSlideshowGutterWidth", value: function () {
                    return this.slidesContainer.getBoundingClientRect().x - this.slideshowWidthConstrainer.getBoundingClientRect().x
                }
            }, {
                key: "bindListeners", value: function () {
                    M.watch(this.sectionId, this.onSectionTweak), "none" !== this.state.options.navigationControls && (this.previousBtn.addEventListener("click", this.onClickNavPrevious), this.nextBtn.addEventListener("click", this.onClickNavNext)), this.onResize = me(this.onResize, c.e), s.a.on(this.onResize)
                }
            }, {
                key: "unbindListeners", value: function () {
                    M.disconnect(this.sectionId, this.onSectionTweak), "none" !== this.state.options.navigationControls && (this.previousBtn.removeEventListener("click", this.onClickNavPrevious), this.nextBtn.removeEventListener("click", this.onClickNavNext)), s.a.off(this.onResize)
                }
            }, {
                key: "getSlideshowDimensions", value: function () {
                    var e = this.slideshowWidthConstrainer.getBoundingClientRect(), t = e.width, n = e.height;
                    return {regionWidth: t, regionHeight: n, maxWidth: t, maxHeight: n}
                }
            }, {
                key: "buildItems", value: function (e) {
                    var t = this;
                    return e.map((function (e, n) {
                        var r = e.getBoundingClientRect();
                        return {
                            width: r.width,
                            height: r.height,
                            index: n,
                            node: e,
                            imageNode: e.querySelector(t.nodeSelectors.slideshowItemImage),
                            isImageLoadAdded: !1,
                            inViewport: null
                        }
                    }))
                }
            }, {
                key: "updatePositions", value: function () {
                    for (var e = 0, t = this.slideshowNodes.length; e < t; e += 1) {
                        var n = this.slideshowNodes[e], r = this.list.items[e],
                            o = !!(.5 + Math.min(1, Math.abs(r.proximity)) << 0), i = n.inViewport !== r.inViewport;
                        (n.inViewport || i) && (o !== n.isAriaHidden && (n.node.setAttribute("aria-hidden", o), n.isAriaHidden = o), n.node.style.transform = "translate3d(" + r.x + "px, 0, 0)", n.inViewport = r.inViewport)
                    }
                }
            }]) && Iu(t.prototype, n), r && Iu(t, r), i
        }(l.a);
        Mu(Fu, "defaultProps", {
            layoutContainerSelector: ".user-items-list-carousel",
            itemSelector: ".list-item",
            imageSelector: "img",
            contentSelector: ".list-item-content",
            mediaSelector: ".user-items-list-carousel__media-container",
            itemTitleSelector: ".list-item-content__title",
            itemDescriptionSelector: ".list-item-content__description",
            itemButtonContainerSelector: ".list-item-content__button-container",
            itemButtonSelector: ".list-item-content__button",
            slidesContainerSelector: ".user-items-list-carousel__slides",
            arrowLeftWrapperSelector: ".user-items-list-carousel__arrow-wrapper--left",
            arrowRightWrapperSelector: ".user-items-list-carousel__arrow-wrapper--right",
            arrowContainerSelector: ".user-items-list-carousel__arrow-container",
            arrowPositionerSelector: ".user-items-list-carousel__arrow-positioner",
            parentSectionSelector: ".user-items-list-section"
        });

        function Bu(e) {
            return (Bu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function zu(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Nu(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Wu(e, t) {
            return (Wu = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function qu(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Vu(e);
                if (t) {
                    var o = Vu(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Uu(this, n)
            }
        }

        function Uu(e, t) {
            return !t || "object" !== Bu(t) && "function" != typeof t ? Hu(e) : t
        }

        function Hu(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Vu(e) {
            return (Vu = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Gu(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Yu = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Wu(e, t)
            }(a, e);
            var t, n, r, o = qu(a);

            function a(e) {
                var t;
                !function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, a), Gu(Hu(t = o.call(this)), "loadImage", (function (e) {
                    e && (e.onload = function () {
                        e.dataset.loaded = !0
                    }, i.a.loadLazy(e, {load: !0, useAdvancedPositioning: !0}))
                })), Gu(Hu(t), "getStateFromDOM", (function () {
                    var e = JSON.parse(t.node.dataset.currentContext), n = Object.assign({}, e);
                    return n.userItems.forEach((function (e, t) {
                        e.image && (e.imageId = e.image.id, delete e.image)
                    })), n
                })), Gu(Hu(t), "onSectionTweak", (function (e) {
                    var n = {
                        layout: e.userItemsListOptions.layout,
                        userItems: Array.from(e.userItems),
                        styles: e.styles,
                        options: e.userItemsListOptions.simpleOptions
                    };
                    n.userItems.forEach((function (e) {
                        e.button && (e.button.buttonLink && (e.buttonLink = e.button.buttonLink), e.button.buttonText && (e.buttonText = e.button.buttonText))
                    }));
                    var r = t.state.userItems.length !== n.userItems.length || t.state.layout !== n.layout;
                    if (r) return !1;
                    var o = t.state.userItems.map((function (e, t) {
                        return Xc(n.userItems[t], e)
                    }));
                    if (r = t.shouldContentChangeUpdateDOM(o, t.state.userItems, n.userItems)) return !1;
                    var i = Xc(n.options, t.state.options);
                    if (r = t.shouldOptionsChangeUpdateDOM(i, t.state.options, n.options)) return !1;
                    var a = Xc(n.styles, t.state.styles);
                    return !(r = t.shouldStylesChangeUpdateDOM(a, t.state.styles, n.styles)) && (t.handleContentUpdate(o, n.userItems), t.handleOptionsUpdate(i, n.options), t.handleStylesUpdate(a, n.styles), t.ref = t.updateRef(), t.setState(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? zu(Object(n), !0).forEach((function (t) {
                                Gu(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zu(Object(n)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, n)), !0)
                })), Gu(Hu(t), "handleOptionsUpdate", (function (e, n) {
                    var r = t.state.options, o = !1;
                    if (e.includes("verticalPaddingTop.value") || e.includes("verticalPaddingTop.unit") || e.includes("verticalPaddingBottom.value") || e.includes("verticalPaddingBottom.unit")) {
                        var i = "".concat(n.verticalPaddingTop.value).concat(n.verticalPaddingTop.unit),
                            a = "".concat(n.verticalPaddingBottom.value).concat(n.verticalPaddingBottom.unit);
                        t.ref.layoutContainer.style.paddingTop = i, t.ref.layoutContainer.style.paddingBottom = a
                    }
                    if (e.includes("maxColumns") && (t.node.dataset.numColumns = n.maxColumns, o = !0), e.includes("spaceBetweenRows.value") || e.includes("spaceBetweenRows.unit") || e.includes("spaceBetweenColumns.value") || e.includes("spaceBetweenColumns.unit")) {
                        var s = "".concat(n.spaceBetweenRows.value).concat(n.spaceBetweenRows.unit),
                            u = "".concat(n.spaceBetweenColumns.value).concat(n.spaceBetweenColumns.unit);
                        t.node.style.gridGap = "".concat(s, " ").concat(u), o = !0
                    }
                    if (e.includes("spaceBetweenContentAndMedia.value") || e.includes("spaceBetweenContentAndMedia.unit")) {
                        var l = "".concat(n.spaceBetweenContentAndMedia.value).concat(n.spaceBetweenContentAndMedia.unit);
                        "media-first" === t.state.options.contentOrder ? t.ref.mediaContainers.forEach((function (e) {
                            e.style.marginBottom = l, e.style.marginTop = ""
                        })) : t.ref.mediaContainers.forEach((function (e) {
                            e.style.marginBottom = "", e.style.marginTop = l
                        }))
                    }
                    if (e.includes("cardVerticalAlignment") && (t.node.dataset.alignmentVertical = n.cardVerticalAlignment), e.includes("isCardEnabled") && (n.isCardEnabled ? t.ref.userItems.forEach((function (e) {
                        var t = "".concat(r.cardPaddingTop.value).concat(r.cardPaddingTop.unit),
                            n = "".concat(r.cardPaddingRight.value).concat(r.cardPaddingRight.unit),
                            o = "".concat(r.cardPaddingBottom.value).concat(r.cardPaddingBottom.unit),
                            i = "".concat(r.cardPaddingLeft.value).concat(r.cardPaddingLeft.unit);
                        e.style.paddingTop = t, e.style.paddingRight = n, e.style.paddingBottom = o, e.style.paddingLeft = i, e.dataset.isCardEnabled = "true"
                    })) : t.ref.userItems.forEach((function (e) {
                        e.style.paddingTop = "", e.style.paddingRight = "", e.style.paddingBottom = "", e.style.paddingLeft = "", e.dataset.isCardEnabled = "false"
                    }))), (e.includes("cardPaddingTop.value") || e.includes("cardPaddingTop.unit") || e.includes("cardPaddingRight.value") || e.includes("cardPaddingRight.unit") || e.includes("cardPaddingBottom.value") || e.includes("cardPaddingBottom.unit") || e.includes("cardPaddingLeft.value") || e.includes("cardPaddingLeft.unit")) && t.ref.userItems.forEach((function (e) {
                        var t = "".concat(n.cardPaddingTop.value).concat(n.cardPaddingTop.unit),
                            r = "".concat(n.cardPaddingRight.value).concat(n.cardPaddingRight.unit),
                            o = "".concat(n.cardPaddingBottom.value).concat(n.cardPaddingBottom.unit),
                            i = "".concat(n.cardPaddingLeft.value).concat(n.cardPaddingLeft.unit);
                        e.style.paddingTop = t, e.style.paddingRight = r, e.style.paddingBottom = o, e.style.paddingLeft = i
                    })), e.includes("spaceBelowTitle.value") || e.includes("spaceBelowTitle.unit")) {
                        var d = "".concat(n.spaceBelowTitle.value).concat(n.spaceBelowTitle.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.querySelector(t.props.itemTitleSelector).style.marginBottom = d
                        }))
                    }
                    if (e.includes("spaceBelowBody.value") || e.includes("spaceBelowBody.unit")) {
                        var f = "".concat(n.spaceBelowBody.value).concat(n.spaceBelowBody.unit);
                        t.ref.userItems.forEach((function (e) {
                            e.querySelector(t.props.itemDescriptionSelector).style.marginBottom = f
                        }))
                    }
                    (e.includes("titleAlignment") || e.includes("bodyAlignment") || e.includes("buttonAlignment")) && (t.node.dataset.titleAlignment = n.titleAlignment, t.node.dataset.bodyAlignment = n.bodyAlignment, t.node.dataset.buttonAlignment = n.buttonAlignment), e.includes("bodyFontSize") && t.ref.itemDescriptions.forEach((function (e) {
                        _c(e, Object.values(c.h), c.h[n.bodyFontSize])
                    })), e.includes("buttonFontSize") && t.ref.itemButtons.forEach((function (e) {
                        _c(e, Object.values(c.i), c.i[n.buttonFontSize])
                    })), o && t.onResize()
                })), Gu(Hu(t), "handleContentUpdate", (function (e, n) {
                    e.forEach((function (e, r) {
                        if (e.includes("title")) {
                            var o = t.ref.userItems[r].querySelector(t.props.itemTitleSelector);
                            o && (o.innerHTML = n[r].title)
                        }
                        if (e.includes("description")) {
                            var i = t.ref.userItems[r].querySelector(t.props.itemDescriptionSelector);
                            i && (i.innerHTML = n[r].description)
                        }
                        if (e.includes("buttonText")) {
                            var a = t.ref.userItems[r].querySelector(t.props.itemButtonSelector);
                            a && (a.innerHTML = n[r].buttonText)
                        }
                        if (e.includes("buttonLink")) {
                            var s = t.ref.userItems[r].querySelector(t.props.itemButtonSelector);
                            s && (s.href = n[r].buttonLink)
                        }
                    }))
                })), Gu(Hu(t), "handleStylesUpdate", (function (e, n) {
                    var r = !1;
                    if (e.includes("sectionTheme") && _c(t.ref.parentNode, c.j, n.sectionTheme), e.includes("horizontalAlignment")) {
                        ["horizontal-alignment--left", "horizontal-alignment--center", "horizontal-alignment--right"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), t.ref.parentNode.classList.add(n.horizontalAlignment)
                    }
                    if (e.includes("verticalAlignment")) {
                        ["vertical-alignment--top", "vertical-alignment--middle", "vertical-alignment--bottom"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), t.ref.parentNode.classList.add(n.verticalAlignment)
                    }
                    if (e.includes("contentWidth")) {
                        t.node.dataset.widthConstraint = n.contentWidth, ["content-width--narrow", "content-width--medium", "content-width--wide"].forEach((function (e) {
                            t.ref.parentNode.classList.contains(e) && t.ref.parentNode.classList.remove(e)
                        })), "content-width--custom" !== n.contentWidth ? (t.ref.parentNode.classList.add(n.contentWidth), t.ref.parentNode.querySelector(".content").style.width = "") : t.ref.parentNode.querySelector(".content").style.width = "".concat(t.state.styles.customContentWidth, "%"), r = !0
                    }
                    e.includes("customContentWidth") && "content-width--custom" === t.state.styles.contentWidth && (t.ref.parentNode.querySelector(".content").style.width = "".concat(n.customContentWidth, "%")), r && t.onResize()
                })), Gu(Hu(t), "shouldContentChangeUpdateDOM", (function (e, t, n) {
                    for (var r = !1, o = 0; o < e.length; o++) {
                        if (e[o].includes("imageId")) {
                            r = !0;
                            break
                        }
                        r = !1
                    }
                    return r
                })), Gu(Hu(t), "shouldOptionsChangeUpdateDOM", (function (e, t, n) {
                    return !!(e.includes("layoutWidth") || e.includes("mediaAspectRatio") || e.includes("contentOrder") || e.includes("titleFontSize"))
                })), Gu(Hu(t), "shouldStylesChangeUpdateDOM", (function (e, t, n) {
                    return !!(e.includes("backgroundMode") || e.includes("backgroundWidth") || e.includes("imageOverlayOpacity") || e.includes("video") || e.includes("sectionAnimation") || e.includes("sectionHeight") || e.includes("customSectionHeight"))
                })), Gu(Hu(t), "updateRef", (function () {
                    return {
                        layoutContainer: t.node.querySelector(t.props.layoutContainerSelector),
                        userItems: Array.from(t.node.querySelectorAll(t.props.itemSelector)),
                        images: Array.from(t.node.querySelectorAll(t.props.imageSelector)),
                        contentContainers: Array.from(t.node.querySelectorAll(t.props.contentSelector)),
                        mediaContainers: Array.from(t.node.querySelectorAll(t.props.mediaSelector)),
                        parentNode: t.node.closest(t.props.parentSectionSelector),
                        itemTitles: Array.from(t.node.querySelectorAll(t.props.itemTitleSelector)),
                        itemDescriptions: Array.from(t.node.querySelectorAll(t.props.itemDescriptionSelector)),
                        itemButtons: Array.from(t.node.querySelectorAll(t.props.itemButtonSelector))
                    }
                })), Gu(Hu(t), "onResize", (function () {
                    t.loadImages(t.ref.images)
                })), Gu(Hu(t), "destroy", (function () {
                    t.unbindListeners()
                })), t.node = e;
                var n = t.props, r = n.layoutContainerSelector, s = n.itemSelector, u = n.imageSelector,
                    l = n.contentSelector, d = n.mediaSelector, f = n.parentSectionSelector, p = n.itemTitleSelector,
                    h = n.itemDescriptionSelector, m = n.itemButtonSelector;
                return t.ref = {
                    layoutContainer: t.node.querySelector(r),
                    userItems: Array.from(t.node.querySelectorAll(s)),
                    images: Array.from(t.node.querySelectorAll(u)),
                    contentContainers: Array.from(t.node.querySelector(l)),
                    mediaContainers: Array.from(t.node.querySelectorAll(d)),
                    itemTitles: Array.from(t.node.querySelectorAll(p)),
                    itemDescriptions: Array.from(t.node.querySelectorAll(h)),
                    itemButtons: Array.from(t.node.querySelectorAll(m)),
                    parentNode: t.node.closest(f)
                }, t.sectionId = t.node.dataset.sectionId, t.state = t.getStateFromDOM(), t.onResize = me(t.onResize, c.e), t.bindListeners(), t.loadImages(t.ref.images), t
            }

            return t = a, (n = [{
                key: "loadImages", value: function (e) {
                    e.forEach(this.loadImage)
                }
            }, {
                key: "bindListeners", value: function () {
                    M.watch(this.sectionId, this.onSectionTweak), s.a.on(this.onResize)
                }
            }, {
                key: "unbindListeners", value: function () {
                    M.disconnect(this.sectionId, this.onSectionTweak), s.a.off(this.onResize)
                }
            }]) && Nu(t.prototype, n), r && Nu(t, r), a
        }(l.a);
        Gu(Yu, "defaultProps", {
            layoutContainerSelector: ".user-items-list-simple",
            itemSelector: ".list-item",
            imageSelector: "img",
            contentSelector: ".list-item-content",
            mediaSelector: ".list-item-media",
            itemTitleSelector: ".list-item-content__title",
            itemDescriptionSelector: ".list-item-content__description",
            itemButtonContainerSelector: ".list-item-content__button-container",
            itemButtonSelector: ".list-item-content__button",
            parentSectionSelector: ".user-items-list-section"
        });
        var Qu = function (e) {
            return new Yu(e)
        }, Xu = n(234), Zu = n.n(Xu), Ju = n(55);

        function Ku(e) {
            return (Ku = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function $u(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function el(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $u(Object(n), !0).forEach((function (t) {
                    sl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $u(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function tl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function nl(e, t) {
            return (nl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function rl(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = al(e);
                if (t) {
                    var o = al(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return ol(this, n)
            }
        }

        function ol(e, t) {
            return !t || "object" !== Ku(t) && "function" != typeof t ? il(e) : t
        }

        function il(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function al(e) {
            return (al = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function sl(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var cl = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && nl(e, t)
            }(i, e);
            var t, n, r, o = rl(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), sl(il(t = o.call(this)), "update", (function () {
                    t.imageEffect.uniforms.uTime += 5e-5 * t.state.speed, t.imageEffect.uniforms.uMorphTime += 1e-4 * t.state.morphSpeed
                })), sl(il(t), "destroy", (function () {
                    t.imageEffect.destroy()
                })), t.node = e, t.imageEffect = new Ju.a(t.node.querySelector(".background-fx-canvas"), {
                    programKey: "liquid",
                    image: e.querySelector("img"),
                    uniforms: el({uTime: 0, uMorphTime: 0}, t.updateUniforms({}, t.state)),
                    frag: "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nfloat cubicOut(float t) {\n  float f = t - 1.0;\n  return f * f * f + 1.0;\n}\n\nuniform float uComplexity;\nuniform float uDirection;\nuniform float uIntensity;\nuniform float uMorph;\nuniform float uSeed;\nuniform float uShadow;\nuniform float uSmoothness;\nuniform float uTime;\nuniform float uMorphTime;\nuniform sampler2D uImage;\n\nvarying vec2 vUv;\n\nvec2 rotate(vec2 uv,float amount){\n  float ca = cos(amount);\n  float sa = sin(amount);\n  \n  return vec2(\n    uv.x * ca + uv.y * sa,\n    -uv.x * sa + uv.y * ca\n  );\n}\n\nfloat getNoise(vec2 uv) {\n  vec2 direction = rotate(vec2(uTime), uDirection);\n  \n  return 1.0 - snoise(vec3(uv * uComplexity + direction, uMorphTime) + uSeed);\n}\n\nvoid main (void) {\n  float noise = 1.0 - cubicOut(smoothstep(1.0 - uSmoothness, 1.0, 1.0 - getNoise(vUv))) * uIntensity;\n  float shadow = smoothstep(1.0 - uIntensity, 1.0, noise) * uShadow * 0.5;\n  vec2 uv = (vUv - 0.5) * noise + 0.5;\n\n  gl_FragColor = texture2D(uImage, uv) - vec4(vec3(shadow), 0.0);\n}",
                    onUpdate: t.update
                }), t
            }

            return t = i, (n = [{
                key: "updateUniforms", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e.uComplexity = t.complexity, e.uDirection = (45 + t.direction) * (Math.PI / 180), e.uIntensity = .01 * t.intensity, e.uSeed = t.seed, e.uShadow = .01 * t.shadow, e.uSmoothness = .01 * t.smoothness, e
                }
            }]) && tl(t.prototype, n), r && tl(t, r), i
        }(l.a);
        sl(cl, "defaultState", {
            complexity: 2,
            direction: 270,
            intensity: 10,
            morphSpeed: 5,
            seed: 100,
            shadow: 8,
            smoothness: 100,
            speed: 50
        });
        r.a.register("BackgroundImageFXLiquid", (function (e) {
            return new cl(e)
        }));

        function ul(e) {
            return (ul = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ll(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function dl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ll(Object(n), !0).forEach((function (t) {
                    vl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ll(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function fl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function pl(e, t) {
            return (pl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function hl(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = gl(e);
                if (t) {
                    var o = gl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return ml(this, n)
            }
        }

        function ml(e, t) {
            return !t || "object" !== ul(t) && "function" != typeof t ? yl(e) : t
        }

        function yl(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function gl(e) {
            return (gl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function vl(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var bl = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && pl(e, t)
            }(i, e);
            var t, n, r, o = hl(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), vl(yl(t = o.call(this)), "shiftTarget", [0, 0]), vl(yl(t), "shiftResetTID", -1), vl(yl(t), "onIntersection", (function (e) {
                    e ? t.bindListeners() : t.unbindListeners()
                })), vl(yl(t), "resetShift", (function () {
                    t.shiftTarget = [0, 0]
                })), vl(yl(t), "onPointerMove", (function (e) {
                    var n = t.sectionNode.getBoundingClientRect(), r = (e.clientX - n.left) / t.width,
                        o = (e.clientY - n.top) / t.height;
                    t.shiftTarget[0] = -2 * r + 1, t.shiftTarget[1] = 2 * o - 1, t.onPointerLeave()
                })), vl(yl(t), "onPointerLeave", (function () {
                    clearTimeout(t.shiftResetTID), t.shiftResetTID = setTimeout(t.resetShift, 2e3)
                })), vl(yl(t), "onResize", (function () {
                    var e = t.imageEffect.canvas, n = e.width, r = e.height, o = t.state, i = o.centerOffsetSize,
                        a = o.isLimitRings, s = o.numRings, c = o.ringSize, u = .5 * Math.min(n, r),
                        l = .5 * Math.sqrt(n * n + r * r), d = u * (.01 * i), f = Math.ceil((l - i) / c),
                        p = a ? Math.min(s, f) : f;
                    t.width = n, t.height = r, t.imageEffect.uniforms.uCenterRadius = d, t.imageEffect.uniforms.uMaxRings = p
                })), vl(yl(t), "update", (function () {
                    var e = t.state.shiftSpeed, n = t.imageEffect.uniforms.uShift, r = t.shiftTarget[0] - n[0],
                        o = t.shiftTarget[1] - n[1];
                    n[0] += r * (.002 * e), n[1] += o * (.002 * e)
                })), vl(yl(t), "destroy", (function () {
                    t.imageEffect.destroy(), t.unbindListeners(), clearTimeout(t.shiftResetTID)
                })), t.node = e, t.sectionNode = t.node.closest("section") || t.node, t.imageEffect = new Ju.a(t.node.querySelector(".background-fx-canvas"), {
                    programKey: "refracted-circles",
                    image: e.querySelector("img"),
                    uniforms: dl({uCenterRadius: 100, uMaxRings: -1, uShift: [0, 0]}, t.updateUniforms({}, t.state)),
                    frag: "#define GLSLIFY 1\n#ifndef HALF_PI\n#define HALF_PI 1.5707963267948966\n#endif\n\nfloat sineOut(float t) {\n  return sin(t * HALF_PI);\n}\n\nuniform sampler2D uImage;\nuniform float uCenterRadius;\nuniform float uMaxRings;\nuniform float uReversePixelRatio;\nuniform float uRingSize;\nuniform float uRotation;\nuniform float uScaleEven;\nuniform float uScaleOdd;\nuniform float uScaleTaperEven;\nuniform float uScaleTaperOdd;\nuniform float uShiftIntensity;\nuniform float uStepFlipRotation;\nuniform float uStepFlipX;\nuniform float uStepFlipY;\nuniform vec2 uResolution;\nuniform vec2 uShift;\nvarying vec2 vUv;\n\nvec2 rotate(vec2 uv, float amount) {\n  vec2 prime = vec2(uv.x * cos(amount) + uv.y * sin(amount),\n    -uv.x * sin(amount) + uv.y * cos(amount));\n  return prime;\n}\n\nfloat getStep (vec2 uv) {\n  return (floor(max(0.0, distance(uv, vec2(0.0)) - uCenterRadius) / uRingSize));\n}\n\nvoid main () {\n  vec2 uv = vUv - 0.5;\n  float aspect = uResolution.x / uResolution.y;\n  vec2 stepCoord = (gl_FragCoord.xy / uResolution * uReversePixelRatio) - 0.5;\n  float step = min(getStep(stepCoord * uResolution), uMaxRings);\n  float isEven = mod(step, 2.0);\n  float flipRotation = sign((1.0 - isEven + uStepFlipRotation) * 2.0 - 1.0);\n  vec2 flipAxis = vec2(\n    sign((1.0 - isEven + uStepFlipX) * 2.0 - 1.0),\n    sign((1.0 - isEven + uStepFlipY) * 2.0 - 1.0)\n  );\n  float progress = sineOut((step + 1.0) / (uMaxRings + 1.0));\n  float progressRotation = sineOut((step) / (uMaxRings));\n  float rotation = progressRotation * (uRotation) * flipRotation;\n  float scale = mix(uScaleOdd, uScaleEven, isEven);\n  float taper = mix(uScaleTaperEven, uScaleTaperOdd, isEven);\n  float taperScale = (1.0 - progress) * taper;\n  vec2 shift = uShift * uShiftIntensity * progress;\n\n  uv.x *= aspect;\n  uv = rotate(uv, rotation);\n  uv.x /= aspect;\n  uv =\n    (uv + shift) *\n      flipAxis *\n      scale *\n      (1.0 + taperScale) +\n    0.5;\n\n  gl_FragColor = texture2D(uImage, mod(uv * -sign(mod(uv, 2.0) - 1.0), 1.0));\n}",
                    onUpdate: t.update,
                    onResize: t.onResize,
                    onIntersection: t.onIntersection
                }), t.width = t.node.clientWidth, t.height = t.node.clientHeight, t
            }

            return t = i, (n = [{
                key: "bindListeners", value: function () {
                    this.sectionNode.addEventListener("mousemove", this.onPointerMove), this.sectionNode.addEventListener("mouseleave", this.onPointerLeave)
                }
            }, {
                key: "unbindListeners", value: function () {
                    this.sectionNode.removeEventListener("mousemove", this.onPointerMove), this.sectionNode.removeEventListener("mouseleave", this.onPointerLeave)
                }
            }, {
                key: "updateUniforms", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e.uRotation = t.rotation * Math.PI / 180, e.uRingSize = t.ringSize, e.uScaleEven = .01 * t.scaleEven, e.uScaleOdd = .01 * t.scaleOdd, e.uScaleTaperEven = .01 * t.scaleTaperEven, e.uScaleTaperOdd = .01 * t.scaleTaperOdd, e.uStepFlipRotation = 1 - +t.isStepFlipRotation, e.uStepFlipX = 1 - +t.isStepFlipX, e.uStepFlipY = 1 - +t.isStepFlipY, e.uShiftIntensity = .002 * t.shiftIntensity, e
                }
            }]) && fl(t.prototype, n), r && fl(t, r), i
        }(l.a);
        vl(bl, "defaultState", {
            isLimitRings: !1,
            numRings: 5,
            centerOffsetSize: 55,
            ringSize: 150,
            rotation: 2,
            scaleEven: 100,
            scaleOdd: 90,
            scaleTaperEven: 10,
            scaleTaperOdd: -10,
            shiftIntensity: 50,
            shiftSpeed: 20,
            isStepFlipRotation: !0,
            isStepFlipX: !1,
            isStepFlipY: !1
        });
        r.a.register("BackgroundImageFXRefractedCircles", (function (e) {
            return new bl(e)
        }));

        function wl(e) {
            return (wl = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Sl(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Al(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Sl(Object(n), !0).forEach((function (t) {
                    jl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sl(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Ol(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function xl(e, t) {
            return (xl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function kl(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Tl(e);
                if (t) {
                    var o = Tl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Pl(this, n)
            }
        }

        function Pl(e, t) {
            return !t || "object" !== wl(t) && "function" != typeof t ? El(e) : t
        }

        function El(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Tl(e) {
            return (Tl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function jl(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Il = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && xl(e, t)
            }(i, e);
            var t, n, r, o = kl(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), jl(El(t = o.call(this)), "targetProgress", 0), jl(El(t), "isImmediate", !0), jl(El(t), "onScrollProgress", (function (e) {
                    t.isImmediate && (t.imageEffect.uniforms.uShift[1] = e, t.imageEffect.isDirty = !0, t.isImmediate = !1), t.targetProgress = e
                })), jl(El(t), "onIntersection", (function (e) {
                    e && (t.isImmediate = !0)
                })), jl(El(t), "onUpdate", (function () {
                    var e = t.imageEffect.uniforms.uShift[1], n = t.targetProgress;
                    if (e !== n) {
                        var r = n - e;
                        t.imageEffect.uniforms.uShift[1] = r < .01 ? n : e + .1 * r, t.imageEffect.isDirty = !0
                    }
                })), jl(El(t), "updateSize", (function () {
                    var e = t.imageEffect.canvas, n = e.width, r = e.height, o = t.state.lineSize,
                        i = Math.sqrt(n * n + r * r), a = Math.ceil(i / o), s = a * o;
                    t.imageEffect.uniforms.uLineSize = o, t.imageEffect.uniforms.uLineCount = a, t.imageEffect.uniforms.uLineRegionSize = s, t.imageEffect.uniforms.uResolution[0] = n, t.imageEffect.uniforms.uResolution[1] = r, t.isImmediate = !0
                })), jl(El(t), "destroy", (function () {
                    t.imageEffect.destroy()
                })), t.node = e, t.imageEffect = new Ju.a(t.node.querySelector(".background-fx-canvas"), {
                    programKey: "refracted-lines",
                    image: e.querySelector("img"),
                    uniforms: Al({uResolution: [1, 1], uShift: [0, 0]}, t.updateUniforms({}, t.state)),
                    frag: "#define GLSLIFY 1\nfloat cubicOut(float t) {\n  float f = t - 1.0;\n  return f * f * f + 1.0;\n}\n\nuniform sampler2D uImage;\nuniform float uBulge;\nuniform float uLineCount;\nuniform float uLineRegionSize;\nuniform float uLineSize;\nuniform float uRotation;\nuniform float uScale;\nuniform float uShiftIntensity;\nuniform vec2 uOffsetScale;\nuniform vec2 uResolution;\nuniform vec2 uShift;\n\nvarying vec2 vUv;\n\nvec2 rotate(vec2 uv, float amount) {\n  vec2 prime = vec2(uv.x * cos(amount) + uv.y * sin(amount),\n    -uv.x * sin(amount) + uv.y * cos(amount));\n  return prime;\n}\n\nfloat getStep (vec2 uv) {\n  return (1.0 + floor(distance(uv.x, 0.0) / uLineRegionSize * uLineCount));\n}\n\nvoid main () {\n  vec2 uv = rotate((vUv - 0.5) * uResolution, uRotation);\n  float step = getStep(uv);\n  float multiplier = sign(uv.x);\n\n  uv = rotate(uv, -uRotation);\n\n  float aspect = uResolution.x / uResolution.y;\n\n  float interpStep = multiplier * step;\n  float strength = step / (uLineCount * 0.5);\n  vec2 rotated = vec2(cos(uRotation), sin(uRotation));\n\n  interpStep -= multiplier * 0.5;\n\n  vec2 centered = interpStep * uLineSize * vec2(aspect, 1.0) * uOffsetScale * rotated;\n  \n  uv += uShift * uResolution * uShiftIntensity * cubicOut((step + 1.0) / uLineCount);\n  uv = (uv - centered) * (2.0 - uScale + strength * uBulge) + centered;\n  uv /= uResolution;\n  uv += 0.5;\n  uv = mod(uv * -sign(mod(uv, 2.0) - 1.0), 1.0);\n\n  gl_FragColor = texture2D(uImage, uv);\n}",
                    onResize: t.updateSize,
                    onUpdate: t.onUpdate,
                    onIntersection: t.onIntersection,
                    onScrollProgress: t.onScrollProgress
                }), t.imageEffect.autoUpdate = !1, t
            }

            return t = i, (n = [{
                key: "updateUniforms", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e.uRotation = t.rotation * Math.PI / 180, e.uBulge = t.bulge, e.uOffsetScale = [t.offsetScaleX, t.offsetScaleY], e.uScale = t.scale, e.uShiftIntensity = t.shiftIntensity, e
                }
            }]) && Ol(t.prototype, n), r && Ol(t, r), i
        }(l.a);
        jl(Il, "defaultState", {
            bulge: -.25,
            lineSize: 120,
            offsetScaleX: .5,
            offsetScaleY: .5,
            rotation: 135,
            scale: .8,
            shiftIntensity: .25
        });
        r.a.register("BackgroundImageFXRefractedLines", (function (e) {
            return new Il(e)
        }));

        function Ll(e) {
            return (Ll = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Cl(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Rl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Cl(Object(n), !0).forEach((function (t) {
                    Nl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Cl(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function _l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Dl(e, t) {
            return (Dl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Ml(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = zl(e);
                if (t) {
                    var o = zl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Fl(this, n)
            }
        }

        function Fl(e, t) {
            return !t || "object" !== Ll(t) && "function" != typeof t ? Bl(e) : t
        }

        function Bl(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function zl(e) {
            return (zl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Nl(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Wl = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Dl(e, t)
            }(i, e);
            var t, n, r, o = Ml(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Nl(Bl(t = o.call(this)), "update", (function () {
                    t.imageEffect.uniforms.uTime += 1e-4 * t.state.speed
                })), Nl(Bl(t), "destroy", (function () {
                    t.imageEffect.destroy()
                })), t.node = e, t.imageEffect = new Ju.a(t.node.querySelector(".background-fx-canvas"), {
                    programKey: "static",
                    image: e.querySelector("img"),
                    uniforms: Rl({uTime: 0}, t.updateUniforms({}, t.state)),
                    frag: "#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\n#define V_SEED_X 12.9898\n#define V_SEED_Y 78.233\n#define R_SEED 43758.5453\n\nuniform sampler2D uImage;\nuniform float uDepth;\nuniform float uNoise;\nuniform float uTime;\nuniform vec2 uResolution;\n\nvarying vec2 vUv;\n\nfloat luma(vec4 color) {\n  return dot(color.rgb, vec3(0.299, 0.587, 0.114));\n}\n\nfloat rand(vec2 co){\n  return fract(sin(dot(co.xy, vec2(V_SEED_X, V_SEED_Y))) * R_SEED);\n}\n\nfloat filmGrain(vec2 uv) {\n  float random = rand(uv + uTime);\n  return snoise(vec3(uv, random) + random);\n}\n\nvoid main (void) {\n  vec4 origin = texture2D(uImage, vUv);\n  float grain = filmGrain(vUv * uResolution);\n  vec3 color = origin.rgb;\n\n  color *= 1.0 + (grain * uNoise * (-1.0 + uDepth + luma(origin) * 0.75));\n\n  gl_FragColor = vec4(color, origin.a);\n}",
                    onUpdate: t.update
                }), t
            }

            return t = i, (n = [{
                key: "updateUniforms", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e.uNoise = t.noise, e.uDepth = t.depth, e
                }
            }]) && _l(t.prototype, n), r && _l(t, r), i
        }(l.a);
        Nl(Wl, "defaultState", {noise: .5, depth: 0, speed: 30});
        r.a.register("BackgroundImageFXStatic", (function (e) {
            return new Wl(e)
        }));

        function ql(e) {
            return (ql = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function Ul(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Hl(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ul(Object(n), !0).forEach((function (t) {
                    Jl(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ul(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Vl(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function Gl(e, t) {
            return (Gl = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function Yl(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Zl(e);
                if (t) {
                    var o = Zl(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ql(this, n)
            }
        }

        function Ql(e, t) {
            return !t || "object" !== ql(t) && "function" != typeof t ? Xl(e) : t
        }

        function Xl(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Zl(e) {
            return (Zl = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Jl(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        var Kl = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Gl(e, t)
            }(i, e);
            var t, n, r, o = Yl(i);

            function i(e) {
                var t;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), Jl(Xl(t = o.call(this)), "targetProgress", 0), Jl(Xl(t), "isImmediate", !0), Jl(Xl(t), "onScrollProgress", (function (e) {
                    t.isImmediate && (t.imageEffect.uniforms.uProgress = e, t.imageEffect.isDirty = !0, t.isImmediate = !1), t.targetProgress = e
                })), Jl(Xl(t), "onIntersection", (function (e) {
                    e && (t.isImmediate = !0)
                })), Jl(Xl(t), "onUpdate", (function () {
                    var e = t.imageEffect.uniforms.uProgress, n = t.targetProgress;
                    if (e !== n) {
                        var r = n - e;
                        t.imageEffect.uniforms.uProgress = r < .01 ? n : e + .1 * r, t.imageEffect.isDirty = !0
                    }
                })), Jl(Xl(t), "updateSize", (function () {
                    var e = t.imageEffect.focalPoint, n = e.x, r = e.y;
                    t.imageEffect.uniforms.uOrigin[0] = n, t.imageEffect.uniforms.uOrigin[1] = 1 - r, t.isImmediate = !0
                })), Jl(Xl(t), "destroy", (function () {
                    t.imageEffect.destroy()
                })), t.node = e, t.setState(JSON.parse(t.node.dataset.props)), t.imageEffect = new Ju.a(t.node.querySelector(".background-fx-canvas"), {
                    programKey: "parallax-program",
                    image: e.querySelector("img"),
                    uniforms: Hl({uOrigin: [.5, .5], uProgress: 0}, t.updateUniforms({}, t.state)),
                    vert: "#define GLSLIFY 1\nattribute vec3 aPosition;\n\nuniform mat3 uvMatrix;\nuniform float uAmount;\nuniform vec2 uAngle;\nuniform float uZoomStart;\nuniform float uZoomEnd;\nuniform float uProgress;\nuniform vec2 uOrigin;\n\nvarying vec2 vUv;\n\nvoid main(){\n  gl_Position = vec4(aPosition, 1.);\n  vec2 uv = gl_Position.xy * .5 + .5;\n\n  vUv = (uvMatrix * vec3(uv, 1.)).xy;\n  vUv -= uOrigin;\n  vUv *= 1.0 - uAmount - mix(uZoomStart, uZoomEnd, uProgress);\n  vUv -= uAngle * mix(\n    (vec2(1.0) - uOrigin) * -uAmount,\n    uOrigin * uAmount,\n    uProgress\n  );\n  vUv += uOrigin;\n}",
                    onResize: t.updateSize,
                    onUpdate: t.onUpdate,
                    onIntersection: t.onIntersection,
                    onScrollProgress: t.onScrollProgress
                }), t.imageEffect.autoUpdate = !1, t
            }

            return t = i, (n = [{
                key: "updateUniforms", value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e.uAmount = t.amount, e.uAngle = [Math.cos(t.angle * Math.PI / 180), Math.sin(t.angle * Math.PI / 180)], e.uZoomStart = t.zoomStart, e.uZoomEnd = t.zoomEnd, e
                }
            }]) && Vl(t.prototype, n), r && Vl(t, r), i
        }(l.a);
        Jl(Kl, "defaultState", {amount: .3, angle: 90, zoomStart: 0, zoomEnd: 0});
        r.a.register("BackgroundImageFXParallax", (function (e) {
            return new Kl(e)
        }));
        n(400);
        r.a.register("AuthorProfileImageLoader", a), r.a.register("BlogImageLoader", u), r.a.register("BlogLayoutMasonry", T), r.a.register("EventsImageLoader", j), r.a.register("Flags", (function (e) {
            return new C(e)
        })), r.a.register("FloatingCart", _), r.a.register("GalleryFullscreenSlideshow", (function (e) {
            return new ze(e)
        })), r.a.register("GalleryGrid", (function (e) {
            return new yt(e)
        })), r.a.register("GalleryMasonry", (function (e) {
            return new Et(e)
        })), r.a.register("GalleryStrips", (function (e) {
            return new wn(e)
        })), r.a.register("GallerySlideshow", (function (e) {
            return new Zt(e)
        })), r.a.register("GridImages", Lr), r.a.register("ImageZoom", (function (e) {
            return new Nr(e)
        })), r.a.register("ItemPagination", Hr), r.a.register("Lightbox", (function (e) {
            return new eo(e)
        })), r.a.register("MagicPaddingController", (function (e) {
            return new Qo(e)
        })), r.a.register("PortfolioHover", (function (e) {
            return new Vs(e)
        })), r.a.register("PortfolioIndexBackground", Zs), r.a.register("ProductListImageLoader", Js), r.a.register("ProductGallery", (function (e) {
            return new uc(e)
        })), r.a.register("ProductItemVariants", (function (e) {
            return new gc(e)
        })), r.a.register("ProductCartButton", (function (e) {
            return new Oc(e)
        })), r.a.register("SectionBackgroundOverlayController", (function (e) {
            return new Pc(e)
        })), r.a.register("SectionWrapperController", (function (e) {
            return new qc(e)
        })), r.a.register("ImageAndText", (function (e) {
            return new eu(e)
        })), r.a.register("UserAccountLink", ru), r.a.register("UserItemsListBannerSlideshow", (function (e) {
            return new Pu(e)
        })), r.a.register("UserItemsListSimple", Qu), r.a.register("UserItemsListCarousel", (function (e) {
            return new Fu(e)
        })), r.a.register("UserItemsListSimple", Qu), r.a.register("GunnarLightbox", (function (e) {
            return new qo(e)
        })), Wr() && r.a.register("GlobalAnimations", void 0), r.a.register("VideoBackground", (function (e) {
            return Zu()(e)
        })), r.a.initialize()
    }]))
}));