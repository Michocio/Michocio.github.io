

  

   


    
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
    
       mpld3.draw_figure("id11", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "low": 18, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "type": "clickinfo", "ids": ["el4265140411099577088", "el4265140411099576584", "el4265140411099577872", "el4265140411099607504", "el4265140411099608400", "el4265140411099609296", "el4265140411099610192", "el4265140411099611088", "el4265140411099632528", "el4265140411099633424", "el4265140411099634320", "el4265140411099635216", "el4265140411099660752", "el4265140411099661648", "el4265140411099662544", "el4265140411099663440", "el4265140411099664336"]}, {"vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "low": 18, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "type": "clickinfo", "ids": ["el4265140411099686952", "el4265140411099576752", "el4265140411099687624", "el4265140411099688520", "el4265140411099709960", "el4265140411099710856", "el4265140411099711752", "el4265140411099712648", "el4265140411099713488", "el4265140411099730888", "el4265140411099731784", "el4265140411099732680", "el4265140411099733576", "el4265140411099230728", "el4265140411099231624", "el4265140411099232520", "el4265140411099233416"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411099950944"], "collections": [], "xlim": [5856.25, 530.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411100084264"}], "xdomain": [5856.25, 530.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 4, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099577088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099576584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099577872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099607504"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099608400"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099609296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099610192"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099611088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099632528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099633424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099634320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099635216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099660752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099661648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099662544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099663440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099664336"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411099887656"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411099887656"], "collections": [], "xlim": [205.0, 291.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411101458728"}], "xdomain": [205.0, 291.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [215, 231, 247, 263, 281], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099686952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099576752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099687624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099688520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099709960"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099710856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099711752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099712648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099713488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099730888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099731784"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099732680"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099733576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099230728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099231624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099232520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099233416"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411099950944"}], "id": "el4265140411100615904"});
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
    
         mpld3.draw_figure("id11", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "low": 18, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "type": "clickinfo", "ids": ["el4265140411099577088", "el4265140411099576584", "el4265140411099577872", "el4265140411099607504", "el4265140411099608400", "el4265140411099609296", "el4265140411099610192", "el4265140411099611088", "el4265140411099632528", "el4265140411099633424", "el4265140411099634320", "el4265140411099635216", "el4265140411099660752", "el4265140411099661648", "el4265140411099662544", "el4265140411099663440", "el4265140411099664336"]}, {"vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "low": 18, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "type": "clickinfo", "ids": ["el4265140411099686952", "el4265140411099576752", "el4265140411099687624", "el4265140411099688520", "el4265140411099709960", "el4265140411099710856", "el4265140411099711752", "el4265140411099712648", "el4265140411099713488", "el4265140411099730888", "el4265140411099731784", "el4265140411099732680", "el4265140411099733576", "el4265140411099230728", "el4265140411099231624", "el4265140411099232520", "el4265140411099233416"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411099950944"], "collections": [], "xlim": [5856.25, 530.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411100084264"}], "xdomain": [5856.25, 530.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 4, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099577088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099576584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099577872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099607504"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099608400"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099609296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099610192"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099611088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099632528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099633424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099634320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099635216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099660752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099661648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099662544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099663440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099664336"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411099887656"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411099887656"], "collections": [], "xlim": [205.0, 291.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411101458728"}], "xdomain": [205.0, 291.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [215, 231, 247, 263, 281], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099686952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099576752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099687624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099688520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099709960"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099710856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099711752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099712648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099713488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099730888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099731784"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099732680"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099733576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099230728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099231624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099232520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099233416"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411099950944"}], "id": "el4265140411100615904"});
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
    
                 mpld3.draw_figure("id11", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "low": 18, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "type": "clickinfo", "ids": ["el4265140411099577088", "el4265140411099576584", "el4265140411099577872", "el4265140411099607504", "el4265140411099608400", "el4265140411099609296", "el4265140411099610192", "el4265140411099611088", "el4265140411099632528", "el4265140411099633424", "el4265140411099634320", "el4265140411099635216", "el4265140411099660752", "el4265140411099661648", "el4265140411099662544", "el4265140411099663440", "el4265140411099664336"]}, {"vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "low": 18, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "type": "clickinfo", "ids": ["el4265140411099686952", "el4265140411099576752", "el4265140411099687624", "el4265140411099688520", "el4265140411099709960", "el4265140411099710856", "el4265140411099711752", "el4265140411099712648", "el4265140411099713488", "el4265140411099730888", "el4265140411099731784", "el4265140411099732680", "el4265140411099733576", "el4265140411099230728", "el4265140411099231624", "el4265140411099232520", "el4265140411099233416"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411099950944"], "collections": [], "xlim": [5856.25, 530.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411100084264"}], "xdomain": [5856.25, 530.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 4, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099577088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099576584"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099577872"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099607504"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099608400"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099609296"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099610192"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099611088"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099632528"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099633424"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099634320"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099635216"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099660752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099661648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099662544"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099663440"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411099664336"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411099887656"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411099887656"], "collections": [], "xlim": [205.0, 291.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411101458728"}], "xdomain": [205.0, 291.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [215, 231, 247, 263, 281], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099686952"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099576752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099687624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099688520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099709960"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099710856"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099711752"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099712648"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099713488"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099730888"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099731784"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099732680"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099733576"}, {"edgecolor": "none", "dasharray": "none", "yindex": 2, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099230728"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099231624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099232520"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411099233416"}], "ydomain": [16.65, 35.35], "ylim": [16.65, 35.35], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411099950944"}], "id": "el4265140411100615904"});
            })
         });
}
    
