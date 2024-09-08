
import { PieOne } from "./PieOne"
import { PieThree } from "./PieThree"
import { PieTwo } from "./PieTwo"


const MultiCharts = () => {
    return (
        <div className="flex gap-5 mt-10 relative mx-5">
            <PieOne />
            <PieTwo/>
            <PieThree/>
        </div>
    )
}

export default MultiCharts