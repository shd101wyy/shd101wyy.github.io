/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/*
 * File:   walley_operator.h
 * Author: shd101wyy
 *
 * Created on August 26, 2012, 1:40 AM
 */
//#include "walley_settings.h"
//#include <stdio.h>

// 1.00000-->1
//13.00->13
//14--->14
function cleanDotZeroAfterNum(num){
    if (find(num,".")==-1) {
        return num;
    }
    else{
        var length=num.length;
        var i=length-1;
        var zero_that_need_to_delete=0;
        for (; i>=0; i--) {
            if (num[i]=='0') {
                zero_that_need_to_delete++;
                continue;
            }
            if (num[i]!='0'||num[i]=='.') {
                break;
            }
        }
        if(zero_that_need_to_delete!=0){
            num=substr(num, 0, length-zero_that_need_to_delete);
        }
        if (num[num.length-1]=='.') {
            num=substr(num, 0, num.length-1);
        }
        return num;
    }
}

function isSign(sign){
    var is_sign=FALSE;
    if(sign=='+'||
       sign=='-'||
       sign=='*'||
       sign=='/'||
       sign=='\\'||
       sign=='%'||
       sign=='^')
        is_sign=TRUE;
    return is_sign;
}

function isJudgeSign(sign){
    var is_sign=FALSE;
    if(sign=='='||
       sign=='>'||
       sign=='<'||
       sign=='!'){
        is_sign=TRUE;
    }
    return is_sign;
}
function isFirstOrderSign(sign){
    var is_first_order_sign=FALSE;
    if(
       sign=='*'||
       sign=='/'||
       sign=='\\'||
       sign=='%'||
       sign=='^')
        is_first_order_sign=TRUE;
    return is_first_order_sign;
    
}

function judge(p, q, condition){
    //printf("#### Judge ####\n");
    //printf("P is "++", Q is "++"\n",p,q);
    var output=FALSE;
    if(condition=="and"){
        /*  P Q C
         *  1 1 1
         *  1 0 0
         *  0 1 0
         *  0 0 0
         */
        //printf("And\n");
        if(p==TRUE && q==TRUE){
            //printf("1\n");
            output=TRUE;
        }
        else if (p==TRUE && q==FALSE){
            //printf("2\n");
            output=FALSE;
        }
        else if (p==FALSE && q==TRUE){
            //printf("3\n");
            output=FALSE;
        }
        else{
            //printf("4\n");
            output=FALSE;
        }
        
    } else if (condition=="or"){
        /* P Q C
         * 1 0 1
         * 1 1 1
         * 0 1 1
         * 0 0 0
         */
        //printf("Or\n");
        if(p==TRUE && q==TRUE)
            output=TRUE;
        else if (p==TRUE && q==FALSE)
            output=TRUE;
        else if (p==FALSE && q==TRUE)
            output=TRUE;
        else
            output=FALSE;
    } else {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function Judge\nP is "+p+", Q is "+q+", condition is "+condition+"\n");
    }
    //printf("Output---->"++"\n",output);
    return output;
}

function hasSign(input_str){
    var has_sign=FALSE;
    var i=0;
    for(;i<input_str.length;i++){
        if(input_str[i]=='*'||input_str[i]=='/'||input_str[i]=='\\'||input_str[i]=='^'||input_str[i]=='%'||input_str[i]=='+'||input_str[i]=='-'){
            has_sign=TRUE;
        }
    }
    return has_sign;
}

// Did not consider when sign is in string
function hasJudgeSign(input_str){
    var has_sign=FALSE;
    if(find(input_str,"==")!=-1)
        has_sign=TRUE;
    else if(find(input_str,"!=")!=-1)
        has_sign=TRUE;
    else if(find(input_str,">")!=-1)
        has_sign=TRUE;
    else if(find(input_str,"<")!=-1)
        has_sign=TRUE;
    else if(find(input_str,">=")!=-1)
        has_sign=TRUE;
    else if(find(input_str,"<=")!=-1)
        has_sign=TRUE;
    return has_sign;
}

function indexOfJudgeSignFromIndex(input_str,from_index){
    input_str=substr(input_str,from_index,input_str.length);
    var index=-1;
    if(find(input_str,"==")!=-1)
        index=find(input_str,"=");
    else if(find(input_str,"!=")!=-1)
        index=find(input_str,"!=");
    else if(find(input_str,">")!=-1)
        index=find(input_str,">");
    else if(find(input_str,"<")!=-1)
        index=find(input_str,"<");
    else if(find(input_str,">=")!=-1)
        index=find(input_str,">=");
    else if(find(input_str,"<=")!=-1)
        index=find(input_str,"<=");
    else
        index=-1;
    return index;
    
    
}



//check whether * / \ ^ % is in input_str
function hasFirstOrderSignExist(input_str){
    var has_sign=FALSE;
    var i=0;
    for(;i<input_str.length;i++){
        if(input_str[i]=='*'||input_str[i]=='/'||input_str[i]=='\\'||input_str[i]=='^'||input_str[i]=='%'){
            has_sign=TRUE;
        }
    }
    return has_sign;
}

function Walley_Operator(num1,num2,sign){
    var output=0;
    if (sign == '*') {
        output = num1*num2;
    } else if (sign == '/') {
        output = num1 / num2;
    } else if (sign == '\\') {
        output = num2 / num1;
    } else if (sign == '%'){
        output=parseInt(num1)%parseInt(num2);
    } else if (sign == '^'){
        output=Math.pow(num1,num2);
    } else if (sign == '+') {
        output = num1 + num2;
    } else if (sign == '-') {
        output = num1-num2;
    } else {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake Occurred while calling function Walley_Operator");
        output=0;
    }
    return output;
}


