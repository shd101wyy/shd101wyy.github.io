/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_list.h
 * Author: shd101wyy
 *
 * Created on August 31, 2012, 4:27 PM
 */

//#include "walley_file_operation.h"
//#################### valueOfListAtIndex("[1,2,3,4]",0)---->1
function valueOfListAtIndex(list,index){
    if(find(list,"[")==-1 || find(list,"]")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndex\nInput "+list+"is not a list\n");
    }
        
    list=trim(list);
    list=substr(list,1,list.length-1);
    var temp=",";
    temp+=list;
    /* For Example [1,2]--->,1,2*/
    list=temp;
    
    var num_of_comma=count_str_not_in_str_list_dict(list,",");
    if(num_of_comma<=index){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndex\nIndex is outside the boundary\nList |"+list+"| and index "+index+"\n");
        exit(1);
    }
        
    
    var i=0;
    var begin=-1;
    var end=list.length-1;
    for(;i<index+1;i++){
            begin=find_from_index_not_in_str_list_dict(list,",",begin+1);
    }
    
    var output;
    if(find_from_index_not_in_str_list_dict(list,",",begin+1)==-1){
        output=substr(list,begin+1,list.length);
    } else {
        end=find_from_index_not_in_str_list_dict(list,",",begin+1);
        output=substr(list,begin+1,end);
    }
    if(strcmp(output,"")==0)
        output="None";
    return output;
    
}

//#################### valueOfListAtIndexString("[1,[2],3,4]","[1][0]")---->2
function valueOfListAtIndexString(list,index_str){
    //printf("1");
    var index_str_temp=substr(index_str,find(index_str,"[")+1,find(index_str,"]"));
    var index=atoi(index_str_temp);
    if(find(list,"[")==-1 || find(list,"]")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndexString\nInput "+list+" is not a list\n");
        exit(0);
    }
    if(count_str_not_in_string(list,"[")!=count_str_not_in_string(list,"]")){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndexString\nInput "+list+" is not a list because the num of [ and ] is different\n");
        exit(0);  
    }
    
    
    list=removeBackSpace(list);
    list=removeAheadSpace(list);
    list=substr(list,1,list.length-1);
    var temp=",";
    temp+=list;
    /* For Example [1,2]--->,1,2
                   [1,[2,3],3]--->,1,[2,3],3*/
    
    list=temp;
    
    var num_of_comma=count_str(list,",");
    if(num_of_comma<=index){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndexString\nIndex is outside the boundary\n");
        exit(1);
    }
        
    
    var i=0;
    var begin=-1;
    var end=list.length-1;
    for(;i<index+1;i++){
            begin=find_from_index_not_in_string(list,",",begin+1);
          
            var left_fangkuohaoshu=count_str(substr(list,0,begin),"[" );
            var right_fangkuohaoshu=count_str(substr(list,0,begin),"]");
            while(left_fangkuohaoshu!=right_fangkuohaoshu){
                begin=find_from_index_not_in_string(list,",",begin+1);
                left_fangkuohaoshu=count_str(substr(list,0,begin),"[" );
                right_fangkuohaoshu=count_str(substr(list,0,begin),"]");
            }
    }
    
    var output;
    if(find_from_index_not_in_string(list,",",begin+1)==-1){
        output=substr(list,begin+1,list.length);
    } else {
        end = find_from_index_not_in_string(list, ",", begin + 1);
        
        var left_fangkuohaoshu = count_str(substr(list, 0, end), "[");
        var right_fangkuohaoshu = count_str(substr(list, 0, end), "]");
        while (left_fangkuohaoshu != right_fangkuohaoshu) {
            end = find_from_index_not_in_string(list, ",", end + 1);
            if(end==-1)
                end=list.length;
            left_fangkuohaoshu = count_str(substr(list, 0, end), "[");
            right_fangkuohaoshu = count_str(substr(list, 0, end), "]");
            
        }
        output=substr(list,begin+1,end);
    }
    if(strcmp(output,"")==0)
        output="None";
   
    if(strcmp(variableValueType(output),"list")==0){
        if(count_str(index_str,"[")>1){
            var temp_temp=substr(index_str,find(index_str,"]")+1,index_str.length);
            output=valueOfListAtIndexString(output,temp_temp);         
        }
    }
    return output;
}

