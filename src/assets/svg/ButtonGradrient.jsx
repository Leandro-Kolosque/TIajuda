const ButtonGradient = () => {
    return (
      <svg className="block" width={0} height={0}>
        <defs>
          <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#1F24B7" />
            <stop offset="100%" stopColor="#3513CD" />
          </linearGradient>
          <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
            <stop offset="0%" stopColor="#6ADF98" />
            <stop offset="100%" stopColor="#1F24B7" />
          </linearGradient>
          <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
            <stop offset="0%" stopColor="#6ADF98" />
            <stop offset="100%" stopColor="#3513CD" />
          </linearGradient>
          <linearGradient
            id="btn-right"
            x1="14.635%"
            x2="14.635%"
            y1="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00CC99" />
            <stop offset="100%" stopColor="#00CC99" />
          </linearGradient>
        </defs>
      </svg>
    );
  };
  
  export default ButtonGradient;