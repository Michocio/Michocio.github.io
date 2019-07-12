

  

   


    
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
    
       mpld3.draw_figure("id15", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "type": "clickinfo", "ids": ["el4265140411106473912", "el4265140411106473408", "el4265140411106474696", "el4265140411106475592", "el4265140411106505224", "el4265140411106506120", "el4265140411106507016", "el4265140411106507912", "el4265140411106508752", "el4265140411106530248", "el4265140411106531144", "el4265140411106532040", "el4265140411106532936", "el4265140411106550280", "el4265140411106551176", "el4265140411106552072", "el4265140411106552968", "el4265140411106553808", "el4265140411106051016"]}, {"vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "type": "clickinfo", "ids": ["el4265140411106053088", "el4265140411106473576", "el4265140411106053760", "el4265140411106075200", "el4265140411106076096", "el4265140411106076992", "el4265140411106077888", "el4265140411106103424", "el4265140411106104320", "el4265140411106105216", "el4265140411106106112", "el4265140411106107008", "el4265140411106132544", "el4265140411106133440", "el4265140411106134336", "el4265140411106135232", "el4265140411106152576", "el4265140411106153472", "el4265140411106154368"]}], "height": 480.0, "data": {"data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411106924360"], "collections": [], "xlim": [9339.25, 43.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411106755192"}], "xdomain": [9339.25, 43.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106473912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106473408"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106474696"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106475592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106505224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106506120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106507016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106507912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106508752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106530248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106531144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106532040"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106532936"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106550280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106551176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106552072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106552968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106553808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106051016"}], "ydomain": [17.55, 38.45], "ylim": [17.55, 38.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411106699696"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411106699696"], "collections": [], "xlim": [208.0, 284.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411106878296"}], "xdomain": [208.0, 284.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [218, 232, 246, 260, 274], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106053088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106473576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106053760"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106075200"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106076096"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106076992"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106077888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106103424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106104320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106105216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106106112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106107008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106132544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106133440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106134336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106135232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106152576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106153472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106154368"}], "ydomain": [17.55, 38.45], "ylim": [17.55, 38.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411106924360"}], "id": "el4265140411108977184"});
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
    
         mpld3.draw_figure("id15", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "type": "clickinfo", "ids": ["el4265140411106473912", "el4265140411106473408", "el4265140411106474696", "el4265140411106475592", "el4265140411106505224", "el4265140411106506120", "el4265140411106507016", "el4265140411106507912", "el4265140411106508752", "el4265140411106530248", "el4265140411106531144", "el4265140411106532040", "el4265140411106532936", "el4265140411106550280", "el4265140411106551176", "el4265140411106552072", "el4265140411106552968", "el4265140411106553808", "el4265140411106051016"]}, {"vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "type": "clickinfo", "ids": ["el4265140411106053088", "el4265140411106473576", "el4265140411106053760", "el4265140411106075200", "el4265140411106076096", "el4265140411106076992", "el4265140411106077888", "el4265140411106103424", "el4265140411106104320", "el4265140411106105216", "el4265140411106106112", "el4265140411106107008", "el4265140411106132544", "el4265140411106133440", "el4265140411106134336", "el4265140411106135232", "el4265140411106152576", "el4265140411106153472", "el4265140411106154368"]}], "height": 480.0, "data": {"data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411106924360"], "collections": [], "xlim": [9339.25, 43.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411106755192"}], "xdomain": [9339.25, 43.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106473912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106473408"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106474696"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106475592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106505224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106506120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106507016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106507912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106508752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106530248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106531144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106532040"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106532936"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106550280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106551176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106552072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106552968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106553808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106051016"}], "ydomain": [17.55, 38.45], "ylim": [17.55, 38.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411106699696"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411106699696"], "collections": [], "xlim": [208.0, 284.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411106878296"}], "xdomain": [208.0, 284.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [218, 232, 246, 260, 274], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106053088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106473576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106053760"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106075200"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106076096"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106076992"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106077888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106103424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106104320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106105216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106106112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106107008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106132544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106133440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106134336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106135232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106152576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106153472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106154368"}], "ydomain": [17.55, 38.45], "ylim": [17.55, 38.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411106924360"}], "id": "el4265140411108977184"});
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
    
                 mpld3.draw_figure("id15", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "type": "clickinfo", "ids": ["el4265140411106473912", "el4265140411106473408", "el4265140411106474696", "el4265140411106475592", "el4265140411106505224", "el4265140411106506120", "el4265140411106507016", "el4265140411106507912", "el4265140411106508752", "el4265140411106530248", "el4265140411106531144", "el4265140411106532040", "el4265140411106532936", "el4265140411106550280", "el4265140411106551176", "el4265140411106552072", "el4265140411106552968", "el4265140411106553808", "el4265140411106051016"]}, {"vals": {"33": [2584, 253], "34": [604, 224], "36": [876, 232], "37": [323, 218], "19": [43, 0], "20": [236, 242], "21": [1119, 240], "23": [3808, 250], "24": [2534, 274], "25": [6402, 256], "27": [5898, 250], "28": [7480, 259], "30": [1068, 274], "31": [2471, 244]}, "low": 19, "players": {"362434": ["Mateusz \u017byro", 236, 242], "23239": ["Grzegorz Bartczak", 2068, 251], "18696": ["Joan Roman", 889, 271], "39499": ["Tomislav Bozic", 1718, 251], "59416": ["Bozo Musa", 1068, 274], "161747": ["De Amo", 319, 218], "218900": ["Pawe\u0142 Zieli\u0144ski", 2526, 258], "97623": ["Kornel Osyra", 1904, 241], "26328": ["Petteri Forsell", 3128, 260], "1049": ["\u0141ukasz Gargula", 323, 218], "8410": ["Aleksandar Miljkovic", 1507, 267], "1052": ["Wojciech \u0141obodzi\u0144ski", 876, 232], "26398": ["Henrik Ojamaa", 2179, 244], "189727": ["F. Kwame", 516, 263], "24354": ["Mateusz Szczepaniak", 1079, 234], "121061": ["Omar Santana", 1969, 267], "189546": ["Rafa\u0142 Augustyniak", 1836, 274], "244843": ["Fabian Piasecki", 1442, 240], "295086": ["Adrian Purzycki", 1119, 240], "27442": ["Marquitos", 753, 229], "192691": ["Borja Fernandez", 2366, 257], "81270": ["Artur Pikk", 1773, 246], "967352": ["Patryk Makuch", 43, 223], "173370": ["Elton Monteiro", 300, 254], "49275": ["Mateusz Pi\u0105tkowski", 604, 224], "174588": ["Fran Cruz", 671, 246], "72874": ["Juan Camara", 2234, 276]}, "wiek": {"33": [23239, 189727], "34": [49275], "36": [1052], "37": [1049], "19": [967352], "20": [362434], "21": [295086], "23": [192691, 244843], "24": [72874, 173370], "25": [97623, 189546, 81270, 18696], "27": [26398, 121061, 24354, 174588], "28": [26328, 218900, 8410, 161747], "30": [59416], "31": [39499, 27442]}, "alls": [["Petteri Forsell", [3128, 260]], ["Pawe\u0142 Zieli\u0144ski", [2526, 258]], ["Borja Fernandez", [2366, 257]], ["Juan Camara", [2234, 276]], ["Henrik Ojamaa", [2179, 244]], ["Grzegorz Bartczak", [2068, 251]], ["Omar Santana", [1969, 267]], ["Kornel Osyra", [1904, 241]], ["Rafa\u0142 Augustyniak", [1836, 274]], ["Artur Pikk", [1773, 246]], ["Tomislav Bozic", [1718, 251]], ["Aleksandar Miljkovic", [1507, 267]], ["Fabian Piasecki", [1442, 240]], ["Adrian Purzycki", [1119, 240]], ["Mateusz Szczepaniak", [1079, 234]], ["Bozo Musa", [1068, 274]], ["Joan Roman", [889, 271]], ["Wojciech \u0141obodzi\u0144ski", [876, 232]], ["Marquitos", [753, 229]], ["Fran Cruz", [671, 246]], ["Mateusz Pi\u0105tkowski", [604, 224]], ["F. Kwame", [516, 263]], ["\u0141ukasz Gargula", [323, 218]], ["De Amo", [319, 218]], ["Elton Monteiro", [300, 254]], ["Mateusz \u017byro", [236, 242]], ["Patryk Makuch", [43, 223]]], "type": "clickinfo", "ids": ["el4265140411106053088", "el4265140411106473576", "el4265140411106053760", "el4265140411106075200", "el4265140411106076096", "el4265140411106076992", "el4265140411106077888", "el4265140411106103424", "el4265140411106104320", "el4265140411106105216", "el4265140411106106112", "el4265140411106107008", "el4265140411106132544", "el4265140411106133440", "el4265140411106134336", "el4265140411106135232", "el4265140411106152576", "el4265140411106153472", "el4265140411106154368"]}], "height": 480.0, "data": {"data03": [[0.0, 20.5, 0.0], [1119.0, 20.5, 240.0], [1119.0, 21.5, 240.0], [0.0, 21.5, 0.0]], "data05": [[0.0, 22.5, 0.0, 26.5], [3808.0, 22.5, 250.0, 26.5], [3808.0, 23.5, 250.0, 27.5], [0.0, 23.5, 0.0, 27.5]], "data02": [[0.0, 19.5, 0.0], [236.0, 19.5, 242.0], [236.0, 20.5, 242.0], [0.0, 20.5, 0.0]], "data11": [[0.0, 30.5, 0.0], [2471.0, 30.5, 244.0], [2471.0, 31.5, 244.0], [0.0, 31.5, 0.0]], "data01": [[0.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 18.5, 0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [43.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 19.5, 0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data15": [[0.0, 36.5, 0.0], [323.0, 36.5, 218.0], [323.0, 37.5, 218.0], [0.0, 37.5, 0.0]], "data12": [[0.0, 32.5, 0.0], [2584.0, 32.5, 253.0], [2584.0, 33.5, 253.0], [0.0, 33.5, 0.0]], "data08": [[0.0, 26.5], [5898.0, 26.5], [5898.0, 27.5], [0.0, 27.5]], "data13": [[0.0, 33.5, 0.0], [604.0, 33.5, 224.0], [604.0, 34.5, 224.0], [0.0, 34.5, 0.0]], "data04": [[0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 21.5, 25.5, 28.5, 31.5, 34.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5], [0.0, 22.5, 26.5, 29.5, 32.5, 35.5]], "data10": [[0.0, 29.5], [1068.0, 29.5], [1068.0, 30.5], [0.0, 30.5]], "data06": [[0.0, 23.5, 0.0, 29.5], [2534.0, 23.5, 274.0, 29.5], [2534.0, 24.5, 274.0, 30.5], [0.0, 24.5, 0.0, 30.5]], "data07": [[0.0, 24.5, 0.0], [6402.0, 24.5, 256.0], [6402.0, 25.5, 256.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 35.5, 0.0], [876.0, 35.5, 232.0], [876.0, 36.5, 232.0], [0.0, 36.5, 0.0]], "data09": [[0.0, 27.5, 0.0], [7480.0, 27.5, 259.0], [7480.0, 28.5, 259.0], [0.0, 28.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411106924360"], "collections": [], "xlim": [9339.25, 43.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411106755192"}], "xdomain": [9339.25, 43.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106473912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106473408"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106474696"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106475592"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106505224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106506120"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106507016"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106507912"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106508752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106530248"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106531144"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106532040"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106532936"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106550280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106551176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106552072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106552968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106553808"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411106051016"}], "ydomain": [17.55, 38.45], "ylim": [17.55, 38.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411106699696"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411106699696"], "collections": [], "xlim": [208.0, 284.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411106878296"}], "xdomain": [208.0, 284.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [218, 232, 246, 260, 274], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 19, "tickformat": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "tickvalues": [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106053088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106473576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106053760"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106075200"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106076096"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106076992"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106077888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106103424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106104320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106105216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 5, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106106112"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106107008"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106132544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 6, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106133440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106134336"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106135232"}, {"edgecolor": "none", "dasharray": "none", "yindex": 7, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106152576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106153472"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411106154368"}], "ydomain": [17.55, 38.45], "ylim": [17.55, 38.45], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411106924360"}], "id": "el4265140411108977184"});
            })
         });
}
    
