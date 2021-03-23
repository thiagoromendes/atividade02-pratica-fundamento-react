import { useEffect, useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  const [id, setId] = useState(1);

  const eventId = (selectedGenreId:number) => {
    setId(selectedGenreId);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedId={eventId} />
      <Content id={id}/>
    </div>
  )
}