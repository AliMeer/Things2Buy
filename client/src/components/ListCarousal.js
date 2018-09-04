import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Badge, ListGroupItemHeading } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ListCarousal extends Component {

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
     
     // scroll-snap-destination: 0% 100%;
      //scroll-snap-points-x: repeat(100%);
      
      <div style={{ scrollSnapType:'mandatory',backgroundColor:'#DDDD', display: 'flex', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
        <div style={{ scrollSnapDestination:'100%',backgroundColor:'#D0DD', flexShrink: 0, width: '100%', height: '450px' }}>Slide #1</div>
        <div style={{  scrollSnapDestination:'100%',backgroundColor:'#A0DDA',flexShrink: 0, width: '100%', height: '450px' }}>Slide #2</div>
        <div style={{  scrollSnapDestination:'100%',backgroundColor:'#DDAA00',flexShrink: 0, width: '100%', height: '450px' }}>Slide #3</div>
        <div style={{ scrollSnapDestination:'100%',backgroundColor:'#D0FDC',flexShrink: 0, width: '100%', height: '450px' }}>Slide #4</div>
        <div style={{ scrollSnapDestination:'100%',backgroundColor:'#AD0CAA',flexShrink: 0, width: '100%', height: '450px' }}>Slide #5</div>
      </div>

    );
  }




}

ListCarousal.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ListCarousal);
