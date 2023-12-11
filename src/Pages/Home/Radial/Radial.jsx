

const Radial = () => {
    return (
        <div className='grid grid-cols-4 md:grid-cols-4 gap-4 max-w-5xl mx-auto m-5'>
        
            <div className="radial-progress text-primary" style={{"--value":50}} role="progressbar">৫,০০ জন</div>
            
            <div className="radial-progress text-secondary" style={{"--value":55}} role="progressbar">55%</div>
            <div className="radial-progress text-warning" style={{"--value":35}} role="progressbar">35%</div>
            <div className="radial-progress text-primary" style={{"--value":58}} role="progressbar">58%</div>
        </div>
    );
};

export default Radial;