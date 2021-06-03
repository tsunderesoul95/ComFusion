import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="50%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
                <CardImgOverlay>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}




const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 mt-5 m-1">
                <RenderMenuItem dish={dish}
                ></RenderMenuItem>
            </div>
        );
    });
    console.log('Menu component render is invoked');
    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );
    }

    else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}


export default Menu;





    // constructor(props) {
    //     super(props);

    //     console.log('Menu component constructor is invoked');
    // }
    // componentDidMount() {
    //     console.log('Menu component  componentDidMount is invoked');
    // }



/*renderDish(dish) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.thumbnailUrl} alt={dish.title}></CardImg>
                <CardBody>
                    <CardTitle body className="ml-5">
                        <CardText heading={dish.title}></CardText>
                        <p>{dish.title}</p>
                    </CardTitle>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        )
    }
}*/

            // <div className="container">
            //     <div className="row">

            //         {menu}
            //     </div>
            //     { <div className="row">
            //         <div className="col-12 col-md-5 m-1">
            //             {this.renderDish(this.state.selectedDish)}
            //         </div>
            //     </div> }
            // </div>
