

<style>

</style>

<div id="id3"></div>
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
    
       mpld3.draw_figure("id3", {"id": "el6928140243002417048", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "type": "clickinfo", "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "ids": ["el6928140242985039464", "el6928140242985039072", "el6928140242985040304", "el6928140242985041144", "el6928140242985083064", "el6928140242985083960", "el6928140242985084856", "el6928140242985085752", "el6928140242985086648", "el6928140242985103992", "el6928140242985104888", "el6928140242985105784", "el6928140242985106680", "el6928140242985128120", "el6928140242985129016", "el6928140242985129912", "el6928140242985130808", "el6928140242985131704", "el6928140242985153144"]}, {"wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "type": "clickinfo", "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "ids": ["el6928140242985155160", "el6928140242985039128", "el6928140242985155888", "el6928140242985189616", "el6928140242985190512", "el6928140242985191408", "el6928140242985192304", "el6928140242985193200", "el6928140242985218736", "el6928140242985219632", "el6928140242985220528", "el6928140242985221424", "el6928140242985242864", "el6928140242985243760", "el6928140242985244656", "el6928140242985245552", "el6928140242985246448", "el6928140242984739504", "el6928140242984740400"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140243000518640", "zoomable": true, "sharey": ["el6928140242985397272"], "yscale": "linear", "texts": [{"id": "el6928140243000566448", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9307.5, 5.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242985039464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985039072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985040304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985041144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985083064", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985083960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985084856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985085752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985086648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985103992", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985104888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985105784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985106680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985128120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985129016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985129912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985130808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985131704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985153144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9307.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [235, 245, 255, 265, 275], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242985397272", "zoomable": true, "sharey": ["el6928140243000518640"], "yscale": "linear", "texts": [{"id": "el6928140242985436608", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [225.0, 285.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242985155160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985039128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985155888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985189616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985190512", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985191408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985192304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985193200", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985218736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985219632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985220528", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985221424", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985242864", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985243760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985244656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985245552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985246448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242984739504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242984740400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [225.0, 285.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id3", {"id": "el6928140243002417048", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "type": "clickinfo", "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "ids": ["el6928140242985039464", "el6928140242985039072", "el6928140242985040304", "el6928140242985041144", "el6928140242985083064", "el6928140242985083960", "el6928140242985084856", "el6928140242985085752", "el6928140242985086648", "el6928140242985103992", "el6928140242985104888", "el6928140242985105784", "el6928140242985106680", "el6928140242985128120", "el6928140242985129016", "el6928140242985129912", "el6928140242985130808", "el6928140242985131704", "el6928140242985153144"]}, {"wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "type": "clickinfo", "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "ids": ["el6928140242985155160", "el6928140242985039128", "el6928140242985155888", "el6928140242985189616", "el6928140242985190512", "el6928140242985191408", "el6928140242985192304", "el6928140242985193200", "el6928140242985218736", "el6928140242985219632", "el6928140242985220528", "el6928140242985221424", "el6928140242985242864", "el6928140242985243760", "el6928140242985244656", "el6928140242985245552", "el6928140242985246448", "el6928140242984739504", "el6928140242984740400"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140243000518640", "zoomable": true, "sharey": ["el6928140242985397272"], "yscale": "linear", "texts": [{"id": "el6928140243000566448", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9307.5, 5.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242985039464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985039072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985040304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985041144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985083064", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985083960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985084856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985085752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985086648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985103992", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985104888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985105784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985106680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985128120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985129016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985129912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985130808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985131704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985153144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9307.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [235, 245, 255, 265, 275], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242985397272", "zoomable": true, "sharey": ["el6928140243000518640"], "yscale": "linear", "texts": [{"id": "el6928140242985436608", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [225.0, 285.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242985155160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985039128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985155888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985189616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985190512", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985191408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985192304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985193200", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985218736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985219632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985220528", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985221424", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985242864", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985243760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985244656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985245552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985246448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242984739504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242984740400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [225.0, 285.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id3", {"id": "el6928140243002417048", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "type": "clickinfo", "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "ids": ["el6928140242985039464", "el6928140242985039072", "el6928140242985040304", "el6928140242985041144", "el6928140242985083064", "el6928140242985083960", "el6928140242985084856", "el6928140242985085752", "el6928140242985086648", "el6928140242985103992", "el6928140242985104888", "el6928140242985105784", "el6928140242985106680", "el6928140242985128120", "el6928140242985129016", "el6928140242985129912", "el6928140242985130808", "el6928140242985131704", "el6928140242985153144"]}, {"wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "type": "clickinfo", "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "ids": ["el6928140242985155160", "el6928140242985039128", "el6928140242985155888", "el6928140242985189616", "el6928140242985190512", "el6928140242985191408", "el6928140242985192304", "el6928140242985193200", "el6928140242985218736", "el6928140242985219632", "el6928140242985220528", "el6928140242985221424", "el6928140242985242864", "el6928140242985243760", "el6928140242985244656", "el6928140242985245552", "el6928140242985246448", "el6928140242984739504", "el6928140242984740400"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140243000518640", "zoomable": true, "sharey": ["el6928140242985397272"], "yscale": "linear", "texts": [{"id": "el6928140243000566448", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9307.5, 5.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242985039464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985039072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985040304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985041144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985083064", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985083960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985084856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985085752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985086648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985103992", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985104888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985105784", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985106680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985128120", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985129016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985129912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985130808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985131704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985153144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9307.5, 5.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [235, 245, 255, 265, 275], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242985397272", "zoomable": true, "sharey": ["el6928140243000518640"], "yscale": "linear", "texts": [{"id": "el6928140242985436608", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [225.0, 285.0], "xscale": "linear", "ydomain": [14.55, 35.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [14.55, 35.45], "paths": [{"id": "el6928140242985155160", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985039128", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985155888", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985189616", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985190512", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985191408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985192304", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985193200", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985218736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985219632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985220528", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985221424", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985242864", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985243760", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985244656", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985245552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242985246448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242984739504", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242984740400", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [225.0, 285.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
