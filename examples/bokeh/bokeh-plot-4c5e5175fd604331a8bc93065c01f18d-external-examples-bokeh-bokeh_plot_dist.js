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
      };var element = document.getElementById("0876f589-9467-4340-92c0-951facd83554");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '0876f589-9467-4340-92c0-951facd83554' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"155c77ee-6075-43a7-abea-a9d714d23e1b":{"roots":{"references":[{"attributes":{"ticker":{"id":"56268","type":"BasicTicker"}},"id":"56271","type":"Grid"},{"attributes":{},"id":"56282","type":"HelpTool"},{"attributes":{},"id":"56278","type":"WheelZoomTool"},{"attributes":{},"id":"56268","type":"BasicTicker"},{"attributes":{},"id":"56329","type":"BasicTickFormatter"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"56323","type":"Quad"},{"attributes":{"callback":null},"id":"56293","type":"DataRange1d"},{"attributes":{},"id":"56265","type":"LinearScale"},{"attributes":{},"id":"56309","type":"PanTool"},{"attributes":{},"id":"56280","type":"SaveTool"},{"attributes":{"formatter":{"id":"56352","type":"BasicTickFormatter"},"ticker":{"id":"56305","type":"BasicTicker"}},"id":"56304","type":"LinearAxis"},{"attributes":{},"id":"56313","type":"ResetTool"},{"attributes":{"callback":null},"id":"56291","type":"DataRange1d"},{"attributes":{},"id":"56331","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"56337","type":"Line"},{"attributes":{},"id":"56359","type":"Selection"},{"attributes":{},"id":"56314","type":"HelpTool"},{"attributes":{},"id":"56358","type":"UnionRenderers"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"56324","type":"Quad"},{"attributes":{},"id":"56281","type":"ResetTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56309","type":"PanTool"},{"id":"56310","type":"WheelZoomTool"},{"id":"56311","type":"BoxZoomTool"},{"id":"56312","type":"SaveTool"},{"id":"56313","type":"ResetTool"},{"id":"56314","type":"HelpTool"}]},"id":"56315","type":"Toolbar"},{"attributes":{},"id":"56312","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56277","type":"PanTool"},{"id":"56278","type":"WheelZoomTool"},{"id":"56279","type":"BoxZoomTool"},{"id":"56280","type":"SaveTool"},{"id":"56281","type":"ResetTool"},{"id":"56282","type":"HelpTool"}]},"id":"56283","type":"Toolbar"},{"attributes":{"formatter":{"id":"56331","type":"BasicTickFormatter"},"ticker":{"id":"56273","type":"BasicTicker"}},"id":"56272","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56338","type":"Line"},{"attributes":{},"id":"56263","type":"LinearScale"},{"attributes":{"formatter":{"id":"56350","type":"BasicTickFormatter"},"ticker":{"id":"56300","type":"BasicTicker"}},"id":"56299","type":"LinearAxis"},{"attributes":{"text":""},"id":"56344","type":"Title"},{"attributes":{"callback":null},"id":"56259","type":"DataRange1d"},{"attributes":{"data_source":{"id":"56336","type":"ColumnDataSource"},"glyph":{"id":"56337","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56338","type":"Line"},"selection_glyph":null,"view":{"id":"56340","type":"CDSView"}},"id":"56339","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"56357","type":"BoxAnnotation"}},"id":"56311","type":"BoxZoomTool"},{"attributes":{},"id":"56300","type":"BasicTicker"},{"attributes":{"source":{"id":"56322","type":"ColumnDataSource"}},"id":"56326","type":"CDSView"},{"attributes":{},"id":"56356","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"56273","type":"BasicTicker"}},"id":"56276","type":"Grid"},{"attributes":{"callback":null},"id":"56261","type":"DataRange1d"},{"attributes":{"items":[{"id":"56335","type":"LegendItem"}]},"id":"56334","type":"Legend"},{"attributes":{"below":[{"id":"56267","type":"LinearAxis"}],"center":[{"id":"56271","type":"Grid"},{"id":"56276","type":"Grid"},{"id":"56334","type":"Legend"}],"left":[{"id":"56272","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56325","type":"GlyphRenderer"}],"title":{"id":"56327","type":"Title"},"toolbar":{"id":"56283","type":"Toolbar"},"x_range":{"id":"56259","type":"DataRange1d"},"x_scale":{"id":"56263","type":"LinearScale"},"y_range":{"id":"56261","type":"DataRange1d"},"y_scale":{"id":"56265","type":"LinearScale"}},"id":"56258","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"56329","type":"BasicTickFormatter"},"ticker":{"id":"56268","type":"BasicTicker"}},"id":"56267","type":"LinearAxis"},{"attributes":{},"id":"56305","type":"BasicTicker"},{"attributes":{},"id":"56297","type":"LinearScale"},{"attributes":{"below":[{"id":"56299","type":"LinearAxis"}],"center":[{"id":"56303","type":"Grid"},{"id":"56308","type":"Grid"}],"left":[{"id":"56304","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"56339","type":"GlyphRenderer"}],"title":{"id":"56344","type":"Title"},"toolbar":{"id":"56315","type":"Toolbar"},"x_range":{"id":"56291","type":"DataRange1d"},"x_scale":{"id":"56295","type":"LinearScale"},"y_range":{"id":"56293","type":"DataRange1d"},"y_scale":{"id":"56297","type":"LinearScale"}},"id":"56290","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"56322","type":"ColumnDataSource"},"glyph":{"id":"56323","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56324","type":"Quad"},"selection_glyph":null,"view":{"id":"56326","type":"CDSView"}},"id":"56325","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56357","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"56305","type":"BasicTicker"}},"id":"56308","type":"Grid"},{"attributes":{},"id":"56273","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13],"top":{"__ndarray__":"nMQgsHJokT/b+X5qvHSzPzeJQWDl0MI/nu+nxks3yT9KDAIrhxbJPzeJQWDl0MI/KVyPwvUovD9U46WbxCCwPzm0yHa+n5o/eekmMQisjD/6fmq8dJNoP/p+arx0k2g//Knx0k1iUD8=","dtype":"float64","shape":[13]}},"selected":{"id":"56356","type":"Selection"},"selection_policy":{"id":"56355","type":"UnionRenderers"}},"id":"56322","type":"ColumnDataSource"},{"attributes":{"text":""},"id":"56327","type":"Title"},{"attributes":{"ticker":{"id":"56300","type":"BasicTicker"}},"id":"56303","type":"Grid"},{"attributes":{},"id":"56352","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"56325","type":"GlyphRenderer"}]},"id":"56335","type":"LegendItem"},{"attributes":{},"id":"56310","type":"WheelZoomTool"},{"attributes":{},"id":"56350","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"56336","type":"ColumnDataSource"}},"id":"56340","type":"CDSView"},{"attributes":{},"id":"56295","type":"LinearScale"},{"attributes":{},"id":"56355","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"56359","type":"Selection"},"selection_policy":{"id":"56358","type":"UnionRenderers"}},"id":"56336","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56333","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"56258","subtype":"Figure","type":"Plot"},{"id":"56290","subtype":"Figure","type":"Plot"}]},"id":"56341","type":"Row"},{"attributes":{},"id":"56277","type":"PanTool"},{"attributes":{"overlay":{"id":"56333","type":"BoxAnnotation"}},"id":"56279","type":"BoxZoomTool"}],"root_ids":["56341"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"155c77ee-6075-43a7-abea-a9d714d23e1b","roots":{"56341":"0876f589-9467-4340-92c0-951facd83554"}}];
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