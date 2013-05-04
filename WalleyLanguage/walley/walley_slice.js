/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_slice.h
 * Author: shd101wyy
 *
 * Created on September 21, 2012, 4:03 PM
 */

//#include "walley_embed_function_library.h"

/*
 * x="Hello"
 * x[0,2]="Hel"   1
 * x[0,2)="He"    2
 * x(0,2]="el"    3
 * x(0,2)="e"     4
 * 
 */
/*
 * sliceIncludeBothSide("'hello'",0,2)--->"'hel'"
 */
function sliceIncludeBothSides(input_str, left, right){
   //// printf("#### sliceIncludeBothSides ####\n");
    //printf("|"+input_str+"|  |"+left+"|  |"+right+"|\n");
    input_str=trim(input_str);
    if(strcmp("string",variableValueType(input_str))==0){
        //printf("it is string\n");
        input_str=toCString(input_str);
        var output=substr(input_str,left,right+1);
        return toString(output);
    }
    else if(strcmp("list",variableValueType(input_str))==0){
        //printf("it is list\n");
        var output="";
        var i=left;

        output="[";
        for (i = left; i <= right; i++) {
            
            //char temp[100];
            //sprintf(temp, "%d", i);
            var temp=intToCString(i);
            
            var index_str =  "[";
            index_str+=temp;
            index_str+="]";
            //printf("->"++"\n", index_str);
            var value_at_index = valueOfListAtIndexString(input_str, index_str);
            output+=value_at_index;
            if (i != right) {
                output+=",";
            }
        }
        output+="]";
        var output2 = output;
        return output2;
    } else {
            printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function sliceIncludeBothSides\nOnly support list and string now");
        exit(0);
    }
}

function sliceNotIncludeBothSides(input_str, left, right) {
    return sliceIncludeBothSides(input_str, left + 1, right - 1);
}

function sliceOnlyIncludeLeftSide(input_str, left, right) {
    return sliceIncludeBothSides(input_str, left, right - 1);
}

function sliceOnlyIncludeRightSide(input_str, left, right) {
    return sliceIncludeBothSides(input_str, left + 1, right);
}

/*
 * slice("[1,2,3,4,5]","[1,2]")--->[2,3]
 */
function slice(input_str, slice) {
   //// printf("#### slice ####\n");
   //// printf("|"++"| \n|"++"|\n",input_str,slice);
    slice = trim(slice);
    var left = slice[0];
    var right = slice[slice.length - 1];
    var inside = substr(slice, 0 + 1, slice.length - 1);
    //printf("Inside "++"\n",inside);
    if (find_not_in_string(inside, ",") != -1) {
        var num1 = atoi(substr(slice, 1, find(slice, ",")));
        var num2 = atoi(substr(slice, find(slice, ",") + 1, right));
        //printf("num1 %d, num2 %d\n",num1,num2);
        if (left == '[' && right == ']') {
            return sliceIncludeBothSides(input_str, num1, num2);
        } else if (left == '[' && right == ')') {
            return sliceOnlyIncludeLeftSide(input_str, num1, num2);
        } else if (left == '(' && right == ')') {
            return sliceNotIncludeBothSides(input_str, num1, num2);
        } else if (left == '(' && right == ']') {
            return sliceOnlyIncludeRightSide(input_str, num1, num2);
        } else {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("Mistake occurred while calling function slice\nIt is not a slice");
            exit(0);
        }
    } else {
        //printf("here\n");
        var num = atoi(substr(slice, 1, right));
        if (strcmp("string", variableValueType(input_str)) == 0) {
            //printf("it is string\n");
            input_str = toCString(input_str);
            var output = substr(input_str, num, num + 1);
            return toString(output);
        } else if (strcmp("list", variableValueType(input_str)) == 0) {
            var output= "";
            
            //char temp[100];
            //sprintf(temp, "%d", num);
            var temp=intToCString(num);
            
            
            var index_str = "[";
            index_str+=temp;
            index_str+="]";
            
            var value_at_index = valueOfListAtIndexString(input_str, index_str);
            output+=value_at_index;


            //strcat(output, "]");
            var i = 0;
            var output2 = "";
            for (i = 0; i < output.length; i++) {
                output2[i] = output[i];
            }
            output2[output.length] = 0;
            return output2;

        }
        else{
                        printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("Mistake occurred while calling function slice\nIt is not a slice or value type wrong\n");
            exit(0);
        }
    }

}
/*
 * like python slice
 */
