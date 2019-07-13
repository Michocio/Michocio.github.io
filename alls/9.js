

<style>

</style>

<div id="id9"></div>
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
    
       mpld3.draw_figure("id9", {"data": {"data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]], "data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 15, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "type": "clickinfo", "ids": ["el7772140277693107560", "el7772140277693107056", "el7772140277693133040", "el7772140277693133936", "el7772140277693134832", "el7772140277693135728", "el7772140277693136624", "el7772140277692633776", "el7772140277692634672", "el7772140277692635568", "el7772140277692636464", "el7772140277692653808", "el7772140277692654704", "el7772140277692655600", "el7772140277692656496", "el7772140277692657392", "el7772140277692691120", "el7772140277692692016", "el7772140277692692912", "el7772140277692693808", "el7772140277692715248", "el7772140277692716144", "el7772140277692717040", "el7772140277692717936"], "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]]}, {"low": 15, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "type": "clickinfo", "ids": ["el7772140277692740496", "el7772140277693107280", "el7772140277692741224", "el7772140277692742120", "el7772140277692743016", "el7772140277692760360", "el7772140277692761256", "el7772140277692762152", "el7772140277692763048", "el7772140277692763944", "el7772140277692785384", "el7772140277692786280", "el7772140277692787176", "el7772140277692788072", "el7772140277692809512", "el7772140277692810408", "el7772140277692811304", "el7772140277692812200", "el7772140277692813096", "el7772140277692838632", "el7772140277692839528", "el7772140277692840424", "el7772140277692841320", "el7772140277693068008"], "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277693350240", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [13.3, 39.7], "sharey": ["el7772140277692950456"], "images": [], "id": "el7772140277693294856", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [7449.25, 8.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107560", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107056", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693133040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693133936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693134832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693135728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277693136624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692633776", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692634672", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692635568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692636464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692653808", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692654704", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692655600", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692656496", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692657392", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692691120", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277692692016", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692692912", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692693808", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692715248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data18", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277692716144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277692717040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692717936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data19", "dasharray": "none", "coordinates": "data"}], "ydomain": [13.3, 39.7], "markers": [], "xlim": [7449.25, 8.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 24, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277692985696", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [13.3, 39.7], "sharey": ["el7772140277693294856"], "images": [], "id": "el7772140277692950456", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [218.0, 287.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692740496", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107280", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692741224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692742120", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277692743016", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692760360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277692761256", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692762152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692763048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692763944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692785384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692786280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692787176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692788072", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692809512", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692810408", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692811304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277692812200", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692813096", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692838632", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692839528", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data18", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277692840424", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277692841320", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277693068008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}], "ydomain": [13.3, 39.7], "markers": [], "xlim": [218.0, 287.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [228, 240, 252, 264, 277], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 24, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277693621304", "height": 480.0});
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
    
         mpld3.draw_figure("id9", {"data": {"data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]], "data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 15, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "type": "clickinfo", "ids": ["el7772140277693107560", "el7772140277693107056", "el7772140277693133040", "el7772140277693133936", "el7772140277693134832", "el7772140277693135728", "el7772140277693136624", "el7772140277692633776", "el7772140277692634672", "el7772140277692635568", "el7772140277692636464", "el7772140277692653808", "el7772140277692654704", "el7772140277692655600", "el7772140277692656496", "el7772140277692657392", "el7772140277692691120", "el7772140277692692016", "el7772140277692692912", "el7772140277692693808", "el7772140277692715248", "el7772140277692716144", "el7772140277692717040", "el7772140277692717936"], "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]]}, {"low": 15, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "type": "clickinfo", "ids": ["el7772140277692740496", "el7772140277693107280", "el7772140277692741224", "el7772140277692742120", "el7772140277692743016", "el7772140277692760360", "el7772140277692761256", "el7772140277692762152", "el7772140277692763048", "el7772140277692763944", "el7772140277692785384", "el7772140277692786280", "el7772140277692787176", "el7772140277692788072", "el7772140277692809512", "el7772140277692810408", "el7772140277692811304", "el7772140277692812200", "el7772140277692813096", "el7772140277692838632", "el7772140277692839528", "el7772140277692840424", "el7772140277692841320", "el7772140277693068008"], "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277693350240", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [13.3, 39.7], "sharey": ["el7772140277692950456"], "images": [], "id": "el7772140277693294856", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [7449.25, 8.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107560", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107056", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693133040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693133936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693134832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693135728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277693136624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692633776", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692634672", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692635568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692636464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692653808", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692654704", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692655600", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692656496", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692657392", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692691120", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277692692016", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692692912", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692693808", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692715248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data18", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277692716144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277692717040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692717936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data19", "dasharray": "none", "coordinates": "data"}], "ydomain": [13.3, 39.7], "markers": [], "xlim": [7449.25, 8.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 24, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277692985696", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [13.3, 39.7], "sharey": ["el7772140277693294856"], "images": [], "id": "el7772140277692950456", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [218.0, 287.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692740496", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107280", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692741224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692742120", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277692743016", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692760360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277692761256", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692762152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692763048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692763944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692785384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692786280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692787176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692788072", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692809512", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692810408", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692811304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277692812200", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692813096", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692838632", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692839528", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data18", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277692840424", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277692841320", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277693068008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}], "ydomain": [13.3, 39.7], "markers": [], "xlim": [218.0, 287.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [228, 240, 252, 264, 277], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 24, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277693621304", "height": 480.0});
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
    
                 mpld3.draw_figure("id9", {"data": {"data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]], "data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 15, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "type": "clickinfo", "ids": ["el7772140277693107560", "el7772140277693107056", "el7772140277693133040", "el7772140277693133936", "el7772140277693134832", "el7772140277693135728", "el7772140277693136624", "el7772140277692633776", "el7772140277692634672", "el7772140277692635568", "el7772140277692636464", "el7772140277692653808", "el7772140277692654704", "el7772140277692655600", "el7772140277692656496", "el7772140277692657392", "el7772140277692691120", "el7772140277692692016", "el7772140277692692912", "el7772140277692693808", "el7772140277692715248", "el7772140277692716144", "el7772140277692717040", "el7772140277692717936"], "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]]}, {"low": 15, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "type": "clickinfo", "ids": ["el7772140277692740496", "el7772140277693107280", "el7772140277692741224", "el7772140277692742120", "el7772140277692743016", "el7772140277692760360", "el7772140277692761256", "el7772140277692762152", "el7772140277692763048", "el7772140277692763944", "el7772140277692785384", "el7772140277692786280", "el7772140277692787176", "el7772140277692788072", "el7772140277692809512", "el7772140277692810408", "el7772140277692811304", "el7772140277692812200", "el7772140277692813096", "el7772140277692838632", "el7772140277692839528", "el7772140277692840424", "el7772140277692841320", "el7772140277693068008"], "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277693350240", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [13.3, 39.7], "sharey": ["el7772140277692950456"], "images": [], "id": "el7772140277693294856", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [7449.25, 8.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107560", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107056", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693133040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693133936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693134832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693135728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277693136624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692633776", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692634672", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692635568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692636464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692653808", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692654704", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692655600", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692656496", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692657392", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692691120", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277692692016", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692692912", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692693808", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692715248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data18", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277692716144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277692717040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692717936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data19", "dasharray": "none", "coordinates": "data"}], "ydomain": [13.3, 39.7], "markers": [], "xlim": [7449.25, 8.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 24, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277692985696", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [13.3, 39.7], "sharey": ["el7772140277693294856"], "images": [], "id": "el7772140277692950456", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [218.0, 287.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692740496", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277693107280", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692741224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692742120", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277692743016", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692760360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277692761256", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692762152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692763048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692763944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692785384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692786280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692787176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692788072", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692809512", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692810408", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277692811304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277692812200", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692813096", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692838632", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277692839528", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data18", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277692840424", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277692841320", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277693068008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}], "ydomain": [13.3, 39.7], "markers": [], "xlim": [218.0, 287.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [228, 240, 252, 264, 277], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 24, "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277693621304", "height": 480.0});
            })
         });
}
</script>
