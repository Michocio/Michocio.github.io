

 

 

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
                                table2.html(tekst);

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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");
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
                                table2.html(tekst);

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
    
       mpld3.draw_figure("id14", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "ids": ["el10757139727013429880", "el10757139727013429376", "el10757139727013430664", "el10757139727013431560", "el10757139727013432456", "el10757139727013433296", "el10757139727013458888", "el10757139727013459784", "el10757139727013460680", "el10757139727013461576", "el10757139727013483016", "el10757139727013483912", "el10757139727013484808", "el10757139727013485704", "el10757139727013486544", "el10757139727013512136", "el10757139727013513032"], "type": "clickinfo", "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18}, {"alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "ids": ["el10757139727013515104", "el10757139727013429544", "el10757139727013536320", "el10757139727013537216", "el10757139727013538112", "el10757139727013539008", "el10757139727013036160", "el10757139727013037056", "el10757139727013037952", "el10757139727013038848", "el10757139727013039744", "el10757139727013061184", "el10757139727013062080", "el10757139727013062976", "el10757139727013063872", "el10757139727013089408", "el10757139727013090304"], "type": "clickinfo", "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18}], "height": 480.0, "id": "el10757139727013898840", "data": {"data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727013682928", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8583.75, 420.0], "ydomain": [16.65, 35.35], "sharex": [], "xlim": [8583.75, 420.0], "images": [], "sharey": ["el10757139727013290168"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727013680520", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.65, 35.35], "paths": [{"xindex": 0, "id": "el10757139727013429880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727013429376", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727013430664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727013431560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 0, "id": "el10757139727013432456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727013433296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727013458888", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727013459784", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727013460680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727013461576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727013483016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 0, "id": "el10757139727013483912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727013484808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 0, "id": "el10757139727013485704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727013486544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727013512136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 0, "id": "el10757139727013513032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727013292576", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [205.0, 272.0], "ydomain": [16.65, 35.35], "sharex": [], "xlim": [205.0, 272.0], "images": [], "sharey": ["el10757139727013680520"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [215, 226, 237, 248, 262], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727013290168", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.65, 35.35], "paths": [{"xindex": 2, "id": "el10757139727013515104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727013429544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727013536320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727013537216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 2, "id": "el10757139727013538112", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727013539008", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727013036160", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727013037056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727013037952", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727013038848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727013039744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 2, "id": "el10757139727013061184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727013062080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 2, "id": "el10757139727013062976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727013063872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 0, "id": "el10757139727013089408", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 2, "id": "el10757139727013090304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
                                table2.html(tekst);

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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");
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
                                table2.html(tekst);

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
    
         mpld3.draw_figure("id14", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "ids": ["el10757139727013429880", "el10757139727013429376", "el10757139727013430664", "el10757139727013431560", "el10757139727013432456", "el10757139727013433296", "el10757139727013458888", "el10757139727013459784", "el10757139727013460680", "el10757139727013461576", "el10757139727013483016", "el10757139727013483912", "el10757139727013484808", "el10757139727013485704", "el10757139727013486544", "el10757139727013512136", "el10757139727013513032"], "type": "clickinfo", "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18}, {"alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "ids": ["el10757139727013515104", "el10757139727013429544", "el10757139727013536320", "el10757139727013537216", "el10757139727013538112", "el10757139727013539008", "el10757139727013036160", "el10757139727013037056", "el10757139727013037952", "el10757139727013038848", "el10757139727013039744", "el10757139727013061184", "el10757139727013062080", "el10757139727013062976", "el10757139727013063872", "el10757139727013089408", "el10757139727013090304"], "type": "clickinfo", "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18}], "height": 480.0, "id": "el10757139727013898840", "data": {"data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727013682928", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8583.75, 420.0], "ydomain": [16.65, 35.35], "sharex": [], "xlim": [8583.75, 420.0], "images": [], "sharey": ["el10757139727013290168"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727013680520", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.65, 35.35], "paths": [{"xindex": 0, "id": "el10757139727013429880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727013429376", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727013430664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727013431560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 0, "id": "el10757139727013432456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727013433296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727013458888", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727013459784", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727013460680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727013461576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727013483016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 0, "id": "el10757139727013483912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727013484808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 0, "id": "el10757139727013485704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727013486544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727013512136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 0, "id": "el10757139727013513032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727013292576", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [205.0, 272.0], "ydomain": [16.65, 35.35], "sharex": [], "xlim": [205.0, 272.0], "images": [], "sharey": ["el10757139727013680520"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [215, 226, 237, 248, 262], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727013290168", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.65, 35.35], "paths": [{"xindex": 2, "id": "el10757139727013515104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727013429544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727013536320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727013537216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 2, "id": "el10757139727013538112", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727013539008", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727013036160", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727013037056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727013037952", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727013038848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727013039744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 2, "id": "el10757139727013061184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727013062080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 2, "id": "el10757139727013062976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727013063872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 0, "id": "el10757139727013089408", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 2, "id": "el10757139727013090304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
                                table2.html(tekst);

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
    var table2 = d3.select("#lista2");//tooltip.append('table').attr("class", "sortable");
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
                                table2.html(tekst);

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
    
                 mpld3.draw_figure("id14", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "ids": ["el10757139727013429880", "el10757139727013429376", "el10757139727013430664", "el10757139727013431560", "el10757139727013432456", "el10757139727013433296", "el10757139727013458888", "el10757139727013459784", "el10757139727013460680", "el10757139727013461576", "el10757139727013483016", "el10757139727013483912", "el10757139727013484808", "el10757139727013485704", "el10757139727013486544", "el10757139727013512136", "el10757139727013513032"], "type": "clickinfo", "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18}, {"alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "ids": ["el10757139727013515104", "el10757139727013429544", "el10757139727013536320", "el10757139727013537216", "el10757139727013538112", "el10757139727013539008", "el10757139727013036160", "el10757139727013037056", "el10757139727013037952", "el10757139727013038848", "el10757139727013039744", "el10757139727013061184", "el10757139727013062080", "el10757139727013062976", "el10757139727013063872", "el10757139727013089408", "el10757139727013090304"], "type": "clickinfo", "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18}], "height": 480.0, "id": "el10757139727013898840", "data": {"data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727013682928", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8583.75, 420.0], "ydomain": [16.65, 35.35], "sharex": [], "xlim": [8583.75, 420.0], "images": [], "sharey": ["el10757139727013290168"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727013680520", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.65, 35.35], "paths": [{"xindex": 0, "id": "el10757139727013429880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727013429376", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727013430664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727013431560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 0, "id": "el10757139727013432456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727013433296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727013458888", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727013459784", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727013460680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727013461576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727013483016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 0, "id": "el10757139727013483912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727013484808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 0, "id": "el10757139727013485704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727013486544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727013512136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 0, "id": "el10757139727013513032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727013292576", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [205.0, 272.0], "ydomain": [16.65, 35.35], "sharex": [], "xlim": [205.0, 272.0], "images": [], "sharey": ["el10757139727013680520"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [215, 226, 237, 248, 262], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727013290168", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.65, 35.35], "paths": [{"xindex": 2, "id": "el10757139727013515104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727013429544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727013536320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727013537216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 2, "id": "el10757139727013538112", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727013539008", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727013036160", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727013037056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727013037952", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727013038848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727013039744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 2, "id": "el10757139727013061184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727013062080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 2, "id": "el10757139727013062976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727013063872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 0, "id": "el10757139727013089408", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 2, "id": "el10757139727013090304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
