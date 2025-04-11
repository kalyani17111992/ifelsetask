import {
  __commonJS
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/modules/solid-gauge.js
var require_solid_gauge = __commonJS({
  "node_modules/highcharts/modules/solid-gauge.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(t._Highcharts, t._Highcharts.SeriesRegistry, t._Highcharts.Color) : "function" == typeof define && define.amd ? define("highcharts/modules/solid-gauge", ["highcharts/highcharts"], function(t2) {
        return e(t2, t2.SeriesRegistry, t2.Color);
      }) : "object" == typeof exports ? exports["highcharts/modules/solid-gauge"] = e(t._Highcharts, t._Highcharts.SeriesRegistry, t._Highcharts.Color) : t.Highcharts = e(t.Highcharts, t.Highcharts.SeriesRegistry, t.Highcharts.Color);
    }("undefined" == typeof window ? exports : window, (t, e, o) => (() => {
      "use strict";
      var s, r = {
        512: (t2) => {
          t2.exports = e;
        },
        620: (t2) => {
          t2.exports = o;
        },
        944: (e2) => {
          e2.exports = t;
        }
      }, i = {};
      function a(t2) {
        var e2 = i[t2];
        if (void 0 !== e2) return e2.exports;
        var o2 = i[t2] = {
          exports: {}
        };
        return r[t2](o2, o2.exports, a), o2.exports;
      }
      a.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return a.d(e2, {
          a: e2
        }), e2;
      }, a.d = (t2, e2) => {
        for (var o2 in e2) a.o(e2, o2) && !a.o(t2, o2) && Object.defineProperty(t2, o2, {
          enumerable: true,
          get: e2[o2]
        });
      }, a.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2);
      var n = {};
      a.d(n, {
        default: () => N
      });
      var l = a(944), d = a.n(l);
      let {
        defaultOptions: h
      } = d(), {
        noop: c
      } = d(), {
        addEvent: g,
        extend: p,
        isObject: u,
        merge: f,
        relativeLength: m
      } = d(), y = {
        radius: 0,
        scope: "stack",
        where: void 0
      };
      function x(t2, e2) {
        return u(t2) || (t2 = {
          radius: t2 || 0
        }), f(y, e2, t2);
      }
      let C = {
        optionsToObject: x
      };
      var R = a(512), v = a.n(R), b = a(620);
      let {
        parse: A
      } = a.n(b)(), {
        merge: w
      } = d();
      !function(t2) {
        t2.initDataClasses = function(t3) {
          let e2 = this.chart, o2 = this.legendItem = this.legendItem || {}, s2 = this.options, r2 = t3.dataClasses || [], i2, a2, n2 = e2.options.chart.colorCount, l2 = 0, d2;
          this.dataClasses = a2 = [], o2.labels = [];
          for (let t4 = 0, o3 = r2.length; t4 < o3; ++t4) i2 = w(i2 = r2[t4]), a2.push(i2), (e2.styledMode || !i2.color) && ("category" === s2.dataClassColor ? (e2.styledMode || (n2 = (d2 = e2.options.colors || []).length, i2.color = d2[l2]), i2.colorIndex = l2, ++l2 === n2 && (l2 = 0)) : i2.color = A(s2.minColor).tweenTo(A(s2.maxColor), o3 < 2 ? 0.5 : t4 / (o3 - 1)));
        }, t2.initStops = function() {
          let t3 = this.options, e2 = this.stops = t3.stops || [[0, t3.minColor || ""], [1, t3.maxColor || ""]];
          for (let t4 = 0, o2 = e2.length; t4 < o2; ++t4) e2[t4].color = A(e2[t4][1]);
        }, t2.normalizedValue = function(t3) {
          let e2 = this.max || 0, o2 = this.min || 0;
          return this.logarithmic && (t3 = this.logarithmic.log2lin(t3)), 1 - (e2 - t3) / (e2 - o2 || 1);
        }, t2.toColor = function(t3, e2) {
          let o2, s2, r2, i2, a2, n2, l2 = this.dataClasses, d2 = this.stops;
          if (l2) {
            for (n2 = l2.length; n2--; ) if (s2 = (a2 = l2[n2]).from, r2 = a2.to, (void 0 === s2 || t3 >= s2) && (void 0 === r2 || t3 <= r2)) {
              i2 = a2.color, e2 && (e2.dataClass = n2, e2.colorIndex = a2.colorIndex);
              break;
            }
          } else {
            for (o2 = this.normalizedValue(t3), n2 = d2.length; n2-- && !(o2 > d2[n2][0]); ) ;
            s2 = d2[n2] || d2[n2 + 1], o2 = 1 - ((r2 = d2[n2 + 1] || s2)[0] - o2) / (r2[0] - s2[0] || 1), i2 = s2.color.tweenTo(r2.color, o2);
          }
          return i2;
        };
      }(s || (s = {}));
      let M = s, {
        extend: H
      } = d(), I = {
        init: function(t2) {
          H(t2, M);
        }
      }, {
        gauge: _,
        pie: j
      } = v().seriesTypes, {
        clamp: P,
        extend: S,
        isNumber: k,
        merge: O,
        pick: T,
        pInt: z
      } = d();
      class D extends _ {
        translate() {
          let t2 = this.yAxis;
          I.init(t2), !t2.dataClasses && t2.options.dataClasses && t2.initDataClasses(t2.options), t2.initStops(), _.prototype.translate.call(this);
        }
        drawPoints() {
          let t2, e2 = this.yAxis, o2 = e2.center, s2 = this.options, r2 = this.chart.renderer, i2 = s2.overshoot, a2 = s2.rounded && void 0 === s2.borderRadius, n2 = k(i2) ? i2 / 180 * Math.PI : 0;
          for (let i3 of (k(s2.threshold) && (t2 = e2.startAngleRad + e2.translate(s2.threshold, void 0, void 0, void 0, true)), this.thresholdAngleRad = T(t2, e2.startAngleRad), this.points)) if (!i3.isNull) {
            let t3 = z(T(i3.options.radius, s2.radius, 100)) * o2[2] / 200, l2 = z(T(i3.options.innerRadius, s2.innerRadius, 60)) * o2[2] / 200, d2 = Math.min(e2.startAngleRad, e2.endAngleRad), h2 = Math.max(e2.startAngleRad, e2.endAngleRad), c2 = i3.graphic, g2 = e2.startAngleRad + e2.translate(i3.y, void 0, void 0, void 0, true), p2, u2, f2 = e2.toColor(i3.y, i3);
            "none" === f2 && (f2 = i3.color || this.color || "none"), "none" !== f2 && (i3.color = f2), g2 = P(g2, d2 - n2, h2 + n2), false === s2.wrap && (g2 = P(g2, d2, h2));
            let m2 = a2 ? (t3 - l2) / 2 / t3 : 0, y2 = Math.min(g2, this.thresholdAngleRad) - m2, x2 = Math.max(g2, this.thresholdAngleRad) + m2;
            x2 - y2 > 2 * Math.PI && (x2 = y2 + 2 * Math.PI);
            let R2 = a2 ? "50%" : 0;
            s2.borderRadius && (R2 = C.optionsToObject(s2.borderRadius).radius), i3.shapeArgs = p2 = {
              x: o2[0],
              y: o2[1],
              r: t3,
              innerR: l2,
              start: y2,
              end: x2,
              borderRadius: R2
            }, i3.startR = t3, c2 ? (u2 = p2.d, c2.animate(S({
              fill: f2
            }, p2)), u2 && (p2.d = u2)) : i3.graphic = c2 = r2.arc(p2).attr({
              fill: f2,
              "sweep-flag": 0
            }).add(this.group), this.chart.styledMode || ("square" !== s2.linecap && c2.attr({
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }), c2.attr({
              stroke: s2.borderColor || "none",
              "stroke-width": s2.borderWidth || 0
            })), c2 && c2.addClass(i3.getClassName(), true);
          }
        }
        animate(t2) {
          t2 || (this.startAngleRad = this.thresholdAngleRad, j.prototype.animate.call(this, t2));
        }
      }
      D.defaultOptions = O(_.defaultOptions, {
        colorByPoint: true,
        dataLabels: {
          y: 0
        }
      }), v().registerSeriesType("solidgauge", D);
      let N = d();
      return n.default;
    })());
  }
});
export default require_solid_gauge();
//# sourceMappingURL=highcharts_modules_solid-gauge.js.map
