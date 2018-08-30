import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Badge, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShoppingList extends Component {
  
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  };

  
  render() {
    var oldListName = '';
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
        
          
            {items.map(({ _id, name, quantity, listName, urgency }) => (
             
              <React.Fragment key={_id} >
                
            {(oldListName!=listName) ? 
              
              <ListGroupItem style={{background: "#DDDDDD"}} className="list-group-item-heading">Things2Get for <span style={{padding: "3px", color: "#4e91fc", fontSize:"bold"}} >{listName}</span></ListGroupItem>
       
              : ""}
              

              


            {(oldListName=listName) ? "": ""}
            <TransitionGroup className="shopping-list">
               <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name} <span style={{padding: "7px"}} ></span><Badge pill  style={{background: "#4e91fc"}} >{quantity}</Badge>
                </ListGroupItem>
              </CSSTransition>
              </TransitionGroup>
              </React.Fragment>
            ))}
          
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
