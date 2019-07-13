

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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
    
       mpld3.draw_figure("id2", {"data": {"data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "type": "clickinfo", "ids": ["el7772140277698658600", "el7772140277698659272", "el7772140277699080824", "el7772140277699040536", "el7772140277699355704", "el7772140277699335224", "el7772140277699318168", "el7772140277699306216", "el7772140277699297520", "el7772140277699229680", "el7772140277699217392", "el7772140277699701784", "el7772140277699184288", "el7772140277699168240", "el7772140277700643752", "el7772140277698770816", "el7772140277698771712"], "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]]}, {"low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "type": "clickinfo", "ids": ["el7772140277698843424", "el7772140277698659720", "el7772140277698844152", "el7772140277698845048", "el7772140277698845944", "el7772140277698863288", "el7772140277698864184", "el7772140277698865080", "el7772140277698865976", "el7772140277698866872", "el7772140277698892408", "el7772140277698893304", "el7772140277698894200", "el7772140277698895096", "el7772140277698392248", "el7772140277698393144", "el7772140277698394040"], "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277699027072", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [17.65, 36.35], "sharey": ["el7772140277699152024"], "images": [], "id": "el7772140277698967536", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [9159.75, 116.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698658600", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698659272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699080824", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699040536", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699355704", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699335224", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699318168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699306216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699297520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699229680", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699217392", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699701784", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699184288", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699168240", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277700643752", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698770816", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698771712", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [17.65, 36.35], "markers": [], "xlim": [9159.75, 116.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277698654784", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [17.65, 36.35], "sharey": ["el7772140277698967536"], "images": [], "id": "el7772140277699152024", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [213.0, 286.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698843424", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698659720", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698844152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698845048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698845944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698863288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698864184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698865080", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698865976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277698866872", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698892408", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698893304", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698894200", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698895096", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277698392248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698393144", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277698394040", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [17.65, 36.35], "markers": [], "xlim": [213.0, 286.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [223, 236, 249, 262, 276], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277699779216", "height": 480.0});
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
    
         mpld3.draw_figure("id2", {"data": {"data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "type": "clickinfo", "ids": ["el7772140277698658600", "el7772140277698659272", "el7772140277699080824", "el7772140277699040536", "el7772140277699355704", "el7772140277699335224", "el7772140277699318168", "el7772140277699306216", "el7772140277699297520", "el7772140277699229680", "el7772140277699217392", "el7772140277699701784", "el7772140277699184288", "el7772140277699168240", "el7772140277700643752", "el7772140277698770816", "el7772140277698771712"], "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]]}, {"low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "type": "clickinfo", "ids": ["el7772140277698843424", "el7772140277698659720", "el7772140277698844152", "el7772140277698845048", "el7772140277698845944", "el7772140277698863288", "el7772140277698864184", "el7772140277698865080", "el7772140277698865976", "el7772140277698866872", "el7772140277698892408", "el7772140277698893304", "el7772140277698894200", "el7772140277698895096", "el7772140277698392248", "el7772140277698393144", "el7772140277698394040"], "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277699027072", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [17.65, 36.35], "sharey": ["el7772140277699152024"], "images": [], "id": "el7772140277698967536", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [9159.75, 116.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698658600", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698659272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699080824", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699040536", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699355704", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699335224", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699318168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699306216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699297520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699229680", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699217392", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699701784", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699184288", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699168240", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277700643752", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698770816", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698771712", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [17.65, 36.35], "markers": [], "xlim": [9159.75, 116.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277698654784", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [17.65, 36.35], "sharey": ["el7772140277698967536"], "images": [], "id": "el7772140277699152024", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [213.0, 286.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698843424", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698659720", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698844152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698845048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698845944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698863288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698864184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698865080", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698865976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277698866872", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698892408", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698893304", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698894200", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698895096", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277698392248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698393144", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277698394040", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [17.65, 36.35], "markers": [], "xlim": [213.0, 286.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [223, 236, 249, 262, 276], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277699779216", "height": 480.0});
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
    
                 mpld3.draw_figure("id2", {"data": {"data09": [[0.0, 26.5, 0.0], [6026.0, 26.5, 272.0], [6026.0, 27.5, 272.0], [0.0, 27.5, 0.0]], "data16": [[0.0, 34.5], [606.0, 34.5], [606.0, 35.5], [0.0, 35.5]], "data05": [[0.0, 22.5, 0.0], [2534.0, 22.5, 262.0], [2534.0, 23.5, 262.0], [0.0, 23.5, 0.0]], "data08": [[0.0, 25.5, 32.5], [0.0, 25.5, 32.5], [0.0, 26.5, 33.5], [0.0, 26.5, 33.5]], "data10": [[0.0, 27.5], [7351.0, 27.5], [7351.0, 28.5], [0.0, 28.5]], "data11": [[0.0, 28.5, 0.0], [116.0, 28.5, 234.0], [116.0, 29.5, 234.0], [0.0, 29.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [3338.0, 30.5, 276.0], [3338.0, 31.5, 276.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 21.5, 0.0], [1037.0, 21.5, 249.0], [1037.0, 22.5, 249.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [927.0, 23.5, 275.0], [927.0, 24.5, 275.0], [0.0, 24.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [212.0, 33.5, 223.0], [212.0, 34.5, 223.0], [0.0, 34.5, 0.0]], "data03": [[0.0, 20.5, 0.0, 27.5], [2333.0, 20.5, 264.0, 27.5], [2333.0, 21.5, 264.0, 28.5], [0.0, 21.5, 0.0, 28.5]], "data14": [[0.0, 31.5, 0.0], [1039.0, 31.5, 252.0], [1039.0, 32.5, 252.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [3642.0, 24.5, 268.0], [3642.0, 25.5, 268.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 29.5, 0.0, 34.5], [2245.0, 29.5, 263.0, 34.5], [2245.0, 30.5, 263.0, 35.5], [0.0, 30.5, 0.0, 35.5]], "data02": [[0.0, 19.5, 0.0], [515.0, 19.5, 257.0], [515.0, 20.5, 257.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0], [3715.0, 18.5, 251.0], [3715.0, 19.5, 251.0], [0.0, 19.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "type": "clickinfo", "ids": ["el7772140277698658600", "el7772140277698659272", "el7772140277699080824", "el7772140277699040536", "el7772140277699355704", "el7772140277699335224", "el7772140277699318168", "el7772140277699306216", "el7772140277699297520", "el7772140277699229680", "el7772140277699217392", "el7772140277699701784", "el7772140277699184288", "el7772140277699168240", "el7772140277700643752", "el7772140277698770816", "el7772140277698771712"], "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]]}, {"low": 19, "wiek": {"32": [9140], "34": [16967], "35": [16952, 4188], "19": [309138, 366283], "20": [362434, 241199], "21": [169836, 362437], "22": [169832], "23": [93242, 259234], "24": [162545, 70349], "25": [97365, 158659], "27": [23108, 16969, 27944, 19790], "28": [121630, 1655, 26136, 160963], "29": [18369], "30": [10038], "31": [16956, 23224, 1044]}, "vals": {"32": [1039, 252], "34": [212, 223], "35": [606, 263], "19": [3715, 251], "20": [515, 257], "21": [2333, 264], "22": [1037, 249], "23": [2534, 262], "24": [927, 275], "25": [3642, 268], "27": [6026, 272], "28": [7351, 264], "29": [116, 234], "30": [2245, 263], "31": [3338, 276]}, "players": {"18369": ["Cristian Pasquato", 116, 234], "362434": ["Mateusz \u017byro", 261, 269], "160963": ["Kante", 604, 226], "23108": ["Marko Vesovic", 2373, 281], "362437": ["Konrad Michalak", 45, 236], "16967": ["Miroslav Radovic", 212, 223], "16969": ["Micha\u0142 Kucharczyk", 2000, 257], "366283": ["Sandro Kulenovic", 811, 246], "70349": ["Chris Philipps", 230, 259], "19790": ["Salvador Agra", 172, 222], "23224": ["Krzysztof M\u0105czy\u0144ski", 274, 255], "309138": ["Sebastian Szyma\u0144ski", 2904, 252], "158659": ["Luis Rocha", 986, 269], "1044": ["Micha\u0142 Pazdan", 79, 241], "97365": ["Cafu", 2656, 268], "26136": ["Domagoj Antolic", 1904, 265], "4188": ["Eduardo", 18, 228], "121630": ["Carlos Lopez", 2765, 268], "27944": ["William Remy", 1481, 284], "259234": ["Jaroslaw Niezgoda", 175, 214], "169832": ["Pawe\u0142 Stolarski", 1037, 249], "169836": ["Mateusz Wieteska", 2288, 264], "241199": ["Mateusz Ho\u0142ownia", 254, 245], "162545": ["Iuri Medeiros", 697, 280], "9140": ["Kasper Hamalainen", 1039, 252], "10038": ["Adam Hlousek", 2245, 263], "1655": ["Andre Martins", 2078, 269], "16952": ["Inaki Astiz", 588, 264], "93242": ["Dominik Nagy", 2359, 266], "16956": ["Artur J\u0119drzejczyk", 2985, 279]}, "type": "clickinfo", "ids": ["el7772140277698843424", "el7772140277698659720", "el7772140277698844152", "el7772140277698845048", "el7772140277698845944", "el7772140277698863288", "el7772140277698864184", "el7772140277698865080", "el7772140277698865976", "el7772140277698866872", "el7772140277698892408", "el7772140277698893304", "el7772140277698894200", "el7772140277698895096", "el7772140277698392248", "el7772140277698393144", "el7772140277698394040"], "alls": [["Artur J\u0119drzejczyk", [2985, 279]], ["Sebastian Szyma\u0144ski", [2904, 252]], ["Carlos Lopez", [2765, 268]], ["Cafu", [2656, 268]], ["Marko Vesovic", [2373, 281]], ["Dominik Nagy", [2359, 266]], ["Mateusz Wieteska", [2288, 264]], ["Adam Hlousek", [2245, 263]], ["Andre Martins", [2078, 269]], ["Micha\u0142 Kucharczyk", [2000, 257]], ["Domagoj Antolic", [1904, 265]], ["William Remy", [1481, 284]], ["Kasper Hamalainen", [1039, 252]], ["Pawe\u0142 Stolarski", [1037, 249]], ["Luis Rocha", [986, 269]], ["Sandro Kulenovic", [811, 246]], ["Iuri Medeiros", [697, 280]], ["Kante", [604, 226]], ["Inaki Astiz", [588, 264]], ["Krzysztof M\u0105czy\u0144ski", [274, 255]], ["Mateusz \u017byro", [261, 269]], ["Mateusz Ho\u0142ownia", [254, 245]], ["Chris Philipps", [230, 259]], ["Miroslav Radovic", [212, 223]], ["Jaroslaw Niezgoda", [175, 214]], ["Salvador Agra", [172, 222]], ["Cristian Pasquato", [116, 234]], ["Micha\u0142 Pazdan", [79, 241]], ["Konrad Michalak", [45, 236]], ["Eduardo", [18, 228]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277699027072", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [17.65, 36.35], "sharey": ["el7772140277699152024"], "images": [], "id": "el7772140277698967536", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [9159.75, 116.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698658600", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698659272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699080824", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699040536", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699355704", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699335224", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699318168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699306216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699297520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699229680", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699217392", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699701784", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699184288", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277699168240", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277700643752", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698770816", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698771712", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [17.65, 36.35], "markers": [], "xlim": [9159.75, 116.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277698654784", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [17.65, 36.35], "sharey": ["el7772140277698967536"], "images": [], "id": "el7772140277699152024", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [213.0, 286.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698843424", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698659720", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698844152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698845048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698845944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698863288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698864184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698865080", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698865976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277698866872", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698892408", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698893304", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698894200", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698895096", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277698392248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277698393144", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277698394040", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [17.65, 36.35], "markers": [], "xlim": [213.0, 286.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [223, 236, 249, 262, 276], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277699779216", "height": 480.0});
            })
         });
}
</script>
