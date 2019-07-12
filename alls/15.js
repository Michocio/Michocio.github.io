

 

 

 
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            obj.elements().on("mousedown",
                              function(d){
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            obj.elements().on("mousedown",
                              function(d){
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
    
       mpld3.draw_figure("id15", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "ids": ["el10757139727017642024", "el10757139727017641520", "el10757139727017642808", "el10757139727017643704", "el10757139727017669240", "el10757139727017670136", "el10757139727017671032", "el10757139727017671928", "el10757139727017693368", "el10757139727017694264", "el10757139727017695160", "el10757139727017696056", "el10757139727017696952", "el10757139727017722488", "el10757139727017723384", "el10757139727017724280", "el10757139727017725176", "el10757139727017218232", "el10757139727017219128"], "type": "clickinfo", "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19}, {"alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "ids": ["el10757139727017221200", "el10757139727017641688", "el10757139727017221872", "el10757139727017247408", "el10757139727017248304", "el10757139727017249200", "el10757139727017250096", "el10757139727017271536", "el10757139727017272432", "el10757139727017273328", "el10757139727017274224", "el10757139727017275120", "el10757139727017296560", "el10757139727017297456", "el10757139727017298352", "el10757139727017299248", "el10757139727017320688", "el10757139727017321584", "el10757139727017322480"], "type": "clickinfo", "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19}], "height": 480.0, "id": "el10757139727020091656", "data": {"data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727017919712", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [9339.25, 43.0], "ydomain": [17.55, 38.45], "sharex": [], "xlim": [9339.25, 43.0], "images": [], "sharey": ["el10757139727018096008"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 19, "fontsize": 10.0, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727017860176", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [17.55, 38.45], "paths": [{"xindex": 0, "id": "el10757139727017642024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727017641520", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727017642808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727017643704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727017669240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727017670136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727017671032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727017671928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data04"}, {"xindex": 0, "id": "el10757139727017693368", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727017694264", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727017695160", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data04"}, {"xindex": 0, "id": "el10757139727017696056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727017696952", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727017722488", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data04"}, {"xindex": 0, "id": "el10757139727017723384", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727017724280", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727017725176", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data04"}, {"xindex": 0, "id": "el10757139727017218232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727017219128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727018049664", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [208.0, 284.0], "ydomain": [17.55, 38.45], "sharex": [], "xlim": [208.0, 284.0], "images": [], "sharey": ["el10757139727017860176"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [218, 232, 246, 260, 274], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 19, "fontsize": null, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018096008", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [17.55, 38.45], "paths": [{"xindex": 2, "id": "el10757139727017221200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727017641688", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727017221872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727017247408", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727017248304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727017249200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727017250096", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727017271536", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727017272432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 2, "id": "el10757139727017273328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727017274224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data01"}, {"xindex": 2, "id": "el10757139727017275120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data06"}, {"xindex": 2, "id": "el10757139727017296560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727017297456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data01"}, {"xindex": 2, "id": "el10757139727017298352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727017299248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727017320688", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data01"}, {"xindex": 2, "id": "el10757139727017321584", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727017322480", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            obj.elements().on("mousedown",
                              function(d){
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            obj.elements().on("mousedown",
                              function(d){
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
    
         mpld3.draw_figure("id15", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "ids": ["el10757139727017642024", "el10757139727017641520", "el10757139727017642808", "el10757139727017643704", "el10757139727017669240", "el10757139727017670136", "el10757139727017671032", "el10757139727017671928", "el10757139727017693368", "el10757139727017694264", "el10757139727017695160", "el10757139727017696056", "el10757139727017696952", "el10757139727017722488", "el10757139727017723384", "el10757139727017724280", "el10757139727017725176", "el10757139727017218232", "el10757139727017219128"], "type": "clickinfo", "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19}, {"alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "ids": ["el10757139727017221200", "el10757139727017641688", "el10757139727017221872", "el10757139727017247408", "el10757139727017248304", "el10757139727017249200", "el10757139727017250096", "el10757139727017271536", "el10757139727017272432", "el10757139727017273328", "el10757139727017274224", "el10757139727017275120", "el10757139727017296560", "el10757139727017297456", "el10757139727017298352", "el10757139727017299248", "el10757139727017320688", "el10757139727017321584", "el10757139727017322480"], "type": "clickinfo", "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19}], "height": 480.0, "id": "el10757139727020091656", "data": {"data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727017919712", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [9339.25, 43.0], "ydomain": [17.55, 38.45], "sharex": [], "xlim": [9339.25, 43.0], "images": [], "sharey": ["el10757139727018096008"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 19, "fontsize": 10.0, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727017860176", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [17.55, 38.45], "paths": [{"xindex": 0, "id": "el10757139727017642024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727017641520", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727017642808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727017643704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727017669240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727017670136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727017671032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727017671928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data04"}, {"xindex": 0, "id": "el10757139727017693368", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727017694264", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727017695160", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data04"}, {"xindex": 0, "id": "el10757139727017696056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727017696952", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727017722488", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data04"}, {"xindex": 0, "id": "el10757139727017723384", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727017724280", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727017725176", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data04"}, {"xindex": 0, "id": "el10757139727017218232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727017219128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727018049664", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [208.0, 284.0], "ydomain": [17.55, 38.45], "sharex": [], "xlim": [208.0, 284.0], "images": [], "sharey": ["el10757139727017860176"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [218, 232, 246, 260, 274], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 19, "fontsize": null, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018096008", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [17.55, 38.45], "paths": [{"xindex": 2, "id": "el10757139727017221200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727017641688", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727017221872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727017247408", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727017248304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727017249200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727017250096", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727017271536", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727017272432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 2, "id": "el10757139727017273328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727017274224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data01"}, {"xindex": 2, "id": "el10757139727017275120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data06"}, {"xindex": 2, "id": "el10757139727017296560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727017297456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data01"}, {"xindex": 2, "id": "el10757139727017298352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727017299248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727017320688", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data01"}, {"xindex": 2, "id": "el10757139727017321584", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727017322480", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            obj.elements().on("mousedown",
                              function(d){
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
    table.append('thead');
    var tbody = d3.select("tbody");

    
                
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
            obj.elements().on("mousedown",
                              function(d){
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
    
                 mpld3.draw_figure("id15", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "ids": ["el10757139727017642024", "el10757139727017641520", "el10757139727017642808", "el10757139727017643704", "el10757139727017669240", "el10757139727017670136", "el10757139727017671032", "el10757139727017671928", "el10757139727017693368", "el10757139727017694264", "el10757139727017695160", "el10757139727017696056", "el10757139727017696952", "el10757139727017722488", "el10757139727017723384", "el10757139727017724280", "el10757139727017725176", "el10757139727017218232", "el10757139727017219128"], "type": "clickinfo", "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19}, {"alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "ids": ["el10757139727017221200", "el10757139727017641688", "el10757139727017221872", "el10757139727017247408", "el10757139727017248304", "el10757139727017249200", "el10757139727017250096", "el10757139727017271536", "el10757139727017272432", "el10757139727017273328", "el10757139727017274224", "el10757139727017275120", "el10757139727017296560", "el10757139727017297456", "el10757139727017298352", "el10757139727017299248", "el10757139727017320688", "el10757139727017321584", "el10757139727017322480"], "type": "clickinfo", "vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19}], "height": 480.0, "id": "el10757139727020091656", "data": {"data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727017919712", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [9339.25, 43.0], "ydomain": [17.55, 38.45], "sharex": [], "xlim": [9339.25, 43.0], "images": [], "sharey": ["el10757139727018096008"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 19, "fontsize": 10.0, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727017860176", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [17.55, 38.45], "paths": [{"xindex": 0, "id": "el10757139727017642024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727017641520", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727017642808", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727017643704", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727017669240", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727017670136", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727017671032", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727017671928", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 2, "data": "data04"}, {"xindex": 0, "id": "el10757139727017693368", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727017694264", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727017695160", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data04"}, {"xindex": 0, "id": "el10757139727017696056", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727017696952", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727017722488", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data04"}, {"xindex": 0, "id": "el10757139727017723384", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727017724280", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727017725176", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data04"}, {"xindex": 0, "id": "el10757139727017218232", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727017219128", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727018049664", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [208.0, 284.0], "ydomain": [17.55, 38.45], "sharex": [], "xlim": [208.0, 284.0], "images": [], "sharey": ["el10757139727017860176"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [218, 232, 246, 260, 274], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 19, "fontsize": null, "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727018096008", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [17.55, 38.45], "paths": [{"xindex": 2, "id": "el10757139727017221200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727017641688", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727017221872", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727017247408", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727017248304", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727017249200", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727017250096", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727017271536", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727017272432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data05"}, {"xindex": 2, "id": "el10757139727017273328", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727017274224", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 5, "data": "data01"}, {"xindex": 2, "id": "el10757139727017275120", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data06"}, {"xindex": 2, "id": "el10757139727017296560", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727017297456", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 6, "data": "data01"}, {"xindex": 2, "id": "el10757139727017298352", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727017299248", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727017320688", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 7, "data": "data01"}, {"xindex": 2, "id": "el10757139727017321584", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727017322480", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
