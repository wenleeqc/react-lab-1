import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0}; // initial selected board
  }

  // handler to advance to next board
  handleClick(event) {
    // if haven't reached last board, move to next board
    // else return to first board
    if(this.state.selected < this.props.numBoards-1) {
      this.setState({
        selected: this.state.selected + 1
      });
    } else {
      this.setState({
        selected: 0
      });
    }
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selected; // current selected board
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={ (e) => this.handleClick(e)}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
