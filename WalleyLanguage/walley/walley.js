/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

// Walley_Console is the console to put output string
var last_string_in_Walley_Console=" >>> "
var first_time_touch_textarea1=true;
function touch_textarea1(){
        if(first_time_touch_textarea1==true){
        document.getElementById("textarea1").value="";
        first_time_touch_textarea1=false;
    }
}
function type_in_textarea1(){
    document.getElementById("Walley_Console").scrollTop=document.getElementById("Walley_Console").scrollHeight;
    var string_in_textarea1=document.getElementById("textarea1").value;
    //if(string_in_textarea1[string_in_textarea1.length-1]=='\n'){
    //        alert("|"+string_in_textarea1[string_in_textarea1.length-1]+"|");
    //}
    
    string_in_textarea1=replace_not_in_string(string_in_textarea1,"\n","\n ~ ~ ~ ");
    document.getElementById("Walley_Console").value=last_string_in_Walley_Console+string_in_textarea1;

}
function click_button(){
    var string_in_textarea1=document.getElementById("textarea1").value;
    var string_in_Walley_Console=document.getElementById("Walley_Console").value;

    document.getElementById("Walley_Console").value=string_in_Walley_Console+"\n";
    
    
    var row=count_str(string_in_textarea1,"\n");
    row=row+1;
    var i=0;
    while (i<row) {
       var index_of_n=find(string_in_textarea1,"\n");
       var arr="";
       if(index_of_n==-1)
           arr=string_in_textarea1;
       else{
           arr=substr(string_in_textarea1,0,index_of_n);
           string_in_textarea1=substr(string_in_textarea1,index_of_n+1,string_in_textarea1.length);
           }
       
       if(stringIsEmpty(removeNFromBack(arr)) || strcmp("",trim(removeNFromBack(arr)))==0 ||arr.length==0){
            i++;   
            continue;
            }
       else{
              
                if(arr.length==0){
                    i++;
                    continue;
                    }
                
                var temp_str=append("", arr);
                Walley_Run(temp_str);
                i++;
            }
        }
    
    string_in_Walley_Console=document.getElementById("Walley_Console").value;

    document.getElementById("Walley_Console").value=string_in_Walley_Console+"\n >>> ";
    last_string_in_Walley_Console=string_in_Walley_Console+"\n >>> ";
    document.getElementById("textarea1").value="";
   
}
function Walley_Run(input_str){
    //document.getElementById("label1").innerHTML="Walley_Run";
    var existing_file="None";
    Walley_Run_For_Appointed_Var(VAR_var,VAR_settings,TEMP_FILE,existing_file,FUNCTION,input_str);
    //document.getElementById("Walley_Console").value=string_in_textarea1;
}
function Walley_Initialize_For_JavaScript(){
        var string_in_out_wy="def print(input_str):\n\
    exp:\n\
        print input_str\n\
    walley_print(input_str)\n\
    \n\
def println(input_str):\n\
    exp:\n\
        println input_str\n\
    walley_println(input_str)\n\
    \n\
def random(num1=0,num2=1):\n\
    exp:\n\
        random from num1 to num2\n\
    decimal mode\n\
    output=walley_random()*(num2-num1)+num1\n\
    return output\n\
def a():\n\
    print \"Hello\"\n\
a()\n\
";
    
    
    
    Walley_Initialize();
    Walley_Run(string_in_out_wy);
    Walley_Run("println(\"Welcome to Walley's World\")");
    Walley_Run("println(\"Try--->print 'Hello World'\")");
    //alert("Finish Initializing Walley\n");
    last_string_in_Walley_Console=document.getElementById("Walley_Console").value+"\n >>> ";
}