/*
function old_slice( input_str,  slice){
   //// printf("#### old_slice ####\n");
   //// printf("|"++"| \n|"++"|\n",input_str,slice);
    slice = trim(slice);
    //char left = slice[0];
    //char right = slice[slice.length - 1];
    var inside = substr(slice, 0 + 1, slice.length - 1);
    inside=trim(inside);
    //printf("Inside "++"\n",inside);
    //x[1:2]
    if (find_not_in_string(inside, ":") != -1) {
        var num1;
        var num2;
        if(inside[0]==':'&&inside[inside.length-1]==':'){
            return "None";
        }
        else if (inside[0]==':'&&inside[inside.length-1]!=':'){
            num1=0;
            //num2=atoi();
            //num1=Walley_Eval(num1);
            num2=atoi(Walley_Eval(substr(slice, find_not_in_string(slice, ":") + 1, slice.length-1)));
            return sliceOnlyIncludeLeftSide(input_str,num1,num2);
        }
        else if (inside[0]!=':'&&inside[inside.length-1]==':'){
            //var type=variableValueType(input_str);
            //num1=atoi(substr(slice, 1, find_not_in_string(slice, ":")));
            num1=atoi(Walley_Eval(substr(slice, 1, find_not_in_string(slice, ":"))));
            //num2=Walley_Eval(num2);
            if(strcmp(input_str,"list")==0){
                num2=valueNumOfList(input_str);
            }
            else if (strcmp(input_str,"string")==0){
                num2=toCString(input_str).length;
            }
            return sliceOnlyIncludeLeftSide(input_str, num1, num2);
        }
        else {
            //num1 = atoi(substr(slice, 1, find(slice, ":")));
            //num2 = atoi(substr(slice, find(slice, ":") + 1, right));
            num1=atoi(Walley_Eval(substr(slice, 1, find_not_in_string(slice, ":"))));
            num2=atoi(Walley_Eval(substr(slice, find_not_in_string(slice, ":") + 1, slice.length-1)));
            return sliceOnlyIncludeLeftSide(input_str, num1, num2);
        }


    } 
    // x[1,2]
    else if (find_not_in_string(inside, ",") != -1) {
        var num1;
        var num2;
        if(inside[0]==','&&inside[inside.length-1]==','){
            return "None";
        }
        else if (inside[0]==','&&inside[inside.length-1]!=','){
            num1=0;
            //num2=atoi(substr(slice, find(slice, ",") + 1, right));
            //num1=Walley_Eval(num1);
            num2=atoi(Walley_Eval(substr(slice, find_not_in_string(slice, ",") + 1, slice.length-1)));
            return sliceOnlyIncludeLeftSide(input_str,num1,num2);
        }
        else if (inside[0]!=','&&inside[inside.length-1]==','){
            var type=variableValueType(input_str);
            //num1=atoi(substr(slice, 1, find(slice, ",")));
            if(strcmp(type,"list")==0){
                num2=valueNumOfList(input_str);
            }
            else if (strcmp(input_str,"string")==0){
                num2=toCString(input_str).length;
            }
            num1=atoi(Walley_Eval(substr(slice, 1, find_not_in_string(slice, ","))));
            //num2=Walley_Eval(num2);
            return sliceOnlyIncludeLeftSide(input_str, num1, num2);
        }
        else {
            //num1 = atoi(substr(slice, 1, find(slice, ",")));
            //num2 = atoi(substr(slice, find(slice, ",") + 1, right));
            num1=atoi(Walley_Eval(substr(slice, 1, find_not_in_string(slice, ","))));
            num2=atoi(Walley_Eval(substr(slice, find_not_in_string(slice, ",") + 1, slice.length-1)));
            return sliceOnlyIncludeLeftSide(input_str, num1, num2);
        }


    } 
    //x[0]
    else {
        //printf("here\n");
        var num_str = substr(slice, 1, slice.length-1);
        //printf("num_str "++"\n",num_str);
        var num=atoi(Walley_Eval(num_str));
            
        if (strcmp("string", variableValueType(input_str)) == 0) {
           //// printf("it is string\n");
           //// printf("num is %d\n",num);
            input_str = toCString(input_str);
            var output = substr(input_str, num, num + 1);
           //// printf("return is "++"\n",toString(output));
            return toString(output);
        } else if (strcmp("list", variableValueType(input_str)) == 0) {
           //// printf("it is list\n");
            var output = "";
            
            var value_at_index = valueOfListAtIndexString(input_str, slice);
            output+=value_at_index;


            //strcat(output, "]");
            var i = 0;
            var output2 = output;
            return output2;

        }
        else{
            printf("Mistake occurred while calling function slice\nIt is not a slice or value type wrong\n");
            printf("If you want use dictionary, please try x{'a'} like expression\n");
            exit(0);
        }
    }    
}*/