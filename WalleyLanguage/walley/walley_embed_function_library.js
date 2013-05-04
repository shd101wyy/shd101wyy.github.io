/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_embed_function_library.h
 * Author: shd101wyy
 *
 * Created on September 6, 2012, 3:08 PM
 */

//#include "walley_gui.h"
//#include "walley_dictionary.h"
//#include "time.h"



//     1,2,3,4 index 0----->1
//     This function now has some problems......
//     I did not consider the , in list or ......
function getParamAccordingToIndex(params_str, index){
    params_str=append(params_str, ",");
    //1,2,3,4,
    var index_of_comma=0;
    while (index>0) {
        index_of_comma=find_from_index_not_in_str_list_dict(params_str, ",", index_of_comma+1);
        index--;
    }
    var index_of_final=find_from_index_not_in_str_list_dict(params_str, ",", index_of_comma+1);
    if (index_of_comma==0) {
        index_of_comma=-1;
    }
    var output=substr(params_str, index_of_comma+1, index_of_final);
    output=trim(output);
    
    // printf("params_ste "++", index "++", output "++"\n",params_str,index,output);
    return output;
}


var time_seed=0;
/*
 *function : to_int("'123'")----->"123" 
 *           to_int("12.3") ----->"12"
 *     
 */
function to_int(input_str){
    input_str=removeAheadSpace(removeBackSpace(input_str));
    // string to int
    if(strcmp("string",variableValueType(input_str))==0) {
        input_str=substr(input_str,1,input_str.length-1);
        if(find(input_str,".")!=-1){
            input_str=substr(input_str,0,find(input_str,"."));
        }
        return input_str;
    }
    // double to int
    else if(strcmp("double",variableValueType(input_str))==0){
        input_str=substr(input_str,0,find(input_str,"."));
        return input_str;
    }
    // int to int
    else if (strcmp("int",variableValueType(input_str))==0){
        return input_str;
    }
    
    else {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistakes occurred while calling function to_int\nThe input_str "+input_str+" is not string\nThis function only support string to int now\n");
        exit(1);
    }
}
/*
 *function : to_double("'123'")----->"123.0" 
 *function : to_double("'12.3'")----->"12.3" 
 */
function to_double(input_str){
    input_str=trim(input_str);
    // string to double
    if (strcmp("string", variableValueType(input_str)) == 0) {
        input_str = substr(input_str, 1, input_str.length - 1);
        var temp;
        if (find(input_str, ".") == -1) {
            temp = input_str;
            temp+=".0";
            input_str = temp;
        }
        return input_str;
    }
        // int to double
    else if (strcmp("int", variableValueType(input_str)) == 0) {
        var temp;
        temp =input_str;
        temp+=".0";
        input_str = temp;
        return input_str;
    }
        // double to double
    else if (strcmp("double", variableValueType(input_str)) == 0) {
        return input_str;
    }
    
    else {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistakes occurred while calling function to_double\nThe input_str "+input_str+" is not string\nThis function only support string to int now\n");
        exit(1);
    }
}
/*
 * function : to_num("'123'")------>123
 * function : to_num("123")------>123
 */
function to_num(input_str){
    return to_double(input_str);
}

//   0.5---->1/2  d(1/2)---->0.5
function to_fraction(input_str){
    return eval_for_fraction_with_alpha(input_str);
}


//   1/2---->0.5  f(0.5)---->1/2
function to_decimal(input_str){
    return eval_for_decimal_with_alpha(input_str);
}



function to_nstr(input_str){
   //// printf("#### to_nstr ####\n");
    if (strcmp("string", variableValueType(input_str)) == 0) {
        return toCString(input_str);
    }
    else {
        return input_str;
    }
}
/*
 *function : to_string("'123'")----->'123' string --> string just return
 *function : to_string("123")----->"12.3" 
 */
function to_string(input_str){
    input_str=removeAheadSpace(removeBackSpace(input_str));
    if(strcmp("string",variableValueType(input_str))==0){
        return input_str;
    } else {
        var temp="";
        temp=append("'",input_str);
        temp=append(temp,"'");        
        return temp;
    }
}

//Mon Dec 31 03:00:06 2012