// javascript : math_eval begin to use javascript default math_eval function
/*
var math_eval(var input_str){
    //printf("#### math_eval ####\ninput_str "++"\n",input_str);
    
    input_str=trim(input_str);
    input_str=eval_CalculatePowerAtFirst(input_str);
    int count_of_left_bracket=count_str(input_str,"(");
    int count_of_right_bracket=count_str(input_str,")");
    
    //var output;
    if(count_of_left_bracket!=count_of_right_bracket){
        printf("Mistakes occurred while calling function math_eval:\nnum of ( != num of )");
        exit(1);
    }
    while(count_str(input_str,"(")!=0){
        int index_of_final_left_bracket=find(input_str, "(");
        int index_of_first_right_bracket=find(input_str, ")");
        while (TRUE) {
            
            int temp=find_from_index(input_str, "(", index_of_final_left_bracket+1);
            if (temp==-1 || temp>index_of_first_right_bracket) {
                break;
            }
            else {
                index_of_final_left_bracket=temp;
            }
            
        }
        var temp=substr(input_str,0,index_of_final_left_bracket);
        var part_output=eval_simple_str(substr(input_str,index_of_final_left_bracket+1,index_of_first_right_bracket));
        temp=append(temp,part_output);
        temp=append(temp,substr(input_str,index_of_first_right_bracket+1,input_str.length));
        input_str=temp;
    }
    input_str=eval_simple_str(substr(input_str,0,input_str.length));
    
    
    // Delete 0 after
    int a=input_str.length-1;
    int place=input_str.length;
    if (find(input_str, ".") != -1) {
        for (; a >= 0; a--) {
            if (input_str[a] == '0')
                place--;
            else
                break;
        }
    }
    if(place!=input_str.length)
        input_str=substr(input_str,0,place);
    if(input_str[input_str.length-1]=='.')
        input_str=substr(input_str,0,input_str.length-1);
    return input_str;
}
*/

// will javascript math_eval does not allow undefined var. So I begin to use my own math_eval.
// Attention, all math_eval function in javascript version is changed to be math_eval

function  countFromExpression(var_value) {
    
    if (hasSign(var_value) == FALSE){
        //printf("$$$$$$ %s\n",var_value);
        return var_value;
    }
    else {
        
        if (var_value[0]!='0') {
            if (var_value[0]=='-') {
                var_value=append("0",var_value);
            }else{
                var_value=append("0+", var_value);
            }
            var_value=append(var_value, "+0");
        }
        
        
        var output;
        
        var my_output_str="";
        
        var input = var_value;
        //char sign;
        
        var i = 0;
        var j = 0;
        var temp = 0;
        
        var num1;
        var num2;
        var previous_num;
        var begin = FALSE;
        
        var num1_str;
        var num2_str;
        
        //printf("input %s\n",input);
        
        for (; i < strlen(input); i++) {
            if (isSign(input[i]) == TRUE) {
                num1_str = substr(input, temp, i);
                //printf("sign %c\n",input[i]);
                //printf("num1_str %s\n",num1_str);
                j = i + 1;
                var final_place=0; // for a+b+4--->final_place=3
                for (; j < input.length; j++) {
                    if (input[i]=='+'&&input[i+1]=='+') {
                        num2_str="1";
                        i++;
                        break;
                    }
                    if (input[i]=='-'&&input[i+1]=='-') {
                        num2_str="1";
                        i++;
                        break;
                    }
                    
                    if (isSign(input[j]) == TRUE) {
                        num2_str = substr(input, i + 1, j);
                        final_place=j;
                        break;
                    }
                    if (j == input.length - 1) {
                        num2_str = substr(input, i + 1, j + 1);
                        final_place=j+1;
                        break;
                    }
                }
                //temp=i;
                //printf("/n Begin %d\n",begin);
                //printf("num1_str %s, num2_str %s, previous_num %s\n",num1_str,num2_str,numToCString(previous_num));
                //printf("my_output_str %s\n",my_output_str);
                
                num1 = atof(num1_str);
                num2 = atof(num2_str);
                //printf("num1 %f, num2 %f, input[i] %c\n",num1,num2,input[i]);
                if (begin == FALSE) {
                    //####################################################
                    // I plan to add new code here\n
                    
                    if(stringIsAlpha(num1_str)){
                        // a+b+3+4
                        if (stringIsAlpha(num2_str)) {
                            my_output_str=append(my_output_str, substr(input, 0, final_place));
                            previous_num=0;
                            output=previous_num;
                            begin=TRUE;
                        }
                        // a+3+4
                        else{
                            my_output_str=append(my_output_str, substr(input, 0, i+1)); // get a+
                            previous_num=num2;
                            output=previous_num;
                            if (input[i]=='-') {
                                previous_num=-previous_num;
                                output=previous_num;
                            }
                            begin=TRUE;
                        }
                    }
                    // num1 is not string while num2 is . like   3+a+4+5
                    else if (stringIsAlpha(num2_str)){
                        my_output_str=append(my_output_str, substr(input, i, final_place));  // get +a
                        previous_num=num1;
                        output=previous_num;
                        begin=TRUE;
                    }
                    
                    else{
                        
                        
                        //#####################################################
                        
                        
                        previous_num = Walley_Operator(num1, num2, input[i]);
                        output = previous_num;
                        begin = TRUE;
                        
                        //my_output_str=append(my_output_str, "+");
                        //my_output_str=append(my_output_str, numToCString(output));
                        
                    }
                }
                // Begin =TRUE
                else {
                    
                    // I add new code here to solve a+3+5 like problem
                    //#####################################################
                    // 3+4+a+5-->7+a+5
                    if (stringIsAlpha(num2_str)) {
                        my_output_str=append(my_output_str, substr(input, i, final_place)); // get +a
                        //previous_num=num1;
                        output=previous_num;
                    }
                    else{
                        //####################################################
                        
                        previous_num = Walley_Operator(previous_num, num2, input[i]);
                        output = previous_num;
                        
                    }
                }
            }
        }
        
        //printf("END %s\n",my_output_str);
        var temp_output=numToCString(output);
        if (temp_output[0]=='-') {
            my_output_str=append(my_output_str, temp_output);
            
        }
        else{
            my_output_str=append(my_output_str, "+");
            my_output_str=append(my_output_str, temp_output);
            
        }
        my_output_str=cleanDotZeroAfterNum(my_output_str);
        //printf("my_output_str is |%s|\n",my_output_str);
        if (my_output_str[0]=='+') {
            my_output_str=substr(my_output_str, 1, my_output_str.length);
        }
        return my_output_str;
        /*
         //printf("%f\n", output);
         char output_str[1000];
         sprintf(output_str, "%f", output);
         //printf("$$$$$$ %s\n",var_value);
         //var output_temp=malloc(sizeof(char)*(int)strlen(output_str));
         //strcat(output,output_str);
         //return output_temp;
         var output_output=malloc(sizeof(char)*(int)strlen(output_str));
         int a=0;
         for(a=0;a<(int)strlen(output_str);a++){
         output_output[a]=output_str[a];
         }
         
         //return (var )output_str;
         return output_output;*/
    }
}



