

 

 

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
    
       mpld3.draw_figure("id3", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767076623024", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139767076587560", "xdomain": [9307.5, 5.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139767061470288"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [9307.5, 5.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061104288", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061103896", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061105072", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061105912", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061151928", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061152824", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061153720", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061154616", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061155512", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061172856", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061173752", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061174648", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061175544", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061196984", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061197880", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061198776", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061199672", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061200568", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061226104", "alpha": 0.7, "data": "data18", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [235, 245, 255, 265, 275], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767061505528", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139767061470288", "xdomain": [225.0, 285.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139767076587560"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [225.0, 285.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061228176", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061103952", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061228848", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061258480", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061259376", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061260272", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061261168", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061262064", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061287600", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061288496", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061289392", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061290288", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061311728", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061312624", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061313520", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061314416", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061315312", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767060808368", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767060809264", "alpha": 0.7, "data": "data18", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139767078473680", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "ids": ["el7886139767061104288", "el7886139767061103896", "el7886139767061105072", "el7886139767061105912", "el7886139767061151928", "el7886139767061152824", "el7886139767061153720", "el7886139767061154616", "el7886139767061155512", "el7886139767061172856", "el7886139767061173752", "el7886139767061174648", "el7886139767061175544", "el7886139767061196984", "el7886139767061197880", "el7886139767061198776", "el7886139767061199672", "el7886139767061200568", "el7886139767061226104"]}, {"type": "clickinfo", "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "ids": ["el7886139767061228176", "el7886139767061103952", "el7886139767061228848", "el7886139767061258480", "el7886139767061259376", "el7886139767061260272", "el7886139767061261168", "el7886139767061262064", "el7886139767061287600", "el7886139767061288496", "el7886139767061289392", "el7886139767061290288", "el7886139767061311728", "el7886139767061312624", "el7886139767061313520", "el7886139767061314416", "el7886139767061315312", "el7886139767060808368", "el7886139767060809264"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]]}});
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
    
         mpld3.draw_figure("id3", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767076623024", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139767076587560", "xdomain": [9307.5, 5.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139767061470288"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [9307.5, 5.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061104288", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061103896", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061105072", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061105912", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061151928", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061152824", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061153720", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061154616", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061155512", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061172856", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061173752", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061174648", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061175544", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061196984", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061197880", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061198776", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061199672", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061200568", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061226104", "alpha": 0.7, "data": "data18", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [235, 245, 255, 265, 275], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767061505528", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139767061470288", "xdomain": [225.0, 285.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139767076587560"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [225.0, 285.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061228176", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061103952", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061228848", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061258480", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061259376", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061260272", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061261168", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061262064", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061287600", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061288496", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061289392", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061290288", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061311728", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061312624", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061313520", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061314416", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061315312", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767060808368", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767060809264", "alpha": 0.7, "data": "data18", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139767078473680", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "ids": ["el7886139767061104288", "el7886139767061103896", "el7886139767061105072", "el7886139767061105912", "el7886139767061151928", "el7886139767061152824", "el7886139767061153720", "el7886139767061154616", "el7886139767061155512", "el7886139767061172856", "el7886139767061173752", "el7886139767061174648", "el7886139767061175544", "el7886139767061196984", "el7886139767061197880", "el7886139767061198776", "el7886139767061199672", "el7886139767061200568", "el7886139767061226104"]}, {"type": "clickinfo", "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "ids": ["el7886139767061228176", "el7886139767061103952", "el7886139767061228848", "el7886139767061258480", "el7886139767061259376", "el7886139767061260272", "el7886139767061261168", "el7886139767061262064", "el7886139767061287600", "el7886139767061288496", "el7886139767061289392", "el7886139767061290288", "el7886139767061311728", "el7886139767061312624", "el7886139767061313520", "el7886139767061314416", "el7886139767061315312", "el7886139767060808368", "el7886139767060809264"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]]}});
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
    
                 mpld3.draw_figure("id3", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767076623024", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139767076587560", "xdomain": [9307.5, 5.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139767061470288"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [9307.5, 5.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061104288", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061103896", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061105072", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061105912", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061151928", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061152824", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061153720", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061154616", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061155512", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061172856", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061173752", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061174648", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061175544", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061196984", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061197880", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061198776", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061199672", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061200568", "alpha": 0.7, "data": "data17", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767061226104", "alpha": 0.7, "data": "data18", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [235, 245, 255, 265, 275], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 19, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.55, 35.45], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767061505528", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139767061470288", "xdomain": [225.0, 285.0], "collections": [], "ylim": [14.55, 35.45], "zoomable": true, "markers": [], "sharey": ["el7886139767076587560"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [225.0, 285.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061228176", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061103952", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061228848", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061258480", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061259376", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061260272", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061261168", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061262064", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061287600", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061288496", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061289392", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061290288", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061311728", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061312624", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061313520", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061314416", "alpha": 0.7, "data": "data16", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767061315312", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767060808368", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767060809264", "alpha": 0.7, "data": "data18", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139767078473680", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "ids": ["el7886139767061104288", "el7886139767061103896", "el7886139767061105072", "el7886139767061105912", "el7886139767061151928", "el7886139767061152824", "el7886139767061153720", "el7886139767061154616", "el7886139767061155512", "el7886139767061172856", "el7886139767061173752", "el7886139767061174648", "el7886139767061175544", "el7886139767061196984", "el7886139767061197880", "el7886139767061198776", "el7886139767061199672", "el7886139767061200568", "el7886139767061226104"]}, {"type": "clickinfo", "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "ids": ["el7886139767061228176", "el7886139767061103952", "el7886139767061228848", "el7886139767061258480", "el7886139767061259376", "el7886139767061260272", "el7886139767061261168", "el7886139767061262064", "el7886139767061287600", "el7886139767061288496", "el7886139767061289392", "el7886139767061290288", "el7886139767061311728", "el7886139767061312624", "el7886139767061313520", "el7886139767061314416", "el7886139767061315312", "el7886139767060808368", "el7886139767060809264"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]]}});
            })
         });
}
 
