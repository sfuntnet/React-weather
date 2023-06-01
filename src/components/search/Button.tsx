import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setResult, setResultStatus} from "../../redux/reducer/ResultReducer.ts";
interface PropsRedux {
    setResultStatus: (status: number) => void;
    setResult: (resp: any[]) => void;
}

interface ResultMapStateProps {
    searchValue: string;
}

class Button extends React.Component<PropsRedux & ResultMapStateProps> {
    onClickSubmit = () => {
        this.props.setResultStatus(1);
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.props.searchValue + '&appid=aee9368ab4b3e538bec75d39005eccf3&units=metric&lang=tr')
            .then((resp: any) => {
                setTimeout(() => {
                    this.props.setResultStatus(3);
                }, 2000);
                this.props.setResult(resp);
            })
            .catch(() => {
                setTimeout(() => {
                    this.props.setResultStatus(2);
                }, 2000);
            });
    };

    render() {
        return (
            <div className="ml-2">
                <button
                    className="bg-orange-300 rounded-md w-36 md:w-72 text-sm font-bold p-2 hover:transition ease-out duration-500 hover:scale-105 hover:bg-orange-400"
                    onClick={this.onClickSubmit}
                >
                    GÖNDER
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: { search: { search: string } }) => ({
    searchValue: state.search.search,
});

export default connect(mapStateToProps, {setResult, setResultStatus})(Button);
