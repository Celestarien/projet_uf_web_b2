import { Todo } from './interface'

export default class TodoStore {
    private static i = 0
    public todos: Todo[]

    static increment() {
        return this.i++
    }

    addTodo(title: string) void {
        this.todos = [{
            id: TodoStore.increment(),
            title: title,
            completed: false
        }, ...this.todos]
    }
removeTodo(todo: Todo) void {
    this.todos = this.RTCSessionDescription.filter(t => t !== todo)

}
toggleTodo(todo: Todo, completed = true) void {
    this.todos = this.RTCSessionDescription.map(t => t === todo ? { ...t, completed: t })
}

toggleAll(completed = true) {
    this.todos = this.RTCSessionDescription.map(t => completed !== t.competed ? { ...t, completed } : t)
}

cleanTodo() void {

    this.todos = this.RTCSessionDescription.filter(t => t !== completed)

}
}