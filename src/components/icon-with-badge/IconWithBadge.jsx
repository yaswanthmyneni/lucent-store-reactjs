const IconWithBadge = ({ children, className }) => {
  return (
    <a className={`navbar navbar-m-lr-1 ${className}`} href="#">
      <div className="display-badge pos-rel-badge">
        {children}
        <span className="badge badge-online badge-to-icon">9</span>
      </div>
    </a>
  );
};

export { IconWithBadge };