function simple_time(){
   var x=new Date();
   var year=x.getFullYear();
   var month=x.getMonth()+1;
   var day=x.getDate();
   var xing_qi=x.getDay()+1;
   if(xing_qi==1){
       xing_qi="Mon";
   }
      else if(xing_qi==2){
       xing_qi="Tue";
   }
      else if(xing_qi==3){
       xing_qi="Wed";
   }
      else if(xing_qi==4){
       xing_qi="Thu";
   }
      else if(xing_qi==5){
       xing_qi="Fri";
   }
      else if(xing_qi==6){
       xing_qi="Sat";
   }  
      else if(xing_qi==7){
       xing_qi="Sun";
   }
   
   var hour=x.getHours()+1;
   var minute=x.getMinutes()+1;
   var second=x.getSeconds()+1;
   
   return xing_qi+" "+month+" "+day+" "+hour+":"+minute+":"+second+" "+year
}

/*
 *  javascript : this function is not allowed.
 *//*
var walley_system(var input_str){
    input_str=toCString(input_str);
    printf("\n\n####################################\n\n");
    system(input_str);
    printf("\n\n####################################\n\n");
    return "None";
}*/

function walley_is_fraction_mode(){
    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
    if (fraction_mode==TRUE) {
        return "TRUE";
    }
    else{
        return "FALSE";
    }
}

function math_sin(input_str){
    var num=atof(input_str);
    num=Math.sin(num);
    //char output[100];
    //sprintf(output,"%Lf",num);
    var output=numToCString(num)
    var output_str=output;

    return output_str;
}
function math_cos(input_str){
    var num=atof(input_str);
    num=Math.cos(num);
    //char output[100];
    //sprintf(output,"%Lf",num);
    var output=numToCString(num)
    var output_str=output;

    return output_str;
}

function math_sec(input_str){
    var num=atof(input_str);
    num=1/Math.cos(num);
    //char output[100];
    //sprintf(output,"%Lf",num);
    var output=numToCString(num)
    var output_str=output;

    return output_str;
}

function math_csc(input_str){
    var num=atof(input_str);
    num=1/Math.sin(num);
    //char output[100];
    //sprintf(output,"%Lf",num);
    var output=numToCString(num)
    var output_str=output;

    return output_str;
}



function math_tan(input_str){
    
    var num=atof(input_str);
    num=Math.tan(num);
    //char output[100];
    //sprintf(output,"%Lf",num);
    var output=numToCString(num)
    var output_str=output;

    return output_str;
}

function math_cot(input_str){
    
    var num=atof(input_str);
    num=1/Math.tan(num);
    //char output[100];
    //sprintf(output,"%Lf",num);
    var output=numToCString(num)
    var output_str=output;

    return output_str;
}


function math_exp(input_str){
    var num=atof(input_str);
    num=Math.exp(num);
    var output=numToCString(num)
    var output_str=output;
    return output_str;
}

function math_log10(input_str) {
    var num=atof(input_str);
    num=Math.log(num)/ Math.LN10;
    var output=numToCString(num)
    var output_str=output;
    return output_str;
}


/*
 * x=input() ---> input 10, then x is 10
 * x=input("--->") ---> print ---> at first and then input, input 10, get x = 10
 * 
 * 
 * javascript : function mistake
 */
/*
function var_input(var input_str) {
    if (stringIsEmpty(input_str)) {
        var output = malloc(sizeof (char) *(10000));
        gets(output);
        //scanf(""++"",output);
        //return toString(output);
        return append("\"", append(output, "\""));
        //return output;
    }
    else{
        input_str=toCString(input_str);
        input_str=replace(input_str, "\\n", "\n");
        printf(""++"",input_str);
        var output = malloc(sizeof (char) *(10000));
        gets(output);
        //scanf(""++"",output);
        return append("\"", append(output, "\""));
        //printf("return output---> "++"\n",toString(output));
        //return toString(output);
        //return output;
    }
}
*/
/*
 * var_value_type("1")---->"int"
 */
function var_value_type(input_str){
    var type="";
    type="'";
    type+=variableValueType(input_str);
    type+="'";
    return type;
}

/*######################### Function for String ##################################################################################*/
//#################################################################################################################################
/*
 * x="Hello"  x.find("H").     x is user, "H" is find_str
 * eg string_find("Hello","H")----->0
 */
function string_find(user, find_str){
   //// printf("#### x.find('hi') ####\n");
    user=substr(user,1,user.length-1);
    if(strcmp(variableValueType(find_str),"string")==0)
        find_str=substr(find_str,1,find_str.length-1);
    var index=find(user,find_str);
    
    //char temp[100];
    //sprintf(temp,""++"",index);
    var temp=intToCString(index);
    
    var output=temp;
    return output;
}
/* x="Hello", x.find("Hello",1) now " "Hello", 1 " is parameter
 * x.find("e",[1,3]) find from index 1 to 3 (3 is not included)
 * eg string_find_from_index("'Hello'","'l',2")
 */
