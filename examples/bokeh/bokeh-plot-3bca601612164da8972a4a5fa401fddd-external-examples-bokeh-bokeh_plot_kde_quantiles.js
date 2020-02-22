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
      };var element = document.getElementById("408aacef-7b0d-4f2d-bafc-9f94c9c3b664");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '408aacef-7b0d-4f2d-bafc-9f94c9c3b664' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d3d7ab36-ee38-4d92-a5d4-1fd67410e354":{"roots":{"references":[{"attributes":{},"id":"58729","type":"PanTool"},{"attributes":{"callback":null},"id":"58713","type":"DataRange1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58767","type":"Patch"},{"attributes":{},"id":"58774","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"58711","type":"DataRange1d"},{"attributes":{},"id":"58720","type":"BasicTicker"},{"attributes":{},"id":"58781","type":"UnionRenderers"},{"attributes":{},"id":"58717","type":"LinearScale"},{"attributes":{},"id":"58737","type":"SaveTool"},{"attributes":{},"id":"58782","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Q4FXCESr1T9rrmh6t+vVP5TbeewqLNY/vAiLXp5s1j/lNZzQEa3WPw5jrUKF7dY/NpC+tPgt1z9fvc8mbG7XP4fq4Jjfrtc/sBfyClPv1z/ZRAN9xi/YPwFyFO85cNg/Kp8lYa2w2D9SzDbTIPHYP3v5R0WUMdk/oyZZtwdy2T/MU2ope7LZP/WAe5vu8tk/Ha6MDWIz2j9G251/1XPaP24Ir/FItNo/lzXAY7z02j+/YtHVLzXbP+iP4kejdds/Eb3zuRa22z856gQsivbbP2IXFp79Ntw/ikQnEHF33D+zcTiC5LfcP9ueSfRX+Nw/BMxaZss43T8t+WvYPnndP1UmfUqyud0/flOOvCX63T+mgJ8umTreP8+tsKAMe94/+NrBEoC73j8gCNOE8/veP0k15PZmPN8/cWL1aNp83z+ajwbbTb3fP8K8F03B/d8/9XSUXxof4D+JC50YVD/gPx6ipdGNX+A/sjiuisd/4D9Gz7ZDAaDgP9plv/w6wOA/b/zHtXTg4D8Dk9BurgDhP5cp2SfoIOE/LMDh4CFB4T/AVuqZW2HhP1Tt8lKVgeE/6IP7C8+h4T99GgTFCMLhPxGxDH5C4uE/pUcVN3wC4j863h3wtSLiP850JqnvQuI/YgsvYilj4j/2oTcbY4PiP4s4QNSco+I/H89IjdbD4j+zZVFGEOTiP0j8Wf9JBOM/3JJiuIMk4z9wKWtxvUTjPwXAcyr3ZOM/mVZ84zCF4z8t7YScaqXjP8GDjVWkxeM/VhqWDt7l4z/qsJ7HFwbkP35Hp4BRJuQ/E96vOYtG5D+ndLjyxGbkPzsLwav+huQ/z6HJZDin5D9kONIdcsfkP/jO2tar5+Q/jGXjj+UH5T8h/OtIHyjlP7WS9AFZSOU/SSn9upJo5T/dvwV0zIjlP3JWDi0GqeU/Bu0W5j/J5T+agx+feenlPy8aKFizCeY/w7AwEe0p5j9XRznKJkrmP+vdQYNgauY/gHRKPJqK5j8UC1P106rmP6ihW64Ny+Y/PThkZ0fr5j/RzmwggQvnP2Vlddm6K+c/+ft9kvRL5z+OkoZLLmznPyIpjwRojOc/tr+XvaGs5z9LVqB228znP9/sqC8V7ec/c4Ox6E4N6D8IGrqhiC3oP5ywwlrCTeg/MEfLE/xt6D/E3dPMNY7oP1l03IVvrug/7QrlPqnO6D+Boe334u7oP4Gh7ffi7ug/gaHt9+Lu6D/tCuU+qc7oP1l03IVvrug/xN3TzDWO6D8wR8sT/G3oP5ywwlrCTeg/CBq6oYgt6D9zg7HoTg3oP9/sqC8V7ec/S1agdtvM5z+2v5e9oaznPyIpjwRojOc/jpKGSy5s5z/5+32S9EvnP2Vlddm6K+c/0c5sIIEL5z89OGRnR+vmP6ihW64Ny+Y/FAtT9dOq5j+AdEo8mormP+vdQYNgauY/V0c5yiZK5j/DsDAR7SnmPy8aKFizCeY/moMfn3np5T8G7RbmP8nlP3JWDi0GqeU/3b8FdMyI5T9JKf26kmjlP7WS9AFZSOU/IfzrSB8o5T+MZeOP5QflP/jO2tar5+Q/ZDjSHXLH5D/PoclkOKfkPzsLwav+huQ/p3S48sRm5D8T3q85i0bkP35Hp4BRJuQ/6rCexxcG5D9WGpYO3uXjP8GDjVWkxeM/Le2EnGql4z+ZVnzjMIXjPwXAcyr3ZOM/cClrcb1E4z/ckmK4gyTjP0j8Wf9JBOM/s2VRRhDk4j8fz0iN1sPiP4s4QNSco+I/9qE3G2OD4j9iCy9iKWPiP850JqnvQuI/Ot4d8LUi4j+lRxU3fALiPxGxDH5C4uE/fRoExQjC4T/og/sLz6HhP1Tt8lKVgeE/wFbqmVth4T8swOHgIUHhP5cp2SfoIOE/A5PQbq4A4T9v/Me1dODgP9plv/w6wOA/Rs+2QwGg4D+yOK6Kx3/gPx6ipdGNX+A/iQudGFQ/4D/1dJRfGh/gP8K8F03B/d8/mo8G20293z9xYvVo2nzfP0k15PZmPN8/IAjThPP73j/42sESgLveP8+tsKAMe94/poCfLpk63j9+U468JfrdP1UmfUqyud0/Lflr2D553T8EzFpmyzjdP9ueSfRX+Nw/s3E4guS33D+KRCcQcXfcP2IXFp79Ntw/OeoELIr22z8RvfO5FrbbP+iP4kejdds/v2LR1S812z+XNcBjvPTaP24Ir/FItNo/Rtudf9Vz2j8drowNYjPaP/WAe5vu8tk/zFNqKXuy2T+jJlm3B3LZP3v5R0WUMdk/Usw20yDx2D8qnyVhrbDYPwFyFO85cNg/2UQDfcYv2D+wF/IKU+/XP4fq4Jjfrtc/X73PJmxu1z82kL60+C3XPw5jrUKF7dY/5TWc0BGt1j+8CItenmzWP5TbeewqLNY/a65oerfr1T9DgVcIRKvVP0OBVwhEq9U/","dtype":"float64","shape":[228]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAErex8PZ0KU/St7Hw9nQpT8Z2zGD44umPzfnc6rkkqc/avuJJQn8qD8AmAIfuOeqP/7mLTHAQK0/Uu5GGG8BsD95MhIcRKaxP+IVTNrce7M//axuN0GbtT+OoOd+1eq3P4am+jGyYro/AbgBl8r4vD8KsniXgaG/P1CCfC9fJME/7r3SrO1ywj9pw+m4o7XDP952HPHe6cQ/mEDNIb0Hxj+Ma+2HyQrHP9c2vD2R78c/U8R187OzyD8o3pYdHFLJP7Q01T7Yzck/MOCqcjYsyj+uxT5wbWfKPwfAXz2diso/RKX1R8GQyj+SB7P9ToTKPyBuQQgdZMo/+xKjU4k/yj88nNZ5eBDKP28WryH84ck/qQ3rwN29yT/rktT7FqTJP3TM/WGKoMk/uBgyNSa2yT/5t06jWPHJP82E2SgjUso/damdZljQyj/mBp7lP33LP8elxWHDVsw/ICp7N51rzT9fv+FM7p3OP+6RIYHtBdA/PzW68/TX0D/MyZJ/WLrRPy2ZJSrNr9I/83DbEnO60z962Iw2BNbUPzSPV2RfBdY/IL5YKdNA1z86URXFCIfYP9DqIVLp1Nk/5NxI/Q8v2z8ZGXvtk4ncPxPFCT7u3t0/EKJ/QUgt3z8494zD5TngP4ioXG1F1OA/pZ4Z0atn4T/aKqkArO7hP3T2qQjXbeI/XdIdxI/d4j+auw358j/jPwzfmWdpl+M/5mggbJzg4z9nT5fOEh/kP01WOutLWOQ/pcX1gPaP5D9y8jNmncbkP+vlRpAv/eQ/TD+g12E85T/kEtc5pYHlP8sKAFlb1OU/nf87GtEx5j8jLN4AL5/mPwk4ePzXGec/I1ZcXsyg5z9UQ3c4QjXoPyKU7at82eg/XPCjVjeD6T8jOGHaNDXqP9jKLAYy8uo/htdPASew6z/6sRTeBm/sP4+g+z95LO0/NgkYewfn7T9OLa+B+KHuP6B+ANgTV+8/kGUAjIMF8D8CKwo6dFvwP5e+8uRVtPA/7jtU7FcL8T9h2cVEdGPxP6a2U15+vvE/ODpVpHYb8j8hSDTnTnryPzFJLCYW3vI/ZYABSvVF8z/2+LjrELTzPwh/ubcRJfQ/zn4SyxCY9D9I9jH6Wg/1P03JMP1aifU/TElOck8D9j9Cn8t3rXz2P+iCaLVb8fY/u3mUtnZi9z+erJAVtc73PztBXORuNvg/vFd+7IyU+D+tchnIau34PwAAAAAAAAAA","dtype":"float64","shape":[228]}},"selected":{"id":"58786","type":"Selection"},"selection_policy":{"id":"58785","type":"UnionRenderers"}},"id":"58765","type":"ColumnDataSource"},{"attributes":{"ticker":{"id":"58720","type":"BasicTicker"}},"id":"58723","type":"Grid"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58766","type":"Patch"},{"attributes":{"callback":null,"overlay":{"id":"58777","type":"BoxAnnotation"}},"id":"58732","type":"BoxSelectTool"},{"attributes":{"formatter":{"id":"58772","type":"BasicTickFormatter"},"ticker":{"id":"58720","type":"BasicTicker"}},"id":"58719","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"58778","type":"PolyAnnotation"}},"id":"58733","type":"LassoSelectTool"},{"attributes":{},"id":"58736","type":"ResetTool"},{"attributes":{"source":{"id":"58765","type":"ColumnDataSource"}},"id":"58769","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"58725","type":"BasicTicker"}},"id":"58728","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58776","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"58765","type":"ColumnDataSource"},"glyph":{"id":"58766","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58767","type":"Patch"},"selection_glyph":null,"view":{"id":"58769","type":"CDSView"}},"id":"58768","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"58776","type":"BoxAnnotation"}},"id":"58730","type":"BoxZoomTool"},{"attributes":{},"id":"58734","type":"UndoTool"},{"attributes":{"text":""},"id":"58770","type":"Title"},{"attributes":{},"id":"58735","type":"RedoTool"},{"attributes":{"below":[{"id":"58719","type":"LinearAxis"}],"center":[{"id":"58723","type":"Grid"},{"id":"58728","type":"Grid"}],"left":[{"id":"58724","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"58753","type":"GlyphRenderer"},{"id":"58758","type":"GlyphRenderer"},{"id":"58763","type":"GlyphRenderer"},{"id":"58768","type":"GlyphRenderer"}],"title":{"id":"58770","type":"Title"},"toolbar":{"id":"58739","type":"Toolbar"},"x_range":{"id":"58711","type":"DataRange1d"},"x_scale":{"id":"58715","type":"LinearScale"},"y_range":{"id":"58713","type":"DataRange1d"},"y_scale":{"id":"58717","type":"LinearScale"}},"id":"58710","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"RBjNwXBEvD/mzBGKPka9P4iBVlIMSL4/KzabGtpJvz9m9W/x0yXAP7dPktW6psA/CKq0uaEnwT9ZBNediKjBP6te+YFvKcI//LgbZlaqwj9NEz5KPSvDP55tYC4krMM/78eCEgstxD9AIqX28a3EP5J8x9rYLsU/49bpvr+vxT80MQyjpjDGP4WLLoeNscY/1uVQa3Qyxz8nQHNPW7PHP3malTNCNMg/yvS3Fym1yD8bT9r7DzbJP2yp/N/2tsk/vQMfxN03yj+9Ax/E3TfKP70DH8TdN8o/bKn83/a2yT8bT9r7DzbJP8r0txcptcg/eZqVM0I0yD8nQHNPW7PHP9blUGt0Msc/hYsuh42xxj80MQyjpjDGP+PW6b6/r8U/knzH2tguxT9AIqX28a3EP+/HghILLcQ/nm1gLiSswz9NEz5KPSvDP/y4G2ZWqsI/q175gW8pwj9ZBNediKjBPwiqtLmhJ8E/t0+S1bqmwD9m9W/x0yXAPys2mxraSb8/iIFWUgxIvj/mzBGKPka9P0QYzcFwRLw/RBjNwXBEvD8=","dtype":"float64","shape":[52]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACx1NNHVM4DQLHU00dUzgNA5X7vOmfuA0BDrqF9XAoEQMAuESYOIwRA37W//2w4BEBkKZy4UksEQCmmT8PRWQRA3Tz0vURmBEDpUEe5LHMEQABwYjJqgARA1BWlbPmMBEB8KKDv7poEQKx0MRfAqARA9yOR2Ti4BEBRw/V8bssEQOaqN/Ru4ARAnXYy9pP1BEAoWi5ztAsFQD3rmhLiIgVAux/i9Ys3BUDgMzafzEsFQKgkVF/pXQVAulxPcUdsBUDBlydhw3YFQISZaQS+fAVAAAAAAAAAAAA=","dtype":"float64","shape":[52]}},"selected":{"id":"58782","type":"Selection"},"selection_policy":{"id":"58781","type":"UnionRenderers"}},"id":"58755","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"58777","type":"BoxAnnotation"},{"attributes":{},"id":"58783","type":"UnionRenderers"},{"attributes":{},"id":"58784","type":"Selection"},{"attributes":{"formatter":{"id":"58774","type":"BasicTickFormatter"},"ticker":{"id":"58725","type":"BasicTicker"}},"id":"58724","type":"LinearAxis"},{"attributes":{},"id":"58725","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"58778","type":"PolyAnnotation"},{"attributes":{"source":{"id":"58760","type":"ColumnDataSource"}},"id":"58764","type":"CDSView"},{"attributes":{"callback":null},"id":"58738","type":"HoverTool"},{"attributes":{"source":{"id":"58750","type":"ColumnDataSource"}},"id":"58754","type":"CDSView"},{"attributes":{},"id":"58780","type":"Selection"},{"attributes":{},"id":"58779","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"58750","type":"ColumnDataSource"},"glyph":{"id":"58751","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58752","type":"Patch"},"selection_glyph":null,"view":{"id":"58754","type":"CDSView"}},"id":"58753","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58751","type":"Patch"},{"attributes":{},"id":"58785","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"58729","type":"PanTool"},{"id":"58730","type":"BoxZoomTool"},{"id":"58731","type":"WheelZoomTool"},{"id":"58732","type":"BoxSelectTool"},{"id":"58733","type":"LassoSelectTool"},{"id":"58734","type":"UndoTool"},{"id":"58735","type":"RedoTool"},{"id":"58736","type":"ResetTool"},{"id":"58737","type":"SaveTool"},{"id":"58738","type":"HoverTool"}]},"id":"58739","type":"Toolbar"},{"attributes":{},"id":"58786","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"84JWSdruMT9UsuAoyjtxPz3+lVZTrIA/UKO7mMG6iD8xpHDtl2SQP7p2gw7Pa5Q/REmWLwZzmD/NG6lQPXqcPyv33Ti6QKA/cGBnyVVEoj+0yfBZ8UekP/kyeuqMS6Y/PpwDeyhPqD+CBY0LxFKqP8duFpxfVqw/C9ifLPtZrj+ooJReyy6wP0pV2SaZMLE/7Qke72Yysj+PvmK3NDSzPzFzp38CNrQ/1CfsR9A3tT923DAQnjm2PxiRddhrO7c/u0W6oDk9uD9d+v5oBz+5P/+uQzHVQLo/oWOI+aJCuz+hY4j5okK7P6FjiPmiQrs//65DMdVAuj9d+v5oBz+5P7tFuqA5Pbg/GJF12Gs7tz923DAQnjm2P9Qn7EfQN7U/MXOnfwI2tD+PvmK3NDSzP+0JHu9mMrI/SlXZJpkwsT+ooJReyy6wPwvYnyz7Wa4/x24WnF9WrD+CBY0LxFKqPz6cA3soT6g/+TJ66oxLpj+0yfBZ8UekP3BgZ8lVRKI/K/fdOLpAoD/NG6lQPXqcP0RJli8Gc5g/unaDDs9rlD8xpHDtl2SQP1Cju5jBuog/Pf6VVlOsgD9UsuAoyjtxP/OCVkna7jE/84JWSdruMT8=","dtype":"float64","shape":[58]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQBFZeV3wFQJAEVl5XfAVAMA6lmpV1BUCjFTrWTWkFQEEwptVcVAVA8htxwJE2BUCKIEhnQg8FQLqehoyw3wRAsTOYYbKkBEDh4NDc318EQD2MsW4XEARAFYtv20u0A0A2/ent80wDQEpDC8r92wJAKQW0i/NgAkD2yniK4t0BQP9v7piJVAFAQxXwZGjGAEB6d0XBIzcAQHbjHYpJTv8/pO7c5T80/j+mLCWzUCv9P4jjdM0vM/w/3koW/Xdb+z+ix8N6oaL6P3Bdmk3MCvo/GJ3NhD2b+T8MeyK7iVf5P/2PPxlCP/k/AAAAAAAAAAA=","dtype":"float64","shape":[58]}},"selected":{"id":"58780","type":"Selection"},"selection_policy":{"id":"58779","type":"UnionRenderers"}},"id":"58750","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58752","type":"Patch"},{"attributes":{},"id":"58731","type":"WheelZoomTool"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58756","type":"Patch"},{"attributes":{},"id":"58772","type":"BasicTickFormatter"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"Dl5BqMS4yj9fuGOMqznLP7EShnCSuss/Am2oVHk7zD9Tx8o4YLzMP6Qh7RxHPc0/9XsPAS6+zT9G1jHlFD/OP5gwVMn7v84/6Yp2reJAzz865ZiRycHPP8af3TpYIdA/78zurMth0D8X+v8eP6LQP0AnEZGy4tA/aFQiAyYj0T+RgTN1mWPRP7muROcMpNE/4ttVWYDk0T8LCWfL8yTSPzM2eD1nZdI/XGOJr9ql0j+EkJohTubSP629q5PBJtM/1uq8BTVn0z/+F853qKfTPydF3+kb6NM/T3LwW48o1D94nwHOAmnUP6DMEkB2qdQ/yfkjsunp1D/yJjUkXSrVPxpURpbQatU/GlRGltBq1T8aVEaW0GrVP/ImNSRdKtU/yfkjsunp1D+gzBJAdqnUP3ifAc4CadQ/T3LwW48o1D8nRd/pG+jTP/4Xzneop9M/1uq8BTVn0z+tvauTwSbTP4SQmiFO5tI/XGOJr9ql0j8zNng9Z2XSPwsJZ8vzJNI/4ttVWYDk0T+5rkTnDKTRP5GBM3WZY9E/aFQiAyYj0T9AJxGRsuLQPxf6/x4/otA/78zurMth0D/Gn906WCHQPzrlmJHJwc8/6Yp2reJAzz+YMFTJ+7/OP0bWMeUUP84/9XsPAS6+zT+kIe0cRz3NP1PHyjhgvMw/Am2oVHk7zD+xEoZwkrrLP1+4Y4yrOcs/Dl5BqMS4yj8OXkGoxLjKPw==","dtype":"float64","shape":[68]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARGLYNJtA+T9EYtg0m0D5P1oQ2jKkjvk/Wu2sSizX+T/v/pPhNR/6P0NOUsSJYvo/m3lUN8Gj+j8tGgFDcOf6P+kSdceRMPs/+HJONoB6+z/iEIgDuM37PyqW2/mIJvw/m7dPI9KE/D9Q2Gm+g+v8P0mueF+DXP0/5TUqOiXX/T/P4EN/G1f+P55G3w7C3/4/Ke0xsCRx/z9va+6HuwIAQGPs0N+2TgBAPAgCoYWdAED793O+3usAQE4XV6qmOgFAAgHx8bmIAUCWp3cIY9MBQOsDHi6tHAJAlFea9YVhAkD0CGPin6MCQNOn/gEm4QJAHulmMOsZA0D93tBiHU8DQEequeVRfgNA98y0fXeoA0AAAAAAAAAAAA==","dtype":"float64","shape":[68]}},"selected":{"id":"58784","type":"Selection"},"selection_policy":{"id":"58783","type":"UnionRenderers"}},"id":"58760","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58757","type":"Patch"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"58762","type":"Patch"},{"attributes":{"source":{"id":"58755","type":"ColumnDataSource"}},"id":"58759","type":"CDSView"},{"attributes":{"data_source":{"id":"58755","type":"ColumnDataSource"},"glyph":{"id":"58756","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58757","type":"Patch"},"selection_glyph":null,"view":{"id":"58759","type":"CDSView"}},"id":"58758","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"58761","type":"Patch"},{"attributes":{"data_source":{"id":"58760","type":"ColumnDataSource"},"glyph":{"id":"58761","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"58762","type":"Patch"},"selection_glyph":null,"view":{"id":"58764","type":"CDSView"}},"id":"58763","type":"GlyphRenderer"},{"attributes":{},"id":"58715","type":"LinearScale"}],"root_ids":["58710"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"d3d7ab36-ee38-4d92-a5d4-1fd67410e354","roots":{"58710":"408aacef-7b0d-4f2d-bafc-9f94c9c3b664"}}];
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