

<style>

</style>

<div id="id6"></div>
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
    
       mpld3.draw_figure("id6", {"id": "el6928140242923432648", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "type": "clickinfo", "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "low": 18, "ids": ["el6928140242924174920", "el6928140242924181544", "el6928140242924171672", "el6928140242924804304", "el6928140242925078120", "el6928140242925505336", "el6928140242985460568", "el6928140242985437784", "el6928140242985279616", "el6928140242923415536", "el6928140242923671504", "el6928140242923024904", "el6928140242923025800", "el6928140242923026696", "el6928140242923027592", "el6928140242923028376", "el6928140242923049928", "el6928140242923050824"]}, {"wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "type": "clickinfo", "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "low": 18, "ids": ["el6928140242923052840", "el6928140242924180760", "el6928140242923070016", "el6928140242923070912", "el6928140242923071808", "el6928140242923072704", "el6928140242923073488", "el6928140242923095040", "el6928140242923095936", "el6928140242923096832", "el6928140242923097728", "el6928140242922598976", "el6928140242922599872", "el6928140242922600768", "el6928140242922601664", "el6928140242922602448", "el6928140242922619904", "el6928140242922620800"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 18}], "images": [], "markers": [], "id": "el6928140242923212528", "zoomable": true, "sharey": ["el6928140242922868016"], "yscale": "linear", "texts": [{"id": "el6928140242923267744", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [7987.5, 5.0], "xscale": "linear", "ydomain": [16.6, 36.4], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.6, 36.4], "paths": [{"id": "el6928140242924174920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924181544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924171672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924804304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242925078120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242925505336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985460568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985437784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985279616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923415536", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923671504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923024904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923025800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923026696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923027592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923028376", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923049928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923050824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [7987.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [229, 241, 253, 265, 278], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 18}], "images": [], "markers": [], "id": "el6928140242922868016", "zoomable": true, "sharey": ["el6928140242923212528"], "yscale": "linear", "texts": [{"id": "el6928140242922895064", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [219.0, 288.0], "xscale": "linear", "ydomain": [16.6, 36.4], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.6, 36.4], "paths": [{"id": "el6928140242923052840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924180760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923070016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923070912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923071808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923072704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923073488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923095040", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923095936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923096832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923097728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922598976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922599872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922600768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922601664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922602448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922619904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922620800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [219.0, 288.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id6", {"id": "el6928140242923432648", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "type": "clickinfo", "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "low": 18, "ids": ["el6928140242924174920", "el6928140242924181544", "el6928140242924171672", "el6928140242924804304", "el6928140242925078120", "el6928140242925505336", "el6928140242985460568", "el6928140242985437784", "el6928140242985279616", "el6928140242923415536", "el6928140242923671504", "el6928140242923024904", "el6928140242923025800", "el6928140242923026696", "el6928140242923027592", "el6928140242923028376", "el6928140242923049928", "el6928140242923050824"]}, {"wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "type": "clickinfo", "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "low": 18, "ids": ["el6928140242923052840", "el6928140242924180760", "el6928140242923070016", "el6928140242923070912", "el6928140242923071808", "el6928140242923072704", "el6928140242923073488", "el6928140242923095040", "el6928140242923095936", "el6928140242923096832", "el6928140242923097728", "el6928140242922598976", "el6928140242922599872", "el6928140242922600768", "el6928140242922601664", "el6928140242922602448", "el6928140242922619904", "el6928140242922620800"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 18}], "images": [], "markers": [], "id": "el6928140242923212528", "zoomable": true, "sharey": ["el6928140242922868016"], "yscale": "linear", "texts": [{"id": "el6928140242923267744", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [7987.5, 5.0], "xscale": "linear", "ydomain": [16.6, 36.4], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.6, 36.4], "paths": [{"id": "el6928140242924174920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924181544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924171672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924804304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242925078120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242925505336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985460568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985437784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985279616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923415536", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923671504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923024904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923025800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923026696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923027592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923028376", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923049928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923050824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [7987.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [229, 241, 253, 265, 278], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 18}], "images": [], "markers": [], "id": "el6928140242922868016", "zoomable": true, "sharey": ["el6928140242923212528"], "yscale": "linear", "texts": [{"id": "el6928140242922895064", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [219.0, 288.0], "xscale": "linear", "ydomain": [16.6, 36.4], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.6, 36.4], "paths": [{"id": "el6928140242923052840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924180760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923070016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923070912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923071808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923072704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923073488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923095040", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923095936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923096832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923097728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922598976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922599872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922600768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922601664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922602448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922619904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922620800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [219.0, 288.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id6", {"id": "el6928140242923432648", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "type": "clickinfo", "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "low": 18, "ids": ["el6928140242924174920", "el6928140242924181544", "el6928140242924171672", "el6928140242924804304", "el6928140242925078120", "el6928140242925505336", "el6928140242985460568", "el6928140242985437784", "el6928140242985279616", "el6928140242923415536", "el6928140242923671504", "el6928140242923024904", "el6928140242923025800", "el6928140242923026696", "el6928140242923027592", "el6928140242923028376", "el6928140242923049928", "el6928140242923050824"]}, {"wiek": {"35": [8365], "18": [958629], "19": [318173], "20": [770899, 397834, 291438], "21": [202545, 479019, 406342], "24": [237984], "25": [162564], "26": [64720, 64709, 87388], "27": [90432, 24111, 2099, 65508], "28": [26046], "29": [51196, 6771], "31": [39562, 23387, 17025, 23408]}, "alls": [["Lubomir Guldan", [3198, 277]], ["Filip Starzy\u0144ski", [3106, 271]], ["Bartlomiej Paw\u0142owski", [3046, 270]], ["Patryk Tuszy\u0144ski", [2775, 253]], ["Filip Jagie\u0142\u0142o", [2719, 252]], ["Damjan Bohar", [2656, 269]], ["Sasa Balic", [2577, 259]], ["Bartosz Kopacz", [2279, 274]], ["Maciej D\u0105browski", [1897, 254]], ["Bartosz Slisz", [1887, 278]], ["Damian Oko", [1543, 263]], ["Jakub Tosik", [1462, 248]], ["Adam Matuszczyk", [1287, 255]], ["Daniel Dziwniel", [1066, 229]], ["Alan Czerwi\u0144ski", [1004, 247]], ["Jakub Mares", [653, 217]], ["Dawid Pakulski", [584, 225]], ["Lukasz Janoszka", [459, 234]], ["Lukasz Poreba", [406, 236]], ["Vladislav Sirotov", [241, 232]], ["Mateusz Matras", [182, 206]], ["Patryk Szysz", [119, 257]], ["Pawe\u0142 \u017byra", [61, 219]], ["\u0141ukasz Moneta", [5, 0]], ["Patryk Mucha", [3, 0]]], "vals": {"35": [3198, 277], "18": [406, 236], "19": [1887, 278], "20": [764, 229], "21": [4265, 256], "24": [5, 0], "25": [1004, 247], "26": [6391, 265], "27": [6185, 267], "28": [2577, 259], "29": [4062, 254], "31": [4471, 245]}, "type": "clickinfo", "players": {"90432": ["Filip Starzy\u0144ski", 3106, 271], "17025": ["Jakub Mares", 653, 217], "162564": ["Alan Czerwi\u0144ski", 1004, 247], "64709": ["Bartosz Kopacz", 2279, 274], "406342": ["Patryk Mucha", 3, 0], "397834": ["Patryk Szysz", 119, 257], "64720": ["Bartlomiej Paw\u0142owski", 3046, 270], "770899": ["Dawid Pakulski", 584, 225], "23387": ["Jakub Tosik", 1462, 248], "87388": ["Daniel Dziwniel", 1066, 229], "318173": ["Bartosz Slisz", 1887, 278], "237984": ["\u0141ukasz Moneta", 5, 0], "65508": ["Mateusz Matras", 182, 206], "958629": ["Lukasz Poreba", 406, 236], "6771": ["Adam Matuszczyk", 1287, 255], "479019": ["Damian Oko", 1543, 263], "8365": ["Lubomir Guldan", 3198, 277], "291438": ["Pawe\u0142 \u017byra", 61, 219], "24111": ["Damjan Bohar", 2656, 269], "23408": ["Lukasz Janoszka", 459, 234], "202545": ["Filip Jagie\u0142\u0142o", 2719, 252], "2099": ["Vladislav Sirotov", 241, 232], "51196": ["Patryk Tuszy\u0144ski", 2775, 253], "39562": ["Maciej D\u0105browski", 1897, 254], "26046": ["Sasa Balic", 2577, 259]}, "low": 18, "ids": ["el6928140242923052840", "el6928140242924180760", "el6928140242923070016", "el6928140242923070912", "el6928140242923071808", "el6928140242923072704", "el6928140242923073488", "el6928140242923095040", "el6928140242923095936", "el6928140242923096832", "el6928140242923097728", "el6928140242922598976", "el6928140242922599872", "el6928140242922600768", "el6928140242922601664", "el6928140242922602448", "el6928140242922619904", "el6928140242922620800"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 18}], "images": [], "markers": [], "id": "el6928140242923212528", "zoomable": true, "sharey": ["el6928140242922868016"], "yscale": "linear", "texts": [{"id": "el6928140242923267744", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [7987.5, 5.0], "xscale": "linear", "ydomain": [16.6, 36.4], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.6, 36.4], "paths": [{"id": "el6928140242924174920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924181544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924171672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924804304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242925078120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242925505336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985460568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985437784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985279616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923415536", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923671504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923024904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923025800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923026696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923027592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923028376", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923049928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923050824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [7987.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [229, 241, 253, 265, 278], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 18}], "images": [], "markers": [], "id": "el6928140242922868016", "zoomable": true, "sharey": ["el6928140242923212528"], "yscale": "linear", "texts": [{"id": "el6928140242922895064", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [219.0, 288.0], "xscale": "linear", "ydomain": [16.6, 36.4], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.6, 36.4], "paths": [{"id": "el6928140242923052840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924180760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923070016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923070912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923071808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923072704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923073488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923095040", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923095936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923096832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923097728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922598976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922599872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922600768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922601664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922602448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922619904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922620800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [219.0, 288.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [4062.0, 28.5, 254.0], [4062.0, 29.5, 254.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4265.0, 20.5, 256.0], [4265.0, 21.5, 256.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [6391.0, 25.5, 265.0], [6391.0, 26.5, 265.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [764.0, 19.5, 229.0], [764.0, 20.5, 229.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [2577.0, 27.5, 259.0], [2577.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 34.5, 0.0], [3198.0, 34.5, 277.0], [3198.0, 35.5, 277.0], [0.0, 35.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1887.0, 18.5, 278.0], [1887.0, 19.5, 278.0], [0.0, 19.5, 0.0]], "data05": [[0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 21.5, 22.5, 29.5, 31.5, 32.5, 33.5, 23.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5], [0.0, 22.5, 23.5, 30.5, 32.5, 33.5, 34.5, 24.5]], "data01": [[0.0, 17.5, 0.0], [406.0, 17.5, 236.0], [406.0, 18.5, 236.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6185.0, 26.5, 267.0], [6185.0, 27.5, 267.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5], [5.0, 23.5], [5.0, 24.5], [0.0, 24.5]], "data12": [[0.0, 30.5, 0.0], [4471.0, 30.5, 245.0], [4471.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1004.0, 24.5, 247.0], [1004.0, 25.5, 247.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
