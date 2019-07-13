

<style>

</style>

<div id="id4"></div>
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
    
       mpld3.draw_figure("id4", {"data": {"data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "type": "clickinfo", "ids": ["el7772140277704441528", "el7772140277704441024", "el7772140277704467008", "el7772140277704467904", "el7772140277704468800", "el7772140277704469696", "el7772140277704470480", "el7772140277704487936", "el7772140277704488832", "el7772140277704489728", "el7772140277704490624", "el7772140277704524352", "el7772140277704525248", "el7772140277704526144", "el7772140277704527040", "el7772140277704527824"], "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]]}, {"low": 18, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "type": "clickinfo", "ids": ["el7772140277704550496", "el7772140277704441192", "el7772140277704551224", "el7772140277704552120", "el7772140277704569464", "el7772140277704570360", "el7772140277704571256", "el7772140277704572152", "el7772140277704593592", "el7772140277704594488", "el7772140277704595384", "el7772140277704596280", "el7772140277704597176", "el7772140277704614520", "el7772140277704615416", "el7772140277704616312"], "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277764025480", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.7, 34.3], "sharey": ["el7772140277704830312"], "images": [], "id": "el7772140277764166208", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [10052.75, 29.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441528", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441024", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704467008", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704467904", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704468800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704469696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704470480", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704487936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704488832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704489728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704490624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704524352", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704525248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704526144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704527040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704527824", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.7, 34.3], "markers": [], "xlim": [10052.75, 29.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 16, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277704853264", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.7, 34.3], "sharey": ["el7772140277764166208"], "images": [], "id": "el7772140277704830312", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [206.0, 288.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704550496", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441192", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704551224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277704552120", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704569464", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704570360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704571256", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704572152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704593592", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277704594488", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704595384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704596280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704597176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704614520", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277704615416", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704616312", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.7, 34.3], "markers": [], "xlim": [206.0, 288.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [216, 231, 246, 261, 278], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 16, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277764276464", "height": 480.0});
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
    
         mpld3.draw_figure("id4", {"data": {"data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "type": "clickinfo", "ids": ["el7772140277704441528", "el7772140277704441024", "el7772140277704467008", "el7772140277704467904", "el7772140277704468800", "el7772140277704469696", "el7772140277704470480", "el7772140277704487936", "el7772140277704488832", "el7772140277704489728", "el7772140277704490624", "el7772140277704524352", "el7772140277704525248", "el7772140277704526144", "el7772140277704527040", "el7772140277704527824"], "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]]}, {"low": 18, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "type": "clickinfo", "ids": ["el7772140277704550496", "el7772140277704441192", "el7772140277704551224", "el7772140277704552120", "el7772140277704569464", "el7772140277704570360", "el7772140277704571256", "el7772140277704572152", "el7772140277704593592", "el7772140277704594488", "el7772140277704595384", "el7772140277704596280", "el7772140277704597176", "el7772140277704614520", "el7772140277704615416", "el7772140277704616312"], "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277764025480", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.7, 34.3], "sharey": ["el7772140277704830312"], "images": [], "id": "el7772140277764166208", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [10052.75, 29.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441528", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441024", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704467008", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704467904", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704468800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704469696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704470480", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704487936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704488832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704489728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704490624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704524352", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704525248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704526144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704527040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704527824", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.7, 34.3], "markers": [], "xlim": [10052.75, 29.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 16, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277704853264", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.7, 34.3], "sharey": ["el7772140277764166208"], "images": [], "id": "el7772140277704830312", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [206.0, 288.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704550496", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441192", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704551224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277704552120", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704569464", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704570360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704571256", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704572152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704593592", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277704594488", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704595384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704596280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704597176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704614520", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277704615416", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704616312", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.7, 34.3], "markers": [], "xlim": [206.0, 288.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [216, 231, 246, 261, 278], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 16, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277764276464", "height": 480.0});
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
    
                 mpld3.draw_figure("id4", {"data": {"data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "type": "clickinfo", "ids": ["el7772140277704441528", "el7772140277704441024", "el7772140277704467008", "el7772140277704467904", "el7772140277704468800", "el7772140277704469696", "el7772140277704470480", "el7772140277704487936", "el7772140277704488832", "el7772140277704489728", "el7772140277704490624", "el7772140277704524352", "el7772140277704525248", "el7772140277704526144", "el7772140277704527040", "el7772140277704527824"], "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]]}, {"low": 18, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "type": "clickinfo", "ids": ["el7772140277704550496", "el7772140277704441192", "el7772140277704551224", "el7772140277704552120", "el7772140277704569464", "el7772140277704570360", "el7772140277704571256", "el7772140277704572152", "el7772140277704593592", "el7772140277704594488", "el7772140277704595384", "el7772140277704596280", "el7772140277704597176", "el7772140277704614520", "el7772140277704615416", "el7772140277704616312"], "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277764025480", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.7, 34.3], "sharey": ["el7772140277704830312"], "images": [], "id": "el7772140277764166208", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [10052.75, 29.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441528", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441024", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704467008", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704467904", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704468800", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704469696", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704470480", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704487936", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704488832", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704489728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704490624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704524352", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704525248", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704526144", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704527040", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data15", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704527824", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.7, 34.3], "markers": [], "xlim": [10052.75, 29.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 16, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277704853264", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.7, 34.3], "sharey": ["el7772140277764166208"], "images": [], "id": "el7772140277704830312", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [206.0, 288.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704550496", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704441192", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704551224", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277704552120", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704569464", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704570360", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704571256", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704572152", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704593592", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277704594488", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704595384", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704596280", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704597176", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data13", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704614520", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277704615416", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data14", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277704616312", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data16", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.7, 34.3], "markers": [], "xlim": [206.0, 288.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [216, 231, 246, 261, 278], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 16, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277764276464", "height": 480.0});
            })
         });
}
</script>
