/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_function.h
 * Author: shd101wyy
 *
 * Created on August 17, 2012, 2:39 PM
 */
//#include "walley_string.h"
//#include "walley_math_print.h"
//#include <limits.h>
//#include "walley_list.h"

/*
 This function will remove \n behind input_str;
 */


function removeNFromBack(input_str){
    while (input_str[input_str.length-1]=='\n') {
        if (input_str.length-1==0) {
            return "";
        }
        input_str=substr(input_str, 0,input_str.length-1);
    }
    return input_str;
}

/*
 * make string in c to string in walley
 * toString("Hello")----->"Hello" add double quote.
 */
function toString(input_str){
    //printf("#### toString ####\n");
    input_str = trim(input_str);
    if ((input_str[0] == '\'' || input_str[0] == '"') && input_str.length != 1)
        return input_str;
    else {
        return append("\"", append(input_str, "\""));
    }
}

function  strInBrackets(input_str){
    input_str=removeAheadSpace(input_str);
    input_str=removeBackSpace(input_str);
    var begin_index=find(input_str,"(");
    
    var length=input_str.length;
    var i=0;
    var end_index=-1;
    for (i=length-1; i>=0; i--) {
        if (input_str[i]==')') {
            end_index=i;
            break;
        }
    }
    
    //int end_index=input_str.length-1;
    if (begin_index==-1||end_index==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("\nMistake occurred while calling function strInBrackets\n");
        return "\nMistake occurred while calling function strInBrackets\n";
    } else {
        return substr(input_str,begin_index+1,end_index);   
    }
}

function checkWhetherEquaIsInsideString(input_str) {
   //// printf("#### checkWhetherEquaIsInsideString ####\n");
    var inside = FALSE;
    var index_of_first_equa = find_not_in_string(input_str, "=");
    input_str=substr(input_str,0,index_of_first_equa);
    var count_of_single_quote=count_str(input_str,"'");
    var count_of_double_quote=count_str(input_str,"\"");
    var sum=count_of_single_quote+count_of_double_quote;
    if(sum%2==0)
        inside=FALSE;
    else
        inside=TRUE;

    return inside;
}


function  checkValueType(input_str){
    var type="";
    var index_of_first_equa=find(input_str,"=");
    if(index_of_first_equa!=-1&&checkWhetherEquaIsInsideString(input_str)==FALSE){
        //printf("index_of_first_equa is "++"\n",index_of_first_equa);
        input_str=substr(input_str,index_of_first_equa+1,input_str.length); 
        //printf("input_str is :"++"\n",input_str);
    }
    input_str=removeBackSpace(input_str);
    input_str=removeAheadSpace(input_str);
   //// printf("The input_str is "++"\n",input_str);
    
    
    var index_of_first_syh=find(input_str,"\"");
    var index_of_first_dyh=find(input_str,"'");
    var index_of_first_list=find(input_str,"[");
    
    if(index_of_first_syh==0&&checkWhetherComplete(input_str)==TRUE){
        type="string";
    } else if (index_of_first_dyh==0&&checkWhetherComplete(input_str)==TRUE){
        type="string";
    } else if (index_of_first_list==0&&checkWhetherComplete(input_str)==TRUE){
        type="list";
        if (find_not_in_string(input_str, "=")!=-1) {
            type="table";
        }
    } else {
        type="unknown type";
    }
    
    
    return type;
    
}



function  variableName(input_message){
    if(find(input_message,"=")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("\nMistake occurred while calling function variableName\nPlease check");
        return "None";
    } else {
        if(checkWhetherEquaIsInsideString(input_message)==TRUE){
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("\nMistake occurred while calling function variableName\nPlease check");
            return "None";
        } else {
            //printf("Enter else\n");
            var index_of_equa=find(input_message,"=");
            var variable_name=substr(input_message,0,index_of_equa);
            variable_name=removeBackSpace(variable_name);
            return variable_name;
        }
    }
}

function  variableValue(input_message){
    if(find(input_message,"=")==-1){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("\nMistake occurred while calling function variableValue\nPlease check");
        return "None";
    } else {
        if(checkWhetherEquaIsInsideString(input_message)==TRUE||find(input_message,"=")==input_message.length-1){
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("\nMistake occurred while calling function variableValue\nPlease check");
            return "None";
        } else {
       
            var index_of_equa=find(input_message,"=");
           //// printf("$$index_of_equa is "++"\n",index_of_equa);
            var variable_value=substr(input_message,index_of_equa+1,input_message.length);
            variable_value=removeBackSpace(variable_value);
            variable_value=removeAheadSpace(variable_value);
           //// printf("#### variableValue input |"++"|, var_value |"++"|####\n",input_message,variable_value);
            return variable_value;
        }
    }
}



function isFunctionFromVar(FUNCTION_functions,input_str){
    var is_function=TRUE;
    input_str = removeAheadSpace(input_str);
    if(count_str(input_str,"(")==0 || count_str(input_str, ")")==0){
        is_function=FALSE;
        //printf("Didn't find ( or )");
    }
    else {
        is_function=FALSE;
        var function_name = substr(input_str, 0, find(input_str, "("));
       // printf("What happened\n");
       // printf("function name-> |"++"|\n",function_name);
        //if (checkWhetherSameVarNameExistsFromFile("__walley_function__.wy", function_name))
        var row=0;
        var length_of_function=atoi(FUNCTION_functions[0]);
        while (row<length_of_function) {
           // printf("->"++"\n",FUNCTION[row]);
            var index_of_maohao=find(FUNCTION_functions[row],":");
            if (index_of_maohao==-1) {
                row++;
                continue;
            }
            var temp=substr(FUNCTION_functions[row],0, index_of_maohao);
            if (strcmp(temp, function_name)==0) {
               // printf(""++" equals "++"\n",temp,function_name);
                is_function=TRUE;
                break;
            }
            row++;
        }
        if (count_str(function_name," ")>0)
            is_function=FALSE;
    }
    return is_function;
}

function variableValueType(variable_value){
    //printf("#### vairableValueType ####\n");
    //printf("Var Value |"++"|\n",variable_value);
    variable_value=removeAheadSpace(variable_value);
    //printf("Var Value "++"\n",variable_value);
    variable_value=removeBackSpace(variable_value);
    if (stringIsFraction(variable_value)) {
        return "fraction";
    }
    var type="";
    var index_of_first_syh=find(variable_value,"\"");
    var index_of_first_dyh=find(variable_value,"'");
    var index_of_first_list=find(variable_value,"[");
    var index_of_first_dict=find(variable_value,"{");
    //printf("Var Value "++"\n",variable_value);
    if(index_of_first_syh==0&&checkWhetherComplete(variable_value)==TRUE){
        type="string";
    } else if (index_of_first_dyh==0&&checkWhetherComplete(variable_value)==TRUE){
        type="string";
    } else if (index_of_first_list==0&&checkWhetherComplete(variable_value)==TRUE){
        type="list";
        if (find_not_in_string(variable_value, "=")!=-1) {
            type="table";
        }
    } else if (index_of_first_dict==0&&checkWhetherComplete(variable_value)==TRUE){
        type="dictionary";
    } else if(stringIsDigit(variable_value)){
        if(find(variable_value,".")!=-1)
            type="double";
        else
            type="int";
        // New add here
    } //else if(index_of_first_syh==-1&&index_of_first_dyh==-1&&index_of_first_list==-1){
    else if(index_of_first_list==-1){
        type="expression";
    } else {
        type="unknown type";
    }
    //printf("here\n");
    
    //bool is_func=isFunction(variable_value);
    //printf("there \n");
    //if(is_func)
    //type="function";
    
    //printf("Var Value "++"\n",variable_value);
    //printf("type is "++"\n",type);
    return type;
    
}

// Walley_String to C language String
function toCString(input_str){
    input_str=trim(input_str);
    if(strcmp(variableValueType(input_str),"string")==0){
        return substr(input_str,1,input_str.length-1);
    }
    else{
        return input_str;
    }
}
function isExpression(input_str){
    var is_expression=TRUE;
    var index_of_equal=find_not_in_str_list_dict_parenthesis(input_str,"=");
    if (index_of_equal==-1) {
        return FALSE;
    }
    if (input_str[index_of_equal+1]=='='||input_str[index_of_equal-1]=='>'||input_str[index_of_equal-1]=='<'||input_str[index_of_equal-1]=='!') {
        return FALSE;
    }
    if(index_of_equal!=-1&&checkWhetherEquaIsInsideString(input_str)==FALSE){
        
        //check whether = is in ()
        var index_of_left=find_not_in_string(input_str, "(");
        var index_of_right=find_not_in_string(input_str, ")");
        if (index_of_left<index_of_equal&&index_of_equal<index_of_right) {
            is_expression=FALSE;
        }
        else{
            is_expression=TRUE;
        }
    } else {
        is_expression=FALSE;
    }
    //printf("end "++", if 0 not, if 1 yes\n",is_expression);
    //printf("Input Str is |"++"|\n",input_str);
    return is_expression;
}

