


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
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.04745762711863], [604.0, 34.5, 224.04745762711863], [0.0, 34.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.41116956697692], [2471.0, 31.5, 244.41116956697692], [0.0, 31.5, 0.0]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.12511415525114], [1119.0, 21.5, 240.12511415525114], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [1068.0, 29.5, 274.23689138576776], [1068.0, 30.5, 274.23689138576776], [0.0, 30.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.48413312693498], [2584.0, 33.5, 253.48413312693498], [0.0, 33.5, 0.0]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.18421052631578], [323.0, 37.5, 218.18421052631578], [0.0, 37.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2534.0, 23.5, 274.34706814580034], [2534.0, 24.5, 274.34706814580034], [0.0, 24.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.96744186046513], [236.0, 20.5, 242.96744186046513], [0.0, 20.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [5898.0, 26.5, 250.64935286103542], [5898.0, 27.5, 250.64935286103542], [0.0, 27.5, 0.0]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.03424657534248], [876.0, 36.5, 232.03424657534248], [0.0, 36.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.48046038543896], [7480.0, 28.5, 259.48046038543896], [0.0, 28.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.6175872320451], [6402.0, 25.5, 256.6175872320451], [0.0, 25.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [3808.0, 22.5, 250.63253487759937], [3808.0, 23.5, 250.63253487759937], [0.0, 23.5, 0.0]]}, "axes": [{"ydomain": [17.55, 38.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578909946320"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8223.7, 43.0], "id": "el11179140578909600456", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909397288", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578909355760", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578909398072", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909398968", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578909399864", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578909400760", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578909418104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909419000", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578909419896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578909420792", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909446328", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578909447224", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578909448120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909449016", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578909449912", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578909471352", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909472248", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578909473144", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578909474040", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8223.7, 43.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578909660048", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.55, 38.45]}, {"ydomain": [17.55, 38.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578909600456"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [208.18421052631578, 284.34706814580034], "id": "el11179140578909946320", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908968272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578909355928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578908968944", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908969840", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578908970736", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578908988080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578908988976", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908989872", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578908990768", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578909020400", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909021296", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578909022192", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578909023088", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909023984", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578909045424", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578909046320", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909047216", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578909048112", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578909069552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [208.18421052631578, 284.34706814580034], "axes": [{"tickvalues": [218, 232, 246, 260, 274], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578909835448", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.55, 38.45]}], "height": 480.0, "id": "el11179140578911835080", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578909397288", "el11179140578909355760", "el11179140578909398072", "el11179140578909398968", "el11179140578909399864", "el11179140578909400760", "el11179140578909418104", "el11179140578909419000", "el11179140578909419896", "el11179140578909420792", "el11179140578909446328", "el11179140578909447224", "el11179140578909448120", "el11179140578909449016", "el11179140578909449912", "el11179140578909471352", "el11179140578909472248", "el11179140578909473144", "el11179140578909474040"], "type": "clickinfo", "low": 19, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}}, {"ids": ["el11179140578908968272", "el11179140578909355928", "el11179140578908968944", "el11179140578908969840", "el11179140578908970736", "el11179140578908988080", "el11179140578908988976", "el11179140578908989872", "el11179140578908990768", "el11179140578909020400", "el11179140578909021296", "el11179140578909022192", "el11179140578909023088", "el11179140578909023984", "el11179140578909045424", "el11179140578909046320", "el11179140578909047216", "el11179140578909048112", "el11179140578909069552"], "type": "clickinfo", "low": 19, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}}]});
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
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.04745762711863], [604.0, 34.5, 224.04745762711863], [0.0, 34.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.41116956697692], [2471.0, 31.5, 244.41116956697692], [0.0, 31.5, 0.0]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.12511415525114], [1119.0, 21.5, 240.12511415525114], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [1068.0, 29.5, 274.23689138576776], [1068.0, 30.5, 274.23689138576776], [0.0, 30.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.48413312693498], [2584.0, 33.5, 253.48413312693498], [0.0, 33.5, 0.0]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.18421052631578], [323.0, 37.5, 218.18421052631578], [0.0, 37.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2534.0, 23.5, 274.34706814580034], [2534.0, 24.5, 274.34706814580034], [0.0, 24.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.96744186046513], [236.0, 20.5, 242.96744186046513], [0.0, 20.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [5898.0, 26.5, 250.64935286103542], [5898.0, 27.5, 250.64935286103542], [0.0, 27.5, 0.0]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.03424657534248], [876.0, 36.5, 232.03424657534248], [0.0, 36.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.48046038543896], [7480.0, 28.5, 259.48046038543896], [0.0, 28.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.6175872320451], [6402.0, 25.5, 256.6175872320451], [0.0, 25.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [3808.0, 22.5, 250.63253487759937], [3808.0, 23.5, 250.63253487759937], [0.0, 23.5, 0.0]]}, "axes": [{"ydomain": [17.55, 38.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578909946320"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8223.7, 43.0], "id": "el11179140578909600456", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909397288", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578909355760", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578909398072", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909398968", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578909399864", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578909400760", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578909418104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909419000", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578909419896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578909420792", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909446328", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578909447224", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578909448120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909449016", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578909449912", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578909471352", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909472248", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578909473144", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578909474040", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8223.7, 43.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578909660048", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.55, 38.45]}, {"ydomain": [17.55, 38.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578909600456"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [208.18421052631578, 284.34706814580034], "id": "el11179140578909946320", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908968272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578909355928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578908968944", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908969840", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578908970736", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578908988080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578908988976", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908989872", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578908990768", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578909020400", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909021296", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578909022192", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578909023088", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909023984", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578909045424", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578909046320", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909047216", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578909048112", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578909069552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [208.18421052631578, 284.34706814580034], "axes": [{"tickvalues": [218, 232, 246, 260, 274], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578909835448", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.55, 38.45]}], "height": 480.0, "id": "el11179140578911835080", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578909397288", "el11179140578909355760", "el11179140578909398072", "el11179140578909398968", "el11179140578909399864", "el11179140578909400760", "el11179140578909418104", "el11179140578909419000", "el11179140578909419896", "el11179140578909420792", "el11179140578909446328", "el11179140578909447224", "el11179140578909448120", "el11179140578909449016", "el11179140578909449912", "el11179140578909471352", "el11179140578909472248", "el11179140578909473144", "el11179140578909474040"], "type": "clickinfo", "low": 19, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}}, {"ids": ["el11179140578908968272", "el11179140578909355928", "el11179140578908968944", "el11179140578908969840", "el11179140578908970736", "el11179140578908988080", "el11179140578908988976", "el11179140578908989872", "el11179140578908990768", "el11179140578909020400", "el11179140578909021296", "el11179140578909022192", "el11179140578909023088", "el11179140578909023984", "el11179140578909045424", "el11179140578909046320", "el11179140578909047216", "el11179140578909048112", "el11179140578909069552"], "type": "clickinfo", "low": 19, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}}]});
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
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.04745762711863], [604.0, 34.5, 224.04745762711863], [0.0, 34.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.41116956697692], [2471.0, 31.5, 244.41116956697692], [0.0, 31.5, 0.0]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.12511415525114], [1119.0, 21.5, 240.12511415525114], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [1068.0, 29.5, 274.23689138576776], [1068.0, 30.5, 274.23689138576776], [0.0, 30.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.48413312693498], [2584.0, 33.5, 253.48413312693498], [0.0, 33.5, 0.0]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.18421052631578], [323.0, 37.5, 218.18421052631578], [0.0, 37.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2534.0, 23.5, 274.34706814580034], [2534.0, 24.5, 274.34706814580034], [0.0, 24.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.96744186046513], [236.0, 20.5, 242.96744186046513], [0.0, 20.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [5898.0, 26.5, 250.64935286103542], [5898.0, 27.5, 250.64935286103542], [0.0, 27.5, 0.0]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.03424657534248], [876.0, 36.5, 232.03424657534248], [0.0, 36.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.48046038543896], [7480.0, 28.5, 259.48046038543896], [0.0, 28.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.6175872320451], [6402.0, 25.5, 256.6175872320451], [0.0, 25.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [3808.0, 22.5, 250.63253487759937], [3808.0, 23.5, 250.63253487759937], [0.0, 23.5, 0.0]]}, "axes": [{"ydomain": [17.55, 38.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578909946320"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [8223.7, 43.0], "id": "el11179140578909600456", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909397288", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578909355760", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578909398072", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909398968", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578909399864", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578909400760", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578909418104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909419000", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578909419896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578909420792", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909446328", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578909447224", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578909448120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909449016", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578909449912", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578909471352", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578909472248", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578909473144", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578909474040", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [8223.7, 43.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 6, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578909660048", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.55, 38.45]}, {"ydomain": [17.55, 38.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578909600456"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [208.18421052631578, 284.34706814580034], "id": "el11179140578909946320", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908968272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578909355928", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578908968944", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908969840", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578908970736", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578908988080", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578908988976", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908989872", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578908990768", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578909020400", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909021296", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578909022192", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578909023088", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909023984", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578909045424", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578909046320", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578909047216", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578909048112", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578909069552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [208.18421052631578, 284.34706814580034], "axes": [{"tickvalues": [218, 232, 246, 260, 274], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "nticks": 19, "fontsize": null, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578909835448", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [17.55, 38.45]}], "height": 480.0, "id": "el11179140578911835080", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578909397288", "el11179140578909355760", "el11179140578909398072", "el11179140578909398968", "el11179140578909399864", "el11179140578909400760", "el11179140578909418104", "el11179140578909419000", "el11179140578909419896", "el11179140578909420792", "el11179140578909446328", "el11179140578909447224", "el11179140578909448120", "el11179140578909449016", "el11179140578909449912", "el11179140578909471352", "el11179140578909472248", "el11179140578909473144", "el11179140578909474040"], "type": "clickinfo", "low": 19, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}}, {"ids": ["el11179140578908968272", "el11179140578909355928", "el11179140578908968944", "el11179140578908969840", "el11179140578908970736", "el11179140578908988080", "el11179140578908988976", "el11179140578908989872", "el11179140578908990768", "el11179140578909020400", "el11179140578909021296", "el11179140578909022192", "el11179140578909023088", "el11179140578909023984", "el11179140578909045424", "el11179140578909046320", "el11179140578909047216", "el11179140578909048112", "el11179140578909069552"], "type": "clickinfo", "low": 19, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}}]});
            })
         });
}
</script>
