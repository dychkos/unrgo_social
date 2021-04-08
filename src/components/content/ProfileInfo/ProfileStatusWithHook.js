import React,{useState,useEffect} from 'react'

const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode]=useState(false);
    let [status,setStatus] =useState(props.status);

    useEffect(()=>{
        setStatus(props.status)
    },[props.status]);

    let onStatusChange=(e)=>{
        setStatus(e.currentTarget.value);
    };

    let activateEditMode = () =>{
        setEditMode(true);
    };
    let deActivateEditMode=()=>{
        props.updateStatus(status);
        setEditMode(false);
    };
    return <div>
        {!editMode &&
        <span onDoubleClick={activateEditMode}
        >{props.status || "_----_"}</span>
        }
        {editMode &&
        <input type="text" autoFocus={true} onChange={onStatusChange} onBlur={deActivateEditMode}
               value={status}/>
        }
    </div>


};

export default ProfileStatusWithHooks;