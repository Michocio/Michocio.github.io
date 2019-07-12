

  

   


    
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
       mpld3.draw_figure("id14", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "type": "clickinfo", "ids": ["el4265140411102269736", "el4265140411102244592", "el4265140411102270520", "el4265140411102271416", "el4265140411102272312", "el4265140411102273208", "el4265140411102294648", "el4265140411102295544", "el4265140411102296440", "el4265140411102297336", "el4265140411102322872", "el4265140411102323768", "el4265140411102324664", "el4265140411102325560", "el4265140411102326456", "el4265140411102343800", "el4265140411102344696"]}, {"vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "type": "clickinfo", "ids": ["el4265140411102346768", "el4265140411102244760", "el4265140411101843696", "el4265140411101844592", "el4265140411101845488", "el4265140411101846384", "el4265140411101847280", "el4265140411101872816", "el4265140411101873712", "el4265140411101874608", "el4265140411101875504", "el4265140411101892848", "el4265140411101893744", "el4265140411101894640", "el4265140411101895536", "el4265140411101896432", "el4265140411101926064"]}], "height": 480.0, "data": {"data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411102613400"], "collections": [], "xlim": [8583.75, 420.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411102518800"}], "xdomain": [8583.75, 420.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102269736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102244592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102270520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102271416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102272312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102273208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102294648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102295544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102296440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102297336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102322872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102323768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102324664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102325560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102326456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102343800"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102344696"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411102516392"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411102516392"], "collections": [], "xlim": [205.0, 272.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411102124352"}], "xdomain": [205.0, 272.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [215, 226, 237, 248, 262], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102346768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102244760"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101843696"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101844592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101845488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101846384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101847280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101872816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101873712"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101874608"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101875504"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101892848"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101893744"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101894640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101895536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101896432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101926064"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411102613400"}], "id": "el4265140411102696336"});
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
         mpld3.draw_figure("id14", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "type": "clickinfo", "ids": ["el4265140411102269736", "el4265140411102244592", "el4265140411102270520", "el4265140411102271416", "el4265140411102272312", "el4265140411102273208", "el4265140411102294648", "el4265140411102295544", "el4265140411102296440", "el4265140411102297336", "el4265140411102322872", "el4265140411102323768", "el4265140411102324664", "el4265140411102325560", "el4265140411102326456", "el4265140411102343800", "el4265140411102344696"]}, {"vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "type": "clickinfo", "ids": ["el4265140411102346768", "el4265140411102244760", "el4265140411101843696", "el4265140411101844592", "el4265140411101845488", "el4265140411101846384", "el4265140411101847280", "el4265140411101872816", "el4265140411101873712", "el4265140411101874608", "el4265140411101875504", "el4265140411101892848", "el4265140411101893744", "el4265140411101894640", "el4265140411101895536", "el4265140411101896432", "el4265140411101926064"]}], "height": 480.0, "data": {"data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411102613400"], "collections": [], "xlim": [8583.75, 420.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411102518800"}], "xdomain": [8583.75, 420.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102269736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102244592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102270520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102271416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102272312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102273208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102294648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102295544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102296440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102297336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102322872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102323768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102324664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102325560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102326456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102343800"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102344696"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411102516392"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411102516392"], "collections": [], "xlim": [205.0, 272.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411102124352"}], "xdomain": [205.0, 272.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [215, 226, 237, 248, 262], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102346768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102244760"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101843696"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101844592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101845488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101846384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101847280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101872816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101873712"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101874608"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101875504"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101892848"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101893744"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101894640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101895536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101896432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101926064"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411102613400"}], "id": "el4265140411102696336"});
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
                 mpld3.draw_figure("id14", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "type": "clickinfo", "ids": ["el4265140411102269736", "el4265140411102244592", "el4265140411102270520", "el4265140411102271416", "el4265140411102272312", "el4265140411102273208", "el4265140411102294648", "el4265140411102295544", "el4265140411102296440", "el4265140411102297336", "el4265140411102322872", "el4265140411102323768", "el4265140411102324664", "el4265140411102325560", "el4265140411102326456", "el4265140411102343800", "el4265140411102344696"]}, {"vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "low": 18, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]], "type": "clickinfo", "ids": ["el4265140411102346768", "el4265140411102244760", "el4265140411101843696", "el4265140411101844592", "el4265140411101845488", "el4265140411101846384", "el4265140411101847280", "el4265140411101872816", "el4265140411101873712", "el4265140411101874608", "el4265140411101875504", "el4265140411101892848", "el4265140411101893744", "el4265140411101894640", "el4265140411101895536", "el4265140411101896432", "el4265140411101926064"]}], "height": 480.0, "data": {"data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411102613400"], "collections": [], "xlim": [8583.75, 420.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411102518800"}], "xdomain": [8583.75, 420.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102269736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102244592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102270520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102271416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102272312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102273208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102294648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102295544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102296440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102297336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102322872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102323768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102324664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102325560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102326456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102343800"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411102344696"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411102516392"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411102516392"], "collections": [], "xlim": [205.0, 272.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411102124352"}], "xdomain": [205.0, 272.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [215, 226, 237, 248, 262], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102346768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411102244760"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101843696"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101844592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101845488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101846384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101847280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101872816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101873712"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101874608"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101875504"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101892848"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101893744"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101894640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101895536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101896432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411101926064"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411102613400"}], "id": "el4265140411102696336"});
            })
         });
}
    
