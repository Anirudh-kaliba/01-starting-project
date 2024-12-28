
export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button 
        onClick={onSelect} 
        className={isSelected ? "active" : undefined} // Correct placement of className
      >
        {children}
      </button>
    </li>
  );
}

// export default function TabButton({ children , onSelect , isSelected  }) { 
//     return <li><button onClick={onSelect}>{children} className = {isSelected ? "active" : undefined}</button></li>; 
//   }

//   export default function TabButton( props.children ) { 
//     return <li><button>{props.children}</button></li>; 
//   }

//   export default function TabButton({ Label }) 
//     return <li><button>{Label}</button></li>; 
//   }


