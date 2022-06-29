import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

            <Post
            nomeUsuario={'Marcos'}
            fotoUsuario={'https://picsum.photos/50/51'}
            fotoPost={'https://picsum.photos/200/151'}
          />

          <Post
            nomeUsuario={'Andreia'}
            fotoUsuario={'https://picsum.photos/50/52'}
            fotoPost={'https://picsum.photos/200/152'}
          />
  </div>
)
}

export default App;
