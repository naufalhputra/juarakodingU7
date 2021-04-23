let pilihan ="e";

switch (pilihan){

case "a":
    function GambarKotak(panjang, lebar) {

        let hasil = '';
        for( i = 0; i < panjang; i++){

            for( j = 0; j < lebar; j++){

                hasil += '*';

            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log("Gambar Kotak : ")
    console.log(GambarKotak(5,5))
break;

case "b":
    function GambarSegitiga(tinggi) {

        let hasil = '';

        for( i = 0; i < tinggi; i++){

            for( j = 0; j <= i; j++){


                hasil += '*';

            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log("Gambar Segitiga : ")
    console.log(GambarSegitiga(5,5))
break;

case "c":
    function GambarSegitigaTerbalik(tinggi){

        let hasil = '';
            
        for (i = 0; i <= tinggi; i++) {
            
            for (j = i; j < tinggi; j++){


                hasil += '*';

            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log("Gambar Segitiga Terbalik : ")
    console.log(GambarSegitigaTerbalik(5,5))
break;

case "d":
    function GambarSelangseling(panjang,lebar){
        let nilai = 0;
        let hasil = '';
        for( i = 0; i < panjang; i++){

            for( j = 0; j < lebar; j++){
                nilai++;
                
                if (nilai % 2 == 0) {
                     hasil +=("!");
                }else {
                    hasil +=("*");
                }
            }    
            hasil += '\n';
            
        }
        return hasil;
    }
    console.log("Gambar Selang-Seling : ")
    console.log(GambarSelangseling(5,5))
break;

case "e":
    function GambarPola(panjang,lebar){
        let hasil = '';
        let nilai = 0;
        for( i = 0; i < panjang; i++){

            for( j = 0; j < lebar; j++){

                nilai ++;
                if(nilai == 3 || nilai == 7 || nilai % 10 == 3 || nilai % 10 == 7){

                    hasil += ("!");

                }else{

                    hasil += ("*");

                }
            }
            hasil += '\n';
        }
        return hasil;
    }
    console.log("Gambar Pola : ")
    console.log(GambarPola(10,5))
break;

default:
    console.log("Tidak Ada")
break;
}


