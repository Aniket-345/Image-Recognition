//https://teachablemachine.withgoogle.com/models/6WP9lggqM/
Webcam.set({
    width: 400,
    height:300,
    image_format:"jpeg",
    jpeg_quality: 100
})
camara= document.getElementById("cam");
Webcam.attach(camara)

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML="<img id='capture_image' src="+data_uri+">"
        
    })
}
console.log(ml5.version)
image_classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/6WP9lggqM/model.json",model_loaded)
function model_loaded(){
    console.log("model loded")
}
function show_result(){
    img=document.getElementById("capture_image")
    image_classifier.classify(img,gotResult)

}

function gotResult(error, results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        //object_name, object_accuracy

        document.getElementById("object_name").innerHTML=results[0].label;
        confidence = (results[0].confidence *100 ).toFixed(2)
        console.log(confidence)
        document.getElementById("object_accuracy").innerHTML=confidence+"%"
    }
}