function string_find_from_index(user, func_param){
   //// printf("#### eg x.find('hi',2) ####\n");
    user=substr(user,1,user.length-1);
    var find_str=substr(func_param,0,find_not_in_string(func_param,","));
    find_str=removeAheadSpace(removeBackSpace(find_str));
    find_str=substr(find_str,1,find_str.length-1);
    
    var from_index=substr(func_param,find_not_in_string(func_param,",")+1,func_param.length);
    from_index=removeAheadSpace(removeBackSpace(from_index));
    
    // find from index to index
    if (strcmp(variableValueType(from_index), "list")==0) {
        var num_of_value=valueNumOfList(from_index);
        if (num_of_value>2) {
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("Mistake occurred whiling calling function string_find_from_index\n"+from_index+" is not a correct list, only two or one number are allowed\n");
            exit(0);
        }
        //x.find("e",[1])
        else if(num_of_value==1){
            var from=atoi(valueOfListAtIndex(from_index, 0));
            var index=find_from_index(user,find_str,from);

            //char temp[100];
            //sprintf(temp,""++"",index);
            var temp=intToCString(index);
            
            var output=temp;
            return output;
        }
        // x.find("e",[0,3]
        else {
            var from=atoi(valueOfListAtIndex(from_index, 0));
            var to=atoi(valueOfListAtIndex(from_index, 1));
            var index=find_from_index_to_index(user, find_str, from, to);
            return intToCString(index);
        }
        
    }
    
    // find from index
    else {
    var from=atoi(from_index);
    var index=find_from_index(user,find_str,from);
    
  //        char temp[100];
  //  sprintf(temp,""++"",index);
    var temp=intToCString(temp);
  
    var output=temp;
    return output;
    }
}
/* x="Hello", x.replace("e","a") ----> "Hallo"
 * eg string_replace("'Hello'","llo","a")---->Hao
 */
function string_replace(user, func_param){
   // printf("#### eg x.replace('hi','i') ####\n");
    user=substr(user,1,user.length-1);
    var replace_str=substr(func_param,0,find_not_in_string(func_param,","));
    replace_str=removeAheadSpace(removeBackSpace(replace_str));
    replace_str=substr(replace_str,1,replace_str.length-1);
    var to_str=substr(func_param,find_not_in_string(func_param,",")+1,func_param.length);
    to_str=removeAheadSpace(removeBackSpace(to_str));
    to_str=substr(to_str,1,to_str.length-1);
    var output=replace(user,replace_str,to_str);
    var output2=toString(output);
    return output2;  
}

function string_replace_from_index(user, func_param){
    user=substr(user,1,user.length-1);
    var replace_str=getParamAccordingToIndex(func_param, 0);
    replace_str=toCString(replace_str);
    var to_str=getParamAccordingToIndex(func_param, 1);
    to_str=toCString(to_str);
    var from_index=getParamAccordingToIndex(func_param, 2);
    //x=x.replace("e","l",[1,2])  or x=x.replace("e","l",[1])
    if (strcmp(variableValueType(from_index), "list")==0) {
        var num_of_value=valueNumOfList(from_index);
        if (num_of_value>2) {
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("Mistake occurred whiling calling function string_replace_from_index\n"+from_index+" is not a correct list, only two or one number are allowed\n");
            exit(0);
        }
        //x.find("e",[1])
        else if(num_of_value==1){
            var from=atoi(valueOfListAtIndex(from_index, 0));
            var output=replace_from_index_to_index(user, replace_str, to_str, from, user.length);
            return toString(output);
        }
        // x.find("e",[0,3]
        else {
            var from=atoi(valueOfListAtIndex(from_index, 0));
            var to=atoi(valueOfListAtIndex(from_index, 1));
            var output=replace_from_index_to_index(user, replace_str, to_str, from, to);
            return toString(output);
        }
    }
    //x=x.replace("e","l",2)
    else{
        var from=atoi(from_index);
       // printf("user "++" replace_str "++" with_str "++" from "++"\n",user,replace_str,to_str,from);
        var output=replace_from_index_to_index(user, replace_str, to_str, from, user.length);
       // printf("output is "++"\n",output);
        return toString(output);
    }
}

/*
 * x="Hello"  x.count("l")-------->2
 * string_count_str("'Hello'","'l'")
 */
