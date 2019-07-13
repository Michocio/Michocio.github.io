

<style>

</style>

<div id="id16"></div>
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
    
       mpld3.draw_figure("id16", {"id": "el6928140242914756592", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "type": "clickinfo", "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "low": 17, "ids": ["el6928140242914606888", "el6928140242914606384", "el6928140242914644656", "el6928140242914645552", "el6928140242914646448", "el6928140242914647344", "el6928140242914668784", "el6928140242914669680", "el6928140242914670576", "el6928140242914671472", "el6928140242914672368", "el6928140242914693808", "el6928140242914694704", "el6928140242914695600", "el6928140242914696496", "el6928140242914717936", "el6928140242914718832"]}, {"wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "type": "clickinfo", "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "low": 17, "ids": ["el6928140242914720848", "el6928140242914606552", "el6928140242914721576", "el6928140242914890472", "el6928140242914891368", "el6928140242914892264", "el6928140242914893160", "el6928140242914242856", "el6928140242914243752", "el6928140242914244648", "el6928140242914245544", "el6928140242914246440", "el6928140242914267880", "el6928140242914268776", "el6928140242914269672", "el6928140242914270568", "el6928140242914292008"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915247440", "zoomable": true, "sharey": ["el6928140242914987592"], "yscale": "linear", "texts": [{"id": "el6928140242915206536", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8059.75, 101.0], "xscale": "linear", "ydomain": [15.65, 34.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.65, 34.35], "paths": [{"id": "el6928140242914606888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914606384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914644656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914645552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914646448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914647344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914668784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914669680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914670576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914671472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914672368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914693808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914694704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914695600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914696496", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914717936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914718832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8059.75, 101.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [213, 223, 233, 243, 256], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242914987592", "zoomable": true, "sharey": ["el6928140242915247440"], "yscale": "linear", "texts": [{"id": "el6928140242914490352", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [203.0, 266.0], "xscale": "linear", "ydomain": [15.65, 34.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.65, 34.35], "paths": [{"id": "el6928140242914720848", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914606552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914721576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914890472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914891368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914892264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914893160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914242856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914243752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914244648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914245544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914246440", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914267880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914268776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914269672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914270568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914292008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [203.0, 266.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.0], [1181.0, 27.5, 247.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.0], [2415.0, 20.5, 234.0], [0.0, 20.5, 0.0]], "data17": [[0.0, 32.5], [1064.0, 32.5], [1064.0, 33.5], [0.0, 33.5]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.0], [1628.0, 24.5, 252.0], [0.0, 24.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0], [191.0, 19.5, 213.0], [0.0, 19.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.0], [5785.0, 26.5, 244.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.0], [3987.0, 29.5, 237.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.0], [126.0, 18.5, 222.0], [0.0, 18.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.0], [1313.0, 21.5, 236.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.0], [101.0, 17.5, 251.0], [0.0, 17.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.0], [2854.0, 25.5, 240.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.0], [556.0, 22.5, 214.0], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.0], [6468.0, 32.5, 243.0], [0.0, 32.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.0], [226.0, 28.5, 231.0], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0], [4862.0, 31.5, 256.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 22.5, 0.0, 32.5], [2256.0, 22.5, 246.0, 32.5], [2256.0, 23.5, 246.0, 33.5], [0.0, 23.5, 0.0, 33.5]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id16", {"id": "el6928140242914756592", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "type": "clickinfo", "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "low": 17, "ids": ["el6928140242914606888", "el6928140242914606384", "el6928140242914644656", "el6928140242914645552", "el6928140242914646448", "el6928140242914647344", "el6928140242914668784", "el6928140242914669680", "el6928140242914670576", "el6928140242914671472", "el6928140242914672368", "el6928140242914693808", "el6928140242914694704", "el6928140242914695600", "el6928140242914696496", "el6928140242914717936", "el6928140242914718832"]}, {"wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "type": "clickinfo", "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "low": 17, "ids": ["el6928140242914720848", "el6928140242914606552", "el6928140242914721576", "el6928140242914890472", "el6928140242914891368", "el6928140242914892264", "el6928140242914893160", "el6928140242914242856", "el6928140242914243752", "el6928140242914244648", "el6928140242914245544", "el6928140242914246440", "el6928140242914267880", "el6928140242914268776", "el6928140242914269672", "el6928140242914270568", "el6928140242914292008"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915247440", "zoomable": true, "sharey": ["el6928140242914987592"], "yscale": "linear", "texts": [{"id": "el6928140242915206536", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8059.75, 101.0], "xscale": "linear", "ydomain": [15.65, 34.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.65, 34.35], "paths": [{"id": "el6928140242914606888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914606384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914644656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914645552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914646448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914647344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914668784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914669680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914670576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914671472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914672368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914693808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914694704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914695600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914696496", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914717936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914718832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8059.75, 101.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [213, 223, 233, 243, 256], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242914987592", "zoomable": true, "sharey": ["el6928140242915247440"], "yscale": "linear", "texts": [{"id": "el6928140242914490352", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [203.0, 266.0], "xscale": "linear", "ydomain": [15.65, 34.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.65, 34.35], "paths": [{"id": "el6928140242914720848", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914606552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914721576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914890472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914891368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914892264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914893160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914242856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914243752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914244648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914245544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914246440", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914267880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914268776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914269672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914270568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914292008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [203.0, 266.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.0], [1181.0, 27.5, 247.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.0], [2415.0, 20.5, 234.0], [0.0, 20.5, 0.0]], "data17": [[0.0, 32.5], [1064.0, 32.5], [1064.0, 33.5], [0.0, 33.5]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.0], [1628.0, 24.5, 252.0], [0.0, 24.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0], [191.0, 19.5, 213.0], [0.0, 19.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.0], [5785.0, 26.5, 244.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.0], [3987.0, 29.5, 237.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.0], [126.0, 18.5, 222.0], [0.0, 18.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.0], [1313.0, 21.5, 236.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.0], [101.0, 17.5, 251.0], [0.0, 17.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.0], [2854.0, 25.5, 240.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.0], [556.0, 22.5, 214.0], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.0], [6468.0, 32.5, 243.0], [0.0, 32.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.0], [226.0, 28.5, 231.0], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0], [4862.0, 31.5, 256.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 22.5, 0.0, 32.5], [2256.0, 22.5, 246.0, 32.5], [2256.0, 23.5, 246.0, 33.5], [0.0, 23.5, 0.0, 33.5]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id16", {"id": "el6928140242914756592", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "type": "clickinfo", "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "low": 17, "ids": ["el6928140242914606888", "el6928140242914606384", "el6928140242914644656", "el6928140242914645552", "el6928140242914646448", "el6928140242914647344", "el6928140242914668784", "el6928140242914669680", "el6928140242914670576", "el6928140242914671472", "el6928140242914672368", "el6928140242914693808", "el6928140242914694704", "el6928140242914695600", "el6928140242914696496", "el6928140242914717936", "el6928140242914718832"]}, {"wiek": {"32": [9243, 10846, 20309, 1054], "33": [23312], "17": [1095517], "18": [942673, 1095518, 433408], "19": [309143], "20": [303325, 770897], "21": [261287, 320650], "22": [216046], "23": [185473], "24": [165592, 235294], "25": [176635, 183339], "26": [168517, 179595, 83827, 114652], "27": [8449], "28": [43092], "29": [62172, 12230, 70823, 3187, 51040, 56304], "31": [67106, 8374]}, "alls": [["Szymon Paw\u0142owski", [2965, 253]], ["Zarko Udovicic", [2731, 267]], ["Piotr Polczak", [2384, 239]], ["Michael Heinloth", [2265, 238]], ["Vamara Sanogo", [2256, 246]], ["Patrik Mraz", [2131, 241]], ["Mateusz Cichocki", [1997, 249]], ["Konrad Wrzesi\u0144ski", [1857, 242]], ["Sebastian Milewski", [1750, 234]], ["Arkadiusz J\u0119drych", [1425, 247]], ["Giorgos Mygas", [1342, 257]], ["Tomasz Nawotka", [1201, 240]], ["Mateusz Mo\u017cd\u017ce\u0144", [1181, 247]], ["Tomasz Nowak", [1064, 246]], ["Alexander Cristovao", [997, 237]], ["Adam Banasiak", [992, 236]], ["Lukas Gressak", [879, 258]], ["Bart\u0142omiej Babiarz", [795, 232]], ["Martin Toth", [792, 230]], ["Olaf Nowak", [665, 235]], ["Giorgi Gabedava", [640, 235]], ["Dejan Vokic", [556, 214]], ["Giorgi Ivanishvili", [348, 206]], ["David Ryndak", [333, 227]], ["Adam Kokoszka", [327, 222]], ["Nuno Malheiro", [286, 227]], ["Junior Torunarigha", [226, 231]], ["Tymoteusz Puchacz", [191, 213]], ["Callum Rzonca", [112, 194]], ["Kacper Radkowski", [101, 251]], ["Giacomo Mello", [98, 216]], ["Roman Janicki", [46, 235]], ["Tomasz Pietrzak", [46, 217]], ["Konrad Kumor", [34, 213]]], "vals": {"32": [6468, 243], "33": [1064, 246], "17": [101, 251], "18": [126, 222], "19": [191, 213], "20": [2415, 234], "21": [1313, 236], "22": [556, 214], "23": [2256, 246], "24": [1628, 252], "25": [2854, 240], "26": [5785, 244], "27": [1181, 247], "28": [226, 231], "29": [3987, 237], "31": [4862, 256]}, "type": "clickinfo", "players": {"433408": ["Konrad Kumor", 34, 213], "185473": ["Vamara Sanogo", 2256, 246], "168517": ["Michael Heinloth", 2265, 238], "12230": ["Lukas Gressak", 879, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 1181, 247], "320650": ["Callum Rzonca", 112, 194], "179595": ["Mateusz Cichocki", 1997, 249], "23312": ["Tomasz Nowak", 1064, 246], "770897": ["Olaf Nowak", 665, 235], "43092": ["Junior Torunarigha", 226, 231], "20309": ["Martin Toth", 792, 230], "309143": ["Tymoteusz Puchacz", 191, 213], "165592": ["Giorgos Mygas", 1342, 257], "9243": ["Szymon Paw\u0142owski", 2965, 253], "114652": ["Giacomo Mello", 98, 216], "303325": ["Sebastian Milewski", 1750, 234], "1095518": ["Tomasz Pietrzak", 46, 217], "51040": ["Giorgi Ivanishvili", 348, 206], "67106": ["Zarko Udovicic", 2731, 267], "176635": ["Konrad Wrzesi\u0144ski", 1857, 242], "942673": ["Roman Janicki", 46, 235], "62172": ["Adam Banasiak", 992, 236], "1054": ["Adam Kokoszka", 327, 222], "183339": ["Alexander Cristovao", 997, 237], "216046": ["Dejan Vokic", 556, 214], "1095517": ["Kacper Radkowski", 101, 251], "56304": ["David Ryndak", 333, 227], "261287": ["Tomasz Nawotka", 1201, 240], "3187": ["Giorgi Gabedava", 640, 235], "10846": ["Piotr Polczak", 2384, 239], "235294": ["Nuno Malheiro", 286, 227], "8374": ["Patrik Mraz", 2131, 241], "83827": ["Arkadiusz J\u0119drych", 1425, 247], "70823": ["Bart\u0142omiej Babiarz", 795, 232]}, "low": 17, "ids": ["el6928140242914720848", "el6928140242914606552", "el6928140242914721576", "el6928140242914890472", "el6928140242914891368", "el6928140242914892264", "el6928140242914893160", "el6928140242914242856", "el6928140242914243752", "el6928140242914244648", "el6928140242914245544", "el6928140242914246440", "el6928140242914267880", "el6928140242914268776", "el6928140242914269672", "el6928140242914270568", "el6928140242914292008"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915247440", "zoomable": true, "sharey": ["el6928140242914987592"], "yscale": "linear", "texts": [{"id": "el6928140242915206536", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [8059.75, 101.0], "xscale": "linear", "ydomain": [15.65, 34.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.65, 34.35], "paths": [{"id": "el6928140242914606888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914606384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914644656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914645552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914646448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914647344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914668784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914669680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914670576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914671472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914672368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914693808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914694704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914695600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914696496", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914717936", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914718832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [8059.75, 101.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [213, 223, 233, 243, 256], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242914987592", "zoomable": true, "sharey": ["el6928140242915247440"], "yscale": "linear", "texts": [{"id": "el6928140242914490352", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [203.0, 266.0], "xscale": "linear", "ydomain": [15.65, 34.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.65, 34.35], "paths": [{"id": "el6928140242914720848", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914606552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914721576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914890472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914891368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914892264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914893160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914242856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914243752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914244648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914245544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914246440", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914267880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914268776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914269672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914270568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242914292008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [203.0, 266.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 26.5, 0.0], [1181.0, 26.5, 247.0], [1181.0, 27.5, 247.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [2415.0, 19.5, 234.0], [2415.0, 20.5, 234.0], [0.0, 20.5, 0.0]], "data17": [[0.0, 32.5], [1064.0, 32.5], [1064.0, 33.5], [0.0, 33.5]], "data14": [[0.0, 29.5], [0.0, 29.5], [0.0, 30.5], [0.0, 30.5]], "data08": [[0.0, 23.5, 0.0], [1628.0, 23.5, 252.0], [1628.0, 24.5, 252.0], [0.0, 24.5, 0.0]], "data03": [[0.0, 18.5, 0.0], [191.0, 18.5, 213.0], [191.0, 19.5, 213.0], [0.0, 19.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [5785.0, 25.5, 244.0], [5785.0, 26.5, 244.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [3987.0, 28.5, 237.0], [3987.0, 29.5, 237.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [126.0, 17.5, 222.0], [126.0, 18.5, 222.0], [0.0, 18.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1313.0, 20.5, 236.0], [1313.0, 21.5, 236.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0], [101.0, 16.5, 251.0], [101.0, 17.5, 251.0], [0.0, 17.5, 0.0]], "data09": [[0.0, 24.5, 0.0], [2854.0, 24.5, 240.0], [2854.0, 25.5, 240.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [556.0, 21.5, 214.0], [556.0, 22.5, 214.0], [0.0, 22.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [6468.0, 31.5, 243.0], [6468.0, 32.5, 243.0], [0.0, 32.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [226.0, 27.5, 231.0], [226.0, 28.5, 231.0], [0.0, 28.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [4862.0, 30.5, 256.0], [4862.0, 31.5, 256.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 22.5, 0.0, 32.5], [2256.0, 22.5, 246.0, 32.5], [2256.0, 23.5, 246.0, 33.5], [0.0, 23.5, 0.0, 33.5]]}, "width": 640.0});
            })
         });
}
</script>
