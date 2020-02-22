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
      };var element = document.getElementById("63b26b77-97a5-47c6-bfee-c3bef2e4aa9f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '63b26b77-97a5-47c6-bfee-c3bef2e4aa9f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"db49c5ee-8d6a-499b-ad68-f3981d90080c":{"roots":{"references":[{"attributes":{"data_source":{"id":"74567","type":"ColumnDataSource"},"glyph":{"id":"74566","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74569","type":"CDSView"}},"id":"74568","type":"GlyphRenderer"},{"attributes":{"source":{"id":"74567","type":"ColumnDataSource"}},"id":"74569","type":"CDSView"},{"attributes":{},"id":"74602","type":"BasicTickFormatter"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74580","type":"Dash"},{"attributes":{"text":"tau"},"id":"74570","type":"Title"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74608","type":"Selection"},"selection_policy":{"id":"74607","type":"UnionRenderers"}},"id":"74572","type":"ColumnDataSource"},{"attributes":{},"id":"74493","type":"BasicTicker"},{"attributes":{"source":{"id":"74581","type":"ColumnDataSource"}},"id":"74583","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74574","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74604","type":"BoxAnnotation"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74573","type":"Circle"},{"attributes":{},"id":"74497","type":"PanTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"74577","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74589","type":"BasicTickFormatter"},"ticker":{"id":"74493","type":"BasicTicker"}},"id":"74492","type":"LinearAxis"},{"attributes":{"data_source":{"id":"74572","type":"ColumnDataSource"},"glyph":{"id":"74573","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74574","type":"Circle"},"selection_glyph":null,"view":{"id":"74576","type":"CDSView"}},"id":"74575","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74605","type":"BoxAnnotation"},{"attributes":{"source":{"id":"74572","type":"ColumnDataSource"}},"id":"74576","type":"CDSView"},{"attributes":{},"id":"74594","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"74506","type":"HoverTool"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74610","type":"Selection"},"selection_policy":{"id":"74609","type":"UnionRenderers"}},"id":"74581","type":"ColumnDataSource"},{"attributes":{},"id":"74595","type":"Selection"},{"attributes":{"toolbar":{"id":"74613","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"74614","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74606","type":"PolyAnnotation"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"74578","type":"Span"},{"attributes":{"data_source":{"id":"74581","type":"ColumnDataSource"},"glyph":{"id":"74580","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"74583","type":"CDSView"}},"id":"74582","type":"GlyphRenderer"},{"attributes":{"text":"mu"},"id":"74584","type":"Title"},{"attributes":{"tools":[{"id":"74497","type":"PanTool"},{"id":"74498","type":"BoxZoomTool"},{"id":"74499","type":"WheelZoomTool"},{"id":"74500","type":"BoxSelectTool"},{"id":"74501","type":"LassoSelectTool"},{"id":"74502","type":"UndoTool"},{"id":"74503","type":"RedoTool"},{"id":"74504","type":"ResetTool"},{"id":"74505","type":"SaveTool"},{"id":"74506","type":"HoverTool"},{"id":"74537","type":"PanTool"},{"id":"74538","type":"BoxZoomTool"},{"id":"74539","type":"WheelZoomTool"},{"id":"74540","type":"BoxSelectTool"},{"id":"74541","type":"LassoSelectTool"},{"id":"74542","type":"UndoTool"},{"id":"74543","type":"RedoTool"},{"id":"74544","type":"ResetTool"},{"id":"74545","type":"SaveTool"},{"id":"74546","type":"HoverTool"}]},"id":"74613","type":"ProxyToolbar"},{"attributes":{},"id":"74505","type":"SaveTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74497","type":"PanTool"},{"id":"74498","type":"BoxZoomTool"},{"id":"74499","type":"WheelZoomTool"},{"id":"74500","type":"BoxSelectTool"},{"id":"74501","type":"LassoSelectTool"},{"id":"74502","type":"UndoTool"},{"id":"74503","type":"RedoTool"},{"id":"74504","type":"ResetTool"},{"id":"74505","type":"SaveTool"},{"id":"74506","type":"HoverTool"}]},"id":"74507","type":"Toolbar"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74579","type":"Span"},{"attributes":{},"id":"74528","type":"BasicTicker"},{"attributes":{},"id":"74499","type":"WheelZoomTool"},{"attributes":{},"id":"74596","type":"UnionRenderers"},{"attributes":{},"id":"74597","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74587","type":"BasicTickFormatter"},"ticker":{"id":"74488","type":"BasicTicker"}},"id":"74487","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"74493","type":"BasicTicker"}},"id":"74496","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"74592","type":"BoxAnnotation"}},"id":"74500","type":"BoxSelectTool"},{"attributes":{},"id":"74504","type":"ResetTool"},{"attributes":{"callback":null},"id":"74479","type":"DataRange1d"},{"attributes":{},"id":"74607","type":"UnionRenderers"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"74600","type":"BasicTickFormatter"},"ticker":{"id":"74528","type":"BasicTicker"}},"id":"74527","type":"LinearAxis"},{"attributes":{},"id":"74608","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"74595","type":"Selection"},"selection_policy":{"id":"74594","type":"UnionRenderers"}},"id":"74558","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"74487","type":"LinearAxis"}],"center":[{"id":"74491","type":"Grid"},{"id":"74496","type":"Grid"}],"left":[{"id":"74492","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74561","type":"GlyphRenderer"},{"id":"74563","type":"Span"},{"id":"74564","type":"Span"},{"id":"74565","type":"Span"},{"id":"74568","type":"GlyphRenderer"}],"title":{"id":"74570","type":"Title"},"toolbar":{"id":"74507","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74479","type":"DataRange1d"},"x_scale":{"id":"74483","type":"LinearScale"},"y_range":{"id":"74481","type":"DataRange1d"},"y_scale":{"id":"74485","type":"LinearScale"}},"id":"74478","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"overlay":{"id":"74593","type":"PolyAnnotation"}},"id":"74501","type":"LassoSelectTool"},{"attributes":{},"id":"74525","type":"LinearScale"},{"attributes":{},"id":"74483","type":"LinearScale"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74481","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74559","type":"Circle"},{"attributes":{"overlay":{"id":"74591","type":"BoxAnnotation"}},"id":"74498","type":"BoxZoomTool"},{"attributes":{},"id":"74485","type":"LinearScale"},{"attributes":{},"id":"74488","type":"BasicTicker"},{"attributes":{},"id":"74609","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"74488","type":"BasicTicker"}},"id":"74491","type":"Grid"},{"attributes":{},"id":"74610","type":"Selection"},{"attributes":{},"id":"74503","type":"RedoTool"},{"attributes":{},"id":"74587","type":"BasicTickFormatter"},{"attributes":{},"id":"74502","type":"UndoTool"},{"attributes":{"callback":null},"id":"74519","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"74560","type":"Circle"},{"attributes":{"children":[[{"id":"74478","subtype":"Figure","type":"Plot"},0,0],[{"id":"74518","subtype":"Figure","type":"Plot"},0,1]]},"id":"74612","type":"GridBox"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"74521","type":"DataRange1d"},{"attributes":{},"id":"74523","type":"LinearScale"},{"attributes":{},"id":"74537","type":"PanTool"},{"attributes":{"ticker":{"id":"74528","type":"BasicTicker"}},"id":"74531","type":"Grid"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"74602","type":"BasicTickFormatter"},"ticker":{"id":"74533","type":"BasicTicker"}},"id":"74532","type":"LinearAxis"},{"attributes":{},"id":"74533","type":"BasicTicker"},{"attributes":{"dimension":1,"ticker":{"id":"74533","type":"BasicTicker"}},"id":"74536","type":"Grid"},{"attributes":{},"id":"74543","type":"RedoTool"},{"attributes":{},"id":"74589","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"74537","type":"PanTool"},{"id":"74538","type":"BoxZoomTool"},{"id":"74539","type":"WheelZoomTool"},{"id":"74540","type":"BoxSelectTool"},{"id":"74541","type":"LassoSelectTool"},{"id":"74542","type":"UndoTool"},{"id":"74543","type":"RedoTool"},{"id":"74544","type":"ResetTool"},{"id":"74545","type":"SaveTool"},{"id":"74546","type":"HoverTool"}]},"id":"74547","type":"Toolbar"},{"attributes":{"overlay":{"id":"74604","type":"BoxAnnotation"}},"id":"74538","type":"BoxZoomTool"},{"attributes":{},"id":"74542","type":"UndoTool"},{"attributes":{},"id":"74539","type":"WheelZoomTool"},{"attributes":{"callback":null,"overlay":{"id":"74605","type":"BoxAnnotation"}},"id":"74540","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"74606","type":"PolyAnnotation"}},"id":"74541","type":"LassoSelectTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"74564","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74591","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"74614","type":"ToolbarBox"},{"id":"74612","type":"GridBox"}]},"id":"74615","type":"Column"},{"attributes":{},"id":"74544","type":"ResetTool"},{"attributes":{},"id":"74600","type":"BasicTickFormatter"},{"attributes":{},"id":"74545","type":"SaveTool"},{"attributes":{"callback":null},"id":"74546","type":"HoverTool"},{"attributes":{"data_source":{"id":"74558","type":"ColumnDataSource"},"glyph":{"id":"74559","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"74560","type":"Circle"},"selection_glyph":null,"view":{"id":"74562","type":"CDSView"}},"id":"74561","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"74592","type":"BoxAnnotation"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"74565","type":"Span"},{"attributes":{"below":[{"id":"74527","type":"LinearAxis"}],"center":[{"id":"74531","type":"Grid"},{"id":"74536","type":"Grid"}],"left":[{"id":"74532","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"74575","type":"GlyphRenderer"},{"id":"74577","type":"Span"},{"id":"74578","type":"Span"},{"id":"74579","type":"Span"},{"id":"74582","type":"GlyphRenderer"}],"title":{"id":"74584","type":"Title"},"toolbar":{"id":"74547","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"74519","type":"DataRange1d"},"x_scale":{"id":"74523","type":"LinearScale"},"y_range":{"id":"74521","type":"DataRange1d"},"y_scale":{"id":"74525","type":"LinearScale"}},"id":"74518","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"74593","type":"PolyAnnotation"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"74597","type":"Selection"},"selection_policy":{"id":"74596","type":"UnionRenderers"}},"id":"74567","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"74563","type":"Span"},{"attributes":{"source":{"id":"74558","type":"ColumnDataSource"}},"id":"74562","type":"CDSView"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"74566","type":"Dash"}],"root_ids":["74615"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"db49c5ee-8d6a-499b-ad68-f3981d90080c","roots":{"74615":"63b26b77-97a5-47c6-bfee-c3bef2e4aa9f"}}];
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