/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//
//  walley_core.h
//  Walley
//
//  Created by shd101wyy on 12-10-18.
//  Copyright (c) 2012年 shd101wyy. All rights reserved.
//

//
//  walley_core_final.h
//  Walley
//
//  Created by shd101wyy on 12-10-17.
//  Copyright (c) 2012年 shd101wyy. All rights reserved.
//

/*
 * File:   walley.h
 * Author: shd101wyy
 *
 * Created on August 17, 2012, 2:41 PM
 */
//#include "walley_function.h"
//#include "walley_language.h"

var TEMP_FUNCTION_PARAMETER;
var TEMP_FUNCTION_NAME;

function Walley_Initialize_Settings(settings){
    //    fputs("space:0:int:\n",fp);
    /*
    settings[0].var_name="space";
    settings[0].var_value="0";
    settings[0].var_type="int";*/
    Var_addProperty(settings, "space", "0", "int");
    
    //fputs("current_space:0:int:\n",fp);
    /*
    settings[1].var_name="current_space";
    settings[1].var_value="0";
    settings[1].var_type="int";*/
    Var_addProperty(settings, "current_space", "0", "int");

    
    //fputs("now_writting_function:0:int:\n",fp);
    /*
    settings[2].var_name="now_writting_function";
    settings[2].var_value="0";
    settings[2].var_type="int";*/
    Var_addProperty(settings, "now_writting_function", "0", "int");

    
    //fputs("now_writting_class:0:int:\n",fp);
    /*
    settings[3].var_name="now_writting_class";
    settings[3].var_value="0";
    settings[3].var_type="int";*/
    Var_addProperty(settings, "now_writting_class", "0", "int");

    
    //fputs("now_writting_while:0:int:\n",fp);
    /*
    settings[4].var_name="now_writting_while";
    settings[4].var_value="0";
    settings[4].var_type="int";*/
    Var_addProperty(settings, "now_writting_while", "0", "int");

    
    //fputs("now_writting_for:0:int:\n",fp);
    /*
    settings[5].var_name="now_writting_for";
    settings[5].var_value="0";
    settings[5].var_type="int";*/
    Var_addProperty(settings, "now_writting_for", "0", "int");

    
    //fputs("now_run_if:0:int:\n",fp);
    /*
    settings[6].var_name="now_run_if";
    settings[6].var_value="0";
    settings[6].var_type="int";*/
    Var_addProperty(settings, "now_run_if", "0", "int");

    
    //fputs("last_if_sentence:\"None\":string:\n",fp);
    /*
    settings[7].var_name="last_if_sentence";
    settings[7].var_value="\"None\"";
    settings[7].var_type="string";*/
    Var_addProperty(settings, "last_if_sentence", "\"None\"", "string");

    
    //fputs("last_while_sentence:\"None\":string:\n",fp);
    /*
    settings[8].var_name="last_while_sentence";
    settings[8].var_value="\"None\"";
    settings[8].var_type="string";*/
    Var_addProperty(settings, "last_while_sentence", "\"None\"", "string");

    
    //fputs("temp_i:\"None\":string:\n",fp); // for i in x------>i
    /*
    settings[9].var_name="temp_i";
    settings[9].var_value="\"None\"";
    settings[9].var_type="string";*/
    Var_addProperty(settings, "temp_i", "\"None\"", "string");

    
    //fputs("temp_i_in_for_sentence:\"None\":string:\n",fp); // for i in x-------> value of x
    /*
    settings[10].var_name="temp_i_in_for_sentence";
    settings[10].var_value="\"None\"";
    settings[10].var_type="string";*/
    Var_addProperty(settings, "temp_i_in_for_sentence", "\"None\"", "string");

    

    
    //fputs("while_finish:1:int:\n",fp);
    /*
    settings[13].var_name="while_finish";
    settings[13].var_value="1";
    settings[13].var_type="int";*/
    Var_addProperty(settings, "while_finish", "1", "int");

    
    //fputs("space_of_first_if_sentence:0:int:\n",fp);
    /*
    settings[14].var_name="space_of_first_if_sentence";
    settings[14].var_value="0";
    settings[14].var_type="int";*/
    Var_addProperty(settings, "space_of_first_if_sentence", "0", "int");

    
    //fputs("space_of_first_while_sentence:0:int:\n",fp);
    /*
    settings[15].var_name="space_of_first_while_sentence";
    settings[15].var_value="0";
    settings[15].var_type="int";*/
    Var_addProperty(settings, "space_of_first_while_sentence", "0", "int");

    
    //fputs("space_of_first_for_sentence:0:int:\n",fp);
    /*
    settings[16].var_name="space_of_first_for_sentence";
    settings[16].var_value="0";
    settings[16].var_type="int";*/
    Var_addProperty(settings, "space_of_first_for_sentence", "0", "int");

    
    //fputs("space_of_first_def_sentence:0:int:\n",fp);
    /*
    settings[17].var_name="space_of_first_def_sentence";
    settings[17].var_value="0";
    settings[17].var_type="int";*/
    Var_addProperty(settings, "space_of_first_def_sentence", "0", "int");

    
    //fputs("space_of_first_class_sentence:0:int:\n",fp);
    /*
    settings[18].var_name="space_of_first_class_sentence";
    settings[18].var_value="0";
    settings[18].var_type="int";*/
    Var_addProperty(settings, "space_of_first_class_sentence", "0", "int");

    
    //fputs("now_in_annotation:0:int:\n",fp);
    /*
    settings[19].var_name="now_in_annotation";
    settings[19].var_value="0";
    settings[19].var_type="int";*/
    Var_addProperty(settings, "now_in_annotation", "0", "int");

    
    //fputs("can_run_basic_input:0:int:\n", fp);
    /*
    settings[20].var_name="can_run_basic_input";
    settings[20].var_value="0";
    settings[20].var_type="int";*/
    Var_addProperty(settings, "can_run_basic_input", "0", "int");

    /*
    settings[21].var_name="can_break";
    settings[21].var_value="0";
    settings[21].var_type="int";*/
    Var_addProperty(settings, "can_break", "0", "int");

    /*
    settings[22].var_name="can_continue";
    settings[22].var_value="0";
    settings[22].var_type="int";*/
    Var_addProperty(settings, "can_continue", "0", "int");

    /*
    settings[23].var_name="turn";
    settings[23].var_value="0";
    settings[23].var_type="int";*/
    Var_addProperty(settings, "turn", "0", "int");

    /*
    settings[24].var_name="now_writting_expression";
    settings[24].var_value="0";
    settings[24].var_type="int";*/
    Var_addProperty(settings, "now_writting_expression", "0", "int");

    /*
    settings[25].var_name="fraction_mode";
    settings[25].var_value="1";
    settings[25].var_type="int";*/
    Var_addProperty(settings, "fraction_mode", "1", "int");



}

function Walley_Initialize_Var(struct_var){
    //int i=0;
    // While Sentence //
    //fputs("__temp_while__:[]:list:\n",fp);
    //fputs("#~Begin:__temp_while__:\n",fp);
    //fputs("__temp_while__[0]:None:expression:\n",fp);
    //fputs("#~End:__temp_while__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_while__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_while__", "[]", "list");
    
    
    //Space before While Sentence //
    //fputs("__temp_while_space__:[]:list:\n",fp);
    //fputs("#~Begin:__temp_while_space__:\n",fp);
    //fputs("__temp_while_space__[0]:None:expression:\n",fp);
    //fputs("#~End:__temp_while_space__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_while_space__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_while_space__", "[]", "list");

    
   

    
    // If Sentence //
    //fputs("__temp_if__:[]:list:\n",fp);
    //fputs("#~Begin:__temp_if__:\n",fp);
    //fputs("__temp_if__[0]:None:expression:\n",fp);
    //fputs("#~End:__temp_if__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_if__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_if__", "[]", "list");

    
    //space before is sentence//
    //fputs("__temp_if_space__:[]:list:\n",fp);
    //fputs("#~Begin:__temp_if_space__:\n",fp);
    //fputs("__temp_if_space__[0]:None:expression:\n",fp);
    //fputs("#~End:__temp_if_space__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_if_space__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_if_space__", "[]", "list");

    
    
    // has run if ....
    // if __has_run_if__ in if sentence is true, then elif and else will not run
    // if __has_run_if__ in elif sentence is true, then elif and else behind will not run
    //fputs("__has_run_if__:[]:list:\n",fp);
    //fputs("#~Begin:__has_run_if__:\n",fp);
    //fputs("__has_run_if__[0]:None:expression:\n",fp);
    //fputs("#~End:__has_run_if__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__has_run_if__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__has_run_if__", "[]", "list");

    
    
    // For Sentence //
    /*
     * for i in x:
     * x is the for sentence
     * x is __temp_for__
     */
    //fputs("__temp_for__:[]:list:\n",fp);
    //fputs("#~Begin:__temp_for__:\n",fp);
    //fputs("__temp_for__[0]:None:expression:\n",fp);
    //fputs("#~End:__temp_for__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_for__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_for__", "[]", "list");

    
    
    // For I ??
    /*
     * for i in x:
     * i is the For I
     * i is __temp_i__
     */
    //fputs("__temp_i__:[]:list:\n",fp);
    //fputs("#~Begin:__temp_i__:\n",fp);
    //fputs("__temp_i__[0]:None:expression:\n",fp);
    //fputs("#~End:__temp_i__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_i__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_i__", "[]", "list");

    
   

    
    
    //fputs("__temp_class__:{}:dictionary:\n",fp);
    //fputs("#~Begin:__temp_class__:\n",fp);
    //fputs("#~End:__temp_class__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_class__";
    var[i].var_value="{}";
    var[i].var_type="dictionary";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_class__", "{}", "dictionary");

    
    
    
    //fputs("__temp_class_name_now_writting__:'None':string:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__temp_class_name_now_writting__";
    var[i].var_value="'None'";
    var[i].var_type="string";
    i=i+1;*/
    Var_addProperty(struct_var, "__temp_class_name_now_writting__", "'None'", "string");

    
    
    
    //fputs("__string_in_temp_class__:{}:dictionary:\n",fp);
    //fputs("#~Begin:__string_in_temp_class__:\n",fp);
    //fputs("#~End:__string_in_temp_class__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__string_in_temp_class__";
    var[i].var_value="{}";
    var[i].var_type="dictionary";
    i=i+1;*/
    Var_addProperty(struct_var, "__string_in_temp_class__", "{}", "dictionary");

    
    
    //fputs("__instance_name__:[]:list:\n",fp);
    //fputs("#~Begin:__instance_name__:\n",fp);
    //fputs("__instance_name__[0]:None:expression:\n",fp);
    //fputs("#~End:__instance_name__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__instance_name__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__instance_name__", "[]", "list");

    
    
    //eg x.age=16, save x.age=16 to VAR_var
    //fputs("__instance_var__:[]:list:\n",fp);
    //fputs("#~Begin:__instance_var__:\n",fp);
    //fputs("__instance_var__[0]:None:expression:\n",fp);
    //fputs("#~End:__instance_var__:\n",fp);
    //fputs("\n",fp);
    /*
    var[i].var_name="__instance_var__";
    var[i].var_value="[]";
    var[i].var_type="list";
    i=i+1;*/
    Var_addProperty(struct_var, "__instance_var__", "[]", "list");

    
    
}


//void Walley_Run_For_Default(var  input_str) {
//// printf("#### Walley_Run_For_Default ####\n");
// Walley_Run_For_Appointed_Var(VAR_var,"__walley_settings__.wy","__walley_file__.wy",input_str);
//}


function Walley_Initialize(){
    
    VAR_var=Var_initVar(VAR_var);
    VAR_settings=Var_initVar(VAR_settings);
    
    TEMP_FILE=Str_initStringList(TEMP_FILE);
    FUNCTION=Str_initStringList(FUNCTION);
    WALLEY_EXPRESSION=Str_initStringList(WALLEY_EXPRESSION);
    AS_NAME="";
    //matho_init();
    
    //################ Initialize some necessary expression ##########################################################
    Str_addString(WALLEY_EXPRESSION, "walley_show_var|show var");
    Str_addString(WALLEY_EXPRESSION, "walley_decimal_mode|decimal mode");
    Str_addString(WALLEY_EXPRESSION, "walley_fraction_mode|fraction mode");
    Str_addString(WALLEY_EXPRESSION, "walley_is_fraction_mode|is fraction mode");

    
    //################################################################################################################
    
    
    
    Walley_Initialize_Var(VAR_var);
    Walley_Initialize_Settings(VAR_settings);
    Str_addString(TEMP_FILE, "#Temp File In Order To Run goto");
    
      
    
    STRING_IN_WHILE_LOOP=Str_initStringList(STRING_IN_WHILE_LOOP);
    STRING_IN_FOR_LOOP=Str_initStringList(STRING_IN_FOR_LOOP);
    
}

function Walley_Finalize(){
    
    printf("Finish Running Walley");
    
}

function Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, input_str) {
   
    if (VAR_VALUE_INCOMPLETE==TRUE) {
            if (strcmp(VAR_VALUE_INCOMPLETE_TYPE,"string\"")==0) {
            var length_of_input_str=input_str.length;
            
            // Can become complete now
            if (input_str[length_of_input_str-1]=='"'&&input_str[length_of_input_str-2]!='\\') {
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, input_str);
                input_str=append(VAR_NAME_TO_BE_COMPLETE, "=");
                input_str=append(input_str, VAR_VALUE_TO_BE_COMPLETE);
                
                
                VAR_VALUE_INCOMPLETE=FALSE;
                VAR_VALUE_INCOMPLETE_TYPE="";
                VAR_VALUE_TO_BE_COMPLETE="";
                VAR_NAME_TO_BE_COMPLETE="";
                VAR_VALUE_TYPE_TO_BE_COMPLETE="";
                
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, input_str);
                
            }
            // Can not become complete now
            else{
                if (input_str[length_of_input_str-1]=='\\') {
                    input_str=append(input_str, "n");
                }
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, input_str);
            }
        
        }
        else if (strcmp(VAR_VALUE_INCOMPLETE_TYPE, "string'")==0){
            var length_of_input_str=input_str.length;
            // Can become complete now
            if (input_str[length_of_input_str-1]=='\''&&input_str[length_of_input_str-2]!='\\') {
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, input_str);
                input_str=append(VAR_NAME_TO_BE_COMPLETE, "=");
                input_str=append(input_str, VAR_VALUE_TO_BE_COMPLETE);
                
                
                VAR_VALUE_INCOMPLETE=FALSE;
                VAR_VALUE_INCOMPLETE_TYPE="";
                VAR_VALUE_TO_BE_COMPLETE="";
                VAR_NAME_TO_BE_COMPLETE="";
                VAR_VALUE_TYPE_TO_BE_COMPLETE="";
                
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, input_str);
                
            }
            // Can not become complete now
            else{
                if (input_str[length_of_input_str-1]=='\\') {
                    input_str=append(input_str, "n");
                }
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, input_str);
            }

        }
        else if (strcmp(VAR_VALUE_INCOMPLETE_TYPE, "list")==0){
            var length_of_input_str=input_str.length;
            if (LIST_TOTAL_LEFT==LIST_TOTAL_RIGHT&&input_str[length_of_input_str-1]==']'){
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, trim(input_str));
                input_str=append(VAR_NAME_TO_BE_COMPLETE, "=");
                input_str=append(input_str, VAR_VALUE_TO_BE_COMPLETE);
                
                
                VAR_VALUE_INCOMPLETE=FALSE;
                VAR_VALUE_INCOMPLETE_TYPE="";
                VAR_VALUE_TO_BE_COMPLETE="";
                VAR_NAME_TO_BE_COMPLETE="";
                VAR_VALUE_TYPE_TO_BE_COMPLETE="";
                
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, input_str);
                
            }
            // Can not become complete now
            else{
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, trim(input_str));
            }
        }
        else if (strcmp(VAR_VALUE_INCOMPLETE_TYPE, "dictionary")==0){
            var length_of_input_str=input_str.length;
            if (count_str_not_in_string(input_str, "{")+1==count_str_not_in_string(input_str, "}")&&input_str[length_of_input_str-1]=='}') {
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, input_str);
                input_str=append(VAR_NAME_TO_BE_COMPLETE, "=");
                input_str=append(input_str, VAR_VALUE_TO_BE_COMPLETE);
                
                
                VAR_VALUE_INCOMPLETE=FALSE;
                VAR_VALUE_INCOMPLETE_TYPE="";
                VAR_VALUE_TO_BE_COMPLETE="";
                VAR_NAME_TO_BE_COMPLETE="";
                VAR_VALUE_TYPE_TO_BE_COMPLETE="";
                
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, input_str);
                
            }
            // Can not become complete now
            else{
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, input_str);
            }
        }
        else if (strcmp(VAR_VALUE_INCOMPLETE_TYPE, "expression")==0){
            var length_of_input_str=input_str.length;
            if (input_str[length_of_input_str-1]=='>') {
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, " ");
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, trim(input_str));
                input_str=append(VAR_NAME_TO_BE_COMPLETE, "=");
                input_str=append(input_str, VAR_VALUE_TO_BE_COMPLETE);
                
                
                VAR_VALUE_INCOMPLETE=FALSE;
                VAR_VALUE_INCOMPLETE_TYPE="";
                VAR_VALUE_TO_BE_COMPLETE="";
                VAR_NAME_TO_BE_COMPLETE="";
                VAR_VALUE_TYPE_TO_BE_COMPLETE="";
                
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, input_str);
                
            }
            // Can not become complete now
            else{
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, " ");
                VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, trim(input_str));
            }

        }

    }
    else if (EXPRESSION_INCOMPLETE==TRUE){
        var trim_input_str=trim(input_str);
        // can become incomplete
        if (trim_input_str[trim_input_str.length-1]=='>') {
            EXPRESSION_TO_BE_COMPLETE=append(EXPRESSION_TO_BE_COMPLETE, " ");
            EXPRESSION_TO_BE_COMPLETE=append(EXPRESSION_TO_BE_COMPLETE, trim_input_str);
            Str_addString(WALLEY_EXPRESSION, append(TEMP_FUNCTION_NAME,append("|",substr(EXPRESSION_TO_BE_COMPLETE,2,EXPRESSION_TO_BE_COMPLETE.length-1))));
           
            //printf("--->|"+EXPRESSION_TO_BE_COMPLETE+"|\n");
            EXPRESSION_INCOMPLETE=FALSE;
            EXPRESSION_TO_BE_COMPLETE="";
        }
        
        // can not become complete
        else{
            EXPRESSION_TO_BE_COMPLETE=append(EXPRESSION_TO_BE_COMPLETE, " ");
            EXPRESSION_TO_BE_COMPLETE=append(EXPRESSION_TO_BE_COMPLETE, trim_input_str);
        }
    }

    else if (RUN_EXPRESSION_INCOMPLETE==TRUE){
        var trim_input_str=trim(input_str);
        var length_of_trim_input_str=trim_input_str.length;
        
        // complete
        if (trim_input_str[length_of_trim_input_str-1]=='>') {
            RUN_EXPRESSION_TO_BE_COMPLETE=append(RUN_EXPRESSION_TO_BE_COMPLETE, " ");
            RUN_EXPRESSION_TO_BE_COMPLETE=append(RUN_EXPRESSION_TO_BE_COMPLETE, trim_input_str);
            RUN_EXPRESSION_INCOMPLETE=FALSE;
            Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, RUN_EXPRESSION_TO_BE_COMPLETE);
            RUN_EXPRESSION_TO_BE_COMPLETE="";
        }
        
        // not complete
        else{
            RUN_EXPRESSION_TO_BE_COMPLETE=append(RUN_EXPRESSION_TO_BE_COMPLETE, " ");
            RUN_EXPRESSION_TO_BE_COMPLETE=append(RUN_EXPRESSION_TO_BE_COMPLETE, trim_input_str);
        }
    }
    else{
    
    // I stop auto clean temporiaryly
    /*
    //####################  Auto clean variables  #########################################
    int turn = atoi(Var_getValueOfVar(struct_settings , "turn"));
    if (turn%10==0&&turn!=0) {
       
        Walley_Clean_Variables(existing_file, struct_var, turn);
    }
    
    //#####################################################################################
    */
    
    
    /*  These codes have problem
     // New code here on Dec 10. 
     //####################  Auto clean variables  #########################################
    if (strcmp(existing_file, FIRST_RUNNING_FILE)==0) {
        
    
        int turn = TURN;
        if (turn%10==0&&turn!=0) {
            Walley_Clean_Variables(existing_file, struct_var, turn);
        }
    }
    
     //#####################################################################################
     */

    
    
    
    var continue_run = FALSE;
    var find_gang_gang = FALSE;
    var str_is_empty=FALSE;
    var run_goto = FALSE;
    
    var temp_input_str=input_str;
        
    if (find_not_in_string(input_str, "\n") != -1) {
        continue_run = TRUE;
        input_str = substr(input_str, 0, find_not_in_string(input_str, "\n"));
    }
    //printf("input_str---->|"+input_str+"|\n");
    
    if (find_not_in_string(input_str, "\\n") != -1) {
        continue_run = TRUE;
        find_gang_gang = TRUE;
        input_str = substr(input_str, 0, find_not_in_string(input_str, "\\n"));
    }
    
    input_str=removeNFromBack(input_str);

    var now_in_annotation = atoi(Var_getValueOfVar(struct_settings, "now_in_annotation"));
    var judge_annotation_string=trim(input_str);
    var length_of_judge_annotation_string=judge_annotation_string.length;
    if (judge_annotation_string[length_of_judge_annotation_string-1]=='#' && judge_annotation_string[length_of_judge_annotation_string-2]=='~'){
        now_in_annotation = 0;
        
        //char temp4[100];
        //sprintf(temp4, ""++"", now_in_annotation);
        var temp4=intToCString(now_in_annotation);
        
        Var_changeValueOfVar(struct_settings,"now_in_annotation", temp4, "int");
    }
    else if (judge_annotation_string[0] == '#' && judge_annotation_string[1] == '~') {
        //// printf("Now Begin Long Annotation");
        now_in_annotation = 1;
        //char temp4[100];
        //sprintf(temp4, ""++"", now_in_annotation);
        var temp4=intToCString(now_in_annotation);

        Var_changeValueOfVar(struct_settings, "now_in_annotation",temp4, "int");
    }
    if(now_in_annotation==0 && stringIsEmpty(trim(input_str))==FALSE){
        Str_addString(save_to_file, input_str);

        var space = atoi(Var_getValueOfVar(struct_settings , "space"));
        var now_writting_function = atoi(Var_getValueOfVar(struct_settings , "now_writting_function"));
        var now_writting_class = atoi(Var_getValueOfVar(struct_settings , "now_writting_class"));
        var now_writting_while = atoi(Var_getValueOfVar(struct_settings , "now_writting_while"));
        var now_writting_for = atoi(Var_getValueOfVar(struct_settings , "now_writting_for"));
        var now_run_if = atoi(Var_getValueOfVar(struct_settings , "now_run_if"));
        var last_if_sentence = Var_getValueOfVar(struct_settings , "last_if_sentence");
        var last_while_sentence = Var_getValueOfVar(struct_settings , "last_while_sentence");
        var temp_i = Var_getValueOfVar(struct_settings , "temp_i");
        var temp_i_in_for_sentence = Var_getValueOfVar(struct_settings , "temp_i_in_for_sentence");
        var space_of_first_while_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_while_sentence"));
        var space_of_first_for_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_for_sentence"));
        var space_of_first_def_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_def_sentence"));
        var space_of_first_class_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_class_sentence"));
        
        //I add this value here in order to run now_run_if.
        var can_run_basic_input = TRUE;
        
        
        var current_space = numOfSpaceAheadString(input_str);
        //char temp2[100];
        //sprintf(temp2, ""++"", current_space);
        var temp2=intToCString(current_space);
        Var_changeValueOfVar(struct_settings , "current_space", temp2, "int");
        
        
        
        // delete #.... after sentence
        var temp_input_str2=trim(input_str);
        var index_of_jing=find_not_in_string(temp_input_str2, "#");
        if(index_of_jing!=-1 && index_of_jing !=0){
            input_str=substr(input_str, 0, find_not_in_string(input_str, "#"));
        }
        

        input_str=cleanUpSentence(input_str);
        
        
       
        if (current_space > space) {
            can_run_basic_input = FALSE;
        }

        
        if (input_str[input_str.length-1]==';') {
            printf("@@ |"+input_str+"|\n");
            printf("You do not need to add ; behind\n");
            exit(0);
        }
        
        
        if(CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==FALSE){
            can_run_basic_input=FALSE;
        }
    
        printf("--------arr-------- "+input_str+"--"+current_space+"--"+space+"--"+now_run_if+""+"\n");
    
        printf("##\n");
        
        CURRENT_INPUT_STR=input_str;

        
        if (now_run_if == TRUE && str_is_empty==FALSE && CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==TRUE) {
            printf("Now Run If\n");
            printf("Input_str is "+input_str+"\n");
            
            if (current_space > space || current_space % 4 != 0) {
                //if (current_space != space) {
                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
                printf("Space Mistake\nCurrent Space is “＋current_space＋”\nRequired Space is "+space+"\n");
                exit(0);
            }
            // I do not know whether it is right or not.......
            if (current_space < space) {
                //input_str = removeAheadSpace(input_str);
                // change space and rewrite it to file
                space=current_space;
                Var_changeValueOfVar(struct_settings , "space", intToCString(space), "int");
                Var_changeValueOfVar(struct_settings , "current_space", intToCString(current_space), "int");
                now_run_if=FALSE;

                }
            
        }        //################## Now Run For #######################################

        
        //############### Now Writting While In Progress ########################
        if (now_writting_while == TRUE && str_is_empty==FALSE && CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==TRUE) {
            //// printf("Space "++", Current Space "++"\n", space, current_space);
            if (current_space > space_of_first_while_sentence && current_space % 4 == 0) {
                // printf("################ Now Writting While ###################");
                can_run_basic_input = FALSE;
                input_str = removeAheadSpaceForNum(input_str, space_of_first_while_sentence + 4);
                
                if (stringIsEmpty(input_str)==FALSE) {
                    Str_addString(STRING_IN_WHILE_LOOP, input_str);

                }

            } else if (current_space <= space_of_first_while_sentence && current_space % 4 == 0) {
                //printf("Begin to Run While, input_str "++", current_space "++", space_of_first "++"\n",input_str,current_space,space_of_first_while_sentence);
                can_run_basic_input = TRUE;
                now_writting_while = FALSE;
                
                
                //char temp3[100];
                //sprintf(temp3, ""++"", now_writting_while);
                var temp3=intToCString(now_writting_while);
                Var_changeValueOfVar(struct_settings , "now_writting_while", temp3, "int");
                space=current_space;
                temp3=intToCString(space);
                Var_changeValueOfVar(struct_settings , "space", temp3, "int");
                
                
                //get __temp_while__ to get last_while_sentence
                var __temp_while__=Var_getValueOfVar(struct_var,"__temp_while__");
                
                
                var length_of_list=valueNumOfList(__temp_while__);
                var last_while_sentence2=valueOfListAtIndex(__temp_while__,length_of_list-1);
           
                    
                var temp_string_list_in_while_loop=STRING_IN_WHILE_LOOP;
                STRING_IN_WHILE_LOOP=Str_initStringList(STRING_IN_WHILE_LOOP);

                    
                while (Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function(last_while_sentence2, struct_var,FUNCTION_functions) == TRUE) {
                                    CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=TRUE;
 
                    Walley_Run_For_Appointed_Var_String_List(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, temp_string_list_in_while_loop);
                    
                    if (CAN_BREAK) {
                        CAN_BREAK=FALSE;
                        break;
                    }
                    if (CAN_CONTINUE) {
                        CAN_CONTINUE=FALSE;
                        continue;
                    }

                    
                }
                 CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=TRUE;

                //Afte run while, remove the element at __temp_while__
                //char final_index[100];
                //sprintf(final_index,""++"",length_of_list-1);
                var final_index=intToCString(length_of_list-1);

                
                var remove_at_index="[";
                remove_at_index+=final_index;
                remove_at_index+="]";
                //// printf("remove at index is "++"\n",remove_at_index);
                __temp_while__=listRemoveOneElementAtOneIndex(__temp_while__,remove_at_index);
                //// printf("__temp_while__ "++"\n\n",__temp_while__);
                //changeTheWholeVarValueFromItsInitialOneFromFileForList(struct_var,"__temp_while__",__temp_while__);
                changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_while__", __temp_while__);
                
            }
        }//############### Now Writting Function In Progress #####################
        else if (now_writting_function == TRUE && str_is_empty==FALSE && CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==TRUE) {
            can_run_basic_input = FALSE;
            //// printf("Current Space is "++", Required Space is "++"\n",current_space,space);
            if (current_space % 4 != 0) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

                printf("Space Mistake\nCurrent Space is "+current_space+"\nRequired Space is "+space+"\n");
                exit(0);
            } else if (current_space <= space_of_first_def_sentence) {
                can_run_basic_input = TRUE;
                now_writting_function = FALSE;
                var temp2;
                space=current_space;
                temp2=intToCString(space);
                Var_changeValueOfVar(struct_settings , "space", temp2, "int");
                temp2=intToCString(now_writting_function);
                Var_changeValueOfVar(struct_settings , "now_writting_function", temp2, "int");                
                Str_addString(FUNCTION_functions, "#~End\n\n");
                
               
                
            } else {
                
                var now_writting_expression=atoi(Var_getValueOfVar(struct_settings , "now_writting_expression"));
                
                
                input_str = removeAheadSpaceForNum(input_str, space_of_first_def_sentence + 4);
                
                if ((find(removeAheadSpace(input_str), "exp")==0&&input_str[input_str.length-1]==':')|| now_writting_expression==TRUE) {
                    //printf("input_str |"++"|, space "++", current_space "++"\n",input_str,space,current_space);
                    if (now_writting_expression==FALSE) {
                        //printf(""++"\n",TEMP_FUNCTION_PARAMETER);
                        now_writting_expression=TRUE;
                        Var_changeValueOfVar(struct_settings, "now_writting_expression", "1", "int");
                    }
                    else if (current_space==space) {
                        Str_addString(FUNCTION_functions, input_str);
                        Str_addString(FUNCTION_functions, "\n");
                        Var_changeValueOfVar(struct_settings, "now_writting_expression", "0", "int");
                    }
                    else{
                        //printf("EXPRESSION----> %s\n",input_str);
                        //var sentence_after_analysize=Walley_Analyze_Sentence_By_Known_Variable(input_str,TEMP_FUNCTION_PARAMETER);
                        //printf("sentence_after_analysize %s\n",sentence_after_analysize);
                        
                        //printf("TEMP FUNCTION NAME %s\n",TEMP_FUNCTION_NAME);
                        
                        
                        // new code here on Jan 6
                        

                        if (EXPRESSION_INCOMPLETE==FALSE) {
                            
                            
                            var trim_input_str=trim(input_str);
                            
                            
                            
                            // basic expression without boundary
                            // like
                            /*
                             def add(num1,num2):
                             exp:
                             add num1 num2  # just add "add num1 num2" as expression
                             */

                            if ( trim_input_str[0]!='<'&&trim_input_str[1]!='@') {
                                // add exression...                                                   //problem here, I add trim. No problem before.
                                Str_addString(WALLEY_EXPRESSION, append(TEMP_FUNCTION_NAME,append("|",trim(input_str))));
                            }
                            
                            
                            // basic expression with boundary but only in one row
                            // like
                            /*
                             def add(num1,num2):
                                exp:
                                    <@add num1 num2>  # just add "add num1 num2" as expression
                             */
                            
                            else if (trim_input_str[0]=='<'&&trim_input_str[1]=='@'&&trim_input_str[trim_input_str.length-1]=='>'){
                                Str_addString(WALLEY_EXPRESSION, append(TEMP_FUNCTION_NAME,append("|",substr(trim_input_str, 2, trim_input_str.length-1))));
                            }
                            
                            
                            // basic expression with boundary and not only in one row
                            // like
                            /*
                             def add(num1,num2):
                             exp:
                             <@add
                               num1
                               num2
                             >
                             
                             */
                            else{
                                EXPRESSION_INCOMPLETE=TRUE;
                                EXPRESSION_TO_BE_COMPLETE=trim_input_str;
                            }
                        }
                        
                    }
                }
            
            
                else{
                    Str_addString(FUNCTION_functions, input_str);
                    Str_addString(FUNCTION_functions, "\n");
                }
                space = current_space;
            }
            
            // find another function
            if (find_from_index_to_index(removeAheadSpace(input_str), "def ", 0, removeAheadSpace(input_str).length) != -1) {
                space = space + 4;
            }   
            
        }        //################### Now Writting Class ##############################
        else if (now_writting_class == TRUE && str_is_empty==FALSE && CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==TRUE) {
            can_run_basic_input = FALSE;
            // printf("#### Now_Writting_Class In Progress ####\n");
            
            if(current_space % 4 !=0){
                printf("Space Mistake occurred while defining a class\n");
            }
            else if (current_space<=space_of_first_class_sentence){
                //printf(""++"\n",input_str);
                //printf("Finish defining class.\n");
                now_writting_class=FALSE;
                can_run_basic_input = TRUE;
                space=current_space;
                var temp2=intToCString(space);
                Var_changeValueOfVar(struct_settings , "space", temp2, "int");
                temp2=intToCString(now_writting_class);
                Var_changeValueOfVar(struct_settings , "now_writting_class", temp2, "int");
            }
            else{
                //printf("Now Writting Class To File\n");
                input_str = removeAheadSpaceForNum(input_str, space_of_first_class_sentence + 4);

                space=current_space;
                
                var __string_in_temp_class__=Var_getValueOfVar(struct_var,"__string_in_temp_class__");
                var __class_now__=Var_getValueOfVar(struct_var,"__temp_class_name_now_writting__");
                //printf("class now ----->"++"\n",__class_now__);
                //printf("88888888 "++"\n",__string_in_temp_class__);
                var string_in_class=valueAtKey(__string_in_temp_class__,__class_now__);

                
                var temp_in_class=append(substr(string_in_class, 0, string_in_class.length - 1), input_str);
                temp_in_class=append(temp_in_class, "\\n\"");
                string_in_class=temp_in_class;
                
                var dict_var_name="__string_in_temp_class__{";
                dict_var_name+=__class_now__;
                dict_var_name+="}";
                changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, dict_var_name, string_in_class);
            }
            
        }        //################## Now Run If #######################################
        else if (now_writting_for == TRUE && str_is_empty==FALSE && CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==TRUE) {
           // printf("#### Now Writting For ####");
            if (current_space > space_of_first_for_sentence && current_space % 4 == 0) {
                //// printf("################ Now Writting For ###################");
                //printf("STRING IN FOR LOOP is |"++"|\n", string_in_for_loop);
                can_run_basic_input = FALSE;
                input_str = removeAheadSpaceForNum(input_str, space_of_first_for_sentence + 4);
                
                 
                if (stringIsEmpty(input_str)==FALSE) {
                    Str_addString(STRING_IN_FOR_LOOP, input_str);
                    
                }

                
                
            } else if (current_space <= space_of_first_for_sentence && current_space % 4 == 0) {
                can_run_basic_input = TRUE;
                now_writting_for = FALSE;
                var temp3;
                temp3=intToCString(now_writting_for);
                Var_changeValueOfVar(struct_settings , "now_writting_for", temp3, "int");
                space=current_space;
                //sprintf(temp3, ""++"", space);
                temp3=intToCString(space);
                Var_changeValueOfVar(struct_settings , "space", temp3, "int");
                
                if (strcmp(variableValueType(temp_i_in_for_sentence), "list") == 0) {
                    //printf("i is list type\ni value is |"++"|\n", temp_i_in_for_sentence);
                    //printf("temp i is |"++"|\n", temp_i);
                    var value_num = valueNumOfList(temp_i_in_for_sentence);
                    
                    //get __temp_for__ to get last_while_sentence
                    var __temp_for__=Var_getValueOfVar(struct_var,"__temp_for__");
                    var length_of_list=valueNumOfList(__temp_for__);
                    //char final_index0[100];
                    //sprintf(final_index0,""++"",length_of_list-1);
                    var final_index0=intToCString(length_of_list-1);
                    var temp_index="[";
                    temp_index+=final_index0;
                    temp_index+="]";
                    //var temp_i_in_for_sentence2=valueOfListAtIndex(__temp_for__,length_of_list-1);
                    var temp_i_in_for_sentence2=valueOfListAtIndexString(__temp_for__,temp_index);
                    
                    //printf("temp_i_in_for_sentence is "++"\n",temp_i_in_for_sentence2);
                    
                    //get __temp_i__
                    var __temp_i__=Var_getValueOfVar(struct_var,"__temp_i__");
                    var temp_i2=valueOfListAtIndexString(__temp_i__,temp_index);
                    
                    
                    
                    var x = 0;
                     
                    var temp_string_list_in_foor_loop=STRING_IN_FOR_LOOP;
                    STRING_IN_FOR_LOOP=Str_initStringList(STRING_IN_FOR_LOOP);
                    

                    for (x = 0; x < value_num; x++) {
                        CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=TRUE;

                        //printf("X--->"++"\n", x);
                        //char temp_num[100];
                        //sprintf(temp_num, ""++"", x);
                        var temp_num=intToCString(x);
                        
                        var index_temp = "[";
                        index_temp+=temp_num;
                        index_temp+="]";
                        
                        var value_of_i_in_x = valueOfListAtIndexString(temp_i_in_for_sentence2, index_temp);
                        //// printf("value_of_i_in_x is |"++"|\n",value_of_i_in_x);
                        //printf("Now Run "++" Time\n",x);
                        //printf("Get Here\n");
                        
                        var init_temp_i = temp_i2;
                        init_temp_i+= "=";
                        init_temp_i+=value_of_i_in_x;
                        

                        Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions,init_temp_i);
  
                        
                        Walley_Run_For_Appointed_Var_String_List(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, temp_string_list_in_foor_loop);                        
                        
                        if (CAN_BREAK) {
                            CAN_BREAK=FALSE;
                            break;
                        }
                        if (CAN_CONTINUE) {
                            CAN_CONTINUE=FALSE;
                            continue;
                        }

                    }
                                    CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=TRUE;

                    string_in_for_loop = "\"#For\\n\"";
                    temp_i = "\"None\"";
                    temp_i_in_for_sentence = "\"None\"";
                    
                    //Afte run while, remove the element at __temp_for__
                    //char final_index[100];
                    //sprintf(final_index,""++"",length_of_list-1);
                    var final_index=intToCString(length_of_list-1);
                    var remove_at_index="[";
                    remove_at_index+=final_index;
                    remove_at_index+="]";

                    __temp_for__=listRemoveOneElementAtOneIndex(__temp_for__,remove_at_index);
                    //changeTheWholeVarValueFromItsInitialOneFromFileForList(struct_var,"__temp_for__",__temp_for__);
                    changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_for__", __temp_for__);
                   
                    __temp_i__=listRemoveOneElementAtOneIndex(__temp_i__,remove_at_index);
                    //changeTheWholeVarValueFromItsInitialOneFromFileForList(struct_var,"__temp_i__",__temp_i__);
                    changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_i__", __temp_i__);

                }
                else {
                    printf("#### For Sentence Only Support list Type At This Time\n");
                }
                
            }
        }
     if(CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==FALSE){
            can_run_basic_input=FALSE;
        }

                //############### New code here on Jan 10 #############################################
        //############### To support switch sentence ##########################################
        if(NOW_WRITTING_SWITCH == TRUE && str_is_empty==FALSE && CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK==TRUE){
            
            //printf("NOW_WRITTING_SWITCH\n");
            
            can_run_basic_input = FALSE;
            
            if(current_space % 4 !=0){
                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

                printf("Space Mistake occurred while defining a switch\n");
            }
            else if (current_space<=SPACE_OF_FIRST_SWITCH_SENTENCE){
                can_run_basic_input = TRUE;
       
                var copy_SENTENCE_OF_SWITCH=SENTENCE_OF_SWITCH;
                
                var temp2=intToCString(SPACE_OF_FIRST_SWITCH_SENTENCE);
                Var_changeValueOfVar(struct_settings , "space", append("",temp2), "int");
                
                NOW_WRITTING_SWITCH=FALSE;
                SENTENCE_OF_SWITCH="";
                SWITCH_OBJECT="";
                SPACE_OF_FIRST_SWITCH_SENTENCE=0;
                
                //printf("TO RUN :|\n"+copy_SENTENCE_OF_SWITCH+"|\nspace is "+SPACE_OF_FIRST_SWITCH_SENTENCE+"\n");
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, copy_SENTENCE_OF_SWITCH);
                
                space=current_space;
                temp2=intToCString(space);
                Var_changeValueOfVar(struct_settings , "space", append("",temp2), "int");
                //sprintf(temp2, "%d", now_writting_switch);
                //Var_changeValueOfVar(*struct_settings , "now_writting_switch", append("",temp2), "int");
            }
            else{
                
                // case sentence
                if (find(trim(input_str),"case ")==0&& current_space==SPACE_OF_FIRST_SWITCH_SENTENCE+4) {
                    if (current_space%4!=0 && current_space<SPACE_OF_FIRST_SWITCH_SENTENCE+4) {
                        printf("Space mistake occurred while running |"+input_str+"|\n");
                        exit(0);
                    }
                    else{
                        var temp_str="";
                        var trim_input_str=trim(input_str);
                        
                        // case "Hello":    str_after_case = "Hello"
                        var str_after_case=substr(trim_input_str, 5, find_from_behind(trim_input_str, ":"));
                        
                        
                        // str_after_case -> 1 or 2
                        // change to  -----> 1 or x==2
                        str_after_case=replace_not_in_string(str_after_case, " or ", append(" or ", append(SWITCH_OBJECT, "==")));
                        str_after_case=replace_not_in_string(str_after_case, " and ", append(" and ", append(SWITCH_OBJECT, "==")));


                        str_after_case=trim(str_after_case);
                        
                        //printf("str_after_case--->"+str_after_case+"\n");
                                                
                        var a=0;
                        for (; a<SPACE_OF_FIRST_SWITCH_SENTENCE; a++) {
                            temp_str=append(" ", temp_str);
                        }
                        // has defined if sentence
                        if (find(trim(SENTENCE_OF_SWITCH),"if")==0) {
                            
                            // else
                            if (strcmp(str_after_case, "default")==0) {
                                temp_str=append(temp_str, "else:");
                            }
                            
                            // elif
                            else{
                                temp_str=append(temp_str,"elif ");
                                temp_str=append(temp_str, append(SWITCH_OBJECT, append("==", str_after_case)));
                                temp_str=append(temp_str, ":");

                            }
                            
                        }
                        // have not defined if sentence
                        else{
                            temp_str=append(temp_str, "if ");
                            temp_str=append(temp_str, append(SWITCH_OBJECT, append("==", str_after_case)));
                            temp_str=append(temp_str, ":");
                        }
                        
                        SENTENCE_OF_SWITCH=append(SENTENCE_OF_SWITCH,append(temp_str, "\n"));
                        space=current_space+4;
                        Var_changeValueOfVar(struct_settings, "space", intToCString(space), "int");
                        }
                }
                // string in case sentence
                else{
                    
                    var temp_str=trim(input_str);
                    var a=0;
                    for (; a<current_space-4; a++) {
                        temp_str=append(" ", temp_str);
                    }
                    SENTENCE_OF_SWITCH=append(SENTENCE_OF_SWITCH, temp_str);
                    SENTENCE_OF_SWITCH=append(SENTENCE_OF_SWITCH, "\n");
                }
                //
            }
        }
        //#####################################################################################
        var temp5=intToCString(can_run_basic_input);
        
        Var_changeValueOfVar(struct_settings , "can_run_basic_input", temp5, "int");
        //##########################################################################################################
        //##########################################################################################################
        //##########################################################################################################
        //##########################################################################################################
        //// printf("can run basic input "++" numOfSpaceAheadString "++" required space "++"\n",can_run_basic_input,numOfSpaceAheadString(input_str),space);
        

        if (can_run_basic_input == TRUE && (numOfSpaceAheadString(input_str) == 0 || space==current_space)) {
            var input_temp = removeAheadSpace(input_str);
            if (strcmp(trim(input_str), "pass")==0) {
                CAN_BREAK=TRUE;
                CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=FALSE;
                //Var_changeValueOfVar(*struct_settings, "can_break", "1", "int");
            }
            else if (strcmp(trim(input_str), "break")==0) {
                CAN_BREAK=TRUE;
                CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=FALSE;

                //Var_changeValueOfVar(*struct_settings, "can_break", "1", "int");
            }
            else if (strcmp(trim(input_str), "continue")==0) {
                CAN_CONTINUE=TRUE;
                CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=FALSE;

                //Var_changeValueOfVar(*struct_settings, "can_continue", "1", "int");
            }
            else if (input_temp[0] == '#' ||
                find(input_temp, "for ") == 0 ||
                find(input_temp, "while ") == 0 ||
                find(input_temp, "if ") == 0 || find(input_temp, "elif ") == 0 || find(input_temp, "else") == 0 ||
                find(input_temp, "def ") == 0 ||
                find(input_temp,"class ")==0
                // new code here to support switch
                     || find(input_temp,"switch ")==0) {
                                
                Walley_Judge_Run_Anotation_For_While_Def_Class(struct_var, struct_settings, FUNCTION_functions,input_str);
            
            }// ##################################### CHECK RETURN IN FUNCTION, CHECK WHETHER IT CAN RUN OR NOT
            else if (strcmp(substr(trim(input_str),0, 6),"return")==0){
                printf("");
            }
            //#################### Basic Input To Run #############################
            else {
                //printf("\n\n######### Basic Input To Run #########\n");
                input_str = trim(input_str);
                //printf("input_str "++"\n",input_str);
                //#####################  Init class  #####################
                //if (find_not_in_string(input_str, " is ") != -1||
                if((find_not_in_string(input_str, "=")!=-1&&find_not_in_string(input_str,"(")!=-1&& (find_not_in_string(input_str, "=")<find_not_in_string(input_str,"(")) &&checkWhetherSameClassExistedFromVar(struct_var,trim(substr(input_str,find_not_in_string(input_str, "=")+1,find_not_in_string(input_str,"("))))==TRUE)
                    ) {
                    //printf("#### Begin to initialize class ####\n");
                    // ## a is hello()
                    // ## a is instance_name
                    // ## hello() is __class__
                    // ## in hello("Hello"), "Hello" is parameter.
                    var instance_name = substr(input_str, 0, find_not_in_string(input_str, "="));
                    var __class__ = substr(input_str, find_not_in_string(input_str, "=") + 1, input_str.length);
                    instance_name = trim(instance_name);
                    __class__ = trim(__class__);
                    //var class_name=substr(__class__,0,find(__class__,"("));
                    var parameter=substr(__class__,find(__class__,"(")+1,find_not_in_string(__class__,")"));
                    
                   
                    
                    var after_change=formatStringInClassWithExtendFromVar(struct_var,input_str);
                    // printf("#### AFTER CHANGE\n|"++"|\n####\n",after_change);

                    Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file,FUNCTION_functions, after_change);
                    addInstanceNameToVar(instance_name,struct_var);
                    
                    // For list instance like x[0]=a()
                    if (find(instance_name,"[")!=-1) {
                        //printf("instace name is |"++"|\n",instance_name);
                        //int left=find(instance_name,"[");
                        //int right=indexOfMostOutterRectBracket(instance_name, left);
                        var right=instance_name.length-1;
                        //if (right!=-1) {
                        if (instance_name[right]==']') {
                            changeTheOneVarValueFromItsInitialOneFromVarForList(struct_var, substr(instance_name,0,right+1), toString(__class__));
                        }
                    }
                    
                    
                    //For dictionary like x{"A"}=a()
                    if (find(instance_name,"{")!=-1) {
                        //int left=find(instance_name,"{");
                        //int right=indexOfMostOutterDictBracket(instance_name, left);
                        var right=instance_name.length-1;
                        if (instance_name[right]=='}') {
                            changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, instance_name, toString(__class__));
                        }
                    }
                    
                    
                    // run init() function
                    // a.init()
                    if (find(after_change,".init(")!=-1) {
                        var init=instance_name;
                        init+=".init(";
                        init+=parameter;
                        init+=")";
                        //printf("BEGIN TO INITIALIZE "++"\n",init);
                        Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions,init);
                    }
                    //printf("After Initializing\n");
                
                }
            
                
               
               
                // Disable Setmark and Goto
                /*
                //##################### setmark ##################
                else if (find(removeAheadSpace(input_str), "setmark ") == 0) {
                    //// printf("#### Find setmark ####");
                }//#################### goto ######################
                else if (find(removeAheadSpace(input_str), "goto ") == 0) {
                    var mark_name = substr(input_str, find(input_str, "goto ") + 5, input_str.length);
                    //// printf("Mark Name :"++"\n", mark_name);
                    mark_name = removeBackSpace(removeAheadSpace(mark_name));
                    //// printf("#### Find goto ####");
                    var string_to_run;
                    if (strcmp("None", existing_file) == 0) {
                        string_to_run = getStringFromFile(temp_file_name);
                    } else {
                        string_to_run = getStringFromFile(existing_file);
                    }
                    //// printf("String in File is |"++"|\n", getStringFromFile(temp_file_name));
                    var setmark = malloc(sizeof (char) *((int) strlen("setmark ")+(int) strlen(mark_name)));
                    strcat(setmark, "setmark ");
                    strcat(setmark, mark_name);
                    if (find(string_to_run, setmark) == -1) {
                        printf("Mistake Occurred while calling function Walley_To_Mark\nMark not found");
                        exit(1);
                    } else {
                        string_to_run = substr(string_to_run, find(string_to_run, "setmark "), (int) strlen(string_to_run));
                        FILE *fp = fopen(temp_file_name, "w");
                        fputs("", fp);
                        fclose(fp);
                        //// printf("$$$ \n|"++"|\n", string_to_run);
                        //clearTextInFile(temp_file_name);
                        writeStringToFile(temp_file_name, string_to_run);
                        writeStringToFile(temp_file_name, "\n");
                        run_goto = TRUE;
                        //Walley_Run_Second_Generation(struct_var,setting_file,temp_file_name,string_to_run);
                    }
                }*/      
                 //#####################  Eval  ###################
                else if (isExpression(input_str) == TRUE) {
                    
                    // x=12
                    // or x,y=12,13
                    var var_name=variableName(input_str);
                    // x,y=12,13 more than one var
                    if (find(var_name,",")!=-1) {
                        var num_of_space_ahead=numOfSpaceAheadString(input_str);
                        var var_value=variableValue(input_str);
                        var_name=append(var_name, ",");
                        var last_var_value=substr(var_value, find_from_behind(var_value, ",")+1, var_value.length);
                        var_value=append(var_value, ",");
                        var num_of_comma=count_str(var_name, ",");
                        var a=0;
                        for (; a<num_of_comma; a++) {
                            var index_of_comma=find(var_name,",");
                            var temp_var_name=substr(var_name, 0, index_of_comma);
                            var_name=substr(var_name, index_of_comma+1, var_name.length);
                            
                            var index_of_comma2=find(var_value,",");
                            var temp_var_value;
                            if (index_of_comma2==-1) {
                                temp_var_value=last_var_value;
                            }
                            else{
                                temp_var_value=substr(var_value, 0, index_of_comma2);
                                var_value=substr(var_value, index_of_comma2+1, var_value.length);
                            }
                            
                            
                            var temp_temp="";
                            temp_var_name=trim(temp_var_name);
                            temp_var_value=trim(temp_var_value);
                            var b=0;
                            for (; b<num_of_space_ahead; b++) {
                                temp_temp=append(temp_temp, " ");
                            }
                            temp_temp=append(temp_temp, temp_var_name);
                            temp_temp=append(temp_temp, "=");
                            temp_temp=append(temp_temp, temp_var_value);
                            Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, temp_temp);
                        }
                    }
                    // x=13      only one var
                    else{
                        Walley_Eval_And_Update_Var_And_Value_To_Var(struct_var,FUNCTION_functions, input_str);
                    }
                }                // ##############  Is Not Expression ######################
                
                //#####################  Delete Space  ###################
                //} else if(strcmp("",removeBackSpace(removeAheadSpace(input_str)))==0){
                //    printf("Empty Input");
                //space=space-4;
                
                //#####################  Mistake  ###################
                else {
                                        
                    // new code on Jan 6 to run
                    // <@Hello
                    // World>
                    // kind code
                    var trim_input_str=trim(input_str);
                    
                    if (trim_input_str[0]=='<'&&trim_input_str[1]=='@'&&trim_input_str[trim_input_str.length-1]!='>') {
                        RUN_EXPRESSION_INCOMPLETE=TRUE;
                        RUN_EXPRESSION_TO_BE_COMPLETE=input_str;
                    }
                
                    else{
                    // make print 'hello'----><print 'hello'>
                    var sentence_num=numOfSmallSentences(input_str);
                    if (sentence_num>1) {
                        if (input_str[0]!='<') {
                            input_str=append("<@", input_str);
                            input_str=append(input_str, ">");
                        }
                    }
                  
                    var can_just_eval = TRUE;
                    var index_of_dot = find_not_in_string(input_str, ".");
                    if (index_of_dot > 0) {
                        var temp_char = input_str[index_of_dot - 1];
                        if (isalpha(temp_char)||temp_char=='_')
                            can_just_eval = FALSE;
                    }
                    if (isFunctionFromVar(FUNCTION_functions,input_str) == TRUE) {
                        //// printf("Yes it is function\n");
                        can_just_eval = FALSE;
                    }
                    if (can_just_eval) {
                        var length_of_input_str=input_str.length;
                        if(input_str[length_of_input_str-1]=='+'&&input_str[length_of_input_str-2]=='+') {
                            //printf("++\n");
                            var temp_var_name=substr(input_str, 0, length_of_input_str-2);
                            temp_var_name=trim(temp_var_name);
                            temp_var_name=append(temp_var_name, "=");
                            var temp_to_run=append(temp_var_name, input_str);
                            Walley_Eval_And_Update_Var_And_Value_To_Var(struct_var,FUNCTION_functions,temp_to_run);
                        }
                        else if (input_str[length_of_input_str-1]=='-'&&input_str[length_of_input_str-2]=='-') {
                            var temp_var_name=substr(input_str, 0, length_of_input_str-2);
                            temp_var_name=trim(temp_var_name);
                            temp_var_name=append(temp_var_name, "=");
                            var temp_to_run=append(temp_var_name, input_str);
                            Walley_Eval_And_Update_Var_And_Value_To_Var(struct_var,FUNCTION_functions,temp_to_run);
                        }
                        else{
                            var temp2=append("__temp__=",input_str);                            
                            Walley_Eval_And_Update_Var_And_Value_To_Var(struct_var,FUNCTION_functions, temp2);
                            Var_removeVar(struct_var, "__temp__");
                        }
                    } else {
                        input_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(input_str, struct_var,FUNCTION_functions);
                        Walley_Eval_With_Variable_From_Var(struct_var, input_str);
                    }
                    
                }
            }
                //printf("\n|"+input_str+"| Required space num is "+space+"\n");
                //// printf("#### Set Settings ####\n\n\n");
                
                var temp2;
                temp2=intToCString(space);
                Var_changeValueOfVar(struct_settings , "space", temp2, "int");
                temp2=intToCString(now_writting_function);
                Var_changeValueOfVar(struct_settings , "now_writting_function", temp2, "int");
                temp2=intToCString(now_writting_class);
                Var_changeValueOfVar(struct_settings , "now_writting_class", temp2, "int");
                temp2=intToCString(now_writting_while);
                Var_changeValueOfVar(struct_settings , "now_writting_while", temp2, "int");
                temp2=intToCString(now_writting_for);
                Var_changeValueOfVar(struct_settings , "now_writting_for", temp2, "int");
                temp2=intToCString(now_run_if);
                Var_changeValueOfVar(struct_settings , "now_run_if", temp2, "int");
                temp2=intToCString(space_of_first_while_sentence);
                Var_changeValueOfVar(struct_settings , "space_of_first_while_sentence", temp2, "int");
                temp2=intToCString(space_of_first_for_sentence);
                Var_changeValueOfVar(struct_settings , "space_of_first_for_sentence", temp2,"int");
                temp2=intToCString(space_of_first_def_sentence);
                Var_changeValueOfVar(struct_settings , "space_of_first_def_sentence", temp2,"int");
                temp2=intToCString(space_of_first_class_sentence);
                Var_changeValueOfVar(struct_settings , "space_of_first_class_sentence", temp2,"int");
                
                Var_changeValueOfVar(struct_settings , "last_if_sentence", last_if_sentence, "string");
                Var_changeValueOfVar(struct_settings , "last_while_sentence", last_while_sentence, "string");
                Var_changeValueOfVar(struct_settings , "temp_i", temp_i, "string");
                Var_changeValueOfVar(struct_settings , "temp_i_in_for_sentence", temp_i_in_for_sentence, "string");
            }
            
        }
        if (continue_run == TRUE && run_goto == FALSE) {
            if (find_gang_gang == TRUE) {
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file,FUNCTION_functions, substr(temp_input_str, find_not_in_string(temp_input_str, "\\n") + 2, temp_input_str.length));
                
            } else {
                Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file,FUNCTION_functions, substr(temp_input_str, find_not_in_string(temp_input_str, "\n") + 1, temp_input_str.length));
            }
        }
        /* Disable setmark and goto.....
        if (run_goto == TRUE) {
            //// printf("@@@@ Run GOTO @@@@\n");
            Walley_Run_For_Appointed_Var(struct_var, struct_settings, temp_file, existing_file, getStringFromFile(temp_file_name));
        }*/
    }
    
    
    // I add new Codes Here to solve Annotation Problem...... on Dec 6
    else if (continue_run == TRUE && run_goto == FALSE) {
        //// printf("continue run\n");
        if (find_gang_gang == TRUE) {
            Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file,FUNCTION_functions, substr(temp_input_str, find_not_in_string(temp_input_str, "\\n") + 2, temp_input_str.length));
            
        } else {
            //// printf("STRING LEFT is "++"\n",substr(temp_input_str,find(temp_input_str,"\n")+1,(int)strlen(temp_input_str)));
            Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file,FUNCTION_functions, substr(temp_input_str, find_not_in_string(temp_input_str, "\n") + 1, temp_input_str.length));
        }
    }

}
}

