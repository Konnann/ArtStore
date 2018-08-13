import React, { Component } from 'react';
import ItemPreview from '../Items/ItemPreview';
import Carousel from '../Items/Carousel';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }
    async componentDidMount() {
        var items = this.getLatestItems();
        this.setState({items});
    }

    render() {
        return (
            <div>
                <em className="section-header">Recently Added</em>
                <Carousel>
                    {this.state.items.length > 0 ?
                        this.state.items.map((itemData) => {
                            return <ItemPreview {...itemData} key={itemData.id} />
                        })
                        : [<p>No items to display.</p>]
                    }
                </Carousel>
            </div>
        )
    }

    getLatestItems() {
        return [
            {
                id: '1',
                itemUrl: "#",
                imageUrl: "https://instagram.fsof3-1.fna.fbcdn.net/vp/18c857305b3c7f99efdb346265309755/5BDF7014/t51.2885-15/e35/21372198_125938121312436_4783919807634341888_n.jpg",
                title: "Pastel stationery",
                shopName: "ArtOfRai",
                price: "22.50",
                shopUrl: "#"
            }, {
                id: '2',
                itemUrl: "#",
                imageUrl: "https://instagram.fsof3-1.fna.fbcdn.net/vp/4061879e83908e0fe2a8d7aaad95e080/5BDCEAEB/t51.2885-15/e35/25018016_1363009053827164_1731887996665331712_n.jpg",
                title: "Cactus stationery set",
                shopName: "ArtOfRai",
                price: "15.00",
                shopUrl: "#"
            }, {
                id: '3',
                itemUrl: "#",
                imageUrl: "https://instagram.fsof3-1.fna.fbcdn.net/vp/2f8466bc7103cd8963cef7cb6d341a7c/5BD63036/t51.2885-15/e35/16908798_678483738998270_2457583434982227968_n.jpg",
                title: "Cactuses framed art",
                shopName: "ArtOfRai",
                price: "20.50",
                shopUrl: "#"
            }, {
                id: '4',
                itemUrl: "#",
                imageUrl: "https://instagram.fsof3-1.fna.fbcdn.net/vp/0a70248eaec94cfc76cbec1a77dd92d5/5BECA8B1/t51.2885-15/e35/17818280_279293759176735_4013306141046996992_n.jpg",
                title: "Exotic flowers set",
                shopName: "ArtOfRai",
                price: "30.50",
                shopUrl: "#"
            }, {
                id: '5',
                itemUrl: "#",
                imageUrl: "https://instagram.fsof3-1.fna.fbcdn.net/vp/a00120c59c0dc09c46d331eb63b365a6/5BE6C41E/t51.2885-15/e35/20838945_175561016322121_1173313923428909056_n.jpg",
                title: "Handmade sketchbook",
                shopName: "ArtOfRai",
                price: "15.00",
                shopUrl: "#"
            }
        ]
    }

}