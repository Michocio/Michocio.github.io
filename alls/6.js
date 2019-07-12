

 


 
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
    
       mpld3.draw_figure("id6", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "ids": ["el10757139727019576120", "el10757139727019591608", "el10757139727020090144", "el10757139727020186144", "el10757139727020487848", "el10757139727020906312", "el10757139727080870128", "el10757139727080840216", "el10757139727018836544", "el10757139727018813424", "el10757139727019556592", "el10757139727018422736", "el10757139727018423632", "el10757139727018424528", "el10757139727018425424", "el10757139727018426320", "el10757139727018447760", "el10757139727018448656"], "type": "clickinfo", "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18}, {"alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "ids": ["el10757139727018450728", "el10757139727019590152", "el10757139727018471944", "el10757139727018472840", "el10757139727018473736", "el10757139727018474632", "el10757139727018475472", "el10757139727018492872", "el10757139727018493768", "el10757139727018494664", "el10757139727018495560", "el10757139727017996808", "el10757139727017997704", "el10757139727017998600", "el10757139727017999496", "el10757139727018000336", "el10757139727018021832", "el10757139727018022728"], "type": "clickinfo", "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18}], "height": 480.0, "id": "el10757139727018838728", "data": {"data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727018665688", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [7987.5, 5.0], "ydomain": [16.6, 36.4], "sharex": [], "xlim": [7987.5, 5.0], "images": [], "sharey": ["el10757139727018265904"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 18, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018610360", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.6, 36.4], "paths": [{"xindex": 0, "id": "el10757139727019576120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727019591608", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727020090144", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727020186144", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727020487848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727020906312", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data05"}, {"xindex": 0, "id": "el10757139727080870128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727080840216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727018836544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727018813424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727019556592", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727018422736", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727018423632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 0, "id": "el10757139727018424528", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727018425424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data05"}, {"xindex": 0, "id": "el10757139727018426320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data05"}, {"xindex": 0, "id": "el10757139727018447760", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data05"}, {"xindex": 0, "id": "el10757139727018448656", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727018292952", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [219.0, 288.0], "ydomain": [16.6, 36.4], "sharex": [], "xlim": [219.0, 288.0], "images": [], "sharey": ["el10757139727018610360"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [229, 241, 253, 265, 278], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 18, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018265904", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.6, 36.4], "paths": [{"xindex": 2, "id": "el10757139727018450728", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727019590152", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727018471944", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727018472840", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727018473736", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727018474632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data05"}, {"xindex": 0, "id": "el10757139727018475472", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data05"}, {"xindex": 2, "id": "el10757139727018492872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727018493768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727018494664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727018495560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727017996808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727017997704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 2, "id": "el10757139727017998600", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727017999496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data05"}, {"xindex": 0, "id": "el10757139727018000336", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data05"}, {"xindex": 0, "id": "el10757139727018021832", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data05"}, {"xindex": 2, "id": "el10757139727018022728", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
         mpld3.draw_figure("id6", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "ids": ["el10757139727019576120", "el10757139727019591608", "el10757139727020090144", "el10757139727020186144", "el10757139727020487848", "el10757139727020906312", "el10757139727080870128", "el10757139727080840216", "el10757139727018836544", "el10757139727018813424", "el10757139727019556592", "el10757139727018422736", "el10757139727018423632", "el10757139727018424528", "el10757139727018425424", "el10757139727018426320", "el10757139727018447760", "el10757139727018448656"], "type": "clickinfo", "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18}, {"alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "ids": ["el10757139727018450728", "el10757139727019590152", "el10757139727018471944", "el10757139727018472840", "el10757139727018473736", "el10757139727018474632", "el10757139727018475472", "el10757139727018492872", "el10757139727018493768", "el10757139727018494664", "el10757139727018495560", "el10757139727017996808", "el10757139727017997704", "el10757139727017998600", "el10757139727017999496", "el10757139727018000336", "el10757139727018021832", "el10757139727018022728"], "type": "clickinfo", "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18}], "height": 480.0, "id": "el10757139727018838728", "data": {"data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727018665688", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [7987.5, 5.0], "ydomain": [16.6, 36.4], "sharex": [], "xlim": [7987.5, 5.0], "images": [], "sharey": ["el10757139727018265904"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 18, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018610360", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.6, 36.4], "paths": [{"xindex": 0, "id": "el10757139727019576120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727019591608", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727020090144", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727020186144", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727020487848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727020906312", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data05"}, {"xindex": 0, "id": "el10757139727080870128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727080840216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727018836544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727018813424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727019556592", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727018422736", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727018423632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 0, "id": "el10757139727018424528", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727018425424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data05"}, {"xindex": 0, "id": "el10757139727018426320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data05"}, {"xindex": 0, "id": "el10757139727018447760", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data05"}, {"xindex": 0, "id": "el10757139727018448656", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727018292952", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [219.0, 288.0], "ydomain": [16.6, 36.4], "sharex": [], "xlim": [219.0, 288.0], "images": [], "sharey": ["el10757139727018610360"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [229, 241, 253, 265, 278], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 18, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018265904", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.6, 36.4], "paths": [{"xindex": 2, "id": "el10757139727018450728", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727019590152", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727018471944", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727018472840", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727018473736", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727018474632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data05"}, {"xindex": 0, "id": "el10757139727018475472", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data05"}, {"xindex": 2, "id": "el10757139727018492872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727018493768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727018494664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727018495560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727017996808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727017997704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 2, "id": "el10757139727017998600", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727017999496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data05"}, {"xindex": 0, "id": "el10757139727018000336", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data05"}, {"xindex": 0, "id": "el10757139727018021832", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data05"}, {"xindex": 2, "id": "el10757139727018022728", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
                 mpld3.draw_figure("id6", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "ids": ["el10757139727019576120", "el10757139727019591608", "el10757139727020090144", "el10757139727020186144", "el10757139727020487848", "el10757139727020906312", "el10757139727080870128", "el10757139727080840216", "el10757139727018836544", "el10757139727018813424", "el10757139727019556592", "el10757139727018422736", "el10757139727018423632", "el10757139727018424528", "el10757139727018425424", "el10757139727018426320", "el10757139727018447760", "el10757139727018448656"], "type": "clickinfo", "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18}, {"alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "ids": ["el10757139727018450728", "el10757139727019590152", "el10757139727018471944", "el10757139727018472840", "el10757139727018473736", "el10757139727018474632", "el10757139727018475472", "el10757139727018492872", "el10757139727018493768", "el10757139727018494664", "el10757139727018495560", "el10757139727017996808", "el10757139727017997704", "el10757139727017998600", "el10757139727017999496", "el10757139727018000336", "el10757139727018021832", "el10757139727018022728"], "type": "clickinfo", "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18}], "height": 480.0, "id": "el10757139727018838728", "data": {"data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727018665688", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [7987.5, 5.0], "ydomain": [16.6, 36.4], "sharex": [], "xlim": [7987.5, 5.0], "images": [], "sharey": ["el10757139727018265904"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 18, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018610360", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.6, 36.4], "paths": [{"xindex": 0, "id": "el10757139727019576120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727019591608", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727020090144", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727020186144", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727020487848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727020906312", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data05"}, {"xindex": 0, "id": "el10757139727080870128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727080840216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727018836544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727018813424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727019556592", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727018422736", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727018423632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 0, "id": "el10757139727018424528", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727018425424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data05"}, {"xindex": 0, "id": "el10757139727018426320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data05"}, {"xindex": 0, "id": "el10757139727018447760", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data05"}, {"xindex": 0, "id": "el10757139727018448656", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727018292952", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [219.0, 288.0], "ydomain": [16.6, 36.4], "sharex": [], "xlim": [219.0, 288.0], "images": [], "sharey": ["el10757139727018610360"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [229, 241, 253, 265, 278], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 18, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018265904", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.6, 36.4], "paths": [{"xindex": 2, "id": "el10757139727018450728", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727019590152", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727018471944", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727018472840", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727018473736", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727018474632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data05"}, {"xindex": 0, "id": "el10757139727018475472", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data05"}, {"xindex": 2, "id": "el10757139727018492872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727018493768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727018494664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727018495560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727017996808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727017997704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 2, "id": "el10757139727017998600", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727017999496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data05"}, {"xindex": 0, "id": "el10757139727018000336", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data05"}, {"xindex": 0, "id": "el10757139727018021832", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data05"}, {"xindex": 2, "id": "el10757139727018022728", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
