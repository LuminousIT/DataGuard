import ToggleSwitch from "./ToggleSwitch";

const Card = ({ title, description, status, handleToggleStatus, id }) => {
  return (
    <div className={`card ${status === "disabled" ? "card-disabled" : ""}`}>
      <div className="card__main">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card__aside">
        <ToggleSwitch
          handleToggle={(e) => {
            handleToggleStatus(id, e.target.value === "active" ? "inactive" : "active");
          }}
          status={status}
        />
        <p
          className={
            status === "active" ? "card__aside-active" : "card__aside-inactive"
          }
        >
          {status === "active" ? "Allowed" : "Blocked"}
        </p>
      </div>
    </div>
  );
};

export default Card;
