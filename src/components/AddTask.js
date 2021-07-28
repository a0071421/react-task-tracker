import { useState } from "react"



const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({text, day, reminder});
    setText("");
    setDay("");
    setReminder(false)
  }
  return (
    <form className="add-form" onSubmit={(e) => onSubmit(e)}>
      <div className="form-control">
         <label htmlFor="task">Task</label>
         <input id="task" type="text" placeholder="Add Task" value={text}  onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
         <label htmlFor="time">Day & Time</label>
         <input id="time" type="text" placeholder="Add Day & Time" value={day}  onChange={(e) => setDay(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
         <label htmlFor="reminder">Reminder</label>
         <input id="reminder" type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.target.checked)} />
      </div>
      <button type="submit" className="btn btn-block">Save</button>
     
    </form>
  )
}

export default AddTask
