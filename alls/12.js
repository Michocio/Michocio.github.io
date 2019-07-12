


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
    
       mpld3.draw_figure("id12", {"data": {"data13": [[0.0, 32.5, 0.0], [6162.0, 32.5, 251.88073844143113], [6162.0, 33.5, 251.88073844143113], [0.0, 33.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.1370229007634], [2620.0, 31.5, 258.1370229007634], [0.0, 31.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.75114304376226], [1531.0, 20.5, 254.75114304376226], [0.0, 20.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.71580690960718], [4226.0, 30.5, 253.71580690960718], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.82281708094328], [1572.0, 21.5, 252.82281708094328], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.3596584845251], [937.0, 32.5, 259.3596584845251], [0.0, 32.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.9491468718635], [2989.0, 36.5, 263.9491468718635], [0.0, 36.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [951.0, 22.5, 244.6358754027927], [951.0, 23.5, 244.6358754027927], [0.0, 23.5, 0.0]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data08": [[0.0, 25.5, 0.0], [6947.0, 25.5, 251.31841082481645], [6947.0, 26.5, 251.31841082481645], [0.0, 26.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.8343605546995], [1301.0, 34.5, 273.8343605546995], [0.0, 34.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.62118644067797], [2360.0, 28.5, 247.62118644067797], [0.0, 28.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1311.0, 24.5, 244.11631537861047], [1311.0, 25.5, 244.11631537861047], [0.0, 25.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.80367118914606], [2541.0, 22.5, 238.80367118914606], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [15.5, 37.5], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578904729416"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7641.2, 5.0], "id": "el11179140578905029096", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904358136", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904357632", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904358864", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578904380360", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578904381256", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578904382152", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578904383048", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904408584", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578904409480", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578904410376", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904411272", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578904412112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904429512", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578904430408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578904431304", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578904432200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578904457736", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578904458632", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904459528", "facecolor": "#FF0000", "xindex": 0, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578904460424", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7641.2, 5.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "nticks": 20, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578904609008", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.5, 37.5]}, {"ydomain": [15.5, 37.5], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578905029096"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [228.80367118914606, 283.8343605546995], "id": "el11179140578904729416", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904483040", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904357856", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904483712", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578904484608", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578904485504", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578904502848", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578904503744", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904504640", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578904505536", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578904002688", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904003584", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578904004480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904005376", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578904006272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578904031808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578904032704", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578904033600", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578904034496", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904055936", "facecolor": "#FFA500", "xindex": 2, "yindex": 8}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578904056832", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [228.80367118914606, 283.8343605546995], "axes": [{"tickvalues": [238, 246, 254, 262, 273], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "nticks": 20, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578904760560", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.5, 37.5]}], "height": 480.0, "id": "el11179140578905730968", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578904358136", "el11179140578904357632", "el11179140578904358864", "el11179140578904380360", "el11179140578904381256", "el11179140578904382152", "el11179140578904383048", "el11179140578904408584", "el11179140578904409480", "el11179140578904410376", "el11179140578904411272", "el11179140578904412112", "el11179140578904429512", "el11179140578904430408", "el11179140578904431304", "el11179140578904432200", "el11179140578904457736", "el11179140578904458632", "el11179140578904459528", "el11179140578904460424"], "type": "clickinfo", "low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}}, {"ids": ["el11179140578904483040", "el11179140578904357856", "el11179140578904483712", "el11179140578904484608", "el11179140578904485504", "el11179140578904502848", "el11179140578904503744", "el11179140578904504640", "el11179140578904505536", "el11179140578904002688", "el11179140578904003584", "el11179140578904004480", "el11179140578904005376", "el11179140578904006272", "el11179140578904031808", "el11179140578904032704", "el11179140578904033600", "el11179140578904034496", "el11179140578904055936", "el11179140578904056832"], "type": "clickinfo", "low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}}]});
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
    
         mpld3.draw_figure("id12", {"data": {"data13": [[0.0, 32.5, 0.0], [6162.0, 32.5, 251.88073844143113], [6162.0, 33.5, 251.88073844143113], [0.0, 33.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.1370229007634], [2620.0, 31.5, 258.1370229007634], [0.0, 31.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.75114304376226], [1531.0, 20.5, 254.75114304376226], [0.0, 20.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.71580690960718], [4226.0, 30.5, 253.71580690960718], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.82281708094328], [1572.0, 21.5, 252.82281708094328], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.3596584845251], [937.0, 32.5, 259.3596584845251], [0.0, 32.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.9491468718635], [2989.0, 36.5, 263.9491468718635], [0.0, 36.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [951.0, 22.5, 244.6358754027927], [951.0, 23.5, 244.6358754027927], [0.0, 23.5, 0.0]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data08": [[0.0, 25.5, 0.0], [6947.0, 25.5, 251.31841082481645], [6947.0, 26.5, 251.31841082481645], [0.0, 26.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.8343605546995], [1301.0, 34.5, 273.8343605546995], [0.0, 34.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.62118644067797], [2360.0, 28.5, 247.62118644067797], [0.0, 28.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1311.0, 24.5, 244.11631537861047], [1311.0, 25.5, 244.11631537861047], [0.0, 25.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.80367118914606], [2541.0, 22.5, 238.80367118914606], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [15.5, 37.5], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578904729416"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7641.2, 5.0], "id": "el11179140578905029096", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904358136", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904357632", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904358864", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578904380360", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578904381256", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578904382152", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578904383048", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904408584", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578904409480", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578904410376", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904411272", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578904412112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904429512", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578904430408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578904431304", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578904432200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578904457736", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578904458632", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904459528", "facecolor": "#FF0000", "xindex": 0, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578904460424", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7641.2, 5.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "nticks": 20, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578904609008", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.5, 37.5]}, {"ydomain": [15.5, 37.5], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578905029096"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [228.80367118914606, 283.8343605546995], "id": "el11179140578904729416", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904483040", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904357856", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904483712", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578904484608", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578904485504", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578904502848", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578904503744", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904504640", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578904505536", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578904002688", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904003584", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578904004480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904005376", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578904006272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578904031808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578904032704", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578904033600", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578904034496", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904055936", "facecolor": "#FFA500", "xindex": 2, "yindex": 8}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578904056832", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [228.80367118914606, 283.8343605546995], "axes": [{"tickvalues": [238, 246, 254, 262, 273], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "nticks": 20, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578904760560", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.5, 37.5]}], "height": 480.0, "id": "el11179140578905730968", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578904358136", "el11179140578904357632", "el11179140578904358864", "el11179140578904380360", "el11179140578904381256", "el11179140578904382152", "el11179140578904383048", "el11179140578904408584", "el11179140578904409480", "el11179140578904410376", "el11179140578904411272", "el11179140578904412112", "el11179140578904429512", "el11179140578904430408", "el11179140578904431304", "el11179140578904432200", "el11179140578904457736", "el11179140578904458632", "el11179140578904459528", "el11179140578904460424"], "type": "clickinfo", "low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}}, {"ids": ["el11179140578904483040", "el11179140578904357856", "el11179140578904483712", "el11179140578904484608", "el11179140578904485504", "el11179140578904502848", "el11179140578904503744", "el11179140578904504640", "el11179140578904505536", "el11179140578904002688", "el11179140578904003584", "el11179140578904004480", "el11179140578904005376", "el11179140578904006272", "el11179140578904031808", "el11179140578904032704", "el11179140578904033600", "el11179140578904034496", "el11179140578904055936", "el11179140578904056832"], "type": "clickinfo", "low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}}]});
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
    
                 mpld3.draw_figure("id12", {"data": {"data13": [[0.0, 32.5, 0.0], [6162.0, 32.5, 251.88073844143113], [6162.0, 33.5, 251.88073844143113], [0.0, 33.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.1370229007634], [2620.0, 31.5, 258.1370229007634], [0.0, 31.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.75114304376226], [1531.0, 20.5, 254.75114304376226], [0.0, 20.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.71580690960718], [4226.0, 30.5, 253.71580690960718], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.82281708094328], [1572.0, 21.5, 252.82281708094328], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.3596584845251], [937.0, 32.5, 259.3596584845251], [0.0, 32.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.9491468718635], [2989.0, 36.5, 263.9491468718635], [0.0, 36.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [951.0, 22.5, 244.6358754027927], [951.0, 23.5, 244.6358754027927], [0.0, 23.5, 0.0]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data08": [[0.0, 25.5, 0.0], [6947.0, 25.5, 251.31841082481645], [6947.0, 26.5, 251.31841082481645], [0.0, 26.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.8343605546995], [1301.0, 34.5, 273.8343605546995], [0.0, 34.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.62118644067797], [2360.0, 28.5, 247.62118644067797], [0.0, 28.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1311.0, 24.5, 244.11631537861047], [1311.0, 25.5, 244.11631537861047], [0.0, 25.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.80367118914606], [2541.0, 22.5, 238.80367118914606], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [15.5, 37.5], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578904729416"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7641.2, 5.0], "id": "el11179140578905029096", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904358136", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904357632", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904358864", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578904380360", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578904381256", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578904382152", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578904383048", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904408584", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578904409480", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578904410376", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904411272", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578904412112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904429512", "facecolor": "#FF0000", "xindex": 0, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578904430408", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578904431304", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578904432200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578904457736", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578904458632", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578904459528", "facecolor": "#FF0000", "xindex": 0, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578904460424", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7641.2, 5.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "nticks": 20, "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578904609008", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.5, 37.5]}, {"ydomain": [15.5, 37.5], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578905029096"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [228.80367118914606, 283.8343605546995], "id": "el11179140578904729416", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904483040", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904357856", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904483712", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578904484608", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578904485504", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578904502848", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578904503744", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904504640", "facecolor": "#FFA500", "xindex": 2, "yindex": 5}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578904505536", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578904002688", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904003584", "facecolor": "#FFA500", "xindex": 2, "yindex": 6}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578904004480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904005376", "facecolor": "#FFA500", "xindex": 2, "yindex": 7}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578904006272", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578904031808", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578904032704", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578904033600", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578904034496", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578904055936", "facecolor": "#FFA500", "xindex": 2, "yindex": 8}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578904056832", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [228.80367118914606, 283.8343605546995], "axes": [{"tickvalues": [238, 246, 254, 262, 273], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "nticks": 20, "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578904760560", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [15.5, 37.5]}], "height": 480.0, "id": "el11179140578905730968", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578904358136", "el11179140578904357632", "el11179140578904358864", "el11179140578904380360", "el11179140578904381256", "el11179140578904382152", "el11179140578904383048", "el11179140578904408584", "el11179140578904409480", "el11179140578904410376", "el11179140578904411272", "el11179140578904412112", "el11179140578904429512", "el11179140578904430408", "el11179140578904431304", "el11179140578904432200", "el11179140578904457736", "el11179140578904458632", "el11179140578904459528", "el11179140578904460424"], "type": "clickinfo", "low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}}, {"ids": ["el11179140578904483040", "el11179140578904357856", "el11179140578904483712", "el11179140578904484608", "el11179140578904485504", "el11179140578904502848", "el11179140578904503744", "el11179140578904504640", "el11179140578904505536", "el11179140578904002688", "el11179140578904003584", "el11179140578904004480", "el11179140578904005376", "el11179140578904006272", "el11179140578904031808", "el11179140578904032704", "el11179140578904033600", "el11179140578904034496", "el11179140578904055936", "el11179140578904056832"], "type": "clickinfo", "low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}}]});
            })
         });
}

