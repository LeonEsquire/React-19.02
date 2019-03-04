import React from 'react';

export default class DisplayElement extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      display: false
    }
  }

  render()
  {
    let newsBlock;
    if(this.state.display) {
      newsBlock = <div>
        <h3>Новости</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem fugiat ipsa dolor, ipsam odio, in dolores sequi laudantium qui harum? Sunt ipsa asperiores est? Voluptatem beatae fugit rerum. Est.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, blanditiis exercitationem, dolorum at quasi ipsam dolores temporibus et officiis praesentium laboriosam laudantium est nihil? Optio dignissimos impedit quis repellat modi.</p>
      </div>;
    }

    return (
      <div>
        <h2 className="link" onClick={() => {
          this.setState({display: !this.state.display})
        }}>Скрыть/показать блок</h2>
        {newsBlock}
      </div>
    );
  }
}