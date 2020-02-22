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
      };var element = document.getElementById("deb718f2-2823-4bbe-9b01-dcbfc7eb5ac9");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'deb718f2-2823-4bbe-9b01-dcbfc7eb5ac9' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a397804c-9751-45a4-a440-ec81c62e9f6f":{"roots":{"references":[{"attributes":{"tools":[{"id":"56702","type":"PanTool"},{"id":"56703","type":"BoxZoomTool"},{"id":"56704","type":"WheelZoomTool"},{"id":"56705","type":"BoxSelectTool"},{"id":"56706","type":"LassoSelectTool"},{"id":"56707","type":"UndoTool"},{"id":"56708","type":"RedoTool"},{"id":"56709","type":"ResetTool"},{"id":"56710","type":"SaveTool"},{"id":"56711","type":"HoverTool"}]},"id":"56767","type":"ProxyToolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"56702","type":"PanTool"},{"id":"56703","type":"BoxZoomTool"},{"id":"56704","type":"WheelZoomTool"},{"id":"56705","type":"BoxSelectTool"},{"id":"56706","type":"LassoSelectTool"},{"id":"56707","type":"UndoTool"},{"id":"56708","type":"RedoTool"},{"id":"56709","type":"ResetTool"},{"id":"56710","type":"SaveTool"},{"id":"56711","type":"HoverTool"}]},"id":"56712","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56764","type":"Selection"},"selection_policy":{"id":"56763","type":"UnionRenderers"}},"id":"56738","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"56738","type":"ColumnDataSource"},"glyph":{"id":"56739","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56740","type":"Circle"},"selection_glyph":null,"view":{"id":"56742","type":"CDSView"}},"id":"56741","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56740","type":"Circle"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"56750","type":"BasicTickFormatter"},"ticker":{"id":"56693","type":"BasicTicker"}},"id":"56692","type":"LinearAxis"},{"attributes":{},"id":"56752","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"56711","type":"HoverTool"},{"attributes":{},"id":"56759","type":"UnionRenderers"},{"attributes":{},"id":"56762","type":"Selection"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56729","type":"Line"},{"attributes":{"overlay":{"id":"56754","type":"BoxAnnotation"}},"id":"56703","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56739","type":"Circle"},{"attributes":{},"id":"56704","type":"WheelZoomTool"},{"attributes":{},"id":"56707","type":"UndoTool"},{"attributes":{"toolbar":{"id":"56767","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"56768","type":"ToolbarBox"},{"attributes":{"above":[{"id":"56744","type":"Legend"}],"below":[{"id":"56692","type":"LinearAxis"}],"center":[{"id":"56696","type":"Grid"},{"id":"56701","type":"Grid"}],"left":[{"id":"56697","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"56726","type":"GlyphRenderer"},{"id":"56731","type":"GlyphRenderer"},{"id":"56736","type":"GlyphRenderer"},{"id":"56741","type":"GlyphRenderer"},{"id":"56743","type":"Span"}],"title":{"id":"56747","type":"Title"},"toolbar":{"id":"56712","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"56684","type":"DataRange1d"},"x_scale":{"id":"56688","type":"LinearScale"},"y_range":{"id":"56686","type":"DataRange1d"},"y_scale":{"id":"56690","type":"LinearScale"}},"id":"56683","subtype":"Figure","type":"Plot"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56735","type":"Line"},{"attributes":{},"id":"56710","type":"SaveTool"},{"attributes":{},"id":"56763","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56762","type":"Selection"},"selection_policy":{"id":"56761","type":"UnionRenderers"}},"id":"56733","type":"ColumnDataSource"},{"attributes":{},"id":"56688","type":"LinearScale"},{"attributes":{},"id":"56758","type":"Selection"},{"attributes":{},"id":"56708","type":"RedoTool"},{"attributes":{},"id":"56693","type":"BasicTicker"},{"attributes":{"source":{"id":"56728","type":"ColumnDataSource"}},"id":"56732","type":"CDSView"},{"attributes":{"callback":null},"id":"56684","type":"DataRange1d"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"56734","type":"Line"},{"attributes":{"children":[{"id":"56768","type":"ToolbarBox"},{"id":"56766","type":"GridBox"}]},"id":"56769","type":"Column"},{"attributes":{"data_source":{"id":"56723","type":"ColumnDataSource"},"glyph":{"id":"56724","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56725","type":"Circle"},"selection_glyph":null,"view":{"id":"56727","type":"CDSView"}},"id":"56726","type":"GlyphRenderer"},{"attributes":{"source":{"id":"56733","type":"ColumnDataSource"}},"id":"56737","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"56698","type":"BasicTicker"}},"id":"56701","type":"Grid"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56758","type":"Selection"},"selection_policy":{"id":"56757","type":"UnionRenderers"}},"id":"56723","type":"ColumnDataSource"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"56741","type":"GlyphRenderer"},{"id":"56736","type":"GlyphRenderer"}]},"id":"56746","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"56730","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56725","type":"Circle"},{"attributes":{"callback":null,"overlay":{"id":"56756","type":"PolyAnnotation"}},"id":"56706","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"56724","type":"Circle"},{"attributes":{},"id":"56709","type":"ResetTool"},{"attributes":{},"id":"56761","type":"UnionRenderers"},{"attributes":{},"id":"56698","type":"BasicTicker"},{"attributes":{"data_source":{"id":"56733","type":"ColumnDataSource"},"glyph":{"id":"56734","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56735","type":"Line"},"selection_glyph":null,"view":{"id":"56737","type":"CDSView"}},"id":"56736","type":"GlyphRenderer"},{"attributes":{},"id":"56750","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"56755","type":"BoxAnnotation"}},"id":"56705","type":"BoxSelectTool"},{"attributes":{"source":{"id":"56723","type":"ColumnDataSource"}},"id":"56727","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"56756","type":"PolyAnnotation"},{"attributes":{"axis_label":"ESS","formatter":{"id":"56752","type":"BasicTickFormatter"},"ticker":{"id":"56698","type":"BasicTicker"}},"id":"56697","type":"LinearAxis"},{"attributes":{},"id":"56764","type":"Selection"},{"attributes":{"source":{"id":"56738","type":"ColumnDataSource"}},"id":"56742","type":"CDSView"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"56743","type":"Span"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"56760","type":"Selection"},"selection_policy":{"id":"56759","type":"UnionRenderers"}},"id":"56728","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"56728","type":"ColumnDataSource"},"glyph":{"id":"56729","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"56730","type":"Line"},"selection_glyph":null,"view":{"id":"56732","type":"CDSView"}},"id":"56731","type":"GlyphRenderer"},{"attributes":{"text":"b"},"id":"56747","type":"Title"},{"attributes":{"click_policy":"hide","items":[{"id":"56745","type":"LegendItem"},{"id":"56746","type":"LegendItem"}],"location":"center_right","orientation":"horizontal"},"id":"56744","type":"Legend"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56754","type":"BoxAnnotation"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"56726","type":"GlyphRenderer"},{"id":"56731","type":"GlyphRenderer"}]},"id":"56745","type":"LegendItem"},{"attributes":{},"id":"56757","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"56683","subtype":"Figure","type":"Plot"},0,0]]},"id":"56766","type":"GridBox"},{"attributes":{"callback":null},"id":"56686","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"56755","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"56693","type":"BasicTicker"}},"id":"56696","type":"Grid"},{"attributes":{},"id":"56760","type":"Selection"},{"attributes":{},"id":"56702","type":"PanTool"},{"attributes":{},"id":"56690","type":"LinearScale"}],"root_ids":["56769"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"a397804c-9751-45a4-a440-ec81c62e9f6f","roots":{"56769":"deb718f2-2823-4bbe-9b01-dcbfc7eb5ac9"}}];
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