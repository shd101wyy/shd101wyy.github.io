/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_dictionary.h
 * Author: shd101wyy
 *
 * Created on August 31, 2012, 9:59 PM
 */

//#include "walley_list.h"
/*
 * 
Dictionary

Init 
a={}
a{"hello"}=1
a{"hi"}=2

a={"hello":1,"hi":2}


Format
a:{"hello":1,"hi":2}:dictionary
#~Begin:a:
a{"hello"}=1
a{"hi"}=2
#~End:a:

 * format:    
dic:{a:1,b:{c:1,d:2}}:dictionary:
#~Begin:dic:
dic{a}:1:int:
dic{b}:{c:1,d:2}:dictionary:
#~Begin:dic{b}:
dic{b}{c}:1:int:
dic{b}{d}:2:int:
#~End:dic{b}:
#~End:dic:

Declare
a{"hi"}=2
// do not forget a{'hi'} is the same

Change Value
the same as above

a.key()=["hello","hi"];

 * */
/*
 * eg valueAtKey("{'Hello':11,'Hi':2}","'Hello'")---->11
 */
function  valueAtKey(dictionary, key){
   //// printf("#### valueAtKey ####\n");
   //// printf(""++", "++"\n",dictionary,key);
    if(find(dictionary,key)==-1|| find(dictionary,"{")==-1 || find(dictionary,"}")==-1){
        printf("Mistake occurred while calling function valueAtKey\nkey "+key+" did not find in dictionary "+dictionary+"\n");
        exit(1);
    } else {
        var value;
        if(find_from_index_not_in_string(dictionary,",",find(dictionary,key))!=-1){
                value=substr(dictionary,find_from_index_not_in_string(dictionary,":",find(dictionary,key))+1,find_from_index_not_in_string(dictionary,",",find(dictionary,key)));
        } else {
                value=substr(dictionary,find_from_index_not_in_string(dictionary,":",find(dictionary,key))+1,find_from_index_not_in_string(dictionary,"}",find(dictionary,key)));
        }
        value=removeAheadSpace(removeBackSpace(value));
        return value;
    }
    
}

/*
 * eg keyOfDictionaryAsList("{a:1,b:2}")----->[a,b]
 */
function keyOfDictionaryAsList(dictionary){
    if(strcmp(dictionary,"{}")==0)
        return "[]";
   //// printf("#### keyOfDictionaryAsList ####\ninput |"++"|\n",dictionary);
    if(find(dictionary,"{")==-1 || find(dictionary,"}")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function keyOfDictionaryAsList\ndictionary "+dictionary+" mistake\n");
        exit(1);
    }
    dictionary=trim(dictionary);
    
    dictionary=append(",", substr(dictionary, 1, dictionary.length));
    
    var i=0;
    var find_key=FALSE;
    var output="";
    var begin=0;
    var end=0;
    var output="[";
    for(i=0;i<dictionary.length;i++){
        var in_dict=FALSE;
        if(count_str(substr(dictionary,0,i+1),"{")!=count_str(substr(dictionary,0,i+1),"}"))
            in_dict=TRUE;
        //printf(""++"-->%c--->"++"\n",i,dictionary[i],in_dict);
        if(find_key==FALSE && dictionary[i]==',' && charIsInString(dictionary,i)==FALSE && in_dict==FALSE){
            find_key=TRUE;
            begin=i+1;
        }
        
        if(find_key==TRUE && dictionary[i]==':' && charIsInString(dictionary,i)==FALSE && in_dict==FALSE){
            find_key=FALSE;
            end=i;
            output+=substr(dictionary,begin,end);
            output+=",";
        }
        
    }
    dictionary[0]='{';
    var output2=substr(output,0,output.length-1);
    output2+="]";
    
    return output2;
}
/*
 * get the num of key
 * eg numOfDictionaryKey("{'Hello':11,'Hi':2}","'Hello'")---->2 ge
 */
function numOfDictionaryKey(dictionary){
    //printf("#### numOfDictionaryKey ####\n");
    var list=keyOfDictionaryAsList(dictionary);
    return valueNumOfList(list);
}

//#################### valueOfDictionaryAtKeyString##########
/*eg valueOfDictionaryAtKeyString("{a:1,b:{c:1,d:2},e:20}","{a}")---->1
 *   valueOfDictionaryAtKeyString("{a:1,b:{c:1,d:2},e:20}","{b}{d}")---->2
 * 
 */
