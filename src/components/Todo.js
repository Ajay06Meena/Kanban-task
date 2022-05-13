import React, { useState } from 'react'
import { Button } from "react-bootstrap";
import Comment from './Comment';

const Todo = () => {
    const [todo, setTodo] = useState({
        title: "",
        description: "",
    })
    const [todos, setTodos] = useState([])
    const [progress, setProgress] = useState([])
    const [complete, setComplete] = useState([])
    const [ids, setId] = useState('')
    const [showModal, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [comment, setComment] = useState('')
    const handleChange = (e) => {

        setTodo({ ...todo, [e.target.name]: e.target.value, id: Math.random() * 100, child: [] })
    }

    const handler = (e) => {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({ title: "", description: "" });
    }

    const deleteTodo = (id) => {
        setTodos((todos) => {
            return todos.filter((item, index) => {
                return index !== id;
            })
        })
        setProgress(() => {
            return todos.filter((item, index) => {
                return index === id;
            })
        })

    }

    const addInProgress = (item) => {
        setProgress([...progress, item])
    }

    const moveToComplete = (id) => {
        setProgress((progress) => {
            return progress.filter((item, index) => {
                return index !== id;
            })
        })

        setComplete(() => {
            return progress.filter((item, index) => {
                return index === id
            })
        })
    }

    const addInComplete = (elements) => {
        setComplete([...complete, elements])

    }
    const handleSave = (id) => {
        todos.map((element) => {
            if (id === element.id) {
                element.child.push(comment)
                return element
            }
            return element
        })
        setComment('')
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h2 style={{ marginRight: "120px" }}>Todo</h2>
                        {todos && todos.map((item, index) => {
                            return (
                                <div className="card" style={{ width: "18rem", marginBottom: '2px', backgroundColor: "Highlight" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" key={index}>{item.title}</h5>
                                        <p className="card-title">{item.description}</p>
                                        <button className='btn btn-success' onClick={() => { deleteTodo(index); addInProgress({ title: item.title, description: item.description,id:item.id,child:item.child }) }} >Next Action</button>
                                        <Button variant="primary" onClick={() => { handleShow(); setId(item.id) }}>comment</Button>
                                        {showModal && <Comment showModal={showModal} handleSave={handleSave} handleClose={handleClose} comment={comment} setComment={setComment} id={ids} />}
                                        {item.child.map((i, index) => {
                                            return (
                                                <p style={{ color: 'white' }}>{i}</p>
                                            )
                                        })}

                                    </div>
                                </div>
                            )
                        })}

                        <div style={{ float: "left", marginRight: "80px" }}>
                            <div className="card" style={{ width: "18rem", marginBottom: '2px', backgroundColor: "Highlight" }}>
                                <div className="card-body">
                                    <h5 className="card-title" >Fill Here</h5>
                                    <form onSubmit={handler}>
                                        <input style={{backgroundColor:"skyBlue"}} type="text" placeholder='Title' name="title" autoComplete='off' value={todo.title} onChange={handleChange} required />
                                        <textarea style={{marginLeft:"30px", backgroundColor:"skyBlue"}} cols="28" rows="1" placeholder='description' name="description" autoComplete='off' value={todo.description} onChange={handleChange} ></textarea>
                                        <button className='btn btn-success' type='submit' style={{ marginLeft: "1px" }}>Add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <h2 style={{ marginRight: "120px" }}>In progress</h2>
                        {progress && progress.map((elements, index) => {
                            debugger 
                            return (
                                <div className="card" style={{ width: "18rem", marginBottom: '2px', backgroundColor: "Highlight" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" key={index}>{elements.title}</h5>
                                        <p className="card-title">{elements.description}</p>
                                        <button className='btn btn-success' onClick={() => { moveToComplete(index); addInComplete({ title: elements.title, description: elements.description,child:elements.child }) }}>Next Action</button>
                                        {elements.child.map((i, index) => {
                                            return (
                                                <p style={{ color: 'white' }}>{i}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="col-sm" >
                        <h2 style={{ marginRight: "120px" }}>completed</h2>
                        {complete && complete.map((elements, index) => {
                            return (
                                <div className="card" style={{ width: "18rem", marginBottom: '2px', backgroundColor: "Highlight" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" key={index}>{elements.title}</h5>
                                        <p className="card-title">{elements.description}</p>
                                        {elements.child.map((i, index) => {
                                            return (
                                                <p style={{ color: 'white' }}>{i}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Todo