// new function here on Feb 3
function Walley_Run_For_Appointed_Var_String_List(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions,input_str){
    var length=atoi(input_str[0]);
    var i=1;
    for (i=1; i<length; i++) {
        Walley_Run_For_Appointed_Var(struct_var, struct_settings, save_to_file, existing_file, FUNCTION_functions, removeNFromBack(input_str[i]));
    }
}

//############################### Update Var and Var_Value to File#############################
// If var existed, then replace
// else create new one.

// Not modify
function Walley_Update_Var_And_Var_Value_To_Var(struct_var,  var_name,  var_value){
    // printf("#### Walley_Update_Var_And_Var_Value_To_File ####\n");
    //printf("var_name "++" var_value "++"\n",var_name,var_value);
    var var_value_type = variableValueType(var_value);
    var has_same_var_name = Var_Existed(struct_var, var_name);
    
    if (has_same_var_name == TRUE) {
        var previous_var_value=Var_getValueOfVar(struct_var,var_name);
        var previous_var_value_type=variableValueType(previous_var_value);
        
        if (strcmp(var_value_type, "list") == 0 && find(var_name, "[") == -1) {
             
            if (find_not_in_string(var_name, "{")!=-1) {
                changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, var_name, var_value);
            }
            //printf("Value type List, change the whole value of list to file\n");
            else if(strcmp(previous_var_value_type,"list")==0)
                //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name, var_name, var_value);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, var_name, var_value);
            else{
                //Walley_Remove_Variable_And_Value_From_File(file_var_name,var_name);
                Var_removeVar(struct_var, var_name);
                //writeVarNameAndVarValueIntoAppointedFileForList(file_var_name, var_name, var_value);
                writeVarNameAndVarValueIntoAppointedVarForList(struct_var, var_name, var_value);
            }
        }
        // x={a:1,b:2}, now the input is x={a:12}, so need to rewrite x.
        else if (strcmp(var_value_type, "dictionary") == 0 && find(var_name, "{") == -1) {
            if(strcmp(previous_var_value_type,"dictionary")==0){
                //changeTheWholeVarValueFromItsInitialOneFromFileForDictionary(file_var_name, var_name, var_value);
                changeTheWholeVarValueFromItsInitialOneFromVarForDictionary(struct_var, var_name, var_value);
            }
            else{
               // Walley_Remove_Variable_And_Value_From_File(file_var_name,var_name);
                Var_removeVar(struct_var, var_name);
                //writeVarNameAndVarValueIntoAppointedFileForDictionary(file_var_name, var_name, var_value);
                writeVarNameAndVarValueIntoAppointedVarForDictionary(struct_var, var_name, var_value);
            }
        }
        else {
            
            // Eg a[0] is one element of list a
            if (isListElementForVar(struct_var, var_name)) {
                //changeTheOneVarValueFromItsInitialOneFromFileForList(file_var_name, var_name, var_value);
                changeTheOneVarValueFromItsInitialOneFromVarForList(struct_var, var_name, var_value);
            }
            // Eg a{"Hello"} is one element of dictionary
            else if (find_not_in_string(var_name, "{") != -1 && find_not_in_string(var_name, "}") != -1 && find_not_in_str_list_dict_parenthesis(var_name, ".")==-1) {
                //// printf("&&&&&&& Enter Here 1 \n");
                //changeTheOneVarValueFromItsInitialOneFromFileOrAddVarNameAndValueForDictionary(file_var_name, var_name, var_value);
               // printf("!!!!!!!!!!11111\n");
                changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var,var_name,var_value);
            }
            // x[0]=12, x is table
            else if (find_not_in_string(var_name,"[")!=-1){
                 var ahead=substr(var_name, 0, find_not_in_string(var_name, "["));
                 var string_index=substr(var_name, find_not_in_string(var_name, "["), var_name.length);
                 var temp_var_value=Var_getValueOfVar(struct_var, ahead);
                 if (strcmp(variableValueType(temp_var_value), "table")==0) {
                      var_value=Table_addValueOrChangeValue(temp_var_value, string_index, var_value);
                      Var_changeValueOfVar(struct_var, ahead, var_value, "table");
                 }
            }
            else {
                
                if(strcmp(previous_var_value_type,"dictionary")==0||strcmp(previous_var_value_type,"list")==0){
                    //Walley_Remove_Variable_And_Value_From_File(file_var_name,var_name);
                    Var_removeVar(struct_var, var_name);
                    //writeVarNameAndVarValueIntoAppointedFile(file_var_name, var_name, var_value, var_value_type);
                    Var_addProperty(struct_var, var_name, var_value, var_value_type);
                }
                else if(strcmp(var_value_type, "table")==0){
                    Table_updateTableToStructVar(struct_var, var_name, var_value);
                }
                //printf("&&&&&&& Enter Here 2 \n");
                //var_value = Walley_Substitute_Var_And_Function_Return_Value_From_File(var_value, file_var_name);
                //var_value = Walley_Eval_With_Variable_From_File(file_var_name, var_value);
                //var_value_type = variableValueType(var_value);
                else{
                    //printf("here2\n");
                    Var_changeValueOfVar(struct_var, var_name, var_value, var_value_type);
                    //printf("here3\n");
                }
            }
        }
    }
    
    
    // Does not have the same var name
    else {
        // Initialize List
        if (strcmp(var_value_type, "list") == 0) {
             
            if (find_not_in_string(var_name, "{")!=-1) {
                changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, var_name, var_value);
            }
            else{
            
            //printf("Value type List, write the list and its value to file\n");
            //writeVarNameAndVarValueIntoAppointedFileForList(file_var_name, var_name, var_value);
            writeVarNameAndVarValueIntoAppointedVarForList(struct_var, var_name, var_value);
            }

        }
        // Initialize Dictionary
        else if (strcmp(var_value_type, "dictionary") == 0) {
            //// printf("Find Dictionary Type Value");
            //writeVarNameAndVarValueIntoAppointedFileForDictionary(file_var_name, var_name, var_value);
            
            if (find_not_in_string(var_name, "{")==-1) {
               // printf("ENTER HERE EHE\n");
                writeVarNameAndVarValueIntoAppointedVarForDictionary(struct_var, var_name, var_value);
            } else {
               // printf("ENTER HERE 2\n");
                changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, var_name, var_value);
            }
            
            //printf("ENTER HERE EHE\n");
            //writeVarNameAndVarValueIntoAppointedVarForDictionary(struct_var, var_name, var_value);
        }            // Eg a{"Hello"} is one element of dictionary
        else if (strcmp(var_value_type, "table")==0){
            Table_updateTableToStructVar(struct_var, var_name, var_value);
        }
                                                                                             // add new code here to fix x{'a'}.age=12 like problem
        else if (find_not_in_string(var_name, "{") != -1 && find_not_in_string(var_name, "}") != -1 && find_not_in_str_list_dict_parenthesis(var_name, ".")==-1) {
            //// printf("&&&&&&& Enter Here 1 \n");
            //changeTheOneVarValueFromItsInitialOneFromFileOrAddVarNameAndValueForDictionary(file_var_name, var_name, var_value);
            var temp_var_name=substr(var_name, 0, find_not_in_string(var_name, "{"));
            if (Var_Existed(struct_var, temp_var_name)==FALSE) {
                writeVarNameAndVarValueIntoAppointedVarForDictionary(struct_var, temp_var_name, "{}");
            }
            changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var,var_name,var_value);
        } 
    
            
       
        // x[0]=12, x is table
        else if (find_not_in_string(var_name,"[")!=-1){
            var ahead=substr(var_name, 0, find_not_in_string(var_name, "["));
            var string_index=substr(var_name, find_not_in_string(var_name, "["), var_name.length);
            var temp_var_value=Var_getValueOfVar(struct_var, ahead);
            if (strcmp(variableValueType(temp_var_value), "table")==0) {
                var_value=Table_addValueOrChangeValue(temp_var_value, string_index, var_value);
                Var_changeValueOfVar(struct_var, ahead, var_value, "table");
            }
            else if(strcmp(variableValueType(temp_var_value), "list")==0){
                var_value=Table_addValueOrChangeValue(temp_var_value, string_index, var_value);
                //printf("var_value is %s\n",var_value);
                Var_removeVar(struct_var, ahead);

                Var_addProperty(struct_var, ahead, var_value, "table");

            }
            
        }

        // Initialize simple value
        else {
            //printf("++++++++++++enter here\n");
            //var_value=countFromExpression(var_value);
            //var_value = Walley_Substitute_Var_And_Function_Return_Value_From_File(var_value, file_var_name);
            //var_value = Walley_Eval_With_Variable_From_File(file_var_name, var_value);
            //var_value_type = variableValueType(var_value);
            //writeVarNameAndVarValueIntoAppointedFile(file_var_name, var_name, var_value, var_value_type);
            Var_addProperty(struct_var, var_name, var_value, var_value_type);
        }
    }
}

