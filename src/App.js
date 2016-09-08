'use strict'


var data = [
  {id: 1, priority: 'P1', status: 'Open', owner: 'Raman', title: 'App crashes when opened.'},
  {id: 2, priority: 'P2', status: 'New', owner: 'Poopface', title: 'This app stole all my money!'}
];


var BugList = React.createClass({
  getInitialState: function() {
    return {data: data};
  },
  addBug: function(bug) {
    var newState = this.state.data.slice();
    newState.push(bug);
    this.setState({data: newState});
  },
  handleClick: function() {
    var nextId = this.state.data.length + 1;
    this.addBug({id: nextId, priority: 'P2', status: 'New', owner: 'Trogdor', title: 'This app stinks'});
  },
  render: function() {
    return (
      <div className='bugList'>
        <h1>Bug Squisher</h1>
        <BugFilter />
        <BugTable data={this.state.data} />
        <BugAdd />
        <button onClick={this.handleClick} type='button'>Add Bug</button>
      </div>
    );
  }
});


var BugFilter = React.createClass({
  render: function() {
    return (
      <div className='bugFilter'>This is a bug FILTER . . .</div>
    );
  }
});


var BugTable = React.createClass({
  render: function() {
    var bugRows = this.props.data.map(function(bug) {
      return(<BugRow id={bug.id} priority={bug.priority} status={bug.status} owner={bug.owner} title={bug.title} />);
    });
    return (
      <table className='bugTable'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Owner</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {bugRows}
        </tbody>
      </table>
    );
  }
});


var BugAdd = React.createClass({
  render: function() {
    return (
      <div className='bugAdd'>This is a bug ADDITION . . .</div>
    );
  }
});


var BugRow = React.createClass({
  render: function() {
    return (
      <tr className='bugRow'>
        <td>{this.props.id}</td>
        <td>{this.props.status}</td>
        <td>{this.props.priority}</td>
        <td>{this.props.owner}</td>
        <td>{this.props.title}</td>
      </tr>
    );
  }
});


ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);