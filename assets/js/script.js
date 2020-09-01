
function check(){
    var a = Number(document.getElementById("tiv1").value);
  if(a%2!=0)
    {
        document.getElementById("result").innerHTML = "تعداد تیم ها باید زوج باشد!"
       
        
        
        document.getElementById("tiv2").style.display = 'none';
       
        document.getElementById("bset").style.display = 'none';
        document.getElementById("result").style.color = 'red';
    }
    else
    {
    


        setteam();
        
    }

} 
var i=0;

var teams =[];
var teams1=[];

function setteam() {
    var n=Number(document.getElementById("tiv1").value);
    teams[i]=document.getElementById("tiv2").value; 
    teams1[i]=document.getElementById("tiv2").value; 
    if(i<n){
    document.getElementById("result").style.color = 'black';
    
    document.getElementById("tiv2").style.display = 'block';
    
    document.getElementById("bset").style.display = 'block';
    

    i++;
    document.getElementById("result").innerHTML ="نام تیم "+i+":";
        document.getElementById("tiv2").value = "";
    
        document.getElementById("tiv2").innerHTML = ""
    }
    else{
        document.getElementById("head").style.display='none';
        document.getElementById("bset").style.display = 'none';
        document.getElementById("tiv2").style.display = 'none';
    document.getElementById("result").innerHTML ="";
    i=0;

    document.getElementById("board-div").style.display = 'block';
    make_board();
    }
    
    
}

function make_board (){
    var n=Number(document.getElementById("tiv1").value);
    var y=0;
    for(var x=0;x<n*2-2;x++)
    {
        var div = document.createElement("div");

        div.innerHTML ="هفته"+(x+1);
        

        div.classList.toggle("salam");
        div.id="hehehe"+x;
        
        document.getElementById("main").appendChild(div);
        
        for(y=0;y<n/2;y++)
        {
            var div = document.createElement("div");
            div.id="felan"+x+y;
            div.classList.toggle("owabd");
            
            document.getElementById("hehehe"+x).appendChild(div);

            var pr=document.createElement("pr");
            var pl=document.createElement("pl");
            var ipr=document.createElement("input");
            var ipl=document.createElement("input");
            var button=document.createElement("button");

            ipr.value="";
            ipl.value="";
            ipr.id="ipr"+x+y;
            ipl.id="ipl"+x+y;
            button.id="button"+x+y;
            button.classList.toggle("button_style");
            pr.id="pr"+x+y;
            pl.id="pl"+x+y;
            ipr.classList.toggle("ip_s");
            ipl.classList.toggle("ip_s");
            pr.innerHTML="";
            pl.innerHTML="";
            button.onclick= jadvalll;

            button.innerHTML="ثبت"
           document.getElementById("felan"+x+y).appendChild(pr);
           document.getElementById("felan"+x+y).appendChild(ipr);
           document.getElementById("felan"+x+y).appendChild(button);
           document.getElementById("felan"+x+y).appendChild(ipl);
            document.getElementById("felan"+x+y).appendChild(pl);

        }
        y=0;
    
    }
    make_Game1();
    make_Game2();

    document.getElementById("jadval").style.display="block";
    jadvalll();
}
var temp=true;
var t=1;
var r=1;

var bool=true;
var boool=true;
function make_Game1 () {
    var n=Number(document.getElementById("tiv1").value);
    var right;
    var left;
for(var u=0;u<((n/2)*(n-1));u++)
{
    right=load_team();
    temp=false;
    left=load_team();
    if(r==n)
    {
        t++;
        r=t;
    }
    r++;
    temp=true;
    for(var x=0;x<n-1;x++)
    {
        for(var y=0;y<(n/2);y++)
        {


            if(document.getElementById("pr"+x+y).innerHTML==right ||document.getElementById("pr"+x+y).innerHTML==left ||document.getElementById("pl"+x+y).innerHTML==right ||document.getElementById("pl"+x+y).innerHTML==left)
            {
                
                bool=false;
                break;
            }

        }
        if(bool==true)
        {
            for(var g=0;g<n/2;g++)
            {
            if(document.getElementById("pr"+x+g).innerHTML=="")
                {
                    document.getElementById("pr"+x+g).innerHTML=right;
                    document.getElementById("pl"+x+g).innerHTML=left; 
                    boool=false;
                    
                    break;

                }
            }
        }
        else{
            bool=true;
            
        }
        
        if(boool==false)
        {
            boool=true;
            break;
        }
    }
    
     
}
temp=true;
t=1;
r=1;

}


