

  

   


    
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
    
       mpld3.draw_figure("id6", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18, "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "type": "clickinfo", "ids": ["el4265140411108400936", "el4265140411108423944", "el4265140411108700232", "el4265140411108978024", "el4265140411109311880", "el4265140411169038856", "el4265140411169686416", "el4265140411169663856", "el4265140411169507928", "el4265140411107646208", "el4265140411108392296", "el4265140411107250528", "el4265140411107251424", "el4265140411107252320", "el4265140411107253216", "el4265140411107254112", "el4265140411107275552", "el4265140411107276448"]}, {"vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18, "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "type": "clickinfo", "ids": ["el4265140411107278520", "el4265140411108423160", "el4265140411107295640", "el4265140411107296536", "el4265140411107297432", "el4265140411107298328", "el4265140411107299224", "el4265140411107320664", "el4265140411107321560", "el4265140411107322456", "el4265140411107323352", "el4265140411106824600", "el4265140411106825496", "el4265140411106826392", "el4265140411106827288", "el4265140411106828184", "el4265140411106849624", "el4265140411106850520"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411107101888"], "collections": [], "xlim": [7987.5, 5.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411107497576"}], "xdomain": [7987.5, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 18, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108400936"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108423944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108700232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108978024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109311880"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169038856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169686416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169663856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169507928"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107646208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108392296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107250528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107251424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107252320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107253216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107254112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107275552"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107276448"}], "ydomain": [16.6, 36.4], "ylim": [16.6, 36.4], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411107446176"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411107446176"], "collections": [], "xlim": [219.0, 288.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411107124840"}], "xdomain": [219.0, 288.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [229, 241, 253, 265, 278], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 18, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107278520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108423160"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107295640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107296536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107297432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107298328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107299224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107320664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107321560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107322456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107323352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106824600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106825496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106826392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106827288"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106828184"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106849624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106850520"}], "ydomain": [16.6, 36.4], "ylim": [16.6, 36.4], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411107101888"}], "id": "el4265140411107667696"});
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
    
         mpld3.draw_figure("id6", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18, "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "type": "clickinfo", "ids": ["el4265140411108400936", "el4265140411108423944", "el4265140411108700232", "el4265140411108978024", "el4265140411109311880", "el4265140411169038856", "el4265140411169686416", "el4265140411169663856", "el4265140411169507928", "el4265140411107646208", "el4265140411108392296", "el4265140411107250528", "el4265140411107251424", "el4265140411107252320", "el4265140411107253216", "el4265140411107254112", "el4265140411107275552", "el4265140411107276448"]}, {"vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18, "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "type": "clickinfo", "ids": ["el4265140411107278520", "el4265140411108423160", "el4265140411107295640", "el4265140411107296536", "el4265140411107297432", "el4265140411107298328", "el4265140411107299224", "el4265140411107320664", "el4265140411107321560", "el4265140411107322456", "el4265140411107323352", "el4265140411106824600", "el4265140411106825496", "el4265140411106826392", "el4265140411106827288", "el4265140411106828184", "el4265140411106849624", "el4265140411106850520"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411107101888"], "collections": [], "xlim": [7987.5, 5.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411107497576"}], "xdomain": [7987.5, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 18, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108400936"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108423944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108700232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108978024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109311880"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169038856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169686416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169663856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169507928"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107646208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108392296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107250528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107251424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107252320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107253216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107254112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107275552"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107276448"}], "ydomain": [16.6, 36.4], "ylim": [16.6, 36.4], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411107446176"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411107446176"], "collections": [], "xlim": [219.0, 288.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411107124840"}], "xdomain": [219.0, 288.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [229, 241, 253, 265, 278], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 18, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107278520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108423160"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107295640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107296536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107297432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107298328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107299224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107320664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107321560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107322456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107323352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106824600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106825496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106826392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106827288"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106828184"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106849624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106850520"}], "ydomain": [16.6, 36.4], "ylim": [16.6, 36.4], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411107101888"}], "id": "el4265140411107667696"});
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
    
                 mpld3.draw_figure("id6", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18, "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "type": "clickinfo", "ids": ["el4265140411108400936", "el4265140411108423944", "el4265140411108700232", "el4265140411108978024", "el4265140411109311880", "el4265140411169038856", "el4265140411169686416", "el4265140411169663856", "el4265140411169507928", "el4265140411107646208", "el4265140411108392296", "el4265140411107250528", "el4265140411107251424", "el4265140411107252320", "el4265140411107253216", "el4265140411107254112", "el4265140411107275552", "el4265140411107276448"]}, {"vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "low": 18, "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "type": "clickinfo", "ids": ["el4265140411107278520", "el4265140411108423160", "el4265140411107295640", "el4265140411107296536", "el4265140411107297432", "el4265140411107298328", "el4265140411107299224", "el4265140411107320664", "el4265140411107321560", "el4265140411107322456", "el4265140411107323352", "el4265140411106824600", "el4265140411106825496", "el4265140411106826392", "el4265140411106827288", "el4265140411106828184", "el4265140411106849624", "el4265140411106850520"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411107101888"], "collections": [], "xlim": [7987.5, 5.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411107497576"}], "xdomain": [7987.5, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 18, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108400936"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108423944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108700232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108978024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109311880"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169038856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169686416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169663856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169507928"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107646208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108392296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107250528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107251424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107252320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107253216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107254112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107275552"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107276448"}], "ydomain": [16.6, 36.4], "ylim": [16.6, 36.4], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411107446176"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411107446176"], "collections": [], "xlim": [219.0, 288.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411107124840"}], "xdomain": [219.0, 288.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [229, 241, 253, 265, 278], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 18, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107278520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108423160"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107295640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107296536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107297432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107298328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107299224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107320664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107321560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107322456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107323352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106824600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106825496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106826392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106827288"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106828184"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106849624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106850520"}], "ydomain": [16.6, 36.4], "ylim": [16.6, 36.4], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411107101888"}], "id": "el4265140411107667696"});
            })
         });
}
    
