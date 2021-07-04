
export const maxLengthCreator = (maxLength) => value => {
return(
     value.length>maxLength ? `Max lenght is ${maxLength} simbols`:undefined
    )
}
export const required = (value) => (value ? undefined : "Field is required!")