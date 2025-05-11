import styled from 'styled-components'
// import videoFile from '../public/video/Intro.mp4'
// import poster from '../public/images/video-thumnail.png'

const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
`

const VidoeWrapper = styled.div`
    max-width: 800px;
    @media only screen and (max-width: 900px) {
        padding: 0 20px;
    }
`

const VideoElement = styled.video`
    width: 100%;
    /* border: 1px solid #000; */
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(10,10,10.5);
`


function VideoDisplay() {
    return (
        <VideoContainer className='bg bg-sencondary app-gr-5'>
            <VidoeWrapper>
                <VideoElement 
                    src={require("../public/video/Intro.mp4")} 
                    poster="/images/video-thumnail.png"
                    controls 
                />
            </VidoeWrapper>
        </VideoContainer>
    )
}

export default VideoDisplay