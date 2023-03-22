function check()
{   //output:false
    let array1 = [9,9,8]
    let array2 = [8,9] 

    //output:true
    // let array1 = [1, 2, 3, 4]
    // let array2 = [0, 6]
    
    a1_max = a1_min =  array1[0];
    for(var i = 0; i<array1.length; i+=1)
    {
        if(a1_max<=array1[i])
        {
            a1_max = array1[i]
        }
        else
        {
            a1_min = array1[i]
        }
    }
    // max for arr2
    a2_max = a2_min = array2[0]
    for(var i = 0; i<array2.length; i+=1)
    {
       
        if(a2_max<=array2[i])
        {
            a2_max = array2[i]
        }
        else
        {
            a2_min = array2[i]
        }
    }
    if(a1_max < a2_max && a1_min > a2_min)
    {console.log("true");}
    else
    {console.log("false")}
}

check.call()