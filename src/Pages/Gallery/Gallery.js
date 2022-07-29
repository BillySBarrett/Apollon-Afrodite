import React, { Component } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



export default class Gallery extends Component {
    
    constructor(props) {
        super(props);
        this.state = {seasons: [
        {id: 1, season: 'Høst 2022', picture:''}, 
        {id: 2, season: 'Sommer 2022', picture:'sommer'}, 
        {id: 3, season: 'Vår 2022', picture:'vår'}, 
        {id: 4, season: 'Vinter 2022', picture:'vinter'}]};
        
    }

    setSeasons(event) {
        console.log(event);
    }

    render() { 
        return (
            <div className="font-display bg-white ">
                <Tabs className="flex flex-row" selectedTabClassName="border-r-0">
                    <TabList className="w-64 pt-16" >
                        {this.state.seasons.map(sea => {
                            return (
                            <Tab className=" border-r-[1px] h-[3rem] flex justify-center items-center text-center border-black border-t-[1px]" >
                                <p>{sea.season}</p>
                            </Tab>

                            );
                        })}
                    <hr className="border-black"></hr>

                    </TabList>

                    <div className="w-full">
                    {this.state.seasons.map(sea => {
                            return (
                            <TabPanel className=" w-full flex items-center flex-col ">
                                <img src={sea.picture} alt="pic"></img>
                                <div className="">
                                    <img src="./images/boots-gallery1.jpeg" alt="Ugg Logo" className="w-96 bg-violet-400"></img>
                                </div>
                            </TabPanel>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        )
    }
}