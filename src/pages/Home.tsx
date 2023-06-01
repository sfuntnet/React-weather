import React from "react";
import Search from '../components/search/Search.tsx';
import Button from "../components/search/Button.tsx";
import Weather from "../components/result/Weather.tsx";

interface StateProps {
    city: string;
    cities: string;
    showCities: number;
    updateCity: (city: string) => void;
    updateShowCities: (status: number) => void;
}
class Home extends React.Component<StateProps> {
    render() {

        return (
            <div>
                <div>
                    <div className=" mt-40 md:mt-80 ">
                        <h2 className=" block flex justify-center  font-bold text-2xl md:text-5xl md:mr-32">HAVA DURUMU</h2>
                    </div>
                    <div className="flex justify-center mt-10 md:mt-10">
                        <div className="grid grid-cols-2">
                            <Search
                                city={this.props.city}
                                cities={this.props.cities}
                                showCities={this.props.showCities}
                                updateCity={this.props.updateCity}
                                updateShowCities={this.props.updateShowCities}
                            />
                            <Button/>
                        </div>
                    </div>
                    <Weather/>
                </div>
            </div>

        )
    }
}


export default Home;