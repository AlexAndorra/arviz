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
      };var element = document.getElementById("a2862f15-a800-45f7-881b-9eedf14e54a3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a2862f15-a800-45f7-881b-9eedf14e54a3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8ea7db56-dfcc-4b19-9feb-3a3e82f81852":{"roots":{"references":[{"attributes":{},"id":"57009","type":"SaveTool"},{"attributes":{"tools":[{"id":"57001","type":"PanTool"},{"id":"57002","type":"BoxZoomTool"},{"id":"57003","type":"WheelZoomTool"},{"id":"57004","type":"BoxSelectTool"},{"id":"57005","type":"LassoSelectTool"},{"id":"57006","type":"UndoTool"},{"id":"57007","type":"RedoTool"},{"id":"57008","type":"ResetTool"},{"id":"57009","type":"SaveTool"},{"id":"57010","type":"HoverTool"}]},"id":"57042","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"57031","type":"BasicTickFormatter"},"ticker":{"id":"56992","type":"BasicTicker"}},"id":"56991","type":"LinearAxis"},{"attributes":{"children":[{"id":"57043","type":"ToolbarBox"},{"id":"57041","type":"GridBox"}]},"id":"57044","type":"Column"},{"attributes":{"below":[{"id":"56991","type":"LinearAxis"}],"center":[{"id":"56995","type":"Grid"},{"id":"57000","type":"Grid"}],"left":[{"id":"56996","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"57025","type":"GlyphRenderer"},{"id":"57027","type":"Span"}],"title":{"id":"57028","type":"Title"},"toolbar":{"id":"57011","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56983","type":"DataRange1d"},"x_scale":{"id":"56987","type":"LinearScale"},"y_range":{"id":"56985","type":"DataRange1d"},"y_scale":{"id":"56989","type":"LinearScale"}},"id":"56982","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"57010","type":"HoverTool"},{"attributes":{"children":[[{"id":"56982","subtype":"Figure","type":"Plot"},0,0]]},"id":"57041","type":"GridBox"},{"attributes":{"source":{"id":"57022","type":"ColumnDataSource"}},"id":"57026","type":"CDSView"},{"attributes":{},"id":"56987","type":"LinearScale"},{"attributes":{"text":"sigma_y"},"id":"57028","type":"Title"},{"attributes":{"data_source":{"id":"57022","type":"ColumnDataSource"},"glyph":{"id":"57023","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57024","type":"Circle"},"selection_glyph":null,"view":{"id":"57026","type":"CDSView"}},"id":"57025","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"57023","type":"Circle"},{"attributes":{},"id":"57006","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57035","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"56997","type":"BasicTicker"}},"id":"57000","type":"Grid"},{"attributes":{},"id":"57039","type":"Selection"},{"attributes":{"toolbar":{"id":"57042","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"57043","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"56985","type":"DataRange1d"},{"attributes":{},"id":"56997","type":"BasicTicker"},{"attributes":{},"id":"57001","type":"PanTool"},{"attributes":{},"id":"56992","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"57001","type":"PanTool"},{"id":"57002","type":"BoxZoomTool"},{"id":"57003","type":"WheelZoomTool"},{"id":"57004","type":"BoxSelectTool"},{"id":"57005","type":"LassoSelectTool"},{"id":"57006","type":"UndoTool"},{"id":"57007","type":"RedoTool"},{"id":"57008","type":"ResetTool"},{"id":"57009","type":"SaveTool"},{"id":"57010","type":"HoverTool"}]},"id":"57011","type":"Toolbar"},{"attributes":{"callback":null,"overlay":{"id":"57036","type":"BoxAnnotation"}},"id":"57004","type":"BoxSelectTool"},{"attributes":{},"id":"57003","type":"WheelZoomTool"},{"attributes":{},"id":"57008","type":"ResetTool"},{"attributes":{},"id":"57031","type":"BasicTickFormatter"},{"attributes":{},"id":"57038","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"57027","type":"Span"},{"attributes":{"callback":null},"id":"56983","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"57024","type":"Circle"},{"attributes":{},"id":"57007","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"57037","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AmD6jcFOjEBQTl2raYiTQBDjz+4U2pNAZGseedHplEB/WvEazoSWQOHtizqLkJlAAkPUheO2mUBesx6n5kCZQLJxAzcYzZhAMUpMiFv0mUC/Oi/BFYGZQN5lChPFDZZAFw600+IXlUB7koIfjHaVQLrzDUmEzZRA0nSsVmc2lUBXi/wUTAaRQBZhtQ+zqpBAXkjEt6PHjECNgYxaPa6QQA==","dtype":"float64","shape":[20]}},"selected":{"id":"57039","type":"Selection"},"selection_policy":{"id":"57038","type":"UnionRenderers"}},"id":"57022","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"57035","type":"BoxAnnotation"}},"id":"57002","type":"BoxZoomTool"},{"attributes":{"ticker":{"id":"56992","type":"BasicTicker"}},"id":"56995","type":"Grid"},{"attributes":{},"id":"57033","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"57037","type":"PolyAnnotation"}},"id":"57005","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57036","type":"BoxAnnotation"},{"attributes":{},"id":"56989","type":"LinearScale"},{"attributes":{"axis_label":"ESS for quantiles","formatter":{"id":"57033","type":"BasicTickFormatter"},"ticker":{"id":"56997","type":"BasicTicker"}},"id":"56996","type":"LinearAxis"}],"root_ids":["57044"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"8ea7db56-dfcc-4b19-9feb-3a3e82f81852","roots":{"57044":"a2862f15-a800-45f7-881b-9eedf14e54a3"}}];
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