// javascript : mistake about global var begin_end[]
//#################### valueOfListAtIndexStringAndReturnBeginAndEnd("[1,[2],3,4]","[1][0]")---->4
function valueOfListAtIndexStringAndReturnBeginAndEnd(begin_end,list,index_str){
        
    var index_str_temp=substr(index_str,find(index_str,"[")+1,find(index_str,"]"));
    var index=atoi(index_str_temp);
    if(find(list,"[")==-1 || find(list,"]")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndexStringAndReturnBeginAndEnd\nInput "+list+" is not a list\n");
        exit(0);
    }
    if(count_str_not_in_string(list,"[")!=count_str_not_in_string(list,"]")){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function valueOfListAtIndexStringAndReturnBeginAndEnd\nInput "+list+" is not a list because the num of [ and ] is different\n");
        exit(0);  
    }
    
    
    list=removeBackSpace(list);
    list=removeAheadSpace(list);
    list=substr(list,1,list.length-1);
    /* For Example [1,2]--->,1,2
                   [1,[2,3],3]--->,1,[2,3],3*/
    
    list=append(",", list);
    
    var num_of_comma=count_str(list,",");
    if(num_of_comma<=index){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred while calling function valueOfListAtIndexStringAndReturnBeginAndEnd\nIndex is outside the boundary\n");
        exit(1);
    }
        
    
    var i=0;
    var begin=-1;
    var end=list.length-1;
    for(i=0;i<index+1;i++){
            begin=find_from_index_not_in_string(list,",",begin+1);
          
            var left_fangkuohaoshu=count_str(substr(list,0,begin),"[" );
            var right_fangkuohaoshu=count_str(substr(list,0,begin),"]");
            while(left_fangkuohaoshu!=right_fangkuohaoshu){
                begin=find_from_index_not_in_string(list,",",begin+1);
                left_fangkuohaoshu=count_str(substr(list,0,begin),"[" );
                right_fangkuohaoshu=count_str(substr(list,0,begin),"]");
            }
    }
    
    var output;
    if(find_from_index_not_in_string(list,",",begin+1)==-1){
        output=substr(list,begin+1,list.length);
        begin_end[0]+=begin+1;
        begin_end[1]=begin_end[0]+(list.length-begin-1);
        
    } else {
        end = find_from_index_not_in_string(list, ",", begin + 1);
        var left_fangkuohaoshu = count_str_not_in_string(substr(list, 0, end), "[");
        var right_fangkuohaoshu = count_str_not_in_string(substr(list, 0, end), "]");
        while (left_fangkuohaoshu != right_fangkuohaoshu) {
            end = find_from_index_not_in_string(list, ",", end + 1);
            
            if(end == -1){
                end=list.length;
                break;
            } 
            
            left_fangkuohaoshu = count_str(substr(list, 0, end), "[");
            right_fangkuohaoshu = count_str(substr(list, 0, end), "]");
            
        }
        output=substr(list,begin+1,end);
        begin_end[0]=begin_end[0]+begin+1;
        begin_end[1]=begin_end[0]+(end-begin-1);
    }
    if(strcmp(output,"")==0)
        output="None";
    
    if(strcmp(variableValueType(output),"list")==0){
        if(count_str(index_str,"[")>1){
            var temp_temp=substr(index_str,find(index_str,"]")+1,index_str.length);
            valueOfListAtIndexStringAndReturnBeginAndEnd(begin_end,output,temp_temp);         
        }
    }
}


