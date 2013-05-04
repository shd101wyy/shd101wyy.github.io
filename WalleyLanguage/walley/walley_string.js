/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * File:   walley_string.h
 * Author: shd101wyy
 *
 * Created on August 17, 2012, 12:34 PM
 */
var TRUE=true;
var FALSE=false;
var NULL=null;

// for javascript : x[0]='a'---> x.replace(0,'a')
String.prototype.replaceAt=function(index, char) {
      return this.substr(0, index) + char + this.substr(index+char.length);
   }

// for javascript: return "      " space num=length
function Str_initString(length){
    var i=0;
    var output="";
    for(;i<length;i++){
        
        output+=" ";
    }
    return output;
}

function exit(){
    alert("Mistake!!");
}
function strcmp ( str1, str2 ) {
    // http://kevin.vanzonneveld.net
    // +   original by: Waldo Malqui Silva
    // +      input by: Steve Hilder
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +    revised by: gorthaur
    // *     example 1: strcmp( 'waldo', 'owald' );
    // *     returns 1: 1
    // *     example 2: strcmp( 'owald', 'waldo' );
    // *     returns 2: -1

    return ( ( str1 == str2 ) ? 0 : ( ( str1 > str2 ) ? 1 : -1 ) );
}
function printf(input_str){
    var string_in_Walley_Console=document.getElementById("Walley_Console").value;
    document.getElementById("Walley_Console").value=string_in_Walley_Console+input_str;
}

// this function is not really necessary.
function charToString(input_char){
    return input_char;
}

function substr(input_str, from_index, to_index) {
    if (from_index < 0){// || to_index > (int) strlen(input_str)) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("\nMistake occurred while calling function substr\nPlease Check\n");
        printf("the input_str is "+input_str+" from_index "+from_index+" to_index "+to_index+"\n\n");
        //return "\nMistake occurred while calling function substr\nPlease Check\n";
        exit(0);
    }
    else if (from_index>to_index){
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("\nMistake occurred while calling function substr\nPlease Check\n");
        printf("the input_str is "+input_str+" from_index "+from_index+" to_index "+to_index+"\n\n");
        exit(1);
    }
    else if (from_index==to_index){
        //printf("RETURN NONE");
        return "";
    }
    else if (to_index-from_index==1){
        return charToString(input_str[from_index]);
    }
    else {
       return input_str.substring(from_index,to_index);

    }
}


function append(input_str, append_str){
    return input_str+append_str;
}

function find(from_str, find_str) {
    return from_str.indexOf(find_str);
}

// "Hello" find "l"--->3, find from behind
function find_from_behind(from_str, find_str) {
    var index = -1;
    var find_index = TRUE;
    var i;
    var j;
    
    for (i = from_str.length-1; i >=0; i--) {
        // I add one code here.
        find_index=TRUE;
        if (from_str[i] == find_str[0]) {
            //printf("Find The same\n");
            //char *temp = substr(from_str, i, i + (int) strlen(find_str));
            //printf("############"++"\n",i);
            for (j = 0; j < find_str.length; j++) {
                if(i+j==from_str.length){
                    find_index=FALSE;
                    break;
                    }
                if (find_str[j] != from_str[i + j]) {
                    //printf("!= "++" "++"\n",j,j+i);
                    find_index = FALSE;
                    break;
                }
            }
            if (find_index == TRUE) {
                //find_index = TRUE;
                //printf("Fin_Index--->"++"\n",i);
                index = i;
                break;
            }
        }
    }
    //printf(""++"",index);
    return index;
}