function make_Game2 () {
    var n=Number(document.getElementById("tiv1").value);
    var right;
    var left;
for(var u=0;u<((n/2)*(n-1));u++)
{
    right=load_team();
    temp=false;
    left=load_team();
    if(r==n)
    {
        t++;
        r=t;
    }
    r++;
    temp=true;
    for(var x=n-1;x<2*n-2;x++)
    {
        for(var y=0;y<(n/2);y++)
        {


            if(document.getElementById("pr"+x+y).innerHTML==right ||document.getElementById("pr"+x+y).innerHTML==left ||document.getElementById("pl"+x+y).innerHTML==right ||document.getElementById("pl"+x+y).innerHTML==left)
            {
                
                bool=false;
                break;
            }

        }
        if(bool==true)
        {
            for(var g=0;g<n/2;g++)
            {
            if(document.getElementById("pr"+x+g).innerHTML=="")
                {
                    document.getElementById("pr"+x+g).innerHTML=left;
                    document.getElementById("pl"+x+g).innerHTML=right; 
                    boool=false;
                    
                    break;

                }
            }
        }
        else{
            bool=true;
            
        }
        
        if(boool==false)
        {
            boool=true;
            break;
        }
    }
    
     
}
}


function load_team () 
{
    var n=Number(document.getElementById("tiv1").value);
        

    if(temp==true)
    {

       
            
       return teams[t];
       
    }
   
    else 
    {

        
        while(teams[t]==teams1[r]){
           r++;
        }
        
        return teams1[r];
    }




}
var qtest=true;
function jadvalll() {
    document.getElementById("footer-display").style.display='flex';

    var number=Number(document.getElementById("tiv1").value);
    if(qtest==true){
    for(var c=0;c<number;c++)
    {   
        var dive=document.createElement("div");
        dive.innerHTML=teams[c+1];
        dive.id="dive"+c;
        
        dive.classList.toggle("dive");
        document.getElementById("jad").appendChild(dive);

        var tedad=document.createElement("div");
        var gol=document.createElement("div");
        var tafazol=document.createElement("div");
        var score=document.createElement("div");

        tedad.id="tedad"+c;
        gol.id="gol"+c;
        tafazol.id="tafazol"+c;
        score.id="score"+c;

        tedad.innerHTML="تعدادبازی:";
        gol.innerHTML="گل:";
        tafazol.innerHTML="تفاظل:";
        score.innerHTML="امتیاز:";

        document.getElementById("dive"+c).appendChild(tedad);
        document.getElementById("dive"+c).appendChild(gol);
        document.getElementById("dive"+c).appendChild(tafazol);
        document.getElementById("dive"+c).appendChild(score);

        tedad.classList.toggle("bdive");
        gol.classList.toggle("bdive");
        tafazol.classList.toggle("bdive");
        score.classList.toggle("bdive");
        qtest=false;
    }
}
for(var l=0;l<number;l++)
{
    var tafazolcounter=0;
    var golzadecounter=0;
    var golkhordecounter=0;
    var tedadcounter=0;
    var scorecounter=0;
        for(var x=0;x<number*2-2;x++)
        {
            for(var y=0;y<(number/2);y++)
            {
                if(document.getElementById("pr"+x+y).innerHTML==teams[l+1])
                {
                    golzadecounter += Number(document.getElementById("ipr"+x+y).value);
                    golkhordecounter += Number(document.getElementById("ipl"+x+y).value);
                    if(document.getElementById("ipr"+x+y).value!="")
                    {
                        tedadcounter +=1;

                    }
                    if(Number(document.getElementById("ipr"+x+y).value)>Number(document.getElementById("ipl"+x+y).value)&& Number(document.getElementById("ipl"+x+y).value)!="")
                    {
                        scorecounter +=3;
                    }
                    if(Number(document.getElementById("ipr"+x+y).value)==Number(document.getElementById("ipl"+x+y).value)&& Number(document.getElementById("ipl"+x+y).value)!="")
                    {
                        scorecounter++;
                    }
                }
                if(document.getElementById("pl"+x+y).innerHTML==teams[l+1])
                {
                    golzadecounter += Number(document.getElementById("ipl"+x+y).value);
                    golkhordecounter += Number(document.getElementById("ipr"+x+y).value);
                    
                    if(document.getElementById("ipl"+x+y).value!="")
                    {
                        tedadcounter +=1;

                    }

                    if(Number(document.getElementById("ipl"+x+y).value)>Number(document.getElementById("ipr"+x+y).value)&& Number(document.getElementById("ipl"+x+y).value)!="")
                    {
                        scorecounter +=3;
                    }
                    if(Number(document.getElementById("ipl"+x+y).value)==Number(document.getElementById("ipr"+x+y).value)&& Number(document.getElementById("ipl"+x+y).value)!="")
                    {
                        scorecounter++;
                    }
                }
            }
        }
        tafazolcounter=golzadecounter-golkhordecounter;
        document.getElementById("tedad"+l).innerHTML="تعدادبازی:"+tedadcounter;
        document.getElementById("gol"+l).innerHTML="گل:"+golzadecounter;
        document.getElementById("tafazol"+l).innerHTML="تفاظل:"+tafazolcounter;
        document.getElementById("score"+l).innerHTML="امتیاز:"+scorecounter;
    }
}
