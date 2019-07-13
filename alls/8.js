

<style>

</style>

<div id="id8"></div>
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
    
       mpld3.draw_figure("id8", {"id": "el6928140242921238144", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}, "type": "clickinfo", "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "low": 16, "ids": ["el6928140242920249608", "el6928140242920249104", "el6928140242920250448", "el6928140242920251344", "el6928140242920280976", "el6928140242920281872", "el6928140242920282768", "el6928140242920283664", "el6928140242920301008", "el6928140242920301904", "el6928140242920302800", "el6928140242920303696", "el6928140242920304592", "el6928140242920326032", "el6928140242920326928", "el6928140242920327824", "el6928140242920328720", "el6928140242920350160", "el6928140242920351056"]}, {"wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}, "type": "clickinfo", "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "low": 16, "ids": ["el6928140242920353072", "el6928140242920249272", "el6928140242920353688", "el6928140242920375240", "el6928140242920376136", "el6928140242920377032", "el6928140242920377928", "el6928140242920399368", "el6928140242920400264", "el6928140242920401160", "el6928140242920402056", "el6928140242920402840", "el6928140242920428488", "el6928140242920429384", "el6928140242920430280", "el6928140242920431176", "el6928140242920715992", "el6928140242920715712", "el6928140242920627728"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242920947328", "zoomable": true, "sharey": ["el6928140242920624760"], "yscale": "linear", "texts": [{"id": "el6928140242920998896", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [6844.0, 234.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242920249608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920249104", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920250448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920251344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920280976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920281872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920282768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920283664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920301008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920301904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920302800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920303696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920304592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920326032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920326928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920327824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920328720", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920350160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920351056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [6844.0, 234.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [224, 236, 248, 260, 275], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242920624760", "zoomable": true, "sharey": ["el6928140242920947328"], "yscale": "linear", "texts": [{"id": "el6928140242920627168", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [214.0, 285.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242920353072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920249272", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920353688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920375240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920376136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920377032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920377928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920399368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920400264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920401160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920402056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920402840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920428488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920429384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920430280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920431176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920715992", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920715712", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920627728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [214.0, 285.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.0], [2292.0, 29.5, 251.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.0], [4384.0, 20.5, 275.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.0], [2123.0, 32.5, 267.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.0], [5522.0, 26.5, 260.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.0], [1067.0, 18.5, 254.0], [0.0, 18.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.0], [5258.0, 28.5, 255.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.0], [940.0, 31.5, 253.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.0], [234.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.0], [421.0, 16.5, 224.0], [0.0, 16.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.0], [3435.0, 27.5, 258.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.0], [2137.0, 24.5, 246.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.0], [3692.0, 30.5, 256.0], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.0], [2393.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.0], [1729.0, 25.5, 247.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id8", {"id": "el6928140242921238144", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}, "type": "clickinfo", "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "low": 16, "ids": ["el6928140242920249608", "el6928140242920249104", "el6928140242920250448", "el6928140242920251344", "el6928140242920280976", "el6928140242920281872", "el6928140242920282768", "el6928140242920283664", "el6928140242920301008", "el6928140242920301904", "el6928140242920302800", "el6928140242920303696", "el6928140242920304592", "el6928140242920326032", "el6928140242920326928", "el6928140242920327824", "el6928140242920328720", "el6928140242920350160", "el6928140242920351056"]}, {"wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}, "type": "clickinfo", "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "low": 16, "ids": ["el6928140242920353072", "el6928140242920249272", "el6928140242920353688", "el6928140242920375240", "el6928140242920376136", "el6928140242920377032", "el6928140242920377928", "el6928140242920399368", "el6928140242920400264", "el6928140242920401160", "el6928140242920402056", "el6928140242920402840", "el6928140242920428488", "el6928140242920429384", "el6928140242920430280", "el6928140242920431176", "el6928140242920715992", "el6928140242920715712", "el6928140242920627728"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242920947328", "zoomable": true, "sharey": ["el6928140242920624760"], "yscale": "linear", "texts": [{"id": "el6928140242920998896", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [6844.0, 234.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242920249608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920249104", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920250448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920251344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920280976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920281872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920282768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920283664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920301008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920301904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920302800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920303696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920304592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920326032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920326928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920327824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920328720", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920350160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920351056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [6844.0, 234.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [224, 236, 248, 260, 275], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242920624760", "zoomable": true, "sharey": ["el6928140242920947328"], "yscale": "linear", "texts": [{"id": "el6928140242920627168", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [214.0, 285.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242920353072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920249272", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920353688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920375240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920376136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920377032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920377928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920399368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920400264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920401160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920402056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920402840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920428488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920429384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920430280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920431176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920715992", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920715712", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920627728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [214.0, 285.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.0], [2292.0, 29.5, 251.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.0], [4384.0, 20.5, 275.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.0], [2123.0, 32.5, 267.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.0], [5522.0, 26.5, 260.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.0], [1067.0, 18.5, 254.0], [0.0, 18.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.0], [5258.0, 28.5, 255.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.0], [940.0, 31.5, 253.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.0], [234.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.0], [421.0, 16.5, 224.0], [0.0, 16.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.0], [3435.0, 27.5, 258.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.0], [2137.0, 24.5, 246.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.0], [3692.0, 30.5, 256.0], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.0], [2393.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.0], [1729.0, 25.5, 247.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id8", {"id": "el6928140242921238144", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}, "type": "clickinfo", "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "low": 16, "ids": ["el6928140242920249608", "el6928140242920249104", "el6928140242920250448", "el6928140242920251344", "el6928140242920280976", "el6928140242920281872", "el6928140242920282768", "el6928140242920283664", "el6928140242920301008", "el6928140242920301904", "el6928140242920302800", "el6928140242920303696", "el6928140242920304592", "el6928140242920326032", "el6928140242920326928", "el6928140242920327824", "el6928140242920328720", "el6928140242920350160", "el6928140242920351056"]}, {"wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}, "type": "clickinfo", "players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "low": 16, "ids": ["el6928140242920353072", "el6928140242920249272", "el6928140242920353688", "el6928140242920375240", "el6928140242920376136", "el6928140242920377032", "el6928140242920377928", "el6928140242920399368", "el6928140242920400264", "el6928140242920401160", "el6928140242920402056", "el6928140242920402840", "el6928140242920428488", "el6928140242920429384", "el6928140242920430280", "el6928140242920431176", "el6928140242920715992", "el6928140242920715712", "el6928140242920627728"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242920947328", "zoomable": true, "sharey": ["el6928140242920624760"], "yscale": "linear", "texts": [{"id": "el6928140242920998896", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [6844.0, 234.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242920249608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920249104", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920250448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920251344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920280976", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920281872", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920282768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920283664", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920301008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920301904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920302800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920303696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920304592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920326032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920326928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920327824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920328720", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920350160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920351056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [6844.0, 234.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [224, 236, 248, 260, 275], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242920624760", "zoomable": true, "sharey": ["el6928140242920947328"], "yscale": "linear", "texts": [{"id": "el6928140242920627168", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [214.0, 285.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242920353072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920249272", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920353688", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920375240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920376136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920377032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920377928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920399368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920400264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920401160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920402056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920402840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920428488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920429384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920430280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920431176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920715992", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920715712", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242920627728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [214.0, 285.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.0], [2292.0, 29.5, 251.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.0], [4384.0, 20.5, 275.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.0], [2123.0, 32.5, 267.0], [0.0, 32.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.0], [5522.0, 26.5, 260.0], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.0], [1067.0, 18.5, 254.0], [0.0, 18.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.0], [5258.0, 28.5, 255.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.0], [940.0, 31.5, 253.0], [0.0, 31.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.0], [234.0, 21.5, 225.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.0], [421.0, 16.5, 224.0], [0.0, 16.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.0], [3435.0, 27.5, 258.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.0], [2137.0, 24.5, 246.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.0], [3692.0, 30.5, 256.0], [0.0, 30.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.0], [2393.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.0], [1729.0, 25.5, 247.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
