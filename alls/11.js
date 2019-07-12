



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
    
       mpld3.draw_figure("id14", {"data": {"data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.95911348872755], [2622.0, 28.5, 263.95911348872755], [0.0, 28.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.84566361873095], [3632.0, 20.5, 240.84566361873095], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.44436337103247], [2741.0, 27.5, 281.44436337103247], [0.0, 27.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.39320503682586], [4226.0, 21.5, 260.39320503682586], [0.0, 21.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.28646864686468], [1532.0, 18.5, 215.28646864686468], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.58814016172508], [1865.0, 29.5, 249.58814016172508], [0.0, 29.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.14489795918368], [530.0, 23.5, 234.14489795918368], [0.0, 23.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.55398037077427], [1841.0, 19.5, 252.55398037077427], [0.0, 19.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.6801170813297], [4791.0, 25.5, 257.6801170813297], [0.0, 25.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.4699157641396], [3324.0, 34.5, 261.4699157641396], [0.0, 34.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.24119402985076], [1680.0, 26.5, 250.24119402985076], [0.0, 26.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.31146572104018], [3405.0, 24.5, 243.31146572104018], [0.0, 24.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.3622926093514], [3315.0, 22.5, 264.3622926093514], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578902893120"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [5217.1, 530.0], "id": "el11179140578902749872", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908129768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907775104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578908954864", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910066728", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910426224", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903041416", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578902422416", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578902423200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578902424096", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578902424992", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578902475104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578902476000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902476896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902477792", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902478688", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902504224", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578902505120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [5217.1, 530.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 7, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578902752280", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.65, 35.35]}, {"ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578902749872"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [205.28646864686468, 291.44436337103247], "id": "el11179140578902893120", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578902507192", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907776336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578902524312", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578902525208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578902526104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578902527000", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578902527896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578902549336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578902550232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578902551128", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578902552024", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578902569368", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902570264", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902571160", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902572056", "facecolor": "#FFA500", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902572952", "facecolor": "#FFA500", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578902594392", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [205.28646864686468, 291.44436337103247], "axes": [{"tickvalues": [215, 231, 247, 263, 281], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578902895528", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.65, 35.35]}], "height": 480.0, "id": "el11179140578903621416", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578908129768", "el11179140578907775104", "el11179140578908954864", "el11179140578910066728", "el11179140578910426224", "el11179140578903041416", "el11179140578902422416", "el11179140578902423200", "el11179140578902424096", "el11179140578902424992", "el11179140578902475104", "el11179140578902476000", "el11179140578902476896", "el11179140578902477792", "el11179140578902478688", "el11179140578902504224", "el11179140578902505120"], "type": "clickinfo", "low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}}, {"ids": ["el11179140578902507192", "el11179140578907776336", "el11179140578902524312", "el11179140578902525208", "el11179140578902526104", "el11179140578902527000", "el11179140578902527896", "el11179140578902549336", "el11179140578902550232", "el11179140578902551128", "el11179140578902552024", "el11179140578902569368", "el11179140578902570264", "el11179140578902571160", "el11179140578902572056", "el11179140578902572952", "el11179140578902594392"], "type": "clickinfo", "low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}}]});
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
    
         mpld3.draw_figure("id14", {"data": {"data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.95911348872755], [2622.0, 28.5, 263.95911348872755], [0.0, 28.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.84566361873095], [3632.0, 20.5, 240.84566361873095], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.44436337103247], [2741.0, 27.5, 281.44436337103247], [0.0, 27.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.39320503682586], [4226.0, 21.5, 260.39320503682586], [0.0, 21.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.28646864686468], [1532.0, 18.5, 215.28646864686468], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.58814016172508], [1865.0, 29.5, 249.58814016172508], [0.0, 29.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.14489795918368], [530.0, 23.5, 234.14489795918368], [0.0, 23.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.55398037077427], [1841.0, 19.5, 252.55398037077427], [0.0, 19.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.6801170813297], [4791.0, 25.5, 257.6801170813297], [0.0, 25.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.4699157641396], [3324.0, 34.5, 261.4699157641396], [0.0, 34.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.24119402985076], [1680.0, 26.5, 250.24119402985076], [0.0, 26.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.31146572104018], [3405.0, 24.5, 243.31146572104018], [0.0, 24.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.3622926093514], [3315.0, 22.5, 264.3622926093514], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578902893120"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [5217.1, 530.0], "id": "el11179140578902749872", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908129768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907775104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578908954864", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910066728", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910426224", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903041416", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578902422416", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578902423200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578902424096", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578902424992", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578902475104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578902476000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902476896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902477792", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902478688", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902504224", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578902505120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [5217.1, 530.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 7, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578902752280", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.65, 35.35]}, {"ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578902749872"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [205.28646864686468, 291.44436337103247], "id": "el11179140578902893120", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578902507192", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907776336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578902524312", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578902525208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578902526104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578902527000", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578902527896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578902549336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578902550232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578902551128", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578902552024", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578902569368", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902570264", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902571160", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902572056", "facecolor": "#FFA500", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902572952", "facecolor": "#FFA500", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578902594392", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [205.28646864686468, 291.44436337103247], "axes": [{"tickvalues": [215, 231, 247, 263, 281], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578902895528", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.65, 35.35]}], "height": 480.0, "id": "el11179140578903621416", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578908129768", "el11179140578907775104", "el11179140578908954864", "el11179140578910066728", "el11179140578910426224", "el11179140578903041416", "el11179140578902422416", "el11179140578902423200", "el11179140578902424096", "el11179140578902424992", "el11179140578902475104", "el11179140578902476000", "el11179140578902476896", "el11179140578902477792", "el11179140578902478688", "el11179140578902504224", "el11179140578902505120"], "type": "clickinfo", "low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}}, {"ids": ["el11179140578902507192", "el11179140578907776336", "el11179140578902524312", "el11179140578902525208", "el11179140578902526104", "el11179140578902527000", "el11179140578902527896", "el11179140578902549336", "el11179140578902550232", "el11179140578902551128", "el11179140578902552024", "el11179140578902569368", "el11179140578902570264", "el11179140578902571160", "el11179140578902572056", "el11179140578902572952", "el11179140578902594392"], "type": "clickinfo", "low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}}]});
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
    
                 mpld3.draw_figure("id14", {"data": {"data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.95911348872755], [2622.0, 28.5, 263.95911348872755], [0.0, 28.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.84566361873095], [3632.0, 20.5, 240.84566361873095], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.44436337103247], [2741.0, 27.5, 281.44436337103247], [0.0, 27.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.39320503682586], [4226.0, 21.5, 260.39320503682586], [0.0, 21.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.28646864686468], [1532.0, 18.5, 215.28646864686468], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.58814016172508], [1865.0, 29.5, 249.58814016172508], [0.0, 29.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.14489795918368], [530.0, 23.5, 234.14489795918368], [0.0, 23.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.55398037077427], [1841.0, 19.5, 252.55398037077427], [0.0, 19.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.6801170813297], [4791.0, 25.5, 257.6801170813297], [0.0, 25.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.4699157641396], [3324.0, 34.5, 261.4699157641396], [0.0, 34.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.24119402985076], [1680.0, 26.5, 250.24119402985076], [0.0, 26.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.31146572104018], [3405.0, 24.5, 243.31146572104018], [0.0, 24.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.3622926093514], [3315.0, 22.5, 264.3622926093514], [0.0, 22.5, 0.0]]}, "axes": [{"ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578902893120"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [5217.1, 530.0], "id": "el11179140578902749872", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578908129768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907775104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578908954864", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578910066728", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578910426224", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578903041416", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578902422416", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578902423200", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578902424096", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578902424992", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578902475104", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578902476000", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902476896", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902477792", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902478688", "facecolor": "#FF0000", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902504224", "facecolor": "#FF0000", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578902505120", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [5217.1, 530.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 7, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578902752280", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.65, 35.35]}, {"ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578902749872"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [205.28646864686468, 291.44436337103247], "id": "el11179140578902893120", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578902507192", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578907776336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578902524312", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578902525208", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578902526104", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578902527000", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578902527896", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578902549336", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578902550232", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578902551128", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578902552024", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578902569368", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902570264", "facecolor": "#FFA500", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902571160", "facecolor": "#FFA500", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902572056", "facecolor": "#FFA500", "xindex": 0, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578902572952", "facecolor": "#FFA500", "xindex": 0, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578902594392", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [205.28646864686468, 291.44436337103247], "axes": [{"tickvalues": [215, 231, 247, 263, 281], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578902895528", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [16.65, 35.35]}], "height": 480.0, "id": "el11179140578903621416", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578908129768", "el11179140578907775104", "el11179140578908954864", "el11179140578910066728", "el11179140578910426224", "el11179140578903041416", "el11179140578902422416", "el11179140578902423200", "el11179140578902424096", "el11179140578902424992", "el11179140578902475104", "el11179140578902476000", "el11179140578902476896", "el11179140578902477792", "el11179140578902478688", "el11179140578902504224", "el11179140578902505120"], "type": "clickinfo", "low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}}, {"ids": ["el11179140578902507192", "el11179140578907776336", "el11179140578902524312", "el11179140578902525208", "el11179140578902526104", "el11179140578902527000", "el11179140578902527896", "el11179140578902549336", "el11179140578902550232", "el11179140578902551128", "el11179140578902552024", "el11179140578902569368", "el11179140578902570264", "el11179140578902571160", "el11179140578902572056", "el11179140578902572952", "el11179140578902594392"], "type": "clickinfo", "low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}}]});
            })
         });
}