function find_from_behind_from_index(from_str, find_str, from_index) {
    var index = -1;
    var find_index = TRUE;
    var i;
    var j;
    
    for (i = from_index; i >=0; i--) {
        // I add one code here.
        find_index=TRUE;
        if (from_str[i] == find_str[0]) {
            //printf("Find The same\n");
            //char *temp = substr(from_str, i, i + (int) strlen(find_str));
            //printf("############"++"\n",i);
            for (j = 0; j < find_str.length; j++) {
                //printf("Find_Str[j] %c From_Str[i+j] %c\n",find_str[j],from_str[i+j]);
                
                if(i+j==from_str.length){
                    find_index=FALSE;
                    break;
                    }
                
                if (find_str[j] != from_str[i + j]) {
                    //printf("!= "++" "++"\n",j,j+i);
                    find_index = FALSE;
                    break;
                }
            }
            if (find_index == TRUE) {
                //find_index = TRUE;
                //printf("Fin_Index--->"++"\n",i);
                index = i;
                break;
            }
        }
    }
    //printf(""++"",index);
    return index;
}

function find_from_behind_not_in_string(from_str, find_str) {
    var index = -1;
    var find_index = TRUE;
    var i;
    var j;
    
    for (i = from_str.length-1; i >=0; i--) {
        // I add one code here.
        find_index=TRUE;
        if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE) {
            //printf("Find The same\n");
            //char *temp = substr(from_str, i, i + (int) strlen(find_str));
            //printf("############"++"\n",i);
            for (j = 0; j < find_str.length; j++) {
                if(i+j==from_str.length){
                    find_index=FALSE;
                    break;
                    }
                if (find_str[j] != from_str[i + j]) {
                    //printf("!= "++" "++"\n",j,j+i);
                    find_index = FALSE;
                    break;
                }
            }
            if (find_index == TRUE) {
                //find_index = TRUE;
                //printf("Fin_Index--->"++"\n",i);
                index = i;
                break;
            }
        }
    }
    //printf(""++"",index);
    return index;
}


function find_from_index_to_index(from_str, find_str, from_index, to_index) {
    if (from_index < 0 || to_index >from_str.length) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_from_index_to_index\n");
        printf("Try to find |"+find_str+"| in |"+from_str+"| from |"+from_index+"| to |"+to_index+"|\n");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = from_index; i < to_index; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0]) {
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        find_index = FALSE;
                        break;
                    }
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}

function find_from_index(from_str, find_str, from_index) {
    if (from_index < 0) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_from_index");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = from_index; i < from_str.length; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0]) {
                //printf("%c==%c\n",from_str[i],find_str[0]);
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        //printf("%c!=%c\n",find_str[j],from_str[i+j]);
                        find_index = FALSE;
                        break;
                    }
                    //printf("|%c| == |%c| ",find_str[j],from_str[i+j]);
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    //printf("FIND INDEX\n");
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}

function find_to_index(from_str, find_str, to_index) {
    if (to_index > from_str.length) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_to_index");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = 0; i < to_index; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0]) {
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        find_index = FALSE;
                        break;
                    }
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}


function replace(input_str, replace_str, with_str) {
    //printf("#### replace ####\n");
    var i;
    var j;

    //char *input_str_copy = input_str;
    var output = "";
    var length_of_input_str=input_str.length;
    for (i = 0; i < length_of_input_str; i++) {
        if (input_str[i] == replace_str[0]) {
            var is_equal = TRUE;
            for (j = 0; j < replace_str.length; j++) {
                if (replace_str[j] != input_str[i + j]) {
                    is_equal = FALSE;
                    //printf("\nis_equal=FALSE\n");
                }
            }
            if (is_equal == TRUE) {
                output=output+with_str;
                i = i + replace_str.length - 1;
            } else {
                output += input_str[i];
            }
        } else {
            output += input_str[i];
        }
    }
    
    var output_str=output;
    return output_str;
}
function replace_from_index_to_index(input_str, replace_str, with_str, from_index, to_index){
    if (from_index>=to_index) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred while calling function replace_from_index_to_index\ninput_str "+input_str+"\nreplace_str "+replace_str+"\nwith_str "+with_str+"\nfrom_index "+from_index+" to_index "+to_index+"\n");
        exit(0);
    }
    var ahead="";
    var back="";
    var middle="";
    if(from_index!=0){
        ahead=substr(input_str,0,from_index);
    }
    else{
        ahead="";
    }
    if(to_index!=input_str.length){
        back=substr(input_str,to_index,input_str.length);
	}
    else{
        back="";
	}
    middle=substr(input_str,from_index,to_index);
    //printf("middle "++"\n, replace_str "++"\n with_str "++"\n",input_str,replace_str,with_str);
    middle=replace(middle,replace_str,with_str);
    
    var output=append(ahead, middle);
    output=append(output, back);
    return output;
        
}


