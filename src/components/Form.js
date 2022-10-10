import React from "react";

export default class Form extends React.Component{
    state = {
        title : 'Javascript',
        textarea : "This is react.",
        framework : "",
        isAwesome : true
    }

    handleChange = (e) =>{
        if(e.target.type==='text'){
            this.setState({
                title : e.target.value
            })
        }

        else if(e.target.type==='textarea'){
            this.setState({
                textarea : e.target.value
            })
        }

        else if(e.target.type==='select-one'){
            this.setState({
                framework : e.target.value
            })
        }

        else if(e.target.type==='checkbox'){
            this.setState({
                isAwesome : e.target.checked
            })
        }
        
    }

    submitHandler = (e) => {
        const {title,textarea, framework, isAwesome} = this.state;
        e.preventDefault();
        console.log(title,textarea, framework, isAwesome);
    }

    render(){
        const {title,textarea, framework, isAwesome} = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>

                    <input type="text" 
                    placeholder="Enter title"
                    //value={this.state.title}
                    value={title}
                    onChange={this.handleChange}
                    />

                    <br/>
                    
                    <br/>

                    <textarea
                    value={textarea}
                    onChange={this.handleChange}

                    />

                    <br/>
                    <br/>

                    <select value={framework} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>

                    </select>

                    <br/>
                    <br/>

                    <input
                    type="checkbox"
                    checked={isAwesome}
                    onChange = {this.handleChange}
                    placeholder ="Awesome"
                    />

                    <br/>
                    <br/>

                    <input
                    type="submit"
                    value="Submit the form"
                    />


                            
                </form>
            </div>
            

        );
    }

}