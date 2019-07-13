


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
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            var test = obj.elements()[0]['parentNode'];
            $(test).on('mousedown', obj.elements(),
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
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            var test = obj.elements()[0]['parentNode'];
            $(test).on('mousedown', obj.elements(),
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
    
       mpld3.draw_figure("id1", {"data": {"data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]]}, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}, "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "type": "clickinfo", "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "low": 19, "ids": ["el12168140358886613512", "el12168140358887100368", "el12168140358886614352", "el12168140358886615248", "el12168140358886616144", "el12168140358886617040", "el12168140358886630288", "el12168140358886631184", "el12168140358886632080", "el12168140358886632976", "el12168140358886658512", "el12168140358886659408", "el12168140358886660304", "el12168140358886661200", "el12168140358886662096"]}, {"players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}, "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "type": "clickinfo", "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "low": 19, "ids": ["el12168140358886688752", "el12168140358886613176", "el12168140358886689480", "el12168140358886690376", "el12168140358886707720", "el12168140358886708616", "el12168140358886709512", "el12168140358886710408", "el12168140358886711192", "el12168140358886732744", "el12168140358886733640", "el12168140358886734536", "el12168140358886735432", "el12168140358886756872", "el12168140358886757768"]}], "id": "el12168140358887808528", "width": 640.0, "height": 480.0, "axes": [{"images": [], "axesbg": "#FFFFFF", "lines": [], "xscale": "linear", "ylim": [17.75, 34.25], "collections": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "texts": [{"zorder": 3, "id": "el12168140358887356288", "coordinates": "axes", "fontsize": 14.0, "rotation": -0.0, "color": "#000000", "v_baseline": "hanging", "position": [0.5, -0.07921476671476674], "h_anchor": "middle", "alpha": 1, "text": "Minuty"}], "axes": [{"tickvalues": null, "tickformat": null, "position": "bottom", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 5, "grid": {"color": "#B0B0B0", "alpha": 1.0, "gridOn": true, "dasharray": "none"}}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "position": "left", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 15, "grid": {"gridOn": false}}], "id": "el12168140358887248056", "axesbgalpha": null, "markers": [], "xlim": [16781.25, 5.0], "paths": [{"xindex": 0, "zorder": 1, "id": "el12168140358886613512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358887100368", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886614352", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886615248", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 2, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886616144", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data04", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886617040", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data05", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886630288", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886631184", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886632080", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data07", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886632976", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 4, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886658512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data08", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886659408", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data09", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886660304", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data10", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886661200", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 5, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886662096", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data11", "edgewidth": 1.0}], "sharex": [], "sharey": ["el12168140358886973624"], "zoomable": true, "ydomain": [17.75, 34.25], "xdomain": [16781.25, 5.0]}, {"images": [], "axesbg": "#FFFFFF", "lines": [], "xscale": "linear", "ylim": [17.75, 34.25], "collections": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "texts": [{"zorder": 3, "id": "el12168140358886976032", "coordinates": "axes", "fontsize": 14.0, "rotation": -0.0, "color": "#000000", "v_baseline": "hanging", "position": [0.5, -0.07921476671476674], "h_anchor": "middle", "alpha": 1, "text": "Instat index"}], "axes": [{"tickvalues": [226, 237, 248, 259, 273], "tickformat": null, "position": "bottom", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 5, "grid": {"color": "#B0B0B0", "alpha": 1.0, "gridOn": true, "dasharray": "none"}}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "position": "right", "visible": true, "scale": "linear", "fontsize": null, "nticks": 15, "grid": {"gridOn": false}}], "id": "el12168140358886973624", "axesbgalpha": null, "markers": [], "xlim": [216.0, 283.0], "paths": [{"xindex": 2, "zorder": 1, "id": "el12168140358886688752", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886613176", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886689480", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886690376", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 4, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886707720", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data04", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886708616", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data05", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886709512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886710408", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 5, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886711192", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data07", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886732744", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 6, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886733640", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886734536", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886735432", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data10", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886756872", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 7, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886757768", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data11", "edgewidth": 1.0}], "sharex": [], "sharey": ["el12168140358887248056"], "zoomable": true, "ydomain": [17.75, 34.25], "xdomain": [216.0, 283.0]}]});
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
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            var test = obj.elements()[0]['parentNode'];
            $(test).on('mousedown', obj.elements(),
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
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            var test = obj.elements()[0]['parentNode'];
            $(test).on('mousedown', obj.elements(),
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
    
         mpld3.draw_figure("id1", {"data": {"data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]]}, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}, "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "type": "clickinfo", "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "low": 19, "ids": ["el12168140358886613512", "el12168140358887100368", "el12168140358886614352", "el12168140358886615248", "el12168140358886616144", "el12168140358886617040", "el12168140358886630288", "el12168140358886631184", "el12168140358886632080", "el12168140358886632976", "el12168140358886658512", "el12168140358886659408", "el12168140358886660304", "el12168140358886661200", "el12168140358886662096"]}, {"players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}, "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "type": "clickinfo", "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "low": 19, "ids": ["el12168140358886688752", "el12168140358886613176", "el12168140358886689480", "el12168140358886690376", "el12168140358886707720", "el12168140358886708616", "el12168140358886709512", "el12168140358886710408", "el12168140358886711192", "el12168140358886732744", "el12168140358886733640", "el12168140358886734536", "el12168140358886735432", "el12168140358886756872", "el12168140358886757768"]}], "id": "el12168140358887808528", "width": 640.0, "height": 480.0, "axes": [{"images": [], "axesbg": "#FFFFFF", "lines": [], "xscale": "linear", "ylim": [17.75, 34.25], "collections": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "texts": [{"zorder": 3, "id": "el12168140358887356288", "coordinates": "axes", "fontsize": 14.0, "rotation": -0.0, "color": "#000000", "v_baseline": "hanging", "position": [0.5, -0.07921476671476674], "h_anchor": "middle", "alpha": 1, "text": "Minuty"}], "axes": [{"tickvalues": null, "tickformat": null, "position": "bottom", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 5, "grid": {"color": "#B0B0B0", "alpha": 1.0, "gridOn": true, "dasharray": "none"}}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "position": "left", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 15, "grid": {"gridOn": false}}], "id": "el12168140358887248056", "axesbgalpha": null, "markers": [], "xlim": [16781.25, 5.0], "paths": [{"xindex": 0, "zorder": 1, "id": "el12168140358886613512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358887100368", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886614352", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886615248", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 2, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886616144", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data04", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886617040", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data05", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886630288", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886631184", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886632080", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data07", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886632976", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 4, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886658512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data08", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886659408", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data09", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886660304", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data10", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886661200", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 5, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886662096", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data11", "edgewidth": 1.0}], "sharex": [], "sharey": ["el12168140358886973624"], "zoomable": true, "ydomain": [17.75, 34.25], "xdomain": [16781.25, 5.0]}, {"images": [], "axesbg": "#FFFFFF", "lines": [], "xscale": "linear", "ylim": [17.75, 34.25], "collections": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "texts": [{"zorder": 3, "id": "el12168140358886976032", "coordinates": "axes", "fontsize": 14.0, "rotation": -0.0, "color": "#000000", "v_baseline": "hanging", "position": [0.5, -0.07921476671476674], "h_anchor": "middle", "alpha": 1, "text": "Instat index"}], "axes": [{"tickvalues": [226, 237, 248, 259, 273], "tickformat": null, "position": "bottom", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 5, "grid": {"color": "#B0B0B0", "alpha": 1.0, "gridOn": true, "dasharray": "none"}}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "position": "right", "visible": true, "scale": "linear", "fontsize": null, "nticks": 15, "grid": {"gridOn": false}}], "id": "el12168140358886973624", "axesbgalpha": null, "markers": [], "xlim": [216.0, 283.0], "paths": [{"xindex": 2, "zorder": 1, "id": "el12168140358886688752", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886613176", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886689480", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886690376", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 4, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886707720", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data04", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886708616", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data05", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886709512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886710408", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 5, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886711192", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data07", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886732744", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 6, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886733640", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886734536", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886735432", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data10", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886756872", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 7, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886757768", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data11", "edgewidth": 1.0}], "sharex": [], "sharey": ["el12168140358887248056"], "zoomable": true, "ydomain": [17.75, 34.25], "xdomain": [216.0, 283.0]}]});
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
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            var test = obj.elements()[0]['parentNode'];
            $(test).on('mousedown', obj.elements(),
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
                console.log(id, i, obj, glob);
                console.log(obj.elements());
            var test = obj.elements()[0]['parentNode'];
            $(test).on('mousedown', obj.elements(),
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
    
                 mpld3.draw_figure("id1", {"data": {"data01": [[0.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 18.5, 0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [5.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 19.5, 0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data10": [[0.0, 30.5, 0.0], [862.0, 30.5, 246.0], [862.0, 31.5, 246.0], [0.0, 31.5, 0.0]], "data09": [[0.0, 29.5], [2059.0, 29.5], [2059.0, 30.5], [0.0, 30.5]], "data08": [[0.0, 28.5], [3653.0, 28.5], [3653.0, 29.5], [0.0, 29.5]], "data11": [[0.0, 32.5, 0.0], [3264.0, 32.5, 247.0], [3264.0, 33.5, 247.0], [0.0, 33.5, 0.0]], "data06": [[0.0, 24.5, 0.0, 28.5], [4905.0, 24.5, 263.0, 28.5], [4905.0, 25.5, 263.0, 29.5], [0.0, 25.5, 0.0, 29.5]], "data02": [[0.0, 19.5, 0.0, 29.5], [3207.0, 19.5, 261.0, 29.5], [3207.0, 20.5, 261.0, 30.5], [0.0, 20.5, 0.0, 30.5]], "data07": [[0.0, 26.5, 0.0], [13426.0, 26.5, 273.0], [13426.0, 27.5, 273.0], [0.0, 27.5, 0.0]], "data03": [[0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 20.5, 21.5, 25.5, 27.5, 31.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5], [0.0, 21.5, 22.5, 26.5, 28.5, 32.5]], "data05": [[0.0, 23.5, 0.0], [3185.0, 23.5, 272.0], [3185.0, 24.5, 272.0], [0.0, 24.5, 0.0]], "data04": [[0.0, 22.5, 0.0], [662.0, 22.5, 226.0], [662.0, 23.5, 226.0], [0.0, 23.5, 0.0]]}, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}, "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "type": "clickinfo", "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "low": 19, "ids": ["el12168140358886613512", "el12168140358887100368", "el12168140358886614352", "el12168140358886615248", "el12168140358886616144", "el12168140358886617040", "el12168140358886630288", "el12168140358886631184", "el12168140358886632080", "el12168140358886632976", "el12168140358886658512", "el12168140358886659408", "el12168140358886660304", "el12168140358886661200", "el12168140358886662096"]}, {"players": {"472324": ["Denis Gojko", 129, 230], "95037": ["Aleksander Jagie\u0142\u0142o", 662, 226], "15112": ["Mikkel Kirkeskov", 3445, 276], "163210": ["Jorge Felix", 2662, 271], "64651": ["Mateusz Mak", 1000, 242], "447379": ["Pawel Tomczyk", 67, 231], "362260": ["Karsten Ayong", 16, 220], "24213": ["Uros Korun", 862, 246], "9238": ["Tomasz Jod\u0142owiec", 1620, 265], "63395": ["Jakub Czerwi\u0144ski", 3447, 269], "158628": ["Aleksandar Sedlar", 2872, 285], "272939": ["Patryk Dziczek", 2995, 263], "27503": ["Gerard Badia", 852, 247], "4208": ["Michal Papadopulos", 1644, 230], "28083": ["Tom Hateley", 2801, 267], "164532": ["Martin Konczkowski", 2668, 270], "14133": ["Joel Valencia", 2977, 273], "158324": ["Piotr Parzyszek", 1821, 255], "259194": ["Patryk Soko\u0142owski", 208, 245], "399419": ["Karol Stanek", 5, 0], "191229": ["Tomasz Mokwa", 416, 250], "23294": ["Marcin Pietrowski", 2059, 261]}, "alls": [["Jakub Czerwi\u0144ski", [3447, 269]], ["Mikkel Kirkeskov", [3445, 276]], ["Patryk Dziczek", [2995, 263]], ["Joel Valencia", [2977, 273]], ["Aleksandar Sedlar", [2872, 285]], ["Tom Hateley", [2801, 267]], ["Martin Konczkowski", [2668, 270]], ["Jorge Felix", [2662, 271]], ["Marcin Pietrowski", [2059, 261]], ["Piotr Parzyszek", [1821, 255]], ["Michal Papadopulos", [1644, 230]], ["Tomasz Jod\u0142owiec", [1620, 265]], ["Mateusz Mak", [1000, 242]], ["Uros Korun", [862, 246]], ["Gerard Badia", [852, 247]], ["Aleksander Jagie\u0142\u0142o", [662, 226]], ["Tomasz Mokwa", [416, 250]], ["Patryk Soko\u0142owski", [208, 245]], ["Denis Gojko", [129, 230]], ["Pawel Tomczyk", [67, 231]], ["Karsten Ayong", [16, 220]], ["Karol Stanek", [5, 0]]], "type": "clickinfo", "wiek": {"33": [4208, 9238], "19": [399419], "20": [272939, 472324, 447379, 362260], "23": [95037], "24": [14133, 259194], "25": [164532, 158324, 191229], "27": [63395, 15112, 158628, 163210, 64651], "29": [28083, 27503], "30": [23294], "31": [24213]}, "vals": {"33": [3264, 247], "19": [5, 0], "20": [3207, 261], "23": [662, 226], "24": [3185, 272], "25": [4905, 263], "27": [13426, 273], "29": [3653, 263], "30": [2059, 261], "31": [862, 246]}, "low": 19, "ids": ["el12168140358886688752", "el12168140358886613176", "el12168140358886689480", "el12168140358886690376", "el12168140358886707720", "el12168140358886708616", "el12168140358886709512", "el12168140358886710408", "el12168140358886711192", "el12168140358886732744", "el12168140358886733640", "el12168140358886734536", "el12168140358886735432", "el12168140358886756872", "el12168140358886757768"]}], "id": "el12168140358887808528", "width": 640.0, "height": 480.0, "axes": [{"images": [], "axesbg": "#FFFFFF", "lines": [], "xscale": "linear", "ylim": [17.75, 34.25], "collections": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "yscale": "linear", "texts": [{"zorder": 3, "id": "el12168140358887356288", "coordinates": "axes", "fontsize": 14.0, "rotation": -0.0, "color": "#000000", "v_baseline": "hanging", "position": [0.5, -0.07921476671476674], "h_anchor": "middle", "alpha": 1, "text": "Minuty"}], "axes": [{"tickvalues": null, "tickformat": null, "position": "bottom", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 5, "grid": {"color": "#B0B0B0", "alpha": 1.0, "gridOn": true, "dasharray": "none"}}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "position": "left", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 15, "grid": {"gridOn": false}}], "id": "el12168140358887248056", "axesbgalpha": null, "markers": [], "xlim": [16781.25, 5.0], "paths": [{"xindex": 0, "zorder": 1, "id": "el12168140358886613512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358887100368", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886614352", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886615248", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 2, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886616144", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data04", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886617040", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data05", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886630288", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886631184", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886632080", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data07", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886632976", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 4, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886658512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data08", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886659408", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data09", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886660304", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data10", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886661200", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 5, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data03", "edgewidth": 1.0}, {"xindex": 0, "zorder": 1, "id": "el12168140358886662096", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FF0000", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data11", "edgewidth": 1.0}], "sharex": [], "sharey": ["el12168140358886973624"], "zoomable": true, "ydomain": [17.75, 34.25], "xdomain": [16781.25, 5.0]}, {"images": [], "axesbg": "#FFFFFF", "lines": [], "xscale": "linear", "ylim": [17.75, 34.25], "collections": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "yscale": "linear", "texts": [{"zorder": 3, "id": "el12168140358886976032", "coordinates": "axes", "fontsize": 14.0, "rotation": -0.0, "color": "#000000", "v_baseline": "hanging", "position": [0.5, -0.07921476671476674], "h_anchor": "middle", "alpha": 1, "text": "Instat index"}], "axes": [{"tickvalues": [226, 237, 248, 259, 273], "tickformat": null, "position": "bottom", "visible": true, "scale": "linear", "fontsize": 10.0, "nticks": 5, "grid": {"color": "#B0B0B0", "alpha": 1.0, "gridOn": true, "dasharray": "none"}}, {"tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "position": "right", "visible": true, "scale": "linear", "fontsize": null, "nticks": 15, "grid": {"gridOn": false}}], "id": "el12168140358886973624", "axesbgalpha": null, "markers": [], "xlim": [216.0, 283.0], "paths": [{"xindex": 2, "zorder": 1, "id": "el12168140358886688752", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886613176", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886689480", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886690376", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 4, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886707720", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data04", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886708616", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data05", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886709512", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886710408", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 5, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886711192", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data07", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886732744", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 6, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886733640", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data06", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886734536", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 3, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data02", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886735432", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data10", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886756872", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 7, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data01", "edgewidth": 1.0}, {"xindex": 2, "zorder": 1, "id": "el12168140358886757768", "coordinates": "data", "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "facecolor": "#FFA500", "dasharray": "none", "edgecolor": "none", "alpha": 0.7, "data": "data11", "edgewidth": 1.0}], "sharex": [], "sharey": ["el12168140358887248056"], "zoomable": true, "ydomain": [17.75, 34.25], "xdomain": [216.0, 283.0]}]});
            })
         });
}