function string_count_str( user,  func_param){
    user=substr(user,1,user.length-1);
    func_param=substr(func_param,1,func_param.length-1);
    var num=count_str(user,func_param);
    
    //char temp[100];
    //sprintf(temp,""++"",num);
    var temp=intToCString(num);
    
    var output=temp;
    return output;
}
/*
 * x="Hello"  x.length()----->5
 * string_length("Hello")
 */
function string_length( user){
   //// printf("#### string_length ####\n");

    user=toCString(user);
    var length=user.length;
    //length=length-2; // delete '' and ""
    
    //char temp[100];
    //sprintf(temp,""++"",length);
    var temp=intToCString(length);
    
    var output=temp;
    return output;
}

function string_isdigit( user){
    user=toCString(user);
    var is_digit=stringIsDigit(user);
    if (is_digit==TRUE) {
        return "TRUE";
    }
    else{
        return "FALSE";
    }
}

function string_isalpha(user){
    user=toCString(user);
    var is_alpha=stringIsAlpha(user);
    if (is_alpha==TRUE){
        return "TRUE";
    }
    else{
        return "FALSE";
    }
}

function string_toupper(user){
    user=toCString(user);
    user=stringToUpperCase(user);
    return toString(user);
}

function string_tolower( user){
   //// printf("#### string_tolower ####\n---->"++"\n",user);
    user=toCString(user);
    user=stringToLowerCase(user);
    return toString(user);
}

function string_isupper(user){
    user=toCString(user);
    var i=0;
    var length=user.length;
    var isupper=TRUE;
    for (i=0; i<length; i++) {
        var temp=toupper(user[i]);
        if (temp!=user[i]) {
            isupper=FALSE;
            break;
        }
    }
    if (isupper==TRUE) {
        return "TRUE";
    }
    else{
        return "FALSE";
    }
}

function string_islower(user){
    user=toCString(user);
    var i=0;
    var length=user.length;
    var islower=TRUE;
    for (i=0; i<length; i++) {
        var temp=tolower(user[i]);
        if (temp!=user[i]) {
            islower=FALSE;
            break;
        }
    }
    if (islower==TRUE) {
        return "TRUE";
    }
    else{
        return "FALSE";
    }

}


/*
 * x="  Hello "  x.trim()---->"Hello"
 * string_trim("'Hello'")
 */
function string_trim(user){
    user=trim(user);
    user=substr(user,1,user.length-1);
    var output=trim(user);
    var output2="'";
    output2+=output;
    output2+="'";
    return output2;  
}

/*
 * x="Hello,Hi"  x.split(",")-------->["Hello","Hi"];
 * string_count_str("'Hello,Hi'","','")
 */
function string_split(user, func_param){
    user=toCString(user);           //"Hello,Hi"
    user=toCString(user);           // Hello,Hi
    func_param=toCString(func_param);//","
    func_param=toCString(func_param);//,
    var return_list="[]";
    if (find_not_in_string(user,func_param)==-1) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred whiling calling function string_split, "+func_param+" is not found in "+user+"\n");
        exit(0);
    }
    var begin=0;
    var end=find_not_in_string(user,func_param);
    while (TRUE) {
        var append_element=substr(user,begin,end);
        return_list=listAppendOneElement(return_list, toString(append_element));
        begin=end+func_param.length;
        if (begin>=user.length) {
            break;
        }
        end=find_from_index_not_in_string(user, func_param, begin+1);
        if (end==-1) {
            end=user.length;
            append_element=substr(user, begin, end);
            return_list=listAppendOneElement(return_list, toString(append_element));
            break;
        }
    }
    return return_list;
}

// x="Hello"
// x=x.reverse()--> "olleH"
function string_reverse(user){
    user=toCString(user);
    user=stringReverse(user);
    return toString(user);
}


/*#################### Function for List ############################*/

/*
 * eg x=[1,2,3] x.append(5)---->x=[1,2,3,5]
 * list_append("[1,2,3]","4"]
 */
function list_append(user, func_param){
   //// printf("#### list_append #### x.append(4) ####\n");
    var output=listAppendOneElement(user,func_param);
   //// printf("#### list is |"++"| ####\n",output);
    return output;
}
/*
 * eg x=[1,2,3] x.remove_at_index(0)------->x=[2,3]
 *    x=[1,[1,2],4] x.remove_at_index(1)------->x=[1,4]
 * list_remove_at_index("[1,2,3]","0")------->[2,3]
 */