function valueNumOfList(list){
    if (strcmp(list, "[]")==0) {
        return 0;
    }
    
    if(find_not_in_string(list,"[")==-1 || find_not_in_string(list,"]")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred while calling function valueNumOfList\nInput |"+list+"| is not a list\n");
        exit(0);
    }
    if(count_str_not_in_string(list,"[")!=count_str_not_in_string(list,"]")){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred while calling function valueNumOfList\nInput |"+list+"| is not a list because the num of [ "+count_str_not_in_string(list,"[")+" and ] "+count_str_not_in_string(list,"]")+" is different\n");
        exit(0);  
    }
    
    
    list=removeBackSpace(list);
    list=removeAheadSpace(list);
    list=substr(list,1,list.length-1);
    var temp="";
    temp=",";
    temp+=list;
    temp+=",";
    list=temp;
    
    var begin=0;
    var just_begin=TRUE;
    var num=0;
    while (begin != -1) {
        if (just_begin == TRUE) {
            begin = -1;
            just_begin = FALSE;
        }
        begin = find_from_index_not_in_string(list, ",", begin + 1);
        if(begin==-1)
            break;
        if(begin!=0){
        var left_fangkuohaoshu = count_str(substr(list, 0, begin), "[");
        var right_fangkuohaoshu = count_str(substr(list, 0, begin), "]");
        while (left_fangkuohaoshu != right_fangkuohaoshu) {
            begin = find_from_index_not_in_string(list, ",", begin + 1);
            left_fangkuohaoshu = count_str(substr(list, 0, begin), "[");
            right_fangkuohaoshu = count_str(substr(list, 0, begin), "]");
                }
        }
        num+=1;
    }
    num-=1;
    return num;
}
/*format:    
a:[1,[1,2] ]:list:
#~Begin:a:
a[0]:1:list:
a[1]:[1,2]:list:
#~Begin:a[1]:
a[1][0]:1:int:
a[1][1]:2:int:
#~End:a[1]:
#~End:a:
*/
function ModifyVarValue(var_value){
    //printf("-->%s\n",var_value);
    // new code here on Jan 30
    // to change x=[1,2;3,4] to [[1,2],[3,4]]
    //    change x=[1;2;3] to [[1],[2],[3]]
    if (find_not_in_string(var_value, ";")==-1) {
        return var_value;
    }
    var i=0;
    var begin=0;
    var end=0;
    for (i = 0; i < var_value.length; i++) {
            
        if (charIsInString(var_value, i) == FALSE && var_value[i] == '[') {
            
            begin = i;
            end = find_from_index_not_in_string(var_value, "]", begin + 1);
            //if (end != -1) {
            var check = substr(var_value, begin, end + 1);
            //if(end!=-1){
            while (count_str_not_in_string(check, "[") != count_str_not_in_string(check, "]")) {
                end = find_from_index_not_in_string(var_value, "]", end + 1);
                check = substr(var_value, begin, end + 1);
            }
            //}
            var replace_str = substr(var_value, begin , end+1);
            if (stringIsEmpty(replace_str) == FALSE) {
                if (finishFindingVarAndFunction(replace_str) == FALSE && find_not_in_string(replace_str, ":")==-1) {//from x{i} get i
                    var with_str = ModifyVarValue(replace_str);
                    var_value = replace_from_index_to_index(var_value, replace_str, with_str, begin, end+1);
                }
            }
        }
    }
    
    
    var_value=replace_not_in_string(var_value, ";", "],[");
    // [1;2;3]---> [1],[2],[3]
    // [1,2;3]--->[1,2],[3]
    // [1,2,[1;2]]--->[1,2,[[1],[2]]]
    var_value=append("[", append(var_value, "]"));
    return var_value;
}


