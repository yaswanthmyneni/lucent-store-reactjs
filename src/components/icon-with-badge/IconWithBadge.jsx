const IconWithBadge = ({ children, className, count = 0 }) => {
  return (
    <div className={`navbar navbar-m-lr-1 ${className}`} href="#">
      <div className="display-badge pos-rel-badge">
        {children}
        {count > 0 && (
          <span className="badge badge-online badge-to-icon">{count}</span>
        )}
      </div>
    </div>
  );
};

export { IconWithBadge };