function countFirstOrderSignAndChangeTheStrOnlyOnce(input_str){
    var i=0;
    var j=0;
    var begin_of_first_num=0;
    var end_of_second_num=input_str.length-1;
    var place_of_first_order_sign;
    
    var num1_str;
    var num2_str;
    
    
    
    for(;i<input_str.length;i++){
        if(isdigit(input_str[i])==TRUE){
            continue;
        }
        
        if(input_str[i]=='+'||input_str[i]=='-'){
            begin_of_first_num=i+1;
        }
        
        if(isFirstOrderSign(input_str[i])==TRUE) {
            j = i + 1;
            place_of_first_order_sign=i;
            
            for (; j < input_str.length; j++) {
                // I just change this code here 9/17/2012
                if (isSign(input_str[j]) == TRUE && j!=i+1) {
                    end_of_second_num=j-1;
                    break;
                }
                if (j == input_str.length - 1) {
                    end_of_second_num=j;
                    break;
                }
            }
            
            //printf("input_str is:%s\n",input_str);
            //printf("begin of num1 is %d\n",begin_of_first_num);
            //printf("end of num2 is %d\n",end_of_second_num);
            
            num1_str=substr(input_str,begin_of_first_num,place_of_first_order_sign);
            num2_str=substr(input_str,place_of_first_order_sign+1,end_of_second_num+1);
            //printf("input_str is:%s\n",input_str);
            //printf("num1 is %f\nnum2 is %f\n",atof(num1_str),atof(num2_str));
            
            
            
            var output=Walley_Operator(atof(num1_str),atof(num2_str),input_str[i]);
            var output_str="";
            output_str=numToCString(output);
            //printf("input_str is:%s\n",input_str);
            //printf("output_str is %s\n",output_str);
            var output_temp="";
            //printf("input_str is:%s\n",input_str);
            //printf("input_str is:%s\n",input_str);
            if(begin_of_first_num==0){
                output_temp+=output_str;
                if(end_of_second_num!=input_str.length-1){
                    output_temp+=substr(input_str,end_of_second_num+1,input_str.length);
                }
            }  else  {
                //printf("else\n");
                //printf("input_str :%s",input_str);
                //printf("substr :%s\n",substr(input_str,0,begin_of_first_num));
                output_temp+=substr(input_str,0,begin_of_first_num);
                if(end_of_second_num==input_str.length-1)
                    output_temp+=output_str;
                else{
                    //printf("enter here\n");
                    output_temp+=output_str;
                    output_temp+=substr(input_str,end_of_second_num+1,input_str.length);
                }
            }
            input_str=output_temp;
            break;
        }
    }
    
    //printf("The changed str is %s\n\n\n\n",input_str);
    return input_str;
}

// calculate outside parenthesis
function eval_simple_str(input_str){
    while(hasFirstOrderSignExist(input_str)==TRUE){
        input_str=countFirstOrderSignAndChangeTheStrOnlyOnce(input_str);
    }
    return countFromExpression(input_str);
}