/*
 *This function is mainly about  Walley_Run_One_Function_And_Return_Value. get_var_from_file_name is you get parameter
 * value from the file that you appointed.
 */
//var Walley_Run_One_Function_And_Return_Value(var input_str){

// Not Modify....
function Walley_Run_One_Function_And_Return_Value_From_Var(input_str,struct_var, FUNCTION_functions){
    //printf("\n#### Walley_Run_One_Function_And_Return_Value ####\n");
    //printf("#### "+input_str+"\n");
    
    var global_var_back_up=GLOBAL_VAR;
    
    var function_in_def="[]";

    var  return_var_name="None";
    var  return_value = "";
    //// printf("Function is |"++"|\n",input_str);
    
    input_str=removeBackSpace(input_str);
    input_str=removeAheadSpace(input_str);
    
    
    input_str=append(input_str, ":");
    
    //var func_name=substr(input_str, find(input_str,"def")+3,find(input_str,"("));
    var func_name=substr(input_str,0,find(input_str,"("));
    func_name=removeAheadSpace(func_name);
    func_name=removeBackSpace(func_name);
    
    
    //// printf("here1\n");
    
    // I changed the code below
    //var parameter_str=substr(input_str, find(input_str,"(")+1,find(input_str,")"));
    //printf("input_str now is "++"\n",input_str);
    var parameter_str=substr(input_str, find(input_str,"(")+1,input_str.length-2);
    parameter_str=trim(parameter_str);
    var para_num;
    
    if(stringIsEmpty(parameter_str)){
        para_num=0;
        parameter_str="None";
    } else {
        para_num=count_str(parameter_str,",")+1;
    }
    
    var func_name_temp;
    if(find_not_in_string(func_name,".")!=-1)
        func_name_temp=replace_not_in_string(func_name,".","_");
    else
        func_name_temp=func_name;
    
    
    
    //struct VAR *TEMP_VAR_var;
    //struct VAR *TEMP_VAR_settings;
    TEMP_VAR_var=Var_initVar(TEMP_VAR_var);
    TEMP_VAR_settings=Var_initVar(TEMP_VAR_settings);

    
    Walley_Initialize_Var(TEMP_VAR_var);
    Walley_Initialize_Settings(TEMP_VAR_settings);
    
    
    

    TEMP_TEMP_FILE=Str_initStringList(TEMP_TEMP_FILE);
    
    var find_function = FALSE;
    var begin = FALSE;
    var finish = FALSE;
    var finish_init_param = FALSE;
    
    var temp_temp=append(func_name, ":");
    
    var temp2=append(parameter_str, ",");
    
    
    parameter_str = temp2;
    
    var from_index = 0;
    var output = "";
    
    var row=0;
    var length_of_FUNCTION_functions=atoi((FUNCTION_functions)[0]);
    
    var global_var="[]";


    while (row<length_of_FUNCTION_functions) {
        var arr=FUNCTION_functions[row];
        arr=removeNFromBack(arr);
        if (stringIsEmpty(trim(arr))) {
            row++;
            continue;
        }

        if (find_function == TRUE && strcmp("return", substr(removeBackSpace(removeAheadSpace(arr)), 0, 6)) == 0) {
            
            //find_return=TRUE;
            // printf("\n\n\n\n\n--------Find Return--------\n");
            // printf("|"++"|\n",arr);
            var temp_arr=removeNFromBack(arr);
            Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings, TEMP_TEMP_FILE, "FUNCTION", FUNCTION_functions,temp_arr);

            // printf("AAA--->"++"",Var_getValueOfVar(file_settings_temp_name, "can_run_basic_input"));
            
            //bool can_get_return=atoi(Var_getValueOfVar(file_settings_temp_name, "can_run_basic_input"));
            var can_get_return=atoi(Var_getValueOfVar(TEMP_VAR_settings, "can_run_basic_input"));
            //printf("can get return "++"\n",can_get_return);
            //printf("setting file "++"\n",file_settings_temp_name);
            if (can_get_return==FALSE) {
                row++;
                continue;
            }
            
            finish = TRUE;
            return_var_name = substr(arr, find(arr, "return") + 7, arr.length);
            return_var_name =trim(return_var_name);
            if (return_var_name[return_var_name.length - 1] == '\n') {
                return_var_name = substr(return_var_name, 0, return_var_name.length - 1);
            }
            //printf("Return Var Name is :|"++"|\n",return_var_name);
            break;
        }
        
        if (find(arr, temp_temp) != -1) {
            // printf("Find Function\n");
            //printf("arr is |"++"|, temp_temp is |"++"|\n",arr,temp_temp);
            var index_of_temp_temp=find(arr,temp_temp);
            if ((index_of_temp_temp>=1&&arr[index_of_temp_temp-1]!=' ') && index_of_temp_temp!=0) {
                
            }
            else{
            var row2=row;
            while (TRUE) {
                row=row2;
                row2=row2+1;
                var find_another_function=FALSE;
                while (row2<length_of_FUNCTION_functions) {
                    if (find(FUNCTION_functions[row2],temp_temp)!=-1) {
                        
                        index_of_temp_temp=find(FUNCTION_functions[row2],temp_temp);
                        if ((index_of_temp_temp>=1&&FUNCTION_functions[row2][index_of_temp_temp-1]!=' ') && index_of_temp_temp!=0) {
                            row2++;
                            continue;
                        }
                        
                        
                        row=row2;
                        find_another_function=TRUE;
                        break;
                    }
                    row2++;
                }
                if (find_another_function==FALSE) {
                    break;
                }
            }
                        
            find_function = TRUE;
            }
            
            
        }
        if (find_function == TRUE && find(arr, "#~End") == 0) {
            //// printf("Find End\n");
            finish = TRUE;
        }
        
        if (finish == TRUE) {
            //printf("Finish\n\n");
            break;
            
        }
        
        if(finish_init_param==TRUE && finish==FALSE){
            output+=arr;
        
            // printf("----------> "++"\n",arr);
            
            var temp=trim(arr);
            
            // For def function in a function
            // so this function is private function
            var current_space=numOfSpaceAheadString(arr);
            if (current_space==0 && find(arr,"def ")==0) {
                var temp_func_name=substr(arr, find(arr,"def ")+4, find(arr, "("));
                function_in_def=listAppendOneElement(function_in_def, temp_func_name);
                
            }
            
            
            //printf("----After remove space---> "++" ---\n",temp);
            if(isFunctionFromVar(FUNCTION_functions,temp)){
                
                /*
                 // #### I delete the code below on Dec 6...
                 // #### This code has big problems
                printf("Is Function1111----> "++"\n",arr);
                Walley_Run_One_Function_And_Return_Value_From_Var(temp,TEMP_VAR_var,FUNCTION_functions);
                printf("");
                 */
                
                                
                Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings, TEMP_TEMP_FILE, "FUNCTION", FUNCTION_functions, arr);
            }
            else{
                // printf("*************** GO THERE ***************");
                // if is_instance_value is true, save like Rohit.age to VAR_var
                var is_instance_value=FALSE;
                var is_global_var=FALSE;

                if(isExpression(arr)){
                    //// printf("********* "++" IT IS EXPRESSION ********\n",arr);
                    var var_name2=variableName(arr);
                    var user;
                    if(find_not_in_string(var_name2,".")!=-1){
                        user=substr(var_name2,0,find_not_in_string(var_name2,"."));
                        var is_instance=checkWhetherSameInstanceExistedFromVar(VAR_var,user);
                        if(is_instance)
                            is_instance_value=TRUE;
                        else
                            is_instance_value=FALSE;
                    }
                
                                    
                    var x=0;
                    var num_of_element_in_global_var=valueNumOfList(GLOBAL_VAR);
                    for (; x<num_of_element_in_global_var; x++) {
                        var element=valueOfListAtIndex(GLOBAL_VAR, x);
                        if (strcmp(element, var_name2)==0) {
                            is_global_var=TRUE;
                            break;
                        }
                    }
                    
                }
                if(is_instance_value==FALSE){
                                       
                    // begin to define global var
                    if (find(trim(arr),"global ")==0) {
                        var rest=trim(substr(trim(arr),7,trim(arr).length));
                        var num_of_var=count_str(rest, ",")+1;
                        var x=0;
                        for (; x<num_of_var; x++) {
                            global_var=list_append(global_var, getParamAccordingToIndex(rest,x));
                        }
                        GLOBAL_VAR=global_var;
                    }
                    
                    // is global var
                    else if (is_global_var==TRUE){
                        Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings, TEMP_TEMP_FILE, "FUNCTION",FUNCTION_functions,arr);
                        var var_name3 = variableName(arr);
                        var var_value3 = Var_getValueOfVar(TEMP_VAR_var, var_name3);
                        
                        Walley_Update_Var_And_Var_Value_To_Var(VAR_var, var_name3, var_value3);
                    }
                    else{
                    // printf("********** Not INSTANCE VALUE *********\n");
                    //// printf("#---> "++"\n",arr);
                    //Walley_Run_For_Appointed_Var(file_var_temp_name,file_settings_temp_name,file_file_temp_name,"FUNCTION",arr);
                    Walley_Run_For_Appointed_Var(TEMP_VAR_var,TEMP_VAR_settings,TEMP_TEMP_FILE,"FUNCTION",FUNCTION_functions,arr);
                
                        }
                    }
                else{
                    // printf("************ IT IS INSTANCE VALUE ************");
                    // printf("************ "++" **********\n",arr);

                    Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings, TEMP_TEMP_FILE, "FUNCTION",FUNCTION_functions,arr);
                    var var_name3 = variableName(arr);
                    var var_value3 = Var_getValueOfVar(TEMP_VAR_var, var_name3);
                    
                    // printf("VAR_NAME "++" VAR_VALUE "++"\n",var_name3,var_value3);
                    Walley_Update_Var_And_Var_Value_To_Var(VAR_var, var_name3, var_value3);
                    
                    //Var_PrintVar(VAR_var);
                }
            }
            
        }
        
        if (begin == TRUE && finish_init_param == FALSE) {
            //printf("Initialize parameters\n");
            //printf("param str is "++"\n",parameter_str);
            //if(strcmp(parameter_str,"None")==0){
            //printf("PARAMETER is "++"\n", parameter_str);
            //printf("arr "++"\n",arr);
            // 12,13,12,
            //printf("Enter Here\n");
            var arr_arr;
            if (arr[arr.length - 1] == '\n') {
                arr_arr = substr(arr, 0, arr.length - 1);
            } else {
                arr_arr= arr;
            }
            arr_arr = removeBackSpace(arr_arr);
            
            if (find_not_in_string(removeAheadSpace(arr_arr), "##Finish Init Params")==0) {
                finish_init_param=TRUE;
                //// printf("finish_init_param\n")
                row++;
                continue;
            }
            
            
            
            if (stringIsEmpty(substr(arr_arr, find_not_in_string(arr_arr, "=")+1, arr_arr.length))==FALSE
               // &&checkWhetherSameVarNameExistsFromFile(file_var_temp_name, substr(arr_arr, 0, find_not_in_string(arr_arr, "=")))==FALSE) {
                 &&Var_Existed(TEMP_VAR_var, substr(arr_arr, 0, find_not_in_string(arr_arr, "=")))==FALSE) {
                
                //printf("ENTER HERE1\n");
                
                Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings,TEMP_TEMP_FILE,"FUNCTION",FUNCTION_functions,arr_arr);
            }
            
            if (strcmp(parameter_str, "None,") == 0) {
                //// printf("Params is None\n");
                //finish_init_param = TRUE;
                row++;
                continue;
            }
            
            
            var var_value;
            //if(find_from_index_not_in_string(parameter_str, ",",from_index+1)==-1)
            if(find_from_index_not_in_str_list_dict(parameter_str, ",",from_index+1)==-1){
                //// printf("==-1\n");
                //// printf("parameter_str |"++"|,from_index "++"\n",parameter_str,from_index);
                row++;
                continue;
            }
            else{
                var_value = substr(parameter_str, from_index, find_from_index_not_in_str_list_dict(parameter_str, ",", from_index + 1));
            }
            // It is not expression
            if (find_not_in_string(var_value, "=")==-1) {
                // I add this row here on 11 15/ in order to solve initiation problem
                var_value=Walley_Substitute_Var_And_Function_Return_Value_From_Var(var_value, struct_var,FUNCTION_functions);
                //
                
                var_value=Walley_Eval_With_Variable_From_Var(struct_var, var_value);
                arr_arr = substr(arr_arr, 0, find_not_in_string(arr_arr, "=")+1);
                if (stringIsDigit(var_value) == FALSE &&stringIsFraction(var_value)==FALSE && strcmp(variableValueType(var_value), "string") != 0
                    &&strcmp(variableValueType(var_value), "list") != 0
                    &&strcmp(variableValueType(var_value), "dictionary") != 0) {
                    var_value = Var_getValueOfVar(struct_var, var_value);
                }
                //strcat(arr_arr, var_value);
                arr_arr=append(arr_arr, var_value);
            }
            // It is expression
            else{
                arr_arr=var_value;
            }
            //printf("var value2 is "++"\n",var_value);
            //printf("arr_arr -----> "++"\n",arr_arr);
            
            
            
            output+=arr_arr;
            output+=substr(parameter_str, from_index, find_from_index_not_in_string(parameter_str, ",", from_index + 1));
            output+="\n";
            
            
            //Walley_Run(arr_arr);
            //Walley_Run_For_Appointed_Var("__walley_temp__.wy","__walley_settings_temp__.wy",arr_arr);
            if (removeAheadSpace(removeBackSpace(arr_arr)).length != 0){
                Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings,TEMP_TEMP_FILE,"FUNCTION",FUNCTION_functions,arr_arr);
            }
            
            from_index = find_from_index_not_in_str_list_dict(parameter_str, ",", from_index + 1) + 1;
            
            /*
             if ((from_index + 1) >= (int) strlen(parameter_str)) {
             finish_init_param = TRUE;
             //printf("finish init param\n");
             }*/
        }
        
        if (find_function == TRUE && find(arr, "#~Begin") == 0) {
            //printf("Begin to initialzie parameters\n");
            begin = TRUE;
        }
        row++;
    }
    
    

    
    if(strcmp(return_var_name,"None")==0){
        //// printf("------Return None------\n");
        return_value="None";
    } else {
        //printf("Enter Else\n");
        return_var_name=Walley_Substitute_Var_And_Function_Return_Value_From_Var(return_var_name,TEMP_VAR_var,FUNCTION_functions);
        
        // I fixed the code below on Dec 6
        return_value=Walley_Eval_With_Variable_From_Var(struct_var, return_var_name);
        //return_value="Hi";
    }
    
    if (find_function==FALSE) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred whiling call function Walley_Run_One_Function_And_Return_Value\n");
        printf("Function |"+input_str+"| is not found\n Exit....\n");
        exit(0);
    }
    
    
    Walley_Run_For_Appointed_Var(TEMP_VAR_var, TEMP_VAR_settings, TEMP_TEMP_FILE, "FUNCTION", FUNCTION_functions,"#end function");
    
    
    //printf("Now the functions in def is "++"\n",function_in_def);
    var num_of_temp_func=valueNumOfList(function_in_def);
    var a=0;
    while (a<num_of_temp_func) {
        var temp_func_name=toCString(valueOfListAtIndex(function_in_def, a));
        //printf("##temp_func_name is "++"\n",temp_func_name);
        deleteOneFunctionFromBehind(FUNCTION_functions, temp_func_name);
        a++;
    }
    function_in_def="";

    GLOBAL_VAR=global_var_back_up;

    return return_value;
}
// var_value is "shd101wyy123/shd101wyy", slice is [x.find("/"):]
function Walley_Slice(var_value, slice, struct_var, FUNCTION_functions){
    slice = trim(slice);
    
    if (strcmp(variableValueType(var_value), "table")==0) {
        return Table_valueOfTableAtStringIndex(var_value, slice);
    }
    
    
    var count=count_str(slice, "][");
    var a=0;
    for (; a<count; a++) {
        var index=find(slice, "][");
        var temp_slice=substr(slice, 0, index+1);
        slice=substr(slice, index+1, slice.length);
        var_value=Walley_Slice(var_value, temp_slice, struct_var, FUNCTION_functions);
    }
    

    
    var inside = substr(slice, 0 + 1, slice.length - 1);
    inside=trim(inside);
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
            num2=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, find_not_in_string(slice, ":") + 1, slice.length-1), struct_var, FUNCTION_functions));
            return sliceOnlyIncludeLeftSide(var_value,num1,num2);
        }
        else if (inside[0]!=':'&&inside[inside.length-1]==':'){
            //var type=variableValueType(input_str);
            //num1=atoi(substr(slice, 1, find_not_in_string(slice, ":")));
            num1=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, 1, find_not_in_string(slice, ":")),struct_var,FUNCTION_functions));
            //num2=Walley_Eval(num2);
            if(strcmp(variableValueType(var_value),"list")==0){
                num2=valueNumOfList(var_value);
            }
            else if (strcmp(variableValueType(var_value),"string")==0){
                num2=(toCString(var_value)).length;
            }
            return sliceOnlyIncludeLeftSide(var_value, num1, num2);
        }
        else {
            //num1 = atoi(substr(slice, 1, find(slice, ":")));
            //num2 = atoi(substr(slice, find(slice, ":") + 1, right));
            num1=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, 1, find_not_in_string(slice, ":")),struct_var,FUNCTION_functions));
            num2=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, find_not_in_string(slice, ":") + 1, slice.length-1),struct_var,FUNCTION_functions));
            return sliceOnlyIncludeLeftSide(var_value, num1, num2);
        }
        
        
    }
    
    // I stop using this kind of slice on Jan 3 2013
    // x[1,2]
    /*
    else if (find_not_in_string(inside, ",") != -1) {
        int num1;
        int num2;
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
                num2=(int)strlen(toCString(input_str));
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
    */
    //x[0]
    else {
        //printf("here\n");
        var num_str = substr(slice, 1, slice.length-1);
        //printf("num_str %s\n",num_str);
        var num=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(num_str,struct_var,FUNCTION_functions));
        
        if (strcmp("string", variableValueType(var_value)) == 0) {
            //// printf("it is string\n");
            //// printf("num is %d\n",num);
            var_value = toCString(var_value);
            var output = substr(var_value, num, num + 1);
            //// printf("return is %s\n",toString(output));
            return toString(output);
        } else if (strcmp("list", variableValueType(var_value)) == 0) {
            //// printf("it is list\n");
            var output = "";
            
            var value_at_index = valueOfListAtIndexString(var_value, slice);
            output=value_at_index;
            
            
            //strcat(output, "]");
            var i = 0;
            var output2 = "";
            output2=output;
            return output2;
            
        }
        else{
                                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");
            printf("Mistake occurred while calling function slice\nIt is not a slice or value type wrong\n");
            printf("If you want use dictionary, please try x{'a'} like expression\n");
            exit(0);
        }
    }    
    
}
/*
 * ("add 1 2","add(num1,num2)|add num1 num2")
 */
