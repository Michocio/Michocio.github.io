

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
    
       mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 27.5, 0.0], [5208.0, 27.5, 252.107910906298], [5208.0, 28.5, 252.107910906298], [0.0, 28.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.60689655172416], [3045.0, 26.5, 271.60689655172416], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.42805907172993], [4747.0, 25.5, 264.42805907172993], [0.0, 25.5, 0.0]], "data04": [[0.0, 18.5, 0.0], [94.0, 18.5, 253.0], [94.0, 19.5, 253.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data12": [[0.0, 26.5, 0.0], [6581.0, 26.5, 252.20030487804877], [6581.0, 27.5, 252.20030487804877], [0.0, 27.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [717.0, 29.5, 253.8244382022472], [717.0, 30.5, 253.8244382022472], [0.0, 30.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.10887096774192], [248.0, 21.5, 225.10887096774192], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0541586073501], [1034.0, 32.5, 238.0541586073501], [0.0, 32.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.13846153846154], [138.0, 17.5, 214.13846153846154], [0.0, 17.5, 0.0]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.7355573637103], [1229.0, 23.5, 276.7355573637103], [0.0, 23.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [5525.0, 28.5, 256.4052488687783], [5525.0, 29.5, 256.4052488687783], [0.0, 29.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.49374097255657], [4154.0, 24.5, 262.49374097255657], [0.0, 24.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1388.0, 21.5, 256.9899135446686], [1388.0, 22.5, 256.9899135446686], [0.0, 22.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.50716560509557], [1256.0, 20.5, 268.50716560509557], [0.0, 20.5, 0.0]]}, "axes": [{"ydomain": [14.65, 33.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578906286960"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7235.8, 33.0], "id": "el11179140578906111280", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905888192", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578905887688", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578905888976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578905889872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578905890768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578905908112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578905909008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578905909904", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578905910800", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578905936336", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578905937232", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578905938128", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578905939024", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578905939920", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578905965456", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578905966352", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578905967248", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7235.8, 33.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578906158360", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.65, 33.35]}, {"ydomain": [14.65, 33.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578906111280"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [204.13846153846154, 286.7355573637103], "id": "el11179140578906286960", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905989864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578905887912", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905990536", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578905991432", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578905992328", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578905993168", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578906018760", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906019656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578906020552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578906021448", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578906038792", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578906039688", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578906040584", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578906041480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578906042320", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578906063816", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578906064712", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [204.13846153846154, 286.7355573637103], "axes": [{"tickvalues": [214, 229, 244, 259, 276], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578906314008", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.65, 33.35]}], "height": 480.0, "id": "el11179140578906400416", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578905888192", "el11179140578905887688", "el11179140578905888976", "el11179140578905889872", "el11179140578905890768", "el11179140578905908112", "el11179140578905909008", "el11179140578905909904", "el11179140578905910800", "el11179140578905936336", "el11179140578905937232", "el11179140578905938128", "el11179140578905939024", "el11179140578905939920", "el11179140578905965456", "el11179140578905966352", "el11179140578905967248"], "type": "clickinfo", "low": 16, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}}, {"ids": ["el11179140578905989864", "el11179140578905887912", "el11179140578905990536", "el11179140578905991432", "el11179140578905992328", "el11179140578905993168", "el11179140578906018760", "el11179140578906019656", "el11179140578906020552", "el11179140578906021448", "el11179140578906038792", "el11179140578906039688", "el11179140578906040584", "el11179140578906041480", "el11179140578906042320", "el11179140578906063816", "el11179140578906064712"], "type": "clickinfo", "low": 16, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}}]});
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
    
         mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 27.5, 0.0], [5208.0, 27.5, 252.107910906298], [5208.0, 28.5, 252.107910906298], [0.0, 28.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.60689655172416], [3045.0, 26.5, 271.60689655172416], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.42805907172993], [4747.0, 25.5, 264.42805907172993], [0.0, 25.5, 0.0]], "data04": [[0.0, 18.5, 0.0], [94.0, 18.5, 253.0], [94.0, 19.5, 253.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data12": [[0.0, 26.5, 0.0], [6581.0, 26.5, 252.20030487804877], [6581.0, 27.5, 252.20030487804877], [0.0, 27.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [717.0, 29.5, 253.8244382022472], [717.0, 30.5, 253.8244382022472], [0.0, 30.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.10887096774192], [248.0, 21.5, 225.10887096774192], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0541586073501], [1034.0, 32.5, 238.0541586073501], [0.0, 32.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.13846153846154], [138.0, 17.5, 214.13846153846154], [0.0, 17.5, 0.0]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.7355573637103], [1229.0, 23.5, 276.7355573637103], [0.0, 23.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [5525.0, 28.5, 256.4052488687783], [5525.0, 29.5, 256.4052488687783], [0.0, 29.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.49374097255657], [4154.0, 24.5, 262.49374097255657], [0.0, 24.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1388.0, 21.5, 256.9899135446686], [1388.0, 22.5, 256.9899135446686], [0.0, 22.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.50716560509557], [1256.0, 20.5, 268.50716560509557], [0.0, 20.5, 0.0]]}, "axes": [{"ydomain": [14.65, 33.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578906286960"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7235.8, 33.0], "id": "el11179140578906111280", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905888192", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578905887688", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578905888976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578905889872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578905890768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578905908112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578905909008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578905909904", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578905910800", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578905936336", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578905937232", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578905938128", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578905939024", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578905939920", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578905965456", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578905966352", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578905967248", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7235.8, 33.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578906158360", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.65, 33.35]}, {"ydomain": [14.65, 33.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578906111280"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [204.13846153846154, 286.7355573637103], "id": "el11179140578906286960", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905989864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578905887912", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905990536", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578905991432", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578905992328", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578905993168", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578906018760", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906019656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578906020552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578906021448", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578906038792", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578906039688", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578906040584", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578906041480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578906042320", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578906063816", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578906064712", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [204.13846153846154, 286.7355573637103], "axes": [{"tickvalues": [214, 229, 244, 259, 276], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578906314008", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.65, 33.35]}], "height": 480.0, "id": "el11179140578906400416", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578905888192", "el11179140578905887688", "el11179140578905888976", "el11179140578905889872", "el11179140578905890768", "el11179140578905908112", "el11179140578905909008", "el11179140578905909904", "el11179140578905910800", "el11179140578905936336", "el11179140578905937232", "el11179140578905938128", "el11179140578905939024", "el11179140578905939920", "el11179140578905965456", "el11179140578905966352", "el11179140578905967248"], "type": "clickinfo", "low": 16, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}}, {"ids": ["el11179140578905989864", "el11179140578905887912", "el11179140578905990536", "el11179140578905991432", "el11179140578905992328", "el11179140578905993168", "el11179140578906018760", "el11179140578906019656", "el11179140578906020552", "el11179140578906021448", "el11179140578906038792", "el11179140578906039688", "el11179140578906040584", "el11179140578906041480", "el11179140578906042320", "el11179140578906063816", "el11179140578906064712"], "type": "clickinfo", "low": 16, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}}]});
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
    
                 mpld3.draw_figure("aaa", {"data": {"data13": [[0.0, 27.5, 0.0], [5208.0, 27.5, 252.107910906298], [5208.0, 28.5, 252.107910906298], [0.0, 28.5, 0.0]], "data11": [[0.0, 25.5, 0.0], [3045.0, 25.5, 271.60689655172416], [3045.0, 26.5, 271.60689655172416], [0.0, 26.5, 0.0]], "data03": [[0.0, 17.5, 30.5], [0.0, 17.5, 30.5], [0.0, 18.5, 31.5], [0.0, 18.5, 31.5]], "data10": [[0.0, 24.5, 0.0], [4747.0, 24.5, 264.42805907172993], [4747.0, 25.5, 264.42805907172993], [0.0, 25.5, 0.0]], "data04": [[0.0, 18.5, 0.0], [94.0, 18.5, 253.0], [94.0, 19.5, 253.0], [0.0, 19.5, 0.0]], "data01": [[0.0, 15.5, 0.0, 17.5, 30.5], [33.0, 15.5, 0.0, 17.5, 30.5], [33.0, 16.5, 0.0, 18.5, 31.5], [0.0, 16.5, 0.0, 18.5, 31.5]], "data12": [[0.0, 26.5, 0.0], [6581.0, 26.5, 252.20030487804877], [6581.0, 27.5, 252.20030487804877], [0.0, 27.5, 0.0]], "data15": [[0.0, 29.5, 0.0], [717.0, 29.5, 253.8244382022472], [717.0, 30.5, 253.8244382022472], [0.0, 30.5, 0.0]], "data06": [[0.0, 20.5, 0.0], [248.0, 20.5, 225.10887096774192], [248.0, 21.5, 225.10887096774192], [0.0, 21.5, 0.0]], "data16": [[0.0, 31.5, 0.0], [1034.0, 31.5, 238.0541586073501], [1034.0, 32.5, 238.0541586073501], [0.0, 32.5, 0.0]], "data02": [[0.0, 16.5, 0.0], [138.0, 16.5, 214.13846153846154], [138.0, 17.5, 214.13846153846154], [0.0, 17.5, 0.0]], "data08": [[0.0, 22.5, 0.0], [1229.0, 22.5, 276.7355573637103], [1229.0, 23.5, 276.7355573637103], [0.0, 23.5, 0.0]], "data14": [[0.0, 28.5, 0.0], [5525.0, 28.5, 256.4052488687783], [5525.0, 29.5, 256.4052488687783], [0.0, 29.5, 0.0]], "data09": [[0.0, 23.5, 0.0], [4154.0, 23.5, 262.49374097255657], [4154.0, 24.5, 262.49374097255657], [0.0, 24.5, 0.0]], "data07": [[0.0, 21.5, 0.0], [1388.0, 21.5, 256.9899135446686], [1388.0, 22.5, 256.9899135446686], [0.0, 22.5, 0.0]], "data05": [[0.0, 19.5, 0.0], [1256.0, 19.5, 268.50716560509557], [1256.0, 20.5, 268.50716560509557], [0.0, 20.5, 0.0]]}, "axes": [{"ydomain": [14.65, 33.35], "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "sharey": ["el11179140578906286960"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [7235.8, 33.0], "id": "el11179140578906111280", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905888192", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578905887688", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578905888976", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578905889872", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578905890768", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578905908112", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578905909008", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578905909904", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578905910800", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578905936336", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578905937232", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578905938128", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578905939024", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578905939920", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578905965456", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data03", "coordinates": "data", "zorder": 1, "id": "el11179140578905966352", "facecolor": "#FF0000", "xindex": 0, "yindex": 2}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578905967248", "facecolor": "#FF0000", "xindex": 0, "yindex": 1}], "xdomain": [7235.8, 33.0], "axes": [{"tickvalues": null, "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": 10.0, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "left"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Minuty", "coordinates": "axes", "zorder": 3, "id": "el11179140578906158360", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.65, 33.35]}, {"ydomain": [14.65, 33.35], "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "sharey": ["el11179140578906111280"], "zoomable": true, "yscale": "linear", "collections": [], "axesbg": "#FFFFFF", "images": [], "xlim": [204.13846153846154, 286.7355573637103], "id": "el11179140578906286960", "sharex": [], "lines": [], "axesbgalpha": null, "paths": [{"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905989864", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data02", "coordinates": "data", "zorder": 1, "id": "el11179140578905887912", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578905990536", "facecolor": "#FFA500", "xindex": 2, "yindex": 3}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data04", "coordinates": "data", "zorder": 1, "id": "el11179140578905991432", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data05", "coordinates": "data", "zorder": 1, "id": "el11179140578905992328", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data06", "coordinates": "data", "zorder": 1, "id": "el11179140578905993168", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data07", "coordinates": "data", "zorder": 1, "id": "el11179140578906018760", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data08", "coordinates": "data", "zorder": 1, "id": "el11179140578906019656", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data09", "coordinates": "data", "zorder": 1, "id": "el11179140578906020552", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data10", "coordinates": "data", "zorder": 1, "id": "el11179140578906021448", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data11", "coordinates": "data", "zorder": 1, "id": "el11179140578906038792", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data12", "coordinates": "data", "zorder": 1, "id": "el11179140578906039688", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data13", "coordinates": "data", "zorder": 1, "id": "el11179140578906040584", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data14", "coordinates": "data", "zorder": 1, "id": "el11179140578906041480", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data15", "coordinates": "data", "zorder": 1, "id": "el11179140578906042320", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data01", "coordinates": "data", "zorder": 1, "id": "el11179140578906063816", "facecolor": "#FFA500", "xindex": 2, "yindex": 4}, {"edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "edgecolor": "none", "alpha": 0.7, "dasharray": "none", "data": "data16", "coordinates": "data", "zorder": 1, "id": "el11179140578906064712", "facecolor": "#FFA500", "xindex": 2, "yindex": 1}], "xdomain": [204.13846153846154, 286.7355573637103], "axes": [{"tickvalues": [214, 229, 244, 259, 276], "visible": true, "grid": {"dasharray": "none", "color": "#B0B0B0", "gridOn": true, "alpha": 1.0}, "nticks": 5, "fontsize": 10.0, "tickformat": null, "scale": "linear", "position": "bottom"}, {"tickvalues": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "visible": true, "grid": {"gridOn": false}, "nticks": 17, "fontsize": null, "tickformat": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32], "scale": "linear", "position": "right"}], "markers": [], "texts": [{"h_anchor": "middle", "alpha": 1, "rotation": -0.0, "fontsize": 14.0, "color": "#000000", "text": "Instat index", "coordinates": "axes", "zorder": 3, "id": "el11179140578906314008", "position": [0.5, -0.07921476671476674], "v_baseline": "hanging"}], "xscale": "linear", "ylim": [14.65, 33.35]}], "height": 480.0, "id": "el11179140578906400416", "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "type": "zoom", "button": true}, {"enabled": false, "type": "boxzoom", "button": true}, {"ids": ["el11179140578905888192", "el11179140578905887688", "el11179140578905888976", "el11179140578905889872", "el11179140578905890768", "el11179140578905908112", "el11179140578905909008", "el11179140578905909904", "el11179140578905910800", "el11179140578905936336", "el11179140578905937232", "el11179140578905938128", "el11179140578905939024", "el11179140578905939920", "el11179140578905965456", "el11179140578905966352", "el11179140578905967248"], "type": "clickinfo", "low": 16, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}}, {"ids": ["el11179140578905989864", "el11179140578905887912", "el11179140578905990536", "el11179140578905991432", "el11179140578905992328", "el11179140578905993168", "el11179140578906018760", "el11179140578906019656", "el11179140578906020552", "el11179140578906021448", "el11179140578906038792", "el11179140578906039688", "el11179140578906040584", "el11179140578906041480", "el11179140578906042320", "el11179140578906063816", "el11179140578906064712"], "type": "clickinfo", "low": 16, "wiek": {"32": [38618], "16": [926915], "17": [1064502], "19": [457331], "20": [199802], "21": [180862], "22": [218915], "23": [171737], "24": [254166, 377495, 189432], "25": [84129, 24076], "26": [259181, 25068], "27": [26165, 6675, 87917, 23275, 8449], "28": [38602, 259132, 18867], "29": [23468, 136128], "30": [38683]}, "players": {"136128": ["Elia Soriano", 2648, 258], "8449": ["Mateusz Mo\u017cd\u017ce\u0144", 828, 239], "926915": ["Daniel Szelagowski", 33, 197], "25068": ["Joonas Tamm", 371, 264], "38602": ["Michael Gardawski", 2742, 265], "24076": ["Matej Pucko", 2073, 255], "87917": ["Ognjen Gnjatic", 1051, 274], "6675": ["F. Brown Forbes", 1338, 242], "254166": ["Iv\u00e1n M\u00e1rquez", 2208, 255], "377495": ["E. Diaw", 1732, 270], "171737": ["Marcin Cebula", 1229, 276], "38618": ["Zlatko Janjic", 1034, 238], "38683": ["Ken Kallaste", 717, 253], "457331": ["Piotr Pierzcha\u0142a", 94, 253], "84129": ["Adnan Kovacevic", 2674, 271], "218915": ["Ivan Jukic", 1388, 256], "23275": ["Piotr Malarczyk", 921, 252], "23468": ["Batosz Rymaniak", 2877, 254], "259181": ["Jakub \u017bubrowski", 2674, 272], "18867": ["Maciej Gorski", 709, 216], "26165": ["Oliver Petrak", 2443, 251], "1064502": ["Oskar Sewerzynski", 138, 214], "189432": ["Aleksandar Bjelica", 214, 268], "199802": ["Vato Arveladze", 1256, 268], "259132": ["\u0141ukasz Kosakiewicz", 1757, 245], "180862": ["Oktawian Skrzecz", 248, 225]}}]});
            })
         });
}
</script>
