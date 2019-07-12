

  

   


    
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
    
       mpld3.draw_figure("id4", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "type": "clickinfo", "ids": ["el4265140411109477960", "el4265140411109477456", "el4265140411109503384", "el4265140411109504280", "el4265140411109505176", "el4265140411109506072", "el4265140411109506968", "el4265140411109524312", "el4265140411109525208", "el4265140411109526104", "el4265140411109527000", "el4265140411109552536", "el4265140411109553432", "el4265140411109554328", "el4265140411109555224", "el4265140411109556120"]}, {"vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "type": "clickinfo", "ids": ["el4265140411109578736", "el4265140411109477624", "el4265140411109579408", "el4265140411109580304", "el4265140411109601744", "el4265140411109602640", "el4265140411109603536", "el4265140411109604432", "el4265140411109605328", "el4265140411109622672", "el4265140411109623568", "el4265140411109624464", "el4265140411109625360", "el4265140411109650896", "el4265140411109651792", "el4265140411109652688"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411109866744"], "collections": [], "xlim": [10052.75, 29.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411169040088"}], "xdomain": [10052.75, 29.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 16, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109477960"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109477456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109503384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109504280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109505176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109506072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109506968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109524312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109525208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109526104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109527000"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109552536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109553432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109554328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109555224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109556120"}], "ydomain": [16.7, 34.3], "ylim": [16.7, 34.3], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411169203424"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411169203424"], "collections": [], "xlim": [206.0, 288.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411109889696"}], "xdomain": [206.0, 288.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [216, 231, 246, 261, 278], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 16, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109578736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109477624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109579408"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109580304"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109601744"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109602640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109603536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109604432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109605328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109622672"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109623568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109624464"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109625360"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109650896"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109651792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109652688"}], "ydomain": [16.7, 34.3], "ylim": [16.7, 34.3], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411109866744"}], "id": "el4265140411169304816"});
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
    
         mpld3.draw_figure("id4", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "type": "clickinfo", "ids": ["el4265140411109477960", "el4265140411109477456", "el4265140411109503384", "el4265140411109504280", "el4265140411109505176", "el4265140411109506072", "el4265140411109506968", "el4265140411109524312", "el4265140411109525208", "el4265140411109526104", "el4265140411109527000", "el4265140411109552536", "el4265140411109553432", "el4265140411109554328", "el4265140411109555224", "el4265140411109556120"]}, {"vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "type": "clickinfo", "ids": ["el4265140411109578736", "el4265140411109477624", "el4265140411109579408", "el4265140411109580304", "el4265140411109601744", "el4265140411109602640", "el4265140411109603536", "el4265140411109604432", "el4265140411109605328", "el4265140411109622672", "el4265140411109623568", "el4265140411109624464", "el4265140411109625360", "el4265140411109650896", "el4265140411109651792", "el4265140411109652688"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411109866744"], "collections": [], "xlim": [10052.75, 29.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411169040088"}], "xdomain": [10052.75, 29.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 16, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109477960"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109477456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109503384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109504280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109505176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109506072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109506968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109524312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109525208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109526104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109527000"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109552536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109553432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109554328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109555224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109556120"}], "ydomain": [16.7, 34.3], "ylim": [16.7, 34.3], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411169203424"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411169203424"], "collections": [], "xlim": [206.0, 288.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411109889696"}], "xdomain": [206.0, 288.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [216, 231, 246, 261, 278], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 16, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109578736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109477624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109579408"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109580304"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109601744"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109602640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109603536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109604432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109605328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109622672"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109623568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109624464"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109625360"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109650896"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109651792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109652688"}], "ydomain": [16.7, 34.3], "ylim": [16.7, 34.3], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411109866744"}], "id": "el4265140411169304816"});
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
    
                 mpld3.draw_figure("id4", {"plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "type": "clickinfo", "ids": ["el4265140411109477960", "el4265140411109477456", "el4265140411109503384", "el4265140411109504280", "el4265140411109505176", "el4265140411109506072", "el4265140411109506968", "el4265140411109524312", "el4265140411109525208", "el4265140411109526104", "el4265140411109527000", "el4265140411109552536", "el4265140411109553432", "el4265140411109554328", "el4265140411109555224", "el4265140411109556120"]}, {"vals": {"32": [98, 262], "33": [2872, 276], "18": [70, 0], "19": [676, 216], "20": [245, 256], "22": [8048, 257], "23": [3940, 264], "24": [201, 224], "25": [2200, 261], "26": [4839, 246], "27": [29, 0], "28": [4049, 242], "29": [3794, 260], "30": [2443, 278], "31": [2188, 262]}, "low": 18, "players": {"160898": ["Bojan Cecaric", 271, 227], "1072899": ["Vinicius Ferreira Dias", 21, 209], "45318": ["Marcin Budzi\u0144ski", 999, 248], "27465": ["Airam", 2188, 262], "395082": ["Kamil Pestka", 245, 256], "230808": ["Milan Dimun", 2260, 251], "102802": ["Michal Siplak", 2738, 268], "26199": ["Niko Datkovic", 1929, 266], "201496": ["Adrian Danek", 22, 240], "61105": ["Sergiu Hanca", 1259, 255], "10074": ["Janusz Gol", 2872, 276], "45021": ["Javi Hernandez", 2700, 274], "5599": ["Serder Serderov", 179, 222], "121114": ["Gerard Oliva", 198, 211], "24354": ["Mateusz Szczepaniak", 29, 199], "496635": ["Daniel Pik", 70, 236], "399430": ["Rados\u0142aw Kanach", 23, 225], "770535": ["Sebastian Str\u00f3zik", 632, 216], "237992": ["Mateusz Wdowiak", 2760, 255], "23463": ["Damian D\u0105browski", 1770, 252], "3180": ["Sergei Zenjov", 896, 230], "194477": ["Micha\u0142 Helik", 2744, 276], "276328": ["Jakub Serafin", 290, 229], "24754": ["Diego", 1743, 236], "156467": ["Oleksii Dytiatiev", 2443, 278], "161768": ["Elady", 95, 200], "248631": ["Filip Piszczek", 1196, 236], "23097": ["Miroslav Covilo", 98, 262], "4922": ["Cornel Rapa", 2955, 242], "26207": ["Antonini Culina", 67, 199]}, "wiek": {"32": [23097], "33": [10074], "18": [496635], "19": [770535, 399430, 1072899], "20": [395082], "22": [237992, 102802, 230808, 276328], "23": [194477, 248631], "24": [5599, 201496], "25": [26199, 160898], "26": [23463, 24754, 61105, 26207], "27": [24354], "28": [4922, 45318, 161768], "29": [45021, 3180, 121114], "30": [156467], "31": [27465]}, "alls": [["Cornel Rapa", [2955, 242]], ["Janusz Gol", [2872, 276]], ["Mateusz Wdowiak", [2760, 255]], ["Micha\u0142 Helik", [2744, 276]], ["Michal Siplak", [2738, 268]], ["Javi Hernandez", [2700, 274]], ["Oleksii Dytiatiev", [2443, 278]], ["Milan Dimun", [2260, 251]], ["Airam", [2188, 262]], ["Niko Datkovic", [1929, 266]], ["Damian D\u0105browski", [1770, 252]], ["Diego", [1743, 236]], ["Sergiu Hanca", [1259, 255]], ["Filip Piszczek", [1196, 236]], ["Marcin Budzi\u0144ski", [999, 248]], ["Sergei Zenjov", [896, 230]], ["Sebastian Str\u00f3zik", [632, 216]], ["Jakub Serafin", [290, 229]], ["Bojan Cecaric", [271, 227]], ["Kamil Pestka", [245, 256]], ["Gerard Oliva", [198, 211]], ["Serder Serderov", [179, 222]], ["Miroslav Covilo", [98, 262]], ["Elady", [95, 200]], ["Daniel Pik", [70, 236]], ["Antonini Culina", [67, 199]], ["Mateusz Szczepaniak", [29, 199]], ["Rados\u0142aw Kanach", [23, 225]], ["Adrian Danek", [22, 240]], ["Vinicius Ferreira Dias", [21, 209]]], "type": "clickinfo", "ids": ["el4265140411109578736", "el4265140411109477624", "el4265140411109579408", "el4265140411109580304", "el4265140411109601744", "el4265140411109602640", "el4265140411109603536", "el4265140411109604432", "el4265140411109605328", "el4265140411109622672", "el4265140411109623568", "el4265140411109624464", "el4265140411109625360", "el4265140411109650896", "el4265140411109651792", "el4265140411109652688"]}], "height": 480.0, "data": {"data03": [[0.0, 19.5, 0.0], [245.0, 19.5, 256.0], [245.0, 20.5, 256.0], [0.0, 20.5, 0.0]], "data05": [[0.0, 21.5, 0.0], [8048.0, 21.5, 257.0], [8048.0, 22.5, 257.0], [0.0, 22.5, 0.0]], "data02": [[0.0, 18.5, 0.0], [676.0, 18.5, 216.0], [676.0, 19.5, 216.0], [0.0, 19.5, 0.0]], "data11": [[0.0, 27.5, 0.0], [4049.0, 27.5, 242.0], [4049.0, 28.5, 242.0], [0.0, 28.5, 0.0]], "data01": [[0.0, 17.5, 0.0, 20.5, 26.5], [70.0, 17.5, 0.0, 20.5, 26.5], [70.0, 18.5, 0.0, 21.5, 27.5], [0.0, 18.5, 0.0, 21.5, 27.5]], "data15": [[0.0, 31.5], [98.0, 31.5], [98.0, 32.5], [0.0, 32.5]], "data12": [[0.0, 28.5, 0.0], [3794.0, 28.5, 260.0], [3794.0, 29.5, 260.0], [0.0, 29.5, 0.0]], "data08": [[0.0, 24.5, 0.0], [2200.0, 24.5, 261.0], [2200.0, 25.5, 261.0], [0.0, 25.5, 0.0]], "data13": [[0.0, 29.5, 0.0], [2443.0, 29.5, 278.0], [2443.0, 30.5, 278.0], [0.0, 30.5, 0.0]], "data04": [[0.0, 20.5], [0.0, 20.5], [0.0, 21.5], [0.0, 21.5]], "data10": [[0.0, 26.5], [29.0, 26.5], [29.0, 27.5], [0.0, 27.5]], "data06": [[0.0, 22.5, 0.0], [3940.0, 22.5, 264.0], [3940.0, 23.5, 264.0], [0.0, 23.5, 0.0]], "data16": [[0.0, 32.5, 0.0], [2872.0, 32.5, 276.0], [2872.0, 33.5, 276.0], [0.0, 33.5, 0.0]], "data07": [[0.0, 23.5, 0.0], [201.0, 23.5, 224.0], [201.0, 24.5, 224.0], [0.0, 24.5, 0.0]], "data14": [[0.0, 30.5, 0.0, 31.5], [2188.0, 30.5, 262.0, 31.5], [2188.0, 31.5, 262.0, 32.5], [0.0, 31.5, 0.0, 32.5]], "data09": [[0.0, 25.5, 0.0], [4839.0, 25.5, 246.0], [4839.0, 26.5, 246.0], [0.0, 26.5, 0.0]]}, "width": 640.0, "axes": [{"yscale": "linear", "lines": [], "sharey": ["el4265140411109866744"], "collections": [], "xlim": [10052.75, 29.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Minuty", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411169040088"}], "xdomain": [10052.75, 29.0], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 6, "tickformat": null, "tickvalues": null, "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "left", "grid": {"gridOn": false}, "nticks": 16, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "fontsize": 10.0, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109477960"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109477456"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109503384"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data04", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109504280"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109505176"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109506072"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109506968"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109524312"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109525208"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data10", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109526104"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109527000"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109552536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109553432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109554328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data15", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109555224"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 0, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FF0000", "zorder": 1, "id": "el4265140411109556120"}], "ydomain": [16.7, 34.3], "ylim": [16.7, 34.3], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411169203424"}, {"yscale": "linear", "lines": [], "sharey": ["el4265140411169203424"], "collections": [], "xlim": [206.0, 288.0], "markers": [], "texts": [{"position": [0.5, -0.07921476671476674], "text": "Instat index", "color": "#000000", "v_baseline": "hanging", "h_anchor": "middle", "coordinates": "axes", "alpha": 1, "fontsize": 14.0, "rotation": -0.0, "zorder": 3, "id": "el4265140411109889696"}], "xdomain": [206.0, 288.0], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "axes": [{"position": "bottom", "grid": {"alpha": 1.0, "color": "#B0B0B0", "dasharray": "none", "gridOn": true}, "nticks": 5, "tickformat": null, "tickvalues": [216, 231, 246, 261, 278], "scale": "linear", "fontsize": 10.0, "visible": true}, {"position": "right", "grid": {"gridOn": false}, "nticks": 16, "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33], "scale": "linear", "fontsize": null, "visible": true}], "zoomable": true, "axesbgalpha": null, "xscale": "linear", "paths": [{"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109578736"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data02", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109477624"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data03", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109579408"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109580304"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data05", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109601744"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data06", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109602640"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data07", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109603536"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data08", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109604432"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data09", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109605328"}, {"edgecolor": "none", "dasharray": "none", "yindex": 4, "data": "data01", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109622672"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data11", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109623568"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data12", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109624464"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data13", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109625360"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109650896"}, {"edgecolor": "none", "dasharray": "none", "yindex": 3, "data": "data14", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109651792"}, {"edgecolor": "none", "dasharray": "none", "yindex": 1, "data": "data16", "coordinates": "data", "edgewidth": 1.0, "alpha": 0.7, "xindex": 2, "pathcodes": ["M", "L", "L", "L", "Z"], "facecolor": "#FFA500", "zorder": 1, "id": "el4265140411109652688"}], "ydomain": [16.7, 34.3], "ylim": [16.7, 34.3], "axesbg": "#FFFFFF", "sharex": [], "images": [], "id": "el4265140411109866744"}], "id": "el4265140411169304816"});
            })
         });
}
    