function Walley_Translate_To_Function_From_Var( input_str,  best_match_sentence, struct_var){
    //printf("#### Walley_Translate_To_Function_From_Var ####\n");
    //printf("best match sentence |"++"|, input_str |"++"|\n",best_match_sentence,input_str);
    var index_of_gang=find(best_match_sentence, "|");
    if (index_of_gang==-1) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Mistake occurred while calling function Walley_Translate_To_Function_From_Var\n input_str |"+input_str+"|, best_match sentence error, |"+best_match_sentence+"|\n");
        printf("it should be in format function|expression \n");
        exit(0);
    }
    var function_list=substr(best_match_sentence, 0, index_of_gang);
    
    //if (stringIsEmpty(substr(function, find_not_in_str_list_dict(function, "(")+1, find_not_in_str_list_dict(function, ")")))==TRUE) {
    //    return function;
    //}
    
    var expression=substr(best_match_sentence, index_of_gang+1, best_match_sentence.length);
    expression=trim(expression);
    var num_of_small_sentence=numOfSmallSentences(input_str);
    var i=0;
    var output=append(function_list, "(");
    
    
    for (i=0; i<num_of_small_sentence; i++) {
        var sentence_at_input_str=sentenceAtIndexOfString(input_str, i);
        var sentence_at_expression=sentenceAtIndexOfString(expression, i);
        
        
        // printf("@@ "++" @@ "++"\n",sentence_at_input_str,sentence_at_expression);
                                                                    // New code here on Dec 6
        if (strcmp(sentence_at_expression, sentence_at_input_str)!=0||Var_Existed(struct_var, sentence_at_input_str)) {
            output=append(output, sentence_at_expression);
            output=append(output, "=");
            
            // New code here
           // if (Var_Existed(struct_var, sentence_at_input_str)) {
                
                sentence_at_input_str=Var_getValueOfVar(struct_var, sentence_at_input_str);
           // }
            
            output=append(output, sentence_at_input_str);
            if (i!=num_of_small_sentence-1) {
                output=append(output, ",");
            }
            // printf("@@@ "++" @@@ "++"\n",sentence_at_input_str,sentence_at_expression);
        }
    }
    output=append(output, ")");
    
    //// printf("WALLEY TRANSLATION |"++"| |"++"| |"++"|\n",input_str,best_match_sentence,output);
    
    return output;
}




