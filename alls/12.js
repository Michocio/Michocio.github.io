

<style>

</style>

<div id="id12"></div>
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
    
       mpld3.draw_figure("id12", {"id": "el6928140242918063352", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "type": "clickinfo", "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "low": 17, "ids": ["el6928140242917317096", "el6928140242917316592", "el6928140242917317936", "el6928140242917343472", "el6928140242917344368", "el6928140242917345264", "el6928140242917346160", "el6928140242917347056", "el6928140242916840112", "el6928140242916841008", "el6928140242916841904", "el6928140242916842800", "el6928140242916868336", "el6928140242916869232", "el6928140242916870128", "el6928140242916871024", "el6928140242916871920", "el6928140242916893360", "el6928140242916894256", "el6928140242916895152"]}, {"wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "type": "clickinfo", "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "low": 17, "ids": ["el6928140242916913616", "el6928140242917316816", "el6928140242916914344", "el6928140242916915240", "el6928140242916916136", "el6928140242916917032", "el6928140242916942568", "el6928140242916943464", "el6928140242916944360", "el6928140242916945256", "el6928140242916966696", "el6928140242916967592", "el6928140242916968488", "el6928140242916969384", "el6928140242916970280", "el6928140242916995816", "el6928140242916996712", "el6928140242916997608", "el6928140242916998504", "el6928140242917019944"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "nticks": 20}], "images": [], "markers": [], "id": "el6928140242917520608", "zoomable": true, "sharey": ["el6928140242917167960"], "yscale": "linear", "texts": [{"id": "el6928140242917523016", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8682.5, 5.0], "xscale": "linear", "ydomain": [15.5, 37.5], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.5, 37.5], "paths": [{"id": "el6928140242917317096", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917316592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917317936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917343472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917344368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917345264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917346160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917347056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916840112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916841008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916841904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916842800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916868336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916869232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916870128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916871024", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916871920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916893360", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916894256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916895152", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8682.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [238, 246, 254, 262, 273], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "nticks": 20}], "images": [], "markers": [], "id": "el6928140242917167960", "zoomable": true, "sharey": ["el6928140242917520608"], "yscale": "linear", "texts": [{"id": "el6928140242917170368", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [228.0, 283.0], "xscale": "linear", "ydomain": [15.5, 37.5], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.5, 37.5], "paths": [{"id": "el6928140242916913616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917316816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916914344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916915240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916916136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916917032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916942568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916943464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916944360", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916945256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916966696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916967592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916968488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916969384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916970280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916995816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916996712", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916997608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916998504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 8, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917019944", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [228.0, 283.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id12", {"id": "el6928140242918063352", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "type": "clickinfo", "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "low": 17, "ids": ["el6928140242917317096", "el6928140242917316592", "el6928140242917317936", "el6928140242917343472", "el6928140242917344368", "el6928140242917345264", "el6928140242917346160", "el6928140242917347056", "el6928140242916840112", "el6928140242916841008", "el6928140242916841904", "el6928140242916842800", "el6928140242916868336", "el6928140242916869232", "el6928140242916870128", "el6928140242916871024", "el6928140242916871920", "el6928140242916893360", "el6928140242916894256", "el6928140242916895152"]}, {"wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "type": "clickinfo", "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "low": 17, "ids": ["el6928140242916913616", "el6928140242917316816", "el6928140242916914344", "el6928140242916915240", "el6928140242916916136", "el6928140242916917032", "el6928140242916942568", "el6928140242916943464", "el6928140242916944360", "el6928140242916945256", "el6928140242916966696", "el6928140242916967592", "el6928140242916968488", "el6928140242916969384", "el6928140242916970280", "el6928140242916995816", "el6928140242916996712", "el6928140242916997608", "el6928140242916998504", "el6928140242917019944"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "nticks": 20}], "images": [], "markers": [], "id": "el6928140242917520608", "zoomable": true, "sharey": ["el6928140242917167960"], "yscale": "linear", "texts": [{"id": "el6928140242917523016", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8682.5, 5.0], "xscale": "linear", "ydomain": [15.5, 37.5], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.5, 37.5], "paths": [{"id": "el6928140242917317096", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917316592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917317936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917343472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917344368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917345264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917346160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917347056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916840112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916841008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916841904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916842800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916868336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916869232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916870128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916871024", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916871920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916893360", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916894256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916895152", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8682.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [238, 246, 254, 262, 273], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "nticks": 20}], "images": [], "markers": [], "id": "el6928140242917167960", "zoomable": true, "sharey": ["el6928140242917520608"], "yscale": "linear", "texts": [{"id": "el6928140242917170368", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [228.0, 283.0], "xscale": "linear", "ydomain": [15.5, 37.5], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.5, 37.5], "paths": [{"id": "el6928140242916913616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917316816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916914344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916915240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916916136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916917032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916942568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916943464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916944360", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916945256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916966696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916967592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916968488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916969384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916970280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916995816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916996712", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916997608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916998504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 8, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917019944", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [228.0, 283.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id12", {"id": "el6928140242918063352", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "type": "clickinfo", "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "low": 17, "ids": ["el6928140242917317096", "el6928140242917316592", "el6928140242917317936", "el6928140242917343472", "el6928140242917344368", "el6928140242917345264", "el6928140242917346160", "el6928140242917347056", "el6928140242916840112", "el6928140242916841008", "el6928140242916841904", "el6928140242916842800", "el6928140242916868336", "el6928140242916869232", "el6928140242916870128", "el6928140242916871024", "el6928140242916871920", "el6928140242916893360", "el6928140242916894256", "el6928140242916895152"]}, {"wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "type": "clickinfo", "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "low": 17, "ids": ["el6928140242916913616", "el6928140242917316816", "el6928140242916914344", "el6928140242916915240", "el6928140242916916136", "el6928140242916917032", "el6928140242916942568", "el6928140242916943464", "el6928140242916944360", "el6928140242916945256", "el6928140242916966696", "el6928140242916967592", "el6928140242916968488", "el6928140242916969384", "el6928140242916970280", "el6928140242916995816", "el6928140242916996712", "el6928140242916997608", "el6928140242916998504", "el6928140242917019944"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "nticks": 20}], "images": [], "markers": [], "id": "el6928140242917520608", "zoomable": true, "sharey": ["el6928140242917167960"], "yscale": "linear", "texts": [{"id": "el6928140242917523016", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8682.5, 5.0], "xscale": "linear", "ydomain": [15.5, 37.5], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.5, 37.5], "paths": [{"id": "el6928140242917317096", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917316592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917317936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917343472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917344368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917345264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917346160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917347056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916840112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916841008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916841904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916842800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916868336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916869232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916870128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916871024", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916871920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916893360", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916894256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 6, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916895152", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8682.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [238, 246, 254, 262, 273], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "nticks": 20}], "images": [], "markers": [], "id": "el6928140242917167960", "zoomable": true, "sharey": ["el6928140242917520608"], "yscale": "linear", "texts": [{"id": "el6928140242917170368", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [228.0, 283.0], "xscale": "linear", "ydomain": [15.5, 37.5], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.5, 37.5], "paths": [{"id": "el6928140242916913616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917316816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916914344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916915240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916916136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916917032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916942568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916943464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916944360", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916945256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916966696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916967592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916968488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916969384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916970280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916995816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916996712", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916997608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242916998504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 8, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242917019944", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [228.0, 283.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]]}, "width": 640.0});
            })
         });
}
</script>