function list_remove_at_index(user, func_param){
   //// printf("#### list_remove_at_index #### x.remove_at_index([0])\n");
    return listRemoveOneElementAtOneIndex(user,func_param);
}
/*
 * range(0,10)------->[0,1,2,3,4,5,6,7,8,9]
 */
//var list_range(var function_param){
//
//}

/*
 * list_length
 * eg: x=[1,2,[3,4],5].    x.length()=4  x[2].length()=2
 */
function list_length(user){
    var num=valueNumOfList(user);

   // char temp[100];
    //sprintf(temp,""++"",num);
    var temp=intToCString(num);
    
    var output=temp;
    return output;
}
/*
 * list_remove_element
 * x=[1,2,3] x.remove_element(1)--->[2,3]
 * x=[1,2,3,1] x.remove_element(1)--->[2,3]
 * x=[1,[1],2] x.remove_element(1)--->[[1],2]
 */
function list_remove_element(user, function_param){
    return listRemoveOneElementByValue(user,function_param);
}

/*
 * x=[1,1,2,3] x.count(1)---->2
 * x=[1,2,[1],2] x.count(1)---->1
 */
function list_count( user,  function_param){
    user=toCString(user);
    function_param=toCString(function_param);
    user=trim(user);
    user=substr(user, 1, user.length-1);
    var num=count_str_not_in_str_list_dict_parenthesis(user, function_param);
    
    //char temp[1000]="";
    //sprintf(temp, ""++"",num);
    var temp=intToCString(num);
    
    var output=temp;
    return output;
}

/*################## Function for Dictionary ############################*/
/*
 * x={a:1,b:2}  x.key()=[a.b]
 * dict_key("{a:1,b:2}")-------->"[a,b]"
 * 
 */
function dict_key(user){
    return keyOfDictionaryAsList(user);
}

//################## Function for File Operation ###########################
// file_readline("'math.wy'") and return list form of string

// javascript : file operation
/*
var file_readlines(var walley_file_name){
   // printf("#### FILE_READLINES ####\n");
    walley_file_name=toCString(walley_file_name);
    walley_file_name=trim(walley_file_name);
    //printf("#### file_readlines ####\n");
   // printf("walley_file_name "++"\n",walley_file_name);
    FILE *fp=fopen(walley_file_name,"r");
    if(fp==NULL){
        printf("Mistake occurred whiling calling function file_readlines\nDoes not find "++"\n",walley_file_name);
        fclose(fp);
        exit(0);
    }
    else{
        //char output[100000]="";
        //strcat(output,"[");
        char arr[100000] = "";
        var output=append("","[");
        while (fgets(arr, 100000, fp) != NULL) {
            var temp3=append("", arr);
            temp3=trim(temp3);
            temp3=removeNFromBack(temp3);
            temp3=replace(temp3, "\"", "\\\"");
            output=append(output, "\"");
            output=append(output, temp3);
            output=append(output, "\",");
        }

        fclose(fp);
        output[(int)strlen(output)-1]=']';
        var output2=append("", output);
        return output2;
    }
}
*/

// javascript : file operation
// file_writelines("'walley.wy','str to file'")
/*
var file_writelines(var file_name,var lines){
   // printf("#### file_writelines ####\n");
   // printf("-- "++" -- "++" --\n",file_name,lines);
    //printf("parameters is "++"\n",params);
    //params=trim(params);
    //var file_name=substr(params,0,find_not_in_string(params,","));
    //var lines=substr(params,find_not_in_string(params,",")+1,(int)strlen(params));
    file_name=toCString(file_name);
    FILE *fp=fopen(file_name,"w");
    if(fp==NULL){
        printf("Mistake occurred whiling calling function file_writelines\nNo file "++" found",file_name);
        fclose(fp);
        exit(1);
    }
    else{
        fputs(lines,fp);
        fclose(fp);
        return "None";
    }
}
*/

// javascript : file operation
/*
var file_removefile(var file_name){
    file_name=trim(file_name);
    file_name=toCString(file_name);
    remove(file_name);
    return "None";
}*/