// Not Modify....
function Walley_Substitute_Var_And_Function_Return_Value_From_Var(input_str,struct_var, FUNCTION_functions){//, var file_function_name){
   // printf("FUNCTION##########");
   // Str_PrintStr(FUNCTION_functions);
   // printf("FUNCTION##########");

    if(stringIsAlphaAndSlash(input_str)){
        return Var_getValueOfVar(struct_var, input_str);
    }
    else if (stringIsDigit(input_str)){
        return Walley_Eval(input_str);
    }
   

    var i=0;
    var begin=0;  //begin of { and [
    var end = 0; // end of } and ]
    
    //printf("#here#");
    //###############################################################################################################
    //###############################################################################################################
    //###############################################################################################################
    //################################# New Expression code #########################################################
    //###############################################################################################################
    //###############################################################################################################
    
    
    while (count_str_not_in_string(input_str, "<@")!=0) {
        
        begin = find_from_behind_not_in_string(input_str, "<@");
        end = find_from_index_not_in_string(input_str, ">", begin + 1);
        
    
        var replace_str = substr(input_str, begin + 2, end); //<@hello> get hello
        if (stringIsEmpty(replace_str) == FALSE) {
                        
            var with_str = Walley_Translate_To_Function_From_Var(replace_str, bestMathSentenceForExpression(replace_str,WALLEY_EXPRESSION),struct_var);
                        
            input_str = replace_from_index_to_index(input_str, substr(input_str, begin, end+1), with_str, begin, end+1);
            
            
        } else {
            var with_str="";
            input_str = replace_from_index_to_index(input_str, substr(input_str, begin, end+1), with_str, begin, end+1);
        }
    }
    
    // printf("@@@@@@AFTER TRANSLATION, "++"\n",input_str);
    //###############################################################################################################
    //###############################################################################################################
    //###############################################################################################################
    //###############################################################################################################

    
    for (i = 0; i < input_str.length; i++) {
        
        
        if (charIsInString(input_str, i) == FALSE && input_str[i] == '{') {
            //printf("______------______FIND {}\n");
            begin = i;
            end = find_from_index_not_in_string(input_str, "}", begin + 1);
            //if (end != -1) {
            var check = substr(input_str, begin, end + 1);
            while (count_str_not_in_string(check, "{") != count_str_not_in_string(check, "}")) {
                end = find_from_index_not_in_string(input_str, "}", end + 1);
                check = substr(input_str, begin, end + 1);
            }
            var replace_str = substr(input_str, begin + 1, end); //from x{i} get i
            if (stringIsEmpty(replace_str) == FALSE) {
                if (finishFindingVarAndFunction(replace_str) == FALSE) {
                    var with_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(replace_str, struct_var,FUNCTION_functions);
                    input_str = replace_from_index_to_index(input_str, replace_str, with_str, begin + 1, end);
                }
            }
            //} //printf("Replace "++" with "++", the input_str is "++"\n",replace_str,with_str,input_str);
        }
        
        if (charIsInString(input_str, i) == FALSE && input_str[i] == '[') {
            
            begin = i;
            end = find_from_index_not_in_string(input_str, "]", begin + 1);
            //if (end != -1) {
            var check = substr(input_str, begin, end + 1);
            //if(end!=-1){
            while (count_str_not_in_string(check, "[") != count_str_not_in_string(check, "]")) {
                end = find_from_index_not_in_string(input_str, "]", end + 1);
                check = substr(input_str, begin, end + 1);
            }
            //}
            var replace_str = substr(input_str, begin + 1, end);
            if (stringIsEmpty(replace_str) == FALSE) {
                if (finishFindingVarAndFunction(replace_str) == FALSE && find_not_in_string(replace_str, ":")==-1) {//from x{i} get i
                    var with_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(replace_str, struct_var,FUNCTION_functions);
                    input_str = replace_from_index_to_index(input_str, replace_str, with_str, begin + 1, end);
                }
            }
            //}
        }
        if (charIsInString(input_str, i) == FALSE && input_str[i] == '(') {
            begin = i;
            end = find_from_index_not_in_string(input_str, ")", begin + 1);
            //if (end != -1) {
            var check = substr(input_str, begin, end + 1);
            while (count_str_not_in_string(check, "(") != count_str_not_in_string(check, ")")) {
                end = find_from_index_not_in_string(input_str, ")", end + 1);
                check = substr(input_str, begin, end + 1);
            }
            var replace_str = substr(input_str, begin + 1, end);
            if (stringIsEmpty(replace_str) == FALSE) {
                
                if (finishFindingVarAndFunction(replace_str) == FALSE) {//from x{i} get i
                    var with_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(replace_str, struct_var,FUNCTION_functions);
                    if (strcmp(with_str, replace_str)==0) {
                        continue;
                    }
                    
                   // with_str=Walley_Eval_All_From_Var(struct_var, with_str);
                    input_str = replace_from_index_to_index(input_str, replace_str, with_str, begin + 1, end);
                   // printf("here\n");
                }
            }
            //}
        }

    }

        
        
    // I add new code here to solve print(input_str='1') problem
    // input_str='1' should not be run
    if (isExpression(input_str)) {
        // printf(""++" IT IS EXPRESSION\n",input_str);
        var var_name=variableName(input_str);
        var var_value=variableValue(input_str);
        var_value=Walley_Substitute_Var_And_Function_Return_Value_From_Var(var_value, struct_var,FUNCTION_functions);
        var output=append(var_name, "=");
        output=append(output, var_value);
        return output;
    }
    
    //// printf("input str is :"++"\nlength is "++"\n",input_str,input_str.length);
    //printf("Required File is "++"\n",file_var_name);
    
    // printf("input_str----------> "+input_str+"\n");
    
    var find_alpha=FALSE;
    var finish_find_var=FALSE;
    var find_function=FALSE;
    
    begin=0;
    end=input_str.length;
    i=0;
    
    
    var output=input_str;
    
    var has_var=FALSE;
    for(i=0;i<input_str.length;i++){
  
        
        if(find_alpha==FALSE && (isalpha(input_str[i])||input_str[i]=='_'||input_str[i]=='"'||input_str[i]=='\''||input_str[i]=='[' )&& charIsInString(input_str,i)==FALSE){
            //// printf("Find alpha\n");
            //printf("--End this loop, output is "++"\n",output);
            find_alpha=TRUE;
            begin=i;
            if (i!=input_str.length-1) {
                continue;
            }
            //printf("begin "++"\n",begin);
        }
        
        
        //if(find_alpha==TRUE && (input_str[i]=='(' ||input_str[i]=='[') && charIsInString(input_str,i)==FALSE){
        if(find_alpha==TRUE && (input_str[i]=='(' ||input_str[i]=='[')
           && charIsInString(input_str,i)==FALSE
           && charIsInDictionary(input_str, i)==FALSE){
            //// printf("ENTER HERE\n");
            if (input_str[i]=='[') {
                // printf("It is [\n");
                
                // I forget the code here
                if (count_str_not_in_string(substr(input_str, 0, i), "[")==count_str_not_in_string(substr(input_str, 0, i), "]")) {
                    find_function=TRUE;
                    //// printf("FIND FUNCTION\n");
                } else {
                    find_function=FALSE;
                }
                // printf("FIND_FUNCTION "++"\n",find_function);
            }
            else{
                find_function=TRUE;
            }
            //printf("Find Function\n");
        }
        
        //I make slice also a kind of function
        
        if (find_function) {
            find_function = FALSE;
            //printf("@@@@@ Enter Find Function @@@@@\n");

            var func_name = substr(input_str, begin, i);
            //printf("Func_Name is "++"\n",func_name);

            
            var it_is_slice=FALSE;// = Var_Existed(struct_var, func_name);
            if (Var_Existed(struct_var, func_name)==TRUE||
                strcmp(variableValueType(func_name),"string")==0|| // New code below on Dec 7
                strcmp(variableValueType(func_name), "list")==0) {
                it_is_slice=TRUE;
            }
            //printf("it_is_slice is "++"\n",it_is_slice);
            
            
            // New code here
            // to deal with list instance like x[0]=a() while a is class
            if (input_str[i]=='[' && it_is_slice==FALSE) {
                var index_of_right=indexOfMostOutterRectBracket(input_str,i);
                while (input_str[index_of_right+1]=='[') {
                    index_of_right=indexOfMostOutterRectBracket(input_str,index_of_right+1);
                }
                if (index_of_right!=-1) {
                    if (checkWhetherSameInstanceExistedFromVar(VAR_var, substr(input_str, begin, index_of_right+1))==TRUE) {
                        continue;
                    }
                }
            }
            
            
            
                        
            //printf("it is function "++"\n",it_is_slice);
            if (it_is_slice==FALSE) {
                //printf("It is function\n");
                //var temp = substr(input_str, i, input_str.length);
                var index_of_youkuohao = find_from_index(input_str, ")", i);
                
                var num_of_zuo = count_str(substr(input_str, i, index_of_youkuohao + 1), "(");
                var num_of_you = count_str(substr(input_str, i, index_of_youkuohao + 1), ")");
                //printf("zuo "++", you "++"\n",num_of_zuo,num_of_you);
                while (num_of_zuo != num_of_you) {
                    //printf("Bu Deng");
                    index_of_youkuohao = find_from_index(input_str, ")", index_of_youkuohao + 1);
                    num_of_zuo = count_str(substr(input_str, i, index_of_youkuohao + 1), "(");
                    num_of_you = count_str(substr(input_str, i, index_of_youkuohao + 1), ")");
                }
                
                //printf("------\n"++"\n-------\n",substr(input_str,begin,index_of_youkuohao+1));
                
                var function_list = substr(input_str, begin, index_of_youkuohao + 1);
                //printf("Function is "++"\n",function);
                //################################################################
                //######## Check Embed Function ##################################
                var return_value;
                
                //################### Special Function #########################################################
                /*
                 * eg x="Hello"-----> x.find("He")----->0
                 */
                //// printf("#### Third Generation FUNCTION is |"++"| ####\n", function);
                //// printf("I DO Not Know What Happened\n");
                
                //bool same_function_existed_in_walley_function=checkWhetherSameFunctionNameExists(func_name);
                
                if (find(substr(function_list, 0, find(function_list, "(")), ".") != -1 && charIsInString(function_list, find(function_list, ".")) == FALSE) {
                    //// printf("It is instance function\n");
                    var user = substr(function_list, 0, find(function_list, "."));
                    var instance_existed = checkWhetherSameInstanceExistedFromVar(struct_var, user);
                    var var_existed = Var_Existed(struct_var,user);
                    
                    
                    var only_var_existed = var_existed;
                    
                    var user_value=Walley_Substitute_Var_And_Function_Return_Value_From_Var(user, struct_var,FUNCTION_functions);
                    var function_temp=replace_not_in_string(function_list, user, user_value);
                    
                    
                    if (strcmp(variableValueType(user_value), "string")==0||strcmp(variableValueType(user_value), "list")==0) {
                        var_existed=TRUE;
                    }
                    
                    if (instance_existed == FALSE && var_existed==TRUE){
                        if (only_var_existed==TRUE) {
                            return_value=Walley_Run_Special_Function_From_Var(function_list, struct_var);
                        } else {
                            return_value = Walley_Run_Special_Function_From_Var(function_temp, struct_var);
                        }
                        //printf("RETURN VALUE is "++"\n",return_value);
                    }
                    else {
                        //printf("FIND INSTANCE, THIS IS A CLASS FUNCTION\n");

                        
                        return_value = Walley_Run_One_Function_And_Return_Value_From_Var(function_list, VAR_var,FUNCTION_functions);
                        
                    }
                    
                }
                
                
                //################### Embeded Function ###############################################################
                else if (find(function_list, "int(") ==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = to_int(temp_value);
                } else if (find(function_list, "double(") ==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = to_double(temp_value);
                } else if (find(function_list, "d(") ==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = to_decimal(temp_value);
                } else if (find(function_list, "f(") ==0) {
                    WALLEY_SUBSTITUTION_CAN_JUST_EVAL_IN_THE_END=FALSE;
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = eval_for_fraction_with_alpha(temp_value);                    
                    return_value = to_fraction(temp_value);
                    WALLEY_SUBSTITUTION_CAN_JUST_EVAL_IN_THE_END=TRUE;
                } else if (find(function_list, "nstr(") ==0) {
                    //// printf("Find nstr(");
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = to_nstr(temp_value);
                } else if (find(function_list, "str(")==0) {
                    
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = to_string(temp_value);
                    
                    //printf("HERE return_value "++"\n",return_value);
                }
                //#####################  println  ###################
                else if (find(input_str, "walley_println(") == 0) {
                    //printf("find println\ninput_str is |"++"|\nstr in bracket is |"++"|",input_str,strInBrackets(input_str));
                    var  temp_output = Walley_Println(struct_var,FUNCTION_functions, strInBrackets(input_str));
                    printf(temp_output);
                    return_value="None";
                }//#####################  print  ###################
                else if (find(input_str, "walley_print(") == 0) {
                    var  temp_output = Walley_Print(struct_var,FUNCTION_functions, strInBrackets(input_str));
                    printf(temp_output);
                    return_value="None";
                }
                else if(find(input_str,"walley_run_str(")==0 || find(input_str,"walley_eval(")==0){
                    if (HAS_INIT_WALLEY_RUN_STR==FALSE) {
                        HAS_INIT_WALLEY_RUN_STR=TRUE;
                        
                        VAR_VAR_FOR_EMBED=Var_initVar(VAR_VAR_FOR_EMBED);
                        VAR_SETTINGS_FOR_EMBED=Var_initVar(VAR_SETTINGS_FOR_EMBED);
                        
                        TEMP_FILE_FOR_EMBED=Str_initStringList(TEMP_FILE_FOR_EMBED);
                        FUNCTION_FOR_EMBED=Str_initStringList(FUNCTION_FOR_EMBED);
                        WALLEY_EXPRESSION_FOR_EMBED=Str_initStringList(WALLEY_EXPRESSION_FOR_EMBED);
                        //AS_NAME="";
                        //matho_init();
                        
                        //################ Initialize some necessary expression ##########################################################
                        Str_addString(WALLEY_EXPRESSION_FOR_EMBED, "walley_show_var|show var");
                        Str_addString(WALLEY_EXPRESSION_FOR_EMBED, "walley_decimal_mode|decimal mode");
                        Str_addString(WALLEY_EXPRESSION_FOR_EMBED, "walley_fraction_mode|fraction mode");
                        Str_addString(WALLEY_EXPRESSION_FOR_EMBED, "walley_is_fraction_mode|is fraction mode");                        //################################################################################################################
                        
                        
                        
                        Walley_Initialize_Var(VAR_VAR_FOR_EMBED);
                        Walley_Initialize_Settings(VAR_SETTINGS_FOR_EMBED);
                        Str_addString(TEMP_FILE_FOR_EMBED, "#Temp File In Order To Run goto");
                        
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
    return output";
                        
                        Walley_Run_For_Appointed_Var(VAR_VAR_FOR_EMBED, VAR_SETTINGS_FOR_EMBED, TEMP_FILE_FOR_EMBED, "None", FUNCTION_FOR_EMBED, string_in_out_wy);
                    }
                    
                    
                    
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    Walley_Run_For_Appointed_Var(VAR_VAR_FOR_EMBED, VAR_SETTINGS_FOR_EMBED, TEMP_FILE_FOR_EMBED, "None", FUNCTION_FOR_EMBED, toCString(temp_value));
                    return_value="None";
                }
                else if(find(input_str,"walley_show_var(")==0){
                    walley_show_var(struct_var);
                    return_value="None";
                }
                else if(find(input_str,"walley_quit_program(")==0){
                    walley_quit_program();
                }
                else if(find(input_str,"walley_get_current_terminal_commands(")==0){
                    return_value=walley_get_current_terminal_commands();;
                }
                else if(find(input_str,"walley_exit(")==0){
                    exit(0);
                }
                
                // Under fraction mode, sin cos tan will not be calculated......
                //########################### Basic Math Function #######################################
                else if (find(function_list, "sin(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = math_sin(temp_value);
                    }
                    
                    
                } else if (find(function_list, "cos(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {

                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = math_cos(temp_value);
                    }
                } else if (find(function_list, "tan(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {

                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = math_tan(temp_value);
                    }
                } else if (find(function_list, "cot(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {
                        
                        var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                        var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                        temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                        return_value = math_cot(temp_value);
                    }
                } else if (find(function_list, "tan(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {
                        
                        var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                        var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                        temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                        return_value = math_tan(temp_value);
                    }
                } else if (find(function_list, "sec(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {

                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = math_sec(temp_value);
                    }
                } else if (find(function_list, "csc(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {
                        
                        var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                        var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                        temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                        return_value = math_csc(temp_value);
                    }
                }  else if (find(function_list, "exp(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {
                        
                        var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                        var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                        temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                        return_value = math_exp(temp_value);
                    }
                }else if (find(function_list, "log10(")==0) {
                    var fraction_mode=atoi(Var_getValueOfVar(VAR_settings, "fraction_mode"));
                    if (fraction_mode==TRUE) {
                        return_value=function_list;
                    } else {

                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = math_log10(temp_value);
                    }
                }
                //########################### End Basic Math Function #######################################

                
                else if (find(function_list, "type(")==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = var_value_type(temp_value);
                    //// printf("Find type() and return value is "++"\n", return_value);
                } else if (find(function_list, "num(")==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = to_num(temp_value);
                } else if (find(function_list, "time(")==0) {
                    //var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    //var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    //temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    //return_value = simple_time(temp_value);
                    return_value = simple_time();
                }
                
                /* Can not run under javascript
                else if (find(function_list, "file_readlines(")==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = file_readlines(temp_value);
                } else if (find(function_list, "file_addstrtofile(")==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = file_addstrtofile(temp_value);
                }
                else if (find(function_list, "file_writelines(") == 0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    var file_name = substr(temp_value, 0, find_not_in_string(temp_value, ","));
                    var lines = substr(temp_value, find_not_in_string(temp_value, ",") + 1, (int) strlen(temp_value));
                    file_name = toCString(file_name);
                    lines=toCString(lines);
                    return_value = file_writelines(file_name,lines);
                } else if (find(function_list, "remove_file(") == 0) {
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = file_removefile(temp_value);
                } else if (find(function, "files_indir(") == 0) {
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = file_readFileNameInDirectory(temp_value);
                } else if (find(function, "create_file(") == 0) {
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = file_createfile(temp_value);
                } else if (find(function, "walley_system(") == 0) {
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = walley_system(temp_value);
                } else if (find(function, "input(") == 0) {
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = var_input(temp_value);
                }
                */
                  else if(find(function_list,"walley_fraction_mode(")==0){
                    Var_changeValueOfVar(VAR_settings, "fraction_mode","1", "int");
                    
                    //var ocp;
                    //matho_parse("set fraction 1", &ocp);
                    //matho_process("set fraction 1", &ocp);
                    
                    
                    return_value="None";
                } else if(find(function_list,"walley_decimal_mode(")==0){
                    Var_changeValueOfVar(VAR_settings, "fraction_mode","0", "int");
                    
                    //var ocp;
                    //matho_parse("set fraction 0", &ocp);
                    //matho_process("set fraction 0", &ocp);

                    return_value="None";
                    
                } else if(find(function_list,"walley_is_fraction_mode(")==0){
                    return_value=walley_is_fraction_mode();
                }
                /*
                else if(find(function,"walley_plot(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    Walley_Plot(toCString(temp_value));
                    return_value="None";
                } else if(find(function,"walley_surface(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    Walley_Surface(toCString(temp_value));
                    return_value="None";
                }*/
                else if(find(function_list,"walley_random(")==0){
                    //var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    //var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var);
                    //temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value=walley_random();
                }
                /*
                //###################### For Gui ######################################################
                else if(find(function,"walley_init_window(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_init_window(temp1);
                } else if(find(function,"walley_set_projection(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_set_projection(temp1);
                } else if(find(function,"walley_set_view(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_set_view(temp1);
                } else if(find(function,"walley_clear_screen(")==0){
                    walley_clear_screen();
                    return_value="None";
                } else if(find(function,"walley_set_color(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_set_color(temp1);
                } else if(find(function,"walley_draw_line(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_draw_line(temp1);
                } else if(find(function,"walley_translate(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_translate(temp1);
                } else if(find(function,"walley_rotate(")==0){
                    var temp1 = substr(function, find(function, "(") + 1, (int) strlen(function) - 1);
                    return_value=walley_rotate(temp1);
                }
                 */



                



                //else if (find(function, "show_var(") == 0) {
                //    Var_PrintVar(struct_var);
                //    return_value="None";
                //} //else if (find(function, "√(")==0){
                  //  printf("Find square root");
                  //  return_value="None";
                //}
                
                
                
                
                
                //##############################################################################
                //##############################################################################
                //##############   Embed Function For JavaScript    ############################
                //##############################################################################
                //##############################################################################    
                
                else if (find(function_list, "js_eval(")==0) {
                    var temp1 = substr(function_list, find(function_list, "(") + 1, function_list.length - 1);
                    var temp_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(temp1, struct_var,FUNCTION_functions);
                    temp_value = Walley_Eval_With_Variable_From_Var(struct_var, temp_value);
                    return_value = js_eval(temp_value);
                }
                
                
                
                //#################################################################
                else {
                    
                   // printf("HERE++++!!!!!\n");
                    
                    return_value = Walley_Run_One_Function_And_Return_Value_From_Var(function_list, VAR_var,FUNCTION_functions);
                }
            
               
                end=index_of_youkuohao+1;
                var begin_temp = begin + output.length-input_str.length;
                var end_temp = end + output.length-input_str.length;
                output = replace_from_index_to_index(output, function_list, return_value, begin_temp, end_temp);
                i = index_of_youkuohao;
                find_alpha = FALSE;
                has_var = TRUE;
                finish_find_var = FALSE;
                continue;
            }
            // IT is slice
            else {
               // printf("It is slice\n");
                var index_of_rect = find_from_index_not_in_str_list_dict_parenthesis(input_str, "]", i + 1);
                if (index_of_rect!=input_str.length-1) {
                    while (input_str[index_of_rect+1]=='[') {
                        index_of_rect= find_from_index_not_in_str_list_dict_parenthesis(input_str, "]", index_of_rect+ 1);
                    }
                }
                
                // case like x[0:1].toupper()
                if (index_of_rect!=input_str.length-1) {
                if (input_str[index_of_rect+1]=='.') {
                    //// printf("Find . after ]");
                    find_alpha=TRUE;
                    find_function=FALSE;
                    continue;
                }
                }
                
                var slice_str = substr(input_str, i, index_of_rect + 1);
                var value_of_var; //= Var_getValueOfVar(file_var_name, func_name);
                
                if (Var_Existed(struct_var, func_name)==TRUE) {
                    value_of_var=Var_getValueOfVar(struct_var, func_name);
                }
                else if (strcmp(variableValueType(func_name), "string")==0){
                    value_of_var=func_name;
                }
                else if (strcmp(variableValueType(func_name), "list")==0){
                    value_of_var=func_name;
                }
                else{
                                            printf("@@ |"+CURRENT_INPUT_STR+"|\n");
                    printf("Mistake occurred while calling function Walley_Substitute_Third....\n"+func_name+" is wrong whiling judging it is slice\n");
                    exit(0);
                }
                //printf("value_of_var "+value_of_var+ "  slice_str "+slice_str+"\n");
                
                var replace_str = substr(input_str, begin, index_of_rect + 1);
                // 
 // I modified the code below on Jau 3 2013 and introduce new function Walley_Slice
                //var with_str = old_slice(value_of_var, slice_str);
                var with_str = Walley_Slice(value_of_var, slice_str, struct_var, FUNCTION_functions);
                //printf("with_str "+with_str);
                
                var begin_temp = begin + output.length-input_str.length;
                end=index_of_rect+1;
                var end_temp = end + output.length-input_str.length;
                
                //printf("Begin "++", End "++"\n",begin_temp,end_temp);
                //printf("Before change, output is "++"\n",output);
                output = replace_from_index_to_index(output, replace_str, with_str, begin_temp, end_temp);
                
                i = index_of_rect;
                find_alpha = FALSE;
                has_var = TRUE;
                finish_find_var = FALSE;
                
                continue;
                //func_name
       
            }
        }
        
        if (find_alpha == TRUE && isSign(input_str[i]) && charIsInString(input_str, i) == FALSE) {
            find_alpha = FALSE;
            end = i;
            //printf("@@@@@@ end "++"\n",end);
            finish_find_var = TRUE;
            
        }
        if (find_alpha == TRUE && ((isJudgeSign(input_str[i])) || input_str[i] == ')'|| input_str[i]==',' || input_str[i]==' ') && charIsInString(input_str, i) == FALSE && charIsInList(input_str, i)==FALSE && charIsInDictionary(input_str, i)==FALSE) {
            //printf(""++"\n"++"\n"++"\n",find_alpha,(isJudgeSign(input_str[i])),input_str[i]==')');
            find_alpha = FALSE;
            end = i;
            //printf("------end "++"\n",end);
            finish_find_var = TRUE;
            
        }
        if (find_alpha == TRUE && i == input_str.length - 1) {
            find_alpha = FALSE;
            end = i + 1;
            // printf("end "++"\n",end);
            
            finish_find_var = TRUE;
        }
        //printf("--End this loop, output is "++"\n",output);
        if (finish_find_var) {
            // printf("@@@@ Enter finish_find_var @@@@\n");
            //printf("------\n"++"\n------\n",substr(input_str,begin,end));
            
            //printf("Begin "++", End "++"\n",begin,end);
            var var_name = substr(input_str, begin, end);
            var var_value;
            //if var_name is a instance var like x.age, then try to get value from VAR_var
            if (find_not_in_string(var_name, ".") != -1) {
                var user = substr(var_name, 0, find_not_in_string(var_name, "."));
                if (checkWhetherSameInstanceExistedFromVar(VAR_var, user) == TRUE) {
                    
                    var_value=Var_getValueOfVar(VAR_var, var_name);
                }
                else {
                    var_value=Var_getValueOfVar(struct_var,var_name);
                }
                
            }
            else {
                
                                
                // check whether is global var
                var num_of_element_in_global_var=valueNumOfList(GLOBAL_VAR);
                var x=0;
                var is_global_var=FALSE;
                for (; x<num_of_element_in_global_var; x++) {
                    var element=valueOfListAtIndex(GLOBAL_VAR, x);
                    if (strcmp(element, var_name)==0) {
                        is_global_var=TRUE;
                        break;
                    }
                }
                
                // is global var
                if (is_global_var==TRUE) {
                    var_value=Var_getValueOfVar(VAR_var, var_name);
                }
                
                // is not global var
                else{
                
                if(Var_Existed(struct_var,var_name)==TRUE){
                    var_value=Var_getValueOfVar(struct_var,var_name);
                    //// printf("FIND!! "++"   "++"\n",file_var_name,var_name);
                } else {
                    var_value=var_name;
                }
            
                }
            }
            //printf("Var Name "++"\nVar Value "++"\n",var_name,var_value);
            var begin_temp=begin+output.length-input_str.length;
            var end_temp=end+output.length-input_str.length;
            
            //printf("Begin "++", End "++"\n",begin_temp,end_temp);
            //printf("Before change, output is "++"\n",output);
            output=replace_from_index_to_index(output,var_name,var_value,begin_temp,end_temp);
            //printf("Output is "++"\n",output);
            has_var=TRUE;
            finish_find_var=FALSE;
            find_alpha=FALSE;
            
        }
        //printf("--End this loop, output is "++"\n",output);
        
    }
    if(WALLEY_SUBSTITUTION_CAN_JUST_EVAL_IN_THE_END==TRUE){
    //if(has_var==FALSE){
    //    return input_str;
    //}
    //printf("#Output ----> "+output+"\n");
    if (/*strcmp(output, "None")!=0&&*/stringIsAlpha(output)==FALSE) {
        output=Walley_Eval_All_From_Var(struct_var, output);
    }else {
    
        output=Walley_Eval_With_Variable_From_Var(struct_var, output);
    }
    }
    //printf("Walley_Substitute_Var_And_Function_Return_Value_From_File !!!!!!input "++"  output is "++"\n",input_str,output);
    return output;
}


function Walley_Print(struct_var, FUNCTION_functions,input_str){
        
    //printf("#### Walley_Print ####\n");
    input_str=Walley_Substitute_Var_And_Function_Return_Value_From_Var(input_str,struct_var,FUNCTION_functions);
    //printf("after eval-->|"++"|\n",input_str);
    var after_eval=input_str;
    if (stringIsAlpha(input_str)==FALSE) {
        Walley_Eval_With_Variable_From_Var(struct_var,input_str);
    }

    var output=toCString(after_eval);
   // printf(""++"\n",output);
    //printf("output--->"++"\n",output);

    if (find(output, "\\n")!=-1) {
        output=replace(output, "\\n", "\n");
    }
   // printf("output--->"++"\n",output);

    if(find(output,"\\\"")!=-1){
        output=replace(output, "\\\"", "\"");
    }
    
    //if(find(output,"\\'")!=-1){
    //    output=replace(output, "\\'", "\'");
    //}
    //printf("print output--->"++"\n",output);
    return output;
}
function Walley_Println(struct_var,FUNCTION_functions, input_str){
    //// printf("#### Walley_Println ####\n");

    return append(Walley_Print(struct_var,FUNCTION_functions,input_str), "\n");
}

function Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function(input_str, struct_var, FUNCTION_functions){
    //printf("#### Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function ####\n");
    //printf(""++"\n",input_str);
    // I did not consider the situation when and or or is in string
    //printf(""++"\n",find(input_str," and "));
    input_str=cleanJudgeSentence(input_str);
    input_str=trim(input_str);
    
    input_str=replace_not_in_string(input_str, " and ", "+++++");
    input_str=replace_not_in_string(input_str, " or ", "----");

    if(find(input_str,"TRUE")!=-1){
        //printf("Find And\n");
        
        if (strcmp(input_str, "TRUE")==0) {
            input_str="1==1";
        }
        
        else if(find_from_index(input_str,"==TRUE",find(input_str,"TRUE")-2)!=1){
            input_str=replace(input_str,"TRUE","1==1");
        } else {
            input_str=replace(input_str,"TRUE","1");
        }
    }

    if(find(input_str,"FALSE")!=-1 ){
        //printf("Find Or\n");
        
        if (strcmp(input_str, "FALSE")==0) {
            input_str="0==1";
        }
        else if(find_from_index(input_str,"==FALSE",find(input_str,"FALSE")-2)!=1){
            //printf(""++"\n",find_from_index(input_str,"==FALSE",find(input_str,"FALSE")-2));
            input_str=replace(input_str,"FALSE","0==1");
            //printf("@"++"\n",input_str);
        } else {
            input_str=replace(input_str,"FALSE","0");
        }
    }
    //######### if not 3>4: #########
    //############# Add Not #########
    input_str=replace_not_in_string(input_str,"not ","*****");


    input_str=Walley_Substitute_Var_And_Function_Return_Value_From_Var(input_str,struct_var,FUNCTION_functions);
    
    input_str=replace_not_in_string(input_str, "+++++", " and ");
    input_str=replace_not_in_string(input_str, "----", " or ");
    input_str=replace_not_in_string(input_str, "*****","not ");

    
    input_str=replace_not_in_string(input_str, "TRUE==", "1==");
    input_str=replace_not_in_string(input_str, "FALSE==", "0==");
    //printf("####----->"++"\n",input_str);
    var output=judgeWithAndAndOrWithParenthesis(input_str);
    //// printf("#### Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function #### output is "++"\n",output);
    return output;
}