/* 
 * 
 * 
 * 
 * Start from here
 * 
 * */
function replace_from_index_to_index_not_in_string(input_str, replace_str, with_str, from_index, to_index){
    if (from_index>=to_index) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred while calling function replace_from_index_to_index_not_in_string\ninput_str "+input_str+"\nreplace_str "+replace_str+"\nwith_str "+with_str+"\nfrom_index "+from_index+" to_index "+to_index+"\n");
        exit(0);
    }
    var ahead;
    var back;
    var middle;
    if(from_index!=0)
        ahead=substr(input_str,0,from_index);
    else
        ahead="";
    if(to_index!=input_str.length)
        back=substr(input_str,to_index,input_str.length);
    else
        back="";
    middle=substr(input_str,from_index,to_index);
    //printf("middle "++"\n, replace_str "++"\n with_str "++"\n",input_str,replace_str,with_str);
    middle=replace_not_in_string(middle,replace_str,with_str);
    
    var output=append(ahead, middle);
    output=append(output, back);
    return output;
    
}
function count_str(input_str, count_str){
    var count=0;
    var i=0;
    var from=0;
    var length_of_input_str=input_str.length;
    for(;i<length_of_input_str;i++){
        if(find_from_index(input_str,count_str,from)==-1)
            break;
        else{
            from=find_from_index(input_str,count_str,from)+1;
            count+=1;
        }
    }
    return count;
}


function charIsInString(input_str, char_index){
    //char *temp=substr(input_str,0,char_index);
    //char *temp=substr(input_str,0,char_index+1);
    //char char_to_check=input_str[char_index];
     if(char_index>=input_str.length){
                     printf("@@ |"+CURRENT_INPUT_STR+"|\n");

         printf("Mistake occurred whiling calling function charIsInString\nOut of index, input_str "+input_str+" with index "+char_index+"\n");
         exit(0);
     }
    var in_string=FALSE;
    var find_double_quote=FALSE;
    var find_single_quote=FALSE;
    var i=0;
    for(i=0;i<input_str.length;i++){
        //printf("-->%c\n",input_str[i]);
        if(i==char_index){
            //printf("There "++"\n",in_string);
                break;
        }
        if(find_double_quote==TRUE && input_str[i]=='"'){
            //printf("here\n");
            if (input_str[i-1]=='\\') {
                in_string=TRUE;
                continue;
            }
            
            find_double_quote=FALSE;
            in_string=FALSE;
            continue;
        }
        if(input_str[i]=='\''&&find_double_quote==FALSE&&find_single_quote==TRUE){
            if (input_str[i-1]=='\\') {
                in_string=TRUE;
                continue;
            }
            
            find_single_quote=FALSE;
            in_string=FALSE;
            continue;
        }
        
        if(input_str[i]=='"'&&find_double_quote==FALSE){
            find_double_quote=TRUE;
            in_string=TRUE;
            continue;
        }
        if(input_str[i]=='\''&&find_double_quote==FALSE&&find_single_quote==FALSE){
            find_single_quote=TRUE;
            in_string=TRUE;
            continue;
        } 
    }
    //printf("Char is in string --->input_str : "++"\n",input_str);
     if(input_str[char_index]=='"'){
         if (char_index>=1 && input_str[char_index-1]!='\\') {
             in_string=FALSE;
         }
     }
     if(find_double_quote==FALSE && find_single_quote==TRUE){
         if ( char_index>=1 && input_str[char_index]=='\'') {
             in_string=FALSE;
         }
    }
    return in_string;
}
// change "heLlo" to "HELLO"

