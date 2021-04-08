export const requiredField = (value)=>{
    if(value){
        return undefined;
    }
    else return 'Field is required';
};

export const maxLength = maxLength => value=>{
    if(value.length>maxLength){
        return `Max field length is ${maxLength} symbols`;
    }
    else return undefined;

};