function formatStringForListInOrderToWtiteToVar(struct_var,var_name,var_value){
     
    var_value=ModifyVarValue(var_value);


    Var_addProperty(struct_var, var_name, var_value, "list");
    
    var i=0;
    var num_of_value=valueNumOfList(var_value);
    for(i=0;i<num_of_value;i++){
        //char number[500];
        //sprintf(number,""++"",i);
        var number=intToCString(i);
        
        var index_str="";
        index_str+="[";
        index_str+=number;
        index_str+="]";
        var var_value_from_list=valueOfListAtIndexString(var_value,index_str);
        var value_type=variableValueType(var_value_from_list);
        if(strcmp(value_type,"list")==0){
            var temp_var_name="";
            temp_var_name+=var_name;
            temp_var_name+="[";
            //char temp_str[5000]="";
            //sprintf(temp_str,""++"",i);
            var temp_str=intToCString(i);
            temp_var_name+=temp_str;
            temp_var_name+="]";
            formatStringForListInOrderToWtiteToVar(struct_var,temp_var_name,var_value_from_list);
        } else {
            var temp_var_name="";
            temp_var_name=var_name;
            temp_var_name+="[";
            //char temp_str[5000]="";
            //sprintf(temp_str,""++"",i);
            var temp_str=intToCString(i);
            temp_var_name+=temp_str;
            temp_var_name+="]";
                       
            Var_addProperty(struct_var, temp_var_name, var_value_from_list, value_type);
            
            
            
        }
        
    }
     
}

//######### Write List to Var using an appointed format.
function writeVarNameAndVarValueIntoAppointedVarForList(struct_var,var_name,var_value) {
    formatStringForListInOrderToWtiteToVar(struct_var, var_name, var_value);
}


//########## Use this function only when the same var name list exits ########
/*This function will change the whole value of the list*/
function changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, var_name, var_value){
    // printf("#### changeTheWholeVarValueFromItsInitialOneFromFileForList ####\n");
    
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
    //struct VAR temp_var[];
    var temp_var_name=append(var_name, "[");
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
    writeVarNameAndVarValueIntoAppointedVarForList(struct_var, var_name, var_value);
}

/*Change one var value
 eg put a[0] or a[0][0] into var_name
 * will change the value of a[0]
 */
function changeTheOneVarValueFromItsInitialOneFromVarForList(struct_var, change_var_name, to_var_value){
    //printf("###### changeTheOneVarValueFromItsInitialOneFromFileForList ######\n");
    change_var_name=removeBackSpace(change_var_name);
    change_var_name=removeAheadSpace(change_var_name);
    var var_name=substr(change_var_name,0,find_not_in_string(change_var_name,"["));
    var var_value;
    
    var index=substr(change_var_name,find_not_in_string(change_var_name,"["),change_var_name.length);
    index=removeBackSpace(index);
    // eg now index =[1][2][3];
    
    
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
        var var_name_in_file = struct_var[row].var_name;
        if(strcmp(var_name_in_file, var_name) == 0){
            var_value=struct_var[row].var_value;
            break;
        }
        row++;
    }
    
    //eg now index = [1][0]
    // var_value=[1,[2,3],3]
    var original_value=valueOfListAtIndexString(var_value,index);
    var begin_end=[0,0];
    begin_end[0]=0;
    begin_end[1]=0;

    valueOfListAtIndexStringAndReturnBeginAndEnd(begin_end,var_value,index);
    var begin=begin_end[0];
    var end=begin_end[1];
    
    var change_change=replace_from_index_to_index(var_value,original_value,to_var_value,begin,end+1);
    changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, var_name, change_change);
    
}

/*
 isListElement try to find out whether a[0] kind of var_name is existed in file in order to use function 
 * changeTheOneVarValueFromItsInitialOneFromFileForList
 * eg: isListElement("__walley__.wy","a[1]");
 */
function isListElementForVar(struct_var, var_name){
    if (find_not_in_string(var_name, "[")==-1) {
        return FALSE;
    }
    var list_var_name=substr(var_name,0,find_not_in_string(var_name,"["));//a[0]-->a
    list_var_name=removeAheadSpace(list_var_name);
    var find_var_name=FALSE;
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
    
    
    //while (struct_var[row].var_name!=NULL) {
    while (row<length) {
        var temp_var_name=struct_var[row].var_name;
        if(strcmp(temp_var_name,list_var_name)==0){
            find_var_name=TRUE;
            break;
        }
        row++;

    }
    
    return find_var_name;
}