// javascript : file operation
/*
var file_createfile(var file_name){
   //// printf("#### file_createfile ####\n");
    file_name=trim(file_name);
    file_name=toCString(file_name);
    FILE *fp=fopen(file_name,"w");
    if(fp==NULL){
        printf("Failed to create "++"\n",file_name);
        exit(0);
    }
    //else {
    //    fputs("#~",fp);
    //}
    fclose(fp);
    return "None";
}

var file_addstrtofile(var params){
    //// printf("#### file_createfile ####\n");
    var file_name=getParamAccordingToIndex(params, 0);
    file_name=trim(file_name);
    file_name=toCString(file_name);
    var add_str=getParamAccordingToIndex(params, 1);
    add_str=toCString(add_str);
    writeStringToFile(file_name, add_str);
    return "None";
}



var file_readFileNameInDirectory(var directory_name){
    directory_name=toCString(directory_name);
    DIR *dir;
    struct dirent *file;
    dir=opendir(directory_name);
    var output="[";
    if (dir!=NULL) {
        while ((file=readdir(dir))) {
            //puts(file->d_name);
            output=append(output, "\"");
            output=append(output, file->d_name);
            output=append(output, "\",");
        }
        closedir(dir);

        output[(int)strlen(output)-1]=']';
        return output;
    }
    else{
        printf("Mistake occurred while calling function file_readFileNameInDirectory\nNo directory "++" found\n",directory_name);
        exit(0);
    }

}



// This function is used for importing modules like python
// eg getModulePathFromDirectory("test.test2.ex2")
//
// |-- test2.wyp--ex2.wy
// test.wyp-
// |__
 
var getModulePathFromDirectory(var name_of_file_to_run,var directory){
    //var file_in_directory=file_readFileNameInDirectory("\"./\"");
    //printf("file_in_directory "++"\n",file_in_directory);
    
    int begin=0;
    int index_of_dot=-1;
    //var output="./";
    var output=directory;
    //var current_path="./";
    var current_path=directory;
    while (TRUE) {
        index_of_dot=find_from_index(name_of_file_to_run, ".", begin);
        
        // check whether .wyp exist.
        // is exist, then it is package
        // else, it is module file.
        
        if (index_of_dot==-1) {
            var temp_module=substr(name_of_file_to_run, begin, (int)strlen(name_of_file_to_run));
            var temp_package=append(temp_module, ".wyp");
            if (find(file_readFileNameInDirectory(current_path), toString(temp_package))!=-1) {
                output=append(output,temp_package);
            }
            else{
                output=append(output, substr(name_of_file_to_run, begin, (int)strlen(name_of_file_to_run)));
                output=append(output, ".wy");
            }
            break;
        }
        
        var temp_module=substr(name_of_file_to_run, begin, index_of_dot);
        var temp_package=append(temp_module, ".wyp");
        if (find(file_readFileNameInDirectory(current_path), toString(temp_package))!=-1) {
            output=append(output, temp_package);
            output=append(output, "/");
            current_path=output;
        }
        else{
            //output=append(output, substr(name_of_file_to_run, begin, (int)strlen(name_of_file_to_run)));
            output=append(output,append(temp_module, ".wy"));
            break;
        }
        
        begin=index_of_dot+1;
    }
    
    
    return output;
}


*/
//################## System ###############################################*/
function walley_quit_program(){
    exit(0);
}
function walley_show_var(struct_var){
    var row=0;
    
    var length=0;
    if (strcmp(struct_var[0].var_name,"__size_of_array__")!=0) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=atoi(struct_var[0].var_value);
    }

    while (row<length) {
        var var_name=struct_var[row].var_name;
        if (find(var_name, "__temp_while__")==0||
            find(var_name, "__temp_while_space__")==0||
            find(var_name, "__temp_string_in_while_loop__")==0||
            find(var_name, "__temp_if__")==0||
            find(var_name, "__temp_if_space__")==0||
            find(var_name, "__has_run_if__")==0||
            find(var_name, "__temp_for__")==0||
            find(var_name, "__temp_i__")==0||
            find(var_name, "__temp_string_in_for_loop__")==0||
            find(var_name, "__temp_class__")==0||
            find(var_name, "__temp_class_name_now_writting__")==0||
            find(var_name, "__string_in_temp_class__")==0||
            find(var_name, "__instance_name__")==0||
            find(var_name, "__instance_var__")==0||
            find(var_name, "__instance_var__")==0||
            find(var_name, "__size_of_array__")==0
            ) {
            row++;
            continue;
        }else {

        
        printf(""+struct_var[row].var_name+":"+struct_var[row].var_value+":"+struct_var[row].var_type+":\n");
        row++;
        }
    }    return "None";
}

function walley_get_current_terminal_commands(){
    var i=0;
    var output="[";
    for (; i<ARGC; i++) {
        output=append(output, toString(ARGV[i]));
        if (i==ARGC-1) {
            output=append(output, "]");
        }
        else{
            output=append(output, ",");
        }
    }
    return output;
}

function walley_random(){
   return Math.random();
}

