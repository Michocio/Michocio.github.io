

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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
    
       mpld3.draw_figure("id11", {"data": {"data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "type": "clickinfo", "ids": ["el7772140277694585712", "el7772140277694585208", "el7772140277694586552", "el7772140277694612088", "el7772140277694612984", "el7772140277694613880", "el7772140277694614776", "el7772140277694636216", "el7772140277694637112", "el7772140277694638008", "el7772140277694638904", "el7772140277694639800", "el7772140277694665336", "el7772140277694666232", "el7772140277694667128", "el7772140277694668024", "el7772140277694689464"], "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]]}, {"low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "type": "clickinfo", "ids": ["el7772140277694691480", "el7772140277694585376", "el7772140277694692208", "el7772140277694693104", "el7772140277694190256", "el7772140277694191152", "el7772140277694192048", "el7772140277694192944", "el7772140277694210288", "el7772140277694211184", "el7772140277694212080", "el7772140277694212976", "el7772140277694213872", "el7772140277694235312", "el7772140277694236208", "el7772140277694237104", "el7772140277694238000"], "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277694955592", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277694958000"], "images": [], "id": "el7772140277694891904", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [5856.25, 530.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585712", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694586552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694612088", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694612984", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694613880", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694614776", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694636216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694637112", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694638008", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694638904", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694639800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694665336", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277694666232", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277694667128", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277694668024", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694689464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [5856.25, 530.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 4, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277696460000", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277694891904"], "images": [], "id": "el7772140277694958000", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [205.0, 291.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694691480", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585376", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694692208", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694693104", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694190256", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694191152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694192048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694192944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694210288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694211184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694212080", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694212976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694213872", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277694235312", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277694236208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277694237104", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694238000", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [205.0, 291.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [215, 231, 247, 263, 281], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277695655440", "height": 480.0});
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
    
         mpld3.draw_figure("id11", {"data": {"data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "type": "clickinfo", "ids": ["el7772140277694585712", "el7772140277694585208", "el7772140277694586552", "el7772140277694612088", "el7772140277694612984", "el7772140277694613880", "el7772140277694614776", "el7772140277694636216", "el7772140277694637112", "el7772140277694638008", "el7772140277694638904", "el7772140277694639800", "el7772140277694665336", "el7772140277694666232", "el7772140277694667128", "el7772140277694668024", "el7772140277694689464"], "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]]}, {"low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "type": "clickinfo", "ids": ["el7772140277694691480", "el7772140277694585376", "el7772140277694692208", "el7772140277694693104", "el7772140277694190256", "el7772140277694191152", "el7772140277694192048", "el7772140277694192944", "el7772140277694210288", "el7772140277694211184", "el7772140277694212080", "el7772140277694212976", "el7772140277694213872", "el7772140277694235312", "el7772140277694236208", "el7772140277694237104", "el7772140277694238000"], "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277694955592", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277694958000"], "images": [], "id": "el7772140277694891904", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [5856.25, 530.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585712", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694586552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694612088", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694612984", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694613880", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694614776", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694636216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694637112", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694638008", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694638904", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694639800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694665336", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277694666232", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277694667128", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277694668024", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694689464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [5856.25, 530.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 4, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277696460000", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277694891904"], "images": [], "id": "el7772140277694958000", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [205.0, 291.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694691480", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585376", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694692208", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694693104", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694190256", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694191152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694192048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694192944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694210288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694211184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694212080", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694212976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694213872", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277694235312", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277694236208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277694237104", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694238000", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [205.0, 291.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [215, 231, 247, 263, 281], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277695655440", "height": 480.0});
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
           
            var obj = mpld3.get_element(id);
                 console.log(id, i, obj);
            
            
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
    
                 mpld3.draw_figure("id11", {"data": {"data09": [[0.0, 25.5, 0.0], [1680.0, 25.5, 250.0], [1680.0, 26.5, 250.0], [0.0, 26.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [3315.0, 21.5, 264.0], [3315.0, 22.5, 264.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [4791.0, 24.5, 257.0], [4791.0, 25.5, 257.0], [0.0, 25.5, 0.0]], "data10": [[0.0, 26.5, 0.0], [2741.0, 26.5, 281.0], [2741.0, 27.5, 281.0], [0.0, 27.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [2622.0, 27.5, 263.0], [2622.0, 28.5, 263.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 29.5, 30.5, 31.5, 32.5], [0.0, 30.5, 31.5, 32.5, 33.5], [0.0, 30.5, 31.5, 32.5, 33.5]], "data04": [[0.0, 20.5, 0.0], [4226.0, 20.5, 260.0], [4226.0, 21.5, 260.0], [0.0, 21.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [530.0, 22.5, 234.0], [530.0, 23.5, 234.0], [0.0, 23.5, 0.0]], "data03": [[0.0, 19.5, 0.0], [3632.0, 19.5, 240.0], [3632.0, 20.5, 240.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 33.5, 0.0], [3324.0, 33.5, 261.0], [3324.0, 34.5, 261.0], [0.0, 34.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [3405.0, 23.5, 243.0], [3405.0, 24.5, 243.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [1865.0, 28.5, 249.0], [1865.0, 29.5, 249.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [1841.0, 18.5, 252.0], [1841.0, 19.5, 252.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0], [1532.0, 17.5, 215.0], [1532.0, 18.5, 215.0], [0.0, 18.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "type": "clickinfo", "ids": ["el7772140277694585712", "el7772140277694585208", "el7772140277694586552", "el7772140277694612088", "el7772140277694612984", "el7772140277694613880", "el7772140277694614776", "el7772140277694636216", "el7772140277694637112", "el7772140277694638008", "el7772140277694638904", "el7772140277694639800", "el7772140277694665336", "el7772140277694666232", "el7772140277694667128", "el7772140277694668024", "el7772140277694689464"], "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]]}, {"low": 18, "wiek": {"34": [44549], "18": [857111, 395693], "19": [404822], "20": [544523, 384369, 292526], "21": [462511, 466216, 202552, 413656], "22": [102814, 316392], "23": [90536], "24": [253718, 295472, 217812, 93459, 295473], "25": [466773, 190275, 232255], "26": [244835], "27": [65508, 106635], "28": [165852], "29": [39575]}, "vals": {"34": [3324, 261], "18": [1532, 215], "19": [1841, 252], "20": [3632, 240], "21": [4226, 260], "22": [3315, 264], "23": [530, 234], "24": [3405, 243], "25": [4791, 257], "26": [1680, 250], "27": [2741, 281], "28": [2622, 263], "29": [1865, 249]}, "players": {"190275": ["Micha\u0142 Koj", 1187, 237], "404822": ["Adrian Gryszkiewicz", 1841, 252], "44549": ["Angulo", 3324, 261], "544523": ["Przemyslaw Wisniewski", 2139, 248], "93459": ["Konrad Nowak", 340, 214], "106635": ["Boris Sekulic", 1249, 273], "466773": ["Jes\u00fas Jim\u00e9nez", 3119, 267], "253718": ["Valeriane Gvilia", 1484, 263], "39575": ["Szymon Matuszek", 1865, 249], "413656": ["Wiktor Biedrzycki", 114, 211], "90536": ["A. Arnarson  ", 530, 234], "165852": ["Dani Suarez", 2622, 263], "102814": ["Pawe\u0142 Bochniewicz", 2948, 268], "466216": ["Daniel Smuga", 777, 231], "244835": ["Kamil Zapolnik", 1680, 250], "65508": ["Mateusz Matras", 1492, 287], "295473": ["Rafa\u0142 Wolszty\u0144ski", 166, 201], "316392": ["Marcin Urynowicz", 367, 234], "395693": ["Daniel Liszka", 643, 215], "292526": ["Ishmael Baidoo", 232, 229], "462511": ["Szymon \u017burkowski", 2876, 277], "295472": ["\u0141ukasz Wolszty\u0144ski", 990, 230], "384369": ["Maciej Ambrosiewicz", 1261, 229], "202552": ["Adam Ryczkowski", 459, 210], "217812": ["Giannis Mystakidis", 425, 242], "857111": ["Kacper Michalski", 889, 215], "232255": ["Adam Wolniewicz", 485, 246]}, "type": "clickinfo", "ids": ["el7772140277694691480", "el7772140277694585376", "el7772140277694692208", "el7772140277694693104", "el7772140277694190256", "el7772140277694191152", "el7772140277694192048", "el7772140277694192944", "el7772140277694210288", "el7772140277694211184", "el7772140277694212080", "el7772140277694212976", "el7772140277694213872", "el7772140277694235312", "el7772140277694236208", "el7772140277694237104", "el7772140277694238000"], "alls": [["Angulo", [3324, 261]], ["Jes\u00fas Jim\u00e9nez", [3119, 267]], ["Pawe\u0142 Bochniewicz", [2948, 268]], ["Szymon \u017burkowski", [2876, 277]], ["Dani Suarez", [2622, 263]], ["Przemyslaw Wisniewski", [2139, 248]], ["Szymon Matuszek", [1865, 249]], ["Adrian Gryszkiewicz", [1841, 252]], ["Kamil Zapolnik", [1680, 250]], ["Mateusz Matras", [1492, 287]], ["Valeriane Gvilia", [1484, 263]], ["Maciej Ambrosiewicz", [1261, 229]], ["Boris Sekulic", [1249, 273]], ["Micha\u0142 Koj", [1187, 237]], ["\u0141ukasz Wolszty\u0144ski", [990, 230]], ["Kacper Michalski", [889, 215]], ["Daniel Smuga", [777, 231]], ["Daniel Liszka", [643, 215]], ["A. Arnarson  ", [530, 234]], ["Adam Wolniewicz", [485, 246]], ["Adam Ryczkowski", [459, 210]], ["Giannis Mystakidis", [425, 242]], ["Marcin Urynowicz", [367, 234]], ["Konrad Nowak", [340, 214]], ["Ishmael Baidoo", [232, 229]], ["Rafa\u0142 Wolszty\u0144ski", [166, 201]], ["Wiktor Biedrzycki", [114, 211]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277694955592", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277694958000"], "images": [], "id": "el7772140277694891904", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [5856.25, 530.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585712", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694586552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694612088", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694612984", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694613880", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694614776", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694636216", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694637112", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694638008", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694638904", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694639800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694665336", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277694666232", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277694667128", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277694668024", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694689464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [5856.25, 530.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 4, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277696460000", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277694891904"], "images": [], "id": "el7772140277694958000", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [205.0, 291.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694691480", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694585376", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694692208", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694693104", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694190256", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694191152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694192048", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694192944", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694210288", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694211184", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694212080", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694212976", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694213872", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277694235312", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277694236208", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277694237104", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277694238000", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [205.0, 291.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [215, 231, 247, 263, 281], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277695655440", "height": 480.0});
            })
         });
}
</script>
