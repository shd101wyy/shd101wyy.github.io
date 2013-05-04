/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_file_operation.h
 * Author: shd101wyy
 *
 * Created on September 1, 2012, 4:37 PM
 */
//#include "walley_function.h"
//#########################################################################################
//#########################################################################################
//#########################################################################################
//#########################################################################################
//#########################################################################################
//#########################################################################################

function checkWhetherSameFunctionNameExistsFromVar(function_name){
    var has_same_func_name=FALSE;
    var var_name_in_file="";
    var row=0;
    var length=atoi(FUNCTION[0]);
    while (row<length) {
       // printf("row-->"++"\n",row);
        var arr=FUNCTION[row];
        if(find(arr,":")==-1){
            row++;
            continue;
        }
        var_name_in_file=substr(arr,0,find(arr,":"));
        if (strcmp(var_name_in_file,function_name)==0){
            has_same_func_name=TRUE;
            break;
        }
        row++;
    }
    //fclose(fp);
    return has_same_func_name;
}


function writeFunctionIntoVar(func_name,func_param_str, to_function_var) {
    
    var input_message = "";
    input_message+=func_name;
    input_message+=":";
    input_message+=func_param_str;
    input_message+=":";
    input_message+="\n";
    Str_addString(to_function_var, input_message);
    
}



/* write a=6,b=3 into file*/
/* write a=6,b=3 into file*/
/* write a=6,b=3 into file*/
/* write a=6,b=3 into file*/
// Not modify
function writeFunctionParameterOneByOneToVar(func_param_str, function_list){
    //// printf("Now Run Function writeFunctionParameterOneByOneToFile\n");
    if(strcmp("None",func_param_str)==0){
        //printf("This function has no parameters\n");
        //writeStringToFile("__walley_function__.wy","#### Finish Initialize Parameters ####\n");
        printf("");
    } else {
        func_param_str=append(func_param_str, ",");
        
        while(count_str(func_param_str,",")>0){
            var param=substr(func_param_str,0,find(func_param_str,","));
            //var temp_temp;
            if(find(param,"=")==-1){
                Str_addString(function_list, append(param, "=None\n"));
            }
            else{
                Str_addString(function_list, append(param, "\n"));
            }
            
            //writeStringToFile("__walley_function__.wy",temp_temp);
            func_param_str=substr(func_param_str,find(func_param_str,",")+1,func_param_str.length);
        }
        //writeStringToFile("__walley_function__.wy","#### Finish Initialize Parameters ####\n");
        
    }
    
}


/*
 * clean up file
 * to make sentences in order
 *  |
 *  |
 *  V
 */
// javascript : file operation
/*
void cleanWalleyLanguageFile(var file_name){
    //printf("file_name is "++"\n",file_name);
    FILE *fp=fopen(file_name, "r");
    char arr[10000];
    if (fp==NULL) {
        printf("No File "++" Found\n",file_name);
        exit(0);
    }
    
    var string_in_file[10000];
    int count=0;
    
    while (fgets(arr, 10000, fp)!=NULL) {
        var to_copy;
        if (arr[(int)strlen(arr)-1]=='\n') {
            to_copy=substr(arr, 0, (int)strlen(arr)-1);
        }else {
            to_copy=substr(arr, 0, (int)strlen(arr));
        }
        if (stringIsEmpty(to_copy)==TRUE) {
            continue;
        }
        string_in_file[count]=to_copy;
        count++;
    }
    fclose(fp);
    while (TRUE) {
        int i=0;
        bool can_exit=TRUE;
        for (i=0; i<count-1; i++) {
            if (strcmp(string_in_file[i], string_in_file[i+1])>0) {
                can_exit=FALSE;
            }
        }
        if (can_exit==TRUE) {
            break;
        }
        // Clean
        else{
            for (i=0; i<count-1; i++) {
                if (strcmp(string_in_file[i], string_in_file[i+1])>0) {
                    var temp=string_in_file[i];
                    string_in_file[i]=string_in_file[i+1];
                    string_in_file[i+1]=temp;
                }
            }
        }
    }
    int i=0;
    fp=fopen(file_name, "w");
    for (i=0; i<count; i++) {
        fputs(string_in_file[i], fp);
        fputs("\n", fp);
    }
    fclose(fp);
    
}
*/



/*
 * 
 * 
 * 
// return string list and no empty string in string list
char **getStringFromFileAndReturnStringList(char *file_name){
    FILE *fp;
    char arr[10000]="";
    if ((fp = fopen(file_name, "r")) == NULL) {
        printf("@@ |%s|\n",CURRENT_INPUT_STR);
        
        perror("File open error!\n");
        exit(1);
    }
    char **output;
    Str_initStringList(&output);
    while ((fgets(arr, 10000, fp)) != NULL) {
        //printf("%s\n",arr);
        if (stringIsEmpty(removeNFromBack(trim(arr)))==FALSE) {
            Str_addString(&output, arr);
        }
    }
    fclose(fp);
    return output;
}


 */