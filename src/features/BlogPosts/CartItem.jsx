import React from 'react';
class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header-custom">
        <h4 className="card-header--title">News</h4>
      </header>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary-custom">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    );
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">March 20 2015</p>

        <h2 className="h2-custom">{this.props.title}</h2>

        <p className="body-content-custom">{this.props.text}</p>

        <Button />
      </div>
    );
  }
}

class CartItem extends React.Component {
  render() {
    return (
      <article className="card-custom">
        <CardHeader image={'https://source.unsplash.com/user/erondu/600x400'} />
        <CardBody
          title={'What happened in Thailand?'}
          text={
            'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'
          }
        />
      </article>
    );
  }
}

export default CartItem;