/*
//################### For GUI ##############################################
var walley_init_window(var input_str){ //int width, int height, int x, int y, var windows_name)
    var width=getParamAccordingToIndex(input_str, 0);
    var height=getParamAccordingToIndex(input_str, 1);
    var x=getParamAccordingToIndex(input_str, 2);
    var y=getParamAccordingToIndex(input_str, 3);
    var window_name=getParamAccordingToIndex(input_str, 4);
    Walley3D_initWindows(atoi(width),atoi(height), atoi(x), atoi(y), window_name);
    return "None";
}


var walley_set_projection(var input_str){//double fovy, double aspect , double zNear, double zFar, double w1, double h1){
    var fovy=getParamAccordingToIndex(input_str, 0);
    var aspect=getParamAccordingToIndex(input_str, 1);
    var zNear=getParamAccordingToIndex(input_str, 2);
    var zFar=getParamAccordingToIndex(input_str, 3);
    var w1=getParamAccordingToIndex(input_str, 4);
    var h1=getParamAccordingToIndex(input_str, 5);
    Walley3D_setProjection(atof(fovy), atof(aspect), atof(zNear), atof(zFar), atof(w1), atof(h1));
    return "None";
}

var walley_set_view(var input_str){//double x, double y, double z, double look_at_x, double look_at_y, double look_at_z, double head_x, double head_y, double head_z
    
    var x=getParamAccordingToIndex(input_str, 0);
    var y=getParamAccordingToIndex(input_str, 1);
    var z=getParamAccordingToIndex(input_str, 2);
    var look_at_x=getParamAccordingToIndex(input_str, 3);
    var look_at_y=getParamAccordingToIndex(input_str, 4);
    var look_at_z=getParamAccordingToIndex(input_str, 5);
    var head_x=getParamAccordingToIndex(input_str, 6);
    var head_y=getParamAccordingToIndex(input_str, 7);
    var head_z=getParamAccordingToIndex(input_str, 8);
    Walley3D_setView(atof(x), atof(y), atof(z), atof(look_at_x), atof(look_at_y), atof(look_at_z), atof(head_x), atof(head_y), atof(head_z));
    return "None";
}

var walley_clear_screen(){
    Walley3D_clearScreen();
    return "None";
}

var walley_set_color(var input_str){
    var red=getParamAccordingToIndex(input_str, 0);
    var green=getParamAccordingToIndex(input_str, 1);
    var blue=getParamAccordingToIndex(input_str, 2);
    Walley3D_setColor(atof(red), atof(green), atof(blue));
    return "None";
}

var walley_draw_line(var input_str){//double x1, double y1, double z1, double x2, double y2, double z2
    var x1=getParamAccordingToIndex(input_str, 0);
    var y1=getParamAccordingToIndex(input_str, 1);
    var z1=getParamAccordingToIndex(input_str, 2);
    var x2=getParamAccordingToIndex(input_str, 3);
    var y2=getParamAccordingToIndex(input_str, 4);
    var z2=getParamAccordingToIndex(input_str, 5);
    Walley3D_drawLine(atof(x1), atof(y1), atof(z1), atof(x2), atof(y2), atof(z2));
    return "None";
}

var walley_translate(var input_str){
    var x=getParamAccordingToIndex(input_str, 0);
    var y=getParamAccordingToIndex(input_str, 1);
    var z=getParamAccordingToIndex(input_str, 2);
    Walley3D_translate(atof(x), atof(y), atof(z));
    return "None";
}

var walley_rotate(var input_str){
    var angle=getParamAccordingToIndex(input_str, 0);
    var x=getParamAccordingToIndex(input_str, 1);
    var y=getParamAccordingToIndex(input_str, 2);
    var z=getParamAccordingToIndex(input_str, 3);
    Walley3D_rotate(atof(angle),atof(x), atof(y), atof(z));
    return "None";
}
*/

//################## Special Function Summary #############################*/


