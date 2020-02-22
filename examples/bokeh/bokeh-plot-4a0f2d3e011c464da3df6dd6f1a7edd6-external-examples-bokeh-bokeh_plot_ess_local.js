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
      };var element = document.getElementById("266c976e-7960-4ec1-82ee-77aadc2267c6");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '266c976e-7960-4ec1-82ee-77aadc2267c6' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"c555edb7-6008-49da-849e-1397d849a08b":{"roots":{"references":[{"attributes":{"text":"mu"},"id":"56902","type":"Title"},{"attributes":{"overlay":{"id":"56909","type":"BoxAnnotation"}},"id":"56871","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"56854","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56910","type":"BoxAnnotation"},{"attributes":{},"id":"56861","type":"BasicTicker"},{"attributes":{},"id":"56905","type":"BasicTickFormatter"},{"attributes":{},"id":"56915","type":"Selection"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56901","type":"Span"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56893","type":"Circle"},{"attributes":{"dimension":1,"ticker":{"id":"56866","type":"BasicTicker"}},"id":"56869","type":"Grid"},{"attributes":{"ticker":{"id":"56861","type":"BasicTicker"}},"id":"56864","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"56907","type":"BasicTickFormatter"},"ticker":{"id":"56866","type":"BasicTicker"}},"id":"56865","type":"LinearAxis"},{"attributes":{"tools":[{"id":"56870","type":"PanTool"},{"id":"56871","type":"BoxZoomTool"},{"id":"56872","type":"WheelZoomTool"},{"id":"56873","type":"BoxSelectTool"},{"id":"56874","type":"LassoSelectTool"},{"id":"56875","type":"UndoTool"},{"id":"56876","type":"RedoTool"},{"id":"56877","type":"ResetTool"},{"id":"56878","type":"SaveTool"},{"id":"56879","type":"HoverTool"}]},"id":"56918","type":"ProxyToolbar"},{"attributes":{},"id":"56877","type":"ResetTool"},{"attributes":{"source":{"id":"56891","type":"ColumnDataSource"}},"id":"56895","type":"CDSView"},{"attributes":{},"id":"56914","type":"UnionRenderers"},{"attributes":{},"id":"56876","type":"RedoTool"},{"attributes":{"children":[[{"id":"56851","subtype":"Figure","type":"Plot"},0,0]]},"id":"56917","type":"GridBox"},{"attributes":{},"id":"56872","type":"WheelZoomTool"},{"attributes":{},"id":"56907","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56870","type":"PanTool"},{"id":"56871","type":"BoxZoomTool"},{"id":"56872","type":"WheelZoomTool"},{"id":"56873","type":"BoxSelectTool"},{"id":"56874","type":"LassoSelectTool"},{"id":"56875","type":"UndoTool"},{"id":"56876","type":"RedoTool"},{"id":"56877","type":"ResetTool"},{"id":"56878","type":"SaveTool"},{"id":"56879","type":"HoverTool"}]},"id":"56880","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"56911","type":"PolyAnnotation"}},"id":"56874","type":"LassoSelectTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"56905","type":"BasicTickFormatter"},"ticker":{"id":"56861","type":"BasicTicker"}},"id":"56860","type":"LinearAxis"},{"attributes":{},"id":"56870","type":"PanTool"},{"attributes":{},"id":"56878","type":"SaveTool"},{"attributes":{"data_source":{"id":"56897","type":"ColumnDataSource"},"glyph":{"id":"56896","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"56899","type":"CDSView"}},"id":"56898","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"56860","type":"LinearAxis"}],"center":[{"id":"56864","type":"Grid"},{"id":"56869","type":"Grid"}],"left":[{"id":"56865","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56894","type":"GlyphRenderer"},{"id":"56898","type":"GlyphRenderer"},{"id":"56900","type":"Span"},{"id":"56901","type":"Span"}],"title":{"id":"56902","type":"Title"},"toolbar":{"id":"56880","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56852","type":"DataRange1d"},"x_scale":{"id":"56856","type":"LinearScale"},"y_range":{"id":"56854","type":"DataRange1d"},"y_scale":{"id":"56858","type":"LinearScale"}},"id":"56851","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"56897","type":"ColumnDataSource"}},"id":"56899","type":"CDSView"},{"attributes":{},"id":"56875","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"56910","type":"BoxAnnotation"}},"id":"56873","type":"BoxSelectTool"},{"attributes":{"toolbar":{"id":"56918","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56919","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"56891","type":"ColumnDataSource"},"glyph":{"id":"56892","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56893","type":"Circle"},"selection_glyph":null,"view":{"id":"56895","type":"CDSView"}},"id":"56894","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","shape":[2]}},"selected":{"id":"56915","type":"Selection"},"selection_policy":{"id":"56914","type":"UnionRenderers"}},"id":"56897","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56909","type":"BoxAnnotation"},{"attributes":{},"id":"56856","type":"LinearScale"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"56900","type":"Span"},{"attributes":{},"id":"56913","type":"Selection"},{"attributes":{"children":[{"id":"56919","type":"ToolbarBox"},{"id":"56917","type":"GridBox"}]},"id":"56920","type":"Column"},{"attributes":{"callback":null},"id":"56879","type":"HoverTool"},{"attributes":{},"id":"56858","type":"LinearScale"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"56896","type":"Dash"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56913","type":"Selection"},"selection_policy":{"id":"56912","type":"UnionRenderers"}},"id":"56891","type":"ColumnDataSource"},{"attributes":{},"id":"56912","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"56852","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56911","type":"PolyAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56892","type":"Circle"},{"attributes":{},"id":"56866","type":"BasicTicker"}],"root_ids":["56920"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"c555edb7-6008-49da-849e-1397d849a08b","roots":{"56920":"266c976e-7960-4ec1-82ee-77aadc2267c6"}}];
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