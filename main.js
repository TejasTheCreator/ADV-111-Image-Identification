Webcam.set({
width:310,
height:300,
image_format:'png',
png_quality: 90,


constraints: {
    facingMode: "environment"
}
});

camera = document.getElementById('camera');

Webcam.attach('#camera');

 function take_snapshot()
 {
     Webcam.snap(function(data_uri){

     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

     });
 }

 console.log ('ml5 version', ml5.version);

 Classifier = ml5.imageClassifier('MobileNet', modelLoaded);

 function modelLoaded()
 {
     console.log("model loaded successfully!");
 }

 function check()
 {
     img = document.getElementById("captured_image");
     Classifier.classify(img, gotResult);
 }

 function gotResult(error,results)
 {
     if (error)
     {
         console.log(error)
     }

    else{
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
 }

