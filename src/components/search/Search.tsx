import React from "react";
import Result from "./Result.tsx";
import axios from "axios";
import {connect} from "react-redux";
import {setSearch} from "../../redux/reducer/SearchReducer.ts";



interface StateProps {
    setSearch: (value: string) => void,
    city: string;
    cities: string;
    showCities: number;
    updateCity: (city: string) => void;
    updateShowCities: (status: number) => void;
}

class Search extends React.Component< StateProps>  {
    state = {
        city: '',
        cities: '',
        showCities: 0,
    }

    updateShowCities = (prop: number) => {
        this.setState({showCities: prop})
    }
    updateCity = (prop: string) => {
        this.setState({city: prop})
    }
    handleInputChange = async (event:any) => {
        this.setState({showCities: 1})
        const name = event.target.name
        const value = event.target.value

        this.props.setSearch(value)

        await this.setState({[name]: value})

        await axios.get('https://turkiyeapi.cyclic.app/api/v1/provinces').then((response) => {
            const cities = response.data.data;
            const valueLowercase = value.toLowerCase();
            const matches = cities.filter((element: { name: string }) => {
                const elementLowercase = element.name.toLowerCase();
                return elementLowercase.includes(valueLowercase);
            });
            matches.forEach((match: { name: string }) => {
                this.setState({cities: match.name});
            });
        });
        if (value == '') {
            this.setState({showCities: 0})
        }
    }

    render() {
        return (
            <div>
                <div className="flex item-center bg-amber-50 rounded-md z-10">
                    <svg className="mt-2 m-2" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 512 512" height="20">
                        <path
                            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                    <input type="text" className="rounded-md text-sm p-2 w-28 md:w-96" name="city"
                           value={this.state.city}
                           onChange={this.handleInputChange} placeholder="Şehir Giriniz..."/>
                </div>
                <div className="block z-0">
                    <Result
                        updateCity={this.updateCity} updateShowCities={this.updateShowCities}
                        cities={this.state.cities}
                        showCitiesStatus={this.state.showCities}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, {setSearch})(Search);