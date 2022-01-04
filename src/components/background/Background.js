import './Background.css';

export const Background = () => {
  return (
    <div className="background">
      <div className="sidebar" />
      <div className="sidebar" style={{left:0}} />
    </div>
  );
}