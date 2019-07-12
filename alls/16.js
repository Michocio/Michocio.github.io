

 

 


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
    
       mpld3.draw_figure("id16", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "ids": ["el10757139727009993896", "el10757139727009993392", "el10757139727009994680", "el10757139727009995576", "el10757139727009996472", "el10757139727010026104", "el10757139727010027000", "el10757139727010027896", "el10757139727010028792", "el10757139727010050232", "el10757139727010051128", "el10757139727010052024", "el10757139727010052920", "el10757139727010053816", "el10757139727010075256", "el10757139727010076152", "el10757139727010077048"], "type": "clickinfo", "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "low": 17}, {"alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "ids": ["el10757139727010103760", "el10757139727009993616", "el10757139727010104432", "el10757139727010105328", "el10757139727010106224", "el10757139727010107120", "el10757139727010128560", "el10757139727010129456", "el10757139727010130352", "el10757139727010131248", "el10757139727009632496", "el10757139727009633392", "el10757139727009634288", "el10757139727009635184", "el10757139727009636080", "el10757139727009653424", "el10757139727009654320"], "type": "clickinfo", "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "low": 17}], "height": 480.0, "id": "el10757139727018992024", "data": {"data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.0], [126.0, 18.5, 222.0], [0.0, 18.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.0], [101.0, 17.5, 251.0], [0.0, 17.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0], [191.0, 19.5, 213.0], [0.0, 19.5, 0.0]], "data07": [[0.0, 22.5, 0.0, 32.5], [2256.0, 22.5, 246.0, 32.5], [2256.0, 23.5, 246.0, 33.5], [0.0, 23.5, 0.0, 33.5]], "data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.0], [3987.0, 29.5, 237.0], [0.0, 29.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.0], [2854.0, 25.5, 240.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.0], [226.0, 28.5, 231.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.0], [1628.0, 24.5, 252.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.0], [1313.0, 21.5, 236.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.0], [556.0, 22.5, 214.0], [0.0, 22.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.0], [2415.0, 20.5, 234.0], [0.0, 20.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.0], [1181.0, 27.5, 247.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.0], [5785.0, 26.5, 244.0], [0.0, 26.5, 0.0]], "data17": [[0.0, 32.5], [1064.0, 32.5], [1064.0, 33.5], [0.0, 33.5]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0], [4862.0, 31.5, 256.0], [0.0, 31.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.0], [6468.0, 32.5, 243.0], [0.0, 32.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727010253232", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8059.75, 101.0], "ydomain": [15.65, 34.35], "sharex": [], "xlim": [8059.75, 101.0], "images": [], "sharey": ["el10757139727010374376"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727010250824", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [15.65, 34.35], "paths": [{"xindex": 0, "id": "el10757139727009993896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727009993392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727009994680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727009995576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727009996472", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727010026104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727010027000", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727010027896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727010028792", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727010050232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727010051128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727010052024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727010052920", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727010053816", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727010075256", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727010076152", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}, {"xindex": 0, "id": "el10757139727010077048", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data17"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727010376784", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [203.0, 266.0], "ydomain": [15.65, 34.35], "sharex": [], "xlim": [203.0, 266.0], "images": [], "sharey": ["el10757139727010250824"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [213, 223, 233, 243, 256], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727010374376", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [15.65, 34.35], "paths": [{"xindex": 2, "id": "el10757139727010103760", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727009993616", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727010104432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727010105328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727010106224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727010107120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727010128560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727010129456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727010130352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727010131248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727009632496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727009633392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727009634288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727009635184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727009636080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 2, "id": "el10757139727009653424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}, {"xindex": 2, "id": "el10757139727009654320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data07"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
         mpld3.draw_figure("id16", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "ids": ["el10757139727009993896", "el10757139727009993392", "el10757139727009994680", "el10757139727009995576", "el10757139727009996472", "el10757139727010026104", "el10757139727010027000", "el10757139727010027896", "el10757139727010028792", "el10757139727010050232", "el10757139727010051128", "el10757139727010052024", "el10757139727010052920", "el10757139727010053816", "el10757139727010075256", "el10757139727010076152", "el10757139727010077048"], "type": "clickinfo", "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "low": 17}, {"alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "ids": ["el10757139727010103760", "el10757139727009993616", "el10757139727010104432", "el10757139727010105328", "el10757139727010106224", "el10757139727010107120", "el10757139727010128560", "el10757139727010129456", "el10757139727010130352", "el10757139727010131248", "el10757139727009632496", "el10757139727009633392", "el10757139727009634288", "el10757139727009635184", "el10757139727009636080", "el10757139727009653424", "el10757139727009654320"], "type": "clickinfo", "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "low": 17}], "height": 480.0, "id": "el10757139727018992024", "data": {"data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.0], [126.0, 18.5, 222.0], [0.0, 18.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.0], [101.0, 17.5, 251.0], [0.0, 17.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0], [191.0, 19.5, 213.0], [0.0, 19.5, 0.0]], "data07": [[0.0, 22.5, 0.0, 32.5], [2256.0, 22.5, 246.0, 32.5], [2256.0, 23.5, 246.0, 33.5], [0.0, 23.5, 0.0, 33.5]], "data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.0], [3987.0, 29.5, 237.0], [0.0, 29.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.0], [2854.0, 25.5, 240.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.0], [226.0, 28.5, 231.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.0], [1628.0, 24.5, 252.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.0], [1313.0, 21.5, 236.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.0], [556.0, 22.5, 214.0], [0.0, 22.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.0], [2415.0, 20.5, 234.0], [0.0, 20.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.0], [1181.0, 27.5, 247.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.0], [5785.0, 26.5, 244.0], [0.0, 26.5, 0.0]], "data17": [[0.0, 32.5], [1064.0, 32.5], [1064.0, 33.5], [0.0, 33.5]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0], [4862.0, 31.5, 256.0], [0.0, 31.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.0], [6468.0, 32.5, 243.0], [0.0, 32.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727010253232", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8059.75, 101.0], "ydomain": [15.65, 34.35], "sharex": [], "xlim": [8059.75, 101.0], "images": [], "sharey": ["el10757139727010374376"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727010250824", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [15.65, 34.35], "paths": [{"xindex": 0, "id": "el10757139727009993896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727009993392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727009994680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727009995576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727009996472", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727010026104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727010027000", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727010027896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727010028792", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727010050232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727010051128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727010052024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727010052920", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727010053816", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727010075256", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727010076152", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}, {"xindex": 0, "id": "el10757139727010077048", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data17"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727010376784", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [203.0, 266.0], "ydomain": [15.65, 34.35], "sharex": [], "xlim": [203.0, 266.0], "images": [], "sharey": ["el10757139727010250824"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [213, 223, 233, 243, 256], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727010374376", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [15.65, 34.35], "paths": [{"xindex": 2, "id": "el10757139727010103760", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727009993616", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727010104432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727010105328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727010106224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727010107120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727010128560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727010129456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727010130352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727010131248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727009632496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727009633392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727009634288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727009635184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727009636080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 2, "id": "el10757139727009653424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}, {"xindex": 2, "id": "el10757139727009654320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data07"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
                 mpld3.draw_figure("id16", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "ids": ["el10757139727009993896", "el10757139727009993392", "el10757139727009994680", "el10757139727009995576", "el10757139727009996472", "el10757139727010026104", "el10757139727010027000", "el10757139727010027896", "el10757139727010028792", "el10757139727010050232", "el10757139727010051128", "el10757139727010052024", "el10757139727010052920", "el10757139727010053816", "el10757139727010075256", "el10757139727010076152", "el10757139727010077048"], "type": "clickinfo", "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "low": 17}, {"alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "ids": ["el10757139727010103760", "el10757139727009993616", "el10757139727010104432", "el10757139727010105328", "el10757139727010106224", "el10757139727010107120", "el10757139727010128560", "el10757139727010129456", "el10757139727010130352", "el10757139727010131248", "el10757139727009632496", "el10757139727009633392", "el10757139727009634288", "el10757139727009635184", "el10757139727009636080", "el10757139727009653424", "el10757139727009654320"], "type": "clickinfo", "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "low": 17}], "height": 480.0, "id": "el10757139727018992024", "data": {"data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.0], [126.0, 18.5, 222.0], [0.0, 18.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.0], [101.0, 17.5, 251.0], [0.0, 17.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0], [191.0, 19.5, 213.0], [0.0, 19.5, 0.0]], "data07": [[0.0, 22.5, 0.0, 32.5], [2256.0, 22.5, 246.0, 32.5], [2256.0, 23.5, 246.0, 33.5], [0.0, 23.5, 0.0, 33.5]], "data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.0], [3987.0, 29.5, 237.0], [0.0, 29.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.0], [2854.0, 25.5, 240.0], [0.0, 25.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.0], [226.0, 28.5, 231.0], [0.0, 28.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.0], [1628.0, 24.5, 252.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.0], [1313.0, 21.5, 236.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.0], [556.0, 22.5, 214.0], [0.0, 22.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.0], [2415.0, 20.5, 234.0], [0.0, 20.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.0], [1181.0, 27.5, 247.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.0], [5785.0, 26.5, 244.0], [0.0, 26.5, 0.0]], "data17": [[0.0, 32.5], [1064.0, 32.5], [1064.0, 33.5], [0.0, 33.5]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0], [4862.0, 31.5, 256.0], [0.0, 31.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.0], [6468.0, 32.5, 243.0], [0.0, 32.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727010253232", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [8059.75, 101.0], "ydomain": [15.65, 34.35], "sharex": [], "xlim": [8059.75, 101.0], "images": [], "sharey": ["el10757139727010374376"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": 10.0, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727010250824", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [15.65, 34.35], "paths": [{"xindex": 0, "id": "el10757139727009993896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727009993392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727009994680", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727009995576", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727009996472", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727010026104", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727010027000", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727010027896", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727010028792", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727010050232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727010051128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727010052024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727010052920", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727010053816", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727010075256", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727010076152", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}, {"xindex": 0, "id": "el10757139727010077048", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data17"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727010376784", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [203.0, 266.0], "ydomain": [15.65, 34.35], "sharex": [], "xlim": [203.0, 266.0], "images": [], "sharey": ["el10757139727010250824"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [213, 223, 233, 243, 256], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 17, "fontsize": null, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727010374376", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [15.65, 34.35], "paths": [{"xindex": 2, "id": "el10757139727010103760", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727009993616", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727010104432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727010105328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 2, "id": "el10757139727010106224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727010107120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727010128560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727010129456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727010130352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727010131248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 2, "id": "el10757139727009632496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727009633392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727009634288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727009635184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727009636080", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 2, "id": "el10757139727009653424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}, {"xindex": 2, "id": "el10757139727009654320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data07"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
