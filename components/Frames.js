import Standard from './frames/Standard'
import TwoD from './frames/TwoDescriptions'
import Card1 from './frames/Card1'
import Card2 from './frames/Card2'
import TextBoxes from './frames/TextBoxes'
import TeamPage from './frames/TeamPage'

export default function Frames(props){

    let allFrames = props.frames.map((frame, key) => {
        console.log(frame.type)
        switch (frame.type) {
            case 'standard':
                return <Standard frame={frame} key={key}/>
            case 'two-descriptions':
                return <TwoD frame={frame} key={key}/>               
            case 'card-type-1':
                return <Card1 frame={frame} key={key}/>
            case 'card-type-2':
                return <Card2 frame={frame} key={key}/>
            case 'text-boxes':
                return <TextBoxes frame={frame} key={key}/>
            case 'team-page':
                return <TeamPage frame={frame} key={key}/>
            default:
                break;
        }
    })
    
    return(
        <>
            {allFrames}
        </>
    )
    
}
