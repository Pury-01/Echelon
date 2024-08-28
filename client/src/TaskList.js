useEffect(() => {
  fetch('http://localhost:5000/api/tasks')
    .then(response => response.json())
    .then(data => setTasks(data));
}, []);

