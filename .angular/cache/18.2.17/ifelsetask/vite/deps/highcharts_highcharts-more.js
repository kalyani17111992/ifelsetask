import {
  __commonJS
} from "./chunk-3OV72XIM.js";

// node_modules/highcharts/highcharts-more.js
var require_highcharts_more = __commonJS({
  "node_modules/highcharts/highcharts-more.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(t._Highcharts, t._Highcharts.SeriesRegistry, t._Highcharts.Series, t._Highcharts.Series.types.column, t._Highcharts.Templating, t._Highcharts.Point, t._Highcharts.Color, t._Highcharts.Chart, t._Highcharts.SVGElement, t._Highcharts.StackItem) : "function" == typeof define && define.amd ? define("highcharts/highcharts-more", ["highcharts/highcharts"], function(t2) {
        return e(t2, t2.SeriesRegistry, t2.Series, t2.Series, ["types"], ["column"], t2.Templating, t2.Point, t2.Color, t2.Chart, t2.SVGElement, t2.StackItem);
      }) : "object" == typeof exports ? exports["highcharts/highcharts-more"] = e(t._Highcharts, t._Highcharts.SeriesRegistry, t._Highcharts.Series, t._Highcharts.Series.types.column, t._Highcharts.Templating, t._Highcharts.Point, t._Highcharts.Color, t._Highcharts.Chart, t._Highcharts.SVGElement, t._Highcharts.StackItem) : t.Highcharts = e(t.Highcharts, t.Highcharts.SeriesRegistry, t.Highcharts.Series, t.Highcharts.Series.types.column, t.Highcharts.Templating, t.Highcharts.Point, t.Highcharts.Color, t.Highcharts.Chart, t.Highcharts.SVGElement, t.Highcharts.StackItem);
    }("undefined" == typeof window ? exports : window, (t, e, i, s, o, a, r, n, l, h) => (() => {
      "use strict";
      var p, d, c, u = {
        28: (t10) => {
          t10.exports = l;
        },
        184: (t10) => {
          t10.exports = h;
        },
        260: (t10) => {
          t10.exports = a;
        },
        448: (t10) => {
          t10.exports = s;
        },
        512: (t10) => {
          t10.exports = e;
        },
        620: (t10) => {
          t10.exports = r;
        },
        820: (t10) => {
          t10.exports = i;
        },
        944: (e10) => {
          e10.exports = t;
        },
        960: (t10) => {
          t10.exports = n;
        },
        984: (t10) => {
          t10.exports = o;
        }
      }, g = {};
      function f(t10) {
        var e10 = g[t10];
        if (void 0 !== e10) return e10.exports;
        var i10 = g[t10] = {
          exports: {}
        };
        return u[t10](i10, i10.exports, f), i10.exports;
      }
      f.n = (t10) => {
        var e10 = t10 && t10.__esModule ? () => t10.default : () => t10;
        return f.d(e10, {
          a: e10
        }), e10;
      }, f.d = (t10, e10) => {
        for (var i10 in e10) f.o(e10, i10) && !f.o(t10, i10) && Object.defineProperty(t10, i10, {
          enumerable: true,
          get: e10[i10]
        });
      }, f.o = (t10, e10) => Object.prototype.hasOwnProperty.call(t10, e10);
      var m = {};
      f.d(m, {
        default: () => oe
      });
      var b = f(944), y = f.n(b), x = f(512), P = f.n(x), v = f(820), M = f.n(v);
      let {
        deg2rad: L
      } = y(), {
        fireEvent: k,
        isNumber: w,
        pick: A,
        relativeLength: S
      } = y();
      !function(t10) {
        t10.getCenter = function() {
          let t11 = this.options, e10 = this.chart, i10 = 2 * (t11.slicedOffset || 0), s10 = e10.plotWidth - 2 * i10, o2 = e10.plotHeight - 2 * i10, a2 = t11.center, r2 = Math.min(s10, o2), n2 = t11.thickness, l2, h2 = t11.size, p2 = t11.innerSize || 0, d2, c2;
          "string" == typeof h2 && (h2 = parseFloat(h2)), "string" == typeof p2 && (p2 = parseFloat(p2));
          let u2 = [A(a2?.[0], "50%"), A(a2?.[1], "50%"), A(h2 && h2 < 0 ? void 0 : t11.size, "100%"), A(p2 && p2 < 0 ? void 0 : t11.innerSize || 0, "0%")];
          for (!e10.angular || this instanceof M() || (u2[3] = 0), d2 = 0; d2 < 4; ++d2) c2 = u2[d2], l2 = d2 < 2 || 2 === d2 && /%$/.test(c2), u2[d2] = S(c2, [s10, o2, r2, u2[2]][d2]) + (l2 ? i10 : 0);
          return u2[3] > u2[2] && (u2[3] = u2[2]), w(n2) && 2 * n2 < u2[2] && n2 > 0 && (u2[3] = u2[2] - 2 * n2), k(this, "afterGetCenter", {
            positions: u2
          }), u2;
        }, t10.getStartAndEndRadians = function(t11, e10) {
          let i10 = w(t11) ? t11 : 0, s10 = w(e10) && e10 > i10 && e10 - i10 < 360 ? e10 : i10 + 360;
          return {
            start: L * (i10 + -90),
            end: L * (s10 + -90)
          };
        };
      }(p || (p = {}));
      let N = p, {
        addEvent: T,
        correctFloat: C,
        defined: X,
        pick: Y
      } = y();
      function I(t10) {
        let e10, i10 = this;
        return t10 && i10.pane.forEach((s10) => {
          R(t10.chartX - i10.plotLeft, t10.chartY - i10.plotTop, s10.center) && (e10 = s10);
        }), e10;
      }
      function R(t10, e10, i10, s10, o2) {
        let a2 = true, r2 = i10[0], n2 = i10[1], l2 = Math.sqrt(Math.pow(t10 - r2, 2) + Math.pow(e10 - n2, 2));
        if (X(s10) && X(o2)) {
          let i11 = Math.atan2(C(e10 - n2, 8), C(t10 - r2, 8));
          o2 !== s10 && (a2 = s10 > o2 ? i11 >= s10 && i11 <= Math.PI || i11 <= o2 && i11 >= -Math.PI : i11 >= s10 && i11 <= C(o2, 8));
        }
        return l2 <= Math.ceil(i10[2] / 2) && a2;
      }
      function E(t10) {
        this.polar && (t10.options.inverted && ([t10.x, t10.y] = [t10.y, t10.x]), t10.isInsidePlot = this.pane.some((e10) => R(t10.x, t10.y, e10.center, e10.axis && e10.axis.normalizedStartAngleRad, e10.axis && e10.axis.normalizedEndAngleRad)));
      }
      function z(t10) {
        let e10 = this.chart;
        t10.hoverPoint && t10.hoverPoint.plotX && t10.hoverPoint.plotY && e10.hoverPane && !R(t10.hoverPoint.plotX, t10.hoverPoint.plotY, e10.hoverPane.center) && (t10.hoverPoint = void 0);
      }
      function D(t10) {
        let e10 = this.chart;
        e10.polar ? (e10.hoverPane = e10.getHoverPane(t10), t10.filter = function(i10) {
          return i10.visible && !(!t10.shared && i10.directTouch) && Y(i10.options.enableMouseTracking, true) && (!e10.hoverPane || i10.xAxis.pane === e10.hoverPane);
        }) : e10.hoverPane = void 0;
      }
      let O = {
        pane: {
          center: ["50%", "50%"],
          size: "85%",
          innerSize: "0%",
          startAngle: 0
        },
        background: {
          shape: "circle",
          borderRadius: 0,
          borderWidth: 1,
          borderColor: "#cccccc",
          backgroundColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [[0, "#ffffff"], [1, "#e6e6e6"]]
          },
          from: -Number.MAX_VALUE,
          innerRadius: 0,
          to: Number.MAX_VALUE,
          outerRadius: "105%"
        }
      }, {
        extend: H,
        merge: B,
        splat: W
      } = y();
      class F {
        constructor(t10, e10) {
          this.coll = "pane", this.init(t10, e10);
        }
        init(t10, e10) {
          this.chart = e10, this.background = [], e10.pane.push(this), this.setOptions(t10);
        }
        setOptions(t10) {
          this.options = t10 = B(O.pane, this.chart.angular ? {
            background: {}
          } : void 0, t10);
        }
        render() {
          let t10 = this.options, e10 = this.chart.renderer;
          this.group || (this.group = e10.g("pane-group").attr({
            zIndex: t10.zIndex || 0
          }).add()), this.updateCenter();
          let i10 = this.options.background;
          if (i10) {
            let t11 = Math.max((i10 = W(i10)).length, this.background.length || 0);
            for (let e11 = 0; e11 < t11; e11++) i10[e11] && this.axis ? this.renderBackground(B(O.background, i10[e11]), e11) : this.background[e11] && (this.background[e11] = this.background[e11].destroy(), this.background.splice(e11, 1));
          }
        }
        renderBackground(t10, e10) {
          let i10 = {
            class: "highcharts-pane " + (t10.className || "")
          }, s10 = "animate";
          this.chart.styledMode || H(i10, {
            fill: t10.backgroundColor,
            stroke: t10.borderColor,
            "stroke-width": t10.borderWidth
          }), this.background[e10] || (this.background[e10] = this.chart.renderer.path().add(this.group), s10 = "attr"), this.background[e10][s10]({
            d: this.axis.getPlotBandPath(t10.from, t10.to, t10)
          }).attr(i10);
        }
        updateCenter(t10) {
          this.center = (t10 || this.axis || {}).center = N.getCenter.call(this);
        }
        update(t10, e10) {
          B(true, this.options, t10), this.setOptions(this.options), this.render(), this.chart.axes.forEach(function(t11) {
            t11.pane === this && (t11.pane = null, t11.update({}, e10));
          }, this);
        }
      }
      F.compose = function(t10, e10) {
        let i10 = t10.prototype;
        i10.getHoverPane || (i10.collectionsWithUpdate.push("pane"), i10.getHoverPane = I, T(t10, "afterIsInsidePlot", E), T(e10, "afterGetHoverData", z), T(e10, "beforeGetHoverData", D));
      };
      let {
        area: {
          prototype: {
            pointClass: G,
            pointClass: {
              prototype: q
            }
          }
        }
      } = P().seriesTypes, {
        defined: V,
        isNumber: _
      } = y(), U = class extends G {
        setState() {
          let t10 = this.state, e10 = this.series, i10 = e10.chart.polar;
          V(this.plotHigh) || (this.plotHigh = e10.yAxis.toPixels(this.high, true)), V(this.plotLow) || (this.plotLow = this.plotY = e10.yAxis.toPixels(this.low, true)), e10.lowerStateMarkerGraphic = e10.stateMarkerGraphic, e10.stateMarkerGraphic = e10.upperStateMarkerGraphic, this.graphic = this.graphics && this.graphics[1], this.plotY = this.plotHigh, i10 && _(this.plotHighX) && (this.plotX = this.plotHighX), q.setState.apply(this, arguments), this.state = t10, this.plotY = this.plotLow, this.graphic = this.graphics && this.graphics[0], i10 && _(this.plotLowX) && (this.plotX = this.plotLowX), e10.upperStateMarkerGraphic = e10.stateMarkerGraphic, e10.stateMarkerGraphic = e10.lowerStateMarkerGraphic, e10.lowerStateMarkerGraphic = void 0;
          let s10 = e10.modifyMarkerSettings();
          q.setState.apply(this, arguments), e10.restoreMarkerSettings(s10);
        }
        haloPath() {
          let t10 = this.series.chart.polar, e10 = [];
          return this.plotY = this.plotLow, t10 && _(this.plotLowX) && (this.plotX = this.plotLowX), this.isInside && (e10 = q.haloPath.apply(this, arguments)), this.plotY = this.plotHigh, t10 && _(this.plotHighX) && (this.plotX = this.plotHighX), this.isTopInside && (e10 = e10.concat(q.haloPath.apply(this, arguments))), e10;
        }
        isValid() {
          return _(this.low) && _(this.high);
        }
      }, {
        noop: K
      } = y(), {
        area: Z,
        area: {
          prototype: j
        },
        column: {
          prototype: $
        }
      } = P().seriesTypes, {
        addEvent: Q,
        defined: J,
        extend: tt,
        isArray: te,
        isNumber: ti,
        pick: ts,
        merge: to
      } = y();
      class ta extends Z {
        toYData(t10) {
          return [t10.low, t10.high];
        }
        highToXY(t10) {
          let e10 = this.chart, i10 = this.xAxis.postTranslate(t10.rectPlotX || 0, this.yAxis.len - (t10.plotHigh || 0));
          t10.plotHighX = i10.x - e10.plotLeft, t10.plotHigh = i10.y - e10.plotTop, t10.plotLowX = t10.plotX;
        }
        getGraphPath(t10) {
          let e10 = [], i10 = [], s10 = j.getGraphPath, o2 = this.options, a2 = this.chart.polar, r2 = a2 && false !== o2.connectEnds, n2 = o2.connectNulls, l2, h2, p2, d2 = o2.step;
          for (l2 = (t10 = t10 || this.points).length; l2--; ) {
            h2 = t10[l2];
            let s11 = a2 ? {
              plotX: h2.rectPlotX,
              plotY: h2.yBottom,
              doCurve: false
            } : {
              plotX: h2.plotX,
              plotY: h2.plotY,
              doCurve: false
            };
            h2.isNull || r2 || n2 || t10[l2 + 1] && !t10[l2 + 1].isNull || i10.push(s11), p2 = {
              polarPlotY: h2.polarPlotY,
              rectPlotX: h2.rectPlotX,
              yBottom: h2.yBottom,
              plotX: ts(h2.plotHighX, h2.plotX),
              plotY: h2.plotHigh,
              isNull: h2.isNull
            }, i10.push(p2), e10.push(p2), h2.isNull || r2 || n2 || t10[l2 - 1] && !t10[l2 - 1].isNull || i10.push(s11);
          }
          let c2 = s10.call(this, t10);
          d2 && (true === d2 && (d2 = "left"), o2.step = {
            left: "right",
            center: "center",
            right: "left"
          }[d2]);
          let u2 = s10.call(this, e10), g2 = s10.call(this, i10);
          o2.step = d2;
          let f2 = [].concat(c2, u2);
          return !this.chart.polar && g2[0] && "M" === g2[0][0] && (g2[0] = ["L", g2[0][1], g2[0][2]]), this.graphPath = f2, this.areaPath = c2.concat(g2), f2.isArea = true, f2.xMap = c2.xMap, this.areaPath.xMap = c2.xMap, f2;
        }
        drawDataLabels() {
          let t10, e10, i10, s10, o2, a2 = this.points, r2 = a2.length, n2 = [], l2 = this.options.dataLabels, h2 = this.chart.inverted;
          if (l2) {
            if (te(l2) ? (s10 = l2[0] || {
              enabled: false
            }, o2 = l2[1] || {
              enabled: false
            }) : ((s10 = tt({}, l2)).x = l2.xHigh, s10.y = l2.yHigh, (o2 = tt({}, l2)).x = l2.xLow, o2.y = l2.yLow), s10.enabled || this.hasDataLabels?.()) {
              for (t10 = r2; t10--; ) if (e10 = a2[t10]) {
                let {
                  plotHigh: o3 = 0,
                  plotLow: a3 = 0
                } = e10;
                i10 = s10.inside ? o3 < a3 : o3 > a3, e10.y = e10.high, e10._plotY = e10.plotY, e10.plotY = o3, n2[t10] = e10.dataLabel, e10.dataLabel = e10.dataLabelUpper, e10.below = i10, h2 ? s10.align || (s10.align = i10 ? "right" : "left") : s10.verticalAlign || (s10.verticalAlign = i10 ? "top" : "bottom");
              }
              for (this.options.dataLabels = s10, j.drawDataLabels && j.drawDataLabels.apply(this, arguments), t10 = r2; t10--; ) (e10 = a2[t10]) && (e10.dataLabelUpper = e10.dataLabel, e10.dataLabel = n2[t10], delete e10.dataLabels, e10.y = e10.low, e10.plotY = e10._plotY);
            }
            if (o2.enabled || this.hasDataLabels?.()) {
              for (t10 = r2; t10--; ) if (e10 = a2[t10]) {
                let {
                  plotHigh: t11 = 0,
                  plotLow: s11 = 0
                } = e10;
                i10 = o2.inside ? t11 < s11 : t11 > s11, e10.below = !i10, h2 ? o2.align || (o2.align = i10 ? "left" : "right") : o2.verticalAlign || (o2.verticalAlign = i10 ? "bottom" : "top");
              }
              this.options.dataLabels = o2, j.drawDataLabels && j.drawDataLabels.apply(this, arguments);
            }
            if (s10.enabled) for (t10 = r2; t10--; ) (e10 = a2[t10]) && (e10.dataLabels = [e10.dataLabelUpper, e10.dataLabel].filter(function(t11) {
              return !!t11;
            }));
            this.options.dataLabels = l2;
          }
        }
        alignDataLabel() {
          $.alignDataLabel.apply(this, arguments);
        }
        modifyMarkerSettings() {
          let t10 = {
            marker: this.options.marker,
            symbol: this.symbol
          };
          if (this.options.lowMarker) {
            let {
              options: {
                marker: t11,
                lowMarker: e10
              }
            } = this;
            this.options.marker = to(t11, e10), e10.symbol && (this.symbol = e10.symbol);
          }
          return t10;
        }
        restoreMarkerSettings(t10) {
          this.options.marker = t10.marker, this.symbol = t10.symbol;
        }
        drawPoints() {
          let t10, e10, i10 = this.points.length, s10 = this.modifyMarkerSettings();
          for (j.drawPoints.apply(this, arguments), this.restoreMarkerSettings(s10), t10 = 0; t10 < i10; ) (e10 = this.points[t10]).graphics = e10.graphics || [], e10.origProps = {
            plotY: e10.plotY,
            plotX: e10.plotX,
            isInside: e10.isInside,
            negative: e10.negative,
            zone: e10.zone,
            y: e10.y
          }, (e10.graphic || e10.graphics[0]) && (e10.graphics[0] = e10.graphic), e10.graphic = e10.graphics[1], e10.plotY = e10.plotHigh, J(e10.plotHighX) && (e10.plotX = e10.plotHighX), e10.y = ts(e10.high, e10.origProps.y), e10.negative = e10.y < (this.options.threshold || 0), this.zones.length && (e10.zone = e10.getZone()), this.chart.polar || (e10.isInside = e10.isTopInside = void 0 !== e10.plotY && e10.plotY >= 0 && e10.plotY <= this.yAxis.len && e10.plotX >= 0 && e10.plotX <= this.xAxis.len), t10++;
          for (j.drawPoints.apply(this, arguments), t10 = 0; t10 < i10; ) (e10 = this.points[t10]).graphics = e10.graphics || [], (e10.graphic || e10.graphics[1]) && (e10.graphics[1] = e10.graphic), e10.graphic = e10.graphics[0], e10.origProps && (tt(e10, e10.origProps), delete e10.origProps), t10++;
        }
        hasMarkerChanged(t10, e10) {
          let i10 = t10.lowMarker, s10 = e10.lowMarker || {};
          return i10 && (false === i10.enabled || s10.symbol !== i10.symbol || s10.height !== i10.height || s10.width !== i10.width) || super.hasMarkerChanged(t10, e10);
        }
      }
      ta.defaultOptions = to(Z.defaultOptions, {
        lineWidth: 1,
        threshold: null,
        tooltip: {
          pointFormat: '<span style="color:{series.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        trackByArea: true,
        dataLabels: {
          align: void 0,
          verticalAlign: void 0,
          xLow: 0,
          xHigh: 0,
          yLow: 0,
          yHigh: 0
        }
      }), Q(ta, "afterTranslate", function() {
        "low,high" === this.pointArrayMap.join(",") && this.points.forEach((t10) => {
          let e10 = t10.high, i10 = t10.plotY;
          t10.isNull ? t10.plotY = void 0 : (t10.plotLow = i10, t10.plotHigh = ti(e10) ? this.yAxis.translate(this.dataModify ? this.dataModify.modifyValue(e10) : e10, false, true, void 0, true) : void 0, this.dataModify && (t10.yBottom = t10.plotHigh));
        });
      }, {
        order: 0
      }), Q(ta, "afterTranslate", function() {
        this.points.forEach((t10) => {
          if (this.chart.polar) this.highToXY(t10), t10.plotLow = t10.plotY, t10.tooltipPos = [((t10.plotHighX || 0) + (t10.plotLowX || 0)) / 2, ((t10.plotHigh || 0) + (t10.plotLow || 0)) / 2];
          else {
            let e10 = t10.pos(false, t10.plotLow), i10 = t10.pos(false, t10.plotHigh);
            e10 && i10 && (e10[0] = (e10[0] + i10[0]) / 2, e10[1] = (e10[1] + i10[1]) / 2), t10.tooltipPos = e10;
          }
        });
      }, {
        order: 3
      }), tt(ta.prototype, {
        deferTranslatePolar: true,
        pointArrayMap: ["low", "high"],
        pointClass: U,
        pointValKey: "low",
        setStackedPoints: K
      }), P().registerSeriesType("arearange", ta);
      let tr = ta, {
        spline: {
          prototype: tn
        }
      } = P().seriesTypes, {
        merge: tl,
        extend: th
      } = y();
      class tp extends tr {
      }
      tp.defaultOptions = tl(tr.defaultOptions), th(tp.prototype, {
        getPointSpline: tn.getPointSpline
      }), P().registerSeriesType("areasplinerange", tp);
      var td = f(448), tc = f.n(td);
      let {
        noop: tu
      } = y(), {
        crisp: tg,
        extend: tf,
        merge: tm,
        pick: tb,
        relativeLength: ty
      } = y();
      class tx extends tc() {
        pointAttribs() {
          return {};
        }
        getWhiskerPair(t10, e10, i10, s10, o2) {
          let a2 = o2.whiskers.strokeWidth(), r2 = (i11, s11) => {
            let o3 = ty(i11, 2 * t10) / 2, r3 = tg(s11, a2);
            return [["M", tg(e10 - o3), r3], ["L", tg(e10 + o3), r3]];
          };
          return [...r2(i10, o2.highPlot), ...r2(s10, o2.lowPlot)];
        }
        translate() {
          let t10 = this.yAxis, e10 = this.pointArrayMap;
          super.translate.apply(this), this.points.forEach(function(i10) {
            e10.forEach(function(e11) {
              null !== i10[e11] && (i10[e11 + "Plot"] = t10.translate(i10[e11], 0, 1, 0, 1));
            }), i10.plotHigh = i10.highPlot;
          });
        }
        drawPoints() {
          let t10, e10, i10, s10, o2, a2, r2, n2, l2, h2, p2, d2 = this.points, c2 = this.options, u2 = this.chart, g2 = u2.renderer, f2 = false !== this.doQuartiles, m2 = this.options.whiskerLength;
          for (let b2 of d2) {
            let d3 = (n2 = b2.graphic) ? "animate" : "attr", y2 = b2.shapeArgs, x2 = {}, P2 = {}, v2 = {}, M2 = {}, L2 = b2.color || this.color, k2 = b2.options.whiskerLength || m2;
            if (void 0 !== b2.plotY) {
              let w2;
              l2 = y2.width, p2 = (h2 = y2.x) + l2, t10 = f2 ? b2.q1Plot : b2.lowPlot, e10 = f2 ? b2.q3Plot : b2.lowPlot, i10 = b2.highPlot, s10 = b2.lowPlot, n2 || (b2.graphic = n2 = g2.g("point").add(this.group), b2.stem = g2.path().addClass("highcharts-boxplot-stem").add(n2), m2 && (b2.whiskers = g2.path().addClass("highcharts-boxplot-whisker").add(n2)), f2 && (b2.box = g2.path(r2).addClass("highcharts-boxplot-box").add(n2)), b2.medianShape = g2.path(a2).addClass("highcharts-boxplot-median").add(n2)), u2.styledMode || (P2.stroke = b2.stemColor || c2.stemColor || L2, P2["stroke-width"] = tb(b2.stemWidth, c2.stemWidth, c2.lineWidth), P2.dashstyle = b2.stemDashStyle || c2.stemDashStyle || c2.dashStyle, b2.stem.attr(P2), k2 && (v2.stroke = b2.whiskerColor || c2.whiskerColor || L2, v2["stroke-width"] = tb(b2.whiskerWidth, c2.whiskerWidth, c2.lineWidth), v2.dashstyle = b2.whiskerDashStyle || c2.whiskerDashStyle || c2.dashStyle, b2.whiskers.attr(v2)), f2 && (x2.fill = b2.fillColor || c2.fillColor || L2, x2.stroke = c2.lineColor || L2, x2["stroke-width"] = c2.lineWidth || 0, x2.dashstyle = b2.boxDashStyle || c2.boxDashStyle || c2.dashStyle, b2.box.attr(x2)), M2.stroke = b2.medianColor || c2.medianColor || L2, M2["stroke-width"] = tb(b2.medianWidth, c2.medianWidth, c2.lineWidth), M2.dashstyle = b2.medianDashStyle || c2.medianDashStyle || c2.dashStyle, b2.medianShape.attr(M2));
              let A2 = tg((b2.plotX || 0) + (this.pointXOffset || 0) + (this.barW || 0) / 2, b2.stem.strokeWidth());
              if (w2 = [["M", A2, e10], ["L", A2, i10], ["M", A2, t10], ["L", A2, s10]], b2.stem[d3]({
                d: w2
              }), f2) {
                let i11 = b2.box.strokeWidth();
                t10 = tg(t10, i11), e10 = tg(e10, i11), w2 = [["M", h2 = tg(h2, i11), e10], ["L", h2, t10], ["L", p2 = tg(p2, i11), t10], ["L", p2, e10], ["L", h2, e10], ["Z"]], b2.box[d3]({
                  d: w2
                });
              }
              if (k2) {
                let t11 = l2 / 2, e11 = this.getWhiskerPair(t11, A2, b2.upperWhiskerLength ?? c2.upperWhiskerLength ?? k2, b2.lowerWhiskerLength ?? c2.lowerWhiskerLength ?? k2, b2);
                b2.whiskers[d3]({
                  d: e11
                });
              }
              w2 = [["M", h2, o2 = tg(b2.medianPlot, b2.medianShape.strokeWidth())], ["L", p2, o2]], b2.medianShape[d3]({
                d: w2
              });
            }
          }
        }
        toYData(t10) {
          return [t10.low, t10.q1, t10.median, t10.q3, t10.high];
        }
      }
      tx.defaultOptions = tm(tc().defaultOptions, {
        threshold: null,
        tooltip: {
          pointFormat: '<span style="color:{point.color}">●</span> <b>{series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
        },
        whiskerLength: "50%",
        fillColor: "#ffffff",
        lineWidth: 1,
        medianWidth: 2,
        whiskerWidth: 2
      }), tf(tx.prototype, {
        pointArrayMap: ["low", "q1", "median", "q3", "high"],
        pointValKey: "high",
        drawDataLabels: tu,
        setStackedPoints: tu
      }), P().registerSeriesType("boxplot", tx);
      let tP = tx, tv = {
        borderColor: void 0,
        borderWidth: 2,
        className: void 0,
        color: void 0,
        connectorClassName: void 0,
        connectorColor: void 0,
        connectorDistance: 60,
        connectorWidth: 1,
        enabled: false,
        labels: {
          className: void 0,
          allowOverlap: false,
          format: "",
          formatter: void 0,
          align: "right",
          style: {
            fontSize: "0.9em",
            color: "#000000"
          },
          x: 0,
          y: 0
        },
        maxSize: 60,
        minSize: 10,
        legendIndex: 0,
        ranges: {
          value: void 0,
          borderColor: void 0,
          color: void 0,
          connectorColor: void 0
        },
        sizeBy: "area",
        sizeByAbsoluteValue: false,
        zIndex: 1,
        zThreshold: 0
      };
      var tM = f(984), tL = f.n(tM);
      let {
        noop: tk
      } = y(), {
        arrayMax: tw,
        arrayMin: tA,
        isNumber: tS,
        merge: tN,
        pick: tT,
        stableSort: tC
      } = y(), tX = class {
        constructor(t10, e10) {
          this.setState = tk, this.init(t10, e10);
        }
        init(t10, e10) {
          this.options = t10, this.visible = true, this.chart = e10.chart, this.legend = e10;
        }
        addToLegend(t10) {
          t10.splice(this.options.legendIndex, 0, this);
        }
        drawLegendSymbol(t10) {
          let e10, i10 = tT(t10.options.itemDistance, 20), s10 = this.legendItem || {}, o2 = this.options, a2 = o2.ranges, r2 = o2.connectorDistance;
          if (!a2 || !a2.length || !tS(a2[0].value)) {
            t10.options.bubbleLegend.autoRanges = true;
            return;
          }
          tC(a2, function(t11, e11) {
            return e11.value - t11.value;
          }), this.ranges = a2, this.setOptions(), this.render();
          let n2 = this.getMaxLabelSize(), l2 = this.ranges[0].radius, h2 = 2 * l2;
          e10 = (e10 = r2 - l2 + n2.width) > 0 ? e10 : 0, this.maxLabel = n2, this.movementX = "left" === o2.labels.align ? e10 : 0, s10.labelWidth = h2 + e10 + i10, s10.labelHeight = h2 + n2.height / 2;
        }
        setOptions() {
          let t10 = this.ranges, e10 = this.options, i10 = this.chart.series[e10.seriesIndex], s10 = this.legend.baseline, o2 = {
            zIndex: e10.zIndex,
            "stroke-width": e10.borderWidth
          }, a2 = {
            zIndex: e10.zIndex,
            "stroke-width": e10.connectorWidth
          }, r2 = {
            align: this.legend.options.rtl || "left" === e10.labels.align ? "right" : "left",
            zIndex: e10.zIndex
          }, n2 = i10.options.marker.fillOpacity, l2 = this.chart.styledMode;
          t10.forEach(function(h2, p2) {
            l2 || (o2.stroke = tT(h2.borderColor, e10.borderColor, i10.color), o2.fill = h2.color || e10.color, o2.fill || (o2.fill = i10.color, o2["fill-opacity"] = n2 ?? 1), a2.stroke = tT(h2.connectorColor, e10.connectorColor, i10.color)), t10[p2].radius = this.getRangeRadius(h2.value), t10[p2] = tN(t10[p2], {
              center: t10[0].radius - t10[p2].radius + s10
            }), l2 || tN(true, t10[p2], {
              bubbleAttribs: tN(o2),
              connectorAttribs: tN(a2),
              labelAttribs: r2
            });
          }, this);
        }
        getRangeRadius(t10) {
          let e10 = this.options, i10 = this.options.seriesIndex, s10 = this.chart.series[i10], o2 = e10.ranges[0].value, a2 = e10.ranges[e10.ranges.length - 1].value, r2 = e10.minSize, n2 = e10.maxSize;
          return s10.getRadius.call(this, a2, o2, r2, n2, t10);
        }
        render() {
          let t10 = this.legendItem || {}, e10 = this.chart.renderer, i10 = this.options.zThreshold;
          for (let s10 of (this.symbols || (this.symbols = {
            connectors: [],
            bubbleItems: [],
            labels: []
          }), t10.symbol = e10.g("bubble-legend"), t10.label = e10.g("bubble-legend-item").css(this.legend.itemStyle || {}), t10.symbol.translateX = 0, t10.symbol.translateY = 0, t10.symbol.add(t10.label), t10.label.add(t10.group), this.ranges)) s10.value >= i10 && this.renderRange(s10);
          this.hideOverlappingLabels();
        }
        renderRange(t10) {
          let e10 = this.ranges[0], i10 = this.legend, s10 = this.options, o2 = s10.labels, a2 = this.chart, r2 = a2.series[s10.seriesIndex], n2 = a2.renderer, l2 = this.symbols, h2 = l2.labels, p2 = t10.center, d2 = Math.abs(t10.radius), c2 = s10.connectorDistance || 0, u2 = o2.align, g2 = i10.options.rtl, f2 = s10.borderWidth, m2 = s10.connectorWidth, b2 = e10.radius || 0, y2 = p2 - d2 - f2 / 2 + m2 / 2, x2 = (y2 % 1 ? 1 : 0.5) - (m2 % 2 ? 0 : 0.5), P2 = n2.styledMode, v2 = g2 || "left" === u2 ? -c2 : c2;
          "center" === u2 && (v2 = 0, s10.connectorDistance = 0, t10.labelAttribs.align = "center"), l2.bubbleItems.push(n2.circle(b2, p2 + x2, d2).attr(P2 ? {} : t10.bubbleAttribs).addClass((P2 ? "highcharts-color-" + r2.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (s10.className || "")).add(this.legendItem.symbol)), l2.connectors.push(n2.path(n2.crispLine([["M", b2, y2], ["L", b2 + v2, y2]], s10.connectorWidth)).attr(P2 ? {} : t10.connectorAttribs).addClass((P2 ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (s10.connectorClassName || "")).add(this.legendItem.symbol));
          let M2 = n2.text(this.formatLabel(t10)).attr(P2 ? {} : t10.labelAttribs).css(P2 ? {} : o2.style).addClass("highcharts-bubble-legend-labels " + (s10.labels.className || "")).add(this.legendItem.symbol), L2 = {
            x: b2 + v2 + s10.labels.x,
            y: y2 + s10.labels.y + 0.4 * M2.getBBox().height
          };
          M2.attr(L2), h2.push(M2), M2.placed = true, M2.alignAttr = L2;
        }
        getMaxLabelSize() {
          let t10, e10;
          return this.symbols.labels.forEach(function(i10) {
            e10 = i10.getBBox(true), t10 = t10 ? e10.width > t10.width ? e10 : t10 : e10;
          }), t10 || {};
        }
        formatLabel(t10) {
          let e10 = this.options, i10 = e10.labels.formatter, s10 = e10.labels.format, {
            numberFormatter: o2
          } = this.chart;
          return s10 ? tL().format(s10, t10, this.chart) : i10 ? i10.call(t10) : o2(t10.value, 1);
        }
        hideOverlappingLabels() {
          let t10 = this.chart, e10 = this.options.labels.allowOverlap, i10 = this.symbols;
          !e10 && i10 && (t10.hideOverlappingLabels(i10.labels), i10.labels.forEach(function(t11, e11) {
            t11.newOpacity ? t11.newOpacity !== t11.oldOpacity && i10.connectors[e11].show() : i10.connectors[e11].hide();
          }));
        }
        getRanges() {
          let t10 = this.legend.bubbleLegend, e10 = t10.chart.series, i10 = t10.options.ranges, s10, o2, a2 = Number.MAX_VALUE, r2 = -Number.MAX_VALUE;
          return e10.forEach(function(t11) {
            t11.isBubble && !t11.ignoreSeries && (o2 = t11.getColumn("z").filter(tS)).length && (a2 = tT(t11.options.zMin, Math.min(a2, Math.max(tA(o2), false === t11.options.displayNegative ? t11.options.zThreshold : -Number.MAX_VALUE))), r2 = tT(t11.options.zMax, Math.max(r2, tw(o2))));
          }), s10 = a2 === r2 ? [{
            value: r2
          }] : [{
            value: a2
          }, {
            value: (a2 + r2) / 2
          }, {
            value: r2,
            autoRanges: true
          }], i10.length && i10[0].radius && s10.reverse(), s10.forEach(function(t11, e11) {
            i10 && i10[e11] && (s10[e11] = tN(i10[e11], t11));
          }), s10;
        }
        predictBubbleSizes() {
          let t10 = this.chart, e10 = t10.legend.options, i10 = e10.floating, s10 = "horizontal" === e10.layout, o2 = s10 ? t10.legend.lastLineHeight : 0, a2 = t10.plotSizeX, r2 = t10.plotSizeY, n2 = t10.series[this.options.seriesIndex], l2 = n2.getPxExtremes(), h2 = Math.ceil(l2.minPxSize), p2 = Math.ceil(l2.maxPxSize), d2 = Math.min(r2, a2), c2, u2 = n2.options.maxSize;
          return i10 || !/%$/.test(u2) ? c2 = p2 : (c2 = (d2 + o2) * (u2 = parseFloat(u2)) / 100 / (u2 / 100 + 1), (s10 && r2 - c2 >= a2 || !s10 && a2 - c2 >= r2) && (c2 = p2)), [h2, Math.ceil(c2)];
        }
        updateRanges(t10, e10) {
          let i10 = this.legend.options.bubbleLegend;
          i10.minSize = t10, i10.maxSize = e10, i10.ranges = this.getRanges();
        }
        correctSizes() {
          let t10 = this.legend, e10 = this.chart.series[this.options.seriesIndex].getPxExtremes();
          Math.abs(Math.ceil(e10.maxPxSize) - this.options.maxSize) > 1 && (this.updateRanges(this.options.minSize, e10.maxPxSize), t10.render());
        }
      }, {
        setOptions: tY
      } = y(), {
        composed: tI
      } = y(), {
        addEvent: tR,
        objectEach: tE,
        pushUnique: tz,
        wrap: tD
      } = y();
      function tO(t10, e10, i10) {
        let s10, o2, a2, r2 = this.legend, n2 = tH(this) >= 0;
        r2 && r2.options.enabled && r2.bubbleLegend && r2.options.bubbleLegend.autoRanges && n2 ? (s10 = r2.bubbleLegend.options, o2 = r2.bubbleLegend.predictBubbleSizes(), r2.bubbleLegend.updateRanges(o2[0], o2[1]), s10.placed || (r2.group.placed = false, r2.allItems.forEach((t11) => {
          (a2 = t11.legendItem || {}).group && (a2.group.translateY = void 0);
        })), r2.render(), s10.placed || (this.getMargins(), this.axes.forEach((t11) => {
          t11.setScale(), t11.updateNames(), tE(t11.ticks, function(t12) {
            t12.isNew = true, t12.isNewLabel = true;
          });
        }), this.getMargins()), s10.placed = true, t10.call(this, e10, i10), r2.bubbleLegend.correctSizes(), tG(r2, tB(r2))) : (t10.call(this, e10, i10), r2 && r2.options.enabled && r2.bubbleLegend && (r2.render(), tG(r2, tB(r2))));
      }
      function tH(t10) {
        let e10 = t10.series, i10 = 0;
        for (; i10 < e10.length; ) {
          if (e10[i10] && e10[i10].isBubble && e10[i10].visible && e10[i10].dataTable.rowCount) return i10;
          i10++;
        }
        return -1;
      }
      function tB(t10) {
        let e10 = t10.allItems, i10 = [], s10 = e10.length, o2, a2, r2, n2 = 0, l2 = 0;
        for (n2 = 0; n2 < s10; n2++) if (a2 = e10[n2].legendItem || {}, r2 = (e10[n2 + 1] || {}).legendItem || {}, a2.labelHeight && (e10[n2].itemHeight = a2.labelHeight), e10[n2] === e10[s10 - 1] || a2.y !== r2.y) {
          for (i10.push({
            height: 0
          }), o2 = i10[i10.length - 1]; l2 <= n2; l2++) e10[l2].itemHeight > o2.height && (o2.height = e10[l2].itemHeight);
          o2.step = n2;
        }
        return i10;
      }
      function tW(t10) {
        let e10 = this.bubbleLegend, i10 = this.options, s10 = i10.bubbleLegend, o2 = tH(this.chart);
        e10 && e10.ranges && e10.ranges.length && (s10.ranges.length && (s10.autoRanges = !!s10.ranges[0].autoRanges), this.destroyItem(e10)), o2 >= 0 && i10.enabled && s10.enabled && (s10.seriesIndex = o2, this.bubbleLegend = new tX(s10, this), this.bubbleLegend.addToLegend(t10.allItems));
      }
      function tF(t10) {
        let e10;
        if (t10.defaultPrevented) return false;
        let i10 = t10.legendItem, s10 = this.chart, o2 = i10.visible;
        this && this.bubbleLegend && (i10.visible = !o2, i10.ignoreSeries = o2, e10 = tH(s10) >= 0, this.bubbleLegend.visible !== e10 && (this.update({
          bubbleLegend: {
            enabled: e10
          }
        }), this.bubbleLegend.visible = e10), i10.visible = o2);
      }
      function tG(t10, e10) {
        let i10 = t10.allItems, s10 = t10.options.rtl, o2, a2, r2, n2, l2 = 0;
        i10.forEach((t11, i11) => {
          (n2 = t11.legendItem || {}).group && (o2 = n2.group.translateX || 0, a2 = n2.y || 0, ((r2 = t11.movementX) || s10 && t11.ranges) && (r2 = s10 ? o2 - t11.options.maxSize / 2 : o2 + r2, n2.group.attr({
            translateX: r2
          })), i11 > e10[l2].step && l2++, n2.group.attr({
            translateY: Math.round(a2 + e10[l2].height / 2)
          }), n2.y = a2 + e10[l2].height / 2);
        });
      }
      let tq = {
        compose: function(t10, e10) {
          tz(tI, "Series.BubbleLegend") && (tY({
            legend: {
              bubbleLegend: tv
            }
          }), tD(t10.prototype, "drawChartBox", tO), tR(e10, "afterGetAllItems", tW), tR(e10, "itemClick", tF));
        }
      };
      var tV = f(260), t_ = f.n(tV);
      let {
        seriesTypes: {
          scatter: {
            prototype: {
              pointClass: tU
            }
          }
        }
      } = P(), {
        extend: tK
      } = y();
      class tZ extends tU {
        haloPath(t10) {
          let e10 = (t10 && this.marker && this.marker.radius || 0) + t10;
          if (this.series.chart.inverted) {
            let t11 = this.pos() || [0, 0], {
              xAxis: i10,
              yAxis: s10,
              chart: o2
            } = this.series;
            return o2.renderer.symbols.circle(i10.len - t11[1] - e10, s10.len - t11[0] - e10, 2 * e10, 2 * e10);
          }
          return t_().prototype.haloPath.call(this, e10);
        }
      }
      tK(tZ.prototype, {
        ttBelow: false
      });
      let {
        composed: tj,
        noop: t$
      } = y(), {
        series: tQ,
        seriesTypes: {
          column: {
            prototype: tJ
          },
          scatter: t0
        }
      } = P(), {
        addEvent: t1,
        arrayMax: t2,
        arrayMin: t3,
        clamp: t5,
        extend: t8,
        isNumber: t6,
        merge: t4,
        pick: t9,
        pushUnique: t7
      } = y();
      function et() {
        let t10 = this.len, {
          coll: e10,
          isXAxis: i10,
          min: s10
        } = this, o2 = (this.max || 0) - (s10 || 0), a2 = 0, r2 = t10, n2 = t10 / o2, l2;
        ("xAxis" === e10 || "yAxis" === e10) && (this.series.forEach((t11) => {
          if (t11.bubblePadding && t11.reserveSpace()) {
            this.allowZoomOutside = true, l2 = true;
            let e11 = t11.getColumn(i10 ? "x" : "y");
            if (i10 && ((t11.onPoint || t11).getRadii(0, 0, t11), t11.onPoint && (t11.radii = t11.onPoint.radii)), o2 > 0) {
              let i11 = e11.length;
              for (; i11--; ) if (t6(e11[i11]) && this.dataMin <= e11[i11] && e11[i11] <= this.max) {
                let o3 = t11.radii && t11.radii[i11] || 0;
                a2 = Math.min((e11[i11] - s10) * n2 - o3, a2), r2 = Math.max((e11[i11] - s10) * n2 + o3, r2);
              }
            }
          }
        }), l2 && o2 > 0 && !this.logarithmic && (r2 -= t10, n2 *= (t10 + Math.max(0, a2) - Math.min(r2, t10)) / t10, [["min", "userMin", a2], ["max", "userMax", r2]].forEach((t11) => {
          void 0 === t9(this.options[t11[0]], this[t11[1]]) && (this[t11[0]] += t11[2] / n2);
        })));
      }
      function ee() {
        let {
          ticks: t10,
          tickPositions: e10,
          dataMin: i10 = 0,
          dataMax: s10 = 0,
          categories: o2
        } = this, a2 = this.options.type;
        if ((o2?.length || "category" === a2) && this.series.find((t11) => t11.bubblePadding)) {
          let o3 = e10.length;
          for (; o3--; ) {
            let a3 = t10[e10[o3]], r2 = a3.pos || 0;
            (r2 > s10 || r2 < i10) && a3.label?.hide();
          }
        }
      }
      class ei extends t0 {
        static compose(t10, e10, i10) {
          tq.compose(e10, i10), t7(tj, "Series.Bubble") && (t1(t10, "foundExtremes", et), t1(t10, "afterRender", ee));
        }
        animate(t10) {
          !t10 && this.points.length < this.options.animationLimit && this.points.forEach(function(t11) {
            let {
              graphic: e10,
              plotX: i10 = 0,
              plotY: s10 = 0
            } = t11;
            e10 && e10.width && (this.hasRendered || e10.attr({
              x: i10,
              y: s10,
              width: 1,
              height: 1
            }), e10.animate(this.markerAttribs(t11), this.options.animation));
          }, this);
        }
        getRadii() {
          let t10 = this.getColumn("z"), e10 = this.getColumn("y"), i10 = [], s10, o2, a2, r2 = this.chart.bubbleZExtremes, {
            minPxSize: n2,
            maxPxSize: l2
          } = this.getPxExtremes();
          if (!r2) {
            let t11, e11 = Number.MAX_VALUE, i11 = -Number.MAX_VALUE;
            this.chart.series.forEach((s11) => {
              if (s11.bubblePadding && s11.reserveSpace()) {
                let o3 = (s11.onPoint || s11).getZExtremes();
                o3 && (e11 = Math.min(t9(e11, o3.zMin), o3.zMin), i11 = Math.max(t9(i11, o3.zMax), o3.zMax), t11 = true);
              }
            }), t11 ? (r2 = {
              zMin: e11,
              zMax: i11
            }, this.chart.bubbleZExtremes = r2) : r2 = {
              zMin: 0,
              zMax: 0
            };
          }
          for (o2 = 0, s10 = t10.length; o2 < s10; o2++) a2 = t10[o2], i10.push(this.getRadius(r2.zMin, r2.zMax, n2, l2, a2, e10 && e10[o2]));
          this.radii = i10;
        }
        getRadius(t10, e10, i10, s10, o2, a2) {
          let r2 = this.options, n2 = "width" !== r2.sizeBy, l2 = r2.zThreshold, h2 = e10 - t10, p2 = 0.5;
          if (null === a2 || null === o2) return null;
          if (t6(o2)) {
            if (r2.sizeByAbsoluteValue && (o2 = Math.abs(o2 - l2), e10 = h2 = Math.max(e10 - l2, Math.abs(t10 - l2)), t10 = 0), o2 < t10) return i10 / 2 - 1;
            h2 > 0 && (p2 = (o2 - t10) / h2);
          }
          return n2 && p2 >= 0 && (p2 = Math.sqrt(p2)), Math.ceil(i10 + p2 * (s10 - i10)) / 2;
        }
        hasData() {
          return !!this.dataTable.rowCount;
        }
        markerAttribs(t10, e10) {
          let i10 = super.markerAttribs(t10, e10), {
            height: s10 = 0,
            width: o2 = 0
          } = i10;
          return this.chart.inverted ? t8(i10, {
            x: (t10.plotX || 0) - o2 / 2,
            y: (t10.plotY || 0) - s10 / 2
          }) : i10;
        }
        pointAttribs(t10, e10) {
          let i10 = this.options.marker, s10 = i10?.fillOpacity, o2 = tQ.prototype.pointAttribs.call(this, t10, e10);
          return o2["fill-opacity"] = s10 ?? 1, o2;
        }
        translate() {
          super.translate.call(this), this.getRadii(), this.translateBubble();
        }
        translateBubble() {
          let {
            data: t10,
            options: e10,
            radii: i10
          } = this, {
            minPxSize: s10
          } = this.getPxExtremes(), o2 = t10.length;
          for (; o2--; ) {
            let a2 = t10[o2], r2 = i10 ? i10[o2] : 0;
            "z" === this.zoneAxis && (a2.negative = (a2.z || 0) < (e10.zThreshold || 0)), t6(r2) && r2 >= s10 / 2 ? (a2.marker = t8(a2.marker, {
              radius: r2,
              width: 2 * r2,
              height: 2 * r2
            }), a2.dlBox = {
              x: a2.plotX - r2,
              y: a2.plotY - r2,
              width: 2 * r2,
              height: 2 * r2
            }) : (a2.shapeArgs = a2.plotY = a2.dlBox = void 0, a2.isInside = false);
          }
        }
        getPxExtremes() {
          let t10 = Math.min(this.chart.plotWidth, this.chart.plotHeight), e10 = (e11) => {
            let i11;
            return "string" == typeof e11 && (i11 = /%$/.test(e11), e11 = parseInt(e11, 10)), i11 ? t10 * e11 / 100 : e11;
          }, i10 = e10(t9(this.options.minSize, 8)), s10 = Math.max(e10(t9(this.options.maxSize, "20%")), i10);
          return {
            minPxSize: i10,
            maxPxSize: s10
          };
        }
        getZExtremes() {
          let t10 = this.options, e10 = this.getColumn("z").filter(t6);
          if (e10.length) {
            let i10 = t9(t10.zMin, t5(t3(e10), false === t10.displayNegative ? t10.zThreshold || 0 : -Number.MAX_VALUE, Number.MAX_VALUE)), s10 = t9(t10.zMax, t2(e10));
            if (t6(i10) && t6(s10)) return {
              zMin: i10,
              zMax: s10
            };
          }
        }
        searchKDTree(t10, e10, i10, s10 = t$, o2 = t$) {
          return s10 = (t11, e11, i11) => {
            let s11 = t11[i11] || 0, o3 = e11[i11] || 0, a2, r2 = false;
            return s11 === o3 ? a2 = t11.index > e11.index ? t11 : e11 : s11 < 0 && o3 < 0 ? (a2 = s11 - (t11.marker?.radius || 0) >= o3 - (e11.marker?.radius || 0) ? t11 : e11, r2 = true) : a2 = s11 < o3 ? t11 : e11, [a2, r2];
          }, o2 = (t11, e11, i11) => !i11 && t11 > e11 || t11 < e11, super.searchKDTree(t10, e10, i10, s10, o2);
        }
      }
      ei.defaultOptions = t4(t0.defaultOptions, {
        dataLabels: {
          formatter: function() {
            let {
              numberFormatter: t10
            } = this.series.chart, {
              z: e10
            } = this.point;
            return t6(e10) ? t10(e10, -1) : "";
          },
          inside: true,
          verticalAlign: "middle"
        },
        animationLimit: 250,
        marker: {
          lineColor: null,
          lineWidth: 1,
          fillOpacity: 0.5,
          radius: null,
          states: {
            hover: {
              radiusPlus: 0
            }
          },
          symbol: "circle"
        },
        minSize: 8,
        maxSize: "20%",
        softThreshold: false,
        states: {
          hover: {
            halo: {
              size: 5
            }
          }
        },
        tooltip: {
          pointFormat: "({point.x}, {point.y}), Size: {point.z}"
        },
        turboThreshold: 0,
        zThreshold: 0,
        zoneAxis: "z"
      }), t8(ei.prototype, {
        alignDataLabel: tJ.alignDataLabel,
        applyZones: t$,
        bubblePadding: true,
        isBubble: true,
        keysAffectYAxis: ["y"],
        pointArrayMap: ["y", "z"],
        pointClass: tZ,
        parallelArrays: ["x", "y", "z"],
        trackerGroups: ["group", "dataLabelsGroup"],
        specialGroup: "group",
        zoneAxis: "z"
      }), t1(ei, "updatedData", (t10) => {
        delete t10.target.chart.bubbleZExtremes;
      }), t1(ei, "remove", (t10) => {
        delete t10.target.chart.bubbleZExtremes;
      }), P().registerSeriesType("bubble", ei);
      let {
        seriesTypes: {
          column: {
            prototype: {
              pointClass: {
                prototype: es
              }
            }
          },
          arearange: {
            prototype: {
              pointClass: eo
            }
          }
        }
      } = P(), {
        extend: ea,
        isNumber: er
      } = y();
      class en extends eo {
        isValid() {
          return er(this.low);
        }
      }
      ea(en.prototype, {
        setState: es.setState
      });
      let {
        noop: el
      } = y(), {
        seriesTypes: {
          arearange: eh,
          column: ep,
          column: {
            prototype: ed
          }
        }
      } = P(), {
        addEvent: ec,
        clamp: eu,
        extend: eg,
        isNumber: ef,
        merge: em,
        pick: eb
      } = y();
      class ey extends eh {
        setOptions() {
          return em(true, arguments[0], {
            stacking: void 0
          }), eh.prototype.setOptions.apply(this, arguments);
        }
        translate() {
          return ed.translate.apply(this);
        }
        pointAttribs() {
          return ed.pointAttribs.apply(this, arguments);
        }
        translate3dPoints() {
          return ed.translate3dPoints.apply(this, arguments);
        }
        translate3dShapes() {
          return ed.translate3dShapes.apply(this, arguments);
        }
        afterColumnTranslate() {
          let t10, e10, i10, s10, o2 = this.yAxis, a2 = this.xAxis, r2 = a2.startAngleRad, n2 = this.chart, l2 = this.xAxis.isRadial, h2 = Math.max(n2.chartWidth, n2.chartHeight) + 999;
          this.points.forEach((p2) => {
            let d2 = p2.shapeArgs || {}, c2 = this.options.minPointLength, u2 = p2.plotY, g2 = o2.translate(p2.high, 0, 1, 0, 1);
            if (ef(g2) && ef(u2)) {
              if (p2.plotHigh = eu(g2, -h2, h2), p2.plotLow = eu(u2, -h2, h2), s10 = p2.plotHigh, Math.abs(t10 = eb(p2.rectPlotY, p2.plotY) - p2.plotHigh) < c2 ? (e10 = c2 - t10, t10 += e10, s10 -= e10 / 2) : t10 < 0 && (t10 *= -1, s10 -= t10), l2 && this.polar) i10 = p2.barX + r2, p2.shapeType = "arc", p2.shapeArgs = this.polar.arc(s10 + t10, s10, i10, i10 + p2.pointWidth);
              else {
                d2.height = t10, d2.y = s10;
                let {
                  x: e11 = 0,
                  width: i11 = 0
                } = d2;
                p2.shapeArgs = em(p2.shapeArgs, this.crispCol(e11, s10, i11, t10)), p2.tooltipPos = n2.inverted ? [o2.len + o2.pos - n2.plotLeft - s10 - t10 / 2, a2.len + a2.pos - n2.plotTop - e11 - i11 / 2, t10] : [a2.left - n2.plotLeft + e11 + i11 / 2, o2.pos - n2.plotTop + s10 + t10 / 2, t10];
              }
            }
          });
        }
      }
      ey.defaultOptions = em(ep.defaultOptions, eh.defaultOptions, {
        borderRadius: {
          where: "all"
        },
        pointRange: null,
        legendSymbol: "rectangle",
        marker: null,
        states: {
          hover: {
            halo: false
          }
        }
      }), ec(ey, "afterColumnTranslate", function() {
        ey.prototype.afterColumnTranslate.apply(this);
      }, {
        order: 5
      }), eg(ey.prototype, {
        directTouch: true,
        pointClass: en,
        trackerGroups: ["group", "dataLabelsGroup"],
        adjustForMissingColumns: ed.adjustForMissingColumns,
        animate: ed.animate,
        crispCol: ed.crispCol,
        drawGraph: el,
        drawPoints: ed.drawPoints,
        getSymbol: el,
        drawTracker: ed.drawTracker,
        getColumnMetrics: ed.getColumnMetrics
      }), P().registerSeriesType("columnrange", ey);
      let {
        column: ex
      } = P().seriesTypes, {
        clamp: eP,
        merge: ev,
        pick: eM
      } = y();
      class eL extends ex {
        translate() {
          let t10 = this.chart, e10 = this.options, i10 = this.dense = this.closestPointRange * this.xAxis.transA < 2, s10 = this.borderWidth = eM(e10.borderWidth, +!i10), o2 = this.yAxis, a2 = e10.threshold, r2 = eM(e10.minPointLength, 5), n2 = this.getColumnMetrics(), l2 = n2.width, h2 = this.pointXOffset = n2.offset, p2 = this.translatedThreshold = o2.getThreshold(a2), d2 = this.barW = Math.max(l2, 1 + 2 * s10);
          for (let i11 of (t10.inverted && (p2 -= 0.5), e10.pointPadding && (d2 = Math.ceil(d2)), super.translate(), this.points)) {
            let s11 = eM(i11.yBottom, p2), c2 = 999 + Math.abs(s11), u2 = eP(i11.plotY, -c2, o2.len + c2), g2 = d2 / 2, f2 = Math.min(u2, s11), m2 = Math.max(u2, s11) - f2, b2 = i11.plotX + h2, y2, x2, P2, v2, M2, L2, k2, w2, A2, S2, N2;
            e10.centerInCategory && (b2 = this.adjustForMissingColumns(b2, l2, i11, n2)), i11.barX = b2, i11.pointWidth = l2, i11.tooltipPos = t10.inverted ? [o2.len + o2.pos - t10.plotLeft - u2, this.xAxis.len - b2 - g2, m2] : [b2 + g2, u2 + o2.pos - t10.plotTop, m2], y2 = a2 + (i11.total || i11.y), "percent" === e10.stacking && (y2 = a2 + (i11.y < 0) ? -100 : 100);
            let T2 = o2.toPixels(y2, true);
            P2 = (x2 = t10.plotHeight - T2 - (t10.plotHeight - p2)) ? g2 * (f2 - T2) / x2 : 0, v2 = x2 ? g2 * (f2 + m2 - T2) / x2 : 0, L2 = b2 - P2 + g2, k2 = b2 + P2 + g2, w2 = b2 + v2 + g2, A2 = b2 - v2 + g2, S2 = f2 - r2, N2 = f2 + m2, i11.y < 0 && (S2 = f2, N2 = f2 + m2 + r2), t10.inverted && (M2 = o2.width - f2, x2 = T2 - (o2.width - p2), P2 = g2 * (T2 - M2) / x2, v2 = g2 * (T2 - (M2 - m2)) / x2, k2 = (L2 = b2 + g2 + P2) - 2 * P2, w2 = b2 - v2 + g2, A2 = b2 + v2 + g2, S2 = f2, N2 = f2 + m2 - r2, i11.y < 0 && (N2 = f2 + m2 + r2)), i11.shapeType = "path", i11.shapeArgs = {
              x: L2,
              y: S2,
              width: k2 - L2,
              height: m2,
              d: [["M", L2, S2], ["L", k2, S2], ["L", w2, N2], ["L", A2, N2], ["Z"]]
            };
          }
        }
      }
      eL.defaultOptions = ev(ex.defaultOptions, {}), P().registerSeriesType("columnpyramid", eL);
      let {
        arearange: ek
      } = P().seriesTypes, {
        addEvent: ew,
        merge: eA,
        extend: eS
      } = y();
      class eN extends tP {
        getColumnMetrics() {
          return this.linkedParent && this.linkedParent.columnMetrics || tc().prototype.getColumnMetrics.call(this);
        }
        drawDataLabels() {
          let t10 = this.pointValKey;
          if (ek) for (let e10 of (ek.prototype.drawDataLabels.call(this), this.points)) e10.y = e10[t10];
        }
        toYData(t10) {
          return [t10.low, t10.high];
        }
      }
      eN.defaultOptions = eA(tP.defaultOptions, {
        color: "#000000",
        grouping: false,
        linkedTo: ":previous",
        tooltip: {
          pointFormat: '<span style="color:{point.color}">●</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
        },
        whiskerWidth: null
      }), ew(eN, "afterTranslate", function() {
        for (let t10 of this.points) t10.plotLow = t10.plotY;
      }, {
        order: 0
      }), eS(eN.prototype, {
        pointArrayMap: ["low", "high"],
        pointValKey: "high",
        doQuartiles: false
      }), P().registerSeriesType("errorbar", eN);
      let {
        series: {
          prototype: {
            pointClass: eT
          }
        }
      } = P(), {
        noop: eC
      } = y(), {
        series: eX,
        seriesTypes: {
          column: eY
        }
      } = P(), {
        clamp: eI,
        isNumber: eR,
        extend: eE,
        merge: ez,
        pick: eD,
        pInt: eO,
        defined: eH
      } = y();
      class eB extends eX {
        translate() {
          let t10 = this.yAxis, e10 = this.options, i10 = t10.center;
          this.generatePoints(), this.points.forEach((s10) => {
            let o2 = ez(e10.dial, s10.dial), a2 = eO(o2.radius) * i10[2] / 200, r2 = eO(o2.baseLength) * a2 / 100, n2 = eO(o2.rearLength) * a2 / 100, l2 = o2.baseWidth, h2 = o2.topWidth, p2 = e10.overshoot, d2 = t10.startAngleRad + t10.translate(s10.y, void 0, void 0, void 0, true);
            (eR(p2) || false === e10.wrap) && (p2 = eR(p2) ? p2 / 180 * Math.PI : 0, d2 = eI(d2, t10.startAngleRad - p2, t10.endAngleRad + p2)), d2 = 180 * d2 / Math.PI, s10.shapeType = "path", s10.shapeArgs = {
              d: o2.path || [["M", -n2, -l2 / 2], ["L", r2, -l2 / 2], ["L", a2, -h2 / 2], ["L", a2, h2 / 2], ["L", r2, l2 / 2], ["L", -n2, l2 / 2], ["Z"]],
              translateX: i10[0],
              translateY: i10[1],
              rotation: d2
            }, s10.plotX = i10[0], s10.plotY = i10[1], eH(s10.y) && t10.max - t10.min && (s10.percentage = (s10.y - t10.min) / (t10.max - t10.min) * 100);
          });
        }
        drawPoints() {
          let t10 = this, e10 = t10.chart, i10 = t10.yAxis.center, s10 = t10.pivot, o2 = t10.options, a2 = o2.pivot, r2 = e10.renderer;
          t10.points.forEach((i11) => {
            let s11 = i11.graphic, a3 = i11.shapeArgs, n2 = a3.d, l2 = ez(o2.dial, i11.dial);
            s11 ? (s11.animate(a3), a3.d = n2) : i11.graphic = r2[i11.shapeType](a3).addClass("highcharts-dial").add(t10.group), e10.styledMode || i11.graphic[s11 ? "animate" : "attr"]({
              stroke: l2.borderColor,
              "stroke-width": l2.borderWidth,
              fill: l2.backgroundColor
            });
          }), s10 ? s10.animate({
            translateX: i10[0],
            translateY: i10[1]
          }) : a2 && (t10.pivot = r2.circle(0, 0, a2.radius).attr({
            zIndex: 2
          }).addClass("highcharts-pivot").translate(i10[0], i10[1]).add(t10.group), e10.styledMode || t10.pivot.attr({
            fill: a2.backgroundColor,
            stroke: a2.borderColor,
            "stroke-width": a2.borderWidth
          }));
        }
        animate(t10) {
          let e10 = this;
          t10 || e10.points.forEach((t11) => {
            let i10 = t11.graphic;
            i10 && (i10.attr({
              rotation: 180 * e10.yAxis.startAngleRad / Math.PI
            }), i10.animate({
              rotation: t11.shapeArgs.rotation
            }, e10.options.animation));
          });
        }
        render() {
          this.group = this.plotGroup("group", "series", this.visible ? "inherit" : "hidden", this.options.zIndex, this.chart.seriesGroup), eX.prototype.render.call(this), this.group.clip(this.chart.clipRect);
        }
        setData(t10, e10) {
          eX.prototype.setData.call(this, t10, false), this.processData(), this.generatePoints(), eD(e10, true) && this.chart.redraw();
        }
        hasData() {
          return !!this.points.length;
        }
      }
      eB.defaultOptions = ez(eX.defaultOptions, {
        dataLabels: {
          borderColor: "#cccccc",
          borderRadius: 3,
          borderWidth: 1,
          crop: false,
          defer: false,
          enabled: true,
          verticalAlign: "top",
          y: 15,
          zIndex: 2
        },
        dial: {
          backgroundColor: "#000000",
          baseLength: "70%",
          baseWidth: 3,
          borderColor: "#cccccc",
          borderWidth: 0,
          radius: "80%",
          rearLength: "10%",
          topWidth: 1
        },
        pivot: {
          radius: 5,
          borderWidth: 0,
          borderColor: "#cccccc",
          backgroundColor: "#000000"
        },
        tooltip: {
          headerFormat: ""
        },
        showInLegend: false
      }), eE(eB.prototype, {
        angular: true,
        directTouch: true,
        drawGraph: eC,
        drawTracker: eY.prototype.drawTracker,
        fixedBox: true,
        forceDL: true,
        noSharedTooltip: true,
        pointClass: class extends eT {
          setState(t10) {
            this.state = t10;
          }
        },
        trackerGroups: ["group", "dataLabelsGroup"]
      }), P().registerSeriesType("gauge", eB);
      var eW = f(620), eF = f.n(eW);
      let {
        composed: eG
      } = y(), {
        addEvent: eq,
        pushUnique: eV
      } = y();
      function e_() {
        let t10, e10, i10, s10, o2 = this;
        o2.container && (t10 = eq(o2.container, "mousedown", (t11) => {
          e10 && e10(), i10 && i10(), (s10 = o2.hoverPoint) && s10.series && s10.series.hasDraggableNodes && s10.series.options.draggable && (s10.series.onMouseDown(s10, t11), e10 = eq(o2.container, "mousemove", (t12) => s10 && s10.series && s10.series.onMouseMove(s10, t12)), i10 = eq(o2.container.ownerDocument, "mouseup", (t12) => (e10(), i10(), s10 && s10.series && s10.series.onMouseUp(s10, t12))));
        })), eq(o2, "destroy", function() {
          t10();
        });
      }
      let eU = {
        compose: function(t10) {
          eV(eG, "DragNodes") && eq(t10, "load", e_);
        },
        onMouseDown: function(t10, e10) {
          let i10 = this.chart.pointer?.normalize(e10) || e10;
          t10.fixedPosition = {
            chartX: i10.chartX,
            chartY: i10.chartY,
            plotX: t10.plotX,
            plotY: t10.plotY
          }, t10.inDragMode = true;
        },
        onMouseMove: function(t10, e10) {
          if (t10.fixedPosition && t10.inDragMode) {
            let i10, s10, o2 = this.chart, a2 = o2.pointer?.normalize(e10) || e10, r2 = t10.fixedPosition.chartX - a2.chartX, n2 = t10.fixedPosition.chartY - a2.chartY, l2 = o2.graphLayoutsLookup;
            (Math.abs(r2) > 5 || Math.abs(n2) > 5) && (i10 = t10.fixedPosition.plotX - r2, s10 = t10.fixedPosition.plotY - n2, o2.isInsidePlot(i10, s10) && (t10.plotX = i10, t10.plotY = s10, t10.hasDragged = true, this.redrawHalo(t10), l2.forEach((t11) => {
              t11.restartSimulation();
            })));
          }
        },
        onMouseUp: function(t10) {
          t10.fixedPosition && (t10.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), t10.inDragMode = t10.hasDragged = false, this.options.fixedDraggable || delete t10.fixedPosition);
        },
        redrawHalo: function(t10) {
          t10 && this.halo && this.halo.attr({
            d: t10.haloPath(this.options.states.hover.halo.size)
          });
        }
      }, {
        setAnimation: eK
      } = y(), {
        composed: eZ
      } = y(), {
        addEvent: ej,
        pushUnique: e$
      } = y();
      function eQ() {
        this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach((t10) => {
          t10.updateSimulation();
        }), this.redraw());
      }
      function eJ() {
        this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach((t10) => {
          t10.updateSimulation(false);
        }), this.redraw());
      }
      function e0() {
        this.graphLayoutsLookup && this.graphLayoutsLookup.forEach((t10) => {
          t10.stop();
        });
      }
      function e1() {
        let t10, e10 = false, i10 = (i11) => {
          i11.maxIterations-- && isFinite(i11.temperature) && !i11.isStable() && !i11.enableSimulation && (i11.beforeStep && i11.beforeStep(), i11.step(), t10 = false, e10 = true);
        };
        if (this.graphLayoutsLookup) {
          for (eK(false, this), this.graphLayoutsLookup.forEach((t11) => t11.start()); !t10; ) t10 = true, this.graphLayoutsLookup.forEach(i10);
          e10 && this.series.forEach((t11) => {
            t11 && t11.layout && t11.render();
          });
        }
      }
      let e2 = {
        compose: function(t10) {
          e$(eZ, "GraphLayout") && (ej(t10, "afterPrint", eQ), ej(t10, "beforePrint", eJ), ej(t10, "predraw", e0), ej(t10, "render", e1));
        },
        integrations: {},
        layouts: {}
      };
      var e3 = f(960), e5 = f.n(e3);
      let {
        seriesTypes: {
          bubble: {
            prototype: {
              pointClass: e8
            }
          }
        }
      } = P(), e6 = class extends e8 {
        destroy() {
          return this.series?.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes), t_().prototype.destroy.apply(this, arguments);
        }
        firePointEvent() {
          let t10 = this.series.options;
          if (this.isParentNode && t10.parentNode) {
            let e10 = t10.allowPointSelect;
            t10.allowPointSelect = t10.parentNode.allowPointSelect, t_().prototype.firePointEvent.apply(this, arguments), t10.allowPointSelect = e10;
          } else t_().prototype.firePointEvent.apply(this, arguments);
        }
        select() {
          let t10 = this.series.chart;
          this.isParentNode ? (t10.getSelectedPoints = t10.getSelectedParentNodes, t_().prototype.select.apply(this, arguments), t10.getSelectedPoints = e5().prototype.getSelectedPoints) : t_().prototype.select.apply(this, arguments);
        }
      }, {
        isNumber: e4
      } = y(), e9 = {
        attractive: function(t10, e10, i10) {
          let s10 = t10.getMass(), o2 = -i10.x * e10 * this.diffTemperature, a2 = -i10.y * e10 * this.diffTemperature;
          t10.fromNode.fixedPosition || (t10.fromNode.plotX -= o2 * s10.fromNode / t10.fromNode.degree, t10.fromNode.plotY -= a2 * s10.fromNode / t10.fromNode.degree), t10.toNode.fixedPosition || (t10.toNode.plotX += o2 * s10.toNode / t10.toNode.degree, t10.toNode.plotY += a2 * s10.toNode / t10.toNode.degree);
        },
        attractiveForceFunction: function(t10, e10) {
          return (e10 - t10) / t10;
        },
        barycenter: function() {
          let t10 = this.options.gravitationalConstant || 0, e10 = (this.barycenter.xFactor - (this.box.left + this.box.width) / 2) * t10, i10 = (this.barycenter.yFactor - (this.box.top + this.box.height) / 2) * t10;
          this.nodes.forEach(function(t11) {
            t11.fixedPosition || (t11.plotX -= e10 / t11.mass / t11.degree, t11.plotY -= i10 / t11.mass / t11.degree);
          });
        },
        getK: function(t10) {
          return Math.pow(t10.box.width * t10.box.height / t10.nodes.length, 0.5);
        },
        integrate: function(t10, e10) {
          let i10 = -t10.options.friction, s10 = t10.options.maxSpeed, o2 = e10.prevX, a2 = e10.prevY, r2 = (e10.plotX + e10.dispX - o2) * i10, n2 = (e10.plotY + e10.dispY - a2) * i10, l2 = Math.abs, h2 = l2(r2) / (r2 || 1), p2 = l2(n2) / (n2 || 1), d2 = h2 * Math.min(s10, Math.abs(r2)), c2 = p2 * Math.min(s10, Math.abs(n2));
          e10.prevX = e10.plotX + e10.dispX, e10.prevY = e10.plotY + e10.dispY, e10.plotX += d2, e10.plotY += c2, e10.temperature = t10.vectorLength({
            x: d2,
            y: c2
          });
        },
        repulsive: function(t10, e10, i10) {
          let s10 = e10 * this.diffTemperature / t10.mass / t10.degree;
          t10.fixedPosition || (t10.plotX += i10.x * s10, t10.plotY += i10.y * s10);
        },
        repulsiveForceFunction: function(t10, e10) {
          return (e10 - t10) / t10 * +(e10 > t10);
        }
      }, {
        noop: e7
      } = y(), it = {
        barycenter: function() {
          let t10, e10, i10 = this.options.gravitationalConstant || 0, s10 = this.box, o2 = this.nodes, a2 = Math.sqrt(o2.length);
          for (let r2 of o2) if (!r2.fixedPosition) {
            let o3 = r2.mass * a2, n2 = r2.plotX || 0, l2 = r2.plotY || 0, h2 = r2.series, p2 = h2.parentNode;
            this.resolveSplitSeries(r2) && p2 && !r2.isParentNode ? (t10 = p2.plotX || 0, e10 = p2.plotY || 0) : (t10 = s10.width / 2, e10 = s10.height / 2), r2.plotX = n2 - (n2 - t10) * i10 / o3, r2.plotY = l2 - (l2 - e10) * i10 / o3, h2.chart.hoverPoint === r2 && h2.redrawHalo && h2.halo && h2.redrawHalo(r2);
          }
        },
        getK: e7,
        integrate: e9.integrate,
        repulsive: function(t10, e10, i10, s10) {
          let o2 = e10 * this.diffTemperature / t10.mass / t10.degree, a2 = i10.x * o2, r2 = i10.y * o2;
          t10.fixedPosition || (t10.plotX += a2, t10.plotY += r2), s10.fixedPosition || (s10.plotX -= a2, s10.plotY -= r2);
        },
        repulsiveForceFunction: function(t10, e10, i10, s10) {
          return Math.min(t10, (i10.marker.radius + s10.marker.radius) / 2);
        }
      }, ie = {
        attractive: function(t10, e10, i10, s10) {
          let o2 = t10.getMass(), a2 = i10.x / s10 * e10, r2 = i10.y / s10 * e10;
          t10.fromNode.fixedPosition || (t10.fromNode.dispX -= a2 * o2.fromNode / t10.fromNode.degree, t10.fromNode.dispY -= r2 * o2.fromNode / t10.fromNode.degree), t10.toNode.fixedPosition || (t10.toNode.dispX += a2 * o2.toNode / t10.toNode.degree, t10.toNode.dispY += r2 * o2.toNode / t10.toNode.degree);
        },
        attractiveForceFunction: function(t10, e10) {
          return t10 * t10 / e10;
        },
        barycenter: function() {
          let t10 = this.options.gravitationalConstant, e10 = this.barycenter.xFactor, i10 = this.barycenter.yFactor;
          this.nodes.forEach(function(s10) {
            if (!s10.fixedPosition) {
              let o2 = s10.getDegree(), a2 = o2 * (1 + o2 / 2);
              s10.dispX += (e10 - s10.plotX) * t10 * a2 / s10.degree, s10.dispY += (i10 - s10.plotY) * t10 * a2 / s10.degree;
            }
          });
        },
        getK: function(t10) {
          return Math.pow(t10.box.width * t10.box.height / t10.nodes.length, 0.3);
        },
        integrate: function(t10, e10) {
          e10.dispX += e10.dispX * t10.options.friction, e10.dispY += e10.dispY * t10.options.friction;
          let i10 = e10.temperature = t10.vectorLength({
            x: e10.dispX,
            y: e10.dispY
          });
          0 !== i10 && (e10.plotX += e10.dispX / i10 * Math.min(Math.abs(e10.dispX), t10.temperature), e10.plotY += e10.dispY / i10 * Math.min(Math.abs(e10.dispY), t10.temperature));
        },
        repulsive: function(t10, e10, i10, s10) {
          t10.dispX += i10.x / s10 * e10 / t10.degree, t10.dispY += i10.y / s10 * e10 / t10.degree;
        },
        repulsiveForceFunction: function(t10, e10) {
          return e10 * e10 / t10;
        }
      };
      class ii {
        constructor(t10) {
          this.body = false, this.isEmpty = false, this.isInternal = false, this.nodes = [], this.box = t10, this.boxSize = Math.min(t10.width, t10.height);
        }
        divideBox() {
          let t10 = this.box.width / 2, e10 = this.box.height / 2;
          this.nodes[0] = new ii({
            left: this.box.left,
            top: this.box.top,
            width: t10,
            height: e10
          }), this.nodes[1] = new ii({
            left: this.box.left + t10,
            top: this.box.top,
            width: t10,
            height: e10
          }), this.nodes[2] = new ii({
            left: this.box.left + t10,
            top: this.box.top + e10,
            width: t10,
            height: e10
          }), this.nodes[3] = new ii({
            left: this.box.left,
            top: this.box.top + e10,
            width: t10,
            height: e10
          });
        }
        getBoxPosition(t10) {
          let e10 = t10.plotX < this.box.left + this.box.width / 2, i10 = t10.plotY < this.box.top + this.box.height / 2;
          return e10 ? 3 * !i10 : i10 ? 1 : 2;
        }
        insert(t10, e10) {
          let i10;
          this.isInternal ? this.nodes[this.getBoxPosition(t10)].insert(t10, e10 - 1) : (this.isEmpty = false, this.body ? e10 ? (this.isInternal = true, this.divideBox(), true !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, e10 - 1), this.body = true), this.nodes[this.getBoxPosition(t10)].insert(t10, e10 - 1)) : ((i10 = new ii({
            top: t10.plotX || NaN,
            left: t10.plotY || NaN,
            width: 0.1,
            height: 0.1
          })).body = t10, i10.isInternal = false, this.nodes.push(i10)) : (this.isInternal = false, this.body = t10));
        }
        updateMassAndCenter() {
          let t10 = 0, e10 = 0, i10 = 0;
          if (this.isInternal) {
            for (let s10 of this.nodes) s10.isEmpty || (t10 += s10.mass, e10 += s10.plotX * s10.mass, i10 += s10.plotY * s10.mass);
            e10 /= t10, i10 /= t10;
          } else this.body && (t10 = this.body.mass, e10 = this.body.plotX, i10 = this.body.plotY);
          this.mass = t10, this.plotX = e10, this.plotY = i10;
        }
      }
      let is = class {
        constructor(t10, e10, i10, s10) {
          this.box = {
            left: t10,
            top: e10,
            width: i10,
            height: s10
          }, this.maxDepth = 25, this.root = new ii(this.box), this.root.isInternal = true, this.root.isRoot = true, this.root.divideBox();
        }
        calculateMassAndCenter() {
          this.visitNodeRecursive(null, null, function(t10) {
            t10.updateMassAndCenter();
          });
        }
        insertNodes(t10) {
          for (let e10 of t10) this.root.insert(e10, this.maxDepth);
        }
        visitNodeRecursive(t10, e10, i10) {
          let s10;
          if (t10 || (t10 = this.root), t10 === this.root && e10 && (s10 = e10(t10)), false !== s10) {
            for (let o2 of t10.nodes) {
              if (o2.isInternal) {
                if (e10 && (s10 = e10(o2)), false === s10) continue;
                this.visitNodeRecursive(o2, e10, i10);
              } else o2.body && e10 && e10(o2.body);
              i10 && i10(o2);
            }
            t10 === this.root && i10 && i10(t10);
          }
        }
      }, {
        win: io
      } = y(), {
        clamp: ia,
        defined: ir,
        isFunction: il,
        fireEvent: ih,
        pick: ip
      } = y();
      class id {
        constructor() {
          this.box = {}, this.currentStep = 0, this.initialRendering = true, this.links = [], this.nodes = [], this.series = [], this.simulation = false;
        }
        static compose(t10) {
          e2.compose(t10), e2.integrations.euler = ie, e2.integrations.verlet = e9, e2.layouts["reingold-fruchterman"] = id;
        }
        init(t10) {
          this.options = t10, this.nodes = [], this.links = [], this.series = [], this.box = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          }, this.setInitialRendering(true), this.integration = e2.integrations[t10.integration], this.enableSimulation = t10.enableSimulation, this.attractiveForce = ip(t10.attractiveForce, this.integration.attractiveForceFunction), this.repulsiveForce = ip(t10.repulsiveForce, this.integration.repulsiveForceFunction), this.approximation = t10.approximation;
        }
        updateSimulation(t10) {
          this.enableSimulation = ip(t10, this.options.enableSimulation);
        }
        start() {
          let t10 = this.series, e10 = this.options;
          this.currentStep = 0, this.forces = t10[0] && t10[0].forces || [], this.chart = t10[0] && t10[0].chart, this.initialRendering && (this.initPositions(), t10.forEach(function(t11) {
            t11.finishedAnimating = true, t11.render();
          })), this.setK(), this.resetSimulation(e10), this.enableSimulation && this.step();
        }
        step() {
          let t10 = this.series;
          for (let t11 of (this.currentStep++, "barnes-hut" === this.approximation && (this.createQuadTree(), this.quadTree.calculateMassAndCenter()), this.forces || [])) this[t11 + "Forces"](this.temperature);
          if (this.applyLimits(), this.temperature = this.coolDown(this.startTemperature, this.diffTemperature, this.currentStep), this.prevSystemTemperature = this.systemTemperature, this.systemTemperature = this.getSystemTemperature(), this.enableSimulation) {
            for (let e10 of t10) e10.chart && e10.render();
            this.maxIterations-- && isFinite(this.temperature) && !this.isStable() ? (this.simulation && io.cancelAnimationFrame(this.simulation), this.simulation = io.requestAnimationFrame(() => this.step())) : (this.simulation = false, this.series.forEach((t11) => {
              ih(t11, "afterSimulation");
            }));
          }
        }
        stop() {
          this.simulation && io.cancelAnimationFrame(this.simulation);
        }
        setArea(t10, e10, i10, s10) {
          this.box = {
            left: t10,
            top: e10,
            width: i10,
            height: s10
          };
        }
        setK() {
          this.k = this.options.linkLength || this.integration.getK(this);
        }
        addElementsToCollection(t10, e10) {
          for (let i10 of t10) -1 === e10.indexOf(i10) && e10.push(i10);
        }
        removeElementFromCollection(t10, e10) {
          let i10 = e10.indexOf(t10);
          -1 !== i10 && e10.splice(i10, 1);
        }
        clear() {
          this.nodes.length = 0, this.links.length = 0, this.series.length = 0, this.resetSimulation();
        }
        resetSimulation() {
          this.forcedStop = false, this.systemTemperature = 0, this.setMaxIterations(), this.setTemperature(), this.setDiffTemperature();
        }
        restartSimulation() {
          this.simulation ? this.resetSimulation() : (this.setInitialRendering(false), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(true));
        }
        setMaxIterations(t10) {
          this.maxIterations = ip(t10, this.options.maxIterations);
        }
        setTemperature() {
          this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
        }
        setDiffTemperature() {
          this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
        }
        setInitialRendering(t10) {
          this.initialRendering = t10;
        }
        createQuadTree() {
          this.quadTree = new is(this.box.left, this.box.top, this.box.width, this.box.height), this.quadTree.insertNodes(this.nodes);
        }
        initPositions() {
          let t10 = this.options.initialPositions;
          if (il(t10)) for (let e10 of (t10.call(this), this.nodes)) ir(e10.prevX) || (e10.prevX = e10.plotX), ir(e10.prevY) || (e10.prevY = e10.plotY), e10.dispX = 0, e10.dispY = 0;
          else "circle" === t10 ? this.setCircularPositions() : this.setRandomPositions();
        }
        setCircularPositions() {
          let t10, e10 = this.box, i10 = this.nodes, s10 = 2 * Math.PI / (i10.length + 1), o2 = i10.filter(function(t11) {
            return 0 === t11.linksTo.length;
          }), a2 = {}, r2 = this.options.initialPositionRadius, n2 = (t11) => {
            for (let e11 of t11.linksFrom || []) a2[e11.toNode.id] || (a2[e11.toNode.id] = true, l2.push(e11.toNode), n2(e11.toNode));
          }, l2 = [];
          for (let t11 of o2) l2.push(t11), n2(t11);
          if (l2.length) for (let t11 of i10) -1 === l2.indexOf(t11) && l2.push(t11);
          else l2 = i10;
          for (let i11 = 0, o3 = l2.length; i11 < o3; ++i11) (t10 = l2[i11]).plotX = t10.prevX = ip(t10.plotX, e10.width / 2 + r2 * Math.cos(i11 * s10)), t10.plotY = t10.prevY = ip(t10.plotY, e10.height / 2 + r2 * Math.sin(i11 * s10)), t10.dispX = 0, t10.dispY = 0;
        }
        setRandomPositions() {
          let t10, e10 = this.box, i10 = this.nodes, s10 = i10.length + 1, o2 = (t11) => {
            let e11 = t11 * t11 / Math.PI;
            return e11 - Math.floor(e11);
          };
          for (let a2 = 0, r2 = i10.length; a2 < r2; ++a2) (t10 = i10[a2]).plotX = t10.prevX = ip(t10.plotX, e10.width * o2(a2)), t10.plotY = t10.prevY = ip(t10.plotY, e10.height * o2(s10 + a2)), t10.dispX = 0, t10.dispY = 0;
        }
        force(t10, ...e10) {
          this.integration[t10].apply(this, e10);
        }
        barycenterForces() {
          this.getBarycenter(), this.force("barycenter");
        }
        getBarycenter() {
          let t10 = 0, e10 = 0, i10 = 0;
          for (let s10 of this.nodes) e10 += s10.plotX * s10.mass, i10 += s10.plotY * s10.mass, t10 += s10.mass;
          return this.barycenter = {
            x: e10,
            y: i10,
            xFactor: e10 / t10,
            yFactor: i10 / t10
          }, this.barycenter;
        }
        barnesHutApproximation(t10, e10) {
          let i10, s10, o2 = this.getDistXY(t10, e10), a2 = this.vectorLength(o2);
          return t10 !== e10 && 0 !== a2 && (e10.isInternal ? e10.boxSize / a2 < this.options.theta && 0 !== a2 ? (s10 = this.repulsiveForce(a2, this.k), this.force("repulsive", t10, s10 * e10.mass, o2, a2), i10 = false) : i10 = true : (s10 = this.repulsiveForce(a2, this.k), this.force("repulsive", t10, s10 * e10.mass, o2, a2))), i10;
        }
        repulsiveForces() {
          if ("barnes-hut" === this.approximation) for (let t10 of this.nodes) this.quadTree.visitNodeRecursive(null, (e10) => this.barnesHutApproximation(t10, e10));
          else {
            let t10, e10, i10;
            for (let s10 of this.nodes) for (let o2 of this.nodes) s10 === o2 || s10.fixedPosition || (i10 = this.getDistXY(s10, o2), 0 !== (e10 = this.vectorLength(i10)) && (t10 = this.repulsiveForce(e10, this.k), this.force("repulsive", s10, t10 * o2.mass, i10, e10)));
          }
        }
        attractiveForces() {
          let t10, e10, i10;
          for (let s10 of this.links) s10.fromNode && s10.toNode && (t10 = this.getDistXY(s10.fromNode, s10.toNode), 0 !== (e10 = this.vectorLength(t10)) && (i10 = this.attractiveForce(e10, this.k), this.force("attractive", s10, i10, t10, e10)));
        }
        applyLimits() {
          for (let t10 of this.nodes) !t10.fixedPosition && (this.integration.integrate(this, t10), this.applyLimitBox(t10, this.box), t10.dispX = 0, t10.dispY = 0);
        }
        applyLimitBox(t10, e10) {
          let i10 = t10.radius;
          t10.plotX = ia(t10.plotX, e10.left + i10, e10.width - i10), t10.plotY = ia(t10.plotY, e10.top + i10, e10.height - i10);
        }
        coolDown(t10, e10, i10) {
          return t10 - e10 * i10;
        }
        isStable() {
          return 1e-5 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || this.temperature <= 0;
        }
        getSystemTemperature() {
          let t10 = 0;
          for (let e10 of this.nodes) t10 += e10.temperature;
          return t10;
        }
        vectorLength(t10) {
          return Math.sqrt(t10.x * t10.x + t10.y * t10.y);
        }
        getDistR(t10, e10) {
          let i10 = this.getDistXY(t10, e10);
          return this.vectorLength(i10);
        }
        getDistXY(t10, e10) {
          let i10 = t10.plotX - e10.plotX, s10 = t10.plotY - e10.plotY;
          return {
            x: i10,
            y: s10,
            absX: Math.abs(i10),
            absY: Math.abs(s10)
          };
        }
      }
      let ic = id, {
        addEvent: iu,
        defined: ig,
        pick: im
      } = y();
      function ib() {
        let t10 = this.series, e10 = [];
        return t10.forEach((t11) => {
          t11.parentNode && t11.parentNode.selected && e10.push(t11.parentNode);
        }), e10;
      }
      function iy() {
        this.allDataPoints && delete this.allDataPoints;
      }
      class ix extends ic {
        constructor() {
          super(...arguments), this.index = NaN, this.nodes = [], this.series = [];
        }
        static compose(t10) {
          ic.compose(t10), e2.integrations.packedbubble = it, e2.layouts.packedbubble = ix;
          let e10 = t10.prototype;
          e10.getSelectedParentNodes || (iu(t10, "beforeRedraw", iy), e10.getSelectedParentNodes = ib), e10.allParentNodes || (e10.allParentNodes = []);
        }
        beforeStep() {
          this.options.marker && this.series.forEach((t10) => {
            t10 && t10.calculateParentRadius();
          });
        }
        isStable() {
          let t10 = Math.abs(this.prevSystemTemperature - this.systemTemperature);
          return 1 > Math.abs(10 * this.systemTemperature / Math.sqrt(this.nodes.length)) && t10 < 1e-5 || this.temperature <= 0;
        }
        setCircularPositions() {
          let t10 = this.box, e10 = [...this.nodes, ...this?.chart?.allParentNodes || []], i10 = 2 * Math.PI / (e10.length + 1), s10 = this.options.initialPositionRadius, o2, a2, r2 = 0;
          for (let n2 of e10) this.resolveSplitSeries(n2) && !n2.isParentNode ? (o2 = n2.series.parentNode.plotX, a2 = n2.series.parentNode.plotY) : (o2 = t10.width / 2, a2 = t10.height / 2), n2.plotX = n2.prevX = im(n2.plotX, o2 + s10 * Math.cos(n2.index || r2 * i10)), n2.plotY = n2.prevY = im(n2.plotY, a2 + s10 * Math.sin(n2.index || r2 * i10)), n2.dispX = 0, n2.dispY = 0, r2++;
        }
        repulsiveForces() {
          let {
            options: t10,
            k: e10
          } = this, {
            bubblePadding: i10 = 0,
            seriesInteraction: s10
          } = t10, o2 = [...this.nodes, ...this?.chart?.allParentNodes || []];
          for (let t11 of o2) {
            let a2 = t11.series, r2 = t11.fixedPosition, n2 = (t11.marker?.radius || 0) + i10;
            for (let i11 of (t11.degree = t11.mass, t11.neighbours = 0, o2)) {
              let o3 = i11.series;
              if (t11 !== i11 && !r2 && (s10 || a2 === o3) && !(a2 === o3 && (i11.isParentNode || t11.isParentNode))) {
                let s11, o4 = this.getDistXY(t11, i11), a3 = this.vectorLength(o4) - (n2 + (i11.marker?.radius || 0));
                a3 < 0 && (t11.degree += 0.01, s11 = this.repulsiveForce(-a3 / Math.sqrt(++t11.neighbours), e10, t11, i11) * i11.mass), this.force("repulsive", t11, s11 || 0, o4, i11, a3);
              }
            }
          }
        }
        resolveSplitSeries(t10) {
          let e10 = t10.series?.options?.layoutAlgorithm?.splitSeries;
          return !ig(e10) && t10.series.chart?.options?.plotOptions?.packedbubble?.layoutAlgorithm?.splitSeries || e10 || false;
        }
        applyLimitBox(t10, e10) {
          let i10, s10;
          this.resolveSplitSeries(t10) && !t10.isParentNode && this.options.parentNodeLimit && (i10 = this.getDistXY(t10, t10.series.parentNode), (s10 = t10.series.parentNodeRadius - t10.marker.radius - this.vectorLength(i10)) < 0 && s10 > -2 * t10.marker.radius && (t10.plotX -= 0.01 * i10.x, t10.plotY -= 0.01 * i10.y)), super.applyLimitBox(t10, e10);
        }
      }
      e2.layouts.packedbubble = ix;
      let {
        merge: iP,
        syncTimeout: iv
      } = y(), {
        animObject: iM
      } = y();
      var iL = f(28), ik = f.n(iL);
      let {
        deg2rad: iw
      } = y(), {
        addEvent: iA,
        merge: iS,
        uniqueKey: iN,
        defined: iT,
        extend: iC
      } = y();
      function iX(t10, e10) {
        e10 = iS(true, {
          enabled: true,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, e10);
        let i10 = this.renderer.url, s10 = this.text || this, o2 = s10.textPath, {
          attributes: a2,
          enabled: r2
        } = e10;
        if (t10 = t10 || o2 && o2.path, o2 && o2.undo(), t10 && r2) {
          let e11 = iA(s10, "afterModifyTree", (e12) => {
            if (t10 && r2) {
              let o3 = t10.attr("id");
              o3 || t10.attr("id", o3 = iN());
              let r3 = {
                x: 0,
                y: 0
              };
              iT(a2.dx) && (r3.dx = a2.dx, delete a2.dx), iT(a2.dy) && (r3.dy = a2.dy, delete a2.dy), s10.attr(r3), this.attr({
                transform: ""
              }), this.box && (this.box = this.box.destroy());
              let n2 = e12.nodes.slice(0);
              e12.nodes.length = 0, e12.nodes[0] = {
                tagName: "textPath",
                attributes: iC(a2, {
                  "text-anchor": a2.textAnchor,
                  href: `${i10}#${o3}`
                }),
                children: n2
              };
            }
          });
          s10.textPath = {
            path: t10,
            undo: e11
          };
        } else s10.attr({
          dx: 0,
          dy: 0
        }), delete s10.textPath;
        return this.added && (s10.textCache = "", this.renderer.buildText(s10)), this;
      }
      function iY(t10) {
        let e10 = t10.bBox, i10 = this.element?.querySelector("textPath");
        if (i10) {
          let t11 = [], {
            b: s10,
            h: o2
          } = this.renderer.fontMetrics(this.element), a2 = o2 - s10, r2 = RegExp('(<tspan>|<tspan(?!\\sclass="highcharts-br")[^>]*>|<\\/tspan>)', "g"), n2 = i10.innerHTML.replace(r2, "").split(/<tspan class="highcharts-br"[^>]*>/), l2 = n2.length, h2 = (t12, e11) => {
            let {
              x: o3,
              y: r3
            } = e11, n3 = (i10.getRotationOfChar(t12) - 90) * iw, l3 = Math.cos(n3), h3 = Math.sin(n3);
            return [[o3 - a2 * l3, r3 - a2 * h3], [o3 + s10 * l3, r3 + s10 * h3]];
          };
          for (let e11 = 0, s11 = 0; s11 < l2; s11++) {
            let o3 = n2[s11].length;
            for (let a3 = 0; a3 < o3; a3 += 5) try {
              let o4 = e11 + a3 + s11, [r3, n3] = h2(o4, i10.getStartPositionOfChar(o4));
              0 === a3 ? (t11.push(n3), t11.push(r3)) : (0 === s11 && t11.unshift(n3), s11 === l2 - 1 && t11.push(r3));
            } catch (t12) {
              break;
            }
            e11 += o3 - 1;
            try {
              let o4 = e11 + s11, a3 = i10.getEndPositionOfChar(o4), [r3, n3] = h2(o4, a3);
              t11.unshift(n3), t11.unshift(r3);
            } catch (t12) {
              break;
            }
          }
          t11.length && t11.push(t11[0].slice()), e10.polygon = t11;
        }
        return e10;
      }
      function iI(t10) {
        let e10 = t10.labelOptions, i10 = t10.point, s10 = e10[i10.formatPrefix + "TextPath"] || e10.textPath;
        s10 && !e10.useHTML && (this.setTextPath(i10.getDataLabelPath?.(this) || i10.graphic, s10), i10.dataLabelPath && !s10.enabled && (i10.dataLabelPath = i10.dataLabelPath.destroy()));
      }
      let {
        parse: iR
      } = eF(), {
        noop: iE
      } = y(), {
        series: {
          prototype: iz
        },
        seriesTypes: {
          bubble: iD
        }
      } = P(), {
        initDataLabels: iO,
        initDataLabelsDefer: iH
      } = {
        initDataLabels: function() {
          let t10 = this.options.dataLabels;
          if (!this.dataLabelsGroup) {
            let e10 = this.initDataLabelsGroup();
            return !this.chart.styledMode && t10?.style && e10.css(t10.style), e10.attr({
              opacity: 0
            }), this.visible && e10.show(), e10;
          }
          return this.dataLabelsGroup.attr(iP({
            opacity: 1
          }, this.getPlotBox("data-labels"))), this.dataLabelsGroup;
        },
        initDataLabelsDefer: function() {
          let t10 = this.options.dataLabels;
          t10?.defer && this.options.layoutAlgorithm?.enableSimulation ? iv(() => {
            this.deferDataLabels = false;
          }, t10 ? iM(t10.animation).defer : 0) : this.deferDataLabels = false;
        }
      }, {
        addEvent: iB,
        clamp: iW,
        defined: iF,
        extend: iG,
        fireEvent: iq,
        isArray: iV,
        isNumber: i_,
        merge: iU,
        pick: iK
      } = y();
      ({
        compose: function(t10) {
          iA(t10, "afterGetBBox", iY), iA(t10, "beforeAddingDataLabel", iI);
          let e10 = t10.prototype;
          e10.setTextPath || (e10.setTextPath = iX);
        }
      }).compose(ik());
      class iZ extends iD {
        constructor() {
          super(...arguments), this.parentNodeMass = 0, this.deferDataLabels = true;
        }
        static compose(t10, e10, i10) {
          iD.compose(t10, e10, i10), eU.compose(e10), ix.compose(e10);
        }
        accumulateAllPoints() {
          let t10 = this.chart, e10 = [];
          for (let i10 of t10.series) if (i10.is("packedbubble") && i10.reserveSpace()) {
            let t11 = i10.getColumn("value");
            for (let s10 = 0; s10 < t11.length; s10++) e10.push([null, null, t11[s10], i10.index, s10, {
              id: s10,
              marker: {
                radius: 0
              }
            }]);
          }
          return e10;
        }
        addLayout() {
          let t10 = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {}, e10 = t10.type || "packedbubble", i10 = this.chart.options.chart, s10 = this.chart.graphLayoutsStorage, o2 = this.chart.graphLayoutsLookup, a2;
          s10 || (this.chart.graphLayoutsStorage = s10 = {}, this.chart.graphLayoutsLookup = o2 = []), (a2 = s10[e10]) || (t10.enableSimulation = iF(i10.forExport) ? !i10.forExport : t10.enableSimulation, s10[e10] = a2 = new e2.layouts[e10](), a2.init(t10), o2.splice(a2.index, 0, a2)), this.layout = a2, this.points.forEach((t11) => {
            t11.mass = 2, t11.degree = 1, t11.collisionNmb = 1;
          }), a2.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight), a2.addElementsToCollection([this], a2.series), a2.addElementsToCollection(this.points, a2.nodes);
        }
        addSeriesLayout() {
          let t10 = this.options.layoutAlgorithm = this.options.layoutAlgorithm || {}, e10 = t10.type || "packedbubble", i10 = this.chart.graphLayoutsStorage, s10 = this.chart.graphLayoutsLookup, o2 = iU(t10, t10.parentNodeOptions, {
            enableSimulation: this.layout.options.enableSimulation
          }), a2 = i10[e10 + "-series"];
          a2 || (i10[e10 + "-series"] = a2 = new e2.layouts[e10](), a2.init(o2), s10.splice(a2.index, 0, a2)), this.parentNodeLayout = a2, this.createParentNodes();
        }
        calculateParentRadius() {
          let t10 = this.seriesBox();
          this.parentNodeRadius = iW(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, t10 ? Math.max(Math.sqrt(Math.pow(t10.width, 2) + Math.pow(t10.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20), this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius);
        }
        calculateZExtremes() {
          let t10 = this.chart.series, e10 = this.options.zMin, i10 = this.options.zMax, s10 = 1 / 0, o2 = -1 / 0;
          return e10 && i10 ? [e10, i10] : (t10.forEach((t11) => {
            t11.getColumn("value").forEach((t12) => {
              iF(t12) && (t12 > o2 && (o2 = t12), t12 < s10 && (s10 = t12));
            });
          }), [e10 = iK(e10, s10), i10 = iK(i10, o2)]);
        }
        checkOverlap(t10, e10) {
          let i10 = t10[0] - e10[0], s10 = t10[1] - e10[1];
          return Math.sqrt(i10 * i10 + s10 * s10) - Math.abs(t10[2] + e10[2]) < -1e-3;
        }
        createParentNodes() {
          let t10 = this.pointClass, e10 = this.chart, i10 = this.parentNodeLayout, s10 = this.layout.options, o2, a2 = this.parentNode, r2 = {
            radius: this.parentNodeRadius,
            lineColor: this.color,
            fillColor: iR(this.color).brighten(0.4).get()
          };
          s10.parentNodeOptions && (r2 = iU(s10.parentNodeOptions.marker || {}, r2)), this.parentNodeMass = 0, this.points.forEach((t11) => {
            this.parentNodeMass += Math.PI * Math.pow(t11.marker.radius, 2);
          }), this.calculateParentRadius(), i10.nodes.forEach((t11) => {
            t11.seriesIndex === this.index && (o2 = true);
          }), i10.setArea(0, 0, e10.plotWidth, e10.plotHeight), o2 || (a2 || (a2 = new t10(this, {
            mass: this.parentNodeRadius / 2,
            marker: r2,
            dataLabels: {
              inside: false
            },
            states: {
              normal: {
                marker: r2
              },
              hover: {
                marker: r2
              }
            },
            dataLabelOnNull: true,
            degree: this.parentNodeRadius,
            isParentNode: true,
            seriesIndex: this.index
          }), this.chart.allParentNodes.push(a2)), this.parentNode && (a2.plotX = this.parentNode.plotX, a2.plotY = this.parentNode.plotY), this.parentNode = a2, i10.addElementsToCollection([this], i10.series), i10.addElementsToCollection([a2], i10.nodes));
        }
        deferLayout() {
          let t10 = this.options.layoutAlgorithm;
          this.visible && (this.addLayout(), t10.splitSeries && this.addSeriesLayout());
        }
        destroy() {
          this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach((t10) => {
            t10.removeElementFromCollection(this, t10.series);
          }, this), this.parentNode && this.parentNodeLayout && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy())), iz.destroy.apply(this, arguments);
        }
        drawDataLabels() {
          !this.deferDataLabels && (iz.drawDataLabels.call(this, this.points), this.parentNode && (this.parentNode.formatPrefix = "parentNode", iz.drawDataLabels.call(this, [this.parentNode])));
        }
        drawGraph() {
          if (!this.layout || !this.layout.options.splitSeries) return;
          let t10 = this.chart, e10 = this.layout.options.parentNodeOptions.marker, i10 = {
            fill: e10.fillColor || iR(this.color).brighten(0.4).get(),
            opacity: e10.fillOpacity,
            stroke: e10.lineColor || this.color,
            "stroke-width": iK(e10.lineWidth, this.options.lineWidth)
          }, s10 = {};
          this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", this.visible ? "inherit" : "hidden", 0.1, t10.seriesGroup), this.group?.attr({
            zIndex: 2
          }), this.calculateParentRadius(), this.parentNode && iF(this.parentNode.plotX) && iF(this.parentNode.plotY) && iF(this.parentNodeRadius) && (s10 = iU({
            x: this.parentNode.plotX - this.parentNodeRadius,
            y: this.parentNode.plotY - this.parentNodeRadius,
            width: 2 * this.parentNodeRadius,
            height: 2 * this.parentNodeRadius
          }, i10), this.parentNode.graphic || (this.graph = this.parentNode.graphic = t10.renderer.symbol(i10.symbol).add(this.parentNodesGroup)), this.parentNode.graphic.attr(s10));
        }
        drawTracker() {
          let t10, e10 = this.parentNode;
          super.drawTracker(), e10 && (t10 = iV(e10.dataLabels) ? e10.dataLabels : e10.dataLabel ? [e10.dataLabel] : [], e10.graphic && (e10.graphic.element.point = e10), t10.forEach((t11) => {
            (t11.div || t11.element).point = e10;
          }));
        }
        getPointRadius() {
          let t10, e10, i10, s10, o2 = this.chart, a2 = o2.plotWidth, r2 = o2.plotHeight, n2 = this.options, l2 = n2.useSimulation, h2 = Math.min(a2, r2), p2 = {}, d2 = [], c2 = o2.allDataPoints || [], u2 = c2.length;
          ["minSize", "maxSize"].forEach((t11) => {
            let e11 = parseInt(n2[t11], 10), i11 = /%$/.test(n2[t11]);
            p2[t11] = i11 ? h2 * e11 / 100 : e11 * Math.sqrt(u2);
          }), o2.minRadius = t10 = p2.minSize / Math.sqrt(u2), o2.maxRadius = e10 = p2.maxSize / Math.sqrt(u2);
          let g2 = l2 ? this.calculateZExtremes() : [t10, e10];
          c2.forEach((o3, a3) => {
            i10 = l2 ? iW(o3[2], g2[0], g2[1]) : o3[2], 0 === (s10 = this.getRadius(g2[0], g2[1], t10, e10, i10)) && (s10 = null), c2[a3][2] = s10, d2.push(s10);
          }), this.radii = d2;
        }
        init() {
          return iz.init.apply(this, arguments), iH.call(this), this.eventsToUnbind.push(iB(this, "updatedData", function() {
            this.chart.series.forEach((t10) => {
              t10.type === this.type && (t10.isDirty = true);
            }, this);
          })), this;
        }
        onMouseUp(t10) {
          if (t10.fixedPosition && !t10.removed) {
            let e10, i10 = this.layout, s10 = this.parentNodeLayout;
            !t10.isParentNode && s10 && i10.options.dragBetweenSeries && s10.nodes.forEach((s11) => {
              t10 && t10.marker && s11 !== t10.series.parentNode && (e10 = i10.getDistXY(t10, s11), i10.vectorLength(e10) - s11.marker.radius - t10.marker.radius < 0 && (s11.series.addPoint(iU(t10.options, {
                plotX: t10.plotX,
                plotY: t10.plotY
              }), false), i10.removeElementFromCollection(t10, i10.nodes), t10.remove()));
            }), eU.onMouseUp.apply(this, arguments);
          }
        }
        placeBubbles(t10) {
          let e10 = this.checkOverlap, i10 = this.positionBubble, s10 = [], o2 = 1, a2 = 0, r2 = 0, n2, l2 = [], h2, p2 = t10.sort((t11, e11) => e11[2] - t11[2]);
          if (p2.length) {
            if (s10.push([[0, 0, p2[0][2], p2[0][3], p2[0][4]]]), p2.length > 1) for (s10.push([[0, 0 - p2[1][2] - p2[0][2], p2[1][2], p2[1][3], p2[1][4]]]), h2 = 2; h2 < p2.length; h2++) p2[h2][2] = p2[h2][2] || 1, e10(n2 = i10(s10[o2][a2], s10[o2 - 1][r2], p2[h2]), s10[o2][0]) ? (s10.push([]), r2 = 0, s10[o2 + 1].push(i10(s10[o2][a2], s10[o2][0], p2[h2])), o2++, a2 = 0) : o2 > 1 && s10[o2 - 1][r2 + 1] && e10(n2, s10[o2 - 1][r2 + 1]) ? (r2++, s10[o2].push(i10(s10[o2][a2], s10[o2 - 1][r2], p2[h2])), a2++) : (a2++, s10[o2].push(n2));
            this.chart.stages = s10, this.chart.rawPositions = [].concat.apply([], s10), this.resizeRadius(), l2 = this.chart.rawPositions;
          }
          return l2;
        }
        pointAttribs(t10, e10) {
          let i10 = this.options, s10 = t10 && t10.isParentNode, o2 = i10.marker;
          s10 && i10.layoutAlgorithm && i10.layoutAlgorithm.parentNodeOptions && (o2 = i10.layoutAlgorithm.parentNodeOptions.marker);
          let a2 = o2.fillOpacity, r2 = iz.pointAttribs.call(this, t10, e10);
          return 1 !== a2 && (r2["fill-opacity"] = a2), r2;
        }
        positionBubble(t10, e10, i10) {
          let s10 = Math.asin, o2 = Math.acos, a2 = Math.pow, r2 = Math.abs, n2 = (0, Math.sqrt)(a2(t10[0] - e10[0], 2) + a2(t10[1] - e10[1], 2)), l2 = o2((a2(n2, 2) + a2(i10[2] + e10[2], 2) - a2(i10[2] + t10[2], 2)) / (2 * (i10[2] + e10[2]) * n2)), h2 = s10(r2(t10[0] - e10[0]) / n2), p2 = (t10[1] - e10[1] < 0 ? 0 : Math.PI) + l2 + h2 * ((t10[0] - e10[0]) * (t10[1] - e10[1]) < 0 ? 1 : -1), d2 = Math.cos(p2), c2 = Math.sin(p2);
          return [e10[0] + (e10[2] + i10[2]) * c2, e10[1] - (e10[2] + i10[2]) * d2, i10[2], i10[3], i10[4]];
        }
        render() {
          let t10 = [];
          iz.render.apply(this, arguments), !this.options.dataLabels.allowOverlap && (this.data.forEach((e10) => {
            iV(e10.dataLabels) && e10.dataLabels.forEach((e11) => {
              t10.push(e11);
            });
          }), this.options.useSimulation && this.chart.hideOverlappingLabels(t10));
        }
        resizeRadius() {
          let t10, e10, i10, s10, o2, a2 = this.chart, r2 = a2.rawPositions, n2 = Math.min, l2 = Math.max, h2 = a2.plotLeft, p2 = a2.plotTop, d2 = a2.plotHeight, c2 = a2.plotWidth;
          for (let a3 of (t10 = i10 = Number.POSITIVE_INFINITY, e10 = s10 = Number.NEGATIVE_INFINITY, r2)) o2 = a3[2], t10 = n2(t10, a3[0] - o2), e10 = l2(e10, a3[0] + o2), i10 = n2(i10, a3[1] - o2), s10 = l2(s10, a3[1] + o2);
          let u2 = [e10 - t10, s10 - i10], g2 = [(c2 - h2) / u2[0], (d2 - p2) / u2[1]], f2 = n2.apply([], g2);
          if (Math.abs(f2 - 1) > 1e-10) {
            for (let t11 of r2) t11[2] *= f2;
            this.placeBubbles(r2);
          } else a2.diffY = d2 / 2 + p2 - i10 - (s10 - i10) / 2, a2.diffX = c2 / 2 + h2 - t10 - (e10 - t10) / 2;
        }
        seriesBox() {
          let t10, e10 = this.chart, i10 = this.data, s10 = Math.max, o2 = Math.min, a2 = [e10.plotLeft, e10.plotLeft + e10.plotWidth, e10.plotTop, e10.plotTop + e10.plotHeight];
          return i10.forEach((e11) => {
            iF(e11.plotX) && iF(e11.plotY) && e11.marker.radius && (t10 = e11.marker.radius, a2[0] = o2(a2[0], e11.plotX - t10), a2[1] = s10(a2[1], e11.plotX + t10), a2[2] = o2(a2[2], e11.plotY - t10), a2[3] = s10(a2[3], e11.plotY + t10));
          }), i_(a2.width / a2.height) ? a2 : null;
        }
        setVisible() {
          let t10 = this;
          iz.setVisible.apply(t10, arguments), t10.parentNodeLayout && t10.graph ? t10.visible ? (t10.graph.show(), t10.parentNode.dataLabel && t10.parentNode.dataLabel.show()) : (t10.graph.hide(), t10.parentNodeLayout.removeElementFromCollection(t10.parentNode, t10.parentNodeLayout.nodes), t10.parentNode.dataLabel && t10.parentNode.dataLabel.hide()) : t10.layout && (t10.visible ? t10.layout.addElementsToCollection(t10.points, t10.layout.nodes) : t10.points.forEach((e10) => {
            t10.layout.removeElementFromCollection(e10, t10.layout.nodes);
          }));
        }
        translate() {
          let t10, e10, i10, s10 = this.chart, o2 = this.data, a2 = this.index, r2 = this.options.useSimulation;
          for (let n2 of (this.generatePoints(), iF(s10.allDataPoints) || (s10.allDataPoints = this.accumulateAllPoints(), this.getPointRadius()), r2 ? i10 = s10.allDataPoints : (i10 = this.placeBubbles(s10.allDataPoints), this.options.draggable = false), i10)) n2[3] === a2 && (t10 = o2[n2[4]], e10 = iK(n2[2], void 0), r2 || (t10.plotX = n2[0] - s10.plotLeft + s10.diffX, t10.plotY = n2[1] - s10.plotTop + s10.diffY), i_(e10) && (t10.marker = iG(t10.marker, {
            radius: e10,
            width: 2 * e10,
            height: 2 * e10
          }), t10.radius = e10));
          r2 && this.deferLayout(), iq(this, "afterTranslate");
        }
      }
      iZ.defaultOptions = iU(iD.defaultOptions, {
        minSize: "10%",
        maxSize: "50%",
        sizeBy: "area",
        zoneAxis: "y",
        crisp: false,
        tooltip: {
          pointFormat: "Value: {point.value}"
        },
        draggable: true,
        useSimulation: true,
        parentNode: {
          allowPointSelect: false
        },
        dataLabels: {
          formatter: function() {
            let {
              numberFormatter: t10
            } = this.series.chart, {
              value: e10
            } = this.point;
            return e4(e10) ? t10(e10, -1) : "";
          },
          parentNodeFormatter: function() {
            return this.name || "";
          },
          parentNodeTextPath: {
            enabled: true
          },
          padding: 0,
          style: {
            transition: "opacity 2000ms"
          }
        },
        layoutAlgorithm: {
          initialPositions: "circle",
          initialPositionRadius: 20,
          bubblePadding: 5,
          parentNodeLimit: false,
          seriesInteraction: true,
          dragBetweenSeries: false,
          parentNodeOptions: {
            maxIterations: 400,
            gravitationalConstant: 0.03,
            maxSpeed: 50,
            initialPositionRadius: 100,
            seriesInteraction: true,
            marker: {
              fillColor: null,
              fillOpacity: 1,
              lineWidth: null,
              lineColor: null,
              symbol: "circle"
            }
          },
          enableSimulation: true,
          type: "packedbubble",
          integration: "packedbubble",
          maxIterations: 1e3,
          splitSeries: false,
          maxSpeed: 5,
          gravitationalConstant: 0.01,
          friction: -0.981
        },
        stickyTracking: false
      }), iG(iZ.prototype, {
        pointClass: e6,
        axisTypes: [],
        directTouch: true,
        forces: ["barycenter", "repulsive"],
        hasDraggableNodes: true,
        invertible: false,
        isCartesian: false,
        noSharedTooltip: true,
        pointArrayMap: ["value"],
        pointValKey: "value",
        requireSorting: false,
        trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"],
        initDataLabels: iO,
        alignDataLabel: iz.alignDataLabel,
        indexateNodes: iE,
        onMouseDown: eU.onMouseDown,
        onMouseMove: eU.onMouseMove,
        redrawHalo: eU.redrawHalo,
        searchPoint: iE
      }), P().registerSeriesType("packedbubble", iZ);
      let {
        noop: ij
      } = y(), {
        area: i$,
        line: iQ,
        scatter: iJ
      } = P().seriesTypes, {
        extend: i0,
        merge: i1
      } = y();
      class i2 extends iJ {
        getGraphPath() {
          let t10 = iQ.prototype.getGraphPath.call(this), e10 = t10.length + 1;
          for (; e10--; ) (e10 === t10.length || "M" === t10[e10][0]) && e10 > 0 && t10.splice(e10, 0, ["Z"]);
          return this.areaPath = t10, t10;
        }
        drawGraph() {
          this.options.fillColor = this.color, i$.prototype.drawGraph.call(this);
        }
      }
      i2.defaultOptions = i1(iJ.defaultOptions, {
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: false
            }
          }
        },
        stickyTracking: false,
        tooltip: {
          followPointer: true,
          pointFormat: ""
        },
        trackByArea: true,
        legendSymbol: "rectangle"
      }), i0(i2.prototype, {
        type: "polygon",
        drawTracker: iQ.prototype.drawTracker,
        setStackedPoints: ij
      }), P().registerSeriesType("polygon", i2);
      let i3 = {
        circular: {
          gridLineWidth: 1,
          labels: {
            align: void 0,
            x: 0,
            y: void 0
          },
          maxPadding: 0,
          minPadding: 0,
          showLastLabel: false,
          tickLength: 0
        },
        radial: {
          gridLineInterpolation: "circle",
          gridLineWidth: 1,
          labels: {
            align: "right",
            padding: 5,
            x: -3,
            y: -2
          },
          showLastLabel: false,
          title: {
            x: 4,
            text: null,
            rotation: 90
          }
        },
        radialGauge: {
          endOnTick: false,
          gridLineWidth: 0,
          labels: {
            align: "center",
            distance: -25,
            x: 0,
            y: void 0
          },
          lineWidth: 1,
          minorGridLineWidth: 0,
          minorTickInterval: "auto",
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickWidth: 1,
          startOnTick: false,
          tickLength: 10,
          tickPixelInterval: 100,
          tickPosition: "inside",
          tickWidth: 2,
          title: {
            rotation: 0,
            text: ""
          },
          zIndex: 2
        }
      }, {
        defaultOptions: i5
      } = y(), {
        composed: i8,
        noop: i6
      } = y(), {
        addEvent: i4,
        correctFloat: i9,
        defined: i7,
        extend: st,
        fireEvent: se,
        isObject: si,
        merge: ss,
        pick: so,
        pushUnique: sa,
        relativeLength: sr,
        wrap: sn
      } = y();
      !function(t10) {
        function e10() {
          this.autoConnect = this.isCircular && void 0 === so(this.userMax, this.options.max) && i9(this.endAngleRad - this.startAngleRad) === i9(2 * Math.PI), !this.isCircular && this.chart.inverted && this.max++, this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0);
        }
        function i10() {
          return () => {
            if (this.isRadial && this.tickPositions && this.options.labels && true !== this.options.labels.allowOverlap) return this.tickPositions.map((t11) => this.ticks[t11]?.label).filter((t11) => !!t11);
          };
        }
        function s10() {
          return i6;
        }
        function o2(t11, e11, i11) {
          let s11 = this.pane.center, o3 = t11.value, a3, r3, n3;
          return this.isCircular ? (i7(o3) ? t11.point && (t11.point.shapeArgs || {}).start && (o3 = this.chart.inverted ? this.translate(t11.point.rectPlotY, true) : t11.point.x) : (r3 = t11.chartX || 0, n3 = t11.chartY || 0, o3 = this.translate(Math.atan2(n3 - i11, r3 - e11) - this.startAngleRad, true)), r3 = (a3 = this.getPosition(o3)).x, n3 = a3.y) : (i7(o3) || (r3 = t11.chartX, n3 = t11.chartY), i7(r3) && i7(n3) && (i11 = s11[1] + this.chart.plotTop, o3 = this.translate(Math.min(Math.sqrt(Math.pow(r3 - e11, 2) + Math.pow(n3 - i11, 2)), s11[2] / 2) - s11[3] / 2, true))), [o3, r3 || 0, n3 || 0];
        }
        function a2(t11, e11, i11) {
          let s11 = this.pane.center, o3 = this.chart, a3 = this.left || 0, r3 = this.top || 0, n3, l3 = so(e11, s11[2] / 2 - this.offset), h3;
          return void 0 === i11 && (i11 = this.horiz ? 0 : this.center && -this.center[3] / 2), i11 && (l3 += i11), this.isCircular || void 0 !== e11 ? ((h3 = this.chart.renderer.symbols.arc(a3 + s11[0], r3 + s11[1], l3, l3, {
            start: this.startAngleRad,
            end: this.endAngleRad,
            open: true,
            innerR: 0
          })).xBounds = [a3 + s11[0]], h3.yBounds = [r3 + s11[1] - l3]) : (n3 = this.postTranslate(this.angleRad, l3), h3 = [["M", this.center[0] + o3.plotLeft, this.center[1] + o3.plotTop], ["L", n3.x, n3.y]]), h3;
        }
        function r2() {
          this.constructor.prototype.getOffset.call(this), this.chart.axisOffset[this.side] = 0;
        }
        function n2(t11, e11, i11) {
          let s11 = this.chart, o3 = (t12) => {
            if ("string" == typeof t12) {
              let e12 = parseInt(t12, 10);
              return d3.test(t12) && (e12 = e12 * n3 / 100), e12;
            }
            return t12;
          }, a3 = this.center, r3 = this.startAngleRad, n3 = a3[2] / 2, l3 = Math.min(this.offset, 0), h3 = this.left || 0, p3 = this.top || 0, d3 = /%$/, c3 = this.isCircular, u3, g3, f3, m3, b3, y2, x3 = so(o3(i11.outerRadius), n3), P3 = o3(i11.innerRadius), v3 = so(o3(i11.thickness), 10);
          if ("polygon" === this.options.gridLineInterpolation) y2 = this.getPlotLinePath({
            value: t11
          }).concat(this.getPlotLinePath({
            value: e11,
            reverse: true
          }));
          else {
            t11 = Math.max(t11, this.min), e11 = Math.min(e11, this.max);
            let o4 = this.translate(t11), n4 = this.translate(e11);
            c3 || (x3 = o4 || 0, P3 = n4 || 0), "circle" !== i11.shape && c3 ? (u3 = r3 + (o4 || 0), g3 = r3 + (n4 || 0)) : (u3 = -Math.PI / 2, g3 = 1.5 * Math.PI, b3 = true), x3 -= l3, v3 -= l3, y2 = s11.renderer.symbols.arc(h3 + a3[0], p3 + a3[1], x3, x3, {
              start: Math.min(u3, g3),
              end: Math.max(u3, g3),
              innerR: so(P3, x3 - v3),
              open: b3,
              borderRadius: i11.borderRadius
            }), c3 && (f3 = (g3 + u3) / 2, m3 = h3 + a3[0] + a3[2] / 2 * Math.cos(f3), y2.xBounds = f3 > -Math.PI / 2 && f3 < Math.PI / 2 ? [m3, s11.plotWidth] : [0, m3], y2.yBounds = [p3 + a3[1] + a3[2] / 2 * Math.sin(f3)], y2.yBounds[0] += f3 > -Math.PI && f3 < 0 || f3 > Math.PI ? -10 : 10);
          }
          return y2;
        }
        function l2(t11) {
          let e11 = this.pane.center, i11 = this.chart, s11 = i11.inverted, o3 = t11.reverse, a3 = this.pane.options.background ? this.pane.options.background[0] || this.pane.options.background : {}, r3 = a3.innerRadius || "0%", n3 = a3.outerRadius || "100%", l3 = e11[0] + i11.plotLeft, h3 = e11[1] + i11.plotTop, p3 = this.height, d3 = t11.isCrosshair, c3 = e11[3] / 2, u3 = t11.value, g3, f3, m3, b3, y2, x3, P3, v3, M3, L3 = this.getPosition(u3), k3 = L3.x, w3 = L3.y;
          if (d3 && (u3 = (v3 = this.getCrosshairPosition(t11, l3, h3))[0], k3 = v3[1], w3 = v3[2]), this.isCircular) f3 = Math.sqrt(Math.pow(k3 - l3, 2) + Math.pow(w3 - h3, 2)), m3 = "string" == typeof r3 ? sr(r3, 1) : r3 / f3, b3 = "string" == typeof n3 ? sr(n3, 1) : n3 / f3, e11 && c3 && (m3 < (g3 = c3 / f3) && (m3 = g3), b3 < g3 && (b3 = g3)), M3 = [["M", l3 + m3 * (k3 - l3), h3 - m3 * (h3 - w3)], ["L", k3 - (1 - b3) * (k3 - l3), w3 + (1 - b3) * (h3 - w3)]];
          else if ((u3 = this.translate(u3)) && (u3 < 0 || u3 > p3) && (u3 = 0), "circle" === this.options.gridLineInterpolation) M3 = this.getLinePath(0, u3, c3);
          else if (M3 = [], i11[s11 ? "yAxis" : "xAxis"].forEach((t12) => {
            t12.pane === this.pane && (y2 = t12);
          }), y2) {
            P3 = y2.tickPositions, y2.autoConnect && (P3 = P3.concat([P3[0]])), o3 && (P3 = P3.slice().reverse()), u3 && (u3 += c3);
            for (let t12 = 0; t12 < P3.length; t12++) x3 = y2.getPosition(P3[t12], u3), M3.push(t12 ? ["L", x3.x, x3.y] : ["M", x3.x, x3.y]);
          }
          return M3;
        }
        function h2(t11, e11) {
          let i11 = this.translate(t11);
          return this.postTranslate(this.isCircular ? i11 : this.angleRad, so(this.isCircular ? e11 : i11 < 0 ? 0 : i11, this.center[2] / 2) - this.offset);
        }
        function p2() {
          let t11 = this.center, e11 = this.chart, i11 = this.options.title;
          return {
            x: e11.plotLeft + t11[0] + (i11.x || 0),
            y: e11.plotTop + t11[1] - {
              high: 0.5,
              middle: 0.25,
              low: 0
            }[i11.align] * t11[2] + (i11.y || 0)
          };
        }
        function d2(t11) {
          t11.beforeSetTickPositions = e10, t11.createLabelCollector = i10, t11.getCrosshairPosition = o2, t11.getLinePath = a2, t11.getOffset = r2, t11.getPlotBandPath = n2, t11.getPlotLinePath = l2, t11.getPosition = h2, t11.getTitlePosition = p2, t11.postTranslate = v2, t11.setAxisSize = L2, t11.setAxisTranslation = k2, t11.setOptions = w2;
        }
        function c2() {
          let t11 = this.chart, e11 = this.options, i11 = t11.angular && this.isXAxis, s11 = this.pane, o3 = s11?.options;
          if (!i11 && s11 && (t11.angular || t11.polar)) {
            let t12 = 2 * Math.PI, i12 = (so(o3.startAngle, 0) - 90) * Math.PI / 180, s12 = (so(o3.endAngle, so(o3.startAngle, 0) + 360) - 90) * Math.PI / 180;
            this.angleRad = (e11.angle || 0) * Math.PI / 180, this.startAngleRad = i12, this.endAngleRad = s12, this.offset = e11.offset || 0;
            let a3 = (i12 % t12 + t12) % t12, r3 = (s12 % t12 + t12) % t12;
            a3 > Math.PI && (a3 -= t12), r3 > Math.PI && (r3 -= t12), this.normalizedStartAngleRad = a3, this.normalizedEndAngleRad = r3;
          }
        }
        function u2(t11) {
          this.isRadial && (t11.align = void 0, t11.preventDefault());
        }
        function g2() {
          if (this.chart?.labelCollectors) {
            let t11 = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
            t11 >= 0 && this.chart.labelCollectors.splice(t11, 1);
          }
        }
        function f2(t11) {
          let e11, i11 = this.chart, o3 = i11.angular, a3 = i11.polar, r3 = this.isXAxis, n3 = this.coll, l3 = t11.userOptions.pane || 0, h3 = this.pane = i11.pane && i11.pane[l3];
          if ("colorAxis" === n3) {
            this.isRadial = false;
            return;
          }
          if (o3) {
            if (o3 && r3) this.isHidden = true, this.createLabelCollector = s10, this.getOffset = i6, this.redraw = M2, this.render = M2, this.setScale = i6, this.setCategories = i6, this.setTitle = i6;
            else d2(this);
            e11 = !r3;
          } else a3 && (d2(this), e11 = this.horiz);
          o3 || a3 ? (this.isRadial = true, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && i11.labelCollectors.push(this.labelCollector)) : this.isRadial = false, h3 && e11 && (h3.axis = this), this.isCircular = e11;
        }
        function m2() {
          this.isRadial && this.beforeSetTickPositions();
        }
        function b2(t11) {
          let e11 = this.label;
          if (!e11) return;
          let i11 = this.axis, s11 = e11.getBBox(), o3 = i11.options.labels, a3 = (i11.translate(this.pos) + i11.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360, r3 = Math.round(a3), n3 = i7(o3.y) ? 0 : -(0.3 * s11.height), l3 = o3.y, h3, p3 = 20, d3 = o3.align, c3 = "end", u3 = r3 < 0 ? r3 + 360 : r3, g3 = u3, f3 = 0, m3 = 0;
          i11.isRadial && (h3 = i11.getPosition(this.pos, i11.center[2] / 2 + sr(so(o3.distance, -25), i11.center[2] / 2, -i11.center[2] / 2)), "auto" === o3.rotation ? e11.attr({
            rotation: a3
          }) : i7(l3) || (l3 = i11.chart.renderer.fontMetrics(e11).b - s11.height / 2), i7(d3) || (i11.isCircular ? (s11.width > i11.len * i11.tickInterval / (i11.max - i11.min) && (p3 = 0), d3 = a3 > p3 && a3 < 180 - p3 ? "left" : a3 > 180 + p3 && a3 < 360 - p3 ? "right" : "center") : d3 = "center", e11.attr({
            align: d3
          })), "auto" === d3 && 2 === i11.tickPositions.length && i11.isCircular && (u3 > 90 && u3 < 180 ? u3 = 180 - u3 : u3 > 270 && u3 <= 360 && (u3 = 540 - u3), g3 > 180 && g3 <= 360 && (g3 = 360 - g3), (i11.pane.options.startAngle === r3 || i11.pane.options.startAngle === r3 + 360 || i11.pane.options.startAngle === r3 - 360) && (c3 = "start"), d3 = r3 >= -90 && r3 <= 90 || r3 >= -360 && r3 <= -270 || r3 >= 270 && r3 <= 360 ? "start" === c3 ? "right" : "left" : "start" === c3 ? "left" : "right", g3 > 70 && g3 < 110 && (d3 = "center"), u3 < 15 || u3 >= 180 && u3 < 195 ? f3 = 0.3 * s11.height : u3 >= 15 && u3 <= 35 ? f3 = "start" === c3 ? 0 : 0.75 * s11.height : u3 >= 195 && u3 <= 215 ? f3 = "start" === c3 ? 0.75 * s11.height : 0 : u3 > 35 && u3 <= 90 ? f3 = "start" === c3 ? -(0.25 * s11.height) : s11.height : u3 > 215 && u3 <= 270 && (f3 = "start" === c3 ? s11.height : -(0.25 * s11.height)), g3 < 15 ? m3 = "start" === c3 ? -(0.15 * s11.height) : 0.15 * s11.height : g3 > 165 && g3 <= 180 && (m3 = "start" === c3 ? 0.15 * s11.height : -(0.15 * s11.height)), e11.attr({
            align: d3
          }), e11.translate(m3, f3 + n3)), t11.pos.x = h3.x + (o3.x || 0), t11.pos.y = h3.y + (l3 || 0));
        }
        function x2(t11) {
          this.axis.getPosition && st(t11.pos, this.axis.getPosition(this.pos));
        }
        function P2({
          options: e11
        }) {
          e11.xAxis && ss(true, t10.radialDefaultOptions.circular, e11.xAxis), e11.yAxis && ss(true, t10.radialDefaultOptions.radialGauge, e11.yAxis);
        }
        function v2(t11, e11) {
          let i11 = this.chart, s11 = this.center;
          return t11 = this.startAngleRad + t11, {
            x: i11.plotLeft + s11[0] + Math.cos(t11) * e11,
            y: i11.plotTop + s11[1] + Math.sin(t11) * e11
          };
        }
        function M2() {
          this.isDirty = false;
        }
        function L2() {
          let t11, e11;
          this.constructor.prototype.setAxisSize.call(this), this.isRadial && (this.pane.updateCenter(this), t11 = this.center = this.pane.center.slice(), this.isCircular ? this.sector = this.endAngleRad - this.startAngleRad : (e11 = this.postTranslate(this.angleRad, t11[3] / 2), t11[0] = e11.x - this.chart.plotLeft, t11[1] = e11.y - this.chart.plotTop), this.len = this.width = this.height = (t11[2] - t11[3]) * so(this.sector, 1) / 2);
        }
        function k2() {
          this.constructor.prototype.setAxisTranslation.call(this), this.center && (this.isCircular ? this.transA = (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.transA = (this.center[2] - this.center[3]) / 2 / (this.max - this.min || 1), this.isXAxis ? this.minPixelPadding = this.transA * this.minPointOffset : this.minPixelPadding = 0);
        }
        function w2(e11) {
          let {
            coll: i11
          } = this, {
            angular: s11,
            inverted: o3,
            polar: a3
          } = this.chart, r3 = {};
          s11 ? this.isXAxis || (r3 = ss(i5.yAxis, t10.radialDefaultOptions.radialGauge)) : a3 && (r3 = this.horiz ? ss(i5.xAxis, t10.radialDefaultOptions.circular) : ss("xAxis" === i11 ? i5.xAxis : i5.yAxis, t10.radialDefaultOptions.radial)), o3 && "yAxis" === i11 && (r3.stackLabels = si(i5.yAxis, true) ? i5.yAxis.stackLabels : {}, r3.reversedStacks = true);
          let n3 = this.options = ss(r3, e11);
          n3.plotBands || (n3.plotBands = []), se(this, "afterSetOptions");
        }
        function A2(t11, e11, i11, s11, o3, a3, r3) {
          let n3, l3, h3 = this.axis;
          return h3.isRadial ? ["M", e11, i11, "L", (n3 = h3.getPosition(this.pos, h3.center[2] / 2 + s11)).x, n3.y] : t11.call(this, e11, i11, s11, o3, a3, r3);
        }
        t10.radialDefaultOptions = ss(i3), t10.compose = function(t11, e11) {
          return sa(i8, "Axis.Radial") && (i4(t11, "afterInit", c2), i4(t11, "autoLabelAlign", u2), i4(t11, "destroy", g2), i4(t11, "init", f2), i4(t11, "initialAxisTranslation", m2), i4(e11, "afterGetLabelPosition", b2), i4(e11, "afterGetPosition", x2), i4(y(), "setOptions", P2), sn(e11.prototype, "getMarkPath", A2)), t11;
        };
      }(d || (d = {}));
      let sl = d, {
        animObject: sh
      } = y(), {
        composed: sp
      } = y(), {
        addEvent: sd,
        defined: sc,
        find: su,
        isNumber: sg,
        merge: sf,
        pick: sm,
        pushUnique: sb,
        relativeLength: sy,
        splat: sx,
        uniqueKey: sP,
        wrap: sv
      } = y();
      function sM() {
        (this.pane || []).forEach((t10) => {
          t10.render();
        });
      }
      function sL(t10) {
        let e10 = t10.args[0].xAxis, i10 = t10.args[0].yAxis, s10 = t10.args[0].chart;
        e10 && i10 && ("polygon" === i10.gridLineInterpolation ? (e10.startOnTick = true, e10.endOnTick = true) : "polygon" === e10.gridLineInterpolation && s10.inverted && (i10.startOnTick = true, i10.endOnTick = true));
      }
      function sk() {
        this.pane || (this.pane = []), this.options.pane = sx(this.options.pane || {}), this.options.pane.forEach((t10) => {
          new F(t10, this);
        }, this);
      }
      function sw(t10) {
        let e10 = t10.args.marker, i10 = this.chart.xAxis[0], s10 = this.chart.yAxis[0], o2 = this.chart.inverted, a2 = o2 ? s10 : i10, r2 = o2 ? i10 : s10;
        if (this.chart.polar) {
          t10.preventDefault();
          let i11 = (e10.attr ? e10.attr("start") : e10.start) - a2.startAngleRad, s11 = e10.attr ? e10.attr("r") : e10.r, o3 = (e10.attr ? e10.attr("end") : e10.end) - a2.startAngleRad, n2 = e10.attr ? e10.attr("innerR") : e10.innerR;
          t10.result.x = i11 + a2.pos, t10.result.width = o3 - i11, t10.result.y = r2.len + r2.pos - s11, t10.result.height = s11 - n2;
        }
      }
      function sA(t10) {
        let e10 = this.chart;
        if (e10.polar && e10.hoverPane && e10.hoverPane.axis) {
          t10.preventDefault();
          let i10 = e10.hoverPane.center, s10 = e10.mouseDownX || 0, o2 = e10.mouseDownY || 0, a2 = t10.args.chartY, r2 = t10.args.chartX, n2 = 2 * Math.PI, l2 = e10.hoverPane.axis.startAngleRad, h2 = e10.hoverPane.axis.endAngleRad, p2 = e10.inverted ? e10.xAxis[0] : e10.yAxis[0], d2 = {}, c2 = "arc";
          if (d2.x = i10[0] + e10.plotLeft, d2.y = i10[1] + e10.plotTop, this.zoomHor) {
            let t11 = l2 > 0 ? h2 - l2 : Math.abs(l2) + Math.abs(h2), u2 = Math.atan2(o2 - e10.plotTop - i10[1], s10 - e10.plotLeft - i10[0]) - l2, g2 = Math.atan2(a2 - e10.plotTop - i10[1], r2 - e10.plotLeft - i10[0]) - l2;
            d2.r = i10[2] / 2, d2.innerR = i10[3] / 2, u2 <= 0 && (u2 += n2), g2 <= 0 && (g2 += n2), g2 < u2 && (g2 = [u2, u2 = g2][0]), t11 < n2 && l2 + g2 > h2 + (n2 - t11) / 2 && (g2 = u2, u2 = l2 <= 0 ? l2 : 0);
            let f2 = d2.start = Math.max(u2 + l2, l2), m2 = d2.end = Math.min(g2 + l2, h2);
            if ("polygon" === p2.options.gridLineInterpolation) {
              let t12 = e10.hoverPane.axis, s11 = f2 - t12.startAngleRad + t12.pos, o3 = p2.getPlotLinePath({
                value: p2.max
              }), a3 = t12.toValue(s11), r3 = t12.toValue(s11 + (m2 - f2));
              if (a3 < t12.getExtremes().min) {
                let {
                  min: e11,
                  max: i11
                } = t12.getExtremes();
                a3 = i11 - (e11 - a3);
              }
              if (r3 < t12.getExtremes().min) {
                let {
                  min: e11,
                  max: i11
                } = t12.getExtremes();
                r3 = i11 - (e11 - r3);
              }
              r3 < a3 && (r3 = [a3, a3 = r3][0]), (o3 = sC(o3, a3, r3, t12)).push(["L", i10[0] + e10.plotLeft, e10.plotTop + i10[1]]), d2.d = o3, c2 = "path";
            }
          }
          if (this.zoomVert) {
            let t11 = e10.inverted ? e10.xAxis[0] : e10.yAxis[0], n3 = Math.sqrt(Math.pow(s10 - e10.plotLeft - i10[0], 2) + Math.pow(o2 - e10.plotTop - i10[1], 2)), p3 = Math.sqrt(Math.pow(r2 - e10.plotLeft - i10[0], 2) + Math.pow(a2 - e10.plotTop - i10[1], 2));
            if (p3 < n3 && (n3 = [p3, p3 = n3][0]), p3 > i10[2] / 2 && (p3 = i10[2] / 2), n3 < i10[3] / 2 && (n3 = i10[3] / 2), this.zoomHor || (d2.start = l2, d2.end = h2), d2.r = p3, d2.innerR = n3, "polygon" === t11.options.gridLineInterpolation) {
              let e11 = t11.toValue(t11.len + t11.pos - n3), i11 = t11.toValue(t11.len + t11.pos - p3);
              d2.d = t11.getPlotLinePath({
                value: i11
              }).concat(t11.getPlotLinePath({
                value: e11,
                reverse: true
              })), c2 = "path";
            }
          }
          if (this.zoomHor && this.zoomVert && "polygon" === p2.options.gridLineInterpolation) {
            let t11 = e10.hoverPane.axis, i11 = d2.start || 0, s11 = d2.end || 0, o3 = i11 - t11.startAngleRad + t11.pos, a3 = t11.toValue(o3), r3 = t11.toValue(o3 + (s11 - i11));
            if (d2.d instanceof Array) {
              let t12 = d2.d.slice(0, d2.d.length / 2), i12 = d2.d.slice(d2.d.length / 2, d2.d.length);
              i12 = [...i12].reverse();
              let s12 = e10.hoverPane.axis;
              t12 = sC(t12, a3, r3, s12), (i12 = sC(i12, a3, r3, s12)) && (i12[0][0] = "L"), i12 = [...i12].reverse(), d2.d = t12.concat(i12), c2 = "path";
            }
          }
          t10.attrs = d2, t10.shapeType = c2;
        }
      }
      function sS() {
        let t10 = this.chart;
        t10.polar && (this.polar = new sB(this), t10.inverted && (this.isRadialSeries = true, this.is("column") && (this.isRadialBar = true)));
      }
      function sN() {
        if (this.chart.polar && this.xAxis) {
          let {
            xAxis: t10,
            yAxis: e10
          } = this, i10 = this.chart;
          this.kdByAngle = i10.tooltip && i10.tooltip.shared, this.kdByAngle || i10.inverted ? this.searchPoint = sT : this.options.findNearestPointBy = "xy";
          let s10 = this.points, o2 = s10.length;
          for (; o2--; ) this.is("column") || this.is("columnrange") || this.polar.toXY(s10[o2]), i10.hasParallelCoordinates || this.yAxis.reversed || (sm(s10[o2].y, Number.MIN_VALUE) < e10.min || s10[o2].x < t10.min || s10[o2].x > t10.max ? (s10[o2].isNull = true, s10[o2].plotY = NaN) : s10[o2].isNull = s10[o2].isValid && !s10[o2].isValid());
          this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(sd(this, "afterRender", function() {
            let t11;
            i10.polar && false !== this.options.clip && (t11 = this.yAxis.pane.center, this.clipCircle ? this.clipCircle.animate({
              x: t11[0],
              y: t11[1],
              r: t11[2] / 2,
              innerR: t11[3] / 2
            }) : this.clipCircle = function(t12, e11, i11, s11, o3) {
              let a2 = sP(), r2 = t12.createElement("clipPath").attr({
                id: a2
              }).add(t12.defs), n2 = o3 ? t12.arc(e11, i11, s11, o3, 0, 2 * Math.PI).add(r2) : t12.circle(e11, i11, s11).add(r2);
              return n2.id = a2, n2.clipPath = r2, n2;
            }(i10.renderer, t11[0], t11[1], t11[2] / 2, t11[3] / 2), this.group.clip(this.clipCircle), this.setClip = y().noop);
          })));
        }
      }
      function sT(t10) {
        let e10 = this.chart, i10 = this.xAxis, s10 = this.yAxis, o2 = i10.pane && i10.pane.center, a2 = t10.chartX - (o2 && o2[0] || 0) - e10.plotLeft, r2 = t10.chartY - (o2 && o2[1] || 0) - e10.plotTop, n2 = e10.inverted ? {
          clientX: t10.chartX - s10.pos,
          plotY: t10.chartY - i10.pos
        } : {
          clientX: 180 + -180 / Math.PI * Math.atan2(a2, r2)
        };
        return this.searchKDTree(n2);
      }
      function sC(t10, e10, i10, s10) {
        let o2 = s10.tickInterval, a2 = s10.tickPositions, r2 = su(a2, (t11) => t11 >= i10), n2 = su([...a2].reverse(), (t11) => t11 <= e10);
        return sc(r2) || (r2 = a2[a2.length - 1]), sc(n2) || (n2 = a2[0], r2 += o2, t10[0][0] = "L", t10.unshift(t10[t10.length - 3])), (t10 = t10.slice(a2.indexOf(n2), a2.indexOf(r2) + 1))[0][0] = "M", t10;
      }
      function sX(t10, e10) {
        return su(this.pane || [], (t11) => t11.options.id === e10) || t10.call(this, e10);
      }
      function sY(t10, e10, i10, s10, o2, a2) {
        let r2, n2, l2, h2 = this.chart, p2 = sm(s10.inside, !!this.options.stacking);
        if (h2.polar) {
          if (r2 = e10.rectPlotX / Math.PI * 180, h2.inverted) this.forceDL = h2.isInsidePlot(e10.plotX, e10.plotY), p2 && e10.shapeArgs ? (n2 = e10.shapeArgs, o2 = sf(o2, {
            x: (l2 = this.yAxis.postTranslate(((n2.start || 0) + (n2.end || 0)) / 2 - this.xAxis.startAngleRad, e10.barX + e10.pointWidth / 2)).x - h2.plotLeft,
            y: l2.y - h2.plotTop
          })) : e10.tooltipPos && (o2 = sf(o2, {
            x: e10.tooltipPos[0],
            y: e10.tooltipPos[1]
          })), s10.align = sm(s10.align, "center"), s10.verticalAlign = sm(s10.verticalAlign, "middle");
          else {
            var d2;
            null === (d2 = s10).align && (d2.align = r2 > 20 && r2 < 160 ? "left" : r2 > 200 && r2 < 340 ? "right" : "center"), null === d2.verticalAlign && (d2.verticalAlign = r2 < 45 || r2 > 315 ? "bottom" : r2 > 135 && r2 < 225 ? "top" : "middle"), s10 = d2;
          }
          M().prototype.alignDataLabel.call(this, e10, i10, s10, o2, a2), this.isRadialBar && e10.shapeArgs && e10.shapeArgs.start === e10.shapeArgs.end ? i10.hide() : i10.show();
        } else t10.call(this, e10, i10, s10, o2, a2);
      }
      function sI() {
        let t10 = this.options, e10 = t10.stacking, i10 = this.chart, s10 = this.xAxis, o2 = this.yAxis, a2 = o2.reversed, r2 = o2.center, n2 = s10.startAngleRad, l2 = s10.endAngleRad - n2, h2 = t10.threshold, p2 = 0, d2, c2, u2, g2, f2, m2 = 0, b2 = 0, x2, P2, v2, M2, L2, k2, w2, A2;
        if (s10.isRadial) for (u2 = (d2 = this.points).length, g2 = o2.translate(o2.min), f2 = o2.translate(o2.max), h2 = t10.threshold || 0, i10.inverted && sg(h2) && sc(p2 = o2.translate(h2)) && (p2 < 0 ? p2 = 0 : p2 > l2 && (p2 = l2), this.translatedThreshold = p2 + n2); u2--; ) {
          if (k2 = (c2 = d2[u2]).barX, P2 = c2.x, v2 = c2.y, c2.shapeType = "arc", i10.inverted) {
            c2.plotY = o2.translate(v2), e10 && o2.stacking ? (L2 = o2.stacking.stacks[(v2 < 0 ? "-" : "") + this.stackKey], this.visible && L2 && L2[P2] && !c2.isNull && (M2 = L2[P2].points[this.getStackIndicator(void 0, P2, this.index).key], m2 = o2.translate(M2[0]), b2 = o2.translate(M2[1]), sc(m2) && (m2 = y().clamp(m2, 0, l2)))) : (m2 = p2, b2 = c2.plotY), m2 > b2 && (b2 = [m2, m2 = b2][0]), a2 ? b2 > g2 ? b2 = g2 : m2 < f2 ? m2 = f2 : (m2 > g2 || b2 < f2) && (m2 = b2 = l2) : m2 < g2 ? m2 = g2 : b2 > f2 ? b2 = f2 : (b2 < g2 || m2 > f2) && (m2 = b2 = 0), o2.min > o2.max && (m2 = b2 = a2 ? l2 : 0), m2 += n2, b2 += n2, r2 && (c2.barX = k2 += r2[3] / 2), w2 = Math.max(k2, 0), A2 = Math.max(k2 + c2.pointWidth, 0);
            let i11 = t10.borderRadius, s11 = sy(("object" == typeof i11 ? i11.radius : i11) || 0, A2 - w2);
            c2.shapeArgs = {
              x: r2[0],
              y: r2[1],
              r: A2,
              innerR: w2,
              start: m2,
              end: b2,
              borderRadius: s11
            }, c2.opacity = m2 === b2 ? 0 : void 0, c2.plotY = (sc(this.translatedThreshold) && (m2 < this.translatedThreshold ? m2 : b2)) - n2;
          } else m2 = k2 + n2, c2.shapeArgs = this.polar.arc(c2.yBottom, c2.plotY, m2, m2 + c2.pointWidth), c2.shapeArgs.borderRadius = 0;
          this.polar.toXY(c2), i10.inverted ? (x2 = o2.postTranslate(c2.rectPlotY, k2 + c2.pointWidth / 2), c2.tooltipPos = [x2.x - i10.plotLeft, x2.y - i10.plotTop]) : c2.tooltipPos = [c2.plotX, c2.plotY], r2 && (c2.ttBelow = c2.plotY > r2[1]);
        }
      }
      function sR(t10, e10) {
        let i10, s10, o2 = this;
        if (this.chart.polar) {
          e10 = e10 || this.points;
          for (let t11 = 0; t11 < e10.length; t11++) if (!e10[t11].isNull) {
            i10 = t11;
            break;
          }
          false !== this.options.connectEnds && void 0 !== i10 && (this.connectEnds = true, e10.splice(e10.length, 0, e10[i10]), s10 = true), e10.forEach((t11) => {
            void 0 === t11.polarPlotY && o2.polar.toXY(t11);
          });
        }
        let a2 = t10.apply(this, [].slice.call(arguments, 1));
        return s10 && e10.pop(), a2;
      }
      function sE(t10, e10) {
        let i10 = this.chart, s10 = {
          xAxis: [],
          yAxis: []
        };
        return i10.polar ? i10.axes.forEach((t11) => {
          if ("colorAxis" === t11.coll) return;
          let o2 = t11.isXAxis, a2 = t11.center, r2 = e10.chartX - a2[0] - i10.plotLeft, n2 = e10.chartY - a2[1] - i10.plotTop;
          s10[o2 ? "xAxis" : "yAxis"].push({
            axis: t11,
            value: t11.translate(o2 ? Math.PI - Math.atan2(r2, n2) : Math.sqrt(Math.pow(r2, 2) + Math.pow(n2, 2)), true)
          });
        }) : s10 = t10.call(this, e10), s10;
      }
      function sz(t10, e10) {
        !this.chart.polar && t10.call(this, e10);
      }
      function sD(t10, e10) {
        let i10 = this, s10 = this.chart, o2 = this.group, a2 = this.markerGroup, r2 = this.xAxis && this.xAxis.center, n2 = s10.plotLeft, l2 = s10.plotTop, h2 = this.options.animation, p2, d2, c2, u2, g2, f2;
        s10.polar ? i10.isRadialBar ? e10 || (i10.startAngleRad = sm(i10.translatedThreshold, i10.xAxis.startAngleRad), y().seriesTypes.pie.prototype.animate.call(i10, e10)) : (h2 = sh(h2), i10.is("column") ? e10 || (d2 = r2[3] / 2, i10.points.forEach((t11) => {
          c2 = t11.graphic, g2 = (u2 = t11.shapeArgs) && u2.r, f2 = u2 && u2.innerR, c2 && u2 && (c2.attr({
            r: d2,
            innerR: d2
          }), c2.animate({
            r: g2,
            innerR: f2
          }, i10.options.animation));
        })) : e10 ? (p2 = {
          translateX: r2[0] + n2,
          translateY: r2[1] + l2,
          scaleX: 1e-3,
          scaleY: 1e-3
        }, o2.attr(p2), a2 && a2.attr(p2)) : (p2 = {
          translateX: n2,
          translateY: l2,
          scaleX: 1,
          scaleY: 1
        }, o2.animate(p2, h2), a2 && a2.animate(p2, h2))) : t10.call(this, e10);
      }
      function sO(t10, e10, i10, s10) {
        let o2, a2;
        if (this.chart.polar) {
          if (s10) {
            let t11 = (a2 = function t12(e11, i12, s11, o3) {
              let a3, r2, n2, l2, h2, p2, d2 = +!!o3, c2 = (a3 = i12 >= 0 && i12 <= e11.length - 1 ? i12 : i12 < 0 ? e11.length - 1 + i12 : 0) - 1 < 0 ? e11.length - (1 + d2) : a3 - 1, u2 = a3 + 1 > e11.length - 1 ? d2 : a3 + 1, g2 = e11[c2], f2 = e11[u2], m2 = g2.plotX, b2 = g2.plotY, y2 = f2.plotX, x2 = f2.plotY, P2 = e11[a3].plotX, v2 = e11[a3].plotY;
              r2 = (1.5 * P2 + m2) / 2.5, n2 = (1.5 * v2 + b2) / 2.5, l2 = (1.5 * P2 + y2) / 2.5, h2 = (1.5 * v2 + x2) / 2.5;
              let M2 = Math.sqrt(Math.pow(r2 - P2, 2) + Math.pow(n2 - v2, 2)), L2 = Math.sqrt(Math.pow(l2 - P2, 2) + Math.pow(h2 - v2, 2)), k2 = Math.atan2(n2 - v2, r2 - P2);
              p2 = Math.PI / 2 + (k2 + Math.atan2(h2 - v2, l2 - P2)) / 2, Math.abs(k2 - p2) > Math.PI / 2 && (p2 -= Math.PI), r2 = P2 + Math.cos(p2) * M2, n2 = v2 + Math.sin(p2) * M2;
              let w2 = {
                rightContX: l2 = P2 + Math.cos(Math.PI + p2) * L2,
                rightContY: h2 = v2 + Math.sin(Math.PI + p2) * L2,
                leftContX: r2,
                leftContY: n2,
                plotX: P2,
                plotY: v2
              };
              return s11 && (w2.prevPointCont = t12(e11, c2, false, o3)), w2;
            }(e10, s10, true, this.connectEnds)).prevPointCont && a2.prevPointCont.rightContX, i11 = a2.prevPointCont && a2.prevPointCont.rightContY;
            o2 = ["C", sg(t11) ? t11 : a2.plotX, sg(i11) ? i11 : a2.plotY, sg(a2.leftContX) ? a2.leftContX : a2.plotX, sg(a2.leftContY) ? a2.leftContY : a2.plotY, a2.plotX, a2.plotY];
          } else o2 = ["M", i10.plotX, i10.plotY];
        } else o2 = t10.call(this, e10, i10, s10);
        return o2;
      }
      function sH(t10, e10, i10 = this.plotY) {
        if (!this.destroyed) {
          let {
            plotX: s10,
            series: o2
          } = this, {
            chart: a2
          } = o2;
          return a2.polar && sg(s10) && sg(i10) ? [s10 + (e10 ? a2.plotLeft : 0), i10 + (e10 ? a2.plotTop : 0)] : t10.call(this, e10, i10);
        }
      }
      class sB {
        static compose(t10, e10, i10, s10, o2, a2, r2, n2, l2, h2) {
          if (F.compose(e10, i10), sl.compose(t10, o2), sb(sp, "Polar")) {
            let t11 = e10.prototype, o3 = a2.prototype, p2 = i10.prototype, d2 = s10.prototype;
            if (sd(e10, "afterDrawChartBox", sM), sd(e10, "createAxes", sk), sd(e10, "init", sL), sv(t11, "get", sX), sv(p2, "getCoordinates", sE), sv(p2, "pinch", sz), sd(i10, "getSelectionMarkerAttrs", sA), sd(i10, "getSelectionBox", sw), sd(s10, "afterInit", sS), sd(s10, "afterTranslate", sN, {
              order: 2
            }), sd(s10, "afterColumnTranslate", sI, {
              order: 4
            }), sv(d2, "animate", sD), sv(o3, "pos", sH), n2) {
              let t12 = n2.prototype;
              sv(t12, "alignDataLabel", sY), sv(t12, "animate", sD);
            }
            if (l2 && sv(l2.prototype, "getGraphPath", sR), h2) {
              let t12 = h2.prototype;
              sv(t12, "getPointSpline", sO), r2 && (r2.prototype.getPointSpline = t12.getPointSpline);
            }
          }
        }
        constructor(t10) {
          this.series = t10;
        }
        arc(t10, e10, i10, s10) {
          let o2 = this.series, a2 = o2.xAxis.center, r2 = o2.yAxis.len, n2 = a2[3] / 2, l2 = r2 - e10 + n2, h2 = r2 - sm(t10, r2) + n2;
          return o2.yAxis.reversed && (l2 < 0 && (l2 = n2), h2 < 0 && (h2 = n2)), {
            x: a2[0],
            y: a2[1],
            r: l2,
            innerR: h2,
            start: i10,
            end: s10
          };
        }
        toXY(t10) {
          let e10 = this.series, i10 = e10.chart, s10 = e10.xAxis, o2 = e10.yAxis, a2 = t10.plotX, r2 = i10.inverted, n2 = t10.y, l2 = t10.plotY, h2 = r2 ? a2 : o2.len - l2, p2;
          if (r2 && e10 && !e10.isRadialBar && (t10.plotY = l2 = sg(n2) ? o2.translate(n2) : 0), t10.rectPlotX = a2, t10.rectPlotY = l2, o2.center && (h2 += o2.center[3] / 2), sg(l2)) {
            let e11 = r2 ? o2.postTranslate(l2, h2) : s10.postTranslate(a2, h2);
            t10.plotX = t10.polarPlotX = e11.x - i10.plotLeft, t10.plotY = t10.polarPlotY = e11.y - i10.plotTop;
          }
          e10.kdByAngle ? ((p2 = (a2 / Math.PI * 180 + s10.pane.options.startAngle) % 360) < 0 && (p2 += 360), t10.clientX = p2) : t10.clientX = t10.plotX;
        }
      }
      var sW = f(184), sF = f.n(sW);
      let {
        composed: sG
      } = y(), {
        addEvent: sq,
        objectEach: sV,
        pushUnique: s_
      } = y();
      !function(t10) {
        function e10() {
          let t11 = this.waterfall.stacks;
          t11 && (t11.changed = false, delete t11.alreadyChanged);
        }
        function i10() {
          let t11 = this.options.stackLabels;
          t11?.enabled && this.waterfall.stacks && this.waterfall.renderStackTotals();
        }
        function s10() {
          this.waterfall || (this.waterfall = new a2(this));
        }
        function o2() {
          let t11 = this.axes;
          for (let e11 of this.series) if (e11.options.stacking) {
            for (let e12 of t11) e12.isXAxis || (e12.waterfall.stacks.changed = true);
            break;
          }
        }
        t10.compose = function(t11, a3) {
          s_(sG, "Axis.Waterfall") && (sq(t11, "init", s10), sq(t11, "afterBuildStacks", e10), sq(t11, "afterRender", i10), sq(a3, "beforeRedraw", o2));
        };
        class a2 {
          constructor(t11) {
            this.axis = t11, this.stacks = {
              changed: false
            };
          }
          renderStackTotals() {
            let t11 = this.axis, e11 = t11.waterfall.stacks, i11 = t11.stacking?.stackTotalGroup, s11 = new (sF())(t11, t11.options.stackLabels || {}, false, 0, void 0);
            this.dummyStackItem = s11, i11 && sV(e11, (t12) => {
              sV(t12, (t13, e12) => {
                s11.total = t13.stackTotal, s11.x = +e12, t13.label && (s11.label = t13.label), sF().prototype.render.call(s11, i11), t13.label = s11.label, delete s11.label;
              });
            }), s11.total = null;
          }
        }
        t10.Composition = a2;
      }(c || (c = {}));
      let sU = c, {
        isNumber: sK
      } = y();
      class sZ extends tc().prototype.pointClass {
        getClassName() {
          let t10 = t_().prototype.getClassName.call(this);
          return this.isSum ? t10 += " highcharts-sum" : this.isIntermediateSum && (t10 += " highcharts-intermediate-sum"), t10;
        }
        isValid() {
          return sK(this.y) || this.isSum || !!this.isIntermediateSum;
        }
      }
      let {
        column: sj,
        line: s$
      } = P().seriesTypes, {
        addEvent: sQ,
        arrayMax: sJ,
        arrayMin: s0,
        correctFloat: s1,
        crisp: s2,
        extend: s3,
        isNumber: s5,
        merge: s8,
        objectEach: s6,
        pick: s4
      } = y();
      function s9(t10, e10) {
        return Object.hasOwnProperty.call(t10, e10);
      }
      class s7 extends sj {
        generatePoints() {
          sj.prototype.generatePoints.apply(this);
          let t10 = this.getColumn("y", true);
          for (let e10 = 0, i10 = this.points.length; e10 < i10; e10++) {
            let i11 = this.points[e10], s10 = t10[e10];
            s5(s10) && (i11.isIntermediateSum || i11.isSum) && (i11.y = s1(s10));
          }
        }
        processData(t10) {
          let e10, i10, s10, o2, a2, r2, n2 = this.options, l2 = this.getColumn("y"), h2 = n2.data, p2 = l2.length, d2 = n2.threshold || 0;
          s10 = i10 = o2 = a2 = 0;
          for (let t11 = 0; t11 < p2; t11++) r2 = l2[t11], e10 = h2?.[t11] || {}, "sum" === r2 || e10.isSum ? l2[t11] = s1(s10) : "intermediateSum" === r2 || e10.isIntermediateSum ? (l2[t11] = s1(i10), i10 = 0) : (s10 += r2, i10 += r2), o2 = Math.min(s10, o2), a2 = Math.max(s10, a2);
          super.processData.call(this, t10), n2.stacking || (this.dataMin = o2 + d2, this.dataMax = a2);
        }
        toYData(t10) {
          return t10.isSum ? "sum" : t10.isIntermediateSum ? "intermediateSum" : t10.y;
        }
        pointAttribs(t10, e10) {
          let i10 = this.options.upColor;
          i10 && !t10.options.color && s5(t10.y) && (t10.color = t10.y > 0 ? i10 : void 0);
          let s10 = sj.prototype.pointAttribs.call(this, t10, e10);
          return delete s10.dashstyle, s10;
        }
        getGraphPath() {
          return [["M", 0, 0]];
        }
        getCrispPath() {
          let t10 = this.data.filter((t11) => s5(t11.y)), e10 = this.yAxis, i10 = t10.length, s10 = this.graph?.strokeWidth() || 0, o2 = this.xAxis.reversed, a2 = this.yAxis.reversed, r2 = this.options.stacking, n2 = [];
          for (let l2 = 1; l2 < i10; l2++) {
            if (!(this.options.connectNulls || s5(this.data[t10[l2].index - 1].y))) continue;
            let i11 = t10[l2].box, h2 = t10[l2 - 1], p2 = h2.y || 0, d2 = t10[l2 - 1].box;
            if (!i11 || !d2) continue;
            let c2 = e10.waterfall.stacks[this.stackKey], u2 = p2 > 0 ? -d2.height : 0;
            if (c2 && d2 && i11) {
              let t11, p3 = c2[l2 - 1];
              if (r2) {
                let i12 = p3.connectorThreshold;
                t11 = s2(e10.translate(i12, false, true, false, true) + (a2 ? u2 : 0), s10);
              } else t11 = s2(d2.y + (h2.minPointLengthOffset || 0), s10);
              n2.push(["M", (d2.x || 0) + (o2 ? 0 : d2.width || 0), t11], ["L", (i11.x || 0) + (o2 && i11.width || 0), t11]);
            }
            if (d2 && n2.length && (!r2 && p2 < 0 && !a2 || p2 > 0 && a2)) {
              let t11 = n2[n2.length - 2];
              t11 && "number" == typeof t11[2] && (t11[2] += d2.height || 0);
              let e11 = n2[n2.length - 1];
              e11 && "number" == typeof e11[2] && (e11[2] += d2.height || 0);
            }
          }
          return n2;
        }
        drawGraph() {
          s$.prototype.drawGraph.call(this), this.graph && this.graph.attr({
            d: this.getCrispPath()
          });
        }
        setStackedPoints(t10) {
          let e10 = this.options, i10 = t10.waterfall?.stacks, s10 = e10.threshold || 0, o2 = this.stackKey, a2 = this.getColumn("x"), r2 = this.getColumn("y"), n2 = a2.length, l2 = s10, h2 = l2, p2, d2 = 0, c2 = 0, u2 = 0, g2, f2, m2, b2, y2, x2, P2, v2, M2 = (t11, e11, i11, s11) => {
            if (p2) {
              if (g2) for (; i11 < g2; i11++) p2.stackState[i11] += s11;
              else p2.stackState[0] = t11, g2 = p2.stackState.length;
              p2.stackState.push(p2.stackState[g2 - 1] + e11);
            }
          };
          if (t10.stacking && i10 && this.reserveSpace()) {
            v2 = i10.changed, (P2 = i10.alreadyChanged) && 0 > P2.indexOf(o2) && (v2 = true), i10[o2] || (i10[o2] = {});
            let t11 = i10[o2];
            if (t11) for (let i11 = 0; i11 < n2; i11++) (!t11[x2 = a2[i11]] || v2) && (t11[x2] = {
              negTotal: 0,
              posTotal: 0,
              stackTotal: 0,
              threshold: 0,
              stateIndex: 0,
              stackState: [],
              label: v2 && t11[x2] ? t11[x2].label : void 0
            }), p2 = t11[x2], (y2 = r2[i11]) >= 0 ? p2.posTotal += y2 : p2.negTotal += y2, b2 = e10.data[i11], f2 = p2.absolutePos = p2.posTotal, m2 = p2.absoluteNeg = p2.negTotal, p2.stackTotal = f2 + m2, g2 = p2.stackState.length, b2?.isIntermediateSum ? (M2(u2, c2, 0, u2), u2 = c2, c2 = s10, l2 ^= h2, h2 ^= l2, l2 ^= h2) : b2?.isSum ? (M2(s10, d2, g2, 0), l2 = s10) : (M2(l2, y2, 0, d2), b2 && (d2 += y2, c2 += y2)), p2.stateIndex++, p2.threshold = l2, l2 += p2.stackTotal;
            i10.changed = false, i10.alreadyChanged || (i10.alreadyChanged = []), i10.alreadyChanged.push(o2);
          }
        }
        getExtremes() {
          let t10, e10, i10, s10 = this.options.stacking;
          return s10 ? (t10 = this.yAxis.waterfall.stacks, e10 = this.stackedYNeg = [], i10 = this.stackedYPos = [], "overlap" === s10 ? s6(t10[this.stackKey], function(t11) {
            e10.push(s0(t11.stackState)), i10.push(sJ(t11.stackState));
          }) : s6(t10[this.stackKey], function(t11) {
            e10.push(t11.negTotal + t11.threshold), i10.push(t11.posTotal + t11.threshold);
          }), {
            dataMin: s0(e10),
            dataMax: sJ(i10)
          }) : {
            dataMin: this.dataMin,
            dataMax: this.dataMax
          };
        }
      }
      s7.defaultOptions = s8(sj.defaultOptions, {
        dataLabels: {
          inside: true
        },
        lineWidth: 1,
        lineColor: "#333333",
        dashStyle: "Dot",
        borderColor: "#333333",
        states: {
          hover: {
            lineWidthPlus: 0
          }
        }
      }), s7.compose = sU.compose, s3(s7.prototype, {
        pointValKey: "y",
        showLine: true,
        pointClass: sZ
      }), sQ(s7, "afterColumnTranslate", function() {
        let {
          options: t10,
          points: e10,
          yAxis: i10
        } = this, s10 = s4(t10.minPointLength, 5), o2 = s10 / 2, a2 = t10.threshold || 0, r2 = t10.stacking, n2 = i10.waterfall.stacks[this.stackKey], l2 = this.getColumn("y", true), h2 = a2, p2 = a2, d2, c2, u2, g2;
        for (let t11 = 0; t11 < e10.length; t11++) {
          let f2 = e10[t11], m2 = l2[t11], b2 = s3({
            x: 0,
            y: 0,
            width: 0,
            height: 0
          }, f2.shapeArgs || {});
          f2.box = b2;
          let y2 = [0, m2], x2 = f2.y || 0;
          if (r2) {
            if (n2) {
              let e11 = n2[t11];
              "overlap" === r2 ? (c2 = e11.stackState[e11.stateIndex--], d2 = x2 >= 0 ? c2 : c2 - x2, s9(e11, "absolutePos") && delete e11.absolutePos, s9(e11, "absoluteNeg") && delete e11.absoluteNeg) : (x2 >= 0 ? (c2 = e11.threshold + e11.posTotal, e11.posTotal -= x2, d2 = c2) : (c2 = e11.threshold + e11.negTotal, e11.negTotal -= x2, d2 = c2 - x2), !e11.posTotal && s5(e11.absolutePos) && s9(e11, "absolutePos") && (e11.posTotal = e11.absolutePos, delete e11.absolutePos), !e11.negTotal && s5(e11.absoluteNeg) && s9(e11, "absoluteNeg") && (e11.negTotal = e11.absoluteNeg, delete e11.absoluteNeg)), f2.isSum || (e11.connectorThreshold = e11.threshold + e11.stackTotal), i10.reversed ? (u2 = x2 >= 0 ? d2 - x2 : d2 + x2, g2 = d2) : (u2 = d2, g2 = d2 - x2), f2.below = u2 <= a2, b2.y = i10.translate(u2, false, true, false, true), b2.height = Math.abs(b2.y - i10.translate(g2, false, true, false, true));
              let s11 = i10.waterfall.dummyStackItem;
              s11 && (s11.x = t11, s11.label = n2[t11].label, s11.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[t11], this.stackedYPos[t11], void 0, this.xAxis));
            }
          } else d2 = Math.max(p2, p2 + x2) + y2[0], b2.y = i10.translate(d2, false, true, false, true), f2.isSum ? (b2.y = i10.translate(y2[1], false, true, false, true), b2.height = Math.min(i10.translate(y2[0], false, true, false, true), i10.len) - b2.y, f2.below = y2[1] <= a2) : f2.isIntermediateSum ? (x2 >= 0 ? (u2 = y2[1] + h2, g2 = h2) : (u2 = h2, g2 = y2[1] + h2), i10.reversed && (u2 ^= g2, g2 ^= u2, u2 ^= g2), b2.y = i10.translate(u2, false, true, false, true), b2.height = Math.abs(b2.y - Math.min(i10.translate(g2, false, true, false, true), i10.len)), h2 += y2[1], f2.below = u2 <= a2) : (b2.height = m2 > 0 ? i10.translate(p2, false, true, false, true) - b2.y : i10.translate(p2, false, true, false, true) - i10.translate(p2 - m2, false, true, false, true), f2.below = (p2 += m2) < a2), b2.height < 0 && (b2.y += b2.height, b2.height *= -1);
          f2.plotY = b2.y, f2.yBottom = b2.y + b2.height, b2.height <= s10 && !f2.isNull ? (b2.height = s10, b2.y -= o2, f2.yBottom = b2.y + b2.height, f2.plotY = b2.y, x2 < 0 ? f2.minPointLengthOffset = -o2 : f2.minPointLengthOffset = o2) : (f2.isNull && (b2.width = 0), f2.minPointLengthOffset = 0);
          let P2 = f2.plotY + (f2.negative ? b2.height : 0);
          f2.below && (f2.plotY += b2.height), f2.tooltipPos && (this.chart.inverted ? f2.tooltipPos[0] = i10.len - P2 : f2.tooltipPos[1] = P2), f2.isInside = this.isPointInside(f2);
          let v2 = s2(f2.yBottom, this.borderWidth);
          b2.y = s2(b2.y, this.borderWidth), b2.height = v2 - b2.y, s8(true, f2.shapeArgs, b2);
        }
      }, {
        order: 2
      }), P().registerSeriesType("waterfall", s7);
      let ot = y();
      ot.RadialAxis = sl, ei.compose(ot.Axis, ot.Chart, ot.Legend), iZ.compose(ot.Axis, ot.Chart, ot.Legend), F.compose(ot.Chart, ot.Pointer), sB.compose(ot.Axis, ot.Chart, ot.Pointer, ot.Series, ot.Tick, ot.Point, P().seriesTypes.areasplinerange, P().seriesTypes.column, P().seriesTypes.line, P().seriesTypes.spline), s7.compose(ot.Axis, ot.Chart);
      let oe = ot;
      return m.default;
    })());
  }
});
export default require_highcharts_more();
//# sourceMappingURL=highcharts_highcharts-more.js.map
