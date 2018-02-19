var button=document.getElementById("counter");

button.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
            if(request.status==200){
                request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.tostring();
            }
        }
    };
    request.open('GET','http://http://asishdharamukkula.imad.hasura-app.io/counter',true);
    request.send(null);
   
    
    
};
var nameInput=document.getElementById('name');
var nameinput=name.value;
var submit=document.getElementById('btn');
submit.onclick=function(){
    var names=['name1','name2','name3'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>+names[i]'+'</li>';
    }
    var nameslist=document.getElementById("namelist");
    names.innerHTML=list;
    
};


