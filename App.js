import React, { useEffect, useState } from "react"
import styled from "styled-components"

const App = () => {
  const [items, setItems] = useState([])

  useEffect( () => {
    linkFrom()
  }, [])

  const linkFrom = async () => {
    let apiKey = `V5py70ZYk6eEwVpfYxF9znlxiacyqY3SuhfR8cbY`
    const link = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    const data = await link.json()
    setItems(data.photos)
  }
  console.log(items);

  const info = items.map(item => (
    <Squares key={item.id}>
      <TextStyle>Camera's name: {item.camera.full_name} ({item.camera.name})</TextStyle>
      <FlexInfo>
        <InfoStyle>
          Landing date:
        </InfoStyle>
        <Date>
          {item.rover.landing_date}
        </Date>
      </FlexInfo>

      <FlexInfo>
        <InfoStyle>
          Launch date:
        </InfoStyle>
        <Date>
          {item.rover.launch_date}
        </Date>
      </FlexInfo>

      <Image src={item.img_src} alt="Mars" />
    </Squares>
  )
  )

  return (
    <SquareStyle>
      <TitleStyle>
        These are photos taked by the Curiosity Rover on Mars
      </TitleStyle>
      <SquarePosition>
        {info}
      </SquarePosition>
    </SquareStyle>
  )
}

const SquareStyle = styled.div`
  margin: 0;
  padding: 1px;
  background-color: #393E46;
`

const TitleStyle = styled.h1`
  color: #51C4D3;
  text-align: center;
`

const SquarePosition = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`

const Squares = styled.div`
  border: 2px solid #126E82;
  margin: 5px;
  padding: 20px;
  border-radius: 10px;
`

const TextStyle = styled.h2`
  color: #AAD8D3;
`

const FlexInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -15px;
`

const InfoStyle = styled.h4`
  color: #99A799;
  margin-right: 5px;
`

const Date = styled.p`
  color: #D8E3E7;
  font-weight: 600;
`

const Image = styled.img`
  width: 300px;
  object-fit: cover;
`
export default App;
