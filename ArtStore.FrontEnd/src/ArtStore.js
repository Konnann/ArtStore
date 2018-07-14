import React, { Component } from 'react';
import './ArtStore.css';
import NavBar from './components/Common/NavBar';
import Header from './components/Common/Header';
import ItemPreview from './components/Items/ItemPreview';
import MainContent from './components/Common/MainContent'

class AppStartup extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Header/>
          <NavBar/>
          <MainContent>
            <ItemPreview 
              itemUrl="https://instagram.fsof3-1.fna.fbcdn.net/vp/18c857305b3c7f99efdb346265309755/5BDF7014/t51.2885-15/e35/21372198_125938121312436_4783919807634341888_n.jpg"
              imageUrl="https://instagram.fsof3-1.fna.fbcdn.net/vp/18c857305b3c7f99efdb346265309755/5BDF7014/t51.2885-15/e35/21372198_125938121312436_4783919807634341888_n.jpg"
              title="Pastel stationary"
              shopName="ArtOfRai"
              price="22.50"
              shopUrl="https://instagram.fsof3-1.fna.fbcdn.net/vp/18c857305b3c7f99efdb346265309755/5BDF7014/t51.2885-15/e35/21372198_125938121312436_4783919807634341888_n.jpg"
            />
            <ItemPreview 
              itemUrl="https://instagram.fsof3-1.fna.fbcdn.net/vp/18c857305b3c7f99efdb346265309755/5BDF7014/t51.2885-15/e35/21372198_125938121312436_4783919807634341888_n.jpg"
              imageUrl="https://img.etsystatic.com/il/007453/728885626/il_570xN.728885626_fh9z.jpg?version=0"
              title="Beginner Hula Hoop"
              shopName="SnowflakeHoops"
              price="35.00"
              shopUrl="https://img.etsystatic.com/il/007453/728885626/il_570xN.728885626_fh9z.jpg?version=0"
            />
          </MainContent>
        </div>
      </div>
    );
  }
}

export default AppStartup;
