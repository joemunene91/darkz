/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
function hexToRgb(t) {
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(t, i, n, s) {
        return i + i + n + n + s + s
    });
    var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return i ? {
        r: parseInt(i[1], 16),
        g: parseInt(i[2], 16),
        b: parseInt(i[3], 16)
    } : null
}
function clamp(t, i, n) {
    return Math.min(Math.max(t, i), n)
}
function isInArray(t, i) {
    return i.indexOf(t) > -1
}
!function(t, i) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? i(t, !0) : function(t) {
        if (!t.document)
            throw Error("jQuery requires a window with a document");
        return i(t)
    }
    : i(t)
}("undefined" != typeof window ? window : this, function(t, i) {
    var n = []
      , s = t.document
      , r = n.slice
      , o = n.concat
      , a = n.push
      , l = n.indexOf
      , c = {}
      , u = c.toString
      , h = c.hasOwnProperty
      , d = {}
      , p = "1.12.4"
      , f = function(t, i) {
        return new f.fn.init(t,i)
    }
      , g = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , m = /^-ms-/
      , v = /-([\da-z])/gi
      , y = function(t, i) {
        return i.toUpperCase()
    };
    function b(t) {
        var i = !!t && "length"in t && t.length
          , n = f.type(t);
        return !("function" === n || f.isWindow(t)) && ("array" === n || 0 === i || "number" == typeof i && i > 0 && i - 1 in t)
    }
    f.fn = f.prototype = {
        jquery: p,
        constructor: f,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : r.call(this)
        },
        pushStack: function(t) {
            var i = f.merge(this.constructor(), t);
            return i.prevObject = this,
            i.context = this.context,
            i
        },
        each: function(t) {
            return f.each(this, t)
        },
        map: function(t) {
            return this.pushStack(f.map(this, function(i, n) {
                return t.call(i, n, i)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var i = this.length
              , n = +t + (0 > t ? i : 0);
            return this.pushStack(n >= 0 && i > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    f.extend = f.fn.extend = function() {
        var t, i, n, s, r, o, a = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof a && (u = a,
        a = arguments[l] || {},
        l++),
        "object" == typeof a || f.isFunction(a) || (a = {}),
        l === c && (a = this,
        l--); c > l; l++)
            if (null != (r = arguments[l]))
                for (s in r)
                    t = a[s],
                    a !== (n = r[s]) && (u && n && (f.isPlainObject(n) || (i = f.isArray(n))) ? (i ? (i = !1,
                    o = t && f.isArray(t) ? t : []) : o = t && f.isPlainObject(t) ? t : {},
                    a[s] = f.extend(u, o, n)) : void 0 !== n && (a[s] = n));
        return a
    }
    ,
    f.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === f.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === f.type(t)
        }
        ,
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var i = t && t.toString();
            return !f.isArray(t) && i - parseFloat(i) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var i;
            for (i in t)
                return !1;
            return !0
        },
        isPlainObject: function(t) {
            var i;
            if (!t || "object" !== f.type(t) || t.nodeType || f.isWindow(t))
                return !1;
            try {
                if (t.constructor && !h.call(t, "constructor") && !h.call(t.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!d.ownFirst)
                for (i in t)
                    return h.call(t, i);
            for (i in t)
                ;
            return void 0 === i || h.call(t, i)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
        },
        globalEval: function(i) {
            i && f.trim(i) && (t.execScript || function(i) {
                t.eval.call(t, i)
            }
            )(i)
        },
        camelCase: function(t) {
            return t.replace(m, "ms-").replace(v, y)
        },
        nodeName: function(t, i) {
            return t.nodeName && t.nodeName.toLowerCase() === i.toLowerCase()
        },
        each: function(t, i) {
            var n, s = 0;
            if (b(t))
                for (n = t.length; n > s && !1 !== i.call(t[s], s, t[s]); s++)
                    ;
            else
                for (s in t)
                    if (!1 === i.call(t[s], s, t[s]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(g, "")
        },
        makeArray: function(t, i) {
            var n = i || [];
            return null != t && (b(Object(t)) ? f.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)),
            n
        },
        inArray: function(t, i, n) {
            var s;
            if (i) {
                if (l)
                    return l.call(i, t, n);
                for (s = i.length,
                n = n ? 0 > n ? Math.max(0, s + n) : n : 0; s > n; n++)
                    if (n in i && i[n] === t)
                        return n
            }
            return -1
        },
        merge: function(t, i) {
            for (var n = +i.length, s = 0, r = t.length; n > s; )
                t[r++] = i[s++];
            if (n != n)
                for (; void 0 !== i[s]; )
                    t[r++] = i[s++];
            return t.length = r,
            t
        },
        grep: function(t, i, n) {
            for (var s, r = [], o = 0, a = t.length, l = !n; a > o; o++)
                (s = !i(t[o], o)) !== l && r.push(t[o]);
            return r
        },
        map: function(t, i, n) {
            var s, r, a = 0, l = [];
            if (b(t))
                for (s = t.length; s > a; a++)
                    null != (r = i(t[a], a, n)) && l.push(r);
            else
                for (a in t)
                    null != (r = i(t[a], a, n)) && l.push(r);
            return o.apply([], l)
        },
        guid: 1,
        proxy: function(t, i) {
            var n, s, o;
            return "string" == typeof i && (o = t[i],
            i = t,
            t = o),
            f.isFunction(t) ? (n = r.call(arguments, 2),
            (s = function() {
                return t.apply(i || this, n.concat(r.call(arguments)))
            }
            ).guid = t.guid = t.guid || f.guid++,
            s) : void 0
        },
        now: function() {
            return +new Date
        },
        support: d
    }),
    "function" == typeof Symbol && (f.fn[Symbol.iterator] = n[Symbol.iterator]),
    f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, i) {
        c["[object " + i + "]"] = i.toLowerCase()
    });
    var $ = function(t) {
        var i, n, s, r, o, a, l, c, u, h, d, p, f, g, m, v, y, b, $, x = "sizzle" + 1 * new Date, w = t.document, _ = 0, C = 0, T = ea(), E = ea(), k = ea(), A = function(t, i) {
            return t === i && (d = !0),
            0
        }, S = -2147483648, D = {}.hasOwnProperty, N = [], L = N.pop, j = N.push, O = N.push, z = N.slice, P = function(t, i) {
            for (var n = 0, s = t.length; s > n; n++)
                if (t[n] === i)
                    return n;
            return -1
        }, I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", M = "\\[" + H + "*(" + q + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + H + "*\\]", F = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", B = RegExp(H + "+", "g"), W = RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"), R = RegExp("^" + H + "*," + H + "*"), X = RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), U = RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"), V = RegExp(F), Y = RegExp("^" + q + "$"), Q = {
            ID: RegExp("^#(" + q + ")"),
            CLASS: RegExp("^\\.(" + q + ")"),
            TAG: RegExp("^(" + q + "|[*])"),
            ATTR: RegExp("^" + M),
            PSEUDO: RegExp("^" + F),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
            bool: RegExp("^(?:" + I + ")$", "i"),
            needsContext: RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, et = /'|\\/g, ei = RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"), en = function(t, i, n) {
            var s = "0x" + i - 65536;
            return s != s || n ? i : 0 > s ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
        }, es = function() {
            p()
        };
        try {
            O.apply(N = z.call(w.childNodes), w.childNodes),
            N[w.childNodes.length].nodeType
        } catch (er) {
            O = {
                apply: N.length ? function(t, i) {
                    j.apply(t, z.call(i))
                }
                : function(t, i) {
                    for (var n = t.length, s = 0; t[n++] = i[s++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function eo(t, i, s, r) {
            var o, l, u, h, d, g, y, b, _ = i && i.ownerDocument, C = i ? i.nodeType : 9;
            if (s = s || [],
            "string" != typeof t || !t || 1 !== C && 9 !== C && 11 !== C)
                return s;
            if (!r && ((i ? i.ownerDocument || i : w) !== f && p(i),
            i = i || f,
            m)) {
                if (11 !== C && (g = Z.exec(t))) {
                    if (o = g[1]) {
                        if (9 === C) {
                            if (!(u = i.getElementById(o)))
                                return s;
                            if (u.id === o)
                                return s.push(u),
                                s
                        } else if (_ && (u = _.getElementById(o)) && $(i, u) && u.id === o)
                            return s.push(u),
                            s
                    } else {
                        if (g[2])
                            return O.apply(s, i.getElementsByTagName(t)),
                            s;
                        if ((o = g[3]) && n.getElementsByClassName && i.getElementsByClassName)
                            return O.apply(s, i.getElementsByClassName(o)),
                            s
                    }
                }
                if (n.qsa && !k[t + " "] && (!v || !v.test(t))) {
                    if (1 !== C)
                        _ = i,
                        b = t;
                    else if ("object" !== i.nodeName.toLowerCase()) {
                        for ((h = i.getAttribute("id")) ? h = h.replace(et, "\\$&") : i.setAttribute("id", h = x),
                        l = (y = a(t)).length,
                        d = Y.test(h) ? "#" + h : "[id='" + h + "']"; l--; )
                            y[l] = d + " " + ev(y[l]);
                        b = y.join(","),
                        _ = ee.test(t) && eg(i.parentNode) || i
                    }
                    if (b)
                        try {
                            return O.apply(s, _.querySelectorAll(b)),
                            s
                        } catch (T) {} finally {
                            h === x && i.removeAttribute("id")
                        }
                }
            }
            return c(t.replace(W, "$1"), i, s, r)
        }
        function ea() {
            var t = [];
            function i(n, r) {
                return t.push(n + " ") > s.cacheLength && delete i[t.shift()],
                i[n + " "] = r
            }
            return i
        }
        function el(t) {
            return t[x] = !0,
            t
        }
        function ec(t) {
            var i = f.createElement("div");
            try {
                return !!t(i)
            } catch (n) {
                return !1
            } finally {
                i.parentNode && i.parentNode.removeChild(i),
                i = null
            }
        }
        function eu(t, i) {
            for (var n = t.split("|"), r = n.length; r--; )
                s.attrHandle[n[r]] = i
        }
        function eh(t, i) {
            var n = i && t
              , s = n && 1 === t.nodeType && 1 === i.nodeType && (~i.sourceIndex || S) - (~t.sourceIndex || S);
            if (s)
                return s;
            if (n) {
                for (; n = n.nextSibling; )
                    if (n === i)
                        return -1
            }
            return t ? 1 : -1
        }
        function ed(t) {
            return function(i) {
                return "input" === i.nodeName.toLowerCase() && i.type === t
            }
        }
        function ep(t) {
            return function(i) {
                var n = i.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && i.type === t
            }
        }
        function ef(t) {
            return el(function(i) {
                return i = +i,
                el(function(n, s) {
                    for (var r, o = t([], n.length, i), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(s[r] = n[r]))
                })
            })
        }
        function eg(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (i in n = eo.support = {},
        o = eo.isXML = function(t) {
            var i = t && (t.ownerDocument || t).documentElement;
            return !!i && "HTML" !== i.nodeName
        }
        ,
        p = eo.setDocument = function(t) {
            var i, r, a = t ? t.ownerDocument || t : w;
            return a !== f && 9 === a.nodeType && a.documentElement && (g = (f = a).documentElement,
            m = !o(f),
            (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", es, !1) : r.attachEvent && r.attachEvent("onunload", es)),
            n.attributes = ec(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            n.getElementsByTagName = ec(function(t) {
                return t.appendChild(f.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = G.test(f.getElementsByClassName),
            n.getById = ec(function(t) {
                return g.appendChild(t).id = x,
                !f.getElementsByName || !f.getElementsByName(x).length
            }),
            n.getById ? (s.find.ID = function(t, i) {
                if (void 0 !== i.getElementById && m) {
                    var n = i.getElementById(t);
                    return n ? [n] : []
                }
            }
            ,
            s.filter.ID = function(t) {
                var i = t.replace(ei, en);
                return function(t) {
                    return t.getAttribute("id") === i
                }
            }
            ) : (delete s.find.ID,
            s.filter.ID = function(t) {
                var i = t.replace(ei, en);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === i
                }
            }
            ),
            s.find.TAG = n.getElementsByTagName ? function(t, i) {
                return void 0 !== i.getElementsByTagName ? i.getElementsByTagName(t) : n.qsa ? i.querySelectorAll(t) : void 0
            }
            : function(t, i) {
                var n, s = [], r = 0, o = i.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && s.push(n);
                    return s
                }
                return o
            }
            ,
            s.find.CLASS = n.getElementsByClassName && function(t, i) {
                return void 0 !== i.getElementsByClassName && m ? i.getElementsByClassName(t) : void 0
            }
            ,
            y = [],
            v = [],
            (n.qsa = G.test(f.querySelectorAll)) && (ec(function(t) {
                g.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + H + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || v.push("\\[" + H + "*(?:value|" + I + ")"),
                t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="),
                t.querySelectorAll(":checked").length || v.push(":checked"),
                t.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
            }),
            ec(function(t) {
                var i = f.createElement("input");
                i.setAttribute("type", "hidden"),
                t.appendChild(i).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && v.push("name" + H + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                v.push(",.*:")
            })),
            (n.matchesSelector = G.test(b = g.matches || g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector)) && ec(function(t) {
                n.disconnectedMatch = b.call(t, "div"),
                b.call(t, "[s!='']:x"),
                y.push("!=", F)
            }),
            v = v.length && RegExp(v.join("|")),
            y = y.length && RegExp(y.join("|")),
            $ = (i = G.test(g.compareDocumentPosition)) || G.test(g.contains) ? function(t, i) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , s = i && i.parentNode;
                return t === s || !(!s || 1 !== s.nodeType || !(n.contains ? n.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
            }
            : function(t, i) {
                if (i) {
                    for (; i = i.parentNode; )
                        if (i === t)
                            return !0
                }
                return !1
            }
            ,
            A = i ? function(t, i) {
                if (t === i)
                    return d = !0,
                    0;
                var s = !t.compareDocumentPosition - !i.compareDocumentPosition;
                return s || (1 & (s = (t.ownerDocument || t) === (i.ownerDocument || i) ? t.compareDocumentPosition(i) : 1) || !n.sortDetached && i.compareDocumentPosition(t) === s ? t === f || t.ownerDocument === w && $(w, t) ? -1 : i === f || i.ownerDocument === w && $(w, i) ? 1 : h ? P(h, t) - P(h, i) : 0 : 4 & s ? -1 : 1)
            }
            : function(t, i) {
                if (t === i)
                    return d = !0,
                    0;
                var n, s = 0, r = t.parentNode, o = i.parentNode, a = [t], l = [i];
                if (!r || !o)
                    return t === f ? -1 : i === f ? 1 : r ? -1 : o ? 1 : h ? P(h, t) - P(h, i) : 0;
                if (r === o)
                    return eh(t, i);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (n = i; n = n.parentNode; )
                    l.unshift(n);
                for (; a[s] === l[s]; )
                    s++;
                return s ? eh(a[s], l[s]) : a[s] === w ? -1 : l[s] === w ? 1 : 0
            }
            ),
            f
        }
        ,
        eo.matches = function(t, i) {
            return eo(t, null, null, i)
        }
        ,
        eo.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== f && p(t),
            i = i.replace(U, "='$1']"),
            n.matchesSelector && m && !k[i + " "] && (!y || !y.test(i)) && (!v || !v.test(i)))
                try {
                    var s = b.call(t, i);
                    if (s || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return s
                } catch (r) {}
            return eo(i, f, null, [t]).length > 0
        }
        ,
        eo.contains = function(t, i) {
            return (t.ownerDocument || t) !== f && p(t),
            $(t, i)
        }
        ,
        eo.attr = function(t, i) {
            (t.ownerDocument || t) !== f && p(t);
            var r = s.attrHandle[i.toLowerCase()]
              , o = r && D.call(s.attrHandle, i.toLowerCase()) ? r(t, i, !m) : void 0;
            return void 0 !== o ? o : n.attributes || !m ? t.getAttribute(i) : (o = t.getAttributeNode(i)) && o.specified ? o.value : null
        }
        ,
        eo.error = function(t) {
            throw Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        eo.uniqueSort = function(t) {
            var i, s = [], r = 0, o = 0;
            if (d = !n.detectDuplicates,
            h = !n.sortStable && t.slice(0),
            t.sort(A),
            d) {
                for (; i = t[o++]; )
                    i === t[o] && (r = s.push(o));
                for (; r--; )
                    t.splice(s[r], 1)
            }
            return h = null,
            t
        }
        ,
        r = eo.getText = function(t) {
            var i, n = "", s = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += r(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; i = t[s++]; )
                    n += r(i);
            return n
        }
        ,
        (s = eo.selectors = {
            cacheLength: 50,
            createPseudo: el,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(ei, en),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(ei, en),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || eo.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && eo.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var i, n = !t[6] && t[2];
                    return Q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (i = a(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i),
                    t[2] = n.slice(0, i)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var i = t.replace(ei, en).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === i
                    }
                },
                CLASS: function(t) {
                    var i = T[t + " "];
                    return i || (i = RegExp("(^|" + H + ")" + t + "(" + H + "|$)"),
                    T(t, function(t) {
                        return i.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    }))
                },
                ATTR: function(t, i, n) {
                    return function(s) {
                        var r = eo.attr(s, t);
                        return null == r ? "!=" === i : !i || (r += "",
                        "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, i, n, s, r) {
                    var o = "nth" !== t.slice(0, 3)
                      , a = "last" !== t.slice(-4)
                      , l = "of-type" === i;
                    return 1 === s && 0 === r ? function(t) {
                        return !!t.parentNode
                    }
                    : function(i, n, c) {
                        var u, h, d, p, f, g, m = o !== a ? "nextSibling" : "previousSibling", v = i.parentNode, y = l && i.nodeName.toLowerCase(), b = !c && !l, $ = !1;
                        if (v) {
                            if (o) {
                                for (; m; ) {
                                    for (p = i; p = p[m]; )
                                        if (l ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    g = m = "only" === t && !g && "nextSibling"
                                }
                                return !0
                            }
                            if (g = [a ? v.firstChild : v.lastChild],
                            a && b) {
                                for ($ = (f = (u = (h = (d = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === _ && u[1]) && u[2],
                                p = f && v.childNodes[f]; p = ++f && p && p[m] || ($ = f = 0) || g.pop(); )
                                    if (1 === p.nodeType && ++$ && p === i) {
                                        h[t] = [_, f, $];
                                        break
                                    }
                            } else if (b && ($ = f = (u = (h = (d = (p = i)[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === _ && u[1]),
                            !1 === $)
                                for (; (p = ++f && p && p[m] || ($ = f = 0) || g.pop()) && (!((l ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++$) || (b && ((h = (d = p[x] || (p[x] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [_, $]),
                                p !== i)); )
                                    ;
                            return ($ -= r) === s || $ % s == 0 && $ / s >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var n, r = s.pseudos[t] || s.setFilters[t.toLowerCase()] || eo.error("unsupported pseudo: " + t);
                    return r[x] ? r(i) : r.length > 1 ? (n = [t, t, "", i],
                    s.setFilters.hasOwnProperty(t.toLowerCase()) ? el(function(t, n) {
                        for (var s, o = r(t, i), a = o.length; a--; )
                            t[s = P(t, o[a])] = !(n[s] = o[a])
                    }) : function(t) {
                        return r(t, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: el(function(t) {
                    var i = []
                      , n = []
                      , s = l(t.replace(W, "$1"));
                    return s[x] ? el(function(t, i, n, r) {
                        for (var o, a = s(t, null, r, []), l = t.length; l--; )
                            (o = a[l]) && (t[l] = !(i[l] = o))
                    }) : function(t, r, o) {
                        return i[0] = t,
                        s(i, null, o, n),
                        i[0] = null,
                        !n.pop()
                    }
                }),
                has: el(function(t) {
                    return function(i) {
                        return eo(t, i).length > 0
                    }
                }),
                contains: el(function(t) {
                    return t = t.replace(ei, en),
                    function(i) {
                        return (i.textContent || i.innerText || r(i)).indexOf(t) > -1
                    }
                }),
                lang: el(function(t) {
                    return Y.test(t || "") || eo.error("unsupported lang: " + t),
                    t = t.replace(ei, en).toLowerCase(),
                    function(i) {
                        var n;
                        do
                            if (n = m ? i.lang : i.getAttribute("xml:lang") || i.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                        while ((i = i.parentNode) && 1 === i.nodeType);
                        return !1
                    }
                }),
                target: function(i) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === i.id
                },
                root: function(t) {
                    return t === g
                },
                focus: function(t) {
                    return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return !1 === t.disabled
                },
                disabled: function(t) {
                    return !0 === t.disabled
                },
                checked: function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && !!t.checked || "option" === i && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !s.pseudos.empty(t)
                },
                header: function(t) {
                    return J.test(t.nodeName)
                },
                input: function(t) {
                    return K.test(t.nodeName)
                },
                button: function(t) {
                    var i = t.nodeName.toLowerCase();
                    return "input" === i && "button" === t.type || "button" === i
                },
                text: function(t) {
                    var i;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (i = t.getAttribute("type")) || "text" === i.toLowerCase())
                },
                first: ef(function() {
                    return [0]
                }),
                last: ef(function(t, i) {
                    return [i - 1]
                }),
                eq: ef(function(t, i, n) {
                    return [0 > n ? n + i : n]
                }),
                even: ef(function(t, i) {
                    for (var n = 0; i > n; n += 2)
                        t.push(n);
                    return t
                }),
                odd: ef(function(t, i) {
                    for (var n = 1; i > n; n += 2)
                        t.push(n);
                    return t
                }),
                lt: ef(function(t, i, n) {
                    for (var s = 0 > n ? n + i : n; --s >= 0; )
                        t.push(s);
                    return t
                }),
                gt: ef(function(t, i, n) {
                    for (var s = 0 > n ? n + i : n; ++s < i; )
                        t.push(s);
                    return t
                })
            }
        }).pseudos.nth = s.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            s.pseudos[i] = ed(i);
        for (i in {
            submit: !0,
            reset: !0
        })
            s.pseudos[i] = ep(i);
        function em() {}
        function ev(t) {
            for (var i = 0, n = t.length, s = ""; n > i; i++)
                s += t[i].value;
            return s
        }
        function ey(t, i, n) {
            var s = i.dir
              , r = n && "parentNode" === s
              , o = C++;
            return i.first ? function(i, n, o) {
                for (; i = i[s]; )
                    if (1 === i.nodeType || r)
                        return t(i, n, o)
            }
            : function(i, n, a) {
                var l, c, u, h = [_, o];
                if (a) {
                    for (; i = i[s]; )
                        if ((1 === i.nodeType || r) && t(i, n, a))
                            return !0
                } else
                    for (; i = i[s]; )
                        if (1 === i.nodeType || r) {
                            if ((l = (c = (u = i[x] || (i[x] = {}))[i.uniqueID] || (u[i.uniqueID] = {}))[s]) && l[0] === _ && l[1] === o)
                                return h[2] = l[2];
                            if (c[s] = h,
                            h[2] = t(i, n, a))
                                return !0
                        }
            }
        }
        function e8(t) {
            return t.length > 1 ? function(i, n, s) {
                for (var r = t.length; r--; )
                    if (!t[r](i, n, s))
                        return !1;
                return !0
            }
            : t[0]
        }
        function eb(t, i, n, s, r) {
            for (var o, a = [], l = 0, c = t.length, u = null != i; c > l; l++)
                (o = t[l]) && (n && !n(o, s, r) || (a.push(o),
                u && i.push(l)));
            return a
        }
        function e$(t, i, n, s, r, o) {
            return s && !s[x] && (s = e$(s)),
            r && !r[x] && (r = e$(r, o)),
            el(function(o, a, l, c) {
                var u, h, d, p = [], f = [], g = a.length, m = o || function t(i, n, s) {
                    for (var r = 0, o = n.length; o > r; r++)
                        eo(i, n[r], s);
                    return s
                }(i || "*", l.nodeType ? [l] : l, []), v = t && (o || !i) ? eb(m, p, t, l, c) : m, y = n ? r || (o ? t : g || s) ? [] : a : v;
                if (n && n(v, y, l, c),
                s)
                    for (u = eb(y, f),
                    s(u, [], l, c),
                    h = u.length; h--; )
                        (d = u[h]) && (y[f[h]] = !(v[f[h]] = d));
                if (o) {
                    if (r || t) {
                        if (r) {
                            for (u = [],
                            h = y.length; h--; )
                                (d = y[h]) && u.push(v[h] = d);
                            r(null, y = [], u, c)
                        }
                        for (h = y.length; h--; )
                            (d = y[h]) && (u = r ? P(o, d) : p[h]) > -1 && (o[u] = !(a[u] = d))
                    }
                } else
                    y = eb(y === a ? y.splice(g, y.length) : y),
                    r ? r(null, a, y, c) : O.apply(a, y)
            })
        }
        function ex(t) {
            for (var i, n, r, o = t.length, a = s.relative[t[0].type], l = a || s.relative[" "], c = a ? 1 : 0, h = ey(function(t) {
                return t === i
            }, l, !0), d = ey(function(t) {
                return P(i, t) > -1
            }, l, !0), p = [function(t, n, s) {
                var r = !a && (s || n !== u) || ((i = n).nodeType ? h(t, n, s) : d(t, n, s));
                return i = null,
                r
            }
            ]; o > c; c++)
                if (n = s.relative[t[c].type])
                    p = [ey(e8(p), n)];
                else {
                    if ((n = s.filter[t[c].type].apply(null, t[c].matches))[x]) {
                        for (r = ++c; o > r && !s.relative[t[r].type]; r++)
                            ;
                        return e$(c > 1 && e8(p), c > 1 && ev(t.slice(0, c - 1).concat({
                            value: " " === t[c - 2].type ? "*" : ""
                        })).replace(W, "$1"), n, r > c && ex(t.slice(c, r)), o > r && ex(t = t.slice(r)), o > r && ev(t))
                    }
                    p.push(n)
                }
            return e8(p)
        }
        return em.prototype = s.filters = s.pseudos,
        s.setFilters = new em,
        a = eo.tokenize = function(t, i) {
            var n, r, o, a, l, c, u, h = E[t + " "];
            if (h)
                return i ? 0 : h.slice(0);
            for (l = t,
            c = [],
            u = s.preFilter; l; ) {
                for (a in (!n || (r = R.exec(l))) && (r && (l = l.slice(r[0].length) || l),
                c.push(o = [])),
                n = !1,
                (r = X.exec(l)) && (n = r.shift(),
                o.push({
                    value: n,
                    type: r[0].replace(W, " ")
                }),
                l = l.slice(n.length)),
                s.filter)
                    (r = Q[a].exec(l)) && (!u[a] || (r = u[a](r))) && (n = r.shift(),
                    o.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    l = l.slice(n.length));
                if (!n)
                    break
            }
            return i ? l.length : l ? eo.error(t) : E(t, c).slice(0)
        }
        ,
        l = eo.compile = function(t, i) {
            var n, r, o, l, c, h, d = [], g = [], v = k[t + " "];
            if (!v) {
                for (i || (i = a(t)),
                h = i.length; h--; )
                    (v = ex(i[h]))[x] ? d.push(v) : g.push(v);
                (v = k(t, (n = g,
                o = (r = d).length > 0,
                l = n.length > 0,
                c = function(t, i, a, c, h) {
                    var d, g, v, y = 0, b = "0", $ = t && [], x = [], w = u, C = t || l && s.find.TAG("*", h), T = _ += null == w ? 1 : Math.random() || .1, E = C.length;
                    for (h && (u = i === f || i || h); b !== E && null != (d = C[b]); b++) {
                        if (l && d) {
                            for (g = 0,
                            i || d.ownerDocument === f || (p(d),
                            a = !m); v = n[g++]; )
                                if (v(d, i || f, a)) {
                                    c.push(d);
                                    break
                                }
                            h && (_ = T)
                        }
                        o && ((d = !v && d) && y--,
                        t && $.push(d))
                    }
                    if (y += b,
                    o && b !== y) {
                        for (g = 0; v = r[g++]; )
                            v($, x, i, a);
                        if (t) {
                            if (y > 0)
                                for (; b--; )
                                    $[b] || x[b] || (x[b] = L.call(c));
                            x = eb(x)
                        }
                        O.apply(c, x),
                        h && !t && x.length > 0 && y + r.length > 1 && eo.uniqueSort(c)
                    }
                    return h && (_ = T,
                    u = w),
                    $
                }
                ,
                o ? el(c) : c))).selector = t
            }
            return v
        }
        ,
        c = eo.select = function(t, i, r, o) {
            var c, u, h, d, p, f = "function" == typeof t && t, g = !o && a(t = f.selector || t);
            if (r = r || [],
            1 === g.length) {
                if ((u = g[0] = g[0].slice(0)).length > 2 && "ID" === (h = u[0]).type && n.getById && 9 === i.nodeType && m && s.relative[u[1].type]) {
                    if (!(i = (s.find.ID(h.matches[0].replace(ei, en), i) || [])[0]))
                        return r;
                    f && (i = i.parentNode),
                    t = t.slice(u.shift().value.length)
                }
                for (c = Q.needsContext.test(t) ? 0 : u.length; c-- && (h = u[c],
                !s.relative[d = h.type]); )
                    if ((p = s.find[d]) && (o = p(h.matches[0].replace(ei, en), ee.test(u[0].type) && eg(i.parentNode) || i))) {
                        if (u.splice(c, 1),
                        !(t = o.length && ev(u)))
                            return O.apply(r, o),
                            r;
                        break
                    }
            }
            return (f || l(t, g))(o, i, !m, r, !i || ee.test(t) && eg(i.parentNode) || i),
            r
        }
        ,
        n.sortStable = x.split("").sort(A).join("") === x,
        n.detectDuplicates = !!d,
        p(),
        n.sortDetached = ec(function(t) {
            return 1 & t.compareDocumentPosition(f.createElement("div"))
        }),
        ec(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || eu("type|href|height|width", function(t, i, n) {
            return n ? void 0 : t.getAttribute(i, "type" === i.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ec(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || eu("value", function(t, i, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        ec(function(t) {
            return null == t.getAttribute("disabled")
        }) || eu(I, function(t, i, n) {
            var s;
            return n ? void 0 : !0 === t[i] ? i.toLowerCase() : (s = t.getAttributeNode(i)) && s.specified ? s.value : null
        }),
        eo
    }(t);
    f.find = $,
    f.expr = $.selectors,
    f.expr[":"] = f.expr.pseudos,
    f.uniqueSort = f.unique = $.uniqueSort,
    f.text = $.getText,
    f.isXMLDoc = $.isXML,
    f.contains = $.contains;
    var x = function(t, i, n) {
        for (var s = [], r = void 0 !== n; (t = t[i]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && f(t).is(n))
                    break;
                s.push(t)
            }
        return s
    }
      , w = function(t, i) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== i && n.push(t);
        return n
    }
      , _ = f.expr.match.needsContext
      , C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , T = /^.[^:#\[\.,]*$/;
    function E(t, i, n) {
        if (f.isFunction(i))
            return f.grep(t, function(t, s) {
                return !!i.call(t, s, t) !== n
            });
        if (i.nodeType)
            return f.grep(t, function(t) {
                return t === i !== n
            });
        if ("string" == typeof i) {
            if (T.test(i))
                return f.filter(i, t, n);
            i = f.filter(i, t)
        }
        return f.grep(t, function(t) {
            return f.inArray(t, i) > -1 !== n
        })
    }
    f.filter = function(t, i, n) {
        var s = i[0];
        return n && (t = ":not(" + t + ")"),
        1 === i.length && 1 === s.nodeType ? f.find.matchesSelector(s, t) ? [s] : [] : f.find.matches(t, f.grep(i, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    f.fn.extend({
        find: function(t) {
            var i, n = [], s = this, r = s.length;
            if ("string" != typeof t)
                return this.pushStack(f(t).filter(function() {
                    for (i = 0; r > i; i++)
                        if (f.contains(s[i], this))
                            return !0
                }));
            for (i = 0; r > i; i++)
                f.find(t, s[i], n);
            return (n = this.pushStack(r > 1 ? f.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function(t) {
            return this.pushStack(E(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(E(this, t || [], !0))
        },
        is: function(t) {
            return !!E(this, "string" == typeof t && _.test(t) ? f(t) : t || [], !1).length
        }
    });
    var k, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (f.fn.init = function(t, i, n) {
        var r, o;
        if (!t)
            return this;
        if (n = n || k,
        "string" == typeof t) {
            if (!(r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : A.exec(t)) || !r[1] && i)
                return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
            if (r[1]) {
                if (i = i instanceof f ? i[0] : i,
                f.merge(this, f.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : s, !0)),
                C.test(r[1]) && f.isPlainObject(i))
                    for (r in i)
                        f.isFunction(this[r]) ? this[r](i[r]) : this.attr(r, i[r]);
                return this
            }
            if ((o = s.getElementById(r[2])) && o.parentNode) {
                if (o.id !== r[2])
                    return k.find(t);
                this.length = 1,
                this[0] = o
            }
            return this.context = s,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : f.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(f) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        f.makeArray(t, this))
    }
    ).prototype = f.fn,
    k = f(s);
    var S = /^(?:parents|prev(?:Until|All))/
      , D = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function N(t, i) {
        do
            t = t[i];
        while (t && 1 !== t.nodeType);
        return t
    }
    f.fn.extend({
        has: function(t) {
            var i, n = f(t, this), s = n.length;
            return this.filter(function() {
                for (i = 0; s > i; i++)
                    if (f.contains(this, n[i]))
                        return !0
            })
        },
        closest: function(t, i) {
            for (var n, s = 0, r = this.length, o = [], a = _.test(t) || "string" != typeof t ? f(t, i || this.context) : 0; r > s; s++)
                for (n = this[s]; n && n !== i; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && f.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? f.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? f.inArray(this[0], f(t)) : f.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, i) {
            return this.pushStack(f.uniqueSort(f.merge(this.get(), f(t, i))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    f.each({
        parent: function(t) {
            var i = t.parentNode;
            return i && 11 !== i.nodeType ? i : null
        },
        parents: function(t) {
            return x(t, "parentNode")
        },
        parentsUntil: function(t, i, n) {
            return x(t, "parentNode", n)
        },
        next: function(t) {
            return N(t, "nextSibling")
        },
        prev: function(t) {
            return N(t, "previousSibling")
        },
        nextAll: function(t) {
            return x(t, "nextSibling")
        },
        prevAll: function(t) {
            return x(t, "previousSibling")
        },
        nextUntil: function(t, i, n) {
            return x(t, "nextSibling", n)
        },
        prevUntil: function(t, i, n) {
            return x(t, "previousSibling", n)
        },
        siblings: function(t) {
            return w((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return w(t.firstChild)
        },
        contents: function(t) {
            return f.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : f.merge([], t.childNodes)
        }
    }, function(t, i) {
        f.fn[t] = function(n, s) {
            var r = f.map(this, i, n);
            return "Until" !== t.slice(-5) && (s = n),
            s && "string" == typeof s && (r = f.filter(s, r)),
            this.length > 1 && (D[t] || (r = f.uniqueSort(r)),
            S.test(t) && (r = r.reverse())),
            this.pushStack(r)
        }
    });
    var L = /\S+/g;
    function j() {
        s.addEventListener ? (s.removeEventListener("DOMContentLoaded", O),
        t.removeEventListener("load", O)) : (s.detachEvent("onreadystatechange", O),
        t.detachEvent("onload", O))
    }
    function O() {
        (s.addEventListener || "load" === t.event.type || "complete" === s.readyState) && (j(),
        f.ready())
    }
    for (ez in f.Callbacks = function(t) {
        t = "string" == typeof t ? (i = t,
        n = {},
        f.each(i.match(L) || [], function(t, i) {
            n[i] = !0
        }),
        n) : f.extend({}, t);
        var i, n, s, r, o, a, l = [], c = [], u = -1, h = function() {
            for (a = t.once,
            o = s = !0; c.length; u = -1)
                for (r = c.shift(); ++u < l.length; )
                    !1 === l[u].apply(r[0], r[1]) && t.stopOnFalse && (u = l.length,
                    r = !1);
            t.memory || (r = !1),
            s = !1,
            a && (l = r ? [] : "")
        }, d = {
            add: function() {
                return l && (r && !s && (u = l.length - 1,
                c.push(r)),
                function i(n) {
                    f.each(n, function(n, s) {
                        f.isFunction(s) ? t.unique && d.has(s) || l.push(s) : s && s.length && "string" !== f.type(s) && i(s)
                    })
                }(arguments),
                r && !s && h()),
                this
            },
            remove: function() {
                return f.each(arguments, function(t, i) {
                    for (var n; (n = f.inArray(i, l, n)) > -1; )
                        l.splice(n, 1),
                        u >= n && u--
                }),
                this
            },
            has: function(t) {
                return t ? f.inArray(t, l) > -1 : l.length > 0
            },
            empty: function() {
                return l && (l = []),
                this
            },
            disable: function() {
                return a = c = [],
                l = r = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = !0,
                r || d.disable(),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(t, i) {
                return a || (i = [t, (i = i || []).slice ? i.slice() : i],
                c.push(i),
                s || h()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return d
    }
    ,
    f.extend({
        Deferred: function(t) {
            var i = [["resolve", "done", f.Callbacks("once memory"), "resolved"], ["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]]
              , n = "pending"
              , s = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return f.Deferred(function(n) {
                        f.each(i, function(i, o) {
                            var a = f.isFunction(t[i]) && t[i];
                            r[o[1]](function() {
                                var t = a && a.apply(this, arguments);
                                t && f.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === s ? n.promise() : this, a ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? f.extend(t, s) : s
                }
            }
              , r = {};
            return s.pipe = s.then,
            f.each(i, function(t, o) {
                var a = o[2]
                  , l = o[3];
                s[o[1]] = a.add,
                l && a.add(function() {
                    n = l
                }, i[1 ^ t][2].disable, i[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? s : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = a.fireWith
            }),
            s.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(t) {
            var i, n, s, o = 0, a = r.call(arguments), l = a.length, c = 1 !== l || t && f.isFunction(t.promise) ? l : 0, u = 1 === c ? t : f.Deferred(), h = function(t, n, s) {
                return function(o) {
                    n[t] = this,
                    s[t] = arguments.length > 1 ? r.call(arguments) : o,
                    s === i ? u.notifyWith(n, s) : --c || u.resolveWith(n, s)
                }
            };
            if (l > 1)
                for (i = Array(l),
                n = Array(l),
                s = Array(l); l > o; o++)
                    a[o] && f.isFunction(a[o].promise) ? a[o].promise().progress(h(o, n, i)).done(h(o, s, a)).fail(u.reject) : --c;
            return c || u.resolveWith(s, a),
            u.promise()
        }
    }),
    f.fn.ready = function(t) {
        return f.ready.promise().done(t),
        this
    }
    ,
    f.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? f.readyWait++ : f.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --f.readyWait : f.isReady) || (f.isReady = !0,
            !0 !== t && --f.readyWait > 0 || (eO.resolveWith(s, [f]),
            f.fn.triggerHandler && (f(s).triggerHandler("ready"),
            f(s).off("ready"))))
        }
    }),
    f.ready.promise = function(i) {
        if (!eO) {
            if (eO = f.Deferred(),
            "complete" !== s.readyState && ("loading" === s.readyState || s.documentElement.doScroll)) {
                if (s.addEventListener)
                    s.addEventListener("DOMContentLoaded", O),
                    t.addEventListener("load", O);
                else {
                    s.attachEvent("onreadystatechange", O),
                    t.attachEvent("onload", O);
                    var n = !1;
                    try {
                        n = null == t.frameElement && s.documentElement
                    } catch (r) {}
                    n && n.doScroll && function i() {
                        if (!f.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (s) {
                                return t.setTimeout(i, 50)
                            }
                            j(),
                            f.ready()
                        }
                    }()
                }
            } else
                t.setTimeout(f.ready)
        }
        return eO.promise(i)
    }
    ,
    f.ready.promise(),
    f(d))
        break;
    d.ownFirst = "0" === ez,
    d.inlineBlockNeedsLayout = !1,
    f(function() {
        var t, i, n, r;
        (n = s.getElementsByTagName("body")[0]) && n.style && (i = s.createElement("div"),
        (r = s.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(i),
        void 0 !== i.style.zoom && (i.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        d.inlineBlockNeedsLayout = t = 3 === i.offsetWidth,
        t && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var t = s.createElement("div");
        d.deleteExpando = !0;
        try {
            delete t.test
        } catch (i) {
            d.deleteExpando = !1
        }
        t = null
    }();
    var z = function(t) {
        var i = f.noData[(t.nodeName + " ").toLowerCase()]
          , n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!i || !0 !== i && t.getAttribute("classid") === i)
    }
      , P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , I = /([A-Z])/g;
    function H(t, i, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var s = "data-" + i.replace(I, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(s))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? f.parseJSON(n) : n)
                } catch (r) {}
                f.data(t, i, n)
            } else
                n = void 0
        }
        return n
    }
    function q(t) {
        var i;
        for (i in t)
            if (("data" !== i || !f.isEmptyObject(t[i])) && "toJSON" !== i)
                return !1;
        return !0
    }
    function M(t, i, s, r) {
        if (z(t)) {
            var o, a, l = f.expando, c = t.nodeType, u = c ? f.cache : t, h = c ? t[l] : t[l] && l;
            if (h && u[h] && (r || u[h].data) || void 0 !== s || "string" != typeof i)
                return h || (h = c ? t[l] = n.pop() || f.guid++ : l),
                u[h] || (u[h] = c ? {} : {
                    toJSON: f.noop
                }),
                "object" != typeof i && "function" != typeof i || (r ? u[h] = f.extend(u[h], i) : u[h].data = f.extend(u[h].data, i)),
                a = u[h],
                r || (a.data || (a.data = {}),
                a = a.data),
                void 0 !== s && (a[f.camelCase(i)] = s),
                "string" == typeof i ? null == (o = a[i]) && (o = a[f.camelCase(i)]) : o = a,
                o
        }
    }
    function F(t, i, n) {
        if (z(t)) {
            var s, r, o = t.nodeType, a = o ? f.cache : t, l = o ? t[f.expando] : f.expando;
            if (a[l]) {
                if (i && (s = n ? a[l] : a[l].data)) {
                    for (r = (i = f.isArray(i) ? i.concat(f.map(i, f.camelCase)) : (i in s) ? [i] : ((i = f.camelCase(i))in s) ? [i] : i.split(" ")).length; r--; )
                        delete s[i[r]];
                    if (n ? !q(s) : !f.isEmptyObject(s))
                        return
                }
                (n || (delete a[l].data,
                q(a[l]))) && (o ? f.cleanData([t], !0) : d.deleteExpando || a != a.window ? delete a[l] : a[l] = void 0)
            }
        }
    }
    f.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? f.cache[t[f.expando]] : t[f.expando]) && !q(t)
        },
        data: function(t, i, n) {
            return M(t, i, n)
        },
        removeData: function(t, i) {
            return F(t, i)
        },
        _data: function(t, i, n) {
            return M(t, i, n, !0)
        },
        _removeData: function(t, i) {
            return F(t, i, !0)
        }
    }),
    f.fn.extend({
        data: function(t, i) {
            var n, s, r, o = this[0], a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = f.data(o),
                1 === o.nodeType && !f._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && 0 === (s = a[n].name).indexOf("data-") && H(o, s = f.camelCase(s.slice(5)), r[s]);
                    f._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                f.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                f.data(this, t, i)
            }) : o ? H(o, t, f.data(o, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                f.removeData(this, t)
            })
        }
    }),
    f.extend({
        queue: function(t, i, n) {
            var s;
            return t ? (i = (i || "fx") + "queue",
            s = f._data(t, i),
            n && (!s || f.isArray(n) ? s = f._data(t, i, f.makeArray(n)) : s.push(n)),
            s || []) : void 0
        },
        dequeue: function(t, i) {
            i = i || "fx";
            var n = f.queue(t, i)
              , s = n.length
              , r = n.shift()
              , o = f._queueHooks(t, i)
              , a = function() {
                f.dequeue(t, i)
            };
            "inprogress" === r && (r = n.shift(),
            s--),
            r && ("fx" === i && n.unshift("inprogress"),
            delete o.stop,
            r.call(t, a, o)),
            !s && o && o.empty.fire()
        },
        _queueHooks: function(t, i) {
            var n = i + "queueHooks";
            return f._data(t, n) || f._data(t, n, {
                empty: f.Callbacks("once memory").add(function() {
                    f._removeData(t, i + "queue"),
                    f._removeData(t, n)
                })
            })
        }
    }),
    f.fn.extend({
        queue: function(t, i) {
            var n = 2;
            return "string" != typeof t && (i = t,
            t = "fx",
            n--),
            arguments.length < n ? f.queue(this[0], t) : void 0 === i ? this : this.each(function() {
                var n = f.queue(this, t, i);
                f._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && f.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                f.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, i) {
            var n, s = 1, r = f.Deferred(), o = this, a = this.length, l = function() {
                --s || r.resolveWith(o, [o])
            };
            for ("string" != typeof t && (i = t,
            t = void 0),
            t = t || "fx"; a--; )
                (n = f._data(o[a], t + "queueHooks")) && n.empty && (s++,
                n.empty.add(l));
            return l(),
            r.promise(i)
        }
    }),
    d.shrinkWrapBlocks = function() {
        var t, i, n;
        return null != em ? em : (em = !1,
        (i = s.getElementsByTagName("body")[0]) && i.style ? (t = s.createElement("div"),
        (n = s.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        i.appendChild(n).appendChild(t),
        void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
        t.appendChild(s.createElement("div")).style.width = "5px",
        em = 3 !== t.offsetWidth),
        i.removeChild(n),
        em) : void 0)
    }
    ;
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , W = RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i")
      , R = ["Top", "Right", "Bottom", "Left"]
      , X = function(t, i) {
        return t = i || t,
        "none" === f.css(t, "display") || !f.contains(t.ownerDocument, t)
    };
    function U(t, i, n, s) {
        var r, o = 1, a = 20, l = s ? function() {
            return s.cur()
        }
        : function() {
            return f.css(t, i, "")
        }
        , c = l(), u = n && n[3] || (f.cssNumber[i] ? "" : "px"), h = (f.cssNumber[i] || "px" !== u && +c) && W.exec(f.css(t, i));
        if (h && h[3] !== u) {
            u = u || h[3],
            n = n || [],
            h = +c || 1;
            do
                h /= o = o || ".5",
                f.style(t, i, h + u);
            while (o !== (o = l() / c) && 1 !== o && --a)
        }
        return n && (h = +h || +c || 0,
        r = n[1] ? h + (n[1] + 1) * n[2] : +n[2],
        s && (s.unit = u,
        s.start = h,
        s.end = r)),
        r
    }
    var V = function(t, i, n, s, r, o, a) {
        var l = 0
          , c = t.length
          , u = null == n;
        if ("object" === f.type(n))
            for (l in r = !0,
            n)
                V(t, i, l, n[l], !0, o, a);
        else if (void 0 !== s && (r = !0,
        f.isFunction(s) || (a = !0),
        u && (a ? (i.call(t, s),
        i = null) : (u = i,
        i = function(t, i, n) {
            return u.call(f(t), n)
        }
        )),
        i))
            for (; c > l; l++)
                i(t[l], n, a ? s : s.call(t[l], l, i(t[l], n)));
        return r ? t : u ? i.call(t) : c ? i(t[0], n) : o
    }
      , Y = /^(?:checkbox|radio)$/i
      , Q = /<([\w:-]+)/
      , K = /^$|\/(?:java|ecma)script/i
      , J = /^\s+/
      , G = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function Z(t) {
        var i = G.split("|")
          , n = t.createDocumentFragment();
        if (n.createElement)
            for (; i.length; )
                n.createElement(i.pop());
        return n
    }
    ev = s.createElement("div"),
    ey = s.createDocumentFragment(),
    e8 = s.createElement("input"),
    ev.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    d.leadingWhitespace = 3 === ev.firstChild.nodeType,
    d.tbody = !ev.getElementsByTagName("tbody").length,
    d.htmlSerialize = !!ev.getElementsByTagName("link").length,
    d.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML,
    e8.type = "checkbox",
    e8.checked = !0,
    ey.appendChild(e8),
    d.appendChecked = e8.checked,
    ev.innerHTML = "<textarea>x</textarea>",
    d.noCloneChecked = !!ev.cloneNode(!0).lastChild.defaultValue,
    ey.appendChild(ev),
    (e8 = s.createElement("input")).setAttribute("type", "radio"),
    e8.setAttribute("checked", "checked"),
    e8.setAttribute("name", "t"),
    ev.appendChild(e8),
    d.checkClone = ev.cloneNode(!0).cloneNode(!0).lastChild.checked,
    d.noCloneEvent = !!ev.addEventListener,
    ev[f.expando] = 1,
    d.attributes = !ev.getAttribute(f.expando);
    var ee = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    function et(t, i) {
        var n, s, r = 0, o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(i || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(i || "*") : void 0;
        if (!o)
            for (o = [],
            n = t.childNodes || t; null != (s = n[r]); r++)
                !i || f.nodeName(s, i) ? o.push(s) : f.merge(o, et(s, i));
        return void 0 === i || i && f.nodeName(t, i) ? f.merge([t], o) : o
    }
    function ei(t, i) {
        for (var n, s = 0; null != (n = t[s]); s++)
            f._data(n, "globalEval", !i || f._data(i[s], "globalEval"))
    }
    ee.optgroup = ee.option,
    ee.tbody = ee.tfoot = ee.colgroup = ee.caption = ee.thead,
    ee.th = ee.td;
    var en = /<|&#?\w+;/
      , es = /<tbody/i;
    function er(t) {
        Y.test(t.type) && (t.defaultChecked = t.checked)
    }
    function eo(t, i, n, s, r) {
        for (var o, a, l, c, u, h, p, g = t.length, m = Z(i), v = [], y = 0; g > y; y++)
            if ((a = t[y]) || 0 === a) {
                if ("object" === f.type(a))
                    f.merge(v, a.nodeType ? [a] : a);
                else if (en.test(a)) {
                    for (c = c || m.appendChild(i.createElement("div")),
                    p = ee[u = (Q.exec(a) || ["", ""])[1].toLowerCase()] || ee._default,
                    c.innerHTML = p[1] + f.htmlPrefilter(a) + p[2],
                    o = p[0]; o--; )
                        c = c.lastChild;
                    if (!d.leadingWhitespace && J.test(a) && v.push(i.createTextNode(J.exec(a)[0])),
                    !d.tbody)
                        for (o = (a = "table" !== u || es.test(a) ? "<table>" !== p[1] || es.test(a) ? 0 : c : c.firstChild) && a.childNodes.length; o--; )
                            f.nodeName(h = a.childNodes[o], "tbody") && !h.childNodes.length && a.removeChild(h);
                    for (f.merge(v, c.childNodes),
                    c.textContent = ""; c.firstChild; )
                        c.removeChild(c.firstChild);
                    c = m.lastChild
                } else
                    v.push(i.createTextNode(a))
            }
        for (c && m.removeChild(c),
        d.appendChecked || f.grep(et(v, "input"), er),
        y = 0; a = v[y++]; )
            if (s && f.inArray(a, s) > -1)
                r && r.push(a);
            else if (l = f.contains(a.ownerDocument, a),
            c = et(m.appendChild(a), "script"),
            l && ei(c),
            n)
                for (o = 0; a = c[o++]; )
                    K.test(a.type || "") && n.push(a);
        return c = null,
        m
    }
    !function() {
        var i, n, r = s.createElement("div");
        for (i in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + i,
            (d[i] = n in t) || (r.setAttribute(n, "t"),
            d[i] = !1 === r.attributes[n].expando);
        r = null
    }();
    var ea = /^(?:input|select|textarea)$/i
      , el = /^key/
      , ec = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , eu = /^(?:focusinfocus|focusoutblur)$/
      , eh = /^([^.]*)(?:\.(.+)|)/;
    function ed() {
        return !0
    }
    function ep() {
        return !1
    }
    function ef() {
        try {
            return s.activeElement
        } catch (t) {}
    }
    function eg(t, i, n, s, r, o) {
        var a, l;
        if ("object" == typeof i) {
            for (l in "string" != typeof n && (s = s || n,
            n = void 0),
            i)
                eg(t, l, n, s, i[l], o);
            return t
        }
        if (null == s && null == r ? (r = n,
        s = n = void 0) : null == r && ("string" == typeof n ? (r = s,
        s = void 0) : (r = s,
        s = n,
        n = void 0)),
        !1 === r)
            r = ep;
        else if (!r)
            return t;
        return 1 === o && (a = r,
        (r = function(t) {
            return f().off(t),
            a.apply(this, arguments)
        }
        ).guid = a.guid || (a.guid = f.guid++)),
        t.each(function() {
            f.event.add(this, i, r, s, n)
        })
    }
    f.event = {
        global: {},
        add: function(t, i, n, s, r) {
            var o, a, l, c, u, h, d, p, g, m, v, y = f._data(t);
            if (y) {
                for (n.handler && (n = (c = n).handler,
                r = c.selector),
                n.guid || (n.guid = f.guid++),
                (a = y.events) || (a = y.events = {}),
                (h = y.handle) || ((h = y.handle = function(t) {
                    return t && f.event.triggered === t.type ? void 0 : f.event.dispatch.apply(h.elem, arguments)
                }
                ).elem = t),
                l = (i = (i || "").match(L) || [""]).length; l--; )
                    g = v = (o = eh.exec(i[l]) || [])[1],
                    m = (o[2] || "").split(".").sort(),
                    g && (u = f.event.special[g] || {},
                    g = (r ? u.delegateType : u.bindType) || g,
                    u = f.event.special[g] || {},
                    d = f.extend({
                        type: g,
                        origType: v,
                        data: s,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && f.expr.match.needsContext.test(r),
                        namespace: m.join(".")
                    }, c),
                    (p = a[g]) || ((p = a[g] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(t, s, m, h) || (t.addEventListener ? t.addEventListener(g, h, !1) : t.attachEvent && t.attachEvent("on" + g, h))),
                    u.add && (u.add.call(t, d),
                    d.handler.guid || (d.handler.guid = n.guid)),
                    r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                    f.event.global[g] = !0);
                t = null
            }
        },
        remove: function(t, i, n, s, r) {
            var o, a, l, c, u, h, d, p, g, m, v, y = f.hasData(t) && f._data(t);
            if (y && (h = y.events)) {
                for (u = (i = (i || "").match(L) || [""]).length; u--; )
                    if (g = v = (l = eh.exec(i[u]) || [])[1],
                    m = (l[2] || "").split(".").sort(),
                    g) {
                        for (d = f.event.special[g] || {},
                        p = h[g = (s ? d.delegateType : d.bindType) || g] || [],
                        l = l[2] && RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        c = o = p.length; o--; )
                            a = p[o],
                            !r && v !== a.origType || n && n.guid !== a.guid || l && !l.test(a.namespace) || s && s !== a.selector && ("**" !== s || !a.selector) || (p.splice(o, 1),
                            a.selector && p.delegateCount--,
                            d.remove && d.remove.call(t, a));
                        c && !p.length && (d.teardown && !1 !== d.teardown.call(t, m, y.handle) || f.removeEvent(t, g, y.handle),
                        delete h[g])
                    } else
                        for (g in h)
                            f.event.remove(t, g + i[u], n, s, !0);
                f.isEmptyObject(h) && (delete y.handle,
                f._removeData(t, "events"))
            }
        },
        trigger: function(i, n, r, o) {
            var a, l, c, u, d, p, g, m = [r || s], v = h.call(i, "type") ? i.type : i, y = h.call(i, "namespace") ? i.namespace.split(".") : [];
            if (c = p = r = r || s,
            3 !== r.nodeType && 8 !== r.nodeType && !eu.test(v + f.event.triggered) && (v.indexOf(".") > -1 && (v = (y = v.split(".")).shift(),
            y.sort()),
            l = 0 > v.indexOf(":") && "on" + v,
            (i = i[f.expando] ? i : new f.Event(v,"object" == typeof i && i)).isTrigger = o ? 2 : 3,
            i.namespace = y.join("."),
            i.rnamespace = i.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            i.result = void 0,
            i.target || (i.target = r),
            n = null == n ? [i] : f.makeArray(n, [i]),
            d = f.event.special[v] || {},
            o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !f.isWindow(r)) {
                    for (u = d.delegateType || v,
                    eu.test(u + v) || (c = c.parentNode); c; c = c.parentNode)
                        m.push(c),
                        p = c;
                    p === (r.ownerDocument || s) && m.push(p.defaultView || p.parentWindow || t)
                }
                for (g = 0; (c = m[g++]) && !i.isPropagationStopped(); )
                    i.type = g > 1 ? u : d.bindType || v,
                    (a = (f._data(c, "events") || {})[i.type] && f._data(c, "handle")) && a.apply(c, n),
                    (a = l && c[l]) && a.apply && z(c) && (i.result = a.apply(c, n),
                    !1 === i.result && i.preventDefault());
                if (i.type = v,
                !o && !i.isDefaultPrevented() && (!d._default || !1 === d._default.apply(m.pop(), n)) && z(r) && l && r[v] && !f.isWindow(r)) {
                    (p = r[l]) && (r[l] = null),
                    f.event.triggered = v;
                    try {
                        r[v]()
                    } catch (b) {}
                    f.event.triggered = void 0,
                    p && (r[l] = p)
                }
                return i.result
            }
        },
        dispatch: function(t) {
            t = f.event.fix(t);
            var i, n, s, o, a, l = [], c = r.call(arguments), u = (f._data(this, "events") || {})[t.type] || [], h = f.event.special[t.type] || {};
            if (c[0] = t,
            t.delegateTarget = this,
            !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                for (l = f.event.handlers.call(this, t, u),
                i = 0; (o = l[i++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = o.elem,
                    n = 0; (a = o.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a,
                        t.data = a.data,
                        void 0 !== (s = ((f.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, c)) && !1 === (t.result = s) && (t.preventDefault(),
                        t.stopPropagation()));
                return h.postDispatch && h.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, i) {
            var n, s, r, o, a = [], l = i.delegateCount, c = t.target;
            if (l && c.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) {
                for (; c != this; c = c.parentNode || this)
                    if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                        for (s = [],
                        n = 0; l > n; n++)
                            void 0 === s[r = (o = i[n]).selector + " "] && (s[r] = o.needsContext ? f(r, this).index(c) > -1 : f.find(r, this, null, [c]).length),
                            s[r] && s.push(o);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            }
            return l < i.length && a.push({
                elem: this,
                handlers: i.slice(l)
            }),
            a
        },
        fix: function(t) {
            if (t[f.expando])
                return t;
            var i, n, r, o = t.type, a = t, l = this.fixHooks[o];
            for (l || (this.fixHooks[o] = l = ec.test(o) ? this.mouseHooks : el.test(o) ? this.keyHooks : {}),
            r = l.props ? this.props.concat(l.props) : this.props,
            t = new f.Event(a),
            i = r.length; i--; )
                t[n = r[i]] = a[n];
            return t.target || (t.target = a.srcElement || s),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            t.metaKey = !!t.metaKey,
            l.filter ? l.filter(t, a) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, i) {
                return null == t.which && (t.which = null != i.charCode ? i.charCode : i.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, i) {
                var n, r, o, a = i.button, l = i.fromElement;
                return null == t.pageX && null != i.clientX && (o = (r = t.target.ownerDocument || s).documentElement,
                n = r.body,
                t.pageX = i.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0),
                t.pageY = i.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)),
                !t.relatedTarget && l && (t.relatedTarget = l === t.target ? i.toElement : l),
                t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ef() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ef() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return f.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return f.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, i, n) {
            var s = f.extend(new f.Event, n, {
                type: t,
                isSimulated: !0
            });
            f.event.trigger(s, null, i),
            s.isDefaultPrevented() && n.preventDefault()
        }
    },
    f.removeEvent = s.removeEventListener ? function(t, i, n) {
        t.removeEventListener && t.removeEventListener(i, n)
    }
    : function(t, i, n) {
        var s = "on" + i;
        t.detachEvent && (void 0 === t[s] && (t[s] = null),
        t.detachEvent(s, n))
    }
    ,
    f.Event = function(t, i) {
        return this instanceof f.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? ed : ep) : this.type = t,
        i && f.extend(this, i),
        this.timeStamp = t && t.timeStamp || f.now(),
        void (this[f.expando] = !0)) : new f.Event(t,i)
    }
    ,
    f.Event.prototype = {
        constructor: f.Event,
        isDefaultPrevented: ep,
        isPropagationStopped: ep,
        isImmediatePropagationStopped: ep,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = ed,
            t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = ed,
            t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(),
            t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = ed,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, i) {
        f.event.special[t] = {
            delegateType: i,
            bindType: i,
            handle: function(t) {
                var n, s = t.relatedTarget, r = t.handleObj;
                return s && (s === this || f.contains(this, s)) || (t.type = r.origType,
                n = r.handler.apply(this, arguments),
                t.type = i),
                n
            }
        }
    }),
    d.submit || (f.event.special.submit = {
        setup: function() {
            return !f.nodeName(this, "form") && void f.event.add(this, "click._submit keypress._submit", function(t) {
                var i = t.target
                  , n = f.nodeName(i, "input") || f.nodeName(i, "button") ? f.prop(i, "form") : void 0;
                n && !f._data(n, "submit") && (f.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }),
                f._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble,
            this.parentNode && !t.isTrigger && f.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !f.nodeName(this, "form") && void f.event.remove(this, "._submit")
        }
    }),
    d.change || (f.event.special.change = {
        setup: function() {
            return ea.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (f.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }),
            f.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1),
                f.event.simulate("change", this, t)
            })),
            !1) : void f.event.add(this, "beforeactivate._change", function(t) {
                var i = t.target;
                ea.test(i.nodeName) && !f._data(i, "change") && (f.event.add(i, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || f.event.simulate("change", this.parentNode, t)
                }),
                f._data(i, "change", !0))
            })
        },
        handle: function(t) {
            var i = t.target;
            return this !== i || t.isSimulated || t.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return f.event.remove(this, "._change"),
            !ea.test(this.nodeName)
        }
    }),
    d.focusin || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, i) {
        var n = function(t) {
            f.event.simulate(i, t.target, f.event.fix(t))
        };
        f.event.special[i] = {
            setup: function() {
                var s = this.ownerDocument || this
                  , r = f._data(s, i);
                r || s.addEventListener(t, n, !0),
                f._data(s, i, (r || 0) + 1)
            },
            teardown: function() {
                var s = this.ownerDocument || this
                  , r = f._data(s, i) - 1;
                r ? f._data(s, i, r) : (s.removeEventListener(t, n, !0),
                f._removeData(s, i))
            }
        }
    }),
    f.fn.extend({
        on: function(t, i, n, s) {
            return eg(this, t, i, n, s)
        },
        one: function(t, i, n, s) {
            return eg(this, t, i, n, s, 1)
        },
        off: function(t, i, n) {
            var s, r;
            if (t && t.preventDefault && t.handleObj)
                return s = t.handleObj,
                f(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler),
                this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, i, t[r]);
                return this
            }
            return !1 !== i && "function" != typeof i || (n = i,
            i = void 0),
            !1 === n && (n = ep),
            this.each(function() {
                f.event.remove(this, t, n, i)
            })
        },
        trigger: function(t, i) {
            return this.each(function() {
                f.event.trigger(t, i, this)
            })
        },
        triggerHandler: function(t, i) {
            var n = this[0];
            return n ? f.event.trigger(t, i, n, !0) : void 0
        }
    });
    var em, ev, ey, e8, eb = / jQuery\d+="(?:null|\d+)"/g, e$ = RegExp("<(?:" + G + ")[\\s/>]", "i"), ex = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, ew = /<script|<style|<link/i, e_ = /checked\s*(?:[^=]|=\s*.checked.)/i, eC = /^true\/(.*)/, eT = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, eE = Z(s).appendChild(s.createElement("div"));
    function ek(t, i) {
        return f.nodeName(t, "table") && f.nodeName(11 !== i.nodeType ? i : i.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function eA(t) {
        return t.type = (null !== f.find.attr(t, "type")) + "/" + t.type,
        t
    }
    function eS(t) {
        var i = eC.exec(t.type);
        return i ? t.type = i[1] : t.removeAttribute("type"),
        t
    }
    function eD(t, i) {
        if (1 === i.nodeType && f.hasData(t)) {
            var n, s, r, o = f._data(t), a = f._data(i, o), l = o.events;
            if (l)
                for (n in delete a.handle,
                a.events = {},
                l)
                    for (s = 0,
                    r = l[n].length; r > s; s++)
                        f.event.add(i, n, l[n][s]);
            a.data && (a.data = f.extend({}, a.data))
        }
    }
    function eN(t, i) {
        var n, s, r;
        if (1 === i.nodeType) {
            if (n = i.nodeName.toLowerCase(),
            !d.noCloneEvent && i[f.expando]) {
                for (s in (r = f._data(i)).events)
                    f.removeEvent(i, s, r.handle);
                i.removeAttribute(f.expando)
            }
            "script" === n && i.text !== t.text ? (eA(i).text = t.text,
            eS(i)) : "object" === n ? (i.parentNode && (i.outerHTML = t.outerHTML),
            d.html5Clone && t.innerHTML && !f.trim(i.innerHTML) && (i.innerHTML = t.innerHTML)) : "input" === n && Y.test(t.type) ? (i.defaultChecked = i.checked = t.checked,
            i.value !== t.value && (i.value = t.value)) : "option" === n ? i.defaultSelected = i.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (i.defaultValue = t.defaultValue)
        }
    }
    function eL(t, i, n, s) {
        i = o.apply([], i);
        var r, a, l, c, u, h, p = 0, g = t.length, m = g - 1, v = i[0], y = f.isFunction(v);
        if (y || g > 1 && "string" == typeof v && !d.checkClone && e_.test(v))
            return t.each(function(r) {
                var o = t.eq(r);
                y && (i[0] = v.call(this, r, o.html())),
                eL(o, i, n, s)
            });
        if (g && (r = (h = eo(i, t[0].ownerDocument, !1, t, s)).firstChild,
        1 === h.childNodes.length && (h = r),
        r || s)) {
            for (l = (c = f.map(et(h, "script"), eA)).length; g > p; p++)
                a = h,
                p !== m && (a = f.clone(a, !0, !0),
                l && f.merge(c, et(a, "script"))),
                n.call(t[p], a, p);
            if (l)
                for (u = c[c.length - 1].ownerDocument,
                f.map(c, eS),
                p = 0; l > p; p++)
                    a = c[p],
                    K.test(a.type || "") && !f._data(a, "globalEval") && f.contains(u, a) && (a.src ? f._evalUrl && f._evalUrl(a.src) : f.globalEval((a.text || a.textContent || a.innerHTML || "").replace(eT, "")));
            h = r = null
        }
        return t
    }
    function ej(t, i, n) {
        for (var s, r = i ? f.filter(i, t) : t, o = 0; null != (s = r[o]); o++)
            n || 1 !== s.nodeType || f.cleanData(et(s)),
            s.parentNode && (n && f.contains(s.ownerDocument, s) && ei(et(s, "script")),
            s.parentNode.removeChild(s));
        return t
    }
    f.extend({
        htmlPrefilter: function(t) {
            return t.replace(ex, "<$1></$2>")
        },
        clone: function(t, i, n) {
            var s, r, o, a, l, c = f.contains(t.ownerDocument, t);
            if (d.html5Clone || f.isXMLDoc(t) || !e$.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (eE.innerHTML = t.outerHTML,
            eE.removeChild(o = eE.firstChild)),
            !(d.noCloneEvent && d.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || f.isXMLDoc(t)))
                for (s = et(o),
                l = et(t),
                a = 0; null != (r = l[a]); ++a)
                    s[a] && eN(r, s[a]);
            if (i) {
                if (n)
                    for (l = l || et(t),
                    s = s || et(o),
                    a = 0; null != (r = l[a]); a++)
                        eD(r, s[a]);
                else
                    eD(t, o)
            }
            return (s = et(o, "script")).length > 0 && ei(s, !c && et(t, "script")),
            s = l = r = null,
            o
        },
        cleanData: function(t, i) {
            for (var s, r, o, a, l = 0, c = f.expando, u = f.cache, h = d.attributes, p = f.event.special; null != (s = t[l]); l++)
                if ((i || z(s)) && (a = (o = s[c]) && u[o])) {
                    if (a.events)
                        for (r in a.events)
                            p[r] ? f.event.remove(s, r) : f.removeEvent(s, r, a.handle);
                    u[o] && (delete u[o],
                    h || void 0 === s.removeAttribute ? s[c] = void 0 : s.removeAttribute(c),
                    n.push(o))
                }
        }
    }),
    f.fn.extend({
        domManip: eL,
        detach: function(t) {
            return ej(this, t, !0)
        },
        remove: function(t) {
            return ej(this, t)
        },
        text: function(t) {
            return V(this, function(t) {
                return void 0 === t ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return eL(this, arguments, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && ek(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return eL(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var i = ek(this, t);
                    i.insertBefore(t, i.firstChild)
                }
            })
        },
        before: function() {
            return eL(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return eL(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, i = 0; null != (t = this[i]); i++) {
                for (1 === t.nodeType && f.cleanData(et(t, !1)); t.firstChild; )
                    t.removeChild(t.firstChild);
                t.options && f.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, i) {
            return t = null != t && t,
            i = null == i ? t : i,
            this.map(function() {
                return f.clone(this, t, i)
            })
        },
        html: function(t) {
            return V(this, function(t) {
                var i = this[0] || {}
                  , n = 0
                  , s = this.length;
                if (void 0 === t)
                    return 1 === i.nodeType ? i.innerHTML.replace(eb, "") : void 0;
                if ("string" == typeof t && !ew.test(t) && (d.htmlSerialize || !e$.test(t)) && (d.leadingWhitespace || !J.test(t)) && !ee[(Q.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = f.htmlPrefilter(t);
                    try {
                        for (; s > n; n++)
                            i = this[n] || {},
                            1 === i.nodeType && (f.cleanData(et(i, !1)),
                            i.innerHTML = t);
                        i = 0
                    } catch (r) {}
                }
                i && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return eL(this, arguments, function(i) {
                var n = this.parentNode;
                0 > f.inArray(this, t) && (f.cleanData(et(this)),
                n && n.replaceChild(i, this))
            }, t)
        }
    }),
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, i) {
        f.fn[t] = function(t) {
            for (var n, s = 0, r = [], o = f(t), l = o.length - 1; l >= s; s++)
                n = s === l ? this : this.clone(!0),
                f(o[s])[i](n),
                a.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var eO, ez, eP, eI = {
        HTML: "block",
        BODY: "block"
    };
    function e9(t, i) {
        var n = f(i.createElement(t)).appendTo(i.body)
          , s = f.css(n[0], "display");
        return n.detach(),
        s
    }
    function eH(t) {
        var i = s
          , n = eI[t];
        return n || ("none" !== (n = e9(t, i)) && n || ((i = ((eP = (eP || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(i.documentElement))[0].contentWindow || eP[0].contentDocument).document).write(),
        i.close(),
        n = e9(t, i),
        eP.detach()),
        eI[t] = n),
        n
    }
    var e0 = /^margin/
      , eq = RegExp("^(" + B + ")(?!px)[a-z%]+$", "i")
      , eM = function(t, i, n, s) {
        var r, o, a = {};
        for (o in i)
            a[o] = t.style[o],
            t.style[o] = i[o];
        for (o in r = n.apply(t, s || []),
        i)
            t.style[o] = a[o];
        return r
    }
      , eF = s.documentElement;
    !function() {
        var i, n, r, o, a, l, c = s.createElement("div"), u = s.createElement("div");
        if (u.style) {
            u.style.cssText = "float:left;opacity:.5",
            d.opacity = "0.5" === u.style.opacity,
            d.cssFloat = !!u.style.cssFloat,
            u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            d.clearCloneStyle = "content-box" === u.style.backgroundClip,
            (c = s.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            u.innerHTML = "",
            c.appendChild(u),
            d.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
            f.extend(d, {
                reliableHiddenOffsets: function() {
                    return null == i && h(),
                    o
                },
                boxSizingReliable: function() {
                    return null == i && h(),
                    r
                },
                pixelMarginRight: function() {
                    return null == i && h(),
                    n
                },
                pixelPosition: function() {
                    return null == i && h(),
                    i
                },
                reliableMarginRight: function() {
                    return null == i && h(),
                    a
                },
                reliableMarginLeft: function() {
                    return null == i && h(),
                    l
                }
            });
            function h() {
                var h, d, p = s.documentElement;
                p.appendChild(c),
                u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                i = r = l = !1,
                n = a = !0,
                t.getComputedStyle && (i = "1%" !== ((d = t.getComputedStyle(u)) || {}).top,
                l = "2px" === (d || {}).marginLeft,
                r = "4px" === (d || {
                    width: "4px"
                }).width,
                u.style.marginRight = "50%",
                n = "4px" === (d || {
                    marginRight: "4px"
                }).marginRight,
                (h = u.appendChild(s.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                h.style.marginRight = h.style.width = "0",
                u.style.width = "1px",
                a = !parseFloat((t.getComputedStyle(h) || {}).marginRight),
                u.removeChild(h)),
                u.style.display = "none",
                (o = 0 === u.getClientRects().length) && (u.style.display = "",
                u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                u.childNodes[0].style.borderCollapse = "separate",
                (h = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                (o = 0 === h[0].offsetHeight) && (h[0].style.display = "",
                h[1].style.display = "none",
                o = 0 === h[0].offsetHeight)),
                p.removeChild(c)
            }
        }
    }();
    var eB, eW, eR = /^(top|right|bottom|left)$/;
    function e1(t, i) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = i).apply(this, arguments)
            }
        }
    }
    t.getComputedStyle ? (eB = function(i) {
        var n = i.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(i)
    }
    ,
    eW = function(t, i, n) {
        var s, r, o, a, l = t.style;
        return "" !== (a = (n = n || eB(t)) ? n.getPropertyValue(i) || n[i] : void 0) && void 0 !== a || f.contains(t.ownerDocument, t) || (a = f.style(t, i)),
        n && !d.pixelMarginRight() && eq.test(a) && e0.test(i) && (s = l.width,
        r = l.minWidth,
        o = l.maxWidth,
        l.minWidth = l.maxWidth = l.width = a,
        a = n.width,
        l.width = s,
        l.minWidth = r,
        l.maxWidth = o),
        void 0 === a ? a : a + ""
    }
    ) : eF.currentStyle && (eB = function(t) {
        return t.currentStyle
    }
    ,
    eW = function(t, i, n) {
        var s, r, o, a, l = t.style;
        return null == (a = (n = n || eB(t)) ? n[i] : void 0) && l && l[i] && (a = l[i]),
        eq.test(a) && !eR.test(i) && (s = l.left,
        (o = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left),
        l.left = "fontSize" === i ? "1em" : a,
        a = l.pixelLeft + "px",
        l.left = s,
        o && (r.left = o)),
        void 0 === a ? a : a + "" || "auto"
    }
    );
    var e2 = /alpha\([^)]*\)/i
      , e3 = /opacity\s*=\s*([^)]*)/i
      , eX = /^(none|table(?!-c[ea]).+)/
      , eU = RegExp("^(" + B + ")(.*)$", "i")
      , e4 = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , eV = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , e6 = ["Webkit", "O", "Moz", "ms"]
      , eY = s.createElement("div").style;
    function e7(t) {
        if (t in eY)
            return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = e6.length; n--; )
            if ((t = e6[n] + i)in eY)
                return t
    }
    function eQ(t, i) {
        for (var n, s, r, o = [], a = 0, l = t.length; l > a; a++)
            (s = t[a]).style && (o[a] = f._data(s, "olddisplay"),
            n = s.style.display,
            i ? (o[a] || "none" !== n || (s.style.display = ""),
            "" === s.style.display && X(s) && (o[a] = f._data(s, "olddisplay", eH(s.nodeName)))) : (r = X(s),
            (n && "none" !== n || !r) && f._data(s, "olddisplay", r ? n : f.css(s, "display"))));
        for (a = 0; l > a; a++)
            (s = t[a]).style && (i && "none" !== s.style.display && "" !== s.style.display || (s.style.display = i ? o[a] || "" : "none"));
        return t
    }
    function eK(t, i, n) {
        var s = eU.exec(i);
        return s ? Math.max(0, s[1] - (n || 0)) + (s[2] || "px") : i
    }
    function eJ(t, i, n, s, r) {
        for (var o = n === (s ? "border" : "content") ? 4 : "width" === i ? 1 : 0, a = 0; 4 > o; o += 2)
            "margin" === n && (a += f.css(t, n + R[o], !0, r)),
            s ? ("content" === n && (a -= f.css(t, "padding" + R[o], !0, r)),
            "margin" !== n && (a -= f.css(t, "border" + R[o] + "Width", !0, r))) : (a += f.css(t, "padding" + R[o], !0, r),
            "padding" !== n && (a += f.css(t, "border" + R[o] + "Width", !0, r)));
        return a
    }
    function e5(t, i, n) {
        var s = !0
          , r = "width" === i ? t.offsetWidth : t.offsetHeight
          , o = eB(t)
          , a = d.boxSizing && "border-box" === f.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if ((0 > (r = eW(t, i, o)) || null == r) && (r = t.style[i]),
            eq.test(r))
                return r;
            s = a && (d.boxSizingReliable() || r === t.style[i]),
            r = parseFloat(r) || 0
        }
        return r + eJ(t, i, n || (a ? "border" : "content"), s, o) + "px"
    }
    function eG(t, i, n, s, r) {
        return new eG.prototype.init(t,i,n,s,r)
    }
    f.extend({
        cssHooks: {
            opacity: {
                get: function(t, i) {
                    if (i) {
                        var n = eW(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: d.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, i, n, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, a, l = f.camelCase(i), c = t.style;
                if (i = f.cssProps[l] || (f.cssProps[l] = e7(l) || l),
                a = f.cssHooks[i] || f.cssHooks[l],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(t, !1, s)) ? r : c[i];
                if ("string" == (o = typeof n) && (r = W.exec(n)) && r[1] && (n = U(t, i, r),
                o = "number"),
                null != n && n == n && ("number" === o && (n += r && r[3] || (f.cssNumber[l] ? "" : "px")),
                d.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (c[i] = "inherit"),
                !(a && "set"in a && void 0 === (n = a.set(t, n, s)))))
                    try {
                        c[i] = n
                    } catch (u) {}
            }
        },
        css: function(t, i, n, s) {
            var r, o, a, l = f.camelCase(i);
            return i = f.cssProps[l] || (f.cssProps[l] = e7(l) || l),
            (a = f.cssHooks[i] || f.cssHooks[l]) && "get"in a && (o = a.get(t, !0, n)),
            void 0 === o && (o = eW(t, i, s)),
            "normal" === o && i in eV && (o = eV[i]),
            "" === n || n ? (r = parseFloat(o),
            !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    f.each(["height", "width"], function(t, i) {
        f.cssHooks[i] = {
            get: function(t, n, s) {
                return n ? eX.test(f.css(t, "display")) && 0 === t.offsetWidth ? eM(t, e4, function() {
                    return e5(t, i, s)
                }) : e5(t, i, s) : void 0
            },
            set: function(t, n, s) {
                var r = s && eB(t);
                return eK(t, n, s ? eJ(t, i, s, d.boxSizing && "border-box" === f.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    d.opacity || (f.cssHooks.opacity = {
        get: function(t, i) {
            return e3.test((i && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : i ? "1" : ""
        },
        set: function(t, i) {
            var n = t.style
              , s = t.currentStyle
              , r = f.isNumeric(i) ? "alpha(opacity=" + 100 * i + ")" : ""
              , o = s && s.filter || n.filter || "";
            n.zoom = 1,
            (i >= 1 || "" === i) && "" === f.trim(o.replace(e2, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === i || s && !s.filter) || (n.filter = e2.test(o) ? o.replace(e2, r) : o + " " + r)
        }
    }),
    f.cssHooks.marginRight = e1(d.reliableMarginRight, function(t, i) {
        return i ? eM(t, {
            display: "inline-block"
        }, eW, [t, "marginRight"]) : void 0
    }),
    f.cssHooks.marginLeft = e1(d.reliableMarginLeft, function(t, i) {
        return i ? (parseFloat(eW(t, "marginLeft")) || (f.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - eM(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, i) {
        f.cssHooks[t + i] = {
            expand: function(n) {
                for (var s = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > s; s++)
                    r[t + R[s] + i] = o[s] || o[s - 2] || o[0];
                return r
            }
        },
        e0.test(t) || (f.cssHooks[t + i].set = eK)
    }),
    f.fn.extend({
        css: function(t, i) {
            return V(this, function(t, i, n) {
                var s, r, o = {}, a = 0;
                if (f.isArray(i)) {
                    for (s = eB(t),
                    r = i.length; r > a; a++)
                        o[i[a]] = f.css(t, i[a], !1, s);
                    return o
                }
                return void 0 !== n ? f.style(t, i, n) : f.css(t, i)
            }, t, i, arguments.length > 1)
        },
        show: function() {
            return eQ(this, !0)
        },
        hide: function() {
            return eQ(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                X(this) ? f(this).show() : f(this).hide()
            })
        }
    }),
    f.Tween = eG,
    eG.prototype = {
        constructor: eG,
        init: function(t, i, n, s, r, o) {
            this.elem = t,
            this.prop = n,
            this.easing = r || f.easing._default,
            this.options = i,
            this.start = this.now = this.cur(),
            this.end = s,
            this.unit = o || (f.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = eG.propHooks[this.prop];
            return t && t.get ? t.get(this) : eG.propHooks._default.get(this)
        },
        run: function(t) {
            var i, n = eG.propHooks[this.prop];
            return this.options.duration ? this.pos = i = f.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = i = t,
            this.now = (this.end - this.start) * i + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : eG.propHooks._default.set(this),
            this
        }
    },
    eG.prototype.init.prototype = eG.prototype,
    eG.propHooks = {
        _default: {
            get: function(t) {
                var i;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (i = f.css(t.elem, t.prop, "")) && "auto" !== i ? i : 0
            },
            set: function(t) {
                f.fx.step[t.prop] ? f.fx.step[t.prop](t) : 1 === t.elem.nodeType && (null != t.elem.style[f.cssProps[t.prop]] || f.cssHooks[t.prop]) ? f.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    eG.propHooks.scrollTop = eG.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    f.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    f.fx = eG.prototype.init,
    f.fx.step = {};
    var eZ, te, tt = /^(?:toggle|show|hide)$/, ti = /queueHooks$/;
    function tn() {
        return t.setTimeout(function() {
            eZ = void 0
        }),
        eZ = f.now()
    }
    function ts(t, i) {
        var n, s = {
            height: t
        }, r = 0;
        for (i = i ? 1 : 0; 4 > r; r += 2 - i)
            s["margin" + (n = R[r])] = s["padding" + n] = t;
        return i && (s.opacity = s.width = t),
        s
    }
    function tr(t, i, n) {
        for (var s, r = (to.tweeners[i] || []).concat(to.tweeners["*"]), o = 0, a = r.length; a > o; o++)
            if (s = r[o].call(n, i, t))
                return s
    }
    function to(t, i, n) {
        var s, r, o = 0, a = to.prefilters.length, l = f.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (r)
                return !1;
            for (var i = eZ || tn(), n = Math.max(0, u.startTime + u.duration - i), s = n / u.duration || 0, o = 1 - s, a = 0, c = u.tweens.length; c > a; a++)
                u.tweens[a].run(o);
            return l.notifyWith(t, [u, o, n]),
            1 > o && c ? n : (l.resolveWith(t, [u]),
            !1)
        }, u = l.promise({
            elem: t,
            props: f.extend({}, i),
            opts: f.extend(!0, {
                specialEasing: {},
                easing: f.easing._default
            }, n),
            originalProperties: i,
            originalOptions: n,
            startTime: eZ || tn(),
            duration: n.duration,
            tweens: [],
            createTween: function(i, n) {
                var s = f.Tween(t, u.opts, i, n, u.opts.specialEasing[i] || u.opts.easing);
                return u.tweens.push(s),
                s
            },
            stop: function(i) {
                var n = 0
                  , s = i ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; s > n; n++)
                    u.tweens[n].run(1);
                return i ? (l.notifyWith(t, [u, 1, 0]),
                l.resolveWith(t, [u, i])) : l.rejectWith(t, [u, i]),
                this
            }
        }), h = u.props;
        for (function t(i, n) {
            var s, r, o, a, l;
            for (s in i)
                if (o = n[r = f.camelCase(s)],
                a = i[s],
                f.isArray(a) && (o = a[1],
                a = i[s] = a[0]),
                s !== r && (i[r] = a,
                delete i[s]),
                (l = f.cssHooks[r]) && ("expand"in l))
                    for (s in a = l.expand(a),
                    delete i[r],
                    a)
                        (s in i) || (i[s] = a[s],
                        n[s] = o);
                else
                    n[r] = o
        }(h, u.opts.specialEasing); a > o; o++)
            if (s = to.prefilters[o].call(u, t, h, u.opts))
                return f.isFunction(s.stop) && (f._queueHooks(u.elem, u.opts.queue).stop = f.proxy(s.stop, s)),
                s;
        return f.map(h, tr, u),
        f.isFunction(u.opts.start) && u.opts.start.call(t, u),
        f.fx.timer(f.extend(c, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    f.Animation = f.extend(to, {
        tweeners: {
            "*": [function(t, i) {
                var n = this.createTween(t, i);
                return U(n.elem, t, W.exec(i), n),
                n
            }
            ]
        },
        tweener: function(t, i) {
            f.isFunction(t) ? (i = t,
            t = ["*"]) : t = t.match(L);
            for (var n, s = 0, r = t.length; r > s; s++)
                n = t[s],
                to.tweeners[n] = to.tweeners[n] || [],
                to.tweeners[n].unshift(i)
        },
        prefilters: [function t(i, n, s) {
            var r, o, a, l, c, u, h, p, g = this, m = {}, v = i.style, y = i.nodeType && X(i), b = f._data(i, "fxshow");
            for (r in s.queue || (null == (c = f._queueHooks(i, "fx")).unqueued && (c.unqueued = 0,
            u = c.empty.fire,
            c.empty.fire = function() {
                c.unqueued || u()
            }
            ),
            c.unqueued++,
            g.always(function() {
                g.always(function() {
                    c.unqueued--,
                    f.queue(i, "fx").length || c.empty.fire()
                })
            })),
            1 === i.nodeType && ("height"in n || "width"in n) && (s.overflow = [v.overflow, v.overflowX, v.overflowY],
            "inline" === (p = "none" === (h = f.css(i, "display")) ? f._data(i, "olddisplay") || eH(i.nodeName) : h) && "none" === f.css(i, "float") && (d.inlineBlockNeedsLayout && "inline" !== eH(i.nodeName) ? v.zoom = 1 : v.display = "inline-block")),
            s.overflow && (v.overflow = "hidden",
            d.shrinkWrapBlocks() || g.always(function() {
                v.overflow = s.overflow[0],
                v.overflowX = s.overflow[1],
                v.overflowY = s.overflow[2]
            })),
            n)
                if (o = n[r],
                tt.exec(o)) {
                    if (delete n[r],
                    a = a || "toggle" === o,
                    o === (y ? "hide" : "show")) {
                        if ("show" !== o || !b || void 0 === b[r])
                            continue;
                        y = !0
                    }
                    m[r] = b && b[r] || f.style(i, r)
                } else
                    h = void 0;
            if (f.isEmptyObject(m))
                "inline" === ("none" === h ? eH(i.nodeName) : h) && (v.display = h);
            else
                for (r in b ? "hidden"in b && (y = b.hidden) : b = f._data(i, "fxshow", {}),
                a && (b.hidden = !y),
                y ? f(i).show() : g.done(function() {
                    f(i).hide()
                }),
                g.done(function() {
                    var t;
                    for (t in f._removeData(i, "fxshow"),
                    m)
                        f.style(i, t, m[t])
                }),
                m)
                    l = tr(y ? b[r] : 0, r, g),
                    r in b || (b[r] = l.start,
                    y && (l.end = l.start,
                    l.start = "width" === r || "height" === r ? 1 : 0))
        }
        ],
        prefilter: function(t, i) {
            i ? to.prefilters.unshift(t) : to.prefilters.push(t)
        }
    }),
    f.speed = function(t, i, n) {
        var s = t && "object" == typeof t ? f.extend({}, t) : {
            complete: n || !n && i || f.isFunction(t) && t,
            duration: t,
            easing: n && i || i && !f.isFunction(i) && i
        };
        return s.duration = f.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in f.fx.speeds ? f.fx.speeds[s.duration] : f.fx.speeds._default,
        null != s.queue && !0 !== s.queue || (s.queue = "fx"),
        s.old = s.complete,
        s.complete = function() {
            f.isFunction(s.old) && s.old.call(this),
            s.queue && f.dequeue(this, s.queue)
        }
        ,
        s
    }
    ,
    f.fn.extend({
        fadeTo: function(t, i, n, s) {
            return this.filter(X).css("opacity", 0).show().end().animate({
                opacity: i
            }, t, n, s)
        },
        animate: function(t, i, n, s) {
            var r = f.isEmptyObject(t)
              , o = f.speed(i, n, s)
              , a = function() {
                var i = to(this, f.extend({}, t), o);
                (r || f._data(this, "finish")) && i.stop(!0)
            };
            return a.finish = a,
            r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(t, i, n) {
            var s = function(t) {
                var i = t.stop;
                delete t.stop,
                i(n)
            };
            return "string" != typeof t && (n = i,
            i = t,
            t = void 0),
            i && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var i = !0
                  , r = null != t && t + "queueHooks"
                  , o = f.timers
                  , a = f._data(this);
                if (r)
                    a[r] && a[r].stop && s(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && ti.test(r) && s(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n),
                    i = !1,
                    o.splice(r, 1));
                !i && n || f.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var i, n = f._data(this), s = n[t + "queue"], r = n[t + "queueHooks"], o = f.timers, a = s ? s.length : 0;
                for (n.finish = !0,
                f.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                i = o.length; i--; )
                    o[i].elem === this && o[i].queue === t && (o[i].anim.stop(!0),
                    o.splice(i, 1));
                for (i = 0; a > i; i++)
                    s[i] && s[i].finish && s[i].finish.call(this);
                delete n.finish
            })
        }
    }),
    f.each(["toggle", "show", "hide"], function(t, i) {
        var n = f.fn[i];
        f.fn[i] = function(t, s, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ts(i, !0), t, s, r)
        }
    }),
    f.each({
        slideDown: ts("show"),
        slideUp: ts("hide"),
        slideToggle: ts("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, i) {
        f.fn[t] = function(t, n, s) {
            return this.animate(i, t, n, s)
        }
    }),
    f.timers = [],
    f.fx.tick = function() {
        var t, i = f.timers, n = 0;
        for (eZ = f.now(); n < i.length; n++)
            (t = i[n])() || i[n] !== t || i.splice(n--, 1);
        i.length || f.fx.stop(),
        eZ = void 0
    }
    ,
    f.fx.timer = function(t) {
        f.timers.push(t),
        t() ? f.fx.start() : f.timers.pop()
    }
    ,
    f.fx.interval = 13,
    f.fx.start = function() {
        te || (te = t.setInterval(f.fx.tick, f.fx.interval))
    }
    ,
    f.fx.stop = function() {
        t.clearInterval(te),
        te = null
    }
    ,
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    f.fn.delay = function(i, n) {
        return i = f.fx && f.fx.speeds[i] || i,
        n = n || "fx",
        this.queue(n, function(n, s) {
            var r = t.setTimeout(n, i);
            s.stop = function() {
                t.clearTimeout(r)
            }
        })
    }
    ,
    tu = s.createElement("input"),
    th = s.createElement("div"),
    tp = (td = s.createElement("select")).appendChild(s.createElement("option")),
    (th = s.createElement("div")).setAttribute("className", "t"),
    th.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    tc = th.getElementsByTagName("a")[0],
    tu.setAttribute("type", "checkbox"),
    th.appendChild(tu),
    (tc = th.getElementsByTagName("a")[0]).style.cssText = "top:1px",
    d.getSetAttribute = "t" !== th.className,
    d.style = /top/.test(tc.getAttribute("style")),
    d.hrefNormalized = "/a" === tc.getAttribute("href"),
    d.checkOn = !!tu.value,
    d.optSelected = tp.selected,
    d.enctype = !!s.createElement("form").enctype,
    td.disabled = !0,
    d.optDisabled = !tp.disabled,
    (tu = s.createElement("input")).setAttribute("value", ""),
    d.input = "" === tu.getAttribute("value"),
    tu.value = "t",
    tu.setAttribute("type", "radio"),
    d.radioValue = "t" === tu.value;
    var ta = /\r/g
      , tl = /[\x20\t\r\n\f]+/g;
    f.fn.extend({
        val: function(t) {
            var i, n, s, r = this[0];
            return arguments.length ? (s = f.isFunction(t),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = s ? t.call(this, n, f(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : f.isArray(r) && (r = f.map(r, function(t) {
                    return null == t ? "" : t + ""
                })),
                (i = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, r, "value") || (this.value = r))
            })) : r ? (i = f.valHooks[r.type] || f.valHooks[r.nodeName.toLowerCase()]) && "get"in i && void 0 !== (n = i.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(ta, "") : null == n ? "" : n : void 0
        }
    }),
    f.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var i = f.find.attr(t, "value");
                    return null != i ? i : f.trim(f.text(t)).replace(tl, " ")
                }
            },
            select: {
                get: function(t) {
                    for (var i, n, s = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, a = o ? null : [], l = o ? r + 1 : s.length, c = 0 > r ? l : o ? r : 0; l > c; c++)
                        if (((n = s[c]).selected || c === r) && (d.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !f.nodeName(n.parentNode, "optgroup"))) {
                            if (i = f(n).val(),
                            o)
                                return i;
                            a.push(i)
                        }
                    return a
                },
                set: function(t, i) {
                    for (var n, s, r = t.options, o = f.makeArray(i), a = r.length; a--; )
                        if (s = r[a],
                        f.inArray(f.valHooks.option.get(s), o) > -1)
                            try {
                                s.selected = n = !0
                            } catch (l) {
                                s.scrollHeight
                            }
                        else
                            s.selected = !1;
                    return n || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            set: function(t, i) {
                return f.isArray(i) ? t.checked = f.inArray(f(t).val(), i) > -1 : void 0
            }
        },
        d.checkOn || (f.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var tc, tu, th, td, tp, tf, tg, tm = f.expr.attrHandle, tv = /^(?:checked|selected)$/i, ty = d.getSetAttribute, t8 = d.input;
    f.fn.extend({
        attr: function(t, i) {
            return V(this, f.attr, t, i, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                f.removeAttr(this, t)
            })
        }
    }),
    f.extend({
        attr: function(t, i, n) {
            var s, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === t.getAttribute ? f.prop(t, i, n) : (1 === o && f.isXMLDoc(t) || (i = i.toLowerCase(),
                r = f.attrHooks[i] || (f.expr.match.bool.test(i) ? tg : tf)),
                void 0 !== n ? null === n ? void f.removeAttr(t, i) : r && "set"in r && void 0 !== (s = r.set(t, n, i)) ? s : (t.setAttribute(i, n + ""),
                n) : r && "get"in r && null !== (s = r.get(t, i)) ? s : null == (s = f.find.attr(t, i)) ? void 0 : s)
        },
        attrHooks: {
            type: {
                set: function(t, i) {
                    if (!d.radioValue && "radio" === i && f.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", i),
                        n && (t.value = n),
                        i
                    }
                }
            }
        },
        removeAttr: function(t, i) {
            var n, s, r = 0, o = i && i.match(L);
            if (o && 1 === t.nodeType)
                for (; n = o[r++]; )
                    s = f.propFix[n] || n,
                    f.expr.match.bool.test(n) ? t8 && ty || !tv.test(n) ? t[s] = !1 : t[f.camelCase("default-" + n)] = t[s] = !1 : f.attr(t, n, ""),
                    t.removeAttribute(ty ? n : s)
        }
    }),
    tg = {
        set: function(t, i, n) {
            return !1 === i ? f.removeAttr(t, n) : t8 && ty || !tv.test(n) ? t.setAttribute(!ty && f.propFix[n] || n, n) : t[f.camelCase("default-" + n)] = t[n] = !0,
            n
        }
    },
    f.each(f.expr.match.bool.source.match(/\w+/g), function(t, i) {
        var n = tm[i] || f.find.attr;
        t8 && ty || !tv.test(i) ? tm[i] = function(t, i, s) {
            var r, o;
            return s || (o = tm[i],
            tm[i] = r,
            r = null != n(t, i, s) ? i.toLowerCase() : null,
            tm[i] = o),
            r
        }
        : tm[i] = function(t, i, n) {
            return n ? void 0 : t[f.camelCase("default-" + i)] ? i.toLowerCase() : null
        }
    }),
    t8 && ty || (f.attrHooks.value = {
        set: function(t, i, n) {
            return f.nodeName(t, "input") ? void (t.defaultValue = i) : tf && tf.set(t, i, n)
        }
    }),
    ty || (tf = {
        set: function(t, i, n) {
            var s = t.getAttributeNode(n);
            return s || t.setAttributeNode(s = t.ownerDocument.createAttribute(n)),
            s.value = i += "",
            "value" === n || i === t.getAttribute(n) ? i : void 0
        }
    },
    tm.id = tm.name = tm.coords = function(t, i, n) {
        var s;
        return n ? void 0 : (s = t.getAttributeNode(i)) && "" !== s.value ? s.value : null
    }
    ,
    f.valHooks.button = {
        get: function(t, i) {
            var n = t.getAttributeNode(i);
            return n && n.specified ? n.value : void 0
        },
        set: tf.set
    },
    f.attrHooks.contenteditable = {
        set: function(t, i, n) {
            tf.set(t, "" !== i && i, n)
        }
    },
    f.each(["width", "height"], function(t, i) {
        f.attrHooks[i] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(i, "auto"),
                n) : void 0
            }
        }
    })),
    d.style || (f.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, i) {
            return t.style.cssText = i + ""
        }
    });
    var tb = /^(?:input|select|textarea|button|object)$/i
      , t$ = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function(t, i) {
            return V(this, f.prop, t, i, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = f.propFix[t] || t,
            this.each(function() {
                try {
                    this[t] = void 0,
                    delete this[t]
                } catch (i) {}
            })
        }
    }),
    f.extend({
        prop: function(t, i, n) {
            var s, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && f.isXMLDoc(t) || (i = f.propFix[i] || i,
                r = f.propHooks[i]),
                void 0 !== n ? r && "set"in r && void 0 !== (s = r.set(t, n, i)) ? s : t[i] = n : r && "get"in r && null !== (s = r.get(t, i)) ? s : t[i]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var i = f.find.attr(t, "tabindex");
                    return i ? parseInt(i, 10) : tb.test(t.nodeName) || t$.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    d.hrefNormalized || f.each(["href", "src"], function(t, i) {
        f.propHooks[i] = {
            get: function(t) {
                return t.getAttribute(i, 4)
            }
        }
    }),
    d.optSelected || (f.propHooks.selected = {
        get: function(t) {
            var i = t.parentNode;
            return i && (i.selectedIndex,
            i.parentNode && i.parentNode.selectedIndex),
            null
        },
        set: function(t) {
            var i = t.parentNode;
            i && (i.selectedIndex,
            i.parentNode && i.parentNode.selectedIndex)
        }
    }),
    f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        f.propFix[this.toLowerCase()] = this
    }),
    d.enctype || (f.propFix.enctype = "encoding");
    var tx = /[\t\r\n\f]/g;
    function tw(t) {
        return f.attr(t, "class") || ""
    }
    f.fn.extend({
        addClass: function(t) {
            var i, n, s, r, o, a, l, c = 0;
            if (f.isFunction(t))
                return this.each(function(i) {
                    f(this).addClass(t.call(this, i, tw(this)))
                });
            if ("string" == typeof t && t) {
                for (i = t.match(L) || []; n = this[c++]; )
                    if (r = tw(n),
                    s = 1 === n.nodeType && (" " + r + " ").replace(tx, " ")) {
                        for (a = 0; o = i[a++]; )
                            0 > s.indexOf(" " + o + " ") && (s += o + " ");
                        r !== (l = f.trim(s)) && f.attr(n, "class", l)
                    }
            }
            return this
        },
        removeClass: function(t) {
            var i, n, s, r, o, a, l, c = 0;
            if (f.isFunction(t))
                return this.each(function(i) {
                    f(this).removeClass(t.call(this, i, tw(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t) {
                for (i = t.match(L) || []; n = this[c++]; )
                    if (r = tw(n),
                    s = 1 === n.nodeType && (" " + r + " ").replace(tx, " ")) {
                        for (a = 0; o = i[a++]; )
                            for (; s.indexOf(" " + o + " ") > -1; )
                                s = s.replace(" " + o + " ", " ");
                        r !== (l = f.trim(s)) && f.attr(n, "class", l)
                    }
            }
            return this
        },
        toggleClass: function(t, i) {
            var n = typeof t;
            return "boolean" == typeof i && "string" === n ? i ? this.addClass(t) : this.removeClass(t) : f.isFunction(t) ? this.each(function(n) {
                f(this).toggleClass(t.call(this, n, tw(this), i), i)
            }) : this.each(function() {
                var i, s, r, o;
                if ("string" === n)
                    for (s = 0,
                    r = f(this),
                    o = t.match(L) || []; i = o[s++]; )
                        r.hasClass(i) ? r.removeClass(i) : r.addClass(i);
                else
                    void 0 !== t && "boolean" !== n || ((i = tw(this)) && f._data(this, "__className__", i),
                    f.attr(this, "class", i || !1 === t ? "" : f._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var i, n, s = 0;
            for (i = " " + t + " "; n = this[s++]; )
                if (1 === n.nodeType && (" " + tw(n) + " ").replace(tx, " ").indexOf(i) > -1)
                    return !0;
            return !1
        }
    }),
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
        f.fn[i] = function(t, n) {
            return arguments.length > 0 ? this.on(i, null, t, n) : this.trigger(i)
        }
    }),
    f.fn.extend({
        hover: function(t, i) {
            return this.mouseenter(t).mouseleave(i || t)
        }
    });
    var t_ = t.location
      , tC = f.now()
      , tT = /\?/
      , tE = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    f.parseJSON = function(i) {
        if (t.JSON && t.JSON.parse)
            return t.JSON.parse(i + "");
        var n, s = null, r = f.trim(i + "");
        return r && !f.trim(r.replace(tE, function(t, i, r, o) {
            return n && i && (s = 0),
            0 === s ? t : (n = r || i,
            s += !o - !r,
            "")
        })) ? Function("return " + r)() : f.error("Invalid JSON: " + i)
    }
    ,
    f.parseXML = function(i) {
        var n, s;
        if (!i || "string" != typeof i)
            return null;
        try {
            t.DOMParser ? n = (s = new t.DOMParser).parseFromString(i, "text/xml") : ((n = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false",
            n.loadXML(i))
        } catch (r) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + i),
        n
    }
    ;
    var tk = /#.*$/
      , tA = /([?&])_=[^&]*/
      , tS = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , tD = /^(?:GET|HEAD)$/
      , tN = /^\/\//
      , tL = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , tj = {}
      , tO = {}
      , tz = "*/".concat("*")
      , tP = t_.href
      , tI = tL.exec(tP.toLowerCase()) || [];
    function t9(t) {
        return function(i, n) {
            "string" != typeof i && (n = i,
            i = "*");
            var s, r = 0, o = i.toLowerCase().match(L) || [];
            if (f.isFunction(n))
                for (; s = o[r++]; )
                    "+" === s.charAt(0) ? (t[s = s.slice(1) || "*"] = t[s] || []).unshift(n) : (t[s] = t[s] || []).push(n)
        }
    }
    function tH(t, i, n, s) {
        var r = {}
          , o = t === tO;
        function a(l) {
            var c;
            return r[l] = !0,
            f.each(t[l] || [], function(t, l) {
                var u = l(i, n, s);
                return "string" != typeof u || o || r[u] ? o ? !(c = u) : void 0 : (i.dataTypes.unshift(u),
                a(u),
                !1)
            }),
            c
        }
        return a(i.dataTypes[0]) || !r["*"] && a("*")
    }
    function t0(t, i) {
        var n, s, r = f.ajaxSettings.flatOptions || {};
        for (s in i)
            void 0 !== i[s] && ((r[s] ? t : n || (n = {}))[s] = i[s]);
        return n && f.extend(!0, t, n),
        t
    }
    function tq(t) {
        return t.style && t.style.display || f.css(t, "display")
    }
    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: tP,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(tI[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": tz,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, i) {
            return i ? t0(t0(t, f.ajaxSettings), i) : t0(f.ajaxSettings, t)
        },
        ajaxPrefilter: t9(tj),
        ajaxTransport: t9(tO),
        ajax: function(i, n) {
            "object" == typeof i && (n = i,
            i = void 0),
            n = n || {};
            var s, r, o, a, l, c, u, h, d = f.ajaxSetup({}, n), p = d.context || d, g = d.context && (p.nodeType || p.jquery) ? f(p) : f.event, m = f.Deferred(), v = f.Callbacks("once memory"), y = d.statusCode || {}, b = {}, $ = {}, x = 0, w = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var i;
                    if (2 === x) {
                        if (!h)
                            for (h = {}; i = tS.exec(a); )
                                h[i[1].toLowerCase()] = i[2];
                        i = h[t.toLowerCase()]
                    }
                    return null == i ? null : i
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null
                },
                setRequestHeader: function(t, i) {
                    var n = t.toLowerCase();
                    return x || (b[t = $[n] = $[n] || t] = i),
                    this
                },
                overrideMimeType: function(t) {
                    return x || (d.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var i;
                    if (t) {
                        if (2 > x)
                            for (i in t)
                                y[i] = [y[i], t[i]];
                        else
                            _.always(t[_.status])
                    }
                    return this
                },
                abort: function(t) {
                    var i = t || w;
                    return u && u.abort(i),
                    T(0, i),
                    this
                }
            };
            if (m.promise(_).complete = v.add,
            _.success = _.done,
            _.error = _.fail,
            d.url = ((i || d.url || tP) + "").replace(tk, "").replace(tN, tI[1] + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = f.trim(d.dataType || "*").toLowerCase().match(L) || [""],
            null == d.crossDomain && (s = tL.exec(d.url.toLowerCase()),
            d.crossDomain = !(!s || s[1] === tI[1] && s[2] === tI[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (tI[3] || ("http:" === tI[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = f.param(d.data, d.traditional)),
            tH(tj, d, n, _),
            2 === x)
                return _;
            for (r in (c = f.event && d.global) && 0 == f.active++ && f.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !tD.test(d.type),
            o = d.url,
            d.hasContent || (d.data && (o = d.url += (tT.test(o) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (d.url = tA.test(o) ? o.replace(tA, "$1_=" + tC++) : o + (tT.test(o) ? "&" : "?") + "_=" + tC++)),
            d.ifModified && (f.lastModified[o] && _.setRequestHeader("If-Modified-Since", f.lastModified[o]),
            f.etag[o] && _.setRequestHeader("If-None-Match", f.etag[o])),
            (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && _.setRequestHeader("Content-Type", d.contentType),
            _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tz + "; q=0.01" : "") : d.accepts["*"]),
            d.headers)
                _.setRequestHeader(r, d.headers[r]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, _, d) || 2 === x))
                return _.abort();
            for (r in w = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                _[r](d[r]);
            if (u = tH(tO, d, n, _)) {
                if (_.readyState = 1,
                c && g.trigger("ajaxSend", [_, d]),
                2 === x)
                    return _;
                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    x = 1,
                    u.send(b, T)
                } catch (C) {
                    if (!(2 > x))
                        throw C;
                    T(-1, C)
                }
            } else
                T(-1, "No Transport");
            function T(i, n, s, r) {
                var h, b, $, w, C, T = n;
                2 !== x && (x = 2,
                l && t.clearTimeout(l),
                u = void 0,
                a = r || "",
                _.readyState = i > 0 ? 4 : 0,
                h = i >= 200 && 300 > i || 304 === i,
                s && (w = function t(i, n, s) {
                    for (var r, o, a, l, c = i.contents, u = i.dataTypes; "*" === u[0]; )
                        u.shift(),
                        void 0 === o && (o = i.mimeType || n.getResponseHeader("Content-Type"));
                    if (o) {
                        for (l in c)
                            if (c[l] && c[l].test(o)) {
                                u.unshift(l);
                                break
                            }
                    }
                    if (u[0]in s)
                        a = u[0];
                    else {
                        for (l in s) {
                            if (!u[0] || i.converters[l + " " + u[0]]) {
                                a = l;
                                break
                            }
                            r || (r = l)
                        }
                        a = a || r
                    }
                    return a ? (a !== u[0] && u.unshift(a),
                    s[a]) : void 0
                }(d, _, s)),
                w = function t(i, n, s, r) {
                    var o, a, l, c, u, h = {}, d = i.dataTypes.slice();
                    if (d[1])
                        for (l in i.converters)
                            h[l.toLowerCase()] = i.converters[l];
                    for (a = d.shift(); a; )
                        if (i.responseFields[a] && (s[i.responseFields[a]] = n),
                        !u && r && i.dataFilter && (n = i.dataFilter(n, i.dataType)),
                        u = a,
                        a = d.shift()) {
                            if ("*" === a)
                                a = u;
                            else if ("*" !== u && u !== a) {
                                if (!(l = h[u + " " + a] || h["* " + a])) {
                                    for (o in h)
                                        if ((c = o.split(" "))[1] === a && (l = h[u + " " + c[0]] || h["* " + c[0]])) {
                                            !0 === l ? l = h[o] : !0 !== h[o] && (a = c[0],
                                            d.unshift(c[1]));
                                            break
                                        }
                                }
                                if (!0 !== l) {
                                    if (l && i.throws)
                                        n = l(n);
                                    else
                                        try {
                                            n = l(n)
                                        } catch (p) {
                                            return {
                                                state: "parsererror",
                                                error: l ? p : "No conversion from " + u + " to " + a
                                            }
                                        }
                                }
                            }
                        }
                    return {
                        state: "success",
                        data: n
                    }
                }(d, w, _, h),
                h ? (d.ifModified && ((C = _.getResponseHeader("Last-Modified")) && (f.lastModified[o] = C),
                (C = _.getResponseHeader("etag")) && (f.etag[o] = C)),
                204 === i || "HEAD" === d.type ? T = "nocontent" : 304 === i ? T = "notmodified" : (T = w.state,
                b = w.data,
                h = !($ = w.error))) : ($ = T,
                !i && T || (T = "error",
                0 > i && (i = 0))),
                _.status = i,
                _.statusText = (n || T) + "",
                h ? m.resolveWith(p, [b, T, _]) : m.rejectWith(p, [_, T, $]),
                _.statusCode(y),
                y = void 0,
                c && g.trigger(h ? "ajaxSuccess" : "ajaxError", [_, d, h ? b : $]),
                v.fireWith(p, [_, T]),
                c && (g.trigger("ajaxComplete", [_, d]),
                --f.active || f.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(t, i, n) {
            return f.get(t, i, n, "json")
        },
        getScript: function(t, i) {
            return f.get(t, void 0, i, "script")
        }
    }),
    f.each(["get", "post"], function(t, i) {
        f[i] = function(t, n, s, r) {
            return f.isFunction(n) && (r = r || s,
            s = n,
            n = void 0),
            f.ajax(f.extend({
                url: t,
                type: i,
                dataType: r,
                data: n,
                success: s
            }, f.isPlainObject(t) && t))
        }
    }),
    f._evalUrl = function(t) {
        return f.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    f.fn.extend({
        wrapAll: function(t) {
            if (f.isFunction(t))
                return this.each(function(i) {
                    f(this).wrapAll(t.call(this, i))
                });
            if (this[0]) {
                var i = f(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && i.insertBefore(this[0]),
                i.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType; )
                        t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return f.isFunction(t) ? this.each(function(i) {
                f(this).wrapInner(t.call(this, i))
            }) : this.each(function() {
                var i = f(this)
                  , n = i.contents();
                n.length ? n.wrapAll(t) : i.append(t)
            })
        },
        wrap: function(t) {
            var i = f.isFunction(t);
            return this.each(function(n) {
                f(this).wrapAll(i ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    f.expr.filters.hidden = function(t) {
        return d.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function t(i) {
            if (!f.contains(i.ownerDocument || s, i))
                return !0;
            for (; i && 1 === i.nodeType; ) {
                if ("none" === tq(i) || "hidden" === i.type)
                    return !0;
                i = i.parentNode
            }
            return !1
        }(t)
    }
    ,
    f.expr.filters.visible = function(t) {
        return !f.expr.filters.hidden(t)
    }
    ;
    var tM = /%20/g
      , tF = /\[\]$/
      , tB = /\r?\n/g
      , tW = /^(?:submit|button|image|reset|file)$/i
      , tR = /^(?:input|select|textarea|keygen)/i;
    function t1(t, i, n, s) {
        var r;
        if (f.isArray(i))
            f.each(i, function(i, r) {
                n || tF.test(t) ? s(t, r) : t1(t + "[" + ("object" == typeof r && null != r ? i : "") + "]", r, n, s)
            });
        else if (n || "object" !== f.type(i))
            s(t, i);
        else
            for (r in i)
                t1(t + "[" + r + "]", i[r], n, s)
    }
    f.param = function(t, i) {
        var n, s = [], r = function(t, i) {
            i = f.isFunction(i) ? i() : null == i ? "" : i,
            s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(i)
        };
        if (void 0 === i && (i = f.ajaxSettings && f.ajaxSettings.traditional),
        f.isArray(t) || t.jquery && !f.isPlainObject(t))
            f.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                t1(n, t[n], i, r);
        return s.join("&").replace(tM, "+")
    }
    ,
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = f.prop(this, "elements");
                return t ? f.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !f(this).is(":disabled") && tR.test(this.nodeName) && !tW.test(t) && (this.checked || !Y.test(t))
            }).map(function(t, i) {
                var n = f(this).val();
                return null == n ? null : f.isArray(n) ? f.map(n, function(t) {
                    return {
                        name: i.name,
                        value: t.replace(tB, "\r\n")
                    }
                }) : {
                    name: i.name,
                    value: n.replace(tB, "\r\n")
                }
            }).get()
        }
    }),
    f.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return this.isLocal ? t4() : s.documentMode > 8 ? tU() : /^(get|post|head|put|delete|options)$/i.test(this.type) && tU() || t4()
    }
    : tU;
    var t2 = 0
      , t3 = {}
      , tX = f.ajaxSettings.xhr();
    function tU() {
        try {
            return new t.XMLHttpRequest
        } catch (i) {}
    }
    function t4() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (i) {}
    }
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in t3)
            t3[t](void 0, !0)
    }),
    d.cors = !!tX && "withCredentials"in tX,
    (tX = d.ajax = !!tX) && f.ajaxTransport(function(i) {
        if (!i.crossDomain || d.cors) {
            var n;
            return {
                send: function(s, r) {
                    var o, a = i.xhr(), l = ++t2;
                    if (a.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (o in i.xhrFields)
                            a[o] = i.xhrFields[o];
                    for (o in i.mimeType && a.overrideMimeType && a.overrideMimeType(i.mimeType),
                    i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"),
                    s)
                        void 0 !== s[o] && a.setRequestHeader(o, s[o] + "");
                    a.send(i.hasContent && i.data || null),
                    n = function(t, s) {
                        var o, c, u;
                        if (n && (s || 4 === a.readyState)) {
                            if (delete t3[l],
                            n = void 0,
                            a.onreadystatechange = f.noop,
                            s)
                                4 !== a.readyState && a.abort();
                            else {
                                u = {},
                                o = a.status,
                                "string" == typeof a.responseText && (u.text = a.responseText);
                                try {
                                    c = a.statusText
                                } catch (h) {
                                    c = ""
                                }
                                o || !i.isLocal || i.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        }
                        u && r(o, c, u, a.getAllResponseHeaders())
                    }
                    ,
                    i.async ? 4 === a.readyState ? t.setTimeout(n) : a.onreadystatechange = t3[l] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return f.globalEval(t),
                t
            }
        }
    }),
    f.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET",
        t.global = !1)
    }),
    f.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, n = s.head || f("head")[0] || s.documentElement;
            return {
                send: function(r, o) {
                    (i = s.createElement("script")).async = !0,
                    t.scriptCharset && (i.charset = t.scriptCharset),
                    i.src = t.url,
                    i.onload = i.onreadystatechange = function(t, n) {
                        (n || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null,
                        i.parentNode && i.parentNode.removeChild(i),
                        i = null,
                        n || o(200, "success"))
                    }
                    ,
                    n.insertBefore(i, n.firstChild)
                },
                abort: function() {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var tV = []
      , t6 = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tV.pop() || f.expando + "_" + tC++;
            return this[t] = !0,
            t
        }
    }),
    f.ajaxPrefilter("json jsonp", function(i, n, s) {
        var r, o, a, l = !1 !== i.jsonp && (t6.test(i.url) ? "url" : "string" == typeof i.data && 0 === (i.contentType || "").indexOf("application/x-www-form-urlencoded") && t6.test(i.data) && "data");
        return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = f.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback,
        l ? i[l] = i[l].replace(t6, "$1" + r) : !1 !== i.jsonp && (i.url += (tT.test(i.url) ? "&" : "?") + i.jsonp + "=" + r),
        i.converters["script json"] = function() {
            return a || f.error(r + " was not called"),
            a[0]
        }
        ,
        i.dataTypes[0] = "json",
        o = t[r],
        t[r] = function() {
            a = arguments
        }
        ,
        s.always(function() {
            void 0 === o ? f(t).removeProp(r) : t[r] = o,
            i[r] && (i.jsonpCallback = n.jsonpCallback,
            tV.push(r)),
            a && f.isFunction(o) && o(a[0]),
            a = o = void 0
        }),
        "script") : void 0
    }),
    f.parseHTML = function(t, i, n) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof i && (n = i,
        i = !1),
        i = i || s;
        var r = C.exec(t)
          , o = !n && [];
        return r ? [i.createElement(r[1])] : (r = eo([t], i, o),
        o && o.length && f(o).remove(),
        f.merge([], r.childNodes))
    }
    ;
    var tY = f.fn.load;
    function t7(t) {
        return f.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    f.fn.load = function(t, i, n) {
        if ("string" != typeof t && tY)
            return tY.apply(this, arguments);
        var s, r, o, a = this, l = t.indexOf(" ");
        return l > -1 && (s = f.trim(t.slice(l, t.length)),
        t = t.slice(0, l)),
        f.isFunction(i) ? (n = i,
        i = void 0) : i && "object" == typeof i && (r = "POST"),
        a.length > 0 && f.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: i
        }).done(function(t) {
            o = arguments,
            a.html(s ? f("<div>").append(f.parseHTML(t)).find(s) : t)
        }).always(n && function(t, i) {
            a.each(function() {
                n.apply(this, o || [t.responseText, i, t])
            })
        }
        ),
        this
    }
    ,
    f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, i) {
        f.fn[i] = function(t) {
            return this.on(i, t)
        }
    }),
    f.expr.filters.animated = function(t) {
        return f.grep(f.timers, function(i) {
            return t === i.elem
        }).length
    }
    ,
    f.offset = {
        setOffset: function(t, i, n) {
            var s, r, o, a, l, c, u, h = f.css(t, "position"), d = f(t), p = {};
            "static" === h && (t.style.position = "relative"),
            l = d.offset(),
            o = f.css(t, "top"),
            c = f.css(t, "left"),
            (u = ("absolute" === h || "fixed" === h) && f.inArray("auto", [o, c]) > -1) ? (a = (s = d.position()).top,
            r = s.left) : (a = parseFloat(o) || 0,
            r = parseFloat(c) || 0),
            f.isFunction(i) && (i = i.call(t, n, f.extend({}, l))),
            null != i.top && (p.top = i.top - l.top + a),
            null != i.left && (p.left = i.left - l.left + r),
            "using"in i ? i.using.call(t, p) : d.css(p)
        }
    },
    f.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(i) {
                    f.offset.setOffset(this, t, i)
                });
            var i, n, s = {
                top: 0,
                left: 0
            }, r = this[0], o = r && r.ownerDocument;
            if (o)
                return i = o.documentElement,
                f.contains(i, r) ? (void 0 !== r.getBoundingClientRect && (s = r.getBoundingClientRect()),
                n = t7(o),
                {
                    top: s.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                    left: s.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
                }) : s
        },
        position: function() {
            if (this[0]) {
                var t, i, n = {
                    top: 0,
                    left: 0
                }, s = this[0];
                return "fixed" === f.css(s, "position") ? i = s.getBoundingClientRect() : (t = this.offsetParent(),
                i = this.offset(),
                f.nodeName(t[0], "html") || (n = t.offset()),
                n.top += f.css(t[0], "borderTopWidth", !0),
                n.left += f.css(t[0], "borderLeftWidth", !0)),
                {
                    top: i.top - n.top - f.css(s, "marginTop", !0),
                    left: i.left - n.left - f.css(s, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !f.nodeName(t, "html") && "static" === f.css(t, "position"); )
                    t = t.offsetParent;
                return t || eF
            })
        }
    }),
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var n = /Y/.test(i);
        f.fn[t] = function(s) {
            return V(this, function(t, s, r) {
                var o = t7(t);
                return void 0 === r ? o ? i in o ? o[i] : o.document.documentElement[s] : t[s] : void (o ? o.scrollTo(n ? f(o).scrollLeft() : r, n ? r : f(o).scrollTop()) : t[s] = r)
            }, t, s, arguments.length, null)
        }
    }),
    f.each(["top", "left"], function(t, i) {
        f.cssHooks[i] = e1(d.pixelPosition, function(t, n) {
            return n ? (n = eW(t, i),
            eq.test(n) ? f(t).position()[i] + "px" : n) : void 0
        })
    }),
    f.each({
        Height: "height",
        Width: "width"
    }, function(t, i) {
        f.each({
            padding: "inner" + t,
            content: i,
            "": "outer" + t
        }, function(n, s) {
            f.fn[s] = function(s, r) {
                var o = arguments.length && (n || "boolean" != typeof s)
                  , a = n || (!0 === s || !0 === r ? "margin" : "border");
                return V(this, function(i, n, s) {
                    var r;
                    return f.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (r = i.documentElement,
                    Math.max(i.body["scroll" + t], r["scroll" + t], i.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === s ? f.css(i, n, a) : f.style(i, n, s, a)
                }, i, o ? s : void 0, o, null)
            }
        })
    }),
    f.fn.extend({
        bind: function(t, i, n) {
            return this.on(t, null, i, n)
        },
        unbind: function(t, i) {
            return this.off(t, null, i)
        },
        delegate: function(t, i, n, s) {
            return this.on(i, t, n, s)
        },
        undelegate: function(t, i, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(i, t || "**", n)
        }
    }),
    f.fn.size = function() {
        return this.length
    }
    ,
    f.fn.andSelf = f.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return f
    });
    var tQ = t.jQuery
      , tK = t.$;
    return f.noConflict = function(i) {
        return t.$ === f && (t.$ = tK),
        i && t.jQuery === f && (t.jQuery = tQ),
        f
    }
    ,
    i || (t.jQuery = t.$ = f),
    f
}),
function(t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = i(t.Popper)
}(this, function(t) {
    "use strict";
    let i = function t(i) {
        if (i && i.__esModule)
            return i;
        let n = Object.create(null);
        if (i) {
            for (let s in i)
                if ("default" !== s) {
                    let r = Object.getOwnPropertyDescriptor(i, s);
                    Object.defineProperty(n, s, r.get ? r : {
                        enumerable: !0,
                        get: ()=>i[s]
                    })
                }
        }
        return n.default = i,
        Object.freeze(n)
    }(t)
      , n = "transitionend"
      , s = t=>{
        let i = t.getAttribute("data-bs-target");
        if (!i || "#" === i) {
            let n = t.getAttribute("href");
            if (!n || !n.includes("#") && !n.startsWith("."))
                return null;
            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`),
            i = n && "#" !== n ? n.trim() : null
        }
        return i
    }
      , r = t=>{
        let i = s(t);
        return i && document.querySelector(i) ? i : null
    }
      , o = t=>{
        let i = s(t);
        return i ? document.querySelector(i) : null
    }
      , a = t=>{
        t.dispatchEvent(new Event(n))
    }
      , l = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , c = t=>l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , u = (t,i,n)=>{
        Object.keys(n).forEach(s=>{
            var r;
            let o = n[s]
              , a = i[s]
              , c = a && l(a) ? "element" : null == (r = a) ? `${r}` : ({}).toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
            if (!RegExp(o).test(c))
                throw TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${c}" but expected type "${o}".`)
        }
        )
    }
      , h = t=>!(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , d = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , p = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            let i = t.getRootNode();
            return i instanceof ShadowRoot ? i : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? p(t.parentNode) : null
    }
      , f = ()=>{}
      , g = t=>{
        t.offsetHeight
    }
      , m = ()=>{
        let {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , v = []
      , y = ()=>"rtl" === document.documentElement.dir
      , b = t=>{
        var i;
        i = ()=>{
            let i = m();
            if (i) {
                let n = t.NAME
                  , s = i.fn[n];
                i.fn[n] = t.jQueryInterface,
                i.fn[n].Constructor = t,
                i.fn[n].noConflict = ()=>(i.fn[n] = s,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (v.length || document.addEventListener("DOMContentLoaded", ()=>{
            v.forEach(t=>t())
        }
        ),
        v.push(i)) : i()
    }
      , $ = t=>{
        "function" == typeof t && t()
    }
      , x = (t,i,s=!0)=>{
        if (!s)
            return void $(t);
        let r = (t=>{
            if (!t)
                return 0;
            let {transitionDuration: i, transitionDelay: n} = window.getComputedStyle(t)
              , s = Number.parseFloat(i)
              , r = Number.parseFloat(n);
            return s || r ? (i = i.split(",")[0],
            n = n.split(",")[0],
            1e3 * (Number.parseFloat(i) + Number.parseFloat(n))) : 0
        }
        )(i) + 5
          , o = !1
          , l = ({target: s})=>{
            s === i && (o = !0,
            i.removeEventListener(n, l),
            $(t))
        }
        ;
        i.addEventListener(n, l),
        setTimeout(()=>{
            o || a(i)
        }
        , r)
    }
      , w = (t,i,n,s)=>{
        let r = t.indexOf(i);
        if (-1 === r)
            return t[!n && s ? t.length - 1 : 0];
        let o = t.length;
        return r += n ? 1 : -1,
        s && (r = (r + o) % o),
        t[Math.max(0, Math.min(r, o - 1))]
    }
      , _ = /[^.]*(?=\..*)\.|.*/
      , C = /\..*/
      , T = /::\d+$/
      , E = {}
      , k = 1
      , A = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , S = /^(mouseenter|mouseleave)/i
      , D = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function N(t, i) {
        return i && `${i}::${k++}` || t.uidEvent || k++
    }
    function L(t) {
        let i = N(t);
        return t.uidEvent = i,
        E[i] = E[i] || {},
        E[i]
    }
    function j(t, i, n=null) {
        let s = Object.keys(t);
        for (let r = 0, o = s.length; r < o; r++) {
            let a = t[s[r]];
            if (a.originalHandler === i && a.delegationSelector === n)
                return a
        }
        return null
    }
    function O(t, i, n) {
        let s = "string" == typeof i
          , r = I(t);
        return D.has(r) || (r = t),
        [s, s ? n : i, r]
    }
    function z(t, i, n, s, r) {
        var o, a, l, c, u;
        if ("string" != typeof i || !t)
            return;
        if (n || (n = s,
        s = null),
        S.test(i)) {
            let h = t=>function(i) {
                if (!i.relatedTarget || i.relatedTarget !== i.delegateTarget && !i.delegateTarget.contains(i.relatedTarget))
                    return t.call(this, i)
            }
            ;
            s ? s = h(s) : n = h(n)
        }
        let[d,p,f] = O(i, n, s)
          , g = L(t)
          , m = g[f] || (g[f] = {})
          , v = j(m, p, d ? n : null);
        if (v)
            return void (v.oneOff = v.oneOff && r);
        let y = N(p, i.replace(_, ""))
          , b = d ? (o = t,
        a = n,
        l = s,
        function t(i) {
            let n = o.querySelectorAll(a);
            for (let {target: s} = i; s && s !== this; s = s.parentNode)
                for (let r = n.length; r--; )
                    if (n[r] === s)
                        return i.delegateTarget = s,
                        t.oneOff && H.off(o, i.type, a, l),
                        l.apply(s, [i]);
            return null
        }
        ) : (c = t,
        u = n,
        function t(i) {
            return i.delegateTarget = c,
            t.oneOff && H.off(c, i.type, u),
            u.apply(c, [i])
        }
        );
        b.delegationSelector = d ? n : null,
        b.originalHandler = p,
        b.oneOff = r,
        b.uidEvent = y,
        m[y] = b,
        t.addEventListener(f, b, d)
    }
    function P(t, i, n, s, r) {
        let o = j(i[n], s, r);
        o && (t.removeEventListener(n, o, Boolean(r)),
        delete i[n][o.uidEvent])
    }
    function I(t) {
        return A[t = t.replace(C, "")] || t
    }
    let H = {
        on(t, i, n, s) {
            z(t, i, n, s, !1)
        },
        one(t, i, n, s) {
            z(t, i, n, s, !0)
        },
        off(t, i, n, s) {
            if ("string" != typeof i || !t)
                return;
            let[r,o,a] = O(i, n, s)
              , l = a !== i
              , c = L(t)
              , u = i.startsWith(".");
            if (void 0 !== o) {
                if (!c || !c[a])
                    return;
                return void P(t, c, a, o, r ? n : null)
            }
            u && Object.keys(c).forEach(n=>{
                !function(t, i, n, s) {
                    let r = i[n] || {};
                    Object.keys(r).forEach(o=>{
                        if (o.includes(s)) {
                            let a = r[o];
                            P(t, i, n, a.originalHandler, a.delegationSelector)
                        }
                    }
                    )
                }(t, c, n, i.slice(1))
            }
            );
            let h = c[a] || {};
            Object.keys(h).forEach(n=>{
                let s = n.replace(T, "");
                if (!l || i.includes(s)) {
                    let r = h[n];
                    P(t, c, a, r.originalHandler, r.delegationSelector)
                }
            }
            )
        },
        trigger(t, i, n) {
            if ("string" != typeof i || !t)
                return null;
            let s = m(), r = I(i), o = D.has(r), a, l = !0, c = !0, u = !1, h = null;
            return i !== r && s && (a = s.Event(i, n),
            s(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            u = a.isDefaultPrevented()),
            o ? (h = document.createEvent("HTMLEvents")).initEvent(r, l, !0) : h = new CustomEvent(i,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== n && Object.keys(n).forEach(t=>{
                Object.defineProperty(h, t, {
                    get: ()=>n[t]
                })
            }
            ),
            u && h.preventDefault(),
            c && t.dispatchEvent(h),
            h.defaultPrevented && void 0 !== a && a.preventDefault(),
            h
        }
    }
      , q = new Map
      , M = {
        set(t, i, n) {
            q.has(t) || q.set(t, new Map);
            let s = q.get(t);
            s.has(i) || 0 === s.size ? s.set(i, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (t,i)=>q.has(t) && q.get(t).get(i) || null,
        remove(t, i) {
            if (!q.has(t))
                return;
            let n = q.get(t);
            n.delete(i),
            0 === n.size && q.delete(t)
        }
    };
    class F {
        constructor(t) {
            (t = c(t)) && (this._element = t,
            M.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            M.remove(this._element, this.constructor.DATA_KEY),
            H.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach(t=>{
                this[t] = null
            }
            )
        }
        _queueCallback(t, i, n=!0) {
            x(t, i, n)
        }
        static getInstance(t) {
            return M.get(c(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, i={}) {
            return this.getInstance(t) || new this(t,"object" == typeof i ? i : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    let B = (t,i="hide")=>{
        let n = `click.dismiss ${t.EVENT_KEY}`
          , s = t.NAME;
        H.on(document, n, `[data-bs-dismiss="${s}"]`, function(n) {
            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(),
            d(this))
                return;
            let r = o(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(r)[i]()
        })
    }
    ;
    class W extends F {
        static get NAME() {
            return "alert"
        }
        close() {
            if (H.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            let t = this._element.classList.contains("fade");
            this._queueCallback(()=>this._destroyElement(), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            H.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = W.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === i[t] || t.startsWith("_") || "constructor" === t)
                        throw TypeError(`No method named "${t}"`);
                    i[t](this)
                }
            })
        }
    }
    B(W, "close"),
    b(W);
    let R = '[data-bs-toggle="button"]';
    class X extends F {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = X.getOrCreateInstance(this);
                "toggle" === t && i[t]()
            })
        }
    }
    function U(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function V(t) {
        return t.replace(/[A-Z]/g, t=>`-${t.toLowerCase()}`)
    }
    H.on(document, "click.bs.button.data-api", R, t=>{
        t.preventDefault();
        let i = t.target.closest(R);
        X.getOrCreateInstance(i).toggle()
    }
    ),
    b(X);
    let Y = {
        setDataAttribute(t, i, n) {
            t.setAttribute(`data-bs-${V(i)}`, n)
        },
        removeDataAttribute(t, i) {
            t.removeAttribute(`data-bs-${V(i)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            let i = {};
            return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(n=>{
                let s = n.replace(/^bs/, "");
                i[s = s.charAt(0).toLowerCase() + s.slice(1, s.length)] = U(t.dataset[n])
            }
            ),
            i
        },
        getDataAttribute: (t,i)=>U(t.getAttribute(`data-bs-${V(i)}`)),
        offset(t) {
            let i = t.getBoundingClientRect();
            return {
                top: i.top + window.pageYOffset,
                left: i.left + window.pageXOffset
            }
        },
        position: t=>({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , Q = {
        find: (t,i=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(i, t)),
        findOne: (t,i=document.documentElement)=>Element.prototype.querySelector.call(i, t),
        children: (t,i)=>[].concat(...t.children).filter(t=>t.matches(i)),
        parents(t, i) {
            let n = []
              , s = t.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
                s.matches(i) && n.push(s),
                s = s.parentNode;
            return n
        },
        prev(t, i) {
            let n = t.previousElementSibling;
            for (; n; ) {
                if (n.matches(i))
                    return [n];
                n = n.previousElementSibling
            }
            return []
        },
        next(t, i) {
            let n = t.nextElementSibling;
            for (; n; ) {
                if (n.matches(i))
                    return [n];
                n = n.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            let i = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(", ");
            return this.find(i, t).filter(t=>!d(t) && h(t))
        }
    }
      , K = "carousel"
      , J = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , G = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , Z = "next"
      , ee = "prev"
      , et = "left"
      , ei = "right"
      , en = {
        ArrowLeft: ei,
        ArrowRight: et
    }
      , es = "slid.bs.carousel"
      , er = "active"
      , eo = ".active.carousel-item";
    class ea extends F {
        constructor(t, i) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(i),
            this._indicatorsElement = Q.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return J
        }
        static get NAME() {
            return K
        }
        next() {
            this._slide(Z)
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next()
        }
        prev() {
            this._slide(ee)
        }
        pause(t) {
            t || (this._isPaused = !0),
            Q.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element),
            this.cycle(!0)),
            clearInterval(this._interval),
            this._interval = null
        }
        cycle(t) {
            t || (this._isPaused = !1),
            this._interval && (clearInterval(this._interval),
            this._interval = null),
            this._config && this._config.interval && !this._isPaused && (this._updateInterval(),
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }
        to(t) {
            this._activeElement = Q.findOne(eo, this._element);
            let i = this._getItemIndex(this._activeElement);
            return t > this._items.length - 1 || t < 0 ? void 0 : this._isSliding ? void H.one(this._element, es, ()=>this.to(t)) : i === t ? (this.pause(),
            void this.cycle()) : void this._slide(t > i ? Z : ee, this._items[t])
        }
        _getConfig(t) {
            return u(K, t = {
                ...J,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, G),
            t
        }
        _handleSwipe() {
            let t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            let i = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            i && this._slide(i > 0 ? ei : et)
        }
        _addEventListeners() {
            this._config.keyboard && H.on(this._element, "keydown.bs.carousel", t=>this._keydown(t)),
            "hover" === this._config.pause && (H.on(this._element, "mouseenter.bs.carousel", t=>this.pause(t)),
            H.on(this._element, "mouseleave.bs.carousel", t=>this.cycle(t))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            let t = t=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
              , i = i=>{
                t(i) ? this.touchStartX = i.clientX : this._pointerEvent || (this.touchStartX = i.touches[0].clientX)
            }
              , n = t=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , s = i=>{
                t(i) && (this.touchDeltaX = i.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout(t=>this.cycle(t), 500 + this._config.interval))
            }
            ;
            Q.find(".carousel-item img", this._element).forEach(t=>{
                H.on(t, "dragstart.bs.carousel", t=>t.preventDefault())
            }
            ),
            this._pointerEvent ? (H.on(this._element, "pointerdown.bs.carousel", t=>i(t)),
            H.on(this._element, "pointerup.bs.carousel", t=>s(t)),
            this._element.classList.add("pointer-event")) : (H.on(this._element, "touchstart.bs.carousel", t=>i(t)),
            H.on(this._element, "touchmove.bs.carousel", t=>n(t)),
            H.on(this._element, "touchend.bs.carousel", t=>s(t)))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            let i = en[t.key];
            i && (t.preventDefault(),
            this._slide(i))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? Q.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, i) {
            return w(this._items, i, t === Z, this._config.wrap)
        }
        _triggerSlideEvent(t, i) {
            let n = this._getItemIndex(t)
              , s = this._getItemIndex(Q.findOne(eo, this._element));
            return H.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: i,
                from: s,
                to: n
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                let i = Q.findOne(".active", this._indicatorsElement);
                i.classList.remove(er),
                i.removeAttribute("aria-current");
                let n = Q.find("[data-bs-target]", this._indicatorsElement);
                for (let s = 0; s < n.length; s++)
                    if (Number.parseInt(n[s].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        n[s].classList.add(er),
                        n[s].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            let t = this._activeElement || Q.findOne(eo, this._element);
            if (!t)
                return;
            let i = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            i ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = i) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, i) {
            let n = this._directionToOrder(t)
              , s = Q.findOne(eo, this._element)
              , r = this._getItemIndex(s)
              , o = i || this._getItemByOrder(n, s)
              , a = this._getItemIndex(o)
              , l = Boolean(this._interval)
              , c = n === Z
              , u = c ? "carousel-item-start" : "carousel-item-end"
              , h = c ? "carousel-item-next" : "carousel-item-prev"
              , d = this._orderToDirection(n);
            if (o && o.classList.contains(er))
                return void (this._isSliding = !1);
            if (this._isSliding || this._triggerSlideEvent(o, d).defaultPrevented || !s || !o)
                return;
            this._isSliding = !0,
            l && this.pause(),
            this._setActiveIndicatorElement(o),
            this._activeElement = o;
            let p = ()=>{
                H.trigger(this._element, es, {
                    relatedTarget: o,
                    direction: d,
                    from: r,
                    to: a
                })
            }
            ;
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                g(o),
                s.classList.add(u),
                o.classList.add(u);
                let f = ()=>{
                    o.classList.remove(u, h),
                    o.classList.add(er),
                    s.classList.remove(er, h, u),
                    this._isSliding = !1,
                    setTimeout(p, 0)
                }
                ;
                this._queueCallback(f, s, !0)
            } else
                s.classList.remove(er),
                o.classList.add(er),
                this._isSliding = !1,
                p();
            l && this.cycle()
        }
        _directionToOrder(t) {
            return [ei, et].includes(t) ? y() ? t === et ? ee : Z : t === et ? Z : ee : t
        }
        _orderToDirection(t) {
            return [Z, ee].includes(t) ? y() ? t === ee ? et : ei : t === ee ? ei : et : t
        }
        static carouselInterface(t, i) {
            let n = ea.getOrCreateInstance(t, i)
              , {_config: s} = n;
            "object" == typeof i && (s = {
                ...s,
                ...i
            });
            let r = "string" == typeof i ? i : s.slide;
            if ("number" == typeof i)
                n.to(i);
            else if ("string" == typeof r) {
                if (void 0 === n[r])
                    throw TypeError(`No method named "${r}"`);
                n[r]()
            } else
                s.interval && s.ride && (n.pause(),
                n.cycle())
        }
        static jQueryInterface(t) {
            return this.each(function() {
                ea.carouselInterface(this, t)
            })
        }
        static dataApiClickHandler(t) {
            let i = o(this);
            if (!i || !i.classList.contains("carousel"))
                return;
            let n = {
                ...Y.getDataAttributes(i),
                ...Y.getDataAttributes(this)
            }
              , s = this.getAttribute("data-bs-slide-to");
            s && (n.interval = !1),
            ea.carouselInterface(i, n),
            s && ea.getInstance(i).to(s),
            t.preventDefault()
        }
    }
    H.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", ea.dataApiClickHandler),
    H.on(window, "load.bs.carousel.data-api", ()=>{
        let t = Q.find('[data-bs-ride="carousel"]');
        for (let i = 0, n = t.length; i < n; i++)
            ea.carouselInterface(t[i], ea.getInstance(t[i]))
    }
    ),
    b(ea);
    let el = "collapse"
      , ec = {
        toggle: !0,
        parent: null
    }
      , eu = {
        toggle: "boolean",
        parent: "(null|element)"
    }
      , eh = "show"
      , ed = "collapse"
      , ep = "collapsing"
      , ef = "collapsed"
      , eg = ":scope .collapse .collapse"
      , em = '[data-bs-toggle="collapse"]';
    class ev extends F {
        constructor(t, i) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(i),
            this._triggerArray = [];
            let n = Q.find(em);
            for (let s = 0, o = n.length; s < o; s++) {
                let a = n[s]
                  , l = r(a)
                  , c = Q.find(l).filter(t=>t === this._element);
                null !== l && c.length && (this._selector = l,
                this._triggerArray.push(a))
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return ec
        }
        static get NAME() {
            return el
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t, i = [];
            if (this._config.parent) {
                let n = Q.find(eg, this._config.parent);
                i = Q.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(t=>!n.includes(t))
            }
            let s = Q.findOne(this._selector);
            if (i.length) {
                let r = i.find(t=>s !== t);
                if ((t = r ? ev.getInstance(r) : null) && t._isTransitioning)
                    return
            }
            if (H.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            i.forEach(i=>{
                s !== i && ev.getOrCreateInstance(i, {
                    toggle: !1
                }).hide(),
                t || M.set(i, "bs.collapse", null)
            }
            );
            let o = this._getDimension();
            this._element.classList.remove(ed),
            this._element.classList.add(ep),
            this._element.style[o] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            let a = `scroll ${o[0].toUpperCase() + o.slice(1)}`;
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ep),
                this._element.classList.add(ed, eh),
                this._element.style[o] = "",
                H.trigger(this._element, "shown.bs.collapse")
            }
            , this._element, !0),
            this._element.style[o] = `${this._element[a]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown() || H.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            let t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            g(this._element),
            this._element.classList.add(ep),
            this._element.classList.remove(ed, eh);
            let i = this._triggerArray.length;
            for (let n = 0; n < i; n++) {
                let s = this._triggerArray[n]
                  , r = o(s);
                r && !this._isShown(r) && this._addAriaAndCollapsedClass([s], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback(()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(ep),
                this._element.classList.add(ed),
                H.trigger(this._element, "hidden.bs.collapse")
            }
            , this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(eh)
        }
        _getConfig(t) {
            return (t = {
                ...ec,
                ...Y.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle),
            t.parent = c(t.parent),
            u(el, t, eu),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            let t = Q.find(eg, this._config.parent);
            Q.find(em, this._config.parent).filter(i=>!t.includes(i)).forEach(t=>{
                let i = o(t);
                i && this._addAriaAndCollapsedClass([t], this._isShown(i))
            }
            )
        }
        _addAriaAndCollapsedClass(t, i) {
            t.length && t.forEach(t=>{
                i ? t.classList.remove(ef) : t.classList.add(ef),
                t.setAttribute("aria-expanded", i)
            }
            )
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = {};
                "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1);
                let n = ev.getOrCreateInstance(this, i);
                if ("string" == typeof t) {
                    if (void 0 === n[t])
                        throw TypeError(`No method named "${t}"`);
                    n[t]()
                }
            })
        }
    }
    H.on(document, "click.bs.collapse.data-api", em, function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        let i = r(this);
        Q.find(i).forEach(t=>{
            ev.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }
        )
    }),
    b(ev);
    let ey = "dropdown"
      , e8 = "Escape"
      , eb = "Space"
      , e$ = "ArrowUp"
      , ex = "ArrowDown"
      , ew = RegExp("ArrowUp|ArrowDown|Escape")
      , e_ = "click.bs.dropdown.data-api"
      , eC = "keydown.bs.dropdown.data-api"
      , eT = "show"
      , eE = '[data-bs-toggle="dropdown"]'
      , ek = ".dropdown-menu"
      , eA = y() ? "top-end" : "top-start"
      , eS = y() ? "top-start" : "top-end"
      , eD = y() ? "bottom-end" : "bottom-start"
      , eN = y() ? "bottom-start" : "bottom-end"
      , eL = y() ? "left-start" : "right-start"
      , ej = y() ? "right-start" : "left-start"
      , eO = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , ez = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class eP extends F {
        constructor(t, i) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(i),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return eO
        }
        static get DefaultType() {
            return ez
        }
        static get NAME() {
            return ey
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (d(this._element) || this._isShown(this._menu))
                return;
            let t = {
                relatedTarget: this._element
            };
            if (H.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
                return;
            let i = eP.getParentFromElement(this._element);
            this._inNavbar ? Y.setDataAttribute(this._menu, "popper", "none") : this._createPopper(i),
            "ontouchstart"in document.documentElement && !i.closest(".navbar-nav") && [].concat(...document.body.children).forEach(t=>H.on(t, "mouseover", f)),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(eT),
            this._element.classList.add(eT),
            H.trigger(this._element, "shown.bs.dropdown", t)
        }
        hide() {
            if (d(this._element) || !this._isShown(this._menu))
                return;
            let t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(),
            super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(),
            this._popper && this._popper.update()
        }
        _completeHide(t) {
            H.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t=>H.off(t, "mouseover", f)),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(eT),
            this._element.classList.remove(eT),
            this._element.setAttribute("aria-expanded", "false"),
            Y.removeDataAttribute(this._menu, "popper"),
            H.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (u(ey, t = {
                ...this.constructor.Default,
                ...Y.getDataAttributes(this._element),
                ...t
            }, this.constructor.DefaultType),
            "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw TypeError(`${ey.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === i)
                throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let n = this._element;
            "parent" === this._config.reference ? n = t : l(this._config.reference) ? n = c(this._config.reference) : "object" == typeof this._config.reference && (n = this._config.reference);
            let s = this._getPopperConfig()
              , r = s.modifiers.find(t=>"applyStyles" === t.name && !1 === t.enabled);
            this._popper = i.createPopper(n, this._menu, s),
            r && Y.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t=this._element) {
            return t.classList.contains(eT)
        }
        _getMenuElement() {
            return Q.next(this._element, ek)[0]
        }
        _getPlacement() {
            let t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return eL;
            if (t.classList.contains("dropstart"))
                return ej;
            let i = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? i ? eS : eA : i ? eN : eD
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            let {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t=>Number.parseInt(t, 10)) : "function" == typeof t ? i=>t(i, this._element) : t
        }
        _getPopperConfig() {
            let t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return "static" === this._config.display && (t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]),
            {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({key: t, target: i}) {
            let n = Q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(h);
            n.length && w(n, i, t === ex, !n.includes(i)).focus()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = eP.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            let i = Q.find(eE);
            for (let n = 0, s = i.length; n < s; n++) {
                let r = eP.getInstance(i[n]);
                if (!r || !1 === r._config.autoClose || !r._isShown())
                    continue;
                let o = {
                    relatedTarget: r._element
                };
                if (t) {
                    let a = t.composedPath()
                      , l = a.includes(r._menu);
                    if (a.includes(r._element) || "inside" === r._config.autoClose && !l || "outside" === r._config.autoClose && l || r._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (o.clickEvent = t)
                }
                r._completeHide(o)
            }
        }
        static getParentFromElement(t) {
            return o(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === eb || t.key !== e8 && (t.key !== ex && t.key !== e$ || t.target.closest(ek)) : !ew.test(t.key))
                return;
            let i = this.classList.contains(eT);
            if (!i && t.key === e8 || (t.preventDefault(),
            t.stopPropagation(),
            d(this)))
                return;
            let n = this.matches(eE) ? this : Q.prev(this, eE)[0]
              , s = eP.getOrCreateInstance(n);
            if (t.key !== e8)
                return t.key === e$ || t.key === ex ? (i || s.show(),
                void s._selectMenuItem(t)) : void (i && t.key !== eb || eP.clearMenus());
            s.hide()
        }
    }
    H.on(document, eC, eE, eP.dataApiKeydownHandler),
    H.on(document, eC, ek, eP.dataApiKeydownHandler),
    H.on(document, e_, eP.clearMenus),
    H.on(document, "keyup.bs.dropdown.data-api", eP.clearMenus),
    H.on(document, e_, eE, function(t) {
        t.preventDefault(),
        eP.getOrCreateInstance(this).toggle()
    }),
    b(eP);
    let eI = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , e9 = ".sticky-top";
    class eH {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            let t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            let t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", i=>i + t),
            this._setElementAttributes(eI, "paddingRight", i=>i + t),
            this._setElementAttributes(e9, "marginRight", i=>i - t)
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, i, n) {
            let s = this.getWidth();
            this._applyManipulationCallback(t, t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + s)
                    return;
                this._saveInitialAttribute(t, i);
                let r = window.getComputedStyle(t)[i];
                t.style[i] = `${n(Number.parseFloat(r))}px`
            }
            )
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes(eI, "paddingRight"),
            this._resetElementAttributes(e9, "marginRight")
        }
        _saveInitialAttribute(t, i) {
            let n = t.style[i];
            n && Y.setDataAttribute(t, i, n)
        }
        _resetElementAttributes(t, i) {
            this._applyManipulationCallback(t, t=>{
                let n = Y.getDataAttribute(t, i);
                void 0 === n ? t.style.removeProperty(i) : (Y.removeDataAttribute(t, i),
                t.style[i] = n)
            }
            )
        }
        _applyManipulationCallback(t, i) {
            l(t) ? i(t) : Q.find(t, this._element).forEach(i)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    let e0 = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , eq = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }
      , eM = "show"
      , eF = "mousedown.bs.backdrop";
    class eB {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && g(this._getElement()),
            this._getElement().classList.add(eM),
            this._emulateAnimation(()=>{
                $(t)
            }
            )) : $(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(eM),
            this._emulateAnimation(()=>{
                this.dispose(),
                $(t)
            }
            )) : $(t)
        }
        _getElement() {
            if (!this._element) {
                let t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...e0,
                ..."object" == typeof t ? t : {}
            }).rootElement = c(t.rootElement),
            u("backdrop", t, eq),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
            H.on(this._getElement(), eF, ()=>{
                $(this._config.clickCallback)
            }
            ),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && (H.off(this._element, eF),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            x(t, this._getElement(), this._config.isAnimated)
        }
    }
    let eW = {
        trapElement: null,
        autofocus: !0
    }
      , eR = {
        trapElement: "element",
        autofocus: "boolean"
    }
      , e1 = ".bs.focustrap"
      , e2 = "backward";
    class e3 {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        activate() {
            let {trapElement: t, autofocus: i} = this._config;
            this._isActive || (i && t.focus(),
            H.off(document, e1),
            H.on(document, "focusin.bs.focustrap", t=>this._handleFocusin(t)),
            H.on(document, "keydown.tab.bs.focustrap", t=>this._handleKeydown(t)),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            H.off(document, e1))
        }
        _handleFocusin(t) {
            let {target: i} = t
              , {trapElement: n} = this._config;
            if (i === document || i === n || n.contains(i))
                return;
            let s = Q.focusableChildren(n);
            0 === s.length ? n.focus() : this._lastTabNavDirection === e2 ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? e2 : "forward")
        }
        _getConfig(t) {
            return u("focustrap", t = {
                ...eW,
                ..."object" == typeof t ? t : {}
            }, eR),
            t
        }
    }
    let eX = "modal"
      , eU = "Escape"
      , e4 = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , eV = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , e6 = "hidden.bs.modal"
      , eY = "show.bs.modal"
      , e7 = "resize.bs.modal"
      , eQ = "click.dismiss.bs.modal"
      , eK = "keydown.dismiss.bs.modal"
      , eJ = "mousedown.dismiss.bs.modal"
      , e5 = "modal-open"
      , eG = "show"
      , eZ = "modal-static";
    class te extends F {
        constructor(t, i) {
            super(t),
            this._config = this._getConfig(i),
            this._dialog = Q.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new eH
        }
        static get Default() {
            return e4
        }
        static get NAME() {
            return eX
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || H.trigger(this._element, eY, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(e5),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            H.on(this._dialog, eJ, ()=>{
                H.one(this._element, "mouseup.dismiss.bs.modal", t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                )
            }
            ),
            this._showBackdrop(()=>this._showElement(t)))
        }
        hide() {
            if (!this._isShown || this._isTransitioning || H.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            let t = this._isAnimated();
            t && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove(eG),
            H.off(this._element, eQ),
            H.off(this._dialog, eJ),
            this._queueCallback(()=>this._hideModal(), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach(t=>H.off(t, ".bs.modal")),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new eB({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new e3({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return u(eX, t = {
                ...e4,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, eV),
            t
        }
        _showElement(t) {
            let i = this._isAnimated()
              , n = Q.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            n && (n.scrollTop = 0),
            i && g(this._element),
            this._element.classList.add(eG),
            this._queueCallback(()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                H.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            , this._dialog, i)
        }
        _setEscapeEvent() {
            this._isShown ? H.on(this._element, eK, t=>{
                this._config.keyboard && t.key === eU ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || t.key !== eU || this._triggerBackdropTransition()
            }
            ) : H.off(this._element, eK)
        }
        _setResizeEvent() {
            this._isShown ? H.on(window, e7, ()=>this._adjustDialog()) : H.off(window, e7)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide(()=>{
                document.body.classList.remove(e5),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                H.trigger(this._element, e6)
            }
            )
        }
        _showBackdrop(t) {
            H.on(this._element, eQ, t=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            ),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (H.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            let {classList: t, scrollHeight: i, style: n} = this._element
              , s = i > document.documentElement.clientHeight;
            !s && "hidden" === n.overflowY || t.contains(eZ) || (s || (n.overflowY = "hidden"),
            t.add(eZ),
            this._queueCallback(()=>{
                t.remove(eZ),
                s || this._queueCallback(()=>{
                    n.overflowY = ""
                }
                , this._dialog)
            }
            , this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            let t = this._element.scrollHeight > document.documentElement.clientHeight
              , i = this._scrollBar.getWidth()
              , n = i > 0;
            (!n && t && !y() || n && !t && y()) && (this._element.style.paddingLeft = `${i}px`),
            (n && !t && !y() || !n && t && y()) && (this._element.style.paddingRight = `${i}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, i) {
            return this.each(function() {
                let n = te.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === n[t])
                        throw TypeError(`No method named "${t}"`);
                    n[t](i)
                }
            })
        }
    }
    H.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(t) {
        let i = o(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        H.one(i, eY, t=>{
            t.defaultPrevented || H.one(i, e6, ()=>{
                h(this) && this.focus()
            }
            )
        }
        );
        let n = Q.findOne(".modal.show");
        n && te.getInstance(n).hide(),
        te.getOrCreateInstance(i).toggle(this)
    }),
    B(te),
    b(te);
    let tt = "offcanvas"
      , ti = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , tn = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , ts = "show"
      , tr = ".offcanvas.show"
      , to = "hidden.bs.offcanvas";
    class ta extends F {
        constructor(t, i) {
            super(t),
            this._config = this._getConfig(i),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get NAME() {
            return tt
        }
        static get Default() {
            return ti
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || H.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (new eH).hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(ts),
            this._queueCallback(()=>{
                this._config.scroll || this._focustrap.activate(),
                H.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            , this._element, !0))
        }
        hide() {
            this._isShown && (H.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove(ts),
            this._backdrop.hide(),
            this._queueCallback(()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new eH).reset(),
                H.trigger(this._element, to)
            }
            , this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _getConfig(t) {
            return u(tt, t = {
                ...ti,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            }, tn),
            t
        }
        _initializeBackDrop() {
            return new eB({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _initializeFocusTrap() {
            return new e3({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            H.on(this._element, "keydown.dismiss.bs.offcanvas", t=>{
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            )
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = ta.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t] || t.startsWith("_") || "constructor" === t)
                        throw TypeError(`No method named "${t}"`);
                    i[t](this)
                }
            })
        }
    }
    H.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(t) {
        let i = o(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        d(this))
            return;
        H.one(i, to, ()=>{
            h(this) && this.focus()
        }
        );
        let n = Q.findOne(tr);
        n && n !== i && ta.getInstance(n).hide(),
        ta.getOrCreateInstance(i).toggle(this)
    }),
    H.on(window, "load.bs.offcanvas.data-api", ()=>Q.find(tr).forEach(t=>ta.getOrCreateInstance(t).show())),
    B(ta),
    b(ta);
    let tl = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , tc = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , tu = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , th = (t,i)=>{
        let n = t.nodeName.toLowerCase();
        if (i.includes(n))
            return !tl.has(n) || Boolean(tc.test(t.nodeValue) || tu.test(t.nodeValue));
        let s = i.filter(t=>t instanceof RegExp);
        for (let r = 0, o = s.length; r < o; r++)
            if (s[r].test(n))
                return !0;
        return !1
    }
    ;
    function td(t, i, n) {
        if (!t.length)
            return t;
        if (n && "function" == typeof n)
            return n(t);
        let s = (new window.DOMParser).parseFromString(t, "text/html")
          , r = [].concat(...s.body.querySelectorAll("*"));
        for (let o = 0, a = r.length; o < a; o++) {
            let l = r[o]
              , c = l.nodeName.toLowerCase();
            if (!Object.keys(i).includes(c)) {
                l.remove();
                continue
            }
            let u = [].concat(...l.attributes)
              , h = [].concat(i["*"] || [], i[c] || []);
            u.forEach(t=>{
                th(t, h) || l.removeAttribute(t.nodeName)
            }
            )
        }
        return s.body.innerHTML
    }
    let tp = "tooltip"
      , tf = new Set(["sanitize", "allowList", "sanitizeFn"])
      , tg = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        offset: "(array|string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "array",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object|function)"
    }
      , tm = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: y() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: y() ? "right" : "left"
    }
      , tv = {
        animation: !0,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        offset: [0, 0],
        container: !1,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        popperConfig: null
    }
      , ty = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
    }
      , t8 = "fade"
      , tb = "show"
      , t$ = "show"
      , tx = ".tooltip-inner"
      , tw = ".modal"
      , t_ = "hide.bs.modal"
      , tC = "hover"
      , tT = "focus";
    class tE extends F {
        constructor(t, n) {
            if (void 0 === i)
                throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(n),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return tv
        }
        static get NAME() {
            return tp
        }
        static get Event() {
            return ty
        }
        static get DefaultType() {
            return tg
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    let i = this._initializeOnDelegatedTarget(t);
                    i._activeTrigger.click = !i._activeTrigger.click,
                    i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                } else {
                    if (this.getTipElement().classList.contains(tb))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
            }
        }
        dispose() {
            clearTimeout(this._timeout),
            H.off(this._element.closest(tw), t_, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            let t = H.trigger(this._element, this.constructor.Event.SHOW)
              , n = p(this._element)
              , s = null === n ? this._element.ownerDocument.documentElement.contains(this._element) : n.contains(this._element);
            if (t.defaultPrevented || !s)
                return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(tx).innerHTML && (this._disposePopper(),
            this.tip.remove(),
            this.tip = null);
            let r = this.getTipElement()
              , o = (t=>{
                do
                    t += Math.floor(1e6 * Math.random());
                while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME);
            r.setAttribute("id", o),
            this._element.setAttribute("aria-describedby", o),
            this._config.animation && r.classList.add(t8);
            let a = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement
              , l = this._getAttachment(a);
            this._addAttachmentClass(l);
            let {container: c} = this._config;
            M.set(r, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (c.append(r),
            H.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, r, this._getPopperConfig(l)),
            r.classList.add(tb);
            let u = this._resolvePossibleFunction(this._config.customClass);
            u && r.classList.add(...u.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t=>{
                H.on(t, "mouseover", f)
            }
            );
            let h = this.tip.classList.contains(t8);
            this._queueCallback(()=>{
                let t = this._hoverState;
                this._hoverState = null,
                H.trigger(this._element, this.constructor.Event.SHOWN),
                "out" === t && this._leave(null, this)
            }
            , this.tip, h)
        }
        hide() {
            if (!this._popper)
                return;
            let t = this.getTipElement();
            if (H.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(tb),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach(t=>H.off(t, "mouseover", f)),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1;
            let i = this.tip.classList.contains(t8);
            this._queueCallback(()=>{
                this._isWithActiveTrigger() || (this._hoverState !== t$ && t.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                H.trigger(this._element, this.constructor.Event.HIDDEN),
                this._disposePopper())
            }
            , this.tip, i),
            this._hoverState = ""
        }
        update() {
            null !== this._popper && this._popper.update()
        }
        isWithContent() {
            return Boolean(this.getTitle())
        }
        getTipElement() {
            if (this.tip)
                return this.tip;
            let t = document.createElement("div");
            t.innerHTML = this._config.template;
            let i = t.children[0];
            return this.setContent(i),
            i.classList.remove(t8, tb),
            this.tip = i,
            this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), tx)
        }
        _sanitizeAndSetContent(t, i, n) {
            let s = Q.findOne(n, t);
            i || !s ? this.setElementContent(s, i) : s.remove()
        }
        setElementContent(t, i) {
            if (null !== t)
                return l(i) ? (i = c(i),
                void (this._config.html ? i.parentNode !== t && (t.innerHTML = "",
                t.append(i)) : t.textContent = i.textContent)) : void (this._config.html ? (this._config.sanitize && (i = td(i, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = i) : t.textContent = i)
        }
        getTitle() {
            let t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, i) {
            return i || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            let {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map(t=>Number.parseInt(t, 10)) : "function" == typeof t ? i=>t(i, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            let i = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "onChange",
                    enabled: !0,
                    phase: "afterWrite",
                    fn: t=>this._handlePopperPlacementChange(t)
                }],
                onFirstUpdate: t=>{
                    t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                }
            };
            return {
                ...i,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(i) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return tm[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach(t=>{
                if ("click" === t)
                    H.on(this._element, this.constructor.Event.CLICK, this._config.selector, t=>this.toggle(t));
                else if ("manual" !== t) {
                    let i = t === tC ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , n = t === tC ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    H.on(this._element, i, this._config.selector, t=>this._enter(t)),
                    H.on(this._element, n, this._config.selector, t=>this._leave(t))
                }
            }
            ),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            H.on(this._element.closest(tw), t_, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            let t = this._element.getAttribute("title")
              , i = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== i) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, i) {
            i = this._initializeOnDelegatedTarget(t, i),
            t && (i._activeTrigger["focusin" === t.type ? tT : tC] = !0),
            i.getTipElement().classList.contains(tb) || i._hoverState === t$ ? i._hoverState = t$ : (clearTimeout(i._timeout),
            i._hoverState = t$,
            i._config.delay && i._config.delay.show ? i._timeout = setTimeout(()=>{
                i._hoverState === t$ && i.show()
            }
            , i._config.delay.show) : i.show())
        }
        _leave(t, i) {
            i = this._initializeOnDelegatedTarget(t, i),
            t && (i._activeTrigger["focusout" === t.type ? tT : tC] = i._element.contains(t.relatedTarget)),
            i._isWithActiveTrigger() || (clearTimeout(i._timeout),
            i._hoverState = "out",
            i._config.delay && i._config.delay.hide ? i._timeout = setTimeout(()=>{
                "out" === i._hoverState && i.hide()
            }
            , i._config.delay.hide) : i.hide())
        }
        _isWithActiveTrigger() {
            for (let t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            let i = Y.getDataAttributes(this._element);
            return Object.keys(i).forEach(t=>{
                tf.has(t) && delete i[t]
            }
            ),
            (t = {
                ...this.constructor.Default,
                ...i,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : c(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            u(tp, t, this.constructor.DefaultType),
            t.sanitize && (t.template = td(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            let t = {};
            for (let i in this._config)
                this.constructor.Default[i] !== this._config[i] && (t[i] = this._config[i]);
            return t
        }
        _cleanTipClass() {
            let t = this.getTipElement()
              , i = RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g")
              , n = t.getAttribute("class").match(i);
            null !== n && n.length > 0 && n.map(t=>t.trim()).forEach(i=>t.classList.remove(i))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            let {state: i} = t;
            i && (this.tip = i.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(i.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = tE.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
    }
    b(tE);
    let tk = {
        ...tE.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , tA = {
        ...tE.DefaultType,
        content: "(string|element|function)"
    }
      , tS = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
    };
    class tD extends tE {
        static get Default() {
            return tk
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return tS
        }
        static get DefaultType() {
            return tA
        }
        isWithContent() {
            return this.getTitle() || this._getContent()
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
            this._sanitizeAndSetContent(t, this._getContent(), ".popover-body")
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        _getBasicClassPrefix() {
            return "bs-popover"
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = tD.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
    }
    b(tD);
    let tN = "scrollspy"
      , tL = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , tj = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , tO = "active"
      , tz = ".nav-link, .list-group-item, .dropdown-item"
      , tP = "position";
    class tI extends F {
        constructor(t, i) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(i),
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            H.on(this._scrollElement, "scroll.bs.scrollspy", ()=>this._process()),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return tL
        }
        static get NAME() {
            return tN
        }
        refresh() {
            let t = this._scrollElement === this._scrollElement.window ? "offset" : tP
              , i = "auto" === this._config.method ? t : this._config.method
              , n = i === tP ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            Q.find(tz, this._config.target).map(t=>{
                let s = r(t)
                  , o = s ? Q.findOne(s) : null;
                if (o) {
                    let a = o.getBoundingClientRect();
                    if (a.width || a.height)
                        return [Y[i](o).top + n, s]
                }
                return null
            }
            ).filter(t=>t).sort((t,i)=>t[0] - i[0]).forEach(t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            )
        }
        dispose() {
            H.off(this._scrollElement, ".bs.scrollspy"),
            super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...tL,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = c(t.target) || document.documentElement,
            u(tN, t, tj),
            t
        }
        _getScrollTop() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }
        _getScrollHeight() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }
        _getOffsetHeight() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }
        _process() {
            let t = this._getScrollTop() + this._config.offset
              , i = this._getScrollHeight()
              , n = this._config.offset + i - this._getOffsetHeight();
            if (this._scrollHeight !== i && this.refresh(),
            t >= n) {
                let s = this._targets[this._targets.length - 1];
                this._activeTarget !== s && this._activate(s)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let r = this._offsets.length; r--; )
                    this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            let i = tz.split(",").map(i=>`${i}[data-bs-target="${t}"],${i}[href="${t}"]`)
              , n = Q.findOne(i.join(","), this._config.target);
            n.classList.add(tO),
            n.classList.contains("dropdown-item") ? Q.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(tO) : Q.parents(n, ".nav, .list-group").forEach(t=>{
                Q.prev(t, ".nav-link, .list-group-item").forEach(t=>t.classList.add(tO)),
                Q.prev(t, ".nav-item").forEach(t=>{
                    Q.children(t, ".nav-link").forEach(t=>t.classList.add(tO))
                }
                )
            }
            ),
            H.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            Q.find(tz, this._config.target).filter(t=>t.classList.contains(tO)).forEach(t=>t.classList.remove(tO))
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = tI.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
    }
    H.on(window, "load.bs.scrollspy.data-api", ()=>{
        Q.find('[data-bs-spy="scroll"]').forEach(t=>new tI(t))
    }
    ),
    b(tI);
    let t9 = "active"
      , tH = "fade"
      , t0 = "show"
      , tq = ".active"
      , tM = ":scope > li > .active";
    class tF extends F {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(t9))
                return;
            let t, i = o(this._element), n = this._element.closest(".nav, .list-group");
            if (n) {
                let s = "UL" === n.nodeName || "OL" === n.nodeName ? tM : tq;
                t = (t = Q.find(s, n))[t.length - 1]
            }
            let r = t ? H.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if (H.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== r && r.defaultPrevented)
                return;
            this._activate(this._element, n);
            let a = ()=>{
                H.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                H.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            i ? this._activate(i, i.parentNode, a) : a()
        }
        _activate(t, i, n) {
            let s = (i && ("UL" === i.nodeName || "OL" === i.nodeName) ? Q.find(tM, i) : Q.children(i, tq))[0]
              , r = n && s && s.classList.contains(tH)
              , o = ()=>this._transitionComplete(t, s, n);
            s && r ? (s.classList.remove(t0),
            this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, i, n) {
            if (i) {
                i.classList.remove(t9);
                let s = Q.findOne(":scope > .dropdown-menu .active", i.parentNode);
                s && s.classList.remove(t9),
                "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
            }
            t.classList.add(t9),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            g(t),
            t.classList.contains(tH) && t.classList.add(t0);
            let r = t.parentNode;
            if (r && "LI" === r.nodeName && (r = r.parentNode),
            r && r.classList.contains("dropdown-menu")) {
                let o = t.closest(".dropdown");
                o && Q.find(".dropdown-toggle", o).forEach(t=>t.classList.add(t9)),
                t.setAttribute("aria-expanded", !0)
            }
            n && n()
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = tF.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError(`No method named "${t}"`);
                    i[t]()
                }
            })
        }
    }
    H.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        d(this) || tF.getOrCreateInstance(this).show()
    }),
    b(tF);
    let tB = "toast"
      , tW = "hide"
      , tR = "show"
      , t1 = "showing"
      , t2 = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , t3 = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class tX extends F {
        constructor(t, i) {
            super(t),
            this._config = this._getConfig(i),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return t2
        }
        static get Default() {
            return t3
        }
        static get NAME() {
            return tB
        }
        show() {
            H.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(tW),
            g(this._element),
            this._element.classList.add(tR),
            this._element.classList.add(t1),
            this._queueCallback(()=>{
                this._element.classList.remove(t1),
                H.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            , this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(tR) && (H.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(t1),
            this._queueCallback(()=>{
                this._element.classList.add(tW),
                this._element.classList.remove(t1),
                this._element.classList.remove(tR),
                H.trigger(this._element, "hidden.bs.toast")
            }
            , this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(tR) && this._element.classList.remove(tR),
            super.dispose()
        }
        _getConfig(t) {
            return u(tB, t = {
                ...t3,
                ...Y.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(()=>{
                this.hide()
            }
            , this._config.delay)))
        }
        _onInteraction(t, i) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = i;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = i
            }
            if (i)
                return void this._clearTimeout();
            let n = t.relatedTarget;
            this._element === n || this._element.contains(n) || this._maybeScheduleHide()
        }
        _setListeners() {
            H.on(this._element, "mouseover.bs.toast", t=>this._onInteraction(t, !0)),
            H.on(this._element, "mouseout.bs.toast", t=>this._onInteraction(t, !1)),
            H.on(this._element, "focusin.bs.toast", t=>this._onInteraction(t, !0)),
            H.on(this._element, "focusout.bs.toast", t=>this._onInteraction(t, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each(function() {
                let i = tX.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw TypeError(`No method named "${t}"`);
                    i[t](this)
                }
            })
        }
    }
    return B(tX),
    b(tX),
    {
        Alert: W,
        Button: X,
        Carousel: ea,
        Collapse: ev,
        Dropdown: eP,
        Modal: te,
        Offcanvas: ta,
        Popover: tD,
        ScrollSpy: tI,
        Tab: tF,
        Toast: tX,
        Tooltip: tE
    }
}),
function(t, i, n, s) {
    function r(i, n) {
        this.settings = null,
        this.options = t.extend({}, r.Defaults, n),
        this.$element = t(i),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        t.each(["onResize", "onThrottledResize"], t.proxy(function(i, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }, this)),
        t.each(r.Plugins, t.proxy(function(t, i) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new i(this)
        }, this)),
        t.each(r.Workers, t.proxy(function(i, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    r.Type = {
        Event: "event",
        State: "state"
    },
    r.Plugins = {},
    r.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var i = this.settings.margin || ""
              , n = !this.settings.autoWidth
              , s = this.settings.rtl
              , r = {
                width: "auto",
                "margin-left": s ? i : "",
                "margin-right": s ? "" : i
            };
            n || this.$stage.children().css(r),
            t.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var i = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , n = null
              , s = this._items.length
              , r = !this.settings.autoWidth
              , o = [];
            for (t.items = {
                merge: !1,
                width: i
            }; s--; )
                n = this._mergers[s],
                n = this.settings.mergeFit && Math.min(n, this.settings.items) || n,
                t.items.merge = n > 1 || t.items.merge,
                o[s] = r ? i * n : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var i = []
              , n = this._items
              , s = this.settings
              , r = Math.max(2 * s.items, 4)
              , o = 2 * Math.ceil(n.length / 2)
              , a = s.loop && n.length ? s.rewind ? r : Math.max(r, o) : 0
              , l = ""
              , c = "";
            for (a /= 2; a > 0; )
                i.push(this.normalize(i.length / 2, !0)),
                l += n[i[i.length - 1]][0].outerHTML,
                i.push(this.normalize(n.length - 1 - (i.length - 1) / 2, !0)),
                c = n[i[i.length - 1]][0].outerHTML + c,
                a -= 1;
            this._clones = i,
            t(l).addClass("cloned").appendTo(this.$stage),
            t(c).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, i = this._clones.length + this._items.length, n = -1, s = 0, r = 0, o = []; ++n < i; )
                o.push((s = o[n - 1] || 0) + (r = this._widths[this.relative(n)] + this.settings.margin) * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding
              , i = this._coordinates
              , n = {
                width: Math.ceil(Math.abs(i[i.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var i = this._coordinates.length
              , n = !this.settings.autoWidth
              , s = this.$stage.children();
            if (n && t.items.merge)
                for (; i--; )
                    t.css.width = this._widths[this.relative(i)],
                    s.eq(i).css(t.css);
            else
                n && (t.css.width = t.items.width,
                s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0,
            t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
            this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, i, n, s, r = this.settings.rtl ? 1 : -1, o = 2 * this.settings.stagePadding, a = this.coordinates(this.current()) + o, l = a + this.width() * r, c = [];
            for (n = 0,
            s = this._coordinates.length; n < s; n++)
                t = this._coordinates[n - 1] || 0,
                i = Math.abs(this._coordinates[n]) + o * r,
                (this.op(t, "<=", a) && this.op(t, ">", l) || this.op(i, "<", a) && this.op(i, ">", l)) && c.push(n);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + c.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    r.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = t("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(t("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    r.prototype.initializeItems = function() {
        var i = this.$element.find(".owl-item");
        if (i.length)
            return this._items = i.get().map(function(i) {
                return t(i)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    r.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, n;
            t = this.$element.find("img"),
            i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : s,
            n = this.$element.children(i).width(),
            t.length && n <= 0 && this.preloadAutoWidthImages(t)
        }
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    r.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    r.prototype.setup = function() {
        var i = this.viewport()
          , n = this.options.responsive
          , s = -1
          , r = null;
        n ? (t.each(n, function(t) {
            t <= i && t > s && (s = Number(t))
        }),
        "function" == typeof (r = t.extend({}, this.options, n[s])).stagePadding && (r.stagePadding = r.stagePadding()),
        delete r.responsive,
        r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + s))) : r = t.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }),
        this._breakpoint = s,
        this.settings = r,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    r.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    r.prototype.prepare = function(i) {
        var n = this.trigger("prepare", {
            content: i
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(i)),
        this.trigger("prepared", {
            content: n.data
        }),
        n.data
    }
    ,
    r.prototype.update = function() {
        for (var i = 0, n = this._pipe.length, s = t.proxy(function(t) {
            return this[t]
        }, this._invalidated), r = {}; i < n; )
            (this._invalidated.all || t.grep(this._pipe[i].filter, s).length > 0) && this._pipe[i].run(r),
            i++;
        this._invalidated = {},
        this.is("valid") || this.enter("valid")
    }
    ,
    r.prototype.width = function(t) {
        switch (t = t || r.Width.Default) {
        case r.Width.Inner:
        case r.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    r.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    r.prototype.onThrottledResize = function() {
        i.clearTimeout(this.resizeTimer),
        this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    r.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))
    }
    ,
    r.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }
    ,
    r.prototype.onDragStart = function(i) {
        var s = null;
        3 !== i.which && (t.support.transform ? s = {
            x: (s = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === s.length ? 12 : 4],
            y: s[16 === s.length ? 13 : 5]
        } : (s = this.$stage.position(),
        s = {
            x: this.settings.rtl ? s.left + this.$stage.width() - this.width() + this.settings.margin : s.left,
            y: s.top
        }),
        this.is("animating") && (t.support.transform ? this.animate(s.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === i.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = t(i.target),
        this._drag.stage.start = s,
        this._drag.stage.current = s,
        this._drag.pointer = this.pointer(i),
        t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)),
        t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(i) {
            var s = this.difference(this._drag.pointer, this.pointer(i));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)),
            Math.abs(s.x) < Math.abs(s.y) && this.is("valid") || (i.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    r.prototype.onDragMove = function(t) {
        var i = null
          , n = null
          , s = null
          , r = this.difference(this._drag.pointer, this.pointer(t))
          , o = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(),
        this.settings.loop ? (i = this.coordinates(this.minimum()),
        n = this.coordinates(this.maximum() + 1) - i,
        o.x = ((o.x - i) % n + n) % n + i) : (i = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        s = this.settings.pullDrag ? -1 * r.x / 5 : 0,
        o.x = Math.max(Math.min(o.x, i + s), n + s)),
        this._drag.stage.current = o,
        this.animate(o.x))
    }
    ,
    r.prototype.onDragEnd = function(i) {
        var s = this.difference(this._drag.pointer, this.pointer(i))
          , r = this._drag.stage.current
          , o = s.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== s.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(r.x, 0 !== s.x ? o : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = o,
        (Math.abs(s.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    r.prototype.closest = function(i, n) {
        var r = -1
          , o = this.width()
          , a = this.coordinates();
        return this.settings.freeDrag || t.each(a, t.proxy(function(t, l) {
            return "left" === n && i > l - 30 && i < l + 30 ? r = t : "right" === n && i > l - o - 30 && i < l - o + 30 ? r = t + 1 : this.op(i, "<", l) && this.op(i, ">", a[t + 1] !== s ? a[t + 1] : l - o) && (r = "left" === n ? t + 1 : t),
            -1 === r
        }, this)),
        this.settings.loop || (this.op(i, ">", a[this.minimum()]) ? r = i = this.minimum() : this.op(i, "<", a[this.maximum()]) && (r = i = this.maximum())),
        r
    }
    ,
    r.prototype.animate = function(i) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        n && (this.enter("animating"),
        this.trigger("translate")),
        t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + i + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : n ? this.$stage.animate({
            left: i + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: i + "px"
        })
    }
    ,
    r.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }
    ,
    r.prototype.current = function(t) {
        if (t === s)
            return this._current;
        if (0 === this._items.length)
            return s;
        if (t = this.normalize(t),
        this._current !== t) {
            var i = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            i.data !== s && (t = this.normalize(i.data)),
            this._current = t,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    r.prototype.invalidate = function(i) {
        return "string" === t.type(i) && (this._invalidated[i] = !0,
        this.is("valid") && this.leave("valid")),
        t.map(this._invalidated, function(t, i) {
            return i
        })
    }
    ,
    r.prototype.reset = function(t) {
        (t = this.normalize(t)) !== s && (this._speed = 0,
        this._current = t,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]))
    }
    ,
    r.prototype.normalize = function(t, i) {
        var n = this._items.length
          , r = i ? 0 : this._clones.length;
        return !this.isNumeric(t) || n < 1 ? t = s : (t < 0 || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2),
        t
    }
    ,
    r.prototype.relative = function(t) {
        return t -= this._clones.length / 2,
        this.normalize(t, !0)
    }
    ,
    r.prototype.maximum = function(t) {
        var i, n, s, r = this.settings, o = this._coordinates.length;
        if (r.loop)
            o = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            if (i = this._items.length)
                for (n = this._items[--i].width(),
                s = this.$element.width(); i-- && !((n += this._items[i].width() + this.settings.margin) > s); )
                    ;
            o = i + 1
        } else
            o = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (o -= this._clones.length / 2),
        Math.max(o, 0)
    }
    ,
    r.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }
    ,
    r.prototype.items = function(t) {
        return t === s ? this._items.slice() : (t = this.normalize(t, !0),
        this._items[t])
    }
    ,
    r.prototype.mergers = function(t) {
        return t === s ? this._mergers.slice() : (t = this.normalize(t, !0),
        this._mergers[t])
    }
    ,
    r.prototype.clones = function(i) {
        var n = this._clones.length / 2
          , r = n + this._items.length
          , o = function(t) {
            return t % 2 == 0 ? r + t / 2 : n - (t + 1) / 2
        };
        return i === s ? t.map(this._clones, function(t, i) {
            return o(i)
        }) : t.map(this._clones, function(t, n) {
            return t === i ? o(n) : null
        })
    }
    ,
    r.prototype.speed = function(t) {
        return t !== s && (this._speed = t),
        this._speed
    }
    ,
    r.prototype.coordinates = function(i) {
        var n, r = 1, o = i - 1;
        return i === s ? t.map(this._coordinates, t.proxy(function(t, i) {
            return this.coordinates(i)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1,
        o = i + 1),
        n = this._coordinates[i],
        n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * r) : n = this._coordinates[o] || 0,
        n = Math.ceil(n))
    }
    ,
    r.prototype.duration = function(t, i, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(i - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }
    ,
    r.prototype.to = function(t, i) {
        var n = this.current()
          , s = null
          , r = t - this.relative(n)
          , o = (r > 0) - (r < 0)
          , a = this._items.length
          , l = this.minimum()
          , c = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > a / 2 && (r += -1 * o * a),
        (s = (((t = n + r) - l) % a + a) % a + l) !== t && s - r <= c && s - r > 0 && (n = s - r,
        t = s,
        this.reset(n))) : this.settings.rewind ? (c += 1,
        t = (t % c + c) % c) : t = Math.max(l, Math.min(c, t)),
        this.speed(this.duration(n, t, i)),
        this.current(t),
        this.isVisible() && this.update()
    }
    ,
    r.prototype.next = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) + 1, t)
    }
    ,
    r.prototype.prev = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) - 1, t)
    }
    ,
    r.prototype.onTransitionEnd = function(t) {
        if (t !== s && (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    r.prototype.viewport = function() {
        var s;
        return this.options.responsiveBaseElement !== i ? s = t(this.options.responsiveBaseElement).width() : i.innerWidth ? s = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? s = n.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        s
    }
    ,
    r.prototype.replace = function(i) {
        this.$stage.empty(),
        this._items = [],
        i && (i = i instanceof jQuery ? i : t(i)),
        this.settings.nestedItemSelector && (i = i.find("." + this.settings.nestedItemSelector)),
        i.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, i) {
            i = this.prepare(i),
            this.$stage.append(i),
            this._items.push(i),
            this._mergers.push(1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    r.prototype.add = function(i, n) {
        var r = this.relative(this._current);
        n = n === s ? this._items.length : this.normalize(n, !0),
        i = i instanceof jQuery ? i : t(i),
        this.trigger("add", {
            content: i,
            position: n
        }),
        i = this.prepare(i),
        0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(i),
        0 !== this._items.length && this._items[n - 1].after(i),
        this._items.push(i),
        this._mergers.push(1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(i),
        this._items.splice(n, 0, i),
        this._mergers.splice(n, 0, 1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[r] && this.reset(this._items[r].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: i,
            position: n
        })
    }
    ,
    r.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== s && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: t
        }))
    }
    ,
    r.prototype.preloadAutoWidthImages = function(i) {
        i.each(t.proxy(function(i, n) {
            this.enter("pre-loading"),
            n = t(n),
            t(new Image).one("load", t.proxy(function(t) {
                n.attr("src", t.target.src),
                n.css("opacity", 1),
                this.leave("pre-loading"),
                this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }
    ,
    r.prototype.destroy = function() {
        for (var s in this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(n).off(".owl.core"),
        !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer),
        this.off(i, "resize", this._handlers.onThrottledResize)),
        this._plugins)
            this._plugins[s].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }
    ,
    r.prototype.op = function(t, i, n) {
        var s = this.settings.rtl;
        switch (i) {
        case "<":
            return s ? t > n : t < n;
        case ">":
            return s ? t < n : t > n;
        case ">=":
            return s ? t <= n : t >= n;
        case "<=":
            return s ? t >= n : t <= n
        }
    }
    ,
    r.prototype.on = function(t, i, n, s) {
        t.addEventListener ? t.addEventListener(i, n, s) : t.attachEvent && t.attachEvent("on" + i, n)
    }
    ,
    r.prototype.off = function(t, i, n, s) {
        t.removeEventListener ? t.removeEventListener(i, n, s) : t.detachEvent && t.detachEvent("on" + i, n)
    }
    ,
    r.prototype.trigger = function(i, n, s, o, a) {
        var l = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , c = t.camelCase(t.grep(["on", i, s], function(t) {
            return t
        }).join("-").toLowerCase())
          , u = t.Event([i, "owl", s || "carousel"].join(".").toLowerCase(), t.extend({
            relatedTarget: this
        }, l, n));
        return this._supress[i] || (t.each(this._plugins, function(t, i) {
            i.onTrigger && i.onTrigger(u)
        }),
        this.register({
            type: r.Type.Event,
            name: i
        }),
        this.$element.trigger(u),
        this.settings && "function" == typeof this.settings[c] && this.settings[c].call(this, u)),
        u
    }
    ,
    r.prototype.enter = function(i) {
        t.each([i].concat(this._states.tags[i] || []), t.proxy(function(t, i) {
            this._states.current[i] === s && (this._states.current[i] = 0),
            this._states.current[i]++
        }, this))
    }
    ,
    r.prototype.leave = function(i) {
        t.each([i].concat(this._states.tags[i] || []), t.proxy(function(t, i) {
            this._states.current[i]--
        }, this))
    }
    ,
    r.prototype.register = function(i) {
        if (i.type === r.Type.Event) {
            if (t.event.special[i.name] || (t.event.special[i.name] = {}),
            !t.event.special[i.name].owl) {
                var n = t.event.special[i.name]._default;
                t.event.special[i.name]._default = function(t) {
                    return n && n.apply && (!t.namespace || -1 === t.namespace.indexOf("owl")) ? n.apply(this, arguments) : t.namespace && t.namespace.indexOf("owl") > -1
                }
                ,
                t.event.special[i.name].owl = !0
            }
        } else
            i.type === r.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags,
            this._states.tags[i.name] = t.grep(this._states.tags[i.name], t.proxy(function(n, s) {
                return t.inArray(n, this._states.tags[i.name]) === s
            }, this)))
    }
    ,
    r.prototype.suppress = function(i) {
        t.each(i, t.proxy(function(t, i) {
            this._supress[i] = !0
        }, this))
    }
    ,
    r.prototype.release = function(i) {
        t.each(i, t.proxy(function(t, i) {
            delete this._supress[i]
        }, this))
    }
    ,
    r.prototype.pointer = function(t) {
        var n = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX,
        n.y = t.pageY) : (n.x = t.clientX,
        n.y = t.clientY),
        n
    }
    ,
    r.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }
    ,
    r.prototype.difference = function(t, i) {
        return {
            x: t.x - i.x,
            y: t.y - i.y
        }
    }
    ,
    t.fn.owlCarousel = function(i) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var s = t(this)
              , o = s.data("owl.carousel");
            o || (o = new r(this,"object" == typeof i && i),
            s.data("owl.carousel", o),
            t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(i, n) {
                o.register({
                    type: r.Type.Event,
                    name: n
                }),
                o.$element.on(n + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]),
                    o[n].apply(this, [].slice.call(arguments, 1)),
                    this.release([n]))
                }, o))
            })),
            "string" == typeof i && "_" !== i.charAt(0) && o[i].apply(o, n)
        })
    }
    ,
    t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    var r = function(i) {
        this._core = i,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    r.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = i.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    r.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    r.prototype.destroy = function() {
        var t, n;
        for (t in i.clearInterval(this._interval),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    var r = function(i) {
        this._core = i,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(i) {
                if (i.namespace && this._core.settings && this._core.settings.lazyLoad && (i.property && "position" == i.property.name || "initialized" == i.type)) {
                    var n = this._core.settings
                      , s = n.center && Math.ceil(n.items / 2) || n.items
                      , r = n.center && -1 * s || 0
                      , o = (i.property && void 0 !== i.property.value ? i.property.value : this._core.current()) + r
                      , a = this._core.clones().length
                      , l = t.proxy(function(t, i) {
                        this.load(i)
                    }, this);
                    for (n.lazyLoadEager > 0 && (s += n.lazyLoadEager,
                    n.loop && (o -= n.lazyLoadEager,
                    s++)); r++ < s; )
                        this.load(a / 2 + this._core.relative(o)),
                        a && t.each(this._core.clones(this._core.relative(o)), l),
                        o++
                }
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    r.prototype.load = function(n) {
        var s = this._core.$stage.children().eq(n)
          , r = s && s.find(".owl-lazy");
        !r || t.inArray(s.get(0), this._loaded) > -1 || (r.each(t.proxy(function(n, s) {
            var r, o = t(s), a = i.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
            this._core.trigger("load", {
                element: o,
                url: a
            }, "lazy"),
            o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                o.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: o,
                    url: a
                }, "lazy")
            }, this)).attr("src", a) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function() {
                this._core.trigger("loaded", {
                    element: o,
                    url: a
                }, "lazy")
            }, this)).attr("srcset", a) : ((r = new Image).onload = t.proxy(function() {
                o.css({
                    "background-image": 'url("' + a + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: o,
                    url: a
                }, "lazy")
            }, this),
            r.src = a)
        }, this)),
        this._loaded.push(s.get(0)))
    }
    ,
    r.prototype.destroy = function() {
        var t, i;
        for (t in this.handlers)
            this._core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    var r = function(n) {
        this._core = n,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var s = this;
        t(i).on("load", function() {
            s._core.settings.autoHeight && s.update()
        }),
        t(i).resize(function() {
            s._core.settings.autoHeight && (null != s._intervalId && clearTimeout(s._intervalId),
            s._intervalId = setTimeout(function() {
                s.update()
            }, 250))
        })
    };
    r.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    r.prototype.update = function() {
        var i = this._core._current
          , n = i + this._core.settings.items
          , s = this._core.settings.lazyLoad
          , r = this._core.$stage.children().toArray().slice(i, n)
          , o = []
          , a = 0;
        t.each(r, function(i, n) {
            o.push(t(n).height())
        }),
        (a = Math.max.apply(null, o)) <= 1 && s && this._previousHeight && (a = this._previousHeight),
        this._previousHeight = a,
        this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
    }
    ,
    r.prototype.destroy = function() {
        var t, i;
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    var r = function(i) {
        this._core = i,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(i) {
                if (i.namespace) {
                    var n = t(i.content).find(".owl-video");
                    n.length && (n.css("display", "none"),
                    this.fetch(n, t(i.content)))
                }
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    r.prototype.fetch = function(t, i) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
          , s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
          , r = t.attr("data-width") || this._core.settings.videoWidth
          , o = t.attr("data-height") || this._core.settings.videoHeight
          , a = t.attr("href");
        if (!a)
            throw Error("Missing video URL.");
        if ((s = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1)
            n = "youtube";
        else if (s[3].indexOf("vimeo") > -1)
            n = "vimeo";
        else {
            if (!(s[3].indexOf("vzaar") > -1))
                throw Error("Video URL not supported.");
            n = "vzaar"
        }
        s = s[6],
        this._videos[a] = {
            type: n,
            id: s,
            width: r,
            height: o
        },
        i.attr("data-video", a),
        this.thumbnail(t, this._videos[a])
    }
    ,
    r.prototype.thumbnail = function(i, n) {
        var s, r, o, a = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "", l = i.find("img"), c = "src", u = "", h = this._core.settings, d = function(n) {
            r = '<div class="owl-video-play-icon"></div>',
            s = h.lazyLoad ? t("<div/>", {
                class: "owl-video-tn " + u,
                srcType: n
            }) : t("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + n + ")"
            }),
            i.after(s),
            i.after(r)
        };
        if (i.wrap(t("<div/>", {
            class: "owl-video-wrapper",
            style: a
        })),
        this._core.settings.lazyLoad && (c = "data-src",
        u = "owl-lazy"),
        l.length)
            return d(l.attr(c)),
            l.remove(),
            !1;
        "youtube" === n.type ? d(o = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg") : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                d(o = t[0].thumbnail_large)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                d(o = t.framegrab_url)
            }
        })
    }
    ,
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    r.prototype.play = function(i) {
        var n, s = t(i.target).closest("." + this._core.settings.itemClass), r = this._videos[s.attr("data-video")], o = r.width || "100%", a = r.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        s = this._core.items(this._core.relative(s.index())),
        this._core.reset(s.index()),
        (n = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a),
        n.attr("width", o),
        "youtube" === r.type ? n.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? n.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && n.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"),
        t(n).wrap('<div class="owl-video-frame" />').insertAfter(s.find(".owl-video")),
        this._playing = s.addClass("owl-video-playing"))
    }
    ,
    r.prototype.isInFullScreen = function() {
        var i = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return i && t(i).parent().hasClass("owl-video-frame")
    }
    ,
    r.prototype.destroy = function() {
        var t, i;
        for (t in this._core.$element.off("click.owl.video"),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    var r = function(i) {
        this.core = i,
        this.core.options = t.extend({}, r.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = s,
        this.next = s,
        this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(),
                this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    r.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var i, n = t.proxy(this.clear, this), s = this.core.$stage.children().eq(this.previous), r = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, a = this.core.settings.animateOut;
            this.core.current() !== this.previous && (a && (i = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            s.one(t.support.animation.end, n).css({
                left: i + "px"
            }).addClass("animated owl-animated-out").addClass(a)),
            o && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
        }
    }
    ,
    r.prototype.clear = function(i) {
        t(i.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    r.prototype.destroy = function() {
        var t, i;
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    var r = function(i) {
        this._core = i,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, i, n) {
                t.namespace && this.play(i, n)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = t.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    r.prototype._next = function(s) {
        this._call = i.setTimeout(t.proxy(this._next, this, s), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || n.hidden || this._core.next(s || this._core.settings.autoplaySpeed)
    }
    ,
    r.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    r.prototype.play = function(n, s) {
        var r;
        this._core.is("rotating") || this._core.enter("rotating"),
        n = n || this._core.settings.autoplayTimeout,
        r = Math.min(this._time % (this._timeout || n), n),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : i.clearTimeout(this._call),
        this._time += this.read() % n - r,
        this._timeout = n,
        this._call = i.setTimeout(t.proxy(this._next, this, s), n - r)
    }
    ,
    r.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        i.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    r.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        i.clearTimeout(this._call))
    }
    ,
    r.prototype.destroy = function() {
        var t, i;
        for (t in this.stop(),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    "use strict";
    var r = function(i) {
        this._core = i,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": t.proxy(function(i) {
                i.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(i.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    r.prototype.initialize = function() {
        var i, n = this._core.settings;
        for (i in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.prev(n.navSpeed)
        }, this)),
        this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.next(n.navSpeed)
        }, this)),
        n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", t.proxy(function(i) {
            var s = t(i.target).parent().is(this._controls.$absolute) ? t(i.target).index() : t(i.target).parent().index();
            i.preventDefault(),
            this.to(s, n.dotsSpeed)
        }, this)),
        this._overrides)
            this._core[i] = t.proxy(this[i], this)
    }
    ,
    r.prototype.destroy = function() {
        var t, i, n, s, r;
        for (t in r = this._core.settings,
        this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (i in this._controls)
            "$relative" === i && r.navContainer ? this._controls[i].html("") : this._controls[i].remove();
        for (s in this.overides)
            this._core[s] = this._overrides[s];
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }
    ,
    r.prototype.update = function() {
        var t, i, n, s = this._core.clones().length / 2, r = s + this._core.items().length, o = this._core.maximum(!0), a = this._core.settings, l = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
        if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)),
        a.dots || "page" == a.slideBy)
            for (this._pages = [],
            t = s,
            i = 0,
            n = 0; t < r; t++) {
                if (i >= l || 0 === i) {
                    if (this._pages.push({
                        start: Math.min(o, t - s),
                        end: t - s + l - 1
                    }),
                    Math.min(o, t - s) === o)
                        break;
                    i = 0,
                    ++n
                }
                i += this._core.mergers(this._core.relative(t))
            }
    }
    ,
    r.prototype.draw = function() {
        var i, n = this._core.settings, s = this._core.items().length <= n.items, r = this._core.relative(this._core.current()), o = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || s),
        n.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !n.dots || s),
        n.dots && (i = this._pages.length - this._controls.$absolute.children().length,
        n.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    r.prototype.onTrigger = function(i) {
        var n = this._core.settings;
        i.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }
    ,
    r.prototype.current = function() {
        var i = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, n) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }
    ,
    r.prototype.getPosition = function(i) {
        var n, s, r = this._core.settings;
        return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages),
        s = this._pages.length,
        i ? ++n : --n,
        n = this._pages[(n % s + s) % s].start) : (n = this._core.relative(this._core.current()),
        s = this._core.items().length,
        i ? n += r.slideBy : n -= r.slideBy),
        n
    }
    ,
    r.prototype.next = function(i) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), i)
    }
    ,
    r.prototype.prev = function(i) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), i)
    }
    ,
    r.prototype.to = function(i, n, s) {
        var r;
        !s && this._pages.length ? (r = this._pages.length,
        t.proxy(this._overrides.to, this._core)(this._pages[(i % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(i, n)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    "use strict";
    var r = function(n) {
        this._core = n,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && t(i).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(i) {
                if (i.namespace) {
                    var n = t(i.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    n && (this._hashes[n] = i.content)
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(n) {
                if (n.namespace && "position" === n.property.name) {
                    var s = this._core.items(this._core.relative(this._core.current()))
                      , r = t.map(this._hashes, function(t, i) {
                        return t === s ? i : null
                    }).join();
                    r && i.location.hash.slice(1) !== r && (i.location.hash = r)
                }
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this.$element.on(this._handlers),
        t(i).on("hashchange.owl.navigation", t.proxy(function(t) {
            var n = i.location.hash.substring(1)
              , s = this._core.$stage.children()
              , r = this._hashes[n] && s.index(this._hashes[n]);
            void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        }, this))
    };
    r.Defaults = {
        URLhashListener: !1
    },
    r.prototype.destroy = function() {
        var n, s;
        for (n in t(i).off("hashchange.owl.navigation"),
        this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (s in Object.getOwnPropertyNames(this))
            "function" != typeof this[s] && (this[s] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document),
function(t, i, n, s) {
    function r(i, n) {
        var s = !1
          , r = i.charAt(0).toUpperCase() + i.slice(1);
        return t.each((i + " " + l.join(r + " ") + r).split(" "), function(t, i) {
            if (void 0 !== a[i])
                return s = !n || i,
                !1
        }),
        s
    }
    function o(t) {
        return r(t, !0)
    }
    var a = t("<support>").get(0).style
      , l = "Webkit Moz O ms".split(" ")
      , c = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }
      , u = {
        csstransforms: function() {
            return !!r("transform")
        },
        csstransforms3d: function() {
            return !!r("perspective")
        },
        csstransitions: function() {
            return !!r("transition")
        },
        cssanimations: function() {
            return !!r("animation")
        }
    };
    u.csstransitions() && (t.support.transition = new String(o("transition")),
    t.support.transition.end = c.transition.end[t.support.transition]),
    u.cssanimations() && (t.support.animation = new String(o("animation")),
    t.support.animation.end = c.animation.end[t.support.animation]),
    u.csstransforms() && (t.support.transform = new String(o("transform")),
    t.support.transform3d = u.csstransforms3d())
}(window.Zepto || window.jQuery, window, document),
/*!
  * @module navigation
  */
function(t) {
    "use strict";
    t.fn.menumaker = function(i) {
        var n = t(this)
          , s = t.extend({
            format: "dropdown",
            sticky: !1
        }, i);
        return this.each(function() {
            t(this).find(".navbar-toggler").on("click", function() {
                t(this).toggleClass("menu-opened");
                var i = t(this).next("ul");
                i.hasClass("open") ? i.slideToggle().removeClass("open") : (i.slideToggle().addClass("open"),
                "dropdown" === s.format && i.find("ul").show())
            }),
            n.find(".navbar-nav li ul").parent().addClass("has-sub"),
            n.find(".navbar-nav li ul li").parent().addClass("sub-menu"),
            "multitoggle" === s.format ? (n.find(".has-sub").prepend('<span class="submenu-button"></span>'),
            n.find(".navbar-nav > li.has-sub > .submenu-button").on("click", function() {
                t(this).next(".sub-menu").slideToggle(),
                t(this).siblings("ul").addClass("open").slideToggle(),
                t(this).parents(".navbar-nav > li.has-sub").toggleClass("active").siblings(".has-sub").children(".sub-menu").slideUp().removeClass("open").parents("li").removeClass("active")
            }),
            n.find(".sub-menu > li.has-sub > .submenu-button").on("click", function() {
                t(this).next(".sub-menu").slideToggle(),
                t(this).siblings("ul").addClass("open").slideToggle(),
                t(this).parents(".sub-menu > li").toggleClass("active").siblings(".has-sub").children(".sub-menu").slideUp().removeClass("open").parents("li").removeClass("active"),
                t(this).siblings("ul").hasClass("open") && t(this).parents("li").eq(1).addClass("active")
            })) : n.addClass("dropdown"),
            !0 === s.sticky && n.css("position", "fixed");
            var i = function() {
                t(window).width() > 1091 && n.find("ul").show()
            };
            return i(),
            t(window).on("resize", i)
        })
    }
    ,
    t(document).ready(function() {
        t("nav").menumaker({
            format: "multitoggle"
        });
        var i = window.location.pathname.split("/")
          , n = window.location.pathname;
        n = i[i.length - 1].length > 0 ? i[i.length - 1] : i[i.length - 2],
        t(".navbar-nav li").find('a[href="' + n + '"]').closest("li").addClass("active").parents().eq(1).addClass("current"),
        t(".navbar-nav li.has-sub ul li").find('a[href="' + n + '"]').parents().eq(4).addClass("current")
    }),
    t(".navbar-default .attr-nav").each(function() {
        t("li.search > a", this).on("click", function(i) {
            i.preventDefault(),
            t(".top-search").slideToggle()
        })
    }),
    t(".input-group-addon.close-search").on("click", function() {
        t(".top-search").slideUp()
    })
}(jQuery),
function(t) {
    "use strict";
    t(".switcher-setting").on("click", function() {
        t("#style-switcher").hasClass("active") ? t("#style-switcher").removeClass("active") : (t("#style-switcher").removeClass("active"),
        t("#style-switcher").addClass("active"))
    }),
    t(".style1").on("click", function() {
        return t("#colors").attr("href", "css/styles.css"),
        t("#nav1").attr("href", "img/logos/logo1.png"),
        t("#nav2").attr("href", "img/logos/logo1.png"),
        t("#nav3").attr("href", "img/logos/logo1.png"),
        t("#nav4").attr("href", "img/logos/logo1.png"),
        t("#logo").attr("src", "img/logos/logo1.png"),
        t("#vpn-img").attr("src", "img/logos/logo1.png"),
        t("#cart-logo").attr("src", "img/logos/logo1.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo1.png"),
            t("#logo").attr("src", "img/logos/logo1.png"),
            t("#vpn-img").attr("src", "img/logos/logo1.png")
        }),
        !1
    }),
    t(".style2").on("click", function() {
        return t("#colors").attr("href", "css/styles-2.css"),
        t("#nav1").attr("href", "img/logos/logo2.png"),
        t("#nav2").attr("href", "img/logos/logo2.png"),
        t("#nav3").attr("href", "img/logos/logo2.png"),
        t("#nav4").attr("href", "img/logos/logo2.png"),
        t("#logo").attr("src", "img/logos/logo2.png"),
        t("#vpn-img").attr("src", "img/logos/logo2.png"),
        t("#cart-logo").attr("src", "img/logos/logo2.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo2.png"),
            t("#logo").attr("src", "img/logos/logo2.png"),
            t("#vpn-img").attr("src", "img/logos/logo2.png")
        }),
        !1
    }),
    t(".style3").on("click", function() {
        return t("#colors").attr("href", "css/styles-3.css"),
        t("#logo").attr("src", "img/logos/logo3.png"),
        t("#vpn-img").attr("src", "img/logos/logo3.png"),
        t("#nav1").attr("href", "img/logos/logo3.png"),
        t("#nav2").attr("href", "img/logos/logo3.png"),
        t("#nav3").attr("href", "img/logos/logo3.png"),
        t("#nav4").attr("href", "img/logos/logo3.png"),
        t("#cart-logo").attr("src", "img/logos/logo3.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo3.png"),
            t("#logo").attr("src", "img/logos/logo3.png"),
            t("#vpn-img").attr("src", "img/logos/logo3.png")
        }),
        !1
    }),
    t(".style4").on("click", function() {
        return t("#colors").attr("href", "css/styles-4.css"),
        t("#nav1").attr("href", "img/logos/logo4.png"),
        t("#nav2").attr("href", "img/logos/logo4.png"),
        t("#nav3").attr("href", "img/logos/logo4.png"),
        t("#nav4").attr("href", "img/logos/logo4.png"),
        t("#logo").attr("src", "img/logos/logo4.png"),
        t("#vpn-img").attr("src", "img/logos/logo4.png"),
        t("#cart-logo").attr("src", "img/logos/logo4.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo4.png"),
            t("#logo").attr("src", "img/logos/logo4.png"),
            t("#vpn-img").attr("src", "img/logos/logo4.png")
        }),
        !1
    }),
    t(".style5").on("click", function() {
        return t("#colors").attr("href", "css/styles-5.css"),
        t("#logo").attr("src", "img/logos/logo5.png"),
        t("#vpn-img").attr("src", "img/logos/logo5.png"),
        t("#nav1").attr("href", "img/logos/logo5.png"),
        t("#nav2").attr("href", "img/logos/logo5.png"),
        t("#nav3").attr("href", "img/logos/logo5.png"),
        t("#nav4").attr("href", "img/logos/logo5.png"),
        t("#cart-logo").attr("src", "img/logos/logo5.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo5.png"),
            t("#logo").attr("src", "img/logos/logo5.png"),
            t("#vpn-img").attr("src", "img/logos/logo5.png")
        }),
        !1
    }),
    t(".style6").on("click", function() {
        return t("#colors").attr("href", "css/styles-6.css"),
        t("#nav1").attr("href", "img/logos/logo6.png"),
        t("#nav2").attr("href", "img/logos/logo6.png"),
        t("#nav3").attr("href", "img/logos/logo6.png"),
        t("#nav4").attr("href", "img/logos/logo6.png"),
        t("#logo").attr("src", "img/logos/logo6.png"),
        t("#vpn-img").attr("src", "img/logos/logo6.png"),
        t("#cart-logo").attr("src", "img/logos/logo6.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo6.png"),
            t("#logo").attr("src", "img/logos/logo6.png"),
            t("#vpn-img").attr("src", "img/logos/logo6.png")
        }),
        !1
    }),
    t(".style7").on("click", function() {
        return t("#colors").attr("href", "css/styles-7.css"),
        t("#nav1").attr("href", "img/logos/logo7.png"),
        t("#nav2").attr("href", "img/logos/logo7.png"),
        t("#nav3").attr("href", "img/logos/logo7.png"),
        t("#nav4").attr("href", "img/logos/logo7.png"),
        t("#logo").attr("src", "img/logos/logo7.png"),
        t("#vpn-img").attr("src", "img/logos/logo7.png"),
        t("#cart-logo").attr("src", "img/logos/logo7.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo7.png"),
            t("#logo").attr("src", "img/logos/logo7.png"),
            t("#vpn-img").attr("src", "img/logos/logo7.png")
        }),
        !1
    }),
    t(".style8").on("click", function() {
        return t("#colors").attr("href", "css/styles-8.css"),
        t("#logo").attr("src", "img/logos/logo8.png"),
        t("#vpn-img").attr("src", "img/logos/logo8.png"),
        t("#nav1").attr("href", "img/logos/logo8.png"),
        t("#nav2").attr("href", "img/logos/logo8.png"),
        t("#nav3").attr("href", "img/logos/logo8.png"),
        t("#nav4").attr("href", "img/logos/logo8.png"),
        t("#cart-logo").attr("src", "img/logos/logo8.png"),
        t(window).on("scroll", function() {
            t(window).scrollTop(),
            t("#cart-logo").attr("src", "img/logos/logo8.png"),
            t("#logo").attr("src", "img/logos/logo8.png"),
            t("#vpn-img").attr("src", "img/logos/logo8.png")
        }),
        !1
    })
}(jQuery);
var e, pJS = function(t, i) {
    var n = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {
            el: n,
            w: n.offsetWidth,
            h: n.offsetHeight
        },
        particles: {
            number: {
                value: 400,
                density: {
                    enable: !0,
                    value_area: 800
                }
            },
            color: {
                value: "#fff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ff0000"
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 1,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 2,
                    opacity_min: 0,
                    sync: !1
                }
            },
            size: {
                value: 20,
                random: !1,
                anim: {
                    enable: !1,
                    speed: 20,
                    size_min: 0,
                    sync: !1
                }
            },
            line_linked: {
                enable: !0,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
            },
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {
                    enable: !1,
                    rotateX: 3e3,
                    rotateY: 3e3
                }
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: !0,
                    mode: "grab"
                },
                onclick: {
                    enable: !0,
                    mode: "push"
                },
                resize: !0
            },
            modes: {
                grab: {
                    distance: 100,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: .4
                },
                repulse: {
                    distance: 200,
                    duration: .4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {
            interact: {},
            modes: {},
            vendors: {}
        },
        tmp: {}
    };
    var s = this.pJS;
    i && Object.deepExtend(s, i),
    s.tmp.obj = {
        size_value: s.particles.size.value,
        size_anim_speed: s.particles.size.anim.speed,
        move_speed: s.particles.move.speed,
        line_linked_distance: s.particles.line_linked.distance,
        line_linked_width: s.particles.line_linked.width,
        mode_grab_distance: s.interactivity.modes.grab.distance,
        mode_bubble_distance: s.interactivity.modes.bubble.distance,
        mode_bubble_size: s.interactivity.modes.bubble.size,
        mode_repulse_distance: s.interactivity.modes.repulse.distance
    },
    s.fn.retinaInit = function() {
        s.retina_detect && window.devicePixelRatio > 1 ? (s.canvas.pxratio = window.devicePixelRatio,
        s.tmp.retina = !0) : (s.canvas.pxratio = 1,
        s.tmp.retina = !1),
        s.canvas.w = s.canvas.el.offsetWidth * s.canvas.pxratio,
        s.canvas.h = s.canvas.el.offsetHeight * s.canvas.pxratio,
        s.particles.size.value = s.tmp.obj.size_value * s.canvas.pxratio,
        s.particles.size.anim.speed = s.tmp.obj.size_anim_speed * s.canvas.pxratio,
        s.particles.move.speed = s.tmp.obj.move_speed * s.canvas.pxratio,
        s.particles.line_linked.distance = s.tmp.obj.line_linked_distance * s.canvas.pxratio,
        s.interactivity.modes.grab.distance = s.tmp.obj.mode_grab_distance * s.canvas.pxratio,
        s.interactivity.modes.bubble.distance = s.tmp.obj.mode_bubble_distance * s.canvas.pxratio,
        s.particles.line_linked.width = s.tmp.obj.line_linked_width * s.canvas.pxratio,
        s.interactivity.modes.bubble.size = s.tmp.obj.mode_bubble_size * s.canvas.pxratio,
        s.interactivity.modes.repulse.distance = s.tmp.obj.mode_repulse_distance * s.canvas.pxratio
    }
    ,
    s.fn.canvasInit = function() {
        s.canvas.ctx = s.canvas.el.getContext("2d")
    }
    ,
    s.fn.canvasSize = function() {
        s.canvas.el.width = s.canvas.w,
        s.canvas.el.height = s.canvas.h,
        s && s.interactivity.events.resize && window.addEventListener("resize", function() {
            s.canvas.w = s.canvas.el.offsetWidth,
            s.canvas.h = s.canvas.el.offsetHeight,
            s.tmp.retina && (s.canvas.w *= s.canvas.pxratio,
            s.canvas.h *= s.canvas.pxratio),
            s.canvas.el.width = s.canvas.w,
            s.canvas.el.height = s.canvas.h,
            s.particles.move.enable || (s.fn.particlesEmpty(),
            s.fn.particlesCreate(),
            s.fn.particlesDraw(),
            s.fn.vendors.densityAutoParticles()),
            s.fn.vendors.densityAutoParticles()
        })
    }
    ,
    s.fn.canvasPaint = function() {
        s.canvas.ctx.fillRect(0, 0, s.canvas.w, s.canvas.h)
    }
    ,
    s.fn.canvasClear = function() {
        s.canvas.ctx.clearRect(0, 0, s.canvas.w, s.canvas.h)
    }
    ,
    s.fn.particle = function(t, i, n) {
        if (this.radius = (s.particles.size.random ? Math.random() : 1) * s.particles.size.value,
        s.particles.size.anim.enable && (this.size_status = !1,
        this.vs = s.particles.size.anim.speed / 100,
        s.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        this.x = n ? n.x : Math.random() * s.canvas.w,
        this.y = n ? n.y : Math.random() * s.canvas.h,
        this.x > s.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > s.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        s.particles.move.bounce && s.fn.vendors.checkOverlap(this, n),
        this.color = {},
        "object" == typeof t.value) {
            if (t.value instanceof Array) {
                var r = t.value[Math.floor(Math.random() * s.particles.color.value.length)];
                this.color.rgb = hexToRgb(r)
            } else
                null != t.value.r && null != t.value.g && null != t.value.b && (this.color.rgb = {
                    r: t.value.r,
                    g: t.value.g,
                    b: t.value.b
                }),
                null != t.value.h && null != t.value.s && null != t.value.l && (this.color.hsl = {
                    h: t.value.h,
                    s: t.value.s,
                    l: t.value.l
                })
        } else
            "random" == t.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof t.value && (this.color = t,
            this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (s.particles.opacity.random ? Math.random() : 1) * s.particles.opacity.value,
        s.particles.opacity.anim.enable && (this.opacity_status = !1,
        this.vo = s.particles.opacity.anim.speed / 100,
        s.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var o = {};
        switch (s.particles.move.direction) {
        case "top":
            o = {
                x: 0,
                y: -1
            };
            break;
        case "top-right":
            o = {
                x: .5,
                y: -.5
            };
            break;
        case "right":
            o = {
                x: 1,
                y: -0
            };
            break;
        case "bottom-right":
            o = {
                x: .5,
                y: .5
            };
            break;
        case "bottom":
            o = {
                x: 0,
                y: 1
            };
            break;
        case "bottom-left":
            o = {
                x: -.5,
                y: 1
            };
            break;
        case "left":
            o = {
                x: -1,
                y: 0
            };
            break;
        case "top-left":
            o = {
                x: -.5,
                y: -.5
            };
            break;
        default:
            o = {
                x: 0,
                y: 0
            }
        }
        s.particles.move.straight ? (this.vx = o.x,
        this.vy = o.y,
        s.particles.move.random && (this.vx = this.vx * Math.random(),
        this.vy = this.vy * Math.random())) : (this.vx = o.x + Math.random() - .5,
        this.vy = o.y + Math.random() - .5),
        this.vx_i = this.vx,
        this.vy_i = this.vy;
        var a = s.particles.shape.type;
        if ("object" == typeof a) {
            if (a instanceof Array) {
                var l = a[Math.floor(Math.random() * a.length)];
                this.shape = l
            }
        } else
            this.shape = a;
        if ("image" == this.shape) {
            var c = s.particles.shape;
            this.img = {
                src: c.image.src,
                ratio: c.image.width / c.image.height
            },
            this.img.ratio || (this.img.ratio = 1),
            "svg" == s.tmp.img_type && null != s.tmp.source_svg && (s.fn.vendors.createSvgImg(this),
            s.tmp.pushing && (this.img.loaded = !1))
        }
    }
    ,
    s.fn.particle.prototype.draw = function() {
        if (null != this.radius_bubble)
            var t = this.radius_bubble;
        else
            t = this.radius;
        if (null != this.opacity_bubble)
            var i = this.opacity_bubble;
        else
            i = this.opacity;
        if (this.color.rgb)
            var n = "rgba(" + this.color.rgb.r + "," + this.color.rgb.g + "," + this.color.rgb.b + "," + i + ")";
        else
            n = "hsla(" + this.color.hsl.h + "," + this.color.hsl.s + "%," + this.color.hsl.l + "%," + i + ")";
        switch (s.canvas.ctx.fillStyle = n,
        s.canvas.ctx.beginPath(),
        this.shape) {
        case "circle":
            s.canvas.ctx.arc(this.x, this.y, t, 0, 2 * Math.PI, !1);
            break;
        case "edge":
            s.canvas.ctx.rect(this.x - t, this.y - t, 2 * t, 2 * t);
            break;
        case "triangle":
            s.fn.vendors.drawShape(s.canvas.ctx, this.x - t, this.y + t / 1.66, 2 * t, 3, 2);
            break;
        case "polygon":
            s.fn.vendors.drawShape(s.canvas.ctx, this.x - t / (s.particles.shape.polygon.nb_sides / 3.5), this.y - t / .76, 2.66 * t / (s.particles.shape.polygon.nb_sides / 3), s.particles.shape.polygon.nb_sides, 1);
            break;
        case "star":
            s.fn.vendors.drawShape(s.canvas.ctx, this.x - 2 * t / (s.particles.shape.polygon.nb_sides / 4), this.y - t / 1.52, 2 * t * 2.66 / (s.particles.shape.polygon.nb_sides / 3), s.particles.shape.polygon.nb_sides, 2);
            break;
        case "image":
            if ("svg" == s.tmp.img_type)
                var r = this.img.obj;
            else
                r = s.tmp.img_obj;
            r && s.canvas.ctx.drawImage(r, this.x - t, this.y - t, 2 * t, 2 * t / this.img.ratio)
        }
        s.canvas.ctx.closePath(),
        s.particles.shape.stroke.width > 0 && (s.canvas.ctx.strokeStyle = s.particles.shape.stroke.color,
        s.canvas.ctx.lineWidth = s.particles.shape.stroke.width,
        s.canvas.ctx.stroke()),
        s.canvas.ctx.fill()
    }
    ,
    s.fn.particlesCreate = function() {
        for (var t = 0; t < s.particles.number.value; t++)
            s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value))
    }
    ,
    s.fn.particlesUpdate = function() {
        for (var t = 0; t < s.particles.array.length; t++) {
            var i = s.particles.array[t];
            if (s.particles.move.enable) {
                var n = s.particles.move.speed / 2;
                i.x += i.vx * n,
                i.y += i.vy * n
            }
            if (s.particles.opacity.anim.enable && (1 == i.opacity_status ? (i.opacity >= s.particles.opacity.value && (i.opacity_status = !1),
            i.opacity += i.vo) : (i.opacity <= s.particles.opacity.anim.opacity_min && (i.opacity_status = !0),
            i.opacity -= i.vo),
            i.opacity < 0 && (i.opacity = 0)),
            s.particles.size.anim.enable && (1 == i.size_status ? (i.radius >= s.particles.size.value && (i.size_status = !1),
            i.radius += i.vs) : (i.radius <= s.particles.size.anim.size_min && (i.size_status = !0),
            i.radius -= i.vs),
            i.radius < 0 && (i.radius = 0)),
            "bounce" == s.particles.move.out_mode)
                var r = {
                    x_left: i.radius,
                    x_right: s.canvas.w,
                    y_top: i.radius,
                    y_bottom: s.canvas.h
                };
            else
                r = {
                    x_left: -i.radius,
                    x_right: s.canvas.w + i.radius,
                    y_top: -i.radius,
                    y_bottom: s.canvas.h + i.radius
                };
            if ("bounce" === (i.x - i.radius > s.canvas.w ? (i.x = r.x_left,
            i.y = Math.random() * s.canvas.h) : i.x + i.radius < 0 && (i.x = r.x_right,
            i.y = Math.random() * s.canvas.h),
            i.y - i.radius > s.canvas.h ? (i.y = r.y_top,
            i.x = Math.random() * s.canvas.w) : i.y + i.radius < 0 && (i.y = r.y_bottom,
            i.x = Math.random() * s.canvas.w),
            s.particles.move.out_mode) && ((i.x + i.radius > s.canvas.w || i.x - i.radius < 0) && (i.vx = -i.vx),
            (i.y + i.radius > s.canvas.h || i.y - i.radius < 0) && (i.vy = -i.vy)),
            isInArray("grab", s.interactivity.events.onhover.mode) && s.fn.modes.grabParticle(i),
            (isInArray("bubble", s.interactivity.events.onhover.mode) || isInArray("bubble", s.interactivity.events.onclick.mode)) && s.fn.modes.bubbleParticle(i),
            (isInArray("repulse", s.interactivity.events.onhover.mode) || isInArray("repulse", s.interactivity.events.onclick.mode)) && s.fn.modes.repulseParticle(i),
            s.particles.line_linked.enable || s.particles.move.attract.enable)
                for (var o = t + 1; o < s.particles.array.length; o++) {
                    var a = s.particles.array[o];
                    s.particles.line_linked.enable && s.fn.interact.linkParticles(i, a),
                    s.particles.move.attract.enable && s.fn.interact.attractParticles(i, a),
                    s.particles.move.bounce && s.fn.interact.bounceParticles(i, a)
                }
        }
    }
    ,
    s.fn.particlesDraw = function() {
        s.canvas.ctx.clearRect(0, 0, s.canvas.w, s.canvas.h),
        s.fn.particlesUpdate();
        for (var t = 0; t < s.particles.array.length; t++)
            s.particles.array[t].draw()
    }
    ,
    s.fn.particlesEmpty = function() {
        s.particles.array = []
    }
    ,
    s.fn.particlesRefresh = function() {
        cancelRequestAnimFrame(s.fn.checkAnimFrame),
        cancelRequestAnimFrame(s.fn.drawAnimFrame),
        s.tmp.source_svg = void 0,
        s.tmp.img_obj = void 0,
        s.tmp.count_svg = 0,
        s.fn.particlesEmpty(),
        s.fn.canvasClear(),
        s.fn.vendors.start()
    }
    ,
    s.fn.interact.linkParticles = function(t, i) {
        var n = t.x - i.x
          , r = t.y - i.y
          , o = Math.sqrt(n * n + r * r);
        if (o <= s.particles.line_linked.distance) {
            var a = s.particles.line_linked.opacity - o / (1 / s.particles.line_linked.opacity) / s.particles.line_linked.distance;
            if (a > 0) {
                var l = s.particles.line_linked.color_rgb_line;
                s.canvas.ctx.strokeStyle = "rgba(" + l.r + "," + l.g + "," + l.b + "," + a + ")",
                s.canvas.ctx.lineWidth = s.particles.line_linked.width,
                s.canvas.ctx.beginPath(),
                s.canvas.ctx.moveTo(t.x, t.y),
                s.canvas.ctx.lineTo(i.x, i.y),
                s.canvas.ctx.stroke(),
                s.canvas.ctx.closePath()
            }
        }
    }
    ,
    s.fn.interact.attractParticles = function(t, i) {
        var n = t.x - i.x
          , r = t.y - i.y;
        if (Math.sqrt(n * n + r * r) <= s.particles.line_linked.distance) {
            var o = n / (1e3 * s.particles.move.attract.rotateX)
              , a = r / (1e3 * s.particles.move.attract.rotateY);
            t.vx -= o,
            t.vy -= a,
            i.vx += o,
            i.vy += a
        }
    }
    ,
    s.fn.interact.bounceParticles = function(t, i) {
        var n = t.x - i.x
          , s = t.y - i.y;
        t.radius + i.radius >= Math.sqrt(n * n + s * s) && (t.vx = -t.vx,
        t.vy = -t.vy,
        i.vx = -i.vx,
        i.vy = -i.vy)
    }
    ,
    s.fn.modes.pushParticles = function(t, i) {
        s.tmp.pushing = !0;
        for (var n = 0; t > n; n++)
            s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value,{
                x: i ? i.pos_x : Math.random() * s.canvas.w,
                y: i ? i.pos_y : Math.random() * s.canvas.h
            })),
            n == t - 1 && (s.particles.move.enable || s.fn.particlesDraw(),
            s.tmp.pushing = !1)
    }
    ,
    s.fn.modes.removeParticles = function(t) {
        s.particles.array.splice(0, t),
        s.particles.move.enable || s.fn.particlesDraw()
    }
    ,
    s.fn.modes.bubbleParticle = function(t) {
        function i() {
            t.opacity_bubble = t.opacity,
            t.radius_bubble = t.radius
        }
        function n(i, n, r, o, a) {
            if (i != n) {
                if (s.tmp.bubble_duration_end)
                    null != r && (c = i + (i - (o - d * (o - i) / s.interactivity.modes.bubble.duration)),
                    "size" == a && (t.radius_bubble = c),
                    "opacity" == a && (t.opacity_bubble = c));
                else if (h <= s.interactivity.modes.bubble.distance) {
                    if (null != r)
                        var l = r;
                    else
                        l = o;
                    if (l != i) {
                        var c = o - d * (o - i) / s.interactivity.modes.bubble.duration;
                        "size" == a && (t.radius_bubble = c),
                        "opacity" == a && (t.opacity_bubble = c)
                    }
                } else
                    "size" == a && (t.radius_bubble = void 0),
                    "opacity" == a && (t.opacity_bubble = void 0)
            }
        }
        if (s.interactivity.events.onhover.enable && isInArray("bubble", s.interactivity.events.onhover.mode)) {
            var r = t.x - s.interactivity.mouse.pos_x
              , o = t.y - s.interactivity.mouse.pos_y
              , a = 1 - (h = Math.sqrt(r * r + o * o)) / s.interactivity.modes.bubble.distance;
            if (h <= s.interactivity.modes.bubble.distance) {
                if (a >= 0 && "mousemove" == s.interactivity.status) {
                    if (s.interactivity.modes.bubble.size != s.particles.size.value) {
                        if (s.interactivity.modes.bubble.size > s.particles.size.value)
                            (u = t.radius + s.interactivity.modes.bubble.size * a) >= 0 && (t.radius_bubble = u);
                        else {
                            var l, c = t.radius - s.interactivity.modes.bubble.size, u = t.radius - c * a;
                            t.radius_bubble = u > 0 ? u : 0
                        }
                    }
                    s.interactivity.modes.bubble.opacity != s.particles.opacity.value && (s.interactivity.modes.bubble.opacity > s.particles.opacity.value ? (l = s.interactivity.modes.bubble.opacity * a) > t.opacity && l <= s.interactivity.modes.bubble.opacity && (t.opacity_bubble = l) : (l = t.opacity - (s.particles.opacity.value - s.interactivity.modes.bubble.opacity) * a) < t.opacity && l >= s.interactivity.modes.bubble.opacity && (t.opacity_bubble = l))
                }
            } else
                i();
            "mouseleave" == s.interactivity.status && i()
        } else if (s.interactivity.events.onclick.enable && isInArray("bubble", s.interactivity.events.onclick.mode)) {
            if (s.tmp.bubble_clicking) {
                var h = Math.sqrt((r = t.x - s.interactivity.mouse.click_pos_x) * r + (o = t.y - s.interactivity.mouse.click_pos_y) * o)
                  , d = ((new Date).getTime() - s.interactivity.mouse.click_time) / 1e3;
                d > s.interactivity.modes.bubble.duration && (s.tmp.bubble_duration_end = !0),
                d > 2 * s.interactivity.modes.bubble.duration && (s.tmp.bubble_clicking = !1,
                s.tmp.bubble_duration_end = !1)
            }
            s.tmp.bubble_clicking && (n(s.interactivity.modes.bubble.size, s.particles.size.value, t.radius_bubble, t.radius, "size"),
            n(s.interactivity.modes.bubble.opacity, s.particles.opacity.value, t.opacity_bubble, t.opacity, "opacity"))
        }
    }
    ,
    s.fn.modes.repulseParticle = function(t) {
        if (s.interactivity.events.onhover.enable && isInArray("repulse", s.interactivity.events.onhover.mode) && "mousemove" == s.interactivity.status) {
            var i = t.x - s.interactivity.mouse.pos_x
              , n = t.y - s.interactivity.mouse.pos_y
              , r = Math.sqrt(i * i + n * n)
              , o = {
                x: i / r,
                y: n / r
            }
              , a = clamp(1 / (c = s.interactivity.modes.repulse.distance) * (-1 * Math.pow(r / c, 2) + 1) * c * 100, 0, 50)
              , l = {
                x: t.x + o.x * a,
                y: t.y + o.y * a
            };
            "bounce" == s.particles.move.out_mode ? (l.x - t.radius > 0 && l.x + t.radius < s.canvas.w && (t.x = l.x),
            l.y - t.radius > 0 && l.y + t.radius < s.canvas.h && (t.y = l.y)) : (t.x = l.x,
            t.y = l.y)
        } else if (s.interactivity.events.onclick.enable && isInArray("repulse", s.interactivity.events.onclick.mode)) {
            if (s.tmp.repulse_finish || (s.tmp.repulse_count++,
            s.tmp.repulse_count == s.particles.array.length && (s.tmp.repulse_finish = !0)),
            s.tmp.repulse_clicking) {
                var c = Math.pow(s.interactivity.modes.repulse.distance / 6, 3)
                  , u = s.interactivity.mouse.click_pos_x - t.x
                  , h = s.interactivity.mouse.click_pos_y - t.y
                  , d = u * u + h * h
                  , p = -c / d * 1;
                c >= d && function() {
                    var i = Math.atan2(h, u);
                    if (t.vx = p * Math.cos(i),
                    t.vy = p * Math.sin(i),
                    "bounce" == s.particles.move.out_mode) {
                        var n = {
                            x: t.x + t.vx,
                            y: t.y + t.vy
                        };
                        (n.x + t.radius > s.canvas.w || n.x - t.radius < 0) && (t.vx = -t.vx),
                        (n.y + t.radius > s.canvas.h || n.y - t.radius < 0) && (t.vy = -t.vy)
                    }
                }()
            } else
                0 == s.tmp.repulse_clicking && (t.vx = t.vx_i,
                t.vy = t.vy_i)
        }
    }
    ,
    s.fn.modes.grabParticle = function(t) {
        if (s.interactivity.events.onhover.enable && "mousemove" == s.interactivity.status) {
            var i = t.x - s.interactivity.mouse.pos_x
              , n = t.y - s.interactivity.mouse.pos_y
              , r = Math.sqrt(i * i + n * n);
            if (r <= s.interactivity.modes.grab.distance) {
                var o = s.interactivity.modes.grab.line_linked.opacity - r / (1 / s.interactivity.modes.grab.line_linked.opacity) / s.interactivity.modes.grab.distance;
                if (o > 0) {
                    var a = s.particles.line_linked.color_rgb_line;
                    s.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + o + ")",
                    s.canvas.ctx.lineWidth = s.particles.line_linked.width,
                    s.canvas.ctx.beginPath(),
                    s.canvas.ctx.moveTo(t.x, t.y),
                    s.canvas.ctx.lineTo(s.interactivity.mouse.pos_x, s.interactivity.mouse.pos_y),
                    s.canvas.ctx.stroke(),
                    s.canvas.ctx.closePath()
                }
            }
        }
    }
    ,
    s.fn.vendors.eventsListeners = function() {
        "window" == s.interactivity.detect_on ? s.interactivity.el = window : s.interactivity.el = s.canvas.el,
        (s.interactivity.events.onhover.enable || s.interactivity.events.onclick.enable) && (s.interactivity.el.addEventListener("mousemove", function(t) {
            if (s.interactivity.el == window)
                var i = t.clientX
                  , n = t.clientY;
            else
                i = t.offsetX || t.clientX,
                n = t.offsetY || t.clientY;
            s.interactivity.mouse.pos_x = i,
            s.interactivity.mouse.pos_y = n,
            s.tmp.retina && (s.interactivity.mouse.pos_x *= s.canvas.pxratio,
            s.interactivity.mouse.pos_y *= s.canvas.pxratio),
            s.interactivity.status = "mousemove"
        }),
        s.interactivity.el.addEventListener("mouseleave", function(t) {
            s.interactivity.mouse.pos_x = null,
            s.interactivity.mouse.pos_y = null,
            s.interactivity.status = "mouseleave"
        })),
        s.interactivity.events.onclick.enable && s.interactivity.el.addEventListener("click", function() {
            if (s.interactivity.mouse.click_pos_x = s.interactivity.mouse.pos_x,
            s.interactivity.mouse.click_pos_y = s.interactivity.mouse.pos_y,
            s.interactivity.mouse.click_time = (new Date).getTime(),
            s.interactivity.events.onclick.enable)
                switch (s.interactivity.events.onclick.mode) {
                case "push":
                    s.particles.move.enable || 1 == s.interactivity.modes.push.particles_nb ? s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb, s.interactivity.mouse) : s.interactivity.modes.push.particles_nb > 1 && s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb);
                    break;
                case "remove":
                    s.fn.modes.removeParticles(s.interactivity.modes.remove.particles_nb);
                    break;
                case "bubble":
                    s.tmp.bubble_clicking = !0;
                    break;
                case "repulse":
                    s.tmp.repulse_clicking = !0,
                    s.tmp.repulse_count = 0,
                    s.tmp.repulse_finish = !1,
                    setTimeout(function() {
                        s.tmp.repulse_clicking = !1
                    }, 1e3 * s.interactivity.modes.repulse.duration)
                }
        })
    }
    ,
    s.fn.vendors.densityAutoParticles = function() {
        if (s.particles.number.density.enable) {
            var t = s.canvas.el.width * s.canvas.el.height / 1e3;
            s.tmp.retina && (t /= 2 * s.canvas.pxratio);
            var i = t * s.particles.number.value / s.particles.number.density.value_area
              , n = s.particles.array.length - i;
            0 > n ? s.fn.modes.pushParticles(Math.abs(n)) : s.fn.modes.removeParticles(n)
        }
    }
    ,
    s.fn.vendors.checkOverlap = function(t, i) {
        for (var n = 0; n < s.particles.array.length; n++) {
            var r = s.particles.array[n]
              , o = t.x - r.x
              , a = t.y - r.y;
            Math.sqrt(o * o + a * a) <= t.radius + r.radius && (t.x = i ? i.x : Math.random() * s.canvas.w,
            t.y = i ? i.y : Math.random() * s.canvas.h,
            s.fn.vendors.checkOverlap(t))
        }
    }
    ,
    s.fn.vendors.createSvgImg = function(t) {
        var i = s.tmp.source_svg.replace(/([0-9A-F]{3,6})/gi, function(i, n, s, r) {
            if (t.color.rgb)
                var o = "rgba(" + t.color.rgb.r + "," + t.color.rgb.g + "," + t.color.rgb.b + "," + t.opacity + ")";
            else
                o = "hsla(" + t.color.hsl.h + "," + t.color.hsl.s + "%," + t.color.hsl.l + "%," + t.opacity + ")";
            return o
        })
          , n = new Blob([i],{
            type: "image/svg+xml;charset=utf-8"
        })
          , r = window.URL || window.webkitURL || window
          , o = r.createObjectURL(n)
          , a = new Image;
        a.addEventListener("load", function() {
            t.img.obj = a,
            t.img.loaded = !0,
            r.revokeObjectURL(o),
            s.tmp.count_svg++
        }),
        a.src = o
    }
    ,
    s.fn.vendors.destroypJS = function() {
        cancelAnimationFrame(s.fn.drawAnimFrame),
        n.remove(),
        pJSDom = null
    }
    ,
    s.fn.vendors.drawShape = function(t, i, n, s, r, o) {
        var a = r * o
          , l = r / o
          , c = Math.PI - Math.PI * (180 * (l - 2) / l) / 180;
        t.save(),
        t.beginPath(),
        t.translate(i, n),
        t.moveTo(0, 0);
        for (var u = 0; a > u; u++)
            t.lineTo(s, 0),
            t.translate(s, 0),
            t.rotate(c);
        t.fill(),
        t.restore()
    }
    ,
    s.fn.vendors.exportImg = function() {
        window.open(s.canvas.el.toDataURL("image/png"), "_blank")
    }
    ,
    s.fn.vendors.loadImg = function(t) {
        if (s.tmp.img_error = void 0,
        "" != s.particles.shape.image.src) {
            if ("svg" == t) {
                var i = new XMLHttpRequest;
                i.open("GET", s.particles.shape.image.src),
                i.onreadystatechange = function(t) {
                    4 == i.readyState && (200 == i.status ? (s.tmp.source_svg = t.currentTarget.response,
                    s.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"),
                    s.tmp.img_error = !0))
                }
                ,
                i.send()
            } else {
                var n = new Image;
                n.addEventListener("load", function() {
                    s.tmp.img_obj = n,
                    s.fn.vendors.checkBeforeDraw()
                }),
                n.src = s.particles.shape.image.src
            }
        } else
            console.log("Error pJS - No image.src"),
            s.tmp.img_error = !0
    }
    ,
    s.fn.vendors.draw = function() {
        "image" == s.particles.shape.type ? "svg" == s.tmp.img_type ? s.tmp.count_svg >= s.particles.number.value ? (s.fn.particlesDraw(),
        s.particles.move.enable ? s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw) : cancelRequestAnimFrame(s.fn.drawAnimFrame)) : s.tmp.img_error || (s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw)) : null != s.tmp.img_obj ? (s.fn.particlesDraw(),
        s.particles.move.enable ? s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw) : cancelRequestAnimFrame(s.fn.drawAnimFrame)) : s.tmp.img_error || (s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw)) : (s.fn.particlesDraw(),
        s.particles.move.enable ? s.fn.drawAnimFrame = requestAnimFrame(s.fn.vendors.draw) : cancelRequestAnimFrame(s.fn.drawAnimFrame))
    }
    ,
    s.fn.vendors.checkBeforeDraw = function() {
        "image" == s.particles.shape.type ? "svg" == s.tmp.img_type && null == s.tmp.source_svg ? s.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(s.tmp.checkAnimFrame),
        s.tmp.img_error || (s.fn.vendors.init(),
        s.fn.vendors.draw())) : (s.fn.vendors.init(),
        s.fn.vendors.draw())
    }
    ,
    s.fn.vendors.init = function() {
        s.fn.retinaInit(),
        s.fn.canvasInit(),
        s.fn.canvasSize(),
        s.fn.canvasPaint(),
        s.fn.particlesCreate(),
        s.fn.vendors.densityAutoParticles(),
        s.particles.line_linked.color_rgb_line = hexToRgb(s.particles.line_linked.color)
    }
    ,
    s.fn.vendors.start = function() {
        isInArray("image", s.particles.shape.type) ? (s.tmp.img_type = s.particles.shape.image.src.substr(s.particles.shape.image.src.length - 3),
        s.fn.vendors.loadImg(s.tmp.img_type)) : s.fn.vendors.checkBeforeDraw()
    }
    ,
    s.fn.vendors.eventsListeners(),
    s.fn.vendors.start()
};
Object.deepExtend = function(t, i) {
    for (var n in i)
        i[n] && i[n].constructor && i[n].constructor === Object ? (t[n] = t[n] || {},
        arguments.callee(t[n], i[n])) : t[n] = i[n];
    return t
}
,
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
    window.setTimeout(t, 1e3 / 60)
}
,
window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
window.pJSDom = [],
window.particlesJS = function(t, i) {
    "string" != typeof t && (i = t,
    t = "particles-js"),
    t || (t = "particles-js");
    var n = document.getElementById(t)
      , s = "particles-js-canvas-el"
      , r = n.getElementsByClassName(s);
    if (r.length)
        for (; r.length > 0; )
            n.removeChild(r[0]);
    var o = document.createElement("canvas");
    o.className = s,
    o.style.width = "100%",
    o.style.height = "100%",
    null != document.getElementById(t).appendChild(o) && pJSDom.push(new pJS(t,i))
}
,
window.particlesJS.load = function(t, i, n) {
    var s = new XMLHttpRequest;
    s.open("GET", i),
    s.onreadystatechange = function(i) {
        if (4 == s.readyState) {
            if (200 == s.status) {
                var r = JSON.parse(i.currentTarget.response);
                window.particlesJS(t, r),
                n && n()
            } else
                console.log("Error pJS - XMLHttpRequest status: " + s.status),
                console.log("Error pJS - File config not found")
        }
    }
    ,
    s.send()
}
,
particlesJS("particles-js", {
    particles: {
        number: {
            value: 49,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#fff"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .3,
            random: !1,
            anim: {
                enable: !1,
                speed: 3,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 5,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#888",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "repulse"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0,
    config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
    }
}),
particlesJS("particles-vs", {
    particles: {
        number: {
            value: 49,
            density: {
                enable: !0,
                value_area: 800
            }
        },
        color: {
            value: "#fff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#fff"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: .3,
            random: !1,
            anim: {
                enable: !1,
                speed: 3,
                opacity_min: .1,
                sync: !1
            }
        },
        size: {
            value: 5,
            random: !0,
            anim: {
                enable: !1,
                speed: 40,
                size_min: .1,
                sync: !1
            }
        },
        line_linked: {
            enable: !0,
            distance: 150,
            color: "#888",
            opacity: .4,
            width: 1
        },
        move: {
            enable: !0,
            speed: 6,
            direction: "none",
            random: !1,
            straight: !1,
            out_mode: "out",
            attract: {
                enable: !1,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !0,
                mode: "repulse"
            },
            onclick: {
                enable: !0,
                mode: "push"
            },
            resize: !0
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: !0,
    config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover"
    }
}),
(e = "function" == typeof define && define.amd ? define : function(t, i) {
    "undefined" != typeof module && module.exports ? module.exports = i(require("jquery")) : window.toastr = i(window.jQuery)
}
)(["jquery"], function(t) {
    return function() {
        function i(i, n) {
            var s;
            return i || (i = o()),
            (l = t("#" + i.containerId)).length || n && (l = (s = i,
            (l = t("<div/>").attr("id", s.containerId).addClass(s.positionClass)).appendTo(t(s.target)),
            l)),
            l
        }
        function n(i, n, s) {
            var r = !(!s || !s.force) && s.force;
            return !(!i || !r && 0 !== t(":focus", i).length || (i[n.hideMethod]({
                duration: n.hideDuration,
                easing: n.hideEasing,
                complete: function() {
                    a(i)
                }
            }),
            0))
        }
        function s(t) {
            c && c(t)
        }
        function r(n) {
            function r(t) {
                return null == t && (t = ""),
                t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            function c(i) {
                var n = i && !1 !== d.closeMethod ? d.closeMethod : d.hideMethod
                  , r = i && !1 !== d.closeDuration ? d.closeDuration : d.hideDuration
                  , o = i && !1 !== d.closeEasing ? d.closeEasing : d.hideEasing;
                if (!t(":focus", g).length || i)
                    return clearTimeout($.intervalId),
                    g[n]({
                        duration: r,
                        easing: o,
                        complete: function() {
                            a(g),
                            clearTimeout(f),
                            d.onHidden && "hidden" !== x.state && d.onHidden(),
                            x.state = "hidden",
                            x.endTime = new Date,
                            s(x)
                        }
                    })
            }
            var d = o()
              , p = n.iconClass || d.iconClass;
            if (void 0 !== n.optionsOverride && (d = t.extend(d, n.optionsOverride),
            p = n.optionsOverride.iconClass || p),
            !function(t, i) {
                if (t.preventDuplicates) {
                    if (i.message === u)
                        return !0;
                    u = i.message
                }
                return !1
            }(d, n)) {
                h++,
                l = i(d, !0);
                var f = null
                  , g = t("<div/>")
                  , m = t("<div/>")
                  , v = t("<div/>")
                  , y = t("<div/>")
                  , b = t(d.closeHtml)
                  , $ = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                }
                  , x = {
                    toastId: h,
                    state: "visible",
                    startTime: new Date,
                    options: d,
                    map: n
                };
                return n.iconClass && g.addClass(d.toastClass).addClass(p),
                function() {
                    if (n.title) {
                        var t = n.title;
                        d.escapeHtml && (t = r(n.title)),
                        m.append(t).addClass(d.titleClass),
                        g.append(m)
                    }
                }(),
                function() {
                    if (n.message) {
                        var t = n.message;
                        d.escapeHtml && (t = r(n.message)),
                        v.append(t).addClass(d.messageClass),
                        g.append(v)
                    }
                }(),
                d.closeButton && (b.addClass(d.closeClass).attr("role", "button"),
                g.prepend(b)),
                d.progressBar && (y.addClass(d.progressClass),
                g.prepend(y)),
                d.rtl && g.addClass("rtl"),
                d.newestOnTop ? l.prepend(g) : l.append(g),
                function() {
                    var t = "";
                    switch (n.iconClass) {
                    case "toast-success":
                    case "toast-info":
                        t = "polite";
                        break;
                    default:
                        t = "assertive"
                    }
                    g.attr("aria-live", t)
                }(),
                g.hide(),
                g[d.showMethod]({
                    duration: d.showDuration,
                    easing: d.showEasing,
                    complete: d.onShown
                }),
                d.timeOut > 0 && (f = setTimeout(c, d.timeOut),
                $.maxHideTime = parseFloat(d.timeOut),
                $.hideEta = (new Date).getTime() + $.maxHideTime,
                d.progressBar && ($.intervalId = setInterval(function() {
                    var t = ($.hideEta - (new Date).getTime()) / $.maxHideTime * 100;
                    y.width(t + "%")
                }, 10))),
                d.closeOnHover && g.hover(function() {
                    clearTimeout(f),
                    $.hideEta = 0,
                    g.stop(!0, !0)[d.showMethod]({
                        duration: d.showDuration,
                        easing: d.showEasing
                    })
                }, function() {
                    (d.timeOut > 0 || d.extendedTimeOut > 0) && (f = setTimeout(c, d.extendedTimeOut),
                    $.maxHideTime = parseFloat(d.extendedTimeOut),
                    $.hideEta = (new Date).getTime() + $.maxHideTime)
                }),
                !d.onclick && d.tapToDismiss && g.click(c),
                d.closeButton && b && b.click(function(t) {
                    t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0),
                    d.onCloseClick && d.onCloseClick(t),
                    c(!0)
                }),
                d.onclick && g.click(function(t) {
                    d.onclick(t),
                    c()
                }),
                s(x),
                d.debug && console && console.log(x),
                g
            }
        }
        function o() {
            return t.extend({}, {
                tapToDismiss: !0,
                toastClass: "toast",
                containerId: "toast-container",
                debug: !1,
                showMethod: "fadeIn",
                showDuration: 700,
                showEasing: "swing",
                onShown: void 0,
                hideMethod: "fadeOut",
                hideDuration: 700,
                hideEasing: "swing",
                onHidden: void 0,
                closeMethod: !1,
                closeDuration: !1,
                closeEasing: !1,
                closeOnHover: !0,
                extendedTimeOut: 1e4,
                iconClasses: {
                    error: "toast-error",
                    info: "toast-info",
                    success: "toast-success",
                    warning: "toast-warning"
                },
                iconClass: "toast-info",
                positionClass: "toast-top-right",
                timeOut: 1e4,
                titleClass: "toast-title",
                messageClass: "toast-message",
                escapeHtml: !1,
                target: "body",
                closeHtml: '<button type="button">&times;</button>',
                closeClass: "toast-close-button",
                newestOnTop: !0,
                preventDuplicates: !1,
                progressBar: !1,
                progressClass: "toast-progress",
                rtl: !1
            }, d.options)
        }
        function a(t) {
            l || (l = i()),
            t.is(":visible") || (t.remove(),
            t = null,
            0 === l.children().length && (l.remove(),
            u = void 0))
        }
        var l, c, u, h = 0, d = {
            clear: function(s, r) {
                var a = o();
                l || i(a),
                n(s, a, r) || function i(s) {
                    for (var r = l.children(), o = r.length - 1; o >= 0; o--)
                        n(t(r[o]), s)
                }(a)
            },
            remove: function(n) {
                var s = o();
                return l || i(s),
                n && 0 === t(":focus", n).length ? void a(n) : void (l.children().length && l.remove())
            },
            error: function(t, i, n) {
                return r({
                    type: "error",
                    iconClass: o().iconClasses.error,
                    message: t,
                    optionsOverride: n,
                    title: i
                })
            },
            getContainer: i,
            info: function(t, i, n) {
                return r({
                    type: "info",
                    iconClass: o().iconClasses.info,
                    message: t,
                    optionsOverride: n,
                    title: i
                })
            },
            options: {},
            subscribe: function(t) {
                c = t
            },
            success: function(t, i, n) {
                return r({
                    type: "success",
                    iconClass: o().iconClasses.success,
                    message: t,
                    optionsOverride: n,
                    title: i
                })
            },
            version: "2.1.3",
            warning: function(t, i, n) {
                return r({
                    type: "warning",
                    iconClass: o().iconClasses.warning,
                    message: t,
                    optionsOverride: n,
                    title: i
                })
            }
        };
        return d
    }()
});
