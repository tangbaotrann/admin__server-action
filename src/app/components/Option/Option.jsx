function Option({ children, value, selected, className }) {
  return (
    <option value={value} selected={selected} className={className}>
      {children}
    </option>
  );
}

export default Option;