// javascript : file operation
/*
function getStringFromFile(file_name){
    
    FILE *fp;
    char arr[10000]="";
    char output[10000]="";
    if ((fp = fopen(file_name, "r")) == NULL) {
        perror("File open error!\n");
        exit(1);
    } 

    while ((fgets(arr, 10000, fp)) != NULL) {
        //printf(""++"\n",arr);
        strcat(output,arr);
        }
    fclose(fp);
    //printf("output is "++"\n",output);
    //printf("output--->"++"\n",output);
    var output2;
    
    
    if((int)strlen(output)==0){
        output2="";
    } else {
        int a=0;
        output2 = malloc(sizeof (char) *(int) strlen(output)+sizeof(char));
        for (a = 0; a < (int) strlen(output); a++) {
            output2[a] = output[a];
        }
        output2[(int)strlen(output)]=0;
        //output2[(int)strlen(output)]="\0";
    }
    
    
    return output2;
}*/

function  Walley_Eval(input_str){
    //printf("Walley_Eval "++"\n",input_str);
    //return eval(input_str);
    
    input_str=replace(input_str, "**","^");
    
    
    // here may be some problem....
    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
    var output;
    if (fraction_mode==TRUE) {
                        // 0.8+2 return 2.8  8/10+2 return 14/5
            if (find(input_str,".")!=-1) {
                return eval_for_decimal_with_alpha(input_str);
            } 
            else{
                // I changed the code to use mathomatic
                //output=eval_for_fraction_root_power(input_str);
                output=eval_for_fraction_with_alpha(input_str);
                //output=Walley_Mathomatic_Parse_For_Fraction(input_str);
            }
    
    }
    else{
        // I changed the code here to use mathomatic
        //output=eval(input_str);
        output=eval_for_decimal_with_alpha(input_str);
        //output=Walley_Mathomatic_Parse_For_Decimal(input_str);
    }
    return output;
}


function stringHasAlphaExceptAlphaInString(input_str){
    
    while(find(input_str,"\"")!=-1){
        var first=find(input_str,"\"");
        var second=find_from_index(input_str,"\"",first+1);
        var temp=substr(input_str,first,second+1);
        input_str=replace(input_str,temp,"");
    }
    
    while(find(input_str,"'")!=-1){
        var first=find(input_str,"'");
        var second=find_from_index(input_str,"'",first+1);
        var temp=substr(input_str,first,second+1);
        input_str=replace(input_str,temp,"");
    }
    var has_alpha=FALSE;
    var i=0;
    for(;i<input_str.length;i++){
        if(isalpha(input_str[i])){
            has_alpha=TRUE;
            break;
        }
    }
    return has_alpha;  
}


function  findFirstVarNameOfExpression(input_str){
    
    while(find(input_str,"\"")!=-1){
        var first=find(input_str,"\"");
        var second=find_from_index(input_str,"\"",first+1);
        var temp=substr(input_str,first,second+1);
        input_str=replace(input_str,temp,"");
    }
    
    while(find(input_str,"'")!=-1){
        var first=find(input_str,"'");
        var second=find_from_index(input_str,"'",first+1);
        var temp=substr(input_str,first,second+1);
        input_str=replace(input_str,temp,"");
    }
    
    
    var begin=0;
    var end=input_str.length-1;
    
    var i=0;
    var find_first_char=FALSE;
    
    for(;i<input_str.length;i++){
        if(isalpha(input_str[i])){
            find_first_char=TRUE;
            begin=i;
        }
        
        if(find_first_char==TRUE&&!isalpha(input_str[i])){
            end=i-1;
            break;
        }
        
        if(find_first_char==TRUE&&i==input_str.length-1){
            end=i;
            break;
        }
        
        
    }
    var var_name=substr(input_str,begin,end+1);
    //printf("function findFirstVarNameOfString:\ninput_str is "++"\nvar_name is "++"\n\n",input_str,var_name);
    return var_name;
    
}

function findVarNameFromStringFromIndex(input_str,from_index){
    
    input_str=substr(input_str,from_index,input_str.length);
    return findFirstVarNameOfExpression(input_str);
    
}

/*
bool elementInExpressionAreAllString(var input_str){
    int count=0;
    bool allAreString=TRUE;
    if(find(input_str,"\"")!=-1&&find(input_str,"'")!=-1){
        count=count_str(input_str,"\"");
        count=count+count_str(input_str,"'");
    } else if (find(input_str,"\"")!=-1){
        count=count_str(input_str,"\"");
    } else if (find(input_str,"'")!=-1){
        count=count_str(input_str,"'");
    } else {
        allAreString=FALSE;
    }
    
    return allAreString;
    
}**/

function combineStringsToOneString(input_str){
   // printf("#### combineStringsToOneString ####\n");
   // printf("input_str "++"\n",input_str);
    input_str=trim(input_str);
    if(find_not_in_string(input_str,"+")!=-1)
        input_str=replace_not_in_string(input_str,"+","#");
    var begin=0;
    var end=input_str.length;
    var i=0;
    var length=input_str.length;
    var temp="";
    temp+="\"";
    for(i=0;i<length;i++){
        if(input_str[i]=='#'&&charIsInString(input_str,i)==FALSE){
            end=i;
            var string_to_append=substr(input_str,begin,end);
            string_to_append=trim(string_to_append);
            temp+=substr(string_to_append,1,string_to_append.length-1);
            begin=end+1;
        }
    }
    end=input_str.length;
    var string_to_append=substr(input_str,begin,end);
    string_to_append=trim(string_to_append);
    temp+=substr(string_to_append,1,string_to_append.length-1);
    temp+="\"";
    var output=append("", temp);
    return output;
    
}

function stringIsEmpty(input_str){
    input_str=trim(input_str);
    input_str=removeNFromBack(input_str);
    var i=0;
    var isEmpty=TRUE;
    for(; i<input_str.length;i++){
        if(input_str[i]!=' ')
            isEmpty=FALSE;
    }
    if (strcmp("\n", input_str)==0) {
        isEmpty=TRUE;
    }
    //// printf("Input Str |"++"|,length "++",isEmpty "++"\n",input_str,input_str.length,isEmpty);
    return isEmpty;
}

/*
 * eg expressionIsAllString("'Hello'+'World'")------>TRUE
 *    expressionIsAllString("a+'hello'")------->FALSE
 */
function expressionIsAllString(input_str){
    //printf(""++"\n",input_str);
    var all_are_string=FALSE;
    var i=0;
    var num_of_hao=0;  // num of " and '
    var num_of_plus=0;  // num of +
    for(i=0;i<input_str.length;i++){
        //if(charIsInString(input_str,i)==FALSE && (input_str[i]=='\'' || input_str[i]=='"')){
        if((input_str[i]=='\'' || input_str[i]=='"')&&charIsInString(input_str,i)==FALSE){
            //printf("-->%c "++"\n",input_str[i],i);
            num_of_hao++;
        }
        if(charIsInString(input_str,i)==FALSE && input_str[i]=='+')
            num_of_plus++;
    }
    num_of_hao=num_of_hao/2;
    if(num_of_hao==num_of_plus+1)
        all_are_string=TRUE;
    //if(num_of_hao==0 && num_of_plus==0)
    //    all_are_string=TRUE;
    //printf("Num of hao is "++", num of plus is "++"\n",num_of_hao,num_of_plus);
    //printf("all are string "++"\n",all_are_string);
    return all_are_string;
}

/*
 * eg finishFindingVarAndFunction("x+'Hello'")---->FALSE because x is here
 *    finishFindingVarAndFunction("Hello World")----->TRUE
 */
function finishFindingVarAndFunction(input_str){
    var i=0;
    var finish=TRUE;
    for(i=0;i<input_str.length;i++){
        if(isalpha(input_str[i])==TRUE && charIsInString(input_str,i)==FALSE){
            finish=FALSE;
            break;
        }
    }
    return finish;
}


