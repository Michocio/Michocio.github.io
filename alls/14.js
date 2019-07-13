

<style>

</style>

<div id="id14"></div>
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

   /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    //var tooltip = d3.select("#lista");
    
    var table = d3.select("#lista");//tooltip.append('table').attr("class", "sortable");
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
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
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
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
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
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
    
       mpld3.draw_figure("id14", {"id": "el6928140242918784416", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "type": "clickinfo", "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "low": 18, "ids": ["el6928140242918060552", "el6928140242918031312", "el6928140242918061392", "el6928140242918062288", "el6928140242918063184", "el6928140242918064080", "el6928140242918085520", "el6928140242918086416", "el6928140242918087312", "el6928140242918088208", "el6928140242918113744", "el6928140242918114640", "el6928140242918115536", "el6928140242918116432", "el6928140242918117328", "el6928140242917618576", "el6928140242917619472"]}, {"wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "type": "clickinfo", "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "low": 18, "ids": ["el6928140242917621488", "el6928140242918060216", "el6928140242917642760", "el6928140242917643656", "el6928140242917644552", "el6928140242917645448", "el6928140242917646232", "el6928140242917667784", "el6928140242917668680", "el6928140242917669576", "el6928140242917670472", "el6928140242917691912", "el6928140242917692808", "el6928140242917693704", "el6928140242917694600", "el6928140242917695384", "el6928140242917712840"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242918296040", "zoomable": true, "sharey": ["el6928140242917894968"], "yscale": "linear", "texts": [{"id": "el6928140242918151952", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8583.75, 420.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242918060552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918031312", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918061392", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918062288", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918063184", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918064080", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918085520", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918086416", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918087312", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918088208", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918113744", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918114640", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918115536", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918116432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918117328", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917618576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917619472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8583.75, 420.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [215, 226, 237, 248, 262], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242917894968", "zoomable": true, "sharey": ["el6928140242918296040"], "yscale": "linear", "texts": [{"id": "el6928140242917917920", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [205.0, 272.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242917621488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918060216", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917642760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917643656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917644552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917645448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917646232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917667784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917668680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917669576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917670472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917691912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917692808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917693704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917694600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917695384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917712840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [205.0, 272.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]]}, "width": 640.0});
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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
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
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
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
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
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
    
         mpld3.draw_figure("id14", {"id": "el6928140242918784416", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "type": "clickinfo", "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "low": 18, "ids": ["el6928140242918060552", "el6928140242918031312", "el6928140242918061392", "el6928140242918062288", "el6928140242918063184", "el6928140242918064080", "el6928140242918085520", "el6928140242918086416", "el6928140242918087312", "el6928140242918088208", "el6928140242918113744", "el6928140242918114640", "el6928140242918115536", "el6928140242918116432", "el6928140242918117328", "el6928140242917618576", "el6928140242917619472"]}, {"wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "type": "clickinfo", "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "low": 18, "ids": ["el6928140242917621488", "el6928140242918060216", "el6928140242917642760", "el6928140242917643656", "el6928140242917644552", "el6928140242917645448", "el6928140242917646232", "el6928140242917667784", "el6928140242917668680", "el6928140242917669576", "el6928140242917670472", "el6928140242917691912", "el6928140242917692808", "el6928140242917693704", "el6928140242917694600", "el6928140242917695384", "el6928140242917712840"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242918296040", "zoomable": true, "sharey": ["el6928140242917894968"], "yscale": "linear", "texts": [{"id": "el6928140242918151952", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8583.75, 420.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242918060552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918031312", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918061392", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918062288", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918063184", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918064080", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918085520", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918086416", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918087312", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918088208", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918113744", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918114640", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918115536", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918116432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918117328", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917618576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917619472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8583.75, 420.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [215, 226, 237, 248, 262], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242917894968", "zoomable": true, "sharey": ["el6928140242918296040"], "yscale": "linear", "texts": [{"id": "el6928140242917917920", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [205.0, 272.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242917621488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918060216", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917642760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917643656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917644552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917645448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917646232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917667784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917668680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917669576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917670472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917691912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917692808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917693704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917694600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917695384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917712840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [205.0, 272.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]]}, "width": 640.0});
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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
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
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");

    
                
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
                                table2.html(tekst);

        this.props.ids.forEach(function(id, i) {
            console.log(id, i);
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  console.log("click", id,i,d);
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
    
                 mpld3.draw_figure("id14", {"id": "el6928140242918784416", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "type": "clickinfo", "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "low": 18, "ids": ["el6928140242918060552", "el6928140242918031312", "el6928140242918061392", "el6928140242918062288", "el6928140242918063184", "el6928140242918064080", "el6928140242918085520", "el6928140242918086416", "el6928140242918087312", "el6928140242918088208", "el6928140242918113744", "el6928140242918114640", "el6928140242918115536", "el6928140242918116432", "el6928140242918117328", "el6928140242917618576", "el6928140242917619472"]}, {"wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "type": "clickinfo", "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "low": 18, "ids": ["el6928140242917621488", "el6928140242918060216", "el6928140242917642760", "el6928140242917643656", "el6928140242917644552", "el6928140242917645448", "el6928140242917646232", "el6928140242917667784", "el6928140242917668680", "el6928140242917669576", "el6928140242917670472", "el6928140242917691912", "el6928140242917692808", "el6928140242917693704", "el6928140242917694600", "el6928140242917695384", "el6928140242917712840"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242918296040", "zoomable": true, "sharey": ["el6928140242917894968"], "yscale": "linear", "texts": [{"id": "el6928140242918151952", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8583.75, 420.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242918060552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918031312", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918061392", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918062288", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918063184", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918064080", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918085520", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918086416", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918087312", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918088208", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918113744", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918114640", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918115536", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918116432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918117328", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917618576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917619472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8583.75, 420.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [215, 226, 237, 248, 262], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242917894968", "zoomable": true, "sharey": ["el6928140242918296040"], "yscale": "linear", "texts": [{"id": "el6928140242917917920", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [205.0, 272.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242917621488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242918060216", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917642760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917643656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917644552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917645448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917646232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917667784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917668680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917669576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917670472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917691912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917692808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917693704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917694600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917695384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917712840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [205.0, 272.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
