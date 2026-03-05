import React, {Component} from 'react';
import LoaderGif from '../../styles/images/loading_spinner.gif';
import './fullpage-loader.scss';

class FullPageLoader extends Component {

    render() { 
        const {loading} = this.props;

        if(!loading) return null;

        return ( 
            <div className="loader-container">
                <div className="loader">
                    <img src={LoaderGif} alt='' style={{width:120}} />
                </div>
            </div>
         );
    }
}

export default FullPageLoader;