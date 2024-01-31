import Work from "../common/work";

export default function Works() {
  return (
    <div className="flex flex-col items-center gap-28">
      <Work
        title="Dayread"
        desc="Social network concept"
        to="/work/dayread"
        img="https://assets-global.website-files.com/625816a3416990dd61391b9b/650980b8a430fdb7f21c12dc_800x600.jpg"
      />
      <Work
        title="Popcorn Palace"
        desc="Rooftop cinema concept"
        to="/work/popa"
        img="https://assets-global.website-files.com/625816a3416990dd61391b9b/650980b8a430fdb7f21c12dc_800x600.jpg"
      />
      <Work
        title="Smile Coffee"
        desc="Coffee shop concept"
        to="/work/smilecoffee"
        img="https://assets-global.website-files.com/625816a3416990dd61391b9b/650980b8a430fdb7f21c12dc_800x600.jpg"
      />
    </div>
  );
}
