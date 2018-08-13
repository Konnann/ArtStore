import React, { Component } from 'react';
import ItemPreview from './ItemPreview';
import SlideItem from './SlideItem';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstFocusedItemIndex: 0,
            lastFocusedItemIndex: 4,
            focusedItems: [],
            marginLeft: 0,
            marginRight: 0,
            isMovingLeft: false,
            isMovingRight: false,
            children: null
        }

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
    }

    async componentWillReceiveProps(newProps) {
        console.log(newProps);
        var children = newProps.children.map((child)=>{
            return(
            <SlideItem>
                {child}
            </SlideItem>)
        });
        await this.setState({children});

        this.setState({
            focusedItems: this.getfocusedItems()
        })
    }


    render = () => {
        var marginLeft = this.state.marginLeft + 'px';
        var marginRight = this.state.marginRight + 'px';

        return (
            <div className="carousel borders">
                <div>
                    <img onClick={this.previousPage} className="left-arrow-img arrow-img" src="http://www.clker.com/cliparts/V/1/Z/A/h/U/left-arrow-right-hi.png"/>
                    <div className="carousel-images" >
                        <div style={{marginLeft: marginLeft, marginRight:  marginRight}}>
                            { this.state.focusedItems }
                        </div>
                    </div>
                    <img onClick={this.nextPage} className="right-arrow-img arrow-img" src="http://www.clker.com/cliparts/V/1/Z/A/h/U/left-arrow-right-hi.png"/>
                </div>
            </div>
        )
    }

    getfocusedItems() {
        var focusedItems = [];
        var items = this.state.children;
        var index = this.state.firstFocusedItemIndex;
        for (let counter = 0; counter < 5; counter++) {
            focusedItems.push(items[index]);
            index ++;
            if(index > items.length - 1) {
                index = 0;
            }
        }

        return focusedItems;
    }

    async previousPage() {
        if(!this.state.isMoving) {
            await this.setState({isMoving: true})
            
            var firstFocusedItemIndex = this.state.firstFocusedItemIndex - 1;
            var lastFocusedItemIndex = this.state.lastFocusedItemIndex - 1;
            
            
            if(firstFocusedItemIndex < 0) {
                firstFocusedItemIndex = this.state.children.length - 1;    
            }

            if(lastFocusedItemIndex < 0) {
                lastFocusedItemIndex =  this.state.children.length - 1;
            }

        
            var marginRight = this.state.marginRight;
            var targetMargin = marginRight - 200;
            
            var marginLeft = this.state.marginLeft;
        
            var interval = setInterval(() => {
                marginRight -= 2;
                marginLeft += 2;
                this.setState({ 
                    marginLeft: marginLeft, 
                    marginRight: marginRight
                });

                if(marginRight <= targetMargin) {
                    this.setState({
                        isMoving: false,
                    });
                    clearInterval(interval);
                    this.addItemStart();
                }

            }, 0.5);
        

            this.setState({
                firstFocusedItemIndex: firstFocusedItemIndex,
                lastFocusedItemIndex: lastFocusedItemIndex,
            })
        }
    }

    async nextPage() {
        if(!this.state.isMoving) {
            await this.setState({isMoving: true})    

            var firstFocusedItemIndex = this.state.firstFocusedItemIndex + 1;
            var lastFocusedItemIndex = this.state.lastFocusedItemIndex + 1;
            
            
            if(firstFocusedItemIndex >= this.state.children.length) {
                firstFocusedItemIndex = 0;    
            }

            if(lastFocusedItemIndex >= this.state.children.length) {
                lastFocusedItemIndex =  0;
            }

            var firstFocusedItemIndex;
            var lastFocusedItemIndex;
            var marginLeft = this.state.marginLeft;
            var targetMargin = marginLeft - 200;

            var marginRight = this.state.marginRight;

            var interval = setInterval(() => {
                marginLeft -= 2;
                marginRight+= 2;
                this.setState({ 
                    marginLeft: marginLeft, 
                    marginRight: marginRight
                });

                if(marginLeft <= targetMargin) {
                    this.setState({isMoving: false});
                    clearInterval(interval);
                    this.addItemEnd();
                }

            }, 0.5);

            this.setState({
                firstFocusedItemIndex: firstFocusedItemIndex,
                lastFocusedItemIndex: lastFocusedItemIndex,
            })
        }
    }

    async addItemEnd() {
        var items = this.state.focusedItems;
        items.push(this.state.children[this.state.lastFocusedItemIndex])
        items.shift();
        var marginRight = this.state.marginRight - 200;
        var marginLeft = this.state.marginLeft + 200;
        await this.setState({
            focusedItems: items,
            marginRight, marginRight,
            marginLeft, marginLeft
        });
    }

    async addItemStart() {
        var items = this.state.focusedItems;
        items.unshift(this.state.children[this.state.firstFocusedItemIndex])
        var marginRight = this.state.marginRight + 200;
        var marginLeft = this.state.marginLeft - 200;

        await this.setState({
            focusedItems: items,
            marginRight, marginRight,
            marginLeft, marginLeft
        });
        //console.log(items);
        //items[0].props.addClassNames(['show']); 
        this.setState({
            focusedItems: items
        })
    }
}