function  Walley_Eval_With_Variable_From_Var(struct_var, input_str) {
    //printf("#### Walley_Eval_With_Variable_From_Var ####\n");
    //printf("------Input Str to this function is :|"++"|------\n", input_str);
    
    // to solve input_str is -24 but output is 24
    if (input_str[0] == '-') {
        var temp ="0";
        temp+=input_str;
        input_str = temp;
    }
    

    var output="";
    
    if (strcmp("list", variableValueType(input_str)) == 0) { // It doesn't work, I do not why
        //printf("It is list\n");
        return input_str;
    } else if (strcmp("dictionary", variableValueType(input_str)) == 0) { // It doesn't work, I do not why
        //printf("It is list\n");
        return input_str;
    } else if (stringIsDigit(input_str) == TRUE)
        return Walley_Eval(input_str);
     // solve a:"Hello" return ":"Hello" problem
    else if(find_not_in_string(input_str, ":")!=-1)
        return input_str;

    else if (expressionIsAllString(input_str) == TRUE) {
        //printf("all var are string\n");
        output = combineStringsToOneString(input_str);
        //printf("------> "++"\n", output);
        //// printf("Function Walley_Eval_With_Variable all are string . \noutput------:"++"\n", output);
        return output;
    }
    
     // I delete the following two sentences on 11/30 2:21
     // else if (find_not_in_string(input_str, ",") != -1)
     //   return input_str;
    
    
    else if (strcmp("None", input_str) == 0) {
        return "None";
    }
    
    // to solve |print 3+"hello"| problem
    else if(find(input_str,"\"")!=-1||find(input_str,"'")!=-1){
        var output="";
        //printf("@@@ "++"\n",input_str);
        var index_of_plus=find_not_in_str_list_dict_parenthesis(input_str, "+");
        if (index_of_plus==-1) {
            return input_str;
            //printf("Mistake occurred while calling function Walley_Eval_With_Variable_From_Var\ninput_str "+input_str+" can not be combined, no + found\n");
            //exit(0);
        }
        var begin=0;
        while(TRUE){
            var temp_str=substr(input_str, begin, index_of_plus);
            var var_type=variableValueType(temp_str);
           // printf("temp_str is "++"\n",temp_str);
           // printf("var_type is "++"\n",var_type);
            if (strcmp(var_type,"string")==0||strcmp(var_type, "list")==0||strcmp(var_type, "dictionary")==0) {
             //   printf(" it is string list dictionary      "++"\n",output);
                output=append(output, toCString(temp_str));
             //   printf(" it is string list dictionary      "++"\n",output);
            }
            else{
                output=append(output, toCString(Walley_Eval_With_Variable_From_Var(struct_var, temp_str)));
            }
            begin=index_of_plus+1;
            index_of_plus=find_from_index_not_in_str_list_dict_parenthesis(input_str, "+", begin);
            if (index_of_plus==-1) {
                temp_str=substr(input_str, begin, input_str.length);
                var_type=variableValueType(temp_str);
               // printf("temp_str is "++"\n",temp_str);
               // printf("var_type is "++"\n",var_type);
                if (strcmp(var_type,"string")==0||strcmp(var_type, "list")==0||strcmp(var_type, "dictionary")==0) {
                    output=append(output, toCString(temp_str));
                }
                else{
                    output=append(output, toCString(Walley_Eval_With_Variable_From_Var(struct_var, temp_str)));
                }
                break;
            }
            
        }
        
        return toString(output);
        
    }
    else {
        return Walley_Eval(input_str);
    }
    
    
    
}


/*
 * this function is used to solve Walley_Substitue problem
 * input-->'3+4,2+5'---->'7,7'
 */
function  Walley_Eval_All_From_Var(struct_var,input_str){
    //printf("--->"++"\n",input_str);
    
    /* I delete this code on Dec 6
     * cause "x-->"+x can not be printed.
     * judge sign should be in str
    if (hasJudgeSign(input_str)==TRUE) {
        return input_str;
    }*/
    
    var m=0;
    for (m=0; m<input_str.length; m++) {
        if (isJudgeSign(input_str[m])==TRUE && charIsInString(input_str, m)==FALSE) {
            return input_str;
        }
    }
    
    
    if (find_not_in_str_list_dict_parenthesis(input_str, ",")==-1) {
        //printf("\n\nDid not find\n");
        return Walley_Eval_With_Variable_From_Var(struct_var, input_str);
    }
    input_str=trim(input_str);
    input_str=append(input_str, ",");
    var begin=0;
    var end=input_str.length;
    var output="";
    //printf("---->"++"\n",input_str);
    while (TRUE) {
        end=find_from_index_not_in_str_list_dict_parenthesis(input_str, ",", begin+1);
        if (end==-1) {
            break;
        }
        //printf("Begin "++", End "++"\n",begin,end);
        var sub=substr(input_str, begin, end);
        sub=Walley_Eval_With_Variable_From_Var(struct_var, sub);
        output=append(output, sub);
        output=append(output, ",");
        begin=end+1;
    }
    output=substr(output, 0, output.length-1);
    return output;
}




function defineAFunction(input_str){
    var temp="";
    temp=substr(input_str, 0, find(input_str,")"));
    temp+="  ):";
    input_str=temp;
    
    
    input_str=removeAheadSpace(input_str);
    input_str=removeBackSpace(input_str);
    
    var func_name=substr(input_str, find(input_str,"def")+3,find(input_str,"("));
    func_name=removeAheadSpace(func_name);
    func_name=removeBackSpace(func_name);
   //// printf("###### Function Name: "++" ######\n",func_name);
    
        
    var parameter_str=substr(input_str, find(input_str,"(")+1,find(input_str,")"));
    parameter_str=removeAheadSpace(parameter_str);
    parameter_str=removeBackSpace(parameter_str);
    
    
    var para_num=count_str(parameter_str,",")+1;
    
    if(stringIsEmpty(parameter_str)){
        para_num=0;
        parameter_str="None";
    }
   //// printf("###### Parameter is : "++" ######\n",parameter_str);
   //// printf("you have "++" paras",para_num);
    return "Now Design Function";
}

function functionName(input_str){
    var temp;
    temp=substr(input_str, 0, find(input_str,")"));
    
    // strcat problem 1
    //strcat(temp,"  ):");
    temp=append(temp, "  ):");
    
    
    input_str=temp;
    
    
    input_str=removeAheadSpace(input_str);
    input_str=removeBackSpace(input_str);
    
    var func_name=substr(input_str, find(input_str,"def")+3,find(input_str,"("));
    func_name=removeAheadSpace(func_name);
    func_name=removeBackSpace(func_name);
    return func_name;
    
}

function functionParameterStr(input_str){
    var temp=append(substr(input_str, 0, find(input_str,")")), " ):");
    input_str=temp;   
    
    var parameter_str=substr(input_str, find(input_str,"(")+1,find(input_str,")"));
    //printf("#### parameter_str is "++" ####\n",parameter_str);
    parameter_str=removeAheadSpace(parameter_str);
    //printf("#### parameter_str is "++" ####\n",parameter_str);
    parameter_str=removeBackSpace(parameter_str);
   //// printf("###### Parameter is : "++" ######\n",parameter_str);
    
    
    var para_num=count_str(parameter_str,",")+1;
    
    if(stringIsEmpty(parameter_str)){
        para_num=0;
        parameter_str="None";
    }
    
    return parameter_str;
}

function numOfSpaceAheadString(input_str){
    var num=0;
    var i=0;
    //printf(""++"",input_str.length);
    //printf("'%c'\n",input_str[0]);
    if (input_str.length != 0) {
        for (; i < input_str.length; i++) {
            if (input_str[i] != ' ') {
                break;
            } else {
                num = num + 1;
                //printf("index "++"\n",i);
            }
        }
    }
    return num;
}

// javascript : file operation 
/*
void writeStringToFile(var file_name, var str_to_file){
    //printf("#### writeStringToFile |"++"|####\n",str_to_file);
    var str_in_wy_ = getStringFromFile(file_name);
    //printf("str in wy "++"\n",str_in_wy_);
    var input_message=malloc(sizeof(char)*((int)strlen(str_to_file)+1));
    int i=0;
    for(i=0;i<(int)strlen(str_to_file);i++){
        input_message[i]=str_to_file[i];
    }
    input_message[(int)strlen(str_to_file)]=0;
    //printf("----Previous String in file is :"++"\n----",str_in_wy);
    FILE *fw = fopen(file_name, "w");
    if((int)strlen(str_in_wy_)!=0)
        fputs(str_in_wy_, fw);
    fputs(input_message, fw);
    fclose(fw);    
}
*/