function stringToUpperCase(input_str) {
    return input_str.toUpperCase();
}
function stringToLowerCase(input_str) {
    return input_str.toLowerCase();
}
/*
 
 * eg find_not_in_string("'hello',hello",he)--->9
 */

function find_not_in_string(from_str, find_str) {
    var index = -1;
    var find_index = TRUE;
    var i;
    var j;
    for (i = 0; i < from_str.length; i++) {
        // I add one code here.
        find_index=TRUE;
        if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE) {
            //printf("Find The same\n");
            //printf("%c\n",from_str[i]);
            //char *temp = substr(from_str, i, i + (int) strlen(find_str));
            //printf("############"++"\n",i);
            for (j = 0; j < find_str.length; j++) {
                //printf("Find_Str[j] %c From_Str[i+j] %c\n",find_str[j],from_str[i+j]);
                if (find_str[j] != from_str[i + j]) {
                    //printf("!= "++" "++"\n",j,j+i);
                    find_index = FALSE;
                    break;
                }
            }
            if (find_index == TRUE) {
                //find_index = TRUE;
                //printf("Fin_Index--->"++"\n",i);
                index = i;
                break;
            }
        }
    }
    return index;
}



/*
 * eg replace_not_in_string("'Hello',Hello","Hello","a")---->"'Hello',a"
 */
function replace_not_in_string(input_str, replace_str, with_str) {
    //printf("#### replace not in string ####\n");
    //printf("#### |"++"|\n, replace|"++"|\n, with|"++"|\n, ####\n",input_str,replace_str,with_str);
    var i;
    var j;

    var output="";
    var length_of_input_str=input_str.length;
    var length_of_with_str=with_str.length;
    
    for (i = 0; i < length_of_input_str; i++) {
        //printf("WITH STR ----->|"++"|, "++"\n",with_str,(int)strlen(with_str));
        //printf("---->%c %c "++"\n",input_str[i],replace_str[0],charIsInString(input_str,i));
        if (input_str[i] == replace_str[0] && charIsInString(input_str,i)==FALSE) {
            var is_equal = TRUE;
            //printf("00000 Equal, %c\n",replace_str[0]);
            for (j = 0; j < replace_str.length; j++) {
                if (replace_str[j] != input_str[i + j]) {
                    is_equal = FALSE;
                    //printf("\nis_equal=FALSE\n");
                }
            }
            if (is_equal == TRUE) {
                //printf("Find replace_str\n");
                //printf("input str "++"\n",input_str);
                //if((int)strlen(with_str)!=0)
                with_str=substr(with_str,0,length_of_with_str);
                //printf("OUTPUT---->|"++"|\n",output);
                //printf("with str-->|"++"|\n",with_str);
                if(length_of_with_str!=0)
                    output+=with_str;
                //printf("OUTPUT---->|"++"|\n",output);
                //printf("input str "++"\n",input_str);
                //printf("i is "++"\n",i);
                i = i + replace_str.length - 1;
                
                //printf("i is "++"\n",i);
            } else {
                output += input_str[i];
            }
        } else {
            output += input_str[i];
        }
        //printf("--->%c\n",input_str[i]);
    }
    //char *output_str = output;
    //printf("Output is "++"\n",output);
    var output_str=output;

    return output_str;
}

/*
 * eg replace_not_in_string_for_times("'Hello',Hello Hello","Hello","a",1)---->"'Hello',a,Hello"
 */