function valueOfDictionaryAtKeyString(dict,key_str){
   //// printf("#### valueOfDictionaryAtKeyString ####\n");
   //// printf("dict |"++"|\n, key_str |"++"|\n",dict,key_str);
    dict=trim(dict);
    if(find(dict,"{")==-1 || find(dict,"}")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfDictionaryAtKeyString\nInput "+dict+" is not a dict\n");
        exit(0);
    }
    if(count_str(dict,"{")!=count_str(dict,"}")){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfDictionaryAtKeyString\nInput "+dict+" is not a list because the num of { and } is different\n");
        exit(0);  
    }
    var i=0;
    var key;
    var value;
    var num=count_str_not_in_string(key_str,"{");
    for(i=0;i<num;i++){
        key=substr(key_str,find_not_in_string(key_str,"{")+1,find_not_in_string(key_str,"}"));
        key=append(key, ":");
        if(find_not_in_string(dict,key)==-1){
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("Mistake occurred while calling function valueOfDictionaryAtKeyString\nkey "+key+" in dictionary "+dict+" not found\n");
            exit(1);
        }
        if(find_from_index_not_in_string(dict,"{",find_not_in_string(dict,key))!=-1 && find_from_index_not_in_string(dict,"{",find(dict,key)) < find_from_index_not_in_str_list_dict(dict,",",find(dict,key))){
            value=substr(dict,find_from_index_not_in_string(dict,"{",find_not_in_string(dict,key)),find_from_index_not_in_string(dict,"}",find_not_in_string(dict,key))+1);
        } else {
            if(find_from_index_not_in_str_list(dict,",",find_not_in_string(dict,key))!=-1)
                value=substr(dict,find_from_index_not_in_string(dict,":",find_not_in_string(dict,key))+1,find_from_index_not_in_str_list(dict,",",find_not_in_string(dict,key)));
            else
                value=substr(dict,find_from_index_not_in_string(dict,":",find_not_in_string(dict,key))+1,dict.length-1);
        }
        key_str=substr(key_str,find(key_str,"}{")+1,key_str.length);
        dict=value;
        //printf("---->value "++"\n",value);
    }
    return value;
}
/*
 * eg dictionaryAddKeyAndValue("{a:1,b:2,c:12}","d","13")------>{a:1,b:2,c:12,d:13}
 */
function dictionaryAddKeyAndValue(dictionary, key, value){
    dictionary=removeAheadSpace(removeBackSpace(dictionary));
    var output="";
    output=substr(dictionary,0,dictionary.length-1);
    output+=",";
    output+=key;
    output+=":";
    output+=value;
    output+="}";
    //may have problem here
    
    if(find_not_in_string(output,"{,")!=-1)
        output=replace_not_in_string(output,"{,","{");
    return output;
}

/*
 * eg dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey("{a:1,b:2,c:12}","{d}","13")------>{a:1,b:2,c:12,d:13}
 * eg dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey("{a:1,b:2,c:12}","{d}{e}","13")------>{a:1,b:2,c:12,d:{e:13}}
 * eg dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey("{a:1,b:{o:2},c:12}","{b}{f}","13")------>{a:1,b:{o:2,f:13},c:12,d:13}
 * eg dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey("{a:1}","{a}","13")---->"{a:13}"
 */