//change later
function anaylizeExistedVariablesInExpression(input_str){
   //// printf("#### anaylizeExistedVariablesInExpression ####\n");
    //printf("input str is :"++"\nlength is "++"\n",input_str,input_str.length);
    
    var find_alpha=FALSE;
    var finish_find_var=FALSE;
    var find_function=FALSE;
    var begin=0;
    var end=input_str.length;
    var i=0;
    for(;i<input_str.length;i++){
        if(find_alpha==FALSE && isalpha(input_str[i])){
            find_alpha=TRUE;
            begin=i;
            //printf("begin "++"\n",begin);
        }
        
        if(find_alpha==TRUE && input_str[i]=='('){
            find_function=TRUE;
            //printf("Find Function\n");
        }
        if(find_function){
            find_function=FALSE;
            //var temp=substr(input_str,i,input_str.length);
            var index_of_youkuohao=find_from_index(input_str,")",i);
            
            var num_of_zuo=count_str(substr(input_str,i,index_of_youkuohao+1),"(");
            var num_of_you = count_str(substr(input_str,i, index_of_youkuohao + 1), ")");
            //printf("zuo "++", you "++"\n",num_of_zuo,num_of_you);
            while (num_of_zuo != num_of_you) {
                //printf("Bu Deng");
                index_of_youkuohao = find_from_index(input_str, ")", index_of_youkuohao + 1);
                num_of_zuo = count_str(substr(input_str,i, index_of_youkuohao + 1), "(");
                num_of_you = count_str(substr(input_str,i, index_of_youkuohao + 1), ")");
            }
            
            //printf("------\n"++"\n-------\n",substr(input_str,begin,index_of_youkuohao+1));
            i=index_of_youkuohao;
            find_alpha=FALSE;
            continue;
        }
        
        if(find_alpha==TRUE && isSign(input_str[i])){
            find_alpha=FALSE;
            end=i;
            //printf("end "++"\n",end);
            finish_find_var=TRUE;
            
        }
        if(find_alpha==TRUE && ((isJudgeSign(input_str[i])) || input_str[i]==')')){
            find_alpha=FALSE;
            end=i;
            //printf("end "++"\n",end);
            finish_find_var=TRUE;
            
        }
        if(find_alpha==TRUE && i==input_str.length-1){
            find_alpha=FALSE;
            end=i+1;
            //printf("end "++"\n",end);     
            finish_find_var=TRUE;
        }
        if(finish_find_var){
            //printf("------\n"++"\n------\n",substr(input_str,begin,end));
            finish_find_var=FALSE;
        }
        
    }
}

//##################### This function has one problem############################
// Now Problem is solved
function substitueExistedVarValueFromVar(input_str,struct_var){//, var file_function_name){
    //printf("input str is :"++"\nlength is "++"\n",input_str,input_str.length);
    
    var find_alpha=FALSE;
    var finish_find_var=FALSE;
    var find_function=FALSE;
    var begin=0;
    var end=input_str.length;
    var i=0;
    //var output=input_str;
    var output="";
    output=input_str;
    var has_var=FALSE;
    
    for(i=0;i<input_str.length;i++){
        //printf("enter here\n");
        //printf(""++"\n",output);
        //printf("i-->"++"\n%c\n",i,input_str[i]);
        //printf("----find alpha "++"--\n",find_alpha);
        if(find_alpha==FALSE && isalpha(input_str[i])){
            find_alpha=TRUE;
            begin=i;
            //printf("begin "++"\n",begin);
        }
        
        if(find_alpha==TRUE && input_str[i]=='('){
            find_function=TRUE;
            //printf("Find Function\n");
        }
        if(find_function){
            find_function=FALSE;
            //var temp=substr(input_str,i,input_str.length);
            var index_of_youkuohao=find_from_index(input_str,")",i);
            
            var num_of_zuo=count_str(substr(input_str,i,index_of_youkuohao+1),"(");
            var num_of_you = count_str(substr(input_str,i, index_of_youkuohao + 1), ")");
            //printf("zuo "++", you "++"\n",num_of_zuo,num_of_you);
            while (num_of_zuo != num_of_you) {
                //printf("Bu Deng");
                index_of_youkuohao = find_from_index(input_str, ")", index_of_youkuohao + 1);
                num_of_zuo = count_str(substr(input_str,i, index_of_youkuohao + 1), "(");
                num_of_you = count_str(substr(input_str,i, index_of_youkuohao + 1), ")");
            }
            
            //printf("------\n"++"\n-------\n",substr(input_str,begin,index_of_youkuohao+1));
            i=index_of_youkuohao;
            find_alpha=FALSE;
            has_var=TRUE;
            continue;
        }
        
        if(find_alpha==TRUE && isSign(input_str[i])){
            find_alpha=FALSE;
            end=i;
            //printf("end "++"\n",end);
            finish_find_var=TRUE;
            
        }
        if(find_alpha==TRUE && ((isJudgeSign(input_str[i])) || input_str[i]==')')){
            find_alpha=FALSE;
            end=i;
            //printf("--end-- "++"\n",end);
            finish_find_var=TRUE;
            
        }
        if(find_alpha==TRUE && i==input_str.length-1){
            find_alpha=FALSE;
            end=i+1;
            //printf("end "++"\n",end);
            finish_find_var=TRUE;
        }
        if(finish_find_var){
            //printf("------\n"++"\n------\n",substr(input_str,begin,end));
            //printf("Begin "++", End "++"\n",begin,end);
            var var_name=substr(input_str,begin,end);
            //var var_value=getValueFromValueName(file_var_name,var_name);
            var var_value=Var_getValueOfVar(struct_var, var_name);
            
            //printf("Var Name "++"\nVar Value "++"\n",var_name,var_value);
            var begin_temp=begin+output.length-input_str.length;
            var end_temp=end+output.length-input_str.length;
            
            //printf("Begin "++", End "++"\n",begin_temp,end_temp);
            //printf("Before change, output is "++"\n",output);
            output=replace_from_index_to_index(output,var_name,var_value,begin_temp,end_temp);
            //printf("After change, output is "++"\n",output);
            has_var=TRUE;
            finish_find_var=FALSE;
            find_alpha=FALSE;
           
        }
        
    }
    
    //if(has_var==FALSE){
    //    return input_str;
    //}
    //// printf("output is |"++"|\n",output);
    return output;
}



/*
 * ########## Check whether shou run sentence
 ##########  Only support the conparison between numbers now
 * eg passConditionIfSentence("3>4")
 */