function replace_not_in_string_for_times(input_str, replace_str, with_str, time) {
    //printf("#### replace not in string ####\n");
    //printf("#### |"++"|\n, replace|"++"|\n, with|"++"|\n, ####\n",input_str,replace_str,with_str);
    var i;
    var j;
    
    var count=0;

    var output="";
    var length_of_input_str=input_str.length;
    var length_of_with_str=with_str.length;
    
    for (i = 0; i < length_of_input_str; i++) {
        //printf("WITH STR ----->|"++"|, "++"\n",with_str,(int)strlen(with_str));
        //printf("---->%c %c "++"\n",input_str[i],replace_str[0],charIsInString(input_str,i));
        if (input_str[i] == replace_str[0] && charIsInString(input_str,i)==FALSE && count<time) {
            var is_equal = TRUE;
            //printf("00000 Equal, %c\n",replace_str[0]);
            for (j = 0; j < replace_str.length; j++) {
                if (replace_str[j] != input_str[i + j]) {
                    is_equal = FALSE;
                    //printf("\nis_equal=FALSE\n");
                }
            }
            if (is_equal == TRUE) {
                count++;
                //printf("Find replace_str\n");
                //printf("input str "++"\n",input_str);
                //if((int)strlen(with_str)!=0)
                with_str=substr(with_str,0,length_of_with_str);
                //printf("OUTPUT---->|"++"|\n",output);
                //printf("with str-->|"++"|\n",with_str);
                if(length_of_with_str!=0)
                    output+=with_str;
                //printf("OUTPUT---->|"++"|\n",output);
                //printf("input str "++"\n",input_str);
                //printf("i is "++"\n",i);
                i = i + replace_str.length - 1;
                
                //printf("i is "++"\n",i);
            } else {
                output += input_str[i];
            }
        } else {
            output += input_str[i];
        }
        //printf("--->%c\n",input_str[i]);
    }
    
    var output_str=output;

    return output_str;
}

function find_from_index_not_in_string(from_str, find_str, from_index) {
    if (from_index < 0) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_from_index_not_in_string");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = from_index; i < from_str.length; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE) {
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        find_index = FALSE;
                        break;
                    }
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}

function count_str_not_in_string(input_str, count_str){
    var count=0;
    var i=0;
    var from=0;
    var length_of_input=input_str.length;
    for(;i<length_of_input;i++){
        if(find_from_index_not_in_string(input_str,count_str,from)==-1)
            break;
        else{
            from=find_from_index_not_in_string(input_str,count_str,from)+1;
            count+=1;
        }
    }
    return count;
}

function experiment(input_str){
    input_str=substr(input_str,0,2);
    printf("input_str "+input_str+"\n");
    return "Hello";
}

function removeBackSpace(input_message) {
    var length_of_input_message=input_message.length;
    if (length_of_input_message!= 0) {
        var i = input_message.length - 1;
        var output = input_message;
        if (output[i] == ' ') {
            for (; i >= 0; i--) {
                if (input_message[i] != ' ') {
                    output = substr(input_message, 0, i + 1);
                    break;
                }
            }
        }
        return output;
    } else {
        return "";
    }

}

function removeAheadSpace(input_message) {
    //printf("Input Message is "++"\n",input_message);
    if (input_message.length != 0) {
        var i = 0;
        var output = input_message;
        if (input_message[0] == ' ') {
            for (; i < input_message.length; i++) {
                if (input_message[i] != ' ') {
                    output = substr(input_message, i, input_message.length);
                    break;
                }
            }
        }
        return output;
    } else {
        return "";
    }
}

/*
 * removeAheadSpaceForNum("  Hi",1)---->" Hi")
 */
function removeAheadSpaceForNum(input_message, remove_n_spaces) {
    if (input_message.length!= 0) {
        var i = 0;
        var count = 0;
        var output = input_message;
        for (; i < input_message.length; i++) {
            if (input_message[i] == ' ') {
                count++;
            }
            if (count == remove_n_spaces) {
                output = substr(input_message, i + 1, input_message.length);
                break;
            }
        }
        return output;
    } else {
        return "";
    }
}

function trim(input_str){
    return removeAheadSpace(removeBackSpace(input_str));
}