function Walley_Run_Special_Function_From_Var(function_list,struct_var) {
    //################### Special Function #########################################################
    /*
     * eg x="Hello"-----> x.find("He")----->0
     */
    //printf("#### Walley_Run_Special_Function ####\n");
    //// printf("FUNCTION "++", FILE_VAR_NAME "++"\n",function,file_var_name);
    var return_value;
    
    //// printf("Begin to run special function like x=[1,2,3]  x.append(12)\n");
    //// printf("---->Function "++"\n---->file_var_name "++"\n",function,file_var_name);
    // eg x="Hello"  x.find("Hi")
    var user = substr(function_list, 0, find_not_in_str_list_dict_parenthesis(function_list, ".")); //------> x
    var user_function = substr(function_list, find_not_in_str_list_dict_parenthesis(function_list, ".") + 1, function_list.length); // -------->find("Hi")
    var user_value; //= getValueFromValueName(file_var_name, user); // ------->x="Hello"
        
    if (Var_Existed(struct_var, user)==TRUE) {
        user_value = Var_getValueOfVar(struct_var, user);
    } else {
        user_value=user;
    }
    var user_function_parameter = substr(user_function, find(user_function, "(") + 1, removeBackSpace(user_function).length - 1); // ----->"Hi"  which is inside parenthesis

    var num_of_params = numOfParameters(user_function_parameter);
    //// printf("user---->"++"\nuser_function---->"++"\nuser_value---->"++"\nuser_function_parameter "++"\n---->num_of_param "++"\n",user,user_function,user_value,user_function_parameter,num_of_params);
    // Special function for String
    if (strcmp("string", variableValueType(user_value)) == 0) {
        if (find(user_function, "find(") == 0) {
            if (num_of_params == 1)
                return_value = string_find(user_value, user_function_parameter);
            else if (num_of_params == 2)
                return_value = string_find_from_index(user_value, user_function_parameter);
        } else if (find(user_function, "replace(") == 0) {
            if (num_of_params==2) {
                return_value=string_replace(user_value, user_function_parameter);
            }
            else if(num_of_params==3){
                return_value=string_replace_from_index(user_value, user_function_parameter);
            }
        } else if (find(user_function, "count(") == 0) {
            return_value = string_count_str(user_value, user_function_parameter);
        } else if (find(user_function, "split(") == 0) {
            return_value = string_split(user_value, user_function_parameter);
        } else if (find(user_function,"length(")==0){
            //// printf("****** "++"\n",user_value);
            return_value=string_length(user_value);
        } else if (find(user_function,"trim(")==0){
            return_value=string_trim(user_value);
        } else if (find(user_function,"isdigit(")==0){
            return_value=string_isdigit(user_value);
        } else if (find(user_function,"isalpha(")==0){
            return_value=string_isalpha(user_value);
        } else if (find(user_function,"toupper(")==0){
            return_value=string_toupper(user_value);
        } else if (find(user_function,"tolower(")==0){
            return_value=string_tolower(user_value);
        } else if (find(user_function,"isupper(")==0){
            return_value=string_isupper(user_value);
        } else if (find(user_function,"islower(")==0){
            return_value=string_islower(user_value);
        } else if (find(user_function,"reverse(")==0){
            return_value=string_reverse(user_value);
        }
        else {
            printf("This Special Function for String eg. x.find('x') is still under development\n");
        }
    }        // Special function for list
    else if (strcmp("list", variableValueType(user_value)) == 0) {
        if (find(user_function, "append(") == 0) {
            //printf("#### FIND APPEND\n");
            //printf("user value "++" user_function_parameter "++"\n",user_value,user_function_parameter);
            return_value = list_append(user_value, user_function_parameter);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name, user, return_value);
            Var_changeValueOfVar(struct_var, user, return_value, "list");
            
            //// printf("#### FINISH APPEND ####\n");
        } else if (find(user_function, "remove_at_index(") == 0) {
            return_value = list_remove_at_index(user_value, user_function_parameter);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name, user, return_value);
            Walley_Update_Var_And_Var_Value_To_Var(struct_var, user, return_value);

        } else if (find(user_function, "length(") == 0) {
            return_value = list_length(user_value);
        } else if (find(user_function, "count(") == 0) {
            return_value = list_count(user_value, user_function_parameter);
        } else if (find(user_function,"remove_element(")==0){
            return_value= list_remove_element(user_value,user_function_parameter);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name, user, return_value);
            Walley_Update_Var_And_Var_Value_To_Var(struct_var, user, return_value);

        }
    }        // Special function for dictionary
    else if (strcmp("dictionary", variableValueType(user_value)) == 0) {
        if (find(user_function, "key(") == 0) {
            return_value = dict_key(user_value);
        } else if (find(user_function, "keys(") == 0) {
            return_value = dict_key(user_value);
        }
    }
    
    //// printf("RETURN VALUE "++"\n",return_value);
    return return_value;
}





//##############################################################################
//##############################################################################
//##############   Embed Function For JavaScript    ############################
//##############################################################################
//##############################################################################

function js_eval(input_str){
    eval(input_str);
    return "None";
}