function eval_CalculatePowerAtFirst(input_str){
    var count_of_power=count_str(input_str, "^");
    var i=0;
    for (i=0; i<count_of_power; i++) {
        //printf("enter\n");
        var index_of_power=find(input_str, "^");
        // 2^3 (2)^3 2^(3) (2)^(3)
        var left=0;
        var right=0;
        
        
        // Find Left.
        //(2)^3
        if (input_str[index_of_power-1]==')') {
            var num_of_right=0;
            var num_of_left=0;
            var j=index_of_power-1;
            for (j=index_of_power-1; j>=0; j--) {
                if (input_str[j]==')') {
                    num_of_right++;
                    continue;
                }
                if (input_str[j]=='(') {
                    num_of_left++;
                    if (num_of_left==num_of_right) {
                        left=j;
                        break;
                    }
                    else
                        continue;
                }
            }
            
        }
        //2^3
        else{
            var j=index_of_power-1;
            for (j=index_of_power-1; j>=0; j--) {
                if (isdigit(input_str[j])==FALSE) {
                    left=j+1;
                    break;
                }
                if (j==0) {
                    left=0;
                    break;
                }
            }
            
        }
        
        //2^(3)
        if (input_str[index_of_power+1]=='(') {
            var num_of_left=0;
            var num_of_right=0;
            var j=index_of_power+1;
            for (; j<input_str.length; j++) {
                if (input_str[j]=='(') {
                    num_of_left++;
                    continue;
                }
                if (input_str[j]==')') {
                    num_of_right++;
                    if (num_of_left==num_of_right) {
                        right=j;
                        break;
                    }
                    else
                        continue;
                }
            }
        }
        //2^2
        else{
            var j=index_of_power+1;
            for (j=index_of_power+1; j<input_str.length; j++) {
                if (isdigit(input_str[j])==FALSE) {
                    right=j-1;
                    break;
                }
                if(j==input_str.length-1){
                    right=input_str.length-1;
                    break;
                }
            }
            
        }
        var replace_str=substr(input_str, left, right+1);
        var left_str=substr(input_str, left, index_of_power);
        var right_str=substr(input_str, index_of_power+1, right+1);
        
        
        left_str=math_eval(left_str);
        right_str=math_eval(right_str);
        var with_str=numToCString(pow(atof(left_str), atof(right_str)));
        with_str=cleanDotZeroAfterNum(with_str);
        input_str=replace_from_index_to_index(input_str, replace_str, with_str, left, right+1);
        
        
    }
    return input_str;
}


// calculate include parenthesis
// This function has some problems now.
// It does not calculate ^ at first
// 2*3^2 should be 18 while it while be 6^2=36..
// I will modify later.
// finish modifying
function math_eval(input_str){
    //printf("#### math_eval ####\ninput_str %s\n",input_str);
    
    input_str=trim(input_str);
    input_str=eval_CalculatePowerAtFirst(input_str);
    var count_of_left_bracket=count_str(input_str,"(");
    var count_of_right_bracket=count_str(input_str,")");
    
    //var output;
    if(count_of_left_bracket!=count_of_right_bracket){
        printf("Mistakes occurred while calling function math_eval:\nnum of ( != num of )");
        exit(1);
    }
    while(count_str(input_str,"(")!=0){
        var index_of_final_left_bracket=find(input_str, "(");
        var index_of_first_right_bracket=find(input_str, ")");
        while (TRUE) {
            
            var temp=find_from_index(input_str, "(", index_of_final_left_bracket+1);
            if (temp==-1 || temp>index_of_first_right_bracket) {
                break;
            }
            else {
                index_of_final_left_bracket=temp;
            }
            
        }
        var temp=substr(input_str,0,index_of_final_left_bracket);
        var part_output=eval_simple_str(substr(input_str,index_of_final_left_bracket+1,index_of_first_right_bracket));
        temp=append(temp,part_output);
        temp=append(temp,substr(input_str,index_of_first_right_bracket+1,input_str.length));
        input_str=temp;
    }
    input_str=eval_simple_str(substr(input_str,0,input_str.length));
    
    
    // Delete 0 after
    var a=input_str.length-1;
    var place=input_str.length;
    if (find(input_str, ".") != -1) {
        for (; a >= 0; a--) {
            if (input_str[a] == '0')
                place--;
            else
                break;
        }
    }
    if(place!=input_str.length)
        input_str=substr(input_str,0,place);
    if(input_str[input_str.length-1]=='.')
        input_str=substr(input_str,0,input_str.length-1);
    return input_str;
}




function eval_CalculatePowerAtFirst_with_alpha(input_str){
    var count_of_power=count_str(input_str, "^");
    var i=0;
    for (i=0; i<count_of_power; i++) {
        //printf("enter\n");
        var index_of_power=find(input_str, "^");
        // 2^3 (2)^3 2^(3) (2)^(3)
        var left=0;
        var right=0;
        
        
        // Find Left.
        //(2)^3
        if (input_str[index_of_power-1]==')') {
            var num_of_right=0;
            var num_of_left=0;
            var j=index_of_power-1;
            for (j=index_of_power-1; j>=0; j--) {
                if (input_str[j]==')') {
                    num_of_right++;
                    continue;
                }
                if (input_str[j]=='(') {
                    num_of_left++;
                    if (num_of_left==num_of_right) {
                        left=j;
                        break;
                    }
                    else
                        continue;
                }
            }
            
        }
        //2^3
        else{
            var j=index_of_power-1;
            for (j=index_of_power-1; j>=0; j--) {
                if (isdigit(input_str[j])==FALSE&&isalpha(input_str[j])==FALSE&&input_str[j]!='_') {
                    left=j+1;
                    break;
                }
                if (j==0) {
                    left=0;
                    break;
                }
            }
            
        }
        
        //2^(3)
        if (input_str[index_of_power+1]=='(') {
            var num_of_left=0;
            var num_of_right=0;
            var j=index_of_power+1;
            for (; j<input_str.length; j++) {
                if (input_str[j]=='(') {
                    num_of_left++;
                    continue;
                }
                if (input_str[j]==')') {
                    num_of_right++;
                    if (num_of_left==num_of_right) {
                        right=j;
                        break;
                    }
                    else
                        continue;
                }
            }
        }
        //2^2
        else{
            var j=index_of_power+1;
            for (j=index_of_power+1; j<input_str.length; j++) {
                if (isdigit(input_str[j])==FALSE&&isalpha(input_str[j])==FALSE&&input_str[j]!='_') {
                    right=j-1;
                    break;
                }
                if(j==input_str.length-1){
                    right=input_str.length-1;
                    break;
                }
            }
            
        }
        var replace_str=substr(input_str, left, right+1);
        var left_str=substr(input_str, left, index_of_power);
        var right_str=substr(input_str, index_of_power+1, right+1);
        
        left_str=eval_for_decimal_with_alpha(left_str);
        right_str=eval_for_decimal_with_alpha(right_str);
        var with_str="";//numToCString(pow(atof(left_str), atof(right_str)));
        // 3^4
        if (stringIsDigit(left_str)&&stringIsDigit(right_str)) {
            with_str=numToCString(Math.pow(atof(left_str), atof(right_str)));
            with_str=cleanDotZeroAfterNum(with_str);
        }
        else{
            with_str=append("(", append(left_str, ")^("));
            with_str=append(with_str, append(right_str, ")"));
        }
        input_str=replace_from_index_to_index(input_str, replace_str, with_str, left, right+1);
        
        
    }
    return input_str;
}


