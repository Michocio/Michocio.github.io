

 


 
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
    
       mpld3.draw_figure("id10", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.65, 33.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766995125920", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766995066384", "xdomain": [8218.0, 33.0], "collections": [], "ylim": [14.65, 33.35], "zoomable": true, "markers": [], "sharey": ["el7886139766994730344"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8218.0, 33.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994855080", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994854576", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994855864", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994856760", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994857656", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994887288", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994888184", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994889080", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994889976", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994911416", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994912312", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994913208", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994914104", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994915000", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994932344", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994933240", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994934136", "alpha": 0.7, "data": "data16", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [214, 229, 244, 259, 276], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.65, 33.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766994757392", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766994730344", "xdomain": [204.0, 286.0], "collections": [], "ylim": [14.65, 33.35], "zoomable": true, "markers": [], "sharey": ["el7886139766995066384"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [204.0, 286.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994956752", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994854800", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994957424", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994958320", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994959216", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994960112", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994985648", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994986544", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994987440", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994988336", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994481392", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994482288", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994483184", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994484080", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994484976", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994506416", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994507312", "alpha": 0.7, "data": "data16", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766995626752", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "ids": ["el7886139766994855080", "el7886139766994854576", "el7886139766994855864", "el7886139766994856760", "el7886139766994857656", "el7886139766994887288", "el7886139766994888184", "el7886139766994889080", "el7886139766994889976", "el7886139766994911416", "el7886139766994912312", "el7886139766994913208", "el7886139766994914104", "el7886139766994915000", "el7886139766994932344", "el7886139766994933240", "el7886139766994934136"]}, {"type": "clickinfo", "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "ids": ["el7886139766994956752", "el7886139766994854800", "el7886139766994957424", "el7886139766994958320", "el7886139766994959216", "el7886139766994960112", "el7886139766994985648", "el7886139766994986544", "el7886139766994987440", "el7886139766994988336", "el7886139766994481392", "el7886139766994482288", "el7886139766994483184", "el7886139766994484080", "el7886139766994484976", "el7886139766994506416", "el7886139766994507312"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]]}});
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
    
         mpld3.draw_figure("id10", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.65, 33.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766995125920", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766995066384", "xdomain": [8218.0, 33.0], "collections": [], "ylim": [14.65, 33.35], "zoomable": true, "markers": [], "sharey": ["el7886139766994730344"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8218.0, 33.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994855080", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994854576", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994855864", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994856760", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994857656", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994887288", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994888184", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994889080", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994889976", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994911416", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994912312", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994913208", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994914104", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994915000", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994932344", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994933240", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994934136", "alpha": 0.7, "data": "data16", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [214, 229, 244, 259, 276], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.65, 33.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766994757392", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766994730344", "xdomain": [204.0, 286.0], "collections": [], "ylim": [14.65, 33.35], "zoomable": true, "markers": [], "sharey": ["el7886139766995066384"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [204.0, 286.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994956752", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994854800", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994957424", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994958320", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994959216", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994960112", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994985648", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994986544", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994987440", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994988336", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994481392", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994482288", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994483184", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994484080", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994484976", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994506416", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994507312", "alpha": 0.7, "data": "data16", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766995626752", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "ids": ["el7886139766994855080", "el7886139766994854576", "el7886139766994855864", "el7886139766994856760", "el7886139766994857656", "el7886139766994887288", "el7886139766994888184", "el7886139766994889080", "el7886139766994889976", "el7886139766994911416", "el7886139766994912312", "el7886139766994913208", "el7886139766994914104", "el7886139766994915000", "el7886139766994932344", "el7886139766994933240", "el7886139766994934136"]}, {"type": "clickinfo", "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "ids": ["el7886139766994956752", "el7886139766994854800", "el7886139766994957424", "el7886139766994958320", "el7886139766994959216", "el7886139766994960112", "el7886139766994985648", "el7886139766994986544", "el7886139766994987440", "el7886139766994988336", "el7886139766994481392", "el7886139766994482288", "el7886139766994483184", "el7886139766994484080", "el7886139766994484976", "el7886139766994506416", "el7886139766994507312"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]]}});
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
    
                 mpld3.draw_figure("id10", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [14.65, 33.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766995125920", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766995066384", "xdomain": [8218.0, 33.0], "collections": [], "ylim": [14.65, 33.35], "zoomable": true, "markers": [], "sharey": ["el7886139766994730344"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8218.0, 33.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994855080", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994854576", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994855864", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994856760", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994857656", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994887288", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994888184", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994889080", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994889976", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994911416", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994912312", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994913208", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994914104", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994915000", "alpha": 0.7, "data": "data14", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994932344", "alpha": 0.7, "data": "data15", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994933240", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994934136", "alpha": 0.7, "data": "data16", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [214, 229, 244, 259, 276], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [14.65, 33.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766994757392", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766994730344", "xdomain": [204.0, 286.0], "collections": [], "ylim": [14.65, 33.35], "zoomable": true, "markers": [], "sharey": ["el7886139766995066384"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [204.0, 286.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994956752", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994854800", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994957424", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994958320", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994959216", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994960112", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994985648", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994986544", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994987440", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994988336", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994481392", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994482288", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994483184", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994484080", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994484976", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994506416", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994507312", "alpha": 0.7, "data": "data16", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766995626752", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "ids": ["el7886139766994855080", "el7886139766994854576", "el7886139766994855864", "el7886139766994856760", "el7886139766994857656", "el7886139766994887288", "el7886139766994888184", "el7886139766994889080", "el7886139766994889976", "el7886139766994911416", "el7886139766994912312", "el7886139766994913208", "el7886139766994914104", "el7886139766994915000", "el7886139766994932344", "el7886139766994933240", "el7886139766994934136"]}, {"type": "clickinfo", "alls": [["Batosz Rymaniak", [2877, 254]], ["Michael Gardawski", [2742, 265]], ["Jakub \u017bubrowski", [2674, 272]], ["Adnan Kovacevic", [2674, 271]], ["Elia Soriano", [2648, 258]], ["Oliver Petrak", [2443, 251]], ["Iv\u00e1n M\u00e1rquez", [2208, 255]], ["Matej Pucko", [2073, 255]], ["\u0141ukasz Kosakiewicz", [1757, 245]], ["E. Diaw", [1732, 270]], ["Ivan Jukic", [1388, 256]], ["F. Brown Forbes", [1338, 242]], ["Vato Arveladze", [1256, 268]], ["Marcin Cebula", [1229, 276]], ["Ognjen Gnjatic", [1051, 274]], ["Zlatko Janjic", [1034, 238]], ["Piotr Malarczyk", [921, 252]], ["Mateusz Mo\u017cd\u017ce\u0144", [828, 239]], ["Ken Kallaste", [717, 253]], ["Maciej Gorski", [709, 216]], ["Joonas Tamm", [371, 264]], ["Oktawian Skrzecz", [248, 225]], ["Aleksandar Bjelica", [214, 268]], ["Oskar Sewerzynski", [138, 214]], ["Piotr Pierzcha\u0142a", [94, 253]], ["Daniel Szelagowski", [33, 197]]], "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}, "vals": {"32": [1034, 238], "16": [33, 0], "17": [138, 214], "19": [94, 253], "20": [1256, 268], "21": [248, 225], "22": [1388, 256], "23": [1229, 276], "24": [4154, 262], "25": [4747, 264], "26": [3045, 271], "27": [6581, 252], "28": [5208, 252], "29": [5525, 256], "30": [717, 253]}, "low": 16, "ids": ["el7886139766994956752", "el7886139766994854800", "el7886139766994957424", "el7886139766994958320", "el7886139766994959216", "el7886139766994960112", "el7886139766994985648", "el7886139766994986544", "el7886139766994987440", "el7886139766994988336", "el7886139766994481392", "el7886139766994482288", "el7886139766994483184", "el7886139766994484080", "el7886139766994484976", "el7886139766994506416", "el7886139766994507312"]}], "height": 480.0, "data": {"data12": [[0.0, 26.5, 0.0, 27.5], [6581.0, 26.5, 252.0, 27.5], [6581.0, 27.5, 252.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0], [1034.0, 32.5, 238.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 21.5, 0.0, 28.5], [1388.0, 21.5, 256.0, 28.5], [1388.0, 22.5, 256.0, 29.5], [0.0, 22.5, 0.0, 29.5]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.0], [248.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.0], [4154.0, 24.5, 262.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 18.5, 0.0, 29.5], [94.0, 18.5, 253.0, 29.5], [94.0, 19.5, 253.0, 30.5], [0.0, 19.5, 0.0, 30.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.0], [4747.0, 25.5, 264.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 28.5], [5525.0, 28.5], [5525.0, 29.5], [0.0, 29.5]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.0], [1229.0, 23.5, 276.0], [0.0, 23.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.0], [138.0, 17.5, 214.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.0], [1256.0, 20.5, 268.0], [0.0, 20.5, 0.0]], "data13": [[0.0, 27.5], [5208.0, 27.5], [5208.0, 28.5], [0.0, 28.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.0], [3045.0, 26.5, 271.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data15": [[0.0, 29.5], [717.0, 29.5], [717.0, 30.5], [0.0, 30.5]]}});
            })
         });
}
 
