import "./Date.css";
export default function Inputdate() {
  return (
    <>
      <div className="types">
        <h1>Date inputs:</h1>

        <div className="Card1">
          <input type="date" id="date" name="date" />
          {/* <input type="submit" className="submit" /> */}
        </div>
        <div className="Card2">
            <input type="datetime-local" id="datetime" name="datetime" />
        </div>
      </div>
    </>
  );
}