function changeOperatorToStr(sign){
    if (sign=='+') {
        return "#add#";
    }
    else if(sign=='-'){
        return "#minus#";
    }
    else if(sign=='*'){
        return "#time#";
    }
    else if(sign=='/'){
        return "#divide#";
    }
    else if(sign=='^'){
        return "#power#";
    }
    else if(sign=='%'){
        return "#percent#";
    }
    else{
        printf("Mistake occurred while calling function changeOperatorToStr\n%c is not sign\n",sign);
        exit(0);
    }
}
function changeOperatorToStrForWhoStr(input_str){
    var i=0;
    var output="";
    for (; i<input_str.length; i++) {
        if (isSign(input_str[i])) {
            output=append(output, changeOperatorToStr(input_str[i]));
        }
        else{
            output=append(output, charToString(input_str[i]));
        }
    }
    return output;
}
function changeOperatorStrToOriginalForWhoStr(input_str){
    input_str=replace(input_str, "#add#", "+");
    input_str=replace(input_str, "#minus#", "-");
    input_str=replace(input_str, "#time#", "*");
    input_str=replace(input_str, "#divide#", "/");
    input_str=replace(input_str, "#power#", "^");
    input_str=replace(input_str, "#percent#", "%");
    return input_str;
}

//calculate 9/2/4--->9/8
function calculate_for_division_for_decimal(input_str){
    var temp_input_str=changeOperatorStrToOriginalForWhoStr(input_str);
    if (stringIsDigit(temp_input_str)||stringIsFraction(temp_input_str)) {
        return input_str;
    }
    else{
        if (find(temp_input_str, "+")==-1&&find(temp_input_str, "-")==-1&&find(temp_input_str, "*")==-1&&find(temp_input_str, "^")==-1&&find(temp_input_str, "%")==-1) {
            //int num_of_division=count_str(temp_input_str, "/");
            var index_of_temp_input_str=find(temp_input_str, "/");
            var numerator=substr(temp_input_str, 0, index_of_temp_input_str);
            //int first=index_of_temp_input_str;
            var denominator=substr(temp_input_str, index_of_temp_input_str+1, temp_input_str.length);
            denominator=replace(denominator, "#LEFT#","");
            denominator=replace(denominator, "#RIGHT#", "");
            denominator=replace(denominator, "/", "*");
            denominator=eval_for_decimal_with_alpha(denominator);
            denominator=append("#LEFT#", append(denominator, "#RIGHT#"));
            var output=append(numerator, append("/", denominator));
            return changeOperatorToStrForWhoStr(output);
        }
        else{
            var index_of_temp_input_str=find(temp_input_str, "/");
            if (index_of_temp_input_str==-1) {
                return input_str;
            }
            else{
                var numerator=substr(temp_input_str, 0, index_of_temp_input_str);
                //int first=index_of_temp_input_str;
                var denominator=substr(temp_input_str, index_of_temp_input_str+1, temp_input_str.length);
                denominator=replace(denominator, "#LEFT#","");
                denominator=replace(denominator, "#RIGHT#", "");
                denominator=replace(denominator, "/", "*");
                denominator=eval_for_decimal_with_alpha(denominator);
                
                if (stringHasAlpha(denominator)==FALSE&&isdigit(numerator[0])) { // 6*x*x/8
                    var numerator_num=substr(temp_input_str, 0, find(temp_input_str, "*")); //6
                    var rest=substr(temp_input_str, find(temp_input_str, "*"),index_of_temp_input_str);//*x*x
                    var simplified=math_eval(append(numerator_num, append("/", denominator)));
                    var output=append(simplified, rest);
                    return changeOperatorToStrForWhoStr(output);
                    
                }
                else{
                    denominator=append("#LEFT#", append(denominator, "#RIGHT#"));
                    
                    var output=append(numerator, append("/", denominator));
                    return changeOperatorToStrForWhoStr(output);
                }
            }
        }
    }
}
// it does not support + and - now
function Walley_Operator_with_alpha(num1_str,num2_str,sign){
    // after running codes..
    // it may have input_str like
    // x#time#3#time#y#divide#4
    
    // or
    // if has alpha like 3*x, then return 3#time#x
    var output_output="";
    
    var num1_is_digit=stringIsDigit(num1_str);
    var num2_is_digit=stringIsDigit(num2_str);
    if (num1_is_digit==TRUE&&num2_is_digit==TRUE) {
        //return cleanDotZeroAfterNum(numToCString(Walley_Operator(atof(num1_str), atof(num2_str), sign)));
        output_output=cleanDotZeroAfterNum(numToCString(Walley_Operator(atof(num1_str), atof(num2_str), sign)));
    }
    else{
        if (find(num1_str, "#")==-1) {
            var output;
            //always put number ahead...
            //3*x
            if (num1_is_digit==TRUE && num2_is_digit==FALSE) {
                output=append(num1_str, changeOperatorToStr(sign));
                output=append(output, num2_str);
            }
            //x*3
            else if(num1_is_digit==FALSE && num2_is_digit==TRUE){
                if (sign!='^'&&sign!='/') {
                    output=append(num2_str, changeOperatorToStr(sign));
                    output=append(output, num1_str);
                }
                else{
                    output=append(num1_str, changeOperatorToStr(sign));
                    output=append(output, num2_str);
                    
                }
            }
            //x*y
            else{
                output=append(num1_str, changeOperatorToStr(sign));
                output=append(output, num2_str);
                
            }
            //return output;
            output_output=output;
        }
        // x#time#3#time#y/4
        else{
            // num1_str 3#time#x ; num2 x or 3 ; sign *
            if (isdigit(num1_str[0])) {
                if (num2_is_digit) {
                    var index=find(num1_str, "#");
                    var num=substr(num1_str, 0, index);
                    var replace_str=num;
                    var with_str=Walley_Operator_with_alpha(num, num2_str, sign);
                    //return replace_from_index_to_index(num1_str, replace_str, with_str, 0, index+1);
                    output_output=replace_from_index_to_index(num1_str, replace_str, with_str, 0, index+1);;
                }
                else{
                    var output=append(num1_str, changeOperatorToStr(sign));
                    output=append(output, num2_str);
                    //return output;
                    output_output=output;
                }
                
            }
            else{
                if (num2_is_digit) {
                    if (sign!='^'&&sign!='/') {
                        var output=append(num2_str, changeOperatorToStr(sign));
                        output=append(output, num1_str);
                        //return output;
                        output_output=output;
                    }
                    else{
                        var output=append(num1_str, changeOperatorToStr(sign));
                        output=append(output, num2_str);
                        //return output;
                        output_output=output;
                    }
                }
                else{
                    var index=find(num1_str, "#");
                    var num=substr(num1_str, 0, index);
                    if (num==num2_str) {
                        //return replace_from_index_to_index(num1_str, num, "1", 0, index+1);
                        if (sign=='/') {
                            output_output=replace_from_index_to_index(num1_str, num, "1", 0, index+1);
                        }
                        if (sign=='*') {
                            output_output=replace_from_index_to_index(num1_str, num, append(num, append("#time#",num)), 0, index+1);
                            
                        }
                    }
                    else{
                        
                        var output=append(num1_str, changeOperatorToStr(sign));
                        output=append(output, num2_str);
                        //return output;
                        output_output=output;
                    }
                }
            }
            
        }
    }
    if (sign=='/') {
        output_output=calculate_for_division_for_decimal(output_output);
    }
    return output_output;
    
}

