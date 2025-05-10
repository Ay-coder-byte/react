import React, { useState } from "react";
import { Bell, X, FilePenLine } from "lucide-react";
import img from "./assets/related-2.jpg";
import "./DashBoard.css";

const DashBoard = () => {
  const [bio, setBio] = useState("");
  const [isAddBio, setIsBio] = useState(false);
  const [isDoneAdding, setIsDoneAdding] = useState(false);
  const [editButton,setEditButton]= useState(false);
  const [modal, setModal] = useState(false);
  const [editVal, setEditValue] = useState('');



  const onDeleteBio = () => {
    setModal(true)
  }
  const handleEdit = () => {
    setEditButton(true)
    setEditValue(bio)
  }

  const onAddBio= () => {
    setIsBio(true)
    
  }

  const onCloseBio = () => {
    setIsBio(false)
    setIsDoneAdding(true)
  }

  const onTextAreaChange =(e) => {
    setBio(e.target.value)
  }

  const handleEditArea = (e)=> {
    setEditValue(e.target.value)
  }

  const onCancel =() => {
    setBio('')
    setModal(false)
  }

  const handleUpdate =() => {
    setEditButton(false)
    console.log(editVal)

    // now send the editValue to the bio field

    setBio(editVal)
    
  }

  const handleNo =() => {
    
    setModal(false)
  }

  const handleImageChange = (e) => {
    console.log(e.target.files[0])
  }


  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <div className="header">
          <h1>Dashboard</h1>
        </div>
        <div className="notify">
          <Bell size={30} />
          <img src={img} alt="" />
        </div>
      </div>

      <div className="mains">
        <div className="dashboard__mains">
          <div className="main__content">
            <img src={img} alt="" />
            <h2>Web Developer</h2>
          </div>

          <div className="job__text">
            <p>Biography</p>
            {bio && isDoneAdding && (
              <>
                <div className="img__text">
                  <div className="icons">
                    <X className="icon1"  onClick={onDeleteBio}/>
                    <FilePenLine className="icon" onClick={handleEdit} />
                  </div>
                  <p>{bio}</p>
                </div>
              </>
            )}

            {
              !bio && !isDoneAdding && <p>No BioGraphy added yet</p>
            }
          </div>

          <div className="btn__cont">
            <button>change Image</button>
            <div>
              <input onChange={handleImageChange} type="file" name="ayo" id="ayo" style={{display:'none'}}/>
              <label htmlFor="ayo">
                  <span className="upload">upload image </span>
              </label>
            </div>
            {!bio && <button onClick={onAddBio}>Add bio</button>}
          </div>
          {isAddBio && (
            <div className="add_over">
              <textarea onChange={onTextAreaChange} className="add_field" name="" id=""></textarea>
              <button onClick={onCloseBio}>create bio</button>
            </div>
          )}
         {editButton && <div className="add__over">
            <textarea value={editVal} name="" onChange={handleEditArea} className="add__field" id="">ooooo</textarea>
            <button onClick={handleUpdate} >Update</button>
          </div>}

         {modal && <div className="del_over">
            <div className="delete_page">
              <p>Do you want to exit the page?</p>
              <button onClick={onCancel}>Yes</button>
              <button onClick={handleNo}>No</button>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