//I just find that this function has a lot of problem....
function dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey(dictionary, key, value){
   // printf("#### dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey ####\n");
   // printf("## Dictionary "++"\n#### key "++"\n#### value "++"\n",dictionary,key,value);
    var length=dictionary.length;
    var temp="";
    temp="XX:";
    temp+=dictionary;
    dictionary=temp;
    var key_copy=key;
   
    if(find_not_in_string(key,"}{")!=-1){
        key=replace_not_in_string(key,"}{",",");
    }
  
    key=replace_not_in_string(key,"{","");
    key=replace_not_in_string(key,"}",",");//{a}{b}---->a,b, {a}----->a,
    dictionary=trim(dictionary);
    
    var i=0;
    var begin=0;
    var count_of_douhao=count_str_not_in_string(key,",");
   
   
    var existed=TRUE;
    var last_key="XX";
    var temp_dict;
    var output2;
    var final_key;
    //printf("enter here\n");
    //printf("Key-->"++"\n",key);
    for(i=0;i<count_of_douhao;i++){
        //printf("begin "++"\n",begin);
        var temp_key=substr(key,begin,find_from_index_not_in_string(key,",",begin)); // a,b,---->a
        var temp="";
        temp=temp_key;
        temp+=":";
        temp=trim(temp);
        if(find_not_in_string(dictionary,temp)!=-1){
            last_key=temp;
        }
        else{
            existed=FALSE;
           
            var begin_of_left=find_not_in_string(dictionary,last_key)+last_key.length;

            begin_of_left=find_from_index_not_in_string(dictionary, "{",begin_of_left);
            
            var end_of_last_right=find_from_index_not_in_string(dictionary,"}",begin_of_left);
            while (TRUE) {
                var temp_str=substr(dictionary, begin_of_left, end_of_last_right+1);
                if (count_str_not_in_string(temp_str, "{")==count_str_not_in_string(temp_str, "}")) {
                    break;
                }
                else{
                    end_of_last_right=find_from_index_not_in_string(dictionary, "}",end_of_last_right+1);
                }
            }

            
            temp_dict=substr(dictionary,begin_of_left,end_of_last_right+1);

            // eg if b:2 is not in XX:{a:2}------> temp_dict={a:2}
            var j=i;
            var temp_temp=substr(temp_dict,0,temp_dict.length-1);
                //{a:2}----->{a:2
            var output="";
            output=temp_temp;
            for (j = i; j < count_of_douhao; j++) {
                //printf("i is "++", j is "++".",i,j);
                var temp_key2 = substr(key, begin, find_from_index_not_in_string(key, ",", begin)); // a,b,---->a
                //printf("temp_key2 = |"++"|\n",temp_key2);
                var temp2 ="";
                temp2=temp_key2;
                temp2+=":";
                if (j+1==count_of_douhao){
                    output+=",";
                    output+=temp2;
                    output+=value;  //{a:2 + ,b:1
                    
                    output2="";

                    output2=output;
                    var a=0;
                    for(a=0;a<(j-i+1);a++){
                        output2+="}";
                    }
                    
                } else {
                    output+=",";
                    output+=temp2;
                    output+="{"; // {a:2,b:{
                }
                begin=find_from_index_not_in_string(key,",",begin+1)+1;
            }
            break;
        }
        if(i+1==count_of_douhao){
            final_key=temp_key;
        }
        
        begin=find_from_index_not_in_string(key,",",begin+1)+1;
    }
    
    
    if(existed==TRUE){
        //{a}--->a
        var value2=valueOfDictionaryAtKeyString(dictionary,key_copy);
        var temp="";
        temp=final_key;  // a
        temp+=":";  // a:
        temp+=value2; //a:12
        var temp2="";
        temp2=final_key;
        temp2+=":";
        temp2+=value;
      
        dictionary=replace_not_in_string(dictionary,temp,temp2);
       
    } else {
       
        dictionary=replace(dictionary,temp_dict,output2);
        dictionary=replace_not_in_string(dictionary,"{,","{");
    }
    dictionary=substr(dictionary,3,dictionary.length);
    return dictionary;
}


/*
 *  * format:    
dic:{a:1,b:{c:1,d:2}}:dictionary:
#~Begin:dic:
dic{a}:1:int:
dic{b}:{c:1,d:2}:dictionary:
#~Begin:dic{b}:
dic{b}{c}:1:int:
dic{b}{d}:2:int:
#~End:dic{b}:
#~End:dic:
 */

function formatStringForDictionaryInOrderToWtiteVar(struct_var,var_name, var_value){
    var num_of_key=numOfDictionaryKey(var_value);
    var key=keyOfDictionaryAsList(var_value);
    //printf("key is "++"\n",key);
    Var_addProperty(struct_var, var_name, var_value, "dictionary");
    
    var i=0;
    for(i=0;i<num_of_key;i++){
        var key_name=valueOfListAtIndex(key,i);
        //printf("Key Name ----> "++"\n",key_name);
        var temp_key="{";
        temp_key+=key_name;
        temp_key+="}";
        //printf("Temp Key ----> "++"\n",temp_key);
        var value=valueOfDictionaryAtKeyString(var_value,temp_key);
        //printf("Value    ----> "++"\n",value);
        if (strcmp("dictionary",variableValueType(value))==0){ // Value Type is Dictionary
            var temp_var_name=var_name;
            temp_var_name+=temp_key;
            formatStringForDictionaryInOrderToWtiteVar(struct_var,temp_var_name,value);
            
        } else { //Not Dictionary
            
            Var_addProperty(struct_var, append(var_name, temp_key), value, variableValueType(value));
        }
    }
}


//######### Write dictionary to Var using an appointed format.
function writeVarNameAndVarValueIntoAppointedVarForDictionary(struct_var,var_name,var_value){

    if(strcmp(var_value,"{}")==0){
        Var_addProperty(struct_var, var_name, var_value, "dictionary");
    }
    else{
        formatStringForDictionaryInOrderToWtiteVar(struct_var, var_name, var_value);
   }
    
}