//############################### Update Var and Var_Value to File#############################
// If var existed, then replace
// else create new one.
/*
 void Walley_Update_Var_And_Var_Value_To_File(var file_var_name, var var_name, var var_value){
 printf("#### Walley_Update_Var_And_Var_Value_To_File ####\n");
 var var_value_type = variableValueType(var_value);
 bool has_same_var_name = Var_Existed(struct_var, var_name);
 
 if (has_same_var_name == TRUE) {
 var previous_var_value=Var_getValueOfVar(file_var_name,var_name);
 var previous_var_value_type=variableValueType(previous_var_value);
 
 if (strcmp(var_value_type, "list") == 0 && find(var_name, "[") == -1) {
 //printf("Value type List, change the whole value of list to file\n");
 if(strcmp(previous_var_value_type,"list")==0)
 changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name, var_name, var_value);
 else{
 Walley_Remove_Variable_And_Value_From_File(file_var_name,var_name);
 writeVarNameAndVarValueIntoAppointedFileForList(file_var_name, var_name, var_value);
 }
 }
 // x={a:1,b:2}, now the input is x={a:12}, so need to rewrite x.
 else if (strcmp(var_value_type, "dictionary") == 0 && find(var_name, "{") == -1) {
 if(strcmp(previous_var_value_type,"dictionary")==0)
 changeTheWholeVarValueFromItsInitialOneFromFileForDictionary(file_var_name, var_name, var_value);
 else{
 Walley_Remove_Variable_And_Value_From_File(file_var_name,var_name);
 writeVarNameAndVarValueIntoAppointedFileForDictionary(file_var_name, var_name, var_value);
 }
 }
 else {
 
 // Eg a[0] is one element of list a
 if (isListElement(file_var_name, var_name)) {
 changeTheOneVarValueFromItsInitialOneFromFileForList(file_var_name, var_name, var_value);
 }
 // Eg a{"Hello"} is one element of dictionary
 else if (find_not_in_string(var_name, "{") != -1 && find_not_in_string(var_name, "}") != -1) {
 printf("&&&&&&& Enter Here 1 \n");
 changeTheOneVarValueFromItsInitialOneFromFileOrAddVarNameAndValueForDictionary(file_var_name, var_name, var_value);
 
 } else {
 
 if(strcmp(previous_var_value_type,"dictionary")==0||strcmp(previous_var_value_type,"list")==0){
 Walley_Remove_Variable_And_Value_From_File(file_var_name,var_name);
 writeVarNameAndVarValueIntoAppointedFile(file_var_name, var_name, var_value, var_value_type);
 }
 //printf("&&&&&&& Enter Here 2 \n");
 //var_value = Walley_Substitute_Var_And_Function_Return_Value_From_File(var_value, file_var_name);
 //var_value = Walley_Eval_With_Variable_From_File(file_var_name, var_value);
 //var_value_type = variableValueType(var_value);
 else{
 //printf("here2\n");
 Var_changeValueOfVar(file_var_name, var_name, var_value, var_value_type);
 //printf("here3\n");
 }
 }
 }
 }
 // Does not have the same var name
 else {
 // Initialize List
 if (strcmp(var_value_type, "list") == 0) {
 //printf("Value type List, write the list and its value to file\n");
 writeVarNameAndVarValueIntoAppointedFileForList(file_var_name, var_name, var_value);
 }
 // Initialize Dictionary
 else if (strcmp(var_value_type, "dictionary") == 0) {
 printf("Find Dictionary Type Value");
 writeVarNameAndVarValueIntoAppointedFileForDictionary(file_var_name, var_name, var_value);
 
 }            // Eg a{"Hello"} is one element of dictionary
 else if (find_not_in_string(var_name, "{") != -1 && find_not_in_string(var_name, "}") != -1) {
 printf("&&&&&&& Enter Here 1 \n");
 changeTheOneVarValueFromItsInitialOneFromFileOrAddVarNameAndValueForDictionary(file_var_name, var_name, var_value);
 
 }            // Initialize simple value
 else {
 //printf("++++++++++++enter here\n");
 //var_value=countFromExpression(var_value);
 //var_value = Walley_Substitute_Var_And_Function_Return_Value_From_File(var_value, file_var_name);
 //var_value = Walley_Eval_With_Variable_From_File(file_var_name, var_value);
 //var_value_type = variableValueType(var_value);
 writeVarNameAndVarValueIntoAppointedFile(file_var_name, var_name, var_value, var_value_type);
 }
 }
 }**/


//############################### If is expression, DO THAT ###################################

function Walley_Eval_And_Update_Var_And_Value_To_Var(struct_var,FUNCTION_functions,input_str) {

    var var_name = variableName(input_str);
    var var_value = variableValue(input_str);
    var var_value_type = variableValueType(var_value);
    
    
      
    // new code here on Jan 12 to solve x[i][j]=x[i][j]+3, replace var_name x[i][j] problem
    var i=0;
    var begin=0;
    var end=0;
    for (i = 0; i < var_name.length; i++) {
        
        
        if (charIsInString(var_name, i) == FALSE && var_name[i] == '{') {
            //printf("______------______FIND {}\n");
            begin = i;
            end = find_from_index_not_in_string(var_name, "}", begin + 1);
            //if (end != -1) {
            var check = substr(var_name, begin, end + 1);
            while (count_str_not_in_string(check, "{") != count_str_not_in_string(check, "}")) {
                end = find_from_index_not_in_string(var_name, "}", end + 1);
                check = substr(var_name, begin, end + 1);
            }
            var replace_str = substr(var_name, begin + 1, end); //from x{i} get i
            if (stringIsEmpty(replace_str) == FALSE) {
                if (finishFindingVarAndFunction(replace_str) == FALSE) {
                    var with_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(replace_str, struct_var,FUNCTION_functions);
                    var_name = replace_from_index_to_index(var_name, replace_str, with_str, begin + 1, end);
                }
            }
            //} //printf("Replace %s with %s, the input_str is %s\n",replace_str,with_str,input_str);
        }
        
        if (charIsInString(var_name, i) == FALSE && var_name[i] == '[') {
            
            begin = i;
            end = find_from_index_not_in_string(var_name, "]", begin + 1);
            //if (end != -1) {
            var check = substr(var_name, begin, end + 1);
            //if(end!=-1){
            while (count_str_not_in_string(check, "[") != count_str_not_in_string(check, "]")) {
                end = find_from_index_not_in_string(var_name, "]", end + 1);
                check = substr(var_name, begin, end + 1);
            }
            //}
            var replace_str = substr(var_name, begin + 1, end);
            if (stringIsEmpty(replace_str) == FALSE) {
                if (finishFindingVarAndFunction(replace_str) == FALSE && find_not_in_string(replace_str, ":")==-1) {//from x{i} get i
                    var with_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(replace_str, struct_var,FUNCTION_functions);
                    var_name = replace_from_index_to_index(var_name, replace_str, with_str, begin + 1, end);
                }
            }
            //}
        }
        if (charIsInString(var_name, i) == FALSE && var_name[i] == '(') {
            begin = i;
            end = find_from_index_not_in_string(var_name, ")", begin + 1);
            //if (end != -1) {
            var check = substr(var_name, begin, end + 1);
            while (count_str_not_in_string(check, "(") != count_str_not_in_string(check, ")")) {
                end = find_from_index_not_in_string(var_name, ")", end + 1);
                check = substr(var_name, begin, end + 1);
            }
            var replace_str = substr(var_name, begin + 1, end);
            if (stringIsEmpty(replace_str) == FALSE) {
                
                if (finishFindingVarAndFunction(replace_str) == FALSE) {//from x{i} get i
                    var with_str = Walley_Substitute_Var_And_Function_Return_Value_From_Var(replace_str, struct_var,FUNCTION_functions);
                    if (strcmp(with_str, replace_str)==0) {
                        continue;
                    }
                    
                    // with_str=Walley_Eval_All_From_Var(struct_var, with_str);
                    var_name = replace_from_index_to_index(var_name, replace_str, with_str, begin + 1, end);
                    // printf("here\n");
                }
            }
            //}
        }
        
    }

    
    
    

    
        // new code here on Jan 6
    var_value=removeBackSpace(var_value);
    // incomplete string
    if (var_value[0]=='"'&&(var_value[var_value.length-1]!='"' ||trim(var_value).length==1||(var_value[var_value.length-1]=='"'&&var_value[var_value.length-2]=='\\'))&&count_str_not_in_string(var_value, "\"")%2!=0) {
              
        VAR_VALUE_INCOMPLETE=TRUE;
        VAR_VALUE_INCOMPLETE_TYPE="string\"";
        VAR_VALUE_TO_BE_COMPLETE=var_value;
        VAR_NAME_TO_BE_COMPLETE=var_name;
        VAR_VALUE_TYPE_TO_BE_COMPLETE="string";
        
        
        if (var_value[var_value.length-1]=='\\') {
            VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, "n");
        }
    }
    // incomplete string
    else if (var_value[0]=='\''&&(var_value[var_value.length-1]!='\'' ||trim(var_value).length==1||(var_value[var_value.length-1]=='\''&&var_value[var_value.length-2]=='\\'))) {
        VAR_VALUE_INCOMPLETE=TRUE;
        VAR_VALUE_INCOMPLETE_TYPE="string'";
        VAR_VALUE_TO_BE_COMPLETE=var_value;
        VAR_NAME_TO_BE_COMPLETE=var_name;
        VAR_VALUE_TYPE_TO_BE_COMPLETE="string";
        
        if (var_value[var_value.length-1]=='\\') {
            VAR_VALUE_TO_BE_COMPLETE=append(VAR_VALUE_TO_BE_COMPLETE, "n");
        }

    }
    // incomplete list
    // and table
    else if (var_value[0]=='['&&count_str_not_in_string(var_value, "[")==count_str_not_in_string(var_value, "]")+1){
        VAR_VALUE_INCOMPLETE=TRUE;
        VAR_VALUE_INCOMPLETE_TYPE="list";
        VAR_VALUE_TO_BE_COMPLETE=removeNFromBack(var_value);
        VAR_NAME_TO_BE_COMPLETE=var_name;
        VAR_VALUE_TYPE_TO_BE_COMPLETE="list";
        LIST_TOTAL_LEFT=count_str_not_in_string(var_value, "[");
        LIST_TOTAL_RIGHT=count_str_not_in_string(var_value, "]");


    }

    // incomplete dictionary
    else if (var_value[0]=='{'&&count_str_not_in_string(var_value, "{")==count_str_not_in_string(var_value, "}")+1){
        VAR_VALUE_INCOMPLETE=TRUE;
        VAR_VALUE_INCOMPLETE_TYPE="dictionary";
        VAR_VALUE_TO_BE_COMPLETE=var_value;
        VAR_NAME_TO_BE_COMPLETE=var_name;
        VAR_VALUE_TYPE_TO_BE_COMPLETE="dictionary";
    }
    // incomplete expression
    else if (var_value[0]=='<'&&var_value[1]=='@'&&var_value[var_value.length-1]!='>'){
        VAR_VALUE_INCOMPLETE=TRUE;
        VAR_VALUE_INCOMPLETE_TYPE="expression";
        VAR_VALUE_TO_BE_COMPLETE=var_value;
        VAR_NAME_TO_BE_COMPLETE=var_name;
        VAR_VALUE_TYPE_TO_BE_COMPLETE="expression";
    }

    if(VAR_VALUE_INCOMPLETE==FALSE){
    
    //Walley_Substitute_Var_And_Function_Return_Value_From_File AND Walley_Eval_With_Variable_From_File
    //Do not support operation of list and dictionary now
    if(strcmp("list",var_value_type)!=0 && strcmp("dictionary",var_value_type)!=0){
        //// printf("var value type is not list or dictionary\n");
        var_value = Walley_Substitute_Var_And_Function_Return_Value_From_Var(var_value, struct_var,FUNCTION_functions);
    }
    // I delete the sentence below on October 22.
    //var_value = Walley_Eval_With_Variable_From_Var(struct_var, var_value);
    var_value_type = variableValueType(var_value);
    
    
    /*
    // New code on Dec 16.
    // To solve x[0]="Hel" problem
     */
    //##########################################################################
    if (find(var_name, "[")!=-1) {
        var temp_var_name=substr(var_name, 0, find(var_name, "["));
        var temp_var_value=Var_getValueOfVar(struct_var, temp_var_name);
        if (strcmp("string",variableValueType(temp_var_value))==0) {
            temp_var_value=toCString(temp_var_value);
            //printf("find string slice like x[0]='Hello'\n");
            //printf("temp_var_value is "++"\n",temp_var_value);
            // then
            var slice=substr(var_name, find(var_name, "["), var_name.length);
            //printf("slice is "++"\n",slice);
            // x[1:3]="Helllo"
            if (find(slice, ":")!=-1) {
                var index_of_colon=find(slice, ":");
                var left=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, 1, index_of_colon), struct_var, FUNCTION_functions));
                var right=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, index_of_colon+1, slice.length-1), struct_var, FUNCTION_functions));
                var_value=replace_from_index_to_index(temp_var_value, substr(temp_var_value, left, right), toCString(var_value), left, right);
                var_value=toString(var_value);
            }
            // x[2,3]="Hello"
            else if (find(slice, ",")!=-1){
                var index_of_colon=find(slice, ",");
                var left=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, 1, index_of_colon), struct_var, FUNCTION_functions));
                var right=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, index_of_colon+1, slice.length-1), struct_var, FUNCTION_functions));
                var_value=replace_from_index_to_index(temp_var_value, substr(temp_var_value, left, right), toCString(var_value), left, right);
                var_value=toString(var_value);

            }
            // x[2]="Hi"
            else{
                var index=atoi(Walley_Substitute_Var_And_Function_Return_Value_From_Var(substr(slice, 1, slice.length-1), struct_var, FUNCTION_functions));
                var_value=replace_from_index_to_index(temp_var_value, substr(temp_var_value, index, index+1), toCString(var_value), index, index+1);
                var_value=toString(var_value);
                //printf("VAR VALUE NOW IS "++"\n",var_value);
            }
            var_name=temp_var_name;
        }
    }
    //##########################################################################
    
    
    // ################### Basic Calculation ##################################
    //if(strcmp(var_value_type,"unknown type")!=0){//&&strcmp(var_value_type,"function")!=0){
    Walley_Update_Var_And_Var_Value_To_Var(struct_var,var_name,var_value);
    
    }
}


