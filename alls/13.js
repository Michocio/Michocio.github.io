

  

   

    
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
    
       mpld3.draw_figure("id13", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "type": "clickinfo", "ids": ["el4265140411100771608", "el4265140411100773456", "el4265140411100651872", "el4265140411100617248", "el4265140411100952112", "el4265140411100939152", "el4265140411100825808", "el4265140411100906720", "el4265140411100889664", "el4265140411101272048", "el4265140411100791024", "el4265140411101285456", "el4265140411101392736", "el4265140411101244664", "el4265140411100358528", "el4265140411100359424", "el4265140411100360320", "el4265140411100435008", "el4265140411100435904"]}, {"vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "type": "clickinfo", "ids": ["el4265140411100437976", "el4265140411100772728", "el4265140411100459192", "el4265140411100460088", "el4265140411100460984", "el4265140411100461880", "el4265140411100462776", "el4265140411100484216", "el4265140411100485112", "el4265140411100486008", "el4265140411100486904", "el4265140411100512440", "el4265140411100513336", "el4265140411100514232", "el4265140411100515128", "el4265140411100516024", "el4265140411100009080", "el4265140411100009976", "el4265140411100010872"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411100743776"], "collections": [], "xlim": [9368.5, 6.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411101284560"}], "xdomain": [9368.5, 6.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100771608"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100773456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100651872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100617248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100952112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100939152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100825808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100906720"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100889664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101272048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100791024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101285456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101392736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101244664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100358528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100359424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100360320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100435008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100435904"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411100572248"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411100572248"], "collections": [], "xlim": [210.0, 295.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411100770824"}], "xdomain": [210.0, 295.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [220, 236, 252, 268, 285], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100437976"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100772728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100459192"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100460088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100460984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100461880"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100462776"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100484216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100485112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100486008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100486904"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100512440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100513336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100514232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100515128"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100516024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100009080"}, {"edgecolor": "none", "dasharray": "none", "yindex": 8, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100009976"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100010872"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411100743776"}], "id": "el4265140411101838976"});
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
    
         mpld3.draw_figure("id13", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "type": "clickinfo", "ids": ["el4265140411100771608", "el4265140411100773456", "el4265140411100651872", "el4265140411100617248", "el4265140411100952112", "el4265140411100939152", "el4265140411100825808", "el4265140411100906720", "el4265140411100889664", "el4265140411101272048", "el4265140411100791024", "el4265140411101285456", "el4265140411101392736", "el4265140411101244664", "el4265140411100358528", "el4265140411100359424", "el4265140411100360320", "el4265140411100435008", "el4265140411100435904"]}, {"vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "type": "clickinfo", "ids": ["el4265140411100437976", "el4265140411100772728", "el4265140411100459192", "el4265140411100460088", "el4265140411100460984", "el4265140411100461880", "el4265140411100462776", "el4265140411100484216", "el4265140411100485112", "el4265140411100486008", "el4265140411100486904", "el4265140411100512440", "el4265140411100513336", "el4265140411100514232", "el4265140411100515128", "el4265140411100516024", "el4265140411100009080", "el4265140411100009976", "el4265140411100010872"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411100743776"], "collections": [], "xlim": [9368.5, 6.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411101284560"}], "xdomain": [9368.5, 6.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100771608"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100773456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100651872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100617248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100952112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100939152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100825808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100906720"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100889664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101272048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100791024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101285456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101392736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101244664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100358528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100359424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100360320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100435008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100435904"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411100572248"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411100572248"], "collections": [], "xlim": [210.0, 295.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411100770824"}], "xdomain": [210.0, 295.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [220, 236, 252, 268, 285], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100437976"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100772728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100459192"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100460088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100460984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100461880"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100462776"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100484216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100485112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100486008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100486904"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100512440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100513336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100514232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100515128"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100516024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100009080"}, {"edgecolor": "none", "dasharray": "none", "yindex": 8, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100009976"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100010872"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411100743776"}], "id": "el4265140411101838976"});
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
    
                 mpld3.draw_figure("id13", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "type": "clickinfo", "ids": ["el4265140411100771608", "el4265140411100773456", "el4265140411100651872", "el4265140411100617248", "el4265140411100952112", "el4265140411100939152", "el4265140411100825808", "el4265140411100906720", "el4265140411100889664", "el4265140411101272048", "el4265140411100791024", "el4265140411101285456", "el4265140411101392736", "el4265140411101244664", "el4265140411100358528", "el4265140411100359424", "el4265140411100360320", "el4265140411100435008", "el4265140411100435904"]}, {"vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "low": 16, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]], "type": "clickinfo", "ids": ["el4265140411100437976", "el4265140411100772728", "el4265140411100459192", "el4265140411100460088", "el4265140411100460984", "el4265140411100461880", "el4265140411100462776", "el4265140411100484216", "el4265140411100485112", "el4265140411100486008", "el4265140411100486904", "el4265140411100512440", "el4265140411100513336", "el4265140411100514232", "el4265140411100515128", "el4265140411100516024", "el4265140411100009080", "el4265140411100009976", "el4265140411100010872"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411100743776"], "collections": [], "xlim": [9368.5, 6.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411101284560"}], "xdomain": [9368.5, 6.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100771608"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100773456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100651872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100617248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100952112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100939152"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100825808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100906720"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100889664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101272048"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100791024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101285456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101392736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411101244664"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100358528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100359424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100360320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100435008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411100435904"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411100572248"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411100572248"], "collections": [], "xlim": [210.0, 295.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411100770824"}], "xdomain": [210.0, 295.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [220, 236, 252, 268, 285], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100437976"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100772728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100459192"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100460088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100460984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100461880"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100462776"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100484216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100485112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100486008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100486904"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100512440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100513336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100514232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100515128"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100516024"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100009080"}, {"edgecolor": "none", "dasharray": "none", "yindex": 8, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100009976"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411100010872"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411100743776"}], "id": "el4265140411101838976"});
            })
         });
}
    
