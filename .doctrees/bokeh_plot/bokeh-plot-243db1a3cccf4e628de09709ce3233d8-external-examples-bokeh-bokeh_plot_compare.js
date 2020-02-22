(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("68d42510-2bbe-44ea-bc94-c961dece2a43");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '68d42510-2bbe-44ea-bc94-c961dece2a43' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"20f4fd46-5afb-4c45-b832-9423755c425f":{"roots":{"references":[{"attributes":{"callback":null},"id":"53927","type":"DataRange1d"},{"attributes":{},"id":"53950","type":"UndoTool"},{"attributes":{},"id":"54008","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53990","type":"Circle"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"53966","type":"FixedTicker"},{"attributes":{},"id":"54003","type":"Selection"},{"attributes":{},"id":"54005","type":"Selection"},{"attributes":{"callback":null,"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"54011","type":"Selection"},"selection_policy":{"id":"54010","type":"UnionRenderers"}},"id":"53988","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"53935","type":"LinearAxis"}],"center":[{"id":"53939","type":"Grid"},{"id":"53944","type":"Grid"}],"left":[{"id":"53940","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"53971","type":"GlyphRenderer"},{"id":"53976","type":"GlyphRenderer"},{"id":"53981","type":"GlyphRenderer"},{"id":"53986","type":"GlyphRenderer"},{"id":"53991","type":"GlyphRenderer"},{"id":"53993","type":"Span"}],"title":{"id":"53994","type":"Title"},"toolbar":{"id":"53955","type":"Toolbar"},"x_range":{"id":"53927","type":"DataRange1d"},"x_scale":{"id":"53931","type":"LinearScale"},"y_range":{"id":"53929","type":"DataRange1d"},"y_scale":{"id":"53933","type":"LinearScale"}},"id":"53926","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":-30.687290318389813},"id":"53993","type":"Span"},{"attributes":{},"id":"53996","type":"BasicTickFormatter"},{"attributes":{},"id":"54011","type":"Selection"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53974","type":"MultiLine"},{"attributes":{"source":{"id":"53968","type":"ColumnDataSource"}},"id":"53972","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"54003","type":"Selection"},"selection_policy":{"id":"54002","type":"UnionRenderers"}},"id":"53968","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"53954","type":"HoverTool"},{"attributes":{},"id":"53933","type":"LinearScale"},{"attributes":{},"id":"53952","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53970","type":"Triangle"},{"attributes":{},"id":"54009","type":"Selection"},{"attributes":{},"id":"54002","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"53978","type":"ColumnDataSource"},"glyph":{"id":"53979","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53980","type":"Circle"},"selection_glyph":null,"view":{"id":"53982","type":"CDSView"}},"id":"53981","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53975","type":"MultiLine"},{"attributes":{"data_source":{"id":"53988","type":"ColumnDataSource"},"glyph":{"id":"53989","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53990","type":"Circle"},"selection_glyph":null,"view":{"id":"53992","type":"CDSView"}},"id":"53991","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53980","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"54000","type":"BoxAnnotation"},{"attributes":{"source":{"id":"53973","type":"ColumnDataSource"}},"id":"53977","type":"CDSView"},{"attributes":{},"id":"53931","type":"LinearScale"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53969","type":"Triangle"},{"attributes":{},"id":"53998","type":"BasicTickFormatter"},{"attributes":{},"id":"53951","type":"RedoTool"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53989","type":"Circle"},{"attributes":{},"id":"53941","type":"BasicTicker"},{"attributes":{"data_source":{"id":"53973","type":"ColumnDataSource"},"glyph":{"id":"53974","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53975","type":"MultiLine"},"selection_glyph":null,"view":{"id":"53977","type":"CDSView"}},"id":"53976","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"54000","type":"BoxAnnotation"}},"id":"53948","type":"BoxSelectTool"},{"attributes":{"text":""},"id":"53994","type":"Title"},{"attributes":{},"id":"54004","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"53983","type":"ColumnDataSource"},"glyph":{"id":"53984","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53985","type":"MultiLine"},"selection_glyph":null,"view":{"id":"53987","type":"CDSView"}},"id":"53986","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"53998","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"53966","type":"FixedTicker"}},"id":"53940","type":"LinearAxis"},{"attributes":{"source":{"id":"53978","type":"ColumnDataSource"}},"id":"53982","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"53999","type":"BoxAnnotation"},{"attributes":{},"id":"54010","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"53999","type":"BoxAnnotation"}},"id":"53946","type":"BoxZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"54001","type":"PolyAnnotation"}},"id":"53949","type":"LassoSelectTool"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"53929","type":"DataRange1d"},{"attributes":{},"id":"54006","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"54007","type":"Selection"},"selection_policy":{"id":"54006","type":"UnionRenderers"}},"id":"53978","type":"ColumnDataSource"},{"attributes":{"axis_label":"Log","formatter":{"id":"53996","type":"BasicTickFormatter"},"ticker":{"id":"53936","type":"BasicTicker"}},"id":"53935","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53985","type":"MultiLine"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"53984","type":"MultiLine"},{"attributes":{"ticker":{"id":"53936","type":"BasicTicker"}},"id":"53939","type":"Grid"},{"attributes":{"source":{"id":"53983","type":"ColumnDataSource"}},"id":"53987","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"53941","type":"BasicTicker"}},"id":"53944","type":"Grid"},{"attributes":{"source":{"id":"53988","type":"ColumnDataSource"}},"id":"53992","type":"CDSView"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"53979","type":"Circle"},{"attributes":{},"id":"53947","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"53945","type":"PanTool"},{"id":"53946","type":"BoxZoomTool"},{"id":"53947","type":"WheelZoomTool"},{"id":"53948","type":"BoxSelectTool"},{"id":"53949","type":"LassoSelectTool"},{"id":"53950","type":"UndoTool"},{"id":"53951","type":"RedoTool"},{"id":"53952","type":"ResetTool"},{"id":"53953","type":"SaveTool"},{"id":"53954","type":"HoverTool"}]},"id":"53955","type":"Toolbar"},{"attributes":{},"id":"53945","type":"PanTool"},{"attributes":{"data_source":{"id":"53968","type":"ColumnDataSource"},"glyph":{"id":"53969","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"53970","type":"Triangle"},"selection_glyph":null,"view":{"id":"53972","type":"CDSView"}},"id":"53971","type":"GlyphRenderer"},{"attributes":{},"id":"53953","type":"SaveTool"},{"attributes":{"callback":null,"data":{"xs":[[-32.04178209665293,-29.332798540126696],[-32.10749137726487,-29.51325697593523]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"54009","type":"Selection"},"selection_policy":{"id":"54008","type":"UnionRenderers"}},"id":"53983","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"54005","type":"Selection"},"selection_policy":{"id":"54004","type":"UnionRenderers"}},"id":"53973","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"54001","type":"PolyAnnotation"},{"attributes":{},"id":"53936","type":"BasicTicker"},{"attributes":{},"id":"54007","type":"Selection"}],"root_ids":["53926"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"20f4fd46-5afb-4c45-b832-9423755c425f","roots":{"53926":"68d42510-2bbe-44ea-bc94-c961dece2a43"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();