export const Button = ({ children, onClick, className, ...props }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };
  