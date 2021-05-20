var familyimg = [
    "https://i.pinimg.com/originals/71/ba/83/71ba831e7cea77c207e12042a5c627c7.jpg", 
    "https://i.pinimg.com/600x315/06/02/3d/06023dd2fc8e96bb47cf3a7ed813c063.jpg",
    "https://www.rd.com/wp-content/uploads/2020/12/GettyImages-589973736.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/27672c11476433.560f852433b46.jpg"
  ];
    var names=[
"My Mom",
"My Sister",
"My dad",
"ME!!!"
    ];
  
  var i=0;
  
  function update() {
    
    
    i++;
     
    if(i==4)
    {i=0;
    }
    document.getElementById("fam memberimg").src=familyimg[i];
    document.getElementById("famemembername").innerHTML=names[i];
   
   
      
  }
  