//########## Use this function only when the same var name list exits ########
/*This function will change the whole value of the dictionary*/
function changeTheWholeVarValueFromItsInitialOneFromVarForDictionary(struct_var, var_name, var_value){
    //// printf("#### changeTheWholeVarValueFromItsInitialOneFromFileForList ####\n");
    //// printf("#### "++", "++", "++" ####\n",file_name,var_name,var_value);
    //var row=0;
    var length=0;
    if (strcmp(struct_var[0].var_name,"__size_of_array__")!=0) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=atoi(struct_var[0].var_value);
    }

    /*
    var temp_var_name=append(var_name, "{");
    while (row<length) {
        if (strcmp(var_name,struct_var[row].var_name)==0 || find(struct_var[row].var_name, temp_var_name)==0) {
            Var_removeVar(struct_var, struct_var[row].var_name);
            length--;
            row--;
        }
        row++;
    }
    */
   
    Var_removeVar(struct_var, var_name);

    
    writeVarNameAndVarValueIntoAppointedVarForDictionary(struct_var, var_name, var_value);
}
/*Change one var value
 * eg if a{"Hello") existed in dictionary, this function will change the value of a{"Hello"} and write it to file
 * eg if a{"Hello") doesn't existed, this function will add a{"Hello"} to dictionary and write it to file.
 * eg changeTheOneVarValueFromItsInitialOneFromFileOrAddVarNameAndValueForDictionary("__walley__.wy","a{'hi'}","12")
 */

function changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, change_var_name, to_var_value){
    // printf("#### changeTheOneVarValueFromItsInitialOneFromFileOrAddVarNameAndValueForDictionary ####\n");
    //// printf("#### "++", "++", "++"\n",file_name,change_var_name,to_var_value);
    
    change_var_name=removeAheadSpace(removeBackSpace(change_var_name));
    var whole_dictionary_name=substr(change_var_name,0,find(change_var_name,"{")); //a{'hi'}--->a
    var key=substr(change_var_name,find_not_in_string(change_var_name,"{"),change_var_name.length); //a{'hi'}{'hello'}--->{'hi'}{'hello'}
    
    var whole_value_of_dictionary=Var_getValueOfVar(struct_var,whole_dictionary_name); // get value from file-----> {'hi':{'hello':1}}
    
    whole_value_of_dictionary=dictionaryAddKeyAndValueInStringOrChangeOriginalValueByKey(whole_value_of_dictionary,key,to_var_value);
    
    changeTheWholeVarValueFromItsInitialOneFromVarForDictionary(struct_var, whole_dictionary_name, whole_value_of_dictionary);
}

/*
 isDictionaryElement try to find out whether a{"Hello"} kind of var_name is existed in file in order to use function
 * eg: isListElement("__walley__.wy","a{"Hello"}");
 */
/*
bool isDictionaryElement(var file_name, var var_name){
    FILE *fp=fopen(file_name,"r");
    if(fp==NULL){
        printf("Mistake occurred while calling function isDictionaryElement\nNo Required File Found");
        exit(1);
    }
    //printf("Enter here\n");
    var dict_var_name=substr(var_name,0,find(var_name,"{"));//a[0]-->a
    dict_var_name=removeAheadSpace(dict_var_name);
    bool find_var_name=FALSE;
    char arr[1000]="";
    while((fgets(arr,1000,fp))!=NULL){
        //printf(""++"\n",arr);
        if(find(arr,":")==-1)
            continue;
        var temp_var_name=substr(arr,0,find(arr,":"));
        //printf("Temp Var Name is "++"\nList Var Name is "++"\n",list_var_name,temp_var_name);
        if(strcmp(temp_var_name,dict_var_name)==0){
            //printf("Find var name");
            find_var_name=TRUE;
            break;
        }
        
    }
    fclose(fp);
    return find_var_name;
        
}**/

/*
 * This function is used to substitue the value in x[i]'s [] and x{i}'s i
 * substitueValueInDictionaryAndList("x{i}","__walley__.wy")---->x{"Hello"}, we know the value of i=
 * "hello", so we replace value of i in x{i}
 */
/*
 * //########### I Put this function into Walley_Substitue_........
var substitueValueInDictionaryAndList(var input_str,var file_var_name){
    int i=0;
    int begin=0;  //begin of { and [
    int end=0;    // end of } and ]
    for(i=0;i<input_str.length;i++){
        if(charIsInString(input_str,i)==FALSE && input_str[i]=='{'){
            begin=i;
            end=find_from_index(input_str,"}",begin+1);  
            var replace_str=substr(input_str,begin+1,end);   //from x{i} get i
            var with_str=Walley_Substitue_Var_And_Function_Return_Value_From_File(replace_str,file_var_name);
            input_str=replace_from_index_to_index(input_str,replace,with_str,begin+1,end);
        }
        
        if(charIsInString(input_str,i)==FALSE && input_str[i]=='['){
            begin=i;
            end=find_from_index(input_str,"]",begin+1);  
            var replace_str=substr(input_str,begin+1,end);   //from x{i} get i
            var with_str=Walley_Substitue_Var_And_Function_Return_Value_From_File(replace_str,file_var_name);
            input_str=replace_from_index_to_index(input_str,replace,with_str,begin+1,end);
        }
    }
    
}
 * **/