


<script>
function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){
       
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.36165577342047], [940.0, 31.5, 253.36165577342047], [0.0, 31.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.3755458515284], [2292.0, 29.5, 251.3755458515284], [0.0, 29.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.5603112840467], [1067.0, 18.5, 254.5603112840467], [0.0, 18.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.80095238095237], [5258.0, 28.5, 255.80095238095237], [0.0, 28.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.89246323529414], [4384.0, 20.5, 275.89246323529414], [0.0, 20.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.4425], [421.0, 16.5, 224.4425], [0.0, 16.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.4718309859155], [3692.0, 30.5, 256.4718309859155], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.09903886335144], [2393.0, 34.5, 273.09903886335144], [0.0, 34.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.23615023474179], [2137.0, 24.5, 246.23615023474179], [0.0, 24.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.6712752410406], [5522.0, 26.5, 260.6712752410406], [0.0, 26.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.4589235127479], [2123.0, 32.5, 267.4589235127479], [0.0, 32.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.2050380785003], [3435.0, 27.5, 258.2050380785003], [0.0, 27.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.06844547563804], [1729.0, 25.5, 247.06844547563804], [0.0, 25.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.85714285714286], [234.0, 21.5, 225.85714285714286], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578907727576"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [6050.8, 234.0], "id": "el11179140578908093016", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907871720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907871216", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907872504", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907889848", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907890744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578907891640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907892536", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907893432", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578907402872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907403768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907404664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907405560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907422904", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907423800", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907424696", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907425592", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907426488", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907447928", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578907448824", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [6050.8, 234.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578908127360", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}, {"ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578908093016"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [214.4425, 285.89246323529414], "id": "el11179140578907727576", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907450896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907871384", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907476208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907477104", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907478000", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578907478896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907479792", "facecolor": "#FFA500", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907497136", "facecolor": "#FFA500", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578907498032", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907498928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907499824", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907517168", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907518064", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907518960", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907519856", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907520752", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907554480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907555376", "facecolor": "#FFA500", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578907556272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [214.4425, 285.89246323529414], "axes": [{"tickvalues": [224, 236, 248, 260, 275], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578907754624", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}], "height": 480.0, "id": "el11179140578908955592", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578907871720", "el11179140578907871216", "el11179140578907872504", "el11179140578907889848", "el11179140578907890744", "el11179140578907891640", "el11179140578907892536", "el11179140578907893432", "el11179140578907402872", "el11179140578907403768", "el11179140578907404664", "el11179140578907405560", "el11179140578907422904", "el11179140578907423800", "el11179140578907424696", "el11179140578907425592", "el11179140578907426488", "el11179140578907447928", "el11179140578907448824"], "type": "clickinfo", "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}}, {"ids": ["el11179140578907450896", "el11179140578907871384", "el11179140578907476208", "el11179140578907477104", "el11179140578907478000", "el11179140578907478896", "el11179140578907479792", "el11179140578907497136", "el11179140578907498032", "el11179140578907498928", "el11179140578907499824", "el11179140578907517168", "el11179140578907518064", "el11179140578907518960", "el11179140578907519856", "el11179140578907520752", "el11179140578907554480", "el11179140578907555376", "el11179140578907556272"], "type": "clickinfo", "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}}]});
   }(mpld3);
}else if(typeof define === "function" && define.amd){
   // require.js is available: use it to load d3/mpld3
   require.config({paths: {d3: "https://mpld3.github.io/js/d3.v3.min"}});
   require(["d3"], function(d3){
      window.d3 = d3;
      mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
         
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.36165577342047], [940.0, 31.5, 253.36165577342047], [0.0, 31.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.3755458515284], [2292.0, 29.5, 251.3755458515284], [0.0, 29.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.5603112840467], [1067.0, 18.5, 254.5603112840467], [0.0, 18.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.80095238095237], [5258.0, 28.5, 255.80095238095237], [0.0, 28.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.89246323529414], [4384.0, 20.5, 275.89246323529414], [0.0, 20.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.4425], [421.0, 16.5, 224.4425], [0.0, 16.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.4718309859155], [3692.0, 30.5, 256.4718309859155], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.09903886335144], [2393.0, 34.5, 273.09903886335144], [0.0, 34.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.23615023474179], [2137.0, 24.5, 246.23615023474179], [0.0, 24.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.6712752410406], [5522.0, 26.5, 260.6712752410406], [0.0, 26.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.4589235127479], [2123.0, 32.5, 267.4589235127479], [0.0, 32.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.2050380785003], [3435.0, 27.5, 258.2050380785003], [0.0, 27.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.06844547563804], [1729.0, 25.5, 247.06844547563804], [0.0, 25.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.85714285714286], [234.0, 21.5, 225.85714285714286], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578907727576"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [6050.8, 234.0], "id": "el11179140578908093016", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907871720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907871216", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907872504", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907889848", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907890744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578907891640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907892536", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907893432", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578907402872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907403768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907404664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907405560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907422904", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907423800", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907424696", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907425592", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907426488", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907447928", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578907448824", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [6050.8, 234.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578908127360", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}, {"ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578908093016"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [214.4425, 285.89246323529414], "id": "el11179140578907727576", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907450896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907871384", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907476208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907477104", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907478000", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578907478896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907479792", "facecolor": "#FFA500", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907497136", "facecolor": "#FFA500", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578907498032", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907498928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907499824", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907517168", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907518064", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907518960", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907519856", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907520752", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907554480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907555376", "facecolor": "#FFA500", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578907556272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [214.4425, 285.89246323529414], "axes": [{"tickvalues": [224, 236, 248, 260, 275], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578907754624", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}], "height": 480.0, "id": "el11179140578908955592", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578907871720", "el11179140578907871216", "el11179140578907872504", "el11179140578907889848", "el11179140578907890744", "el11179140578907891640", "el11179140578907892536", "el11179140578907893432", "el11179140578907402872", "el11179140578907403768", "el11179140578907404664", "el11179140578907405560", "el11179140578907422904", "el11179140578907423800", "el11179140578907424696", "el11179140578907425592", "el11179140578907426488", "el11179140578907447928", "el11179140578907448824"], "type": "clickinfo", "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}}, {"ids": ["el11179140578907450896", "el11179140578907871384", "el11179140578907476208", "el11179140578907477104", "el11179140578907478000", "el11179140578907478896", "el11179140578907479792", "el11179140578907497136", "el11179140578907498032", "el11179140578907498928", "el11179140578907499824", "el11179140578907517168", "el11179140578907518064", "el11179140578907518960", "el11179140578907519856", "el11179140578907520752", "el11179140578907554480", "el11179140578907555376", "el11179140578907556272"], "type": "clickinfo", "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}}]});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.36165577342047], [940.0, 31.5, 253.36165577342047], [0.0, 31.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.3755458515284], [2292.0, 29.5, 251.3755458515284], [0.0, 29.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.5603112840467], [1067.0, 18.5, 254.5603112840467], [0.0, 18.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.80095238095237], [5258.0, 28.5, 255.80095238095237], [0.0, 28.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.89246323529414], [4384.0, 20.5, 275.89246323529414], [0.0, 20.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.4425], [421.0, 16.5, 224.4425], [0.0, 16.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.4718309859155], [3692.0, 30.5, 256.4718309859155], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.09903886335144], [2393.0, 34.5, 273.09903886335144], [0.0, 34.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.23615023474179], [2137.0, 24.5, 246.23615023474179], [0.0, 24.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.6712752410406], [5522.0, 26.5, 260.6712752410406], [0.0, 26.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.4589235127479], [2123.0, 32.5, 267.4589235127479], [0.0, 32.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.2050380785003], [3435.0, 27.5, 258.2050380785003], [0.0, 27.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.06844547563804], [1729.0, 25.5, 247.06844547563804], [0.0, 25.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.85714285714286], [234.0, 21.5, 225.85714285714286], [0.0, 21.5, 0.0]]}, "axes": [{"ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578907727576"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [6050.8, 234.0], "id": "el11179140578908093016", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907871720", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907871216", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907872504", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907889848", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907890744", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578907891640", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907892536", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907893432", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578907402872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907403768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907404664", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907405560", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907422904", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907423800", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907424696", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907425592", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907426488", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907447928", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578907448824", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [6050.8, 234.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578908127360", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}, {"ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578908093016"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [214.4425, 285.89246323529414], "id": "el11179140578907727576", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578907450896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907871384", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578907476208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907477104", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578907478000", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578907478896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907479792", "facecolor": "#FFA500", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907497136", "facecolor": "#FFA500", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578907498032", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578907498928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578907499824", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578907517168", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578907518064", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578907518960", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578907519856", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578907520752", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578907554480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907555376", "facecolor": "#FFA500", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578907556272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [214.4425, 285.89246323529414], "axes": [{"tickvalues": [224, 236, 248, 260, 275], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578907754624", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.55, 35.45]}], "height": 480.0, "id": "el11179140578908955592", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578907871720", "el11179140578907871216", "el11179140578907872504", "el11179140578907889848", "el11179140578907890744", "el11179140578907891640", "el11179140578907892536", "el11179140578907893432", "el11179140578907402872", "el11179140578907403768", "el11179140578907404664", "el11179140578907405560", "el11179140578907422904", "el11179140578907423800", "el11179140578907424696", "el11179140578907425592", "el11179140578907426488", "el11179140578907447928", "el11179140578907448824"], "type": "clickinfo", "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}}, {"ids": ["el11179140578907450896", "el11179140578907871384", "el11179140578907476208", "el11179140578907477104", "el11179140578907478000", "el11179140578907478896", "el11179140578907479792", "el11179140578907497136", "el11179140578907498032", "el11179140578907498928", "el11179140578907499824", "el11179140578907517168", "el11179140578907518064", "el11179140578907518960", "el11179140578907519856", "el11179140578907520752", "el11179140578907554480", "el11179140578907555376", "el11179140578907556272"], "type": "clickinfo", "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}}]});
            })
         });
}
</script>
