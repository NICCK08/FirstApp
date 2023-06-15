const FileB = (y) => {
  let todos = y.data;
  return (
    <div className="FileB">
      {todos.map((x) => {
          return (
            <div className="data">
              <h1>Title: {x.title}</h1>
              <h2>Completed Status: {x.completed.toString()}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default FileB;
