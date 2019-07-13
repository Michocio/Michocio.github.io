

<style>

</style>

<div id="id15"></div>
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
    
       mpld3.draw_figure("id15", {"id": "el6928140242924738376", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "type": "clickinfo", "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "low": 19, "ids": ["el6928140242922247896", "el6928140242922247392", "el6928140242922248736", "el6928140242922249632", "el6928140242922275168", "el6928140242922276064", "el6928140242922276960", "el6928140242922277856", "el6928140242922278752", "el6928140242922300192", "el6928140242922301088", "el6928140242922301984", "el6928140242922302880", "el6928140242922324320", "el6928140242922325216", "el6928140242922326112", "el6928140242922327008", "el6928140242922327904", "el6928140242921825056"]}, {"wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "type": "clickinfo", "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "low": 19, "ids": ["el6928140242921827072", "el6928140242922247560", "el6928140242921827800", "el6928140242921849240", "el6928140242921850136", "el6928140242921851032", "el6928140242921851928", "el6928140242921852824", "el6928140242921882456", "el6928140242921883352", "el6928140242921884248", "el6928140242921885144", "el6928140242921902488", "el6928140242921903384", "el6928140242921904280", "el6928140242921905176", "el6928140242921906072", "el6928140242921927512", "el6928140242921928408"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "fontsize": 10.0, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242922474072", "zoomable": true, "sharey": ["el6928140242922698344"], "yscale": "linear", "texts": [{"id": "el6928140242922521376", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9339.25, 43.0], "xscale": "linear", "ydomain": [17.55, 38.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [17.55, 38.45], "paths": [{"id": "el6928140242922247896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922247392", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922248736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922249632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922275168", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922276064", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922276960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922277856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922278752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922300192", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922301088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922301984", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922302880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922324320", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922325216", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922326112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922327008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922327904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921825056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9339.25, 43.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [218, 232, 246, 260, 274], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "fontsize": null, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242922698344", "zoomable": true, "sharey": ["el6928140242922474072"], "yscale": "linear", "texts": [{"id": "el6928140242922652336", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [208.0, 284.0], "xscale": "linear", "ydomain": [17.55, 38.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [17.55, 38.45], "paths": [{"id": "el6928140242921827072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922247560", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921827800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921849240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921850136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921851032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921851928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921852824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921882456", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921883352", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921884248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921885144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921902488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921903384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921904280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921905176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921906072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921927512", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921928408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [208.0, 284.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id15", {"id": "el6928140242924738376", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "type": "clickinfo", "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "low": 19, "ids": ["el6928140242922247896", "el6928140242922247392", "el6928140242922248736", "el6928140242922249632", "el6928140242922275168", "el6928140242922276064", "el6928140242922276960", "el6928140242922277856", "el6928140242922278752", "el6928140242922300192", "el6928140242922301088", "el6928140242922301984", "el6928140242922302880", "el6928140242922324320", "el6928140242922325216", "el6928140242922326112", "el6928140242922327008", "el6928140242922327904", "el6928140242921825056"]}, {"wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "type": "clickinfo", "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "low": 19, "ids": ["el6928140242921827072", "el6928140242922247560", "el6928140242921827800", "el6928140242921849240", "el6928140242921850136", "el6928140242921851032", "el6928140242921851928", "el6928140242921852824", "el6928140242921882456", "el6928140242921883352", "el6928140242921884248", "el6928140242921885144", "el6928140242921902488", "el6928140242921903384", "el6928140242921904280", "el6928140242921905176", "el6928140242921906072", "el6928140242921927512", "el6928140242921928408"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "fontsize": 10.0, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242922474072", "zoomable": true, "sharey": ["el6928140242922698344"], "yscale": "linear", "texts": [{"id": "el6928140242922521376", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9339.25, 43.0], "xscale": "linear", "ydomain": [17.55, 38.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [17.55, 38.45], "paths": [{"id": "el6928140242922247896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922247392", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922248736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922249632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922275168", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922276064", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922276960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922277856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922278752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922300192", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922301088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922301984", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922302880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922324320", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922325216", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922326112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922327008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922327904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921825056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9339.25, 43.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [218, 232, 246, 260, 274], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "fontsize": null, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242922698344", "zoomable": true, "sharey": ["el6928140242922474072"], "yscale": "linear", "texts": [{"id": "el6928140242922652336", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [208.0, 284.0], "xscale": "linear", "ydomain": [17.55, 38.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [17.55, 38.45], "paths": [{"id": "el6928140242921827072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922247560", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921827800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921849240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921850136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921851032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921851928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921852824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921882456", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921883352", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921884248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921885144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921902488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921903384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921904280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921905176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921906072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921927512", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921928408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [208.0, 284.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id15", {"id": "el6928140242924738376", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "type": "clickinfo", "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "low": 19, "ids": ["el6928140242922247896", "el6928140242922247392", "el6928140242922248736", "el6928140242922249632", "el6928140242922275168", "el6928140242922276064", "el6928140242922276960", "el6928140242922277856", "el6928140242922278752", "el6928140242922300192", "el6928140242922301088", "el6928140242922301984", "el6928140242922302880", "el6928140242922324320", "el6928140242922325216", "el6928140242922326112", "el6928140242922327008", "el6928140242922327904", "el6928140242921825056"]}, {"wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "type": "clickinfo", "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "low": 19, "ids": ["el6928140242921827072", "el6928140242922247560", "el6928140242921827800", "el6928140242921849240", "el6928140242921850136", "el6928140242921851032", "el6928140242921851928", "el6928140242921852824", "el6928140242921882456", "el6928140242921883352", "el6928140242921884248", "el6928140242921885144", "el6928140242921902488", "el6928140242921903384", "el6928140242921904280", "el6928140242921905176", "el6928140242921906072", "el6928140242921927512", "el6928140242921928408"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 6}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "fontsize": 10.0, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242922474072", "zoomable": true, "sharey": ["el6928140242922698344"], "yscale": "linear", "texts": [{"id": "el6928140242922521376", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [9339.25, 43.0], "xscale": "linear", "ydomain": [17.55, 38.45], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [17.55, 38.45], "paths": [{"id": "el6928140242922247896", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922247392", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922248736", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922249632", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922275168", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922276064", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922276960", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922277856", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922278752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922300192", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922301088", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922301984", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922302880", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922324320", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922325216", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922326112", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922327008", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 5, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922327904", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921825056", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [9339.25, 43.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [218, 232, 246, 260, 274], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "fontsize": null, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "nticks": 19}], "images": [], "markers": [], "id": "el6928140242922698344", "zoomable": true, "sharey": ["el6928140242922474072"], "yscale": "linear", "texts": [{"id": "el6928140242922652336", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [208.0, 284.0], "xscale": "linear", "ydomain": [17.55, 38.45], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [17.55, 38.45], "paths": [{"id": "el6928140242921827072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242922247560", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921827800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921849240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921850136", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921851032", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921851928", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921852824", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921882456", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921883352", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921884248", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 5, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921885144", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921902488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921903384", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 6, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921904280", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921905176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921906072", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 7, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921927512", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242921928408", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [208.0, 284.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
