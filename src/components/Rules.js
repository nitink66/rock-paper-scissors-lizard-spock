import React,{ Component } from 'react'
import './Rules.css'

class Rules extends Component {
    render(){
        return(
            <div>
                <h3 className="tc">The Rules : </h3>
                <p className="tc">Scissors cuts paper. Paper covers rock. Rock crushes lizard. Lizard poisons Spock.<br></br>
                 Spock smashes scissors.
                 Scissors decapitates lizard. Lizard eats paper. <br></br>
                 Paper disproves Spock. Spock vaporizes rock. <br></br>
                 And as it allways has <br></br>
                 Rock crushes scissors.</p>

            <br></br><br></br><br></br><br></br>

            <div className="tc1">
                <h1 className="tc">THE HISTORY</h1>
                <p className="tc">
                Rock-Paper-Scissors-Lizard-Spock was created by Internet pioneer Sam Kass as an improvement on the
                <br></br>classic Rock-Paper-Scissors.</p>
                <p className="tc">
                 ALL HAIL <a href="https://twitter.com/sam_kass?lang=en">SAM KASS  🙌 </a><br></br> 
                HAIL  🙌  </p>
                <p className="tc"> The anecdotal evidence suggests that <br></br>in a game of
                Rock-Paper-Scissors,<br></br>players familiar with each other will tie <br></br>
                75 to 80 percent of the time 
                due to limited number of outcomes.
                </p><br></br>
                <h6 className="tc">Here's the explanation of the game by The Legend <a href="https://www.instagram.com/therealjimparsons">
                Dr. Sheldon Cooper</a> himself</h6>
                <h6 className="tc"><a href="https://www.youtube.com/watch?v=_PUEoDYpUyQ"> YouTube Link</a></h6>
                <h6 className="tc">Fandom -  
                <a href="https://bigbangtheory.fandom.com/wiki/Rock%2C_Paper%2C_Scissors%2C_Lizard%2C_Spock" >
                Link</a>
                </h6>
            </div>
            <div><br></br>
                <p className="tc">
                    Developed by Nitin &copy; (one guy who's obessed with <a href="https://www.instagram.com/bigbangtheory">The Big Bang theory</a>)
                </p>
            </div>
           <a href="https://www.instagram.com/rather_be_nitin"> <i className="fab fa-instagram fa-3x"></i>
           </a>
           <a href="https://www.github.com/nitink66"> <i className="fab fa-github fa-3x"></i>
           </a>

            </div>
        )
    }

}

export default Rules