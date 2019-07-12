


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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
       mpld3.draw_figure("id12", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 20, "visible": true, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [15.5, 37.5], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993540656", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766993922144", "xdomain": [8682.5, 5.0], "collections": [], "ylim": [15.5, 37.5], "zoomable": true, "markers": [], "sharey": ["el7886139766993202032"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8682.5, 5.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993353920", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993353416", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993354704", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993376144", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993377040", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993377936", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993378832", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993400272", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993401168", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993402064", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993402960", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993403856", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992901008", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992901904", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992902800", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992903696", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992925136", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992926032", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992926928", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992927824", "alpha": 0.7, "data": "data15", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [238, 246, 254, 262, 273], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 20, "visible": true, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [15.5, 37.5], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993229080", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766993202032", "xdomain": [228.0, 283.0], "collections": [], "ylim": [15.5, 37.5], "zoomable": true, "markers": [], "sharey": ["el7886139766993922144"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [228.0, 283.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992954536", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993353640", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992955208", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992956104", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992957000", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992978440", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992979336", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992980232", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992981128", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992981968", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993003464", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993004360", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993005256", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993006152", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993031688", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993032584", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993033480", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993034376", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 8, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993035216", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993052616", "alpha": 0.7, "data": "data15", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766993421592", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17, "ids": ["el7886139766993353920", "el7886139766993353416", "el7886139766993354704", "el7886139766993376144", "el7886139766993377040", "el7886139766993377936", "el7886139766993378832", "el7886139766993400272", "el7886139766993401168", "el7886139766993402064", "el7886139766993402960", "el7886139766993403856", "el7886139766992901008", "el7886139766992901904", "el7886139766992902800", "el7886139766992903696", "el7886139766992925136", "el7886139766992926032", "el7886139766992926928", "el7886139766992927824"]}, {"type": "clickinfo", "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17, "ids": ["el7886139766992954536", "el7886139766993353640", "el7886139766992955208", "el7886139766992956104", "el7886139766992957000", "el7886139766992978440", "el7886139766992979336", "el7886139766992980232", "el7886139766992981128", "el7886139766992981968", "el7886139766993003464", "el7886139766993004360", "el7886139766993005256", "el7886139766993006152", "el7886139766993031688", "el7886139766993032584", "el7886139766993033480", "el7886139766993034376", "el7886139766993035216", "el7886139766993052616"]}], "height": 480.0, "data": {"data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]]}});
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
         mpld3.draw_figure("id12", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 20, "visible": true, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [15.5, 37.5], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993540656", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766993922144", "xdomain": [8682.5, 5.0], "collections": [], "ylim": [15.5, 37.5], "zoomable": true, "markers": [], "sharey": ["el7886139766993202032"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8682.5, 5.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993353920", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993353416", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993354704", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993376144", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993377040", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993377936", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993378832", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993400272", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993401168", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993402064", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993402960", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993403856", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992901008", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992901904", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992902800", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992903696", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992925136", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992926032", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992926928", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992927824", "alpha": 0.7, "data": "data15", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [238, 246, 254, 262, 273], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 20, "visible": true, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [15.5, 37.5], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993229080", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766993202032", "xdomain": [228.0, 283.0], "collections": [], "ylim": [15.5, 37.5], "zoomable": true, "markers": [], "sharey": ["el7886139766993922144"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [228.0, 283.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992954536", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993353640", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992955208", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992956104", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992957000", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992978440", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992979336", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992980232", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992981128", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992981968", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993003464", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993004360", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993005256", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993006152", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993031688", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993032584", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993033480", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993034376", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 8, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993035216", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993052616", "alpha": 0.7, "data": "data15", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766993421592", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17, "ids": ["el7886139766993353920", "el7886139766993353416", "el7886139766993354704", "el7886139766993376144", "el7886139766993377040", "el7886139766993377936", "el7886139766993378832", "el7886139766993400272", "el7886139766993401168", "el7886139766993402064", "el7886139766993402960", "el7886139766993403856", "el7886139766992901008", "el7886139766992901904", "el7886139766992902800", "el7886139766992903696", "el7886139766992925136", "el7886139766992926032", "el7886139766992926928", "el7886139766992927824"]}, {"type": "clickinfo", "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17, "ids": ["el7886139766992954536", "el7886139766993353640", "el7886139766992955208", "el7886139766992956104", "el7886139766992957000", "el7886139766992978440", "el7886139766992979336", "el7886139766992980232", "el7886139766992981128", "el7886139766992981968", "el7886139766993003464", "el7886139766993004360", "el7886139766993005256", "el7886139766993006152", "el7886139766993031688", "el7886139766993032584", "el7886139766993033480", "el7886139766993034376", "el7886139766993035216", "el7886139766993052616"]}], "height": 480.0, "data": {"data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]]}});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;
        var bins = this.props.vals;
        var alls = this.props.alls;
                                          var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in alls) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = alls[j];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1][1]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                              });
                              });
    }
    
                 mpld3.draw_figure("id12", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 20, "visible": true, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [15.5, 37.5], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993540656", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766993922144", "xdomain": [8682.5, 5.0], "collections": [], "ylim": [15.5, 37.5], "zoomable": true, "markers": [], "sharey": ["el7886139766993202032"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8682.5, 5.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993353920", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993353416", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993354704", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993376144", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993377040", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993377936", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993378832", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993400272", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993401168", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993402064", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993402960", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766993403856", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992901008", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992901904", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992902800", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992903696", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992925136", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992926032", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992926928", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766992927824", "alpha": 0.7, "data": "data15", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [238, 246, 254, 262, 273], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 20, "visible": true, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [15.5, 37.5], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993229080", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766993202032", "xdomain": [228.0, 283.0], "collections": [], "ylim": [15.5, 37.5], "zoomable": true, "markers": [], "sharey": ["el7886139766993922144"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [228.0, 283.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992954536", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993353640", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992955208", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992956104", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992957000", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992978440", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992979336", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992980232", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992981128", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766992981968", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993003464", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993004360", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 7, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993005256", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993006152", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993031688", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993032584", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993033480", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993034376", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 8, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993035216", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993052616", "alpha": 0.7, "data": "data15", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766993421592", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17, "ids": ["el7886139766993353920", "el7886139766993353416", "el7886139766993354704", "el7886139766993376144", "el7886139766993377040", "el7886139766993377936", "el7886139766993378832", "el7886139766993400272", "el7886139766993401168", "el7886139766993402064", "el7886139766993402960", "el7886139766993403856", "el7886139766992901008", "el7886139766992901904", "el7886139766992902800", "el7886139766992903696", "el7886139766992925136", "el7886139766992926032", "el7886139766992926928", "el7886139766992927824"]}, {"type": "clickinfo", "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17, "ids": ["el7886139766992954536", "el7886139766993353640", "el7886139766992955208", "el7886139766992956104", "el7886139766992957000", "el7886139766992978440", "el7886139766992979336", "el7886139766992980232", "el7886139766992981128", "el7886139766992981968", "el7886139766993003464", "el7886139766993004360", "el7886139766993005256", "el7886139766993006152", "el7886139766993031688", "el7886139766993032584", "el7886139766993033480", "el7886139766993034376", "el7886139766993035216", "el7886139766993052616"]}], "height": 480.0, "data": {"data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]]}});
            })
         });
}
 
