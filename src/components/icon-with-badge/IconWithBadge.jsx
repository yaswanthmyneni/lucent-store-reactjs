const IconWithBadge = ({ children }) => {
  return (
    <div className="display-badge pos-rel-badge">
      {children}
      <span className="badge badge-online badge-to-icon">9</span>
    </div>
  );
};

export { IconWithBadge };
