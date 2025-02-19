export const ADD_NOTE ="ADD_NOTE";
export const REMOVE_NOTE ="REMOVE_NOTE";
export const EDIT_NOTE ="EDIT_NOTE";

export const addNote =(title,content)=>({
    type:ADD_NOTE,
    payload:{title,content}
})
export const removeNote =(index)=>({
    type:REMOVE_NOTE,
    payload:index
    })
export const editNote =(index,title,content)=>({
    type:EDIT_NOTE,
    payload:{index,title,content}
    })