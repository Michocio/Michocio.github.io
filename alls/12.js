

<style>

</style>

<div id="id12"></div>
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
    
       mpld3.draw_figure("id12", {"data": {"data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "type": "clickinfo", "ids": ["el7772140277696534568", "el7772140277696534064", "el7772140277696535408", "el7772140277696536304", "el7772140277696033456", "el7772140277696034352", "el7772140277696035248", "el7772140277696036144", "el7772140277696057584", "el7772140277696058480", "el7772140277696059376", "el7772140277696060272", "el7772140277696061168", "el7772140277696090800", "el7772140277696091696", "el7772140277696092592", "el7772140277696093488", "el7772140277696110832", "el7772140277696111728", "el7772140277696112624"], "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]]}, {"low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "type": "clickinfo", "ids": ["el7772140277696114360", "el7772140277696534232", "el7772140277696140008", "el7772140277696140904", "el7772140277696141800", "el7772140277696142696", "el7772140277696164136", "el7772140277696165032", "el7772140277696165928", "el7772140277696166824", "el7772140277696167720", "el7772140277696185064", "el7772140277696185960", "el7772140277696186856", "el7772140277696187752", "el7772140277696213288", "el7772140277696214184", "el7772140277696215080", "el7772140277696215976", "el7772140277696216872"], "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277696763328", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.5, 37.5], "sharey": ["el7772140277696385432"], "images": [], "id": "el7772140277696674112", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [8682.5, 5.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696534568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696534064", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277696535408", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696536304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696033456", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696034352", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696035248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696036144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696057584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696058480", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696059376", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696060272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696061168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696090800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696091696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696092592", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696093488", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696110832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696111728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696112624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.5, 37.5], "markers": [], "xlim": [8682.5, 5.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 20, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277696387840", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.5, 37.5], "sharey": ["el7772140277696674112"], "images": [], "id": "el7772140277696385432", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [228.0, 283.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696114360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696534232", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696140008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696140904", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696141800", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696142696", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696164136", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696165032", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696165928", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696166824", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696167720", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696185064", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277696185960", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696186856", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696187752", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696213288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696214184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696215080", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 8, "edgewidth": 1.0, "id": "el7772140277696215976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696216872", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.5, 37.5], "markers": [], "xlim": [228.0, 283.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [238, 246, 254, 262, 273], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 20, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277697580728", "height": 480.0});
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
    
         mpld3.draw_figure("id12", {"data": {"data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "type": "clickinfo", "ids": ["el7772140277696534568", "el7772140277696534064", "el7772140277696535408", "el7772140277696536304", "el7772140277696033456", "el7772140277696034352", "el7772140277696035248", "el7772140277696036144", "el7772140277696057584", "el7772140277696058480", "el7772140277696059376", "el7772140277696060272", "el7772140277696061168", "el7772140277696090800", "el7772140277696091696", "el7772140277696092592", "el7772140277696093488", "el7772140277696110832", "el7772140277696111728", "el7772140277696112624"], "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]]}, {"low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "type": "clickinfo", "ids": ["el7772140277696114360", "el7772140277696534232", "el7772140277696140008", "el7772140277696140904", "el7772140277696141800", "el7772140277696142696", "el7772140277696164136", "el7772140277696165032", "el7772140277696165928", "el7772140277696166824", "el7772140277696167720", "el7772140277696185064", "el7772140277696185960", "el7772140277696186856", "el7772140277696187752", "el7772140277696213288", "el7772140277696214184", "el7772140277696215080", "el7772140277696215976", "el7772140277696216872"], "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277696763328", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.5, 37.5], "sharey": ["el7772140277696385432"], "images": [], "id": "el7772140277696674112", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [8682.5, 5.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696534568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696534064", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277696535408", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696536304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696033456", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696034352", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696035248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696036144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696057584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696058480", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696059376", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696060272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696061168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696090800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696091696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696092592", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696093488", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696110832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696111728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696112624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.5, 37.5], "markers": [], "xlim": [8682.5, 5.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 20, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277696387840", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.5, 37.5], "sharey": ["el7772140277696674112"], "images": [], "id": "el7772140277696385432", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [228.0, 283.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696114360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696534232", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696140008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696140904", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696141800", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696142696", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696164136", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696165032", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696165928", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696166824", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696167720", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696185064", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277696185960", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696186856", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696187752", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696213288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696214184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696215080", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 8, "edgewidth": 1.0, "id": "el7772140277696215976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696216872", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.5, 37.5], "markers": [], "xlim": [228.0, 283.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [238, 246, 254, 262, 273], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 20, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277697580728", "height": 480.0});
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
    
                 mpld3.draw_figure("id12", {"data": {"data09": [[0.0, 27.5, 0.0], [2360.0, 27.5, 247.0], [2360.0, 28.5, 247.0], [0.0, 28.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [2541.0, 21.5, 238.0], [2541.0, 22.5, 238.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 25.5, 0.0, 32.5], [6947.0, 25.5, 251.0, 32.5], [6947.0, 26.5, 251.0, 33.5], [0.0, 26.5, 0.0, 33.5]], "data10": [[0.0, 29.5, 0.0], [4226.0, 29.5, 253.0], [4226.0, 30.5, 253.0], [0.0, 30.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2620.0, 30.5, 258.0], [2620.0, 31.5, 258.0], [0.0, 31.5, 0.0]], "data13": [[0.0, 32.5], [6162.0, 32.5], [6162.0, 33.5], [0.0, 33.5]], "data04": [[0.0, 20.5, 0.0], [1572.0, 20.5, 252.0], [1572.0, 21.5, 252.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 22.5, 0.0, 24.5], [951.0, 22.5, 244.0, 24.5], [951.0, 23.5, 244.0, 25.5], [0.0, 23.5, 0.0, 25.5]], "data15": [[0.0, 35.5, 0.0], [2989.0, 35.5, 263.0], [2989.0, 36.5, 263.0], [0.0, 36.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [1531.0, 19.5, 254.0], [1531.0, 20.5, 254.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [1301.0, 33.5, 273.0], [1301.0, 34.5, 273.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 24.5], [1311.0, 24.5], [1311.0, 25.5], [0.0, 25.5]], "data12": [[0.0, 31.5, 0.0], [937.0, 31.5, 259.0], [937.0, 32.5, 259.0], [0.0, 32.5, 0.0]], "data02": [[0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]], "data01": [[0.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 16.5, 0.0, 17.5, 18.5, 23.5, 26.5, 28.5, 34.5], [5.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5], [0.0, 17.5, 0.0, 18.5, 19.5, 24.5, 27.5, 29.5, 35.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "type": "clickinfo", "ids": ["el7772140277696534568", "el7772140277696534064", "el7772140277696535408", "el7772140277696536304", "el7772140277696033456", "el7772140277696034352", "el7772140277696035248", "el7772140277696036144", "el7772140277696057584", "el7772140277696058480", "el7772140277696059376", "el7772140277696060272", "el7772140277696061168", "el7772140277696090800", "el7772140277696091696", "el7772140277696092592", "el7772140277696093488", "el7772140277696110832", "el7772140277696111728", "el7772140277696112624"], "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]]}, {"low": 17, "wiek": {"32": [17005], "33": [10073, 23444, 23410], "34": [23377], "36": [9246], "17": [1038593], "20": [255184, 241199], "21": [478115, 456112], "22": [289305, 209861, 458343], "23": [254531, 418232], "25": [260940], "26": [9817, 50620, 219837], "28": [86526, 16966], "30": [12767, 12469], "31": [23224, 76511]}, "vals": {"32": [937, 259], "33": [6162, 251], "34": [1301, 273], "36": [2989, 263], "17": [5, 0], "20": [1531, 254], "21": [1572, 252], "22": [2541, 238], "23": [951, 244], "25": [1311, 244], "26": [6947, 251], "28": [2360, 247], "30": [4226, 253], "31": [2620, 258]}, "players": {"1038593": ["P. Samiec-Talar", 5, 0], "254531": ["Lubambo Musonda", 820, 248], "209861": ["Kamil Dankowski", 965, 239], "16966": ["Jakub Kosecki", 98, 253], "418232": ["Daniel Szczepan", 131, 222], "260940": ["Mateusz Radecki", 1311, 244], "255184": ["Maciej Pa\u0142aszewski", 797, 251], "23377": ["Dorde Cotra", 1301, 273], "23444": ["\u0141ukasz Bro\u017a", 2054, 258], "289305": ["Damian G\u0105ska", 1457, 241], "10073": ["Piotr Celeban", 2846, 253], "9246": ["Marcin Robak", 2989, 263], "12767": ["Robert Pich", 2813, 255], "478115": ["Jakub \u0141abojko", 1476, 255], "9817": ["Wojciech Golla", 3370, 255], "458343": ["Daniel \u0141uczak", 119, 196], "17005": ["Mariusz Pawelec", 937, 259], "241199": ["Mateusz Ho\u0142ownia", 734, 258], "456112": ["Pawe\u0142 Kucharczyk", 96, 205], "23410": ["Arkadiusz Piech", 1262, 237], "12469": ["Igors Tarasovs", 1413, 249], "23224": ["Krzysztof M\u0105czy\u0144ski", 1381, 256], "76511": ["Augusto", 1239, 259], "50620": ["Micha\u0142 Chrapek", 2276, 253], "219837": ["Farshad Ahmadzadeh", 1301, 235], "86526": ["Mateusz Cholewiak", 2262, 247]}, "type": "clickinfo", "ids": ["el7772140277696114360", "el7772140277696534232", "el7772140277696140008", "el7772140277696140904", "el7772140277696141800", "el7772140277696142696", "el7772140277696164136", "el7772140277696165032", "el7772140277696165928", "el7772140277696166824", "el7772140277696167720", "el7772140277696185064", "el7772140277696185960", "el7772140277696186856", "el7772140277696187752", "el7772140277696213288", "el7772140277696214184", "el7772140277696215080", "el7772140277696215976", "el7772140277696216872"], "alls": [["Wojciech Golla", [3370, 255]], ["Marcin Robak", [2989, 263]], ["Piotr Celeban", [2846, 253]], ["Robert Pich", [2813, 255]], ["Micha\u0142 Chrapek", [2276, 253]], ["Mateusz Cholewiak", [2262, 247]], ["\u0141ukasz Bro\u017a", [2054, 258]], ["Jakub \u0141abojko", [1476, 255]], ["Damian G\u0105ska", [1457, 241]], ["Igors Tarasovs", [1413, 249]], ["Krzysztof M\u0105czy\u0144ski", [1381, 256]], ["Mateusz Radecki", [1311, 244]], ["Dorde Cotra", [1301, 273]], ["Farshad Ahmadzadeh", [1301, 235]], ["Arkadiusz Piech", [1262, 237]], ["Augusto", [1239, 259]], ["Kamil Dankowski", [965, 239]], ["Mariusz Pawelec", [937, 259]], ["Lubambo Musonda", [820, 248]], ["Maciej Pa\u0142aszewski", [797, 251]], ["Mateusz Ho\u0142ownia", [734, 258]], ["Daniel Szczepan", [131, 222]], ["Daniel \u0141uczak", [119, 196]], ["Jakub Kosecki", [98, 253]], ["Pawe\u0142 Kucharczyk", [96, 205]], ["P. Samiec-Talar", [5, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277696763328", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.5, 37.5], "sharey": ["el7772140277696385432"], "images": [], "id": "el7772140277696674112", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [8682.5, 5.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696534568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696534064", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277696535408", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696536304", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696033456", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696034352", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696035248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696036144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696057584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696058480", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696059376", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696060272", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696061168", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696090800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696091696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696092592", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696093488", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696110832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696111728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696112624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.5, 37.5], "markers": [], "xlim": [8682.5, 5.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 20, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277696387840", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [15.5, 37.5], "sharey": ["el7772140277696674112"], "images": [], "id": "el7772140277696385432", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [228.0, 283.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696114360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696534232", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696140008", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696140904", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696141800", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696142696", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696164136", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696165032", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696165928", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696166824", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696167720", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696185064", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277696185960", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696186856", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696187752", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696213288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696214184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696215080", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 8, "edgewidth": 1.0, "id": "el7772140277696215976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696216872", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}], "ydomain": [15.5, 37.5], "markers": [], "xlim": [228.0, 283.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [238, 246, 254, 262, 273], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 20, "tickvalues": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "tickformat": [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277697580728", "height": 480.0});
            })
         });
}
</script>
