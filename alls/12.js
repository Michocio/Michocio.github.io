

 

 

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
    
       mpld3.draw_figure("id12", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "ids": ["el10757139727012683560", "el10757139727012683056", "el10757139727012708984", "el10757139727012709880", "el10757139727012710776", "el10757139727012711672", "el10757139727012729016", "el10757139727012729912", "el10757139727012730808", "el10757139727012731704", "el10757139727012732600", "el10757139727012229752", "el10757139727012230648", "el10757139727012231544", "el10757139727012232440", "el10757139727012257976", "el10757139727012258872", "el10757139727012259768", "el10757139727012260664", "el10757139727012261560"], "type": "clickinfo", "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17}, {"alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "ids": ["el10757139727012284176", "el10757139727012683224", "el10757139727012284848", "el10757139727012285744", "el10757139727012307184", "el10757139727012308080", "el10757139727012308976", "el10757139727012309872", "el10757139727012310768", "el10757139727012332208", "el10757139727012333104", "el10757139727012334000", "el10757139727012334896", "el10757139727012360432", "el10757139727012361328", "el10757139727012362224", "el10757139727012363120", "el10757139727012364016", "el10757139727012385456", "el10757139727012386352"], "type": "clickinfo", "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17}], "height": 480.0, "id": "el10757139727013432624", "data": {"data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727012931512", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8682.5, 5.0], "ydomain": [15.5, 37.5], "sharex": [], "xlim": [8682.5, 5.0], "images": [], "sharey": ["el10757139727012535768"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 20, "fontsize": 10.0, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727012929720", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [15.5, 37.5], "paths": [{"xindex": 0, "id": "el10757139727012683560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727012683056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727012708984", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727012709880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727012710776", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727012711672", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727012729016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727012729912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 0, "id": "el10757139727012730808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727012731704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727012732600", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 0, "id": "el10757139727012229752", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727012230648", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 0, "id": "el10757139727012231544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727012232440", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727012257976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727012258872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727012259768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727012260664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 0, "id": "el10757139727012261560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727012558720", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [228.0, 283.0], "ydomain": [15.5, 37.5], "sharex": [], "xlim": [228.0, 283.0], "images": [], "sharey": ["el10757139727012929720"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [238, 246, 254, 262, 273], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 20, "fontsize": null, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727012535768", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [15.5, 37.5], "paths": [{"xindex": 2, "id": "el10757139727012284176", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727012683224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727012284848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727012285744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727012307184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727012308080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727012308976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727012309872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data01"}, {"xindex": 2, "id": "el10757139727012310768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data06"}, {"xindex": 2, "id": "el10757139727012332208", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727012333104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data01"}, {"xindex": 2, "id": "el10757139727012334000", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727012334896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data01"}, {"xindex": 2, "id": "el10757139727012360432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727012361328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727012362224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727012363120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data08"}, {"xindex": 2, "id": "el10757139727012364016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727012385456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 8, "data": "data01"}, {"xindex": 2, "id": "el10757139727012386352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
         mpld3.draw_figure("id12", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "ids": ["el10757139727012683560", "el10757139727012683056", "el10757139727012708984", "el10757139727012709880", "el10757139727012710776", "el10757139727012711672", "el10757139727012729016", "el10757139727012729912", "el10757139727012730808", "el10757139727012731704", "el10757139727012732600", "el10757139727012229752", "el10757139727012230648", "el10757139727012231544", "el10757139727012232440", "el10757139727012257976", "el10757139727012258872", "el10757139727012259768", "el10757139727012260664", "el10757139727012261560"], "type": "clickinfo", "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17}, {"alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "ids": ["el10757139727012284176", "el10757139727012683224", "el10757139727012284848", "el10757139727012285744", "el10757139727012307184", "el10757139727012308080", "el10757139727012308976", "el10757139727012309872", "el10757139727012310768", "el10757139727012332208", "el10757139727012333104", "el10757139727012334000", "el10757139727012334896", "el10757139727012360432", "el10757139727012361328", "el10757139727012362224", "el10757139727012363120", "el10757139727012364016", "el10757139727012385456", "el10757139727012386352"], "type": "clickinfo", "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17}], "height": 480.0, "id": "el10757139727013432624", "data": {"data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727012931512", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8682.5, 5.0], "ydomain": [15.5, 37.5], "sharex": [], "xlim": [8682.5, 5.0], "images": [], "sharey": ["el10757139727012535768"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 20, "fontsize": 10.0, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727012929720", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [15.5, 37.5], "paths": [{"xindex": 0, "id": "el10757139727012683560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727012683056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727012708984", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727012709880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727012710776", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727012711672", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727012729016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727012729912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 0, "id": "el10757139727012730808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727012731704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727012732600", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 0, "id": "el10757139727012229752", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727012230648", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 0, "id": "el10757139727012231544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727012232440", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727012257976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727012258872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727012259768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727012260664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 0, "id": "el10757139727012261560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727012558720", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [228.0, 283.0], "ydomain": [15.5, 37.5], "sharex": [], "xlim": [228.0, 283.0], "images": [], "sharey": ["el10757139727012929720"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [238, 246, 254, 262, 273], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 20, "fontsize": null, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727012535768", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [15.5, 37.5], "paths": [{"xindex": 2, "id": "el10757139727012284176", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727012683224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727012284848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727012285744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727012307184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727012308080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727012308976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727012309872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data01"}, {"xindex": 2, "id": "el10757139727012310768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data06"}, {"xindex": 2, "id": "el10757139727012332208", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727012333104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data01"}, {"xindex": 2, "id": "el10757139727012334000", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727012334896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data01"}, {"xindex": 2, "id": "el10757139727012360432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727012361328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727012362224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727012363120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data08"}, {"xindex": 2, "id": "el10757139727012364016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727012385456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 8, "data": "data01"}, {"xindex": 2, "id": "el10757139727012386352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
                 mpld3.draw_figure("id12", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "ids": ["el10757139727012683560", "el10757139727012683056", "el10757139727012708984", "el10757139727012709880", "el10757139727012710776", "el10757139727012711672", "el10757139727012729016", "el10757139727012729912", "el10757139727012730808", "el10757139727012731704", "el10757139727012732600", "el10757139727012229752", "el10757139727012230648", "el10757139727012231544", "el10757139727012232440", "el10757139727012257976", "el10757139727012258872", "el10757139727012259768", "el10757139727012260664", "el10757139727012261560"], "type": "clickinfo", "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17}, {"alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]], "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "ids": ["el10757139727012284176", "el10757139727012683224", "el10757139727012284848", "el10757139727012285744", "el10757139727012307184", "el10757139727012308080", "el10757139727012308976", "el10757139727012309872", "el10757139727012310768", "el10757139727012332208", "el10757139727012333104", "el10757139727012334000", "el10757139727012334896", "el10757139727012360432", "el10757139727012361328", "el10757139727012362224", "el10757139727012363120", "el10757139727012364016", "el10757139727012385456", "el10757139727012386352"], "type": "clickinfo", "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "low": 17}], "height": 480.0, "id": "el10757139727013432624", "data": {"data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727012931512", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8682.5, 5.0], "ydomain": [15.5, 37.5], "sharex": [], "xlim": [8682.5, 5.0], "images": [], "sharey": ["el10757139727012535768"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 20, "fontsize": 10.0, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727012929720", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [15.5, 37.5], "paths": [{"xindex": 0, "id": "el10757139727012683560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727012683056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727012708984", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data02"}, {"xindex": 0, "id": "el10757139727012709880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727012710776", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727012711672", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727012729016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727012729912", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data02"}, {"xindex": 0, "id": "el10757139727012730808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727012731704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727012732600", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data02"}, {"xindex": 0, "id": "el10757139727012229752", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727012230648", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data02"}, {"xindex": 0, "id": "el10757139727012231544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727012232440", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727012257976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727012258872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727012259768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727012260664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data02"}, {"xindex": 0, "id": "el10757139727012261560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727012558720", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [228.0, 283.0], "ydomain": [15.5, 37.5], "sharex": [], "xlim": [228.0, 283.0], "images": [], "sharey": ["el10757139727012929720"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [238, 246, 254, 262, 273], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 20, "fontsize": null, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727012535768", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [15.5, 37.5], "paths": [{"xindex": 2, "id": "el10757139727012284176", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727012683224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727012284848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727012285744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727012307184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727012308080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727012308976", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727012309872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data01"}, {"xindex": 2, "id": "el10757139727012310768", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data06"}, {"xindex": 2, "id": "el10757139727012332208", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727012333104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data01"}, {"xindex": 2, "id": "el10757139727012334000", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727012334896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data01"}, {"xindex": 2, "id": "el10757139727012360432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727012361328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727012362224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727012363120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data08"}, {"xindex": 2, "id": "el10757139727012364016", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727012385456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 8, "data": "data01"}, {"xindex": 2, "id": "el10757139727012386352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
