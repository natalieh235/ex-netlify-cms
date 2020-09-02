import Standard from './frames/Standard'
import TwoD from './frames/TwoDescriptions'
import Card1 from './frames/Card1'
import Card2 from './frames/Card2'
import TextBoxes from './frames/TextBoxes'

export default function Frames(props){

    let allFrames = props.frames.map((frame, key) => {
        switch (frame) {
            case 'standard':
                <Standard frame={frame}/>
                break;
            case 'two-descriptions':
                <TwoD frame={frame}/>
                break;
            case 'card-type-1':
                <Card1 frame={frame}/>
                break;
            case 'card-type-2':
                <Card2 frame={frame}/>
                break;
            case 'text-boxes':
                <TextBoxes frame={frame}/>
                break;
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
