export default function ToggleSection({
  title,
  className,
  isVisible,
  toggleVisibility,
  children,
}) {
  return (
    <div className={title}>
      <p className="header2 collapsible-input">
        {title}
        <button className="expand-button" onClick={toggleVisibility}>
          {isVisible ? "-" : "+"}
        </button>
      </p>
      {isVisible && <div className={className}>{children}</div>}
    </div>
  );
}
