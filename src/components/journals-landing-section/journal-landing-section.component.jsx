import Journal from "../journal/journal.component";
import JOURNALS from "../../db/journal";

const JournalsLandingSection = () => {

  return(
    <div className="px-10 py-5 min-w-min">
      <h1 className="text-[#130F0F] text-xl"> Journals </h1>
      <div className="flex gap-6 mt-5 flex-wrap">
        {
          JOURNALS && JOURNALS.map(journal => <Journal key={journal.id} journal={journal} />)
        }
      </div>
      <br />
    </div>
  )
}

export default JournalsLandingSection;