function countFirstOrderSignAndChangeTheStrOnlyOnce_with_alpha(input_str){
    var i=0;
    var j=0;
    var begin_of_first_num=0;
    var end_of_second_num=input_str.length-1;
    var place_of_first_order_sign;
    
    var num1_str;
    var num2_str;
    
    for(;i<input_str.length;i++){
        if(isdigit(input_str[i])==TRUE){
            continue;
        }
        
        if(input_str[i]=='+'||input_str[i]=='-'){
            begin_of_first_num=i+1;
        }
        
        if(isFirstOrderSign(input_str[i])==TRUE) {
            j = i + 1;
            place_of_first_order_sign=i;
            
            for (; j < input_str.length; j++) {
                // I just change this code here 9/17/2012
                if (isSign(input_str[j]) == TRUE && j!=i+1) {
                    end_of_second_num=j-1;
                    break;
                }
                if (j == input_str.length - 1) {
                    end_of_second_num=j;
                    break;
                }
            }
            num1_str=substr(input_str,begin_of_first_num,place_of_first_order_sign);
            num2_str=substr(input_str,place_of_first_order_sign+1,end_of_second_num+1);
            
            
            var output_str=Walley_Operator_with_alpha(num1_str,num2_str,input_str[i]);
            
            var output_temp="";
            
            if(begin_of_first_num==0){
                output_temp+=output_str;
                if(end_of_second_num!=input_str.length-1){
                    output_temp+=substr(input_str,end_of_second_num+1,input_str.length);
                }
            }  else  {
                output_temp+=substr(input_str,0,begin_of_first_num);
                if(end_of_second_num==input_str.length-1)
                    output_temp+=output_str;
                else{
                    output_temp+=output_str;
                    output_temp+=substr(input_str,end_of_second_num+1,input_str.length);
                }
            }
            input_str=output_temp;
            break;
        }
    }
    
    return input_str;
}

