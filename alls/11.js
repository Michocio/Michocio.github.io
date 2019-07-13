

<style>

</style>

<div id="id11"></div>
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
    
       mpld3.draw_figure("id11", {"id": "el6928140242916400768", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "type": "clickinfo", "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "low": 18, "ids": ["el6928140242915384176", "el6928140242915383672", "el6928140242915385016", "el6928140242915410552", "el6928140242915411448", "el6928140242915412344", "el6928140242915413240", "el6928140242915434680", "el6928140242915435576", "el6928140242915436472", "el6928140242915437368", "el6928140242915438264", "el6928140242915463800", "el6928140242915464696", "el6928140242915465592", "el6928140242915466488", "el6928140242915483832"]}, {"wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "type": "clickinfo", "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "low": 18, "ids": ["el6928140242915485848", "el6928140242915383840", "el6928140242915486576", "el6928140242915487472", "el6928140242915508912", "el6928140242915509808", "el6928140242915510704", "el6928140242915511600", "el6928140242915008752", "el6928140242915009648", "el6928140242915010544", "el6928140242915011440", "el6928140242915012336", "el6928140242915033776", "el6928140242915034672", "el6928140242915035568", "el6928140242915036464"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 4}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915895560", "zoomable": true, "sharey": ["el6928140242915259672"], "yscale": "linear", "texts": [{"id": "el6928140242915727624", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [5856.25, 530.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242915384176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915383672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915385016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915410552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915411448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915412344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915413240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915434680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915435576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915436472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915437368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915438264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915463800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915464696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915465592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915466488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915483832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [5856.25, 530.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [215, 231, 247, 263, 281], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915259672", "zoomable": true, "sharey": ["el6928140242915895560"], "yscale": "linear", "texts": [{"id": "el6928140242917045304", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [205.0, 291.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242915485848", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915383840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915486576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915487472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915508912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915509808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915510704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915511600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915008752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915009648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915010544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915011440", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915012336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915033776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915034672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915035568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915036464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [205.0, 291.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]]}, "width": 640.0});
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
    
         mpld3.draw_figure("id11", {"id": "el6928140242916400768", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "type": "clickinfo", "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "low": 18, "ids": ["el6928140242915384176", "el6928140242915383672", "el6928140242915385016", "el6928140242915410552", "el6928140242915411448", "el6928140242915412344", "el6928140242915413240", "el6928140242915434680", "el6928140242915435576", "el6928140242915436472", "el6928140242915437368", "el6928140242915438264", "el6928140242915463800", "el6928140242915464696", "el6928140242915465592", "el6928140242915466488", "el6928140242915483832"]}, {"wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "type": "clickinfo", "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "low": 18, "ids": ["el6928140242915485848", "el6928140242915383840", "el6928140242915486576", "el6928140242915487472", "el6928140242915508912", "el6928140242915509808", "el6928140242915510704", "el6928140242915511600", "el6928140242915008752", "el6928140242915009648", "el6928140242915010544", "el6928140242915011440", "el6928140242915012336", "el6928140242915033776", "el6928140242915034672", "el6928140242915035568", "el6928140242915036464"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 4}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915895560", "zoomable": true, "sharey": ["el6928140242915259672"], "yscale": "linear", "texts": [{"id": "el6928140242915727624", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [5856.25, 530.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242915384176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915383672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915385016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915410552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915411448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915412344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915413240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915434680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915435576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915436472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915437368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915438264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915463800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915464696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915465592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915466488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915483832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [5856.25, 530.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [215, 231, 247, 263, 281], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915259672", "zoomable": true, "sharey": ["el6928140242915895560"], "yscale": "linear", "texts": [{"id": "el6928140242917045304", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [205.0, 291.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242915485848", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915383840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915486576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915487472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915508912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915509808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915510704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915511600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915008752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915009648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915010544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915011440", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915012336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915033776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915034672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915035568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915036464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [205.0, 291.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]]}, "width": 640.0});
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
    
                 mpld3.draw_figure("id11", {"id": "el6928140242916400768", "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "type": "clickinfo", "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "low": 18, "ids": ["el6928140242915384176", "el6928140242915383672", "el6928140242915385016", "el6928140242915410552", "el6928140242915411448", "el6928140242915412344", "el6928140242915413240", "el6928140242915434680", "el6928140242915435576", "el6928140242915436472", "el6928140242915437368", "el6928140242915438264", "el6928140242915463800", "el6928140242915464696", "el6928140242915465592", "el6928140242915466488", "el6928140242915483832"]}, {"wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]], "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "type": "clickinfo", "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "low": 18, "ids": ["el6928140242915485848", "el6928140242915383840", "el6928140242915486576", "el6928140242915487472", "el6928140242915508912", "el6928140242915509808", "el6928140242915510704", "el6928140242915511600", "el6928140242915008752", "el6928140242915009648", "el6928140242915010544", "el6928140242915011440", "el6928140242915012336", "el6928140242915033776", "el6928140242915034672", "el6928140242915035568", "el6928140242915036464"]}], "axes": [{"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": null, "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 4}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": 10.0, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915895560", "zoomable": true, "sharey": ["el6928140242915259672"], "yscale": "linear", "texts": [{"id": "el6928140242915727624", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Minuty", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [5856.25, 530.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242915384176", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915383672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915385016", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915410552", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915411448", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915412344", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915413240", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915434680", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915435576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915436472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915437368", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915438264", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915463800", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915464696", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915465592", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915466488", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915483832", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FF0000", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [5856.25, 530.0], "sharex": []}, {"axesbgalpha": null, "collections": [], "lines": [], "axes": [{"scale": "linear", "visible": true, "grid": {"gridOn": true, "alpha": 1.0, "dasharray": "none", "color": "#B0B0B0"}, "tickvalues": [215, 231, 247, 263, 281], "fontsize": 10.0, "position": "bottom", "tickformat": null, "nticks": 5}, {"scale": "linear", "visible": true, "grid": {"gridOn": false}, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "fontsize": null, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "nticks": 17}], "images": [], "markers": [], "id": "el6928140242915259672", "zoomable": true, "sharey": ["el6928140242915895560"], "yscale": "linear", "texts": [{"id": "el6928140242917045304", "alpha": 1, "zorder": 3, "coordinates": "axes", "v_baseline": "hanging", "text": "Instat index", "h_anchor": "middle", "position": [0.5, -0.07921476671476674], "rotation": -0.0, "fontsize": 14.0, "color": "#000000"}], "xdomain": [205.0, 291.0], "xscale": "linear", "ydomain": [16.65, 35.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axesbg": "#FFFFFF", "ylim": [16.65, 35.35], "paths": [{"id": "el6928140242915485848", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data01", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915383840", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data02", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915486576", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data03", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915487472", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data04", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915508912", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data05", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915509808", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data06", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915510704", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data07", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915511600", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data08", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915008752", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data09", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915009648", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data10", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915010544", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data11", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915011440", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data12", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915012336", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915033776", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 2, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915034672", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 3, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915035568", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 4, "coordinates": "data", "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data13", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}, {"id": "el6928140242915036464", "alpha": 0.7, "edgecolor": "none", "facecolor": "#FFA500", "yindex": 1, "coordinates": "data", "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "data": "data14", "edgewidth": 1.0, "dasharray": "none", "zorder": 1}], "xlim": [205.0, 291.0], "sharex": []}], "height": 480.0, "data": {"data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]]}, "width": 640.0});
            })
         });
}
</script>
