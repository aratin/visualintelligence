// $(function() {
//     $("#print").on('click', function() {
//        // console.log("asdfasdfasd asdfasdf asdasdf");
//         $.print("#content-box");
//     });
var imageSrc;
$(document).ready(function(){
    imageSrc = $('#image').attr('src');
    //console.log(imageSrc);

    var doc = new jsPDF();
    var dataURL;
    var specialElementHandlers = {
        '#editor': function (element,renderer) {
            return true;
        }

    };

    $('#pdf').click(function () {
        //image converet to base 64 open
        var imageUrl = $('#image').attr('src');
        var imageUrl1 = $('#image1').attr('src');
        var imageUrl2 = $('#image2').attr('src');
        var imageUrl3 = $('#image3').attr('src');

        var imageArr = [imageUrl,imageUrl1,imageUrl2,imageUrl3];
        var dataURLArr = [];
        var precount = imageArr.length; 
        //trim the imageArray to remove undefined if less than 4 images.
        for(var i=0; i< precount; i++) {
            if(imageArr[i] == 'undefined' || imageArr[i] == null) {
                var index = imageArr.indexOf(imageArr[i]);
                if (index > -1) {
                    imageArr.splice(index, 1);
                }               
            }
        }
        for (var i=0; i< imageArr.length; i++) {
            convertImgToBase64(imageArr[i], i); // pass index of current element
        }            
            createPdf();
            //console.log(dataURLArr[i] + "" + "" + "num" + i);
               
        
        //var data = $('#content-box').html();
        console.log('imageUrl', imageUrl);   
        
        function convertImgToBase64(url, imageCount){
            var canvas = document.createElement('CANVAS');
            var ctx = canvas.getContext('2d');
            var img = new Image;
            img.crossOrigin = 'Anonymous';
            img.src = url;
            img.onload = function(){
                canvas.height = img.height;
                canvas.width = img.width;
                ctx.drawImage(img,0,0);
                dataURL = canvas.toDataURL('image/jpeg');
                dataURLArr.push(dataURL);
                if(imageCount == imageArr.length-1) { // check if it is last index of array
                    createPdf();
                }
                console.log('dataUrl',dataURL);
                //callback.call(this, dataURL);
                // Clean up
                canvas = null; 
            };    
                  
        }
                // image convert base64 close
        function createPdf() {
            //console.log('dataUrl in createPdf',dataURL);
            if (dataURLArr.length > 0) {
                var doc = new jsPDF('p','pt','a4');
                //doc.setFontSize(14);
               // console.log(imageSrc);
                var imgData;
                 for (var i=0; i<dataURLArr.length; i++) {
                    imgData = dataURLArr[i];
                   //  doc.addImage(imgData, 'JPEG', 15, 60*(i+1), 40,80);
                }                
                var me = $('#content-data').html();                
                var data = me.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace("’","'");
                doc.fromHTML(data, 80,30,  {
                    'width': 450,'elementHandlers': specialElementHandlers
                });
                doc.save('sample-file.pdf');
            }
        };
    });
}); 