// import React, { Component } from 'react';
// import ItemPreview from './ItemPreview';

// export default class Carousel extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             pageCount: 0,
//             lastItemIndex: 0,
//             itemsPerPage: 5
//         }

//         this.nextPage = this.nextPage.bind(this);
//         this.previousPage = this.previousPage.bind(this);
//     }

//     getPageCount() {
//         if(this.props.items != undefined) {
//             return Math.ceil(this.props.items.length / this.state.itemsPerPage);
//         } else {
//             return 0;
//         }
//     }

//     getPageItems() {
//         var itemPreviews = [];
//         var limit = this.state.itemsPerPage;
//         var initialIndex = this.state.lastItemIndex;
//         var counter = 0;

//         for (let count = 0; count < limit; count++) {
//             var index =  initialIndex + counter;
//             if(index >= this.props.items.length) {
//                 initialIndex = 0;
//                 counter = 0;
//                 index = 0;
//             }

//             var itemData = this.props.items[index];
//             itemPreviews.push(<ItemPreview {...itemData}/>)
//             counter++;
//         }

//         return itemPreviews;
//     }

//     previousPage() {
//         var lastItemIndex = this.state.lastItemIndex - 1;

//         if(lastItemIndex < 0) {
//             lastItemIndex = this.props.items.length - 1;
//         }

//         this.setState({
//             lastItemIndex: lastItemIndex
//         })
//     }

//     nextPage() {
//         var lastItemIndex = this.state.lastItemIndex + 1;

//         if(lastItemIndex >= this.props.items.length) {
//             lastItemIndex = 0;
//         }

//         this.setState({
//             lastItemIndex: lastItemIndex
//         })
//     }

//     componentDidMount() {
//         this.setState({pageCount: this.getPageCount()});
//         console.log('props ' +this.props.items.length);
//     }

//     render() {
//         var currentPageItems = this.getPageItems();

//         return (
//             <div className="carousel">
//                 <div>
//                     <img onClick={this.previousPage} className="left-arrow-img arrow-img" src="http://www.clker.com/cliparts/V/1/Z/A/h/U/left-arrow-right-hi.png"/>
//                     <div className="carousel-images" >
//                         { this.props.items != undefined ?
//                             currentPageItems
//                             : <p>No items to display.</p>   
//                         }
//                     </div>
//                     <img onClick={this.nextPage} className="right-arrow-img arrow-img" src="http://www.clker.com/cliparts/V/1/Z/A/h/U/left-arrow-right-hi.png"/>
//                 </div>
//             </div>
//         )
//     }
// }