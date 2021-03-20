!function (e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        var n = t();
        for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(window, (function () {
    return function (e) {
        function t(t) {
            for (var r, a, s = t[0], c = t[1], u = t[2], l = 0, d = []; l < s.length; l++) a = s[l], Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]), o[a] = 0;
            for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
            for (f && f(t); d.length;) d.shift()();
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

        var r = {}, o = {4: 0}, i = [];

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
        var f = c;
        return i.push([396, 0]), n()
    }({
        396: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(14),
                o = (n(5), n(11), n(12), n(35), n(15), n(24), n(8), n(28), n(32), n(36), n(17), n(9), n(18), n(34), n(13), n(7), n(46), n(16), n(10), n(2)),
                i = n(86), a = n(67), s = n(30);

            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function u(e, t) {
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
                    if ("string" == typeof e) return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function l(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e) {
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
                    var n, r = g(e);
                    if (t) {
                        var o = g(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }

            function h(e, t) {
                return !t || "object" !== c(t) && "function" != typeof t ? y(e) : t
            }

            function y(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e) {
                return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            var m = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(c, e);
                var t, n, r, o = p(c);

                function c(e) {
                    var t, n, r, s;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, c), t = o.call(this), n = y(t), s = function (e) {
                        e ? t.hideText() : t.showText()
                    }, (r = "onToggleGhostMode") in n ? Object.defineProperty(n, r, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[r] = s, t.node = e, t.ref = {
                        timestamps: Array.from(t.node.querySelectorAll("[datetime]")),
                        primaries: Array.from(t.node.querySelectorAll("h1, h2, h3, h4, h5, .GunnarText")),
                        secondaries: Array.from(t.node.querySelectorAll("p"))
                    }, t.reconfigureTimestamps(t.ref.timestamps), t.primaryTransitions = t.ref.primaries.map((function (e) {
                        return new i.a(e)
                    })), t.secondaryTransitions = a.a.parseItems(t.ref.secondaries).map((function (e) {
                        var t = u(e, 2), n = t[0], r = t[1];
                        return new a.a(n, r)
                    })), t.bindListeners(), t
                }

                return t = c, (n = [{
                    key: "reconfigureTimestamps", value: function (e) {
                        e.forEach((function (e) {
                            var t = u(e.getAttribute("datetime").split("-"), 3), n = t[0], r = t[1], o = t[2];
                            e.innerText = "".concat(o, ".").concat(r, ".").concat(n)
                        }))
                    }
                }, {
                    key: "bindListeners", value: function () {
                        s.a.on("ghostMode:change", this.onToggleGhostMode)
                    }
                }, {
                    key: "unbindListeners", value: function () {
                        s.a.off("ghostMode:change", this.onToggleGhostMode)
                    }
                }, {
                    key: "showText", value: function () {
                        this.primaryTransitions.forEach((function (e) {
                            e.show()
                        })), this.secondaryTransitions.forEach((function (e) {
                            e.show()
                        })), this.node.dataset.ghostMode = !1
                    }
                }, {
                    key: "hideText", value: function () {
                        this.primaryTransitions.forEach((function (e) {
                            e.hide()
                        })), this.secondaryTransitions.forEach((function (e) {
                            e.hide()
                        })), this.node.dataset.ghostMode = !0
                    }
                }, {
                    key: "destroy", value: function () {
                        this.unbindListeners()
                    }
                }]) && l(t.prototype, n), r && l(t, r), c
            }(o.a), b = n(4), v = n(3), w = n(54), O = n(19);
            n(85);

            function P(e) {
                return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function S(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function j(e, t) {
                return (j = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function k(e) {
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
                    var n, r = I(e);
                    if (t) {
                        var o = I(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return x(this, n)
                }
            }

            function x(e, t) {
                return !t || "object" !== P(t) && "function" != typeof t ? function (e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function I(e) {
                return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            var E, A, _, D = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && j(e, t)
                }(i, e);
                var t, n, r, o = k(i);

                function i(e, t) {
                    var n;
                    !function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i);
                    var r = (n = o.call(this, t)).props.background;
                    return n.node = e, n.ref = {
                        img: n.node.querySelector("img"),
                        backgroundImg: r.querySelector("img")
                    }, n.ref.backgroundImg.onload = function () {
                        n.ref.backgroundImg.dataset.loaded = !0
                    }, n
                }

                return t = i, (n = [{
                    key: "show", value: function () {
                        var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = t.isInstant, r = void 0 !== n && n, o = this.props, i = o.backgroundContainer,
                            a = o.background, s = o.container, c = o.duration, u = o.interval, f = r ? 0 : c,
                            l = r ? 0 : u + 2 * c;
                        return s.appendChild(this.node), i.appendChild(a), this.node.style.display = "block", a.style.display = "block", b.f.killTweensOf([this.node, this.ref.img, a, this.ref.backgroundImg]), b.f.set(this.node, {
                            x: "100%",
                            y: "100%"
                        }), b.f.set(this.ref.img, {
                            x: "-100%",
                            y: "-100%"
                        }), b.f.set(a, {opacity: 0}), b.f.set(this.ref.backgroundImg, {y: "0%"}), new Promise((function (t) {
                            b.f.to(e.node, f, {x: "0%", y: "0%", ease: b.a.easeOut}), b.f.to(e.ref.img, f, {
                                x: "0%",
                                y: "0%",
                                ease: b.a.easeOut,
                                onComplete: function () {
                                    t()
                                }
                            }), b.f.to(a, f, {opacity: 1}), b.f.to(e.ref.backgroundImg, l, {
                                y: "-10%",
                                ease: b.b.easeNone
                            })
                        }))
                    }
                }, {
                    key: "hide", value: function () {
                        this.node.style.display = "none"
                    }
                }, {
                    key: "destroy", value: function () {
                        var e = this.props.background;
                        b.f.killTweensOf([this.node, this.ref.img, e, this.ref.backgroundImg])
                    }
                }]) && S(t.prototype, n), r && S(t, r), i
            }(o.a);

            function R(e) {
                return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function L(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function M(e, t) {
                return (M = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function T(e) {
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
                    var n, r = z(e);
                    if (t) {
                        var o = z(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return H(this, n)
                }
            }

            function H(e, t) {
                return !t || "object" !== R(t) && "function" != typeof t ? q(e) : t
            }

            function q(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function z(e) {
                return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function C(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            E = D, A = "defaultProps", _ = {
                container: document.createElement("div"),
                duration: 2,
                interval: 5,
                backgroundContainer: document.createElement("div"),
                background: null
            }, A in E ? Object.defineProperty(E, A, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : E[A] = _;
            var N = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && M(e, t)
                }(i, e);
                var t, n, r, o = T(i);

                function i(e, t) {
                    var n;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), C(q(n = o.call(this, t)), "currentIndex", 0), C(q(n), "interval", {v: 0}), C(q(n), "onResize", (function () {
                        n.loadImages()
                    })), C(q(n), "onIntersection", (function (e) {
                    })), C(q(n), "destroy", (function () {
                        n.isDestroyed = !0, n.unbindListeners(), n.stop()
                    })), n.node = e, n.backgroundNode = n.node.closest("section").querySelector(".HomeGallery-background"), n.ref = {
                        display: n.node.querySelector(".HomeGallery-display"),
                        inner: n.node.querySelector(".HomeGallery-inner"),
                        backgroundContainer: n.backgroundNode.querySelector(".HomeGallery-background-items"),
                        backgroundItems: Array.from(n.backgroundNode.querySelectorAll(".HomeGallery-background-item")),
                        items: Array.from(n.node.querySelectorAll(".HomeGallery-item"))
                    }, n.itemLen = n.ref.items.length, n.items = n.ref.items.map((function (e, t) {
                        return new D(e, {
                            container: n.ref.inner,
                            interval: 5,
                            backgroundContainer: n.ref.backgroundContainer,
                            background: n.ref.backgroundItems[(t + n.itemLen - 1) % n.itemLen]
                        })
                    })), n.show(), n.bindListeners(), n.setItem(0, {isIntant: !0}), n
                }

                return t = i, (n = [{
                    key: "loadImages", value: function () {
                        O.a.loadAllLazy({
                            load: !0,
                            mode: "cover",
                            useAdvancedPositioning: !0
                        }, this.node), O.a.loadAllLazy({
                            load: !0,
                            mode: "cover",
                            useAdvancedPositioning: !0
                        }, this.backgroundNode)
                    }
                }, {
                    key: "show", value: function () {
                        b.f.set(this.ref.display, {
                            opacity: 0,
                            x: -200,
                            rotationX: 45,
                            rotationY: -60,
                            rotationZ: -20,
                            scale: 1.2
                        }), b.f.set(this.ref.inner, {
                            rotationX: -45,
                            rotationY: -60,
                            rotationZ: 20,
                            scale: 2
                        }), b.f.to(this.ref.display, .5, {
                            delay: .5,
                            opacity: 1
                        }), b.f.to(this.ref.display, 1.8, {
                            delay: .5,
                            x: 0,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            scale: 1,
                            ease: b.a.easeOut
                        }), b.f.to(this.ref.inner, 2, {
                            delay: .5,
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                            scale: 1,
                            ease: b.a.easeOut
                        })
                    }
                }, {
                    key: "bindListeners", value: function () {
                        this.intersectionScroll = new w.a(this.node, {onIntersection: this.onIntersection}), v.a.on(this.onResize), this.onResize()
                    }
                }, {
                    key: "unbindListeners", value: function () {
                        this.intersectionScroll.destroy(), v.a.off(this.onResize)
                    }
                }, {
                    key: "start", value: function () {
                        this.runInterval()
                    }
                }, {
                    key: "runInterval", value: function () {
                        var e = this, t = this.props.interval;
                        b.f.killTweensOf(this.interval), b.f.to(this.interval, .001 * t, {
                            onComplete: function () {
                                var t = (e.currentIndex + 1) % e.itemLen;
                                e.setItem(t)
                            }
                        })
                    }
                }, {
                    key: "stop", value: function () {
                        b.f.killTweensOf(this.interval)
                    }
                }, {
                    key: "setItem", value: function (e, t) {
                        var n = this;
                        this.currentIndex = e, this.items[e].show(t).then((function () {
                            n.isDestroyed || n.hideItems(e)
                        })), this.runInterval()
                    }
                }, {
                    key: "hideItems", value: function (e) {
                        this.items.forEach((function (t, n) {
                            n !== e && t.hide()
                        }))
                    }
                }]) && L(t.prototype, n), r && L(t, r), i
            }(o.a);
            C(N, "defaultProps", {interval: 7e3});
            n(23), n(25), n(26), n(22);
            var G = n(55);

            function U(e) {
                return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function F(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? F(Object(n), !0).forEach((function (t) {
                        $(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Z(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function X(e, t) {
                return (X = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function W(e) {
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
                    var n, r = J(e);
                    if (t) {
                        var o = J(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Y(this, n)
                }
            }

            function Y(e, t) {
                return !t || "object" !== U(t) && "function" != typeof t ? V(e) : t
            }

            function V(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function J(e) {
                return (J = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function $(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var K = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && X(e, t)
                }(i, e);
                var t, n, r, o = W(i);

                function i(e) {
                    var t;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), $(V(t = o.call(this, e)), "onResize", (function () {
                        var e = t.ref.container.getBoundingClientRect();
                        t.ref.container.style.clipPath = null, t.ref.container.style.webkitClipPath = null, t.ref.shapePath.setAttribute("d", t.getPathData(e)), t.ref.container.offsetTop, t.ref.container.style.clipPath = "url(#clipped-1)", t.ref.container.style.webkitClipPath = "url(#clipped-1)";
                        var n = t.imageEffect.focalPoint, r = n.x, o = n.y;
                        t.imageEffect.uniforms.uOrigin[0] = r, t.imageEffect.uniforms.uOrigin[1] = 1 - o, t.isImmediate = !0
                    })), $(V(t), "onScrollProgress", (function (e) {
                        t.isImmediate && (t.imageEffect.uniforms.uProgress = e, t.imageEffect.isDirty = !0, t.isImmediate = !1), t.targetProgress = e
                    })), $(V(t), "onIntersection", (function (e) {
                        e && (t.isImmediate = !0)
                    })), $(V(t), "onUpdate", (function () {
                        var e = t.imageEffect.uniforms.uProgress, n = t.targetProgress;
                        if (e !== n) {
                            var r = n - e;
                            t.imageEffect.uniforms.uProgress = r < .001 ? n : e + .1 * r, t.imageEffect.isDirty = !0
                        }
                    })), $(V(t), "getPathData", (function (e) {
                        var t = e.width, n = e.height, r = .5 * t, o = .45 * r;
                        return "\n      M ".concat(r, ",0\n      C ").concat(t - o, ",0,").concat(t, ",").concat(o, ",").concat(t, ",").concat(r, "\n      L ").concat(t, ",").concat(n - r, "\n      C ").concat(t, ",").concat(n - o, ",").concat(t - o, ",").concat(n, ",").concat(r, ",").concat(n, "\n      C ").concat(o, ",").concat(n, ",0,").concat(n - o, ",0,").concat(n - r, "\n      L 0,").concat(r, "\n      C 0,").concat(o, ",").concat(o, ",0,").concat(r, ",0\n    ")
                    })), $(V(t), "destroy", (function () {
                        v.a.off(t.onResize, 10), t.imageEffect.destroy()
                    })), t.node = e, t.ref = {
                        container: t.node.querySelector(".HomeBreak-image-inner"),
                        shapePath: t.node.querySelector("path"),
                        title: t.node.querySelector(".HomeBreak-title h3")
                    }, t.imageEffect = new G.a(t.node.querySelector(".HomeBreak-image-canvas"), {
                        programKey: "parallax-program",
                        image: e.querySelector("img"),
                        pixelRatio: 2,
                        uniforms: B({uOrigin: [.5, .5], uProgress: 0}, t.updateUniforms({}, t.state)),
                        vert: "#define GLSLIFY 1\nattribute vec3 aPosition;\n\nuniform mat3 uvMatrix;\nuniform float uAmount;\nuniform vec2 uAngle;\nuniform float uZoomStart;\nuniform float uZoomEnd;\nuniform float uProgress;\nuniform vec2 uOrigin;\n\nvarying vec2 vUv;\n\nvoid main(){\n  gl_Position = vec4(aPosition, 1.);\n  vec2 uv = gl_Position.xy * .5 + .5;\n\n  vUv = (uvMatrix * vec3(uv, 1.)).xy;\n  vUv -= uOrigin;\n  vUv *= 1.0 - uAmount - mix(uZoomStart, uZoomEnd, uProgress);\n  vUv -= uAngle * mix(\n    (vec2(1.0) - uOrigin) * -uAmount,\n    uOrigin * uAmount,\n    uProgress\n  );\n  vUv += uOrigin;\n}",
                        onResize: t.onResize,
                        onUpdate: t.onUpdate,
                        onIntersection: t.onIntersection,
                        onScrollProgress: t.onScrollProgress
                    }), t.imageEffect.autoUpdate = !1, t.onResize(), v.a.on(t.onResize, 0), t
                }

                return t = i, (n = [{
                    key: "updateUniforms", value: function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return e.uAmount = t.amount, e.uAngle = [Math.cos(t.angle * Math.PI / 180), Math.sin(t.angle * Math.PI / 180)], e.uZoomStart = t.zoomStart, e.uZoomEnd = t.zoomEnd, e
                    }
                }]) && Z(t.prototype, n), r && Z(t, r), i
            }(o.a);
            $(K, "defaultState", {amount: .15, angle: 90, zoomStart: .1, zoomEnd: 0});
            var Q = n(1);

            function ee(e) {
                return (ee = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function te(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function ne(e, t) {
                return (ne = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function re(e) {
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
                    var n, r = ae(e);
                    if (t) {
                        var o = ae(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return oe(this, n)
                }
            }

            function oe(e, t) {
                return !t || "object" !== ee(t) && "function" != typeof t ? ie(e) : t
            }

            function ie(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function ae(e) {
                return (ae = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function se(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            var ce = function (e) {
                !function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && ne(e, t)
                }(i, e);
                var t, n, r, o = re(i);

                function i(e) {
                    var t;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), se(ie(t = o.call(this)), "onResize", (function () {
                        t.win.width = window.innerWidth, t.win.height = window.innerHeight, t.loadImages()
                    })), se(ie(t), "onIntersection", (function (e) {
                        e ? t.start() : t.stop()
                    })), se(ie(t), "onProgress", (function (e) {
                        t.progress = e - .5, t.stren = 1 - 2 * Math.abs(e - .5)
                    })), se(ie(t), "onMove", (function (e) {
                        var n = Object(Q.f)(e), r = n.clientX, o = n.clientY;
                        t.pos.target.x = r / t.win.width - .5, t.pos.target.y = o / t.win.height - .5
                    })), se(ie(t), "tick", (function () {
                        t.pos.x += .1 * (t.pos.target.x * t.stren - t.pos.x), t.pos.y += .1 * ((t.pos.target.y + t.progress) * t.stren - t.pos.y), b.f.set(t.ref.imageDisplay, {
                            rotationY: 20 * t.pos.x,
                            rotationX: 20 * -t.pos.y
                        }), b.f.set(t.ref.imgOuter, {
                            rotationY: 20 * t.pos.x,
                            rotationX: 20 * -t.pos.y
                        }), t.rAFID = requestAnimationFrame(t.tick)
                    })), se(ie(t), "destroy", (function () {
                        t.unbindListeners()
                    })), t.node = e, t.rAFID = null, t.ref = {
                        imageDisplay: t.node.querySelector(".HomeBreak-image-display"),
                        imgOuter: t.node.querySelector(".HomeBreak-image-img-outer"),
                        img: t.node.querySelector(".HomeBreak-image-img"),
                        light: t.node.querySelector(".HomeBreak-image-light"),
                        dark: t.node.querySelector(".HomeBreak-image-dark")
                    }, t.win = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }, t.progress = 0, t.stren = 0, t.pos = {x: 0, y: 0, target: {x: 0, y: 0}}, t.bindListeners(), t
                }

                return t = i, (n = [{
                    key: "bindListeners", value: function () {
                        this.intersectionScroll = new w.a(this.node, {
                            onIntersection: this.onIntersection,
                            onProgress: this.onProgress
                        }), v.a.on(this.onResize), this.onResize()
                    }
                }, {
                    key: "unbindListeners", value: function () {
                        this.intersectionScroll.destroy(), v.a.off(this.onResize)
                    }
                }, {
                    key: "loadImages", value: function () {
                        O.a.loadAllLazy({load: !0, mode: "cover", useAdvancedPositioning: !0}, this.node)
                    }
                }, {
                    key: "start", value: function () {
                        window.addEventListener(Q.a.move, this.onMove), cancelAnimationFrame(this.rAFID), this.tick()
                    }
                }, {
                    key: "stop", value: function () {
                        window.removeEventListener(Q.a.move, this.onMove), cancelAnimationFrame(this.rAFID)
                    }
                }]) && te(t.prototype, n), r && te(t, r), i
            }(o.a), ue = (n(61), n(62)), fe = n(39), le = n(126), de = n(70), pe = n(127);

            function he(e) {
                return (he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function ye(e, t) {
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
                    if ("string" == typeof e) return ge(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ge(e, t)
                }(e, t) || function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function ge(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function me(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function be(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? me(Object(n), !0).forEach((function (t) {
                        ke(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ve(e, t) {
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

            function Oe(e) {
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
                    var n, r = je(e);
                    if (t) {
                        var o = je(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return Pe(this, n)
                }
            }

            function Pe(e, t) {
                return !t || "object" !== he(t) && "function" != typeof t ? Se(e) : t
            }

            function Se(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function je(e) {
                return (je = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
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

            var xe = function (e) {
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
                var t, n, r, o = Oe(i);

                function i(e) {
                    var t;
                    return function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), ke(Se(t = o.call(this)), "onDragPress", (function (e) {
                        if (!("number" == typeof e.button && 0 !== e.button || t.isDragging)) {
                            var n = Object(Q.f)(e).clientX;
                            clearTimeout(t.drag.resetTimeout), t.node.dataset.dragging = !1, t.isDragging = !0, t.drag.start = n, t.drag.startProgress = t.behaviors.pos.current, t.drag.targetProgress = t.drag.startProgress, t.drag.progress = t.drag.startProgress, window.addEventListener(Q.a.move, t.onDragMove), Q.a.release.forEach((function (e) {
                                window.addEventListener(e, t.onDragRelease)
                            })), Q.e || e.preventDefault()
                        }
                    })), ke(Se(t), "onDragMove", (function (e) {
                        var n = Object(Q.f)(e).clientX, r = n - t.drag.start,
                            o = t.drag.startProgress - r / (.5 * t.list.dimensions.regionWidth), i = Date.now();
                        Math.abs(r) > 10 && (t.node.dataset.dragging = !0), t.drag.curr = n, i - t.drag.then > 100 && (t.drag.last = t.drag.curr);
                        var a = t.drag.last - t.drag.curr;
                        t.drag._acceleration += a * (1 / t.win.width), t.drag._acceleration = Object(fe.a)(t.drag._acceleration, -1, 1), t.drag.targetProgress = o, t.drag.then = i, t.drag.last = t.drag.curr
                    })), ke(Se(t), "onDragRelease", (function (e) {
                        t.isDragging = !1, Date.now() - t.drag.then > 50 && (t.drag._acceleration = 0, t.drag.acceleration = 0), t.drag.resetTimeout = setTimeout((function () {
                            t.node.dataset.dragging = !1
                        }), 200), window.removeEventListener(Q.a.move, t.onDragMove), Q.a.release.forEach((function (e) {
                            window.removeEventListener(e, t.onDragRelease)
                        }))
                    })), ke(Se(t), "onSlideshowOver", (function (e) {
                        (e.target.classList.contains("HomeProjects-item") || e.target.classList.contains("HomeProjects-item-image")) && (t.isHovering = !0)
                    })), ke(Se(t), "onSlideshowOut", (function (e) {
                        (e.target.classList.contains("HomeProjects-item") || e.target.classList.contains("HomeProjects-item-image")) && (t.isHovering = !1)
                    })), ke(Se(t), "onStartProgressAnimation", (function () {
                        t.isAnimating = !0
                    })), ke(Se(t), "onEndProgressAnimation", (function () {
                        t.isAnimating = !1
                    })), ke(Se(t), "onGhostModeChange", (function (e) {
                        t.isGhostMode = e, t.onResize()
                    })), ke(Se(t), "onResize", (function () {
                        t.win.width = window.innerWidth, t.win.height = window.innerHeight, t.win.max = Math.max(t.win.width, t.win.height), t.list.props.spacing = t.isGhostMode ? {
                            value: -Math.min(20, .05 * t.win.width),
                            unit: "px"
                        } : t.win.width > 1024 ? {value: 48, unit: "px"} : {
                            value: 16,
                            unit: "px"
                        }, t.list.setSize(t.getSlideshowDimensions()), t.resizeItems(), t.updatePositions()
                    })), ke(Se(t), "onProgress", (function (e) {
                        t.list.setProgress(e), t.updatePositions()
                    })), ke(Se(t), "onCloneItem", (function (e) {
                        var n = t.slideshowNodes[e], r = n.node.parentNode, o = n.node.cloneNode(!0),
                            i = o.querySelector(".HomeProjects-item-image");
                        r.appendChild(o), t.slideshowNodes.push(be(be({}, n), {}, {
                            node: o,
                            imageNode: i,
                            isImageLoadAdded: !1,
                            inViewport: null
                        })), t.loadImages()
                    })), ke(Se(t), "tick", (function () {
                        t.drag._acceleration *= .94, Math.abs(t.drag._acceleration) < .001 ? (t.drag._acceleration = 0, t.drag.acceleration = 0) : t.drag.acceleration = Object(ue.a)(Math.min(1, t.drag._acceleration)), t.isDragging && (t.drag.progress += .15 * (t.drag.targetProgress - t.drag.progress), t.behaviors.pos.target = t.drag.progress, t.behaviors.setProgress(t.behaviors.pos.target)), t.isAnimating || t.isDragging || (t.isHovering ? t.pos.speed *= .95 : t.pos.speed += .1 * (1 - t.pos.speed), t.behaviors.pos.target += .09 * t.drag.acceleration + .001 * t.pos.speed, t.behaviors.setProgress(t.behaviors.pos.target)), t.rAFID = requestAnimationFrame(t.tick)
                    })), ke(Se(t), "destroy", (function () {
                        t.unbindListeners()
                    })), t.node = e, t.isGhostMode = !1, t.ref = {
                        focus: t.node,
                        slideshow: t.node.querySelector(".HomeProjects-display"),
                        slideshowDisplay: t.node.querySelector(".HomeProjects-size"),
                        items: Array.from(t.node.querySelectorAll(".HomeProjects-item"))
                    }, t.win = {width: 0, height: 0, max: 0}, t.itemLen = t.ref.items.length, t.pos = {
                        speed: 0,
                        dragOffset: 0
                    }, t.drag = {
                        start: 0,
                        startProgress: 0,
                        targetProgress: 0,
                        progress: 0,
                        curr: 0,
                        last: 0,
                        then: Date.now(),
                        _acceleration: 0,
                        acceleration: 0,
                        resetTimeout: null
                    }, t.progress = 0, t.behaviors = new de.a({
                        nodes: {focus: t.ref.focus},
                        numSlides: t.itemLen,
                        isAutoplay: !1,
                        isInfinite: !0,
                        transitionDuration: 600,
                        onProgress: t.onProgress,
                        onStartProgress: t.onStartProgressAnimation,
                        onEndProgress: t.onEndProgressAnimation
                    }), t.slideshowNodes = t.buildItems(t.ref.items), t.isHovering = !1, t.isAnimating = !1, t.list = new pe.a(be(be({items: t.slideshowNodes}, t.getSlideshowDimensions()), {}, {
                        spacing: {
                            value: 15,
                            unit: "%"
                        }, isInfinite: !0, onCloneItem: t.onCloneItem
                    })), t.updatePositions(), t.loadImages(), t.bindListeners(), t.behaviors.setIndex(0, {isInstant: !0}), t.rAFID = requestAnimationFrame(t.tick), t
                }

                return t = i, (n = [{
                    key: "buildItems", value: function (e) {
                        var t = this;
                        return e.map((function (e, n) {
                            var r = e.querySelector(".HomeProjects-item-image"),
                                o = e.querySelector(".HomeProjects-item-caption-index");
                            // o.innerText = "(".concat(Object(le.a)(Number(o.dataset.index), 2), ")");
                            o.innerText = '';
                            var i = e.querySelector("img"),
                                a = n % 2 == 0 ? .1 + .2 * Math.random() : .1 * Math.random();
                            return be(be({}, r ? be({}, t.getImageDimensions(i)) : {
                                width: 500,
                                height: 700
                            }), {}, {
                                index: n,
                                scale: 1,
                                node: e,
                                imageNode: r,
                                isImageLoadAdded: !1,
                                inViewport: null
                            })
                        }))
                    }
                }, {
                    key: "getImageDimensions", value: function (e) {
                        var t = ye(e.dataset.imageDimensions.split("x"), 2), n = t[0], r = t[1];
                        return {width: Number(n), height: Number(r)}
                    }
                }, {
                    key: "getSlideshowDimensions", value: function () {
                        return {
                            regionWidth: this.ref.slideshow.clientWidth,
                            regionHeight: this.ref.slideshow.clientHeight,
                            maxWidth: this.ref.slideshowDisplay.clientWidth,
                            maxHeight: this.ref.slideshowDisplay.clientHeight
                            // maxHeight: 400
                        }
                    }
                }, {
                    key: "bindListeners", value: function () {
                        var e = this;
                        s.a.on("ghostMode:change", this.onGhostModeChange), v.a.on(this.onResize), this.ref.slideshow.addEventListener(Q.a.over, this.onSlideshowOver), this.ref.slideshow.addEventListener(Q.a.press, this.onDragPress), Q.a.out.forEach((function (t) {
                            e.ref.slideshow.addEventListener(t, e.onSlideshowOut)
                        })), this.onResize()
                    }
                }, {
                    key: "unbindListeners", value: function () {
                        var e = this;
                        s.a.off("ghostMode:change", this.onGhostModeChange), v.a.off(this.onResize), this.ref.slideshow.removeEventListener(Q.a.over, this.onSlideshowOver), this.ref.slideshow.removeEventListener(Q.a.press, this.onDragPress), window.removeEventListener(Q.a.move, this.onDragMove), Q.a.release.forEach((function (t) {
                            window.removeEventListener(t, e.onDragRelease)
                        })), Q.a.out.forEach((function (t) {
                            e.ref.slideshow.removeEventListener(t, e.onSlideshowOut)
                        }))
                    }
                }, {
                    key: "resizeItems", value: function () {
                        for (var e = 0, t = 0, n = this.slideshowNodes.length; t < n; t += 1) {
                            var r = this.list.items[t];
                            this.slideshowNodes[t].node.style.width = r.width + "px", this.slideshowNodes[t].node.style.height = r.height + "px", e = Math.max(e, r.height)
                        }
                        this.maxItemsHeight = e
                    }
                }, {
                    key: "updatePositions", value: function () {
                        for (var e = this.list.dimensions.regionHeight * (this.isGhostMode ? 1 : .75), t = this.itemLen, n = 0, r = this.slideshowNodes.length; n < r; n += 1) {
                            var o = this.slideshowNodes[n], i = this.list.items[n], a = Math.abs(i.proximity),
                                s = Math.min(1, a), c = n % t / (t - 1),
                                u = Math.round(100 * Math.sin(2 * c * Math.PI)) / 100 * 1 - a / r * .8,
                                f = Object(fe.a)(.5 * (e - i.height), 0, 80), l = .5 * -i.height + u * f,
                                d = !!(.5 + s << 0), p = o.inViewport !== i.inViewport;
                            (o.inViewport || p) && (d !== o.isAriaHidden && (o.node.setAttribute("aria-hidden", d), o.isAriaHidden = d), o.node.style.transform = "translate3d(" + i.x + "px, " + l + "px, 0)", o.inViewport = i.inViewport)
                        }
                    }
                }, {
                    key: "loadImages", value: function () {
                        this.slideshowNodes.forEach((function (e) {
                            var t = e.node.querySelector("img");
                            t && !e.isImageLoadAdded && (t.onload = function () {
                                e.node.dataset.loaded = !0, t.dataset.loaded = !0
                            }, e.isImageLoadAdded = !0, O.a.loadLazy(t, {
                                load: !0,
                                mode: "cover",
                                useAdvancedPositioning: !0
                            }))
                        }))
                    }
                }]) && ve(t.prototype, n), r && ve(t, r), i
            }(o.a);
            ke(xe, "defaultProps", {});
            r.a.register("Home", (function (e) {
                return new m(e)
            })), r.a.register("HomeGallery", (function (e) {
                return new N(e)
            })), r.a.register("HomeBreak1", (function (e) {
                return new K(e)
            })), r.a.register("HomeBreak3", (function (e) {
                return new ce(e)
            })), r.a.register("HomeProjects", (function (e) {
                return new xe(e)
            }))
        }
    })
}));