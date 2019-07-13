

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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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

        if (mySet.has(which) == false) {
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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

        if (mySet.has(which) == false) {
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
       mpld3.draw_figure("id8", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "type": "clickinfo", "which": 8, "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "ids": ["el12677139766162856592", "el12677139766162856088", "el12677139766162857376", "el12677139766162358624", "el12677139766162359520", "el12677139766162360416", "el12677139766162361312", "el12677139766162362208", "el12677139766162383648", "el12677139766162384544", "el12677139766162385440", "el12677139766162386336", "el12677139766162407776", "el12677139766162408672", "el12677139766162409568", "el12677139766162410464", "el12677139766162411360", "el12677139766162432800", "el12677139766162433696"], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}}, {"players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "type": "clickinfo", "which": 8, "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "ids": ["el12677139766162435768", "el12677139766162856256", "el12677139766162465176", "el12677139766162466072", "el12677139766162466968", "el12677139766162467864", "el12677139766162468760", "el12677139766162486104", "el12677139766162487000", "el12677139766162487896", "el12677139766162488792", "el12677139766162510232", "el12677139766162511128", "el12677139766162512024", "el12677139766162512920", "el12677139766162513816", "el12677139766162802504", "el12677139766162802392", "el12677139766162746336"], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}}], "height": 480.0, "data": {"data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.0], [1729.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.0], [3692.0, 30.5, 256.0], [0.0, 30.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.0], [2292.0, 29.5, 251.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.0], [5258.0, 28.5, 255.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.0], [940.0, 31.5, 253.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.0], [2137.0, 24.5, 246.0], [0.0, 24.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.0], [3435.0, 27.5, 258.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.0], [4384.0, 20.5, 275.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.0], [2393.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.0], [1067.0, 18.5, 254.0], [0.0, 18.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.0], [5522.0, 26.5, 260.0], [0.0, 26.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.0], [2123.0, 32.5, 267.0], [0.0, 32.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.0], [421.0, 16.5, 224.0], [0.0, 16.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.0], [234.0, 21.5, 225.0], [0.0, 21.5, 0.0]]}, "axes": [{"paths": [{"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856592", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data01", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856088", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162857376", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data03", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162358624", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 2, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162359520", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data04", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162360416", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data05", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162361312", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 3, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162362208", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 4, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162383648", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data06", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162384544", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data07", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162385440", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data08", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162386336", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data09", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162407776", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data10", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162408672", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data11", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162409568", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data12", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162410464", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data13", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162411360", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data14", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162432800", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 5, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162433696", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data15", "xindex": 0, "yindex": 1, "dasharray": "none"}], "axes": [{"scale": "linear", "grid": {"gridOn": true, "alpha": 1.0, "color": "#B0B0B0", "dasharray": "none"}, "tickvalues": null, "position": "bottom", "fontsize": 10.0, "visible": true, "nticks": 5, "tickformat": null}, {"scale": "linear", "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left", "fontsize": 10.0, "visible": true, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}], "ydomain": [14.55, 35.45], "sharex": [], "zoomable": true, "images": [], "xscale": "linear", "lines": [], "axesbg": "#FFFFFF", "collections": [], "axesbgalpha": null, "xdomain": [6844.0, 234.0], "id": "el12677139766163008032", "texts": [{"position": [0.5, -0.07921476671476674], "coordinates": "axes", "text": "Minuty", "h_anchor": "middle", "id": "el12677139766163085296", "zorder": 3, "color": "#000000", "alpha": 1, "rotation": -0.0, "v_baseline": "hanging", "fontsize": 14.0}], "sharey": ["el12677139766162707456"], "markers": [], "ylim": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "xlim": [6844.0, 234.0]}, {"paths": [{"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162435768", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data01", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856256", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162465176", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data03", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162466072", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 2, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162466968", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data04", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162467864", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data05", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162468760", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 3, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162486104", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 4, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162487000", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data06", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162487896", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data07", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162488792", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data08", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162510232", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data09", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162511128", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data10", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162512024", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data11", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162512920", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data12", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162513816", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data13", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162802504", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data14", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162802392", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 5, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162746336", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data15", "xindex": 2, "yindex": 1, "dasharray": "none"}], "axes": [{"scale": "linear", "grid": {"gridOn": true, "alpha": 1.0, "color": "#B0B0B0", "dasharray": "none"}, "tickvalues": [224, 236, 248, 260, 275], "position": "bottom", "fontsize": 10.0, "visible": true, "nticks": 5, "tickformat": null}, {"scale": "linear", "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right", "fontsize": null, "visible": true, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}], "ydomain": [14.55, 35.45], "sharex": [], "zoomable": true, "images": [], "xscale": "linear", "lines": [], "axesbg": "#FFFFFF", "collections": [], "axesbgalpha": null, "xdomain": [214.0, 285.0], "id": "el12677139766162707456", "texts": [{"position": [0.5, -0.07921476671476674], "coordinates": "axes", "text": "Instat index", "h_anchor": "middle", "id": "el12677139766162709864", "zorder": 3, "color": "#000000", "alpha": 1, "rotation": -0.0, "v_baseline": "hanging", "fontsize": 14.0}], "sharey": ["el12677139766163008032"], "markers": [], "ylim": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "xlim": [214.0, 285.0]}], "id": "el12677139766163450064"});
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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

        if (mySet.has(which) == false) {
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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

        if (mySet.has(which) == false) {
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
         mpld3.draw_figure("id8", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "type": "clickinfo", "which": 8, "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "ids": ["el12677139766162856592", "el12677139766162856088", "el12677139766162857376", "el12677139766162358624", "el12677139766162359520", "el12677139766162360416", "el12677139766162361312", "el12677139766162362208", "el12677139766162383648", "el12677139766162384544", "el12677139766162385440", "el12677139766162386336", "el12677139766162407776", "el12677139766162408672", "el12677139766162409568", "el12677139766162410464", "el12677139766162411360", "el12677139766162432800", "el12677139766162433696"], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}}, {"players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "type": "clickinfo", "which": 8, "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "ids": ["el12677139766162435768", "el12677139766162856256", "el12677139766162465176", "el12677139766162466072", "el12677139766162466968", "el12677139766162467864", "el12677139766162468760", "el12677139766162486104", "el12677139766162487000", "el12677139766162487896", "el12677139766162488792", "el12677139766162510232", "el12677139766162511128", "el12677139766162512024", "el12677139766162512920", "el12677139766162513816", "el12677139766162802504", "el12677139766162802392", "el12677139766162746336"], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}}], "height": 480.0, "data": {"data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.0], [1729.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.0], [3692.0, 30.5, 256.0], [0.0, 30.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.0], [2292.0, 29.5, 251.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.0], [5258.0, 28.5, 255.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.0], [940.0, 31.5, 253.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.0], [2137.0, 24.5, 246.0], [0.0, 24.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.0], [3435.0, 27.5, 258.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.0], [4384.0, 20.5, 275.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.0], [2393.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.0], [1067.0, 18.5, 254.0], [0.0, 18.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.0], [5522.0, 26.5, 260.0], [0.0, 26.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.0], [2123.0, 32.5, 267.0], [0.0, 32.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.0], [421.0, 16.5, 224.0], [0.0, 16.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.0], [234.0, 21.5, 225.0], [0.0, 21.5, 0.0]]}, "axes": [{"paths": [{"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856592", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data01", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856088", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162857376", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data03", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162358624", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 2, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162359520", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data04", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162360416", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data05", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162361312", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 3, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162362208", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 4, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162383648", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data06", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162384544", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data07", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162385440", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data08", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162386336", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data09", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162407776", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data10", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162408672", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data11", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162409568", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data12", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162410464", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data13", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162411360", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data14", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162432800", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 5, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162433696", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data15", "xindex": 0, "yindex": 1, "dasharray": "none"}], "axes": [{"scale": "linear", "grid": {"gridOn": true, "alpha": 1.0, "color": "#B0B0B0", "dasharray": "none"}, "tickvalues": null, "position": "bottom", "fontsize": 10.0, "visible": true, "nticks": 5, "tickformat": null}, {"scale": "linear", "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left", "fontsize": 10.0, "visible": true, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}], "ydomain": [14.55, 35.45], "sharex": [], "zoomable": true, "images": [], "xscale": "linear", "lines": [], "axesbg": "#FFFFFF", "collections": [], "axesbgalpha": null, "xdomain": [6844.0, 234.0], "id": "el12677139766163008032", "texts": [{"position": [0.5, -0.07921476671476674], "coordinates": "axes", "text": "Minuty", "h_anchor": "middle", "id": "el12677139766163085296", "zorder": 3, "color": "#000000", "alpha": 1, "rotation": -0.0, "v_baseline": "hanging", "fontsize": 14.0}], "sharey": ["el12677139766162707456"], "markers": [], "ylim": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "xlim": [6844.0, 234.0]}, {"paths": [{"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162435768", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data01", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856256", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162465176", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data03", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162466072", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 2, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162466968", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data04", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162467864", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data05", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162468760", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 3, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162486104", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 4, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162487000", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data06", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162487896", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data07", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162488792", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data08", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162510232", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data09", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162511128", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data10", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162512024", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data11", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162512920", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data12", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162513816", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data13", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162802504", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data14", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162802392", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 5, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162746336", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data15", "xindex": 2, "yindex": 1, "dasharray": "none"}], "axes": [{"scale": "linear", "grid": {"gridOn": true, "alpha": 1.0, "color": "#B0B0B0", "dasharray": "none"}, "tickvalues": [224, 236, 248, 260, 275], "position": "bottom", "fontsize": 10.0, "visible": true, "nticks": 5, "tickformat": null}, {"scale": "linear", "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right", "fontsize": null, "visible": true, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}], "ydomain": [14.55, 35.45], "sharex": [], "zoomable": true, "images": [], "xscale": "linear", "lines": [], "axesbg": "#FFFFFF", "collections": [], "axesbgalpha": null, "xdomain": [214.0, 285.0], "id": "el12677139766162707456", "texts": [{"position": [0.5, -0.07921476671476674], "coordinates": "axes", "text": "Instat index", "h_anchor": "middle", "id": "el12677139766162709864", "zorder": 3, "color": "#000000", "alpha": 1, "rotation": -0.0, "v_baseline": "hanging", "fontsize": 14.0}], "sharey": ["el12677139766163008032"], "markers": [], "ylim": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "xlim": [214.0, 285.0]}], "id": "el12677139766163450064"});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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

        if (mySet.has(which) == false) {
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls", "which"];

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
        var which = this.props.which;
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

        if (mySet.has(which) == false) {
        this.props.ids.forEach(function(id, i) {
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            obj.elements().on('mousedown',function(d){
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

    }
    
                 mpld3.draw_figure("id8", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "type": "clickinfo", "which": 8, "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "ids": ["el12677139766162856592", "el12677139766162856088", "el12677139766162857376", "el12677139766162358624", "el12677139766162359520", "el12677139766162360416", "el12677139766162361312", "el12677139766162362208", "el12677139766162383648", "el12677139766162384544", "el12677139766162385440", "el12677139766162386336", "el12677139766162407776", "el12677139766162408672", "el12677139766162409568", "el12677139766162410464", "el12677139766162411360", "el12677139766162432800", "el12677139766162433696"], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}}, {"players": {"410048": ["Hubert Sobol", 1, 0], "69572": ["Maciej Gajos", 1556, 250], "496438": ["Krzysztof Kolodziej", 104, 218], "410057": ["Tymoteusz Klup\u015b", 899, 252], "18314": ["Nikola Vujadinovic", 2123, 267], "4685": ["Mihai Radut", 443, 229], "26701": ["Tomasz Cywka", 581, 251], "5136": ["Christian Gytkjar", 2694, 239], "68307": ["Dioni", 175, 217], "191124": ["Vernon", 1170, 260], "241175": ["Timur Zhamaletdinov", 234, 225], "23384": ["\u0141ukasz Tra\u0142ka", 2393, 273], "447379": ["Pawel Tomczyk", 284, 258], "91280": ["Pedro Tiba", 3111, 257], "19490": ["Dimitris Goutas", 786, 257], "97700": ["Darko Jevtic", 1625, 248], "270373": ["Kamil J\u00f3\u017awiak", 2242, 269], "855465": ["Filip Marchwinski", 421, 224], "291436": ["Robert Gumny", 1858, 285], "251886": ["Jo\u00e3o Amaral", 1879, 264], "374066": ["Maciej Or\u0142owski", 193, 218], "23283": ["Rafal Janicki", 2019, 271], "374070": ["Marcin Wasielewski", 1158, 242], "98170": ["Volodymyr Kostevych", 2333, 251], "45691": ["Piotr Tomasik", 940, 253], "410058": ["Mateusz Skrzypczak", 167, 266], "18878": ["Thomas Rogne", 2121, 282], "23231": ["Maciej Makuszewski", 2117, 254]}, "type": "clickinfo", "which": 8, "low": 16, "wiek": {"32": [18314], "34": [23384], "16": [855465], "18": [410057, 410058, 410048], "20": [270373, 291436, 447379], "21": [241175], "24": [374070, 19490, 374066], "25": [97700, 496438], "26": [98170, 23283, 191124], "27": [251886, 69572], "28": [5136, 18878, 4685], "29": [23231, 68307], "30": [91280, 26701], "31": [45691]}, "alls": [["Pedro Tiba", [3111, 257]], ["Christian Gytkjar", [2694, 239]], ["\u0141ukasz Tra\u0142ka", [2393, 273]], ["Volodymyr Kostevych", [2333, 251]], ["Kamil J\u00f3\u017awiak", [2242, 269]], ["Nikola Vujadinovic", [2123, 267]], ["Thomas Rogne", [2121, 282]], ["Maciej Makuszewski", [2117, 254]], ["Rafal Janicki", [2019, 271]], ["Jo\u00e3o Amaral", [1879, 264]], ["Robert Gumny", [1858, 285]], ["Darko Jevtic", [1625, 248]], ["Maciej Gajos", [1556, 250]], ["Vernon", [1170, 260]], ["Marcin Wasielewski", [1158, 242]], ["Piotr Tomasik", [940, 253]], ["Tymoteusz Klup\u015b", [899, 252]], ["Dimitris Goutas", [786, 257]], ["Tomasz Cywka", [581, 251]], ["Mihai Radut", [443, 229]], ["Filip Marchwinski", [421, 224]], ["Pawel Tomczyk", [284, 258]], ["Timur Zhamaletdinov", [234, 225]], ["Maciej Or\u0142owski", [193, 218]], ["Dioni", [175, 217]], ["Mateusz Skrzypczak", [167, 266]], ["Krzysztof Kolodziej", [104, 218]], ["Hubert Sobol", [1, 0]]], "ids": ["el12677139766162435768", "el12677139766162856256", "el12677139766162465176", "el12677139766162466072", "el12677139766162466968", "el12677139766162467864", "el12677139766162468760", "el12677139766162486104", "el12677139766162487000", "el12677139766162487896", "el12677139766162488792", "el12677139766162510232", "el12677139766162511128", "el12677139766162512024", "el12677139766162512920", "el12677139766162513816", "el12677139766162802504", "el12677139766162802392", "el12677139766162746336"], "vals": {"32": [2123, 267], "34": [2393, 273], "16": [421, 224], "18": [1067, 254], "20": [4384, 275], "21": [234, 225], "24": [2137, 246], "25": [1729, 247], "26": [5522, 260], "27": [3435, 258], "28": [5258, 255], "29": [2292, 251], "30": [3692, 256], "31": [940, 253]}}], "height": 480.0, "data": {"data07": [[0.0, 24.5, 0.0], [1729.0, 24.5, 247.0], [1729.0, 25.5, 247.0], [0.0, 25.5, 0.0]], "data02": [[0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 16.5, 18.5, 21.5, 22.5, 32.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5], [0.0, 17.5, 19.5, 22.5, 23.5, 33.5]], "data12": [[0.0, 29.5, 0.0], [3692.0, 29.5, 256.0], [3692.0, 30.5, 256.0], [0.0, 30.5, 0.0]], "data11": [[0.0, 28.5, 0.0], [2292.0, 28.5, 251.0], [2292.0, 29.5, 251.0], [0.0, 29.5, 0.0]], "data10": [[0.0, 27.5, 0.0], [5258.0, 27.5, 255.0], [5258.0, 28.5, 255.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 30.5, 0.0], [940.0, 30.5, 253.0], [940.0, 31.5, 253.0], [0.0, 31.5, 0.0]], "data06": [[0.0, 23.5, 0.0], [2137.0, 23.5, 246.0], [2137.0, 24.5, 246.0], [0.0, 24.5, 0.0]], "data09": [[0.0, 26.5, 0.0], [3435.0, 26.5, 258.0], [3435.0, 27.5, 258.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [4384.0, 19.5, 275.0], [4384.0, 20.5, 275.0], [0.0, 20.5, 0.0]], "data15": [[0.0, 33.5, 0.0], [2393.0, 33.5, 273.0], [2393.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data03": [[0.0, 17.5, 0.0], [1067.0, 17.5, 254.0], [1067.0, 18.5, 254.0], [0.0, 18.5, 0.0]], "data08": [[0.0, 25.5, 0.0], [5522.0, 25.5, 260.0], [5522.0, 26.5, 260.0], [0.0, 26.5, 0.0]], "data14": [[0.0, 31.5, 0.0], [2123.0, 31.5, 267.0], [2123.0, 32.5, 267.0], [0.0, 32.5, 0.0]], "data01": [[0.0, 15.5, 0.0], [421.0, 15.5, 224.0], [421.0, 16.5, 224.0], [0.0, 16.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [234.0, 20.5, 225.0], [234.0, 21.5, 225.0], [0.0, 21.5, 0.0]]}, "axes": [{"paths": [{"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856592", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data01", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856088", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162857376", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data03", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162358624", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 2, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162359520", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data04", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162360416", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data05", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162361312", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 3, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162362208", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 4, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162383648", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data06", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162384544", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data07", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162385440", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data08", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162386336", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data09", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162407776", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data10", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162408672", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data11", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162409568", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data12", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162410464", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data13", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162411360", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data14", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162432800", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 5, "dasharray": "none"}, {"facecolor": "#FF0000", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162433696", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data15", "xindex": 0, "yindex": 1, "dasharray": "none"}], "axes": [{"scale": "linear", "grid": {"gridOn": true, "alpha": 1.0, "color": "#B0B0B0", "dasharray": "none"}, "tickvalues": null, "position": "bottom", "fontsize": 10.0, "visible": true, "nticks": 5, "tickformat": null}, {"scale": "linear", "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "left", "fontsize": 10.0, "visible": true, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}], "ydomain": [14.55, 35.45], "sharex": [], "zoomable": true, "images": [], "xscale": "linear", "lines": [], "axesbg": "#FFFFFF", "collections": [], "axesbgalpha": null, "xdomain": [6844.0, 234.0], "id": "el12677139766163008032", "texts": [{"position": [0.5, -0.07921476671476674], "coordinates": "axes", "text": "Minuty", "h_anchor": "middle", "id": "el12677139766163085296", "zorder": 3, "color": "#000000", "alpha": 1, "rotation": -0.0, "v_baseline": "hanging", "fontsize": 14.0}], "sharey": ["el12677139766162707456"], "markers": [], "ylim": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "xlim": [6844.0, 234.0]}, {"paths": [{"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162435768", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data01", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162856256", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162465176", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data03", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162466072", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 2, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162466968", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data04", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162467864", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data05", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162468760", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 3, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162486104", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 4, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162487000", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data06", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162487896", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data07", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162488792", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data08", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162510232", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data09", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162511128", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data10", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162512024", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data11", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162512920", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data12", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162513816", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data13", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162802504", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data14", "xindex": 2, "yindex": 1, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162802392", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data02", "xindex": 0, "yindex": 5, "dasharray": "none"}, {"facecolor": "#FFA500", "coordinates": "data", "edgecolor": "none", "id": "el12677139766162746336", "pathcodes": ["M", "L", "L", "L", "Z"], "zorder": 1, "alpha": 0.7, "edgewidth": 1.0, "data": "data15", "xindex": 2, "yindex": 1, "dasharray": "none"}], "axes": [{"scale": "linear", "grid": {"gridOn": true, "alpha": 1.0, "color": "#B0B0B0", "dasharray": "none"}, "tickvalues": [224, 236, 248, 260, 275], "position": "bottom", "fontsize": 10.0, "visible": true, "nticks": 5, "tickformat": null}, {"scale": "linear", "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "position": "right", "fontsize": null, "visible": true, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]}], "ydomain": [14.55, 35.45], "sharex": [], "zoomable": true, "images": [], "xscale": "linear", "lines": [], "axesbg": "#FFFFFF", "collections": [], "axesbgalpha": null, "xdomain": [214.0, 285.0], "id": "el12677139766162707456", "texts": [{"position": [0.5, -0.07921476671476674], "coordinates": "axes", "text": "Instat index", "h_anchor": "middle", "id": "el12677139766162709864", "zorder": 3, "color": "#000000", "alpha": 1, "rotation": -0.0, "v_baseline": "hanging", "fontsize": 14.0}], "sharey": ["el12677139766163008032"], "markers": [], "ylim": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "xlim": [214.0, 285.0]}], "id": "el12677139766163450064"});
            })
         });
}
</script>
