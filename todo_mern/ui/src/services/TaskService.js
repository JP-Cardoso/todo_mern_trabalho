export async function getAllTasks() {
    const response = await fetch('/api/todos');
    return await response.json()
};

export async function createTask(data) {
    const response = await fetch(`/api/todos`, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({task: data})
    })
    return await response.json();
}

export async function deleteTask(taskId) {
    const response = await fetch(`/api/todo/${taskId}`, {
        method: 'DELETE'
    })
    return await response.json();
}

export async function editTask(data) {
    const response = await fetch(`/api/todo`, {
        method: 'PUT',
        headers: {'Content-Type': 'aplication/json'},
        body: JSON.stringify({task: data})
    })
    return await response.json()
}

export async function fetchSettings() {

    const response = await fetch('/api/settings');
    return await response.json();
}