

 


 
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
    
       mpld3.draw_figure("id14", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [16.65, 35.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766994376296", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766994320856", "xdomain": [8583.75, 420.0], "collections": [], "ylim": [16.65, 35.35], "zoomable": true, "markers": [], "sharey": ["el7886139766993951600"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8583.75, 420.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994091200", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994090696", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994091984", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994121616", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994122512", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994123408", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994124304", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994145744", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994146640", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994147536", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994148432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994149328", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994170768", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994171664", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994172560", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994173456", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994198992", "alpha": 0.7, "data": "data12", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [215, 226, 237, 248, 262], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [16.65, 35.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993982744", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766993951600", "xdomain": [205.0, 272.0], "collections": [], "ylim": [16.65, 35.35], "zoomable": true, "markers": [], "sharey": ["el7886139766994320856"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [205.0, 272.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994201064", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994090864", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994201736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994202576", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993703880", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993704776", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993705672", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993706568", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993728008", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993728904", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993729800", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993730696", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993731536", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993753032", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993753928", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993754824", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993755720", "alpha": 0.7, "data": "data12", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766994554776", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "ids": ["el7886139766994091200", "el7886139766994090696", "el7886139766994091984", "el7886139766994121616", "el7886139766994122512", "el7886139766994123408", "el7886139766994124304", "el7886139766994145744", "el7886139766994146640", "el7886139766994147536", "el7886139766994148432", "el7886139766994149328", "el7886139766994170768", "el7886139766994171664", "el7886139766994172560", "el7886139766994173456", "el7886139766994198992"]}, {"type": "clickinfo", "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "ids": ["el7886139766994201064", "el7886139766994090864", "el7886139766994201736", "el7886139766994202576", "el7886139766993703880", "el7886139766993704776", "el7886139766993705672", "el7886139766993706568", "el7886139766993728008", "el7886139766993728904", "el7886139766993729800", "el7886139766993730696", "el7886139766993731536", "el7886139766993753032", "el7886139766993753928", "el7886139766993754824", "el7886139766993755720"]}], "height": 480.0, "data": {"data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]]}});
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
    
         mpld3.draw_figure("id14", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [16.65, 35.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766994376296", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766994320856", "xdomain": [8583.75, 420.0], "collections": [], "ylim": [16.65, 35.35], "zoomable": true, "markers": [], "sharey": ["el7886139766993951600"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8583.75, 420.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994091200", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994090696", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994091984", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994121616", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994122512", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994123408", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994124304", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994145744", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994146640", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994147536", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994148432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994149328", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994170768", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994171664", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994172560", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994173456", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994198992", "alpha": 0.7, "data": "data12", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [215, 226, 237, 248, 262], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [16.65, 35.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993982744", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766993951600", "xdomain": [205.0, 272.0], "collections": [], "ylim": [16.65, 35.35], "zoomable": true, "markers": [], "sharey": ["el7886139766994320856"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [205.0, 272.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994201064", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994090864", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994201736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994202576", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993703880", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993704776", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993705672", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993706568", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993728008", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993728904", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993729800", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993730696", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993731536", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993753032", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993753928", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993754824", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993755720", "alpha": 0.7, "data": "data12", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766994554776", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "ids": ["el7886139766994091200", "el7886139766994090696", "el7886139766994091984", "el7886139766994121616", "el7886139766994122512", "el7886139766994123408", "el7886139766994124304", "el7886139766994145744", "el7886139766994146640", "el7886139766994147536", "el7886139766994148432", "el7886139766994149328", "el7886139766994170768", "el7886139766994171664", "el7886139766994172560", "el7886139766994173456", "el7886139766994198992"]}, {"type": "clickinfo", "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "ids": ["el7886139766994201064", "el7886139766994090864", "el7886139766994201736", "el7886139766994202576", "el7886139766993703880", "el7886139766993704776", "el7886139766993705672", "el7886139766993706568", "el7886139766993728008", "el7886139766993728904", "el7886139766993729800", "el7886139766993730696", "el7886139766993731536", "el7886139766993753032", "el7886139766993753928", "el7886139766993754824", "el7886139766993755720"]}], "height": 480.0, "data": {"data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]]}});
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
    
                 mpld3.draw_figure("id14", {"axes": [{"axesbg": "#FFFFFF", "axes": [{"nticks": 6, "visible": true, "tickvalues": null, "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left"}], "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "ydomain": [16.65, 35.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766994376296", "alpha": 1, "v_baseline": "hanging", "text": "Minuty"}], "id": "el7886139766994320856", "xdomain": [8583.75, 420.0], "collections": [], "ylim": [16.65, 35.35], "zoomable": true, "markers": [], "sharey": ["el7886139766993951600"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [8583.75, 420.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994091200", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994090696", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994091984", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994121616", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994122512", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994123408", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994124304", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994145744", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994146640", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994147536", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994148432", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994149328", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994170768", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994171664", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994172560", "alpha": 0.7, "data": "data11", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994173456", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "id": "el7886139766994198992", "alpha": 0.7, "data": "data12", "dasharray": "none"}], "images": []}, {"axesbg": "#FFFFFF", "axes": [{"nticks": 5, "visible": true, "tickvalues": [215, 226, 237, 248, 262], "grid": {"gridOn": true, "color": "#B0B0B0", "dasharray": "none", "alpha": 1.0}, "scale": "linear", "fontsize": 10.0, "tickformat": null, "position": "bottom"}, {"nticks": 17, "visible": true, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "grid": {"gridOn": false}, "scale": "linear", "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right"}], "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "ydomain": [16.65, 35.35], "texts": [{"position": [0.5, -0.07921476671476674], "fontsize": 14.0, "color": "#000000", "rotation": -0.0, "zorder": 3, "coordinates": "axes", "h_anchor": "middle", "id": "el7886139766993982744", "alpha": 1, "v_baseline": "hanging", "text": "Instat index"}], "id": "el7886139766993951600", "xdomain": [205.0, 272.0], "collections": [], "ylim": [16.65, 35.35], "zoomable": true, "markers": [], "sharey": ["el7886139766994320856"], "axesbgalpha": null, "xscale": "linear", "lines": [], "xlim": [205.0, 272.0], "paths": [{"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994201064", "alpha": 0.7, "data": "data01", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994090864", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 2, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994201736", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766994202576", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993703880", "alpha": 0.7, "data": "data03", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993704776", "alpha": 0.7, "data": "data04", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993705672", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993706568", "alpha": 0.7, "data": "data06", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993728008", "alpha": 0.7, "data": "data07", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993728904", "alpha": 0.7, "data": "data08", "dasharray": "none"}, {"yindex": 4, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993729800", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993730696", "alpha": 0.7, "data": "data09", "dasharray": "none"}, {"yindex": 5, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993731536", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993753032", "alpha": 0.7, "data": "data10", "dasharray": "none"}, {"yindex": 3, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993753928", "alpha": 0.7, "data": "data05", "dasharray": "none"}, {"yindex": 6, "edgewidth": 1.0, "xindex": 0, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993754824", "alpha": 0.7, "data": "data02", "dasharray": "none"}, {"yindex": 1, "edgewidth": 1.0, "xindex": 2, "zorder": 1, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "id": "el7886139766993755720", "alpha": 0.7, "data": "data12", "dasharray": "none"}], "images": []}], "width": 640.0, "id": "el7886139766994554776", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"type": "clickinfo", "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "ids": ["el7886139766994091200", "el7886139766994090696", "el7886139766994091984", "el7886139766994121616", "el7886139766994122512", "el7886139766994123408", "el7886139766994124304", "el7886139766994145744", "el7886139766994146640", "el7886139766994147536", "el7886139766994148432", "el7886139766994149328", "el7886139766994170768", "el7886139766994171664", "el7886139766994172560", "el7886139766994173456", "el7886139766994198992"]}, {"type": "clickinfo", "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "ids": ["el7886139766994201064", "el7886139766994090864", "el7886139766994201736", "el7886139766994202576", "el7886139766993703880", "el7886139766993704776", "el7886139766993705672", "el7886139766993706568", "el7886139766993728008", "el7886139766993728904", "el7886139766993729800", "el7886139766993730696", "el7886139766993731536", "el7886139766993753032", "el7886139766993753928", "el7886139766993754824", "el7886139766993755720"]}], "height": 480.0, "data": {"data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]]}});
            })
         });
}
 
