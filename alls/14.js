

<style>

</style>

<div id="id14"></div>
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
    
       mpld3.draw_figure("id14", {"data": {"data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "type": "clickinfo", "ids": ["el7772140277697265736", "el7772140277697236496", "el7772140277697266576", "el7772140277697267472", "el7772140277697268368", "el7772140277697269264", "el7772140277697286608", "el7772140277697287504", "el7772140277697288400", "el7772140277697289296", "el7772140277697290192", "el7772140277697315728", "el7772140277697316624", "el7772140277697317520", "el7772140277697318416", "el7772140277696815568", "el7772140277696816464"], "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]]}, {"low": 18, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "type": "clickinfo", "ids": ["el7772140277696818480", "el7772140277697236664", "el7772140277696819096", "el7772140277696836552", "el7772140277696837448", "el7772140277696838344", "el7772140277696839240", "el7772140277696864776", "el7772140277696865672", "el7772140277696866568", "el7772140277696867464", "el7772140277696868248", "el7772140277696893896", "el7772140277696894792", "el7772140277696895688", "el7772140277696896584", "el7772140277696918024"], "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277697510928", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277697085000"], "images": [], "id": "el7772140277697508520", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [8583.75, 420.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697265736", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697236496", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277697266576", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277697267472", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697268368", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697269264", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697286608", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697287504", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697288400", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697289296", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277697290192", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697315728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277697316624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697317520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697318416", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696815568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696816464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [8583.75, 420.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277697120240", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277697508520"], "images": [], "id": "el7772140277697085000", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [205.0, 272.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696818480", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697236664", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277696819096", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696836552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696837448", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696838344", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696839240", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696864776", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696865672", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696866568", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696867464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696868248", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696893896", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696894792", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696895688", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696896584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696918024", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [205.0, 272.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [215, 226, 237, 248, 262], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277697768920", "height": 480.0});
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
    
         mpld3.draw_figure("id14", {"data": {"data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "type": "clickinfo", "ids": ["el7772140277697265736", "el7772140277697236496", "el7772140277697266576", "el7772140277697267472", "el7772140277697268368", "el7772140277697269264", "el7772140277697286608", "el7772140277697287504", "el7772140277697288400", "el7772140277697289296", "el7772140277697290192", "el7772140277697315728", "el7772140277697316624", "el7772140277697317520", "el7772140277697318416", "el7772140277696815568", "el7772140277696816464"], "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]]}, {"low": 18, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "type": "clickinfo", "ids": ["el7772140277696818480", "el7772140277697236664", "el7772140277696819096", "el7772140277696836552", "el7772140277696837448", "el7772140277696838344", "el7772140277696839240", "el7772140277696864776", "el7772140277696865672", "el7772140277696866568", "el7772140277696867464", "el7772140277696868248", "el7772140277696893896", "el7772140277696894792", "el7772140277696895688", "el7772140277696896584", "el7772140277696918024"], "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277697510928", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277697085000"], "images": [], "id": "el7772140277697508520", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [8583.75, 420.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697265736", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697236496", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277697266576", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277697267472", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697268368", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697269264", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697286608", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697287504", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697288400", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697289296", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277697290192", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697315728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277697316624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697317520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697318416", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696815568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696816464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [8583.75, 420.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277697120240", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277697508520"], "images": [], "id": "el7772140277697085000", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [205.0, 272.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696818480", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697236664", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277696819096", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696836552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696837448", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696838344", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696839240", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696864776", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696865672", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696866568", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696867464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696868248", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696893896", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696894792", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696895688", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696896584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696918024", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [205.0, 272.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [215, 226, 237, 248, 262], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277697768920", "height": 480.0});
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
    
                 mpld3.draw_figure("id14", {"data": {"data09": [[0.0, 28.5, 0.0], [3736.0, 28.5, 245.0], [3736.0, 29.5, 245.0], [0.0, 29.5, 0.0]], "data05": [[0.0, 23.5, 0.0, 31.5], [4502.0, 23.5, 259.0, 31.5], [4502.0, 24.5, 259.0, 32.5], [0.0, 24.5, 0.0, 32.5]], "data08": [[0.0, 26.5, 0.0], [3097.0, 26.5, 257.0], [3097.0, 27.5, 257.0], [0.0, 27.5, 0.0]], "data10": [[0.0, 30.5, 0.0], [1090.0, 30.5, 215.0], [1090.0, 31.5, 215.0], [0.0, 31.5, 0.0]], "data11": [[0.0, 31.5], [2028.0, 31.5], [2028.0, 32.5], [0.0, 32.5]], "data04": [[0.0, 22.5, 0.0], [6951.0, 22.5, 251.0], [6951.0, 23.5, 251.0], [0.0, 23.5, 0.0]], "data06": [[0.0, 24.5, 0.0], [2935.0, 24.5, 260.0], [2935.0, 25.5, 260.0], [0.0, 25.5, 0.0]], "data03": [[0.0, 21.5, 0.0], [5008.0, 21.5, 253.0], [5008.0, 22.5, 253.0], [0.0, 22.5, 0.0]], "data07": [[0.0, 25.5, 0.0], [3442.0, 25.5, 262.0], [3442.0, 26.5, 262.0], [0.0, 26.5, 0.0]], "data12": [[0.0, 33.5, 0.0], [2183.0, 33.5, 250.0], [2183.0, 34.5, 250.0], [0.0, 34.5, 0.0]], "data02": [[0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 18.5, 19.5, 20.5, 27.5, 29.5, 32.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5], [0.0, 19.5, 20.5, 21.5, 28.5, 30.5, 33.5]], "data01": [[0.0, 17.5, 0.0], [420.0, 17.5, 239.0], [420.0, 18.5, 239.0], [0.0, 18.5, 0.0]]}, "plugins": [{"type": "reset"}, {"type": "zoom", "enabled": false, "button": true}, {"type": "boxzoom", "enabled": false, "button": true}, {"low": 18, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "type": "clickinfo", "ids": ["el7772140277697265736", "el7772140277697236496", "el7772140277697266576", "el7772140277697267472", "el7772140277697268368", "el7772140277697269264", "el7772140277697286608", "el7772140277697287504", "el7772140277697288400", "el7772140277697289296", "el7772140277697290192", "el7772140277697315728", "el7772140277697316624", "el7772140277697317520", "el7772140277697318416", "el7772140277696815568", "el7772140277696816464"], "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]]}, {"low": 18, "wiek": {"32": [9171], "34": [23310, 39903], "22": [180837, 102836, 190278, 173653], "23": [95031, 191228, 165637, 95029], "24": [72916, 324964], "25": [160968, 94138, 202263], "26": [106590], "27": [90657, 9242, 17558], "29": [47935, 190460], "18": [299270], "31": [23189, 1742]}, "vals": {"32": [2028, 259], "18": [420, 239], "34": [2183, 250], "22": [5008, 253], "23": [6951, 251], "24": [4502, 259], "25": [2935, 260], "26": [3442, 262], "27": [3097, 257], "29": [3736, 245], "31": [1090, 215]}, "players": {"23310": ["Cezary Stefa\u0144czyk", 1663, 248], "165637": ["Adam D\u017awiga\u0142a", 1761, 248], "299270": ["Justinas Marazas", 420, 239], "160968": ["Angel", 1542, 277], "1742": ["Semir Stilic", 409, 193], "23189": ["Grzegorz Ku\u015bwik", 681, 229], "9171": ["Giorgi Merebashvili", 2028, 259], "72916": ["Alan Uryga", 3376, 263], "173653": ["Karol Angielski", 607, 224], "17558": ["Alen Stevanovic", 439, 274], "202263": ["Carlitos", 249, 221], "9242": ["Ariel Borysiuk", 875, 260], "106590": ["Dominik Furman", 3442, 262], "39903": ["Bartlomiej Sielewski", 520, 256], "90657": ["Nico", 1783, 250], "324964": ["Jake McGing", 1126, 247], "180837": ["Damian Rasak", 2572, 264], "190460": ["Marcin Warcholak", 1161, 242], "102836": ["Oskar Zawada", 1069, 248], "95029": ["Patryk St\u0119pi\u0144ski", 925, 247], "95031": ["Igor \u0141asicki", 2396, 250], "94138": ["Mateusz Szwoch", 1144, 246], "191228": ["Damian Szyma\u0144ski", 1869, 255], "190278": ["Jakub \u0141ukowski", 760, 246], "47935": ["Ricardinho", 2575, 247]}, "type": "clickinfo", "ids": ["el7772140277696818480", "el7772140277697236664", "el7772140277696819096", "el7772140277696836552", "el7772140277696837448", "el7772140277696838344", "el7772140277696839240", "el7772140277696864776", "el7772140277696865672", "el7772140277696866568", "el7772140277696867464", "el7772140277696868248", "el7772140277696893896", "el7772140277696894792", "el7772140277696895688", "el7772140277696896584", "el7772140277696918024"], "alls": [["Dominik Furman", [3442, 262]], ["Alan Uryga", [3376, 263]], ["Ricardinho", [2575, 247]], ["Damian Rasak", [2572, 264]], ["Igor \u0141asicki", [2396, 250]], ["Giorgi Merebashvili", [2028, 259]], ["Damian Szyma\u0144ski", [1869, 255]], ["Nico", [1783, 250]], ["Adam D\u017awiga\u0142a", [1761, 248]], ["Cezary Stefa\u0144czyk", [1663, 248]], ["Angel", [1542, 277]], ["Marcin Warcholak", [1161, 242]], ["Mateusz Szwoch", [1144, 246]], ["Jake McGing", [1126, 247]], ["Oskar Zawada", [1069, 248]], ["Patryk St\u0119pi\u0144ski", [925, 247]], ["Ariel Borysiuk", [875, 260]], ["Jakub \u0141ukowski", [760, 246]], ["Grzegorz Ku\u015bwik", [681, 229]], ["Karol Angielski", [607, 224]], ["Bartlomiej Sielewski", [520, 256]], ["Alen Stevanovic", [439, 274]], ["Justinas Marazas", [420, 239]], ["Semir Stilic", [409, 193]], ["Carlitos", [249, 221]]]}], "width": 640.0, "axes": [{"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Minuty", "color": "#000000", "id": "el7772140277697510928", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277697085000"], "images": [], "id": "el7772140277697508520", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [8583.75, 420.0], "paths": [{"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697265736", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697236496", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277697266576", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277697267472", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697268368", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697269264", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697286608", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697287504", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697288400", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697289296", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277697290192", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697315728", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277697316624", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697317520", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697318416", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data11", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696815568", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FF0000", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696816464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [8583.75, 420.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 6, "tickvalues": null, "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "left", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": 10.0, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.125, 0.10999999999999999, 0.38749999999999996, 0.77], "lines": []}, {"xscale": "linear", "texts": [{"position": [0.5, -0.07921476671476674], "rotation": -0.0, "zorder": 3, "text": "Instat index", "color": "#000000", "id": "el7772140277697120240", "alpha": 1, "h_anchor": "middle", "v_baseline": "hanging", "fontsize": 14.0, "coordinates": "axes"}], "ylim": [16.65, 35.35], "sharey": ["el7772140277697508520"], "images": [], "id": "el7772140277697085000", "sharex": [], "collections": [], "zoomable": true, "axesbg": "#FFFFFF", "xdomain": [205.0, 272.0], "paths": [{"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696818480", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data01", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277697236664", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 2, "edgewidth": 1.0, "id": "el7772140277696819096", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696836552", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696837448", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data03", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696838344", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data04", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696839240", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696864776", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data06", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696865672", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data07", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696866568", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data08", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 4, "edgewidth": 1.0, "id": "el7772140277696867464", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696868248", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data09", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 5, "edgewidth": 1.0, "id": "el7772140277696893896", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696894792", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data10", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 3, "edgewidth": 1.0, "id": "el7772140277696895688", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data05", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 6, "edgewidth": 1.0, "id": "el7772140277696896584", "xindex": 0, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data02", "dasharray": "none", "coordinates": "data"}, {"zorder": 1, "facecolor": "#FFA500", "yindex": 1, "edgewidth": 1.0, "id": "el7772140277696918024", "xindex": 2, "edgecolor": "none", "pathcodes": ["M", "L", "L", "L", "Z"], "alpha": 0.7, "data": "data12", "dasharray": "none", "coordinates": "data"}], "ydomain": [16.65, 35.35], "markers": [], "xlim": [205.0, 272.0], "axes": [{"position": "bottom", "grid": {"gridOn": true, "dasharray": "none", "alpha": 1.0, "color": "#B0B0B0"}, "nticks": 5, "tickvalues": [215, 226, 237, 248, 262], "tickformat": null, "visible": true, "fontsize": 10.0, "scale": "linear"}, {"position": "right", "grid": {"gridOn": false}, "nticks": 17, "tickvalues": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "tickformat": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], "visible": true, "fontsize": null, "scale": "linear"}], "yscale": "linear", "axesbgalpha": null, "bbox": [0.5125, 0.10999999999999999, 0.38750000000000007, 0.77], "lines": []}], "id": "el7772140277697768920", "height": 480.0});
            })
         });
}
</script>