function passConditionIfSentence(input_str){
    //// printf("#### passConditionIfSentence ####\n");
    //// printf("input_str is :|"++"|\n",input_str);
    if (strcmp("TRUE", stringToUpperCase(input_str))==0) {
        return TRUE;
    }
    if (strcmp("FALSE", stringToUpperCase(input_str))==0) {
        return FALSE;
    }
    input_str=removeAheadSpace(input_str);
    input_str=removeBackSpace(input_str);


    
    var first_str;
    var second_str;
    //int index=indexOfJudgeSignFromIndex(input_str,0);
    var i=0;
    var begin=0;
    var find_var=FALSE;
    var pass=FALSE;
    var judge_sign;
    //input_str=substr(input_str,find(input_str,"if "),input_str.length);
    //input_str=replace(input_str,"if ","");
    //input_str=removeAheadSpace(input_str);
    //printf(""++"\n"++"\n",input_str,input_str.length);
    for(i=0;i<input_str.length;i++){
        if (charIsInString(input_str, i)==TRUE||charIsInDictionary(input_str, i)==TRUE||charIsInList(input_str, i)==TRUE) {
            continue;
        }
        if(input_str[i]==' ')
            continue;
        if(find_var==FALSE && (isalpha(input_str[i]) || isdigit(input_str[i]) || input_str[i]=='\'' || input_str[i]=='"'|| input_str[i]=='[' || input_str[i]=='{')){
            begin=i;
            find_var=TRUE;
            //printf("Find Var at index "++"\n",i);
            
            //in order to support -2 > 1
            if(i>0 && isdigit(input_str[i]) && input_str[i-1]=='-')
                begin=begin-1;
        }
        
        
        if(isJudgeSign(input_str[i])==TRUE && find_var==TRUE && charIsInString(input_str,i)==FALSE){
            //printf("Find var is "++"\n",find_var);
            //printf("Find Judge Sign at index "++"\n",i);
            first_str=substr(input_str,begin,i);
            //printf("First str "++"\n",first_str);
            if(isalpha(input_str[i+1])==TRUE || isdigit(input_str[i+1])==TRUE || input_str[i+1]=='\''||input_str[i+1]=='"' || input_str[i+1]=='-' || input_str[i+1]=='+'||input_str[i+1]=='*'||input_str[i+1]=='\\'){
                //printf("Enter 1\n");
                judge_sign=substr(input_str,i,i+1);
                //printf("judge sign is "++"\n",judge_sign);
                //printf(""++"\n",input_str);
                //printf("----- "++" "++"\n",i+1,input_str.length);
                second_str=substr(input_str,i+1,input_str.length);
                //printf("Second_Str is "++"\n",second_str);
            }
            else{
                //printf("Enter 2\n");
                judge_sign=substr(input_str,i,i+2);
                second_str=substr(input_str,i+2,input_str.length);
            }
            break;
        }
    }
    //##################################### Maybe some mistakes here ###################
    /*
     * I modified those codes on Dec 6
     *
    //first_str=Walley_Eval_With_Variable_From_File("__walley__.wy",first_str);
    //second_str=Walley_Eval_With_Variable_From_File("__walley__.wy",second_str);
    //printf("first_str is "++"\n second_str is "++"\n",first_str,second_str);
     */
    first_str=Walley_Eval_With_Variable_From_Var(NULL, first_str);
    second_str=Walley_Eval_With_Variable_From_Var(NULL, second_str);
    //#############################################################################
   //// printf("First "++"\nSecond "++"\nJudge Sign "++"\n",first_str,second_str,judge_sign);
   
    //printf("first "+first_str+" second "+second_str);
   
    first_str=removeAheadSpace(removeBackSpace(first_str));
    second_str=removeAheadSpace(removeBackSpace(second_str));
    var first_str_type=variableValueType(first_str);
    var second_str_type=variableValueType(second_str);
    //printf("num1 %f\nnum2 %f\n",num1,num2);
    if(strcmp(first_str_type,"string")==0 && strcmp(second_str_type,"string")==0){
       //// printf("It is the comparison between strings\n");
        first_str=substr(first_str,1,first_str.length-1);
        second_str=substr(second_str,1,second_str.length-1);
     if(strcmp(judge_sign,"==")==0){
        if(strcmp(first_str,second_str)==0){
            pass=TRUE;
        }
    } else if (strcmp(judge_sign,"!=")==0){
        if(strcmp(first_str,second_str)!=0){
            pass=TRUE;
        }
    } else if (strcmp(judge_sign,">")==0){
        //printf("enter here >\n");
        //printf(""++"\n"++"\n",first_str,second_str);
        if(strcmp(first_str,second_str)>0){
            pass=TRUE;
        }
    } else if (strcmp(judge_sign,"<")==0){
        if(strcmp(first_str,second_str)<0){
            pass=TRUE;
        }
    } else if (strcmp(judge_sign,">=")==0){
        if(strcmp(first_str,second_str)>=0){
            pass=TRUE;
        }
    } else if (strcmp(judge_sign,"<=")==0){
        if(strcmp(first_str,second_str)<=0){
            pass=TRUE;
        }
    } else {
        pass=FALSE;
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function passConditionIfSentence\n");
    }       
        
        
        
    }
    
    else if((strcmp(first_str_type, "string")==0 && strcmp(second_str, "string")!=0)||(strcmp(first_str_type, "string")!=0 && strcmp(second_str, "string")==0)){
        return FALSE;
    }
    else if (strcmp(first_str_type, "list")==0 && strcmp(second_str_type, "list")==0){
        if (strcmp(judge_sign, "==")==0) {
            if (strcmp(first_str, second_str)==0) {
                return TRUE;
            }
            else{
                return FALSE;
            }
        }
        else if (strcmp(judge_sign, "!=")==0){
            if (strcmp(first_str, second_str)!=0) {
                return TRUE;
            }
            else{
                return FALSE;
            }
        }

    }

    else if (strcmp(first_str_type, "dictionary")==0 && strcmp(second_str_type, "dictionary")==0){
        if (strcmp(judge_sign, "==")==0) {
            if (strcmp(first_str, second_str)==0) {
                return TRUE;
            }
            else{
                return FALSE;
            }
        }
        else if (strcmp(judge_sign, "!=")==0){
            if (strcmp(first_str, second_str)!=0) {
                return TRUE;
            }
            else{
                return FALSE;
            }
        }
        
    }
    
    else if ((strcmp(first_str_type, "int")==0||strcmp(first_str_type, "fraction")==0||strcmp(first_str_type, "double")==0)
             &&(strcmp(second_str_type, "int")==0||strcmp(second_str_type, "fraction")==0||strcmp(second_str_type, "double")==0)){
                 var num1=atof(eval_for_decimal_with_alpha(first_str));
                 var num2=atof(eval_for_decimal_with_alpha(second_str));
                 
                 //printf("it is compared between number\n");
                 //printf("Judge Sign %s\n",judge_sign);
                 if(strcmp(judge_sign,"==")==0){
                     //printf("enter\n");
                     if(num1==num2){
                         pass=TRUE;
                     }
                 } else if (strcmp(judge_sign,"!=")==0){
                     if(num1!=num2){
                         pass=TRUE;
                     }
                 } else if (strcmp(judge_sign,">")==0){
                     if(num1>num2){
                         pass=TRUE;
                     }
                 } else if (strcmp(judge_sign,"<")==0){
                     if(num1<num2){
                         pass=TRUE;
                     }
                 } else if (strcmp(judge_sign,">=")==0){
                     if(num1>=num2){
                         pass=TRUE;
                     }
                 } else if (strcmp(judge_sign,"<=")==0){
                     if(num1<=num2){
                         pass=TRUE;
                     }
                 } else {
                     pass=FALSE;
                                             printf("@@ |"+CURRENT_INPUT_STR+"|\n");
                     printf("Mistake occurred while calling function passConditionIfSentence\n");
                 }
                 
             }
    
    else {
        return FALSE;
    }   //// printf("------- pass is "++"\n",pass);
    return pass;
}

/*
 eg, judgeWithAndAndOr("3>4 and 5<1 or 3>2")---->TRUE
 
 */
function judgeWithAndAndOr(input_str){
    //printf("#### judgeWithAndAndOr ####\n");
    input_str=trim(input_str);
    var pass=TRUE;
    var temp=append("and ", input_str);
    temp=append(temp, " ");
    input_str=temp;
    //printf("@#@#|"++"|\n",input_str);
    var condition_sign;
    var sentence;
    //int from_index=0;
//    bool just_begin=TRUE;
    var find_not=FALSE;
    while(count_str_not_in_string(input_str,"and")!=0 || count_str_not_in_string(input_str,"or")!=0){
        //printf("--"++"\n",input_str);
        //printf("enter\n");
        input_str=removeAheadSpace(input_str);
        condition_sign=substr(input_str,0,find_not_in_string(input_str," "));
        //printf("condition sign is "++"\n",condition_sign);
        input_str=substr(input_str,find_not_in_string(input_str," ")+1,input_str.length);
        //printf("input_str "++"\n",input_str);
        input_str=removeAheadSpace(input_str);
        sentence=substr(input_str,0,find_not_in_string(input_str," "));
        //printf("sentence&&&& |"++"|\n",sentence);
        if(strcmp("not",sentence)==0){
           //// printf("Find Not\n");
            find_not=TRUE;
            input_str=substr(input_str,find_not_in_string(input_str," ")+1,input_str.length);
            sentence=substr(input_str,0,find_not_in_string(input_str," "));
        }
        //printf("sentence&&&&---> |"++"|\n",sentence);
        var temp=passConditionIfSentence(sentence);
        //printf("here\n");
        if(find_not==TRUE){
            if(temp==1){
                temp=0;
            } else {
                temp=1;
            }
            find_not=FALSE;
        }
//        if(just_begin==TRUE){
//            pass=temp;
//            just_begin=FALSE;
//        }
        //printf("temp is "++"\npass is "++"\n",temp,pass);
        //printf("condition sign is |"++"|\n",condition_sign);
        pass=judge(temp,pass,condition_sign);
        
        //input_str=substr(input_str,find(input_str," ")+1,input_str.length);
        input_str=substr(input_str,find_not_in_string(input_str," ")+1,input_str.length);
        //printf("--"++"\n",input_str);
    }
   // printf("++ Pass is ----> "++"\n",pass);
    return pass;
}
/*eg judgeWithAndAndOrWithParenthesis("1<2 or (3>4 and 3==3)"):
 */