/*
 * eg changeStringToList("'Hello'")------>['H','e','l','l','o']
 */
function changeStringToList(input_str){
    input_str=removeAheadSpace(removeBackSpace(input_str));
    if(strcmp(variableValueType(input_str),"string")!=0){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred while calling function changeStringToList\n|"+input_str+"| is not a string");
        exit(2);
    } else {
        var output="";
        output="[";
        input_str=substr(input_str,1,input_str.length-1);
        var i=0;
        for(i=0;i<input_str.length;i++){
            output+="'";
            output+=substr(input_str,i,i+1);
            output+="',";
        }
        var output2=output;
        if(find_not_in_string(output2,"[[")!=-1){
            output2=replace_not_in_string(output2,"[[","[");
        }
        if(find_not_in_string(output2,"]]")!=-1){
            output2=replace_not_in_string(output2,"]]","]");
        }
        return output2;
    }
}
/*
 * listAppendOneElement("[1,2,3]","4")---->"[1,2,3,4]"
 * ListAppendOneElement("[1,2,3]","[3,4]"------>[1,2,3,[3,4]]
 */
function listAppendOneElement(list, append_element){
   //// printf("#### listAppendOneElement ####\n");
    list=trim(list);
    list=substr(list,0,list.length-1);//[1,2]---->[1,2
    var output;
    output=append("", list);
    if(strcmp(list,"[")!=0){
        //strcat(output,",");//[1,2,
        output=append(output, ",");
    }
    //strcat(output,append_element); //[1,2,[3,4]
    output=append(output, append_element);
    //strcat(output,"]"); //[1,2,[3,4]]
    output=append(output,"]");
    return output;
}
/*
 * listRemoveOneElementAtOneIndex("[1,2,3]","1")----->[1,3]
 * listRemoveOneElementAtOneIndex("[1,[1,2],3]","1")----->[1,3]
 */


function listRemoveOneElementAtOneIndex(list, index){
    //printf("List is "+list+", index is "+index+"");
   
       
    index=trim(index);
    list=trim(list);
    if (index[0]=='['&&index[index.length-1]==']') {
        index=index;
    }
    else{
        index=append("[", index);
        index=append(index, "]");
    }
    

    var replace_str=valueOfListAtIndexString(list,index);
    

    var begin_end=[0,0];
    begin_end[0]=0;
    begin_end[1]=0;
    valueOfListAtIndexStringAndReturnBeginAndEnd(begin_end,list,index);
    
   
    var output;
    output=replace_from_index_to_index(list,replace_str,"",begin_end[0],begin_end[1]);
    if(find_not_in_string(output,",,")!=-1){
        output = replace_not_in_string(output,",,",",");
    }
    if(find_not_in_string(output,",]")!=-1){
        output= replace_not_in_string(output,",]","]");
    } 
    
    if(find_not_in_string(output,"[,")!=-1){
        output= replace_not_in_string(output,"[,","[");
    } 
    
    return output; 
}
/*
 * eg listRemoveOneElementByValue("[1,2,3]","1")---->"[2,3]"
 *    listRemoveOneElementByValue("[1,2,[1,3]]","1")----->[2,[1,3]]
 *    listRemoveOneElementByValue("[1,1,1,1]","1")  -----> [1,1,1]
 */
function listRemoveOneElementByValue(list, remove_value){
    list=substr(list, 1, list.length-1);
    var index=find_not_in_str_list_dict(list, remove_value);
    list=replace_from_index_to_index(list, remove_value, "", index, index+remove_value.length);
    list=append("[", list);
    list=append(list, "]");
    list=replace_not_in_string(list, ",,", ",");
    list=replace_not_in_string(list, "[,", "[");
    list=replace_not_in_string(list, ",]", "]");
    return list;
}