//javascript : isdigit
function isdigit(input_str){
      return ! isNaN (input_str-0);

}
function stringIsDigit(input_str){
  return ! isNaN (input_str-0);
}

function stringIsFraction(input_str){
    var index_of_gang=find(input_str,"/");
    var string_is_digit=stringIsDigit(input_str);
    
    if (index_of_gang==-1) {
        return FALSE;
    }
    if (index_of_gang==-1 && string_is_digit==FALSE) {
        return FALSE;
    }
    if (index_of_gang!=-1) {
        var numerator=substr(input_str, 0, index_of_gang);
        var denominator=substr(input_str, index_of_gang+1, input_str.length);
        
        if (stringIsDigit(numerator)==TRUE && stringIsDigit(denominator)==TRUE) {
            return TRUE;
        }
        else{
            return FALSE;
        }
        
    }
    return FALSE;
}

//new written function for javascript
function isalpha(input_char){
   return /^[ a-z]+$/i.test(input_char);
}
function stringIsAlpha(input_str){
    input_str=trim(input_str);
    var i=0;
    var length=input_str.length;
    var is_alpha=TRUE;
    for (i=0; i<length; i++) {
        if (isalpha(input_str[i])==FALSE) {
            is_alpha=FALSE;
            break;
        }
    }
    return is_alpha;
}

// like a_b 
function stringIsAlphaAndSlash(input_str){
    input_str=trim(input_str);
    var i=0;
    var length=input_str.length;
    var is_alpha=TRUE;
    for (i=0; i<length; i++) {
        if (isalpha(input_str[i])==FALSE && input_str[i]!='_') {
            is_alpha=FALSE;
            break;
        }
    }
    return is_alpha;
}


function charIsInList(input_str,index){
    var check_str;
    if (input_str[index]=='[') {
        check_str=substr(input_str, 0, index);
    }
    else if (input_str[index]==']')
        check_str=substr(input_str, 0, index+1);
    else
        check_str=substr(input_str, 0, index+1);

    if(count_str_not_in_string(check_str, "[") != count_str_not_in_string(check_str, "]")){
        //printf("%c "++" is in []\n",input_str[index],index);
        //printf("[ "++", ] "++"\n",count_str_not_in_string(check_str, "["),count_str_not_in_string(check_str, "]"));
        return TRUE;
    }
    else{
        return FALSE;
    }
}


function charIsInDictionary(input_str, index){
    var check_str;
    if (input_str[index]=='{') {
        check_str=substr(input_str, 0, index);
    }
    else if (input_str[index]=='}')
        check_str=substr(input_str, 0, index+1);
    else
        check_str=substr(input_str, 0, index+1);
    if(count_str_not_in_string(check_str, "{") != count_str_not_in_string(check_str, "}")){
        //printf("%c "++" is in dictionary\n",input_str[index],index);
        //printf("RETURN TRUE\n");
        return TRUE;
    }
    else{
        //printf("RETURN FALSE\n");
        return FALSE;
    }
}

function charIsInParenthesis( input_str, index){
    var check_str=substr(input_str, 0, index+1);
    if(count_str_not_in_string(check_str, "(") != count_str_not_in_string(check_str, ")")){
        //printf("%c "++" is in dictionary\n",input_str[index],index);
        return TRUE;
    }
    else{
        return FALSE;
    }
}

