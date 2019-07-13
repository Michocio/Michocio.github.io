

<style>

</style>

<div id="id13"></div>
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
    
       mpld3.draw_figure("id13", {"data": {"data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "type": "clickinfo", "ids": ["el7772140277695252800", "el7772140277695252632", "el7772140277695653424", "el7772140277695621944", "el7772140277695952656", "el7772140277695939696", "el7772140277695919216", "el7772140277695905920", "el7772140277695889536", "el7772140277696270856", "el7772140277695795552", "el7772140277695779504", "el7772140277696328760", "el7772140277696243584", "el7772140277695367208", "el7772140277695368104", "el7772140277695369000", "el7772140277695443688", "el7772140277695444584"], "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]]}, {"low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "type": "clickinfo", "ids": ["el7772140277695446600", "el7772140277695254088", "el7772140277695463776", "el7772140277695464672", "el7772140277695465568", "el7772140277695466464", "el7772140277695467360", "el7772140277695492896", "el7772140277695493792", "el7772140277695494688", "el7772140277695495584", "el7772140277694988640", "el7772140277694989536", "el7772140277694990432", "el7772140277694991328", "el7772140277694992224", "el7772140277695013664", "el7772140277695014560", "el7772140277695015456"], "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277695761488", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [14.55, 35.45], "sharey": ["el7772140277695748304"], "images": [], "id": "el7772140277695572624", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [9368.5, 6.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695252800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695252632", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695653424", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695621944", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277695952656", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695939696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695919216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695905920", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695889536", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696270856", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695795552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695779504", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696328760", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696243584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695367208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695368104", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695369000", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277695443688", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695444584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}], "ydomain": [14.55, 35.45], "markers": [], "xlim": [9368.5, 6.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277695251064", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [14.55, 35.45], "sharey": ["el7772140277695572624"], "images": [], "id": "el7772140277695748304", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [210.0, 295.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695446600", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695254088", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277695463776", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277695464672", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277695465568", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695466464", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695467360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695492896", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277695493792", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695494688", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695495584", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277694988640", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694989536", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694990432", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694991328", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694992224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695013664", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 8, "edgewidth": 1.0, "id": "el7772140277695014560", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695015456", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}], "ydomain": [14.55, 35.45], "markers": [], "xlim": [210.0, 295.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [220, 236, 252, 268, 285], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277695826408", "height": 480.0});
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
    
         mpld3.draw_figure("id13", {"data": {"data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "type": "clickinfo", "ids": ["el7772140277695252800", "el7772140277695252632", "el7772140277695653424", "el7772140277695621944", "el7772140277695952656", "el7772140277695939696", "el7772140277695919216", "el7772140277695905920", "el7772140277695889536", "el7772140277696270856", "el7772140277695795552", "el7772140277695779504", "el7772140277696328760", "el7772140277696243584", "el7772140277695367208", "el7772140277695368104", "el7772140277695369000", "el7772140277695443688", "el7772140277695444584"], "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]]}, {"low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "type": "clickinfo", "ids": ["el7772140277695446600", "el7772140277695254088", "el7772140277695463776", "el7772140277695464672", "el7772140277695465568", "el7772140277695466464", "el7772140277695467360", "el7772140277695492896", "el7772140277695493792", "el7772140277695494688", "el7772140277695495584", "el7772140277694988640", "el7772140277694989536", "el7772140277694990432", "el7772140277694991328", "el7772140277694992224", "el7772140277695013664", "el7772140277695014560", "el7772140277695015456"], "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277695761488", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [14.55, 35.45], "sharey": ["el7772140277695748304"], "images": [], "id": "el7772140277695572624", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [9368.5, 6.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695252800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695252632", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695653424", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695621944", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277695952656", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695939696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695919216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695905920", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695889536", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696270856", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695795552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695779504", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696328760", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696243584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695367208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695368104", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695369000", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277695443688", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695444584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}], "ydomain": [14.55, 35.45], "markers": [], "xlim": [9368.5, 6.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277695251064", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [14.55, 35.45], "sharey": ["el7772140277695572624"], "images": [], "id": "el7772140277695748304", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [210.0, 295.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695446600", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695254088", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277695463776", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277695464672", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277695465568", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695466464", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695467360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695492896", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277695493792", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695494688", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695495584", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277694988640", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694989536", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694990432", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694991328", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694992224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695013664", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 8, "edgewidth": 1.0, "id": "el7772140277695014560", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695015456", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}], "ydomain": [14.55, 35.45], "markers": [], "xlim": [210.0, 295.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [220, 236, 252, 268, 285], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277695826408", "height": 480.0});
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
    
                 mpld3.draw_figure("id13", {"data": {"data09": [[0.0, 24.5, 0.0], [6336.0, 24.5, 260.0], [6336.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1416.0, 31.5, 220.0], [1416.0, 32.5, 220.0], [0.0, 32.5, 0.0]], "data05": [[0.0, 20.5, 0.0], [1803.0, 20.5, 267.0], [1803.0, 21.5, 267.0], [0.0, 21.5, 0.0]], "data08": [[0.0, 23.5], [73.0, 23.5], [73.0, 24.5], [0.0, 24.5]], "data17": [[0.0, 33.5, 0.0], [363.0, 33.5, 249.0], [363.0, 34.5, 249.0], [0.0, 34.5, 0.0]], "data10": [[0.0, 25.5, 0.0], [1500.0, 25.5, 239.0], [1500.0, 26.5, 239.0], [0.0, 26.5, 0.0]], "data11": [[0.0, 26.5], [88.0, 26.5], [88.0, 27.5], [0.0, 27.5]], "data13": [[0.0, 28.5, 0.0], [3091.0, 28.5, 257.0], [3091.0, 29.5, 257.0], [0.0, 29.5, 0.0]], "data04": [[0.0, 18.5, 19.5, 32.5], [0.0, 18.5, 19.5, 32.5], [0.0, 19.5, 20.5, 33.5], [0.0, 19.5, 20.5, 33.5]], "data06": [[0.0, 21.5, 0.0], [2187.0, 21.5, 285.0], [2187.0, 22.5, 285.0], [0.0, 22.5, 0.0]], "data15": [[0.0, 30.5, 0.0], [3860.0, 30.5, 245.0], [3860.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data03": [[0.0, 17.5], [25.0, 17.5], [25.0, 18.5], [0.0, 18.5]], "data14": [[0.0, 29.5, 0.0], [3741.0, 29.5, 254.0], [3741.0, 30.5, 254.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 22.5, 0.0], [2889.0, 22.5, 253.0], [2889.0, 23.5, 253.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 27.5, 0.0], [7496.0, 27.5, 266.0], [7496.0, 28.5, 266.0], [0.0, 28.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [454.0, 16.5, 244.0], [454.0, 17.5, 244.0], [0.0, 17.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 15.5, 0.0, 17.5, 18.5, 19.5, 23.5, 26.5, 32.5], [6.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5], [0.0, 16.5, 0.0, 18.5, 19.5, 20.5, 24.5, 27.5, 33.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "type": "clickinfo", "ids": ["el7772140277695252800", "el7772140277695252632", "el7772140277695653424", "el7772140277695621944", "el7772140277695952656", "el7772140277695939696", "el7772140277695919216", "el7772140277695905920", "el7772140277695889536", "el7772140277696270856", "el7772140277695795552", "el7772140277695779504", "el7772140277696328760", "el7772140277696243584", "el7772140277695367208", "el7772140277695368104", "el7772140277695369000", "el7772140277695443688", "el7772140277695444584"], "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]]}, {"low": 16, "wiek": {"32": [190445, 18958], "34": [157815], "16": [1082247], "17": [984168], "18": [942356], "21": [289448, 202541, 318228], "22": [164288], "23": [248251, 244752], "24": [167343], "25": [16797, 87985, 162067], "26": [77053], "27": [80732], "28": [1720, 23404, 4273, 3201], "29": [23181], "30": [23214, 17006], "31": [26078, 23220, 31507]}, "vals": {"32": [1416, 220], "34": [363, 249], "16": [6, 0], "17": [454, 244], "18": [25, 0], "21": [1803, 267], "22": [2187, 285], "23": [2889, 253], "24": [73, 0], "25": [6336, 260], "26": [1500, 239], "27": [88, 0], "28": [7496, 266], "29": [3091, 257], "30": [3741, 254], "31": [3860, 245]}, "players": {"164288": ["Luka Zarandia", 2187, 285], "3201": ["Andriy Bohdanov", 497, 241], "1082247": ["Mateusz Stepien", 6, 0], "23181": ["Damian Zbozie\u0144", 3091, 257], "18958": ["Goran Cvijanovic", 444, 222], "190445": ["Rafa\u0142 Siemaszko", 972, 220], "244752": ["Maksymilian Banaszewski", 428, 241], "162067": ["Nabil Aankour", 1428, 236], "942356": ["Jan \u0141o\u015b", 25, 234], "23214": ["Adam Marciniak", 3168, 255], "984168": ["Mateusz M\u0142y\u0144ski", 454, 244], "80732": ["Karol Danielak", 88, 201], "16797": ["Frederik Helstrup", 2664, 256], "26078": ["Luka Maric", 2143, 241], "87985": ["Adam Deja", 2244, 280], "289448": ["Christian Maghoma", 1438, 277], "23404": ["Maciej Jankowski", 2755, 255], "202541": ["Michael Olczyk", 337, 233], "17006": ["Tadeusz Socha", 573, 254], "167343": ["Robert Sulewski", 73, 207], "4273": ["Marko Vejinovic", 1327, 289], "31507": ["Dawid So\u0142decki", 406, 249], "23220": ["Adam Danch", 1311, 251], "157815": ["Marcus Oliveira", 363, 249], "1720": ["Micha\u0142 Janota", 2917, 271], "318228": ["Adrian Klimczak", 28, 183], "248251": ["Micha\u0142 Nalepa", 2461, 255], "77053": ["Aleksandar Kolev", 1500, 239]}, "type": "clickinfo", "ids": ["el7772140277695446600", "el7772140277695254088", "el7772140277695463776", "el7772140277695464672", "el7772140277695465568", "el7772140277695466464", "el7772140277695467360", "el7772140277695492896", "el7772140277695493792", "el7772140277695494688", "el7772140277695495584", "el7772140277694988640", "el7772140277694989536", "el7772140277694990432", "el7772140277694991328", "el7772140277694992224", "el7772140277695013664", "el7772140277695014560", "el7772140277695015456"], "alls": [["Adam Marciniak", [3168, 255]], ["Damian Zbozie\u0144", [3091, 257]], ["Micha\u0142 Janota", [2917, 271]], ["Maciej Jankowski", [2755, 255]], ["Frederik Helstrup", [2664, 256]], ["Micha\u0142 Nalepa", [2461, 255]], ["Adam Deja", [2244, 280]], ["Luka Zarandia", [2187, 285]], ["Luka Maric", [2143, 241]], ["Aleksandar Kolev", [1500, 239]], ["Christian Maghoma", [1438, 277]], ["Nabil Aankour", [1428, 236]], ["Marko Vejinovic", [1327, 289]], ["Adam Danch", [1311, 251]], ["Rafa\u0142 Siemaszko", [972, 220]], ["Tadeusz Socha", [573, 254]], ["Andriy Bohdanov", [497, 241]], ["Mateusz M\u0142y\u0144ski", [454, 244]], ["Goran Cvijanovic", [444, 222]], ["Maksymilian Banaszewski", [428, 241]], ["Dawid So\u0142decki", [406, 249]], ["Marcus Oliveira", [363, 249]], ["Michael Olczyk", [337, 233]], ["Karol Danielak", [88, 201]], ["Robert Sulewski", [73, 207]], ["Adrian Klimczak", [28, 183]], ["Jan \u0141o\u015b", [25, 234]], ["Mateusz Stepien", [6, 0]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277695761488", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [14.55, 35.45], "sharey": ["el7772140277695748304"], "images": [], "id": "el7772140277695572624", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [9368.5, 6.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695252800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695252632", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695653424", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695621944", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277695952656", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695939696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695919216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695905920", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695889536", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696270856", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695795552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695779504", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696328760", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696243584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695367208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695368104", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695369000", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277695443688", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695444584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}], "ydomain": [14.55, 35.45], "markers": [], "xlim": [9368.5, 6.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277695251064", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [14.55, 35.45], "sharey": ["el7772140277695572624"], "images": [], "id": "el7772140277695748304", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [210.0, 295.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695446600", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695254088", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277695463776", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277695464672", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277695465568", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695466464", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695467360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695492896", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277695493792", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695494688", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695495584", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 7, "edgewidth": 1.0, "id": "el7772140277694988640", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694989536", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694990432", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694991328", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694992224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695013664", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 8, "edgewidth": 1.0, "id": "el7772140277695014560", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277695015456", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data17", "dasharray": "none", "coordinates": "data"}], "ydomain": [14.55, 35.45], "markers": [], "xlim": [210.0, 295.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [220, 236, 252, 268, 285], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277695826408", "height": 480.0});
            })
         });
}
</script>
