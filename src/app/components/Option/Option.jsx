function Option({ children, value, className }) {
  return (
    <option value={value} className={className}>
      {children}
    </option>
  );
}

export default Option;