function judgeWithAndAndOrWithParenthesis(input_str){
   //// printf("#### judgeWithAndAndOrWithParenthesis ####\n");
   //// printf("input_str ----> "++"\n",input_str);
    var count_of_left=count_str(input_str,"(");
    var count_of_right=count_str(input_str,")");
    if(count_of_left != count_of_right){
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function judgeWithAndAndOrWithParenthesis\ncount_of_left != count_of_right\n");
        exit(1);
    }
    while(count_str_not_in_string(input_str,"(")!=0){
        var left=find(input_str,"(");
        var right=find_from_index(input_str,")",left+1);
        var temp=substr(input_str,left+1,right);
        //printf("Temp -------> "++"\n",temp);
        //printf("$$$$$$$$$$$$\n");
        var result=judgeWithAndAndOr(temp);
        var result_str;
        if(result==1){
            result_str=" 1>0 ";
        } else {
            result_str=" 1<0 ";
        }
        //var temp_temp=malloc(sizeof(char)*(input_str.length+(int)strlen(result_str)-(int)strlen(temp)-2));
        //strcat(temp_temp,substr(input_str,0,left));
        //strcat(temp_temp,result_str);
        //strcat(temp_temp,substr(input_str,right+1,input_str.length));
        var temp_temp=append(substr(input_str,0,left),result_str);
        temp_temp=append(temp_temp, substr(input_str,right+1,input_str.length));
        input_str=temp_temp;
    }
    if(find(input_str,"  ")!=-1){
        input_str=replace(input_str,"  "," ");
    }
    //printf("@@@@@@@@AAAAA  input_str is "+input_str+"\n");
    return judgeWithAndAndOr(input_str);
}
/*Support variable
 */

function judgeWithAndAndOrWithParenthesisAndVariablesFromVar(input_str,struct_var){
    // I did not consider the situation when and or or is in string
    // I don not know what happened, but sometimes " space " can not be found
    if(find(input_str," and ")!=-1){
        input_str=replace(input_str," and ","+++++");
    }
    if(find(input_str," or ")!=-1){
        input_str=replace(input_str," or ","----");
    }
    //printf(""++"\n",input_str);
    input_str=substitueExistedVarValueFromVar(input_str,struct_var);
    //printf(""++"\n",input_str);
    if(find(input_str,"+++++")!=-1){
        input_str=replace(input_str,"+++++"," and ");
    }
    
    if(find(input_str,"----")!=-1){
        input_str=replace(input_str,"----"," or ");
    }
    //printf(""++"\n",input_str);
    
    var output=judgeWithAndAndOrWithParenthesis(input_str);
    return output;
}


/*
 
 * eg cleanJudgeSentence("4 > 3")---->"4>3"
 */
function cleanJudgeSentence(judge_sentence){
    if(find_not_in_string(judge_sentence," > ")!=-1){
        judge_sentence=replace_not_in_string(judge_sentence," > ",">");
    } else if(find_not_in_string(judge_sentence," < ")!=-1){
        judge_sentence=replace_not_in_string(judge_sentence," < ","<");
    } else if(find_not_in_string(judge_sentence," == ")!=-1){
        judge_sentence=replace_not_in_string(judge_sentence," == ","==");
    } else if(find_not_in_string(judge_sentence," != ")!=-1){
        judge_sentence=replace_not_in_string(judge_sentence," != ","!=");
    } else if(find_not_in_string(judge_sentence," >= ")!=-1){
        judge_sentence=replace_not_in_string(judge_sentence," >= ",">=");
    } else if(find_not_in_string(judge_sentence," <= ")!=-1){
        judge_sentence=replace_not_in_string(judge_sentence," <= ","<=");
    }
    return judge_sentence;
}
/*
 * eg changeValueType("(int)","'123'")--------->123
 */
/*
var changeValueType(var value_type_to_be, var value){
    value=removeAheadSpace(removeBackSpace(value));
    if(find(value_type_to_be,"int")!=-1){
        printf("Change value to int\n");
        if(value[0]=='\'' && ){
            
        }
    }
    
}**/


/*
 * this function is for special function in walley_core
 * eg x="Hello", x.find("Hello",1)
 * numOfParameters(" "Hello", 1")=2
 */
function numOfParameters(func_param){
    var i=0;
    var num=1;
    for(i=0;i<func_param.length;i++){
        if(func_param[i]==',' && charIsInString(func_param,i)==FALSE && charIsInDictionary(func_param, i)==FALSE && charIsInList(func_param, i)==FALSE){
            num=num+1;
        }
        
    }
    return num;
}

/*
 * this function is for import
 * learned from python
 * like a file called math.wy
 * import math-->then add math. to the ahead of def sum(num1,num2)
 * import math as hi-->then add hi.
 */

/* This Code is So Old, so I tend to modify
var functionOrClassAddAheadName(var import_file_name, var as_name) {
    printf("#### functionAddAheadName ####\n");
    printf("## import_file_name |"++"| # as_name |"++"|\n",import_file_name,as_name);
    import_file_name = trim(import_file_name);
    as_name = trim(as_name);
    //printf("import_file_name "++"\n",import_file_name);
    //printf("as_name "++"\n",as_name);
    FILE *fp = fopen(import_file_name, "r");
    char arr[1000] = "";
    char output[10000] = "";

    if (fp == NULL) {
        perror("File open error!\n");
        exit(1);
    }
    //else{
    //    printf("find file\n");
    //}

    while ((fgets(arr, 1000, fp)) != NULL) {
       //// printf("----> "++"\n\n",arr);
        int space_num = numOfSpaceAheadString(arr);
        //printf(""++"\n",space_num);
        if (space_num == 0) {
            if (find(arr, "def ") == 0) {
                var remain = substr(arr, 4, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(as_name, "") != 0) {
                    to_append = malloc(sizeof (char) *(4 + 2 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "def ");
                    strcat(to_append, as_name);
                    strcat(to_append, ".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                } else {
                    to_append = malloc(sizeof (char) *(4 + 1 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "def ");
                    //strcat(to_append, as_name);
                    //strcat(to_append, ".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                }
                strcat(output, to_append);
            } else if (find(arr, "class ") == 0) {
                var remain = substr(arr, 6, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(to_append, "") != 0) {
                    to_append = malloc(sizeof (char) *(8 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "class ");
                    strcat(to_append, as_name);
                    strcat(to_append, ".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                } else {
                    to_append = malloc(sizeof (char) *(7 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "class ");
                    //strcat(to_append,as_name);
                    //strcat(to_append,".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                }
                to_append[(int) strlen(to_append)] = 0;

                strcat(output, to_append);
            } else {
                strcat(output, arr);
            }
        } else {
            strcat(output, arr);
        }
    }

    fclose(fp);
    //printf("output is "++"\n",output);
   //// printf("output--->"++"\n",output);
    var output2;


    if ((int) strlen(output) == 0) {
        output2 = "";
    } else {
        int a = 0;
        output2 = malloc(sizeof (char) *(int) strlen(output) + sizeof (char));
        for (a = 0; a < (int) strlen(output); a++) {
            output2[a] = output[a];
        }
        output2[(int) strlen(output)] = 0;
        //output2[(int)strlen(output)]="\0";
    }
    return output2;

}
*/

// javascript: file operation 
/*
var functionOrClassAddAheadName(var import_file_name, var as_name) {
   // printf("#### functionAddAheadName ####\n");
   // printf("## import_file_name |"++"| # as_name |"++"|\n",import_file_name,as_name);
    import_file_name = trim(import_file_name);
    as_name = trim(as_name);
    //printf("import_file_name "++"\n",import_file_name);
    //printf("as_name "++"\n",as_name);
    FILE *fp = fopen(import_file_name, "r");
    char arr[10000] = "";
    var output="";
    
    if (fp == NULL) {
        perror("File open error!\n");
        exit(1);
    }
    //else{
    //    printf("find file\n");
    //}
    
    while ((fgets(arr, 10000, fp)) != NULL) {
        int space_num = numOfSpaceAheadString(arr);
        //printf(""++"\n",space_num);
        if (space_num == 0) {
            if (find(arr, "def ") == 0) {
                var remain = substr(arr, 4, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(as_name, "") != 0) {
                    to_append=append("def ", as_name);
                    to_append=append(to_append, append(".", remain));
                    
                } else {                    
                    to_append=append("def ", remain);
                }
                output=append(output, to_append);
            } else if (find(arr, "class ") == 0) {
                var remain = substr(arr, 6, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(to_append, "") != 0) {                    
                    to_append=append("class ", as_name);
                    to_append=append(to_append, append(".", remain));
                    
                } else {                    
                    to_append=append("class ", remain);
                }                
                output=append(output, to_append);
            } else {

                // I changed the code here on Dec 4 to fix a.y ('a' is as_name) problem
                if (isExpression(arr)) {
                    output=append(output,append(append(as_name, "."), arr));
                } else {                
                    output=append(output, arr);
                }
            }
        } else {
            output=append(output, arr);
        }
    }
    
    fclose(fp);
    //printf("output is "++"\n",output);
    //printf("output--->\n|"++"|\n",output);
    return output;
}
*/

