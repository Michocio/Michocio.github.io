

<style>

</style>

<div id="id5"></div>
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
    
       mpld3.draw_figure("id5", {"id": "el6928140242924462264", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "type": "clickinfo", "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "low": 17, "ids": ["el6928140242923725768", "el6928140242923725264", "el6928140242923726608", "el6928140242923727504", "el6928140242923728400", "el6928140242923749840", "el6928140242923750736", "el6928140242923751632", "el6928140242923752528", "el6928140242923753424", "el6928140242923778960", "el6928140242923779856", "el6928140242923780752", "el6928140242923781648", "el6928140242923803088", "el6928140242923803984", "el6928140242923804880", "el6928140242923805776", "el6928140242923806672"]}, {"wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "type": "clickinfo", "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "low": 17, "ids": ["el6928140242923825136", "el6928140242923725432", "el6928140242924156184", "el6928140242924156240", "el6928140242924119432", "el6928140242923979496", "el6928140242923965968", "el6928140242924301728", "el6928140242924284672", "el6928140242924264248", "el6928140242923827040", "el6928140242923872888", "el6928140242923873784", "el6928140242923874680", "el6928140242923875576", "el6928140242923897016", "el6928140242923897912", "el6928140242923898808", "el6928140242923899704"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 4}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242924390104", "zoomable": true, "sharey": ["el6928140242924089976"], "yscale": "linear", "texts": [{"id": "el6928140242923952392", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [12551.0, 36.0], "xscale": "linear", "ydomain": [15.55, 36.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.55, 36.45], "paths": [{"id": "el6928140242923725768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923725264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923726608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923727504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923728400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923749840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923750736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923751632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923752528", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923753424", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923778960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923779856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923780752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923781648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923803088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923803984", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923804880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923805776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923806672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [12551.0, 36.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [235, 244, 253, 262, 273], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242924089976", "zoomable": true, "sharey": ["el6928140242924390104"], "yscale": "linear", "texts": [{"id": "el6928140242924092384", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [225.0, 283.0], "xscale": "linear", "ydomain": [15.55, 36.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.55, 36.45], "paths": [{"id": "el6928140242923825136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923725432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924156184", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924156240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924119432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923979496", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923965968", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924301728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924284672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924264248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923827040", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923872888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923873784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923874680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923875576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923897016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923897912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923898808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923899704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [225.0, 283.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id5", {"id": "el6928140242924462264", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "type": "clickinfo", "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "low": 17, "ids": ["el6928140242923725768", "el6928140242923725264", "el6928140242923726608", "el6928140242923727504", "el6928140242923728400", "el6928140242923749840", "el6928140242923750736", "el6928140242923751632", "el6928140242923752528", "el6928140242923753424", "el6928140242923778960", "el6928140242923779856", "el6928140242923780752", "el6928140242923781648", "el6928140242923803088", "el6928140242923803984", "el6928140242923804880", "el6928140242923805776", "el6928140242923806672"]}, {"wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "type": "clickinfo", "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "low": 17, "ids": ["el6928140242923825136", "el6928140242923725432", "el6928140242924156184", "el6928140242924156240", "el6928140242924119432", "el6928140242923979496", "el6928140242923965968", "el6928140242924301728", "el6928140242924284672", "el6928140242924264248", "el6928140242923827040", "el6928140242923872888", "el6928140242923873784", "el6928140242923874680", "el6928140242923875576", "el6928140242923897016", "el6928140242923897912", "el6928140242923898808", "el6928140242923899704"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 4}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242924390104", "zoomable": true, "sharey": ["el6928140242924089976"], "yscale": "linear", "texts": [{"id": "el6928140242923952392", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [12551.0, 36.0], "xscale": "linear", "ydomain": [15.55, 36.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.55, 36.45], "paths": [{"id": "el6928140242923725768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923725264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923726608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923727504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923728400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923749840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923750736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923751632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923752528", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923753424", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923778960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923779856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923780752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923781648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923803088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923803984", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923804880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923805776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923806672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [12551.0, 36.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [235, 244, 253, 262, 273], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242924089976", "zoomable": true, "sharey": ["el6928140242924390104"], "yscale": "linear", "texts": [{"id": "el6928140242924092384", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [225.0, 283.0], "xscale": "linear", "ydomain": [15.55, 36.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.55, 36.45], "paths": [{"id": "el6928140242923825136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923725432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924156184", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924156240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924119432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923979496", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923965968", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924301728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924284672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924264248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923827040", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923872888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923873784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923874680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923875576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923897016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923897912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923898808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923899704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [225.0, 283.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id5", {"id": "el6928140242924462264", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "type": "clickinfo", "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "low": 17, "ids": ["el6928140242923725768", "el6928140242923725264", "el6928140242923726608", "el6928140242923727504", "el6928140242923728400", "el6928140242923749840", "el6928140242923750736", "el6928140242923751632", "el6928140242923752528", "el6928140242923753424", "el6928140242923778960", "el6928140242923779856", "el6928140242923780752", "el6928140242923781648", "el6928140242923803088", "el6928140242923803984", "el6928140242923804880", "el6928140242923805776", "el6928140242923806672"]}, {"wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]], "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "type": "clickinfo", "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "low": 17, "ids": ["el6928140242923825136", "el6928140242923725432", "el6928140242924156184", "el6928140242924156240", "el6928140242924119432", "el6928140242923979496", "el6928140242923965968", "el6928140242924301728", "el6928140242924284672", "el6928140242924264248", "el6928140242923827040", "el6928140242923872888", "el6928140242923873784", "el6928140242923874680", "el6928140242923875576", "el6928140242923897016", "el6928140242923897912", "el6928140242923898808", "el6928140242923899704"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 4}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": 10.0, "position": "left", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242924390104", "zoomable": true, "sharey": ["el6928140242924089976"], "yscale": "linear", "texts": [{"id": "el6928140242923952392", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [12551.0, 36.0], "xscale": "linear", "ydomain": [15.55, 36.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [15.55, 36.45], "paths": [{"id": "el6928140242923725768", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923725264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923726608", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923727504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923728400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923749840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923750736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923751632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923752528", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923753424", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923778960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923779856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923780752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923781648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923803088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923803984", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923804880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923805776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923806672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [12551.0, 36.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [235, 244, 253, 262, 273], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "fontsize": null, "position": "right", "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242924089976", "zoomable": true, "sharey": ["el6928140242924390104"], "yscale": "linear", "texts": [{"id": "el6928140242924092384", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [225.0, 283.0], "xscale": "linear", "ydomain": [15.55, 36.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [15.55, 36.45], "paths": [{"id": "el6928140242923825136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923725432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924156184", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924156240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924119432", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923979496", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923965968", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924301728", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924284672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242924264248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923827040", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923872888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923873784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923874680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923875576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923897016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923897912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923898808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242923899704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [225.0, 283.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