function Walley_Judge_Run_Anotation_For_While_Def_Class(struct_var,struct_settings,FUNCTION_functions,input_str) {
   // printf("Walley_Judge_Run_Anotation_For_While_Def_Class |"++"|",input_str);
   // printf("#### Walley_Judge_Run_Anotation_For_While_Def_Class ####\n");
   // printf("############################\n");
   // Var_PrintVar(struct_settings);
   // printf("############################\n");
    var current_space=numOfSpaceAheadString(input_str);
    input_str = removeAheadSpace(input_str);
    
    var space = atoi(Var_getValueOfVar(struct_settings , "space"));
    var now_writting_function = atoi(Var_getValueOfVar(struct_settings , "now_writting_function"));
    var now_writting_class = atoi(Var_getValueOfVar(struct_settings , "now_writting_class"));
    var now_writting_while = atoi(Var_getValueOfVar(struct_settings , "now_writting_while"));
    var now_writting_for = atoi(Var_getValueOfVar(struct_settings , "now_writting_for"));
    var now_run_if = atoi(Var_getValueOfVar(struct_settings , "now_run_if"));
    var last_if_sentence = Var_getValueOfVar(struct_settings , "last_if_sentence");
    var last_while_sentence = Var_getValueOfVar(struct_settings , "last_while_sentence");
    var temp_i = Var_getValueOfVar(struct_settings , "temp_i");
    var temp_i_in_for_sentence = Var_getValueOfVar(struct_settings , "temp_i_in_for_sentence");
    //I add this value here in order to run now_run_if.
    //bool can_run_basic_input = TRUE;
    //bool run_goto = FALSE;
    var space_of_first_while_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_while_sentence"));
    var space_of_first_for_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_for_sentence"));
    var space_of_first_def_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_def_sentence"));
    var space_of_first_class_sentence = atoi(Var_getValueOfVar(struct_settings , "space_of_first_class_sentence"));
    
    //var current_space=atoi(Var_getValueOfVar(struct_settings , "current_space"));
    //// printf("current_space is "++"\n",current_space);
    
    //#####################  Anotation  ###################
    if (input_str[0] == '#') {
        //printf("This is one anatation "++"\n", removeAheadSpace(input_str));
        printf("");
    }
    else if (find(input_str,"class ")==0){
        //// printf("#### begin to define a class ####\n");
        now_writting_class=TRUE;
        space_of_first_class_sentence=space;
        space=space+4;
        
        var class_name=className(input_str);
        var class_mother=classMother(input_str);
        var __temp_class__=Var_getValueOfVar(struct_var,"__temp_class__");
        __temp_class__=dictionaryAddKeyAndValue(__temp_class__,toString(class_name),toString(class_mother));
        //changeTheWholeVarValueFromItsInitialOneFromFileForDictionary(file_var_name,"__temp_class__",__temp_class__);
        changeTheWholeVarValueFromItsInitialOneFromVarForDictionary(struct_var, "__temp_class__", __temp_class__);

        
        var __string_in_temp_class__=Var_getValueOfVar(struct_var,"__string_in_temp_class__");
        __string_in_temp_class__=dictionaryAddKeyAndValue(__string_in_temp_class__,toString(class_name),toString("#Begin to define class...\\n"));
                
        //// printf("__string_in_temp_class__ is "++"\n",__string_in_temp_class__);
        //changeTheWholeVarValueFromItsInitialOneFromFileForDictionary(file_var_name,"__string_in_temp_class__",__string_in_temp_class__);
        changeTheWholeVarValueFromItsInitialOneFromVarForDictionary(struct_var, "__string_in_temp_class__", __string_in_temp_class__);
        
        //// printf("class_name is "++", class extends "++"\n",class_name,class_mother);
        
        Var_changeValueOfVar(struct_var,"__temp_class_name_now_writting__",toString(class_name),"string");
        
    }
    // ##############  Function  ##############################
    else if (find(input_str, "def ") == 0) {
        
        
        space_of_first_def_sentence = space;
        space = space + 4;
        
        now_writting_function = TRUE;
        //var output=defineAFunction(input_str);
        //printf("100---------------\n"++"---------------\n",getStringFromFile("__walley_settings__.wy"));
        var func_name = functionName(input_str);
        var func_param_str = functionParameterStr(input_str);
       // bool has_same_function_name = checkWhetherSameFunctionNameExistsFromVar(func_name);
        
        TEMP_FUNCTION_NAME=func_name;
        TEMP_FUNCTION_PARAMETER=func_param_str;

       
          
            writeFunctionIntoVar(func_name, func_param_str,FUNCTION_functions);
            Str_addString(FUNCTION_functions, "#~Begin\n");
            

        
            if (strcmp(func_param_str, "None") == 0) {
                Str_addString(FUNCTION_functions, "##Finish Init Params\n");
            } else {
                writeFunctionParameterOneByOneToVar(func_param_str,FUNCTION_functions);
                Str_addString(FUNCTION_functions, "##Finish Init Params\n");
            }
        
    }//################## Judge Whether this whether an if sentence ##########################
    else if (find(input_str, "if ") == 0 || find(input_str, "elif ") == 0 || find(input_str, "else") == 0) {
        // printf("now judge if sentence\n");
        var sentence = "";
        var temp_for_sentence = removeAheadSpace(removeBackSpace(input_str));
        var can_run=TRUE;
        space=current_space;
        
        if (find(input_str, "if ") == 0) {
            //// printf("Find If\n");
            sentence = substr(temp_for_sentence, find(temp_for_sentence, "if ") + 3, temp_for_sentence.length - 1);
            last_if_sentence = sentence;
            can_run = Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function(sentence, struct_var,FUNCTION_functions);
            // printf("++++++can run is "++"\n",can_run);
            
            // if can run.
            // Write last_if_sentence to __temp_if__
            //if(can_run==TRUE){
            var __temp_if__=Var_getValueOfVar(struct_var,"__temp_if__");
            __temp_if__=listAppendOneElement(__temp_if__,last_if_sentence);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_if__",__temp_if__);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_if__", __temp_if__);
            //}
            var __temp_if_space__=Var_getValueOfVar(struct_var,"__temp_if_space__");
            //char temp_num[100];
            //sprintf(temp_num,""++"",space);
            var temp_num=intToCString(space);
            
            __temp_if_space__=listAppendOneElement(__temp_if_space__,temp_num);
            
            var __has_run_if__=Var_getValueOfVar(struct_var,"__has_run_if__");
            //char temp_num[100];
            temp_num=intToCString(can_run);
            __has_run_if__=listAppendOneElement(__has_run_if__,temp_num);
            
            
            // Delete the same // eg delete one 4 from [0,4,4]
            var num_of_temp_if_space=valueNumOfList(__temp_if_space__);
            if (num_of_temp_if_space > 1) {
                var previous = valueOfListAtIndex(__temp_if_space__, num_of_temp_if_space - 2);
                var now = valueOfListAtIndex(__temp_if_space__, num_of_temp_if_space - 1);
                if (atoi(previous) == atoi(now)) {
                    //// printf("--------Find Another If--------\n");
                    var temp_length;
                    var index = num_of_temp_if_space - 2;
                    temp_length=intToCString(index);
                    var index_str ="[";
                    index_str+=temp_length;
                    index_str+="]";
                    __temp_if_space__ = listRemoveOneElementAtOneIndex(__temp_if_space__, index_str);
                    __temp_if__=listRemoveOneElementAtOneIndex(__temp_if__,index_str);
                    __has_run_if__=listRemoveOneElementAtOneIndex(__has_run_if__,index_str);
                    //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_if__",__temp_if__);
                    changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_if__", __temp_if__);

                    
                }
                
                
            }
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__has_run_if__",__has_run_if__);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_if_space__",__temp_if_space__);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__has_run_if__", __has_run_if__);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_if_space__", __temp_if_space__);

            
        } else if (find(input_str, "elif ") == 0) {
            var __temp_if__=Var_getValueOfVar(struct_var,"__temp_if__");
            var length=valueNumOfList(__temp_if__);
            var temp_length;
            
            var __has_run_if__=Var_getValueOfVar(struct_var,"__has_run_if__");
            
            var i=0;
            var index;
            var __temp_if_space__=Var_getValueOfVar(struct_var,"__temp_if_space__");
            for(i=0;i<length;i++){
                var number=atoi(valueOfListAtIndex(__temp_if_space__,i));
                //// printf("number is "++"\n",number);
                if(number==current_space){
                    index=i;
                    break;
                }
            }
            
            //sprintf(temp_length,""++"",index);
            temp_length=intToCString(index);
            var index_str="[";
            index_str+=temp_length;
            index_str+="]";
            last_if_sentence=valueOfListAtIndexString(__temp_if__,index_str);
            var has_run_if=atoi(valueOfListAtIndexString(__has_run_if__,index_str));
            
            
            sentence = substr(temp_for_sentence, find(temp_for_sentence, "elif ") + 5, temp_for_sentence.length - 1);
            /*
            var length_of_temp = "not ( ".length + 1 + " ) and (  )".length+last_if_sentence.length+sentence.length;
            var temp_for_sentence2 = "";
            temp_for_sentence2= "not ( ";
            temp_for_sentence2+= last_if_sentence;
            temp_for_sentence2+=" ) and ( ";
            temp_for_sentence2+= sentence;
            temp_for_sentence2+= " )";
            
            sentence = temp_for_sentence2;
            */
            last_if_sentence = sentence;
            // if can run.
            // Write last_if_sentence to __temp_if__
            //if(can_run==TRUE){
            __temp_if__ = Var_getValueOfVar(struct_var, "__temp_if__");
            length = valueNumOfList(__temp_if__);
            //char temp_length[100];
            temp_length=intToCString(length - 1);
            var var_name_str = "__temp_if__[";
            var_name_str+=temp_length;
            var_name_str+= "]";

            changeTheOneVarValueFromItsInitialOneFromVarForList(struct_var, var_name_str, sentence);
            //}
            if(has_run_if==TRUE){
                //// printf("********* HAS RUN IF **********");
                can_run=FALSE;
            }
             else{
                can_run = Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function(sentence, struct_var,FUNCTION_functions);

                if (can_run==TRUE){
                       var length_of_has_run_if__=valueNumOfList(__has_run_if__);
                       var temp4;
                       temp4=intToCString(length_of_has_run_if__)-1;
                       var var_name_str2="__has_run_if__[";
                        var_name_str2+=temp4;
                        var_name_str2+="]";
                        //changeTheOneVarValueFromItsInitialOneFromFileForList(struct_var,var_name_str2,"1");
                     changeTheOneVarValueFromItsInitialOneFromVarForList(struct_var, var_name_str2, "1");
                }
            }
        }
        
        
        
        else if (find(input_str, "else") == 0) {
            var __temp_if__=Var_getValueOfVar(struct_var,"__temp_if__");
            var length=valueNumOfList(__temp_if__);
            var temp_length;
            
            var __has_run_if__=Var_getValueOfVar(struct_var,"__has_run_if__");
            
            var i=0;
            var index;
            var __temp_if_space__=Var_getValueOfVar(struct_var,"__temp_if_space__");
           
            
            for(i=0;i<length;i++){
                var number=atoi(valueOfListAtIndex(__temp_if_space__,i));
                if(number==current_space){
                    index=i;
                    break;
                }
            }
            //sprintf(temp_length,""++"",length-1);
            temp_length=intToCString(index);
            var index_str="[";
            index_str+=temp_length;
            index_str+="]";
            last_if_sentence=valueOfListAtIndexString(__temp_if__,index_str);
            var has_run_if=atoi(valueOfListAtIndexString(__has_run_if__,index_str));


            last_if_sentence = "\"None\"";
            
            //Delete the final __temp_if__ in file
            //// printf("index str is "++"\n",index_str);
            __temp_if__=listRemoveOneElementAtOneIndex(__temp_if__,index_str);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_if__",__temp_if__);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_if__", __temp_if__);
            
            
            __temp_if_space__=listRemoveOneElementAtOneIndex(__temp_if_space__,index_str);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_if_space__",__temp_if_space__);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_if_space__", __temp_if_space__);

            __has_run_if__=listRemoveOneElementAtOneIndex(__has_run_if__,index_str);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__has_run_if__",__has_run_if__);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__has_run_if__", __has_run_if__);

            if(has_run_if==TRUE){
                //// printf("********* HAS RUN IF **********");
                can_run=FALSE;
            }
            else{
                can_run = TRUE;
                 }
            
            
        }
        //// printf("Enter here\n");
        //// printf("Sentence is |"++"|\nLength is "++"\n", sentence, (int) strlen(sentence));
        //bool can_run = Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function(sentence, file_name);
        if (can_run) {
            now_run_if = TRUE;
            //// printf("\n\n\n\n\n\n!!!!!Can Run!!!!!\n");
            space = space + 4;
            //last_if_sentence=sentence;
        } else {
            now_run_if = FALSE;
            //// printf("\n\n\n\n\n\n!!!!!! Can not run !!!!!!\n");
            
        }
    }//#################### While Sentence ##################################
    else if (find(input_str, "while ") == 0) {
        //now_writting_while=TRUE;
        last_while_sentence = removeAheadSpace(input_str);
        last_while_sentence = substr(last_while_sentence, 6, find(last_while_sentence, ":"));
        last_while_sentence = removeBackSpace(last_while_sentence);
        var can_run_while = Walley_Judge_With_And_And_Or_With_Parenthesis_And_Variables_Function(last_while_sentence, struct_var,FUNCTION_functions);
        if (can_run_while == FALSE) {
            //// printf("Can Not Run While");
            now_writting_while = FALSE;
            last_while_sentence = "None";
        } else {
            now_writting_while = TRUE;
            space_of_first_while_sentence = space;
            space = space + 4;
            
            // Write last_while_sentence to __temp_while__
            var temp_while_var_value=Var_getValueOfVar(struct_var,"__temp_while__");
            temp_while_var_value=listAppendOneElement(temp_while_var_value,last_while_sentence);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_while__",temp_while_var_value);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_while__", temp_while_var_value);
            
            var temp_space;
            temp_space=intToCString(space_of_first_while_sentence);
            var temp_while_space=Var_getValueOfVar(struct_var,"__temp_while_space__");
            temp_while_space=listAppendOneElement(temp_while_space,temp_space);
            //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_while_space__",temp_while_space);
            changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var, "__temp_while_space__", temp_while_space);
        }
    }        //#################### For Sentence #####################################
    else if (find(input_str, "for ") == 0) {// && removeBackSpace(input_str)[(int) strlen(removeBackSpace(input_str)) - 1] == ':') {
        //// printf("#### Find For ####\n");
        temp_i = substr(input_str, find(input_str, "for ") + 4, find(input_str, " in"));
        temp_i = removeAheadSpace(removeBackSpace(temp_i));
        var in_what = substr(input_str, find(input_str, " in ") + 4, removeBackSpace(input_str).length - 1);
        in_what = removeAheadSpace(removeBackSpace(in_what));
        in_what = Walley_Substitute_Var_And_Function_Return_Value_From_Var(in_what, struct_var,FUNCTION_functions);
        //printf("i is |"++"|, in_what is |"++"|\n", temp_i, in_what);
        now_writting_for = TRUE;
        //temp_i_in_for_sentence=Var_getValueOfVar(struct_var,in_what);
        temp_i_in_for_sentence = in_what;
        if (strcmp(variableValueType(temp_i_in_for_sentence), "string") == 0) {
            //// printf("It is string\n");
            temp_i_in_for_sentence = changeStringToList(temp_i_in_for_sentence);
        }
        //printf("i is |"++"|\n", temp_i_in_for_sentence);
        
        space_of_first_for_sentence = space;
        space = space + 4;
        
        
        // Write temp_i_in_for_sentence to __temp_for__  eg
        // for i in [1,2,3,4]:     write [1,2,3,4] to __temp_for__
        var temp_for_var_value=Var_getValueOfVar(struct_var,"__temp_for__");
        temp_for_var_value=listAppendOneElement(temp_for_var_value,temp_i_in_for_sentence);
        //printf("####$$$$$ "++"\n",temp_for_var_value);
        //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_for__",temp_for_var_value);
        changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var,"__temp_for__" , temp_for_var_value);
        
        //// printf("@@@@@@@@@@@@HERE\n");
        
        var __temp_i__=Var_getValueOfVar(struct_var,"__temp_i__");
        __temp_i__=listAppendOneElement(__temp_i__,temp_i);
        //changeTheWholeVarValueFromItsInitialOneFromFileForList(struct_var,"__temp_i__",__temp_i__);
        changeTheWholeVarValueFromItsInitialOneFromVarForList(struct_var,"__temp_i__" , __temp_i__);

        //char temp_space[100];
        //sprintf(temp_space,""++"",space_of_first_while_sentence);
        //var temp_while_space=Var_getValueOfVar(file_var_name,"__temp_while_space__");
        //temp_while_space=listAppendOneElement(temp_while_space,temp_space);
        //changeTheWholeVarValueFromItsInitialOneFromFileForList(file_var_name,"__temp_while_space__",temp_while_space);
    }
    else if (find(input_str, "switch ")==0){
        
        SPACE_OF_FIRST_SWITCH_SENTENCE = current_space;
        space = current_space + 4;
        
        NOW_WRITTING_SWITCH = TRUE;
        
        var switch_object=substr(input_str, 7, find_from_behind(input_str, ":"));
        SWITCH_OBJECT=trim(switch_object);
        
    }
    
    //#################### Set Settigns ################################
    //// printf("#### Set Settings ####\n\n\n");
   // printf("space now is "++"\n",space);
    var temp2;
    temp2=intToCString(space);
    Var_changeValueOfVar(struct_settings , "space", temp2, "int");
    temp2=intToCString(now_writting_function);
    Var_changeValueOfVar(struct_settings , "now_writting_function", temp2, "int");
  
    temp2=intToCString(now_writting_class);
    Var_changeValueOfVar(struct_settings , "now_writting_class", temp2, "int");
   // printf("3###############\n");
   // Var_PrintVar(struct_settings);
    temp2=intToCString(now_writting_while);
    Var_changeValueOfVar(struct_settings , "now_writting_while", temp2, "int");
    temp2=intToCString(now_writting_for);
    Var_changeValueOfVar(struct_settings , "now_writting_for", temp2, "int");
    temp2=intToCString(now_run_if);
    Var_changeValueOfVar(struct_settings , "now_run_if", temp2, "int");
    temp2=intToCString(space_of_first_while_sentence);
    Var_changeValueOfVar(struct_settings , "space_of_first_while_sentence", temp2, "int");
    temp2=intToCString(space_of_first_for_sentence);
    Var_changeValueOfVar(struct_settings , "space_of_first_for_sentence", temp2, "int");
    temp2=intToCString(space_of_first_def_sentence);
    Var_changeValueOfVar(struct_settings , "space_of_first_def_sentence", temp2, "int");
    temp2=intToCString(space_of_first_class_sentence);
    Var_changeValueOfVar(struct_settings , "space_of_first_class_sentence", temp2, "int");
    
    Var_changeValueOfVar(struct_settings , "last_if_sentence", last_if_sentence, "string");
    Var_changeValueOfVar(struct_settings , "last_while_sentence", last_while_sentence, "string");
    Var_changeValueOfVar(struct_settings , "temp_i", temp_i, "string");
    Var_changeValueOfVar(struct_settings , "temp_i_in_for_sentence", temp_i_in_for_sentence, "string");
    
   // printf("2##############\n");
   // Var_PrintVar(struct_settings);
   // printf("END\n");
}



function Walley_Update_Functions_And_Vars_While_Importing(temp_file_to_run, struct_var, FUNCTION_functions){
    
    var string_in_out_wy_temp="def print(input_str):\n\
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
    return output";
    // New code here to import
    //struct VAR *temp_struct_var;
    temp_struct_var=Var_initVar(temp_struct_var);
    //struct VAR *temp_struct_settings;
    temp_struct_settings=Var_initVar(temp_struct_settings);

    temp_TEMP_FILE=Str_initStringList(temp_TEMP_FILE);
    temp_FUNCTION_functions=Str_initStringList(temp_FUNCTION_functions);
    
    
    Walley_Initialize_Var(temp_struct_var);
    Walley_Initialize_Settings(temp_struct_settings);
    Walley_Run_For_Appointed_Var(temp_struct_var, temp_struct_settings, temp_TEMP_FILE, temp_file_to_run, temp_FUNCTION_functions, string_in_out_wy_temp);
    //Walley_Run_For_Appointed_Var(temp_struct_var, temp_struct_settings,temp_TEMP_FILE,temp_file_to_run,temp_FUNCTION_functions, getStringFromFile(temp_file_to_run));
    Walley_Run_For_Appointed_Var(temp_struct_var, temp_struct_settings,temp_TEMP_FILE,temp_file_to_run,temp_FUNCTION_functions, getStringFromFile(temp_file_to_run));
    
    //printf("####################\n");
    //Var_PrintVar(temp_struct_var);
    //printf("####################\n");
    var i=0;
    var length_of_temp_struct_var=0;
    if (strcmp(temp_struct_var[0].var_name,"__size_of_array__")!=0) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Can not find __size_of_array__");
        exit(0);
    }
    else{
        length_of_temp_struct_var=atoi(temp_struct_var[0].var_value);
    }

    
    while (i<length_of_temp_struct_var) {
        var var_name=temp_struct_var[i].var_name;
        // prevent from deleting those important variables.
        if (find(var_name, "__temp_while__")==0||
            find(var_name, "__temp_while_space__")==0||
            find(var_name, "__temp_if__")==0||
            find(var_name, "__temp_if_space__")==0||
            find(var_name, "__has_run_if__")==0||
            find(var_name, "__temp_for__")==0||
            find(var_name, "__temp_i__")==0||
            find(var_name, "__temp_class__")==0||
            find(var_name, "__temp_class_name_now_writting__")==0||
            find(var_name, "__string_in_temp_class__")==0||
            find(var_name, "__instance_name__")==0||
            find(var_name, "__instance_var__")==0||
            find(var_name, "__size_of_array__")==0
            ) {
        }
        else{
            //printf("Begin To Add Var\n");
            Var_addProperty(struct_var, append(append(substr(AS_NAME, 1, AS_NAME.length), "."), var_name), temp_struct_var[i].var_value, variableValueType(temp_struct_var[i].var_value));
        }
        
        i=i+1;
    }
        
    
    
    var __temp_class__=Var_getValueOfVar(temp_struct_var, "__temp_class__");
    var __string_in_temp_class__=Var_getValueOfVar(temp_struct_var, "__string_in_temp_class__");
    var class_list=keyOfDictionaryAsList(__temp_class__);
    //printf("class_list is "++"\n",class_list);
    var num_of_key_of_dictionary=valueNumOfList(class_list);
    i=0;
    for (; i<num_of_key_of_dictionary; i++) {
        var key=valueOfListAtIndex(class_list, i);
        var string_in_class=valueAtKey(__string_in_temp_class__, key);
        //printf(" class name --->"++"\n|"++"|\n",valueOfListAtIndex(class_list, i),string_in_class);
        var new_class_name=append(append(substr(AS_NAME, 1, AS_NAME.length), "."), toCString(valueOfListAtIndex(class_list, i)));
        var change_dictionary=append("__string_in_temp_class__", append("{", append( toString(new_class_name), "}")));
        //printf("@@change_dictionary is "++"\n",change_dictionary);
        changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, change_dictionary, string_in_class);
        
        var mother=valueAtKey(__temp_class__, key);
        var change_dictionary2=append("__temp_class__", append("{", append( toString(new_class_name), "}")));
        changeTheOneVarValueFromItsInitialOneFromVarOrAddVarNameAndValueForDictionary(struct_var, change_dictionary2, mother);

    }
    
   
    var function_list=getFunctionNameAndReturnList(temp_FUNCTION_functions);
    var num_of_function_in_list=valueNumOfList(function_list);
    i=0;
    for (i=0; i<num_of_function_in_list; i++) {
        var j=0;
        var length_of_temp_FUNCTION_functions=atoi(temp_FUNCTION_functions[0]);
        while (j<length_of_temp_FUNCTION_functions) {
            var func_now=valueOfListAtIndex(function_list, i);
            //printf("------> |"++"|\n",temp_FUNCTION_functions[j]);
            //printf("#"++"\n",append(func_now, ":"));
            if (find(temp_FUNCTION_functions[j],append(func_now, ":"))==0) {
                //  printf("FIND "++" from "++"\n",append(func_now, ":"),temp_FUNCTION_functions[j]);
                temp_FUNCTION_functions[j]=append(append(substr(AS_NAME, 1, AS_NAME.length), "."), temp_FUNCTION_functions[j]);
                j++;
                continue;
            } else {
                func_now=append(func_now, "(");
                var begin=0;
                var index_of_func=0;
                while (TRUE) {
                    //x=a()*a()+b()
                    index_of_func=find_from_index(temp_FUNCTION_functions[j], func_now, begin);
                    if (index_of_func==-1) {
                        break;
                    }
                    // printf("index_of_func is "++"\n",index_of_func);
                    var left=find_from_index(temp_FUNCTION_functions[j], "(", index_of_func);
                    // printf("left is "++"\n",left);
                    var right=indexOfMostOutterBracket(temp_FUNCTION_functions[j], left);
                    // printf("right is "++"\n",right);
                    var replace_str=substr(temp_FUNCTION_functions[j], index_of_func, right+1);
                    // printf("replace str is "++"\n",replace_str);
                    if (index_of_func==-1) {
                        break;
                    }
                    else if(index_of_func==0){
                        var with_str=append(append(substr(AS_NAME, 1, AS_NAME.length), "."), replace_str);
                        temp_FUNCTION_functions[j]=replace_from_index_to_index(temp_FUNCTION_functions[j], replace_str, with_str, index_of_func, right+1);
                        begin=right+1+with_str.length-replace_str.length;
                        continue;
                        
                    }else{
                        if (isalpha(temp_FUNCTION_functions[j][index_of_func-1])||isdigit(temp_FUNCTION_functions[j][index_of_func-1])||temp_FUNCTION_functions[j][index_of_func-1]=='_') {
                            begin=right+1;
                            continue;
                        }
                        else{
                            var with_str=append(append(substr(AS_NAME, 1, AS_NAME.length), "."), replace_str);
                            temp_FUNCTION_functions[j]=replace_from_index_to_index(temp_FUNCTION_functions[j], replace_str, with_str, index_of_func, right+1);
                            begin=right+1+with_str.length-replace_str.length;
                            continue;
                        }
                    }
                    
                }
                
                j++;
            }
        }
    }
    //printf("###############################################\n");
    //printf("AFTER CHANGE\n");
    //Str_PrintStr(temp_FUNCTION_functions);
    
    //printf("###############################################\n");
    
    //printf("FINISH RUN ADVANCED\n");
    
    i=0;
    var length_of_temp_FUNCTION_functions=atoi(temp_FUNCTION_functions[0]);
    while (i<length_of_temp_FUNCTION_functions) {
        Str_addString(FUNCTION_functions, temp_FUNCTION_functions[i]);
        i++;
    }
   }