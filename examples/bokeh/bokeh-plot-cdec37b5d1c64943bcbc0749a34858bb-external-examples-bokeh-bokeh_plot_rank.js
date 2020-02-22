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
      };var element = document.getElementById("04c04114-6214-483a-9e2e-f6cd7cca604f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '04c04114-6214-483a-9e2e-f6cd7cca604f' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e6808f74-cc69-435b-be50-76c5b75f1460":{"roots":{"references":[{"attributes":{"callback":null,"overlay":{"id":"78893","type":"PolyAnnotation"}},"id":"78776","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78907","type":"BoxAnnotation"},{"attributes":{"source":{"id":"78837","type":"ColumnDataSource"}},"id":"78841","type":"CDSView"},{"attributes":{"source":{"id":"78843","type":"ColumnDataSource"}},"id":"78847","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78839","type":"VBar"},{"attributes":{"overlay":{"id":"78891","type":"BoxAnnotation"}},"id":"78773","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78838","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78897","type":"Selection"},"selection_policy":{"id":"78896","type":"UnionRenderers"}},"id":"78837","type":"ColumnDataSource"},{"attributes":{},"id":"78900","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78908","type":"BoxAnnotation"},{"attributes":{},"id":"78901","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78844","type":"VBar"},{"attributes":{"source":{"id":"78849","type":"ColumnDataSource"}},"id":"78853","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"78909","type":"PolyAnnotation"},{"attributes":{},"id":"78763","type":"BasicTicker"},{"attributes":{"children":[[{"id":"78753","subtype":"Figure","type":"Plot"},0,0],[{"id":"78793","subtype":"Figure","type":"Plot"},0,1]]},"id":"78919","type":"GridBox"},{"attributes":{"data_source":{"id":"78837","type":"ColumnDataSource"},"glyph":{"id":"78838","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78839","type":"VBar"},"selection_glyph":null,"view":{"id":"78841","type":"CDSView"}},"id":"78840","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78899","type":"Selection"},"selection_policy":{"id":"78898","type":"UnionRenderers"}},"id":"78843","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"78842","type":"Span"},{"attributes":{},"id":"78888","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"78754","type":"DataRange1d"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78845","type":"VBar"},{"attributes":{"callback":null},"id":"78756","type":"DataRange1d"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78850","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78832","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78861","type":"VBar"},{"attributes":{"data_source":{"id":"78843","type":"ColumnDataSource"},"glyph":{"id":"78844","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78845","type":"VBar"},"selection_glyph":null,"view":{"id":"78847","type":"CDSView"}},"id":"78846","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78901","type":"Selection"},"selection_policy":{"id":"78900","type":"UnionRenderers"}},"id":"78849","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"78763","type":"BasicTicker"}},"id":"78766","type":"Grid"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"78848","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78851","type":"VBar"},{"attributes":{"children":[{"id":"78921","type":"ToolbarBox"},{"id":"78919","type":"GridBox"}]},"id":"78922","type":"Column"},{"attributes":{},"id":"78890","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"78849","type":"ColumnDataSource"},"glyph":{"id":"78850","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78851","type":"VBar"},"selection_glyph":null,"view":{"id":"78853","type":"CDSView"}},"id":"78852","type":"GlyphRenderer"},{"attributes":{"source":{"id":"78859","type":"ColumnDataSource"}},"id":"78863","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"78854","type":"Span"},{"attributes":{"below":[{"id":"78800","type":"LinearAxis"}],"center":[{"id":"78804","type":"Grid"},{"id":"78809","type":"Grid"},{"id":"78864","type":"Span"},{"id":"78870","type":"Span"},{"id":"78876","type":"Span"},{"id":"78882","type":"Span"}],"left":[{"id":"78805","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78862","type":"GlyphRenderer"},{"id":"78868","type":"GlyphRenderer"},{"id":"78874","type":"GlyphRenderer"},{"id":"78880","type":"GlyphRenderer"}],"title":{"id":"78885","type":"Title"},"toolbar":{"id":"78820","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78754","type":"DataRange1d"},"x_scale":{"id":"78796","type":"LinearScale"},"y_range":{"id":"78756","type":"DataRange1d"},"y_scale":{"id":"78798","type":"LinearScale"}},"id":"78793","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"ticker":{"id":"78806","type":"BasicTicker"}},"id":"78809","type":"Grid"},{"attributes":{"source":{"id":"78871","type":"ColumnDataSource"}},"id":"78875","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"78908","type":"BoxAnnotation"}},"id":"78813","type":"BoxSelectTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"78883","type":"FixedTicker"},{"attributes":{"callback":null,"overlay":{"id":"78909","type":"PolyAnnotation"}},"id":"78814","type":"LassoSelectTool"},{"attributes":{"text":"tau"},"id":"78857","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78810","type":"PanTool"},{"id":"78811","type":"BoxZoomTool"},{"id":"78812","type":"WheelZoomTool"},{"id":"78813","type":"BoxSelectTool"},{"id":"78814","type":"LassoSelectTool"},{"id":"78815","type":"UndoTool"},{"id":"78816","type":"RedoTool"},{"id":"78817","type":"ResetTool"},{"id":"78818","type":"SaveTool"},{"id":"78819","type":"HoverTool"}]},"id":"78820","type":"Toolbar"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78891","type":"BoxAnnotation"},{"attributes":{},"id":"78910","type":"UnionRenderers"},{"attributes":{"ticker":{"id":"78801","type":"BasicTicker"}},"id":"78804","type":"Grid"},{"attributes":{},"id":"78911","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78860","type":"VBar"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78911","type":"Selection"},"selection_policy":{"id":"78910","type":"UnionRenderers"}},"id":"78859","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"78864","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"78892","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78866","type":"VBar"},{"attributes":{},"id":"78774","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"78859","type":"ColumnDataSource"},"glyph":{"id":"78860","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78861","type":"VBar"},"selection_glyph":null,"view":{"id":"78863","type":"CDSView"}},"id":"78862","type":"GlyphRenderer"},{"attributes":{},"id":"78816","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"78893","type":"PolyAnnotation"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78867","type":"VBar"},{"attributes":{"source":{"id":"78865","type":"ColumnDataSource"}},"id":"78869","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"78892","type":"BoxAnnotation"}},"id":"78775","type":"BoxSelectTool"},{"attributes":{},"id":"78815","type":"UndoTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78913","type":"Selection"},"selection_policy":{"id":"78912","type":"UnionRenderers"}},"id":"78865","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"78768","type":"BasicTicker"}},"id":"78771","type":"Grid"},{"attributes":{},"id":"78812","type":"WheelZoomTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"78855","type":"FixedTicker"},{"attributes":{"overlay":{"id":"78907","type":"BoxAnnotation"}},"id":"78811","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78872","type":"VBar"},{"attributes":{"source":{"id":"78877","type":"ColumnDataSource"}},"id":"78881","type":"CDSView"},{"attributes":{},"id":"78912","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"78865","type":"ColumnDataSource"},"glyph":{"id":"78866","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78867","type":"VBar"},"selection_glyph":null,"view":{"id":"78869","type":"CDSView"}},"id":"78868","type":"GlyphRenderer"},{"attributes":{},"id":"78913","type":"Selection"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78915","type":"Selection"},"selection_policy":{"id":"78914","type":"UnionRenderers"}},"id":"78871","type":"ColumnDataSource"},{"attributes":{},"id":"78897","type":"Selection"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"78870","type":"Span"},{"attributes":{},"id":"78801","type":"BasicTicker"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78873","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78878","type":"VBar"},{"attributes":{"data_source":{"id":"78871","type":"ColumnDataSource"},"glyph":{"id":"78872","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78873","type":"VBar"},"selection_glyph":null,"view":{"id":"78875","type":"CDSView"}},"id":"78874","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78917","type":"Selection"},"selection_policy":{"id":"78916","type":"UnionRenderers"}},"id":"78877","type":"ColumnDataSource"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"78876","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78879","type":"VBar"},{"attributes":{},"id":"78914","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"78772","type":"PanTool"},{"id":"78773","type":"BoxZoomTool"},{"id":"78774","type":"WheelZoomTool"},{"id":"78775","type":"BoxSelectTool"},{"id":"78776","type":"LassoSelectTool"},{"id":"78777","type":"UndoTool"},{"id":"78778","type":"RedoTool"},{"id":"78779","type":"ResetTool"},{"id":"78780","type":"SaveTool"},{"id":"78781","type":"HoverTool"}]},"id":"78782","type":"Toolbar"},{"attributes":{},"id":"78915","type":"Selection"},{"attributes":{},"id":"78780","type":"SaveTool"},{"attributes":{"data_source":{"id":"78877","type":"ColumnDataSource"},"glyph":{"id":"78878","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78879","type":"VBar"},"selection_glyph":null,"view":{"id":"78881","type":"CDSView"}},"id":"78880","type":"GlyphRenderer"},{"attributes":{},"id":"78777","type":"UndoTool"},{"attributes":{},"id":"78779","type":"ResetTool"},{"attributes":{},"id":"78894","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"78882","type":"Span"},{"attributes":{},"id":"78895","type":"Selection"},{"attributes":{},"id":"78772","type":"PanTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"78890","type":"BasicTickFormatter"},"ticker":{"id":"78855","type":"FixedTicker"}},"id":"78767","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"78920","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"78921","type":"ToolbarBox"},{"attributes":{},"id":"78896","type":"UnionRenderers"},{"attributes":{"text":"mu"},"id":"78885","type":"Title"},{"attributes":{},"id":"78778","type":"RedoTool"},{"attributes":{},"id":"78796","type":"LinearScale"},{"attributes":{},"id":"78768","type":"BasicTicker"},{"attributes":{"tools":[{"id":"78772","type":"PanTool"},{"id":"78773","type":"BoxZoomTool"},{"id":"78774","type":"WheelZoomTool"},{"id":"78775","type":"BoxSelectTool"},{"id":"78776","type":"LassoSelectTool"},{"id":"78777","type":"UndoTool"},{"id":"78778","type":"RedoTool"},{"id":"78779","type":"ResetTool"},{"id":"78780","type":"SaveTool"},{"id":"78781","type":"HoverTool"},{"id":"78810","type":"PanTool"},{"id":"78811","type":"BoxZoomTool"},{"id":"78812","type":"WheelZoomTool"},{"id":"78813","type":"BoxSelectTool"},{"id":"78814","type":"LassoSelectTool"},{"id":"78815","type":"UndoTool"},{"id":"78816","type":"RedoTool"},{"id":"78817","type":"ResetTool"},{"id":"78818","type":"SaveTool"},{"id":"78819","type":"HoverTool"}]},"id":"78920","type":"ProxyToolbar"},{"attributes":{},"id":"78806","type":"BasicTicker"},{"attributes":{"axis_label":"Chain","formatter":{"id":"78906","type":"BasicTickFormatter"},"ticker":{"id":"78883","type":"FixedTicker"}},"id":"78805","type":"LinearAxis"},{"attributes":{},"id":"78904","type":"BasicTickFormatter"},{"attributes":{},"id":"78916","type":"UnionRenderers"},{"attributes":{},"id":"78810","type":"PanTool"},{"attributes":{},"id":"78917","type":"Selection"},{"attributes":{},"id":"78798","type":"LinearScale"},{"attributes":{},"id":"78758","type":"LinearScale"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"78904","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78801","type":"BasicTicker"}},"id":"78800","type":"LinearAxis"},{"attributes":{"callback":null},"id":"78781","type":"HoverTool"},{"attributes":{"callback":null,"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","shape":[19]}},"selected":{"id":"78895","type":"Selection"},"selection_policy":{"id":"78894","type":"UnionRenderers"}},"id":"78831","type":"ColumnDataSource"},{"attributes":{},"id":"78818","type":"SaveTool"},{"attributes":{"below":[{"id":"78762","type":"LinearAxis"}],"center":[{"id":"78766","type":"Grid"},{"id":"78771","type":"Grid"},{"id":"78836","type":"Span"},{"id":"78842","type":"Span"},{"id":"78848","type":"Span"},{"id":"78854","type":"Span"}],"left":[{"id":"78767","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"78834","type":"GlyphRenderer"},{"id":"78840","type":"GlyphRenderer"},{"id":"78846","type":"GlyphRenderer"},{"id":"78852","type":"GlyphRenderer"}],"title":{"id":"78857","type":"Title"},"toolbar":{"id":"78782","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"78754","type":"DataRange1d"},"x_scale":{"id":"78758","type":"LinearScale"},"y_range":{"id":"78756","type":"DataRange1d"},"y_scale":{"id":"78760","type":"LinearScale"}},"id":"78753","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"78817","type":"ResetTool"},{"attributes":{},"id":"78898","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"78819","type":"HoverTool"},{"attributes":{},"id":"78899","type":"Selection"},{"attributes":{},"id":"78906","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"78831","type":"ColumnDataSource"},"glyph":{"id":"78832","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78833","type":"VBar"},"selection_glyph":null,"view":{"id":"78835","type":"CDSView"}},"id":"78834","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"78836","type":"Span"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"78888","type":"BasicTickFormatter"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"78763","type":"BasicTicker"}},"id":"78762","type":"LinearAxis"},{"attributes":{"source":{"id":"78831","type":"ColumnDataSource"}},"id":"78835","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"78833","type":"VBar"},{"attributes":{},"id":"78760","type":"LinearScale"}],"root_ids":["78922"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"e6808f74-cc69-435b-be50-76c5b75f1460","roots":{"78922":"04c04114-6214-483a-9e2e-f6cd7cca604f"}}];
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