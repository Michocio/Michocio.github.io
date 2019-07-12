

 

 

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
    
       mpld3.draw_figure("id2", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "ids": ["el10757139727015352584", "el10757139727015352192", "el10757139727015235256", "el10757139727015201872", "el10757139727015531352", "el10757139727015514296", "el10757139727015492632", "el10757139727015484440", "el10757139727015425248", "el10757139727015412288", "el10757139727015391808", "el10757139727015382320", "el10757139727015883104", "el10757139727015871040", "el10757139727016710384", "el10757139727014942872", "el10757139727014943768"], "type": "clickinfo", "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "low": 19}, {"alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "ids": ["el10757139727015019632", "el10757139727015352640", "el10757139727015020304", "el10757139727015021200", "el10757139727015022096", "el10757139727015035344", "el10757139727015036240", "el10757139727015037136", "el10757139727015038032", "el10757139727015038928", "el10757139727015068560", "el10757139727015069456", "el10757139727015070352", "el10757139727015071248", "el10757139727015096784", "el10757139727015097680", "el10757139727015098576"], "type": "clickinfo", "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "low": 19}], "height": 480.0, "id": "el10757139727015872608", "data": {"data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727015199072", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [9159.75, 116.0], "ydomain": [17.65, 36.35], "sharex": [], "xlim": [9159.75, 116.0], "images": [], "sharey": ["el10757139727015324248"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727015143744", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [17.65, 36.35], "paths": [{"xindex": 0, "id": "el10757139727015352584", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727015352192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727015235256", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727015201872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727015531352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727015514296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727015492632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727015484440", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727015425248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727015412288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727015391808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727015382320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727015883104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727015871040", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727016710384", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data08"}, {"xindex": 0, "id": "el10757139727014942872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727014943768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727015351296", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [213.0, 286.0], "ydomain": [17.65, 36.35], "sharex": [], "xlim": [213.0, 286.0], "images": [], "sharey": ["el10757139727015143744"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [223, 236, 249, 262, 276], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727015324248", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [17.65, 36.35], "paths": [{"xindex": 2, "id": "el10757139727015019632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727015352640", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727015020304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727015021200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727015022096", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727015035344", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727015036240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727015037136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727015038032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727015038928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data03"}, {"xindex": 2, "id": "el10757139727015068560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727015069456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727015070352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727015071248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727015096784", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data08"}, {"xindex": 2, "id": "el10757139727015097680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 2, "id": "el10757139727015098576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
         mpld3.draw_figure("id2", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "ids": ["el10757139727015352584", "el10757139727015352192", "el10757139727015235256", "el10757139727015201872", "el10757139727015531352", "el10757139727015514296", "el10757139727015492632", "el10757139727015484440", "el10757139727015425248", "el10757139727015412288", "el10757139727015391808", "el10757139727015382320", "el10757139727015883104", "el10757139727015871040", "el10757139727016710384", "el10757139727014942872", "el10757139727014943768"], "type": "clickinfo", "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "low": 19}, {"alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "ids": ["el10757139727015019632", "el10757139727015352640", "el10757139727015020304", "el10757139727015021200", "el10757139727015022096", "el10757139727015035344", "el10757139727015036240", "el10757139727015037136", "el10757139727015038032", "el10757139727015038928", "el10757139727015068560", "el10757139727015069456", "el10757139727015070352", "el10757139727015071248", "el10757139727015096784", "el10757139727015097680", "el10757139727015098576"], "type": "clickinfo", "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "low": 19}], "height": 480.0, "id": "el10757139727015872608", "data": {"data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727015199072", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [9159.75, 116.0], "ydomain": [17.65, 36.35], "sharex": [], "xlim": [9159.75, 116.0], "images": [], "sharey": ["el10757139727015324248"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727015143744", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [17.65, 36.35], "paths": [{"xindex": 0, "id": "el10757139727015352584", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727015352192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727015235256", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727015201872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727015531352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727015514296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727015492632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727015484440", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727015425248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727015412288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727015391808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727015382320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727015883104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727015871040", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727016710384", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data08"}, {"xindex": 0, "id": "el10757139727014942872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727014943768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727015351296", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [213.0, 286.0], "ydomain": [17.65, 36.35], "sharex": [], "xlim": [213.0, 286.0], "images": [], "sharey": ["el10757139727015143744"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [223, 236, 249, 262, 276], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727015324248", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [17.65, 36.35], "paths": [{"xindex": 2, "id": "el10757139727015019632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727015352640", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727015020304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727015021200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727015022096", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727015035344", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727015036240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727015037136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727015038032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727015038928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data03"}, {"xindex": 2, "id": "el10757139727015068560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727015069456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727015070352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727015071248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727015096784", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data08"}, {"xindex": 2, "id": "el10757139727015097680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 2, "id": "el10757139727015098576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
                 mpld3.draw_figure("id2", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "ids": ["el10757139727015352584", "el10757139727015352192", "el10757139727015235256", "el10757139727015201872", "el10757139727015531352", "el10757139727015514296", "el10757139727015492632", "el10757139727015484440", "el10757139727015425248", "el10757139727015412288", "el10757139727015391808", "el10757139727015382320", "el10757139727015883104", "el10757139727015871040", "el10757139727016710384", "el10757139727014942872", "el10757139727014943768"], "type": "clickinfo", "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "low": 19}, {"alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]], "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "ids": ["el10757139727015019632", "el10757139727015352640", "el10757139727015020304", "el10757139727015021200", "el10757139727015022096", "el10757139727015035344", "el10757139727015036240", "el10757139727015037136", "el10757139727015038032", "el10757139727015038928", "el10757139727015068560", "el10757139727015069456", "el10757139727015070352", "el10757139727015071248", "el10757139727015096784", "el10757139727015097680", "el10757139727015098576"], "type": "clickinfo", "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "low": 19}], "height": 480.0, "id": "el10757139727015872608", "data": {"data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727015199072", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [9159.75, 116.0], "ydomain": [17.65, 36.35], "sharex": [], "xlim": [9159.75, 116.0], "images": [], "sharey": ["el10757139727015324248"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727015143744", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [17.65, 36.35], "paths": [{"xindex": 0, "id": "el10757139727015352584", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727015352192", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727015235256", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727015201872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727015531352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727015514296", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727015492632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727015484440", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727015425248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727015412288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727015391808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727015382320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727015883104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727015871040", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727016710384", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data08"}, {"xindex": 0, "id": "el10757139727014942872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727014943768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727015351296", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [213.0, 286.0], "ydomain": [17.65, 36.35], "sharex": [], "xlim": [213.0, 286.0], "images": [], "sharey": ["el10757139727015143744"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [223, 236, 249, 262, 276], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727015324248", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [17.65, 36.35], "paths": [{"xindex": 2, "id": "el10757139727015019632", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727015352640", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727015020304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727015021200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727015022096", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727015035344", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727015036240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727015037136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727015038032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727015038928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data03"}, {"xindex": 2, "id": "el10757139727015068560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727015069456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727015070352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727015071248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727015096784", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data08"}, {"xindex": 2, "id": "el10757139727015097680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 2, "id": "el10757139727015098576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data12"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
