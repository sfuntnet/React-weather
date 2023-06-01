import React from "react";
import {connect} from "react-redux";
import {setSearch} from "../../redux/reducer/SearchReducer.ts";

interface SetSearchRedux {
    setSearch: (city: string) => void,
}

interface CityProps {
    updateShowCities: (value: number) => void;
    updateCity: (city: string) => void;
    showCitiesStatus: number;
    cities: string;
}

class Result extends React.Component<SetSearchRedux & CityProps> {

    getCity = (city: string) => {
        this.props.updateShowCities(0)
        this.props.updateCity(city)
        this.props.setSearch(city)
    }

    render() {
        const {showCitiesStatus} = this.props;

        const {cities} = this.props;


        return (
            <div>
                {showCitiesStatus == 1 ? <div className="bg-amber-50 overflow-y-auto max-h-40  rounded-md mt-1 p-1">
                    <div className="scrollbar-hide">
                        <a href="#"><p
                            className="md:text-xl text-center" onClick={() => this.getCity(cities)}>{cities}</p>
                        </a>
                    </div>
                </div> : ''}
            </div>
        )
    }
}

// @ts-ignore
const mapStateToProps = () => ({})

export default connect(mapStateToProps, {setSearch})(Result);