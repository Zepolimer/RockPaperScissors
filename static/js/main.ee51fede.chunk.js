(this["webpackJsonprock-paper-scissors"] =
  this["webpackJsonprock-paper-scissors"] || []).push([
  [0],
  {
    24: function (n, e, t) {},
    32: function (n, e, t) {
      "use strict";
      t.r(e);
      var r,
        i,
        a,
        s,
        o,
        c,
        l,
        d,
        m,
        p,
        h,
        x,
        j,
        b,
        u,
        f,
        g,
        O,
        w,
        k,
        v,
        y,
        C,
        z,
        S,
        X = t(0),
        Y = t(19),
        P = t(14),
        F = t.n(P),
        N = (t(24), t(5)),
        M = t(2),
        R = t(3),
        L = t(1),
        A = R.a.header(
          r ||
            (r = Object(M.a)([
              "\n  border: 4px solid hsl(217, 16%, 45%);\n  width: 90%;\n  max-width:704px;\n  margin: 1.875rem auto 0 auto;\n\n  border-radius: 6px;\n  padding: 1.15rem;\n\n  display: flex;\n  justify-content: space-between;\n  align-items:center;\n\n  @media(max-height:668px){\n    margin: 1.2rem auto 0 auto;\n    padding: .7rem;\n  }\n",
            ]))
        ),
        E = R.a.section(
          i ||
            (i = Object(M.a)([
              "\n  font-size: 2.5rem;\n  text-transform: uppercase;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  line-height: 1.4rem;\n\n  span{\n    color:white;\n    font-size:1.6rem;\n  }\n  @media(max-height:600px){\n    span{\n    color:white;\n    font-size:1.2rem;\n    line-height: 1.2rem;\n  }\n  }\n",
            ]))
        ),
        T = R.a.section(
          a ||
            (a = Object(M.a)([
              "\n  padding: 0.45rem 1.4rem;\n  background-color: #fff;\n  color: hsl(229, 64%, 46%);\n  border-radius: 5px;\n\n  span{\n    text-transform:uppercase;\n    font-size:1rem;\n    letter-spacing:2px;\n  }\n  @media(max-height:600px){\n    span{\n    font-size:.8rem;\n  }\n  }\n",
            ]))
        ),
        B = R.a.article(
          s ||
            (s = Object(M.a)([
              "\n  color: hsl(229, 25%, 31%);\n  font-size: 3rem;\n  font-weight: 700;\n\n  @media(max-height:600px){\n    font-size: 2rem;\n  }\n",
            ]))
        ),
        D = function (n) {
          var e = n.score;
          return Object(L.jsxs)(A, {
            children: [
              Object(L.jsxs)(E, {
                children: [
                  Object(L.jsx)("span", { children: "Rock" }),
                  Object(L.jsx)("span", { children: "Paper" }),
                  Object(L.jsx)("span", { children: "Scissors" }),
                ],
              }),
              Object(L.jsxs)(T, {
                children: [
                  Object(L.jsx)("span", { children: "Score" }),
                  Object(L.jsx)(B, { children: e }),
                ],
              }),
            ],
          });
        },
        I = t(6),
        J = R.a.section(
          o ||
            (o = Object(M.a)([
              "\n  width: 95%;\n  height: 70%;\n  margin: 80px auto 0 auto;\n  display: grid;\n  grid-template-columns: 50% 50%;\n  grid-row: 50% 50%;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 769px) {\n    width: 80%;\n    position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -30%);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n",
            ]))
        ),
        H = R.a.div(
          c ||
            (c = Object(M.a)([
              "\n  grid-row: 1;\n  grid-column: 1;\n  display: flex;\n  flex-direction: column-reverse;\n  cursor: pointer;\n\n  @media (min-width: 769px) {\n    display: flex;\n    flex-direction: column;\n  }\n",
            ]))
        ),
        W = R.a.span(
          l ||
            (l = Object(M.a)([
              "\n  color: white;\n  text-transform: uppercase;\n\n  @media (min-width: 768px) {\n    text-transform: uppercase;\n    font-size: 1.2rem;\n    color: white;\n    z-index: 10;\n    margin-bottom: 50px;\n  }\n",
            ]))
        ),
        Z = R.a.div(
          d ||
            (d = Object(M.a)([
              "\n  grid-row: 2;\n  grid-column: 1/3;\n  display: flex;\n  flex-direction: column;\n  margin: 5% 0 0 0;\n  align-items: center;\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-direction: column;\n    margin: 0 6%;\n  }\n",
            ]))
        ),
        _ = R.a.span(
          m ||
            (m = Object(M.a)([
              "\n  color: white;\n  text-transform: uppercase;\n  font-size: 3rem;\n  font-weight: 700;\n  margin-bottom: 10px;\n\n  @media (min-width: 768px) {\n    font-size: 3.4rem;\n  }\n  @media (max-height: 668px) {\n    margin-top: 20px;\n    font-size: 2.2rem;\n  }\n",
            ]))
        ),
        q = R.a.div(
          p ||
            (p = Object(M.a)([
              "\n  width: 220px;\n  background-color: white;\n  text-decoration: none;\n  text-transform: uppercase;\n  padding: 10px 20px;\n  border-radius: 5px;\n  font-size: 1rem;\n  color: hsl(237, 49%, 15%);\n  cursor: pointer;\n\n  &:hover {\n  background-color: transparent;\n  color: white;\n  border: 2px dashed white;\n  }\n\n  @media (min-width: 768px) {\n    background-color: white;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 10px 20px;\n    border-radius: 5px;\n    font-size: 0.8rem;\n  }\n",
            ]))
        ),
        G = R.a.div(
          h ||
            (h = Object(M.a)([
              "\n  grid-row: 1;\n  grid-column: 2;\n  display: flex;\n  flex-direction: column-reverse;\n  cursor: pointer;\n\n  @media (min-width: 769px) {\n    display: flex;\n    flex-direction: column;\n  }\n",
            ]))
        ),
        K = function (n) {
          var e,
            t,
            r,
            i = n.score,
            a = n.monChoix,
            s = n.setScore,
            o = n.handleChange,
            c = Object(X.useState)(""),
            l = Object(N.a)(c, 2),
            d = l[0],
            m = l[1],
            p = Object(X.useState)(""),
            h = Object(N.a)(p, 2),
            x = h[0],
            j = h[1];
          Object(X.useEffect)(
            function () {
              m(["rock", "paper", "scissors"][Math.floor(3 * Math.random())]);
            },
            [m]
          );
          return (
            Object(X.useEffect)(
              function () {
                "rock" === a && "scissors" === d
                  ? (j("win"), s(i + 1))
                  : "rock" === a && "paper" === d
                  ? (j("lose"), s(i - 1))
                  : "paper" === a && "rock" === d
                  ? (j("win"), s(i + 1))
                  : "paper" === a && "scissors" === d
                  ? (j("lose"), s(i - 1))
                  : "scissors" === a && "paper" === d
                  ? (j("win"), s(i + 1))
                  : "scissors" === a && "rock" === d
                  ? (j("lose"), s(i - 1))
                  : j("draw");
              },
              [d]
            ),
            Object(L.jsxs)(J, {
              children: [
                Object(L.jsxs)(H, {
                  children: [
                    Object(L.jsx)(W, { children: "You picked" }),
                    Object(L.jsx)("div", {
                      className: "icon "
                        .concat(a, " ")
                        .concat(
                          "win" === x ? "icon ".concat(a, " winner") : ""
                        ),
                    }),
                  ],
                }),
                "win" === x &&
                  Object(L.jsxs)(Z, {
                    children: [
                      Object(L.jsx)(_, { children: "You Win" }),
                      Object(L.jsx)(
                        q,
                        ((e = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(I.a)(e, "onClick", o),
                        Object(I.a)(e, "children", "Play Again"),
                        e)
                      ),
                    ],
                  }),
                "lose" === x &&
                  Object(L.jsxs)(Z, {
                    children: [
                      Object(L.jsx)(_, { children: "You Lose" }),
                      Object(L.jsx)(
                        q,
                        ((t = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(I.a)(t, "onClick", o),
                        Object(I.a)(t, "children", "Play Again"),
                        t)
                      ),
                    ],
                  }),
                "draw" === x &&
                  Object(L.jsxs)(Z, {
                    children: [
                      Object(L.jsx)(_, { children: "Draw" }),
                      Object(L.jsx)(
                        q,
                        ((r = {
                          onClick: function () {
                            return m();
                          },
                        }),
                        Object(I.a)(r, "onClick", o),
                        Object(I.a)(r, "children", "Play Again"),
                        r)
                      ),
                    ],
                  }),
                Object(L.jsxs)(G, {
                  children: [
                    Object(L.jsx)(W, { children: "The House Picked" }),
                    Object(L.jsx)("div", {
                      className: "icon "
                        .concat(d, " ")
                        .concat(
                          "lose" === x ? "icon ".concat(d, " winner") : ""
                        ),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Q = R.a.section(
          x ||
            (x = Object(M.a)([
              "\n  width: 90%;\n  position: relative;\n  margin: 80px auto 0 auto;\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 768px) {\n    margin: 4.5rem auto 0 auto;\n  }\n  @media (min-height: 1024px) {\n    position: absolute;\n    top: 35%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  @media (max-height: 668px) {\n    margin: 1.5rem auto 0 auto;\n  }\n",
            ]))
        ),
        U = R.a.img(
          j ||
            (j = Object(M.a)([
              "\n  position: absolute;\n  align-self: center;\n  margin-top: 4.375rem;\n  width: 250px;\n  @media (min-width: 768px) {\n    width: 400px;\n  }\n  @media (max-height: 668px) {\n    width: 200px;\n  }\n",
            ]))
        ),
        V = R.a.div(
          b ||
            (b = Object(M.a)([
              "\n  display: flex;\n  justify-content: center;\n",
            ]))
        ),
        $ = R.a.div(
          u ||
            (u = Object(M.a)([
              "\n  transform: translateX(1.5rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(2.5rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(1.5rem) translateY(2rem);\n  }\n",
            ]))
        ),
        nn = R.a.div(
          f ||
            (f = Object(M.a)([
              "\n  transform: translateX(6rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(8em);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(5rem) translateY(2rem);\n  }\n",
            ]))
        ),
        en = R.a.div(
          g ||
            (g = Object(M.a)([
              "\n  transform: translateX(-8.5rem) translateY(12rem);\n  cursor: pointer;\n  @media (min-width: 768px) {\n    transform: translateX(-13rem) translateY(16rem);\n  }\n  @media (max-height: 668px) {\n    transform: translateX(-6.5rem) translateY(11rem);\n  }\n",
            ]))
        ),
        tn = R.a.div(
          O || (O = Object(M.a)(["\n  transition: transform 0.2s;\n"]))
        ),
        rn = function (n) {
          var e = n.handleChange,
            t = n.setMonChoix,
            r = function (n) {
              t(n.target.dataset.id);
            };
          return Object(L.jsxs)(Q, {
            children: [
              Object(L.jsx)(U, {
                src: "././images/bg-triangle.svg",
                alt: "triangle",
              }),
              Object(L.jsxs)(V, {
                onClick: e,
                children: [
                  Object(L.jsx)($, {
                    children: Object(L.jsx)(tn, {
                      "data-id": "paper",
                      onClick: r,
                      className: "paper",
                      id: "paper",
                    }),
                  }),
                  Object(L.jsx)(nn, {
                    children: Object(L.jsx)(tn, {
                      "data-id": "scissors",
                      onClick: r,
                      className: "scissors",
                      id: "scissors",
                    }),
                  }),
                  Object(L.jsx)(en, {
                    children: Object(L.jsx)(tn, {
                      "data-id": "rock",
                      onClick: r,
                      className: "rock",
                      id: "rock",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        an = R.a.footer(w || (w = Object(M.a)(["\n  width: 100vw;\n"]))),
        sn = R.a.div(
          k ||
            (k = Object(M.a)([
              "\n  position: absolute;\n  width: 100%;\n  left: 50%;\n  transform: translate(-50%);\n  bottom: 1rem;\n  font-size: 0.7rem;\n  color: white;\n\n  a {\n    font-size: 0.7rem;\n    color: hsl(39, 89%, 49%);\n    text-decoration: none;\n  }\n  a:hover {\n    color: hsl(349, 71%, 52%);\n  }\n",
            ]))
        ),
        on = R.a.button(
          v ||
            (v = Object(M.a)([
              "\n  position: absolute;\n  bottom: 7%;\n  left: 50%;\n  transform: translate(-50%, 0);\n  padding: 10px 25px;\n  border: 3px solid hsl(217, 16%, 45%);\n  border-radius: 0.4rem;\n  color: hsl(217, 16%, 45%);\n  background: none;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n\n  &:hover {\n    border: 3px solid white;\n    background: hsl(230, 89%, 62%);\n    color: white;\n    cursor: pointer;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n  @media (min-width: 768px) {\n    bottom: 2rem;\n    right: 2rem;\n    left: initial;\n    transform: translate(0%, 0);\n  }\n",
            ]))
        ),
        cn = R.a.section(
          y ||
            (y = Object(M.a)([
              "\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: hsl(229, 25%, 31%);\n  background-color: #fff;\n  border-radius: 8px;\n  padding: 30px;\n  transition: 0.3s ease-in-out;\n\n  @media (min-width: 768px) {\n    width: 400px;\n    height: 415px;\n  }\n",
            ]))
        ),
        ln = R.a.article(
          C ||
            (C = Object(M.a)([
              "\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 30px;\n\n  h1 {\n    text-transform: uppercase;\n    margin: 0;\n    padding: 0;\n    grid-raw: 1;\n  }\n  @media (max-width: 768px) {\n    h1 {\n      font-size: 2.1rem;\n      position: absolute;\n      top: 10%;\n      left: 50%;\n      transform: translate(-50%, 0);\n    }\n  }\n",
            ]))
        ),
        dn = R.a.button(
          z ||
            (z = Object(M.a)([
              "\n  background: none;\n  border: none;\n  align-self: center;\n  color: hsl(229, 25%, 31%);\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n\n  img:hover {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    -webkit-transition: -webkit-transform 500ms ease-in-out;\n    transition: -webkit-transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out;\n    transition: transform 500ms ease-in-out, -webkit-transform 500ms ease-in-out;\n  }\n\n  @media (max-width: 768px) {\n    position: absolute;\n    bottom: 7%;\n    left: 50%;\n    transform: translate(-50%, 0);\n  }\n",
            ]))
        ),
        mn = R.a.img(
          S || (S = Object(M.a)(["\n  width: 100%;\n  max-width: 400px;\n"]))
        ),
        pn = function () {
          var n = Object(X.useState)(!1),
            e = Object(N.a)(n, 2),
            t = e[0],
            r = e[1];
          return Object(L.jsxs)(an, {
            children: [
              Object(L.jsxs)(sn, {
                class: "attribution",
                children: [
                  "Challenge by",
                  " ",
                  Object(L.jsx)("a", {
                    href: "https://www.frontendmentor.io?ref=challenge",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Frontend Mentor",
                  }),
                  ". Coded by ",
                  Object(L.jsx)("a", {
                    href: "https://github.com/Zepolimer?tab=repositories",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Remi Lopez",
                  }),
                  ".",
                ],
              }),
              Object(L.jsx)(on, {
                onClick: function () {
                  return r(!0);
                },
                children: "Rules",
              }),
              t
                ? Object(L.jsxs)(cn, {
                    children: [
                      Object(L.jsxs)(ln, {
                        children: [
                          Object(L.jsx)("h1", { children: "Rules" }),
                          Object(L.jsx)(dn, {
                            onClick: function () {
                              return r(!1);
                            },
                            children: Object(L.jsx)("img", {
                              src: "././images/icon-close.svg",
                              alt: "Close",
                            }),
                          }),
                        ],
                      }),
                      Object(L.jsx)(mn, {
                        src: "././images/image-rules.svg",
                        alt: "Rules",
                      }),
                    ],
                  })
                : null,
            ],
          });
        };
      var hn = function () {
          var n = Object(X.useState)(0),
            e = Object(N.a)(n, 2),
            t = e[0],
            r = e[1],
            i = Object(X.useState)(!1),
            a = Object(N.a)(i, 2),
            s = a[0],
            o = a[1],
            c = Object(X.useState)(""),
            l = Object(N.a)(c, 2),
            d = l[0],
            m = l[1],
            p = function () {
              o(!s);
            };
          return Object(L.jsxs)(L.Fragment, {
            children: [
              Object(L.jsxs)("div", {
                className: "container",
                children: [
                  Object(L.jsx)(D, { score: t }),
                  s
                    ? Object(L.jsx)(K, {
                        monChoix: d,
                        score: t,
                        setScore: r,
                        handleChange: p,
                      })
                    : Object(L.jsx)(rn, { setMonChoix: m, handleChange: p }),
                ],
              }),
              Object(L.jsx)(pn, {}),
            ],
          });
        },
        xn = function (n) {
          n &&
            n instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 33))
              .then(function (e) {
                var t = e.getCLS,
                  r = e.getFID,
                  i = e.getFCP,
                  a = e.getLCP,
                  s = e.getTTFB;
                t(n), r(n), i(n), a(n), s(n);
              });
        };
      F.a.render(
        Object(L.jsx)(Y.a, { children: Object(L.jsx)(hn, {}) }),
        document.getElementById("root")
      ),
        xn();
    },
  },
  [[32, 1, 2]],
]);
//# sourceMappingURL=main.ee51fede.chunk.js.map
