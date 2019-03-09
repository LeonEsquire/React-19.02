import React from 'react';

export default class StateNews extends React.Component {
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
            <h3>Новость 1</h3>
            <p> Placerat philosophia per et. At qui quot alterum, 
            numquam impedit an mea. Sed no accumsan deterruisset, 
            discere deleniti mea no, everti facilisi legendos te mei. 
            Qui ei brute molestie signiferumque, meis quas latine ei duo. 
            Cu liber elaboraret percipitur vel, eu esse apeirian dissentiet pro.</p>
            <p>Duo et patrioque repudiandae. His habeo verear no, vix prima disputationi cu. 
            Elit labores sed ad, vel no facete habemus albucius. Vituperata reformidans vim at, 
            eos ad posidonium disputationi. Eu eum explicari pertinacia rationibus, cu vix adhuc 
            tollit fabulas, mei vitae prodesset ut. Cum te viderer vivendum, 
            sed in fabulas euripidis.</p>
        </div>;
        }
        return (
            <div>
                <br></br>
                <h2 className="newsHeader" onClick={() => {
                    this.setState({display: !this.state.display})
                }}>&#10102; Скрыть/показать блок &#10102;</h2>
                {newsBlock}
            </div>
        );
    }
}