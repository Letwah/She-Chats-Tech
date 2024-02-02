import marqueeIcon from "../../assets/icons/Sunnies.svg";
import "./styles.css";

const Marquee = () => {
  const content = (
    <>
      <div className="marqueeImg">
        <img src={marqueeIcon} alt="Icon" />
      </div>
      <div>
        <p>From our Community</p>
      </div>
    </>
  );
  return (
    <div className="marquee">
      <div className="marqueeContent">
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
