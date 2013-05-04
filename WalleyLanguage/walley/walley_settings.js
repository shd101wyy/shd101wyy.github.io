/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


//#include "walley_data.h"


var VAR_var;                    // Var Variables
var VAR_settings;               // Var Settings
var TEMP_FILE;                       // Save string to file
var FUNCTION;                        // Save function strings
var WALLEY_LANGUAGE_FILE;            // not in use now
var WALLEY_SIMILARITY_FILE;          // not in use now
var WALLEY_VERB_FILE;                // not in use now
var WALLEY_EXPRESSION;               // for expression translate
var HIGHTEST_FILE;                    // for import file.... eg:   a.wy->b.wy->c.wy run a.wy, then b.wy is the superior file, so as name is its name
var AS_NAME;                          // for import file.
var ARGV;                            // to get argv in main
var ARGC;                               // to get argc in main
var FIRST_RUNNING_FILE="";            // the file you run
var TURN=0;                             // row in file
var HAS_INIT_WALLEY_RUN_STR=FALSE;     // for embed function walley_run_str()
var VAR_VAR_FOR_EMBED;          // Var Variables
var VAR_SETTINGS_FOR_EMBED;     // Var Settings
var TEMP_FILE_FOR_EMBED;             // Save string to file
var FUNCTION_FOR_EMBED;              // Save function strings
var WALLEY_EXPRESSION_FOR_EMBED;
var CURRENT_DIRECTORY="./";           // File Directory


//#########################################################
// global var for javascript

// Walley_Run_One_Function_And_Return_Value
var TEMP_VAR_var;   
var TEMP_VAR_settings;
var TEMP_TEMP_FILE;

//Walley_Update_Functions_And_Vars_While_Importing
var temp_struct_var;
var temp_struct_settings;
var temp_TEMP_FILE;
var temp_FUNCTION_functions;





var VAR_VALUE_INCOMPLETE=FALSE;        // eg:  x="12  incomplete  x="123" complete
var VAR_VALUE_INCOMPLETE_TYPE="";     // save incomplete var value type
var VAR_VALUE_TO_BE_COMPLETE="";      // save incomplete var_value
var VAR_NAME_TO_BE_COMPLETE="";       // save incomplete var_name
var VAR_VALUE_TYPE_TO_BE_COMPLETE=""; // save incomplete var_value_type


var EXPRESSION_INCOMPLETE=FALSE;       // expression is incomplete
var EXPRESSION_TO_BE_COMPLETE="";

var RUN_EXPRESSION_INCOMPLETE=FALSE;    // can not run expression that is incomplete
var RUN_EXPRESSION_TO_BE_COMPLETE="";

var WALLEY_SUBSTITUTION_CAN_JUST_EVAL_IN_THE_END=TRUE;

// For switch sentence
var SPACE_OF_FIRST_SWITCH_SENTENCE=0;
var NOW_WRITTING_SWITCH=0;
var SWITCH_OBJECT="";
var SENTENCE_OF_SWITCH="";

// Global Var
var GLOBAL_VAR="[]";


// List Incomplete
var LIST_TOTAL_LEFT=0; // num of [
var LIST_TOTAL_RIGHT=0; // num of ]

var NULL=null;

// for loop
var CAN_CONTINUE=FALSE;
var CAN_BREAK=FALSE;
var CAN_RUN_BASIC_INPUT_IF_CONTINUE_OR_BREAK=TRUE;  // if meet break, continue, then it is false;

var CURRENT_INPUT_STR="";


// for while loop
var STRING_IN_WHILE_LOOP;

// for for loop
var STRING_IN_FOR_LOOP;
