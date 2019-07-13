

<style>

</style>

<div id="id2"></div>
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
    
       mpld3.draw_figure("id2", {"id": "el6928140242920250560", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "type": "clickinfo", "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "low": 19, "ids": ["el6928140242919838832", "el6928140242919856112", "el6928140242920115224", "el6928140242920102936", "el6928140242920089976", "el6928140242920038864", "el6928140242920011200", "el6928140242919994144", "el6928140242919977088", "el6928140242920482352", "el6928140242921250768", "el6928140242920499856", "el6928140242919541504", "el6928140242919542400", "el6928140242919608896", "el6928140242919609792", "el6928140242919610688"]}, {"wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "type": "clickinfo", "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "low": 19, "ids": ["el6928140242919633248", "el6928140242919854264", "el6928140242919633976", "el6928140242919634872", "el6928140242919635768", "el6928140242919636664", "el6928140242919658104", "el6928140242919659000", "el6928140242919659896", "el6928140242919660792", "el6928140242919682232", "el6928140242919683128", "el6928140242919684024", "el6928140242919684920", "el6928140242919685816", "el6928140242919707256", "el6928140242919708152"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919980280", "zoomable": true, "sharey": ["el6928140242919919512"], "yscale": "linear", "texts": [{"id": "el6928140242919803200", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9159.75, 116.0], "xscale": "linear", "ydomain": [17.65, 36.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [17.65, 36.35], "paths": [{"id": "el6928140242919838832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919856112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920115224", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920102936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920089976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920038864", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920011200", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919994144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919977088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920482352", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921250768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920499856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919541504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919542400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919608896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919609792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919610688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9159.75, 116.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [223, 236, 249, 262, 276], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919919512", "zoomable": true, "sharey": ["el6928140242919980280"], "yscale": "linear", "texts": [{"id": "el6928140242919954752", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [213.0, 286.0], "xscale": "linear", "ydomain": [17.65, 36.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [17.65, 36.35], "paths": [{"id": "el6928140242919633248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919854264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919633976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919634872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919635768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919636664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919658104", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919659000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919659896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919660792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919682232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919683128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919684024", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919684920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919685816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919707256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919708152", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [213.0, 286.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id2", {"id": "el6928140242920250560", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "type": "clickinfo", "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "low": 19, "ids": ["el6928140242919838832", "el6928140242919856112", "el6928140242920115224", "el6928140242920102936", "el6928140242920089976", "el6928140242920038864", "el6928140242920011200", "el6928140242919994144", "el6928140242919977088", "el6928140242920482352", "el6928140242921250768", "el6928140242920499856", "el6928140242919541504", "el6928140242919542400", "el6928140242919608896", "el6928140242919609792", "el6928140242919610688"]}, {"wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "type": "clickinfo", "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "low": 19, "ids": ["el6928140242919633248", "el6928140242919854264", "el6928140242919633976", "el6928140242919634872", "el6928140242919635768", "el6928140242919636664", "el6928140242919658104", "el6928140242919659000", "el6928140242919659896", "el6928140242919660792", "el6928140242919682232", "el6928140242919683128", "el6928140242919684024", "el6928140242919684920", "el6928140242919685816", "el6928140242919707256", "el6928140242919708152"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919980280", "zoomable": true, "sharey": ["el6928140242919919512"], "yscale": "linear", "texts": [{"id": "el6928140242919803200", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9159.75, 116.0], "xscale": "linear", "ydomain": [17.65, 36.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [17.65, 36.35], "paths": [{"id": "el6928140242919838832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919856112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920115224", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920102936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920089976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920038864", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920011200", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919994144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919977088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920482352", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921250768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920499856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919541504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919542400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919608896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919609792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919610688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9159.75, 116.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [223, 236, 249, 262, 276], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919919512", "zoomable": true, "sharey": ["el6928140242919980280"], "yscale": "linear", "texts": [{"id": "el6928140242919954752", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [213.0, 286.0], "xscale": "linear", "ydomain": [17.65, 36.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [17.65, 36.35], "paths": [{"id": "el6928140242919633248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919854264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919633976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919634872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919635768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919636664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919658104", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919659000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919659896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919660792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919682232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919683128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919684024", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919684920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919685816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919707256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919708152", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [213.0, 286.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id2", {"id": "el6928140242920250560", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "type": "clickinfo", "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "low": 19, "ids": ["el6928140242919838832", "el6928140242919856112", "el6928140242920115224", "el6928140242920102936", "el6928140242920089976", "el6928140242920038864", "el6928140242920011200", "el6928140242919994144", "el6928140242919977088", "el6928140242920482352", "el6928140242921250768", "el6928140242920499856", "el6928140242919541504", "el6928140242919542400", "el6928140242919608896", "el6928140242919609792", "el6928140242919610688"]}, {"wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "type": "clickinfo", "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "low": 19, "ids": ["el6928140242919633248", "el6928140242919854264", "el6928140242919633976", "el6928140242919634872", "el6928140242919635768", "el6928140242919636664", "el6928140242919658104", "el6928140242919659000", "el6928140242919659896", "el6928140242919660792", "el6928140242919682232", "el6928140242919683128", "el6928140242919684024", "el6928140242919684920", "el6928140242919685816", "el6928140242919707256", "el6928140242919708152"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919980280", "zoomable": true, "sharey": ["el6928140242919919512"], "yscale": "linear", "texts": [{"id": "el6928140242919803200", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9159.75, 116.0], "xscale": "linear", "ydomain": [17.65, 36.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [17.65, 36.35], "paths": [{"id": "el6928140242919838832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919856112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920115224", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920102936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920089976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920038864", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920011200", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919994144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919977088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920482352", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921250768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920499856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919541504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919542400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919608896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919609792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919610688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9159.75, 116.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [223, 236, 249, 262, 276], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242919919512", "zoomable": true, "sharey": ["el6928140242919980280"], "yscale": "linear", "texts": [{"id": "el6928140242919954752", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [213.0, 286.0], "xscale": "linear", "ydomain": [17.65, 36.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [17.65, 36.35], "paths": [{"id": "el6928140242919633248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919854264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919633976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919634872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919635768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919636664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919658104", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919659000", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919659896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919660792", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919682232", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919683128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919684024", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919684920", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919685816", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919707256", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242919708152", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [213.0, 286.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
