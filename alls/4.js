

 


 
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
    
       mpld3.draw_figure("id4", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "ids": ["el10757139727020650168", "el10757139727020649664", "el10757139727020671496", "el10757139727020672392", "el10757139727020673288", "el10757139727020674184", "el10757139727020675024", "el10757139727020692424", "el10757139727020693320", "el10757139727020694216", "el10757139727020695112", "el10757139727020724744", "el10757139727020725640", "el10757139727020726536", "el10757139727020727432", "el10757139727020728272"], "type": "clickinfo", "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18}, {"alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "ids": ["el10757139727020746848", "el10757139727020649832", "el10757139727020747520", "el10757139727020748416", "el10757139727020769856", "el10757139727020770752", "el10757139727020771648", "el10757139727020772544", "el10757139727020793984", "el10757139727020794880", "el10757139727020795776", "el10757139727020796672", "el10757139727020797568", "el10757139727020819008", "el10757139727020819904", "el10757139727020820800"], "type": "clickinfo", "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18}], "height": 480.0, "id": "el10757139727080476912", "data": {"data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]], "data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727080222792", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [10052.75, 29.0], "ydomain": [16.7, 34.3], "sharex": [], "xlim": [10052.75, 29.0], "images": [], "sharey": ["el10757139727021034856"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 16, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727080372488", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.7, 34.3], "paths": [{"xindex": 0, "id": "el10757139727020650168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727020649664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727020671496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727020672392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727020673288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727020674184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727020675024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727020692424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727020693320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727020694216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727020695112", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727020724744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727020725640", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727020726536", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727020727432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727020728272", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727021057808", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [206.0, 288.0], "ydomain": [16.7, 34.3], "sharex": [], "xlim": [206.0, 288.0], "images": [], "sharey": ["el10757139727080372488"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [216, 231, 246, 261, 278], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 16, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727021034856", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.7, 34.3], "paths": [{"xindex": 2, "id": "el10757139727020746848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727020649832", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727020747520", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727020748416", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727020769856", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727020770752", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727020771648", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727020772544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727020793984", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727020794880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727020795776", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727020796672", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727020797568", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727020819008", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727020819904", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data14"}, {"xindex": 2, "id": "el10757139727020820800", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
         mpld3.draw_figure("id4", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "ids": ["el10757139727020650168", "el10757139727020649664", "el10757139727020671496", "el10757139727020672392", "el10757139727020673288", "el10757139727020674184", "el10757139727020675024", "el10757139727020692424", "el10757139727020693320", "el10757139727020694216", "el10757139727020695112", "el10757139727020724744", "el10757139727020725640", "el10757139727020726536", "el10757139727020727432", "el10757139727020728272"], "type": "clickinfo", "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18}, {"alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "ids": ["el10757139727020746848", "el10757139727020649832", "el10757139727020747520", "el10757139727020748416", "el10757139727020769856", "el10757139727020770752", "el10757139727020771648", "el10757139727020772544", "el10757139727020793984", "el10757139727020794880", "el10757139727020795776", "el10757139727020796672", "el10757139727020797568", "el10757139727020819008", "el10757139727020819904", "el10757139727020820800"], "type": "clickinfo", "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18}], "height": 480.0, "id": "el10757139727080476912", "data": {"data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]], "data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727080222792", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [10052.75, 29.0], "ydomain": [16.7, 34.3], "sharex": [], "xlim": [10052.75, 29.0], "images": [], "sharey": ["el10757139727021034856"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 16, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727080372488", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.7, 34.3], "paths": [{"xindex": 0, "id": "el10757139727020650168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727020649664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727020671496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727020672392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727020673288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727020674184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727020675024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727020692424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727020693320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727020694216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727020695112", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727020724744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727020725640", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727020726536", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727020727432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727020728272", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727021057808", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [206.0, 288.0], "ydomain": [16.7, 34.3], "sharex": [], "xlim": [206.0, 288.0], "images": [], "sharey": ["el10757139727080372488"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [216, 231, 246, 261, 278], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 16, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727021034856", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.7, 34.3], "paths": [{"xindex": 2, "id": "el10757139727020746848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727020649832", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727020747520", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727020748416", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727020769856", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727020770752", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727020771648", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727020772544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727020793984", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727020794880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727020795776", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727020796672", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727020797568", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727020819008", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727020819904", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data14"}, {"xindex": 2, "id": "el10757139727020820800", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
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
    
                 mpld3.draw_figure("id4", {"width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}, {"alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "ids": ["el10757139727020650168", "el10757139727020649664", "el10757139727020671496", "el10757139727020672392", "el10757139727020673288", "el10757139727020674184", "el10757139727020675024", "el10757139727020692424", "el10757139727020693320", "el10757139727020694216", "el10757139727020695112", "el10757139727020724744", "el10757139727020725640", "el10757139727020726536", "el10757139727020727432", "el10757139727020728272"], "type": "clickinfo", "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18}, {"alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "ids": ["el10757139727020746848", "el10757139727020649832", "el10757139727020747520", "el10757139727020748416", "el10757139727020769856", "el10757139727020770752", "el10757139727020771648", "el10757139727020772544", "el10757139727020793984", "el10757139727020794880", "el10757139727020795776", "el10757139727020796672", "el10757139727020797568", "el10757139727020819008", "el10757139727020819904", "el10757139727020820800"], "type": "clickinfo", "vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18}], "height": 480.0, "id": "el10757139727080476912", "data": {"data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]], "data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]]}, "axes": [{"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Minuty", "color": "#000000", "id": "el10757139727080222792", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [10052.75, 29.0], "ydomain": [16.7, 34.3], "sharex": [], "xlim": [10052.75, 29.0], "images": [], "sharey": ["el10757139727021034856"], "axes": [{"nticks": 6, "fontsize": 10.0, "tickvalues": null, "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 16, "fontsize": 10.0, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "left", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727080372488", "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "ylim": [16.7, 34.3], "paths": [{"xindex": 0, "id": "el10757139727020650168", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 0, "id": "el10757139727020649664", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 0, "id": "el10757139727020671496", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 0, "id": "el10757139727020672392", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data04"}, {"xindex": 0, "id": "el10757139727020673288", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 0, "id": "el10757139727020674184", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 0, "id": "el10757139727020675024", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 0, "id": "el10757139727020692424", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 0, "id": "el10757139727020693320", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 0, "id": "el10757139727020694216", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data10"}, {"xindex": 0, "id": "el10757139727020695112", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 0, "id": "el10757139727020724744", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 0, "id": "el10757139727020725640", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 0, "id": "el10757139727020726536", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 0, "id": "el10757139727020727432", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data15"}, {"xindex": 0, "id": "el10757139727020728272", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FF0000", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}, {"xscale": "linear", "texts": [{"v_baseline": "hanging", "text": "Instat index", "color": "#000000", "id": "el10757139727021057808", "rotation": -0.0, "position": [0.5, -0.07921476671476674], "fontsize": 14.0, "zorder": 3, "h_anchor": "middle", "alpha": 1, "coordinates": "axes"}], "markers": [], "xdomain": [206.0, 288.0], "ydomain": [16.7, 34.3], "sharex": [], "xlim": [206.0, 288.0], "images": [], "sharey": ["el10757139727080372488"], "axes": [{"nticks": 5, "fontsize": 10.0, "tickvalues": [216, 231, 246, 261, 278], "visible": true, "grid": {"color": "#B0B0B0", "dasharray": "none", "alpha": 1.0, "gridOn": true}, "position": "bottom", "tickformat": null, "scale": "linear"}, {"nticks": 16, "fontsize": null, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "visible": true, "grid": {"gridOn": false}, "position": "right", "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear"}], "lines": [], "axesbg": "#FFFFFF", "id": "el10757139727021034856", "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "ylim": [16.7, 34.3], "paths": [{"xindex": 2, "id": "el10757139727020746848", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data01"}, {"xindex": 2, "id": "el10757139727020649832", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data02"}, {"xindex": 2, "id": "el10757139727020747520", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data03"}, {"xindex": 2, "id": "el10757139727020748416", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data01"}, {"xindex": 2, "id": "el10757139727020769856", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data05"}, {"xindex": 2, "id": "el10757139727020770752", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data06"}, {"xindex": 2, "id": "el10757139727020771648", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data07"}, {"xindex": 2, "id": "el10757139727020772544", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data08"}, {"xindex": 2, "id": "el10757139727020793984", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data09"}, {"xindex": 2, "id": "el10757139727020794880", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 4, "data": "data01"}, {"xindex": 2, "id": "el10757139727020795776", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data11"}, {"xindex": 2, "id": "el10757139727020796672", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data12"}, {"xindex": 2, "id": "el10757139727020797568", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data13"}, {"xindex": 2, "id": "el10757139727020819008", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data14"}, {"xindex": 2, "id": "el10757139727020819904", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 3, "data": "data14"}, {"xindex": 2, "id": "el10757139727020820800", "zorder": 1, "pathcodes": ["M", "L", "L", "L", "Z"], "coordinates": "data", "facecolor": "#FFA500", "alpha": 0.7, "dasharray": "none", "edgecolor": "none", "edgewidth": 1.0, "yindex": 1, "data": "data16"}], "zoomable": true, "axesbgalpha": null, "yscale": "linear", "collections": []}]});
            })
         });
}
 