//javascript : file operation
/*
var getOneFunctionFromFile(var import_file_name, var func_name) {
    FILE *fp = fopen(import_file_name, "r");
    char arr[1000] = "";
    char output[10000] = "";

    if (fp == NULL) {
        perror("File open error!\n");
        exit(1);
    }
    //else{
    //    printf("find file\n");
    //}

    bool begin = FALSE;
    //bool finish=FALSE;
    while ((fgets(arr, 1000, fp)) != NULL) {
        if (stringIsEmpty(arr) == TRUE) {
            continue;
        }
        //printf("----> "++"\n",arr);
        int space_num = numOfSpaceAheadString(arr);
        //printf(""++"\n",space_num);
        if (begin == TRUE && space_num == 0) {
            if (arr[0] == '#') {
                strcat(output, arr);
                continue;
            } else {
                begin = FALSE;
                break;
            }
        }
        if (begin == TRUE) {
            strcat(output, arr);
        }
        if (space_num == 0) {
            var temp = malloc(sizeof (char) *((int) strlen(func_name) + 2));
            strcpy(temp, func_name);
            strcat(temp, "(");
            temp[(int) strlen(func_name) + 1] = 0;

            if (find(arr, "def ") == 0 && find_not_in_string(arr, temp) != -1) {
                strcat(output, arr);
                begin = TRUE;
            } else if (find(arr, "class ") == 0 && find_not_in_string(arr, temp) != -1) {
                strcat(output, arr);
                begin = TRUE;
            }
        }
    }

    fclose(fp);
    //printf("output is "++"\n",output);
    //printf("output--->"++"\n",output);
    var output2;


    if ((int) strlen(output) == 0) {
        output2 = "";
    } else {
        int a = 0;
        output2 = malloc(sizeof (char) *(int) strlen(output) + sizeof (char));
        for (a = 0; a < (int) strlen(output); a++) {
            output2[a] = output[a];
        }
        output2[(int) strlen(output)] = 0;
        //output2[(int)strlen(output)]="\0";
    }
    return output2;

}*/

/*
 ##########################################################################################################################
 This function is used for "from A import B as C" and mistake occurred while formating.
 C.B is formed whiling formating
 While the correct way should be replace B with C
 ##########################################################################################################################
var getOneFunctionFromFileAndFormatItgetOneFunctionFromFile(var import_file_name, var func_name, var as_name) {
    FILE *fp = fopen(import_file_name, "r");
    char arr[10000] = "";
    char output[10000] = "";

    if (fp == NULL) {
        perror("File open error!\n");
        exit(1);
    }
    //else{
    //    printf("find file\n");
    //}

    bool begin = FALSE;
    //bool finish=FALSE;
    while ((fgets(arr, 10000, fp)) != NULL) {
        if (stringIsEmpty(arr) == TRUE) {
            continue;
        }
        //printf("----> "++"\n",arr);
        int space_num = numOfSpaceAheadString(arr);
        //printf(""++"\n",space_num);
        if (begin == TRUE && space_num == 0) {
            if (arr[0] == '#') {
                strcat(output, arr);
                continue;
            } else {
                begin = FALSE;
                break;
            }
        }
        if (begin == TRUE) {
            strcat(output, arr);
        }
        if (space_num == 0) {
            var temp = malloc(sizeof (char) *((int) strlen(func_name) + 2));
            strcat(temp, func_name);
            strcat(temp, "(");
            temp[(int) strlen(temp)] = 0;

            if (find(arr, "def ") == 0 && find_not_in_string(arr, temp) != -1) {
                var remain = substr(arr, 4, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(as_name, "") != 0) {
                    to_append = malloc(sizeof (char) *(4 + 2 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "def ");
                    strcat(to_append, as_name);
                    strcat(to_append, ".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                } else {
                    to_append = malloc(sizeof (char) *(4 + 1 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "def ");
                    //strcat(to_append, as_name);
                    //strcat(to_append, ".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                }
                strcat(output, to_append);
                begin = TRUE;
            } else if (find(arr, "class ") == 0 && find_not_in_string(arr, temp) != -1) {
                var remain = substr(arr, 4, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(to_append, "") != 0) {
                    to_append = malloc(sizeof (char) *(8 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "class ");
                    strcat(to_append, as_name);
                    strcat(to_append, ".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                } else {
                    to_append = malloc(sizeof (char) *(7 + (int) strlen(as_name)+(int) strlen(remain)));
                    strcat(to_append, "class ");
                    //strcat(to_append,as_name);
                    //strcat(to_append,".");
                    strcat(to_append, remain);
                    to_append[(int) strlen(to_append)] = 0;
                }
                strcat(output, to_append);
                begin = TRUE;
            }
        }
    }

    fclose(fp);
    //printf("output is "++"\n",output);
    //printf("output--->"++"\n",output);
    var output2;


    if ((int) strlen(output) == 0) {
        output2 = "";
    } else {
        output2=append("", output);
    }
    return output2;

}
*/

// javascript : file operation
/*
function getOneFunctionFromFileAndFormatItgetOneFunctionFromFile(var import_file_name, var func_name, var as_name) {
    FILE *fp = fopen(import_file_name, "r");
    char arr[10000] = "";
    var output = "";
    
    //printf("func_name "++" as_name "++"\n",func_name,as_name);
    
    if (fp == NULL) {
        perror("File open error!\n");
        exit(1);
    }
    //else{
    //    printf("find file\n");
    //}
    
    bool begin = FALSE;
    //bool finish=FALSE;
    while ((fgets(arr, 10000, fp)) != NULL) {
        if (stringIsEmpty(arr) == TRUE) {
            continue;
        }
        //printf("----> "++"\n",arr);
        int space_num = numOfSpaceAheadString(arr);
        //printf(""++"\n",space_num);
        if (begin == TRUE && space_num == 0) {
            if (arr[0] == '#') {
                output=append(output, arr);
                continue;
            } else {
                begin = FALSE;
                break;
            }
        }
        if (begin == TRUE) {
            output=append(output, arr);
        }
        if (space_num == 0) {
            if (isExpression(arr)) {
                var var_name=variableName(arr);
                if (strcmp(var_name, func_name)==0) {
                    int index_of_equal=find(arr, "=");
                    return append(as_name,substr(arr, index_of_equal, (int)strlen(arr)) );
                }
            }
            var temp = malloc(sizeof (char) *((int) strlen(func_name) + 2));
            strcpy(temp, func_name);
            strcat(temp, "(");
            temp[(int) strlen(func_name) + 1] = 0;
            
            if (find(arr, "def ") == 0 && find_not_in_string(arr, temp) != -1) {
                var remain = substr(arr, 4, (int) strlen(arr));
                remain = trim(remain);
                var to_append="";
                if (strcmp(as_name, "") != 0) {
                    to_append=append(to_append, "def ");
                    to_append=append(to_append, as_name);
                    to_append=append(to_append, substr(remain, find(remain, "("), (int)strlen(remain)));
                } else {
                    //to_append = malloc(sizeof (char) *(4 + 1 + (int) strlen(as_name)+(int) strlen(remain)));
                    to_append=append(to_append, "def ");
                    to_append=append(to_append, remain);
                }
                output=append(output, to_append);
                begin = TRUE;
            } else if (find(arr, "class ") == 0) {
                int index_of_class_name=find(arr, func_name);
                if (arr[index_of_class_name-1]!=' '||(arr[index_of_class_name+(int)strlen(func_name)]!=' '&&arr[index_of_class_name+(int)strlen(func_name)]!=':')) {
                    continue;
                }
                var remain = substr(arr, 6, (int) strlen(arr));
                remain = trim(remain);
                var to_append;
                if (strcmp(as_name, "") != 0) {
                    int index_of_extends=find(remain, "extends");
                    // Find Extends
                    if (index_of_extends!=-1) {
                        to_append=append("class ", as_name);
                        to_append=append(to_append, " ");
                        to_append=append(to_append, substr(remain, index_of_extends, (int)strlen(remain)));
                    } 
                    else {
                        to_append=append("class ", replace(remain,func_name,as_name));
                    }
                } else {
                    to_append=append(to_append, "class ");
                    to_append=append(to_append, remain);
                }
                output=append(output, to_append);
                begin = TRUE;
            }
        }
    }
    
    fclose(fp);
    return output;
}
*/


