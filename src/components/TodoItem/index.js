import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteUser(id)
  }

  return (
    <li className="todo-item">
      <p className="paragraph">{title}</p>
      <div>
        <button className="button" type="button" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