function find_not_in_str_list_dict(from_str, find_str) {
    var index = -1;
    var find_index = TRUE;
    var i;
    var j;
    for (i = 0; i < from_str.length; i++) {
        // I add one code here.
        find_index=TRUE;
        if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE && charIsInDictionary(from_str, i)==FALSE && charIsInList(from_str, i)==FALSE) {
            //printf("Find The same\n");
            //printf("%c\n",from_str[i]);
            //char *temp = substr(from_str, i, i + (int) strlen(find_str));
            //printf("############"++"\n",i);
            for (j = 0; j < find_str.length; j++) {
                //printf("Find_Str[j] %c From_Str[i+j] %c\n",find_str[j],from_str[i+j]);
                if (find_str[j] != from_str[i + j]) {
                    //printf("!= "++" "++"\n",j,j+i);
                    find_index = FALSE;
                    break;
                }
            }
            if (find_index == TRUE) {
                //find_index = TRUE;
                //printf("Fin_Index--->"++"\n",i);
                index = i;
                break;
            }
        }
    }
    return index;
}
function find_from_index_not_in_str_list_dict(from_str,find_str, from_index) {
    if (from_index < 0) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_from_index_not_in_str_list_dict");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = from_index; i < from_str.length; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE && charIsInDictionary(from_str, i)==FALSE && charIsInList(from_str, i)==FALSE) {
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        find_index = FALSE;
                        break;
                    }
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}
function find_from_index_not_in_str_list(from_str,find_str, from_index) {
    if (from_index < 0) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_from_index_not_in_str_list_dict");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = from_index; i < from_str.length; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE && charIsInList(from_str, i)==FALSE) {
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        find_index = FALSE;
                        break;
                    }
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}


function count_str_not_in_str_list_dict(input_str, count_str){
    var count=0;
    var i=0;
    var from=0;
    for(;i<input_str.length;i++){
        if(find_from_index_not_in_str_list_dict(input_str,count_str,from)==-1)
            break;
        else{
            from=find_from_index_not_in_str_list_dict(input_str,count_str,from)+1;
            count+=1;
        }
    }
    return count;
}

