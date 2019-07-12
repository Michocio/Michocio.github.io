

 

 

 
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
    
       mpld3.draw_figure("id7", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 15, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [16.75, 33.25], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767000799440", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139767001272272", "xdomain": [11717.5, 500.0], "collections": [], "ylim": [16.75, 33.25], "zoomable": true, "markers": [], "sharey": ["el7886139767000919848"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [11717.5, 500.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000569336", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000568832", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000570120", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000571016", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000571856", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000597448", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000598344", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000599240", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000600136", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000621576", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000622472", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000623368", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000624264", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000625104", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000650696", "alpha": 0.7, "data": "data14", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [233, 242, 251, 260, 271], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 15, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [16.75, 33.25], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767000955088", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139767000919848", "xdomain": [223.0, 281.0], "collections": [], "ylim": [16.75, 33.25], "zoomable": true, "markers": [], "sharey": ["el7886139767001272272"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [223.0, 281.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000652768", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000569000", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000653440", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000670784", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000671680", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000672576", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000673472", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000694912", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000695808", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000696704", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000697600", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000698496", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000719936", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000720832", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000721728", "alpha": 0.7, "data": "data14", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139767001342640", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Kamil Drygas", [3231, 267]], ["Radoslaw Majewski", [2868, 271]], ["Zvonimir Kozulj", [2836, 266]], ["Tomas Podstawski", [2832, 268]], ["Sebastian Walukiewicz", [2714, 265]], ["Hubert Matynia", [2222, 250]], ["Mariusz Malec", [2001, 268]], ["David Stec", [1977, 253]], ["Adam Buksa", [1924, 263]], ["Ricardo Nunes", [1736, 272]], ["Sebastian Kowalczyk", [1699, 255]], ["Iker Guarrotxena", [1443, 253]], ["Lasha Dvali", [1195, 269]], ["Jakub Bartkowski", [1088, 283]], ["David Niepsuj", [860, 242]], ["Jaros\u0142aw Fojut", [734, 264]], ["Adam Fraczczak", [687, 225]], ["Spas Delev", [648, 242]], ["Soufian Benyamina", [619, 245]], ["Tomasz Ho\u0142ota", [490, 242]], ["Adrian Benedyczak", [432, 216]], ["Sebastian Rudol", [364, 224]], ["Santeri Hostikka", [322, 244]], ["Micha\u0142 \u017byro", [295, 246]], ["Dawid B\u0142anik", [178, 213]], ["Marcin Listkowski", [53, 210]], ["Jin Izumisawa", [31, 252]], ["Maciej \u017burawski", [12, 0]]], "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}, "vals": {"32": [4604, 271], "18": [3158, 258], "20": [1752, 254], "21": [500, 233], "22": [1924, 263], "23": [9474, 260], "24": [1977, 253], "25": [2836, 266], "26": [1738, 252], "27": [4840, 268], "28": [619, 245], "29": [648, 242], "31": [1421, 245]}, "low": 18, "ids": ["el7886139767000569336", "el7886139767000568832", "el7886139767000570120", "el7886139767000571016", "el7886139767000571856", "el7886139767000597448", "el7886139767000598344", "el7886139767000599240", "el7886139767000600136", "el7886139767000621576", "el7886139767000622472", "el7886139767000623368", "el7886139767000624264", "el7886139767000625104", "el7886139767000650696"]}, {"type": "clickinfo", "alls": [["Kamil Drygas", [3231, 267]], ["Radoslaw Majewski", [2868, 271]], ["Zvonimir Kozulj", [2836, 266]], ["Tomas Podstawski", [2832, 268]], ["Sebastian Walukiewicz", [2714, 265]], ["Hubert Matynia", [2222, 250]], ["Mariusz Malec", [2001, 268]], ["David Stec", [1977, 253]], ["Adam Buksa", [1924, 263]], ["Ricardo Nunes", [1736, 272]], ["Sebastian Kowalczyk", [1699, 255]], ["Iker Guarrotxena", [1443, 253]], ["Lasha Dvali", [1195, 269]], ["Jakub Bartkowski", [1088, 283]], ["David Niepsuj", [860, 242]], ["Jaros\u0142aw Fojut", [734, 264]], ["Adam Fraczczak", [687, 225]], ["Spas Delev", [648, 242]], ["Soufian Benyamina", [619, 245]], ["Tomasz Ho\u0142ota", [490, 242]], ["Adrian Benedyczak", [432, 216]], ["Sebastian Rudol", [364, 224]], ["Santeri Hostikka", [322, 244]], ["Micha\u0142 \u017byro", [295, 246]], ["Dawid B\u0142anik", [178, 213]], ["Marcin Listkowski", [53, 210]], ["Jin Izumisawa", [31, 252]], ["Maciej \u017burawski", [12, 0]]], "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}, "vals": {"32": [4604, 271], "18": [3158, 258], "20": [1752, 254], "21": [500, 233], "22": [1924, 263], "23": [9474, 260], "24": [1977, 253], "25": [2836, 266], "26": [1738, 252], "27": [4840, 268], "28": [619, 245], "29": [648, 242], "31": [1421, 245]}, "low": 18, "ids": ["el7886139767000652768", "el7886139767000569000", "el7886139767000653440", "el7886139767000670784", "el7886139767000671680", "el7886139767000672576", "el7886139767000673472", "el7886139767000694912", "el7886139767000695808", "el7886139767000696704", "el7886139767000697600", "el7886139767000698496", "el7886139767000719936", "el7886139767000720832", "el7886139767000721728"]}], "height": 480.0, "data": {"data12": [[0.0, 28.5, 0.0], [648.0, 28.5, 242.0], [648.0, 29.5, 242.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [1977.0, 23.5, 253.0], [1977.0, 24.5, 253.0], [0.0, 24.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [9474.0, 22.5, 260.0], [9474.0, 23.5, 260.0], [0.0, 23.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1738.0, 25.5, 252.0], [1738.0, 26.5, 252.0], [0.0, 26.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [500.0, 20.5, 233.0], [500.0, 21.5, 233.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [4840.0, 26.5, 268.0], [4840.0, 27.5, 268.0], [0.0, 27.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [4604.0, 31.5, 271.0], [4604.0, 32.5, 271.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2836.0, 24.5, 266.0], [2836.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data02": [[0.0, 18.5, 29.5], [0.0, 18.5, 29.5], [0.0, 19.5, 30.5], [0.0, 19.5, 30.5]], "data05": [[0.0, 21.5, 0.0], [1924.0, 21.5, 263.0], [1924.0, 22.5, 263.0], [0.0, 22.5, 0.0]], "data13": [[0.0, 30.5], [1421.0, 30.5], [1421.0, 31.5], [0.0, 31.5]], "data01": [[0.0, 17.5, 0.0], [3158.0, 17.5, 258.0], [3158.0, 18.5, 258.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 27.5, 0.0, 30.5], [619.0, 27.5, 245.0, 30.5], [619.0, 28.5, 245.0, 31.5], [0.0, 28.5, 0.0, 31.5]], "data03": [[0.0, 19.5, 0.0], [1752.0, 19.5, 254.0], [1752.0, 20.5, 254.0], [0.0, 20.5, 0.0]]}});
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
    
         mpld3.draw_figure("id7", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 15, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [16.75, 33.25], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767000799440", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139767001272272", "xdomain": [11717.5, 500.0], "collections": [], "ylim": [16.75, 33.25], "zoomable": true, "markers": [], "sharey": ["el7886139767000919848"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [11717.5, 500.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000569336", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000568832", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000570120", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000571016", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000571856", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000597448", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000598344", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000599240", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000600136", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000621576", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000622472", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000623368", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000624264", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000625104", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000650696", "alpha": 0.7, "data": "data14", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [233, 242, 251, 260, 271], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 15, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [16.75, 33.25], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767000955088", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139767000919848", "xdomain": [223.0, 281.0], "collections": [], "ylim": [16.75, 33.25], "zoomable": true, "markers": [], "sharey": ["el7886139767001272272"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [223.0, 281.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000652768", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000569000", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000653440", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000670784", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000671680", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000672576", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000673472", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000694912", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000695808", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000696704", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000697600", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000698496", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000719936", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000720832", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000721728", "alpha": 0.7, "data": "data14", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139767001342640", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Kamil Drygas", [3231, 267]], ["Radoslaw Majewski", [2868, 271]], ["Zvonimir Kozulj", [2836, 266]], ["Tomas Podstawski", [2832, 268]], ["Sebastian Walukiewicz", [2714, 265]], ["Hubert Matynia", [2222, 250]], ["Mariusz Malec", [2001, 268]], ["David Stec", [1977, 253]], ["Adam Buksa", [1924, 263]], ["Ricardo Nunes", [1736, 272]], ["Sebastian Kowalczyk", [1699, 255]], ["Iker Guarrotxena", [1443, 253]], ["Lasha Dvali", [1195, 269]], ["Jakub Bartkowski", [1088, 283]], ["David Niepsuj", [860, 242]], ["Jaros\u0142aw Fojut", [734, 264]], ["Adam Fraczczak", [687, 225]], ["Spas Delev", [648, 242]], ["Soufian Benyamina", [619, 245]], ["Tomasz Ho\u0142ota", [490, 242]], ["Adrian Benedyczak", [432, 216]], ["Sebastian Rudol", [364, 224]], ["Santeri Hostikka", [322, 244]], ["Micha\u0142 \u017byro", [295, 246]], ["Dawid B\u0142anik", [178, 213]], ["Marcin Listkowski", [53, 210]], ["Jin Izumisawa", [31, 252]], ["Maciej \u017burawski", [12, 0]]], "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}, "vals": {"32": [4604, 271], "18": [3158, 258], "20": [1752, 254], "21": [500, 233], "22": [1924, 263], "23": [9474, 260], "24": [1977, 253], "25": [2836, 266], "26": [1738, 252], "27": [4840, 268], "28": [619, 245], "29": [648, 242], "31": [1421, 245]}, "low": 18, "ids": ["el7886139767000569336", "el7886139767000568832", "el7886139767000570120", "el7886139767000571016", "el7886139767000571856", "el7886139767000597448", "el7886139767000598344", "el7886139767000599240", "el7886139767000600136", "el7886139767000621576", "el7886139767000622472", "el7886139767000623368", "el7886139767000624264", "el7886139767000625104", "el7886139767000650696"]}, {"type": "clickinfo", "alls": [["Kamil Drygas", [3231, 267]], ["Radoslaw Majewski", [2868, 271]], ["Zvonimir Kozulj", [2836, 266]], ["Tomas Podstawski", [2832, 268]], ["Sebastian Walukiewicz", [2714, 265]], ["Hubert Matynia", [2222, 250]], ["Mariusz Malec", [2001, 268]], ["David Stec", [1977, 253]], ["Adam Buksa", [1924, 263]], ["Ricardo Nunes", [1736, 272]], ["Sebastian Kowalczyk", [1699, 255]], ["Iker Guarrotxena", [1443, 253]], ["Lasha Dvali", [1195, 269]], ["Jakub Bartkowski", [1088, 283]], ["David Niepsuj", [860, 242]], ["Jaros\u0142aw Fojut", [734, 264]], ["Adam Fraczczak", [687, 225]], ["Spas Delev", [648, 242]], ["Soufian Benyamina", [619, 245]], ["Tomasz Ho\u0142ota", [490, 242]], ["Adrian Benedyczak", [432, 216]], ["Sebastian Rudol", [364, 224]], ["Santeri Hostikka", [322, 244]], ["Micha\u0142 \u017byro", [295, 246]], ["Dawid B\u0142anik", [178, 213]], ["Marcin Listkowski", [53, 210]], ["Jin Izumisawa", [31, 252]], ["Maciej \u017burawski", [12, 0]]], "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}, "vals": {"32": [4604, 271], "18": [3158, 258], "20": [1752, 254], "21": [500, 233], "22": [1924, 263], "23": [9474, 260], "24": [1977, 253], "25": [2836, 266], "26": [1738, 252], "27": [4840, 268], "28": [619, 245], "29": [648, 242], "31": [1421, 245]}, "low": 18, "ids": ["el7886139767000652768", "el7886139767000569000", "el7886139767000653440", "el7886139767000670784", "el7886139767000671680", "el7886139767000672576", "el7886139767000673472", "el7886139767000694912", "el7886139767000695808", "el7886139767000696704", "el7886139767000697600", "el7886139767000698496", "el7886139767000719936", "el7886139767000720832", "el7886139767000721728"]}], "height": 480.0, "data": {"data12": [[0.0, 28.5, 0.0], [648.0, 28.5, 242.0], [648.0, 29.5, 242.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [1977.0, 23.5, 253.0], [1977.0, 24.5, 253.0], [0.0, 24.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [9474.0, 22.5, 260.0], [9474.0, 23.5, 260.0], [0.0, 23.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1738.0, 25.5, 252.0], [1738.0, 26.5, 252.0], [0.0, 26.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [500.0, 20.5, 233.0], [500.0, 21.5, 233.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [4840.0, 26.5, 268.0], [4840.0, 27.5, 268.0], [0.0, 27.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [4604.0, 31.5, 271.0], [4604.0, 32.5, 271.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2836.0, 24.5, 266.0], [2836.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data02": [[0.0, 18.5, 29.5], [0.0, 18.5, 29.5], [0.0, 19.5, 30.5], [0.0, 19.5, 30.5]], "data05": [[0.0, 21.5, 0.0], [1924.0, 21.5, 263.0], [1924.0, 22.5, 263.0], [0.0, 22.5, 0.0]], "data13": [[0.0, 30.5], [1421.0, 30.5], [1421.0, 31.5], [0.0, 31.5]], "data01": [[0.0, 17.5, 0.0], [3158.0, 17.5, 258.0], [3158.0, 18.5, 258.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 27.5, 0.0, 30.5], [619.0, 27.5, 245.0, 30.5], [619.0, 28.5, 245.0, 31.5], [0.0, 28.5, 0.0, 31.5]], "data03": [[0.0, 19.5, 0.0], [1752.0, 19.5, 254.0], [1752.0, 20.5, 254.0], [0.0, 20.5, 0.0]]}});
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
    
                 mpld3.draw_figure("id7", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 15, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [16.75, 33.25], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767000799440", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139767001272272", "xdomain": [11717.5, 500.0], "collections": [], "ylim": [16.75, 33.25], "zoomable": true, "markers": [], "sharey": ["el7886139767000919848"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [11717.5, 500.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000569336", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000568832", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000570120", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000571016", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000571856", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000597448", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000598344", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000599240", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000600136", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000621576", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000622472", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000623368", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000624264", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000625104", "alpha": 0.7, "data": "data13", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139767000650696", "alpha": 0.7, "data": "data14", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [233, 242, 251, 260, 271], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 15, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [16.75, 33.25], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139767000955088", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139767000919848", "xdomain": [223.0, 281.0], "collections": [], "ylim": [16.75, 33.25], "zoomable": true, "markers": [], "sharey": ["el7886139767001272272"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [223.0, 281.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000652768", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000569000", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000653440", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000670784", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000671680", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000672576", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000673472", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000694912", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000695808", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000696704", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000697600", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000698496", "alpha": 0.7, "data": "data12", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000719936", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000720832", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139767000721728", "alpha": 0.7, "data": "data14", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139767001342640", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Kamil Drygas", [3231, 267]], ["Radoslaw Majewski", [2868, 271]], ["Zvonimir Kozulj", [2836, 266]], ["Tomas Podstawski", [2832, 268]], ["Sebastian Walukiewicz", [2714, 265]], ["Hubert Matynia", [2222, 250]], ["Mariusz Malec", [2001, 268]], ["David Stec", [1977, 253]], ["Adam Buksa", [1924, 263]], ["Ricardo Nunes", [1736, 272]], ["Sebastian Kowalczyk", [1699, 255]], ["Iker Guarrotxena", [1443, 253]], ["Lasha Dvali", [1195, 269]], ["Jakub Bartkowski", [1088, 283]], ["David Niepsuj", [860, 242]], ["Jaros\u0142aw Fojut", [734, 264]], ["Adam Fraczczak", [687, 225]], ["Spas Delev", [648, 242]], ["Soufian Benyamina", [619, 245]], ["Tomasz Ho\u0142ota", [490, 242]], ["Adrian Benedyczak", [432, 216]], ["Sebastian Rudol", [364, 224]], ["Santeri Hostikka", [322, 244]], ["Micha\u0142 \u017byro", [295, 246]], ["Dawid B\u0142anik", [178, 213]], ["Marcin Listkowski", [53, 210]], ["Jin Izumisawa", [31, 252]], ["Maciej \u017burawski", [12, 0]]], "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}, "vals": {"32": [4604, 271], "18": [3158, 258], "20": [1752, 254], "21": [500, 233], "22": [1924, 263], "23": [9474, 260], "24": [1977, 253], "25": [2836, 266], "26": [1738, 252], "27": [4840, 268], "28": [619, 245], "29": [648, 242], "31": [1421, 245]}, "low": 18, "ids": ["el7886139767000569336", "el7886139767000568832", "el7886139767000570120", "el7886139767000571016", "el7886139767000571856", "el7886139767000597448", "el7886139767000598344", "el7886139767000599240", "el7886139767000600136", "el7886139767000621576", "el7886139767000622472", "el7886139767000623368", "el7886139767000624264", "el7886139767000625104", "el7886139767000650696"]}, {"type": "clickinfo", "alls": [["Kamil Drygas", [3231, 267]], ["Radoslaw Majewski", [2868, 271]], ["Zvonimir Kozulj", [2836, 266]], ["Tomas Podstawski", [2832, 268]], ["Sebastian Walukiewicz", [2714, 265]], ["Hubert Matynia", [2222, 250]], ["Mariusz Malec", [2001, 268]], ["David Stec", [1977, 253]], ["Adam Buksa", [1924, 263]], ["Ricardo Nunes", [1736, 272]], ["Sebastian Kowalczyk", [1699, 255]], ["Iker Guarrotxena", [1443, 253]], ["Lasha Dvali", [1195, 269]], ["Jakub Bartkowski", [1088, 283]], ["David Niepsuj", [860, 242]], ["Jaros\u0142aw Fojut", [734, 264]], ["Adam Fraczczak", [687, 225]], ["Spas Delev", [648, 242]], ["Soufian Benyamina", [619, 245]], ["Tomasz Ho\u0142ota", [490, 242]], ["Adrian Benedyczak", [432, 216]], ["Sebastian Rudol", [364, 224]], ["Santeri Hostikka", [322, 244]], ["Micha\u0142 \u017byro", [295, 246]], ["Dawid B\u0142anik", [178, 213]], ["Marcin Listkowski", [53, 210]], ["Jin Izumisawa", [31, 252]], ["Maciej \u017burawski", [12, 0]]], "wiek": {"32": [9236, 54512], "18": [410062, 431425, 483621], "20": [291439, 241205], "21": [280962, 238584], "22": [180861], "23": [18706, 244731, 261293, 93484, 252731, 110879], "24": [232713], "25": [122024], "26": [137668, 16964], "27": [8448, 23449, 64611, 209191], "28": [9686], "29": [8863], "31": [23422, 39844]}, "players": {"8448": ["Kamil Drygas", 3231, 267], "431425": ["Adrian Benedyczak", 432, 216], "280962": ["Santeri Hostikka", 322, 244], "137668": ["Iker Guarrotxena", 1443, 253], "232713": ["David Stec", 1977, 253], "8863": ["Spas Delev", 648, 242], "410062": ["Sebastian Walukiewicz", 2714, 265], "16964": ["Micha\u0142 \u017byro", 295, 246], "18706": ["Tomas Podstawski", 2832, 268], "9236": ["Radoslaw Majewski", 2868, 271], "9686": ["Soufian Benyamina", 619, 245], "23449": ["Jakub Bartkowski", 1088, 283], "110879": ["Sebastian Rudol", 364, 224], "64611": ["Tomasz Ho\u0142ota", 490, 242], "39844": ["Adam Fraczczak", 687, 225], "483621": ["Maciej \u017burawski", 12, 0], "209191": ["Jin Izumisawa", 31, 252], "122024": ["Zvonimir Kozulj", 2836, 266], "93484": ["Lasha Dvali", 1195, 269], "261293": ["Mariusz Malec", 2001, 268], "291439": ["Sebastian Kowalczyk", 1699, 255], "54512": ["Ricardo Nunes", 1736, 272], "241205": ["Marcin Listkowski", 53, 210], "238584": ["Dawid B\u0142anik", 178, 213], "244731": ["Hubert Matynia", 2222, 250], "252731": ["David Niepsuj", 860, 242], "180861": ["Adam Buksa", 1924, 263], "23422": ["Jaros\u0142aw Fojut", 734, 264]}, "vals": {"32": [4604, 271], "18": [3158, 258], "20": [1752, 254], "21": [500, 233], "22": [1924, 263], "23": [9474, 260], "24": [1977, 253], "25": [2836, 266], "26": [1738, 252], "27": [4840, 268], "28": [619, 245], "29": [648, 242], "31": [1421, 245]}, "low": 18, "ids": ["el7886139767000652768", "el7886139767000569000", "el7886139767000653440", "el7886139767000670784", "el7886139767000671680", "el7886139767000672576", "el7886139767000673472", "el7886139767000694912", "el7886139767000695808", "el7886139767000696704", "el7886139767000697600", "el7886139767000698496", "el7886139767000719936", "el7886139767000720832", "el7886139767000721728"]}], "height": 480.0, "data": {"data12": [[0.0, 28.5, 0.0], [648.0, 28.5, 242.0], [648.0, 29.5, 242.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [1977.0, 23.5, 253.0], [1977.0, 24.5, 253.0], [0.0, 24.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [9474.0, 22.5, 260.0], [9474.0, 23.5, 260.0], [0.0, 23.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1738.0, 25.5, 252.0], [1738.0, 26.5, 252.0], [0.0, 26.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [500.0, 20.5, 233.0], [500.0, 21.5, 233.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [4840.0, 26.5, 268.0], [4840.0, 27.5, 268.0], [0.0, 27.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [4604.0, 31.5, 271.0], [4604.0, 32.5, 271.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2836.0, 24.5, 266.0], [2836.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data02": [[0.0, 18.5, 29.5], [0.0, 18.5, 29.5], [0.0, 19.5, 30.5], [0.0, 19.5, 30.5]], "data05": [[0.0, 21.5, 0.0], [1924.0, 21.5, 263.0], [1924.0, 22.5, 263.0], [0.0, 22.5, 0.0]], "data13": [[0.0, 30.5], [1421.0, 30.5], [1421.0, 31.5], [0.0, 31.5]], "data01": [[0.0, 17.5, 0.0], [3158.0, 17.5, 258.0], [3158.0, 18.5, 258.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 27.5, 0.0, 30.5], [619.0, 27.5, 245.0, 30.5], [619.0, 28.5, 245.0, 31.5], [0.0, 28.5, 0.0, 31.5]], "data03": [[0.0, 19.5, 0.0], [1752.0, 19.5, 254.0], [1752.0, 20.5, 254.0], [0.0, 20.5, 0.0]]}});
            })
         });
}
 
