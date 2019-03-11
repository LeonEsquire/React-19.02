import React from 'react';
import {Link} from 'react-router';
import UserComments from './UserComments';


export default class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            btnText: 'Show comments'
        };
    }
    render() {
            let commentsText;
            if(this.state.display) {
                this.state.btnText = 'Hide comments';
                commentsText = <div>
                  <UserComments/>
              </div>;
            }
            if(!this.state.display) {
                this.state.btnText = 'Show comments';
            }

            return (
                <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/users/${this.props.id}`}>{this.props.username}</Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.phone}</p>
                    <p>{this.props.website}</p>
                    <a href="#" className="btn btn-primary" onClick={() => {
                        this.setState({display: !this.state.display})
                    }}>{this.state.btnText}</a>
                    {commentsText}
                </div>
            </div>
              );
    }
}