function find_not_in_str_list_dict_parenthesis(from_str, find_str) {
    var index = -1;
    var find_index = TRUE;
    var i;
    var j;
    for (i = 0; i < from_str.length; i++) {
        // I add one code here.
        find_index=TRUE;
        if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE && charIsInDictionary(from_str, i)==FALSE && charIsInList(from_str, i)==FALSE && charIsInParenthesis(from_str, i)==FALSE) {
            //printf("Find The same\n");
            //printf("%c\n",from_str[i]);
            //char *temp = substr(from_str, i, i + (int) strlen(find_str));
            //printf("############"++"\n",i);
            for (j = 0; j < find_str.length; j++) {
                //printf("Find_Str[j] %c From_Str[i+j] %c\n",find_str[j],from_str[i+j]);
                if (find_str[j] != from_str[i + j]) {
                    //printf("!= "++" "++"\n",j,j+i);
                    find_index = FALSE;
                    break;
                }
            }
            if (find_index == TRUE) {
                //find_index = TRUE;
                //printf("Fin_Index--->"++"\n",i);
                index = i;
                break;
            }
        }
    }
    return index;
}
function find_from_index_not_in_str_list_dict_parenthesis(from_str, find_str, from_index) {
    if (from_index < 0) {
                    printf("@@ |"+CURRENT_INPUT_STR+"|\n");

        printf("Mistake occurred which calling function find_from_index_not_in_str_list_dict");
        return -1;
    } else {
        var index = -1;
        var find_index = TRUE;
        var i;
        var j;
        for (i = from_index; i < from_str.length; i++) {
            find_index = TRUE;
            if (from_str[i] == find_str[0] && charIsInString(from_str,i)==FALSE && charIsInDictionary(from_str, i)==FALSE && charIsInList(from_str, i)==FALSE && charIsInParenthesis(from_str, i)==FALSE) {
                for (j = 0; j < find_str.length; j++) {
                    if (find_str[j] != from_str[i + j]) {
                        find_index = FALSE;
                        break;
                    }
                }
                if (find_index == TRUE) {
                    //find_index = TRUE;
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}
function count_str_not_in_str_list_dict_parenthesis(input_str, count_str){
    var count=0;
    var i=0;
    var from=0;
    for(;i<input_str.length;i++){
        if(find_from_index_not_in_str_list_dict_parenthesis(input_str,count_str,from)==-1)
            break;
        else{
            from=find_from_index_not_in_str_list_dict_parenthesis(input_str,count_str,from)+1;
            count+=1;
        }
    }
    return count;
}
//javascript: ths function may have problem
function intToCString(num1){
    var temp=num1
    if(num1==TRUE)
        temp=1
    else if (num1==FALSE)
        temp=0;
    temp=parseInt(temp);
    return temp.toString();
}


function checkWhetherComplete(input_str){
    var complete=TRUE;
    if(input_str[0]==input_str[input_str.length-1]||
       (input_str[0]=='['&&input_str[input_str.length-1]==']')||
       (input_str[0]=='{'&&input_str[input_str.length-1]=='}'))
        complete=TRUE;
    else
        complete=FALSE;
    return complete;
}


function numToCString(num){
    if(num==TRUE)
        num=1;
    if(num==FALSE)
        num=0;
       return num.toString();

}

function stringReverse(input_str){
    var count=0;
    var length=input_str.length;
    var output="";
    var i;
    for (i=length-1; i>=0; i--) {
        output+=input_str[i];
        count++;
    }
    return output;
}

//             11
//   012345678901
//   sin(3*(4+5))        indexOfMostOutterBracket(sin(3*(4+5)),3)---->11
function indexOfMostOutterBracket(input_str, index_of_left_bracket){
    var num_of_right_bracket=0;
    var i=index_of_left_bracket;
    var length=input_str.length;
    var num_of_left_bracket=0;
    var index=-1;
    for (; i<length; i++) {
        if (input_str[i]=='(') {
            num_of_left_bracket++;
        }
        else if (input_str[i]==')') {
            num_of_right_bracket++;
        }
        if (num_of_left_bracket==num_of_right_bracket) {
            index=i;
            break;
        }
    }
    return index;
}

function indexOfMostOutterRectBracket(input_str, index_of_left_bracket){
    var num_of_right_bracket=0;
    var i=index_of_left_bracket;
    var length=input_str.length;
    var num_of_left_bracket=0;
    var index=-1;
    for (; i<length; i++) {
        if (input_str[i]=='[') {
            num_of_left_bracket++;
        }
        else if (input_str[i]==']') {
            num_of_right_bracket++;
        }
        if (num_of_left_bracket==num_of_right_bracket) {
            index=i;
            break;
        }
    }
    return index;
}

function indexOfMostOutterDictBracket(input_str, index_of_left_bracket){
    var num_of_right_bracket=0;
    var i=index_of_left_bracket;
    var length=input_str.length;
    var num_of_left_bracket=0;
    var index=-1;
    for (; i<length; i++) {
        if (input_str[i]=='{') {
            num_of_left_bracket++;
        }
        else if (input_str[i]=='}') {
            num_of_right_bracket++;
        }
        if (num_of_left_bracket==num_of_right_bracket) {
            index=i;
            break;
        }
    }
    return index;
}


function findAlphaInString(input_str){
    var i=0;
    while (i<input_str.length) {
        if (isalpha(input_str[i])==TRUE) {
            return TRUE;
        }
        
        i++;
    }
    return FALSE;
}

function stringHasAlpha(input_str){
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
// javascript : atoi
function atoi(input_str){
    return parseInt(input_str);
}

// javascript : atoi
function atof(input_str){
    return parseFloat(input_str);
}


/*
 * Attention: This function is different from the function in C language
 * this javascript version will return a value.
 * Init String List
 * 
 */
function Str_initStringList(output){
        output= new Array();
        output[0]="1";
        return output;
}

function Str_PrintStr(input_str){
    printf("length is "+input_str[0]+"\n");
    var length=atoi(input_str[0]);
    var i=1;
    while (i<length) {
        printf(input_str[i]+"\n");
        i++;
    }
}

/*
 * Attention: This function is different from the function in C language
 * this javascript version will only be used by global var.
 * add String
 * 
 */
function Str_addString(input_str_list,add_str){
    input_str_list.push(add_str);
    input_str_list[0]=intToCString(atoi(input_str_list[0])+1);
}
