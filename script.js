
    function konversi() {
        var celci = parseFloat(document.getElementById('C').value);
        if (isNaN( parseFloat(celci))){
            alert("Suhu dalam celcius berupa angka ya bestii !!! Gitu aja masa gangerti -_-");   
            return;
             }
        var faren = (celci * 9/5) + 32;
        var rear = ( 4/5*celci);
        var kel = (273.15 + celci);
        document.getElementById('F').value = faren.toFixed(2) + " °F";
        document.getElementById('FF').value = "Kalkulasinya :" + celci + "* 9/5 + 32 =" + faren.toFixed(2);
        document.getElementById('R').value = rear.toFixed(2) + " °R";
        document.getElementById('RR').value = "Kalkulasinya : 4/5 x " + celci + " = "+ rear.toFixed(2);
        document.getElementById('K').value = kel.toFixed(2) + " °K";
        document.getElementById('KK').value = "Kalkulasinya :" + celci + "+ 273.15 = " + kel.toFixed(2);
    }

    function reset(){
        document.getElementById("konversi").reset();
    }