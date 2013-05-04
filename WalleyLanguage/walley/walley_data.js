/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
//
//  walley_data.h
//  CPractice
//
//  Created by shd101wyy on 12-10-17.
//  Copyright (c) 2012年 shd101wyy. All rights reserved.
//

//#include "walley_string.h"

// javascript : VAR replace struct VAR in C language;
function VAR(){
    this.var_name;
    this.var_value;
    this.var_type;
};

function Var_PrintVar(struct_var){
    var row=0;
    var length=0;
    if (struct_var[0].var_name!="__size_of_array__") {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Var_PrintVar..Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=parseInt(struct_var[0].var_value);
    }
    while (row<length) {
        printf(struct_var[row].var_name+":"+struct_var[row].var_value+":"+struct_var[row].var_type+"\n");
        row++;
    }
}

/* javascript: must say var struct_var=new Array() at first 
 * in order to pass param as reference
 * 
 * this function will return struct_var, which is different from the C code;
 *
 *  */

function Var_initVar(struct_var){
    struct_var=new Array();
    //struct_var[0]=new VAR();
    struct_var.push(new VAR());

    struct_var[0].var_name="__size_of_array__";
    struct_var[0].var_value="1";
    struct_var[0].var_type="int";
    return struct_var
}
function Var_addProperty(struct_var,var_name,var_value,var_type){
    
    var length=0;
    if (struct_var[0].var_name!="__size_of_array__") {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Var_addProperty..Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=parseInt(struct_var[0].var_value);
    }    
    struct_var[0].var_value=numToCString(1+parseInt(struct_var[0].var_value));
    
    struct_var[length]=new VAR();
    struct_var[length].var_name=var_name;
    struct_var[length].var_type=var_type;
    struct_var[length].var_value=var_value;
}

function Var_Existed(struct_var,var_name){
   // printf("ENTER HERE "++"\n",var_name);
    var existed=FALSE;
    var i=0;
    var length=0;
    if (struct_var[0].var_name!="__size_of_array__") {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        
        printf("Var_Existed..Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=parseInt(struct_var[0].var_value);
    }

   // printf("There\n");
    while (i<length) {
       // printf("a");
       // printf("i-->"++"",i);
        if (struct_var[i].var_name==var_name) {
            existed=TRUE;
            break;
        }
        i=i+1;
    }
    return existed;
}

/*
function Var_removeVar(struct_var, remove_var_name){
    var length=0;
    if (struct_var[0].var_name!="__size_of_array__") {
        printf("Var_removeVar..Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=parseInt(struct_var[0].var_value);
    }
    
    
    var i=0;
    var find_var=0;
    
    while (i<length) {
        if (find_var==1) {
            struct_var[i-1].var_name=struct_var[i].var_name;
            struct_var[i-1].var_type=struct_var[i].var_type;
            struct_var[i-1].var_value=struct_var[i].var_value;
            i++;
            continue;
        }
        if (struct_var[i].var_name==remove_var_name) {
            find_var=1;
        }
        i=i+1;
    }
    if (find_var==1) {
        struct_var.pop();
        struct_var[0].var_value=numToCString(parseInt(struct_var[0].var_value)-1);
    }
}
*/
function Var_removeVar(struct_var, remove_var_name){
        
    
    var length=0;
    if (strcmp(struct_var[0].var_name,"__size_of_array__")!=0) {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Var_removeVar..Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=atoi(struct_var[0].var_value);
    }
    
    
    var i=0;
    var find_var=0;
    var remove_num=0;
    var is_deleting_list_or_dict=FALSE;
    
    
    var delete_var_type="";
    var delete_var_name="";
    
    
    while (i<length) {
        if (find_var==1) {
            if(is_deleting_list_or_dict==TRUE&&strcmp(delete_var_type, "list")==0){
                var temp_var_name=struct_var[i].var_name;
                var index_of=find(temp_var_name,"[");
                if(index_of!=-1){
                    var ahead=substr(temp_var_name, 0, find(temp_var_name,"["));
                    if (strcmp(ahead, delete_var_name)==0) {
                        remove_num+=1;
                        struct_var[i].var_name=NULL;
                        struct_var[i].var_value=NULL;
                        struct_var[i].var_type=NULL;
                        i++;
                        continue;
                    }
                    else{
                        is_deleting_list_or_dict=FALSE;
                    }
            
                }
                else {
                        is_deleting_list_or_dict=FALSE;
                }
        }
            else if(is_deleting_list_or_dict==TRUE && strcmp(delete_var_type, "dictionary")==0){
                var temp_var_name=struct_var[i].var_name;
                var index_of=find(temp_var_name,"{");
                if(index_of!=-1){
                    var ahead=substr(temp_var_name, 0, find(temp_var_name,"{"));
                    if (strcmp(ahead, delete_var_name)==0) {
                        remove_num+=1;
                        struct_var[i].var_name=NULL;
                        struct_var[i].var_value=NULL;
                        struct_var[i].var_type=NULL;
                        i++;
                        continue;
                    }
                    else{
                        is_deleting_list_or_dict=FALSE;
                    }

                }
                else{
                        is_deleting_list_or_dict=FALSE;

                }
            }
            else{
                is_deleting_list_or_dict=FALSE;
            }
            
            if(is_deleting_list_or_dict==FALSE){
            
                struct_var[i-remove_num].var_name=struct_var[i].var_name;
                struct_var[i-remove_num].var_type=struct_var[i].var_type;
                struct_var[i-remove_num].var_value=struct_var[i].var_value;
                i++;
            }
            continue;
            
            
        }
        if (strcmp(struct_var[i].var_name,remove_var_name)==0) {
            find_var=1;
            remove_num+=1;
            if (strcmp(struct_var[i].var_type, "dictionary")==0||strcmp(struct_var[i].var_type, "list")==0) {
                is_deleting_list_or_dict=TRUE;
                delete_var_name=struct_var[i].var_name;
                delete_var_type=struct_var[i].var_type;
            }
        }
        i=i+1;
    }
    if (find_var==1) {
       
        struct_var[length-remove_num].var_name=NULL;
        struct_var[length-remove_num].var_type=NULL;
        struct_var[length-remove_num].var_value=NULL;
        var i=0;
        for(;i<remove_num;i++){
            struct_var.pop()
        }
        //*struct_var=(struct VAR*)realloc(*struct_var, sizeof(struct VAR)*(length-remove_num));
        struct_var[0].var_value=intToCString(atoi(struct_var[0].var_value)-remove_num);
    }
    
    
}


function Var_changeValueOfVar(struct_var, var_name,var_value,var_type){
    var i=0;
    var length=0;
    if (struct_var[0].var_name!="__size_of_array__") {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=parseInt(struct_var[0].var_value);
    }
    
    while (i<length) {
        if (struct_var[i].var_name==var_name) {
            struct_var[i].var_value=var_value;
            struct_var[i].var_type=var_type;
            break;
        }
        i=i+1;
    }
}

function Var_getValueOfVar(struct_var, var_name){
    var i=0;
    var length=0;
    if (struct_var[0].var_name!="__size_of_array__") {
                                printf("@@ |"+CURRENT_INPUT_STR+"|\n");
        printf("Can not find __size_of_array__");
        exit(0);
    }
    else{
        length=parseInt(struct_var[0].var_value);
    }
    
    while (i<length) {
        if (struct_var[i].var_name==var_name) {
            return struct_var[i].var_value;
        }
        i=i+1;
    }
    //return "None";
    return var_name;
}





