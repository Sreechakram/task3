var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var cdata=data.filter((ele)=>ele.region=='ASIA');
    console.log(cdata);
    var population=data.filter((ele)=>ele.population<200000);
    console.log(population);
    var total=data.reduce(function(acc,cv){
        return acc+cv.population;},0);
        console.log(total);
        var cusd=data.filter((x) =>{
            for(var i in x.currencies){
                if(x.currencies[i].code==='USD'){
                    return true;
                }
            }
        }).map((ele)=> console.log(ele.name));
       // console.log(cusd);
       var reg=data.forEach((element)=>{console.log(element.name,element.flag,element.flag);});
       console.log(reg);
    }
        
