

  

   


    
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
    
       mpld3.draw_figure("id5", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "low": 17, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "type": "clickinfo", "ids": ["el4265140411107955656", "el4265140411107955152", "el4265140411107956440", "el4265140411107957336", "el4265140411107958232", "el4265140411107983768", "el4265140411107984664", "el4265140411107985560", "el4265140411107986456", "el4265140411107987352", "el4265140411108008792", "el4265140411108009688", "el4265140411108010584", "el4265140411108011480", "el4265140411108037016", "el4265140411108037912", "el4265140411108038808", "el4265140411108039704", "el4265140411108040600"]}, {"vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "low": 17, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "type": "clickinfo", "ids": ["el4265140411108059120", "el4265140411107955320", "el4265140411108390224", "el4265140411108390168", "el4265140411108354200", "el4265140411108215048", "el4265140411108196984", "el4265140411108531952", "el4265140411108515568", "el4265140411108494472", "el4265140411109141584", "el4265140411108106704", "el4265140411108107600", "el4265140411108108496", "el4265140411108109392", "el4265140411108110288", "el4265140411107607440", "el4265140411107608336", "el4265140411107609232"]}], "height": 480.0, "data": {"data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411108323960"], "collections": [], "xlim": [12551.0, 36.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411108178128"}], "xdomain": [12551.0, 36.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 4, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107955656"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107955152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107956440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107957336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107958232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107983768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107984664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107985560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107986456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107987352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108008792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108009688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108010584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108011480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108037016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108037912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108038808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108039704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108040600"}], "ydomain": [15.55, 36.45], "ylim": [15.55, 36.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411108624200"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411108624200"], "collections": [], "xlim": [225.0, 283.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411108326368"}], "xdomain": [225.0, 283.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [235, 244, 253, 262, 273], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108059120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107955320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108390224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108390168"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108354200"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108215048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108196984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108531952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108515568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108494472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109141584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108106704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108107600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108108496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108109392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108110288"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107607440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107608336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107609232"}], "ydomain": [15.55, 36.45], "ylim": [15.55, 36.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411108323960"}], "id": "el4265140411108702640"});
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
    
         mpld3.draw_figure("id5", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "low": 17, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "type": "clickinfo", "ids": ["el4265140411107955656", "el4265140411107955152", "el4265140411107956440", "el4265140411107957336", "el4265140411107958232", "el4265140411107983768", "el4265140411107984664", "el4265140411107985560", "el4265140411107986456", "el4265140411107987352", "el4265140411108008792", "el4265140411108009688", "el4265140411108010584", "el4265140411108011480", "el4265140411108037016", "el4265140411108037912", "el4265140411108038808", "el4265140411108039704", "el4265140411108040600"]}, {"vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "low": 17, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "type": "clickinfo", "ids": ["el4265140411108059120", "el4265140411107955320", "el4265140411108390224", "el4265140411108390168", "el4265140411108354200", "el4265140411108215048", "el4265140411108196984", "el4265140411108531952", "el4265140411108515568", "el4265140411108494472", "el4265140411109141584", "el4265140411108106704", "el4265140411108107600", "el4265140411108108496", "el4265140411108109392", "el4265140411108110288", "el4265140411107607440", "el4265140411107608336", "el4265140411107609232"]}], "height": 480.0, "data": {"data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411108323960"], "collections": [], "xlim": [12551.0, 36.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411108178128"}], "xdomain": [12551.0, 36.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 4, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107955656"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107955152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107956440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107957336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107958232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107983768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107984664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107985560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107986456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107987352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108008792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108009688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108010584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108011480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108037016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108037912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108038808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108039704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108040600"}], "ydomain": [15.55, 36.45], "ylim": [15.55, 36.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411108624200"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411108624200"], "collections": [], "xlim": [225.0, 283.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411108326368"}], "xdomain": [225.0, 283.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [235, 244, 253, 262, 273], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108059120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107955320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108390224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108390168"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108354200"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108215048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108196984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108531952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108515568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108494472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109141584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108106704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108107600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108108496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108109392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108110288"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107607440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107608336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107609232"}], "ydomain": [15.55, 36.45], "ylim": [15.55, 36.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411108323960"}], "id": "el4265140411108702640"});
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
    
                 mpld3.draw_figure("id5", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "low": 17, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "type": "clickinfo", "ids": ["el4265140411107955656", "el4265140411107955152", "el4265140411107956440", "el4265140411107957336", "el4265140411107958232", "el4265140411107983768", "el4265140411107984664", "el4265140411107985560", "el4265140411107986456", "el4265140411107987352", "el4265140411108008792", "el4265140411108009688", "el4265140411108010584", "el4265140411108011480", "el4265140411108037016", "el4265140411108037912", "el4265140411108038808", "el4265140411108039704", "el4265140411108040600"]}, {"vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "low": 17, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "type": "clickinfo", "ids": ["el4265140411108059120", "el4265140411107955320", "el4265140411108390224", "el4265140411108390168", "el4265140411108354200", "el4265140411108215048", "el4265140411108196984", "el4265140411108531952", "el4265140411108515568", "el4265140411108494472", "el4265140411109141584", "el4265140411108106704", "el4265140411108107600", "el4265140411108108496", "el4265140411108109392", "el4265140411108110288", "el4265140411107607440", "el4265140411107608336", "el4265140411107609232"]}], "height": 480.0, "data": {"data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411108323960"], "collections": [], "xlim": [12551.0, 36.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411108178128"}], "xdomain": [12551.0, 36.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 4, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107955656"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107955152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107956440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107957336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107958232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107983768"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107984664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107985560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107986456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411107987352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108008792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108009688"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108010584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108011480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108037016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108037912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108038808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108039704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411108040600"}], "ydomain": [15.55, 36.45], "ylim": [15.55, 36.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411108624200"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411108624200"], "collections": [], "xlim": [225.0, 283.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411108326368"}], "xdomain": [225.0, 283.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [235, 244, 253, 262, 273], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108059120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107955320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108390224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108390168"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108354200"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108215048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108196984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108531952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108515568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108494472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109141584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108106704"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108107600"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108108496"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108109392"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411108110288"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107607440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107608336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411107609232"}], "ydomain": [15.55, 36.45], "ylim": [15.55, 36.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411108323960"}], "id": "el4265140411108702640"});
            })
         });
}
    
