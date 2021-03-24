import { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { api } from '../services/api';

import '../styles/sidebar.scss';

interface SelectedGenreIdProps{
  selectedId: (id:number) => void;
  selectedGenreId: number
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({selectedId, selectedGenreId}:SelectedGenreIdProps) { 
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => selectedId(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

    </nav>
  )
}