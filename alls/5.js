

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
    
       mpld3.draw_figure("id5", {"data": {"data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "type": "clickinfo", "ids": ["el7772140277702919784", "el7772140277702919280", "el7772140277702920624", "el7772140277702921520", "el7772140277702951152", "el7772140277702952048", "el7772140277702952944", "el7772140277702953840", "el7772140277702954736", "el7772140277702980272", "el7772140277702981168", "el7772140277702982064", "el7772140277702982960", "el7772140277703000304", "el7772140277703001200", "el7772140277703002096", "el7772140277703002992", "el7772140277703003888", "el7772140277703025328"], "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]]}, {"low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "type": "clickinfo", "ids": ["el7772140277703027344", "el7772140277702919448", "el7772140277703028072", "el7772140277703358392", "el7772140277703325288", "el7772140277703221656", "el7772140277703173624", "el7772140277703151512", "el7772140277703504000", "el7772140277703470832", "el7772140277704113008", "el7772140277703054168", "el7772140277703055064", "el7772140277703055960", "el7772140277703056856", "el7772140277702574488", "el7772140277702575384", "el7772140277702576280", "el7772140277702577176"], "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277703150504", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.55, 36.45], "sharey": ["el7772140277703296280"], "images": [], "id": "el7772140277703148040", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [12551.0, 36.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919784", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919280", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702920624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702921520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702951152", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702952048", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702952944", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702953840", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702954736", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702980272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702981168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702982064", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702982960", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703000304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277703001200", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277703002096", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277703002992", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277703003888", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703025328", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.55, 36.45], "markers": [], "xlim": [12551.0, 36.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 4, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277703298688", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.55, 36.45], "sharey": ["el7772140277703148040"], "images": [], "id": "el7772140277703296280", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [225.0, 283.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703027344", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919448", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277703028072", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703358392", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703325288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703221656", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703173624", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703151512", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703504000", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703470832", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704113008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703054168", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703055064", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703055960", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277703056856", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277702574488", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277702575384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277702576280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702577176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.55, 36.45], "markers": [], "xlim": [225.0, 283.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [235, 244, 253, 262, 273], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277703425608", "height": 480.0});
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
    
         mpld3.draw_figure("id5", {"data": {"data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "type": "clickinfo", "ids": ["el7772140277702919784", "el7772140277702919280", "el7772140277702920624", "el7772140277702921520", "el7772140277702951152", "el7772140277702952048", "el7772140277702952944", "el7772140277702953840", "el7772140277702954736", "el7772140277702980272", "el7772140277702981168", "el7772140277702982064", "el7772140277702982960", "el7772140277703000304", "el7772140277703001200", "el7772140277703002096", "el7772140277703002992", "el7772140277703003888", "el7772140277703025328"], "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]]}, {"low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "type": "clickinfo", "ids": ["el7772140277703027344", "el7772140277702919448", "el7772140277703028072", "el7772140277703358392", "el7772140277703325288", "el7772140277703221656", "el7772140277703173624", "el7772140277703151512", "el7772140277703504000", "el7772140277703470832", "el7772140277704113008", "el7772140277703054168", "el7772140277703055064", "el7772140277703055960", "el7772140277703056856", "el7772140277702574488", "el7772140277702575384", "el7772140277702576280", "el7772140277702577176"], "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277703150504", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.55, 36.45], "sharey": ["el7772140277703296280"], "images": [], "id": "el7772140277703148040", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [12551.0, 36.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919784", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919280", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702920624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702921520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702951152", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702952048", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702952944", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702953840", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702954736", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702980272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702981168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702982064", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702982960", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703000304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277703001200", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277703002096", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277703002992", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277703003888", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703025328", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.55, 36.45], "markers": [], "xlim": [12551.0, 36.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 4, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277703298688", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.55, 36.45], "sharey": ["el7772140277703148040"], "images": [], "id": "el7772140277703296280", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [225.0, 283.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703027344", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919448", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277703028072", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703358392", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703325288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703221656", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703173624", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703151512", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703504000", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703470832", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704113008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703054168", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703055064", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703055960", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277703056856", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277702574488", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277702575384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277702576280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702577176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.55, 36.45], "markers": [], "xlim": [225.0, 283.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [235, 244, 253, 262, 273], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277703425608", "height": 480.0});
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
    
                 mpld3.draw_figure("id5", {"data": {"data09": [[0.0, 24.5, 0.0], [1732.0, 24.5, 266.0], [1732.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1108.0, 20.5, 252.0], [1108.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 23.5, 0.0], [2795.0, 23.5, 263.0], [2795.0, 24.5, 263.0], [0.0, 24.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [3241.0, 25.5, 251.0], [3241.0, 26.5, 251.0], [0.0, 26.5, 0.0]], "data11": [[0.0, 26.5, 0.0], [5903.0, 26.5, 273.0], [5903.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data13": [[0.0, 28.5, 0.0], [2343.0, 28.5, 247.0], [2343.0, 29.5, 247.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 19.5, 0.0], [1094.0, 19.5, 236.0], [1094.0, 20.5, 236.0], [0.0, 20.5, 0.0]], "data06": [[0.0, 21.5, 0.0], [1578.0, 21.5, 256.0], [1578.0, 22.5, 256.0], [0.0, 22.5, 0.0]], "data15": [[0.0, 34.5, 0.0], [176.0, 34.5, 239.0], [176.0, 35.5, 239.0], [0.0, 35.5, 0.0]], "data03": [[0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 19.5, 31.5, 32.5, 33.5, 34.5]], "data14": [[0.0, 29.5, 0.0], [2462.0, 29.5, 249.0], [2462.0, 30.5, 249.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [3250.0, 22.5, 257.0], [3250.0, 23.5, 257.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [10048.0, 27.5, 272.0], [10048.0, 28.5, 272.0], [0.0, 28.5, 0.0]], "data02": [[0.0, 17.5, 0.0], [98.0, 17.5, 235.0], [98.0, 18.5, 235.0], [0.0, 18.5, 0.0]], "data01": [[0.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 16.5, 0.0, 18.5, 30.5, 31.5, 32.5, 33.5], [36.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5], [0.0, 17.5, 0.0, 19.5, 31.5, 32.5, 33.5, 34.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "type": "clickinfo", "ids": ["el7772140277702919784", "el7772140277702919280", "el7772140277702920624", "el7772140277702921520", "el7772140277702951152", "el7772140277702952048", "el7772140277702952944", "el7772140277702953840", "el7772140277702954736", "el7772140277702980272", "el7772140277702981168", "el7772140277702982064", "el7772140277702982960", "el7772140277703000304", "el7772140277703001200", "el7772140277703002096", "el7772140277703002992", "el7772140277703003888", "el7772140277703025328"], "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]]}, {"low": 17, "wiek": {"35": [23242], "17": [1019551], "18": [399416], "20": [441197, 417479], "21": [247550, 252427], "22": [268959, 184605], "23": [184036, 170498, 95032], "24": [177954, 191554], "25": [97553], "26": [9608, 22766], "27": [247548, 79953], "28": [77048, 108741, 16827, 157695, 28275], "29": [24171, 4663, 23296, 60457], "30": [69731, 23413]}, "vals": {"35": [176, 239], "17": [36, 0], "18": [98, 235], "20": [1094, 236], "21": [1108, 252], "22": [1578, 256], "23": [3250, 257], "24": [2795, 263], "25": [1732, 266], "26": [3241, 251], "27": [5903, 273], "28": [10048, 272], "29": [2343, 247], "30": [2462, 249]}, "players": {"23296": ["Mateusz Machaj", 500, 224], "170498": ["Przemys\u0142aw Frankowski", 1291, 261], "108741": ["Ivan Runje", 2856, 284], "417479": ["Martin Adamec", 365, 245], "9608": ["Nemanja Mitrovic", 2905, 254], "23242": ["Rafa\u0142 Grzyb", 176, 239], "252427": ["Justas Lasickas", 20, 225], "191554": ["Zoran Arsenic", 1280, 281], "97553": ["Marko Poletanovic", 1732, 266], "399416": ["Michal Ozga", 98, 235], "16827": ["Arvydas Novikovas", 2729, 281], "184605": ["Andrej Kadlec", 740, 270], "268959": ["Martin Kostal", 838, 243], "177954": ["Bartosz Kwiecie\u0144", 1515, 248], "69731": ["Jakub W\u00f3jcicki", 1562, 247], "184036": ["Bodvar Bodvarsson", 1377, 260], "79953": ["Martin Pospisil", 2759, 261], "60457": ["Piotr Wlaz\u0142o", 62, 233], "24171": ["Roman Bezjak", 1089, 251], "441197": ["Patryk Klimala", 729, 232], "22766": ["Mile Savkovic", 336, 217], "28275": ["Stefan Scepovic", 342, 215], "23413": ["\u0141ukasz Burliga", 900, 253], "4663": ["Cillian Sheridan", 692, 258], "95032": ["Lukas Klemenz", 582, 241], "1019551": ["Maciej Twarowski", 36, 212], "247548": ["Taras Romanczuk", 3144, 283], "77048": ["Sitya", 3016, 261], "247550": ["Karol \u015awiderski", 1088, 252], "157695": ["Jesus Imaz", 1105, 270]}, "type": "clickinfo", "ids": ["el7772140277703027344", "el7772140277702919448", "el7772140277703028072", "el7772140277703358392", "el7772140277703325288", "el7772140277703221656", "el7772140277703173624", "el7772140277703151512", "el7772140277703504000", "el7772140277703470832", "el7772140277704113008", "el7772140277703054168", "el7772140277703055064", "el7772140277703055960", "el7772140277703056856", "el7772140277702574488", "el7772140277702575384", "el7772140277702576280", "el7772140277702577176"], "alls": [["Taras Romanczuk", [3144, 283]], ["Sitya", [3016, 261]], ["Nemanja Mitrovic", [2905, 254]], ["Ivan Runje", [2856, 284]], ["Martin Pospisil", [2759, 261]], ["Arvydas Novikovas", [2729, 281]], ["Marko Poletanovic", [1732, 266]], ["Jakub W\u00f3jcicki", [1562, 247]], ["Bartosz Kwiecie\u0144", [1515, 248]], ["Bodvar Bodvarsson", [1377, 260]], ["Przemys\u0142aw Frankowski", [1291, 261]], ["Zoran Arsenic", [1280, 281]], ["Jesus Imaz", [1105, 270]], ["Roman Bezjak", [1089, 251]], ["Karol \u015awiderski", [1088, 252]], ["\u0141ukasz Burliga", [900, 253]], ["Martin Kostal", [838, 243]], ["Andrej Kadlec", [740, 270]], ["Patryk Klimala", [729, 232]], ["Cillian Sheridan", [692, 258]], ["Lukas Klemenz", [582, 241]], ["Mateusz Machaj", [500, 224]], ["Martin Adamec", [365, 245]], ["Stefan Scepovic", [342, 215]], ["Mile Savkovic", [336, 217]], ["Rafa\u0142 Grzyb", [176, 239]], ["Michal Ozga", [98, 235]], ["Piotr Wlaz\u0142o", [62, 233]], ["Maciej Twarowski", [36, 212]], ["Justas Lasickas", [20, 225]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277703150504", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.55, 36.45], "sharey": ["el7772140277703296280"], "images": [], "id": "el7772140277703148040", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [12551.0, 36.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919784", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919280", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702920624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702921520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702951152", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702952048", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702952944", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702953840", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702954736", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702980272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702981168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702982064", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702982960", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703000304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277703001200", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277703002096", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277703002992", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277703003888", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703025328", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.55, 36.45], "markers": [], "xlim": [12551.0, 36.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 4, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277703298688", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.55, 36.45], "sharey": ["el7772140277703148040"], "images": [], "id": "el7772140277703296280", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [225.0, 283.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703027344", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702919448", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277703028072", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703358392", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703325288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703221656", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703173624", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703151512", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703504000", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703470832", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704113008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703054168", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703055064", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277703055960", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277703056856", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277702574488", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277702575384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277702576280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277702577176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.55, 36.45], "markers": [], "xlim": [225.0, 283.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [235, 244, 253, 262, 273], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277703425608", "height": 480.0});
            })
         });
}
</script>
