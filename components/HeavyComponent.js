const HeavyComponent = () => {
    return (
      <div className="wrapper bg-slate-200">
        <h2>This is a heavy component</h2>
        <p>It is loaded lazily</p>
      </div>
    );
  };
  
  export default HeavyComponent;