function countFromExpression_with_alpha(var_value) {
    
    if (hasSign(var_value) == FALSE){
        //printf("$$$$$$ "++"\n",var_value);
        return var_value;
    }
    else {
        
        if (var_value[0]!='0') {
            if (var_value[0]=='-') {
                var_value=append("0",var_value);
            }else{
                var_value=append("0+", var_value);
            }
            var_value=append(var_value, "+0");
        }
        
        
        var output;
        
        var my_output_str="";
        
        var input = var_value;
        //char sign;
        
        var i = 0;
        var j = 0;
        var temp = 0;
        
        var num1;
        var num2;
        var previous_num;
        var begin = FALSE;
        
        var num1_str;
        var num2_str;
        
        for (; i < input.length; i++) {
            if (isSign(input[i]) == TRUE) {
                num1_str = substr(input, temp, i);
                //printf("sign %c\n",input[i]);
                //printf("num1_str "++"\n",num1_str);
                j = i + 1;
                var final_place=0; // for a+b+4--->final_place=3
                for (; j < input.length; j++) {
                    if (input[i]=='+'&&input[i+1]=='+') {
                        num2_str="1";
                        i++;
                        break;
                    }
                    if (input[i]=='-'&&input[i+1]=='-') {
                        num2_str="1";
                        i++;
                        break;
                    }
                    
                    if (isSign(input[j]) == TRUE) {
                        num2_str = substr(input, i + 1, j);
                        final_place=j;
                        break;
                    }
                    if (j == input.length - 1) {
                        num2_str = substr(input, i + 1, j + 1);
                        final_place=j+1;
                        break;
                    }
                }
                //temp=i;
                //printf("/n Begin "++"\n",begin);
                //printf("num1_str "++", num2_str "++", previous_num "++"\n",num1_str,num2_str,numToCString(previous_num));
                //printf("my_output_str "++"\n",my_output_str);
                
                num1 = atof(num1_str);
                num2 = atof(num2_str);
                //printf("num1 %f, num2 %f, input[i] %c\n",num1,num2,input[i]);
                if (begin == FALSE) {
                    //####################################################
                    // I plan to add new code here\n
                    
                    if(stringIsDigit(num1_str)==FALSE){
                        // a+b+3+4
                        if (stringIsDigit(num2_str)==FALSE) {
                            my_output_str=append(my_output_str, substr(input, 0, final_place));
                            previous_num=0;
                            output=previous_num;
                            begin=TRUE;
                        }
                        // a+3+4
                        else{
                            my_output_str=append(my_output_str, substr(input, 0, i+1)); // get a+
                            previous_num=num2;
                            output=previous_num;
                            if (input[i]=='-') {
                                previous_num=-previous_num;
                                output=previous_num;
                            }
                            begin=TRUE;
                        }
                    }
                    // num1 is not string while num2 is . like   3+a+4+5
                    else if (stringIsDigit(num2_str)==FALSE){
                        my_output_str=append(my_output_str, substr(input, i, final_place));  // get +a
                        previous_num=num1;
                        output=previous_num;
                        begin=TRUE;
                    }
                    
                    else{
                        
                        
                        //#####################################################
                        
                        
                        previous_num = Walley_Operator(num1, num2, input[i]);
                        output = previous_num;
                        begin = TRUE;
                        
                        //my_output_str=append(my_output_str, "+");
                        //my_output_str=append(my_output_str, numToCString(output));
                        
                    }
                }
                // Begin =TRUE
                else {
                    
                    // I add new code here to solve a+3+5 like problem
                    //#####################################################
                    // 3+4+a+5-->7+a+5
                    if (stringIsDigit(num2_str)==FALSE) {
                        my_output_str=append(my_output_str, substr(input, i, final_place)); // get +a
                        //previous_num=num1;
                        output=previous_num;
                    }
                    else{
                        //####################################################
                        
                        previous_num = Walley_Operator(previous_num, num2, input[i]);
                        output = previous_num;
                        
                    }
                }
            }
        }
        //printf("END "++"\n",my_output_str);
        var temp_output=numToCString(output);
        if (output!=0) {
            if (temp_output[0]=='-') {
                my_output_str=append(my_output_str, temp_output);
                
            }
            else{
                my_output_str=append(my_output_str, "+");
                my_output_str=append(my_output_str, temp_output);
                
            }
        }
            // x=1*1-1*1
        if (stringIsEmpty(my_output_str)==TRUE) {
            my_output_str=temp_output;
        }
        

        my_output_str=cleanDotZeroAfterNum(my_output_str);
        //printf("my_output_str is |"++"|\n",my_output_str);
        if (my_output_str[0]=='+') {
            my_output_str=substr(my_output_str, 1, my_output_str.length);
        }
        return my_output_str;
    }
}


