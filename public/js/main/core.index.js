/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "1.12.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1,
                    f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {},
                    g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a)
                    return k.call(a, b);
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h)
                    return h.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            n.isFunction(a) ? (c = e.call(arguments, 2),
            d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }
            ,
            d.guid = a.guid = a.guid || n.guid++,
            d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (n.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            if (f = d.getElementById(e[2]),
            f && f.parentNode) {
                if (f.id !== e[2])
                    return A.find(a);
                this.length = 1,
                this[0] = f
            }
            return this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || (e = n.uniqueSort(e)),
            D.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = !0,
                c || j.disable(),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K),
        a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K),
        a.detachEvent("onload", K))
    }
    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(),
        n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(),
            "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll)
                a.setTimeout(n.ready);
            else if (d.addEventListener)
                d.addEventListener("DOMContentLoaded", K),
                a.addEventListener("load", K);
            else {
                d.attachEvent("onreadystatechange", K),
                a.attachEvent("onload", K);
                var c = !1;
                try {
                    c = null == a.frameElement && d.documentElement
                } catch (e) {}
                c && c.doScroll && !function f() {
                    if (!n.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (b) {
                            return a.setTimeout(f, 50)
                        }
                        J(),
                        n.ready()
                    }
                }()
            }
        return I.promise(b)
    }
    ,
    n.ready.promise();
    var L;
    for (L in n(l))
        break;
    l.ownFirst = "0" === L,
    l.inlineBlockNeedsLayout = !1,
    n(function() {
        var a, b, c, e;
        c = d.getElementsByTagName("body")[0],
        c && c.style && (b = d.createElement("div"),
        e = d.createElement("div"),
        e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(e).appendChild(b),
        "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(e))
    }),
    function() {
        var a = d.createElement("div");
        l.deleteExpando = !0;
        try {
            delete a.test
        } catch (b) {
            l.deleteExpando = !1
        }
        a = null
    }();
    var M = function(a) {
        var b = n.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
      , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , O = /([A-Z])/g;
    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else
                c = void 0;
        }
        return c
    }
    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando, i = a.nodeType, j = i ? n.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || n.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: n.noop
                }),
                "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[n.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[n.camelCase(b)])) : f = g,
                f
        }
    }
    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType, g = f ? n.cache : a, h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando],
            !!a && !Q(a)
        },
        data: function(a, b, c) {
            return R(a, b, c)
        },
        removeData: function(a, b) {
            return S(a, b)
        },
        _data: function(a, b, c) {
            return R(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return S(a, b, !0)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = n.data(f),
                1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        P(f, d, e[d])));
                    n._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                n.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                n.data(this, a, b)
            }) : f ? P(f, a, n.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                n.removeData(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = n._data(a, b),
            c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return n._data(a, c) || n._data(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    n._removeData(a, b + "queue"),
                    n._removeData(a, c)
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = n._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    }),
    function() {
        var a;
        l.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, e;
            return c = d.getElementsByTagName("body")[0],
            c && c.style ? (b = d.createElement("div"),
            e = d.createElement("div"),
            e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(e).appendChild(b),
            "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(d.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(e),
            a) : void 0
        }
    }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$","i")
      , V = ["Top", "Right", "Bottom", "Left"]
      , W = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function X(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var Y = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                Y(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , Z = /^(?:checkbox|radio)$/i
      , $ = /<([\w:-]+)/
      , _ = /^$|\/(?:java|ecma)script/i
      , aa = /^\s+/
      , ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    function ca(a) {
        var b = ba.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    !function() {
        var a = d.createElement("div")
          , b = d.createDocumentFragment()
          , c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        l.leadingWhitespace = 3 === a.firstChild.nodeType,
        l.tbody = !a.getElementsByTagName("tbody").length,
        l.htmlSerialize = !!a.getElementsByTagName("link").length,
        l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML,
        c.type = "checkbox",
        c.checked = !0,
        b.appendChild(c),
        l.appendChecked = c.checked,
        a.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue,
        b.appendChild(a),
        c = d.createElement("input"),
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        a.appendChild(c),
        l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked,
        l.noCloneEvent = !!a.addEventListener,
        a[n.expando] = 1,
        l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option,
    da.tbody = da.tfoot = da.colgroup = da.caption = da.thead,
    da.th = da.td;
    function ea(a, b) {
        var c, d, e = 0, f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }
    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/
      , ha = /<tbody/i;
    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }
    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r],
            g || 0 === g)
                if ("object" === n.type(g))
                    n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
                    i = i || p.appendChild(b.createElement("div")),
                    j = ($.exec(g) || ["", ""])[1].toLowerCase(),
                    m = da[j] || da._default,
                    i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2],
                    f = m[0];
                    while (f--)
                        i = i.lastChild;
                    if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])),
                    !l.tbody) {
                        g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild,
                        f = g && g.childNodes.length;
                        while (f--)
                            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
                    }
                    n.merge(q, i.childNodes),
                    i.textContent = "";
                    while (i.firstChild)
                        i.removeChild(i.firstChild);
                    i = p.lastChild
                } else
                    q.push(b.createTextNode(g));
        i && p.removeChild(i),
        l.appendChecked || n.grep(ea(q, "input"), ia),
        r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1)
                e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g),
            i = ea(p.appendChild(g), "script"),
            h && fa(i),
            c) {
                f = 0;
                while (g = i[f++])
                    _.test(g.type || "") && c.push(g)
            }
        return i = null,
        p
    }
    !function() {
        var b, c, e = d.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (l[b] = c in a) || (e.setAttribute(c, "t"),
            l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i
      , la = /^key/
      , ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , na = /^(?:focusinfocus|focusoutblur)$/
      , oa = /^([^.]*)(?:\.(.+)|)/;
    function pa() {
        return !0
    }
    function qa() {
        return !1
    }
    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = qa;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = n.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(G) || [""],
                h = b.length;
                while (h--)
                    f = oa.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = n.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = n.event.special[o] || {},
                    l = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (m = g[o]) || (m = g[o] = [],
                    m.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, l) : m.push(l),
                    n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = m.length;
                        while (f--)
                            g = m[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1),
                            g.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle,
                n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            h = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            l = n.event.special[q] || {},
            f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q,
                    na.test(j + q) || (i = i.parentNode); i; i = i.parentNode)
                        p.push(i),
                        m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped())
                    b.type = o > 1 ? j : l.bindType || q,
                    g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"),
                    g && g.apply(i, c),
                    g = h && i[h],
                    g && g.apply && M(i) && (b.result = g.apply(i, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = q,
                !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h],
                    m && (e[h] = null),
                    n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0,
                    m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (n._data(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = g.srcElement || d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button, h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d,
                f = e.documentElement,
                c = e.body,
                a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b),
            d.isDefaultPrevented() && c.preventDefault()
        }
    },
    n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null),
        a.detachEvent(d, c))
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa,
            a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }),
                n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble,
            this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }),
    l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }),
            n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1),
                n.event.simulate("change", this, a)
            })),
            !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }),
                n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"),
            !ka.test(this.nodeName)
        }
    }),
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b);
                e || d.addEventListener(a, c, !0),
                n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0),
                n._removeData(d, b))
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = qa),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g
      , ua = new RegExp("<(?:" + ba + ")[\\s/>]","i")
      , va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , wa = /<script|<style|<link/i
      , xa = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ya = /^true\/(.*)/
      , za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Aa = ca(d)
      , Ba = Aa.appendChild(d.createElement("div"));
    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a), g = n._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }
    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events)
                    n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text,
            Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }
    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                Ha(f, b, c, d)
            });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d),
        e = k.firstChild,
        1 === k.childNodes.length && (k = e),
        e || d)) {
            for (i = n.map(ea(k, "script"), Da),
            h = i.length; o > m; m++)
                g = k,
                m !== p && (g = n.clone(g, !0, !0),
                h && n.merge(i, ea(g, "script"))),
                c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument,
                n.map(i, Ea),
                m = 0; h > m; m++)
                    g = i[m],
                    _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }
    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(ea(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML,
            Ba.removeChild(f = Ba.firstChild)),
            !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f),
                h = ea(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a),
                    d = d || ea(f),
                    g = 0; null != (e = h[g]); g++)
                        Fa(e, d[g]);
                else
                    Fa(a, f);
            return d = ea(f, "script"),
            d.length > 0 && fa(d, !i && ea(a, "script")),
            d = h = e = null,
            f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i),
                    c.push(f))
                }
        }
    }),
    n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(ea(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                n(f[d])[b](c),
                g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };
    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function Ma(a) {
        var b = d
          , c = Ka[a];
        return c || (c = La(a, b),
        "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Ja[0].contentWindow || Ja[0].contentDocument).document,
        b.write(),
        b.close(),
        c = La(a, b),
        Ja.detach()),
        Ka[a] = c),
        c
    }
    var Na = /^margin/
      , Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$","i")
      , Pa = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Qa = d.documentElement;
    !function() {
        var b, c, e, f, g, h, i = d.createElement("div"), j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5",
            l.opacity = "0.5" === j.style.opacity,
            l.cssFloat = !!j.style.cssFloat,
            j.style.backgroundClip = "content-box",
            j.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === j.style.backgroundClip,
            i = d.createElement("div"),
            i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            j.innerHTML = "",
            i.appendChild(j),
            l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing,
            n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(),
                    f
                },
                boxSizingReliable: function() {
                    return null == b && k(),
                    e
                },
                pixelMarginRight: function() {
                    return null == b && k(),
                    c
                },
                pixelPosition: function() {
                    return null == b && k(),
                    b
                },
                reliableMarginRight: function() {
                    return null == b && k(),
                    g
                },
                reliableMarginLeft: function() {
                    return null == b && k(),
                    h
                }
            });
            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i),
                j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                b = e = h = !1,
                c = g = !0,
                a.getComputedStyle && (l = a.getComputedStyle(j),
                b = "1%" !== (l || {}).top,
                h = "2px" === (l || {}).marginLeft,
                e = "4px" === (l || {
                    width: "4px"
                }).width,
                j.style.marginRight = "50%",
                c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight,
                k = j.appendChild(d.createElement("div")),
                k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                k.style.marginRight = k.style.width = "0",
                j.style.width = "1px",
                g = !parseFloat((a.getComputedStyle(k) || {}).marginRight),
                j.removeChild(k)),
                j.style.display = "none",
                f = 0 === j.getClientRects().length,
                f && (j.style.display = "",
                j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                j.childNodes[0].style.borderCollapse = "separate",
                k = j.getElementsByTagName("td"),
                k[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                f = 0 === k[0].offsetHeight,
                f && (k[0].style.display = "",
                k[1].style.display = "none",
                f = 0 === k[0].offsetHeight)),
                m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 === g ? g : g + ""
    }
    ) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }
    ,
    Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Oa.test(g) && !Ta.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i
      , Wa = /opacity\s*=\s*([^)]*)/i
      , Xa = /^(none|table(?!-c[ea]).+)/
      , Ya = new RegExp("^(" + T + ")(.*)$","i")
      , Za = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , $a = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _a = ["Webkit", "O", "Moz", "ms"]
      , ab = d.createElement("div").style;
    function bb(a) {
        if (a in ab)
            return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1)
          , c = _a.length;
        while (c--)
            if (a = _a[c] + b,
            a in ab)
                return a
    }
    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = n._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d),
            (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + V[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }
    function fb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ra(a)
          , g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Oa.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
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
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Sa(a, b, d)),
            "normal" === f && b in $a && (f = $a[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }),
    n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }),
    n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Na.test(a) || (n.cssHooks[a + b].set = db)
    }),
    n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a,b,c,d,e)
    }
    n.Tween = gb,
    gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : gb.propHooks._default.set(this),
            this
        }
    },
    gb.prototype.init.prototype = gb.prototype,
    gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = gb.prototype.init,
    n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/, kb = /queueHooks$/;
    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }),
        hb = n.now()
    }
    function mb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = V[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this, o = {}, p = a.style, q = a.nodeType && W(a), r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        m.always(function() {
            m.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            jb.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(o))
            "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = n._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? n(a).show() : m.done(function() {
                n(a).hide()
            }),
            m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o)
                    n.style(a, b, o[b])
            });
            for (d in o)
                g = nb(q ? r[d] : 0, d, m),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function qb(a, b, c) {
        var d, e, f = 0, g = qb.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: hb || lb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, nb, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return X(c.elem, a, U.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                qb.tweeners[c] = qb.tweeners[c] || [],
                qb.tweeners[c].unshift(b)
        },
        prefilters: [ob],
        prefilter: function(a, b) {
            b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(W).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = qb(this, n.extend({}, a), f);
                (e || n._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = n._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && kb.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = n._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: mb("show"),
        slideUp: mb("hide"),
        slideToggle: mb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = n.timers, c = 0;
        for (hb = n.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || n.fx.stop(),
        hb = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(ib),
        ib = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a, b = d.createElement("input"), c = d.createElement("div"), e = d.createElement("select"), f = e.appendChild(d.createElement("option"));
        c = d.createElement("div"),
        c.setAttribute("className", "t"),
        c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        a = c.getElementsByTagName("a")[0],
        b.setAttribute("type", "checkbox"),
        c.appendChild(b),
        a = c.getElementsByTagName("a")[0],
        a.style.cssText = "top:1px",
        l.getSetAttribute = "t" !== c.className,
        l.style = /top/.test(a.getAttribute("style")),
        l.hrefNormalized = "/a" === a.getAttribute("href"),
        l.checkOn = !!b.value,
        l.optSelected = f.selected,
        l.enctype = !!d.createElement("form").enctype,
        e.disabled = !0,
        l.optDisabled = !f.disabled,
        b = d.createElement("input"),
        b.setAttribute("value", ""),
        l.input = "" === b.getAttribute("value"),
        b.value = "t",
        b.setAttribute("type", "radio"),
        l.radioValue = "t" === b.value
    }();
    var rb = /\r/g
      , sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        n.inArray(n.valHooks.option.get(d), f) > -1)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var tb, ub, vb = n.expr.attrHandle, wb = /^(?:checked|selected)$/i, xb = l.getSetAttribute, yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""),
                    a.removeAttribute(xb ? c : d)
        }
    }),
    ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b],
            vb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            vb[b] = f),
            e
        }
        : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void (a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }),
    xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    },
    n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    },
    n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i
      , Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }),
    l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;
    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, Cb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, Cb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = Cb(this),
                    b && n._data(this, "__className__", b),
                    n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location
      , Eb = n.now()
      , Fb = /\?/
      , Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null, e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }
    ,
    n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null;
        try {
            a.DOMParser ? (d = new a.DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var Hb = /#.*$/
      , Ib = /([?&])_=[^&]*/
      , Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Lb = /^(?:GET|HEAD)$/
      , Mb = /^\/\//
      , Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Ob = {}
      , Pb = {}
      , Qb = "*/".concat("*")
      , Rb = Db.href
      , Sb = Nb.exec(Rb.toLowerCase()) || [];
    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Ub(a, b, c, d) {
        var e = {}
          , f = a === Pb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c),
        a
    }
    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
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
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c), m = l.context || l, o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event, p = n.Deferred(), q = n.Callbacks("once memory"), r = l.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!k) {
                            k = {};
                            while (b = Jb.exec(g))
                                k[b[1].toLowerCase()] = b[2]
                        }
                        b = k[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a,
                    s[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return u || (l.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > u)
                            for (b in a)
                                r[b] = [r[b], a[b]];
                        else
                            w.always(a[w.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || v;
                    return j && j.abort(b),
                    y(0, b),
                    this
                }
            };
            if (p.promise(w).complete = q.add,
            w.success = w.done,
            w.error = w.fail,
            l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"),
            l.type = c.method || c.type || l.method || l.type,
            l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""],
            null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()),
            l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))),
            l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)),
            Ub(Ob, l, c, w),
            2 === u)
                return w;
            i = n.event && l.global,
            i && 0 === n.active++ && n.event.trigger("ajaxStart"),
            l.type = l.type.toUpperCase(),
            l.hasContent = !Lb.test(l.type),
            f = l.url,
            l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data,
            delete l.data),
            l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)),
            l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])),
            (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType),
            w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers)
                w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u))
                return w.abort();
            v = "abort";
            for (e in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1,
                i && o.trigger("ajaxSend", [w, l]),
                2 === u)
                    return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1,
                    j.send(s, y)
                } catch (x) {
                    if (!(2 > u))
                        throw x;
                    y(-1, x)
                }
            } else
                y(-1, "No Transport");
            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2,
                h && a.clearTimeout(h),
                j = void 0,
                g = e || "",
                w.readyState = b > 0 ? 4 : 0,
                k = b >= 200 && 300 > b || 304 === b,
                d && (v = Wb(l, w, d)),
                v = Xb(l, v, w, k),
                k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (n.lastModified[f] = x),
                x = w.getResponseHeader("etag"),
                x && (n.etag[f] = x)),
                204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state,
                s = v.data,
                t = v.error,
                k = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                w.status = b,
                w.statusText = (c || y) + "",
                k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]),
                w.statusCode(r),
                r = void 0,
                i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]),
                q.fireWith(m, [w, y]),
                i && (o.trigger("ajaxComplete", [w, l]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }
    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a))
            return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type)
                return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    }
    ;
    var $b = /%20/g
      , _b = /\[\]$/
      , ac = /\r?\n/g
      , bc = /^(?:submit|button|image|reset|file)$/i
      , cc = /^(?:input|select|textarea|keygen)/i;
    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    }
    : hc;
    var ec = 0
      , fc = {}
      , gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc)
            fc[a](void 0, !0)
    }),
    l.cors = !!gc && "withCredentials"in gc,
    gc = l.ajax = !!gc,
    gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(), h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password),
                    b.xhrFields)
                        for (f in b.xhrFields)
                            g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType),
                    b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d)
                        void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null),
                    c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h],
                            c = void 0,
                            g.onreadystatechange = n.noop,
                            d)
                                4 !== g.readyState && g.abort();
                            else {
                                j = {},
                                f = g.status,
                                "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }
                    ,
                    b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });
    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null,
                        c || f(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = []
      , kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            jc.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc)
            return lc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()),
                c = mc(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (c = a.offset()),
                c.top += n.css(a[0], "borderTopWidth", !0),
                c.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Qa
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b),
            Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    n.fn.size = function() {
        return this.length
    }
    ,
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery
      , oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc),
        b && a.jQuery === n && (a.jQuery = nc),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});

jQuery,
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        var t = {
            mode: "lg-slide",
            cssEasing: "ease",
            easing: "linear",
            speed: 600,
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            ariaLabelledby: "",
            ariaDescribedby: "",
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: !1,
            iframeMaxWidth: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1,
            supportLegacyBrowser: !0
        };
        function o(o, i) {
            if (this.el = o,
            this.$el = e(o),
            this.s = e.extend({}, t, i),
            this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length)
                throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return this.modules = {},
            this.lGalleryOn = !1,
            this.lgBusy = !1,
            this.hideBarTimeout = !1,
            this.isTouch = "ontouchstart"in document.documentElement,
            this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
            this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = e(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(e(this.s.selector)) : this.$items = this.$el.children(),
            this.$slide = "",
            this.$outer = "",
            this.init(),
            this
        }
        o.prototype.init = function() {
            var t = this;
            t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
            var o = window.location.hash;
            0 < o.indexOf("lg=" + this.s.galleryId) && (t.index = parseInt(o.split("&slide=")[1], 10),
            e("body").addClass("lg-from-hash"),
            e("body").hasClass("lg-on") || (setTimeout((function() {
                t.build(t.index)
            }
            )),
            e("body").addClass("lg-on"))),
            t.s.dynamic ? (t.$el.trigger("onBeforeOpen.lg"),
            t.index = t.s.index || 0,
            e("body").hasClass("lg-on") || setTimeout((function() {
                t.build(t.index),
                e("body").addClass("lg-on")
            }
            ))) : t.$items.on("click.lgcustom", (function(o) {
                try {
                    o.preventDefault(),
                    o.preventDefault()
                } catch (e) {
                    o.returnValue = !1
                }
                t.$el.trigger("onBeforeOpen.lg"),
                t.index = t.s.index || t.$items.index(this),
                e("body").hasClass("lg-on") || (t.build(t.index),
                e("body").addClass("lg-on"))
            }
            ))
        }
        ,
        o.prototype.build = function(t) {
            var o = this;
            o.structure(),
            e.each(e.fn.lightGallery.modules, (function(t) {
                o.modules[t] = new e.fn.lightGallery.modules[t](o.el)
            }
            )),
            o.slide(t, !1, !1, !1),
            o.s.keyPress && o.keyPress(),
            1 < o.$items.length ? (o.arrow(),
            setTimeout((function() {
                o.enableDrag(),
                o.enableSwipe()
            }
            ), 50),
            o.s.mousewheel && o.mousewheel()) : o.$slide.on("click.lg", (function() {
                o.$el.trigger("onSlideClick.lg")
            }
            )),
            o.counter(),
            o.closeGallery(),
            o.$el.trigger("onAfterOpen.lg"),
            0 < o.s.hideBarsDelay && o.$outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                o.$outer.removeClass("lg-hide-items"),
                clearTimeout(o.hideBarTimeout),
                o.hideBarTimeout = setTimeout((function() {
                    o.$outer.addClass("lg-hide-items")
                }
                ), o.s.hideBarsDelay)
            }
            )),
            o.$outer.trigger("mousemove.lg")
        }
        ,
        o.prototype.structure = function() {
            var t = ""
              , o = ""
              , i = 0
              , s = ""
              , l = this;
            for (e("body").append('<div class="lg-backdrop"></div>'),
            e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"),
            i = 0; i < this.$items.length; i++)
                t += '<div class="lg-item"></div>';
            this.s.controls && 1 < this.$items.length && (o = '<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"),
            ".lg-sub-html" === this.s.appendSubHtmlTo && (s = '<div role="status" aria-live="polite" class="lg-sub-html"></div>');
            s = '<div tabindex="-1" aria-modal="true" ' + (this.s.ariaLabelledby ? 'aria-labelledby="' + this.s.ariaLabelledby + '"' : "") + " " + (this.s.ariaDescribedby ? 'aria-describedby="' + this.s.ariaDescribedby + '"' : "") + ' role="dialog" class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + t + '</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>' + o + s + "</div></div>";
            e("body").append(s),
            this.$outer = e(".lg-outer"),
            this.$outer.focus(),
            this.$slide = this.$outer.find(".lg-item"),
            this.s.useLeft ? (this.$outer.addClass("lg-use-left"),
            this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"),
            l.setTop(),
            e(window).on("resize.lg orientationchange.lg", (function() {
                setTimeout((function() {
                    l.setTop()
                }
                ), 100)
            }
            )),
            this.$slide.eq(this.index).addClass("lg-current"),
            this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"),
            this.s.speed = 0),
            this.$outer.addClass(this.s.mode),
            this.s.enableDrag && 1 < this.$items.length && this.$outer.addClass("lg-grab"),
            this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
            this.doCss() && ((s = this.$outer.find(".lg-inner")).css("transition-timing-function", this.s.cssEasing),
            s.css("transition-duration", this.s.speed + "ms")),
            setTimeout((function() {
                e(".lg-backdrop").addClass("in")
            }
            )),
            setTimeout((function() {
                l.$outer.addClass("lg-visible")
            }
            ), this.s.backdropDuration),
            this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),
            this.prevScrollTop = e(window).scrollTop()
        }
        ,
        o.prototype.setTop = function() {
            var t, o, i;
            "100%" !== this.s.height && (o = ((t = e(window).height()) - parseInt(this.s.height, 10)) / 2,
            i = this.$outer.find(".lg"),
            t >= parseInt(this.s.height, 10) ? i.css("top", o + "px") : i.css("top", "0px"))
        }
        ,
        o.prototype.doCss = function() {
            return !!function() {
                var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"]
                  , t = document.documentElement
                  , o = 0;
                for (o = 0; o < e.length; o++)
                    if (e[o]in t.style)
                        return !0
            }()
        }
        ,
        o.prototype.isVideo = function(e, t) {
            var o = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html");
            if (!e)
                return o ? {
                    html5: !0
                } : (console.error("lightGallery :- data-src is not provided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),
                !1);
            var i = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
            o = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
            t = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
            e = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
            return i ? {
                youtube: i
            } : o ? {
                vimeo: o
            } : t ? {
                dailymotion: t
            } : e ? {
                vk: e
            } : void 0
        }
        ,
        o.prototype.counter = function() {
            this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }
        ,
        o.prototype.addHtml = function(t) {
            var o, i, s, l = null;
            this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? o = this.s.dynamicEl[t].subHtmlUrl : l = this.s.dynamicEl[t].subHtml : (i = this.$items.eq(t)).attr("data-sub-html-url") ? o = i.attr("data-sub-html-url") : (l = i.attr("data-sub-html"),
            this.s.getCaptionFromTitleOrAlt && !l && (l = i.attr("title") || i.find("img").first().attr("alt"))),
            o || (null != l ? "." !== (s = l.substring(0, 1)) && "#" !== s || (l = (this.s.subHtmlSelectorRelative && !this.s.dynamic ? i.find(l) : e(l)).html()) : l = ""),
            ".lg-sub-html" === this.s.appendSubHtmlTo ? o ? this.$outer.find(this.s.appendSubHtmlTo).load(o) : this.$outer.find(this.s.appendSubHtmlTo).html(l) : o ? this.$slide.eq(t).load(o) : this.$slide.eq(t).append(l),
            null != l && ("" === l ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),
            this.$el.trigger("onAfterAppendSubHtml.lg", [t])
        }
        ,
        o.prototype.preload = function(e) {
            var t = 1
              , o = 1;
            for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++)
                this.loadContent(e + t, !1, 0);
            for (o = 1; o <= this.s.preload && !(e - o < 0); o++)
                this.loadContent(e - o, !1, 0)
        }
        ,
        o.prototype.loadContent = function(t, o, i) {
            var s, l, r, a, n, d, c = this, u = !1, h = function(t) {
                for (var o = [], i = [], s = 0; s < t.length; s++) {
                    var r = t[s].split(" ");
                    "" === r[0] && r.splice(0, 1),
                    i.push(r[0]),
                    o.push(r[1])
                }
                for (var a = e(window).width(), n = 0; n < o.length; n++)
                    if (parseInt(o[n], 10) > a) {
                        l = i[n];
                        break
                    }
            }, g = c.s.dynamic ? (c.s.dynamicEl[t].poster && (u = !0,
            r = c.s.dynamicEl[t].poster),
            n = c.s.dynamicEl[t].html,
            l = c.s.dynamicEl[t].src,
            d = c.s.dynamicEl[t].alt,
            c.s.dynamicEl[t].responsive && h(c.s.dynamicEl[t].responsive.split(",")),
            a = c.s.dynamicEl[t].srcset,
            c.s.dynamicEl[t].sizes) : ((m = c.$items.eq(t)).attr("data-poster") && (u = !0,
            r = m.attr("data-poster")),
            n = m.attr("data-html"),
            l = m.attr("href") || m.attr("data-src"),
            d = m.attr("title") || m.find("img").first().attr("alt"),
            m.attr("data-responsive") && h(m.attr("data-responsive").split(",")),
            a = m.attr("data-srcset"),
            m.attr("data-sizes"));
            h = !1;
            c.s.dynamic ? c.s.dynamicEl[t].iframe && (h = !0) : "true" === c.$items.eq(t).attr("data-iframe") && (h = !0);
            var m = c.isVideo(l, t);
            if (!c.$slide.eq(t).hasClass("lg-loaded")) {
                if (h ? c.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + l + '"  allowfullscreen="true"></iframe></div></div>') : u ? (h = "",
                h = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5",
                c.$slide.eq(t).prepend('<div class="lg-video-cont ' + h + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + r + '" /></div></div>')) : m ? (c.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),
                c.$el.trigger("hasVideo.lg", [t, l, n])) : (d = d ? 'alt="' + d + '"' : "",
                c.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" ' + d + ' src="' + l + '" /></div>')),
                c.$el.trigger("onAferAppendSlide.lg", [t]),
                s = c.$slide.eq(t).find(".lg-object"),
                g && s.attr("sizes", g),
                a && (s.attr("srcset", a),
                this.s.supportLegacyBrowser))
                    try {
                        picturefill({
                            elements: [s[0]]
                        })
                    } catch (o) {
                        console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                    }
                ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t),
                c.$slide.eq(t).addClass("lg-loaded")
            }
            c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", (function() {
                var o = 0;
                i && !e("body").hasClass("lg-from-hash") && (o = i),
                setTimeout((function() {
                    c.$slide.eq(t).addClass("lg-complete"),
                    c.$el.trigger("onSlideItemLoad.lg", [t, i || 0])
                }
                ), o)
            }
            )),
            m && m.html5 && !u && c.$slide.eq(t).addClass("lg-complete"),
            !0 === o && (c.$slide.eq(t).hasClass("lg-complete") ? c.preload(t) : c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", (function() {
                c.preload(t)
            }
            )))
        }
        ,
        o.prototype.slide = function(t, o, i, s) {
            var l, r, a, n, d, c = this.$outer.find(".lg-current").index(), u = this;
            u.lGalleryOn && c === t || (l = this.$slide.length,
            r = u.lGalleryOn ? this.s.speed : 0,
            u.lgBusy || (this.s.download && ((a = u.s.dynamic ? !1 !== u.s.dynamicEl[t].downloadUrl && (u.s.dynamicEl[t].downloadUrl || u.s.dynamicEl[t].src) : "false" !== u.$items.eq(t).attr("data-download-url") && (u.$items.eq(t).attr("data-download-url") || u.$items.eq(t).attr("href") || u.$items.eq(t).attr("data-src"))) ? (e("#lg-download").attr("href", a),
            u.$outer.removeClass("lg-hide-download")) : u.$outer.addClass("lg-hide-download")),
            this.$el.trigger("onBeforeSlide.lg", [c, t, o, i]),
            u.lgBusy = !0,
            clearTimeout(u.hideBarTimeout),
            ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout((function() {
                u.addHtml(t)
            }
            ), r),
            this.arrowDisable(t),
            s || (t < c ? s = "prev" : c < t && (s = "next")),
            o ? (this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"),
            2 < l ? (n = t - 1,
            d = t + 1,
            (0 === t && c === l - 1 || t === l - 1 && 0 === c) && (d = 0,
            n = l - 1)) : (n = 0,
            d = 1),
            "prev" === s ? u.$slide.eq(d).addClass("lg-next-slide") : u.$slide.eq(n).addClass("lg-prev-slide"),
            u.$slide.eq(t).addClass("lg-current")) : (u.$outer.addClass("lg-no-trans"),
            this.$slide.removeClass("lg-prev-slide lg-next-slide"),
            "prev" === s ? (this.$slide.eq(t).addClass("lg-prev-slide"),
            this.$slide.eq(c).addClass("lg-next-slide")) : (this.$slide.eq(t).addClass("lg-next-slide"),
            this.$slide.eq(c).addClass("lg-prev-slide")),
            setTimeout((function() {
                u.$slide.removeClass("lg-current"),
                u.$slide.eq(t).addClass("lg-current"),
                u.$outer.removeClass("lg-no-trans")
            }
            ), 50)),
            u.lGalleryOn ? (setTimeout((function() {
                u.loadContent(t, !0, 0)
            }
            ), this.s.speed + 50),
            setTimeout((function() {
                u.lgBusy = !1,
                u.$el.trigger("onAfterSlide.lg", [c, t, o, i])
            }
            ), this.s.speed)) : (u.loadContent(t, !0, u.s.backdropDuration),
            u.lgBusy = !1,
            u.$el.trigger("onAfterSlide.lg", [c, t, o, i])),
            u.lGalleryOn = !0,
            this.s.counter && e("#lg-counter-current").text(t + 1)),
            u.index = t)
        }
        ,
        o.prototype.goToNextSlide = function(e) {
            var t = this
              , o = t.s.loop;
            e && t.$slide.length < 3 && (o = !1),
            t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++,
            t.$el.trigger("onBeforeNextSlide.lg", [t.index]),
            t.slide(t.index, e, !1, "next")) : o ? (t.index = 0,
            t.$el.trigger("onBeforeNextSlide.lg", [t.index]),
            t.slide(t.index, e, !1, "next")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-right-end"),
            setTimeout((function() {
                t.$outer.removeClass("lg-right-end")
            }
            ), 400)))
        }
        ,
        o.prototype.goToPrevSlide = function(e) {
            var t = this
              , o = t.s.loop;
            e && t.$slide.length < 3 && (o = !1),
            t.lgBusy || (0 < t.index ? (t.index--,
            t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]),
            t.slide(t.index, e, !1, "prev")) : o ? (t.index = t.$items.length - 1,
            t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]),
            t.slide(t.index, e, !1, "prev")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-left-end"),
            setTimeout((function() {
                t.$outer.removeClass("lg-left-end")
            }
            ), 400)))
        }
        ,
        o.prototype.keyPress = function() {
            var t = this;
            1 < this.$items.length && e(window).on("keyup.lg", (function(e) {
                1 < t.$items.length && (37 === e.keyCode && (e.preventDefault(),
                t.goToPrevSlide()),
                39 === e.keyCode && (e.preventDefault(),
                t.goToNextSlide()))
            }
            )),
            e(window).on("keydown.lg", (function(e) {
                !0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(),
                t.$outer.hasClass("lg-thumb-open") ? t.$outer.removeClass("lg-thumb-open") : t.destroy())
            }
            ))
        }
        ,
        o.prototype.arrow = function() {
            var e = this;
            this.$outer.find(".lg-prev").on("click.lg", (function() {
                e.goToPrevSlide()
            }
            )),
            this.$outer.find(".lg-next").on("click.lg", (function() {
                e.goToNextSlide()
            }
            ))
        }
        ,
        o.prototype.arrowDisable = function(e) {
            !this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"),
            0 < e ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
        }
        ,
        o.prototype.setTranslate = function(e, t, o) {
            this.s.useLeft ? e.css("left", t) : e.css({
                transform: "translate3d(" + t + "px, " + o + "px, 0px)"
            })
        }
        ,
        o.prototype.touchMove = function(t, o) {
            t = o - t,
            15 < Math.abs(t) && (this.$outer.addClass("lg-dragging"),
            this.setTranslate(this.$slide.eq(this.index), t, 0),
            this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + t, 0),
            this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + t, 0))
        }
        ,
        o.prototype.touchEnd = function(e) {
            var t = this;
            "lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"),
            this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"),
            setTimeout((function() {
                t.$outer.removeClass("lg-dragging"),
                e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : 0 < e && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"),
                t.$slide.removeAttr("style")
            }
            )),
            setTimeout((function() {
                t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
            }
            ), t.s.speed + 100)
        }
        ,
        o.prototype.enableSwipe = function() {
            var e = this
              , t = 0
              , o = 0
              , i = !1;
            e.s.enableSwipe && e.doCss() && (e.$slide.on("touchstart.lg", (function(o) {
                e.$outer.hasClass("lg-zoomed") || e.lgBusy || (o.preventDefault(),
                e.manageSwipeClass(),
                t = o.originalEvent.targetTouches[0].pageX)
            }
            )),
            e.$slide.on("touchmove.lg", (function(s) {
                e.$outer.hasClass("lg-zoomed") || (s.preventDefault(),
                o = s.originalEvent.targetTouches[0].pageX,
                e.touchMove(t, o),
                i = !0)
            }
            )),
            e.$slide.on("touchend.lg", (function() {
                e.$outer.hasClass("lg-zoomed") || (i ? (i = !1,
                e.touchEnd(o - t)) : e.$el.trigger("onSlideClick.lg"))
            }
            )))
        }
        ,
        o.prototype.enableDrag = function() {
            var t = this
              , o = 0
              , i = 0
              , s = !1
              , l = !1;
            t.s.enableDrag && t.doCss() && (t.$slide.on("mousedown.lg", (function(i) {
                t.$outer.hasClass("lg-zoomed") || t.lgBusy || e(i.target).text().trim() || (i.preventDefault(),
                t.manageSwipeClass(),
                o = i.pageX,
                s = !0,
                t.$outer.scrollLeft += 1,
                --t.$outer.scrollLeft,
                t.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
                t.$el.trigger("onDragstart.lg"))
            }
            )),
            e(window).on("mousemove.lg", (function(e) {
                s && (l = !0,
                i = e.pageX,
                t.touchMove(o, i),
                t.$el.trigger("onDragmove.lg"))
            }
            )),
            e(window).on("mouseup.lg", (function(r) {
                l ? (l = !1,
                t.touchEnd(i - o),
                t.$el.trigger("onDragend.lg")) : (e(r.target).hasClass("lg-object") || e(r.target).hasClass("lg-video-play")) && t.$el.trigger("onSlideClick.lg"),
                s && (s = !1,
                t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
            }
            )))
        }
        ,
        o.prototype.manageSwipeClass = function() {
            var e = this.index + 1
              , t = this.index - 1;
            this.s.loop && 2 < this.$slide.length && (0 === this.index ? t = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (e = 0)),
            this.$slide.removeClass("lg-next-slide lg-prev-slide"),
            -1 < t && this.$slide.eq(t).addClass("lg-prev-slide"),
            this.$slide.eq(e).addClass("lg-next-slide")
        }
        ,
        o.prototype.mousewheel = function() {
            var e = this;
            e.$outer.on("mousewheel.lg", (function(t) {
                t.deltaY && (0 < t.deltaY ? e.goToPrevSlide() : e.goToNextSlide(),
                t.preventDefault())
            }
            ))
        }
        ,
        o.prototype.closeGallery = function() {
            var t = this
              , o = !1;
            this.$outer.find(".lg-close").on("click.lg", (function() {
                t.destroy()
            }
            )),
            t.s.closable && (t.$outer.on("mousedown.lg", (function(t) {
                o = !!(e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap"))
            }
            )),
            t.$outer.on("mousemove.lg", (function() {
                o = !1
            }
            )),
            t.$outer.on("mouseup.lg", (function(i) {
                (e(i.target).is(".lg-outer") || e(i.target).is(".lg-item ") || e(i.target).is(".lg-img-wrap") && o) && (t.$outer.hasClass("lg-dragging") || t.destroy())
            }
            )))
        }
        ,
        o.prototype.destroy = function(t) {
            var o = this;
            t || (o.$el.trigger("onBeforeClose.lg"),
            e(window).scrollTop(o.prevScrollTop)),
            t && (o.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            e.removeData(o.el, "lightGallery")),
            this.$el.off(".lg.tm"),
            e.each(e.fn.lightGallery.modules, (function(e) {
                o.modules[e] && o.modules[e].destroy()
            }
            )),
            this.lGalleryOn = !1,
            clearTimeout(o.hideBarTimeout),
            this.hideBarTimeout = !1,
            e(window).off(".lg"),
            e("body").removeClass("lg-on lg-from-hash"),
            o.$outer && o.$outer.removeClass("lg-visible"),
            e(".lg-backdrop").removeClass("in"),
            setTimeout((function() {
                o.$outer && o.$outer.remove(),
                e(".lg-backdrop").remove(),
                t || o.$el.trigger("onCloseAfter.lg"),
                o.$el.focus()
            }
            ), o.s.backdropDuration + 50)
        }
        ,
        e.fn.lightGallery = function(t) {
            return this.each((function() {
                if (e.data(this, "lightGallery"))
                    try {
                        e(this).data("lightGallery").init()
                    } catch (e) {
                        console.error("lightGallery has not initiated properly", e)
                    }
                else
                    e.data(this, "lightGallery", new o(this,t))
            }
            ))
        }
        ,
        e.fn.lightGallery.modules = {}
    }()
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.$el = e(t),
            !(this.core.$items.length < 2) && (this.core.s = e.extend({}, o, this.core.s),
            this.interval = !1,
            this.fromAuto = !0,
            this.canceledOnTouch = !1,
            this.fourceAutoplayTemp = this.core.s.fourceAutoplay,
            this.core.doCss() || (this.core.s.progressBar = !1),
            this.init(),
            this)
        }
        var o = {
            autoplay: !1,
            pause: 5e3,
            progressBar: !0,
            fourceAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar"
        };
        t.prototype.init = function() {
            var e = this;
            e.core.s.autoplayControls && e.controls(),
            e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'),
            e.progress(),
            e.core.s.autoplay && e.$el.one("onSlideItemLoad.lg.tm", (function() {
                e.startlAuto()
            }
            )),
            e.$el.on("onDragstart.lg.tm touchstart.lg.tm", (function() {
                e.interval && (e.cancelAuto(),
                e.canceledOnTouch = !0)
            }
            )),
            e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", (function() {
                !e.interval && e.canceledOnTouch && (e.startlAuto(),
                e.canceledOnTouch = !1)
            }
            ))
        }
        ,
        t.prototype.progress = function() {
            var e, t, o = this;
            o.$el.on("onBeforeSlide.lg.tm", (function() {
                o.core.s.progressBar && o.fromAuto && (e = o.core.$outer.find(".lg-progress-bar"),
                t = o.core.$outer.find(".lg-progress"),
                o.interval && (t.removeAttr("style"),
                e.removeClass("lg-start"),
                setTimeout((function() {
                    t.css("transition", "width " + (o.core.s.speed + o.core.s.pause) + "ms ease 0s"),
                    e.addClass("lg-start")
                }
                ), 20))),
                o.fromAuto || o.core.s.fourceAutoplay || o.cancelAuto(),
                o.fromAuto = !1
            }
            ))
        }
        ,
        t.prototype.controls = function() {
            var t = this;
            e(this.core.s.appendAutoplayControlsTo).append('<button type="button" aria-label="Toggle autoplay" class="lg-autoplay-button lg-icon"></button>'),
            t.core.$outer.find(".lg-autoplay-button").on("click.lg", (function() {
                e(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(),
                t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(),
                t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
            }
            ))
        }
        ,
        t.prototype.startlAuto = function() {
            var e = this;
            e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"),
            e.core.$outer.addClass("lg-show-autoplay"),
            e.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            e.interval = setInterval((function() {
                e.core.index + 1 < e.core.$items.length ? e.core.index++ : e.core.index = 0,
                e.fromAuto = !0,
                e.core.slide(e.core.index, !1, !1, "next")
            }
            ), e.core.s.speed + e.core.s.pause)
        }
        ,
        t.prototype.cancelAuto = function() {
            clearInterval(this.interval),
            this.interval = !1,
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
        }
        ,
        t.prototype.destroy = function() {
            this.cancelAuto(),
            this.core.$outer.find(".lg-progress-bar").remove()
        }
        ,
        e.fn.lightGallery.modules.autoplay = t
    }()
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        var t = {
            fullScreen: !0
        };
        function o() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
        }
        function i(o) {
            return this.core = e(o).data("lightGallery"),
            this.$el = e(o),
            this.core.s = e.extend({}, t, this.core.s),
            this.init(),
            this
        }
        i.prototype.init = function() {
            this.core.s.fullScreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && (this.core.$outer.find(".lg-toolbar").append('<button type="button" aria-label="Toggle fullscreen" class="lg-fullscreen lg-icon"></button>'),
            this.fullScreen())
        }
        ,
        i.prototype.requestFullscreen = function() {
            var e = document.documentElement;
            e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
        }
        ,
        i.prototype.exitFullscreen = function() {
            document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }
        ,
        i.prototype.fullScreen = function() {
            var t = this;
            e(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", (function() {
                t.core.$outer.toggleClass("lg-fullscreen-on")
            }
            )),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", (function() {
                o() ? t.exitFullscreen() : t.requestFullscreen()
            }
            ))
        }
        ,
        i.prototype.destroy = function() {
            o() && this.exitFullscreen(),
            e(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
        }
        ,
        e.fn.lightGallery.modules.fullscreen = i
    }()
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.$el = e(t),
            this.core.s = e.extend({}, o, this.core.s),
            this.core.s.pager && 1 < this.core.$items.length && this.init(),
            this
        }
        var o = {
            pager: !1
        };
        t.prototype.init = function() {
            var t, o, i, s = this, l = "";
            if (s.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'),
            s.core.s.dynamic)
                for (var r = 0; r < s.core.s.dynamicEl.length; r++)
                    l += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + s.core.s.dynamicEl[r].thumb + '" /></div></span>';
            else
                s.core.$items.each((function() {
                    s.core.s.exThumbImage ? l += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).attr(s.core.s.exThumbImage) + '" /></div></span>' : l += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).find("img").attr("src") + '" /></div></span>'
                }
                ));
            (o = s.core.$outer.find(".lg-pager-outer")).html(l),
            (t = s.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg", (function() {
                var t = e(this);
                s.core.index = t.index(),
                s.core.slide(s.core.index, !1, !0, !1)
            }
            )),
            o.on("mouseover.lg", (function() {
                clearTimeout(i),
                o.addClass("lg-pager-hover")
            }
            )),
            o.on("mouseout.lg", (function() {
                i = setTimeout((function() {
                    o.removeClass("lg-pager-hover")
                }
                ))
            }
            )),
            s.core.$el.on("onBeforeSlide.lg.tm", (function(e, o, i) {
                t.removeClass("lg-pager-active"),
                t.eq(i).addClass("lg-pager-active")
            }
            ))
        }
        ,
        t.prototype.destroy = function() {}
        ,
        e.fn.lightGallery.modules.pager = t
    }()
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.core.s = e.extend({}, o, this.core.s),
            this.$el = e(t),
            this.$thumbOuter = null,
            this.thumbOuterWidth = 0,
            this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin),
            this.thumbIndex = this.core.index,
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            this.left = 0,
            this.init(),
            this
        }
        var o = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbContHeight: 100,
            thumbMargin: 5,
            exThumbImage: !1,
            showThumbByDefault: !0,
            toogleThumb: !0,
            pullCaptionUp: !0,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            swipeThreshold: 50,
            loadYoutubeThumbnail: !0,
            youtubeThumbSize: 1,
            loadVimeoThumbnail: !0,
            vimeoThumbSize: "thumbnail_small",
            loadDailymotionThumbnail: !0
        };
        t.prototype.init = function() {
            var e = this;
            this.core.s.thumbnail && 1 < this.core.$items.length && (this.core.s.showThumbByDefault && setTimeout((function() {
                e.core.$outer.addClass("lg-thumb-open")
            }
            ), 700),
            this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"),
            this.build(),
            this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
            this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
            this.thumbClickable = !1) : this.thumbClickable = !0,
            this.toogle(),
            this.thumbkeyPress())
        }
        ,
        t.prototype.build = function() {
            var t, o = this, i = "", s = "";
            switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
                s = "640";
                break;
            case "thumbnail_medium":
                s = "200x150";
                break;
            case "thumbnail_small":
                s = "100x75"
            }
            function l(e, t, l) {
                var r;
                e = o.core.isVideo(e, l) || {},
                l = "";
                e.youtube || e.vimeo || e.dailymotion ? e.youtube ? r = o.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + e.youtube[1] + "/" + o.core.s.youtubeThumbSize + ".jpg" : t : e.vimeo ? o.core.s.loadVimeoThumbnail ? (r = "//i.vimeocdn.com/video/error_" + s + ".jpg",
                l = e.vimeo[1]) : r = t : e.dailymotion && (r = o.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + e.dailymotion[1] : t) : r = t,
                i += '<div data-vimeo-id="' + l + '" class="lg-thumb-item" style="width:' + o.core.s.thumbWidth + "px; height: " + o.core.s.thumbHeight + "; margin-right: " + o.core.s.thumbMargin + 'px"><img src="' + r + '" /></div>',
                l = ""
            }
            if (o.core.$outer.addClass("lg-has-thumb"),
            o.core.$outer.find(".lg").append('<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'),
            o.$thumbOuter = o.core.$outer.find(".lg-thumb-outer"),
            o.thumbOuterWidth = o.$thumbOuter.width(),
            o.core.s.animateThumb && o.core.$outer.find(".lg-thumb").css({
                width: o.thumbTotalWidth + "px",
                position: "relative"
            }),
            this.core.s.animateThumb && o.$thumbOuter.css("height", o.core.s.thumbContHeight + "px"),
            o.core.s.dynamic)
                for (var r = 0; r < o.core.s.dynamicEl.length; r++)
                    l(o.core.s.dynamicEl[r].src, o.core.s.dynamicEl[r].thumb, r);
            else
                o.core.$items.each((function(t) {
                    o.core.s.exThumbImage ? l(e(this).attr("href") || e(this).attr("data-src"), e(this).attr(o.core.s.exThumbImage), t) : l(e(this).attr("href") || e(this).attr("data-src"), e(this).find("img").attr("src"), t)
                }
                ));
            o.core.$outer.find(".lg-thumb").html(i),
            (t = o.core.$outer.find(".lg-thumb-item")).each((function() {
                var t = e(this)
                  , i = t.attr("data-vimeo-id");
                i && e.getJSON("//www.vimeo.com/api/v2/video/" + i + ".json?callback=?", {
                    format: "json"
                }, (function(e) {
                    t.find("img").attr("src", e[0][o.core.s.vimeoThumbSize])
                }
                ))
            }
            )),
            t.eq(o.core.index).addClass("active"),
            o.core.$el.on("onBeforeSlide.lg.tm", (function() {
                t.removeClass("active"),
                t.eq(o.core.index).addClass("active")
            }
            )),
            t.on("click.lg touchend.lg", (function() {
                var t = e(this);
                setTimeout((function() {
                    (!o.thumbClickable || o.core.lgBusy) && o.core.doCss() || (o.core.index = t.index(),
                    o.core.slide(o.core.index, !1, !0, !1))
                }
                ), 50)
            }
            )),
            o.core.$el.on("onBeforeSlide.lg.tm", (function() {
                o.animateThumb(o.core.index)
            }
            )),
            e(window).on("resize.lg.thumb orientationchange.lg.thumb", (function() {
                setTimeout((function() {
                    o.animateThumb(o.core.index),
                    o.thumbOuterWidth = o.$thumbOuter.width()
                }
                ), 200)
            }
            ))
        }
        ,
        t.prototype.setTranslate = function(e) {
            this.core.$outer.find(".lg-thumb").css({
                transform: "translate3d(-" + e + "px, 0px, 0px)"
            })
        }
        ,
        t.prototype.animateThumb = function(e) {
            var t, o = this.core.$outer.find(".lg-thumb");
            if (this.core.s.animateThumb) {
                switch (this.core.s.currentPagerPosition) {
                case "left":
                    t = 0;
                    break;
                case "middle":
                    t = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                    break;
                case "right":
                    t = this.thumbOuterWidth - this.core.s.thumbWidth
                }
                this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - t,
                this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
                this.left < 0 && (this.left = 0),
                this.core.lGalleryOn ? (o.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"),
                this.core.doCss() || o.animate({
                    left: -this.left + "px"
                }, this.core.s.speed)) : this.core.doCss() || o.css("left", -this.left + "px"),
                this.setTranslate(this.left)
            }
        }
        ,
        t.prototype.enableThumbDrag = function() {
            var t = this
              , o = 0
              , i = 0
              , s = !1
              , l = !1
              , r = 0;
            t.$thumbOuter.addClass("lg-grab"),
            t.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", (function(e) {
                t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(),
                o = e.pageX,
                s = !0,
                t.core.$outer.scrollLeft += 1,
                --t.core.$outer.scrollLeft,
                t.thumbClickable = !1,
                t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
            }
            )),
            e(window).on("mousemove.lg.thumb", (function(e) {
                s && (r = t.left,
                l = !0,
                i = e.pageX,
                t.$thumbOuter.addClass("lg-dragging"),
                (r -= i - o) > t.thumbTotalWidth - t.thumbOuterWidth && (r = t.thumbTotalWidth - t.thumbOuterWidth),
                r < 0 && (r = 0),
                t.setTranslate(r))
            }
            )),
            e(window).on("mouseup.lg.thumb", (function() {
                l ? (l = !1,
                t.$thumbOuter.removeClass("lg-dragging"),
                t.left = r,
                Math.abs(i - o) < t.core.s.swipeThreshold && (t.thumbClickable = !0)) : t.thumbClickable = !0,
                s && (s = !1,
                t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
            }
            ))
        }
        ,
        t.prototype.enableThumbSwipe = function() {
            var e = this
              , t = 0
              , o = 0
              , i = !1
              , s = 0;
            e.core.$outer.find(".lg-thumb").on("touchstart.lg", (function(o) {
                e.thumbTotalWidth > e.thumbOuterWidth && (o.preventDefault(),
                t = o.originalEvent.targetTouches[0].pageX,
                e.thumbClickable = !1)
            }
            )),
            e.core.$outer.find(".lg-thumb").on("touchmove.lg", (function(l) {
                e.thumbTotalWidth > e.thumbOuterWidth && (l.preventDefault(),
                o = l.originalEvent.targetTouches[0].pageX,
                i = !0,
                e.$thumbOuter.addClass("lg-dragging"),
                s = e.left,
                (s -= o - t) > e.thumbTotalWidth - e.thumbOuterWidth && (s = e.thumbTotalWidth - e.thumbOuterWidth),
                s < 0 && (s = 0),
                e.setTranslate(s))
            }
            )),
            e.core.$outer.find(".lg-thumb").on("touchend.lg", (function() {
                e.thumbTotalWidth > e.thumbOuterWidth && i ? (i = !1,
                e.$thumbOuter.removeClass("lg-dragging"),
                Math.abs(o - t) < e.core.s.swipeThreshold && (e.thumbClickable = !0),
                e.left = s) : e.thumbClickable = !0
            }
            ))
        }
        ,
        t.prototype.toogle = function() {
            var e = this;
            e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"),
            e.$thumbOuter.append('<button type="button" aria-label="Toggle thumbnails" class="lg-toogle-thumb lg-icon"></button>'),
            e.core.$outer.find(".lg-toogle-thumb").on("click.lg", (function() {
                e.core.$outer.toggleClass("lg-thumb-open")
            }
            )))
        }
        ,
        t.prototype.thumbkeyPress = function() {
            var t = this;
            e(window).on("keydown.lg.thumb", (function(e) {
                38 === e.keyCode ? (e.preventDefault(),
                t.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(),
                t.core.$outer.removeClass("lg-thumb-open"))
            }
            ))
        }
        ,
        t.prototype.destroy = function() {
            this.core.s.thumbnail && 1 < this.core.$items.length && (e(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"))
        }
        ,
        e.fn.lightGallery.modules.Thumbnail = t
    }()
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.$el = e(t),
            this.core.s = e.extend({}, o, this.core.s),
            this.videoLoaded = !1,
            this.init(),
            this
        }
        var o = {
            videoMaxWidth: "855px",
            autoplayFirstVideo: !0,
            youtubePlayerParams: !1,
            vimeoPlayerParams: !1,
            dailymotionPlayerParams: !1,
            vkPlayerParams: !1,
            videojs: !1,
            videojsOptions: {}
        };
        t.prototype.init = function() {
            var t = this;
            t.core.$el.on("hasVideo.lg.tm", function(e, t, o, i) {
                var s = this;
                if (s.core.$slide.eq(t).find(".lg-video").append(s.loadVideo(o, "lg-object", !0, t, i)),
                i)
                    if (s.core.s.videojs)
                        try {
                            videojs(s.core.$slide.eq(t).find(".lg-html5").get(0), s.core.s.videojsOptions, (function() {
                                !s.videoLoaded && s.core.s.autoplayFirstVideo && this.play()
                            }
                            ))
                        } catch (e) {
                            console.error("Make sure you have included videojs")
                        }
                    else
                        !s.videoLoaded && s.core.s.autoplayFirstVideo && s.core.$slide.eq(t).find(".lg-html5").get(0).play()
            }
            .bind(this)),
            t.core.$el.on("onAferAppendSlide.lg.tm", function(e, t) {
                (t = this.core.$slide.eq(t).find(".lg-video-cont")).hasClass("lg-has-iframe") || (t.css("max-width", this.core.s.videoMaxWidth),
                this.videoLoaded = !0)
            }
            .bind(this)),
            t.core.doCss() && 1 < t.core.$items.length && (t.core.s.enableSwipe || t.core.s.enableDrag) ? t.core.$el.on("onSlideClick.lg.tm", (function() {
                var e = t.core.$slide.eq(t.core.index);
                t.loadVideoOnclick(e)
            }
            )) : t.core.$slide.on("click.lg", (function() {
                t.loadVideoOnclick(e(this))
            }
            )),
            t.core.$el.on("onBeforeSlide.lg.tm", function(t, o, i) {
                var s = this
                  , l = s.core.$slide.eq(o)
                  , r = l.find(".lg-youtube").get(0)
                  , a = l.find(".lg-vimeo").get(0)
                  , n = l.find(".lg-dailymotion").get(0)
                  , d = (o = l.find(".lg-vk").get(0),
                l.find(".lg-html5").get(0));
                if (r)
                    r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                else if (a)
                    try {
                        $f(a).api("pause")
                    } catch (t) {
                        console.error("Make sure you have included froogaloop2 js")
                    }
                else if (n)
                    n.contentWindow.postMessage("pause", "*");
                else if (d)
                    if (s.core.s.videojs)
                        try {
                            videojs(d).pause()
                        } catch (t) {
                            console.error("Make sure you have included videojs")
                        }
                    else
                        d.pause();
                o && e(o).attr("src", e(o).attr("src").replace("&autoplay", "&noplay")),
                o = s.core.s.dynamic ? s.core.s.dynamicEl[i].src : s.core.$items.eq(i).attr("href") || s.core.$items.eq(i).attr("data-src"),
                ((i = s.core.isVideo(o, i) || {}).youtube || i.vimeo || i.dailymotion || i.vk) && s.core.$outer.addClass("lg-hide-download")
            }
            .bind(this)),
            t.core.$el.on("onAfterSlide.lg.tm", (function(e, o) {
                t.core.$slide.eq(o).removeClass("lg-video-playing")
            }
            )),
            t.core.s.autoplayFirstVideo && t.core.$el.on("onAferAppendSlide.lg.tm", (function(e, o) {
                var i;
                t.core.lGalleryOn || (i = t.core.$slide.eq(o),
                setTimeout((function() {
                    t.loadVideoOnclick(i)
                }
                ), 100))
            }
            ))
        }
        ,
        t.prototype.loadVideo = function(t, o, i, s, l) {
            var r = this
              , a = ""
              , n = 1
              , d = "";
            s = this.core.isVideo(t, s) || {};
            return r = (r = r.core.s.dynamic ? r.core.s.dynamicEl[r.core.index].title : r.core.$items.eq(r.core.index).attr("title") || r.core.$items.eq(r.core.index).find("img").first().attr("alt")) ? 'title="' + r + '"' : "",
            i && (n = !this.videoLoaded && this.core.s.autoplayFirstVideo ? 1 : 0),
            s.youtube ? (d = "?wmode=opaque&autoplay=" + n + "&enablejsapi=1",
            this.core.s.youtubePlayerParams && (d = d + "&" + e.param(this.core.s.youtubePlayerParams)),
            a = '<iframe class="lg-video-object lg-youtube ' + o + '" ' + r + ' width="560" height="315" src="//www.youtube.com/embed/' + s.youtube[1] + d + '" frameborder="0" allowfullscreen></iframe>') : s.vimeo ? (d = "?autoplay=" + n + "&api=1",
            this.core.s.vimeoPlayerParams && (d = d + "&" + e.param(this.core.s.vimeoPlayerParams)),
            a = '<iframe class="lg-video-object lg-vimeo ' + o + '" ' + r + ' width="560" height="315"  src="//player.vimeo.com/video/' + s.vimeo[1] + d + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') : s.dailymotion ? (d = "?wmode=opaque&autoplay=" + n + "&api=postMessage",
            this.core.s.dailymotionPlayerParams && (d = d + "&" + e.param(this.core.s.dailymotionPlayerParams)),
            a = '<iframe class="lg-video-object lg-dailymotion ' + o + '" ' + r + ' width="560" height="315" src="//www.dailymotion.com/embed/video/' + s.dailymotion[1] + d + '" frameborder="0" allowfullscreen></iframe>') : s.html5 ? ("." !== (i = l.substring(0, 1)) && "#" !== i || (l = e(l).html()),
            a = l) : s.vk && (d = "&autoplay=" + n,
            this.core.s.vkPlayerParams && (d = d + "&" + e.param(this.core.s.vkPlayerParams)),
            a = '<iframe class="lg-video-object lg-vk ' + o + '" ' + r + ' width="560" height="315" src="//vk.com/video_ext.php?' + s.vk[1] + d + '" frameborder="0" allowfullscreen></iframe>'),
            a
        }
        ,
        t.prototype.loadVideoOnclick = function(e) {
            var t = this;
            if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
                if (e.hasClass("lg-has-video")) {
                    var o = e.find(".lg-youtube").get(0)
                      , i = e.find(".lg-vimeo").get(0)
                      , s = e.find(".lg-dailymotion").get(0)
                      , l = e.find(".lg-html5").get(0);
                    if (o)
                        o.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                    else if (i)
                        try {
                            $f(i).api("play")
                        } catch (o) {
                            console.error("Make sure you have included froogaloop2 js")
                        }
                    else if (s)
                        s.contentWindow.postMessage("play", "*");
                    else if (l)
                        if (t.core.s.videojs)
                            try {
                                videojs(l).play()
                            } catch (o) {
                                console.error("Make sure you have included videojs")
                            }
                        else
                            l.play();
                    e.addClass("lg-video-playing")
                } else
                    e.addClass("lg-video-playing lg-has-video"),
                    s = function(o, i) {
                        if (e.find(".lg-video").append(t.loadVideo(o, "", !1, t.core.index, i)),
                        i)
                            if (t.core.s.videojs)
                                try {
                                    videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0), t.core.s.videojsOptions, (function() {
                                        this.play()
                                    }
                                    ))
                                } catch (o) {
                                    console.error("Make sure you have included videojs")
                                }
                            else
                                t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()
                    }
                    ,
                    t.core.s.dynamic ? s(t.core.s.dynamicEl[t.core.index].src, t.core.s.dynamicEl[t.core.index].html) : s(t.core.$items.eq(t.core.index).attr("href") || t.core.$items.eq(t.core.index).attr("data-src"), t.core.$items.eq(t.core.index).attr("data-html")),
                    s = e.find(".lg-object"),
                    e.find(".lg-video").append(s),
                    e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"),
                    e.find(".lg-video-object").on("load.lg error.lg", (function() {
                        e.addClass("lg-complete")
                    }
                    )))
        }
        ,
        t.prototype.destroy = function() {
            this.videoLoaded = !1
        }
        ,
        e.fn.lightGallery.modules.video = t
    }()
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.core.s = e.extend({}, s, this.core.s),
            this.core.s.zoom && this.core.doCss() && (this.init(),
            this.zoomabletimeout = !1,
            this.pageX = e(window).width() / 2,
            this.pageY = e(window).height() / 2 + e(window).scrollTop()),
            this
        }
        var o, i, s = {
            scale: 1,
            zoom: !0,
            actualSize: !0,
            enableZoomAfter: 300,
            useLeftForZoom: (o = !1,
            (i = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)) && parseInt(i[2], 10) < 54 && (o = !0),
            o)
        };
        t.prototype.init = function() {
            var t = this
              , o = '<button type="button" aria-label="Zoom in" id="lg-zoom-in" class="lg-icon"></button><button type="button" aria-label="Zoom out" id="lg-zoom-out" class="lg-icon"></button>';
            function i(o) {
                var i = t.core.$outer.find(".lg-current .lg-image")
                  , s = (e(window).width() - i.prop("offsetWidth")) / 2
                  , l = (e(window).height() - i.prop("offsetHeight")) / 2 + e(window).scrollTop();
                s = (o - 1) * (t.pageX - s),
                l = (o - 1) * (t.pageY - l);
                i.css("transform", "scale3d(" + o + ", " + o + ", 1)").attr("data-scale", o),
                (t.core.s.useLeftForZoom ? i.parent().css({
                    left: -s + "px",
                    top: -l + "px"
                }) : i.parent().css("transform", "translate3d(-" + s + "px, -" + l + "px, 0)")).attr("data-x", s).attr("data-y", l)
            }
            function s() {
                1 < r ? t.core.$outer.addClass("lg-zoomed") : t.resetZoom(),
                r < 1 && (r = 1),
                i(r)
            }
            function l(o, i, l, a) {
                var n = i.prop("offsetWidth");
                i = t.core.s.dynamic ? t.core.s.dynamicEl[l].width || i[0].naturalWidth || n : t.core.$items.eq(l).attr("data-width") || i[0].naturalWidth || n;
                t.core.$outer.hasClass("lg-zoomed") ? r = 1 : n < i && (r = i / n || 2),
                a ? (t.pageX = e(window).width() / 2,
                t.pageY = e(window).height() / 2 + e(window).scrollTop()) : (t.pageX = o.pageX || o.originalEvent.targetTouches[0].pageX,
                t.pageY = o.pageY || o.originalEvent.targetTouches[0].pageY),
                s(),
                setTimeout((function() {
                    t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }
                ), 10)
            }
            t.core.s.actualSize && (o += '<button type="button" aria-label="Actual size" id="lg-actual-size" class="lg-icon"></button>'),
            t.core.s.useLeftForZoom ? t.core.$outer.addClass("lg-use-left-for-zoom") : t.core.$outer.addClass("lg-use-transition-for-zoom"),
            this.core.$outer.find(".lg-toolbar").append(o),
            t.core.$el.on("onSlideItemLoad.lg.tm.zoom", (function(o, i, s) {
                var l = t.core.s.enableZoomAfter + s;
                e("body").hasClass("lg-from-hash") && s ? l = 0 : e("body").removeClass("lg-from-hash"),
                t.zoomabletimeout = setTimeout((function() {
                    t.core.$slide.eq(i).addClass("lg-zoomable")
                }
                ), l + 30)
            }
            ));
            var r = 1
              , a = !1;
            t.core.$el.on("onAferAppendSlide.lg.tm.zoom", (function(e, o) {
                var i = t.core.$slide.eq(o).find(".lg-image");
                i.on("dblclick", (function(e) {
                    l(e, i, o)
                }
                )),
                i.on("touchstart", (function(e) {
                    a ? (clearTimeout(a),
                    a = null,
                    l(e, i, o)) : a = setTimeout((function() {
                        a = null
                    }
                    ), 300),
                    e.preventDefault()
                }
                ))
            }
            )),
            e(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", (function() {
                t.pageX = e(window).width() / 2,
                t.pageY = e(window).height() / 2 + e(window).scrollTop(),
                i(r)
            }
            )),
            e("#lg-zoom-out").on("click.lg", (function() {
                t.core.$outer.find(".lg-current .lg-image").length && (r -= t.core.s.scale,
                s())
            }
            )),
            e("#lg-zoom-in").on("click.lg", (function() {
                t.core.$outer.find(".lg-current .lg-image").length && (r += t.core.s.scale,
                s())
            }
            )),
            e("#lg-actual-size").on("click.lg", (function(e) {
                l(e, t.core.$slide.eq(t.core.index).find(".lg-image"), t.core.index, !0)
            }
            )),
            t.core.$el.on("onBeforeSlide.lg.tm", (function() {
                r = 1,
                t.resetZoom()
            }
            )),
            t.zoomDrag(),
            t.zoomSwipe()
        }
        ,
        t.prototype.getCurrentTransform = function(e) {
            return e && "none" !== (e = (e = window.getComputedStyle(e, null)).getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform") || "none") ? e.split("(")[1].split(")")[0].split(",") : 0
        }
        ,
        t.prototype.getCurrentRotation = function(e) {
            return e && (e = this.getCurrentTransform(e)) ? Math.round(Math.atan2(e[1], e[0]) * (180 / Math.PI)) : 0
        }
        ,
        t.prototype.getModifier = function(e, t, o) {
            var i = e;
            e = Math.abs(e);
            var s = this.getCurrentTransform(o);
            if (!s)
                return 1;
            var l;
            o = 1;
            return "X" === t ? (l = Math.sign(parseFloat(s[0])),
            0 === e || 180 === e ? o = 1 : 90 === e && (o = -90 === i && 1 === l || 90 === i && -1 === l ? -1 : 1),
            o *= l) : (l = Math.sign(parseFloat(s[3])),
            0 === e || 180 === e ? o = 1 : 90 === e && (e = parseFloat(s[1]),
            s = parseFloat(s[2]),
            o = Math.sign(e * s * i * l)),
            o *= l),
            o
        }
        ,
        t.prototype.getImageSize = function(e, t, o) {
            return 90 === t && (o = "x" === o ? "y" : "x"),
            e.prop({
                y: "offsetHeight",
                x: "offsetWidth"
            }[o])
        }
        ,
        t.prototype.getDragCords = function(e, t) {
            return 90 === t ? {
                x: e.pageY,
                y: e.pageX
            } : {
                x: e.pageX,
                y: e.pageY
            }
        }
        ,
        t.prototype.getSwipeCords = function(e, t) {
            var o = e.originalEvent.targetTouches[0].pageX;
            e = e.originalEvent.targetTouches[0].pageY;
            return 90 === t ? {
                x: e,
                y: o
            } : {
                x: o,
                y: e
            }
        }
        ,
        t.prototype.getPossibleDragCords = function(e, t) {
            var o = (this.core.$outer.find(".lg").height() - this.getImageSize(e, t, "y")) / 2
              , i = Math.abs(this.getImageSize(e, t, "y") * Math.abs(e.attr("data-scale")) - this.core.$outer.find(".lg").height() + o)
              , s = (this.core.$outer.find(".lg").width() - this.getImageSize(e, t, "x")) / 2;
            e = Math.abs(this.getImageSize(e, t, "x") * Math.abs(e.attr("data-scale")) - this.core.$outer.find(".lg").width() + s);
            return 90 === t ? {
                minY: s,
                maxY: e,
                minX: o,
                maxX: i
            } : {
                minY: o,
                maxY: i,
                minX: s,
                maxX: e
            }
        }
        ,
        t.prototype.getDragAllowedAxises = function(e, t) {
            var o = this.getImageSize(e, t, "y") * e.attr("data-scale") > this.core.$outer.find(".lg").height();
            e = this.getImageSize(e, t, "x") * e.attr("data-scale") > this.core.$outer.find(".lg").width();
            return 90 === t ? {
                allowX: o,
                allowY: e
            } : {
                allowX: e,
                allowY: o
            }
        }
        ,
        t.prototype.resetZoom = function() {
            this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            this.pageX = e(window).width() / 2,
            this.pageY = e(window).height() / 2 + e(window).scrollTop()
        }
        ,
        t.prototype.zoomSwipe = function() {
            var e, t = this, o = {}, i = {}, s = !1, l = !1, r = !1, a = 0;
            t.core.$slide.on("touchstart.lg", (function(i) {
                var s;
                t.core.$outer.hasClass("lg-zoomed") && (s = t.core.$slide.eq(t.core.index).find(".lg-object"),
                e = t.core.$slide.eq(t.core.index).find(".lg-img-rotate")[0],
                a = t.getCurrentRotation(e),
                s = t.getDragAllowedAxises(s, Math.abs(a)),
                r = s.allowY,
                ((l = s.allowX) || r) && (i.preventDefault(),
                o = t.getSwipeCords(i, Math.abs(a))))
            }
            )),
            t.core.$slide.on("touchmove.lg", (function(n) {
                var d, c;
                t.core.$outer.hasClass("lg-zoomed") && (d = t.core.$slide.eq(t.core.index).find(".lg-img-wrap"),
                n.preventDefault(),
                s = !0,
                i = t.getSwipeCords(n, Math.abs(a)),
                t.core.$outer.addClass("lg-zoom-dragging"),
                c = r ? -Math.abs(d.attr("data-y")) + (i.y - o.y) * t.getModifier(a, "Y", e) : -Math.abs(d.attr("data-y")),
                n = l ? -Math.abs(d.attr("data-x")) + (i.x - o.x) * t.getModifier(a, "X", e) : -Math.abs(d.attr("data-x")),
                (15 < Math.abs(i.x - o.x) || 15 < Math.abs(i.y - o.y)) && (t.core.s.useLeftForZoom ? d.css({
                    left: n + "px",
                    top: c + "px"
                }) : d.css("transform", "translate3d(" + n + "px, " + c + "px, 0)")))
            }
            )),
            t.core.$slide.on("touchend.lg", (function() {
                t.core.$outer.hasClass("lg-zoomed") && s && (s = !1,
                t.core.$outer.removeClass("lg-zoom-dragging"),
                t.touchendZoom(o, i, l, r, a))
            }
            ))
        }
        ,
        t.prototype.zoomDrag = function() {
            var t, o = this, i = {}, s = {}, l = !1, r = !1, a = !1, n = !1, d = 0;
            o.core.$slide.on("mousedown.lg.zoom", (function(s) {
                t = o.core.$slide.eq(o.core.index).find(".lg-img-rotate")[0],
                d = o.getCurrentRotation(t);
                var r = o.core.$slide.eq(o.core.index).find(".lg-object");
                r = o.getDragAllowedAxises(r, Math.abs(d));
                n = r.allowY,
                a = r.allowX,
                o.core.$outer.hasClass("lg-zoomed") && e(s.target).hasClass("lg-object") && (a || n) && (s.preventDefault(),
                i = o.getDragCords(s, Math.abs(d)),
                l = !0,
                o.core.$outer.scrollLeft += 1,
                --o.core.$outer.scrollLeft,
                o.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
            }
            )),
            e(window).on("mousemove.lg.zoom", (function(e) {
                var c, u;
                l && (c = o.core.$slide.eq(o.core.index).find(".lg-img-wrap"),
                r = !0,
                s = o.getDragCords(e, Math.abs(d)),
                o.core.$outer.addClass("lg-zoom-dragging"),
                u = n ? -Math.abs(c.attr("data-y")) + (s.y - i.y) * o.getModifier(d, "Y", t) : -Math.abs(c.attr("data-y")),
                e = a ? -Math.abs(c.attr("data-x")) + (s.x - i.x) * o.getModifier(d, "X", t) : -Math.abs(c.attr("data-x")),
                o.core.s.useLeftForZoom ? c.css({
                    left: e + "px",
                    top: u + "px"
                }) : c.css("transform", "translate3d(" + e + "px, " + u + "px, 0)"))
            }
            )),
            e(window).on("mouseup.lg.zoom", (function(e) {
                l && (l = !1,
                o.core.$outer.removeClass("lg-zoom-dragging"),
                !r || i.x === s.x && i.y === s.y || (s = o.getDragCords(e, Math.abs(d)),
                o.touchendZoom(i, s, a, n, d)),
                r = !1),
                o.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            }
            ))
        }
        ,
        t.prototype.touchendZoom = function(e, t, o, i, s) {
            var l = this
              , r = l.core.$slide.eq(l.core.index).find(".lg-img-wrap")
              , a = l.core.$slide.eq(l.core.index).find(".lg-object")
              , n = l.core.$slide.eq(l.core.index).find(".lg-img-rotate")[0]
              , d = -Math.abs(r.attr("data-x")) + (t.x - e.x) * l.getModifier(s, "X", n);
            n = -Math.abs(r.attr("data-y")) + (t.y - e.y) * l.getModifier(s, "Y", n),
            s = l.getPossibleDragCords(a, Math.abs(s));
            (15 < Math.abs(t.x - e.x) || 15 < Math.abs(t.y - e.y)) && (i && (n <= -s.maxY ? n = -s.maxY : n >= -s.minY && (n = -s.minY)),
            o && (d <= -s.maxX ? d = -s.maxX : d >= -s.minX && (d = -s.minX)),
            i ? r.attr("data-y", Math.abs(n)) : n = -Math.abs(r.attr("data-y")),
            o ? r.attr("data-x", Math.abs(d)) : d = -Math.abs(r.attr("data-x")),
            l.core.s.useLeftForZoom ? r.css({
                left: d + "px",
                top: n + "px"
            }) : r.css("transform", "translate3d(" + d + "px, " + n + "px, 0)"))
        }
        ,
        t.prototype.destroy = function() {
            var t = this;
            t.core.$el.off(".lg.zoom"),
            e(window).off(".lg.zoom"),
            t.core.$slide.off(".lg.zoom"),
            t.core.$el.off(".lg.tm.zoom"),
            t.resetZoom(),
            clearTimeout(t.zoomabletimeout),
            t.zoomabletimeout = !1
        }
        ,
        e.fn.lightGallery.modules.zoom = t
    }()
}
)),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}((function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.core.s = e.extend({}, o, this.core.s),
            this.core.s.hash && (this.oldHash = window.location.hash,
            this.init()),
            this
        }
        var o = {
            hash: !0
        };
        t.prototype.init = function() {
            var t, o = this;
            o.core.$el.on("onAfterSlide.lg.tm", (function(e, t, i) {
                history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + o.core.s.galleryId + "&slide=" + i) : window.location.hash = "lg=" + o.core.s.galleryId + "&slide=" + i
            }
            )),
            e(window).on("hashchange.lg.hash", (function() {
                t = window.location.hash;
                var e = parseInt(t.split("&slide=")[1], 10);
                -1 < t.indexOf("lg=" + o.core.s.galleryId) ? o.core.slide(e, !1, !1) : o.core.lGalleryOn && o.core.destroy()
            }
            ))
        }
        ,
        t.prototype.destroy = function() {
            this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "",
            this.core.$el.off(".lg.hash"))
        }
        ,
        e.fn.lightGallery.modules.hash = t
    }()
}
)),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, (function(e) {
    !function() {
        "use strict";
        function t(t) {
            return this.core = e(t).data("lightGallery"),
            this.core.s = e.extend({}, o, this.core.s),
            this.core.s.rotate && this.core.doCss() && this.init(),
            this
        }
        var o = {
            rotate: !0,
            rotateLeft: !0,
            rotateRight: !0,
            flipHorizontal: !0,
            flipVertical: !0
        };
        t.prototype.buildTemplates = function() {
            var e = "";
            this.core.s.flipVertical && (e += '<button aria-label="Flip vertical" class="lg-flip-ver lg-icon"></button>'),
            this.core.s.flipHorizontal && (e += '<button aria-label="flip horizontal" class="lg-flip-hor lg-icon"></button>'),
            this.core.s.rotateLeft && (e += '<button aria-label="Rotate left" class="lg-rotate-left lg-icon"></button>'),
            this.core.s.rotateRight && (e += '<button aria-label="Rotate right" class="lg-rotate-right lg-icon"></button>'),
            this.core.$outer.find(".lg-toolbar").append(e)
        }
        ,
        t.prototype.init = function() {
            var e = this;
            this.buildTemplates(),
            this.rotateValuesList = {},
            this.core.$el.on("onAferAppendSlide.lg.tm.rotate", (function(t, o) {
                e.core.$slide.eq(o).find(".lg-img-wrap").wrap('<div class="lg-img-rotate"></div>')
            }
            )),
            this.core.$outer.find(".lg-rotate-left").on("click.lg", this.rotateLeft.bind(this)),
            this.core.$outer.find(".lg-rotate-right").on("click.lg", this.rotateRight.bind(this)),
            this.core.$outer.find(".lg-flip-hor").on("click.lg", this.flipHorizontal.bind(this)),
            this.core.$outer.find(".lg-flip-ver").on("click.lg", this.flipVertical.bind(this)),
            this.core.$el.on("onBeforeSlide.lg.tm.rotate", (function(t, o, i) {
                e.rotateValuesList[i] || (e.rotateValuesList[i] = {
                    rotate: 0,
                    flipHorizontal: 1,
                    flipVertical: 1
                })
            }
            ))
        }
        ,
        t.prototype.applyStyles = function() {
            this.core.$slide.eq(this.core.index).find(".lg-img-rotate").css("transform", "rotate(" + this.rotateValuesList[this.core.index].rotate + "deg) scale3d(" + this.rotateValuesList[this.core.index].flipHorizontal + ", " + this.rotateValuesList[this.core.index].flipVertical + ", 1)")
        }
        ,
        t.prototype.getCurrentRotation = function(e) {
            return e && "none" !== (e = (e = window.getComputedStyle(e, null)).getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform") || "none") && (e = e.split("(")[1].split(")")[0].split(",")) ? (e = Math.round(Math.atan2(e[1], e[0]) * (180 / Math.PI))) < 0 ? e + 360 : e : 0
        }
        ,
        t.prototype.rotateLeft = function() {
            this.rotateValuesList[this.core.index].rotate -= 90,
            this.applyStyles()
        }
        ,
        t.prototype.rotateRight = function() {
            this.rotateValuesList[this.core.index].rotate += 90,
            this.applyStyles()
        }
        ,
        t.prototype.flipHorizontal = function() {
            var e = this.core.$slide.eq(this.core.index).find(".lg-img-rotate")[0];
            e = 90 !== (e = this.getCurrentRotation(e)) && 270 !== e ? "flipHorizontal" : "flipVertical";
            this.rotateValuesList[this.core.index][e] *= -1,
            this.applyStyles()
        }
        ,
        t.prototype.flipVertical = function() {
            var e = this.core.$slide.eq(this.core.index).find(".lg-img-rotate")[0];
            e = 90 !== (e = this.getCurrentRotation(e)) && 270 !== e ? "flipVertical" : "flipHorizontal";
            this.rotateValuesList[this.core.index][e] *= -1,
            this.applyStyles()
        }
        ,
        t.prototype.destroy = function() {
            this.core.$el.off(".lg.tm.rotate"),
            this.rotateValuesList = {}
        }
        ,
        e.fn.lightGallery.modules.rotate = t
    }()
}
));

/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";
    function e(t) {
        if (t && t.__esModule)
            return t;
        const e = Object.create(null);
        if (t)
            for (const i in t)
                if ("default" !== i) {
                    const s = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: ()=>t[i]
                    })
                }
        return e.default = t,
        Object.freeze(e)
    }
    const i = e(t)
      , s = "transitionend"
      , n = t=>{
        let e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
            let i = t.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith("."))
                return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
            e = i && "#" !== i ? i.trim() : null
        }
        return e
    }
      , o = t=>{
        const e = n(t);
        return e && document.querySelector(e) ? e : null
    }
      , r = t=>{
        const e = n(t);
        return e ? document.querySelector(e) : null
    }
      , a = t=>{
        t.dispatchEvent(new Event(s))
    }
      , l = t=>!(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]),
    void 0 !== t.nodeType)
      , c = t=>l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null
      , h = (t,e,i)=>{
        Object.keys(i).forEach((s=>{
            const n = i[s]
              , o = e[s]
              , r = o && l(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
            var a;
            if (!new RegExp(n).test(r))
                throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)
        }
        ))
    }
      , d = t=>!(!l(t) || 0 === t.getClientRects().length) && "visible" === getComputedStyle(t).getPropertyValue("visibility")
      , u = t=>!t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"))
      , g = t=>{
        if (!document.documentElement.attachShadow)
            return null;
        if ("function" == typeof t.getRootNode) {
            const e = t.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return t instanceof ShadowRoot ? t : t.parentNode ? g(t.parentNode) : null
    }
      , _ = ()=>{}
      , f = t=>{
        t.offsetHeight
    }
      , p = ()=>{
        const {jQuery: t} = window;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
    }
      , m = []
      , b = ()=>"rtl" === document.documentElement.dir
      , v = t=>{
        var e;
        e = ()=>{
            const e = p();
            if (e) {
                const i = t.NAME
                  , s = e.fn[i];
                e.fn[i] = t.jQueryInterface,
                e.fn[i].Constructor = t,
                e.fn[i].noConflict = ()=>(e.fn[i] = s,
                t.jQueryInterface)
            }
        }
        ,
        "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (()=>{
            m.forEach((t=>t()))
        }
        )),
        m.push(e)) : e()
    }
      , y = t=>{
        "function" == typeof t && t()
    }
      , E = (t,e,i=!0)=>{
        if (!i)
            return void y(t);
        const n = (t=>{
            if (!t)
                return 0;
            let {transitionDuration: e, transitionDelay: i} = window.getComputedStyle(t);
            const s = Number.parseFloat(e)
              , n = Number.parseFloat(i);
            return s || n ? (e = e.split(",")[0],
            i = i.split(",")[0],
            1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
        }
        )(e) + 5;
        let o = !1;
        const r = ({target: i})=>{
            i === e && (o = !0,
            e.removeEventListener(s, r),
            y(t))
        }
        ;
        e.addEventListener(s, r),
        setTimeout((()=>{
            o || a(e)
        }
        ), n)
    }
      , w = (t,e,i,s)=>{
        let n = t.indexOf(e);
        if (-1 === n)
            return t[!i && s ? t.length - 1 : 0];
        const o = t.length;
        return n += i ? 1 : -1,
        s && (n = (n + o) % o),
        t[Math.max(0, Math.min(n, o - 1))]
    }
      , A = /[^.]*(?=\..*)\.|.*/
      , T = /\..*/
      , C = /::\d+$/
      , k = {};
    let L = 1;
    const S = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }
      , O = /^(mouseenter|mouseleave)/i
      , N = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function D(t, e) {
        return e && `${e}::${L++}` || t.uidEvent || L++
    }
    function I(t) {
        const e = D(t);
        return t.uidEvent = e,
        k[e] = k[e] || {},
        k[e]
    }
    function P(t, e, i=null) {
        const s = Object.keys(t);
        for (let n = 0, o = s.length; n < o; n++) {
            const o = t[s[n]];
            if (o.originalHandler === e && o.delegationSelector === i)
                return o
        }
        return null
    }
    function x(t, e, i) {
        const s = "string" == typeof e
          , n = s ? i : e;
        let o = H(t);
        return N.has(o) || (o = t),
        [s, n, o]
    }
    function M(t, e, i, s, n) {
        if ("string" != typeof e || !t)
            return;
        if (i || (i = s,
        s = null),
        O.test(e)) {
            const t = t=>function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
                    return t.call(this, e)
            }
            ;
            s ? s = t(s) : i = t(i)
        }
        const [o,r,a] = x(e, i, s)
          , l = I(t)
          , c = l[a] || (l[a] = {})
          , h = P(c, r, o ? i : null);
        if (h)
            return void (h.oneOff = h.oneOff && n);
        const d = D(r, e.replace(A, ""))
          , u = o ? function(t, e, i) {
            return function s(n) {
                const o = t.querySelectorAll(e);
                for (let {target: r} = n; r && r !== this; r = r.parentNode)
                    for (let a = o.length; a--; )
                        if (o[a] === r)
                            return n.delegateTarget = r,
                            s.oneOff && $.off(t, n.type, e, i),
                            i.apply(r, [n]);
                return null
            }
        }(t, i, s) : function(t, e) {
            return function i(s) {
                return s.delegateTarget = t,
                i.oneOff && $.off(t, s.type, e),
                e.apply(t, [s])
            }
        }(t, i);
        u.delegationSelector = o ? i : null,
        u.originalHandler = r,
        u.oneOff = n,
        u.uidEvent = d,
        c[d] = u,
        t.addEventListener(a, u, o)
    }
    function j(t, e, i, s, n) {
        const o = P(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)),
        delete e[i][o.uidEvent])
    }
    function H(t) {
        return t = t.replace(T, ""),
        S[t] || t
    }
    const $ = {
        on(t, e, i, s) {
            M(t, e, i, s, !1)
        },
        one(t, e, i, s) {
            M(t, e, i, s, !0)
        },
        off(t, e, i, s) {
            if ("string" != typeof e || !t)
                return;
            const [n,o,r] = x(e, i, s)
              , a = r !== e
              , l = I(t)
              , c = e.startsWith(".");
            if (void 0 !== o) {
                if (!l || !l[r])
                    return;
                return void j(t, l, r, o, n ? i : null)
            }
            c && Object.keys(l).forEach((i=>{
                !function(t, e, i, s) {
                    const n = e[i] || {};
                    Object.keys(n).forEach((o=>{
                        if (o.includes(s)) {
                            const s = n[o];
                            j(t, e, i, s.originalHandler, s.delegationSelector)
                        }
                    }
                    ))
                }(t, l, i, e.slice(1))
            }
            ));
            const h = l[r] || {};
            Object.keys(h).forEach((i=>{
                const s = i.replace(C, "");
                if (!a || e.includes(s)) {
                    const e = h[i];
                    j(t, l, r, e.originalHandler, e.delegationSelector)
                }
            }
            ))
        },
        trigger(t, e, i) {
            if ("string" != typeof e || !t)
                return null;
            const s = p()
              , n = H(e)
              , o = e !== n
              , r = N.has(n);
            let a, l = !0, c = !0, h = !1, d = null;
            return o && s && (a = s.Event(e, i),
            s(t).trigger(a),
            l = !a.isPropagationStopped(),
            c = !a.isImmediatePropagationStopped(),
            h = a.isDefaultPrevented()),
            r ? (d = document.createEvent("HTMLEvents"),
            d.initEvent(n, l, !0)) : d = new CustomEvent(e,{
                bubbles: l,
                cancelable: !0
            }),
            void 0 !== i && Object.keys(i).forEach((t=>{
                Object.defineProperty(d, t, {
                    get: ()=>i[t]
                })
            }
            )),
            h && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== a && a.preventDefault(),
            d
        }
    }
      , B = new Map
      , z = {
        set(t, e, i) {
            B.has(t) || B.set(t, new Map);
            const s = B.get(t);
            s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
        },
        get: (t,e)=>B.has(t) && B.get(t).get(e) || null,
        remove(t, e) {
            if (!B.has(t))
                return;
            const i = B.get(t);
            i.delete(e),
            0 === i.size && B.delete(t)
        }
    };
    class R {
        constructor(t) {
            (t = c(t)) && (this._element = t,
            z.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            z.remove(this._element, this.constructor.DATA_KEY),
            $.off(this._element, this.constructor.EVENT_KEY),
            Object.getOwnPropertyNames(this).forEach((t=>{
                this[t] = null
            }
            ))
        }
        _queueCallback(t, e, i=!0) {
            E(t, e, i)
        }
        static getInstance(t) {
            return z.get(c(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e={}) {
            return this.getInstance(t) || new this(t,"object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.1.3"
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
    }
    const F = (t,e="hide")=>{
        const i = `click.dismiss${t.EVENT_KEY}`
          , s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
            u(this))
                return;
            const n = r(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]()
        }
        ))
    }
    ;
    class q extends R {
        static get NAME() {
            return "alert"
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((()=>this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(),
            $.trigger(this._element, "closed.bs.alert"),
            this.dispose()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = q.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    F(q, "close"),
    v(q);
    const W = '[data-bs-toggle="button"]';
    class U extends R {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = U.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }
            ))
        }
    }
    function K(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }
    function V(t) {
        return t.replace(/[A-Z]/g, (t=>`-${t.toLowerCase()}`))
    }
    $.on(document, "click.bs.button.data-api", W, (t=>{
        t.preventDefault();
        const e = t.target.closest(W);
        U.getOrCreateInstance(e).toggle()
    }
    )),
    v(U);
    const X = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${V(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${V(e)}`)
        },
        getDataAttributes(t) {
            if (!t)
                return {};
            const e = {};
            return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((i=>{
                let s = i.replace(/^bs/, "");
                s = s.charAt(0).toLowerCase() + s.slice(1, s.length),
                e[s] = K(t.dataset[i])
            }
            )),
            e
        },
        getDataAttribute: (t,e)=>K(t.getAttribute(`data-bs-${V(e)}`)),
        offset(t) {
            const e = t.getBoundingClientRect();
            return {
                top: e.top + window.pageYOffset,
                left: e.left + window.pageXOffset
            }
        },
        position: t=>({
            top: t.offsetTop,
            left: t.offsetLeft
        })
    }
      , Y = {
        find: (t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e, t)),
        findOne: (t,e=document.documentElement)=>Element.prototype.querySelector.call(e, t),
        children: (t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),
        parents(t, e) {
            const i = [];
            let s = t.parentNode;
            for (; s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType; )
                s.matches(e) && i.push(s),
                s = s.parentNode;
            return i
        },
        prev(t, e) {
            let i = t.previousElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(t, e) {
            let i = t.nextElementSibling;
            for (; i; ) {
                if (i.matches(e))
                    return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(t) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(", ");
            return this.find(e, t).filter((t=>!u(t) && d(t)))
        }
    }
      , Q = "carousel"
      , G = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
    }
      , Z = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
    }
      , J = "next"
      , tt = "prev"
      , et = "left"
      , it = "right"
      , st = {
        ArrowLeft: it,
        ArrowRight: et
    }
      , nt = "slid.bs.carousel"
      , ot = "active"
      , rt = ".active.carousel-item";
    class at extends R {
        constructor(t, e) {
            super(t),
            this._items = null,
            this._interval = null,
            this._activeElement = null,
            this._isPaused = !1,
            this._isSliding = !1,
            this.touchTimeout = null,
            this.touchStartX = 0,
            this.touchDeltaX = 0,
            this._config = this._getConfig(e),
            this._indicatorsElement = Y.findOne(".carousel-indicators", this._element),
            this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0,
            this._pointerEvent = Boolean(window.PointerEvent),
            this._addEventListeners()
        }
        static get Default() {
            return G
        }
        static get NAME() {
            return Q
        }
        next() {
            this._slide(J)
        }
        nextWhenVisible() {
            !document.hidden && d(this._element) && this.next()
        }
        prev() {
            this._slide(tt)
        }
        pause(t) {
            t || (this._isPaused = !0),
            Y.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (a(this._element),
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
            this._activeElement = Y.findOne(rt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0)
                return;
            if (this._isSliding)
                return void $.one(this._element, nt, (()=>this.to(t)));
            if (e === t)
                return this.pause(),
                void this.cycle();
            const i = t > e ? J : tt;
            this._slide(i, this._items[t])
        }
        _getConfig(t) {
            return t = {
                ...G,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            h(Q, t, Z),
            t
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40)
                return;
            const e = t / this.touchDeltaX;
            this.touchDeltaX = 0,
            e && this._slide(e > 0 ? it : et)
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t=>this._keydown(t))),
            "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (t=>this.pause(t))),
            $.on(this._element, "mouseleave.bs.carousel", (t=>this.cycle(t)))),
            this._config.touch && this._touchSupported && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            const t = t=>this._pointerEvent && ("pen" === t.pointerType || "touch" === t.pointerType)
              , e = e=>{
                t(e) ? this.touchStartX = e.clientX : this._pointerEvent || (this.touchStartX = e.touches[0].clientX)
            }
              , i = t=>{
                this.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this.touchStartX
            }
              , s = e=>{
                t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                this._handleSwipe(),
                "hover" === this._config.pause && (this.pause(),
                this.touchTimeout && clearTimeout(this.touchTimeout),
                this.touchTimeout = setTimeout((t=>this.cycle(t)), 500 + this._config.interval))
            }
            ;
            Y.find(".carousel-item img", this._element).forEach((t=>{
                $.on(t, "dragstart.bs.carousel", (t=>t.preventDefault()))
            }
            )),
            this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", (t=>e(t))),
            $.on(this._element, "pointerup.bs.carousel", (t=>s(t))),
            this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", (t=>e(t))),
            $.on(this._element, "touchmove.bs.carousel", (t=>i(t))),
            $.on(this._element, "touchend.bs.carousel", (t=>s(t))))
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName))
                return;
            const e = st[t.key];
            e && (t.preventDefault(),
            this._slide(e))
        }
        _getItemIndex(t) {
            return this._items = t && t.parentNode ? Y.find(".carousel-item", t.parentNode) : [],
            this._items.indexOf(t)
        }
        _getItemByOrder(t, e) {
            const i = t === J;
            return w(this._items, e, i, this._config.wrap)
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t)
              , s = this._getItemIndex(Y.findOne(rt, this._element));
            return $.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: s,
                to: i
            })
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = Y.findOne(".active", this._indicatorsElement);
                e.classList.remove(ot),
                e.removeAttribute("aria-current");
                const i = Y.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (Number.parseInt(i[e].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
                        i[e].classList.add(ot),
                        i[e].setAttribute("aria-current", "true");
                        break
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || Y.findOne(rt, this._element);
            if (!t)
                return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval,
            this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval
        }
        _slide(t, e) {
            const i = this._directionToOrder(t)
              , s = Y.findOne(rt, this._element)
              , n = this._getItemIndex(s)
              , o = e || this._getItemByOrder(i, s)
              , r = this._getItemIndex(o)
              , a = Boolean(this._interval)
              , l = i === J
              , c = l ? "carousel-item-start" : "carousel-item-end"
              , h = l ? "carousel-item-next" : "carousel-item-prev"
              , d = this._orderToDirection(i);
            if (o && o.classList.contains(ot))
                return void (this._isSliding = !1);
            if (this._isSliding)
                return;
            if (this._triggerSlideEvent(o, d).defaultPrevented)
                return;
            if (!s || !o)
                return;
            this._isSliding = !0,
            a && this.pause(),
            this._setActiveIndicatorElement(o),
            this._activeElement = o;
            const u = ()=>{
                $.trigger(this._element, nt, {
                    relatedTarget: o,
                    direction: d,
                    from: n,
                    to: r
                })
            }
            ;
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                f(o),
                s.classList.add(c),
                o.classList.add(c);
                const t = ()=>{
                    o.classList.remove(c, h),
                    o.classList.add(ot),
                    s.classList.remove(ot, h, c),
                    this._isSliding = !1,
                    setTimeout(u, 0)
                }
                ;
                this._queueCallback(t, s, !0)
            } else
                s.classList.remove(ot),
                o.classList.add(ot),
                this._isSliding = !1,
                u();
            a && this.cycle()
        }
        _directionToOrder(t) {
            return [it, et].includes(t) ? b() ? t === et ? tt : J : t === et ? J : tt : t
        }
        _orderToDirection(t) {
            return [J, tt].includes(t) ? b() ? t === tt ? et : it : t === tt ? it : et : t
        }
        static carouselInterface(t, e) {
            const i = at.getOrCreateInstance(t, e);
            let {_config: s} = i;
            "object" == typeof e && (s = {
                ...s,
                ...e
            });
            const n = "string" == typeof e ? e : s.slide;
            if ("number" == typeof e)
                i.to(e);
            else if ("string" == typeof n) {
                if (void 0 === i[n])
                    throw new TypeError(`No method named "${n}"`);
                i[n]()
            } else
                s.interval && s.ride && (i.pause(),
                i.cycle())
        }
        static jQueryInterface(t) {
            return this.each((function() {
                at.carouselInterface(this, t)
            }
            ))
        }
        static dataApiClickHandler(t) {
            const e = r(this);
            if (!e || !e.classList.contains("carousel"))
                return;
            const i = {
                ...X.getDataAttributes(e),
                ...X.getDataAttributes(this)
            }
              , s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1),
            at.carouselInterface(e, i),
            s && at.getInstance(e).to(s),
            t.preventDefault()
        }
    }
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", at.dataApiClickHandler),
    $.on(window, "load.bs.carousel.data-api", (()=>{
        const t = Y.find('[data-bs-ride="carousel"]');
        for (let e = 0, i = t.length; e < i; e++)
            at.carouselInterface(t[e], at.getInstance(t[e]))
    }
    )),
    v(at);
    const lt = "collapse"
      , ct = {
        toggle: !0,
        parent: null
    }
      , ht = {
        toggle: "boolean",
        parent: "(null|element)"
    }
      , dt = "show"
      , ut = "collapse"
      , gt = "collapsing"
      , _t = "collapsed"
      , ft = ":scope .collapse .collapse"
      , pt = '[data-bs-toggle="collapse"]';
    class mt extends R {
        constructor(t, e) {
            super(t),
            this._isTransitioning = !1,
            this._config = this._getConfig(e),
            this._triggerArray = [];
            const i = Y.find(pt);
            for (let t = 0, e = i.length; t < e; t++) {
                const e = i[t]
                  , s = o(e)
                  , n = Y.find(s).filter((t=>t === this._element));
                null !== s && n.length && (this._selector = s,
                this._triggerArray.push(e))
            }
            this._initializeChildren(),
            this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
            this._config.toggle && this.toggle()
        }
        static get Default() {
            return ct
        }
        static get NAME() {
            return lt
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown())
                return;
            let t, e = [];
            if (this._config.parent) {
                const t = Y.find(ft, this._config.parent);
                e = Y.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((e=>!t.includes(e)))
            }
            const i = Y.findOne(this._selector);
            if (e.length) {
                const s = e.find((t=>i !== t));
                if (t = s ? mt.getInstance(s) : null,
                t && t._isTransitioning)
                    return
            }
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e.forEach((e=>{
                i !== e && mt.getOrCreateInstance(e, {
                    toggle: !1
                }).hide(),
                t || z.set(e, "bs.collapse", null)
            }
            ));
            const s = this._getDimension();
            this._element.classList.remove(ut),
            this._element.classList.add(gt),
            this._element.style[s] = 0,
            this._addAriaAndCollapsedClass(this._triggerArray, !0),
            this._isTransitioning = !0;
            const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(gt),
                this._element.classList.add(ut, dt),
                this._element.style[s] = "",
                $.trigger(this._element, "shown.bs.collapse")
            }
            ), this._element, !0),
            this._element.style[s] = `${this._element[n]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown())
                return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`,
            f(this._element),
            this._element.classList.add(gt),
            this._element.classList.remove(ut, dt);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t]
                  , i = r(e);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1)
            }
            this._isTransitioning = !0,
            this._element.style[t] = "",
            this._queueCallback((()=>{
                this._isTransitioning = !1,
                this._element.classList.remove(gt),
                this._element.classList.add(ut),
                $.trigger(this._element, "hidden.bs.collapse")
            }
            ), this._element, !0)
        }
        _isShown(t=this._element) {
            return t.classList.contains(dt)
        }
        _getConfig(t) {
            return (t = {
                ...ct,
                ...X.getDataAttributes(this._element),
                ...t
            }).toggle = Boolean(t.toggle),
            t.parent = c(t.parent),
            h(lt, t, ht),
            t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent)
                return;
            const t = Y.find(ft, this._config.parent);
            Y.find(pt, this._config.parent).filter((e=>!t.includes(e))).forEach((t=>{
                const e = r(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e))
            }
            ))
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length && t.forEach((t=>{
                e ? t.classList.remove(_t) : t.classList.add(_t),
                t.setAttribute("aria-expanded", e)
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = mt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.collapse.data-api", pt, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = o(this);
        Y.find(e).forEach((t=>{
            mt.getOrCreateInstance(t, {
                toggle: !1
            }).toggle()
        }
        ))
    }
    )),
    v(mt);
    const bt = "dropdown"
      , vt = "Escape"
      , yt = "Space"
      , Et = "ArrowUp"
      , wt = "ArrowDown"
      , At = new RegExp("ArrowUp|ArrowDown|Escape")
      , Tt = "click.bs.dropdown.data-api"
      , Ct = "keydown.bs.dropdown.data-api"
      , kt = "show"
      , Lt = '[data-bs-toggle="dropdown"]'
      , St = ".dropdown-menu"
      , Ot = b() ? "top-end" : "top-start"
      , Nt = b() ? "top-start" : "top-end"
      , Dt = b() ? "bottom-end" : "bottom-start"
      , It = b() ? "bottom-start" : "bottom-end"
      , Pt = b() ? "left-start" : "right-start"
      , xt = b() ? "right-start" : "left-start"
      , Mt = {
        offset: [0, 2],
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null,
        autoClose: !0
    }
      , jt = {
        offset: "(array|string|function)",
        boundary: "(string|element)",
        reference: "(string|element|object)",
        display: "string",
        popperConfig: "(null|object|function)",
        autoClose: "(boolean|string)"
    };
    class Ht extends R {
        constructor(t, e) {
            super(t),
            this._popper = null,
            this._config = this._getConfig(e),
            this._menu = this._getMenuElement(),
            this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Mt
        }
        static get DefaultType() {
            return jt
        }
        static get NAME() {
            return bt
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (u(this._element) || this._isShown(this._menu))
                return;
            const t = {
                relatedTarget: this._element
            };
            if ($.trigger(this._element, "show.bs.dropdown", t).defaultPrevented)
                return;
            const e = Ht.getParentFromElement(this._element);
            this._inNavbar ? X.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e),
            "ontouchstart"in document.documentElement && !e.closest(".navbar-nav") && [].concat(...document.body.children).forEach((t=>$.on(t, "mouseover", _))),
            this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(kt),
            this._element.classList.add(kt),
            $.trigger(this._element, "shown.bs.dropdown", t)
        }
        hide() {
            if (u(this._element) || !this._isShown(this._menu))
                return;
            const t = {
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
            $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>$.off(t, "mouseover", _))),
            this._popper && this._popper.destroy(),
            this._menu.classList.remove(kt),
            this._element.classList.remove(kt),
            this._element.setAttribute("aria-expanded", "false"),
            X.removeDataAttribute(this._menu, "popper"),
            $.trigger(this._element, "hidden.bs.dropdown", t))
        }
        _getConfig(t) {
            if (t = {
                ...this.constructor.Default,
                ...X.getDataAttributes(this._element),
                ...t
            },
            h(bt, t, this.constructor.DefaultType),
            "object" == typeof t.reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect)
                throw new TypeError(`${bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper(t) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = t : l(this._config.reference) ? e = c(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            const s = this._getPopperConfig()
              , n = s.modifiers.find((t=>"applyStyles" === t.name && !1 === t.enabled));
            this._popper = i.createPopper(e, this._menu, s),
            n && X.setDataAttribute(this._menu, "popper", "static")
        }
        _isShown(t=this._element) {
            return t.classList.contains(kt)
        }
        _getMenuElement() {
            return Y.next(this._element, St)[0]
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend"))
                return Pt;
            if (t.classList.contains("dropstart"))
                return xt;
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Nt : Ot : e ? It : Dt
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
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
        _selectMenuItem({key: t, target: e}) {
            const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(d);
            i.length && w(i, e, t === wt, !i.includes(e)).focus()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ht.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
        static clearMenus(t) {
            if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key))
                return;
            const e = Y.find(Lt);
            for (let i = 0, s = e.length; i < s; i++) {
                const s = Ht.getInstance(e[i]);
                if (!s || !1 === s._config.autoClose)
                    continue;
                if (!s._isShown())
                    continue;
                const n = {
                    relatedTarget: s._element
                };
                if (t) {
                    const e = t.composedPath()
                      , i = e.includes(s._menu);
                    if (e.includes(s._element) || "inside" === s._config.autoClose && !i || "outside" === s._config.autoClose && i)
                        continue;
                    if (s._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName)))
                        continue;
                    "click" === t.type && (n.clickEvent = t)
                }
                s._completeHide(n)
            }
        }
        static getParentFromElement(t) {
            return r(t) || t.parentNode
        }
        static dataApiKeydownHandler(t) {
            if (/input|textarea/i.test(t.target.tagName) ? t.key === yt || t.key !== vt && (t.key !== wt && t.key !== Et || t.target.closest(St)) : !At.test(t.key))
                return;
            const e = this.classList.contains(kt);
            if (!e && t.key === vt)
                return;
            if (t.preventDefault(),
            t.stopPropagation(),
            u(this))
                return;
            const i = this.matches(Lt) ? this : Y.prev(this, Lt)[0]
              , s = Ht.getOrCreateInstance(i);
            if (t.key !== vt)
                return t.key === Et || t.key === wt ? (e || s.show(),
                void s._selectMenuItem(t)) : void (e && t.key !== yt || Ht.clearMenus());
            s.hide()
        }
    }
    $.on(document, Ct, Lt, Ht.dataApiKeydownHandler),
    $.on(document, Ct, St, Ht.dataApiKeydownHandler),
    $.on(document, Tt, Ht.clearMenus),
    $.on(document, "keyup.bs.dropdown.data-api", Ht.clearMenus),
    $.on(document, Tt, Lt, (function(t) {
        t.preventDefault(),
        Ht.getOrCreateInstance(this).toggle()
    }
    )),
    v(Ht);
    const $t = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
      , Bt = ".sticky-top";
    class zt {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
            this._setElementAttributes(this._element, "paddingRight", (e=>e + t)),
            this._setElementAttributes($t, "paddingRight", (e=>e + t)),
            this._setElementAttributes(Bt, "marginRight", (e=>e - t))
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
            this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t=>{
                if (t !== this._element && window.innerWidth > t.clientWidth + s)
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(n))}px`
            }
            ))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
            this._resetElementAttributes(this._element, "paddingRight"),
            this._resetElementAttributes($t, "paddingRight"),
            this._resetElementAttributes(Bt, "marginRight")
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && X.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t=>{
                const i = X.getDataAttribute(t, e);
                void 0 === i ? t.style.removeProperty(e) : (X.removeDataAttribute(t, e),
                t.style[e] = i)
            }
            ))
        }
        _applyManipulationCallback(t, e) {
            l(t) ? e(t) : Y.find(t, this._element).forEach(e)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
    }
    const Rt = {
        className: "modal-backdrop",
        isVisible: !0,
        isAnimated: !1,
        rootElement: "body",
        clickCallback: null
    }
      , Ft = {
        className: "string",
        isVisible: "boolean",
        isAnimated: "boolean",
        rootElement: "(element|string)",
        clickCallback: "(function|null)"
    }
      , qt = "show"
      , Wt = "mousedown.bs.backdrop";
    class Ut {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isAppended = !1,
            this._element = null
        }
        show(t) {
            this._config.isVisible ? (this._append(),
            this._config.isAnimated && f(this._getElement()),
            this._getElement().classList.add(qt),
            this._emulateAnimation((()=>{
                y(t)
            }
            ))) : y(t)
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(qt),
            this._emulateAnimation((()=>{
                this.dispose(),
                y(t)
            }
            ))) : y(t)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className,
                this._config.isAnimated && t.classList.add("fade"),
                this._element = t
            }
            return this._element
        }
        _getConfig(t) {
            return (t = {
                ...Rt,
                ..."object" == typeof t ? t : {}
            }).rootElement = c(t.rootElement),
            h("backdrop", t, Ft),
            t
        }
        _append() {
            this._isAppended || (this._config.rootElement.append(this._getElement()),
            $.on(this._getElement(), Wt, (()=>{
                y(this._config.clickCallback)
            }
            )),
            this._isAppended = !0)
        }
        dispose() {
            this._isAppended && ($.off(this._element, Wt),
            this._element.remove(),
            this._isAppended = !1)
        }
        _emulateAnimation(t) {
            E(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Kt = {
        trapElement: null,
        autofocus: !0
    }
      , Vt = {
        trapElement: "element",
        autofocus: "boolean"
    }
      , Xt = ".bs.focustrap"
      , Yt = "backward";
    class Qt {
        constructor(t) {
            this._config = this._getConfig(t),
            this._isActive = !1,
            this._lastTabNavDirection = null
        }
        activate() {
            const {trapElement: t, autofocus: e} = this._config;
            this._isActive || (e && t.focus(),
            $.off(document, Xt),
            $.on(document, "focusin.bs.focustrap", (t=>this._handleFocusin(t))),
            $.on(document, "keydown.tab.bs.focustrap", (t=>this._handleKeydown(t))),
            this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1,
            $.off(document, Xt))
        }
        _handleFocusin(t) {
            const {target: e} = t
              , {trapElement: i} = this._config;
            if (e === document || e === i || i.contains(e))
                return;
            const s = Y.focusableChildren(i);
            0 === s.length ? i.focus() : this._lastTabNavDirection === Yt ? s[s.length - 1].focus() : s[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Yt : "forward")
        }
        _getConfig(t) {
            return t = {
                ...Kt,
                ..."object" == typeof t ? t : {}
            },
            h("focustrap", t, Vt),
            t
        }
    }
    const Gt = "modal"
      , Zt = "Escape"
      , Jt = {
        backdrop: !0,
        keyboard: !0,
        focus: !0
    }
      , te = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
    }
      , ee = "hidden.bs.modal"
      , ie = "show.bs.modal"
      , se = "resize.bs.modal"
      , ne = "click.dismiss.bs.modal"
      , oe = "keydown.dismiss.bs.modal"
      , re = "mousedown.dismiss.bs.modal"
      , ae = "modal-open"
      , le = "show"
      , ce = "modal-static";
    class he extends R {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._dialog = Y.findOne(".modal-dialog", this._element),
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._isShown = !1,
            this._ignoreBackdropClick = !1,
            this._isTransitioning = !1,
            this._scrollBar = new zt
        }
        static get Default() {
            return Jt
        }
        static get NAME() {
            return Gt
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || $.trigger(this._element, ie, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._isAnimated() && (this._isTransitioning = !0),
            this._scrollBar.hide(),
            document.body.classList.add(ae),
            this._adjustDialog(),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            $.on(this._dialog, re, (()=>{
                $.one(this._element, "mouseup.dismiss.bs.modal", (t=>{
                    t.target === this._element && (this._ignoreBackdropClick = !0)
                }
                ))
            }
            )),
            this._showBackdrop((()=>this._showElement(t))))
        }
        hide() {
            if (!this._isShown || this._isTransitioning)
                return;
            if ($.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
            this._setEscapeEvent(),
            this._setResizeEvent(),
            this._focustrap.deactivate(),
            this._element.classList.remove(le),
            $.off(this._element, ne),
            $.off(this._dialog, re),
            this._queueCallback((()=>this._hideModal()), this._element, t)
        }
        dispose() {
            [window, this._dialog].forEach((t=>$.off(t, ".bs.modal"))),
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Ut({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            })
        }
        _getConfig(t) {
            return t = {
                ...Jt,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            h(Gt, t, te),
            t
        }
        _showElement(t) {
            const e = this._isAnimated()
              , i = Y.findOne(".modal-body", this._dialog);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element),
            this._element.style.display = "block",
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.scrollTop = 0,
            i && (i.scrollTop = 0),
            e && f(this._element),
            this._element.classList.add(le),
            this._queueCallback((()=>{
                this._config.focus && this._focustrap.activate(),
                this._isTransitioning = !1,
                $.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }
            ), this._dialog, e)
        }
        _setEscapeEvent() {
            this._isShown ? $.on(this._element, oe, (t=>{
                this._config.keyboard && t.key === Zt ? (t.preventDefault(),
                this.hide()) : this._config.keyboard || t.key !== Zt || this._triggerBackdropTransition()
            }
            )) : $.off(this._element, oe)
        }
        _setResizeEvent() {
            this._isShown ? $.on(window, se, (()=>this._adjustDialog())) : $.off(window, se)
        }
        _hideModal() {
            this._element.style.display = "none",
            this._element.setAttribute("aria-hidden", !0),
            this._element.removeAttribute("aria-modal"),
            this._element.removeAttribute("role"),
            this._isTransitioning = !1,
            this._backdrop.hide((()=>{
                document.body.classList.remove(ae),
                this._resetAdjustments(),
                this._scrollBar.reset(),
                $.trigger(this._element, ee)
            }
            ))
        }
        _showBackdrop(t) {
            $.on(this._element, ne, (t=>{
                this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
            }
            )),
            this._backdrop.show(t)
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
                return;
            const {classList: t, scrollHeight: e, style: i} = this._element
              , s = e > document.documentElement.clientHeight;
            !s && "hidden" === i.overflowY || t.contains(ce) || (s || (i.overflowY = "hidden"),
            t.add(ce),
            this._queueCallback((()=>{
                t.remove(ce),
                s || this._queueCallback((()=>{
                    i.overflowY = ""
                }
                ), this._dialog)
            }
            ), this._dialog),
            this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight
              , e = this._scrollBar.getWidth()
              , i = e > 0;
            (!i && t && !b() || i && !t && b()) && (this._element.style.paddingLeft = `${e}px`),
            (i && !t && !b() || !i && t && b()) && (this._element.style.paddingRight = `${e}px`)
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "",
            this._element.style.paddingRight = ""
        }
        static jQueryInterface(t, e) {
            return this.each((function() {
                const i = he.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = r(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        $.one(e, ie, (t=>{
            t.defaultPrevented || $.one(e, ee, (()=>{
                d(this) && this.focus()
            }
            ))
        }
        ));
        const i = Y.findOne(".modal.show");
        i && he.getInstance(i).hide(),
        he.getOrCreateInstance(e).toggle(this)
    }
    )),
    F(he),
    v(he);
    const de = "offcanvas"
      , ue = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    }
      , ge = {
        backdrop: "boolean",
        keyboard: "boolean",
        scroll: "boolean"
    }
      , _e = "show"
      , fe = ".offcanvas.show"
      , pe = "hidden.bs.offcanvas";
    class me extends R {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._isShown = !1,
            this._backdrop = this._initializeBackDrop(),
            this._focustrap = this._initializeFocusTrap(),
            this._addEventListeners()
        }
        static get NAME() {
            return de
        }
        static get Default() {
            return ue
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0,
            this._element.style.visibility = "visible",
            this._backdrop.show(),
            this._config.scroll || (new zt).hide(),
            this._element.removeAttribute("aria-hidden"),
            this._element.setAttribute("aria-modal", !0),
            this._element.setAttribute("role", "dialog"),
            this._element.classList.add(_e),
            this._queueCallback((()=>{
                this._config.scroll || this._focustrap.activate(),
                $.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }
            ), this._element, !0))
        }
        hide() {
            this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(),
            this._element.blur(),
            this._isShown = !1,
            this._element.classList.remove(_e),
            this._backdrop.hide(),
            this._queueCallback((()=>{
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._element.style.visibility = "hidden",
                this._config.scroll || (new zt).reset(),
                $.trigger(this._element, pe)
            }
            ), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(),
            this._focustrap.deactivate(),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...ue,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t ? t : {}
            },
            h(de, t, ge),
            t
        }
        _initializeBackDrop() {
            return new Ut({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: ()=>this.hide()
            })
        }
        _initializeFocusTrap() {
            return new Qt({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t=>{
                this._config.keyboard && "Escape" === t.key && this.hide()
            }
            ))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = me.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = r(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        u(this))
            return;
        $.one(e, pe, (()=>{
            d(this) && this.focus()
        }
        ));
        const i = Y.findOne(fe);
        i && i !== e && me.getInstance(i).hide(),
        me.getOrCreateInstance(e).toggle(this)
    }
    )),
    $.on(window, "load.bs.offcanvas.data-api", (()=>Y.find(fe).forEach((t=>me.getOrCreateInstance(t).show())))),
    F(me),
    v(me);
    const be = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"])
      , ve = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i
      , ye = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i
      , Ee = (t,e)=>{
        const i = t.nodeName.toLowerCase();
        if (e.includes(i))
            return !be.has(i) || Boolean(ve.test(t.nodeValue) || ye.test(t.nodeValue));
        const s = e.filter((t=>t instanceof RegExp));
        for (let t = 0, e = s.length; t < e; t++)
            if (s[t].test(i))
                return !0;
        return !1
    }
    ;
    function we(t, e, i) {
        if (!t.length)
            return t;
        if (i && "function" == typeof i)
            return i(t);
        const s = (new window.DOMParser).parseFromString(t, "text/html")
          , n = [].concat(...s.body.querySelectorAll("*"));
        for (let t = 0, i = n.length; t < i; t++) {
            const i = n[t]
              , s = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(s)) {
                i.remove();
                continue
            }
            const o = [].concat(...i.attributes)
              , r = [].concat(e["*"] || [], e[s] || []);
            o.forEach((t=>{
                Ee(t, r) || i.removeAttribute(t.nodeName)
            }
            ))
        }
        return s.body.innerHTML
    }
    const Ae = "tooltip"
      , Te = new Set(["sanitize", "allowList", "sanitizeFn"])
      , Ce = {
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
      , ke = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: b() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: b() ? "right" : "left"
    }
      , Le = {
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
      , Se = {
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
      , Oe = "fade"
      , Ne = "show"
      , De = "show"
      , Ie = "out"
      , Pe = ".tooltip-inner"
      , xe = ".modal"
      , Me = "hide.bs.modal"
      , je = "hover"
      , He = "focus";
    class $e extends R {
        constructor(t, e) {
            if (void 0 === i)
                throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t),
            this._isEnabled = !0,
            this._timeout = 0,
            this._hoverState = "",
            this._activeTrigger = {},
            this._popper = null,
            this._config = this._getConfig(e),
            this.tip = null,
            this._setListeners()
        }
        static get Default() {
            return Le
        }
        static get NAME() {
            return Ae
        }
        static get Event() {
            return Se
        }
        static get DefaultType() {
            return Ce
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
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger.click = !e._activeTrigger.click,
                    e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                } else {
                    if (this.getTipElement().classList.contains(Ne))
                        return void this._leave(null, this);
                    this._enter(null, this)
                }
        }
        dispose() {
            clearTimeout(this._timeout),
            $.off(this._element.closest(xe), Me, this._hideModalHandler),
            this.tip && this.tip.remove(),
            this._disposePopper(),
            super.dispose()
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled)
                return;
            const t = $.trigger(this._element, this.constructor.Event.SHOW)
              , e = g(this._element)
              , s = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
            if (t.defaultPrevented || !s)
                return;
            "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(Pe).innerHTML && (this._disposePopper(),
            this.tip.remove(),
            this.tip = null);
            const n = this.getTipElement()
              , o = (t=>{
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            }
            )(this.constructor.NAME);
            n.setAttribute("id", o),
            this._element.setAttribute("aria-describedby", o),
            this._config.animation && n.classList.add(Oe);
            const r = "function" == typeof this._config.placement ? this._config.placement.call(this, n, this._element) : this._config.placement
              , a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const {container: l} = this._config;
            z.set(n, this.constructor.DATA_KEY, this),
            this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(n),
            $.trigger(this._element, this.constructor.Event.INSERTED)),
            this._popper ? this._popper.update() : this._popper = i.createPopper(this._element, n, this._getPopperConfig(a)),
            n.classList.add(Ne);
            const c = this._resolvePossibleFunction(this._config.customClass);
            c && n.classList.add(...c.split(" ")),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>{
                $.on(t, "mouseover", _)
            }
            ));
            const h = this.tip.classList.contains(Oe);
            this._queueCallback((()=>{
                const t = this._hoverState;
                this._hoverState = null,
                $.trigger(this._element, this.constructor.Event.SHOWN),
                t === Ie && this._leave(null, this)
            }
            ), this.tip, h)
        }
        hide() {
            if (!this._popper)
                return;
            const t = this.getTipElement();
            if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented)
                return;
            t.classList.remove(Ne),
            "ontouchstart"in document.documentElement && [].concat(...document.body.children).forEach((t=>$.off(t, "mouseover", _))),
            this._activeTrigger.click = !1,
            this._activeTrigger.focus = !1,
            this._activeTrigger.hover = !1;
            const e = this.tip.classList.contains(Oe);
            this._queueCallback((()=>{
                this._isWithActiveTrigger() || (this._hoverState !== De && t.remove(),
                this._cleanTipClass(),
                this._element.removeAttribute("aria-describedby"),
                $.trigger(this._element, this.constructor.Event.HIDDEN),
                this._disposePopper())
            }
            ), this.tip, e),
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
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return this.setContent(e),
            e.classList.remove(Oe, Ne),
            this.tip = e,
            this.tip
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), Pe)
        }
        _sanitizeAndSetContent(t, e, i) {
            const s = Y.findOne(i, t);
            e || !s ? this.setElementContent(s, e) : s.remove()
        }
        setElementContent(t, e) {
            if (null !== t)
                return l(e) ? (e = c(e),
                void (this._config.html ? e.parentNode !== t && (t.innerHTML = "",
                t.append(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = we(e, this._config.allowList, this._config.sanitizeFn)),
                t.innerHTML = e) : t.textContent = e)
        }
        getTitle() {
            const t = this._element.getAttribute("data-bs-original-title") || this._config.title;
            return this._resolvePossibleFunction(t)
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t
        }
        _initializeOnDelegatedTarget(t, e) {
            return e || this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _getOffset() {
            const {offset: t} = this._config;
            return "string" == typeof t ? t.split(",").map((t=>Number.parseInt(t, 10))) : "function" == typeof t ? e=>t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
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
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`)
        }
        _getAttachment(t) {
            return ke[t.toUpperCase()]
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t=>{
                if ("click" === t)
                    $.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t=>this.toggle(t)));
                else if ("manual" !== t) {
                    const e = t === je ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN
                      , i = t === je ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                    $.on(this._element, e, this._config.selector, (t=>this._enter(t))),
                    $.on(this._element, i, this._config.selector, (t=>this._leave(t)))
                }
            }
            )),
            this._hideModalHandler = ()=>{
                this._element && this.hide()
            }
            ,
            $.on(this._element.closest(xe), Me, this._hideModalHandler),
            this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._element.getAttribute("title")
              , e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""),
            !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t),
            this._element.setAttribute("title", ""))
        }
        _enter(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusin" === t.type ? He : je] = !0),
            e.getTipElement().classList.contains(Ne) || e._hoverState === De ? e._hoverState = De : (clearTimeout(e._timeout),
            e._hoverState = De,
            e._config.delay && e._config.delay.show ? e._timeout = setTimeout((()=>{
                e._hoverState === De && e.show()
            }
            ), e._config.delay.show) : e.show())
        }
        _leave(t, e) {
            e = this._initializeOnDelegatedTarget(t, e),
            t && (e._activeTrigger["focusout" === t.type ? He : je] = e._element.contains(t.relatedTarget)),
            e._isWithActiveTrigger() || (clearTimeout(e._timeout),
            e._hoverState = Ie,
            e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((()=>{
                e._hoverState === Ie && e.hide()
            }
            ), e._config.delay.hide) : e.hide())
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t])
                    return !0;
            return !1
        }
        _getConfig(t) {
            const e = X.getDataAttributes(this._element);
            return Object.keys(e).forEach((t=>{
                Te.has(t) && delete e[t]
            }
            )),
            (t = {
                ...this.constructor.Default,
                ...e,
                ..."object" == typeof t && t ? t : {}
            }).container = !1 === t.container ? document.body : c(t.container),
            "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            "number" == typeof t.title && (t.title = t.title.toString()),
            "number" == typeof t.content && (t.content = t.content.toString()),
            h(Ae, t, this.constructor.DefaultType),
            t.sanitize && (t.template = we(t.template, t.allowList, t.sanitizeFn)),
            t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _cleanTipClass() {
            const t = this.getTipElement()
              , e = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g")
              , i = t.getAttribute("class").match(e);
            null !== i && i.length > 0 && i.map((t=>t.trim())).forEach((e=>t.classList.remove(e)))
        }
        _getBasicClassPrefix() {
            return "bs-tooltip"
        }
        _handlePopperPlacementChange(t) {
            const {state: e} = t;
            e && (this.tip = e.elements.popper,
            this._cleanTipClass(),
            this._addAttachmentClass(this._getAttachment(e.placement)))
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(),
            this._popper = null)
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = $e.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    v($e);
    const Be = {
        ...$e.Default,
        placement: "right",
        offset: [0, 8],
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }
      , ze = {
        ...$e.DefaultType,
        content: "(string|element|function)"
    }
      , Re = {
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
    class Fe extends $e {
        static get Default() {
            return Be
        }
        static get NAME() {
            return "popover"
        }
        static get Event() {
            return Re
        }
        static get DefaultType() {
            return ze
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
            return this.each((function() {
                const e = Fe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    v(Fe);
    const qe = "scrollspy"
      , We = {
        offset: 10,
        method: "auto",
        target: ""
    }
      , Ue = {
        offset: "number",
        method: "string",
        target: "(string|element)"
    }
      , Ke = "active"
      , Ve = ".nav-link, .list-group-item, .dropdown-item"
      , Xe = "position";
    class Ye extends R {
        constructor(t, e) {
            super(t),
            this._scrollElement = "BODY" === this._element.tagName ? window : this._element,
            this._config = this._getConfig(e),
            this._offsets = [],
            this._targets = [],
            this._activeTarget = null,
            this._scrollHeight = 0,
            $.on(this._scrollElement, "scroll.bs.scrollspy", (()=>this._process())),
            this.refresh(),
            this._process()
        }
        static get Default() {
            return We
        }
        static get NAME() {
            return qe
        }
        refresh() {
            const t = this._scrollElement === this._scrollElement.window ? "offset" : Xe
              , e = "auto" === this._config.method ? t : this._config.method
              , i = e === Xe ? this._getScrollTop() : 0;
            this._offsets = [],
            this._targets = [],
            this._scrollHeight = this._getScrollHeight(),
            Y.find(Ve, this._config.target).map((t=>{
                const s = o(t)
                  , n = s ? Y.findOne(s) : null;
                if (n) {
                    const t = n.getBoundingClientRect();
                    if (t.width || t.height)
                        return [X[e](n).top + i, s]
                }
                return null
            }
            )).filter((t=>t)).sort(((t,e)=>t[0] - e[0])).forEach((t=>{
                this._offsets.push(t[0]),
                this._targets.push(t[1])
            }
            ))
        }
        dispose() {
            $.off(this._scrollElement, ".bs.scrollspy"),
            super.dispose()
        }
        _getConfig(t) {
            return (t = {
                ...We,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            }).target = c(t.target) || document.documentElement,
            h(qe, t, Ue),
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
            const t = this._getScrollTop() + this._config.offset
              , e = this._getScrollHeight()
              , i = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(),
            t >= i) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t)
            } else {
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                    return this._activeTarget = null,
                    void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] && t >= this._offsets[e] && (void 0 === this._offsets[e + 1] || t < this._offsets[e + 1]) && this._activate(this._targets[e])
            }
        }
        _activate(t) {
            this._activeTarget = t,
            this._clear();
            const e = Ve.split(",").map((e=>`${e}[data-bs-target="${t}"],${e}[href="${t}"]`))
              , i = Y.findOne(e.join(","), this._config.target);
            i.classList.add(Ke),
            i.classList.contains("dropdown-item") ? Y.findOne(".dropdown-toggle", i.closest(".dropdown")).classList.add(Ke) : Y.parents(i, ".nav, .list-group").forEach((t=>{
                Y.prev(t, ".nav-link, .list-group-item").forEach((t=>t.classList.add(Ke))),
                Y.prev(t, ".nav-item").forEach((t=>{
                    Y.children(t, ".nav-link").forEach((t=>t.classList.add(Ke)))
                }
                ))
            }
            )),
            $.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
            })
        }
        _clear() {
            Y.find(Ve, this._config.target).filter((t=>t.classList.contains(Ke))).forEach((t=>t.classList.remove(Ke)))
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = Ye.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", (()=>{
        Y.find('[data-bs-spy="scroll"]').forEach((t=>new Ye(t)))
    }
    )),
    v(Ye);
    const Qe = "active"
      , Ge = "fade"
      , Ze = "show"
      , Je = ".active"
      , ti = ":scope > li > .active";
    class ei extends R {
        static get NAME() {
            return "tab"
        }
        show() {
            if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Qe))
                return;
            let t;
            const e = r(this._element)
              , i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? ti : Je;
                t = Y.find(e, i),
                t = t[t.length - 1]
            }
            const s = t ? $.trigger(t, "hide.bs.tab", {
                relatedTarget: this._element
            }) : null;
            if ($.trigger(this._element, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || null !== s && s.defaultPrevented)
                return;
            this._activate(this._element, i);
            const n = ()=>{
                $.trigger(t, "hidden.bs.tab", {
                    relatedTarget: this._element
                }),
                $.trigger(this._element, "shown.bs.tab", {
                    relatedTarget: t
                })
            }
            ;
            e ? this._activate(e, e.parentNode, n) : n()
        }
        _activate(t, e, i) {
            const s = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? Y.children(e, Je) : Y.find(ti, e))[0]
              , n = i && s && s.classList.contains(Ge)
              , o = ()=>this._transitionComplete(t, s, i);
            s && n ? (s.classList.remove(Ze),
            this._queueCallback(o, t, !0)) : o()
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Qe);
                const t = Y.findOne(":scope > .dropdown-menu .active", e.parentNode);
                t && t.classList.remove(Qe),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }
            t.classList.add(Qe),
            "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
            f(t),
            t.classList.contains(Ge) && t.classList.add(Ze);
            let s = t.parentNode;
            if (s && "LI" === s.nodeName && (s = s.parentNode),
            s && s.classList.contains("dropdown-menu")) {
                const e = t.closest(".dropdown");
                e && Y.find(".dropdown-toggle", e).forEach((t=>t.classList.add(Qe))),
                t.setAttribute("aria-expanded", !0)
            }
            i && i()
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = ei.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }
            ))
        }
    }
    $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        u(this) || ei.getOrCreateInstance(this).show()
    }
    )),
    v(ei);
    const ii = "toast"
      , si = "hide"
      , ni = "show"
      , oi = "showing"
      , ri = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    }
      , ai = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
    class li extends R {
        constructor(t, e) {
            super(t),
            this._config = this._getConfig(e),
            this._timeout = null,
            this._hasMouseInteraction = !1,
            this._hasKeyboardInteraction = !1,
            this._setListeners()
        }
        static get DefaultType() {
            return ri
        }
        static get Default() {
            return ai
        }
        static get NAME() {
            return ii
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(),
            this._config.animation && this._element.classList.add("fade"),
            this._element.classList.remove(si),
            f(this._element),
            this._element.classList.add(ni),
            this._element.classList.add(oi),
            this._queueCallback((()=>{
                this._element.classList.remove(oi),
                $.trigger(this._element, "shown.bs.toast"),
                this._maybeScheduleHide()
            }
            ), this._element, this._config.animation))
        }
        hide() {
            this._element.classList.contains(ni) && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(oi),
            this._queueCallback((()=>{
                this._element.classList.add(si),
                this._element.classList.remove(oi),
                this._element.classList.remove(ni),
                $.trigger(this._element, "hidden.bs.toast")
            }
            ), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(),
            this._element.classList.contains(ni) && this._element.classList.remove(ni),
            super.dispose()
        }
        _getConfig(t) {
            return t = {
                ...ai,
                ...X.getDataAttributes(this._element),
                ..."object" == typeof t && t ? t : {}
            },
            h(ii, t, this.constructor.DefaultType),
            t
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((()=>{
                this.hide()
            }
            ), this._config.delay)))
        }
        _onInteraction(t, e) {
            switch (t.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = e;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = e
            }
            if (e)
                return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t=>this._onInteraction(t, !0))),
            $.on(this._element, "mouseout.bs.toast", (t=>this._onInteraction(t, !1))),
            $.on(this._element, "focusin.bs.toast", (t=>this._onInteraction(t, !0))),
            $.on(this._element, "focusout.bs.toast", (t=>this._onInteraction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout),
            this._timeout = null
        }
        static jQueryInterface(t) {
            return this.each((function() {
                const e = li.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }
            ))
        }
    }
    return F(li),
    v(li),
    {
        Alert: q,
        Button: U,
        Carousel: at,
        Collapse: mt,
        Dropdown: Ht,
        Modal: he,
        Offcanvas: me,
        Popover: Fe,
        ScrollSpy: Ye,
        Tab: ei,
        Toast: li,
        Tooltip: $e
    }
}
));

/*!
  * @module navigation
  */
(function($) {
    "use strict";
    $.fn.menumaker = function(options) {
        var nav = $(this)
          , settings = $.extend({
            format: "dropdown",
            sticky: false
        }, options);
        return this.each(function() {
            $(this).find(".navbar-toggler").on('click', function() {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            nav.find('.navbar-nav li ul').parent().addClass('has-sub');
            nav.find('.navbar-nav li ul li').parent().addClass('sub-menu');
            var multiTg = function() {
                nav.find(".has-sub").prepend('<span class="submenu-button"></span>');
                nav.find('.navbar-nav > li.has-sub > .submenu-button').on('click', function() {
                    $(this).next('.sub-menu').slideToggle();
                    $(this).siblings('ul').addClass('open').slideToggle();
                    $(this).parents('.navbar-nav > li.has-sub').toggleClass('active').siblings('.has-sub').children('.sub-menu').slideUp().removeClass('open').parents('li').removeClass('active');
                });
                nav.find('.sub-menu > li.has-sub > .submenu-button').on('click', function() {
                    $(this).next('.sub-menu').slideToggle();
                    $(this).siblings('ul').addClass('open').slideToggle();
                    $(this).parents('.sub-menu > li').toggleClass('active').siblings('.has-sub').children('.sub-menu').slideUp().removeClass('open').parents('li').removeClass('active');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).parents('li').eq(1).addClass('active');
                    }
                });
            };
            if (settings.format === 'multitoggle')
                multiTg();
            else
                nav.addClass('dropdown');
            if (settings.sticky === true)
                nav.css('position', 'fixed');
            var resizeFix = function() {
                var mediasize = 1091;
                if ($(window).width() > mediasize) {
                    nav.find('ul').show();
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    }
    ;
    $(document).ready(function() {
        $("nav").menumaker({
            format: "multitoggle"
        });
        var urlparam = window.location.pathname.split('/');
        var menuselctor = window.location.pathname;
        if (urlparam[urlparam.length - 1].length > 0)
            menuselctor = urlparam[urlparam.length - 1];
        else
            menuselctor = urlparam[urlparam.length - 2];
        $('.navbar-nav li').find('a[href="' + menuselctor + '"]').closest('li').addClass('active').parents().eq(1).addClass('current');
        $('.navbar-nav li.has-sub ul li').find('a[href="' + menuselctor + '"]').parents().eq(4).addClass('current');
    });
    $(".navbar-default .attr-nav").each(function() {
        $("li.search > a", this).on("click", function(e) {
            e.preventDefault();
            $(".top-search").slideToggle();
        });
    });
    $(".input-group-addon.close-search").on("click", function() {
        $(".top-search").slideUp();
    });
}
)(jQuery);

/**
  * Owl Carousel v2.3.4
  * Copyright 2013-2018 David Deutsch
  * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
  */
!function(a, b, c, d) {
    function e(b, c) {
        this.settings = null,
        this.options = a.extend({}, e.Defaults, c),
        this.$element = a(b),
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
        a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)),
        a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)),
        a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    e.Defaults = {
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
        responsiveBaseElement: b,
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
    e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    e.Type = {
        Event: "event",
        State: "state"
    },
    e.Plugins = {},
    e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || ""
              , c = !this.settings.autoWidth
              , d = this.settings.rtl
              , e = {
                width: "auto",
                "margin-left": d ? b : "",
                "margin-right": d ? "" : b
            };
            !c && this.$stage.children().css(e),
            a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , c = null
              , d = this._items.length
              , e = !this.settings.autoWidth
              , f = [];
            for (a.items = {
                merge: !1,
                width: b
            }; d--; )
                c = this._mergers[d],
                c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                a.items.merge = c > 1 || a.items.merge,
                f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = []
              , c = this._items
              , d = this.settings
              , e = Math.max(2 * d.items, 4)
              , f = 2 * Math.ceil(c.length / 2)
              , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
              , h = ""
              , i = "";
            for (g /= 2; g > 0; )
                b.push(this.normalize(b.length / 2, !0)),
                h += c[b[b.length - 1]][0].outerHTML,
                b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                i = c[b[b.length - 1]][0].outerHTML + i,
                g -= 1;
            this._clones = b,
            a(h).addClass("cloned").appendTo(this.$stage),
            a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                d = f[c - 1] || 0,
                e = this._widths[this.relative(c)] + this.settings.margin,
                f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding
              , b = this._coordinates
              , c = {
                width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                "padding-left": a || "",
                "padding-right": a || ""
            };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length
              , c = !this.settings.autoWidth
              , d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--; )
                    a.css.width = this._widths[this.relative(b)],
                    d.eq(b).css(a.css);
            else
                c && (a.css.width = a.items.width,
                d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0,
            a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
            this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
            for (c = 0,
            d = this._coordinates.length; c < d; c++)
                a = this._coordinates[c - 1] || 0,
                b = Math.abs(this._coordinates[c]) + f * e,
                (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    e.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = a("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass
        }).wrap(a("<div/>", {
            class: this.settings.stageOuterClass
        })),
        this.$element.append(this.$stage.parent()))
    }
    ,
    e.prototype.initializeItems = function() {
        var b = this.$element.find(".owl-item");
        if (b.length)
            return this._items = b.get().map(function(b) {
                return a(b)
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
    e.prototype.initialize = function() {
        if (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) {
            var a, b, c;
            a = this.$element.find("img"),
            b = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
            c = this.$element.children(b).width(),
            a.length && c <= 0 && this.preloadAutoWidthImages(a)
        }
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    e.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    e.prototype.setup = function() {
        var b = this.viewport()
          , c = this.options.responsive
          , d = -1
          , e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }),
        e = a.extend({}, this.options, c[d]),
        "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
        delete e.responsive,
        e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }),
        this._breakpoint = d,
        this.settings = e,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
        this.trigger("prepared", {
            content: c.data
        }),
        c.data
    }
    ,
    e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
            return this[a]
        }, this._invalidated), e = {}; b < c; )
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
            b++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
        case e.Width.Inner:
        case e.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    e.prototype.refresh = function() {
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
    e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer),
        this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))))
    }
    ,
    e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }
    ,
    e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
        d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(),
        d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }),
        this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = a(b.target),
        this._drag.stage.start = d,
        this._drag.stage.current = d,
        this._drag.pointer = this.pointer(b),
        a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
        a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
            Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    e.prototype.onDragMove = function(a) {
        var b = null
          , c = null
          , d = null
          , e = this.difference(this._drag.pointer, this.pointer(a))
          , f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(),
        this.settings.loop ? (b = this.coordinates(this.minimum()),
        c = this.coordinates(this.maximum() + 1) - b,
        f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
        c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
        d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
        f.x = Math.max(Math.min(f.x, b + d), c + d)),
        this._drag.stage.current = f,
        this.animate(f.x))
    }
    ,
    e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b))
          , e = this._drag.stage.current
          , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = f,
        (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    e.prototype.closest = function(b, c) {
        var e = -1
          , f = 30
          , g = this.width()
          , h = this.coordinates();
        return this.settings.freeDrag || a.each(h, a.proxy(function(a, i) {
            return "left" === c && b > i - f && b < i + f ? e = a : "right" === c && b > i - g - f && b < i - g + f ? e = a + 1 : this.op(b, "<", i) && this.op(b, ">", h[a + 1] !== d ? h[a + 1] : i - g) && (e = "left" === c ? a + 1 : a),
            -1 === e
        }, this)),
        this.settings.loop || (this.op(b, ">", h[this.minimum()]) ? e = b = this.minimum() : this.op(b, "<", h[this.maximum()]) && (e = b = this.maximum())),
        e
    }
    ,
    e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        c && (this.enter("animating"),
        this.trigger("translate")),
        a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }
    ,
    e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }
    ,
    e.prototype.current = function(a) {
        if (a === d)
            return this._current;
        if (0 === this._items.length)
            return d;
        if (a = this.normalize(a),
        this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)),
            this._current = a,
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
    e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0,
        this.is("valid") && this.leave("valid")),
        a.map(this._invalidated, function(a, b) {
            return b
        })
    }
    ,
    e.prototype.reset = function(a) {
        (a = this.normalize(a)) !== d && (this._speed = 0,
        this._current = a,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(a)),
        this.release(["translate", "translated"]))
    }
    ,
    e.prototype.normalize = function(a, b) {
        var c = this._items.length
          , e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
        a
    }
    ,
    e.prototype.relative = function(a) {
        return a -= this._clones.length / 2,
        this.normalize(a, !0)
    }
    ,
    e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings, f = this._coordinates.length;
        if (e.loop)
            f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            if (b = this._items.length)
                for (c = this._items[--b].width(),
                d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); )
                    ;
            f = b + 1
        } else
            f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2),
        Math.max(f, 0)
    }
    ,
    e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }
    ,
    e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0),
        this._items[a])
    }
    ,
    e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
        this._mergers[a])
    }
    ,
    e.prototype.clones = function(b) {
        var c = this._clones.length / 2
          , e = c + this._items.length
          , f = function(a) {
            return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }
    ,
    e.prototype.speed = function(a) {
        return a !== d && (this._speed = a),
        this._speed
    }
    ,
    e.prototype.coordinates = function(b) {
        var c, e = 1, f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
        f = b + 1),
        c = this._coordinates[b],
        c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
        c = Math.ceil(c))
    }
    ,
    e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }
    ,
    e.prototype.to = function(a, b) {
        var c = this.current()
          , d = null
          , e = a - this.relative(c)
          , f = (e > 0) - (e < 0)
          , g = this._items.length
          , h = this.minimum()
          , i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
        a = c + e,
        (d = ((a - h) % g + g) % g + h) !== a && d - e <= i && d - e > 0 && (c = d - e,
        a = d,
        this.reset(c))) : this.settings.rewind ? (i += 1,
        a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }
    ,
    e.prototype.next = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) + 1, a)
    }
    ,
    e.prototype.prev = function(a) {
        a = a || !1,
        this.to(this.relative(this.current()) - 1, a)
    }
    ,
    e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        d
    }
    ,
    e.prototype.replace = function(b) {
        this.$stage.empty(),
        this._items = [],
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
        b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b),
            this.$stage.append(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0),
        b = b instanceof jQuery ? b : a(b),
        this.trigger("add", {
            content: b,
            position: c
        }),
        b = this.prepare(b),
        0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
        0 !== this._items.length && this._items[c - 1].after(b),
        this._items.push(b),
        this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
        this._items.splice(c, 0, b),
        this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: b,
            position: c
        })
    }
    ,
    e.prototype.remove = function(a) {
        (a = this.normalize(a, !0)) !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: a
        }))
    }
    ,
    e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"),
            c = a(c),
            a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src),
                c.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }
    ,
    e.prototype.destroy = function() {
        this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        a(c).off(".owl.core"),
        !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer),
        this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins)
            this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
        case "<":
            return d ? a > c : a < c;
        case ">":
            return d ? a < c : a > c;
        case ">=":
            return d ? a <= c : a >= c;
        case "<=":
            return d ? a >= c : a <= c
        }
    }
    ,
    e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ,
    e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }
    ,
    e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , i = a.camelCase(a.grep(["on", b, d], function(a) {
            return a
        }).join("-").toLowerCase())
          , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
            relatedTarget: this
        }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }),
        this.register({
            type: e.Type.Event,
            name: b
        }),
        this.$element.trigger(j),
        this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
    }
    ,
    e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this))
    }
    ,
    e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }
    ,
    e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}),
            !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && -1 !== a.namespace.indexOf("owl") ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }
                ,
                a.event.special[b.name].owl = !0
            }
        } else
            b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
            this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                return a.inArray(c, this._states.tags[b.name]) === d
            }, this)))
    }
    ,
    e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }
    ,
    e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }
    ,
    e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event,
        a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
        a.pageX ? (c.x = a.pageX,
        c.y = a.pageY) : (c.x = a.clientX,
        c.y = a.clientY),
        c
    }
    ,
    e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }
    ,
    e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }
    ,
    a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this)
              , f = d.data("owl.carousel");
            f || (f = new e(this,"object" == typeof b && b),
            d.data("owl.carousel", f),
            a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }),
                f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                    f[c].apply(this, [].slice.call(arguments, 1)),
                    this.release([c]))
                }, f))
            })),
            "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }
    ,
    a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    e.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    e.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) {
                    var c = this._core.settings
                      , e = c.center && Math.ceil(c.items / 2) || c.items
                      , f = c.center && -1 * e || 0
                      , g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f
                      , h = this._core.clones().length
                      , i = a.proxy(function(a, b) {
                        this.load(b)
                    }, this);
                    for (c.lazyLoadEager > 0 && (e += c.lazyLoadEager,
                    c.loop && (g -= c.lazyLoadEager,
                    e++)); f++ < e; )
                        this.load(h / 2 + this._core.relative(g)),
                        h && a.each(this._core.clones(this._core.relative(g)), i),
                        g++
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    },
    e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c)
          , e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src") || f.attr("data-srcset");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"),
            f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : f.is("source") ? f.one("load.owl.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("srcset", g) : (e = new Image,
            e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this),
            e.src = g)
        }, this)),
        this._loaded.push(d.get(0)))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(c) {
        this._core = c,
        this._previousHeight = null,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" === a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var d = this;
        a(b).on("load", function() {
            d._core.settings.autoHeight && d.update()
        }),
        a(b).resize(function() {
            d._core.settings.autoHeight && (null != d._intervalId && clearTimeout(d._intervalId),
            d._intervalId = setTimeout(function() {
                d.update()
            }, 250))
        })
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    e.prototype.update = function() {
        var b = this._core._current
          , c = b + this._core.settings.items
          , d = this._core.settings.lazyLoad
          , e = this._core.$stage.children().toArray().slice(b, c)
          , f = []
          , g = 0;
        a.each(e, function(b, c) {
            f.push(a(c).height())
        }),
        g = Math.max.apply(null, f),
        g <= 1 && d && this._previousHeight && (g = this._previousHeight),
        this._previousHeight = g,
        this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"),
                    this.fetch(c, a(b.content)))
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    e.prototype.fetch = function(a, b) {
        var c = function() {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
        }()
          , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
          , e = a.attr("data-width") || this._core.settings.videoWidth
          , f = a.attr("data-height") || this._core.settings.videoHeight
          , g = a.attr("href");
        if (!g)
            throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
        d[3].indexOf("youtu") > -1)
            c = "youtube";
        else if (d[3].indexOf("vimeo") > -1)
            c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6],
        this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        },
        b.attr("data-video", g),
        this.thumbnail(a, this._videos[g])
    }
    ,
    e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? "width:" + c.width + "px;height:" + c.height + "px;" : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(c) {
            e = '<div class="owl-video-play-icon"></div>',
            d = k.lazyLoad ? a("<div/>", {
                class: "owl-video-tn " + j,
                srcType: c
            }) : a("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + c + ")"
            }),
            b.after(d),
            b.after(e)
        };
        if (b.wrap(a("<div/>", {
            class: "owl-video-wrapper",
            style: g
        })),
        this._core.settings.lazyLoad && (i = "data-src",
        j = "owl-lazy"),
        h.length)
            return l(h.attr(i)),
            h.remove(),
            !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
        l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large,
                l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url,
                l(f)
            }
        })
    }
    ,
    e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    e.prototype.play = function(b) {
        var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        e = this._core.items(this._core.relative(e.index())),
        this._core.reset(e.index()),
        c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),
        c.attr("height", h),
        c.attr("width", g),
        "youtube" === f.type ? c.attr("src", "//www.youtube.com/embed/" + f.id + "?autoplay=1&rel=0&v=" + f.id) : "vimeo" === f.type ? c.attr("src", "//player.vimeo.com/video/" + f.id + "?autoplay=1") : "vzaar" === f.type && c.attr("src", "//view.vzaar.com/" + f.id + "/player?autoplay=true"),
        a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),
        this._playing = e.addClass("owl-video-playing"))
    }
    ,
    e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b,
        this.core.options = a.extend({}, e.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = d,
        this.next = d,
        this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    e.prototype.swap = function() {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            d.one(a.support.animation.end, c).css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g)),
            f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
        }
    }
    ,
    e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers)
            this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    e.prototype._next = function(d) {
        this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed)
    }
    ,
    e.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    e.prototype.play = function(c, d) {
        var e;
        this._core.is("rotating") || this._core.enter("rotating"),
        c = c || this._core.settings.autoplayTimeout,
        e = Math.min(this._time % (this._timeout || c), c),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : b.clearTimeout(this._call),
        this._time += this.read() % c - e,
        this._timeout = c,
        this._call = b.setTimeout(a.proxy(this._next, this, d), c - e)
    }
    ,
    e.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        b.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    e.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        b.clearTimeout(this._call))
    }
    ,
    e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers)
            this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this))
            "function" != typeof this[b] && (this[b] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b,
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
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    e.Defaults = {
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
    e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)),
        this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)),
        c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(),
            this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides)
            this._core[b] = a.proxy(this[b], this)
    }
    ,
    e.prototype.destroy = function() {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers)
            this.$element.off(a, this._handlers[a]);
        for (b in this._controls)
            "$relative" === b && e.navContainer ? this._controls[b].html("") : this._controls[b].remove();
        for (d in this.overides)
            this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this))
            "function" != typeof this[c] && (this[c] = null)
    }
    ,
    e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
        g.dots || "page" == g.slideBy)
            for (this._pages = [],
            a = d,
            b = 0,
            c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                        start: Math.min(f, a - d),
                        end: a - d + h - 1
                    }),
                    Math.min(f, a - d) === f)
                        break;
                    b = 0,
                    ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }
    ,
    e.prototype.draw = function() {
        var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d),
        c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !c.dots || d),
        c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
        c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }
    ,
    e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }
    ,
    e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
        d = this._pages.length,
        b ? ++c : --c,
        c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
        d = this._core.items().length,
        b ? c += e.slideBy : c -= e.slideBy),
        c
    }
    ,
    e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }
    ,
    e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }
    ,
    e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length,
        a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c)
                        return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current()))
                      , e = a.map(this._hashes, function(a, b) {
                        return a === d ? b : null
                    }).join();
                    if (!e || b.location.hash.slice(1) === e)
                        return;
                    b.location.hash = e
                }
            }, this)
        },
        this._core.options = a.extend({}, e.Defaults, this._core.options),
        this.$element.on(this._handlers),
        a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1)
              , e = this._core.$stage.children()
              , f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    },
    e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers)
            this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this))
            "function" != typeof this[d] && (this[d] = null)
    }
    ,
    a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1
          , f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d)
                return e = !c || b,
                !1
        }),
        e
    }
    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style
      , h = "Webkit Moz O ms".split(" ")
      , i = {
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
      , j = {
        csstransforms: function() {
            return !!e("transform")
        },
        csstransforms3d: function() {
            return !!e("perspective")
        },
        csstransitions: function() {
            return !!e("transition")
        },
        cssanimations: function() {
            return !!e("animation")
        }
    };
    j.csstransitions() && (a.support.transition = new String(f("transition")),
    a.support.transition.end = i.transition.end[a.support.transition]),
    j.cssanimations() && (a.support.animation = new String(f("animation")),
    a.support.animation.end = i.animation.end[a.support.animation]),
    j.csstransforms() && (a.support.transform = new String(f("transform")),
    a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

!function(e) {
    e(["jquery"], (function(e) {
        return function() {
            function t(t, n) {
                return t || (t = a()),
                (l = e("#" + t.containerId)).length || n && (l = function(t) {
                    return (l = e("<div/>").attr("id", t.containerId).addClass(t.positionClass)).appendTo(e(t.target)),
                    l
                }(t)),
                l
            }
            function n(t) {
                for (var n = l.children(), o = n.length - 1; o >= 0; o--)
                    s(e(n[o]), t)
            }
            function s(t, n, s) {
                var o = !(!s || !s.force) && s.force;
                return !(!t || !o && 0 !== e(":focus", t).length || (t[n.hideMethod]({
                    duration: n.hideDuration,
                    easing: n.hideEasing,
                    complete: function() {
                        r(t)
                    }
                }),
                0))
            }
            function o(e) {
                c && c(e)
            }
            function i(n) {
                function s(e) {
                    return null == e && (e = ""),
                    e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                function i(t) {
                    var n = t && !1 !== c.closeMethod ? c.closeMethod : c.hideMethod
                      , s = t && !1 !== c.closeDuration ? c.closeDuration : c.hideDuration
                      , i = t && !1 !== c.closeEasing ? c.closeEasing : c.hideEasing;
                    if (!e(":focus", g).length || t)
                        return clearTimeout(w.intervalId),
                        g[n]({
                            duration: s,
                            easing: i,
                            complete: function() {
                                r(g),
                                clearTimeout(m),
                                c.onHidden && "hidden" !== T.state && c.onHidden(),
                                T.state = "hidden",
                                T.endTime = new Date,
                                o(T)
                            }
                        })
                }
                var c = a()
                  , p = n.iconClass || c.iconClass;
                if (void 0 !== n.optionsOverride && (c = e.extend(c, n.optionsOverride),
                p = n.optionsOverride.iconClass || p),
                !function(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === d)
                            return !0;
                        d = t.message
                    }
                    return !1
                }(c, n)) {
                    u++,
                    l = t(c, !0);
                    var m = null
                      , g = e("<div/>")
                      , f = e("<div/>")
                      , h = e("<div/>")
                      , v = e("<div/>")
                      , C = e(c.closeHtml)
                      , w = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                    }
                      , T = {
                        toastId: u,
                        state: "visible",
                        startTime: new Date,
                        options: c,
                        map: n
                    };
                    return n.iconClass && g.addClass(c.toastClass).addClass(p),
                    function() {
                        if (n.title) {
                            var e = n.title;
                            c.escapeHtml && (e = s(n.title)),
                            f.append(e).addClass(c.titleClass),
                            g.append(f)
                        }
                    }(),
                    function() {
                        if (n.message) {
                            var e = n.message;
                            c.escapeHtml && (e = s(n.message)),
                            h.append(e).addClass(c.messageClass),
                            g.append(h)
                        }
                    }(),
                    c.closeButton && (C.addClass(c.closeClass).attr("role", "button"),
                    g.prepend(C)),
                    c.progressBar && (v.addClass(c.progressClass),
                    g.prepend(v)),
                    c.rtl && g.addClass("rtl"),
                    c.newestOnTop ? l.prepend(g) : l.append(g),
                    function() {
                        var e = "";
                        switch (n.iconClass) {
                        case "toast-success":
                        case "toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive"
                        }
                        g.attr("aria-live", e)
                    }(),
                    g.hide(),
                    g[c.showMethod]({
                        duration: c.showDuration,
                        easing: c.showEasing,
                        complete: c.onShown
                    }),
                    c.timeOut > 0 && (m = setTimeout(i, c.timeOut),
                    w.maxHideTime = parseFloat(c.timeOut),
                    w.hideEta = (new Date).getTime() + w.maxHideTime,
                    c.progressBar && (w.intervalId = setInterval((function() {
                        var e = (w.hideEta - (new Date).getTime()) / w.maxHideTime * 100;
                        v.width(e + "%")
                    }
                    ), 10))),
                    c.closeOnHover && g.hover((function() {
                        clearTimeout(m),
                        w.hideEta = 0,
                        g.stop(!0, !0)[c.showMethod]({
                            duration: c.showDuration,
                            easing: c.showEasing
                        })
                    }
                    ), (function() {
                        (c.timeOut > 0 || c.extendedTimeOut > 0) && (m = setTimeout(i, c.extendedTimeOut),
                        w.maxHideTime = parseFloat(c.extendedTimeOut),
                        w.hideEta = (new Date).getTime() + w.maxHideTime)
                    }
                    )),
                    !c.onclick && c.tapToDismiss && g.click(i),
                    c.closeButton && C && C.click((function(e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && !0 !== e.cancelBubble && (e.cancelBubble = !0),
                        c.onCloseClick && c.onCloseClick(e),
                        i(!0)
                    }
                    )),
                    c.onclick && g.click((function(e) {
                        c.onclick(e),
                        i()
                    }
                    )),
                    o(T),
                    c.debug && console && console.log(T),
                    g
                }
            }
            function a() {
                return e.extend({}, {
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
                    extendedTimeOut: 5000,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5000,
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
                }, h.options)
            }
            function r(e) {
                l || (l = t()),
                e.is(":visible") || (e.remove(),
                e = null,
                0 === l.children().length && (l.remove(),
                d = void 0))
            }
            var l, c, d, u = 0, p = "error", m = "info", g = "success", f = "warning", h = {
                clear: function(e, o) {
                    var i = a();
                    l || t(i),
                    s(e, i, o) || n(i)
                },
                remove: function(n) {
                    var s = a();
                    return l || t(s),
                    n && 0 === e(":focus", n).length ? void r(n) : void (l.children().length && l.remove())
                },
                error: function(e, t, n) {
                    return i({
                        type: p,
                        iconClass: a().iconClasses.error,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                getContainer: t,
                info: function(e, t, n) {
                    return i({
                        type: m,
                        iconClass: a().iconClasses.info,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                options: {},
                subscribe: function(e) {
                    c = e
                },
                success: function(e, t, n) {
                    return i({
                        type: g,
                        iconClass: a().iconClasses.success,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                },
                version: "2.1.3",
                warning: function(e, t, n) {
                    return i({
                        type: f,
                        iconClass: a().iconClasses.warning,
                        message: e,
                        optionsOverride: n,
                        title: t
                    })
                }
            };
            return h
        }()
    }
    ))
}("function" == typeof define && define.amd ? define : function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}
);

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.4.0
 *
 * Copyright 2016 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.Chart = t()
    }
}(function() {
    return function t(e, a, i) {
        function n(r, l) {
            if (!a[r]) {
                if (!e[r]) {
                    var s = "function" == typeof require && require;
                    if (!l && s)
                        return s(r, !0);
                    if (o)
                        return o(r, !0);
                    var d = new Error("Cannot find module '" + r + "'");
                    throw d.code = "MODULE_NOT_FOUND",
                    d
                }
                var u = a[r] = {
                    exports: {}
                };
                e[r][0].call(u.exports, function(t) {
                    var a = e[r][1][t];
                    return n(a ? a : t)
                }, u, u.exports, t, e, a, i)
            }
            return a[r].exports
        }
        for (var o = "function" == typeof require && require, r = 0; r < i.length; r++)
            n(i[r]);
        return n
    }({
        1: [function(t, e, a) {}
        , {}],
        2: [function(t, e, a) {
            function i(t) {
                if (t) {
                    var e = /^#([a-fA-F0-9]{3})$/
                      , a = /^#([a-fA-F0-9]{6})$/
                      , i = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/
                      , n = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/
                      , o = /(\w+)/
                      , r = [0, 0, 0]
                      , l = 1
                      , s = t.match(e);
                    if (s) {
                        s = s[1];
                        for (var d = 0; d < r.length; d++)
                            r[d] = parseInt(s[d] + s[d], 16)
                    } else if (s = t.match(a)) {
                        s = s[1];
                        for (var d = 0; d < r.length; d++)
                            r[d] = parseInt(s.slice(2 * d, 2 * d + 2), 16)
                    } else if (s = t.match(i)) {
                        for (var d = 0; d < r.length; d++)
                            r[d] = parseInt(s[d + 1]);
                        l = parseFloat(s[4])
                    } else if (s = t.match(n)) {
                        for (var d = 0; d < r.length; d++)
                            r[d] = Math.round(2.55 * parseFloat(s[d + 1]));
                        l = parseFloat(s[4])
                    } else if (s = t.match(o)) {
                        if ("transparent" == s[1])
                            return [0, 0, 0, 0];
                        if (r = y[s[1]],
                        !r)
                            return
                    }
                    for (var d = 0; d < r.length; d++)
                        r[d] = v(r[d], 0, 255);
                    return l = l || 0 == l ? v(l, 0, 1) : 1,
                    r[3] = l,
                    r
                }
            }
            function n(t) {
                if (t) {
                    var e = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                      , a = t.match(e);
                    if (a) {
                        var i = parseFloat(a[4])
                          , n = v(parseInt(a[1]), 0, 360)
                          , o = v(parseFloat(a[2]), 0, 100)
                          , r = v(parseFloat(a[3]), 0, 100)
                          , l = v(isNaN(i) ? 1 : i, 0, 1);
                        return [n, o, r, l]
                    }
                }
            }
            function o(t) {
                if (t) {
                    var e = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/
                      , a = t.match(e);
                    if (a) {
                        var i = parseFloat(a[4])
                          , n = v(parseInt(a[1]), 0, 360)
                          , o = v(parseFloat(a[2]), 0, 100)
                          , r = v(parseFloat(a[3]), 0, 100)
                          , l = v(isNaN(i) ? 1 : i, 0, 1);
                        return [n, o, r, l]
                    }
                }
            }
            function r(t) {
                var e = i(t);
                return e && e.slice(0, 3)
            }
            function l(t) {
                var e = n(t);
                return e && e.slice(0, 3)
            }
            function s(t) {
                var e = i(t);
                return e ? e[3] : (e = n(t)) ? e[3] : (e = o(t)) ? e[3] : void 0
            }
            function d(t) {
                return "#" + x(t[0]) + x(t[1]) + x(t[2])
            }
            function u(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? c(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
            }
            function c(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }
            function h(t, e) {
                if (1 > e || t[3] && t[3] < 1)
                    return f(t, e);
                var a = Math.round(t[0] / 255 * 100)
                  , i = Math.round(t[1] / 255 * 100)
                  , n = Math.round(t[2] / 255 * 100);
                return "rgb(" + a + "%, " + i + "%, " + n + "%)"
            }
            function f(t, e) {
                var a = Math.round(t[0] / 255 * 100)
                  , i = Math.round(t[1] / 255 * 100)
                  , n = Math.round(t[2] / 255 * 100);
                return "rgba(" + a + "%, " + i + "%, " + n + "%, " + (e || t[3] || 1) + ")"
            }
            function g(t, e) {
                return 1 > e || t[3] && t[3] < 1 ? p(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
            }
            function p(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }
            function m(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1),
                "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
            }
            function b(t) {
                return k[t.slice(0, 3)]
            }
            function v(t, e, a) {
                return Math.min(Math.max(e, t), a)
            }
            function x(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }
            var y = t(6);
            e.exports = {
                getRgba: i,
                getHsla: n,
                getRgb: r,
                getHsl: l,
                getHwb: o,
                getAlpha: s,
                hexString: d,
                rgbString: u,
                rgbaString: c,
                percentString: h,
                percentaString: f,
                hslString: g,
                hslaString: p,
                hwbString: m,
                keyword: b
            };
            var k = {};
            for (var S in y)
                k[y[S]] = S
        }
        , {
            6: 6
        }],
        3: [function(t, e, a) {
            var i = t(5)
              , n = t(2)
              , o = function(t) {
                if (t instanceof o)
                    return t;
                if (!(this instanceof o))
                    return new o(t);
                this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                };
                var e;
                if ("string" == typeof t)
                    if (e = n.getRgba(t))
                        this.setValues("rgb", e);
                    else if (e = n.getHsla(t))
                        this.setValues("hsl", e);
                    else {
                        if (!(e = n.getHwb(t)))
                            throw new Error('Unable to parse color from string "' + t + '"');
                        this.setValues("hwb", e)
                    }
                else if ("object" == typeof t)
                    if (e = t,
                    void 0 !== e.r || void 0 !== e.red)
                        this.setValues("rgb", e);
                    else if (void 0 !== e.l || void 0 !== e.lightness)
                        this.setValues("hsl", e);
                    else if (void 0 !== e.v || void 0 !== e.value)
                        this.setValues("hsv", e);
                    else if (void 0 !== e.w || void 0 !== e.whiteness)
                        this.setValues("hwb", e);
                    else {
                        if (void 0 === e.c && void 0 === e.cyan)
                            throw new Error("Unable to parse color from object " + JSON.stringify(t));
                        this.setValues("cmyk", e)
                    }
            };
            o.prototype = {
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t),
                    this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t %= 360,
                    t = 0 > t ? 360 + t : t),
                    this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return n.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return n.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return n.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return n.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return n.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return n.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return n.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return n.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], a = 0; a < t.length; a++) {
                        var i = t[a] / 255;
                        e[a] = .03928 >= i ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity()
                      , a = t.luminosity();
                    return e > a ? (e + .05) / (a + .05) : (a + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb
                      , e = (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3;
                    return 128 > e
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; 3 > e; e++)
                        t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t),
                    this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t,
                    this.setValues("hsl", e),
                    this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t,
                    this.setValues("hsl", e),
                    this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t,
                    this.setValues("hsl", e),
                    this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t,
                    this.setValues("hsl", e),
                    this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t,
                    this.setValues("hwb", e),
                    this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t,
                    this.setValues("hwb", e),
                    this
                },
                greyscale: function() {
                    var t = this.values.rgb
                      , e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]),
                    this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t),
                    this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t),
                    this
                },
                rotate: function(t) {
                    var e = this.values.hsl
                      , a = (e[0] + t) % 360;
                    return e[0] = 0 > a ? 360 + a : a,
                    this.setValues("hsl", e),
                    this
                },
                mix: function(t, e) {
                    var a = this
                      , i = t
                      , n = void 0 === e ? .5 : e
                      , o = 2 * n - 1
                      , r = a.alpha() - i.alpha()
                      , l = ((o * r === -1 ? o : (o + r) / (1 + o * r)) + 1) / 2
                      , s = 1 - l;
                    return this.rgb(l * a.red() + s * i.red(), l * a.green() + s * i.green(), l * a.blue() + s * i.blue()).alpha(a.alpha() * n + i.alpha() * (1 - n))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, a = new o, i = this.values, n = a.values;
                    for (var r in i)
                        i.hasOwnProperty(r) && (t = i[r],
                        e = {}.toString.call(t),
                        "[object Array]" === e ? n[r] = t.slice(0) : "[object Number]" === e ? n[r] = t : console.error("unexpected color value:", t));
                    return a
                }
            },
            o.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            },
            o.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            },
            o.prototype.getValues = function(t) {
                for (var e = this.values, a = {}, i = 0; i < t.length; i++)
                    a[t.charAt(i)] = e[t][i];
                return 1 !== e.alpha && (a.a = e.alpha),
                a
            }
            ,
            o.prototype.setValues = function(t, e) {
                var a, n = this.values, o = this.spaces, r = this.maxes, l = 1;
                if ("alpha" === t)
                    l = e;
                else if (e.length)
                    n[t] = e.slice(0, t.length),
                    l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (a = 0; a < t.length; a++)
                        n[t][a] = e[t.charAt(a)];
                    l = e.a
                } else if (void 0 !== e[o[t][0]]) {
                    var s = o[t];
                    for (a = 0; a < t.length; a++)
                        n[t][a] = e[s[a]];
                    l = e.alpha
                }
                if (n.alpha = Math.max(0, Math.min(1, void 0 === l ? n.alpha : l)),
                "alpha" === t)
                    return !1;
                var d;
                for (a = 0; a < t.length; a++)
                    d = Math.max(0, Math.min(r[t][a], n[t][a])),
                    n[t][a] = Math.round(d);
                for (var u in o)
                    u !== t && (n[u] = i[t][u](n[t]));
                return !0
            }
            ,
            o.prototype.setSpace = function(t, e) {
                var a = e[0];
                return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)),
                this.setValues(t, a),
                this)
            }
            ,
            o.prototype.setChannel = function(t, e, a) {
                var i = this.values[t];
                return void 0 === a ? i[e] : a === i[e] ? this : (i[e] = a,
                this.setValues(t, i),
                this)
            }
            ,
            "undefined" != typeof window && (window.Color = o),
            e.exports = o
        }
        , {
            2: 2,
            5: 5
        }],
        4: [function(t, e, a) {
            function i(t) {
                var e, a, i, n = t[0] / 255, o = t[1] / 255, r = t[2] / 255, l = Math.min(n, o, r), s = Math.max(n, o, r), d = s - l;
                return s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d),
                e = Math.min(60 * e, 360),
                0 > e && (e += 360),
                i = (l + s) / 2,
                a = s == l ? 0 : .5 >= i ? d / (s + l) : d / (2 - s - l),
                [e, 100 * a, 100 * i]
            }
            function n(t) {
                var e, a, i, n = t[0], o = t[1], r = t[2], l = Math.min(n, o, r), s = Math.max(n, o, r), d = s - l;
                return a = 0 == s ? 0 : d / s * 1e3 / 10,
                s == l ? e = 0 : n == s ? e = (o - r) / d : o == s ? e = 2 + (r - n) / d : r == s && (e = 4 + (n - o) / d),
                e = Math.min(60 * e, 360),
                0 > e && (e += 360),
                i = s / 255 * 1e3 / 10,
                [e, a, i]
            }
            function o(t) {
                var e = t[0]
                  , a = t[1]
                  , n = t[2]
                  , o = i(t)[0]
                  , r = 1 / 255 * Math.min(e, Math.min(a, n))
                  , n = 1 - 1 / 255 * Math.max(e, Math.max(a, n));
                return [o, 100 * r, 100 * n]
            }
            function l(t) {
                var e, a, i, n, o = t[0] / 255, r = t[1] / 255, l = t[2] / 255;
                return n = Math.min(1 - o, 1 - r, 1 - l),
                e = (1 - o - n) / (1 - n) || 0,
                a = (1 - r - n) / (1 - n) || 0,
                i = (1 - l - n) / (1 - n) || 0,
                [100 * e, 100 * a, 100 * i, 100 * n]
            }
            function s(t) {
                return G[JSON.stringify(t)]
            }
            function d(t) {
                var e = t[0] / 255
                  , a = t[1] / 255
                  , i = t[2] / 255;
                e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92,
                a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92,
                i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92;
                var n = .4124 * e + .3576 * a + .1805 * i
                  , o = .2126 * e + .7152 * a + .0722 * i
                  , r = .0193 * e + .1192 * a + .9505 * i;
                return [100 * n, 100 * o, 100 * r]
            }
            function u(t) {
                var e, a, i, n = d(t), o = n[0], r = n[1], l = n[2];
                return o /= 95.047,
                r /= 100,
                l /= 108.883,
                o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116,
                r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116,
                l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116,
                e = 116 * r - 16,
                a = 500 * (o - r),
                i = 200 * (r - l),
                [e, a, i]
            }
            function c(t) {
                return W(u(t))
            }
            function h(t) {
                var e, a, i, n, o, r = t[0] / 360, l = t[1] / 100, s = t[2] / 100;
                if (0 == l)
                    return o = 255 * s,
                    [o, o, o];
                a = .5 > s ? s * (1 + l) : s + l - s * l,
                e = 2 * s - a,
                n = [0, 0, 0];
                for (var d = 0; 3 > d; d++)
                    i = r + 1 / 3 * -(d - 1),
                    0 > i && i++,
                    i > 1 && i--,
                    o = 1 > 6 * i ? e + 6 * (a - e) * i : 1 > 2 * i ? a : 2 > 3 * i ? e + (a - e) * (2 / 3 - i) * 6 : e,
                    n[d] = 255 * o;
                return n
            }
            function f(t) {
                var e, a, i = t[0], n = t[1] / 100, o = t[2] / 100;
                return 0 === o ? [0, 0, 0] : (o *= 2,
                n *= 1 >= o ? o : 2 - o,
                a = (o + n) / 2,
                e = 2 * n / (o + n),
                [i, 100 * e, 100 * a])
            }
            function p(t) {
                return o(h(t))
            }
            function m(t) {
                return l(h(t))
            }
            function v(t) {
                return s(h(t))
            }
            function x(t) {
                var e = t[0] / 60
                  , a = t[1] / 100
                  , i = t[2] / 100
                  , n = Math.floor(e) % 6
                  , o = e - Math.floor(e)
                  , r = 255 * i * (1 - a)
                  , l = 255 * i * (1 - a * o)
                  , s = 255 * i * (1 - a * (1 - o))
                  , i = 255 * i;
                switch (n) {
                case 0:
                    return [i, s, r];
                case 1:
                    return [l, i, r];
                case 2:
                    return [r, i, s];
                case 3:
                    return [r, l, i];
                case 4:
                    return [s, r, i];
                case 5:
                    return [i, r, l]
                }
            }
            function y(t) {
                var e, a, i = t[0], n = t[1] / 100, o = t[2] / 100;
                return a = (2 - n) * o,
                e = n * o,
                e /= 1 >= a ? a : 2 - a,
                e = e || 0,
                a /= 2,
                [i, 100 * e, 100 * a]
            }
            function k(t) {
                return o(x(t))
            }
            function S(t) {
                return l(x(t))
            }
            function w(t) {
                return s(x(t))
            }
            function M(t) {
                var e, a, i, n, o = t[0] / 360, l = t[1] / 100, s = t[2] / 100, d = l + s;
                switch (d > 1 && (l /= d,
                s /= d),
                e = Math.floor(6 * o),
                a = 1 - s,
                i = 6 * o - e,
                0 != (1 & e) && (i = 1 - i),
                n = l + i * (a - l),
                e) {
                default:
                case 6:
                case 0:
                    r = a,
                    g = n,
                    b = l;
                    break;
                case 1:
                    r = n,
                    g = a,
                    b = l;
                    break;
                case 2:
                    r = l,
                    g = a,
                    b = n;
                    break;
                case 3:
                    r = l,
                    g = n,
                    b = a;
                    break;
                case 4:
                    r = n,
                    g = l,
                    b = a;
                    break;
                case 5:
                    r = a,
                    g = l,
                    b = n
                }
                return [255 * r, 255 * g, 255 * b]
            }
            function C(t) {
                return i(M(t))
            }
            function D(t) {
                return n(M(t))
            }
            function I(t) {
                return l(M(t))
            }
            function A(t) {
                return s(M(t))
            }
            function T(t) {
                var e, a, i, n = t[0] / 100, o = t[1] / 100, r = t[2] / 100, l = t[3] / 100;
                return e = 1 - Math.min(1, n * (1 - l) + l),
                a = 1 - Math.min(1, o * (1 - l) + l),
                i = 1 - Math.min(1, r * (1 - l) + l),
                [255 * e, 255 * a, 255 * i]
            }
            function P(t) {
                return i(T(t))
            }
            function F(t) {
                return n(T(t))
            }
            function _(t) {
                return o(T(t))
            }
            function R(t) {
                return s(T(t))
            }
            function V(t) {
                var e, a, i, n = t[0] / 100, o = t[1] / 100, r = t[2] / 100;
                return e = 3.2406 * n + -1.5372 * o + r * -.4986,
                a = n * -.9689 + 1.8758 * o + .0415 * r,
                i = .0557 * n + o * -.204 + 1.057 * r,
                e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e = 12.92 * e,
                a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a = 12.92 * a,
                i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i = 12.92 * i,
                e = Math.min(Math.max(0, e), 1),
                a = Math.min(Math.max(0, a), 1),
                i = Math.min(Math.max(0, i), 1),
                [255 * e, 255 * a, 255 * i]
            }
            function L(t) {
                var e, a, i, n = t[0], o = t[1], r = t[2];
                return n /= 95.047,
                o /= 100,
                r /= 108.883,
                n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116,
                o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116,
                r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116,
                e = 116 * o - 16,
                a = 500 * (n - o),
                i = 200 * (o - r),
                [e, a, i]
            }
            function O(t) {
                return W(L(t))
            }
            function B(t) {
                var e, a, i, n, o = t[0], r = t[1], l = t[2];
                return 8 >= o ? (a = 100 * o / 903.3,
                n = 7.787 * (a / 100) + 16 / 116) : (a = 100 * Math.pow((o + 16) / 116, 3),
                n = Math.pow(a / 100, 1 / 3)),
                e = .008856 >= e / 95.047 ? e = 95.047 * (r / 500 + n - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + n, 3),
                i = .008859 >= i / 108.883 ? i = 108.883 * (n - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(n - l / 200, 3),
                [e, a, i]
            }
            function W(t) {
                var e, a, i, n = t[0], o = t[1], r = t[2];
                return e = Math.atan2(r, o),
                a = 360 * e / 2 / Math.PI,
                0 > a && (a += 360),
                i = Math.sqrt(o * o + r * r),
                [n, i, a]
            }
            function z(t) {
                return V(B(t))
            }
            function N(t) {
                var e, a, i, n = t[0], o = t[1], r = t[2];
                return i = r / 360 * 2 * Math.PI,
                e = o * Math.cos(i),
                a = o * Math.sin(i),
                [n, e, a]
            }
            function E(t) {
                return B(N(t))
            }
            function H(t) {
                return z(N(t))
            }
            function U(t) {
                return Z[t]
            }
            function j(t) {
                return i(U(t))
            }
            function q(t) {
                return n(U(t))
            }
            function Y(t) {
                return o(U(t))
            }
            function X(t) {
                return l(U(t))
            }
            function K(t) {
                return u(U(t))
            }
            function J(t) {
                return d(U(t))
            }
            e.exports = {
                rgb2hsl: i,
                rgb2hsv: n,
                rgb2hwb: o,
                rgb2cmyk: l,
                rgb2keyword: s,
                rgb2xyz: d,
                rgb2lab: u,
                rgb2lch: c,
                hsl2rgb: h,
                hsl2hsv: f,
                hsl2hwb: p,
                hsl2cmyk: m,
                hsl2keyword: v,
                hsv2rgb: x,
                hsv2hsl: y,
                hsv2hwb: k,
                hsv2cmyk: S,
                hsv2keyword: w,
                hwb2rgb: M,
                hwb2hsl: C,
                hwb2hsv: D,
                hwb2cmyk: I,
                hwb2keyword: A,
                cmyk2rgb: T,
                cmyk2hsl: P,
                cmyk2hsv: F,
                cmyk2hwb: _,
                cmyk2keyword: R,
                keyword2rgb: U,
                keyword2hsl: j,
                keyword2hsv: q,
                keyword2hwb: Y,
                keyword2cmyk: X,
                keyword2lab: K,
                keyword2xyz: J,
                xyz2rgb: V,
                xyz2lab: L,
                xyz2lch: O,
                lab2xyz: B,
                lab2rgb: z,
                lab2lch: W,
                lch2lab: N,
                lch2xyz: E,
                lch2rgb: H
            };
            var Z = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
              , G = {};
            for (var Q in Z)
                G[JSON.stringify(Z[Q])] = Q
        }
        , {}],
        5: [function(t, e, a) {
            var i = t(4)
              , n = function() {
                return new d
            };
            for (var o in i) {
                n[o + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)),
                        i[t](e)
                    }
                }(o);
                var r = /(\w+)2(\w+)/.exec(o)
                  , l = r[1]
                  , s = r[2];
                n[l] = n[l] || {},
                n[l][s] = n[o] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var a = i[t](e);
                        if ("string" == typeof a || void 0 === a)
                            return a;
                        for (var n = 0; n < a.length; n++)
                            a[n] = Math.round(a[n]);
                        return a
                    }
                }(o)
            }
            var d = function() {
                this.convs = {}
            };
            d.prototype.routeSpace = function(t, e) {
                var a = e[0];
                return void 0 === a ? this.getValues(t) : ("number" == typeof a && (a = Array.prototype.slice.call(e)),
                this.setValues(t, a))
            }
            ,
            d.prototype.setValues = function(t, e) {
                return this.space = t,
                this.convs = {},
                this.convs[t] = e,
                this
            }
            ,
            d.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var a = this.space
                      , i = this.convs[a];
                    e = n[a][t](i),
                    this.convs[t] = e
                }
                return e
            }
            ,
            ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                d.prototype[t] = function(e) {
                    return this.routeSpace(t, arguments)
                }
            }),
            e.exports = n
        }
        , {
            4: 4
        }],
        6: [function(t, e, a) {
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }
        , {}],
        7: [function(t, e, a) {
            var i = t(28)();
            t(26)(i),
            t(22)(i),
            t(25)(i),
            t(21)(i),
            t(23)(i),
            t(24)(i),
            t(29)(i),
            t(33)(i),
            t(31)(i),
            t(34)(i),
            t(32)(i),
            t(35)(i),
            t(30)(i),
            t(27)(i),
            t(36)(i),
            t(37)(i),
            t(38)(i),
            t(39)(i),
            t(40)(i),
            t(43)(i),
            t(41)(i),
            t(42)(i),
            t(44)(i),
            t(45)(i),
            t(46)(i),
            t(15)(i),
            t(16)(i),
            t(17)(i),
            t(18)(i),
            t(19)(i),
            t(20)(i),
            t(8)(i),
            t(9)(i),
            t(10)(i),
            t(11)(i),
            t(12)(i),
            t(13)(i),
            t(14)(i),
            window.Chart = e.exports = i
        }
        , {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            36: 36,
            37: 37,
            38: 38,
            39: 39,
            40: 40,
            41: 41,
            42: 42,
            43: 43,
            44: 44,
            45: 45,
            46: 46,
            8: 8,
            9: 9
        }],
        8: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                t.Bar = function(e, a) {
                    return a.type = "bar",
                    new t(e,a)
                }
            }
        }
        , {}],
        9: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                t.Bubble = function(e, a) {
                    return a.type = "bubble",
                    new t(e,a)
                }
            }
        }
        , {}],
        10: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                t.Doughnut = function(e, a) {
                    return a.type = "doughnut",
                    new t(e,a)
                }
            }
        }
        , {}],
        11: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                t.Line = function(e, a) {
                    return a.type = "line",
                    new t(e,a)
                }
            }
        }
        , {}],
        12: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                t.PolarArea = function(e, a) {
                    return a.type = "polarArea",
                    new t(e,a)
                }
            }
        }
        , {}],
        13: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                t.Radar = function(e, a) {
                    return a.type = "radar",
                    new t(e,a)
                }
            }
        }
        , {}],
        14: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-1"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t) {
                                return "(" + t.xLabel + ", " + t.yLabel + ")"
                            }
                        }
                    }
                };
                t.defaults.scatter = e,
                t.controllers.scatter = t.controllers.line,
                t.Scatter = function(e, a) {
                    return a.type = "scatter",
                    new t(e,a)
                }
            }
        }
        , {}],
        15: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }],
                        yAxes: [{
                            type: "linear"
                        }]
                    }
                },
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: t.elements.Rectangle,
                    initialize: function(e, a) {
                        t.DatasetController.prototype.initialize.call(this, e, a),
                        this.getMeta().bar = !0
                    },
                    getBarCount: function() {
                        var t = this
                          , a = 0;
                        return e.each(t.chart.data.datasets, function(e, i) {
                            var n = t.chart.getDatasetMeta(i);
                            n.bar && t.chart.isDatasetVisible(i) && ++a
                        }, t),
                        a
                    },
                    update: function(t) {
                        var a = this;
                        e.each(a.getMeta().data, function(e, i) {
                            a.updateElement(e, i, t)
                        }, a)
                    },
                    updateElement: function(t, a, i) {
                        var n = this
                          , o = n.getMeta()
                          , r = n.getScaleForId(o.xAxisID)
                          , l = n.getScaleForId(o.yAxisID)
                          , s = l.getBasePixel()
                          , d = n.chart.options.elements.rectangle
                          , u = t.custom || {}
                          , c = n.getDataset();
                        t._xScale = r,
                        t._yScale = l,
                        t._datasetIndex = n.index,
                        t._index = a;
                        var h = n.getRuler(a);
                        t._model = {
                            x: n.calculateBarX(a, n.index, h),
                            y: i ? s : n.calculateBarY(a, n.index),
                            label: n.chart.data.labels[a],
                            datasetLabel: c.label,
                            base: i ? s : n.calculateBarBase(n.index, a),
                            width: n.calculateBarWidth(h),
                            backgroundColor: u.backgroundColor ? u.backgroundColor : e.getValueAtIndexOrDefault(c.backgroundColor, a, d.backgroundColor),
                            borderSkipped: u.borderSkipped ? u.borderSkipped : d.borderSkipped,
                            borderColor: u.borderColor ? u.borderColor : e.getValueAtIndexOrDefault(c.borderColor, a, d.borderColor),
                            borderWidth: u.borderWidth ? u.borderWidth : e.getValueAtIndexOrDefault(c.borderWidth, a, d.borderWidth)
                        },
                        t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var a = this
                          , i = a.getMeta()
                          , n = a.getScaleForId(i.yAxisID)
                          , o = 0;
                        if (n.options.stacked) {
                            for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                                var u = l[d]
                                  , c = r.getDatasetMeta(d);
                                if (c.bar && c.yAxisID === n.id && r.isDatasetVisible(d)) {
                                    var h = Number(u.data[e]);
                                    o += 0 > s ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return n.getPixelForValue(o)
                        }
                        return n.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e, a = this, i = a.getMeta(), n = a.getScaleForId(i.xAxisID), o = a.getBarCount();
                        e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
                        var r = e * n.options.categoryPercentage
                          , l = (e - e * n.options.categoryPercentage) / 2
                          , s = r / o;
                        if (n.ticks.length !== a.chart.data.labels.length) {
                            var d = n.ticks.length / a.chart.data.labels.length;
                            s *= d
                        }
                        var u = s * n.options.barPercentage
                          , c = s - s * n.options.barPercentage;
                        return {
                            datasetCount: o,
                            tickWidth: e,
                            categoryWidth: r,
                            categorySpacing: l,
                            fullBarWidth: s,
                            barWidth: u,
                            barSpacing: c
                        }
                    },
                    calculateBarWidth: function(t) {
                        var e = this.getScaleForId(this.getMeta().xAxisID);
                        return e.options.barThickness ? e.options.barThickness : e.options.stacked ? t.categoryWidth : t.barWidth
                    },
                    getBarIndex: function(t) {
                        var e, a, i = 0;
                        for (a = 0; t > a; ++a)
                            e = this.chart.getDatasetMeta(a),
                            e.bar && this.chart.isDatasetVisible(a) && ++i;
                        return i
                    },
                    calculateBarX: function(t, e, a) {
                        var i = this
                          , n = i.getMeta()
                          , o = i.getScaleForId(n.xAxisID)
                          , r = i.getBarIndex(e)
                          , l = o.getPixelForValue(null, t, e, i.chart.isCombo);
                        return l -= i.chart.isCombo ? a.tickWidth / 2 : 0,
                        o.options.stacked ? l + a.categoryWidth / 2 + a.categorySpacing : l + a.barWidth / 2 + a.categorySpacing + a.barWidth * r + a.barSpacing / 2 + a.barSpacing * r
                    },
                    calculateBarY: function(t, e) {
                        var a = this
                          , i = a.getMeta()
                          , n = a.getScaleForId(i.yAxisID)
                          , o = Number(a.getDataset().data[t]);
                        if (n.options.stacked) {
                            for (var r = 0, l = 0, s = 0; e > s; s++) {
                                var d = a.chart.data.datasets[s]
                                  , u = a.chart.getDatasetMeta(s);
                                if (u.bar && u.yAxisID === n.id && a.chart.isDatasetVisible(s)) {
                                    var c = Number(d.data[t]);
                                    0 > c ? l += c || 0 : r += c || 0
                                }
                            }
                            return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o)
                        }
                        return n.getPixelForValue(o)
                    },
                    draw: function(t) {
                        var e, a, i = this, n = t || 1, o = i.getMeta().data, r = i.getDataset();
                        for (e = 0,
                        a = o.length; a > e; ++e) {
                            var l = r.data[e];
                            null === l || void 0 === l || isNaN(l) || o[e].transition(n).draw()
                        }
                    },
                    setHoverStyle: function(t) {
                        var a = this.chart.data.datasets[t._datasetIndex]
                          , i = t._index
                          , n = t.custom || {}
                          , o = t._model;
                        o.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.hoverBackgroundColor, i, e.getHoverColor(o.backgroundColor)),
                        o.borderColor = n.hoverBorderColor ? n.hoverBorderColor : e.getValueAtIndexOrDefault(a.hoverBorderColor, i, e.getHoverColor(o.borderColor)),
                        o.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : e.getValueAtIndexOrDefault(a.hoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var a = this.chart.data.datasets[t._datasetIndex]
                          , i = t._index
                          , n = t.custom || {}
                          , o = t._model
                          , r = this.chart.options.elements.rectangle;
                        o.backgroundColor = n.backgroundColor ? n.backgroundColor : e.getValueAtIndexOrDefault(a.backgroundColor, i, r.backgroundColor),
                        o.borderColor = n.borderColor ? n.borderColor : e.getValueAtIndexOrDefault(a.borderColor, i, r.borderColor),
                        o.borderWidth = n.borderWidth ? n.borderWidth : e.getValueAtIndexOrDefault(a.borderWidth, i, r.borderWidth)
                    }
                }),
                t.defaults.horizontalBar = {
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom"
                        }],
                        yAxes: [{
                            position: "left",
                            type: "category",
                            categoryPercentage: .8,
                            barPercentage: .9,
                            gridLines: {
                                offsetGridLines: !0
                            }
                        }]
                    },
                    elements: {
                        rectangle: {
                            borderSkipped: "left"
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function(t, e) {
                                var a = "";
                                return t.length > 0 && (t[0].yLabel ? a = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (a = e.labels[t[0].index])),
                                a
                            },
                            label: function(t, e) {
                                var a = e.datasets[t.datasetIndex].label || "";
                                return a + ": " + t.xLabel
                            }
                        }
                    }
                },
                t.controllers.horizontalBar = t.controllers.bar.extend({
                    updateElement: function(t, a, i) {
                        var n = this
                          , o = n.getMeta()
                          , r = n.getScaleForId(o.xAxisID)
                          , l = n.getScaleForId(o.yAxisID)
                          , s = r.getBasePixel()
                          , d = t.custom || {}
                          , u = n.getDataset()
                          , c = n.chart.options.elements.rectangle;
                        t._xScale = r,
                        t._yScale = l,
                        t._datasetIndex = n.index,
                        t._index = a;
                        var h = n.getRuler(a);
                        t._model = {
                            x: i ? s : n.calculateBarX(a, n.index),
                            y: n.calculateBarY(a, n.index, h),
                            label: n.chart.data.labels[a],
                            datasetLabel: u.label,
                            base: i ? s : n.calculateBarBase(n.index, a),
                            height: n.calculateBarHeight(h),
                            backgroundColor: d.backgroundColor ? d.backgroundColor : e.getValueAtIndexOrDefault(u.backgroundColor, a, c.backgroundColor),
                            borderSkipped: d.borderSkipped ? d.borderSkipped : c.borderSkipped,
                            borderColor: d.borderColor ? d.borderColor : e.getValueAtIndexOrDefault(u.borderColor, a, c.borderColor),
                            borderWidth: d.borderWidth ? d.borderWidth : e.getValueAtIndexOrDefault(u.borderWidth, a, c.borderWidth)
                        },
                        t.draw = function() {
                            function t(t) {
                                return s[(u + t) % 4]
                            }
                            var e = this._chart.ctx
                              , a = this._view
                              , i = a.height / 2
                              , n = a.y - i
                              , o = a.y + i
                              , r = a.base - (a.base - a.x)
                              , l = a.borderWidth / 2;
                            a.borderWidth && (n += l,
                            o -= l,
                            r += l),
                            e.beginPath(),
                            e.fillStyle = a.backgroundColor,
                            e.strokeStyle = a.borderColor,
                            e.lineWidth = a.borderWidth;
                            var s = [[a.base, o], [a.base, n], [r, n], [r, o]]
                              , d = ["bottom", "left", "top", "right"]
                              , u = d.indexOf(a.borderSkipped, 0);
                            -1 === u && (u = 0),
                            e.moveTo.apply(e, t(0));
                            for (var c = 1; 4 > c; c++)
                                e.lineTo.apply(e, t(c));
                            e.fill(),
                            a.borderWidth && e.stroke()
                        }
                        ,
                        t.pivot()
                    },
                    calculateBarBase: function(t, e) {
                        var a = this
                          , i = a.getMeta()
                          , n = a.getScaleForId(i.xAxisID)
                          , o = 0;
                        if (n.options.stacked) {
                            for (var r = a.chart, l = r.data.datasets, s = Number(l[t].data[e]), d = 0; t > d; d++) {
                                var u = l[d]
                                  , c = r.getDatasetMeta(d);
                                if (c.bar && c.xAxisID === n.id && r.isDatasetVisible(d)) {
                                    var h = Number(u.data[e]);
                                    o += 0 > s ? Math.min(h, 0) : Math.max(h, 0)
                                }
                            }
                            return n.getPixelForValue(o)
                        }
                        return n.getBasePixel()
                    },
                    getRuler: function(t) {
                        var e, a = this, i = a.getMeta(), n = a.getScaleForId(i.yAxisID), o = a.getBarCount();
                        e = "category" === n.options.type ? n.getPixelForTick(t + 1) - n.getPixelForTick(t) : n.width / n.ticks.length;
                        var r = e * n.options.categoryPercentage
                          , l = (e - e * n.options.categoryPercentage) / 2
                          , s = r / o;
                        if (n.ticks.length !== a.chart.data.labels.length) {
                            var d = n.ticks.length / a.chart.data.labels.length;
                            s *= d
                        }
                        var u = s * n.options.barPercentage
                          , c = s - s * n.options.barPercentage;
                        return {
                            datasetCount: o,
                            tickHeight: e,
                            categoryHeight: r,
                            categorySpacing: l,
                            fullBarHeight: s,
                            barHeight: u,
                            barSpacing: c
                        }
                    },
                    calculateBarHeight: function(t) {
                        var e = this
                          , a = e.getScaleForId(e.getMeta().yAxisID);
                        return a.options.barThickness ? a.options.barThickness : a.options.stacked ? t.categoryHeight : t.barHeight
                    },
                    calculateBarX: function(t, e) {
                        var a = this
                          , i = a.getMeta()
                          , n = a.getScaleForId(i.xAxisID)
                          , o = Number(a.getDataset().data[t]);
                        if (n.options.stacked) {
                            for (var r = 0, l = 0, s = 0; e > s; s++) {
                                var d = a.chart.data.datasets[s]
                                  , u = a.chart.getDatasetMeta(s);
                                if (u.bar && u.xAxisID === n.id && a.chart.isDatasetVisible(s)) {
                                    var c = Number(d.data[t]);
                                    0 > c ? l += c || 0 : r += c || 0
                                }
                            }
                            return 0 > o ? n.getPixelForValue(l + o) : n.getPixelForValue(r + o)
                        }
                        return n.getPixelForValue(o)
                    },
                    calculateBarY: function(t, e, a) {
                        var i = this
                          , n = i.getMeta()
                          , o = i.getScaleForId(n.yAxisID)
                          , r = i.getBarIndex(e)
                          , l = o.getPixelForValue(null, t, e, i.chart.isCombo);
                        return l -= i.chart.isCombo ? a.tickHeight / 2 : 0,
                        o.options.stacked ? l + a.categoryHeight / 2 + a.categorySpacing : l + a.barHeight / 2 + a.categorySpacing + a.barHeight * r + a.barSpacing / 2 + a.barSpacing * r
                    }
                })
            }
        }
        , {}],
        16: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.bubble = {
                    hover: {
                        mode: "single"
                    },
                    scales: {
                        xAxes: [{
                            type: "linear",
                            position: "bottom",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-0"
                        }]
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                var a = e.datasets[t.datasetIndex].label || ""
                                  , i = e.datasets[t.datasetIndex].data[t.index];
                                return a + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")"
                            }
                        }
                    }
                },
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var a = this
                          , i = a.getMeta()
                          , n = i.data;
                        e.each(n, function(e, i) {
                            a.updateElement(e, i, t)
                        })
                    },
                    updateElement: function(a, i, n) {
                        var o = this
                          , r = o.getMeta()
                          , l = o.getScaleForId(r.xAxisID)
                          , s = o.getScaleForId(r.yAxisID)
                          , d = a.custom || {}
                          , u = o.getDataset()
                          , c = u.data[i]
                          , h = o.chart.options.elements.point
                          , f = o.index;
                        e.extend(a, {
                            _xScale: l,
                            _yScale: s,
                            _datasetIndex: f,
                            _index: i,
                            _model: {
                                x: n ? l.getPixelForDecimal(.5) : l.getPixelForValue("object" == typeof c ? c : NaN, i, f, o.chart.isCombo),
                                y: n ? s.getBasePixel() : s.getPixelForValue(c, i, f),
                                radius: n ? 0 : d.radius ? d.radius : o.getRadius(c),
                                hitRadius: d.hitRadius ? d.hitRadius : e.getValueAtIndexOrDefault(u.hitRadius, i, h.hitRadius)
                            }
                        }),
                        t.DatasetController.prototype.removeHoverStyle.call(o, a, h);
                        var g = a._model;
                        g.skip = d.skip ? d.skip : isNaN(g.x) || isNaN(g.y),
                        a.pivot()
                    },
                    getRadius: function(t) {
                        return t.r || this.chart.options.elements.point.radius
                    },
                    setHoverStyle: function(a) {
                        var i = this;
                        t.DatasetController.prototype.setHoverStyle.call(i, a);
                        var n = i.chart.data.datasets[a._datasetIndex]
                          , o = a._index
                          , r = a.custom || {}
                          , l = a._model;
                        l.radius = r.hoverRadius ? r.hoverRadius : e.getValueAtIndexOrDefault(n.hoverRadius, o, i.chart.options.elements.point.hoverRadius) + i.getRadius(n.data[o])
                    },
                    removeHoverStyle: function(e) {
                        var a = this;
                        t.DatasetController.prototype.removeHoverStyle.call(a, e, a.chart.options.elements.point);
                        var i = a.chart.data.datasets[e._datasetIndex].data[e._index]
                          , n = e.custom || {}
                          , o = e._model;
                        o.radius = n.radius ? n.radius : a.getRadius(i)
                    }
                })
            }
        }
        , {}],
        17: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = t.defaults;
                a.doughnut = {
                    animation: {
                        animateRotate: !0,
                        animateScale: !1
                    },
                    aspectRatio: 1,
                    hover: {
                        mode: "single"
                    },
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var a = t.data
                          , i = a.datasets
                          , n = a.labels;
                        if (i.length)
                            for (var o = 0; o < i[0].data.length; ++o)
                                e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'),
                                n[o] && e.push(n[o]),
                                e.push("</li>");
                        return e.push("</ul>"),
                        e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var a = t.data;
                                return a.labels.length && a.datasets.length ? a.labels.map(function(i, n) {
                                    var o = t.getDatasetMeta(0)
                                      , r = a.datasets[0]
                                      , l = o.data[n]
                                      , s = l && l.custom || {}
                                      , d = e.getValueAtIndexOrDefault
                                      , u = t.options.elements.arc
                                      , c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor)
                                      , h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor)
                                      , f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                                    return {
                                        text: i,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(r.data[n]) || o.data[n].hidden,
                                        index: n
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var a, i, n, o = e.index, r = this.chart;
                            for (a = 0,
                            i = (r.data.datasets || []).length; i > a; ++a)
                                n = r.getDatasetMeta(a),
                                n.data[o] && (n.data[o].hidden = !n.data[o].hidden);
                            r.update()
                        }
                    },
                    cutoutPercentage: 50,
                    rotation: Math.PI * -.5,
                    circumference: 2 * Math.PI,
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, a) {
                                var i = a.labels[t.index]
                                  , n = ": " + a.datasets[t.datasetIndex].data[t.index];
                                return e.isArray(i) ? (i = i.slice(),
                                i[0] += n) : i += n,
                                i
                            }
                        }
                    }
                },
                a.pie = e.clone(a.doughnut),
                e.extend(a.pie, {
                    cutoutPercentage: 0
                }),
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, a = 0; t > a; ++a)
                            this.chart.isDatasetVisible(a) && ++e;
                        return e
                    },
                    update: function(t) {
                        var a = this
                          , i = a.chart
                          , n = i.chartArea
                          , o = i.options
                          , r = o.elements.arc
                          , l = n.right - n.left - r.borderWidth
                          , s = n.bottom - n.top - r.borderWidth
                          , d = Math.min(l, s)
                          , u = {
                            x: 0,
                            y: 0
                        }
                          , c = a.getMeta()
                          , h = o.cutoutPercentage
                          , f = o.circumference;
                        if (f < 2 * Math.PI) {
                            var g = o.rotation % (2 * Math.PI);
                            g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0);
                            var p = g + f
                              , m = {
                                x: Math.cos(g),
                                y: Math.sin(g)
                            }
                              , b = {
                                x: Math.cos(p),
                                y: Math.sin(p)
                            }
                              , v = 0 >= g && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p
                              , x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p
                              , y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p
                              , k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p
                              , S = h / 100
                              , w = {
                                x: y ? -1 : Math.min(m.x * (m.x < 0 ? 1 : S), b.x * (b.x < 0 ? 1 : S)),
                                y: k ? -1 : Math.min(m.y * (m.y < 0 ? 1 : S), b.y * (b.y < 0 ? 1 : S))
                            }
                              , M = {
                                x: v ? 1 : Math.max(m.x * (m.x > 0 ? 1 : S), b.x * (b.x > 0 ? 1 : S)),
                                y: x ? 1 : Math.max(m.y * (m.y > 0 ? 1 : S), b.y * (b.y > 0 ? 1 : S))
                            }
                              , C = {
                                width: .5 * (M.x - w.x),
                                height: .5 * (M.y - w.y)
                            };
                            d = Math.min(l / C.width, s / C.height),
                            u = {
                                x: (M.x + w.x) * -.5,
                                y: (M.y + w.y) * -.5
                            }
                        }
                        i.borderWidth = a.getMaxBorderWidth(c.data),
                        i.outerRadius = Math.max((d - i.borderWidth) / 2, 0),
                        i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 1, 0),
                        i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(),
                        i.offsetX = u.x * i.outerRadius,
                        i.offsetY = u.y * i.outerRadius,
                        c.total = a.calculateTotal(),
                        a.outerRadius = i.outerRadius - i.radiusLength * a.getRingIndex(a.index),
                        a.innerRadius = a.outerRadius - i.radiusLength,
                        e.each(c.data, function(e, i) {
                            a.updateElement(e, i, t)
                        })
                    },
                    updateElement: function(t, a, i) {
                        var n = this
                          , o = n.chart
                          , r = o.chartArea
                          , l = o.options
                          , s = l.animation
                          , d = (r.left + r.right) / 2
                          , u = (r.top + r.bottom) / 2
                          , c = l.rotation
                          , h = l.rotation
                          , f = n.getDataset()
                          , g = i && s.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[a]) * (l.circumference / (2 * Math.PI))
                          , p = i && s.animateScale ? 0 : n.innerRadius
                          , m = i && s.animateScale ? 0 : n.outerRadius
                          , b = e.getValueAtIndexOrDefault;
                        e.extend(t, {
                            _datasetIndex: n.index,
                            _index: a,
                            _model: {
                                x: d + o.offsetX,
                                y: u + o.offsetY,
                                startAngle: c,
                                endAngle: h,
                                circumference: g,
                                outerRadius: m,
                                innerRadius: p,
                                label: b(f.label, a, o.data.labels[a])
                            }
                        });
                        var v = t._model;
                        this.removeHoverStyle(t),
                        i && s.animateRotate || (0 === a ? v.startAngle = l.rotation : v.startAngle = n.getMeta().data[a - 1]._model.endAngle,
                        v.endAngle = v.startAngle + v.circumference),
                        t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t, a = this.getDataset(), i = this.getMeta(), n = 0;
                        return e.each(i.data, function(e, i) {
                            t = a.data[i],
                            isNaN(t) || e.hidden || (n += Math.abs(t))
                        }),
                        n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, a, i = 0, n = this.index, o = t.length, r = 0; o > r; r++)
                            e = t[r]._model ? t[r]._model.borderWidth : 0,
                            a = t[r]._chart ? t[r]._chart.config.data.datasets[n].hoverBorderWidth : 0,
                            i = e > i ? e : i,
                            i = a > i ? a : i;
                        return i
                    }
                })
            }
        }
        , {}],
        18: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return a.getValueOrDefault(t.showLine, e.showLines)
                }
                var a = t.helpers;
                t.defaults.line = {
                    showLines: !0,
                    spanGaps: !1,
                    hover: {
                        mode: "label"
                    },
                    scales: {
                        xAxes: [{
                            type: "category",
                            id: "x-axis-0"
                        }],
                        yAxes: [{
                            type: "linear",
                            id: "y-axis-0"
                        }]
                    }
                },
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    update: function(t) {
                        var i, n, o, r = this, l = r.getMeta(), s = l.dataset, d = l.data || [], u = r.chart.options, c = u.elements.line, h = r.getScaleForId(l.yAxisID), f = r.getDataset(), g = e(f, u);
                        for (g && (o = s.custom || {},
                        void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension),
                        s._scale = h,
                        s._datasetIndex = r.index,
                        s._children = d,
                        s._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : u.spanGaps,
                            tension: o.tension ? o.tension : a.getValueOrDefault(f.lineTension, c.tension),
                            backgroundColor: o.backgroundColor ? o.backgroundColor : f.backgroundColor || c.backgroundColor,
                            borderWidth: o.borderWidth ? o.borderWidth : f.borderWidth || c.borderWidth,
                            borderColor: o.borderColor ? o.borderColor : f.borderColor || c.borderColor,
                            borderCapStyle: o.borderCapStyle ? o.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                            borderDash: o.borderDash ? o.borderDash : f.borderDash || c.borderDash,
                            borderDashOffset: o.borderDashOffset ? o.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: o.borderJoinStyle ? o.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                            fill: o.fill ? o.fill : void 0 !== f.fill ? f.fill : c.fill,
                            steppedLine: o.steppedLine ? o.steppedLine : a.getValueOrDefault(f.steppedLine, c.stepped),
                            cubicInterpolationMode: o.cubicInterpolationMode ? o.cubicInterpolationMode : a.getValueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode),
                            scaleTop: h.top,
                            scaleBottom: h.bottom,
                            scaleZero: h.getBasePixel()
                        },
                        s.pivot()),
                        i = 0,
                        n = d.length; n > i; ++i)
                            r.updateElement(d[i], i, t);
                        for (g && 0 !== s._model.tension && r.updateBezierControlPoints(),
                        i = 0,
                        n = d.length; n > i; ++i)
                            d[i].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var i = this.chart.options.elements.point.backgroundColor
                          , n = this.getDataset()
                          , o = t.custom || {};
                        return o.backgroundColor ? i = o.backgroundColor : n.pointBackgroundColor ? i = a.getValueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor),
                        i
                    },
                    getPointBorderColor: function(t, e) {
                        var i = this.chart.options.elements.point.borderColor
                          , n = this.getDataset()
                          , o = t.custom || {};
                        return o.borderColor ? i = o.borderColor : n.pointBorderColor ? i = a.getValueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor),
                        i
                    },
                    getPointBorderWidth: function(t, e) {
                        var i = this.chart.options.elements.point.borderWidth
                          , n = this.getDataset()
                          , o = t.custom || {};
                        return o.borderWidth ? i = o.borderWidth : n.pointBorderWidth ? i = a.getValueAtIndexOrDefault(n.pointBorderWidth, e, i) : n.borderWidth && (i = n.borderWidth),
                        i
                    },
                    updateElement: function(t, e, i) {
                        var n, o, r = this, l = r.getMeta(), s = t.custom || {}, d = r.getDataset(), u = r.index, c = d.data[e], h = r.getScaleForId(l.yAxisID), f = r.getScaleForId(l.xAxisID), g = r.chart.options.elements.point, p = r.chart.data.labels || [], m = 1 === p.length || 1 === d.data.length || r.chart.isCombo;
                        void 0 !== d.radius && void 0 === d.pointRadius && (d.pointRadius = d.radius),
                        void 0 !== d.hitRadius && void 0 === d.pointHitRadius && (d.pointHitRadius = d.hitRadius),
                        n = f.getPixelForValue("object" == typeof c ? c : NaN, e, u, m),
                        o = i ? h.getBasePixel() : r.calculatePointY(c, e, u),
                        t._xScale = f,
                        t._yScale = h,
                        t._datasetIndex = u,
                        t._index = e,
                        t._model = {
                            x: n,
                            y: o,
                            skip: s.skip || isNaN(n) || isNaN(o),
                            radius: s.radius || a.getValueAtIndexOrDefault(d.pointRadius, e, g.radius),
                            pointStyle: s.pointStyle || a.getValueAtIndexOrDefault(d.pointStyle, e, g.pointStyle),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: l.dataset._model ? l.dataset._model.tension : 0,
                            steppedLine: l.dataset._model ? l.dataset._model.steppedLine : !1,
                            hitRadius: s.hitRadius || a.getValueAtIndexOrDefault(d.pointHitRadius, e, g.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, a) {
                        var i, n, o, r = this, l = r.chart, s = r.getMeta(), d = r.getScaleForId(s.yAxisID), u = 0, c = 0;
                        if (d.options.stacked) {
                            for (i = 0; a > i; i++)
                                if (n = l.data.datasets[i],
                                o = l.getDatasetMeta(i),
                                "line" === o.type && o.yAxisID === d.id && l.isDatasetVisible(i)) {
                                    var h = Number(d.getRightValue(n.data[e]));
                                    0 > h ? c += h || 0 : u += h || 0
                                }
                            var f = Number(d.getRightValue(t));
                            return 0 > f ? d.getPixelForValue(c + f) : d.getPixelForValue(u + f)
                        }
                        return d.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        function t(t, e, a) {
                            return Math.max(Math.min(t, a), e)
                        }
                        var e, i, n, o, r, l = this, s = l.getMeta(), d = l.chart.chartArea, u = s.data || [];
                        if (s.dataset._model.spanGaps && (u = u.filter(function(t) {
                            return !t._model.skip
                        })),
                        "monotone" === s.dataset._model.cubicInterpolationMode)
                            a.splineCurveMonotone(u);
                        else
                            for (e = 0,
                            i = u.length; i > e; ++e)
                                n = u[e],
                                o = n._model,
                                r = a.splineCurve(a.previousItem(u, e)._model, o, a.nextItem(u, e)._model, s.dataset._model.tension),
                                o.controlPointPreviousX = r.previous.x,
                                o.controlPointPreviousY = r.previous.y,
                                o.controlPointNextX = r.next.x,
                                o.controlPointNextY = r.next.y;
                        if (l.chart.options.elements.line.capBezierPoints)
                            for (e = 0,
                            i = u.length; i > e; ++e)
                                o = u[e]._model,
                                o.controlPointPreviousX = t(o.controlPointPreviousX, d.left, d.right),
                                o.controlPointPreviousY = t(o.controlPointPreviousY, d.top, d.bottom),
                                o.controlPointNextX = t(o.controlPointNextX, d.left, d.right),
                                o.controlPointNextY = t(o.controlPointNextY, d.top, d.bottom)
                    },
                    draw: function(t) {
                        var a, i, n = this, o = n.getMeta(), r = o.data || [], l = t || 1;
                        for (a = 0,
                        i = r.length; i > a; ++a)
                            r[a].transition(l);
                        for (e(n.getDataset(), n.chart.options) && o.dataset.transition(l).draw(),
                        a = 0,
                        i = r.length; i > a; ++a)
                            r[a].draw()
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex]
                          , i = t._index
                          , n = t.custom || {}
                          , o = t._model;
                        o.radius = n.hoverRadius || a.getValueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius),
                        o.backgroundColor = n.hoverBackgroundColor || a.getValueAtIndexOrDefault(e.pointHoverBackgroundColor, i, a.getHoverColor(o.backgroundColor)),
                        o.borderColor = n.hoverBorderColor || a.getValueAtIndexOrDefault(e.pointHoverBorderColor, i, a.getHoverColor(o.borderColor)),
                        o.borderWidth = n.hoverBorderWidth || a.getValueAtIndexOrDefault(e.pointHoverBorderWidth, i, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this
                          , i = e.chart.data.datasets[t._datasetIndex]
                          , n = t._index
                          , o = t.custom || {}
                          , r = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius),
                        r.radius = o.radius || a.getValueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius),
                        r.backgroundColor = e.getPointBackgroundColor(t, n),
                        r.borderColor = e.getPointBorderColor(t, n),
                        r.borderWidth = e.getPointBorderWidth(t, n)
                    }
                })
            }
        }
        , {}],
        19: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.polarArea = {
                    scale: {
                        type: "radialLinear",
                        lineArc: !0,
                        ticks: {
                            beginAtZero: !0
                        }
                    },
                    animation: {
                        animateRotate: !0,
                        animateScale: !0
                    },
                    startAngle: -.5 * Math.PI,
                    aspectRatio: 1,
                    legendCallback: function(t) {
                        var e = [];
                        e.push('<ul class="' + t.id + '-legend">');
                        var a = t.data
                          , i = a.datasets
                          , n = a.labels;
                        if (i.length)
                            for (var o = 0; o < i[0].data.length; ++o)
                                e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'),
                                n[o] && e.push(n[o]),
                                e.push("</li>");
                        return e.push("</ul>"),
                        e.join("")
                    },
                    legend: {
                        labels: {
                            generateLabels: function(t) {
                                var a = t.data;
                                return a.labels.length && a.datasets.length ? a.labels.map(function(i, n) {
                                    var o = t.getDatasetMeta(0)
                                      , r = a.datasets[0]
                                      , l = o.data[n]
                                      , s = l.custom || {}
                                      , d = e.getValueAtIndexOrDefault
                                      , u = t.options.elements.arc
                                      , c = s.backgroundColor ? s.backgroundColor : d(r.backgroundColor, n, u.backgroundColor)
                                      , h = s.borderColor ? s.borderColor : d(r.borderColor, n, u.borderColor)
                                      , f = s.borderWidth ? s.borderWidth : d(r.borderWidth, n, u.borderWidth);
                                    return {
                                        text: i,
                                        fillStyle: c,
                                        strokeStyle: h,
                                        lineWidth: f,
                                        hidden: isNaN(r.data[n]) || o.data[n].hidden,
                                        index: n
                                    }
                                }) : []
                            }
                        },
                        onClick: function(t, e) {
                            var a, i, n, o = e.index, r = this.chart;
                            for (a = 0,
                            i = (r.data.datasets || []).length; i > a; ++a)
                                n = r.getDatasetMeta(a),
                                n.data[o].hidden = !n.data[o].hidden;
                            r.update()
                        }
                    },
                    tooltips: {
                        callbacks: {
                            title: function() {
                                return ""
                            },
                            label: function(t, e) {
                                return e.labels[t.index] + ": " + t.yLabel
                            }
                        }
                    }
                },
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: t.elements.Arc,
                    linkScales: e.noop,
                    update: function(t) {
                        var a = this
                          , i = a.chart
                          , n = i.chartArea
                          , o = a.getMeta()
                          , r = i.options
                          , l = r.elements.arc
                          , s = Math.min(n.right - n.left, n.bottom - n.top);
                        i.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0),
                        i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0),
                        i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(),
                        a.outerRadius = i.outerRadius - i.radiusLength * a.index,
                        a.innerRadius = a.outerRadius - i.radiusLength,
                        o.count = a.countVisibleElements(),
                        e.each(o.data, function(e, i) {
                            a.updateElement(e, i, t)
                        })
                    },
                    updateElement: function(t, a, i) {
                        for (var n = this, o = n.chart, r = n.getDataset(), l = o.options, s = l.animation, d = o.scale, u = e.getValueAtIndexOrDefault, c = o.data.labels, h = n.calculateCircumference(r.data[a]), f = d.xCenter, g = d.yCenter, p = 0, m = n.getMeta(), b = 0; a > b; ++b)
                            isNaN(r.data[b]) || m.data[b].hidden || ++p;
                        var v = l.startAngle
                          , x = t.hidden ? 0 : d.getDistanceFromCenterForValue(r.data[a])
                          , y = v + h * p
                          , k = y + (t.hidden ? 0 : h)
                          , S = s.animateScale ? 0 : d.getDistanceFromCenterForValue(r.data[a]);
                        e.extend(t, {
                            _datasetIndex: n.index,
                            _index: a,
                            _scale: d,
                            _model: {
                                x: f,
                                y: g,
                                innerRadius: 0,
                                outerRadius: i ? S : x,
                                startAngle: i && s.animateRotate ? v : y,
                                endAngle: i && s.animateRotate ? v : k,
                                label: u(c, a, c[a])
                            }
                        }),
                        n.removeHoverStyle(t),
                        t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset()
                          , a = this.getMeta()
                          , i = 0;
                        return e.each(a.data, function(e, a) {
                            isNaN(t.data[a]) || e.hidden || i++
                        }),
                        i
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }
        , {}],
        20: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.radar = {
                    aspectRatio: 1,
                    scale: {
                        type: "radialLinear"
                    },
                    elements: {
                        line: {
                            tension: 0
                        }
                    }
                },
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: t.elements.Line,
                    dataElementType: t.elements.Point,
                    linkScales: e.noop,
                    update: function(t) {
                        var a = this
                          , i = a.getMeta()
                          , n = i.dataset
                          , o = i.data
                          , r = n.custom || {}
                          , l = a.getDataset()
                          , s = a.chart.options.elements.line
                          , d = a.chart.scale;
                        void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension),
                        e.extend(i.dataset, {
                            _datasetIndex: a.index,
                            _children: o,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : e.getValueOrDefault(l.lineTension, s.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor,
                                fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle,
                                scaleTop: d.top,
                                scaleBottom: d.bottom,
                                scaleZero: d.getBasePosition()
                            }
                        }),
                        i.dataset.pivot(),
                        e.each(o, function(e, i) {
                            a.updateElement(e, i, t)
                        }, a),
                        a.updateBezierControlPoints()
                    },
                    updateElement: function(t, a, i) {
                        var n = this
                          , o = t.custom || {}
                          , r = n.getDataset()
                          , l = n.chart.scale
                          , s = n.chart.options.elements.point
                          , d = l.getPointPositionForValue(a, r.data[a]);
                        e.extend(t, {
                            _datasetIndex: n.index,
                            _index: a,
                            _scale: l,
                            _model: {
                                x: i ? l.xCenter : d.x,
                                y: i ? l.yCenter : d.y,
                                tension: o.tension ? o.tension : e.getValueOrDefault(r.tension, n.chart.options.elements.line.tension),
                                radius: o.radius ? o.radius : e.getValueAtIndexOrDefault(r.pointRadius, a, s.radius),
                                backgroundColor: o.backgroundColor ? o.backgroundColor : e.getValueAtIndexOrDefault(r.pointBackgroundColor, a, s.backgroundColor),
                                borderColor: o.borderColor ? o.borderColor : e.getValueAtIndexOrDefault(r.pointBorderColor, a, s.borderColor),
                                borderWidth: o.borderWidth ? o.borderWidth : e.getValueAtIndexOrDefault(r.pointBorderWidth, a, s.borderWidth),
                                pointStyle: o.pointStyle ? o.pointStyle : e.getValueAtIndexOrDefault(r.pointStyle, a, s.pointStyle),
                                hitRadius: o.hitRadius ? o.hitRadius : e.getValueAtIndexOrDefault(r.hitRadius, a, s.hitRadius)
                            }
                        }),
                        t._model.skip = o.skip ? o.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea
                          , a = this.getMeta();
                        e.each(a.data, function(i, n) {
                            var o = i._model
                              , r = e.splineCurve(e.previousItem(a.data, n, !0)._model, o, e.nextItem(a.data, n, !0)._model, o.tension);
                            o.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left),
                            o.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top),
                            o.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left),
                            o.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top),
                            i.pivot()
                        })
                    },
                    draw: function(t) {
                        var a = this.getMeta()
                          , i = t || 1;
                        e.each(a.data, function(t) {
                            t.transition(i)
                        }),
                        a.dataset.transition(i).draw(),
                        e.each(a.data, function(t) {
                            t.draw()
                        })
                    },
                    setHoverStyle: function(t) {
                        var a = this.chart.data.datasets[t._datasetIndex]
                          , i = t.custom || {}
                          , n = t._index
                          , o = t._model;
                        o.radius = i.hoverRadius ? i.hoverRadius : e.getValueAtIndexOrDefault(a.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius),
                        o.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : e.getValueAtIndexOrDefault(a.pointHoverBackgroundColor, n, e.getHoverColor(o.backgroundColor)),
                        o.borderColor = i.hoverBorderColor ? i.hoverBorderColor : e.getValueAtIndexOrDefault(a.pointHoverBorderColor, n, e.getHoverColor(o.borderColor)),
                        o.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : e.getValueAtIndexOrDefault(a.pointHoverBorderWidth, n, o.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var a = this.chart.data.datasets[t._datasetIndex]
                          , i = t.custom || {}
                          , n = t._index
                          , o = t._model
                          , r = this.chart.options.elements.point;
                        o.radius = i.radius ? i.radius : e.getValueAtIndexOrDefault(a.radius, n, r.radius),
                        o.backgroundColor = i.backgroundColor ? i.backgroundColor : e.getValueAtIndexOrDefault(a.pointBackgroundColor, n, r.backgroundColor),
                        o.borderColor = i.borderColor ? i.borderColor : e.getValueAtIndexOrDefault(a.pointBorderColor, n, r.borderColor),
                        o.borderWidth = i.borderWidth ? i.borderWidth : e.getValueAtIndexOrDefault(a.pointBorderWidth, n, r.borderWidth)
                    }
                })
            }
        }
        , {}],
        21: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.animation = {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: e.noop,
                    onComplete: e.noop
                },
                t.Animation = t.Element.extend({
                    currentStep: null,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }),
                t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, a, i) {
                        var n = this;
                        i || (t.animating = !0);
                        for (var o = 0; o < n.animations.length; ++o)
                            if (n.animations[o].chartInstance === t)
                                return void (n.animations[o].animationObject = e);
                        n.animations.push({
                            chartInstance: t,
                            animationObject: e
                        }),
                        1 === n.animations.length && n.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var a = e.findIndex(this.animations, function(e) {
                            return e.chartInstance === t
                        });
                        -1 !== a && (this.animations.splice(a, 1),
                        t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = e.requestAnimFrame.call(window, function() {
                            t.request = null,
                            t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this
                          , e = Date.now()
                          , a = 0;
                        t.dropFrames > 1 && (a = Math.floor(t.dropFrames),
                        t.dropFrames = t.dropFrames % 1);
                        for (var i = 0; i < t.animations.length; )
                            null === t.animations[i].animationObject.currentStep && (t.animations[i].animationObject.currentStep = 0),
                            t.animations[i].animationObject.currentStep += 1 + a,
                            t.animations[i].animationObject.currentStep > t.animations[i].animationObject.numSteps && (t.animations[i].animationObject.currentStep = t.animations[i].animationObject.numSteps),
                            t.animations[i].animationObject.render(t.animations[i].chartInstance, t.animations[i].animationObject),
                            t.animations[i].animationObject.onAnimationProgress && t.animations[i].animationObject.onAnimationProgress.call && t.animations[i].animationObject.onAnimationProgress.call(t.animations[i].chartInstance, t.animations[i]),
                            t.animations[i].animationObject.currentStep === t.animations[i].animationObject.numSteps ? (t.animations[i].animationObject.onAnimationComplete && t.animations[i].animationObject.onAnimationComplete.call && t.animations[i].animationObject.onAnimationComplete.call(t.animations[i].chartInstance, t.animations[i]),
                            t.animations[i].chartInstance.animating = !1,
                            t.animations.splice(i, 1)) : ++i;
                        var n = Date.now()
                          , o = (n - e) / t.frameDuration;
                        t.dropFrames += o,
                        t.animations.length > 0 && t.requestAnimationFrame()
                    }
                }
            }
        }
        , {}],
        22: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.canvasHelpers = {};
                e.drawPoint = function(t, e, a, i, n) {
                    var o, r, l, s, d, u;
                    if ("object" == typeof e && (o = e.toString(),
                    "[object HTMLImageElement]" === o || "[object HTMLCanvasElement]" === o))
                        return void t.drawImage(e, i - e.width / 2, n - e.height / 2);
                    if (!(isNaN(a) || 0 >= a)) {
                        switch (e) {
                        default:
                            t.beginPath(),
                            t.arc(i, n, a, 0, 2 * Math.PI),
                            t.closePath(),
                            t.fill();
                            break;
                        case "triangle":
                            t.beginPath(),
                            r = 3 * a / Math.sqrt(3),
                            d = r * Math.sqrt(3) / 2,
                            t.moveTo(i - r / 2, n + d / 3),
                            t.lineTo(i + r / 2, n + d / 3),
                            t.lineTo(i, n - 2 * d / 3),
                            t.closePath(),
                            t.fill();
                            break;
                        case "rect":
                            u = 1 / Math.SQRT2 * a,
                            t.beginPath(),
                            t.fillRect(i - u, n - u, 2 * u, 2 * u),
                            t.strokeRect(i - u, n - u, 2 * u, 2 * u);
                            break;
                        case "rectRot":
                            u = 1 / Math.SQRT2 * a,
                            t.beginPath(),
                            t.moveTo(i - u, n),
                            t.lineTo(i, n + u),
                            t.lineTo(i + u, n),
                            t.lineTo(i, n - u),
                            t.closePath(),
                            t.fill();
                            break;
                        case "cross":
                            t.beginPath(),
                            t.moveTo(i, n + a),
                            t.lineTo(i, n - a),
                            t.moveTo(i - a, n),
                            t.lineTo(i + a, n),
                            t.closePath();
                            break;
                        case "crossRot":
                            t.beginPath(),
                            l = Math.cos(Math.PI / 4) * a,
                            s = Math.sin(Math.PI / 4) * a,
                            t.moveTo(i - l, n - s),
                            t.lineTo(i + l, n + s),
                            t.moveTo(i - l, n + s),
                            t.lineTo(i + l, n - s),
                            t.closePath();
                            break;
                        case "star":
                            t.beginPath(),
                            t.moveTo(i, n + a),
                            t.lineTo(i, n - a),
                            t.moveTo(i - a, n),
                            t.lineTo(i + a, n),
                            l = Math.cos(Math.PI / 4) * a,
                            s = Math.sin(Math.PI / 4) * a,
                            t.moveTo(i - l, n - s),
                            t.lineTo(i + l, n + s),
                            t.moveTo(i - l, n + s),
                            t.lineTo(i + l, n - s),
                            t.closePath();
                            break;
                        case "line":
                            t.beginPath(),
                            t.moveTo(i - a, n),
                            t.lineTo(i + a, n),
                            t.closePath();
                            break;
                        case "dash":
                            t.beginPath(),
                            t.moveTo(i, n),
                            t.lineTo(i + a, n),
                            t.closePath()
                        }
                        t.stroke()
                    }
                }
            }
        }
        , {}],
        23: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var a = r.getStyle(t, e)
                      , i = a && a.match(/(\d+)px/);
                    return i ? Number(i[1]) : void 0
                }
                function a(t, a) {
                    var i = t.style
                      , n = t.getAttribute("height")
                      , o = t.getAttribute("width");
                    if (t._chartjs = {
                        initial: {
                            height: n,
                            width: o,
                            style: {
                                display: i.display,
                                height: i.height,
                                width: i.width
                            }
                        }
                    },
                    i.display = i.display || "block",
                    null === o || "" === o) {
                        var r = e(t, "width");
                        void 0 !== r && (t.width = r)
                    }
                    if (null === n || "" === n)
                        if ("" === t.style.height)
                            t.height = t.width / (a.options.aspectRatio || 2);
                        else {
                            var l = e(t, "height");
                            void 0 !== r && (t.height = l)
                        }
                    return t
                }
                function i(t) {
                    if (t._chartjs) {
                        var e = t._chartjs.initial;
                        ["height", "width"].forEach(function(a) {
                            var i = e[a];
                            void 0 === i || null === i ? t.removeAttribute(a) : t.setAttribute(a, i)
                        }),
                        r.each(e.style || {}, function(e, a) {
                            t.style[a] = e
                        }),
                        t.width = t.width,
                        delete t._chartjs
                    }
                }
                function n(t, e) {
                    if ("string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]),
                    t && t.canvas && (t = t.canvas),
                    t instanceof HTMLCanvasElement) {
                        var i = t.getContext && t.getContext("2d");
                        if (i instanceof CanvasRenderingContext2D)
                            return a(t, e),
                            i
                    }
                    return null
                }
                function o(e) {
                    e = e || {};
                    var a = e.data = e.data || {};
                    return a.datasets = a.datasets || [],
                    a.labels = a.labels || [],
                    e.options = r.configMerge(t.defaults.global, t.defaults[e.type], e.options || {}),
                    e
                }
                var r = t.helpers;
                t.types = {},
                t.instances = {},
                t.controllers = {},
                t.Controller = function(e, a, i) {
                    var l = this;
                    a = o(a);
                    var s = n(e, a)
                      , d = s && s.canvas
                      , u = d && d.height
                      , c = d && d.width;
                    return i.ctx = s,
                    i.canvas = d,
                    i.config = a,
                    i.width = c,
                    i.height = u,
                    i.aspectRatio = u ? c / u : null,
                    l.id = r.uid(),
                    l.chart = i,
                    l.config = a,
                    l.options = a.options,
                    l._bufferedRender = !1,
                    t.instances[l.id] = l,
                    Object.defineProperty(l, "data", {
                        get: function() {
                            return l.config.data
                        }
                    }),
                    s && d ? (r.retinaScale(i),
                    l.options.responsive && (r.addResizeListener(d.parentNode, function() {
                        l.resize()
                    }),
                    l.resize(!0)),
                    l.initialize(),
                    l) : (console.error("Failed to create chart: can't acquire context from the given item"),
                    l)
                }
                ,
                r.extend(t.Controller.prototype, {
                    initialize: function() {
                        var e = this;
                        return t.plugins.notify("beforeInit", [e]),
                        e.bindEvents(),
                        e.ensureScalesHaveIDs(),
                        e.buildOrUpdateControllers(),
                        e.buildScales(),
                        e.updateLayout(),
                        e.resetElements(),
                        e.initToolTip(),
                        e.update(),
                        t.plugins.notify("afterInit", [e]),
                        e
                    },
                    clear: function() {
                        return r.clear(this.chart),
                        this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this),
                        this
                    },
                    resize: function(e) {
                        var a = this
                          , i = a.chart
                          , n = a.options
                          , o = i.canvas
                          , l = n.maintainAspectRatio && i.aspectRatio || null
                          , s = Math.floor(r.getMaximumWidth(o))
                          , d = Math.floor(l ? s / l : r.getMaximumHeight(o));
                        if (i.width !== s || i.height !== d) {
                            o.width = i.width = s,
                            o.height = i.height = d,
                            o.style.width = s + "px",
                            o.style.height = d + "px",
                            r.retinaScale(i);
                            var u = {
                                width: s,
                                height: d
                            };
                            t.plugins.notify("resize", [a, u]),
                            a.options.onResize && a.options.onResize(a, u),
                            e || (a.stop(),
                            a.update(a.options.responsiveAnimationDuration))
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options
                          , e = t.scales || {}
                          , a = t.scale;
                        r.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }),
                        r.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }),
                        a && (a.id = a.id || "scale")
                    },
                    buildScales: function() {
                        var e = this
                          , a = e.options
                          , i = e.scales = {}
                          , n = [];
                        a.scales && (n = n.concat((a.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category"
                            }
                        }), (a.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear"
                            }
                        }))),
                        a.scale && n.push({
                            options: a.scale,
                            dtype: "radialLinear",
                            isDefault: !0
                        }),
                        r.each(n, function(a) {
                            var n = a.options
                              , o = r.getValueOrDefault(n.type, a.dtype)
                              , l = t.scaleService.getScaleConstructor(o);
                            if (l) {
                                var s = new l({
                                    id: n.id,
                                    options: n,
                                    ctx: e.chart.ctx,
                                    chart: e
                                });
                                i[s.id] = s,
                                a.isDefault && (e.scale = s)
                            }
                        }),
                        t.scaleService.addScalesToLayout(this)
                    },
                    updateLayout: function() {
                        t.layoutService.update(this, this.chart.width, this.chart.height)
                    },
                    buildOrUpdateControllers: function() {
                        var e = this
                          , a = []
                          , i = [];
                        if (r.each(e.data.datasets, function(n, o) {
                            var r = e.getDatasetMeta(o);
                            r.type || (r.type = n.type || e.config.type),
                            a.push(r.type),
                            r.controller ? r.controller.updateIndex(o) : (r.controller = new t.controllers[r.type](e,o),
                            i.push(r.controller))
                        }, e),
                        a.length > 1)
                            for (var n = 1; n < a.length; n++)
                                if (a[n] !== a[n - 1]) {
                                    e.isCombo = !0;
                                    break
                                }
                        return i
                    },
                    resetElements: function() {
                        var t = this;
                        r.each(t.data.datasets, function(e, a) {
                            t.getDatasetMeta(a).controller.reset()
                        }, t)
                    },
                    reset: function() {
                        this.resetElements(),
                        this.tooltip.initialize()
                    },
                    update: function(e, a) {
                        var i = this;
                        t.plugins.notify("beforeUpdate", [i]),
                        i.tooltip._data = i.data;
                        var n = i.buildOrUpdateControllers();
                        r.each(i.data.datasets, function(t, e) {
                            i.getDatasetMeta(e).controller.buildOrUpdateElements()
                        }, i),
                        t.layoutService.update(i, i.chart.width, i.chart.height),
                        t.plugins.notify("afterScaleUpdate", [i]),
                        r.each(n, function(t) {
                            t.reset()
                        }),
                        i.updateDatasets(),
                        t.plugins.notify("afterUpdate", [i]),
                        i._bufferedRender ? i._bufferedRequest = {
                            lazy: a,
                            duration: e
                        } : i.render(e, a)
                    },
                    updateDatasets: function() {
                        var e, a, i = this;
                        if (t.plugins.notify("beforeDatasetsUpdate", [i])) {
                            for (e = 0,
                            a = i.data.datasets.length; a > e; ++e)
                                i.getDatasetMeta(e).controller.update();
                            t.plugins.notify("afterDatasetsUpdate", [i])
                        }
                    },
                    render: function(e, a) {
                        var i = this;
                        t.plugins.notify("beforeRender", [i]);
                        var n = i.options.animation;
                        if (n && ("undefined" != typeof e && 0 !== e || "undefined" == typeof e && 0 !== n.duration)) {
                            var o = new t.Animation;
                            o.numSteps = (e || n.duration) / 16.66,
                            o.easing = n.easing,
                            o.render = function(t, e) {
                                var a = r.easingEffects[e.easing]
                                  , i = e.currentStep / e.numSteps
                                  , n = a(i);
                                t.draw(n, i, e.currentStep)
                            }
                            ,
                            o.onAnimationProgress = n.onProgress,
                            o.onAnimationComplete = n.onComplete,
                            t.animationService.addAnimation(i, o, e, a)
                        } else
                            i.draw(),
                            n && n.onComplete && n.onComplete.call && n.onComplete.call(i);
                        return i
                    },
                    draw: function(e) {
                        var a = this
                          , i = e || 1;
                        a.clear(),
                        t.plugins.notify("beforeDraw", [a, i]),
                        r.each(a.boxes, function(t) {
                            t.draw(a.chartArea)
                        }, a),
                        a.scale && a.scale.draw(),
                        t.plugins.notify("beforeDatasetsDraw", [a, i]),
                        r.each(a.data.datasets, function(t, i) {
                            a.isDatasetVisible(i) && a.getDatasetMeta(i).controller.draw(e)
                        }, a, !0),
                        t.plugins.notify("afterDatasetsDraw", [a, i]),
                        a.tooltip.transition(i).draw(),
                        t.plugins.notify("afterDraw", [a, i])
                    },
                    getElementAtEvent: function(e) {
                        return t.Interaction.modes.single(this, e)
                    },
                    getElementsAtEvent: function(e) {
                        return t.Interaction.modes.label(this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(e) {
                        return t.Interaction.modes["x-axis"](this, e, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(e, a, i) {
                        var n = t.Interaction.modes[a];
                        return "function" == typeof n ? n(this, e, i) : []
                    },
                    getDatasetAtEvent: function(e) {
                        return t.Interaction.modes.dataset(this, e)
                    },
                    getDatasetMeta: function(t) {
                        var e = this
                          , a = e.data.datasets[t];
                        a._meta || (a._meta = {});
                        var i = a._meta[e.id];
                        return i || (i = a._meta[e.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }),
                        i
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, a = this.data.datasets.length; a > e; ++e)
                            this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroy: function() {
                        var e, a, n, o = this, l = o.chart.canvas;
                        for (o.stop(),
                        a = 0,
                        n = o.data.datasets.length; n > a; ++a)
                            e = o.getDatasetMeta(a),
                            e.controller && (e.controller.destroy(),
                            e.controller = null);
                        l && (r.unbindEvents(o, o.events),
                        r.removeResizeListener(l.parentNode),
                        r.clear(o.chart),
                        i(l),
                        o.chart.canvas = null,
                        o.chart.ctx = null),
                        t.plugins.notify("destroy", [o]),
                        delete t.instances[o.id]
                    },
                    toBase64Image: function() {
                        return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
                    },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e.chart,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        },e),
                        e.tooltip.initialize()
                    },
                    bindEvents: function() {
                        var t = this;
                        r.bindEvents(t, t.options.events, function(e) {
                            t.eventHandler(e)
                        })
                    },
                    updateHoverStyle: function(t, e, a) {
                        var i, n, o, r = a ? "setHoverStyle" : "removeHoverStyle";
                        for (n = 0,
                        o = t.length; o > n; ++n)
                            i = t[n],
                            i && this.getDatasetMeta(i._datasetIndex).controller[r](i)
                    },
                    eventHandler: function(t) {
                        var e = this
                          , a = e.legend
                          , i = e.tooltip
                          , n = e.options.hover;
                        e._bufferedRender = !0,
                        e._bufferedRequest = null;
                        var o = e.handleEvent(t);
                        o |= a && a.handleEvent(t),
                        o |= i && i.handleEvent(t);
                        var r = e._bufferedRequest;
                        return r ? e.render(r.duration, r.lazy) : o && !e.animating && (e.stop(),
                        e.render(n.animationDuration, !0)),
                        e._bufferedRender = !1,
                        e._bufferedRequest = null,
                        e
                    },
                    handleEvent: function(t) {
                        var e = this
                          , a = e.options || {}
                          , i = a.hover
                          , n = !1;
                        return e.lastActive = e.lastActive || [],
                        "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i),
                        i.onHover && i.onHover.call(e, e.active),
                        ("mouseup" === t.type || "click" === t.type) && a.onClick && a.onClick.call(e, t, e.active),
                        e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1),
                        e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0),
                        n = !r.arrayEquals(e.active, e.lastActive),
                        e.lastActive = e.active,
                        n
                    }
                })
            }
        }
        , {}],
        24: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return t._chartjs ? void t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
                        configurable: !0,
                        enumerable: !1,
                        value: {
                            listeners: [e]
                        }
                    }),
                    void n.forEach(function(e) {
                        var a = "onData" + e.charAt(0).toUpperCase() + e.slice(1)
                          , n = t[e];
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !1,
                            value: function() {
                                var e = Array.prototype.slice.call(arguments)
                                  , o = n.apply(this, e);
                                return i.each(t._chartjs.listeners, function(t) {
                                    "function" == typeof t[a] && t[a].apply(t, e)
                                }),
                                o
                            }
                        })
                    }))
                }
                function a(t, e) {
                    var a = t._chartjs;
                    if (a) {
                        var i = a.listeners
                          , o = i.indexOf(e);
                        -1 !== o && i.splice(o, 1),
                        i.length > 0 || (n.forEach(function(e) {
                            delete t[e]
                        }),
                        delete t._chartjs)
                    }
                }
                var i = t.helpers
                  , n = ["push", "pop", "shift", "splice", "unshift"];
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }
                ,
                i.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        var a = this;
                        a.chart = t,
                        a.index = e,
                        a.linkScales(),
                        a.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this
                          , e = t.getMeta()
                          , a = t.getDataset();
                        null === e.xAxisID && (e.xAxisID = a.xAxisID || t.chart.options.scales.xAxes[0].id),
                        null === e.yAxisID && (e.yAxisID = a.yAxisID || t.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && a(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this
                          , e = t.datasetElementType;
                        return e && new e({
                            _chart: t.chart.chart,
                            _datasetIndex: t.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this
                          , a = e.dataElementType;
                        return a && new a({
                            _chart: e.chart.chart,
                            _datasetIndex: e.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, a = this, i = a.getMeta(), n = a.getDataset().data || [], o = i.data;
                        for (t = 0,
                        e = n.length; e > t; ++t)
                            o[t] = o[t] || a.createMetaData(t);
                        i.dataset = i.dataset || a.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e),
                        this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this
                          , i = t.getDataset()
                          , n = i.data || (i.data = []);
                        t._data !== n && (t._data && a(t._data, t),
                        e(n, t),
                        t._data = n),
                        t.resyncElements()
                    },
                    update: i.noop,
                    draw: function(t) {
                        var e, a, i = t || 1, n = this.getMeta().data;
                        for (e = 0,
                        a = n.length; a > e; ++e)
                            n[e].transition(i).draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var a = this.chart.data.datasets[t._datasetIndex]
                          , n = t._index
                          , o = t.custom || {}
                          , r = i.getValueAtIndexOrDefault
                          , l = t._model;
                        l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(a.backgroundColor, n, e.backgroundColor),
                        l.borderColor = o.borderColor ? o.borderColor : r(a.borderColor, n, e.borderColor),
                        l.borderWidth = o.borderWidth ? o.borderWidth : r(a.borderWidth, n, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex]
                          , a = t._index
                          , n = t.custom || {}
                          , o = i.getValueAtIndexOrDefault
                          , r = i.getHoverColor
                          , l = t._model;
                        l.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o(e.hoverBackgroundColor, a, r(l.backgroundColor)),
                        l.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o(e.hoverBorderColor, a, r(l.borderColor)),
                        l.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o(e.hoverBorderWidth, a, l.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this
                          , e = t.getMeta()
                          , a = t.getDataset().data
                          , i = e.data.length
                          , n = a.length;
                        i > n ? e.data.splice(n, i - n) : n > i && t.insertElements(i, n - i)
                    },
                    insertElements: function(t, e) {
                        for (var a = 0; e > a; ++a)
                            this.addElementAndReset(t + a)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e),
                        this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }),
                t.DatasetController.extend = i.inherits
            }
        }
        , {}],
        25: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.elements = {},
                t.Element = function(t) {
                    e.extend(this, t),
                    this.initialize.apply(this, arguments)
                }
                ,
                e.extend(t.Element.prototype, {
                    initialize: function() {
                        this.hidden = !1
                    },
                    pivot: function() {
                        var t = this;
                        return t._view || (t._view = e.clone(t._model)),
                        t._start = e.clone(t._view),
                        t
                    },
                    transition: function(t) {
                        var a = this;
                        return a._view || (a._view = e.clone(a._model)),
                        1 === t ? (a._view = a._model,
                        a._start = null,
                        a) : (a._start || a.pivot(),
                        e.each(a._model, function(i, n) {
                            if ("_" === n[0])
                                ;
                            else if (a._view.hasOwnProperty(n))
                                if (i === a._view[n])
                                    ;
                                else if ("string" == typeof i)
                                    try {
                                        var o = e.color(a._model[n]).mix(e.color(a._start[n]), t);
                                        a._view[n] = o.rgbString()
                                    } catch (r) {
                                        a._view[n] = i
                                    }
                                else if ("number" == typeof i) {
                                    var l = void 0 !== a._start[n] && isNaN(a._start[n]) === !1 ? a._start[n] : 0;
                                    a._view[n] = (a._model[n] - l) * t + l
                                } else
                                    a._view[n] = i;
                            else
                                "number" != typeof i || isNaN(a._view[n]) ? a._view[n] = i : a._view[n] = i * t
                        }, a),
                        a)
                    },
                    tooltipPosition: function() {
                        return {
                            x: this._model.x,
                            y: this._model.y
                        }
                    },
                    hasValue: function() {
                        return e.isNumber(this._model.x) && e.isNumber(this._model.y)
                    }
                }),
                t.Element.extend = e.inherits
            }
        }
        , {}],
        26: [function(t, e, a) {
            "use strict";
            var i = t(3);
            e.exports = function(t) {
                function e(t, e, a) {
                    var i;
                    return "string" == typeof t ? (i = parseInt(t, 10),
                    -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[a])) : i = t,
                    i
                }
                function a(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }
                function n(t, i, n) {
                    var o = document.defaultView
                      , r = t.parentNode
                      , l = o.getComputedStyle(t)[i]
                      , s = o.getComputedStyle(r)[i]
                      , d = a(l)
                      , u = a(s)
                      , c = Number.POSITIVE_INFINITY;
                    return d || u ? Math.min(d ? e(l, t, n) : c, u ? e(s, r, n) : c) : "none"
                }
                var o = t.helpers = {};
                o.each = function(t, e, a, i) {
                    var n, r;
                    if (o.isArray(t))
                        if (r = t.length,
                        i)
                            for (n = r - 1; n >= 0; n--)
                                e.call(a, t[n], n);
                        else
                            for (n = 0; r > n; n++)
                                e.call(a, t[n], n);
                    else if ("object" == typeof t) {
                        var l = Object.keys(t);
                        for (r = l.length,
                        n = 0; r > n; n++)
                            e.call(a, t[l[n]], l[n])
                    }
                }
                ,
                o.clone = function(t) {
                    var e = {};
                    return o.each(t, function(t, a) {
                        o.isArray(t) ? e[a] = t.slice(0) : "object" == typeof t && null !== t ? e[a] = o.clone(t) : e[a] = t
                    }),
                    e
                }
                ,
                o.extend = function(t) {
                    for (var e = function(e, a) {
                        t[a] = e
                    }, a = 1, i = arguments.length; i > a; a++)
                        o.each(arguments[a], e);
                    return t
                }
                ,
                o.configMerge = function(e) {
                    var a = o.clone(e);
                    return o.each(Array.prototype.slice.call(arguments, 1), function(e) {
                        o.each(e, function(e, i) {
                            var n = a.hasOwnProperty(i)
                              , r = n ? a[i] : {};
                            "scales" === i ? a[i] = o.scaleMerge(r, e) : "scale" === i ? a[i] = o.configMerge(r, t.scaleService.getScaleDefaults(e.type), e) : !n || "object" != typeof r || o.isArray(r) || null === r || "object" != typeof e || o.isArray(e) ? a[i] = e : a[i] = o.configMerge(r, e)
                        })
                    }),
                    a
                }
                ,
                o.scaleMerge = function(e, a) {
                    var i = o.clone(e);
                    return o.each(a, function(e, a) {
                        "xAxes" === a || "yAxes" === a ? i.hasOwnProperty(a) ? o.each(e, function(e, n) {
                            var r = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear")
                              , l = t.scaleService.getScaleDefaults(r);
                            n >= i[a].length || !i[a][n].type ? i[a].push(o.configMerge(l, e)) : e.type && e.type !== i[a][n].type ? i[a][n] = o.configMerge(i[a][n], l, e) : i[a][n] = o.configMerge(i[a][n], e)
                        }) : (i[a] = [],
                        o.each(e, function(e) {
                            var n = o.getValueOrDefault(e.type, "xAxes" === a ? "category" : "linear");
                            i[a].push(o.configMerge(t.scaleService.getScaleDefaults(n), e))
                        })) : i.hasOwnProperty(a) && "object" == typeof i[a] && null !== i[a] && "object" == typeof e ? i[a] = o.configMerge(i[a], e) : i[a] = e
                    }),
                    i
                }
                ,
                o.getValueAtIndexOrDefault = function(t, e, a) {
                    return void 0 === t || null === t ? a : o.isArray(t) ? e < t.length ? t[e] : a : t
                }
                ,
                o.getValueOrDefault = function(t, e) {
                    return void 0 === t ? e : t
                }
                ,
                o.indexOf = Array.prototype.indexOf ? function(t, e) {
                    return t.indexOf(e)
                }
                : function(t, e) {
                    for (var a = 0, i = t.length; i > a; ++a)
                        if (t[a] === e)
                            return a;
                    return -1
                }
                ,
                o.where = function(t, e) {
                    if (o.isArray(t) && Array.prototype.filter)
                        return t.filter(e);
                    var a = [];
                    return o.each(t, function(t) {
                        e(t) && a.push(t)
                    }),
                    a
                }
                ,
                o.findIndex = Array.prototype.findIndex ? function(t, e, a) {
                    return t.findIndex(e, a)
                }
                : function(t, e, a) {
                    a = void 0 === a ? t : a;
                    for (var i = 0, n = t.length; n > i; ++i)
                        if (e.call(a, t[i], i, t))
                            return i;
                    return -1
                }
                ,
                o.findNextWhere = function(t, e, a) {
                    (void 0 === a || null === a) && (a = -1);
                    for (var i = a + 1; i < t.length; i++) {
                        var n = t[i];
                        if (e(n))
                            return n
                    }
                }
                ,
                o.findPreviousWhere = function(t, e, a) {
                    (void 0 === a || null === a) && (a = t.length);
                    for (var i = a - 1; i >= 0; i--) {
                        var n = t[i];
                        if (e(n))
                            return n
                    }
                }
                ,
                o.inherits = function(t) {
                    var e = this
                      , a = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments)
                    }
                      , i = function() {
                        this.constructor = a
                    };
                    return i.prototype = e.prototype,
                    a.prototype = new i,
                    a.extend = o.inherits,
                    t && o.extend(a.prototype, t),
                    a.__super__ = e.prototype,
                    a
                }
                ,
                o.noop = function() {}
                ,
                o.uid = function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(),
                o.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }
                ,
                o.almostEquals = function(t, e, a) {
                    return Math.abs(t - e) < a
                }
                ,
                o.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }
                ,
                o.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }
                ,
                o.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                }
                : function(t) {
                    return t = +t,
                    0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
                }
                ,
                o.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                }
                : function(t) {
                    return Math.log(t) / Math.LN10
                }
                ,
                o.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }
                ,
                o.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }
                ,
                o.getAngleFromPoint = function(t, e) {
                    var a = e.x - t.x
                      , i = e.y - t.y
                      , n = Math.sqrt(a * a + i * i)
                      , o = Math.atan2(i, a);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI),
                    {
                        angle: o,
                        distance: n
                    }
                }
                ,
                o.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }
                ,
                o.aliasPixel = function(t) {
                    return t % 2 === 0 ? 0 : .5
                }
                ,
                o.splineCurve = function(t, e, a, i) {
                    var n = t.skip ? e : t
                      , o = e
                      , r = a.skip ? e : a
                      , l = Math.sqrt(Math.pow(o.x - n.x, 2) + Math.pow(o.y - n.y, 2))
                      , s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2))
                      , d = l / (l + s)
                      , u = s / (l + s);
                    d = isNaN(d) ? 0 : d,
                    u = isNaN(u) ? 0 : u;
                    var c = i * d
                      , h = i * u;
                    return {
                        previous: {
                            x: o.x - c * (r.x - n.x),
                            y: o.y - c * (r.y - n.y)
                        },
                        next: {
                            x: o.x + h * (r.x - n.x),
                            y: o.y + h * (r.y - n.y)
                        }
                    }
                }
                ,
                o.EPSILON = Number.EPSILON || 1e-14,
                o.splineCurveMonotone = function(t) {
                    var e, a, i, n, r = (t || []).map(function(t) {
                        return {
                            model: t._model,
                            deltaK: 0,
                            mK: 0
                        }
                    }), l = r.length;
                    for (e = 0; l > e; ++e)
                        i = r[e],
                        i.model.skip || (a = e > 0 ? r[e - 1] : null,
                        n = l - 1 > e ? r[e + 1] : null,
                        n && !n.model.skip && (i.deltaK = (n.model.y - i.model.y) / (n.model.x - i.model.x)),
                        !a || a.model.skip ? i.mK = i.deltaK : !n || n.model.skip ? i.mK = a.deltaK : this.sign(a.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (a.deltaK + i.deltaK) / 2);
                    var s, d, u, c;
                    for (e = 0; l - 1 > e; ++e)
                        i = r[e],
                        n = r[e + 1],
                        i.model.skip || n.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = n.mK = 0 : (s = i.mK / i.deltaK,
                        d = n.mK / i.deltaK,
                        c = Math.pow(s, 2) + Math.pow(d, 2),
                        9 >= c || (u = 3 / Math.sqrt(c),
                        i.mK = s * u * i.deltaK,
                        n.mK = d * u * i.deltaK)));
                    var h;
                    for (e = 0; l > e; ++e)
                        i = r[e],
                        i.model.skip || (a = e > 0 ? r[e - 1] : null,
                        n = l - 1 > e ? r[e + 1] : null,
                        a && !a.model.skip && (h = (i.model.x - a.model.x) / 3,
                        i.model.controlPointPreviousX = i.model.x - h,
                        i.model.controlPointPreviousY = i.model.y - h * i.mK),
                        n && !n.model.skip && (h = (n.model.x - i.model.x) / 3,
                        i.model.controlPointNextX = i.model.x + h,
                        i.model.controlPointNextY = i.model.y + h * i.mK))
                }
                ,
                o.nextItem = function(t, e, a) {
                    return a ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }
                ,
                o.previousItem = function(t, e, a) {
                    return a ? 0 >= e ? t[t.length - 1] : t[e - 1] : 0 >= e ? t[0] : t[e - 1]
                }
                ,
                o.niceNum = function(t, e) {
                    var a, i = Math.floor(o.log10(t)), n = t / Math.pow(10, i);
                    return a = e ? 1.5 > n ? 1 : 3 > n ? 2 : 7 > n ? 5 : 10 : 1 >= n ? 1 : 2 >= n ? 2 : 5 >= n ? 5 : 10,
                    a * Math.pow(10, i)
                }
                ;
                var r = o.easingEffects = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -1 * t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t + 1)
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -1 * ((t = t / 1 - 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return 1 * (t /= 1) * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
                    },
                    easeOutSine: function(t) {
                        return 1 * Math.sin(t / 1 * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -0.5 * (Math.cos(Math.PI * t / 1) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158
                          , a = 0
                          , i = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3),
                        i < Math.abs(1) ? (i = 1,
                        e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i),
                        -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158
                          , a = 0
                          , i = 1;
                        return 0 === t ? 0 : 1 === (t /= 1) ? 1 : (a || (a = .3),
                        i < Math.abs(1) ? (i = 1,
                        e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i),
                        i * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / a) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158
                          , a = 0
                          , i = 1;
                        return 0 === t ? 0 : 2 === (t /= .5) ? 1 : (a || (a = 1 * (.3 * 1.5)),
                        i < Math.abs(1) ? (i = 1,
                        e = a / 4) : e = a / (2 * Math.PI) * Math.asin(1 / i),
                        1 > t ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / a) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return 1 * (t /= 1) * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - r.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    },
                    easeInOutBounce: function(t) {
                        return .5 > t ? .5 * r.easeInBounce(2 * t) : .5 * r.easeOutBounce(2 * t - 1) + .5
                    }
                };
                o.requestAnimFrame = function() {
                    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                        return window.setTimeout(t, 1e3 / 60)
                    }
                }(),
                o.cancelAnimFrame = function() {
                    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                        return window.clearTimeout(t, 1e3 / 60)
                    }
                }(),
                o.getRelativePosition = function(t, e) {
                    var a, i, n = t.originalEvent || t, r = t.currentTarget || t.srcElement, l = r.getBoundingClientRect(), s = n.touches;
                    s && s.length > 0 ? (a = s[0].clientX,
                    i = s[0].clientY) : (a = n.clientX,
                    i = n.clientY);
                    var d = parseFloat(o.getStyle(r, "padding-left"))
                      , u = parseFloat(o.getStyle(r, "padding-top"))
                      , c = parseFloat(o.getStyle(r, "padding-right"))
                      , h = parseFloat(o.getStyle(r, "padding-bottom"))
                      , f = l.right - l.left - d - c
                      , g = l.bottom - l.top - u - h;
                    return a = Math.round((a - l.left - d) / f * r.width / e.currentDevicePixelRatio),
                    i = Math.round((i - l.top - u) / g * r.height / e.currentDevicePixelRatio),
                    {
                        x: a,
                        y: i
                    }
                }
                ,
                o.addEvent = function(t, e, a) {
                    t.addEventListener ? t.addEventListener(e, a) : t.attachEvent ? t.attachEvent("on" + e, a) : t["on" + e] = a
                }
                ,
                o.removeEvent = function(t, e, a) {
                    t.removeEventListener ? t.removeEventListener(e, a, !1) : t.detachEvent ? t.detachEvent("on" + e, a) : t["on" + e] = o.noop
                }
                ,
                o.bindEvents = function(t, e, a) {
                    var i = t.events = t.events || {};
                    o.each(e, function(e) {
                        i[e] = function() {
                            a.apply(t, arguments)
                        }
                        ,
                        o.addEvent(t.chart.canvas, e, i[e])
                    })
                }
                ,
                o.unbindEvents = function(t, e) {
                    var a = t.chart.canvas;
                    o.each(e, function(t, e) {
                        o.removeEvent(a, e, t)
                    })
                }
                ,
                o.getConstraintWidth = function(t) {
                    return n(t, "max-width", "clientWidth")
                }
                ,
                o.getConstraintHeight = function(t) {
                    return n(t, "max-height", "clientHeight")
                }
                ,
                o.getMaximumWidth = function(t) {
                    var e = t.parentNode
                      , a = parseInt(o.getStyle(e, "padding-left"), 10)
                      , i = parseInt(o.getStyle(e, "padding-right"), 10)
                      , n = e.clientWidth - a - i
                      , r = o.getConstraintWidth(t);
                    return isNaN(r) ? n : Math.min(n, r)
                }
                ,
                o.getMaximumHeight = function(t) {
                    var e = t.parentNode
                      , a = parseInt(o.getStyle(e, "padding-top"), 10)
                      , i = parseInt(o.getStyle(e, "padding-bottom"), 10)
                      , n = e.clientHeight - a - i
                      , r = o.getConstraintHeight(t);
                    return isNaN(r) ? n : Math.min(n, r)
                }
                ,
                o.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }
                ,
                o.retinaScale = function(t) {
                    var e = t.currentDevicePixelRatio = window.devicePixelRatio || 1;
                    if (1 !== e) {
                        var a = t.canvas
                          , i = t.height
                          , n = t.width;
                        a.height = i * e,
                        a.width = n * e,
                        t.ctx.scale(e, e),
                        a.style.height = i + "px",
                        a.style.width = n + "px"
                    }
                }
                ,
                o.clear = function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }
                ,
                o.fontString = function(t, e, a) {
                    return e + " " + t + "px " + a
                }
                ,
                o.longestText = function(t, e, a, i) {
                    i = i || {};
                    var n = i.data = i.data || {}
                      , r = i.garbageCollect = i.garbageCollect || [];
                    i.font !== e && (n = i.data = {},
                    r = i.garbageCollect = [],
                    i.font = e),
                    t.font = e;
                    var l = 0;
                    o.each(a, function(e) {
                        void 0 !== e && null !== e && o.isArray(e) !== !0 ? l = o.measureText(t, n, r, l, e) : o.isArray(e) && o.each(e, function(e) {
                            void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, n, r, l, e))
                        })
                    });
                    var s = r.length / 2;
                    if (s > a.length) {
                        for (var d = 0; s > d; d++)
                            delete n[r[d]];
                        r.splice(0, s)
                    }
                    return l
                }
                ,
                o.measureText = function(t, e, a, i, n) {
                    var o = e[n];
                    return o || (o = e[n] = t.measureText(n).width,
                    a.push(n)),
                    o > i && (i = o),
                    i
                }
                ,
                o.numberOfLabelLines = function(t) {
                    var e = 1;
                    return o.each(t, function(t) {
                        o.isArray(t) && t.length > e && (e = t.length)
                    }),
                    e
                }
                ,
                o.drawRoundedRectangle = function(t, e, a, i, n, o) {
                    t.beginPath(),
                    t.moveTo(e + o, a),
                    t.lineTo(e + i - o, a),
                    t.quadraticCurveTo(e + i, a, e + i, a + o),
                    t.lineTo(e + i, a + n - o),
                    t.quadraticCurveTo(e + i, a + n, e + i - o, a + n),
                    t.lineTo(e + o, a + n),
                    t.quadraticCurveTo(e, a + n, e, a + n - o),
                    t.lineTo(e, a + o),
                    t.quadraticCurveTo(e, a, e + o, a),
                    t.closePath()
                }
                ,
                o.color = function(e) {
                    return i ? i(e instanceof CanvasGradient ? t.defaults.global.defaultColor : e) : (console.error("Color.js not found!"),
                    e)
                }
                ,
                o.addResizeListener = function(t, e) {
                    var a = document.createElement("iframe");
                    a.className = "chartjs-hidden-iframe",
                    a.style.cssText = "display:block;overflow:hidden;border:0;margin:0;top:0;left:0;bottom:0;right:0;height:100%;width:100%;position:absolute;pointer-events:none;z-index:-1;",
                    a.tabIndex = -1;
                    var i = t._chartjs = {
                        resizer: a,
                        ticking: !1
                    }
                      , n = function() {
                        i.ticking || (i.ticking = !0,
                        o.requestAnimFrame.call(window, function() {
                            return i.resizer ? (i.ticking = !1,
                            e()) : void 0
                        }))
                    };
                    o.addEvent(a, "load", function() {
                        o.addEvent(a.contentWindow || a, "resize", n),
                        n()
                    }),
                    t.insertBefore(a, t.firstChild)
                }
                ,
                o.removeResizeListener = function(t) {
                    if (t && t._chartjs) {
                        var e = t._chartjs.resizer;
                        e && (e.parentNode.removeChild(e),
                        t._chartjs.resizer = null),
                        delete t._chartjs
                    }
                }
                ,
                o.isArray = Array.isArray ? function(t) {
                    return Array.isArray(t)
                }
                : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                ,
                o.arrayEquals = function(t, e) {
                    var a, i, n, r;
                    if (!t || !e || t.length !== e.length)
                        return !1;
                    for (a = 0,
                    i = t.length; i > a; ++a)
                        if (n = t[a],
                        r = e[a],
                        n instanceof Array && r instanceof Array) {
                            if (!o.arrayEquals(n, r))
                                return !1
                        } else if (n !== r)
                            return !1;
                    return !0
                }
                ,
                o.callCallback = function(t, e, a) {
                    t && "function" == typeof t.call && t.apply(a, e)
                }
                ,
                o.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }
        , {
            3: 3
        }],
        27: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var a, i, n, o, r, l = t.data.datasets;
                    for (i = 0,
                    o = l.length; o > i; ++i)
                        if (t.isDatasetVisible(i))
                            for (a = t.getDatasetMeta(i),
                            n = 0,
                            r = a.data.length; r > n; ++n) {
                                var s = a.data[n];
                                s._view.skip || e(s)
                            }
                }
                function a(t, a) {
                    var i = [];
                    return e(t, function(t) {
                        t.inRange(a.x, a.y) && i.push(t)
                    }),
                    i
                }
                function i(t, a, i, n) {
                    var r = Number.POSITIVE_INFINITY
                      , l = [];
                    return n || (n = o.distanceBetweenPoints),
                    e(t, function(t) {
                        if (!i || t.inRange(a.x, a.y)) {
                            var e = t.getCenterPoint()
                              , o = n(a, e);
                            r > o ? (l = [t],
                            r = o) : o === r && l.push(t)
                        }
                    }),
                    l
                }
                function n(t, e, n) {
                    var r = o.getRelativePosition(e, t.chart)
                      , l = function(t, e) {
                        return Math.abs(t.x - e.x)
                    }
                      , s = n.intersect ? a(t, r) : i(t, r, !1, l)
                      , d = [];
                    return s.length ? (t.data.datasets.forEach(function(e, a) {
                        if (t.isDatasetVisible(a)) {
                            var i = t.getDatasetMeta(a)
                              , n = i.data[s[0]._index];
                            n && !n._view.skip && d.push(n)
                        }
                    }),
                    d) : []
                }
                var o = t.helpers;
                t.Interaction = {
                    modes: {
                        single: function(t, a) {
                            var i = o.getRelativePosition(a, t.chart)
                              , n = [];
                            return e(t, function(t) {
                                return t.inRange(i.x, i.y) ? (n.push(t),
                                n) : void 0
                            }),
                            n.slice(0, 1)
                        },
                        label: n,
                        index: n,
                        dataset: function(t, e, n) {
                            var r = o.getRelativePosition(e, t.chart)
                              , l = n.intersect ? a(t, r) : i(t, r, !1);
                            return l.length > 0 && (l = t.getDatasetMeta(l[0]._datasetIndex).data),
                            l
                        },
                        "x-axis": function(t, e) {
                            return n(t, e, !0)
                        },
                        point: function(t, e) {
                            var i = o.getRelativePosition(e, t.chart);
                            return a(t, i)
                        },
                        nearest: function(t, e, a) {
                            var n = o.getRelativePosition(e, t.chart)
                              , r = i(t, n, a.intersect);
                            return r.length > 1 && r.sort(function(t, e) {
                                var a = t.getArea()
                                  , i = e.getArea()
                                  , n = a - i;
                                return 0 === n && (n = t._datasetIndex - e._datasetIndex),
                                n
                            }),
                            r.slice(0, 1)
                        },
                        x: function(t, a, i) {
                            var n = o.getRelativePosition(a, t.chart)
                              , r = []
                              , l = !1;
                            return e(t, function(t) {
                                t.inXRange(n.x) && r.push(t),
                                t.inRange(n.x, n.y) && (l = !0)
                            }),
                            i.intersect && !l && (r = []),
                            r
                        },
                        y: function(t, a, i) {
                            var n = o.getRelativePosition(a, t.chart)
                              , r = []
                              , l = !1;
                            return e(t, function(t) {
                                t.inYRange(n.y) && r.push(t),
                                t.inRange(n.x, n.y) && (l = !0)
                            }),
                            i.intersect && !l && (r = []),
                            r
                        }
                    }
                }
            }
        }
        , {}],
        28: [function(t, e, a) {
            "use strict";
            e.exports = function() {
                var t = function(e, a) {
                    return this.controller = new t.Controller(e,a,this),
                    this.controller
                };
                return t.defaults = {
                    global: {
                        responsive: !0,
                        responsiveAnimationDuration: 0,
                        maintainAspectRatio: !0,
                        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                        hover: {
                            onHover: null,
                            mode: "nearest",
                            intersect: !0,
                            animationDuration: 400
                        },
                        onClick: null,
                        defaultColor: "rgba(0,0,0,0.1)",
                        defaultFontColor: "#666",
                        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                        defaultFontSize: 12,
                        defaultFontStyle: "normal",
                        showLines: !0,
                        elements: {},
                        legendCallback: function(t) {
                            var e = [];
                            e.push('<ul class="' + t.id + '-legend">');
                            for (var a = 0; a < t.data.datasets.length; a++)
                                e.push('<li><span style="background-color:' + t.data.datasets[a].backgroundColor + '"></span>'),
                                t.data.datasets[a].label && e.push(t.data.datasets[a].label),
                                e.push("</li>");
                            return e.push("</ul>"),
                            e.join("")
                        }
                    }
                },
                t.Chart = t,
                t
            }
        }
        , {}],
        29: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.layoutService = {
                    defaults: {},
                    addBox: function(t, e) {
                        t.boxes || (t.boxes = []),
                        t.boxes.push(e)
                    },
                    removeBox: function(t, e) {
                        t.boxes && t.boxes.splice(t.boxes.indexOf(e), 1)
                    },
                    update: function(t, a, i) {
                        function n(t) {
                            var e, a = t.isHorizontal();
                            a ? (e = t.update(t.options.fullWidth ? x : C, M),
                            D -= e.height) : (e = t.update(w, S),
                            C -= e.width),
                            I.push({
                                horizontal: a,
                                minSize: e,
                                box: t
                            })
                        }
                        function o(t) {
                            var a = e.findNextWhere(I, function(e) {
                                return e.box === t
                            });
                            if (a)
                                if (t.isHorizontal()) {
                                    var i = {
                                        left: A,
                                        right: T,
                                        top: 0,
                                        bottom: 0
                                    };
                                    t.update(t.options.fullWidth ? x : C, y / 2, i)
                                } else
                                    t.update(a.minSize.width, D)
                        }
                        function r(t) {
                            var a = e.findNextWhere(I, function(e) {
                                return e.box === t
                            })
                              , i = {
                                left: 0,
                                right: 0,
                                top: P,
                                bottom: F
                            };
                            a && t.update(a.minSize.width, D, i)
                        }
                        function l(t) {
                            t.isHorizontal() ? (t.left = t.options.fullWidth ? u : A,
                            t.right = t.options.fullWidth ? a - c : A + C,
                            t.top = L,
                            t.bottom = L + t.height,
                            L = t.bottom) : (t.left = V,
                            t.right = V + t.width,
                            t.top = P,
                            t.bottom = P + D,
                            V = t.right)
                        }
                        if (t) {
                            var s = t.options.layout
                              , d = s ? s.padding : null
                              , u = 0
                              , c = 0
                              , h = 0
                              , f = 0;
                            isNaN(d) ? (u = d.left || 0,
                            c = d.right || 0,
                            h = d.top || 0,
                            f = d.bottom || 0) : (u = d,
                            c = d,
                            h = d,
                            f = d);
                            var g = e.where(t.boxes, function(t) {
                                return "left" === t.options.position
                            })
                              , p = e.where(t.boxes, function(t) {
                                return "right" === t.options.position
                            })
                              , m = e.where(t.boxes, function(t) {
                                return "top" === t.options.position
                            })
                              , b = e.where(t.boxes, function(t) {
                                return "bottom" === t.options.position
                            })
                              , v = e.where(t.boxes, function(t) {
                                return "chartArea" === t.options.position
                            });
                            m.sort(function(t, e) {
                                return (e.options.fullWidth ? 1 : 0) - (t.options.fullWidth ? 1 : 0)
                            }),
                            b.sort(function(t, e) {
                                return (t.options.fullWidth ? 1 : 0) - (e.options.fullWidth ? 1 : 0)
                            });
                            var x = a - u - c
                              , y = i - h - f
                              , k = x / 2
                              , S = y / 2
                              , w = (a - k) / (g.length + p.length)
                              , M = (i - S) / (m.length + b.length)
                              , C = x
                              , D = y
                              , I = [];
                            e.each(g.concat(p, m, b), n);
                            var A = u
                              , T = c
                              , P = h
                              , F = f;
                            e.each(g.concat(p), o),
                            e.each(g, function(t) {
                                A += t.width
                            }),
                            e.each(p, function(t) {
                                T += t.width
                            }),
                            e.each(m.concat(b), o),
                            e.each(m, function(t) {
                                P += t.height
                            }),
                            e.each(b, function(t) {
                                F += t.height
                            }),
                            e.each(g.concat(p), r),
                            A = u,
                            T = c,
                            P = h,
                            F = f,
                            e.each(g, function(t) {
                                A += t.width
                            }),
                            e.each(p, function(t) {
                                T += t.width
                            }),
                            e.each(m, function(t) {
                                P += t.height
                            }),
                            e.each(b, function(t) {
                                F += t.height
                            });
                            var _ = i - P - F
                              , R = a - A - T;
                            (R !== C || _ !== D) && (e.each(g, function(t) {
                                t.height = _
                            }),
                            e.each(p, function(t) {
                                t.height = _
                            }),
                            e.each(m, function(t) {
                                t.options.fullWidth || (t.width = R)
                            }),
                            e.each(b, function(t) {
                                t.options.fullWidth || (t.width = R)
                            }),
                            D = _,
                            C = R);
                            var V = u
                              , L = h;
                            e.each(g.concat(m), l),
                            V += C,
                            L += D,
                            e.each(p, l),
                            e.each(b, l),
                            t.chartArea = {
                                left: A,
                                top: P,
                                right: A + C,
                                bottom: P + D
                            },
                            e.each(v, function(e) {
                                e.left = t.chartArea.left,
                                e.top = t.chartArea.top,
                                e.right = t.chartArea.right,
                                e.bottom = t.chartArea.bottom,
                                e.update(C, D)
                            })
                        }
                    }
                }
            }
        }
        , {}],
        30: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }
                var a = t.helpers
                  , i = a.noop;
                t.defaults.global.legend = {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    onClick: function(t, e) {
                        var a = e.datasetIndex
                          , i = this.chart
                          , n = i.getDatasetMeta(a);
                        n.hidden = null === n.hidden ? !i.data.datasets[a].hidden : null,
                        i.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data;
                            return a.isArray(e.datasets) ? e.datasets.map(function(e, i) {
                                return {
                                    text: e.label,
                                    fillStyle: a.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(i),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: i
                                }
                            }, this) : []
                        }
                    }
                },
                t.Legend = t.Element.extend({
                    initialize: function(t) {
                        a.extend(this, t),
                        this.legendHitBoxes = [],
                        this.doughnutMode = !1
                    },
                    beforeUpdate: i,
                    update: function(t, e, a) {
                        var i = this;
                        return i.beforeUpdate(),
                        i.maxWidth = t,
                        i.maxHeight = e,
                        i.margins = a,
                        i.beforeSetDimensions(),
                        i.setDimensions(),
                        i.afterSetDimensions(),
                        i.beforeBuildLabels(),
                        i.buildLabels(),
                        i.afterBuildLabels(),
                        i.beforeFit(),
                        i.fit(),
                        i.afterFit(),
                        i.afterUpdate(),
                        i.minSize
                    },
                    afterUpdate: i,
                    beforeSetDimensions: i,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth,
                        t.left = 0,
                        t.right = t.width) : (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                        t.paddingLeft = 0,
                        t.paddingTop = 0,
                        t.paddingRight = 0,
                        t.paddingBottom = 0,
                        t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: i,
                    beforeBuildLabels: i,
                    buildLabels: function() {
                        var t = this;
                        t.legendItems = t.options.labels.generateLabels.call(t, t.chart),
                        t.options.reverse && t.legendItems.reverse()
                    },
                    afterBuildLabels: i,
                    beforeFit: i,
                    fit: function() {
                        var i = this
                          , n = i.options
                          , o = n.labels
                          , r = n.display
                          , l = i.ctx
                          , s = t.defaults.global
                          , d = a.getValueOrDefault
                          , u = d(o.fontSize, s.defaultFontSize)
                          , c = d(o.fontStyle, s.defaultFontStyle)
                          , h = d(o.fontFamily, s.defaultFontFamily)
                          , f = a.fontString(u, c, h)
                          , g = i.legendHitBoxes = []
                          , p = i.minSize
                          , m = i.isHorizontal();
                        if (m ? (p.width = i.maxWidth,
                        p.height = r ? 10 : 0) : (p.width = r ? 10 : 0,
                        p.height = i.maxHeight),
                        r)
                            if (l.font = f,
                            m) {
                                var b = i.lineWidths = [0]
                                  , v = i.legendItems.length ? u + o.padding : 0;
                                l.textAlign = "left",
                                l.textBaseline = "top",
                                a.each(i.legendItems, function(t, a) {
                                    var n = e(o, u)
                                      , r = n + u / 2 + l.measureText(t.text).width;
                                    b[b.length - 1] + r + o.padding >= i.width && (v += u + o.padding,
                                    b[b.length] = i.left),
                                    g[a] = {
                                        left: 0,
                                        top: 0,
                                        width: r,
                                        height: u
                                    },
                                    b[b.length - 1] += r + o.padding
                                }),
                                p.height += v
                            } else {
                                var x = o.padding
                                  , y = i.columnWidths = []
                                  , k = o.padding
                                  , S = 0
                                  , w = 0
                                  , M = u + x;
                                a.each(i.legendItems, function(t, a) {
                                    var i = e(o, u)
                                      , n = i + u / 2 + l.measureText(t.text).width;
                                    w + M > p.height && (k += S + o.padding,
                                    y.push(S),
                                    S = 0,
                                    w = 0),
                                    S = Math.max(S, n),
                                    w += M,
                                    g[a] = {
                                        left: 0,
                                        top: 0,
                                        width: n,
                                        height: u
                                    }
                                }),
                                k += S,
                                y.push(S),
                                p.width += k
                            }
                        i.width = p.width,
                        i.height = p.height
                    },
                    afterFit: i,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var i = this
                          , n = i.options
                          , o = n.labels
                          , r = t.defaults.global
                          , l = r.elements.line
                          , s = i.width
                          , d = i.lineWidths;
                        if (n.display) {
                            var u, c = i.ctx, h = a.getValueOrDefault, f = h(o.fontColor, r.defaultFontColor), g = h(o.fontSize, r.defaultFontSize), p = h(o.fontStyle, r.defaultFontStyle), m = h(o.fontFamily, r.defaultFontFamily), b = a.fontString(g, p, m);
                            c.textAlign = "left",
                            c.textBaseline = "top",
                            c.lineWidth = .5,
                            c.strokeStyle = f,
                            c.fillStyle = f,
                            c.font = b;
                            var v = e(o, g)
                              , x = i.legendHitBoxes
                              , y = function(e, a, i) {
                                if (!(isNaN(v) || 0 >= v)) {
                                    c.save(),
                                    c.fillStyle = h(i.fillStyle, r.defaultColor),
                                    c.lineCap = h(i.lineCap, l.borderCapStyle),
                                    c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset),
                                    c.lineJoin = h(i.lineJoin, l.borderJoinStyle),
                                    c.lineWidth = h(i.lineWidth, l.borderWidth),
                                    c.strokeStyle = h(i.strokeStyle, r.defaultColor);
                                    var o = 0 === h(i.lineWidth, l.borderWidth);
                                    if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)),
                                    n.labels && n.labels.usePointStyle) {
                                        var s = g * Math.SQRT2 / 2
                                          , d = s / Math.SQRT2
                                          , u = e + d
                                          , f = a + d;
                                        t.canvasHelpers.drawPoint(c, i.pointStyle, s, u, f)
                                    } else
                                        o || c.strokeRect(e, a, v, g),
                                        c.fillRect(e, a, v, g);
                                    c.restore()
                                }
                            }
                              , k = function(t, e, a, i) {
                                c.fillText(a.text, v + g / 2 + t, e),
                                a.hidden && (c.beginPath(),
                                c.lineWidth = 2,
                                c.moveTo(v + g / 2 + t, e + g / 2),
                                c.lineTo(v + g / 2 + t + i, e + g / 2),
                                c.stroke())
                            }
                              , S = i.isHorizontal();
                            u = S ? {
                                x: i.left + (s - d[0]) / 2,
                                y: i.top + o.padding,
                                line: 0
                            } : {
                                x: i.left + o.padding,
                                y: i.top + o.padding,
                                line: 0
                            };
                            var w = g + o.padding;
                            a.each(i.legendItems, function(t, e) {
                                var a = c.measureText(t.text).width
                                  , n = v + g / 2 + a
                                  , r = u.x
                                  , l = u.y;
                                S ? r + n >= s && (l = u.y += w,
                                u.line++,
                                r = u.x = i.left + (s - d[u.line]) / 2) : l + w > i.bottom && (r = u.x = r + i.columnWidths[u.line] + o.padding,
                                l = u.y = i.top,
                                u.line++),
                                y(r, l, t),
                                x[e].left = r,
                                x[e].top = l,
                                k(r, l, t, a),
                                S ? u.x += n + o.padding : u.y += w
                            })
                        }
                    },
                    handleEvent: function(t) {
                        var e = this
                          , i = e.options
                          , n = "mouseup" === t.type ? "click" : t.type
                          , o = !1;
                        if ("mousemove" === n) {
                            if (!i.onHover)
                                return
                        } else {
                            if ("click" !== n)
                                return;
                            if (!i.onClick)
                                return
                        }
                        var r = a.getRelativePosition(t, e.chart.chart)
                          , l = r.x
                          , s = r.y;
                        if (l >= e.left && l <= e.right && s >= e.top && s <= e.bottom)
                            for (var d = e.legendHitBoxes, u = 0; u < d.length; ++u) {
                                var c = d[u];
                                if (l >= c.left && l <= c.left + c.width && s >= c.top && s <= c.top + c.height) {
                                    if ("click" === n) {
                                        i.onClick.call(e, t, e.legendItems[u]),
                                        o = !0;
                                        break
                                    }
                                    if ("mousemove" === n) {
                                        i.onHover.call(e, t, e.legendItems[u]),
                                        o = !0;
                                        break
                                    }
                                }
                            }
                        return o
                    }
                }),
                t.plugins.register({
                    beforeInit: function(e) {
                        var a = e.options
                          , i = a.legend;
                        i && (e.legend = new t.Legend({
                            ctx: e.chart.ctx,
                            options: i,
                            chart: e
                        }),
                        t.layoutService.addBox(e, e.legend))
                    }
                })
            }
        }
        , {}],
        31: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers.noop;
                t.plugins = {
                    _plugins: [],
                    register: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            -1 === e.indexOf(t) && e.push(t)
                        })
                    },
                    unregister: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var a = e.indexOf(t);
                            -1 !== a && e.splice(a, 1)
                        })
                    },
                    clear: function() {
                        this._plugins = []
                    },
                    count: function() {
                        return this._plugins.length
                    },
                    getAll: function() {
                        return this._plugins
                    },
                    notify: function(t, e) {
                        var a, i, n = this._plugins, o = n.length;
                        for (a = 0; o > a; ++a)
                            if (i = n[a],
                            "function" == typeof i[t] && i[t].apply(i, e || []) === !1)
                                return !1;
                        return !0
                    }
                },
                t.PluginBase = t.Element.extend({
                    beforeInit: e,
                    afterInit: e,
                    beforeUpdate: e,
                    afterUpdate: e,
                    beforeDraw: e,
                    afterDraw: e,
                    destroy: e
                }),
                t.pluginService = t.plugins
            }
        }
        , {}],
        32: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.scale = {
                    display: !0,
                    position: "left",
                    gridLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1,
                        drawBorder: !0,
                        drawOnChartArea: !0,
                        drawTicks: !0,
                        tickMarkLength: 10,
                        zeroLineWidth: 1,
                        zeroLineColor: "rgba(0,0,0,0.25)",
                        offsetGridLines: !1,
                        borderDash: [],
                        borderDashOffset: 0
                    },
                    scaleLabel: {
                        labelString: "",
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !1,
                        minRotation: 0,
                        maxRotation: 50,
                        mirror: !1,
                        padding: 10,
                        reverse: !1,
                        display: !0,
                        autoSkip: !0,
                        autoSkipPadding: 0,
                        labelOffset: 0,
                        callback: t.Ticks.formatters.values
                    }
                },
                t.Scale = t.Element.extend({
                    beforeUpdate: function() {
                        e.callCallback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, a, i) {
                        var n = this;
                        return n.beforeUpdate(),
                        n.maxWidth = t,
                        n.maxHeight = a,
                        n.margins = e.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, i),
                        n.beforeSetDimensions(),
                        n.setDimensions(),
                        n.afterSetDimensions(),
                        n.beforeDataLimits(),
                        n.determineDataLimits(),
                        n.afterDataLimits(),
                        n.beforeBuildTicks(),
                        n.buildTicks(),
                        n.afterBuildTicks(),
                        n.beforeTickToLabelConversion(),
                        n.convertTicksToLabels(),
                        n.afterTickToLabelConversion(),
                        n.beforeCalculateTickRotation(),
                        n.calculateTickRotation(),
                        n.afterCalculateTickRotation(),
                        n.beforeFit(),
                        n.fit(),
                        n.afterFit(),
                        n.afterUpdate(),
                        n.minSize
                    },
                    afterUpdate: function() {
                        e.callCallback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        e.callCallback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth,
                        t.left = 0,
                        t.right = t.width) : (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                        t.paddingLeft = 0,
                        t.paddingTop = 0,
                        t.paddingRight = 0,
                        t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        e.callCallback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        e.callCallback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: e.noop,
                    afterDataLimits: function() {
                        e.callCallback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        e.callCallback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: e.noop,
                    afterBuildTicks: function() {
                        e.callCallback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        e.callCallback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this
                          , e = t.options.ticks;
                        t.ticks = t.ticks.map(e.userCallback || e.callback)
                    },
                    afterTickToLabelConversion: function() {
                        e.callCallback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        e.callCallback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var a = this
                          , i = a.ctx
                          , n = t.defaults.global
                          , o = a.options.ticks
                          , r = e.getValueOrDefault(o.fontSize, n.defaultFontSize)
                          , l = e.getValueOrDefault(o.fontStyle, n.defaultFontStyle)
                          , s = e.getValueOrDefault(o.fontFamily, n.defaultFontFamily)
                          , d = e.fontString(r, l, s);
                        i.font = d;
                        var u, c = i.measureText(a.ticks[0]).width, h = i.measureText(a.ticks[a.ticks.length - 1]).width;
                        if (a.labelRotation = o.minRotation || 0,
                        a.paddingRight = 0,
                        a.paddingLeft = 0,
                        a.options.display && a.isHorizontal()) {
                            a.paddingRight = h / 2 + 3,
                            a.paddingLeft = c / 2 + 3,
                            a.longestTextCache || (a.longestTextCache = {});
                            for (var f, g, p = e.longestText(i, d, a.ticks, a.longestTextCache), m = p, b = a.getPixelForTick(1) - a.getPixelForTick(0) - 6; m > b && a.labelRotation < o.maxRotation; ) {
                                if (f = Math.cos(e.toRadians(a.labelRotation)),
                                g = Math.sin(e.toRadians(a.labelRotation)),
                                u = f * c,
                                u + r / 2 > a.yLabelWidth && (a.paddingLeft = u + r / 2),
                                a.paddingRight = r / 2,
                                g * p > a.maxHeight) {
                                    a.labelRotation--;
                                    break
                                }
                                a.labelRotation++,
                                m = f * p
                            }
                        }
                        a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0),
                        a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0))
                    },
                    afterCalculateTickRotation: function() {
                        e.callCallback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        e.callCallback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var a = this
                          , i = a.minSize = {
                            width: 0,
                            height: 0
                        }
                          , n = a.options
                          , o = t.defaults.global
                          , r = n.ticks
                          , l = n.scaleLabel
                          , s = n.gridLines
                          , d = n.display
                          , u = a.isHorizontal()
                          , c = e.getValueOrDefault(r.fontSize, o.defaultFontSize)
                          , h = e.getValueOrDefault(r.fontStyle, o.defaultFontStyle)
                          , f = e.getValueOrDefault(r.fontFamily, o.defaultFontFamily)
                          , g = e.fontString(c, h, f)
                          , p = e.getValueOrDefault(l.fontSize, o.defaultFontSize)
                          , m = n.gridLines.tickMarkLength;
                        if (u ? i.width = a.isFullWidth() ? a.maxWidth - a.margins.left - a.margins.right : a.maxWidth : i.width = d && s.drawTicks ? m : 0,
                        u ? i.height = d && s.drawTicks ? m : 0 : i.height = a.maxHeight,
                        l.display && d && (u ? i.height += 1.5 * p : i.width += 1.5 * p),
                        r.display && d) {
                            a.longestTextCache || (a.longestTextCache = {});
                            var b = e.longestText(a.ctx, g, a.ticks, a.longestTextCache)
                              , v = e.numberOfLabelLines(a.ticks)
                              , x = .5 * c;
                            if (u) {
                                a.longestLabelWidth = b;
                                var y = Math.sin(e.toRadians(a.labelRotation)) * a.longestLabelWidth + c * v + x * v;
                                i.height = Math.min(a.maxHeight, i.height + y),
                                a.ctx.font = g;
                                var k = a.ctx.measureText(a.ticks[0]).width
                                  , S = a.ctx.measureText(a.ticks[a.ticks.length - 1]).width
                                  , w = Math.cos(e.toRadians(a.labelRotation))
                                  , M = Math.sin(e.toRadians(a.labelRotation));
                                a.paddingLeft = 0 !== a.labelRotation ? w * k + 3 : k / 2 + 3,
                                a.paddingRight = 0 !== a.labelRotation ? M * (c / 2) + 3 : S / 2 + 3
                            } else {
                                var C = a.maxWidth - i.width
                                  , D = r.mirror;
                                D ? b = 0 : b += a.options.ticks.padding,
                                C > b ? i.width += b : i.width = a.maxWidth,
                                a.paddingTop = c / 2,
                                a.paddingBottom = c / 2
                            }
                        }
                        a.margins && (a.paddingLeft = Math.max(a.paddingLeft - a.margins.left, 0),
                        a.paddingTop = Math.max(a.paddingTop - a.margins.top, 0),
                        a.paddingRight = Math.max(a.paddingRight - a.margins.right, 0),
                        a.paddingBottom = Math.max(a.paddingBottom - a.margins.bottom, 0)),
                        a.width = i.width,
                        a.height = i.height
                    },
                    afterFit: function() {
                        e.callCallback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        return null === t || "undefined" == typeof t ? NaN : "number" != typeof t || isFinite(t) ? "object" == typeof t ? t instanceof Date || t.isValid ? t : this.getRightValue(this.isHorizontal() ? t.x : t.y) : t : NaN
                    },
                    getLabelForIndex: e.noop,
                    getPixelForValue: e.noop,
                    getValueForPixel: e.noop,
                    getPixelForTick: function(t, e) {
                        var a = this;
                        if (a.isHorizontal()) {
                            var i = a.width - (a.paddingLeft + a.paddingRight)
                              , n = i / Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1)
                              , o = n * t + a.paddingLeft;
                            e && (o += n / 2);
                            var r = a.left + Math.round(o);
                            return r += a.isFullWidth() ? a.margins.left : 0
                        }
                        var l = a.height - (a.paddingTop + a.paddingBottom);
                        return a.top + t * (l / (a.ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var a = e.width - (e.paddingLeft + e.paddingRight)
                              , i = a * t + e.paddingLeft
                              , n = e.left + Math.round(i);
                            return n += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        var t = this
                          , e = t.min
                          , a = t.max;
                        return t.getPixelForValue(t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0)
                    },
                    draw: function(a) {
                        var i = this
                          , n = i.options;
                        if (n.display) {
                            var o, r, l = i.ctx, s = t.defaults.global, d = n.ticks, u = n.gridLines, c = n.scaleLabel, h = 0 !== i.labelRotation, f = d.autoSkip, g = i.isHorizontal();
                            d.maxTicksLimit && (r = d.maxTicksLimit);
                            var p = e.getValueOrDefault(d.fontColor, s.defaultFontColor)
                              , m = e.getValueOrDefault(d.fontSize, s.defaultFontSize)
                              , b = e.getValueOrDefault(d.fontStyle, s.defaultFontStyle)
                              , v = e.getValueOrDefault(d.fontFamily, s.defaultFontFamily)
                              , x = e.fontString(m, b, v)
                              , y = u.tickMarkLength
                              , k = e.getValueOrDefault(u.borderDash, s.borderDash)
                              , S = e.getValueOrDefault(u.borderDashOffset, s.borderDashOffset)
                              , w = e.getValueOrDefault(c.fontColor, s.defaultFontColor)
                              , M = e.getValueOrDefault(c.fontSize, s.defaultFontSize)
                              , C = e.getValueOrDefault(c.fontStyle, s.defaultFontStyle)
                              , D = e.getValueOrDefault(c.fontFamily, s.defaultFontFamily)
                              , I = e.fontString(M, C, D)
                              , A = e.toRadians(i.labelRotation)
                              , T = Math.cos(A)
                              , P = i.longestLabelWidth * T;
                            l.fillStyle = p;
                            var F = [];
                            if (g) {
                                if (o = !1,
                                h && (P /= 2),
                                (P + d.autoSkipPadding) * i.ticks.length > i.width - (i.paddingLeft + i.paddingRight) && (o = 1 + Math.floor((P + d.autoSkipPadding) * i.ticks.length / (i.width - (i.paddingLeft + i.paddingRight)))),
                                r && i.ticks.length > r)
                                    for (; !o || i.ticks.length / (o || 1) > r; )
                                        o || (o = 1),
                                        o += 1;
                                f || (o = !1)
                            }
                            var _ = "right" === n.position ? i.left : i.right - y
                              , R = "right" === n.position ? i.left + y : i.right
                              , V = "bottom" === n.position ? i.top : i.bottom - y
                              , L = "bottom" === n.position ? i.top + y : i.bottom;
                            if (e.each(i.ticks, function(t, r) {
                                if (void 0 !== t && null !== t) {
                                    var l = i.ticks.length === r + 1
                                      , s = o > 1 && r % o > 0 || r % o === 0 && r + o >= i.ticks.length;
                                    if ((!s || l) && void 0 !== t && null !== t) {
                                        var c, f;
                                        r === ("undefined" != typeof i.zeroLineIndex ? i.zeroLineIndex : 0) ? (c = u.zeroLineWidth,
                                        f = u.zeroLineColor) : (c = e.getValueAtIndexOrDefault(u.lineWidth, r),
                                        f = e.getValueAtIndexOrDefault(u.color, r));
                                        var p, m, b, v, x, w, M, C, D, I, T = "middle", P = "middle";
                                        if (g) {
                                            h || (P = "top" === n.position ? "bottom" : "top"),
                                            T = h ? "right" : "center";
                                            var O = i.getPixelForTick(r) + e.aliasPixel(c);
                                            D = i.getPixelForTick(r, u.offsetGridLines) + d.labelOffset,
                                            I = h ? i.top + 12 : "top" === n.position ? i.bottom - y : i.top + y,
                                            p = b = x = M = O,
                                            m = V,
                                            v = L,
                                            w = a.top,
                                            C = a.bottom
                                        } else {
                                            "left" === n.position ? d.mirror ? (D = i.right + d.padding,
                                            T = "left") : (D = i.right - d.padding,
                                            T = "right") : d.mirror ? (D = i.left - d.padding,
                                            T = "right") : (D = i.left + d.padding,
                                            T = "left");
                                            var B = i.getPixelForTick(r);
                                            B += e.aliasPixel(c),
                                            I = i.getPixelForTick(r, u.offsetGridLines),
                                            p = _,
                                            b = R,
                                            x = a.left,
                                            M = a.right,
                                            m = v = w = C = B
                                        }
                                        F.push({
                                            tx1: p,
                                            ty1: m,
                                            tx2: b,
                                            ty2: v,
                                            x1: x,
                                            y1: w,
                                            x2: M,
                                            y2: C,
                                            labelX: D,
                                            labelY: I,
                                            glWidth: c,
                                            glColor: f,
                                            glBorderDash: k,
                                            glBorderDashOffset: S,
                                            rotation: -1 * A,
                                            label: t,
                                            textBaseline: P,
                                            textAlign: T
                                        })
                                    }
                                }
                            }),
                            e.each(F, function(t) {
                                if (u.display && (l.save(),
                                l.lineWidth = t.glWidth,
                                l.strokeStyle = t.glColor,
                                l.setLineDash && (l.setLineDash(t.glBorderDash),
                                l.lineDashOffset = t.glBorderDashOffset),
                                l.beginPath(),
                                u.drawTicks && (l.moveTo(t.tx1, t.ty1),
                                l.lineTo(t.tx2, t.ty2)),
                                u.drawOnChartArea && (l.moveTo(t.x1, t.y1),
                                l.lineTo(t.x2, t.y2)),
                                l.stroke(),
                                l.restore()),
                                d.display) {
                                    l.save(),
                                    l.translate(t.labelX, t.labelY),
                                    l.rotate(t.rotation),
                                    l.font = x,
                                    l.textBaseline = t.textBaseline,
                                    l.textAlign = t.textAlign;
                                    var a = t.label;
                                    if (e.isArray(a))
                                        for (var i = 0, n = -(a.length - 1) * m * .75; i < a.length; ++i)
                                            l.fillText("" + a[i], 0, n),
                                            n += 1.5 * m;
                                    else
                                        l.fillText(a, 0, 0);
                                    l.restore()
                                }
                            }),
                            c.display) {
                                var O, B, W = 0;
                                if (g)
                                    O = i.left + (i.right - i.left) / 2,
                                    B = "bottom" === n.position ? i.bottom - M / 2 : i.top + M / 2;
                                else {
                                    var z = "left" === n.position;
                                    O = z ? i.left + M / 2 : i.right - M / 2,
                                    B = i.top + (i.bottom - i.top) / 2,
                                    W = z ? -.5 * Math.PI : .5 * Math.PI
                                }
                                l.save(),
                                l.translate(O, B),
                                l.rotate(W),
                                l.textAlign = "center",
                                l.textBaseline = "middle",
                                l.fillStyle = w,
                                l.font = I,
                                l.fillText(c.labelString, 0, 0),
                                l.restore()
                            }
                            if (u.drawBorder) {
                                l.lineWidth = e.getValueAtIndexOrDefault(u.lineWidth, 0),
                                l.strokeStyle = e.getValueAtIndexOrDefault(u.color, 0);
                                var N = i.left
                                  , E = i.right
                                  , H = i.top
                                  , U = i.bottom
                                  , j = e.aliasPixel(l.lineWidth);
                                g ? (H = U = "top" === n.position ? i.bottom : i.top,
                                H += j,
                                U += j) : (N = E = "left" === n.position ? i.right : i.left,
                                N += j,
                                E += j),
                                l.beginPath(),
                                l.moveTo(N, H),
                                l.lineTo(E, U),
                                l.stroke()
                            }
                        }
                    }
                })
            }
        }
        , {}],
        33: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, a, i) {
                        this.constructors[t] = a,
                        this.defaults[t] = e.clone(i)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(a) {
                        return this.defaults.hasOwnProperty(a) ? e.scaleMerge(t.defaults.scale, this.defaults[a]) : {}
                    },
                    updateScaleDefaults: function(t, a) {
                        var i = this.defaults;
                        i.hasOwnProperty(t) && (i[t] = e.extend(i[t], a))
                    },
                    addScalesToLayout: function(a) {
                        e.each(a.scales, function(e) {
                            t.layoutService.addBox(a, e)
                        })
                    }
                }
            }
        }
        , {}],
        34: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.Ticks = {
                    generators: {
                        linear: function(t, a) {
                            var i, n = [];
                            if (t.stepSize && t.stepSize > 0)
                                i = t.stepSize;
                            else {
                                var o = e.niceNum(a.max - a.min, !1);
                                i = e.niceNum(o / (t.maxTicks - 1), !0)
                            }
                            var r = Math.floor(a.min / i) * i
                              , l = Math.ceil(a.max / i) * i;
                            if (t.min && t.max && t.stepSize) {
                                var s = (t.max - t.min) % t.stepSize === 0;
                                s && (r = t.min,
                                l = t.max)
                            }
                            var d = (l - r) / i;
                            d = e.almostEquals(d, Math.round(d), i / 1e3) ? Math.round(d) : Math.ceil(d),
                            n.push(void 0 !== t.min ? t.min : r);
                            for (var u = 1; d > u; ++u)
                                n.push(r + u * i);
                            return n.push(void 0 !== t.max ? t.max : l),
                            n
                        },
                        logarithmic: function(t, a) {
                            for (var i = [], n = e.getValueOrDefault, o = n(t.min, Math.pow(10, Math.floor(e.log10(a.min)))); o < a.max; ) {
                                i.push(o);
                                var r, l;
                                0 === o ? (r = Math.floor(e.log10(a.minNotZero)),
                                l = Math.round(a.minNotZero / Math.pow(10, r))) : (r = Math.floor(e.log10(o)),
                                l = Math.floor(o / Math.pow(10, r)) + 1),
                                10 === l && (l = 1,
                                ++r),
                                o = l * Math.pow(10, r)
                            }
                            var s = n(t.max, o);
                            return i.push(s),
                            i
                        }
                    },
                    formatters: {
                        values: function(t) {
                            return e.isArray(t) ? t : "" + t
                        },
                        linear: function(t, a, i) {
                            var n = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                            Math.abs(n) > 1 && t !== Math.floor(t) && (n = t - Math.floor(t));
                            var o = e.log10(Math.abs(n))
                              , r = "";
                            if (0 !== t) {
                                var l = -1 * Math.floor(o);
                                l = Math.max(Math.min(l, 20), 0),
                                r = t.toFixed(l)
                            } else
                                r = "0";
                            return r
                        },
                        logarithmic: function(t, a, i) {
                            var n = t / Math.pow(10, Math.floor(e.log10(t)));
                            return 0 === t ? "0" : 1 === n || 2 === n || 5 === n || 0 === a || a === i.length - 1 ? t.toExponential() : ""
                        }
                    }
                }
            }
        }
        , {}],
        35: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers;
                t.defaults.global.title = {
                    display: !1,
                    position: "top",
                    fullWidth: !0,
                    fontStyle: "bold",
                    padding: 10,
                    text: ""
                };
                var a = e.noop;
                t.Title = t.Element.extend({
                    initialize: function(a) {
                        var i = this;
                        e.extend(i, a),
                        i.options = e.configMerge(t.defaults.global.title, a.options),
                        i.legendHitBoxes = []
                    },
                    beforeUpdate: function() {
                        var a = this.chart.options;
                        a && a.title && (this.options = e.configMerge(t.defaults.global.title, a.title))
                    },
                    update: function(t, e, a) {
                        var i = this;
                        return i.beforeUpdate(),
                        i.maxWidth = t,
                        i.maxHeight = e,
                        i.margins = a,
                        i.beforeSetDimensions(),
                        i.setDimensions(),
                        i.afterSetDimensions(),
                        i.beforeBuildLabels(),
                        i.buildLabels(),
                        i.afterBuildLabels(),
                        i.beforeFit(),
                        i.fit(),
                        i.afterFit(),
                        i.afterUpdate(),
                        i.minSize
                    },
                    afterUpdate: a,
                    beforeSetDimensions: a,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth,
                        t.left = 0,
                        t.right = t.width) : (t.height = t.maxHeight,
                        t.top = 0,
                        t.bottom = t.height),
                        t.paddingLeft = 0,
                        t.paddingTop = 0,
                        t.paddingRight = 0,
                        t.paddingBottom = 0,
                        t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: a,
                    beforeBuildLabels: a,
                    buildLabels: a,
                    afterBuildLabels: a,
                    beforeFit: a,
                    fit: function() {
                        var a = this
                          , i = e.getValueOrDefault
                          , n = a.options
                          , o = t.defaults.global
                          , r = n.display
                          , l = i(n.fontSize, o.defaultFontSize)
                          , s = a.minSize;
                        a.isHorizontal() ? (s.width = a.maxWidth,
                        s.height = r ? l + 2 * n.padding : 0) : (s.width = r ? l + 2 * n.padding : 0,
                        s.height = a.maxHeight),
                        a.width = s.width,
                        a.height = s.height
                    },
                    afterFit: a,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var a = this
                          , i = a.ctx
                          , n = e.getValueOrDefault
                          , o = a.options
                          , r = t.defaults.global;
                        if (o.display) {
                            var l, s, d, u = n(o.fontSize, r.defaultFontSize), c = n(o.fontStyle, r.defaultFontStyle), h = n(o.fontFamily, r.defaultFontFamily), f = e.fontString(u, c, h), g = 0, p = a.top, m = a.left, b = a.bottom, v = a.right;
                            i.fillStyle = n(o.fontColor, r.defaultFontColor),
                            i.font = f,
                            a.isHorizontal() ? (l = m + (v - m) / 2,
                            s = p + (b - p) / 2,
                            d = v - m) : (l = "left" === o.position ? m + u / 2 : v - u / 2,
                            s = p + (b - p) / 2,
                            d = b - p,
                            g = Math.PI * ("left" === o.position ? -.5 : .5)),
                            i.save(),
                            i.translate(l, s),
                            i.rotate(g),
                            i.textAlign = "center",
                            i.textBaseline = "middle",
                            i.fillText(o.text, 0, 0, d),
                            i.restore()
                        }
                    }
                }),
                t.plugins.register({
                    beforeInit: function(e) {
                        var a = e.options
                          , i = a.title;
                        i && (e.titleBlock = new t.Title({
                            ctx: e.chart.ctx,
                            options: i,
                            chart: e
                        }),
                        t.layoutService.addBox(e, e.titleBlock))
                    }
                })
            }
        }
        , {}],
        36: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t, e) {
                    var a = s.color(t);
                    return a.alpha(e * a.alpha()).rgbaString()
                }
                function a(t, e) {
                    return e && (s.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)),
                    t
                }
                function i(t) {
                    var e = t._xScale
                      , a = t._yScale || t._scale
                      , i = t._index
                      , n = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(i, n) : "",
                        yLabel: a ? a.getLabelForIndex(i, n) : "",
                        index: i,
                        datasetIndex: n,
                        x: t._model.x,
                        y: t._model.y
                    }
                }
                function n(e) {
                    var a = t.defaults.global
                      , i = s.getValueOrDefault;
                    return {
                        xPadding: e.xPadding,
                        yPadding: e.yPadding,
                        xAlign: e.xAlign,
                        yAlign: e.yAlign,
                        bodyFontColor: e.bodyFontColor,
                        _bodyFontFamily: i(e.bodyFontFamily, a.defaultFontFamily),
                        _bodyFontStyle: i(e.bodyFontStyle, a.defaultFontStyle),
                        _bodyAlign: e.bodyAlign,
                        bodyFontSize: i(e.bodyFontSize, a.defaultFontSize),
                        bodySpacing: e.bodySpacing,
                        titleFontColor: e.titleFontColor,
                        _titleFontFamily: i(e.titleFontFamily, a.defaultFontFamily),
                        _titleFontStyle: i(e.titleFontStyle, a.defaultFontStyle),
                        titleFontSize: i(e.titleFontSize, a.defaultFontSize),
                        _titleAlign: e.titleAlign,
                        titleSpacing: e.titleSpacing,
                        titleMarginBottom: e.titleMarginBottom,
                        footerFontColor: e.footerFontColor,
                        _footerFontFamily: i(e.footerFontFamily, a.defaultFontFamily),
                        _footerFontStyle: i(e.footerFontStyle, a.defaultFontStyle),
                        footerFontSize: i(e.footerFontSize, a.defaultFontSize),
                        _footerAlign: e.footerAlign,
                        footerSpacing: e.footerSpacing,
                        footerMarginTop: e.footerMarginTop,
                        caretSize: e.caretSize,
                        cornerRadius: e.cornerRadius,
                        backgroundColor: e.backgroundColor,
                        opacity: 0,
                        legendColorBackground: e.multiKeyBackground,
                        displayColors: e.displayColors
                    }
                }
                function o(t, e) {
                    var a = t._chart.ctx
                      , i = 2 * e.yPadding
                      , n = 0
                      , o = e.body
                      , r = o.reduce(function(t, e) {
                        return t + e.before.length + e.lines.length + e.after.length
                    }, 0);
                    r += e.beforeBody.length + e.afterBody.length;
                    var l = e.title.length
                      , d = e.footer.length
                      , u = e.titleFontSize
                      , c = e.bodyFontSize
                      , h = e.footerFontSize;
                    i += l * u,
                    i += l ? (l - 1) * e.titleSpacing : 0,
                    i += l ? e.titleMarginBottom : 0,
                    i += r * c,
                    i += r ? (r - 1) * e.bodySpacing : 0,
                    i += d ? e.footerMarginTop : 0,
                    i += d * h,
                    i += d ? (d - 1) * e.footerSpacing : 0;
                    var f = 0
                      , g = function(t) {
                        n = Math.max(n, a.measureText(t).width + f)
                    };
                    return a.font = s.fontString(u, e._titleFontStyle, e._titleFontFamily),
                    s.each(e.title, g),
                    a.font = s.fontString(c, e._bodyFontStyle, e._bodyFontFamily),
                    s.each(e.beforeBody.concat(e.afterBody), g),
                    f = e.displayColors ? c + 2 : 0,
                    s.each(o, function(t) {
                        s.each(t.before, g),
                        s.each(t.lines, g),
                        s.each(t.after, g)
                    }),
                    f = 0,
                    a.font = s.fontString(h, e._footerFontStyle, e._footerFontFamily),
                    s.each(e.footer, g),
                    n += 2 * e.xPadding,
                    {
                        width: n,
                        height: i
                    }
                }
                function r(t, e) {
                    var a = t._model
                      , i = t._chart
                      , n = t._chartInstance.chartArea
                      , o = "center"
                      , r = "center";
                    a.y < e.height ? r = "top" : a.y > i.height - e.height && (r = "bottom");
                    var l, s, d, u, c, h = (n.left + n.right) / 2, f = (n.top + n.bottom) / 2;
                    "center" === r ? (l = function(t) {
                        return h >= t
                    }
                    ,
                    s = function(t) {
                        return t > h
                    }
                    ) : (l = function(t) {
                        return t <= e.width / 2
                    }
                    ,
                    s = function(t) {
                        return t >= i.width - e.width / 2
                    }
                    ),
                    d = function(t) {
                        return t + e.width > i.width
                    }
                    ,
                    u = function(t) {
                        return t - e.width < 0
                    }
                    ,
                    c = function(t) {
                        return f >= t ? "top" : "bottom"
                    }
                    ,
                    l(a.x) ? (o = "left",
                    d(a.x) && (o = "center",
                    r = c(a.y))) : s(a.x) && (o = "right",
                    u(a.x) && (o = "center",
                    r = c(a.y)));
                    var g = t._options;
                    return {
                        xAlign: g.xAlign ? g.xAlign : o,
                        yAlign: g.yAlign ? g.yAlign : r
                    }
                }
                function l(t, e, a) {
                    var i = t.x
                      , n = t.y
                      , o = t.caretSize
                      , r = t.caretPadding
                      , l = t.cornerRadius
                      , s = a.xAlign
                      , d = a.yAlign
                      , u = o + r
                      , c = l + r;
                    return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2),
                    "top" === d ? n += u : n -= "bottom" === d ? e.height + u : e.height / 2,
                    "center" === d ? "left" === s ? i += u : "right" === s && (i -= u) : "left" === s ? i -= c : "right" === s && (i += c),
                    {
                        x: i,
                        y: n
                    }
                }
                var s = t.helpers;
                t.defaults.global.tooltips = {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    callbacks: {
                        beforeTitle: s.noop,
                        title: function(t, e) {
                            var a = ""
                              , i = e.labels
                              , n = i ? i.length : 0;
                            if (t.length > 0) {
                                var o = t[0];
                                o.xLabel ? a = o.xLabel : n > 0 && o.index < n && (a = i[o.index])
                            }
                            return a
                        },
                        afterTitle: s.noop,
                        beforeBody: s.noop,
                        beforeLabel: s.noop,
                        label: function(t, e) {
                            var a = e.datasets[t.datasetIndex].label || "";
                            return a + ": " + t.yLabel
                        },
                        labelColor: function(t, e) {
                            var a = e.getDatasetMeta(t.datasetIndex)
                              , i = a.data[t.index]
                              , n = i._view;
                            return {
                                borderColor: n.borderColor,
                                backgroundColor: n.backgroundColor
                            }
                        },
                        afterLabel: s.noop,
                        afterBody: s.noop,
                        beforeFooter: s.noop,
                        footer: s.noop,
                        afterFooter: s.noop
                    }
                },
                t.Tooltip = t.Element.extend({
                    initialize: function() {
                        this._model = n(this._options)
                    },
                    getTitle: function() {
                        var t = this
                          , e = t._options
                          , i = e.callbacks
                          , n = i.beforeTitle.apply(t, arguments)
                          , o = i.title.apply(t, arguments)
                          , r = i.afterTitle.apply(t, arguments)
                          , l = [];
                        return l = a(l, n),
                        l = a(l, o),
                        l = a(l, r)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return s.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var i = this
                          , n = i._options.callbacks
                          , o = [];
                        return s.each(t, function(t) {
                            var r = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            a(r.before, n.beforeLabel.call(i, t, e)),
                            a(r.lines, n.label.call(i, t, e)),
                            a(r.after, n.afterLabel.call(i, t, e)),
                            o.push(r)
                        }),
                        o
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return s.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this
                          , e = t._options.callbacks
                          , i = e.beforeFooter.apply(t, arguments)
                          , n = e.footer.apply(t, arguments)
                          , o = e.afterFooter.apply(t, arguments)
                          , r = [];
                        return r = a(r, i),
                        r = a(r, n),
                        r = a(r, o)
                    },
                    update: function(e) {
                        var a, d, u = this, c = u._options, h = u._model, f = u._model = n(c), g = u._active, p = u._data, m = u._chartInstance, b = {
                            xAlign: h.xAlign,
                            yAlign: h.yAlign
                        }, v = {
                            x: h.x,
                            y: h.y
                        }, x = {
                            width: h.width,
                            height: h.height
                        }, y = {
                            x: h.caretX,
                            y: h.caretY
                        };
                        if (g.length) {
                            f.opacity = 1;
                            var k = [];
                            y = t.Tooltip.positioners[c.position](g, u._eventPosition);
                            var S = [];
                            for (a = 0,
                            d = g.length; d > a; ++a)
                                S.push(i(g[a]));
                            c.filter && (S = S.filter(function(t) {
                                return c.filter(t, p)
                            })),
                            c.itemSort && (S = S.sort(function(t, e) {
                                return c.itemSort(t, e, p)
                            })),
                            s.each(S, function(t) {
                                k.push(c.callbacks.labelColor.call(u, t, m))
                            }),
                            f.title = u.getTitle(S, p),
                            f.beforeBody = u.getBeforeBody(S, p),
                            f.body = u.getBody(S, p),
                            f.afterBody = u.getAfterBody(S, p),
                            f.footer = u.getFooter(S, p),
                            f.x = Math.round(y.x),
                            f.y = Math.round(y.y),
                            f.caretPadding = s.getValueOrDefault(y.padding, 2),
                            f.labelColors = k,
                            f.dataPoints = S,
                            x = o(this, f),
                            b = r(this, x),
                            v = l(f, x, b)
                        } else
                            f.opacity = 0;
                        return f.xAlign = b.xAlign,
                        f.yAlign = b.yAlign,
                        f.x = v.x,
                        f.y = v.y,
                        f.width = x.width,
                        f.height = x.height,
                        f.caretX = y.x,
                        f.caretY = y.y,
                        u._model = f,
                        e && c.custom && c.custom.call(u, f),
                        u
                    },
                    drawCaret: function(t, a, i) {
                        var n, o, r, l, s, d, u = this._view, c = this._chart.ctx, h = u.caretSize, f = u.cornerRadius, g = u.xAlign, p = u.yAlign, m = t.x, b = t.y, v = a.width, x = a.height;
                        "center" === p ? ("left" === g ? (n = m,
                        o = n - h,
                        r = n) : (n = m + v,
                        o = n + h,
                        r = n),
                        s = b + x / 2,
                        l = s - h,
                        d = s + h) : ("left" === g ? (n = m + f,
                        o = n + h,
                        r = o + h) : "right" === g ? (n = m + v - f,
                        o = n - h,
                        r = o - h) : (o = m + v / 2,
                        n = o - h,
                        r = o + h),
                        "top" === p ? (l = b,
                        s = l - h,
                        d = l) : (l = b + x,
                        s = l + h,
                        d = l)),
                        c.fillStyle = e(u.backgroundColor, i),
                        c.beginPath(),
                        c.moveTo(n, l),
                        c.lineTo(o, s),
                        c.lineTo(r, d),
                        c.closePath(),
                        c.fill()
                    },
                    drawTitle: function(t, a, i, n) {
                        var o = a.title;
                        if (o.length) {
                            i.textAlign = a._titleAlign,
                            i.textBaseline = "top";
                            var r = a.titleFontSize
                              , l = a.titleSpacing;
                            i.fillStyle = e(a.titleFontColor, n),
                            i.font = s.fontString(r, a._titleFontStyle, a._titleFontFamily);
                            var d, u;
                            for (d = 0,
                            u = o.length; u > d; ++d)
                                i.fillText(o[d], t.x, t.y),
                                t.y += r + l,
                                d + 1 === o.length && (t.y += a.titleMarginBottom - l)
                        }
                    },
                    drawBody: function(t, a, i, n) {
                        var o = a.bodyFontSize
                          , r = a.bodySpacing
                          , l = a.body;
                        i.textAlign = a._bodyAlign,
                        i.textBaseline = "top";
                        var d = e(a.bodyFontColor, n);
                        i.fillStyle = d,
                        i.font = s.fontString(o, a._bodyFontStyle, a._bodyFontFamily);
                        var u = 0
                          , c = function(e) {
                            i.fillText(e, t.x + u, t.y),
                            t.y += o + r
                        };
                        s.each(a.beforeBody, c);
                        var h = a.displayColors;
                        u = h ? o + 2 : 0,
                        s.each(l, function(r, l) {
                            s.each(r.before, c),
                            s.each(r.lines, function(r) {
                                h && (i.fillStyle = e(a.legendColorBackground, n),
                                i.fillRect(t.x, t.y, o, o),
                                i.strokeStyle = e(a.labelColors[l].borderColor, n),
                                i.strokeRect(t.x, t.y, o, o),
                                i.fillStyle = e(a.labelColors[l].backgroundColor, n),
                                i.fillRect(t.x + 1, t.y + 1, o - 2, o - 2),
                                i.fillStyle = d),
                                c(r)
                            }),
                            s.each(r.after, c)
                        }),
                        u = 0,
                        s.each(a.afterBody, c),
                        t.y -= r
                    },
                    drawFooter: function(t, a, i, n) {
                        var o = a.footer;
                        o.length && (t.y += a.footerMarginTop,
                        i.textAlign = a._footerAlign,
                        i.textBaseline = "top",
                        i.fillStyle = e(a.footerFontColor, n),
                        i.font = s.fontString(a.footerFontSize, a._footerFontStyle, a._footerFontFamily),
                        s.each(o, function(e) {
                            i.fillText(e, t.x, t.y),
                            t.y += a.footerFontSize + a.footerSpacing
                        }))
                    },
                    drawBackground: function(t, a, i, n, o) {
                        i.fillStyle = e(a.backgroundColor, o),
                        s.drawRoundedRectangle(i, t.x, t.y, n.width, n.height, a.cornerRadius),
                        i.fill()
                    },
                    draw: function() {
                        var t = this._chart.ctx
                          , e = this._view;
                        if (0 !== e.opacity) {
                            var a = {
                                width: e.width,
                                height: e.height
                            }
                              , i = {
                                x: e.x,
                                y: e.y
                            }
                              , n = Math.abs(e.opacity < .001) ? 0 : e.opacity;
                            this._options.enabled && (this.drawBackground(i, e, t, a, n),
                            this.drawCaret(i, a, n),
                            i.x += e.xPadding,
                            i.y += e.yPadding,
                            this.drawTitle(i, e, t, n),
                            this.drawBody(i, e, t, n),
                            this.drawFooter(i, e, t, n))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this
                          , a = e._options
                          , i = !1;
                        if (e._lastActive = e._lastActive || [],
                        "mouseout" === t.type ? e._active = [] : e._active = e._chartInstance.getElementsAtEventForMode(t, a.mode, a),
                        i = !s.arrayEquals(e._active, e._lastActive),
                        e._lastActive = e._active,
                        a.enabled || a.custom) {
                            e._eventPosition = s.getRelativePosition(t, e._chart);
                            var n = e._model;
                            e.update(!0),
                            e.pivot(),
                            i |= n.x !== e._model.x || n.y !== e._model.y
                        }
                        return i
                    }
                }),
                t.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length)
                            return !1;
                        var e, a, i = 0, n = 0, o = 0;
                        for (e = 0,
                        a = t.length; a > e; ++e) {
                            var r = t[e];
                            if (r && r.hasValue()) {
                                var l = r.tooltipPosition();
                                i += l.x,
                                n += l.y,
                                ++o
                            }
                        }
                        return {
                            x: Math.round(i / o),
                            y: Math.round(n / o)
                        }
                    },
                    nearest: function(t, e) {
                        var a, i, n, o = e.x, r = e.y, l = Number.POSITIVE_INFINITY;
                        for (i = 0,
                        n = t.length; n > i; ++i) {
                            var d = t[i];
                            if (d && d.hasValue()) {
                                var u = d.getCenterPoint()
                                  , c = s.distanceBetweenPoints(e, u);
                                l > c && (l = c,
                                a = d)
                            }
                        }
                        if (a) {
                            var h = a.tooltipPosition();
                            o = h.x,
                            r = h.y
                        }
                        return {
                            x: o,
                            y: r
                        }
                    }
                }
            }
        }
        , {}],
        37: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = t.defaults.global;
                a.elements.arc = {
                    backgroundColor: a.defaultColor,
                    borderColor: "#fff",
                    borderWidth: 2
                },
                t.elements.Arc = t.Element.extend({
                    inLabelRange: function(t) {
                        var e = this._view;
                        return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2) : !1
                    },
                    inRange: function(t, a) {
                        var i = this._view;
                        if (i) {
                            for (var n = e.getAngleFromPoint(i, {
                                x: t,
                                y: a
                            }), o = n.angle, r = n.distance, l = i.startAngle, s = i.endAngle; l > s; )
                                s += 2 * Math.PI;
                            for (; o > s; )
                                o -= 2 * Math.PI;
                            for (; l > o; )
                                o += 2 * Math.PI;
                            var d = o >= l && s >= o
                              , u = r >= i.innerRadius && r <= i.outerRadius;
                            return d && u
                        }
                        return !1
                    },
                    getCenterPoint: function() {
                        var t = this._view
                          , e = (t.startAngle + t.endAngle) / 2
                          , a = (t.innerRadius + t.outerRadius) / 2;
                        return {
                            x: t.x + Math.cos(e) * a,
                            y: t.y + Math.sin(e) * a
                        }
                    },
                    getArea: function() {
                        var t = this._view;
                        return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                    },
                    tooltipPosition: function() {
                        var t = this._view
                          , e = t.startAngle + (t.endAngle - t.startAngle) / 2
                          , a = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                        return {
                            x: t.x + Math.cos(e) * a,
                            y: t.y + Math.sin(e) * a
                        }
                    },
                    draw: function() {
                        var t = this._chart.ctx
                          , e = this._view
                          , a = e.startAngle
                          , i = e.endAngle;
                        t.beginPath(),
                        t.arc(e.x, e.y, e.outerRadius, a, i),
                        t.arc(e.x, e.y, e.innerRadius, i, a, !0),
                        t.closePath(),
                        t.strokeStyle = e.borderColor,
                        t.lineWidth = e.borderWidth,
                        t.fillStyle = e.backgroundColor,
                        t.fill(),
                        t.lineJoin = "bevel",
                        e.borderWidth && t.stroke()
                    }
                })
            }
        }
        , {}],
        38: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = t.defaults.global;
                t.defaults.global.elements.line = {
                    tension: .4,
                    backgroundColor: a.defaultColor,
                    borderWidth: 3,
                    borderColor: a.defaultColor,
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0,
                    borderJoinStyle: "miter",
                    capBezierPoints: !0,
                    fill: !0
                },
                t.elements.Line = t.Element.extend({
                    draw: function() {
                        function t(t, e) {
                            var a = e._view;
                            e._view.steppedLine === !0 ? (s.lineTo(a.x, t._view.y),
                            s.lineTo(a.x, a.y)) : 0 === e._view.tension ? s.lineTo(a.x, a.y) : s.bezierCurveTo(t._view.controlPointNextX, t._view.controlPointNextY, a.controlPointPreviousX, a.controlPointPreviousY, a.x, a.y)
                        }
                        var i = this
                          , n = i._view
                          , o = n.spanGaps
                          , r = n.scaleZero
                          , l = i._loop;
                        l || ("top" === n.fill ? r = n.scaleTop : "bottom" === n.fill && (r = n.scaleBottom));
                        var s = i._chart.ctx;
                        s.save();
                        var d = i._children.slice()
                          , u = -1;
                        l && d.length && d.push(d[0]);
                        var c, h, f, g;
                        if (d.length && n.fill) {
                            for (s.beginPath(),
                            c = 0; c < d.length; ++c)
                                h = d[c],
                                f = e.previousItem(d, c),
                                g = h._view,
                                0 === c ? (l ? s.moveTo(r.x, r.y) : s.moveTo(g.x, r),
                                g.skip || (u = c,
                                s.lineTo(g.x, g.y))) : (f = -1 === u ? f : d[u],
                                g.skip ? o || u !== c - 1 || (l ? s.lineTo(r.x, r.y) : s.lineTo(f._view.x, r)) : (u !== c - 1 ? o && -1 !== u ? t(f, h) : l ? s.lineTo(g.x, g.y) : (s.lineTo(g.x, r),
                                s.lineTo(g.x, g.y)) : t(f, h),
                                u = c));
                            l || -1 === u || s.lineTo(d[u]._view.x, r),
                            s.fillStyle = n.backgroundColor || a.defaultColor,
                            s.closePath(),
                            s.fill()
                        }
                        var p = a.elements.line;
                        for (s.lineCap = n.borderCapStyle || p.borderCapStyle,
                        s.setLineDash && s.setLineDash(n.borderDash || p.borderDash),
                        s.lineDashOffset = n.borderDashOffset || p.borderDashOffset,
                        s.lineJoin = n.borderJoinStyle || p.borderJoinStyle,
                        s.lineWidth = n.borderWidth || p.borderWidth,
                        s.strokeStyle = n.borderColor || a.defaultColor,
                        s.beginPath(),
                        u = -1,
                        c = 0; c < d.length; ++c)
                            h = d[c],
                            f = e.previousItem(d, c),
                            g = h._view,
                            0 === c ? g.skip || (s.moveTo(g.x, g.y),
                            u = c) : (f = -1 === u ? f : d[u],
                            g.skip || (u !== c - 1 && !o || -1 === u ? s.moveTo(g.x, g.y) : t(f, h),
                            u = c));
                        s.stroke(),
                        s.restore()
                    }
                })
            }
        }
        , {}],
        39: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    var e = this._view;
                    return e ? Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
                }
                function a(t) {
                    var e = this._view;
                    return e ? Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2) : !1
                }
                var i = t.helpers
                  , n = t.defaults.global
                  , o = n.defaultColor;
                n.elements.point = {
                    radius: 3,
                    pointStyle: "circle",
                    backgroundColor: o,
                    borderWidth: 1,
                    borderColor: o,
                    hitRadius: 1,
                    hoverRadius: 4,
                    hoverBorderWidth: 1
                },
                t.elements.Point = t.Element.extend({
                    inRange: function(t, e) {
                        var a = this._view;
                        return a ? Math.pow(t - a.x, 2) + Math.pow(e - a.y, 2) < Math.pow(a.hitRadius + a.radius, 2) : !1
                    },
                    inLabelRange: e,
                    inXRange: e,
                    inYRange: a,
                    getCenterPoint: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    },
                    getArea: function() {
                        return Math.PI * Math.pow(this._view.radius, 2)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y,
                            padding: t.radius + t.borderWidth
                        }
                    },
                    draw: function() {
                        var e = this._view
                          , a = this._chart.ctx
                          , r = e.pointStyle
                          , l = e.radius
                          , s = e.x
                          , d = e.y;
                        e.skip || (a.strokeStyle = e.borderColor || o,
                        a.lineWidth = i.getValueOrDefault(e.borderWidth, n.elements.point.borderWidth),
                        a.fillStyle = e.backgroundColor || o,
                        t.canvasHelpers.drawPoint(a, r, l, s, d))
                    }
                })
            }
        }
        , {}],
        40: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                function e(t) {
                    return void 0 !== t._view.width
                }
                function a(t) {
                    var a, i, n, o, r = t._view;
                    if (e(t)) {
                        var l = r.width / 2;
                        a = r.x - l,
                        i = r.x + l,
                        n = Math.min(r.y, r.base),
                        o = Math.max(r.y, r.base)
                    } else {
                        var s = r.height / 2;
                        a = Math.min(r.x, r.base),
                        i = Math.max(r.x, r.base),
                        n = r.y - s,
                        o = r.y + s
                    }
                    return {
                        left: a,
                        top: n,
                        right: i,
                        bottom: o
                    }
                }
                var i = t.defaults.global;
                i.elements.rectangle = {
                    backgroundColor: i.defaultColor,
                    borderWidth: 0,
                    borderColor: i.defaultColor,
                    borderSkipped: "bottom"
                },
                t.elements.Rectangle = t.Element.extend({
                    draw: function() {
                        function t(t) {
                            return s[(u + t) % 4]
                        }
                        var e = this._chart.ctx
                          , a = this._view
                          , i = a.width / 2
                          , n = a.x - i
                          , o = a.x + i
                          , r = a.base - (a.base - a.y)
                          , l = a.borderWidth / 2;
                        a.borderWidth && (n += l,
                        o -= l,
                        r += l),
                        e.beginPath(),
                        e.fillStyle = a.backgroundColor,
                        e.strokeStyle = a.borderColor,
                        e.lineWidth = a.borderWidth;
                        var s = [[n, a.base], [n, r], [o, r], [o, a.base]]
                          , d = ["bottom", "left", "top", "right"]
                          , u = d.indexOf(a.borderSkipped, 0);
                        -1 === u && (u = 0);
                        var c = t(0);
                        e.moveTo(c[0], c[1]);
                        for (var h = 1; 4 > h; h++)
                            c = t(h),
                            e.lineTo(c[0], c[1]);
                        e.fill(),
                        a.borderWidth && e.stroke()
                    },
                    height: function() {
                        var t = this._view;
                        return t.base - t.y
                    },
                    inRange: function(t, e) {
                        var i = !1;
                        if (this._view) {
                            var n = a(this);
                            i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                        }
                        return i
                    },
                    inLabelRange: function(t, i) {
                        var n = this;
                        if (!n._view)
                            return !1;
                        var o = !1
                          , r = a(n);
                        return o = e(n) ? t >= r.left && t <= r.right : i >= r.top && i <= r.bottom
                    },
                    inXRange: function(t) {
                        var e = a(this);
                        return t >= e.left && t <= e.right
                    },
                    inYRange: function(t) {
                        var e = a(this);
                        return t >= e.top && t <= e.bottom
                    },
                    getCenterPoint: function() {
                        var t, a, i = this._view;
                        return e(this) ? (t = i.x,
                        a = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2,
                        a = i.y),
                        {
                            x: t,
                            y: a
                        }
                    },
                    getArea: function() {
                        var t = this._view;
                        return t.width * Math.abs(t.y - t.base)
                    },
                    tooltipPosition: function() {
                        var t = this._view;
                        return {
                            x: t.x,
                            y: t.y
                        }
                    }
                })
            }
        }
        , {}],
        41: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = {
                    position: "bottom"
                }
                  , i = t.Scale.extend({
                    getLabels: function() {
                        var t = this.chart.data;
                        return (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function() {
                        var t = this
                          , a = t.getLabels();
                        t.minIndex = 0,
                        t.maxIndex = a.length - 1;
                        var i;
                        void 0 !== t.options.ticks.min && (i = e.indexOf(a, t.options.ticks.min),
                        t.minIndex = -1 !== i ? i : t.minIndex),
                        void 0 !== t.options.ticks.max && (i = e.indexOf(a, t.options.ticks.max),
                        t.maxIndex = -1 !== i ? i : t.maxIndex),
                        t.min = a[t.minIndex],
                        t.max = a[t.maxIndex]
                    },
                    buildTicks: function() {
                        var t = this
                          , e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex: function(t, e) {
                        var a = this
                          , i = a.chart.data
                          , n = a.isHorizontal();
                        return i.xLabels && n || i.yLabels && !n ? a.getRightValue(i.datasets[e].data[t]) : a.ticks[t]
                    },
                    getPixelForValue: function(t, e, a, i) {
                        var n = this
                          , o = Math.max(n.maxIndex + 1 - n.minIndex - (n.options.gridLines.offsetGridLines ? 0 : 1), 1);
                        if (void 0 !== t && isNaN(e)) {
                            var r = n.getLabels()
                              , l = r.indexOf(t);
                            e = -1 !== l ? l : e
                        }
                        if (n.isHorizontal()) {
                            var s = n.width - (n.paddingLeft + n.paddingRight)
                              , d = s / o
                              , u = d * (e - n.minIndex) + n.paddingLeft;
                            return (n.options.gridLines.offsetGridLines && i || n.maxIndex === n.minIndex && i) && (u += d / 2),
                            n.left + Math.round(u)
                        }
                        var c = n.height - (n.paddingTop + n.paddingBottom)
                          , h = c / o
                          , f = h * (e - n.minIndex) + n.paddingTop;
                        return n.options.gridLines.offsetGridLines && i && (f += h / 2),
                        n.top + Math.round(f)
                    },
                    getPixelForTick: function(t, e) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null, e)
                    },
                    getValueForPixel: function(t) {
                        var e, a = this, i = Math.max(a.ticks.length - (a.options.gridLines.offsetGridLines ? 0 : 1), 1), n = a.isHorizontal(), o = n ? a.width - (a.paddingLeft + a.paddingRight) : a.height - (a.paddingTop + a.paddingBottom), r = o / i;
                        return t -= n ? a.left : a.top,
                        a.options.gridLines.offsetGridLines && (t -= r / 2),
                        t -= n ? a.paddingLeft : a.paddingTop,
                        e = 0 >= t ? 0 : Math.round(t / r)
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", i, a)
            }
        }
        , {}],
        42: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = {
                    position: "left",
                    ticks: {
                        callback: t.Ticks.formatters.linear
                    }
                }
                  , i = t.LinearScaleBase.extend({
                    determineDataLimits: function() {
                        function t(t) {
                            return l ? t.xAxisID === a.id : t.yAxisID === a.id
                        }
                        var a = this
                          , i = a.options
                          , n = a.chart
                          , o = n.data
                          , r = o.datasets
                          , l = a.isHorizontal();
                        if (a.min = null,
                        a.max = null,
                        i.stacked) {
                            var s = {};
                            e.each(r, function(o, r) {
                                var l = n.getDatasetMeta(r);
                                void 0 === s[l.type] && (s[l.type] = {
                                    positiveValues: [],
                                    negativeValues: []
                                });
                                var d = s[l.type].positiveValues
                                  , u = s[l.type].negativeValues;
                                n.isDatasetVisible(r) && t(l) && e.each(o.data, function(t, e) {
                                    var n = +a.getRightValue(t);
                                    isNaN(n) || l.data[e].hidden || (d[e] = d[e] || 0,
                                    u[e] = u[e] || 0,
                                    i.relativePoints ? d[e] = 100 : 0 > n ? u[e] += n : d[e] += n)
                                })
                            }),
                            e.each(s, function(t) {
                                var i = t.positiveValues.concat(t.negativeValues)
                                  , n = e.min(i)
                                  , o = e.max(i);
                                a.min = null === a.min ? n : Math.min(a.min, n),
                                a.max = null === a.max ? o : Math.max(a.max, o)
                            })
                        } else
                            e.each(r, function(i, o) {
                                var r = n.getDatasetMeta(o);
                                n.isDatasetVisible(o) && t(r) && e.each(i.data, function(t, e) {
                                    var i = +a.getRightValue(t);
                                    isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i),
                                    null === a.max ? a.max = i : i > a.max && (a.max = i))
                                })
                            });
                        this.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var a, i = this, n = i.options.ticks;
                        if (i.isHorizontal())
                            a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.width / 50));
                        else {
                            var o = e.getValueOrDefault(n.fontSize, t.defaults.global.defaultFontSize);
                            a = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(i.height / (2 * o)))
                        }
                        return a
                    },
                    handleDirectionalChanges: function() {
                        this.isHorizontal() || this.ticks.reverse()
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForValue: function(t) {
                        var e, a, i = this, n = i.paddingLeft, o = i.paddingBottom, r = i.start, l = +i.getRightValue(t), s = i.end - r;
                        return i.isHorizontal() ? (a = i.width - (n + i.paddingRight),
                        e = i.left + a / s * (l - r),
                        Math.round(e + n)) : (a = i.height - (i.paddingTop + o),
                        e = i.bottom - o - a / s * (l - r),
                        Math.round(e))
                    },
                    getValueForPixel: function(t) {
                        var e = this
                          , a = e.isHorizontal()
                          , i = e.paddingLeft
                          , n = e.paddingBottom
                          , o = a ? e.width - (i + e.paddingRight) : e.height - (e.paddingTop + n)
                          , r = (a ? t - e.left - i : e.bottom - n - t) / o;
                        return e.start + (e.end - e.start) * r
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.ticksAsNumbers[t])
                    }
                });
                t.scaleService.registerScaleType("linear", i, a)
            }
        }
        , {}],
        43: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = e.noop;
                t.LinearScaleBase = t.Scale.extend({
                    handleTickRangeOptions: function() {
                        var t = this
                          , a = t.options
                          , i = a.ticks;
                        if (i.beginAtZero) {
                            var n = e.sign(t.min)
                              , o = e.sign(t.max);
                            0 > n && 0 > o ? t.max = 0 : n > 0 && o > 0 && (t.min = 0)
                        }
                        void 0 !== i.min ? t.min = i.min : void 0 !== i.suggestedMin && (t.min = Math.min(t.min, i.suggestedMin)),
                        void 0 !== i.max ? t.max = i.max : void 0 !== i.suggestedMax && (t.max = Math.max(t.max, i.suggestedMax)),
                        t.min === t.max && (t.max++,
                        i.beginAtZero || t.min--)
                    },
                    getTickLimit: a,
                    handleDirectionalChanges: a,
                    buildTicks: function() {
                        var a = this
                          , i = a.options
                          , n = i.ticks
                          , o = a.getTickLimit();
                        o = Math.max(2, o);
                        var r = {
                            maxTicks: o,
                            min: n.min,
                            max: n.max,
                            stepSize: e.getValueOrDefault(n.fixedStepSize, n.stepSize)
                        }
                          , l = a.ticks = t.Ticks.generators.linear(r, a);
                        a.handleDirectionalChanges(),
                        a.max = e.max(l),
                        a.min = e.min(l),
                        n.reverse ? (l.reverse(),
                        a.start = a.max,
                        a.end = a.min) : (a.start = a.min,
                        a.end = a.max)
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(),
                        e.zeroLineIndex = e.ticks.indexOf(0),
                        t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }
        , {}],
        44: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = {
                    position: "left",
                    ticks: {
                        callback: t.Ticks.formatters.logarithmic
                    }
                }
                  , i = t.Scale.extend({
                    determineDataLimits: function() {
                        function t(t) {
                            return d ? t.xAxisID === a.id : t.yAxisID === a.id
                        }
                        var a = this
                          , i = a.options
                          , n = i.ticks
                          , o = a.chart
                          , r = o.data
                          , l = r.datasets
                          , s = e.getValueOrDefault
                          , d = a.isHorizontal();
                        if (a.min = null,
                        a.max = null,
                        a.minNotZero = null,
                        i.stacked) {
                            var u = {};
                            e.each(l, function(n, r) {
                                var l = o.getDatasetMeta(r);
                                o.isDatasetVisible(r) && t(l) && (void 0 === u[l.type] && (u[l.type] = []),
                                e.each(n.data, function(t, e) {
                                    var n = u[l.type]
                                      , o = +a.getRightValue(t);
                                    isNaN(o) || l.data[e].hidden || (n[e] = n[e] || 0,
                                    i.relativePoints ? n[e] = 100 : n[e] += o)
                                }))
                            }),
                            e.each(u, function(t) {
                                var i = e.min(t)
                                  , n = e.max(t);
                                a.min = null === a.min ? i : Math.min(a.min, i),
                                a.max = null === a.max ? n : Math.max(a.max, n)
                            })
                        } else
                            e.each(l, function(i, n) {
                                var r = o.getDatasetMeta(n);
                                o.isDatasetVisible(n) && t(r) && e.each(i.data, function(t, e) {
                                    var i = +a.getRightValue(t);
                                    isNaN(i) || r.data[e].hidden || (null === a.min ? a.min = i : i < a.min && (a.min = i),
                                    null === a.max ? a.max = i : i > a.max && (a.max = i),
                                    0 !== i && (null === a.minNotZero || i < a.minNotZero) && (a.minNotZero = i))
                                })
                            });
                        a.min = s(n.min, a.min),
                        a.max = s(n.max, a.max),
                        a.min === a.max && (0 !== a.min && null !== a.min ? (a.min = Math.pow(10, Math.floor(e.log10(a.min)) - 1),
                        a.max = Math.pow(10, Math.floor(e.log10(a.max)) + 1)) : (a.min = 1,
                        a.max = 10))
                    },
                    buildTicks: function() {
                        var a = this
                          , i = a.options
                          , n = i.ticks
                          , o = {
                            min: n.min,
                            max: n.max
                        }
                          , r = a.ticks = t.Ticks.generators.logarithmic(o, a);
                        a.isHorizontal() || r.reverse(),
                        a.max = e.max(r),
                        a.min = e.min(r),
                        n.reverse ? (r.reverse(),
                        a.start = a.max,
                        a.end = a.min) : (a.start = a.min,
                        a.end = a.max)
                    },
                    convertTicksToLabels: function() {
                        this.tickValues = this.ticks.slice(),
                        t.Scale.prototype.convertTicksToLabels.call(this)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.tickValues[t])
                    },
                    getPixelForValue: function(t) {
                        var a, i, n, o = this, r = o.start, l = +o.getRightValue(t), s = o.paddingTop, d = o.paddingBottom, u = o.paddingLeft, c = o.options, h = c.ticks;
                        return o.isHorizontal() ? (n = e.log10(o.end) - e.log10(r),
                        0 === l ? i = o.left + u : (a = o.width - (u + o.paddingRight),
                        i = o.left + a / n * (e.log10(l) - e.log10(r)),
                        i += u)) : (a = o.height - (s + d),
                        0 !== r || h.reverse ? 0 === o.end && h.reverse ? (n = e.log10(o.start) - e.log10(o.minNotZero),
                        i = l === o.end ? o.top + s : l === o.minNotZero ? o.top + s + .02 * a : o.top + s + .02 * a + .98 * a / n * (e.log10(l) - e.log10(o.minNotZero))) : (n = e.log10(o.end) - e.log10(r),
                        a = o.height - (s + d),
                        i = o.bottom - d - a / n * (e.log10(l) - e.log10(r))) : (n = e.log10(o.end) - e.log10(o.minNotZero),
                        i = l === r ? o.bottom - d : l === o.minNotZero ? o.bottom - d - .02 * a : o.bottom - d - .02 * a - .98 * a / n * (e.log10(l) - e.log10(o.minNotZero)))),
                        i
                    },
                    getValueForPixel: function(t) {
                        var a, i, n = this, o = e.log10(n.end) - e.log10(n.start);
                        return n.isHorizontal() ? (i = n.width - (n.paddingLeft + n.paddingRight),
                        a = n.start * Math.pow(10, (t - n.left - n.paddingLeft) * o / i)) : (i = n.height - (n.paddingTop + n.paddingBottom),
                        a = Math.pow(10, (n.bottom - n.paddingBottom - t) * o / i) / n.start),
                        a
                    }
                });
                t.scaleService.registerScaleType("logarithmic", i, a)
            }
        }
        , {}],
        45: [function(t, e, a) {
            "use strict";
            e.exports = function(t) {
                var e = t.helpers
                  , a = t.defaults.global
                  , i = {
                    display: !0,
                    animate: !0,
                    lineArc: !1,
                    position: "chartArea",
                    angleLines: {
                        display: !0,
                        color: "rgba(0, 0, 0, 0.1)",
                        lineWidth: 1
                    },
                    ticks: {
                        showLabelBackdrop: !0,
                        backdropColor: "rgba(255,255,255,0.75)",
                        backdropPaddingY: 2,
                        backdropPaddingX: 2,
                        callback: t.Ticks.formatters.linear
                    },
                    pointLabels: {
                        fontSize: 10,
                        callback: function(t) {
                            return t
                        }
                    }
                }
                  , n = t.LinearScaleBase.extend({
                    getValueCount: function() {
                        return this.chart.data.labels.length
                    },
                    setDimensions: function() {
                        var t = this
                          , i = t.options
                          , n = i.ticks;
                        t.width = t.maxWidth,
                        t.height = t.maxHeight,
                        t.xCenter = Math.round(t.width / 2),
                        t.yCenter = Math.round(t.height / 2);
                        var o = e.min([t.height, t.width])
                          , r = e.getValueOrDefault(n.fontSize, a.defaultFontSize);
                        t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2
                    },
                    determineDataLimits: function() {
                        var t = this
                          , a = t.chart;
                        t.min = null,
                        t.max = null,
                        e.each(a.data.datasets, function(i, n) {
                            if (a.isDatasetVisible(n)) {
                                var o = a.getDatasetMeta(n);
                                e.each(i.data, function(e, a) {
                                    var i = +t.getRightValue(e);
                                    isNaN(i) || o.data[a].hidden || (null === t.min ? t.min = i : i < t.min && (t.min = i),
                                    null === t.max ? t.max = i : i > t.max && (t.max = i))
                                })
                            }
                        }),
                        t.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var t = this.options.ticks
                          , i = e.getValueOrDefault(t.fontSize, a.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e),
                        e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        var t, i, n, o, r, l, s, d, u, c, h, f, g = this.options.pointLabels, p = e.getValueOrDefault(g.fontSize, a.defaultFontSize), m = e.getValueOrDefault(g.fontStyle, a.defaultFontStyle), b = e.getValueOrDefault(g.fontFamily, a.defaultFontFamily), v = e.fontString(p, m, b), x = e.min([this.height / 2 - p - 5, this.width / 2]), y = this.width, k = 0;
                        for (this.ctx.font = v,
                        i = 0; i < this.getValueCount(); i++) {
                            t = this.getPointPosition(i, x),
                            n = this.ctx.measureText(this.pointLabels[i] ? this.pointLabels[i] : "").width + 5;
                            var S = this.getIndexAngle(i) + Math.PI / 2
                              , w = 360 * S / (2 * Math.PI) % 360;
                            0 === w || 180 === w ? (o = n / 2,
                            t.x + o > y && (y = t.x + o,
                            r = i),
                            t.x - o < k && (k = t.x - o,
                            s = i)) : 180 > w ? t.x + n > y && (y = t.x + n,
                            r = i) : t.x - n < k && (k = t.x - n,
                            s = i)
                        }
                        u = k,
                        c = Math.ceil(y - this.width),
                        l = this.getIndexAngle(r),
                        d = this.getIndexAngle(s),
                        h = c / Math.sin(l + Math.PI / 2),
                        f = u / Math.sin(d + Math.PI / 2),
                        h = e.isNumber(h) ? h : 0,
                        f = e.isNumber(f) ? f : 0,
                        this.drawingArea = Math.round(x - (f + h) / 2),
                        this.setCenterPoint(f, h)
                    },
                    setCenterPoint: function(t, e) {
                        var a = this
                          , i = a.width - e - a.drawingArea
                          , n = t + a.drawingArea;
                        a.xCenter = Math.round((n + i) / 2 + a.left),
                        a.yCenter = Math.round(a.height / 2 + a.top)
                    },
                    getIndexAngle: function(t) {
                        var e = 2 * Math.PI / this.getValueCount()
                          , a = this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0
                          , i = a * Math.PI * 2 / 360;
                        return t * e - Math.PI / 2 + i
                    },
                    getDistanceFromCenterForValue: function(t) {
                        var e = this;
                        if (null === t)
                            return 0;
                        var a = e.drawingArea / (e.max - e.min);
                        return e.options.reverse ? (e.max - t) * a : (t - e.min) * a
                    },
                    getPointPosition: function(t, e) {
                        var a = this
                          , i = a.getIndexAngle(t);
                        return {
                            x: Math.round(Math.cos(i) * e) + a.xCenter,
                            y: Math.round(Math.sin(i) * e) + a.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function() {
                        var t = this
                          , e = t.min
                          , a = t.max;
                        return t.getPointPositionForValue(0, t.beginAtZero ? 0 : 0 > e && 0 > a ? a : e > 0 && a > 0 ? e : 0)
                    },
                    draw: function() {
                        var t = this
                          , i = t.options
                          , n = i.gridLines
                          , o = i.ticks
                          , r = i.angleLines
                          , l = i.pointLabels
                          , s = e.getValueOrDefault;
                        if (i.display) {
                            var d = t.ctx
                              , u = s(o.fontSize, a.defaultFontSize)
                              , c = s(o.fontStyle, a.defaultFontStyle)
                              , h = s(o.fontFamily, a.defaultFontFamily)
                              , f = e.fontString(u, c, h);
                            if (e.each(t.ticks, function(r, l) {
                                if (l > 0 || i.reverse) {
                                    var c = t.getDistanceFromCenterForValue(t.ticksAsNumbers[l])
                                      , h = t.yCenter - c;
                                    if (n.display && 0 !== l)
                                        if (d.strokeStyle = e.getValueAtIndexOrDefault(n.color, l - 1),
                                        d.lineWidth = e.getValueAtIndexOrDefault(n.lineWidth, l - 1),
                                        i.lineArc)
                                            d.beginPath(),
                                            d.arc(t.xCenter, t.yCenter, c, 0, 2 * Math.PI),
                                            d.closePath(),
                                            d.stroke();
                                        else {
                                            d.beginPath();
                                            for (var g = 0; g < t.getValueCount(); g++) {
                                                var p = t.getPointPosition(g, c);
                                                0 === g ? d.moveTo(p.x, p.y) : d.lineTo(p.x, p.y)
                                            }
                                            d.closePath(),
                                            d.stroke()
                                        }
                                    if (o.display) {
                                        var m = s(o.fontColor, a.defaultFontColor);
                                        if (d.font = f,
                                        o.showLabelBackdrop) {
                                            var b = d.measureText(r).width;
                                            d.fillStyle = o.backdropColor,
                                            d.fillRect(t.xCenter - b / 2 - o.backdropPaddingX, h - u / 2 - o.backdropPaddingY, b + 2 * o.backdropPaddingX, u + 2 * o.backdropPaddingY)
                                        }
                                        d.textAlign = "center",
                                        d.textBaseline = "middle",
                                        d.fillStyle = m,
                                        d.fillText(r, t.xCenter, h)
                                    }
                                }
                            }),
                            !i.lineArc) {
                                d.lineWidth = r.lineWidth,
                                d.strokeStyle = r.color;
                                for (var g = t.getDistanceFromCenterForValue(i.reverse ? t.min : t.max), p = s(l.fontSize, a.defaultFontSize), m = s(l.fontStyle, a.defaultFontStyle), b = s(l.fontFamily, a.defaultFontFamily), v = e.fontString(p, m, b), x = t.getValueCount() - 1; x >= 0; x--) {
                                    if (r.display) {
                                        var y = t.getPointPosition(x, g);
                                        d.beginPath(),
                                        d.moveTo(t.xCenter, t.yCenter),
                                        d.lineTo(y.x, y.y),
                                        d.stroke(),
                                        d.closePath()
                                    }
                                    var k = t.getPointPosition(x, g + 5)
                                      , S = s(l.fontColor, a.defaultFontColor);
                                    d.font = v,
                                    d.fillStyle = S;
                                    var w = t.pointLabels
                                      , M = this.getIndexAngle(x) + Math.PI / 2
                                      , C = 360 * M / (2 * Math.PI) % 360;
                                    0 === C || 180 === C ? d.textAlign = "center" : 180 > C ? d.textAlign = "left" : d.textAlign = "right",
                                    90 === C || 270 === C ? d.textBaseline = "middle" : C > 270 || 90 > C ? d.textBaseline = "bottom" : d.textBaseline = "top",
                                    d.fillText(w[x] ? w[x] : "", k.x, k.y)
                                }
                            }
                        }
                    }
                });
                t.scaleService.registerScaleType("radialLinear", n, i)
            }
        }
        , {}],
        46: [function(t, e, a) {
            "use strict";
            var i = t(1);
            i = "function" == typeof i ? i : window.moment,
            e.exports = function(t) {
                var e = t.helpers
                  , a = {
                    units: [{
                        name: "millisecond",
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    }, {
                        name: "second",
                        steps: [1, 2, 5, 10, 30]
                    }, {
                        name: "minute",
                        steps: [1, 2, 5, 10, 30]
                    }, {
                        name: "hour",
                        steps: [1, 2, 3, 6, 12]
                    }, {
                        name: "day",
                        steps: [1, 2, 5]
                    }, {
                        name: "week",
                        maxStep: 4
                    }, {
                        name: "month",
                        maxStep: 3
                    }, {
                        name: "quarter",
                        maxStep: 4
                    }, {
                        name: "year",
                        maxStep: !1
                    }]
                }
                  , n = {
                    position: "bottom",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm:ss a",
                            hour: "MMM D, hA",
                            day: "ll",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1
                    }
                }
                  , o = t.Scale.extend({
                    initialize: function() {
                        if (!i)
                            throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        t.Scale.prototype.initialize.call(this)
                    },
                    getLabelMoment: function(t, e) {
                        return null === t || null === e ? null : "undefined" != typeof this.labelMoments[t] ? this.labelMoments[t][e] : null
                    },
                    getLabelDiff: function(t, e) {
                        var a = this;
                        return null === t || null === e ? null : (void 0 === a.labelDiffs && a.buildLabelDiffs(),
                        "undefined" != typeof a.labelDiffs[t] ? a.labelDiffs[t][e] : null)
                    },
                    getMomentStartOf: function(t) {
                        var e = this;
                        return "week" === e.options.time.unit && e.options.time.isoWeekday !== !1 ? t.clone().startOf("isoWeek").isoWeekday(e.options.time.isoWeekday) : t.clone().startOf(e.tickUnit)
                    },
                    determineDataLimits: function() {
                        var t = this;
                        t.labelMoments = [];
                        var a = [];
                        t.chart.data.labels && t.chart.data.labels.length > 0 ? (e.each(t.chart.data.labels, function(e) {
                            var i = t.parseTime(e);
                            i.isValid() && (t.options.time.round && i.startOf(t.options.time.round),
                            a.push(i))
                        }, t),
                        t.firstTick = i.min.call(t, a),
                        t.lastTick = i.max.call(t, a)) : (t.firstTick = null,
                        t.lastTick = null),
                        e.each(t.chart.data.datasets, function(n, o) {
                            var r = []
                              , l = t.chart.isDatasetVisible(o);
                            "object" == typeof n.data[0] && null !== n.data[0] ? e.each(n.data, function(e) {
                                var a = t.parseTime(t.getRightValue(e));
                                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round),
                                r.push(a),
                                l && (t.firstTick = null !== t.firstTick ? i.min(t.firstTick, a) : a,
                                t.lastTick = null !== t.lastTick ? i.max(t.lastTick, a) : a))
                            }, t) : r = a,
                            t.labelMoments.push(r)
                        }, t),
                        t.options.time.min && (t.firstTick = t.parseTime(t.options.time.min)),
                        t.options.time.max && (t.lastTick = t.parseTime(t.options.time.max)),
                        t.firstTick = (t.firstTick || i()).clone(),
                        t.lastTick = (t.lastTick || i()).clone()
                    },
                    buildLabelDiffs: function() {
                        var t = this;
                        t.labelDiffs = [];
                        var a = [];
                        t.chart.data.labels && t.chart.data.labels.length > 0 && e.each(t.chart.data.labels, function(e) {
                            var i = t.parseTime(e);
                            i.isValid() && (t.options.time.round && i.startOf(t.options.time.round),
                            a.push(i.diff(t.firstTick, t.tickUnit, !0)))
                        }, t),
                        e.each(t.chart.data.datasets, function(i) {
                            var n = [];
                            "object" == typeof i.data[0] && null !== i.data[0] ? e.each(i.data, function(e) {
                                var a = t.parseTime(t.getRightValue(e));
                                a.isValid() && (t.options.time.round && a.startOf(t.options.time.round),
                                n.push(a.diff(t.firstTick, t.tickUnit, !0)))
                            }, t) : n = a,
                            t.labelDiffs.push(n)
                        }, t)
                    },
                    buildTicks: function() {
                        var i = this;
                        i.ctx.save();
                        var n = e.getValueOrDefault(i.options.ticks.fontSize, t.defaults.global.defaultFontSize)
                          , o = e.getValueOrDefault(i.options.ticks.fontStyle, t.defaults.global.defaultFontStyle)
                          , r = e.getValueOrDefault(i.options.ticks.fontFamily, t.defaults.global.defaultFontFamily)
                          , l = e.fontString(n, o, r);
                        if (i.ctx.font = l,
                        i.ticks = [],
                        i.unitScale = 1,
                        i.scaleSizeInUnits = 0,
                        i.options.time.unit)
                            i.tickUnit = i.options.time.unit || "day",
                            i.displayFormat = i.options.time.displayFormats[i.tickUnit],
                            i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0),
                            i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, 1);
                        else {
                            var s = i.isHorizontal() ? i.width - (i.paddingLeft + i.paddingRight) : i.height - (i.paddingTop + i.paddingBottom)
                              , d = i.tickFormatFunction(i.firstTick, 0, [])
                              , u = i.ctx.measureText(d).width
                              , c = Math.cos(e.toRadians(i.options.ticks.maxRotation))
                              , h = Math.sin(e.toRadians(i.options.ticks.maxRotation));
                            u = u * c + n * h;
                            var f = s / u;
                            i.tickUnit = i.options.time.minUnit,
                            i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0),
                            i.displayFormat = i.options.time.displayFormats[i.tickUnit];
                            for (var g = 0, p = a.units[g]; g < a.units.length; ) {
                                if (i.unitScale = 1,
                                e.isArray(p.steps) && Math.ceil(i.scaleSizeInUnits / f) < e.max(p.steps)) {
                                    for (var m = 0; m < p.steps.length; ++m)
                                        if (p.steps[m] >= Math.ceil(i.scaleSizeInUnits / f)) {
                                            i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, p.steps[m]);
                                            break
                                        }
                                    break
                                }
                                if (p.maxStep === !1 || Math.ceil(i.scaleSizeInUnits / f) < p.maxStep) {
                                    i.unitScale = e.getValueOrDefault(i.options.time.unitStepSize, Math.ceil(i.scaleSizeInUnits / f));
                                    break
                                }
                                ++g,
                                p = a.units[g],
                                i.tickUnit = p.name;
                                var b = i.firstTick.diff(i.getMomentStartOf(i.firstTick), i.tickUnit, !0)
                                  , v = i.getMomentStartOf(i.lastTick.clone().add(1, i.tickUnit)).diff(i.lastTick, i.tickUnit, !0);
                                i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0) + b + v,
                                i.displayFormat = i.options.time.displayFormats[p.name]
                            }
                        }
                        var x;
                        if (i.options.time.min ? x = i.getMomentStartOf(i.firstTick) : (i.firstTick = i.getMomentStartOf(i.firstTick),
                        x = i.firstTick),
                        !i.options.time.max) {
                            var y = i.getMomentStartOf(i.lastTick)
                              , k = y.diff(i.lastTick, i.tickUnit, !0);
                            0 > k ? i.lastTick = i.getMomentStartOf(i.lastTick.add(1, i.tickUnit)) : k >= 0 && (i.lastTick = y),
                            i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0)
                        }
                        i.options.time.displayFormat && (i.displayFormat = i.options.time.displayFormat),
                        i.ticks.push(i.firstTick.clone());
                        for (var S = 1; S <= i.scaleSizeInUnits; ++S) {
                            var w = x.clone().add(S, i.tickUnit);
                            if (i.options.time.max && w.diff(i.lastTick, i.tickUnit, !0) >= 0)
                                break;
                            S % i.unitScale === 0 && i.ticks.push(w)
                        }
                        var M = i.ticks[i.ticks.length - 1].diff(i.lastTick, i.tickUnit);
                        (0 !== M || 0 === i.scaleSizeInUnits) && (i.options.time.max ? (i.ticks.push(i.lastTick.clone()),
                        i.scaleSizeInUnits = i.lastTick.diff(i.ticks[0], i.tickUnit, !0)) : (i.ticks.push(i.lastTick.clone()),
                        i.scaleSizeInUnits = i.lastTick.diff(i.firstTick, i.tickUnit, !0))),
                        i.ctx.restore(),
                        i.labelDiffs = void 0
                    },
                    getLabelForIndex: function(t, e) {
                        var a = this
                          , i = a.chart.data.labels && t < a.chart.data.labels.length ? a.chart.data.labels[t] : "";
                        return "object" == typeof a.chart.data.datasets[e].data[0] && (i = a.getRightValue(a.chart.data.datasets[e].data[t])),
                        a.options.time.tooltipFormat && (i = a.parseTime(i).format(a.options.time.tooltipFormat)),
                        i
                    },
                    tickFormatFunction: function(t, a, i) {
                        var n = t.format(this.displayFormat)
                          , o = this.options.ticks
                          , r = e.getValueOrDefault(o.callback, o.userCallback);
                        return r ? r(n, a, i) : n
                    },
                    convertTicksToLabels: function() {
                        var t = this;
                        t.tickMoments = t.ticks,
                        t.ticks = t.ticks.map(t.tickFormatFunction, t)
                    },
                    getPixelForValue: function(t, e, a) {
                        var i = this
                          , n = null;
                        if (void 0 !== e && void 0 !== a && (n = i.getLabelDiff(a, e)),
                        null === n && (t && t.isValid || (t = i.parseTime(i.getRightValue(t))),
                        t && t.isValid && t.isValid() && (n = t.diff(i.firstTick, i.tickUnit, !0))),
                        null !== n) {
                            var o = 0 !== n ? n / i.scaleSizeInUnits : n;
                            if (i.isHorizontal()) {
                                var r = i.width - (i.paddingLeft + i.paddingRight)
                                  , l = r * o + i.paddingLeft;
                                return i.left + Math.round(l)
                            }
                            var s = i.height - (i.paddingTop + i.paddingBottom)
                              , d = s * o + i.paddingTop;
                            return i.top + Math.round(d)
                        }
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.tickMoments[t], null, null)
                    },
                    getValueForPixel: function(t) {
                        var e = this
                          , a = e.isHorizontal() ? e.width - (e.paddingLeft + e.paddingRight) : e.height - (e.paddingTop + e.paddingBottom)
                          , n = (t - (e.isHorizontal() ? e.left + e.paddingLeft : e.top + e.paddingTop)) / a;
                        return n *= e.scaleSizeInUnits,
                        e.firstTick.clone().add(i.duration(n, e.tickUnit).asSeconds(), "seconds")
                    },
                    parseTime: function(t) {
                        var e = this;
                        return "string" == typeof e.options.time.parser ? i(t, e.options.time.parser) : "function" == typeof e.options.time.parser ? e.options.time.parser(t) : "function" == typeof t.getMonth || "number" == typeof t ? i(t) : t.isValid && t.isValid() ? t : "string" != typeof e.options.time.format && e.options.time.format.call ? (console.warn("options.time.format is deprecated and replaced by options.time.parser. See http://nnnick.github.io/Chart.js/docs-v2/#scales-time-scale"),
                        e.options.time.format(t)) : i(t, e.options.time.format)
                    }
                });
                t.scaleService.registerScaleType("time", o, n)
            }
        }
        , {
            1: 1
        }]
    }, {}, [7])(7)
});
