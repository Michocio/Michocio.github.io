

  

   


    
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
    
       mpld3.draw_figure("id9", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "type": "clickinfo", "ids": ["el4265140411098097592", "el4265140411098097088", "el4265140411098098376", "el4265140411098099272", "el4265140411098124808", "el4265140411098125704", "el4265140411098126600", "el4265140411098127496", "el4265140411098128336", "el4265140411098149832", "el4265140411098150728", "el4265140411098151624", "el4265140411098152520", "el4265140411097653768", "el4265140411097654664", "el4265140411097655560", "el4265140411097656456", "el4265140411097657296", "el4265140411097682888", "el4265140411097683784", "el4265140411097684680", "el4265140411097685576", "el4265140411097707016", "el4265140411097707912"]}, {"vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "type": "clickinfo", "ids": ["el4265140411097709984", "el4265140411098097256", "el4265140411097727104", "el4265140411097728000", "el4265140411097728896", "el4265140411097729792", "el4265140411097730688", "el4265140411097752128", "el4265140411097753024", "el4265140411097753920", "el4265140411097754816", "el4265140411097776256", "el4265140411097777152", "el4265140411097778048", "el4265140411097778944", "el4265140411097779840", "el4265140411097801280", "el4265140411097802176", "el4265140411097803072", "el4265140411097803968", "el4265140411097833600", "el4265140411097834496", "el4265140411097835392", "el4265140411097836288"]}], "height": 480.0, "data": {"data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411098408440"], "collections": [], "xlim": [7449.25, 8.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411098345768"}], "xdomain": [7449.25, 8.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 24, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098097592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098097088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098098376"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098099272"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098124808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098125704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098126600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098127496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098128336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098149832"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098150728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098151624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098152520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097653768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097654664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097655560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097656456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097657296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097682888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097683784"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097684680"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097685576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097707016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data19", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097707912"}], "ydomain": [13.3, 39.7], "ylim": [13.3, 39.7], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411098290216"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411098290216"], "collections": [], "xlim": [218.0, 287.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411097972864"}], "xdomain": [218.0, 287.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [228, 240, 252, 264, 277], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 24, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097709984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411098097256"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097727104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097728000"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097728896"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097729792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097730688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097752128"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097753024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097753920"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097754816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097776256"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097777152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097778048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097778944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097779840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097801280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097802176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097803072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097803968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097833600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097834496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097835392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097836288"}], "ydomain": [13.3, 39.7], "ylim": [13.3, 39.7], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411098408440"}], "id": "el4265140411098188712"});
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
    
         mpld3.draw_figure("id9", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "type": "clickinfo", "ids": ["el4265140411098097592", "el4265140411098097088", "el4265140411098098376", "el4265140411098099272", "el4265140411098124808", "el4265140411098125704", "el4265140411098126600", "el4265140411098127496", "el4265140411098128336", "el4265140411098149832", "el4265140411098150728", "el4265140411098151624", "el4265140411098152520", "el4265140411097653768", "el4265140411097654664", "el4265140411097655560", "el4265140411097656456", "el4265140411097657296", "el4265140411097682888", "el4265140411097683784", "el4265140411097684680", "el4265140411097685576", "el4265140411097707016", "el4265140411097707912"]}, {"vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "type": "clickinfo", "ids": ["el4265140411097709984", "el4265140411098097256", "el4265140411097727104", "el4265140411097728000", "el4265140411097728896", "el4265140411097729792", "el4265140411097730688", "el4265140411097752128", "el4265140411097753024", "el4265140411097753920", "el4265140411097754816", "el4265140411097776256", "el4265140411097777152", "el4265140411097778048", "el4265140411097778944", "el4265140411097779840", "el4265140411097801280", "el4265140411097802176", "el4265140411097803072", "el4265140411097803968", "el4265140411097833600", "el4265140411097834496", "el4265140411097835392", "el4265140411097836288"]}], "height": 480.0, "data": {"data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411098408440"], "collections": [], "xlim": [7449.25, 8.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411098345768"}], "xdomain": [7449.25, 8.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 24, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098097592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098097088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098098376"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098099272"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098124808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098125704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098126600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098127496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098128336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098149832"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098150728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098151624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098152520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097653768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097654664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097655560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097656456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097657296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097682888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097683784"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097684680"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097685576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097707016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data19", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097707912"}], "ydomain": [13.3, 39.7], "ylim": [13.3, 39.7], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411098290216"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411098290216"], "collections": [], "xlim": [218.0, 287.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411097972864"}], "xdomain": [218.0, 287.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [228, 240, 252, 264, 277], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 24, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097709984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411098097256"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097727104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097728000"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097728896"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097729792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097730688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097752128"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097753024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097753920"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097754816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097776256"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097777152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097778048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097778944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097779840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097801280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097802176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097803072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097803968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097833600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097834496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097835392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097836288"}], "ydomain": [13.3, 39.7], "ylim": [13.3, 39.7], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411098408440"}], "id": "el4265140411098188712"});
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
    
                 mpld3.draw_figure("id9", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "type": "clickinfo", "ids": ["el4265140411098097592", "el4265140411098097088", "el4265140411098098376", "el4265140411098099272", "el4265140411098124808", "el4265140411098125704", "el4265140411098126600", "el4265140411098127496", "el4265140411098128336", "el4265140411098149832", "el4265140411098150728", "el4265140411098151624", "el4265140411098152520", "el4265140411097653768", "el4265140411097654664", "el4265140411097655560", "el4265140411097656456", "el4265140411097657296", "el4265140411097682888", "el4265140411097683784", "el4265140411097684680", "el4265140411097685576", "el4265140411097707016", "el4265140411097707912"]}, {"vals": {"33": [1786, 267], "34": [2028, 254], "35": [526, 241], "38": [2690, 253], "15": [436, 228], "17": [375, 230], "18": [1511, 228], "19": [8, 0], "20": [1019, 243], "22": [1440, 244], "23": [5961, 253], "24": [1957, 277], "25": [826, 255], "26": [3247, 249], "27": [1650, 265], "28": [4199, 265], "29": [2480, 257], "30": [2601, 272]}, "low": 15, "players": {"228928": ["Jakub Bartosz", 148, 226], "191554": ["Zoran Arsenic", 887, 258], "186373": ["Dawid Kort", 1536, 238], "24072": ["Matej Palcic", 826, 255], "23413": ["\u0141ukasz Burliga", 596, 284], "19467": ["Zdenek Ondrasek", 1692, 274], "1741": ["S\u0142awomir Peszko", 1047, 257], "1037": ["Jakub B\u0142aszczykowski", 739, 280], "451384": ["Dawid Szot", 191, 211], "96211": ["Marko Kolar", 1909, 257], "9237": ["Maciej Sadlok", 2480, 257], "1046": ["Marcin Ryszard Wasilewski", 2690, 253], "9239": ["Pawe\u0142 Bro\u017cek", 526, 241], "23449": ["Jakub Bartkowski", 1650, 265], "457372": ["Wojciech Slomka", 96, 231], "458073": ["Aleksander Buksa", 54, 188], "268959": ["Martin Kostal", 1292, 246], "8802": ["Vullnet Basha", 2695, 273], "233126": ["Tibor Halilovic", 502, 240], "1010108": ["D. Hoyo-Kowalski", 382, 230], "19050": ["Rafal Boguski", 2028, 254], "980589": ["Maciej Sliwa", 184, 252], "19054": ["Patryk Adrian Ma\u0142ecki", 313, 235], "1115567": ["Emmanuel Kumah", 84, 226], "855730": ["Artur Balicki", 8, 0], "56307": ["Rafal Pietrzak", 3247, 249], "432053": ["Marcin Grabowski", 494, 222], "160362": ["Vukan Savicevic", 1070, 294], "95032": ["Lukas Klemenz", 652, 288], "261305": ["Krzysztof Drzazga", 1362, 250], "441340": ["Patryk Plewka", 839, 229], "244733": ["Kamil Wojtkowski", 923, 245], "441342": ["Daniel Morys", 94, 249], "157695": ["Jesus Imaz", 1504, 252]}, "wiek": {"33": [1741, 1037], "34": [19050], "35": [9239], "38": [1046], "15": [1010108, 458073], "17": [451384, 980589], "18": [441340, 432053, 441342, 1115567], "19": [855730], "20": [244733, 457372], "22": [268959, 228928], "23": [96211, 186373, 261305, 95032, 233126], "24": [160362, 191554], "25": [24072], "26": [56307], "27": [23449], "28": [8802, 157695], "29": [9237], "30": [19467, 23413, 19054]}, "alls": [["Rafal Pietrzak", [3247, 249]], ["Vullnet Basha", [2695, 273]], ["Marcin Ryszard Wasilewski", [2690, 253]], ["Maciej Sadlok", [2480, 257]], ["Rafal Boguski", [2028, 254]], ["Marko Kolar", [1909, 257]], ["Zdenek Ondrasek", [1692, 274]], ["Jakub Bartkowski", [1650, 265]], ["Dawid Kort", [1536, 238]], ["Jesus Imaz", [1504, 252]], ["Krzysztof Drzazga", [1362, 250]], ["Martin Kostal", [1292, 246]], ["Vukan Savicevic", [1070, 294]], ["S\u0142awomir Peszko", [1047, 257]], ["Kamil Wojtkowski", [923, 245]], ["Zoran Arsenic", [887, 258]], ["Patryk Plewka", [839, 229]], ["Matej Palcic", [826, 255]], ["Jakub B\u0142aszczykowski", [739, 280]], ["Lukas Klemenz", [652, 288]], ["\u0141ukasz Burliga", [596, 284]], ["Pawe\u0142 Bro\u017cek", [526, 241]], ["Tibor Halilovic", [502, 240]], ["Marcin Grabowski", [494, 222]], ["D. Hoyo-Kowalski", [382, 230]], ["Patryk Adrian Ma\u0142ecki", [313, 235]], ["Dawid Szot", [191, 211]], ["Maciej Sliwa", [184, 252]], ["Jakub Bartosz", [148, 226]], ["Wojciech Slomka", [96, 231]], ["Daniel Morys", [94, 249]], ["Emmanuel Kumah", [84, 226]], ["Aleksander Buksa", [54, 188]], ["Artur Balicki", [8, 0]]], "type": "clickinfo", "ids": ["el4265140411097709984", "el4265140411098097256", "el4265140411097727104", "el4265140411097728000", "el4265140411097728896", "el4265140411097729792", "el4265140411097730688", "el4265140411097752128", "el4265140411097753024", "el4265140411097753920", "el4265140411097754816", "el4265140411097776256", "el4265140411097777152", "el4265140411097778048", "el4265140411097778944", "el4265140411097779840", "el4265140411097801280", "el4265140411097802176", "el4265140411097803072", "el4265140411097803968", "el4265140411097833600", "el4265140411097834496", "el4265140411097835392", "el4265140411097836288"]}], "height": 480.0, "data": {"data03": [[0.0, 16.5, 0.0], [375.0, 16.5, 230.0], [375.0, 17.5, 230.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 18.5], [8.0, 18.5], [8.0, 19.5], [0.0, 19.5]], "data02": [[0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 15.5, 20.5, 30.5, 31.5, 35.5, 36.5, 18.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5], [0.0, 16.5, 21.5, 31.5, 32.5, 36.5, 37.5, 19.5]], "data18": [[0.0, 34.5, 0.0], [526.0, 34.5, 241.0], [526.0, 35.5, 241.0], [0.0, 35.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3247.0, 25.5, 249.0], [3247.0, 26.5, 249.0], [0.0, 26.5, 0.0]], "data01": [[0.0, 14.5, 0.0, 17.5], [436.0, 14.5, 228.0, 17.5], [436.0, 15.5, 228.0, 18.5], [0.0, 15.5, 0.0, 18.5]], "data15": [[0.0, 29.5, 0.0], [2601.0, 29.5, 272.0], [2601.0, 30.5, 272.0], [0.0, 30.5, 0.0]], "data12": [[0.0, 26.5, 0.0, 27.5], [1650.0, 26.5, 265.0, 27.5], [1650.0, 27.5, 265.0, 28.5], [0.0, 27.5, 0.0, 28.5]], "data08": [[0.0, 22.5, 0.0, 37.5], [5961.0, 22.5, 253.0, 37.5], [5961.0, 23.5, 253.0, 38.5], [0.0, 23.5, 0.0, 38.5]], "data17": [[0.0, 33.5, 0.0], [2028.0, 33.5, 254.0], [2028.0, 34.5, 254.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 27.5], [4199.0, 27.5], [4199.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 17.5], [1511.0, 17.5], [1511.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [826.0, 24.5, 255.0], [826.0, 25.5, 255.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 19.5, 0.0], [1019.0, 19.5, 243.0], [1019.0, 20.5, 243.0], [0.0, 20.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [1786.0, 32.5, 267.0], [1786.0, 33.5, 267.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1440.0, 21.5, 244.0], [1440.0, 22.5, 244.0], [0.0, 22.5, 0.0]], "data19": [[0.0, 37.5], [2690.0, 37.5], [2690.0, 38.5], [0.0, 38.5]], "data14": [[0.0, 28.5, 0.0], [2480.0, 28.5, 257.0], [2480.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1957.0, 23.5, 277.0], [1957.0, 24.5, 277.0], [0.0, 24.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411098408440"], "collections": [], "xlim": [7449.25, 8.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411098345768"}], "xdomain": [7449.25, 8.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 24, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098097592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098097088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098098376"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098099272"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098124808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098125704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098126600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098127496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098128336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098149832"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098150728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098151624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411098152520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097653768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097654664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097655560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097656456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097657296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097682888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097683784"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097684680"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097685576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097707016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data19", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411097707912"}], "ydomain": [13.3, 39.7], "ylim": [13.3, 39.7], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411098290216"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411098290216"], "collections": [], "xlim": [218.0, 287.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411097972864"}], "xdomain": [218.0, 287.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [228, 240, 252, 264, 277], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 24, "tickformat": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "tickvalues": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097709984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411098097256"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097727104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097728000"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097728896"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097729792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097730688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097752128"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097753024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097753920"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097754816"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097776256"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097777152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097778048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097778944"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097779840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097801280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097802176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097803072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097803968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097833600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097834496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097835392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411097836288"}], "ydomain": [13.3, 39.7], "ylim": [13.3, 39.7], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411098408440"}], "id": "el4265140411098188712"});
            })
         });
}
    