// calculate outside parenthesis
function eval_simple_str_with_alpha(input_str){
    // at this place, eg 3*x+5.
    // I will replace 3*x with 3#time#x    #time# ---> *
    while(hasFirstOrderSignExist(input_str)==TRUE){
        input_str=countFirstOrderSignAndChangeTheStrOnlyOnce_with_alpha(input_str);
    }
    //printf("$$$---> "++"\n",input_str);
    // Afte running the above code.
    // input_str maybe like.
    // 3#time#x#time#y+5/3
    return countFromExpression_with_alpha(input_str);
}
//clean_code  1/(4)--->1/4  1/(x+4)--->1/(x+4)
function clean_math_output_for_decimal(input_str){
    var num_of_bracket=count_str(input_str, "(");
    var i=0;
    for (; i<num_of_bracket; i++) {
        var right=find(input_str, ")");
        var left=right;
        for (; left>=0; left--) {
            if (input_str[left]=='(') {
                break;
            }
        }
        
        var string_in_bracket=substr(input_str, left+1, right);
        var replace_str=substr(input_str, left, right+1);
        // can not remove bracket
        if (stringHasAlpha(string_in_bracket) && stringIsAlpha(string_in_bracket)==FALSE) {
            input_str=replace_from_index_to_index(input_str, replace_str, append("#LEFT#", append(string_in_bracket, "#RIGHT#")), left, right+1);
        }
        // can remove bracket
        else{
            input_str=replace_from_index_to_index(input_str, replace_str, string_in_bracket, left, right+1);
        }
        
    }
    input_str=replace(input_str,"#LEFT#","(");
    input_str=replace(input_str,"#RIGHT#",")");
    
    // clean ((...)) like    
    var num_of_right_bracket=count_str(input_str, ")");
    var index_of_right=find(input_str, ")");
    var from_index_for_right=0;
    var from_index_for_left=index_of_right;
    i=0;
    for (; i<num_of_right_bracket; i++) {
        index_of_right=find_from_index(input_str, ")", from_index_for_right);
        from_index_for_right=index_of_right+1;
        if (index_of_right==-1) {
            break;
        }
        var index_of_left=0;
        if (index_of_right!=input_str.length-1) {
            if (input_str[index_of_right+1]==')') {
                index_of_left=find_from_behind_from_index(input_str, "(", from_index_for_left);
                from_index_for_left=index_of_left-1;
                if (index_of_left==-1) {
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
                    printf("Mistake occurred while calling function clean_math_output_for_decimal\n No left ( found\n");
                }
            }
            if (index_of_left!=0) {
                if (input_str[index_of_left-1]=='(') {
                    // can clean ((
                    var replace_str=substr(input_str, index_of_left-1, index_of_right+2);
                    var with_str=substr(input_str, index_of_left, index_of_right+1);
                    from_index_for_right=index_of_right-1;
                    // a+(((Hello)))
                    // a+((Hello))
                    from_index_for_left=index_of_left-1;
                    input_str=replace_from_index_to_index(input_str, replace_str, with_str, index_of_left-1, index_of_right+2);
                }
                else{
                    // can not clean
                    from_index_for_right=index_of_right+1;
                    from_index_for_left=index_of_left-1;
                }
            }
        }
    }
    return input_str;
}

// Calculate like (y*3*4/5^2+x)*y*3*4+x^(3/4)*y--->12*(0.48*y+x)*y+(x)^0.75*y
function eval_for_decimal_with_alpha(input_str){
    //var SAVE_EXPRESSION_THAT_HAS_ALPHA_IN_BRACKTER; // save (y*3*4/5^2+x) to #SAVED1#
    var INDEX_OFR_SAVE_EXPRESSION=0;                   //                             1
    var SAVE_EXPRESSION_THAT_HAS_ALPHA_IN_BRACKTER=Str_initStringList(SAVE_EXPRESSION_THAT_HAS_ALPHA_IN_BRACKTER);
    input_str=trim(input_str);
    input_str=eval_CalculatePowerAtFirst_with_alpha(input_str);
    //printf("AFTER--->"++"\n",input_str);
    var count_of_left_bracket=count_str(input_str,"(");
    var count_of_right_bracket=count_str(input_str,")");
    
    //var output;
    if(count_of_left_bracket!=count_of_right_bracket){
                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistakes occurred while calling function math_eval:\nnum of ( != num of )");
        exit(1);
    }
    
    var num_of_left_bracket=count_str(input_str, "(");
    var x=0;
    for (; x<num_of_left_bracket; x++) {
        var index_of_final_left_bracket=find(input_str, "(");
        var index_of_first_right_bracket=find(input_str, ")");
        while (TRUE) {
            
            var temp=find_from_index(input_str, "(", index_of_final_left_bracket+1);
            if (temp==-1 || temp>index_of_first_right_bracket) {
                break;
            }
            else {
                index_of_final_left_bracket=temp;
            }
            
        }
        var temp=substr(input_str,0,index_of_final_left_bracket);
        
        var part_output=eval_simple_str_with_alpha(substr(input_str,index_of_final_left_bracket+1,index_of_first_right_bracket));
        if (findAlphaInString(part_output)==TRUE) {
            part_output=append("(", part_output);
            part_output=append(part_output, ")");
            Str_addString(SAVE_EXPRESSION_THAT_HAS_ALPHA_IN_BRACKTER, part_output);
            part_output=append("#SAVED", append(intToCString(INDEX_OFR_SAVE_EXPRESSION), "#"));
            INDEX_OFR_SAVE_EXPRESSION++;
        }
        
        temp=append(temp,part_output);
        temp=append(temp,substr(input_str,index_of_first_right_bracket+1,input_str.length));
        input_str=temp;
    }
    //printf("1---> "++"\n",input_str);
    input_str=eval_simple_str_with_alpha(input_str);
    //printf("2---> "++"\n",input_str);
    
    x=INDEX_OFR_SAVE_EXPRESSION-1;
    for (; x>=0; x--) {
        var replace_str=append("#SAVED", append(intToCString(x), "#"));
        var with_str=SAVE_EXPRESSION_THAT_HAS_ALPHA_IN_BRACKTER[x+1];
        input_str=replace(input_str,replace_str, with_str);
    }
    
    input_str=changeOperatorStrToOriginalForWhoStr(input_str);
    //for calculate_for_division_for_fraction
    input_str=replace(input_str, "#LEFT#", "(");
    input_str=replace(input_str, "#RIGHT#", ")");
    
    // Delete 0 after
    var a=input_str.length-1;
    var place=input_str.length;
    if (find(input_str, ".") != -1) {
        for (; a >= 0; a--) {
            if (input_str[a] == '0')
                place--;
            else
                break;
        }
    }
    if(place!=input_str.length)
        input_str=substr(input_str,0,place);
    if(input_str[input_str.length-1]=='.')
        input_str=substr(input_str,0,input_str.length-1);
    
    input_str=clean_math_output_for_decimal(input_str);
    return input_str;
    
}

