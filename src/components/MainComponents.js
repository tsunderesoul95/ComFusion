
import { Component } from 'react';
import Home from './HomeComponent';
import Menu from "./MenuCompenent";
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}
const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (id,firstname,lastname,telnum,email,agree,contactType,message,date)  => dispatch(postFeedback( id,firstname,lastname,telnum,email,agree,contactType,message,date )),
    fetchDishes: () => { dispatch(fetchDishes()) },
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
   // resetFeedbackForm: () => { dispatch(actions.reset('feedback')) }
});
class Main extends Component {

    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }
    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errmess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errmess}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leaderLoading = {this.props.leaders.isLoading}
                    leaderErrMess = {this.props.leaders.errmess}
                />
            );
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errmess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errmess}
                    postComment={this.props.postComment}
                ></DishDetail>
            );
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route path="/aboutus" component={() => <About leaders={this.props.leaders}></About>} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}></Menu>} />
                            <Route path="/menu/:dishId" component={DishWithId} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

{/* <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} /> */}
{/* <DishDetail
                    dish={this.state.dishes.filter((dish) => 
                        dish.id === this.state.selectedDish
                    )[0]} /> */}
 // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId })
    // }