// javascript : file operation
/*
function checkWhetherStringExistsInFileNotInString(var existing_file, var check_str, int from_row){
    FILE *fp=fopen(existing_file,"r");
    bool existed=FALSE;
    if (fp!=NULL) {
        int i=0;
        char arr[10000]="";
        while (fgets(arr, 10000, fp)!=NULL) {
            var arr_arr=removeNFromBack(arr);
            if (stringIsEmpty(arr_arr)) {
                continue;
            }
            if (i>=from_row) {
                existed=FALSE;
                int length=(int)strlen(arr_arr);
                int index=find_not_in_string(arr_arr, check_str);
                
                
                while (index!=-1) {
                    
                    int index_of_last_char=index+(int)strlen(check_str)-1;
                    // most ahead
                    if (index==0) {
                        if (index_of_last_char<length-1) {
                            if (isalpha(arr_arr[index_of_last_char+1])==TRUE || arr_arr[index_of_last_char+1]=='_') {
                                existed=FALSE;
                                index=find_from_index(arr_arr, check_str, index+1);
                                continue;
                            }
                        }
                    }
                    // most behind
                    else if (index>=1 && index_of_last_char==length-1) {
                        if (isalpha(arr_arr[index-1])==TRUE || arr_arr[index-1]=='_') {
                            existed=FALSE;
                            index=find_from_index(arr_arr, check_str, index+1);
                            continue;
                        }
                    }
                    // middle
                    else {
                        if (isalpha(arr_arr[index-1])==TRUE || arr_arr[index-1]=='_' || isalpha(arr_arr[index_of_last_char+1])==TRUE || arr_arr[index_of_last_char+1]=='_') {
                            existed=FALSE;
                            index=find_from_index(arr_arr, check_str, index+1);
                            continue;
                        }
                    }
                    
                    
                    existed=TRUE;
                    break;
                }
                
                if (existed==TRUE) {
                    break;
                }
                else{
                    i++;
                    continue;
                }
            }
            i++;
        }
        
    }
    
    fclose(fp);
    return existed;
}*/
// Auto clean unused variables in application


// javascript : file operation
/*
void Walley_Clean_Variables(var existing_file, struct VAR struct_var[], int from_row){
    FILE *fp=fopen(existing_file,"r");
    if (fp!=NULL) {
        // after initialize walley.wy, some var remain....
        int i=0;
        while (struct_var[i].var_name!=NULL) {
            var var_name=struct_var[i].var_name;
            bool exist=checkWhetherStringExistsInFileNotInString(existing_file, var_name, from_row);
            if (exist==FALSE) {

                // prevent from deleting those important variables.
                if (find(var_name, "__temp_while__")==0||
                    find(var_name, "__temp_while_space__")==0||
                    find(var_name, "__temp_string_in_while_loop__")==0||
                    find(var_name, "__temp_if__")==0||
                    find(var_name, "__temp_if__")==0||
                    find(var_name, "__temp_if_space__")==0||
                    find(var_name, "__has_run_if__")==0||
                    find(var_name, "__temp_for__")==0||
                    find(var_name, "__temp_i__")==0||
                    find(var_name, "__temp_string_in_for_loop__")==0||
                    find(var_name, "__temp_class__")==0||
                    find(var_name, "__temp_if__")==0||
                    find(var_name, "__temp_class_name_now_writting__")==0||
                    find(var_name, "__string_in_temp_class__")==0||
                    find(var_name, "__instance_name__")==0||
                    find(var_name, "__instance_var__")==0||
                    find(var_name, "__size_of_array__")==0
                    ) {
                    i++;
                    continue;
                }
                
                Var_removeVar(&struct_var, var_name);
            }
            i=i+1;
        }
    }
    fclose(fp);
}
*/


/*
 * 
 * javascript : binary
 * 
 */
/*
var changeIntToBinary(char x){
    unsigned i, n = (sizeof(x) * CHAR_BIT) - 1;
    var output="";
    for (i = 0; i <= n; i++) {
        //printf(""++"",(x >> (n-i)) & 1);
        output=append(output, intToCString((x >> (n-i)) & 1));
    }
    return output;
}

var changeTextToBinary(var input_str){
    var binary="";
    int i;
    for( i=0; input_str[i]!='\0'; i++ )
    {
        var bin=changeIntToBinary(input_str[i]);
        binary=append(binary, bin);
    }
    return binary;
}

var changeTextToBinaryWithBoundary(var input_str){
    var binary="";
    int i;
    for( i=0; input_str[i]!='\0'; i++ )
    {
        var bin=changeIntToBinary(input_str[i]);
        binary=append(binary, bin);
        binary=append(binary, "@");
    }
    return binary;
}

int changeBinaryToAscii(var input_str){
    input_str=stringReverse(input_str);
    int length=input_str.length;
    if (length!=8) {
        printf("Mistake occurred whiling calling function changeBinaryToAscii\ninput_str length is not 8\n");
        exit(2);
    }
    int i=0;
    int output_int=0;
    for (i=0; i<length; i++) {
        char temp=input_str[i];
        output_int+=atoi(charToString(temp))*pow(2, i);
        //printf("temp %c, output "++"\n",temp,output_int);
    }
    //printf("output_int "++"\n",output_int);
    return output_int;
}

var changeBinaryToText(var input_str){
    int length=input_str.length;
    if (length%8!=0) {
        printf("Mistake occurred while translating Binary to Text\nBinary can not be divided by 8");
        exit(0);
    }
    int i=0;
    var output="";
    for (; i<length-7; i=i+8) {
        var temp_str=substr(input_str, i, i+8);
        output=append(output, charToString(changeBinaryToAscii(temp_str)));
    }
    return output;
}

void printBinary(unsigned char x) {
    unsigned i, n = (sizeof(x) * CHAR_BIT) - 1;
    
    for (i = 0; i <= n; i++) {
        printf(""++"",(x >> (n-i)) & 1);
    }
    printf(" ");
}


*/


/*
 For Example: FUNCTION_functions is :[
 show1:None:
 
 #~Begin
 
 ##Finish Init Params
 
 println "Show 1"
 
 
 #~End
 
 
 show2:None:
 
 #~Begin
 
 ##Finish Init Params
 
 show1()
 
 
 println "Show 2"
 
 
 #~End
]
 so functions are 
 show1
 show2
 
 return [show1,show2]
 
 
 */


function getFunctionNameAndReturnList(FUNCTION_functions){
    var i=0;
    var output="[";
    var length_of_Function_function=atoi(FUNCTION_functions[0]);
    while (i<length_of_Function_function) {
        if (strcmp(FUNCTION_functions[i], "#~Begin\n")==0) {
            var temp_function=FUNCTION_functions[i-1];
            temp_function=substr(temp_function, 0, find(temp_function, ":"));
            output=append(output, append(temp_function, ","));
        }
        i++;
    }
    output=substr(output, 0, output.length-1);
    output=append(output, "]");
    return output;
}
/*
 eg:
 
 a:1:int
 b:2:int
 return [a,b]
 
 */
function getVarNameAndReturnList(struct_var){
    var output="[";
    var i=0;
    var length=0;
    if (strcmp(struct_var[0].var_name,"__size_of_array__")!=0) {
        printf("getVarNameAndReturnList..Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=atoi(struct_var[0].var_value);
    }
    while (i<length) {
        var var_name=struct_var[i].var_name;
        // prevent from deleting those important variables.
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
            find(var_name, "__instance_var__")==0
            ) {
        }
        else{

            output=append(output, struct_var[i].var_name);
            output=append(output, ",");
        }
        
        i=i+1;
    }
    output=substr(output, 0, output.length-1);
    output=append(output, "]");
    return output;

}


// eg deleteOneFunctionFromBehind(FUNCTION,"print") will delete print function from FUNCTION
function deleteOneFunctionFromBehind(FUNCTION_functions, delete_func_name){
    var i=0;
    Str_addString(FUNCTION_functions, NULL);
    while (FUNCTION_functions[i]!=NULL) {
        i++;
    }

    i=i-1;
    var final=i;
    var start=0;
    var end=final;
    var func_name=append(delete_func_name, ":");
    while (i>=0) {
        if (find(FUNCTION_functions[i],func_name)==0) {
            //printf("FIND FUNCTION, BEGIN TO DELETE\n");
            start=i;
            break;
        }
        i--;
    }
    i=i+1;
    while (FUNCTION_functions[i]!=NULL) {
        //printf("------> |"++"|\n",FUNCTION_functions[i]);
        if (find(FUNCTION_functions[i],"#~End\n")==0) {
            //printf("FIND END\n");
            end=i;
            break;
        }
        i++;
    }
    
    //var *new_functions=malloc(sizeof(var *)*(final-end));
    var new_functions=Str_initStringList(new_function);
    
    i=0;
    while (i<(final-end)) {
        //new_functions[i]=FUNCTION_functions[i+end];
        Str_addString(new_function,FUNCTION_functions[i+end]);
        i++;
    }
    i=start;
    while (FUNCTION_functions[i]!=NULL) {
        FUNCTION_functions[i]=NULL;
        i++;
    }
    
    i=0;
    while (i<(final-end)) {
        FUNCTION_functions[start+i]=new_functions[i+1];
        i++;
    }

}



