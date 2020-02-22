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
      };var element = document.getElementById("58e6d742-77ec-413e-b9e5-2bd3e34f1fef");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '58e6d742-77ec-413e-b9e5-2bd3e34f1fef' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5e662da8-efbe-4794-ba49-f50960f68e8f":{"roots":{"references":[{"attributes":{},"id":"80168","type":"RedoTool"},{"attributes":{},"id":"80192","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"ticker":{"id":"80158","type":"BasicTicker"}},"id":"80161","type":"Grid"},{"attributes":{"ticker":{"id":"80153","type":"BasicTicker"}},"id":"80156","type":"Grid"},{"attributes":{},"id":"80150","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"80196","type":"PolyAnnotation"},{"attributes":{"text":"centered model - non centered model"},"id":"80187","type":"Title"},{"attributes":{"callback":null,"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","shape":[8]}},"selected":{"id":"80198","type":"Selection"},"selection_policy":{"id":"80197","type":"UnionRenderers"}},"id":"80184","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80194","type":"BoxAnnotation"},{"attributes":{},"id":"80170","type":"SaveTool"},{"attributes":{},"id":"80148","type":"LinearScale"},{"attributes":{},"id":"80158","type":"BasicTicker"},{"attributes":{},"id":"80164","type":"WheelZoomTool"},{"attributes":{},"id":"80198","type":"Selection"},{"attributes":{"callback":null,"overlay":{"id":"80196","type":"PolyAnnotation"}},"id":"80166","type":"LassoSelectTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"80192","type":"BasicTickFormatter"},"ticker":{"id":"80158","type":"BasicTicker"}},"id":"80157","type":"LinearAxis"},{"attributes":{},"id":"80153","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"80162","type":"PanTool"},{"id":"80163","type":"BoxZoomTool"},{"id":"80164","type":"WheelZoomTool"},{"id":"80165","type":"BoxSelectTool"},{"id":"80166","type":"LassoSelectTool"},{"id":"80167","type":"UndoTool"},{"id":"80168","type":"RedoTool"},{"id":"80169","type":"ResetTool"},{"id":"80170","type":"SaveTool"},{"id":"80171","type":"HoverTool"}]},"id":"80172","type":"Toolbar"},{"attributes":{"callback":null},"id":"80146","type":"DataRange1d"},{"attributes":{"formatter":{"id":"80190","type":"BasicTickFormatter"},"ticker":{"id":"80153","type":"BasicTicker"}},"id":"80152","type":"LinearAxis"},{"attributes":{"callback":null},"id":"80171","type":"HoverTool"},{"attributes":{},"id":"80162","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"80195","type":"BoxAnnotation"},{"attributes":{"source":{"id":"80184","type":"ColumnDataSource"}},"id":"80186","type":"CDSView"},{"attributes":{"overlay":{"id":"80194","type":"BoxAnnotation"}},"id":"80163","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"80184","type":"ColumnDataSource"},"glyph":{"id":"80183","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"80186","type":"CDSView"}},"id":"80185","type":"GlyphRenderer"},{"attributes":{"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"80183","type":"Cross"},{"attributes":{"callback":null},"id":"80144","type":"DataRange1d"},{"attributes":{},"id":"80169","type":"ResetTool"},{"attributes":{"callback":null,"overlay":{"id":"80195","type":"BoxAnnotation"}},"id":"80165","type":"BoxSelectTool"},{"attributes":{"below":[{"id":"80152","type":"LinearAxis"}],"center":[{"id":"80156","type":"Grid"},{"id":"80161","type":"Grid"}],"left":[{"id":"80157","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"80185","type":"GlyphRenderer"}],"title":{"id":"80187","type":"Title"},"toolbar":{"id":"80172","type":"Toolbar"},"x_range":{"id":"80144","type":"DataRange1d"},"x_scale":{"id":"80148","type":"LinearScale"},"y_range":{"id":"80146","type":"DataRange1d"},"y_scale":{"id":"80150","type":"LinearScale"}},"id":"80143","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"80197","type":"UnionRenderers"},{"attributes":{},"id":"80190","type":"BasicTickFormatter"},{"attributes":{},"id":"80167","type":"UndoTool"}],"root_ids":["80143"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"5e662da8-efbe-4794-ba49-f50960f68e8f","roots":{"80143":"58e6d742-77ec-413e-b9e5-2bd3e34f1fef"}}];
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