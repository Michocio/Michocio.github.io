

  

   


    
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
       mpld3.draw_figure("id3", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "type": "clickinfo", "ids": ["el4265140411169256952", "el4265140411169256560", "el4265140411169257736", "el4265140411169258576", "el4265140411169259472", "el4265140411169305488", "el4265140411169306384", "el4265140411169307280", "el4265140411169308176", "el4265140411169325520", "el4265140411169326416", "el4265140411169327312", "el4265140411169328208", "el4265140411169329104", "el4265140411169350544", "el4265140411169351440", "el4265140411169352336", "el4265140411169353232", "el4265140411169378768"]}, {"vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "type": "clickinfo", "ids": ["el4265140411169380840", "el4265140411169256616", "el4265140411169381512", "el4265140411169382352", "el4265140411169424328", "el4265140411169425224", "el4265140411169426120", "el4265140411169427016", "el4265140411169448456", "el4265140411169449352", "el4265140411169450248", "el4265140411169451144", "el4265140411169451984", "el4265140411169473480", "el4265140411169474376", "el4265140411169475272", "el4265140411169476168", "el4265140411168969224", "el4265140411168970120"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411169631144"], "collections": [], "xlim": [9307.5, 5.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411769930248"}], "xdomain": [9307.5, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169256952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169256560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169257736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169258576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169259472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169305488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169306384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169307280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169308176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169325520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169326416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169327312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169328208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169329104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169350544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169351440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169352336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169353232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169378768"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411184748416"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411184748416"], "collections": [], "xlim": [225.0, 285.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411169662288"}], "xdomain": [225.0, 285.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [235, 245, 255, 265, 275], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169380840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169256616"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169381512"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169382352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169424328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169425224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169426120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169427016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169448456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169449352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169450248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169451144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169451984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169473480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169474376"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169475272"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169476168"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411168969224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411168970120"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411169631144"}], "id": "el4265140411309119360"});
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
         mpld3.draw_figure("id3", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "type": "clickinfo", "ids": ["el4265140411169256952", "el4265140411169256560", "el4265140411169257736", "el4265140411169258576", "el4265140411169259472", "el4265140411169305488", "el4265140411169306384", "el4265140411169307280", "el4265140411169308176", "el4265140411169325520", "el4265140411169326416", "el4265140411169327312", "el4265140411169328208", "el4265140411169329104", "el4265140411169350544", "el4265140411169351440", "el4265140411169352336", "el4265140411169353232", "el4265140411169378768"]}, {"vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "type": "clickinfo", "ids": ["el4265140411169380840", "el4265140411169256616", "el4265140411169381512", "el4265140411169382352", "el4265140411169424328", "el4265140411169425224", "el4265140411169426120", "el4265140411169427016", "el4265140411169448456", "el4265140411169449352", "el4265140411169450248", "el4265140411169451144", "el4265140411169451984", "el4265140411169473480", "el4265140411169474376", "el4265140411169475272", "el4265140411169476168", "el4265140411168969224", "el4265140411168970120"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411169631144"], "collections": [], "xlim": [9307.5, 5.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411769930248"}], "xdomain": [9307.5, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169256952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169256560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169257736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169258576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169259472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169305488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169306384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169307280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169308176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169325520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169326416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169327312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169328208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169329104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169350544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169351440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169352336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169353232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169378768"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411184748416"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411184748416"], "collections": [], "xlim": [225.0, 285.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411169662288"}], "xdomain": [225.0, 285.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [235, 245, 255, 265, 275], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169380840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169256616"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169381512"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169382352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169424328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169425224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169426120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169427016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169448456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169449352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169450248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169451144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169451984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169473480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169474376"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169475272"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169476168"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411168969224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411168970120"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411169631144"}], "id": "el4265140411309119360"});
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

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
    mpld3.register_plugin("clickinfo", ClickInfo);
    ClickInfo.prototype = Object.create(mpld3.Plugin.prototype);
    ClickInfo.prototype.constructor = ClickInfo;
    ClickInfo.prototype.requiredProps = ["ids", "wiek", "players", "low","vals","alls"];

    var tooltip = d3.select("body").append("div")
                    .attr("class", "mpld3-tooltip")
                    .style("float", "left")
                    .style("z-index", "10");
    //var tooltip = d3.select("#lista");
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
        var bins = this.props.vals;
        var alls = this.props.alls;
        this.props.ids.forEach(function(id, i) {
            var obj = mpld3.get_element(id);
            obj.elements().on("mousedown",
                              function(d){
                                  table.html("");
                                  var tekst = "";
                                  tekst+="<thead><tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr></thead>";
                                    
                                    //  table.html("<tr><th>Zawodnik</th><th>Minuty</th><th>Instat index</th></tr>")
                                tekst+="<tbody>";
                                var licz= 0;
                                  for (j in wiek[i+low]) {
                                      licz+=1;
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
                                
                                if (licz > 1) {
                                tekst+="<tfoot>";
                                tekst+= "<tr>";
                                console.log(bins[i+low][1]);

                                
                                tekst+= "<td> </td>";
                                
                                    tekst+= "<td>" + bins[i+low][0]+"</td>";
                                    tekst+= "<td>" +  bins[i+low][1]+"</td>";
                                    tekst+= "</tr>";
                                tekst+="</tfoot>";
                                }
                                table.html(tekst);
                                console.log(alls);

                              });
                              });
    }
    
                 mpld3.draw_figure("id3", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "type": "clickinfo", "ids": ["el4265140411169256952", "el4265140411169256560", "el4265140411169257736", "el4265140411169258576", "el4265140411169259472", "el4265140411169305488", "el4265140411169306384", "el4265140411169307280", "el4265140411169308176", "el4265140411169325520", "el4265140411169326416", "el4265140411169327312", "el4265140411169328208", "el4265140411169329104", "el4265140411169350544", "el4265140411169351440", "el4265140411169352336", "el4265140411169353232", "el4265140411169378768"]}, {"vals": {"33": [31, 0], "34": [3338, 260], "16": [5, 0], "17": [208, 235], "18": [20, 0], "19": [2024, 247], "20": [1752, 264], "21": [1273, 244], "22": [2699, 268], "23": [5761, 248], "24": [1763, 247], "25": [3517, 266], "26": [566, 244], "27": [7447, 265], "28": [1631, 244], "30": [2852, 275], "31": [816, 245]}, "low": 16, "players": {"139394": ["Flavio Paixao", 3338, 260], "16965": ["Rafa\u0142 Wolski", 566, 244], "271751": ["Adam Chrzanowski", 110, 288], "486345": ["Karol Fila", 1752, 264], "1741": ["S\u0142awomir Peszko", 31, 205], "64657": ["Micha\u0142 Mak", 945, 245], "43794": ["Steven Vitoria", 816, 245], "22740": ["Filip Mladenovic", 3355, 275], "309144": ["Tomasz Makowski", 1728, 246], "6169": ["Blazej Augustyn", 2852, 275], "237855": ["Jaros\u0142aw Kubicki", 3337, 251], "14493": ["Artur Sobiech", 1631, 244], "86174": ["Micha\u0142 Nalepa", 3397, 266], "184607": ["Lukas Haraslin", 2433, 270], "259168": ["Jakub Arak", 670, 225], "95739": ["Joao Nunes", 1754, 250], "362437": ["Konrad Michalak", 1273, 244], "169832": ["Pawe\u0142 Stolarski", 266, 253], "237998": ["Patryk Lipski", 1763, 247], "833391": ["Mateusz \u017bukowski", 208, 235], "1114544": ["Filip Dymerski", 5, 0], "9242": ["Ariel Borysiuk", 155, 230], "86263": ["Mateusz Lewandowski", 120, 244], "795610": ["Mateusz Sopocko", 186, 235], "848187": ["E. Vikri", 20, 0], "16959": ["Daniel Lukasik", 2992, 261]}, "wiek": {"33": [1741], "34": [139394], "16": [1114544], "17": [833391], "18": [848187], "19": [309144, 795610, 271751], "20": [486345], "21": [362437], "22": [184607, 169832], "23": [237855, 95739, 259168], "24": [237998], "25": [86174, 86263], "26": [16965], "27": [22740, 16959, 64657, 9242], "28": [14493], "30": [6169], "31": [43794]}, "alls": [["Micha\u0142 Nalepa", [3397, 266]], ["Filip Mladenovic", [3355, 275]], ["Flavio Paixao", [3338, 260]], ["Jaros\u0142aw Kubicki", [3337, 251]], ["Daniel Lukasik", [2992, 261]], ["Blazej Augustyn", [2852, 275]], ["Lukas Haraslin", [2433, 270]], ["Patryk Lipski", [1763, 247]], ["Joao Nunes", [1754, 250]], ["Karol Fila", [1752, 264]], ["Tomasz Makowski", [1728, 246]], ["Artur Sobiech", [1631, 244]], ["Konrad Michalak", [1273, 244]], ["Micha\u0142 Mak", [945, 245]], ["Steven Vitoria", [816, 245]], ["Jakub Arak", [670, 225]], ["Rafa\u0142 Wolski", [566, 244]], ["Pawe\u0142 Stolarski", [266, 253]], ["Mateusz \u017bukowski", [208, 235]], ["Mateusz Sopocko", [186, 235]], ["Ariel Borysiuk", [155, 230]], ["Mateusz Lewandowski", [120, 244]], ["Adam Chrzanowski", [110, 288]], ["S\u0142awomir Peszko", [31, 205]], ["E. Vikri", [20, 0]], ["Filip Dymerski", [5, 0]]], "type": "clickinfo", "ids": ["el4265140411169380840", "el4265140411169256616", "el4265140411169381512", "el4265140411169382352", "el4265140411169424328", "el4265140411169425224", "el4265140411169426120", "el4265140411169427016", "el4265140411169448456", "el4265140411169449352", "el4265140411169450248", "el4265140411169451144", "el4265140411169451984", "el4265140411169473480", "el4265140411169474376", "el4265140411169475272", "el4265140411169476168", "el4265140411168969224", "el4265140411168970120"]}], "height": 480.0, "data": {"data03": [[0.0, 17.5], [20.0, 17.5], [20.0, 18.5], [0.0, 18.5]], "data05": [[0.0, 19.5, 0.0], [1752.0, 19.5, 264.0], [1752.0, 20.5, 264.0], [0.0, 20.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [208.0, 16.5, 235.0], [208.0, 17.5, 235.0], [0.0, 17.5, 0.0]], "data18": [[0.0, 33.5, 0.0], [3338.0, 33.5, 260.0], [3338.0, 34.5, 260.0], [0.0, 34.5, 0.0]], "data11": [[0.0, 25.5], [566.0, 25.5], [566.0, 26.5], [0.0, 26.5]], "data01": [[0.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 15.5, 0.0, 17.5, 28.5, 31.5, 32.5], [5.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5], [0.0, 16.5, 0.0, 18.5, 29.5, 32.5, 33.5]], "data15": [[0.0, 29.5, 0.0], [2852.0, 29.5, 275.0], [2852.0, 30.5, 275.0], [0.0, 30.5, 0.0]], "data12": [[0.0, 26.5, 0.0], [7447.0, 26.5, 265.0], [7447.0, 27.5, 265.0], [0.0, 27.5, 0.0]], "data08": [[0.0, 22.5, 0.0], [5761.0, 22.5, 248.0], [5761.0, 23.5, 248.0], [0.0, 23.5, 0.0]], "data17": [[0.0, 32.5], [31.0, 32.5], [31.0, 33.5], [0.0, 33.5]], "data13": [[0.0, 27.5], [1631.0, 27.5], [1631.0, 28.5], [0.0, 28.5]], "data04": [[0.0, 18.5, 0.0, 23.5], [2024.0, 18.5, 247.0, 23.5], [2024.0, 19.5, 247.0, 24.5], [0.0, 19.5, 0.0, 24.5]], "data10": [[0.0, 24.5, 0.0], [3517.0, 24.5, 266.0], [3517.0, 25.5, 266.0], [0.0, 25.5, 0.0]], "data06": [[0.0, 20.5, 0.0, 25.5, 27.5], [1273.0, 20.5, 244.0, 25.5, 27.5], [1273.0, 21.5, 244.0, 26.5, 28.5], [0.0, 21.5, 0.0, 26.5, 28.5]], "data16": [[0.0, 30.5, 0.0], [816.0, 30.5, 245.0], [816.0, 31.5, 245.0], [0.0, 31.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [2699.0, 21.5, 268.0], [2699.0, 22.5, 268.0], [0.0, 22.5, 0.0]], "data14": [[0.0, 28.5, 31.5], [0.0, 28.5, 31.5], [0.0, 29.5, 32.5], [0.0, 29.5, 32.5]], "data09": [[0.0, 23.5], [1763.0, 23.5], [1763.0, 24.5], [0.0, 24.5]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411169631144"], "collections": [], "xlim": [9307.5, 5.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411769930248"}], "xdomain": [9307.5, 5.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169256952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169256560"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169257736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169258576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169259472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169305488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169306384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169307280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169308176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169325520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169326416"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169327312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169328208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169329104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169350544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169351440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169352336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data17", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169353232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411169378768"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411184748416"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411184748416"], "collections": [], "xlim": [225.0, 285.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411169662288"}], "xdomain": [225.0, 285.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [235, 245, 255, 265, 275], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169380840"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169256616"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169381512"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169382352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169424328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169425224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169426120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169427016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169448456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169449352"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169450248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169451144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169451984"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169473480"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169474376"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169475272"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411169476168"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411168969224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data18", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411168970120"}], "ydomain": [14.55, 35.45], "ylim": [14.55, 35.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411169631144"}], "id": "el4265140411309119360"});
            })
         });
}
    
