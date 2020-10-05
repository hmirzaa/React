import React from 'react'

const UpdateComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 counter:0
            }
        }
        
        incrementCount= () => {
            this.setState(prevState =>  {
                return { counter: prevState.counter + 1 }
            })
        }

        render()
        {
        return <OriginalComponent counter={this.state.counter} 
        incrementCount={this.incrementCount}
        {... this.props}
        />
        }
    }
    return NewComponent
}

export default UpdateComponent