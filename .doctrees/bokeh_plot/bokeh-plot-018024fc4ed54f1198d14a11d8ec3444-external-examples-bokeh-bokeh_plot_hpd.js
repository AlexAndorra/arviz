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
      };var element = document.getElementById("69beb713-305a-41a2-99a6-f11fd2ccd8f3");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '69beb713-305a-41a2-99a6-f11fd2ccd8f3' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1bdb44c3-db99-4b84-b62a-add111613337":{"roots":{"references":[{"attributes":{"below":[{"id":"57807","type":"LinearAxis"}],"center":[{"id":"57811","type":"Grid"},{"id":"57816","type":"Grid"}],"left":[{"id":"57812","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"57841","type":"GlyphRenderer"},{"id":"57846","type":"GlyphRenderer"}],"title":{"id":"57848","type":"Title"},"toolbar":{"id":"57827","type":"Toolbar"},"x_range":{"id":"57799","type":"DataRange1d"},"x_scale":{"id":"57803","type":"LinearScale"},"y_range":{"id":"57801","type":"DataRange1d"},"y_scale":{"id":"57805","type":"LinearScale"}},"id":"57798","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"57854","type":"BoxAnnotation"}},"id":"57818","type":"BoxZoomTool"},{"attributes":{},"id":"57858","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"57845","type":"Line"},{"attributes":{"data_source":{"id":"57843","type":"ColumnDataSource"},"glyph":{"id":"57844","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57845","type":"Line"},"selection_glyph":null,"view":{"id":"57847","type":"CDSView"}},"id":"57846","type":"GlyphRenderer"},{"attributes":{},"id":"57808","type":"BasicTicker"},{"attributes":{"data_source":{"id":"57838","type":"ColumnDataSource"},"glyph":{"id":"57839","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"57840","type":"Patch"},"selection_glyph":null,"view":{"id":"57842","type":"CDSView"}},"id":"57841","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"57856","type":"PolyAnnotation"}},"id":"57821","type":"LassoSelectTool"},{"attributes":{"formatter":{"id":"57850","type":"BasicTickFormatter"},"ticker":{"id":"57808","type":"BasicTicker"}},"id":"57807","type":"LinearAxis"},{"attributes":{},"id":"57805","type":"LinearScale"},{"attributes":{"callback":null},"id":"57826","type":"HoverTool"},{"attributes":{},"id":"57850","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57855","type":"BoxAnnotation"},{"attributes":{},"id":"57803","type":"LinearScale"},{"attributes":{},"id":"57825","type":"SaveTool"},{"attributes":{},"id":"57852","type":"BasicTickFormatter"},{"attributes":{},"id":"57857","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"57858","type":"Selection"},"selection_policy":{"id":"57857","type":"UnionRenderers"}},"id":"57838","type":"ColumnDataSource"},{"attributes":{},"id":"57813","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"57817","type":"PanTool"},{"id":"57818","type":"BoxZoomTool"},{"id":"57819","type":"WheelZoomTool"},{"id":"57820","type":"BoxSelectTool"},{"id":"57821","type":"LassoSelectTool"},{"id":"57822","type":"UndoTool"},{"id":"57823","type":"RedoTool"},{"id":"57824","type":"ResetTool"},{"id":"57825","type":"SaveTool"},{"id":"57826","type":"HoverTool"}]},"id":"57827","type":"Toolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Keq0FSvvAMA1OxTG8DQAwBQcz/q8kvy/gef0dXxT/L/xtQNfvL/6v1dkXWXpFPq/rr90LA2b979S89dHizr2vxgcwPrgL/a/Io7YyP8a9r+9Gmd3U930vzQJtB3jivS/6a7sd1F49L/UibPeGaHzv1lBkuN8m/O/TS5+q2NP879BMTZM7xrzv7+IHG7quPK/v5XCOsrb8b++uPstDkLxv92QEX3lhvC/KNb1WyHE77+rIJY9q/Xuv2ye0NqvtO6/7S3Gn/Ij7r8KZ7Oz1K7tv37yXNd6bey/ai//ZccG7L89mSusuz/qv9exbYCjFuq/u2jJpvFj6b8aYKeGrSXpv6VUi+499Oa/gzQeQkpD5r+1VWRmsGPlv5M3/jXYoeK/UzsMLkGy4b/hniAGj7bgv3Y3QVcsoeC/n/K6mZd74L8TxsoiPLzev8fatlHXrN6/3OkE7GRk3b+0y1GMoTnav+i7zp2tedm/qyJqpUbD17+xlnaDrfXWvxmCAC1AldW/16zotoz90b/f9n8m5uXQv2iTFt7IYNC/bQjTdrEPvr9M7FteTti7v1vc6jZnt62/PHvgqWeopr/0MQdNyA+cv3IOqkeTSpO/wm36jhG/sT9tUFcEkwSzP5fDP0VwGLo/jPJQ6ueiyz+NQlR+7Z3MP2CNiET1JdQ/AynPfROo1D9KezBxktjWPwTquXWYWto/7cuQowu83D/3bPgOsVjdP88yKOZTs90/EF7TApdD3j/7lefV/o3gPzUkyIdNY+M/A86uF67U5D+lySZ8fGHlP1rMoRKcLOY/RyuCIjhR5j/GdOflt1vmP9Fa3X5Eruc/VVEtIy6H6D9SNvC/f8noP2GvGB2gkew/hX7eGlSV7T9XliBxu/nvP7vm8vjxjvA/g+XPK9068j9WpUJFRYnyP3ORriOjnfI//Gz+HIqa8z8ajRrCahn1P+BL48n5jvU/ovvFJxbr9T++dNNsHnD2P++Ew65TRvc/5XWsYDYy+D9tSn7Wj2P4P7N8AfxMcfg/4zlJJpe1+D8aZL0Tfej4P8TKpxUxefo/bBWFBioGA0A=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"riuW1Kkh7j+WiddzHpbvP/ZxmIKhtvE/QIwFxUHW8T8IJX7QIaDyP9RNUU2L9fI/KaDFaXky9D9XBhRcuuL0P/Txn4IP6PQ/77iTG4Dy9D+ickxEVpH1P2b7JXGOuvU/jKgJRNfD9T8WO6YQcy/2P1TfNo5BMvY/2uhAKk5Y9j9g5+RZiHL2P6C78ciKo/Y/ILWe4hoS9z+hIwLp+F73P5I3d0GNvPc/dooCqfcO+D/Vd5owlUL4P2XYSwnUUvg/hXQOWAN3+D8+JhPTSpT4P2DDKEqh5Pg/JjSAJk7++D+xGfUUEXD5P4qT5B9Xevk/0aVNlgOn+T/6J1aelLb5P9cqXYTwQvo/33J4by1v+j+T6mbmE6f6PxtygPKJV/s/K/F8tG+T+z9I2Hc+XNL7PyKyL+q01/s/WEORGRrh+z8+p6Z7eCj8P6ckyRVlKvw/xGJ/YnNT/D+KxnXOy7j8P4MoRkzK0Pw/q7tSK5cH/T8qLZFPSiH9P73vX/pXTf0/ZeoiaU7A/T8kATA7Q+P9P5MtPeTm8/0/vWdJdIIP/z+eIA2NPSH/P49UJGMiif8/E35YYV6l/z+c8WVv4Mf/P+OrcNlq2f8/t+k7RvxGAEBCXRFMEkwAQA7/FMFhaABAlIdSPxfdAEAUovJr7+QAQNaISFRfQgFAkPLcN4FKAUC1BxMniW0BQKCeW4eppQFAvww5usDLAUDPhu8Qi9UBQC2DYj412wFA4TUtcDnkAUC/8rzavxECQIcE+bBpbAJAwNn1wpWaAkA12YSPL6wCQIs5VIKTxQJAaUVQBCfKAkCZ7rz8dssCQFqr24/I9QJAK6plxOUQA0DKBv73LxkDQOwVowM0kgNA0c9bg6qyA0DLEiRuN/8DQK+5PH68IwRAYfnzSreOBEBWqVBRUaIEQF2k68hopwRAP5s/h6LmBEBGo4awWkYFQPjSeHK+YwVA6H7xicV6BUAw3TSbB5wFQDzhsOuU0QVAeR0rmI0MBkCbkp/14xgGQC1fAD9THAZAeU6SyWUtBkAGWe9EHzoGQLHyaUVMngZAtopCAxWDCUA=","dtype":"float64","shape":[100]}},"selected":{"id":"57860","type":"Selection"},"selection_policy":{"id":"57859","type":"UnionRenderers"}},"id":"57843","type":"ColumnDataSource"},{"attributes":{"source":{"id":"57843","type":"ColumnDataSource"}},"id":"57847","type":"CDSView"},{"attributes":{"text":""},"id":"57848","type":"Title"},{"attributes":{"formatter":{"id":"57852","type":"BasicTickFormatter"},"ticker":{"id":"57813","type":"BasicTicker"}},"id":"57812","type":"LinearAxis"},{"attributes":{},"id":"57819","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"57813","type":"BasicTicker"}},"id":"57816","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"57840","type":"Patch"},{"attributes":{},"id":"57822","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"57855","type":"BoxAnnotation"}},"id":"57820","type":"BoxSelectTool"},{"attributes":{},"id":"57817","type":"PanTool"},{"attributes":{"ticker":{"id":"57808","type":"BasicTicker"}},"id":"57811","type":"Grid"},{"attributes":{},"id":"57859","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"57801","type":"DataRange1d"},{"attributes":{},"id":"57824","type":"ResetTool"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"57844","type":"Line"},{"attributes":{},"id":"57860","type":"Selection"},{"attributes":{"source":{"id":"57838","type":"ColumnDataSource"}},"id":"57842","type":"CDSView"},{"attributes":{},"id":"57823","type":"RedoTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"57839","type":"Patch"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"57856","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"57799","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"57854","type":"BoxAnnotation"}],"root_ids":["57798"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"1bdb44c3-db99-4b84-b62a-add111613337","roots":{"57798":"69beb713-305a-41a2-99a6-f11fd2ccd8f3"}}];
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