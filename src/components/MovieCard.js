import MovieList from './MovieList';
import {useState} from 'react';
import info from './movieLists';
import {Component} from 'react';


class MovieCard extends Component{

    constructor(){
        super()
        this.state={

            info: info,
            members:[],
            counter:0,
        }
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(){

        if(this.state.counter <this.state.info.length){
            this.state.members.push(this.state.info[this.state.counter]);
            this.setState(function(prevState){
                return {counter : prevState.counter + 1}
            });
            this.newMembers = this.state.members.map(
                member => {
                    return <MovieList key={member.id} img={member.img} title={member.title} description={member.description} posterURL={member.posterURL} rating={member.rating}/>
                })
        }
        
    }
    render(){
        return(
            
            <div className="row">
                <div className="navbar bg-dark rounded text-light"> <h2>Our Series</h2> </div>
                 {this.newMembers}
                <button className="btn btn-primary btn-lg btn-block m-1" onClick={this.clickEvent}>ADD MORE MOVIE</button>
    
            </div>
        );
    }

}

export default MovieCard;