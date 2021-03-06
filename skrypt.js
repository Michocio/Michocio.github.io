

function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
};


if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){
       
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
       mpld3.draw_figure("aaa", {"data": {"data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.89994008388254], [3338.0, 34.5, 260.89994008388254], [0.0, 34.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data06": [[0.0, 20.5, 0.0], [1273.0, 20.5, 244.0233118971061], [1273.0, 21.5, 244.0233118971061], [0.0, 21.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.60791157649794], [1752.0, 20.5, 264.60791157649794], [0.0, 20.5, 0.0]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.71141781681305], [816.0, 31.5, 245.71141781681305], [0.0, 31.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.67777777777778], [208.0, 17.5, 235.67777777777778], [0.0, 17.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.2927769985975], [2852.0, 30.5, 275.2927769985975], [0.0, 30.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.55539088551313], [2699.0, 22.5, 268.55539088551313], [0.0, 22.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [566.0, 25.5, 244.09363957597174], [566.0, 26.5, 244.09363957597174], [0.0, 26.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.3140409162441], [5761.0, 23.5, 248.3140409162441], [0.0, 23.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1763.0, 23.5, 247.74588769143506], [1763.0, 24.5, 247.74588769143506], [0.0, 24.5, 0.0]], "data04": [[0.0, 18.5, 0.0], [2024.0, 18.5, 247.33997013439523], [2024.0, 19.5, 247.33997013439523], [0.0, 19.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.1472846175718], [3517.0, 25.5, 266.1472846175718], [0.0, 25.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.06338122733985], [7447.0, 27.5, 265.06338122733985], [0.0, 27.5, 0.0]], "data13": [[0.0, 27.5, 0.0], [1631.0, 27.5, 244.4414469650521], [1631.0, 28.5, 244.4414469650521], [0.0, 28.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"type": "clickinfo", "ids": ["el17358139933038384072", "el17358139933038383680", "el17358139933038384856", "el17358139933038385696", "el17358139933038386592", "el17358139933038428512", "el17358139933038429408", "el17358139933038430304", "el17358139933038431200", "el17358139933038432096", "el17358139933038453536", "el17358139933038454432", "el17358139933038455328", "el17358139933038456224", "el17358139933038477664", "el17358139933038478560", "el17358139933038479456", "el17358139933038480352", "el17358139933038481248"], "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}}, {"type": "clickinfo", "ids": ["el17358139933038503864", "el17358139933038383736", "el17358139933038504536", "el17358139933038505432", "el17358139933038543256", "el17358139933038544152", "el17358139933038545048", "el17358139933038545944", "el17358139933038546840", "el17358139933038572376", "el17358139933038573272", "el17358139933038574168", "el17358139933038575064", "el17358139933038596504", "el17358139933038597400", "el17358139933038598296", "el17358139933038599192", "el17358139933038600088", "el17358139933038097240"], "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}}], "width": 640.0, "height": 480.0, "axes": [{"yscale": "linear", "xlim": [8191.2, 5.0], "xdomain": [8191.2, 5.0], "ylim": [14.55, 35.45], "markers": [], "paths": [{"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 1, "edgecolor": "none", "id": "el17358139933038384072", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "yindex": 1, "edgecolor": "none", "id": "el17358139933038383680", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "yindex": 1, "edgecolor": "none", "id": "el17358139933038384856", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "yindex": 1, "edgecolor": "none", "id": "el17358139933038385696", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "yindex": 1, "edgecolor": "none", "id": "el17358139933038386592", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "yindex": 1, "edgecolor": "none", "id": "el17358139933038428512", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "yindex": 1, "edgecolor": "none", "id": "el17358139933038429408", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "yindex": 1, "edgecolor": "none", "id": "el17358139933038430304", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "yindex": 1, "edgecolor": "none", "id": "el17358139933038431200", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "yindex": 1, "edgecolor": "none", "id": "el17358139933038432096", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "yindex": 1, "edgecolor": "none", "id": "el17358139933038453536", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "yindex": 1, "edgecolor": "none", "id": "el17358139933038454432", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "yindex": 1, "edgecolor": "none", "id": "el17358139933038455328", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "yindex": 1, "edgecolor": "none", "id": "el17358139933038456224", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "yindex": 1, "edgecolor": "none", "id": "el17358139933038477664", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "yindex": 1, "edgecolor": "none", "id": "el17358139933038478560", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "yindex": 2, "edgecolor": "none", "id": "el17358139933038479456", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "yindex": 1, "edgecolor": "none", "id": "el17358139933038480352", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "yindex": 1, "edgecolor": "none", "id": "el17358139933038481248", "facecolor": "#FF0000", "coordinates": "data"}], "collections": [], "axesbg": "#FFFFFF", "zoomable": true, "axes": [{"visible": true, "tickvalues": null, "tickformat": null, "scale": "linear", "position": "bottom", "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}, "nticks": 6, "fontsize": 10.0}, {"visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left", "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0}], "images": [], "ydomain": [14.55, 35.45], "xscale": "linear", "texts": [{"alpha": 1, "color": "#000000", "zorder": 3, "id": "el17358139933056779040", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes", "rotation": -0.0, "text": "Minuty", "position": [0.5, -0.07921476671476674], "h_anchor": "middle"}], "axesbgalpha": null, "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el17358139933038750296"], "id": "el17358139933053875536", "lines": []}, {"yscale": "linear", "xlim": [225.67777777777778, 285.2927769985975], "xdomain": [225.67777777777778, 285.2927769985975], "ylim": [14.55, 35.45], "markers": [], "paths": [{"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 1, "edgecolor": "none", "id": "el17358139933038503864", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "yindex": 1, "edgecolor": "none", "id": "el17358139933038383736", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 3, "edgecolor": "none", "id": "el17358139933038504536", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "yindex": 1, "edgecolor": "none", "id": "el17358139933038505432", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "yindex": 1, "edgecolor": "none", "id": "el17358139933038543256", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "yindex": 1, "edgecolor": "none", "id": "el17358139933038544152", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "yindex": 1, "edgecolor": "none", "id": "el17358139933038545048", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "yindex": 1, "edgecolor": "none", "id": "el17358139933038545944", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "yindex": 1, "edgecolor": "none", "id": "el17358139933038546840", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "yindex": 1, "edgecolor": "none", "id": "el17358139933038572376", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "yindex": 1, "edgecolor": "none", "id": "el17358139933038573272", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "yindex": 1, "edgecolor": "none", "id": "el17358139933038574168", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "yindex": 1, "edgecolor": "none", "id": "el17358139933038575064", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 4, "edgecolor": "none", "id": "el17358139933038596504", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "yindex": 1, "edgecolor": "none", "id": "el17358139933038597400", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "yindex": 1, "edgecolor": "none", "id": "el17358139933038598296", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 5, "edgecolor": "none", "id": "el17358139933038599192", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 6, "edgecolor": "none", "id": "el17358139933038600088", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "yindex": 1, "edgecolor": "none", "id": "el17358139933038097240", "facecolor": "#FFA500", "coordinates": "data"}], "collections": [], "axesbg": "#FFFFFF", "zoomable": true, "axes": [{"visible": true, "tickvalues": [235, 244, 253, 262, 275], "tickformat": null, "scale": "linear", "position": "bottom", "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}, "nticks": 5, "fontsize": 10.0}, {"visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right", "grid": {"gridOn": false}, "nticks": 19, "fontsize": null}], "images": [], "ydomain": [14.55, 35.45], "xscale": "linear", "texts": [{"alpha": 1, "color": "#000000", "zorder": 3, "id": "el17358139933038789632", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes", "rotation": -0.0, "text": "Instat index", "position": [0.5, -0.07921476671476674], "h_anchor": "middle"}], "axesbgalpha": null, "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el17358139933053875536"], "id": "el17358139933038750296", "lines": []}], "id": "el17358139933279015992"});
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
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
         mpld3.draw_figure("aaa", {"data": {"data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.89994008388254], [3338.0, 34.5, 260.89994008388254], [0.0, 34.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data06": [[0.0, 20.5, 0.0], [1273.0, 20.5, 244.0233118971061], [1273.0, 21.5, 244.0233118971061], [0.0, 21.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.60791157649794], [1752.0, 20.5, 264.60791157649794], [0.0, 20.5, 0.0]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.71141781681305], [816.0, 31.5, 245.71141781681305], [0.0, 31.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.67777777777778], [208.0, 17.5, 235.67777777777778], [0.0, 17.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.2927769985975], [2852.0, 30.5, 275.2927769985975], [0.0, 30.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.55539088551313], [2699.0, 22.5, 268.55539088551313], [0.0, 22.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [566.0, 25.5, 244.09363957597174], [566.0, 26.5, 244.09363957597174], [0.0, 26.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.3140409162441], [5761.0, 23.5, 248.3140409162441], [0.0, 23.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1763.0, 23.5, 247.74588769143506], [1763.0, 24.5, 247.74588769143506], [0.0, 24.5, 0.0]], "data04": [[0.0, 18.5, 0.0], [2024.0, 18.5, 247.33997013439523], [2024.0, 19.5, 247.33997013439523], [0.0, 19.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.1472846175718], [3517.0, 25.5, 266.1472846175718], [0.0, 25.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.06338122733985], [7447.0, 27.5, 265.06338122733985], [0.0, 27.5, 0.0]], "data13": [[0.0, 27.5, 0.0], [1631.0, 27.5, 244.4414469650521], [1631.0, 28.5, 244.4414469650521], [0.0, 28.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"type": "clickinfo", "ids": ["el17358139933038384072", "el17358139933038383680", "el17358139933038384856", "el17358139933038385696", "el17358139933038386592", "el17358139933038428512", "el17358139933038429408", "el17358139933038430304", "el17358139933038431200", "el17358139933038432096", "el17358139933038453536", "el17358139933038454432", "el17358139933038455328", "el17358139933038456224", "el17358139933038477664", "el17358139933038478560", "el17358139933038479456", "el17358139933038480352", "el17358139933038481248"], "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}}, {"type": "clickinfo", "ids": ["el17358139933038503864", "el17358139933038383736", "el17358139933038504536", "el17358139933038505432", "el17358139933038543256", "el17358139933038544152", "el17358139933038545048", "el17358139933038545944", "el17358139933038546840", "el17358139933038572376", "el17358139933038573272", "el17358139933038574168", "el17358139933038575064", "el17358139933038596504", "el17358139933038597400", "el17358139933038598296", "el17358139933038599192", "el17358139933038600088", "el17358139933038097240"], "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}}], "width": 640.0, "height": 480.0, "axes": [{"yscale": "linear", "xlim": [8191.2, 5.0], "xdomain": [8191.2, 5.0], "ylim": [14.55, 35.45], "markers": [], "paths": [{"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 1, "edgecolor": "none", "id": "el17358139933038384072", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "yindex": 1, "edgecolor": "none", "id": "el17358139933038383680", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "yindex": 1, "edgecolor": "none", "id": "el17358139933038384856", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "yindex": 1, "edgecolor": "none", "id": "el17358139933038385696", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "yindex": 1, "edgecolor": "none", "id": "el17358139933038386592", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "yindex": 1, "edgecolor": "none", "id": "el17358139933038428512", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "yindex": 1, "edgecolor": "none", "id": "el17358139933038429408", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "yindex": 1, "edgecolor": "none", "id": "el17358139933038430304", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "yindex": 1, "edgecolor": "none", "id": "el17358139933038431200", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "yindex": 1, "edgecolor": "none", "id": "el17358139933038432096", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "yindex": 1, "edgecolor": "none", "id": "el17358139933038453536", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "yindex": 1, "edgecolor": "none", "id": "el17358139933038454432", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "yindex": 1, "edgecolor": "none", "id": "el17358139933038455328", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "yindex": 1, "edgecolor": "none", "id": "el17358139933038456224", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "yindex": 1, "edgecolor": "none", "id": "el17358139933038477664", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "yindex": 1, "edgecolor": "none", "id": "el17358139933038478560", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "yindex": 2, "edgecolor": "none", "id": "el17358139933038479456", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "yindex": 1, "edgecolor": "none", "id": "el17358139933038480352", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "yindex": 1, "edgecolor": "none", "id": "el17358139933038481248", "facecolor": "#FF0000", "coordinates": "data"}], "collections": [], "axesbg": "#FFFFFF", "zoomable": true, "axes": [{"visible": true, "tickvalues": null, "tickformat": null, "scale": "linear", "position": "bottom", "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}, "nticks": 6, "fontsize": 10.0}, {"visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left", "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0}], "images": [], "ydomain": [14.55, 35.45], "xscale": "linear", "texts": [{"alpha": 1, "color": "#000000", "zorder": 3, "id": "el17358139933056779040", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes", "rotation": -0.0, "text": "Minuty", "position": [0.5, -0.07921476671476674], "h_anchor": "middle"}], "axesbgalpha": null, "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el17358139933038750296"], "id": "el17358139933053875536", "lines": []}, {"yscale": "linear", "xlim": [225.67777777777778, 285.2927769985975], "xdomain": [225.67777777777778, 285.2927769985975], "ylim": [14.55, 35.45], "markers": [], "paths": [{"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 1, "edgecolor": "none", "id": "el17358139933038503864", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "yindex": 1, "edgecolor": "none", "id": "el17358139933038383736", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 3, "edgecolor": "none", "id": "el17358139933038504536", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "yindex": 1, "edgecolor": "none", "id": "el17358139933038505432", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "yindex": 1, "edgecolor": "none", "id": "el17358139933038543256", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "yindex": 1, "edgecolor": "none", "id": "el17358139933038544152", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "yindex": 1, "edgecolor": "none", "id": "el17358139933038545048", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "yindex": 1, "edgecolor": "none", "id": "el17358139933038545944", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "yindex": 1, "edgecolor": "none", "id": "el17358139933038546840", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "yindex": 1, "edgecolor": "none", "id": "el17358139933038572376", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "yindex": 1, "edgecolor": "none", "id": "el17358139933038573272", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "yindex": 1, "edgecolor": "none", "id": "el17358139933038574168", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "yindex": 1, "edgecolor": "none", "id": "el17358139933038575064", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 4, "edgecolor": "none", "id": "el17358139933038596504", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "yindex": 1, "edgecolor": "none", "id": "el17358139933038597400", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "yindex": 1, "edgecolor": "none", "id": "el17358139933038598296", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 5, "edgecolor": "none", "id": "el17358139933038599192", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 6, "edgecolor": "none", "id": "el17358139933038600088", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "yindex": 1, "edgecolor": "none", "id": "el17358139933038097240", "facecolor": "#FFA500", "coordinates": "data"}], "collections": [], "axesbg": "#FFFFFF", "zoomable": true, "axes": [{"visible": true, "tickvalues": [235, 244, 253, 262, 275], "tickformat": null, "scale": "linear", "position": "bottom", "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}, "nticks": 5, "fontsize": 10.0}, {"visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right", "grid": {"gridOn": false}, "nticks": 19, "fontsize": null}], "images": [], "ydomain": [14.55, 35.45], "xscale": "linear", "texts": [{"alpha": 1, "color": "#000000", "zorder": 3, "id": "el17358139933038789632", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes", "rotation": -0.0, "text": "Instat index", "position": [0.5, -0.07921476671476674], "h_anchor": "middle"}], "axesbgalpha": null, "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el17358139933053875536"], "id": "el17358139933038750296", "lines": []}], "id": "el17358139933279015992"});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3.1.dev1.js", function(){
                 
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low"];

    /*var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");*/
    var tooltip = d3.select("#lista");
    var table = tooltip.append('table').attr("class", "sortable");
    table.append('thead');
    var tbody = d3.select("tbody");

                
    function ClickInfo(fig, props){
        mpld3.Plugin.call(this, fig, props);
        
    };

    ClickInfo.prototype.draw = function(){
        var data = this.props.players;
        var wiek = this.props.wiek;
        var low = this.props.low;

        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                  for (j in wiek[i+low]) {
                                    tekst+= "<tr>";
                                    var zawodnik = data[wiek[i+low][j]];
                                    tekst+= "<td>" +  zawodnik[0]+"</td>";
                                    tekst+= "<td>" +  zawodnik[1]+"</td>";
                                    tekst+= "<td>" +  zawodnik[2]+"</td>";
                                    
                                    //var ter = table.insert('tr');
                                    //ter.append('td').html(zawodnik[0])
                                    //ter.append('td').html(zawodnik[1])
                                    //ter.append('td').html(zawodnik[2])
                                    //console.log(zawodnik);
                                    tekst+= "</tr>";
                                }
                                tekst+="</tbody>";
                                table.html(tekst);
                              });
                              });
    }
    
                 mpld3.draw_figure("aaa", {"data": {"data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.89994008388254], [3338.0, 34.5, 260.89994008388254], [0.0, 34.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data06": [[0.0, 20.5, 0.0], [1273.0, 20.5, 244.0233118971061], [1273.0, 21.5, 244.0233118971061], [0.0, 21.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.60791157649794], [1752.0, 20.5, 264.60791157649794], [0.0, 20.5, 0.0]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.71141781681305], [816.0, 31.5, 245.71141781681305], [0.0, 31.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.67777777777778], [208.0, 17.5, 235.67777777777778], [0.0, 17.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.2927769985975], [2852.0, 30.5, 275.2927769985975], [0.0, 30.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.55539088551313], [2699.0, 22.5, 268.55539088551313], [0.0, 22.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [566.0, 25.5, 244.09363957597174], [566.0, 26.5, 244.09363957597174], [0.0, 26.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.3140409162441], [5761.0, 23.5, 248.3140409162441], [0.0, 23.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [1763.0, 23.5, 247.74588769143506], [1763.0, 24.5, 247.74588769143506], [0.0, 24.5, 0.0]], "data04": [[0.0, 18.5, 0.0], [2024.0, 18.5, 247.33997013439523], [2024.0, 19.5, 247.33997013439523], [0.0, 19.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.1472846175718], [3517.0, 25.5, 266.1472846175718], [0.0, 25.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.06338122733985], [7447.0, 27.5, 265.06338122733985], [0.0, 27.5, 0.0]], "data13": [[0.0, 27.5, 0.0], [1631.0, 27.5, 244.4414469650521], [1631.0, 28.5, 244.4414469650521], [0.0, 28.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"type": "clickinfo", "ids": ["el17358139933038384072", "el17358139933038383680", "el17358139933038384856", "el17358139933038385696", "el17358139933038386592", "el17358139933038428512", "el17358139933038429408", "el17358139933038430304", "el17358139933038431200", "el17358139933038432096", "el17358139933038453536", "el17358139933038454432", "el17358139933038455328", "el17358139933038456224", "el17358139933038477664", "el17358139933038478560", "el17358139933038479456", "el17358139933038480352", "el17358139933038481248"], "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}}, {"type": "clickinfo", "ids": ["el17358139933038503864", "el17358139933038383736", "el17358139933038504536", "el17358139933038505432", "el17358139933038543256", "el17358139933038544152", "el17358139933038545048", "el17358139933038545944", "el17358139933038546840", "el17358139933038572376", "el17358139933038573272", "el17358139933038574168", "el17358139933038575064", "el17358139933038596504", "el17358139933038597400", "el17358139933038598296", "el17358139933038599192", "el17358139933038600088", "el17358139933038097240"], "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "low": 16, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}}], "width": 640.0, "height": 480.0, "axes": [{"yscale": "linear", "xlim": [8191.2, 5.0], "xdomain": [8191.2, 5.0], "ylim": [14.55, 35.45], "markers": [], "paths": [{"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 1, "edgecolor": "none", "id": "el17358139933038384072", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "yindex": 1, "edgecolor": "none", "id": "el17358139933038383680", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "yindex": 1, "edgecolor": "none", "id": "el17358139933038384856", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "yindex": 1, "edgecolor": "none", "id": "el17358139933038385696", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "yindex": 1, "edgecolor": "none", "id": "el17358139933038386592", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "yindex": 1, "edgecolor": "none", "id": "el17358139933038428512", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "yindex": 1, "edgecolor": "none", "id": "el17358139933038429408", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "yindex": 1, "edgecolor": "none", "id": "el17358139933038430304", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "yindex": 1, "edgecolor": "none", "id": "el17358139933038431200", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "yindex": 1, "edgecolor": "none", "id": "el17358139933038432096", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "yindex": 1, "edgecolor": "none", "id": "el17358139933038453536", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "yindex": 1, "edgecolor": "none", "id": "el17358139933038454432", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "yindex": 1, "edgecolor": "none", "id": "el17358139933038455328", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "yindex": 1, "edgecolor": "none", "id": "el17358139933038456224", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "yindex": 1, "edgecolor": "none", "id": "el17358139933038477664", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "yindex": 1, "edgecolor": "none", "id": "el17358139933038478560", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "yindex": 2, "edgecolor": "none", "id": "el17358139933038479456", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data17", "yindex": 1, "edgecolor": "none", "id": "el17358139933038480352", "facecolor": "#FF0000", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 0, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "yindex": 1, "edgecolor": "none", "id": "el17358139933038481248", "facecolor": "#FF0000", "coordinates": "data"}], "collections": [], "axesbg": "#FFFFFF", "zoomable": true, "axes": [{"visible": true, "tickvalues": null, "tickformat": null, "scale": "linear", "position": "bottom", "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}, "nticks": 6, "fontsize": 10.0}, {"visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left", "grid": {"gridOn": false}, "nticks": 19, "fontsize": 10.0}], "images": [], "ydomain": [14.55, 35.45], "xscale": "linear", "texts": [{"alpha": 1, "color": "#000000", "zorder": 3, "id": "el17358139933056779040", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes", "rotation": -0.0, "text": "Minuty", "position": [0.5, -0.07921476671476674], "h_anchor": "middle"}], "axesbgalpha": null, "sharex": [], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el17358139933038750296"], "id": "el17358139933053875536", "lines": []}, {"yscale": "linear", "xlim": [225.67777777777778, 285.2927769985975], "xdomain": [225.67777777777778, 285.2927769985975], "ylim": [14.55, 35.45], "markers": [], "paths": [{"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 1, "edgecolor": "none", "id": "el17358139933038503864", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "yindex": 1, "edgecolor": "none", "id": "el17358139933038383736", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 3, "edgecolor": "none", "id": "el17358139933038504536", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "yindex": 1, "edgecolor": "none", "id": "el17358139933038505432", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "yindex": 1, "edgecolor": "none", "id": "el17358139933038543256", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "yindex": 1, "edgecolor": "none", "id": "el17358139933038544152", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "yindex": 1, "edgecolor": "none", "id": "el17358139933038545048", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "yindex": 1, "edgecolor": "none", "id": "el17358139933038545944", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "yindex": 1, "edgecolor": "none", "id": "el17358139933038546840", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "yindex": 1, "edgecolor": "none", "id": "el17358139933038572376", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "yindex": 1, "edgecolor": "none", "id": "el17358139933038573272", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "yindex": 1, "edgecolor": "none", "id": "el17358139933038574168", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "yindex": 1, "edgecolor": "none", "id": "el17358139933038575064", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 4, "edgecolor": "none", "id": "el17358139933038596504", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data15", "yindex": 1, "edgecolor": "none", "id": "el17358139933038597400", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data16", "yindex": 1, "edgecolor": "none", "id": "el17358139933038598296", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 5, "edgecolor": "none", "id": "el17358139933038599192", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "yindex": 6, "edgecolor": "none", "id": "el17358139933038600088", "facecolor": "#FFA500", "coordinates": "data"}, {"alpha": 0.7, "zorder": 1, "dasharray": "none", "xindex": 2, "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data18", "yindex": 1, "edgecolor": "none", "id": "el17358139933038097240", "facecolor": "#FFA500", "coordinates": "data"}], "collections": [], "axesbg": "#FFFFFF", "zoomable": true, "axes": [{"visible": true, "tickvalues": [235, 244, 253, 262, 275], "tickformat": null, "scale": "linear", "position": "bottom", "grid": {"dasharray": "none", "alpha": 1.0, "color": "#B0B0B0", "gridOn": true}, "nticks": 5, "fontsize": 10.0}, {"visible": true, "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right", "grid": {"gridOn": false}, "nticks": 19, "fontsize": null}], "images": [], "ydomain": [14.55, 35.45], "xscale": "linear", "texts": [{"alpha": 1, "color": "#000000", "zorder": 3, "id": "el17358139933038789632", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes", "rotation": -0.0, "text": "Instat index", "position": [0.5, -0.07921476671476674], "h_anchor": "middle"}], "axesbgalpha": null, "sharex": [], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el17358139933053875536"], "id": "el17358139933038750296", "lines": []}], "id": "el17358139933279015992"});
            })
         });
}


